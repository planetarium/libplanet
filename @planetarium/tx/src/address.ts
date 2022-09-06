import { Encodable } from "bencodex";

export type Address = Uint8Array;  // TODO: proper type definition

export function encodeAddress(address: Address): Encodable {
  if (address.length !== 20) {
    throw new TypeError(`Address must be 20 bytes long, but got ${
      address.length} bytes.`);
  }
  return address.buffer;
}
