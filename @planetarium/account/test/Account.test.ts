import { expect, test } from "vitest";
import { isAccount } from "../src/Account";
import { RawPrivateKey } from "../src/RawPrivateKey";

test("isAccount", async () => {
  expect(isAccount(RawPrivateKey.generate())).toBeTruthy();
  const key = RawPrivateKey.generate();
  const validAccount = {
    getAddress: key.getAddress,
    getPublicKey: key.getPublicKey,
    sign: key.sign.bind(key),
  };
  expect(isAccount(validAccount)).toBeTruthy();
  for (const key of Object.keys(validAccount)) {
    const invalidAccount = { ...validAccount, [key]: 1 };
    expect(isAccount(invalidAccount)).toBeFalsy();
    // rome-ignore lint/performance/noDelete: delete is needed
    delete invalidAccount[key];
    expect(isAccount(invalidAccount)).toBeFalsy();
  }
});
