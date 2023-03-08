import { expect, test } from "vitest";
import { isAccount } from "../src/Account";
import { RawPrivateKey } from "../src/RawPrivateKey";

test("isAccount", async () => {
  expect(isAccount(RawPrivateKey.generate())).toBeTruthy();
  const key = RawPrivateKey.generate();
  expect(
    isAccount({
      publicKey: key.publicKey,
      sign: key.sign.bind(key),
    }),
  ).toBeTruthy();
  expect(isAccount({ publicKey: key.publicKey, sign: 1 })).toBeFalsy();
  expect(isAccount({ publicKey: key.publicKey })).toBeFalsy();
  expect(isAccount({ sign: key.sign.bind(key) })).toBeFalsy();
});
