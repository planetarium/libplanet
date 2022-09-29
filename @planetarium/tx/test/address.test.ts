import { test } from "vitest";
import * as fc from "fast-check";
import { encodeAddress, encodeAddressSet } from "../src/address";
import { compareUint8Array } from "../src/binary";
import { bytesEqual } from "./bytes";

test("encodeAddress", () => {
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 20, maxLength: 20 }),
      (bytes: Uint8Array) => {
        const addr = encodeAddress(bytes);
        return addr instanceof ArrayBuffer && bytesEqual(addr, bytes);
      },
    ),
  );
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 0, maxLength: 19 }),
      (shortBytes: Uint8Array) => {
        try {
          encodeAddress(shortBytes);
        } catch (e) {
          return e instanceof TypeError && e.message.includes("20 bytes");
        }
      },
    ),
  );
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 21 }),
      (longBytes: Uint8Array) => {
        try {
          encodeAddress(longBytes);
        } catch (e) {
          return e instanceof TypeError && e.message.includes("20 bytes");
        }
      },
    ),
  );
});

function hex(bytes: ArrayBuffer | Uint8Array): string {
  const u8a = bytes instanceof ArrayBuffer ? new Uint8Array(bytes) : bytes;
  return Array.from(u8a)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

test("encodeAddressSet", () => {
  fc.assert(
    fc.property(
      fc.uniqueArray(fc.uint8Array({ minLength: 20, maxLength: 20 })),
      (addresses: Uint8Array[]) => {
        const set = new Set(addresses);
        const checks = new Set(addresses.map(hex));
        const encoded = encodeAddressSet(set);
        if (!(encoded instanceof Array)) return false;
        let prev: ArrayBuffer | null = null;
        for (const v of encoded) {
          if (!(v instanceof ArrayBuffer)) return false;
          if (v.byteLength != 20 || !checks.has(hex(v))) return false;
          if (prev != null && compareUint8Array(prev, v) >= 0) return false;
          checks.delete(hex(v));
          prev = v;
        }
        return checks.size < 1;
      },
    ),
  );
});
