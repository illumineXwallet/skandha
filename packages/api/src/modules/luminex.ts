import { RpcMethodValidator } from "../utils";
import { Luminex } from "executor/lib/modules/luminex";
import { SignPaymasterDto } from "../dto/SignPaymaster.dto";
import { SignPaymasterResponse } from "types/src/api/interfaces";

export class LuminexAPI {
  constructor(private luminexModule: Luminex) {}

  @RpcMethodValidator(SignPaymasterDto)
  async signPaymaster(
    args: SignPaymasterDto
  ): Promise<SignPaymasterResponse> {
    return await this.luminexModule.signPaymaster(args);
  }
}
