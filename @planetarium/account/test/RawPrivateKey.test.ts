import * as fc from "fast-check";
import * as secp256k1 from "@noble/secp256k1";
import { PublicKey } from "../src/PublicKey";
import { RawPrivateKey } from "../src/RawPrivateKey";
import { describe, expect, test } from "vitest";

describe("RawPrivateKey", () => {
  test("fromBytes()", () => {
    const bytes = Buffer.from(
      "5760ea321bdd7ac302469e192aa527b6458e3a1e0ddf6c76d9618aca6f653b4d",
      "hex"
    );

    // TypedArray() constructor refers to the memory if it takes an
    // ArrayBuffer/Buffer, but it copies the memory if it takes a view
    // (e.g. Uint8Array).  The below code calls the constructor twice by
    // intention (to copy the data):
    const inputBytes = new Uint8Array(new Uint8Array(bytes));
    const rawKey = RawPrivateKey.fromBytes(inputBytes);
    expect(rawKey.toBytes()).toStrictEqual(new Uint8Array(bytes));

    const pubKeyBytes = new Uint8Array(
      Buffer.from(
        "02472a659c7e655cbcf688997863fb9c7a7139635929429bdc9f75f10c60ed8070",
        "hex"
      )
    );
    expect(rawKey.publicKey.toRawBytes("compressed")).toStrictEqual(
      pubKeyBytes
    );

    // The inputBytes should not affect the RawPrivateKey instance which
    // was created from it:
    inputBytes.fill(0, 0, inputBytes.length);
    expect(rawKey.toBytes()).toStrictEqual(new Uint8Array(bytes));
    expect(rawKey.publicKey.toRawBytes("compressed")).toStrictEqual(
      pubKeyBytes
    );

    const invalidType = [] as unknown as Uint8Array;
    expect(() => RawPrivateKey.fromBytes(invalidType)).toThrowError(
      /got object/i
    );

    const invalidLength = new Uint8Array(31);
    expect(() => RawPrivateKey.fromBytes(invalidLength)).toThrowError(
      /got 31 bytes/i
    );

    const invalidKey = new Uint8Array(32);
    expect(() => RawPrivateKey.fromBytes(invalidKey)).toThrowError(/invalid/i);
  });

  test("fromHex()", () => {
    const hex =
      "5760ea321bdd7ac302469e192aa527b6458e3a1e0ddf6c76d9618aca6f653b4d";
    const rawKey = RawPrivateKey.fromHex(hex);
    expect(rawKey.toBytes()).toStrictEqual(
      new Uint8Array(Buffer.from(hex, "hex"))
    );

    const pubKeyBytes = new Uint8Array(
      Buffer.from(
        "02472a659c7e655cbcf688997863fb9c7a7139635929429bdc9f75f10c60ed8070",
        "hex"
      )
    );
    expect(rawKey.publicKey.toRawBytes("compressed")).toStrictEqual(
      pubKeyBytes
    );

    const invalidType = new Uint8Array(32) as unknown as string;
    expect(() => RawPrivateKey.fromHex(invalidType)).toThrowError(
      /got object/i
    );

    const invalidLength = "0".repeat(62);
    expect(() => RawPrivateKey.fromHex(invalidLength)).toThrowError(
      /got 62 hexadigits/i
    );

    const invalidKey = "0".repeat(64);
    expect(() => RawPrivateKey.fromHex(invalidKey)).toThrowError(/invalid/i);
  });

  test("generate()", () => {
    const rawKey = RawPrivateKey.generate();
    const keyBytes = rawKey.toBytes();
    expect(keyBytes.length).toBe(32);
    expect(keyBytes).toSatisfy(secp256k1.utils.isValidPrivateKey);
  });

  test("publicKey", () => {
    const key = RawPrivateKey.fromHex(
      "5760ea321bdd7ac302469e192aa527b6458e3a1e0ddf6c76d9618aca6f653b4d"
    );
    expect(key.publicKey).toBeInstanceOf(PublicKey);
    expect(key.publicKey.toHex("compressed")).toStrictEqual(
      "02472a659c7e655cbcf688997863fb9c7a7139635929429bdc9f75f10c60ed8070"
    );
  });

  test("sign()", async () => {
    // TODO: Compare with `planet key sign` command
    // TODO: Turn the RawPrivateKey fixture into an arbitrary.
    const key = RawPrivateKey.generate();
    const pubKey = key.publicKey;
    await fc.assert(
      fc.asyncProperty(fc.uint8Array(), async (msg: Uint8Array) => {
        const sig = await key.sign(msg);
        return await pubKey.verify(msg, sig);
      })
    );
  });

  test("exportPrivateKey()", async () => {
    const key = RawPrivateKey.generate();
    const exported = await key.exportPrivateKey();
    expect(exported).toBeInstanceOf(RawPrivateKey);
    expect(exported).toHaveEqualBytes(key);
  });

  test("toBytes()", () => {
    const originalBytes = new Uint8Array(
      Buffer.from(
        "5760ea321bdd7ac302469e192aa527b6458e3a1e0ddf6c76d9618aca6f653b4d",
        "hex"
      )
    );
    const rawKey = RawPrivateKey.fromBytes(originalBytes);
    const bytes = rawKey.toBytes();
    expect(bytes).toStrictEqual(originalBytes);

    // The returned bytes should be a copy, and should not affect the original
    // bytes in the RawPrivateKey instance:
    bytes.fill(0, 0, bytes.length);
    expect(rawKey.toBytes()).toStrictEqual(originalBytes);
  });
});
