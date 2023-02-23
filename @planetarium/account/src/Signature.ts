import * as secp256k1 from "@noble/secp256k1";

export class Signature {
  readonly #signature: secp256k1.Signature;

  private constructor(signature: secp256k1.Signature) {
    this.#signature = signature;
  }

  static fromBytes(bytes: Uint8Array): Signature {
    // NOTE: We decided to distinguish fromBytes from fromHex, although they
    // call the same function in @noble/secp256k1 which takes both a hex string
    // and a Uint8Array.
    return new Signature(secp256k1.Signature.fromDER(bytes));
  }

  static fromHex(hex: string): Signature {
    // NOTE: We decided to distinguish fromBytes from fromHex, although they
    // call the same function in @noble/secp256k1 which takes both a hex string
    // and a Uint8Array.
    return new Signature(secp256k1.Signature.fromDER(hex));
  }

  toBytes(): Uint8Array {
    return this.#signature.toDERRawBytes();
  }

  toHex(): string {
    return this.#signature.toDERHex();
  }

  toString(): string {
    return this.toHex();
  }

  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { ${this.toHex()} }`;
  }
}

export default Signature;
