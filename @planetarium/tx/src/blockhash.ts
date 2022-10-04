import { Encodable } from "bencodex";

export type BlockHash = Uint8Array;  // TODO: proper type definition

export function encodeBlockHash(blockHash: BlockHash): Encodable {
  if (blockHash.length !== 32) {
    throw new TypeError(`BlockHash must be 32 bytes long, but got ${
      blockHash.length} bytes.`);
  }
  return blockHash.buffer;
}
