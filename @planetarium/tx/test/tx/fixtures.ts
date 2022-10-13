import { fromHex } from "../hex";
import { Currency } from "../../src/assets";

export const FOO: Currency = {
  ticker: "FOO",
  decimalPlaces: 2,
  minters: null,
  totalSupplyTrackable: true,
  maximumSupply: null,
};

export const key1 = {
  private: fromHex(
    "9bf4664ba09a89faeb684b94e69ffde01d26ae14b556204d3f6ab58f61f78418"),
  public: fromHex(
    "0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f"),
  address: fromHex("268344BA46e6CA2A8a5096565548b9018bc687Ce"),
};

export const key2 = {
  private: fromHex(
    "fcf30b333d04ccfeb562f000a32df488e7154949d31ddcac3cf9278acb5786c7"),
  public: fromHex(
    "0215ba27a461a986f4ce7bcda1fd73dc708da767d0405729edaacaad7b7ff60eed"),
  address: fromHex("8a29de186B85560D708451101C4Bf02D63b25c50"),
};
