import { encode } from "bencodex";
import { expect, test } from "vitest";
import {
  type Mint,
  type Transfer,
  encodeMint,
  encodeTransfer
} from "../src/action";
import { Address } from "../src/address";
import { Currency } from "../src/assets";
import { fromHex } from "./hex";

const FOO: Currency = {
  ticker: "FOO",
  decimalPlaces: 2,
  minters: null,
  totalSupplyTrackable: true,
  maximumSupply: null,
};
const addressA: Address = fromHex("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");

test("encodeMint", () => {
  const mint: Mint = {
    type: "mint",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    }
  };
  const encoded = encodeMint(mint);
  expect(encoded).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();
});

test("encodeTransfer", () => {
  const transfer: Transfer = {
    type: "transfer",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    }
  };
  const encoded = encodeTransfer(transfer);
  expect(encoded).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();
});
