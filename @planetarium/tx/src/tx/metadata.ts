import { Encodable } from "bencodex";
import { Address, encodeAddress, encodeAddressSet } from "../address";
import { BlockHash, encodeBlockHash } from "../blockhash";
import { encodePublicKey, PublicKey } from "../key";

/**
 * Represents an unsigned transaction without actions.  Corresponds to
 * Libplanet's `TxMetadata`.
 */
export interface TxMetadata {
  nonce: bigint;
  publicKey: PublicKey;
  signer: Address;  // TODO: This field can be derived from publicKey.
  timestamp: Date;
  updatedAddresses: Set<Address>;
  genesisHash: BlockHash | null;
}

const NONCE_KEY = Buffer.from([0x6e]); // 'n'
const SIGNER_KEY = Buffer.from([0x73]); // 's'
const GENESIS_HASH_KEY = Buffer.from([0x67]); // 'g'
const UPDATED_ADDRESSES_KEY = Buffer.from([0x75]); // 'u'
const PUBLIC_KEY_KEY = Buffer.from([0x70]); // 'p'
const TIMESTAMP_KEY = Buffer.from([0x74]); // 't'

export function encodeTxMetadata(
  metadata: TxMetadata
): Map<string | Buffer,Encodable> {
  const updatedAddresses = encodeAddressSet(metadata.updatedAddresses);
  const timestamp = metadata.timestamp.toISOString()
    .replace(/Z$/, "000Z");
  const dict = new Map<string | Buffer, Encodable>([
    [NONCE_KEY, metadata.nonce],
    [SIGNER_KEY, encodeAddress(metadata.signer)],
    [UPDATED_ADDRESSES_KEY, updatedAddresses],
    [PUBLIC_KEY_KEY, encodePublicKey(metadata.publicKey)],
    [TIMESTAMP_KEY, timestamp],
  ]);
  if (metadata.genesisHash !== null) {
    dict.set(GENESIS_HASH_KEY, encodeBlockHash(metadata.genesisHash));
  }
  return dict;
}
