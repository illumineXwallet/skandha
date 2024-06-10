import {
  BigNumber,
  BigNumberish,
  BytesLike,
  providers,
  utils,
  Wallet,
} from "ethers";
import { Config } from "../config";
import { NetworkConfig } from "../interfaces";
import { UserOpValidationService } from "./UserOpValidation";
import { UserOperationStruct } from "types/lib/executor/contracts/EntryPoint";
import { LuminexTokenPaymaster__factory } from "types/lib/executor/contracts";
import RpcError from "types/lib/api/errors/rpc-error";
import { ECDSA_DUMMY_SIGNATURE } from "params/lib";

/**
 * Used to prove that user op can really be executed
 */
export class LuminexPaymasterService {
  private cachedRelayers = new Map<
    string,
    [number, Wallet | providers.JsonRpcSigner]
  >();

  constructor(
    private provider: providers.JsonRpcProvider,
    private config: Config,
    private networkConfig: NetworkConfig,
    private validationService: UserOpValidationService
  ) {}

  async signPaymaster(
    entryPoint: string,
    userOp: UserOperationStruct,
    paymaster: string,
    token: string,
    maxAllowance: BigNumberish
  ) {
    const relayer = await this.getRelayerCached(paymaster);

    const augmentedUserOp = {
      ...userOp,
      paymasterAndData: utils.hexConcat([
        paymaster,
        this.stringifyData(0, 0, token, maxAllowance),
        ECDSA_DUMMY_SIGNATURE,
      ]),
    };

    const estimationResult = await this.validationService.validateForEstimation(
      augmentedUserOp,
      entryPoint
    );

    // TODO validate that callGasLimit is enough

    const now = Math.floor(Date.now() / 1000);
    const validAfter = now + this.networkConfig.luminex.proverUntilShift;
    const validUntil = now + this.networkConfig.luminex.proverSignatureTTL;

    const hash = await this.hash(
      userOp,
      paymaster,
      validUntil,
      validAfter,
      token,
      maxAllowance
    );

    const signature = await relayer.signMessage(hash);
    return {
      paymasterAndData: utils.hexConcat([
        paymaster,
        this.stringifyData(validUntil, validAfter, token, maxAllowance),
        signature,
      ]),
    };
  }

  private async hash(
    userOp: UserOperationStruct,
    paymaster: string,
    validUntil: BigNumberish,
    validAfter: BigNumberish,
    token: string,
    maxAllowance: BigNumberish
  ): Promise<BytesLike> {
    const paymasterContract = LuminexTokenPaymaster__factory.connect(
      paymaster,
      this.provider
    );
    return await paymasterContract.callStatic.getHash(
      userOp,
      validUntil,
      validAfter,
      token,
      maxAllowance
    );
  }

  private stringifyData(
    validUntil: BigNumberish,
    validAfter: BigNumberish,
    token: string,
    maxAllowance: BigNumberish
  ): string {
    /*
     * Packed data struct
     *
     * |  validAfter  |  validUntil  |           token           |
     * |    48 bits   |    48 bits   |          160 bits         |
     */

    const shiftedAfter = BigNumber.from(validAfter).mul(
      BigNumber.from(2).pow(160 + 48)
    );
    const shiftedUntil = BigNumber.from(validUntil).mul(
      BigNumber.from(2).pow(160)
    );
    const packedData = shiftedAfter
      .add(shiftedUntil)
      .add(BigNumber.from(token));

    return utils.defaultAbiCoder.encode(
      ["uint256", "uint256"],
      [packedData, maxAllowance]
    );
  }

  private async getRelayerCached(paymaster: string) {
    paymaster = paymaster.toLowerCase();
    if (this.cachedRelayers.has(paymaster)) {
      const [cachedSince, relayer] = this.cachedRelayers.get(paymaster)!;
      if (
        cachedSince + this.networkConfig.luminex.relayerCacheTTL <
        Date.now() / 1000
      )
        return relayer;
      else this.cachedRelayers.delete(paymaster);
    }

    const paymasterContract = LuminexTokenPaymaster__factory.connect(
      paymaster,
      this.provider
    );

    const relayers = this.config.getRelayers() ?? [];
    for (const relayer of relayers) {
      const isTrusted = await paymasterContract.callStatic.trustedSigners(
        await relayer.getAddress()
      );

      if (!isTrusted) continue;

      this.cachedRelayers.set(paymaster, [Date.now() / 1000, relayer]);

      return relayer;
    }

    throw new RpcError(`No relayer recognized by Paymaster ${paymaster}`);
  }
}
