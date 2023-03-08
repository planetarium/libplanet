import { Encodable } from "bencodex";
import { encodePublicKey, PublicKey } from "./key.js";

export interface Validator {
  publicKey: PublicKey;
  power: bigint;
};

export function encodeValidator(validator: Validator): Encodable {
  const serialized: Encodable = {
    publicKey: encodePublicKey(validator.publicKey),
    power: validator.power,
  };
  return serialized;
}

