import { test, expect } from "vitest";
import * as fc from "fast-check";
import { encodePublicKey } from "../src/key";
import { bytesEqual } from "./bytes";

test("encodePublicKey", () => {
  fc.assert(
    fc.property(
      fc.uint8Array({ minLength: 1 }),
      (bytes: Uint8Array) => {
        const key = encodePublicKey(bytes);
        return key instanceof ArrayBuffer && bytesEqual(key, bytes);
      }
    )
  );
  expect(() => encodePublicKey(new Uint8Array(0))).throws(TypeError, /empty/i);
});
