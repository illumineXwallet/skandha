/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type UserOperationStruct = {
  sender: string;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGasLimit: BigNumberish;
  verificationGasLimit: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymasterAndData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface LuminexTokenPaymasterInterface extends utils.Interface {
  functions: {
    "COST_OF_POST()": FunctionFragment;
    "WRAPPED_NATIVE()": FunctionFragment;
    "accountFactory()": FunctionFragment;
    "addStake(uint32)": FunctionFragment;
    "beneficiary()": FunctionFragment;
    "buyNativeForToken(address,uint256,uint256,address)": FunctionFragment;
    "debt(address,address)": FunctionFragment;
    "deposit()": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "getDeposit()": FunctionFragment;
    "getHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint48,uint48,address,uint256)": FunctionFragment;
    "oracles(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "parsePaymasterAndData(bytes)": FunctionFragment;
    "payDebt(address,address)": FunctionFragment;
    "postOp(uint8,bytes,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBeneficiary(address)": FunctionFragment;
    "setOracle(address,address)": FunctionFragment;
    "setSignerTrust(address,bool)": FunctionFragment;
    "skim(address,address)": FunctionFragment;
    "skim(address)": FunctionFragment;
    "tokensRequiredForNative(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "trustedSigners(address)": FunctionFragment;
    "unlockStake()": FunctionFragment;
    "validatePaymasterUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    "withdrawStake(address)": FunctionFragment;
    "withdrawTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "COST_OF_POST"
      | "WRAPPED_NATIVE"
      | "accountFactory"
      | "addStake"
      | "beneficiary"
      | "buyNativeForToken"
      | "debt"
      | "deposit"
      | "entryPoint"
      | "getDeposit"
      | "getHash"
      | "oracles"
      | "owner"
      | "parsePaymasterAndData"
      | "payDebt"
      | "postOp"
      | "renounceOwnership"
      | "setBeneficiary"
      | "setOracle"
      | "setSignerTrust"
      | "skim(address,address)"
      | "skim(address)"
      | "tokensRequiredForNative"
      | "transferOwnership"
      | "trustedSigners"
      | "unlockStake"
      | "validatePaymasterUserOp"
      | "withdrawStake"
      | "withdrawTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "COST_OF_POST",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WRAPPED_NATIVE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accountFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyNativeForToken",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "debt",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHash",
    values: [
      UserOperationStruct,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "oracles",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "parsePaymasterAndData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "payDebt",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "postOp",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBeneficiary",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracle",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSignerTrust",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "skim(address,address)",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "skim(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensRequiredForNative",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedSigners",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatePaymasterUserOp",
    values: [
      UserOperationStruct,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStake",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "COST_OF_POST",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WRAPPED_NATIVE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyNativeForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "parsePaymasterAndData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "postOp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSignerTrust",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "skim(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "skim(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensRequiredForNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedSigners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatePaymasterUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;

  events: {
    "AccountDebt(address,uint256)": EventFragment;
    "BeneficiarySet(address)": EventFragment;
    "OracleSet(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountDebt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiarySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AccountDebtEventObject {
  token: string;
  debt: BigNumber;
}
export type AccountDebtEvent = TypedEvent<
  [string, BigNumber],
  AccountDebtEventObject
>;

export type AccountDebtEventFilter = TypedEventFilter<AccountDebtEvent>;

export interface BeneficiarySetEventObject {
  beneficiary: string;
}
export type BeneficiarySetEvent = TypedEvent<
  [string],
  BeneficiarySetEventObject
>;

export type BeneficiarySetEventFilter = TypedEventFilter<BeneficiarySetEvent>;

export interface OracleSetEventObject {
  token: string;
  oracle: string;
}
export type OracleSetEvent = TypedEvent<[string, string], OracleSetEventObject>;

export type OracleSetEventFilter = TypedEventFilter<OracleSetEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface LuminexTokenPaymaster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LuminexTokenPaymasterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    COST_OF_POST(overrides?: CallOverrides): Promise<[BigNumber]>;

    WRAPPED_NATIVE(overrides?: CallOverrides): Promise<[string]>;

    accountFactory(overrides?: CallOverrides): Promise<[string]>;

    addStake(
      unstakeDelaySec: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    buyNativeForToken(
      _token: string,
      tokenValue: BigNumberish,
      minNative: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    debt(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: BigNumberish,
      validAfter: BigNumberish,
      token: string,
      maxAllowance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    oracles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    parsePaymasterAndData(
      paymasterAndData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, number, string, BigNumber, string] & {
        validUntil: number;
        validAfter: number;
        token: string;
        maxAllowance: BigNumber;
        signature: string;
      }
    >;

    payDebt(
      debtor: string,
      token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    postOp(
      mode: BigNumberish,
      context: BytesLike,
      actualGasCost: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setBeneficiary(
      newBeneficiary: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOracle(
      token: string,
      oracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setSignerTrust(
      signer: string,
      trust: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "skim(address,address)"(
      token: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "skim(address)"(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    tokensRequiredForNative(
      _token: string,
      _minNative: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _tokenRequired: BigNumber }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    trustedSigners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unlockStake(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      maxCost: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawStake(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  COST_OF_POST(overrides?: CallOverrides): Promise<BigNumber>;

  WRAPPED_NATIVE(overrides?: CallOverrides): Promise<string>;

  accountFactory(overrides?: CallOverrides): Promise<string>;

  addStake(
    unstakeDelaySec: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  buyNativeForToken(
    _token: string,
    tokenValue: BigNumberish,
    minNative: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  debt(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getHash(
    userOp: UserOperationStruct,
    validUntil: BigNumberish,
    validAfter: BigNumberish,
    token: string,
    maxAllowance: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  oracles(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  parsePaymasterAndData(
    paymasterAndData: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [number, number, string, BigNumber, string] & {
      validUntil: number;
      validAfter: number;
      token: string;
      maxAllowance: BigNumber;
      signature: string;
    }
  >;

  payDebt(
    debtor: string,
    token: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  postOp(
    mode: BigNumberish,
    context: BytesLike,
    actualGasCost: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setBeneficiary(
    newBeneficiary: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOracle(
    token: string,
    oracle: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setSignerTrust(
    signer: string,
    trust: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "skim(address,address)"(
    token: string,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "skim(address)"(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  tokensRequiredForNative(
    _token: string,
    _minNative: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  trustedSigners(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unlockStake(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  validatePaymasterUserOp(
    userOp: UserOperationStruct,
    userOpHash: BytesLike,
    maxCost: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawStake(
    withdrawAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawTo(
    withdrawAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    COST_OF_POST(overrides?: CallOverrides): Promise<BigNumber>;

    WRAPPED_NATIVE(overrides?: CallOverrides): Promise<string>;

    accountFactory(overrides?: CallOverrides): Promise<string>;

    addStake(
      unstakeDelaySec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    beneficiary(overrides?: CallOverrides): Promise<string>;

    buyNativeForToken(
      _token: string,
      tokenValue: BigNumberish,
      minNative: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    debt(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: BigNumberish,
      validAfter: BigNumberish,
      token: string,
      maxAllowance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    oracles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    parsePaymasterAndData(
      paymasterAndData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, number, string, BigNumber, string] & {
        validUntil: number;
        validAfter: number;
        token: string;
        maxAllowance: BigNumber;
        signature: string;
      }
    >;

    payDebt(
      debtor: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    postOp(
      mode: BigNumberish,
      context: BytesLike,
      actualGasCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBeneficiary(
      newBeneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(
      token: string,
      oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSignerTrust(
      signer: string,
      trust: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "skim(address,address)"(
      token: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "skim(address)"(
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensRequiredForNative(
      _token: string,
      _minNative: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedSigners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unlockStake(overrides?: CallOverrides): Promise<void>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      maxCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { context: string; validationData: BigNumber }
    >;

    withdrawStake(
      withdrawAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccountDebt(address,uint256)"(
      token?: string | null,
      debt?: null
    ): AccountDebtEventFilter;
    AccountDebt(
      token?: string | null,
      debt?: null
    ): AccountDebtEventFilter;

    "BeneficiarySet(address)"(beneficiary?: null): BeneficiarySetEventFilter;
    BeneficiarySet(beneficiary?: null): BeneficiarySetEventFilter;

    "OracleSet(address,address)"(
      token?: string | null,
      oracle?: null
    ): OracleSetEventFilter;
    OracleSet(
      token?: string | null,
      oracle?: null
    ): OracleSetEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    COST_OF_POST(overrides?: CallOverrides): Promise<BigNumber>;

    WRAPPED_NATIVE(overrides?: CallOverrides): Promise<BigNumber>;

    accountFactory(overrides?: CallOverrides): Promise<BigNumber>;

    addStake(
      unstakeDelaySec: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    buyNativeForToken(
      _token: string,
      tokenValue: BigNumberish,
      minNative: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    debt(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: BigNumberish,
      validAfter: BigNumberish,
      token: string,
      maxAllowance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    parsePaymasterAndData(
      paymasterAndData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payDebt(
      debtor: string,
      token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    postOp(
      mode: BigNumberish,
      context: BytesLike,
      actualGasCost: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setBeneficiary(
      newBeneficiary: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOracle(
      token: string,
      oracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setSignerTrust(
      signer: string,
      trust: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "skim(address,address)"(
      token: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "skim(address)"(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    tokensRequiredForNative(
      _token: string,
      _minNative: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    trustedSigners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockStake(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      maxCost: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawStake(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    COST_OF_POST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WRAPPED_NATIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accountFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addStake(
      unstakeDelaySec: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyNativeForToken(
      _token: string,
      tokenValue: BigNumberish,
      minNative: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    debt(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHash(
      userOp: UserOperationStruct,
      validUntil: BigNumberish,
      validAfter: BigNumberish,
      token: string,
      maxAllowance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parsePaymasterAndData(
      paymasterAndData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payDebt(
      debtor: string,
      token: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    postOp(
      mode: BigNumberish,
      context: BytesLike,
      actualGasCost: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setBeneficiary(
      newBeneficiary: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOracle(
      token: string,
      oracle: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setSignerTrust(
      signer: string,
      trust: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "skim(address,address)"(
      token: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "skim(address)"(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    tokensRequiredForNative(
      _token: string,
      _minNative: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    trustedSigners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockStake(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    validatePaymasterUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      maxCost: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawStake(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
