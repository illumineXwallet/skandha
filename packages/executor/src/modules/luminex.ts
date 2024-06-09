import RpcError from "types/lib/api/errors/rpc-error";
import * as RpcErrorCodes from "types/lib/api/errors/rpc-error-codes";
import { UserOperationStruct } from "types/lib/executor/contracts/EntryPoint";
import { NetworkConfig } from "../interfaces";
import { SignPaymasterArgs } from "./interfaces";
import { SignPaymasterResponse } from "types/src/api/interfaces";
import { LuminexPaymasterService } from "../services";

export class Luminex {
  constructor(
    private networkConfig: NetworkConfig,
    private proverService: LuminexPaymasterService
  ) {}

  async signPaymaster(args: SignPaymasterArgs): Promise<SignPaymasterResponse> {
    const userOp = args.userOp as unknown as UserOperationStruct;
    const entryPoint = args.entryPoint;
    if (!this.validateEntryPoint(entryPoint)) {
      throw new RpcError("Invalid Entrypoint", RpcErrorCodes.INVALID_REQUEST);
    }

    if (!this.validatePaymaster(args.paymaster)) {
      throw new RpcError("Invalid Paymaster", RpcErrorCodes.INVALID_REQUEST);
    }

    return await this.proverService.signPaymaster(
      args.entryPoint,
      userOp,
      args.paymaster,
      args.token,
      args.maxAllowance
    );
  }

  private validateEntryPoint(entryPoint: string): boolean {
    return (
      (this.networkConfig.entryPoints as any) &&
      this.networkConfig.entryPoints.findIndex(
        (ep) => ep.toLowerCase() === entryPoint.toLowerCase()
      ) !== -1
    );
  }

  private validatePaymaster(paymaster: string): boolean {
    return (
      this.networkConfig.whitelistedEntities.paymaster?.find(
        (ep) => ep.toLowerCase() === paymaster.toLowerCase()
      ) != null
    );
  }
}
