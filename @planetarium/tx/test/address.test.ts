import { test } from "vitest";
import * as fc from "fast-check";
import { encodeAddress } from "../src/address";
import { bytesEqual } from "./bytes";

test("encodeAddress", () => {
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 20, maxLength: 20 }),
      (bytes: Uint8Array) => {
        const addr = encodeAddress(bytes);
        return addr instanceof ArrayBuffer && bytesEqual(addr, bytes);
      }
    )
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
      }
    )
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
      }
    )
  );
});
