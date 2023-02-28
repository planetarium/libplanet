import { Signature } from "../src/Signature";
import { describe, expect, test } from "vitest";
import { inspect } from "node:util";

describe("Signature", () => {
  const sigBytes = new Uint8Array([
    0x30, 0x44, 0x02, 0x20, 0x62, 0xcf, 0x8a, 0x04, 0x41, 0x9c, 0x6a, 0x03,
    0xba, 0xf5, 0x5d, 0xe1, 0x0d, 0x9b, 0x20, 0x0e, 0xda, 0xa9, 0xdf, 0x2b,
    0x9b, 0xf0, 0xcf, 0x98, 0x9f, 0xd6, 0x5d, 0x71, 0xc5, 0x5c, 0x35, 0x60,
    0x02, 0x20, 0x2a, 0xa5, 0x59, 0x69, 0xd0, 0xad, 0xb1, 0x5e, 0x9e, 0x70,
    0x8d, 0x83, 0x00, 0xe1, 0x05, 0x31, 0x1e, 0x1a, 0x16, 0x16, 0x5d, 0xb7,
    0x3e, 0xd8, 0xf4, 0xf0, 0x05, 0x1d, 0x9f, 0x13, 0x81, 0xfd,
  ]);
  const sigHex =
    "3044022062cf8a04419c6a03baf55de10d9b200edaa9df2b9bf0cf989fd65d71c55c35" +
    "6002202aa55969d0adb15e9e708d8300e105311e1a16165db73ed8f4f0051d9f1381fd";

  test("fromBytes()", () => {
    const inputBytes = new Uint8Array(sigBytes);
    const sig = Signature.fromBytes(inputBytes);
    expect(sig.toBytes()).toStrictEqual(sigBytes);
    expect(sig.toHex()).toBe(sigHex);

    // The inputBytes should not affect the Signature instance which
    // was created from it:
    inputBytes.fill(0, 0, inputBytes.length);
    expect(sig.toBytes()).toStrictEqual(sigBytes);
    expect(sig.toHex()).toBe(sigHex);
  });

  test("fromHex()", () => {
    const sig = Signature.fromHex(sigHex);
    expect(sig.toHex()).toBe(sigHex);
    expect(sig.toBytes()).toStrictEqual(sigBytes);
  });

  test("toBytes()", () => {
    const sig = Signature.fromBytes(sigBytes);
    expect(sig.toBytes()).toStrictEqual(sigBytes);
  });

  test("toHex()", () => {
    const sig = Signature.fromBytes(sigBytes);
    expect(sig.toHex()).toBe(sigHex);
  });

  test("toString()", () => {
    const sig = Signature.fromBytes(sigBytes);
    expect(sig.toString()).toBe(sigHex);
  });

  test("[nodejs.util.inspect.custom]()", () => {
    const sig = Signature.fromBytes(sigBytes);
    expect(inspect(sig)).toBe(`Signature { ${sig.toString()} }`);
  });
});
