import {
  BencodexDictionary,
  Dictionary,
  Key,
  Value,
} from "@planetarium/bencodex";
import { Address, encodeAddress, encodeAddressSet } from "../address.js";
import { BlockHash, encodeBlockHash } from "../blockhash.js";
import { encodePublicKey, PublicKey } from "../key.js";

/**
 * Represents an unsigned transaction without actions.  Corresponds to
 * Libplanet's `TxMetadata`.
 */
export interface TxMetadata {
  nonce: bigint;
  publicKey: PublicKey;
  signer: Address; // TODO: This field can be derived from publicKey.
  timestamp: Date;
  updatedAddresses: Set<Address>;
  genesisHash: BlockHash | null;
}

const NONCE_KEY = new Uint8Array([0x6e]); // 'n'
const SIGNER_KEY = new Uint8Array([0x73]); // 's'
const GENESIS_HASH_KEY = new Uint8Array([0x67]); // 'g'
const UPDATED_ADDRESSES_KEY = new Uint8Array([0x75]); // 'u'
const PUBLIC_KEY_KEY = new Uint8Array([0x70]); // 'p'
const TIMESTAMP_KEY = new Uint8Array([0x74]); // 't'

export function encodeTxMetadata(metadata: TxMetadata): Dictionary {
  const updatedAddresses = encodeAddressSet(metadata.updatedAddresses);
  const timestamp = metadata.timestamp.toISOString().replace(/Z$/, "000Z");
  const pairs: [Key, Value][] = [
    [NONCE_KEY, metadata.nonce],
    [SIGNER_KEY, encodeAddress(metadata.signer)],
    [UPDATED_ADDRESSES_KEY, updatedAddresses],
    [PUBLIC_KEY_KEY, encodePublicKey(metadata.publicKey)],
    [TIMESTAMP_KEY, timestamp],
  ];
  if (metadata.genesisHash !== null) {
    pairs.push([GENESIS_HASH_KEY, encodeBlockHash(metadata.genesisHash)]);
  }
  return new BencodexDictionary(pairs);
}
