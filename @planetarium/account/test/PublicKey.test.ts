import { Message } from "../src/Message";
import { PublicKey } from "../src/PublicKey";
import { Signature } from "../src/Signature";
import { describe, expect, test } from "vitest";

describe("PublicKey", () => {
  const compHex =
    "02472a659c7e655cbcf688997863fb9c7a7139635929429bdc9f75f10c60ed8070";
  const uncompHex =
    "04472a659c7e655cbcf688997863fb9c7a7139635929429bdc9f75f10c60ed807" +
    "0302b403f1fb65851e90ccc75838b0346d052d5431e8baa64ec677d62be463170";
  test("fromBytes()", () => {
    // TODO: Test with a compressed pubkey with 0x03 header
    const compBytes = Buffer.from(compHex, "hex");

    // TypedArray() constructor refers to the memory if it takes an
    // ArrayBuffer/Buffer, but it copies the memory if it takes a view
    // (e.g. Uint8Array).  The below code calls the constructor twice by
    // intention (to copy the data):
    const inputCompBytes = new Uint8Array(new Uint8Array(compBytes));
    const pubKey = PublicKey.fromBytes(inputCompBytes, "compressed");

    expect(pubKey.toHex("compressed")).toBe(compHex);
    expect(pubKey.toHex("uncompressed")).toBe(uncompHex);

    // The inputCompBytes should not affect the RawPrivateKey instance which
    // was created from it:
    inputCompBytes.fill(0, 0, inputCompBytes.length);
    expect(pubKey.toHex("compressed")).toBe(compHex);

    const pubKey2 = PublicKey.fromBytes(
      pubKey.toRawBytes("uncompressed"),
      "uncompressed"
    );
    expect(pubKey2.toHex("compressed")).toBe(compHex);

    const invalidType = [] as unknown as Uint8Array;
    expect(() => PublicKey.fromBytes(invalidType, "compressed")).toThrowError(
      /got object/i
    );

    const invalidCompLength = new Uint8Array(32);
    expect(() =>
      PublicKey.fromBytes(invalidCompLength, "compressed")
    ).toThrowError(/got 32 bytes/i);

    const invalidCompHeader = new Uint8Array(33);
    invalidCompHeader[0] = 0x04;
    expect(() =>
      PublicKey.fromBytes(invalidCompHeader, "compressed")
    ).toThrowError(/got 0x04/i);

    const invalidUncompLength = new Uint8Array(64);
    expect(() =>
      PublicKey.fromBytes(invalidUncompLength, "uncompressed")
    ).toThrowError(/got 64 bytes/i);

    const invalidUncompHeader = new Uint8Array(65);
    invalidUncompHeader[0] = 0x02;
    expect(() =>
      PublicKey.fromBytes(invalidUncompHeader, "uncompressed")
    ).toThrowError(/got 0x02/i);

    expect(() =>
      PublicKey.fromBytes(
        new Uint8Array(0),
        "invalid" as unknown as "compressed" | "uncompressed"
      )
    ).toThrowError(/invalid.*? form/i);
  });

  test("fromHex()", () => {
    // TODO: Test with a compressed pubkey with 0x03 header
    const pubKey = PublicKey.fromHex(compHex, "compressed");

    expect(pubKey.toHex("compressed")).toBe(compHex);
    expect(pubKey.toHex("uncompressed")).toBe(uncompHex);

    const pubKey2 = PublicKey.fromHex(
      pubKey.toHex("uncompressed"),
      "uncompressed"
    );
    expect(pubKey2.toHex("compressed")).toBe(compHex);

    const invalidType = [] as unknown as string;
    expect(() => PublicKey.fromHex(invalidType, "compressed")).toThrowError(
      /got object/i
    );

    const invalidCompLength = "0".repeat(65);
    expect(() =>
      PublicKey.fromHex(invalidCompLength, "compressed")
    ).toThrowError(/got 65 hexadigits/i);

    const invalidCompHeader = "04" + "0".repeat(64);
    expect(() =>
      PublicKey.fromHex(invalidCompHeader, "compressed")
    ).toThrowError(/got 0x04/i);

    const invalidUncompLength = "0".repeat(129);
    expect(() =>
      PublicKey.fromHex(invalidUncompLength, "uncompressed")
    ).toThrowError(/got 129 hexadigits/i);

    const invalidUncompHeader = "02" + "0".repeat(128);
    expect(() =>
      PublicKey.fromHex(invalidUncompHeader, "uncompressed")
    ).toThrowError(/got 0x02/i);

    expect(() =>
      PublicKey.fromHex(
        "",
        "invalid" as unknown as "compressed" | "uncompressed"
      )
    ).toThrowError(/invalid.*? form/i);
  });

  test("verify()", async () => {
    const pubKeyBytes = new Uint8Array([
      0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20, 0x42, 0x3b, 0xad, 0x39,
      0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b, 0x33, 0xe3, 0x48, 0x7c,
      0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96, 0xf8, 0xa5, 0x48, 0x34, 0x40, 0xef,
      0xbb, 0xef, 0x06, 0x57, 0xac, 0x2e, 0xf6, 0xc6, 0xee, 0x05, 0xdb, 0x06,
      0xa9, 0x45, 0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a, 0x16, 0x95, 0xe5, 0xce,
      0x1a, 0x3d, 0x3c, 0x76, 0xdb,
    ]);
    const pubKey = PublicKey.fromBytes(pubKeyBytes, "uncompressed");
    const msg = new Uint8Array([
      0x64, 0x37, 0x3a, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x6c, 0x65,
      0x31, 0x30, 0x3a, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f, 0x6b, 0x65,
      0x79, 0x36, 0x35, 0x3a, 0x04, 0xb5, 0xa2, 0x4a, 0xa2, 0x11, 0x27, 0x20,
      0x42, 0x3b, 0xad, 0x39, 0xa0, 0x20, 0x51, 0x82, 0x37, 0x9d, 0x6f, 0x2b,
      0x33, 0xe3, 0x48, 0x7c, 0x9a, 0xb6, 0xcc, 0x8f, 0xc4, 0x96, 0xf8, 0xa5,
      0x48, 0x34, 0x40, 0xef, 0xbb, 0xef, 0x06, 0x57, 0xac, 0x2e, 0xf6, 0xc6,
      0xee, 0x05, 0xdb, 0x06, 0xa9, 0x45, 0x32, 0xfd, 0xa7, 0xdd, 0xc4, 0x4a,
      0x16, 0x95, 0xe5, 0xce, 0x1a, 0x3d, 0x3c, 0x76, 0xdb, 0x39, 0x3a, 0x72,
      0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x32, 0x30, 0x3a, 0x8a,
      0xe7, 0x2e, 0xfa, 0xb0, 0x95, 0x94, 0x66, 0x51, 0x12, 0xe6, 0xd4, 0x9d,
      0xfd, 0x19, 0x41, 0x53, 0x8c, 0xf3, 0x74, 0x36, 0x3a, 0x73, 0x65, 0x6e,
      0x64, 0x65, 0x72, 0x32, 0x30, 0x3a, 0xb6, 0xc0, 0x3d, 0xe5, 0x7d, 0xdf,
      0x03, 0x69, 0xc7, 0x20, 0x7d, 0x2d, 0x11, 0x3a, 0xdf, 0xf8, 0x20, 0x51,
      0x99, 0xcf, 0x39, 0x3a, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
      0x70, 0x32, 0x37, 0x3a, 0x32, 0x30, 0x31, 0x38, 0x2d, 0x30, 0x31, 0x2d,
      0x30, 0x32, 0x54, 0x30, 0x33, 0x3a, 0x30, 0x34, 0x3a, 0x30, 0x35, 0x2e,
      0x30, 0x30, 0x36, 0x30, 0x30, 0x30, 0x5a, 0x65,
    ]);
    const sigBytes = new Uint8Array([
      0x30, 0x44, 0x02, 0x20, 0x62, 0xcf, 0x8a, 0x04, 0x41, 0x9c, 0x6a, 0x03,
      0xba, 0xf5, 0x5d, 0xe1, 0x0d, 0x9b, 0x20, 0x0e, 0xda, 0xa9, 0xdf, 0x2b,
      0x9b, 0xf0, 0xcf, 0x98, 0x9f, 0xd6, 0x5d, 0x71, 0xc5, 0x5c, 0x35, 0x60,
      0x02, 0x20, 0x2a, 0xa5, 0x59, 0x69, 0xd0, 0xad, 0xb1, 0x5e, 0x9e, 0x70,
      0x8d, 0x83, 0x00, 0xe1, 0x05, 0x31, 0x1e, 0x1a, 0x16, 0x16, 0x5d, 0xb7,
      0x3e, 0xd8, 0xf4, 0xf0, 0x05, 0x1d, 0x9f, 0x13, 0x81, 0xfd,
    ]);
    const sig = Signature.fromBytes(sigBytes);
    expect(pubKey.verify(msg, sig)).toBeTruthy();

    const invalidMsgType = "" as unknown as Message;
    await expect(() => pubKey.verify(invalidMsgType, sig)).rejects.toThrowError(
      /got string/
    );

    const invalidSigType = "" as unknown as Signature;
    await expect(() => pubKey.verify(msg, invalidSigType)).rejects.toThrowError(
      /got string/
    );
  });

  test("toRawBytes()", () => {
    const pubKey = PublicKey.fromHex(compHex, "compressed");
    expect(pubKey.toRawBytes("uncompressed")).toStrictEqual(
      new Uint8Array(Buffer.from(uncompHex, "hex"))
    );

    const pubKey2 = PublicKey.fromHex(uncompHex, "uncompressed");
    expect(pubKey2.toRawBytes("compressed")).toStrictEqual(
      new Uint8Array(Buffer.from(compHex, "hex"))
    );

    const invalidForm = "invalid" as unknown as "compressed" | "uncompressed";
    expect(() => pubKey.toRawBytes(invalidForm)).toThrowError(
      /invalid .*? form/i
    );
  });

  test("toHex()", () => {
    const pubKey = PublicKey.fromHex(compHex, "compressed");
    expect(pubKey.toHex("uncompressed")).toBe(uncompHex);

    const pubKey2 = PublicKey.fromHex(uncompHex, "uncompressed");
    expect(pubKey2.toHex("compressed")).toBe(compHex);

    const invalidForm = "invalid" as unknown as "compressed" | "uncompressed";
    expect(() => pubKey.toHex(invalidForm)).toThrowError(/invalid .*? form/i);
  });
});
