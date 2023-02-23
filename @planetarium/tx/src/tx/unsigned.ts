import { Encodable } from "bencodex";
import { CustomAction, encodeSystemAction, SystemAction } from "../action";
import { encodeTxMetadata, TxMetadata } from "./metadata";

const SYSTEM_ACTION_KEY = Buffer.from([0x41]); // 'A'
const CUSTOM_ACTION_KEY = Buffer.from([0x61]); // 'a'

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
  metadata: UnsignedTxWithSystemAction 
): Encodable {
  const dict = encodeTxMetadata(metadata);
  dict.set(SYSTEM_ACTION_KEY, encodeSystemAction(metadata.systemAction));
  return dict;
}

/**
 * Encodes an unsigned transaction with custom actions.
 * @param tx An unsigned transaction with custom actions.
 * @returns An encoded transaction.
 */
export function encodeUnsignedTxWithCustomActions(
  metadata: UnsignedTxWithCustomActions
): Encodable {
  const dict = encodeTxMetadata(metadata);
  dict.set(CUSTOM_ACTION_KEY, metadata.customActions);
  return dict;
}
