import { inspect } from "node:util";
import { encode, RecordView } from "@planetarium/bencodex";
import { expect, test } from "vitest";
import {
  type Mint,
  type Transfer,
  encodeMint,
  encodeTransfer,
  encodeSystemAction,
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

test("encodeSystemAction", () => {
  const mint: Mint = {
    type: "mint",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    },
  };
  expect(encodeSystemAction(mint)).toBeBencoded(
    new RecordView(
      {
        type_id: 0n,
        values: encodeMint(mint),
      },
      "text",
    ),
  );
  expect(encode(encodeSystemAction(mint))).toEqual(
    encode(
      new RecordView(
        {
          type_id: 0n,
          values: encodeMint(mint),
        },
        "text",
      ),
    ),
  );
  const transfer: Transfer = {
    type: "transfer",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    },
  };
  expect(encodeSystemAction(transfer)).toEqual(
    new RecordView(
      {
        type_id: 1n,
        values: encodeTransfer(transfer),
      },
      "text",
    ),
  );
  expect(encode(encodeSystemAction(transfer))).toEqual(
    encode(
      new RecordView(
        {
          type_id: 1n,
          values: encodeTransfer(transfer),
        },
        "text",
      ),
    ),
  );
});

test("encodeMint", () => {
  const mint: Mint = {
    type: "mint",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    },
  };
  const encoded = encodeMint(mint);
  expect(inspect(encoded, { compact: false })).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();
});

test("encodeTransfer", () => {
  const transfer: Transfer = {
    type: "transfer",
    recipient: addressA,
    amount: {
      rawValue: 12500n,
      currency: FOO,
    },
  };
  const encoded = encodeTransfer(transfer);
  expect(inspect(encoded, { compact: false })).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();
});
