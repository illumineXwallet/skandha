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

const MAX_TIME = BigNumber.from("0xffffffffffff"); // type(uint48).max
const MIN_TIME = BigNumber.from(0); // type(uint48).min
const DUMMY_SIGNATURE = "0x" + "ff".repeat(65); // 65 bytes of FF

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
        this.stringifyData(MAX_TIME, MIN_TIME, token, maxAllowance),
        DUMMY_SIGNATURE,
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
    return utils.defaultAbiCoder.encode(
      ["uint48", "uint48", "address", "uint256"],
      [validUntil, validAfter, token, maxAllowance]
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
