import { expect, test } from "vitest";
import { Transfer } from "../src/action";
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

test("encodeTransfer", () => {
  const transfer: Transfer = {
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    }
  };
  expect(transfer).toMatchSnapshot();
});
