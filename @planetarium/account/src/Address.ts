import { keccak_256 } from "@noble/hashes/sha3";
import { PublicKey } from "./PublicKey.js";

if (typeof globalThis.TextEncoder === "undefined") {
  // FIXME: This is a workaround for the lack of TextEncoder in Vitest.
  globalThis.TextEncoder = require("node:util").TextEncoder;
}

function toHex(bytes: Uint8Array): string {
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i].toString(16).padStart(2, "0");
  }
  return hex;
}

function checksum(hex: string): string {
  hex = hex.toLowerCase();

  const hexAsciiIntoBytes = new TextEncoder!().encode(hex);
  const hashedAddr = toHex(keccak_256(hexAsciiIntoBytes));
  let checksum = "";
  for (let nibbleIdx = 0; nibbleIdx < hex.length; nibbleIdx++) {
    const nibbleHex = hex.charAt(nibbleIdx);
    if (nibbleHex.match(/^[0-9]$/)) {
      checksum += nibbleHex;
      continue;
    } else {
      const nibble = parseInt(hashedAddr.charAt(nibbleIdx), 16);
      checksum += nibble > 7 ? nibbleHex.toUpperCase() : nibbleHex;
    }
  }

  return checksum;
}

export class Address {
  #bytes: Uint8Array;

  private constructor(bytes: Uint8Array) {
    this.#bytes = bytes;
  }

  static deriveFrom(publicKey: PublicKey): Address {
    if (!(publicKey instanceof PublicKey)) {
      throw new Error(`Expected PublicKey, got ${typeof publicKey}`);
    }
    const pub = publicKey.toRawBytes("uncompressed").slice(1);
    const digest = keccak_256(pub);
    const addr = digest.slice(digest.length - 20);
    return new Address(addr);
  }

  static fromHex(hex: string, ignoreChecksum: boolean = false): Address {
    if (typeof hex !== "string") {
      throw new Error(`Expected a string, but ${typeof hex} was given.`);
    } else if (!hex.match(/^(0x)?[0-9a-f]{40}$/i)) {
      throw new Error(
        `Expected a string of 40 hexadecimals, but ${JSON.stringify(
          hex
        )} was given.`
      );
    }

    if (hex.match(/^0x/i)) {
      hex = hex.slice(2);
    }

    const addr = new Address(new Uint8Array(Buffer.from(hex, "hex")));
    if (ignoreChecksum) {
      return addr;
    }

    const expectedChecksum = checksum(hex);
    if (expectedChecksum !== hex) {
      throw new Error(
        `Expected checksum is 0x${expectedChecksum}, but 0x${hex} was given.`
      );
    }

    return addr;
  }

  static fromBytes(bytes: Uint8Array) {
    if (!(bytes instanceof Uint8Array)) {
      throw new Error(`Expected a Uint8Array, but ${typeof bytes} was given.`);
    }

    if (bytes.length !== 20) {
      throw new Error(
        `Expected 20 bytes, but ${bytes.length} bytes were given.`
      );
    }

    return new Address(bytes);
  }

  toBytes(): Uint8Array {
    return this.#bytes;
  }

  toHex(casing: "checksum" | "lower" = "checksum"): string {
    const hex = toHex(this.#bytes);
    return casing === "checksum" ? checksum(hex) : hex;
  }

  toString(): string {
    return `0x${this.toHex()}`;
  }
}

export default Address;
