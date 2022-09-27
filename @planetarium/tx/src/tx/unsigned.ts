import { Encodable } from "bencodex";
import { encodeSystemAction, SystemAction } from "../action";
import { encodeTxMetadata, TxMetadata } from "./metadata";

const SYSTEM_ACTION_KEY = Buffer.from([0x41]); // 'A'

export interface UnsignedTxWithSystemAction extends TxMetadata {
  systemAction: SystemAction;
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
