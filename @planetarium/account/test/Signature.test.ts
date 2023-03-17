import { Signature } from "../src/Signature";
import { inspect } from "node:util";
import { describe, expect, test } from "vitest";

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

    // A signature with high S is disallowed:
    const sigWithHighS = new Uint8Array([
      0x30, 0x45, 0x02, 0x20, 0x38, 0x43, 0x16, 0xdb, 0x7c, 0xfe, 0x12, 0x60,
      0x6e, 0xa0, 0x54, 0x29, 0xd4, 0x4c, 0x10, 0xe0, 0xff, 0x8b, 0xd2, 0x8c,
      0xc8, 0x73, 0xff, 0x10, 0x41, 0x4e, 0xbc, 0x40, 0x10, 0xe5, 0x9e, 0xe7,
      0x02, 0x21, 0x00, 0xb7, 0xf4, 0x80, 0xd3, 0xcc, 0x9f, 0x65, 0x35, 0xcd,
      0xe2, 0x96, 0x02, 0x63, 0xf7, 0x80, 0xeb, 0x82, 0xae, 0x5b, 0xe5, 0xdb,
      0xba, 0x1d, 0x43, 0xaa, 0x16, 0x35, 0x62, 0xc6, 0x75, 0x85, 0xa7,
    ]);
    expect(() => Signature.fromBytes(sigWithHighS)).throws(
      RangeError,
      "high S",
    );
  });

  test("fromHex()", () => {
    const sig = Signature.fromHex(sigHex);
    expect(sig.toHex()).toBe(sigHex);
    expect(sig.toBytes()).toStrictEqual(sigBytes);

    // A signature with high S is disallowed:
    const sigWithHighS =
      "30450220384316db7cfe12606ea05429d44c10e0ff8bd28cc873ff10414ebc4010e59ee" +
      "7022100b7f480d3cc9f6535cde2960263f780eb82ae5be5dbba1d43aa163562c67585a7";
    expect(() => Signature.fromHex(sigWithHighS)).throws(RangeError, "high S");
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
