import { Encodable } from "bencodex";
import { Address, encodeAddress } from "./address";
import { encodeCurrency, FungibleAssetValue } from "./assets";

export type SystemAction = Mint | Transfer;

export function encodeSystemAction(action: SystemAction): Encodable {
  switch (action.type) {
  case "mint":
    return encodeMint(action);
  case "transfer":
    return encodeTransfer(action);
  default:
    throw new TypeError(`Unknown action type: ${action["type"]}`);
  }
}

export interface Mint {
  type: "mint";
  recipient: Address;
  amount: FungibleAssetValue;
}

export function encodeMint(action: Mint): Encodable {
  return {
    recipient: encodeAddress(action.recipient),
    currency: encodeCurrency(action.amount.currency),
    amount: action.amount.rawValue,
  };
}

export interface Transfer {
  type: "transfer";
  recipient: Address;
  amount: FungibleAssetValue;
}

export function encodeTransfer(action: Transfer): Encodable {
  return {
    recipient: encodeAddress(action.recipient),
    currency: encodeCurrency(action.amount.currency),
    amount: action.amount.rawValue,
  };
}
