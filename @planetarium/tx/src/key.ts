import { Encodable } from "bencodex";

export type PublicKey = Uint8Array;  // TODO: proper type definition

export function encodePublicKey(publicKey: PublicKey): Encodable {
  if (publicKey.length < 1) {
    throw new TypeError("Public key must not be empty.");
  }
  return publicKey.buffer;
}
