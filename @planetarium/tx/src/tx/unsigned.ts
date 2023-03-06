import { BencodexDictionary, Dictionary } from "@planetarium/bencodex";
import { CustomAction, encodeSystemAction, SystemAction } from "../action.js";
import { encodeTxMetadata, TxMetadata } from "./metadata.js";

const SYSTEM_ACTION_KEY = new Uint8Array([0x41]); // 'A'
const CUSTOM_ACTION_KEY = new Uint8Array([0x61]); // 'a'

export interface UnsignedTxWithSystemAction extends TxMetadata {
  systemAction: SystemAction;
}

export interface UnsignedTxWithCustomActions extends TxMetadata {
  customActions: CustomAction[];
}

/**
 * Encodes an unsigned transaction with a system action.
 * @param tx An unsigned transaction with a system action.
 * @returns An encoded transaction.
 */
export function encodeUnsignedTxWithSystemAction(
  metadata: UnsignedTxWithSystemAction,
): Dictionary {
  return new BencodexDictionary([
    ...encodeTxMetadata(metadata),
    [SYSTEM_ACTION_KEY, encodeSystemAction(metadata.systemAction)],
  ]);
}

/**
 * Encodes an unsigned transaction with custom actions.
 * @param tx An unsigned transaction with custom actions.
 * @returns An encoded transaction.
 */
export function encodeUnsignedTxWithCustomActions(
  metadata: UnsignedTxWithCustomActions,
): Dictionary {
  return new BencodexDictionary([
    ...encodeTxMetadata(metadata),
    [CUSTOM_ACTION_KEY, metadata.customActions],
  ]);
}
