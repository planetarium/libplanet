import * as secp256k1 from "@noble/secp256k1";
import { Message, hashMessage } from "./Message.js";
import PublicKey from "./PublicKey.js";
import Signature from "./Signature.js";

export class RawPrivateKey {
  readonly #privatePart: Uint8Array;
  #publicPart?: PublicKey;

  private constructor(privatePart: Uint8Array) {
    this.#privatePart = privatePart;
  }

  static fromBytes(bytes: Uint8Array): RawPrivateKey {
    if (!(bytes instanceof Uint8Array)) {
      throw new Error(`Expected Uint8Array, but got ${typeof bytes}`);
    } else if (bytes.length !== 32) {
      throw new Error(
        `Incorrect private key length; expected 32 bytes, but got ${bytes.length} bytes`
      );
    } else if (!secp256k1.utils.isValidPrivateKey(bytes)) {
      throw new Error("Invalid private key");
    }

    // NOTE: The bytes should be copied because the original array can be
    // mutated after the key is created.
    return new RawPrivateKey(new Uint8Array(bytes));
  }

  static fromHex(hex: string): RawPrivateKey {
    if (typeof hex !== "string") {
      throw new Error(`Expected string, but got ${typeof hex}`);
    } else if (hex.length !== 64) {
      throw new Error(
        `Incorrect private key length; expected 64 hexadigits, but got ${hex.length} hexadigits`
      );
    }
    const bytes = new Uint8Array(Buffer.from(hex, "hex"));
    if (!secp256k1.utils.isValidPrivateKey(bytes)) {
      throw new Error("Invalid private key");
    }

    return new RawPrivateKey(bytes);
  }

  static generate(): RawPrivateKey {
    return this.fromBytes(secp256k1.utils.randomPrivateKey());
  }

  get publicKey(): PublicKey {
    if (typeof this.#publicPart === "undefined") {
      this.#publicPart = PublicKey.fromBytes(
        secp256k1.getPublicKey(this.#privatePart),
        "uncompressed"
      );
    }

    return this.#publicPart;
  }

  async sign(message: Message): Promise<Signature> {
    const sig = await secp256k1.sign(
      await hashMessage(message),
      this.#privatePart,
      { der: true }
    );
    return Signature.fromBytes(sig);
  }

  exportPrivateKey(): Promise<RawPrivateKey> {
    return Promise.resolve(this);
  }

  toBytes(): Uint8Array {
    // NOTE: The #privatePart should be copied because the returned reference
    // can be mutated after this method is called.
    return new Uint8Array(this.#privatePart);
  }
}

export default RawPrivateKey;
