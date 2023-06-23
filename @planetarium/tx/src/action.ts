import { RecordView, Value } from "@planetarium/bencodex";
import { Address, encodeAddress } from "./address.js";
import { encodeCurrency, FungibleAssetValue } from "./assets.js";

/**
 * @deprecated The system action will not work since Libplanet 1.2.0 version.
 */
export type SystemAction = Mint | Transfer;

/**
 * @deprecated The system action will not work since Libplanet 1.2.0 version.
 */
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

/**
 * @deprecated The system action will not work since Libplanet 1.2.0 version.
 */
export interface Mint {
  type: "mint";
  recipient: Address;
  amount: FungibleAssetValue;
}

/**
 * @deprecated The system action will not work since Libplanet 1.2.0 version.
 */
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

/**
 * @deprecated The system action will not work since Libplanet 1.2.0 version.
 */
export interface Transfer {
  type: "transfer";
  recipient: Address;
  amount: FungibleAssetValue;
}

/**
 * @deprecated The system action will not work since Libplanet 1.2.0 version.
 */
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
