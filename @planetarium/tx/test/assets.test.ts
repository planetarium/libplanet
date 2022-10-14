import { encode } from "bencodex";
import { expect, test } from "vitest";
import { Address } from "../src/address";
import {
  Currency,
  encodeCurrency,
  getCurrencyHash,
  getMajorUnit,
  getMinorUnit,
  getSign
} from "../src/assets";
import { fromHex, toHex } from "./hex";

if (globalThis.crypto == null) {
  // FIXME: This is a workaround for the lack of Web Crypto API in Vitest.
  globalThis.crypto = require("node:crypto");
}

const addressA: Address = fromHex("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");
const addressB: Address = fromHex("5003712B63baAB98094aD678EA2B24BcE445D076");

test("encodeCurrency", () => {
  const encoded = encodeCurrency({
    ticker: "FOO",
    decimalPlaces: 2,
    minters: null,
    totalSupplyTrackable: false,
    maximumSupply: null,
  });
  expect(encoded).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();

  const encoded2 = encodeCurrency({
    ticker: "BAR",
    decimalPlaces: 0,
    minters: new Set([addressA, addressB]),
    totalSupplyTrackable: true,
    maximumSupply: { major: 100n, minor: 0n },
  });
  expect(encoded2).toMatchSnapshot();
  expect(encode(encoded2)).toMatchSnapshot();
});

test("getCurrencyHash", async () => {
  const legacy = await getCurrencyHash({
    ticker: "GOLD",
    decimalPlaces: 2,
    minters: new Set([addressA]),
    totalSupplyTrackable: false,
    maximumSupply: null,
  });
  expect(toHex(legacy)).toMatchSnapshot();

  const legacy2 = await getCurrencyHash({
    ticker: "NCG",
    decimalPlaces: 8,
    minters: new Set([addressA, addressB]),
    totalSupplyTrackable: false,
    maximumSupply: null,
  });
  expect(toHex(legacy2)).toMatchSnapshot();

  const legacy3 = await getCurrencyHash({
    ticker: "FOO",
    decimalPlaces: 0,
    minters: new Set([]),
    totalSupplyTrackable: false,
    maximumSupply: null,
  });
  expect(toHex(legacy3)).toMatchSnapshot();

  const legacy4 = await getCurrencyHash({
    ticker: "BAR",
    decimalPlaces: 1,
    minters: null,
    totalSupplyTrackable: false,
    maximumSupply: null,
  });
  expect(toHex(legacy4)).toMatchSnapshot();

  const uncapped = await getCurrencyHash({
    ticker: "BAZ",
    decimalPlaces: 1,
    minters: null,
    totalSupplyTrackable: true,
    maximumSupply: null,
  });
  expect(toHex(uncapped)).toMatchSnapshot();

  const capped = await getCurrencyHash({
    ticker: "BAZ",
    decimalPlaces: 1,
    minters: null,
    totalSupplyTrackable: true,
    maximumSupply: { major: 100n, minor: 0n },
  });
  expect(toHex(capped)).toMatchSnapshot();
});

const FOO: Currency = {
  ticker: "FOO",
  decimalPlaces: 2,
  minters: null,
  totalSupplyTrackable: true,
  maximumSupply: null,
};

const fooA = { rawValue: 12345n, currency: FOO };
const fooB = { rawValue: 45609n, currency: FOO };
const fooC = { rawValue: 10n, currency: FOO };
const fooD = { rawValue: 9n, currency: FOO };
const fooE = { rawValue: -78901n, currency: FOO };
const fooF = { rawValue: -2n, currency: FOO };
const fooG = { rawValue: 12300n, currency: FOO };
const fooH = { rawValue: 0n, currency: FOO };

test("getSign", () => {
  expect(getSign(fooA)).toBe(1);
  expect(getSign(fooB)).toBe(1);
  expect(getSign(fooC)).toBe(1);
  expect(getSign(fooD)).toBe(1);
  expect(getSign(fooE)).toBe(-1);
  expect(getSign(fooF)).toBe(-1);
  expect(getSign(fooG)).toBe(1);
  expect(getSign(fooH)).toBe(0);
});

test("getMajorUnit", () => {
  expect(getMajorUnit(fooA)).toBe(123n);
  expect(getMajorUnit(fooB)).toBe(456n);
  expect(getMajorUnit(fooC)).toBe(0n);
  expect(getMajorUnit(fooD)).toBe(0n);
  expect(getMajorUnit(fooE)).toBe(789n);
  expect(getMajorUnit(fooF)).toBe(0n);
  expect(getMajorUnit(fooG)).toBe(123n);
  expect(getMajorUnit(fooH)).toBe(0n);
});

test("getMinorUnit", () => {
  expect(getMinorUnit(fooA)).toBe(45n);
  expect(getMinorUnit(fooB)).toBe(9n);
  expect(getMinorUnit(fooC)).toBe(10n);
  expect(getMinorUnit(fooD)).toBe(9n);
  expect(getMinorUnit(fooE)).toBe(1n);
  expect(getMinorUnit(fooF)).toBe(2n);
  expect(getMinorUnit(fooG)).toBe(0n);
  expect(getMinorUnit(fooH)).toBe(0n);
});
