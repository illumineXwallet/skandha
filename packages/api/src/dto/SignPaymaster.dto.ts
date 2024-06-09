import {
  IsDefined,
  IsEthereumAddress,
  IsObject,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { SendUserOperationStruct } from "./SendUserOperation.dto";
import { IsBigNumber } from "../utils/is-bignumber";
import { BigNumberish } from "ethers";

export class SignPaymasterDto {
  @IsDefined()
  @IsObject()
  @ValidateNested()
  @Type(() => SendUserOperationStruct)
  userOp!: SendUserOperationStruct;

  @IsEthereumAddress()
  entryPoint!: string;

  @IsEthereumAddress()
  paymaster!: string;

  @IsEthereumAddress()
  token!: string;

  @IsBigNumber()
  maxAllowance!: BigNumberish;
}
