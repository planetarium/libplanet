import { Key, Value } from "@planetarium/bencodex";
import { compareUint8Array } from "./binary.js";

export type Address = Uint8Array; // TODO: proper type definition

export function encodeAddress(address: Address): Key {
  if (address.length !== 20) {
    throw new TypeError(
      `Address must be 20 bytes long, but got ${address.length} bytes.`,
    );
  }
  return address;
}

export function encodeAddressSet(addresses: Set<Address>): Value {
  const array: Address[] = [];
  addresses.forEach((addr) => array.push(addr));
  array.sort(compareUint8Array);
  return array.map(encodeAddress);
}
