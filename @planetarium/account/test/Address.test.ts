import { Address } from "../src/Address";
import { PublicKey } from "../src/PublicKey";
import * as fc from "fast-check";
import { describe, expect, test } from "vitest";
import { bytesEquals, toHex } from "./utils";

describe("Address", () => {
  test("deriveFrom()", () => {
    var pubKey = PublicKey.fromBytes(
      new Uint8Array([
        0x03, 0x43, 0x8b, 0x93, 0x53, 0x89, 0xa7, 0xeb, 0xf8, 0x38, 0xb3, 0xae,
        0x41, 0x25, 0xbd, 0x28, 0x50, 0x6a, 0xa2, 0xdd, 0x45, 0x7f, 0x20, 0xaf,
        0xc8, 0x43, 0x72, 0x9d, 0x3e, 0x7d, 0x60, 0xd7, 0x28,
      ]),
      "compressed"
    );
    var expectedAddress = Address.fromBytes(
      new Uint8Array([
        0xd4, 0x1f, 0xad, 0xf6, 0x1b, 0xad, 0xf5, 0xbe, 0x2d, 0xe6, 0x0e, 0x9f,
        0xc3, 0x23, 0x0c, 0x0a, 0x8a, 0x43, 0x90, 0xf0,
      ])
    );
    expect(Address.deriveFrom(pubKey)).toHaveEqualBytes(expectedAddress);
    expect(() => Address.deriveFrom(123 as unknown as PublicKey)).toThrowError(
      /got number/i
    );
  });

  test("fromHex() with ignoreChecksum: true", () => {
    fc.assert(
      fc.property(
        fc.constantFrom("", "0x", "0X"),
        fc.uint8Array({ minLength: 20, maxLength: 20 }),
        (prefix, addressBytes: Uint8Array) => {
          const hex = prefix + toHex(addressBytes);
          return (
            bytesEquals(Address.fromHex(hex, true).toBytes(), addressBytes) &&
            bytesEquals(
              Address.fromHex(hex.toUpperCase(), true).toBytes(),
              addressBytes
            )
          );
        }
      )
    );
    expect(() => Address.fromHex(123 as unknown as string)).toThrowError(
      /number was given/i
    );
    fc.assert(
      fc.property(
        fc.constantFrom("", "0x", "0X"),
        fc.oneof(
          fc.uint8Array({ maxLength: 19 }),
          fc.uint8Array({ minLength: 21 })
        ),
        (prefix: string, addressBytes: Uint8Array) => {
          const hex = prefix + toHex(addressBytes);
          try {
            Address.fromHex(hex, true);
          } catch (e) {
            return e.toString().includes("40 hexa");
          }
          return false;
        }
      )
    );
  });

  test("fromBytes()", () => {
    fc.assert(
      fc.property(
        fc.uint8Array({ minLength: 20, maxLength: 20 }),
        (addressBytes: Uint8Array) => {
          return bytesEquals(
            Address.fromBytes(addressBytes).toBytes(),
            addressBytes
          );
        }
      )
    );
    expect(() => Address.fromBytes(123 as unknown as Uint8Array)).toThrowError(
      /number was given/i
    );
    fc.assert(
      fc.property(
        fc.oneof(
          fc.uint8Array({ maxLength: 19 }),
          fc.uint8Array({ minLength: 21 })
        ),
        (addressBytes: Uint8Array) => {
          try {
            Address.fromBytes(addressBytes);
          } catch (e) {
            return e.toString().includes(`${addressBytes.length} bytes`);
          }
          return false;
        }
      )
    );
  });

  test("fromHex() with ignoreChecksum: false", () => {
    let expected = Address.fromBytes(
      new Uint8Array([
        0x5a, 0xae, 0xb6, 0x5, 0x3f, 0x3e, 0x94, 0xc9, 0xb9, 0xa0, 0x9f, 0x33,
        0x66, 0x94, 0x35, 0xe7, 0xef, 0x1b, 0xea, 0xed,
      ])
    );
    expect(
      Address.fromHex("5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed", false)
    ).toHaveEqualBytes(expected);

    expected = Address.fromBytes(
      new Uint8Array([
        0xfb, 0x69, 0x16, 0x9, 0x5c, 0xa1, 0xdf, 0x60, 0xbb, 0x79, 0xce, 0x92,
        0xce, 0x3e, 0xa7, 0x4c, 0x37, 0xc5, 0xd3, 0x59,
      ])
    );
    expect(
      Address.fromHex("0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359", false)
    ).toHaveEqualBytes(expected);

    expected = Address.fromBytes(
      new Uint8Array([
        0xdb, 0xf0, 0x3b, 0x40, 0x7c, 0x01, 0xe7, 0xcd, 0x3c, 0xbe, 0xa9, 0x95,
        0x09, 0xd9, 0x3f, 0x8d, 0xdd, 0xc8, 0xc6, 0xfb,
      ])
    );
    expect(
      Address.fromHex("0XdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB")
    ).toHaveEqualBytes(expected);

    expect(() =>
      Address.fromHex("D1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDB")
    ).toThrowError(/checksum/i);
  });

  test("toBytes()", () => {
    fc.assert(
      fc.property(
        fc.uint8Array({ minLength: 20, maxLength: 20 }),
        (addressBytes: Uint8Array) => {
          return bytesEquals(
            Address.fromHex(toHex(addressBytes), true).toBytes(),
            addressBytes
          );
        }
      )
    );
  });

  test("toHex('checksum')", () => {
    const address = Address.fromBytes(
      new Uint8Array([
        0xdb, 0xf0, 0x3b, 0x40, 0x7c, 0x01, 0xe7, 0xcd, 0x3c, 0xbe, 0xa9, 0x95,
        0x09, 0xd9, 0x3f, 0x8d, 0xdd, 0xc8, 0xc6, 0xfb,
      ])
    );
    expect(address.toHex("checksum")).toBe(
      "dbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB"
    );
  });

  test("toHex('lower')", () => {
    const address = Address.fromBytes(
      new Uint8Array([
        0xdb, 0xf0, 0x3b, 0x40, 0x7c, 0x01, 0xe7, 0xcd, 0x3c, 0xbe, 0xa9, 0x95,
        0x09, 0xd9, 0x3f, 0x8d, 0xdd, 0xc8, 0xc6, 0xfb,
      ])
    );
    expect(address.toHex("lower")).toBe(
      "dbf03b407c01e7cd3cbea99509d93f8dddc8c6fb"
    );
  });

  test("toString()", () => {
    const address = Address.fromBytes(
      new Uint8Array([
        0xdb, 0xf0, 0x3b, 0x40, 0x7c, 0x01, 0xe7, 0xcd, 0x3c, 0xbe, 0xa9, 0x95,
        0x09, 0xd9, 0x3f, 0x8d, 0xdd, 0xc8, 0xc6, 0xfb,
      ])
    );
    expect(address.toString()).toBe(
      "0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB"
    );
  });
});
