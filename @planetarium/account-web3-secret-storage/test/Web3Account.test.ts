import * as fc from "fast-check";
import { PublicKey, RawPrivateKey } from "@planetarium/account";
import { KeyId } from "../src/KeyId";
import { Passphrase } from "../src/PassphraseEntry";
import {
  Web3Account,
  Web3KeyObject,
  encryptKeyObject,
  decryptKeyObject,
  IncorrectPassphraseError,
} from "../src/Web3Account";
import { describe, expect, test } from "vitest";
import { MockPassphraseEntry } from "./MockPassphraseEntry";

const pbkdf2KeyObject: Web3KeyObject = {
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

const scryptKeyObject: Web3KeyObject = {
  crypto: {
    cipher: "aes-128-ctr",
    cipherparams: {
      iv: "83dbcc02d8ccb40e466191a123791e0e",
    },
    ciphertext:
      "d172bf743a674da9cdad04534d56926ef8358534d458fffccd4e6ad2fbde479c",
    kdf: "scrypt",
    kdfparams: {
      dklen: 32,
      n: 262144,
      p: 8,
      r: 1,
      salt: "ab0c7876052600dd703518d6fc3fe8984592145b591fc8fb5c6d43190334ba19",
    },
    mac: "2103ac29920d71da29f15d75b4a16dbe95cfd7ff8faea1056c33131d846e3097",
  },
  id: "3198bc9c-6672-5ab3-d995-4942343ae5b6",
  address: "008aeeda4d805471df9b2a5b0f38a0c3bcba786b",
  version: 3,
};

const testVectors = {
  pbkdf: {
    keyObject: pbkdf2KeyObject,
    passphrase: "passphrase",
    privateKey: RawPrivateKey.fromHex(
      "2af8da24b177f6723d8b99762b416fc3050289b572b8819ebbb0a6b143b1d55d",
    ),
  },
  scrypt: {
    keyObject: scryptKeyObject,
    passphrase: "testpassword",
    privateKey: RawPrivateKey.fromHex(
      "7a28b5ba57c53603b0b07b56bba752f7784bf506fa95edc395f5cf6c7514fe9d",
    ),
  },
};

describe("Web3Account", () => {
  test("getPublicKey()", async () => {
    const passphraseEntry = new MockPassphraseEntry();
    const key = new Web3Account(pbkdf2KeyObject, passphraseEntry);

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
        const key = new Web3Account(pbkdf2KeyObject, passphraseEntry);
        const sig = await key.sign(msg);
        expect(passphraseEntry.authenticateCalls).toStrictEqual([
          { keyId: "3c7bec5e-1f1d-4754-a1ce-3644ce1130f1", firstAttempt: true },
        ]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);
        return await pubKey.verify(msg, sig);
      }),
    );
  });

  describe("exportPrivateKey()", () => {
    for (const [kdf, { keyObject, passphrase, privateKey }] of Object.entries(
      testVectors,
    )) {
      test(kdf, async () => {
        const passphraseEntry = new MockPassphraseEntry(passphrase);
        const key = new Web3Account(keyObject, passphraseEntry);

        expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);
        const exported = await key.exportPrivateKey();
        expect(passphraseEntry.authenticateCalls).toStrictEqual([
          { keyId: keyObject.id, firstAttempt: true },
        ]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);

        expect(exported).toBeInstanceOf(RawPrivateKey);
        expect(exported.toBytes()).toStrictEqual(privateKey.toBytes());
      });
    }
  });
});

test("encryptKeyObject()", async () => {
  const privateKey = RawPrivateKey.fromHex(
    "b56fe718d3f29d5f111d3e975abe0ac57595f1717183793540a8065dd5ba34fd",
  );
  await fc.assert(
    fc.asyncProperty(
      fc.uuid(),
      fc.uint8Array(),
      async (keyId: KeyId, passphrase: Passphrase) => {
        const keyObject = await encryptKeyObject(keyId, privateKey, passphrase);
        const decrypted = await decryptKeyObject(keyObject, passphrase);
        expect(decrypted.keyId).toBe(keyId);
        expect(decrypted.privateKey.toBytes()).toStrictEqual(
          privateKey.toBytes(),
        );
      },
    ),
  );
});

describe("decryptKeyObject()", async () => {
  for (const [kdf, { keyObject, passphrase, privateKey }] of Object.entries(
    testVectors,
  )) {
    test(kdf, async () => {
      const { keyId, privateKey } = await decryptKeyObject(
        keyObject,
        passphrase,
      );
      expect(keyId).toBe(keyObject.id);
      expect(privateKey.toBytes()).toStrictEqual(privateKey.toBytes());

      await expect(
        decryptKeyObject(keyObject, `wrong ${passphrase}`),
      ).rejects.toThrow(IncorrectPassphraseError);
    });
  }
});
