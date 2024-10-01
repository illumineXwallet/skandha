import { providers } from "ethers";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as sapphire from "@oasisprotocol/sapphire-paratime";
import { Logger } from "types/lib";
import { PerChainMetrics } from "monitoring/lib";
import { IEntryPoint__factory } from "types/lib/executor/contracts";
import { Config } from "../../../config";
import { Bundle, NetworkConfig } from "../../../interfaces";
import { MempoolService } from "../../MempoolService";
import { ReputationService } from "../../ReputationService";
import { BaseRelayer } from "./base";

export class ClassicRelayer extends BaseRelayer {
  constructor(
    logger: Logger,
    chainId: number,
    provider: providers.JsonRpcProvider,
    config: Config,
    networkConfig: NetworkConfig,
    mempoolService: MempoolService,
    reputationService: ReputationService,
    metrics: PerChainMetrics | null
  ) {
    super(
      logger,
      chainId,
      provider,
      config,
      networkConfig,
      mempoolService,
      reputationService,
      metrics
    );
  }

  async sendBundle(bundle: Bundle): Promise<void> {
    const availableIndex = this.getAvailableRelayerIndex();
    if (availableIndex == null) {
      this.logger.error("Relayer: No available relayers");
      return;
    }
    const relayer = this.relayers[availableIndex];
    const mutex = this.mutexes[availableIndex];

    const { entries } = bundle;
    if (!bundle.entries.length) {
      this.logger.error("Relayer: Bundle is empty");
      return;
    }

    await mutex.runExclusive(async (): Promise<void> => {
      const beneficiary = await this.selectBeneficiary(relayer);
      const entryPoint = entries[0]!.entryPoint;
      const entryPointContract = IEntryPoint__factory.connect(
        entryPoint,
        this.provider
      );

      const txRequest = entryPointContract.interface.encodeFunctionData(
        "handleOps",
        [entries.map((entry) => entry.userOp), beneficiary]
      );

      const gasPrice = await this.provider.getGasPrice();

      const transaction = {
        to: entryPoint,
        data: txRequest,
        gasLimit: 15_000_000,
        gasPrice: gasPrice.add(gasPrice.div(4)), // 1.25
        chainId: this.provider._network.chainId,
      };

      await sapphire
        .wrap(relayer)
        .sendTransaction(transaction)
        .then(async ({ hash }) => {
          this.logger.debug(`Bundle submitted: ${hash}`);
          this.logger.debug(
            `User op hashes ${entries.map((entry) => entry.userOpHash)}`
          );
          await this.mempoolService.removeAll(entries);

          await this.provider.waitForTransaction(hash);
        })
        .catch((err: any) => this.handleUserOpFail(entries, err));
    });
  }
}
