import {
  type Mint,
  type SetValidator,
  type Transfer,
  encodeMint,
  encodeSetValidator,
  encodeSystemAction,
  encodeTransfer
} from "../src/action";
import { Address } from "../src/address";
import { Currency } from "../src/assets";
import { PublicKey } from "../src/key";
import { Validator } from "../src/validator";
import { fromHex } from "./hex";
import { encode } from "bencodex";
import { expect, test } from "vitest";

const FOO: Currency = {
  ticker: "FOO",
  decimalPlaces: 2,
  minters: null,
  totalSupplyTrackable: true,
  maximumSupply: null,
};
const addressA: Address = fromHex("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");
const publicKeyA: PublicKey = fromHex("033369e95dbfd970dd9a7b4df31dcf5004d7cfd63289d26cc42bbdd01e25675b6f");

test("encodeSystemAction", () => {
  const mint: Mint = {
    type: "mint",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    }
  };
  expect(encodeSystemAction(mint)).toEqual({
    type_id: 0,
    values: encodeMint(mint),
  });
  expect(encode(encodeSystemAction(mint))).toEqual(encode({
    type_id: 0,
    values: encodeMint(mint),
  }));
  const transfer: Transfer = {
    type: "transfer",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    }
  };
  expect(encodeSystemAction(transfer)).toEqual({
    type_id: 1,
    values: encodeTransfer(transfer),
  });
  expect(encode(encodeSystemAction(transfer))).toEqual(encode({
    type_id: 1,
    values: encodeTransfer(transfer),
  }));
});

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

test("setValidator", () => {
  const validator: Validator = {
    publicKey: publicKeyA,
    power: 1n,
  }
  const setValidator: SetValidator = {
    type: "setValidator",
    validator: validator
  };
  const encoded = encodeSetValidator(setValidator);
  expect(encoded).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();
});
