import * as fc from "fast-check";
import { PublicKey, RawPrivateKey } from "@planetarium/account";
import { Web3Account, Web3KeyObject } from "../src/Web3Account";
import { describe, expect, test } from "vitest";
import { MockPassphraseEntry } from "./MockPassphraseEntry";

const keyObject: Web3KeyObject = {
  version: 3,
  id: "3c7bec5e-1f1d-4754-a1ce-3644ce1130f1",
  address: "98a253783288c3971cf7960157b8e053bd263da7",
  crypto: {
    ciphertext:
      "da63b632d3e48de4099e32e3664741fa60880547ab8740854abb77a8c5183638",
    cipherparams: {
      iv: "59b8523ebeaa3f37ea06898ff0860340",
    },
    cipher: "aes-128-ctr",
    kdfparams: {
      c: 10240,
      dklen: 32,
      prf: "hmac-sha256",
      salt: "debd6928cf96f23e3cd5580aebd911c8ea4eb7c29d4db10c251ce8f29c2f32f6",
    },
    kdf: "pbkdf2",
    mac: "5ea19f4c94faa5c698dbbcdd55390f72dac8b6383b2c1010328dfc9248eac2fc",
  },
};

describe("Web3Account", () => {
  test("getPublicKey()", async () => {
    const passphraseEntry = new MockPassphraseEntry();
    const key = new Web3Account(keyObject, passphraseEntry);

    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    const publicKey = await key.getPublicKey();
    expect(passphraseEntry.authenticateCalls).toStrictEqual([
      { keyId: "3c7bec5e-1f1d-4754-a1ce-3644ce1130f1", firstAttempt: true },
    ]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);

    expect(publicKey).toBeInstanceOf(PublicKey);
    expect(publicKey.toHex("compressed")).toStrictEqual(
      "03dfd25cea92d828d5c3b2836ffe5a843854285027b9de2dcca0920c0ff0beb5c4",
    );
  });

  test("sign()", async () => {
    const pubKey = PublicKey.fromHex(
      "03dfd25cea92d828d5c3b2836ffe5a843854285027b9de2dcca0920c0ff0beb5c4",
      "compressed",
    );
    await fc.assert(
      fc.asyncProperty(fc.uint8Array(), async (msg: Uint8Array) => {
        const passphraseEntry = new MockPassphraseEntry();
        const key = new Web3Account(keyObject, passphraseEntry);
        const sig = await key.sign(msg);
        expect(passphraseEntry.authenticateCalls).toStrictEqual([
          { keyId: "3c7bec5e-1f1d-4754-a1ce-3644ce1130f1", firstAttempt: true },
        ]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);
        return await pubKey.verify(msg, sig);
      }),
    );
  });

  test("exportPrivateKey()", async () => {
    const passphraseEntry = new MockPassphraseEntry();
    const key = new Web3Account(keyObject, passphraseEntry);

    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    const exported = await key.exportPrivateKey();
    expect(passphraseEntry.authenticateCalls).toStrictEqual([
      { keyId: "3c7bec5e-1f1d-4754-a1ce-3644ce1130f1", firstAttempt: true },
    ]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);

    expect(exported).toBeInstanceOf(RawPrivateKey);
    expect(exported.toBytes()).toMatchSnapshot();
  });
});
