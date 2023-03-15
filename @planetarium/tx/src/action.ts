import { RecordView, Value } from "@planetarium/bencodex";
import { Address, encodeAddress } from "./address.js";
import { encodeCurrency, FungibleAssetValue } from "./assets.js";

export type SystemAction = Mint | Transfer;

export function encodeSystemAction(action: SystemAction): Value {
  switch (action.type) {
    case "mint":
      return new RecordView(
        {
          type_id: 0n,
          values: encodeMint(action),
        },
        "text",
      );
    case "transfer":
      return new RecordView(
        {
          type_id: 1n,
          values: encodeTransfer(action),
        },
        "text",
      );
    default:
      throw new TypeError(`Unknown action type: ${action["type"]}`);
  }
}

export interface Mint {
  type: "mint";
  recipient: Address;
  amount: FungibleAssetValue;
}

export function encodeMint(action: Mint): Value {
  return new RecordView(
    {
      recipient: encodeAddress(action.recipient),
      currency: encodeCurrency(action.amount.currency),
      amount: action.amount.rawValue,
    },
    "text",
  );
}

export interface Transfer {
  type: "transfer";
  recipient: Address;
  amount: FungibleAssetValue;
}

export function encodeTransfer(action: Transfer): Value {
  return new RecordView(
    {
      recipient: encodeAddress(action.recipient),
      currency: encodeCurrency(action.amount.currency),
      amount: action.amount.rawValue,
    },
    "text",
  );
}

export type CustomAction = Value;
