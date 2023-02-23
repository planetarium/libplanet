import * as secp256k1 from "@noble/secp256k1";
import { Message, hashMessage } from "./Message.js";
import Signature from "./Signature.js";

export type PublicKeyForm = "compressed" | "uncompressed";

export class PublicKey {
  readonly #point: secp256k1.Point;

  private constructor(point: secp256k1.Point) {
    this.#point = point;
  }

  static fromBytes(bytes: Uint8Array, form: PublicKeyForm): PublicKey {
    if (!(bytes instanceof Uint8Array)) {
      throw new Error(`Expected a Uint8Array, but got ${typeof bytes}`);
    }
    const header = bytes[0];
    if (form === "compressed") {
      if (bytes.length !== 33) {
        throw new Error(
          `Invalid compressed public key: expected 33 bytes, but got ${bytes.length} bytes`
        );
      } else if (header !== 0x02 && header !== 0x03) {
        throw new Error(
          `Invalid compressed public key: expected either 0x02 or 0x03 as the header, but got 0x${header
            .toString(16)
            .padStart(2, "0")}`
        );
      }
    } else if (form === "uncompressed") {
      if (bytes.length !== 65) {
        throw new Error(
          `Invalid uncompressed public key expected 65 bytes, but got ${bytes.length} bytes`
        );
      } else if (header !== 0x04) {
        throw new Error(
          `Invalid compressed public key: expected 0x04 as the header, but got 0x${header
            .toString(16)
            .padStart(2, "0")}`
        );
      }
    } else {
      throw new Error(
        "Invalid public key form: choose 'compressed' or 'uncompressed'"
      );
    }
    return new PublicKey(secp256k1.Point.fromHex(bytes));
  }

  // TODO: more explicit length checking
  static fromHex(hex: string, form: PublicKeyForm): PublicKey {
    if (typeof hex !== "string") {
      throw new Error(`Expected a string, but got ${typeof hex}`);
    } else if (form === "compressed" && hex.length !== 66) {
      throw new Error(
        `Invalid compressed public key: expected 33 hexadigits, but got ${hex.length} hexadigits`
      );
    } else if (form === "uncompressed" && hex.length !== 130) {
      throw new Error(
        `Invalid uncompressed public key expected 130 hexadigits, but got ${hex.length} hexadigits`
      );
    }
    const bytes = new Uint8Array(Buffer.from(hex, "hex"));
    return this.fromBytes(bytes, form);
  }

  async verify(message: Message, signature: Signature): Promise<boolean> {
    if (!(message instanceof Uint8Array)) {
      throw new Error(`Expected Uint8Array, but got ${typeof message}`);
    } else if (!(signature instanceof Signature)) {
      throw new Error(`Expected Signature, but got ${typeof signature}`);
    }
    const msgHash = await hashMessage(message);
    return secp256k1.verify(signature.toBytes(), msgHash, this.#point);
  }

  toRawBytes(form: PublicKeyForm): Uint8Array {
    if (form !== "compressed" && form !== "uncompressed") {
      throw new Error(
        "Invalid public key form: choose 'compressed' or 'uncompressed'"
      );
    }
    return this.#point.toRawBytes(form === "compressed");
  }

  toHex(form: PublicKeyForm): string {
    if (form !== "compressed" && form !== "uncompressed") {
      throw new Error(
        "Invalid public key form: choose 'compressed' or 'uncompressed'"
      );
    }
    return this.#point.toHex(form === "compressed");
  }
}

export default PublicKey;
