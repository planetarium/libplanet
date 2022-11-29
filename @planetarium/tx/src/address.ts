import { Encodable } from "bencodex";
import { compareUint8Array } from "./binary";

export type Address = Uint8Array;  // TODO: proper type definition

export function encodeAddress(address: Address): Encodable {
  if (address.length !== 20) {
    throw new TypeError(`Address must be 20 bytes long, but got ${
      address.length} bytes.`);
  }
  return address.buffer;
}

export function encodeAddressSet(addresses: Set<Address>): Encodable {
  const array: Address[] = [];
  addresses.forEach(addr => array.push(addr));
  array.sort(compareUint8Array);
  return array.map(encodeAddress);
}
