import { BencodexDictionary, Dictionary, Value } from "@planetarium/bencodex";
import { encodeTxMetadata, TxMetadata } from "./metadata.js";

const ACTION_KEY = new Uint8Array([0x61]); // 'a'

export interface UnsignedTx extends TxMetadata {
  actions: Value[];
}

/**
 * Encodes an unsigned transaction.
 * @param tx An unsigned transaction.
 * @returns An encoded transaction.
 */
export function encodeUnsignedTx(metadata: UnsignedTx): Dictionary {
  return new BencodexDictionary([
    ...encodeTxMetadata(metadata),
    [ACTION_KEY, metadata.actions],
  ]);
}
