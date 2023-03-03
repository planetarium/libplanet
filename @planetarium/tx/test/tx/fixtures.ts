import { Address, RawPrivateKey } from "@planetarium/account";
import { fromHex } from "../hex";
import { Currency } from "../../src/assets";

export const FOO: Currency = {
  ticker: "FOO",
  decimalPlaces: 2,
  minters: null,
  totalSupplyTrackable: true,
  maximumSupply: null,
};

export const account1 = RawPrivateKey.fromHex(
  "9bf4664ba09a89faeb684b94e69ffde01d26ae14b556204d3f6ab58f61f78418",
);

export const address1 = Address.deriveFrom(account1);

// FIXME: Replace this with account1/address1:
export const key1 = {
  private: account1.toBytes(),
  public: account1.publicKey.toBytes("compressed"),
  address: address1.toBytes(),
};

export const account2 = RawPrivateKey.fromHex(
  "fcf30b333d04ccfeb562f000a32df488e7154949d31ddcac3cf9278acb5786c7",
);

export const address2 = Address.deriveFrom(account2);

// FIXME: Replace this with account2/address2:
export const key2 = {
  private: account2.toBytes(),
  public: account2.publicKey.toBytes("compressed"),
  address: address2.toBytes(),
};
