import { test } from "vitest";
import * as fc from "fast-check";
import { encodeBlockHash } from "../src/blockhash";
import { bytesEqual } from "./bytes";

test("encodeBlockHash", () => {
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 32, maxLength: 32 }),
      (bytes: Uint8Array) => {
        const hash = encodeBlockHash(bytes);
        return hash instanceof ArrayBuffer && bytesEqual(hash, bytes);
      }
    )
  );
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 0, maxLength: 31 }),
      (shortBytes: Uint8Array) => {
        try {
          encodeBlockHash(shortBytes);
        } catch (e) {
          return e instanceof TypeError && e.message.includes("32 bytes");
        }
      }
    )
  );
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 33 }),
      (longBytes: Uint8Array) => {
        try {
          encodeBlockHash(longBytes);
        } catch (e) {
          return e instanceof TypeError && e.message.includes("32 bytes");
        }
      }
    )
  );
});
