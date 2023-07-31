import { PublicKey, RawPrivateKey } from "@planetarium/account";
import * as fc from "fast-check";
import * as crypto from "node:crypto";
import { describe, expect, test } from "vitest";
import { KeyId } from "../src/KeyId";
import { Passphrase } from "../src/PassphraseEntry";
import {
  Web3AccountOptions,
  decryptKeyObject,
  encryptKeyObject,
  IncorrectPassphraseError,
  WeakPrivateKeyError,
  Web3Account,
  Web3KeyObject,
} from "../src/Web3Account";
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
      iv: "740770fce12ce862af21264dab25f1da",
    },
    ciphertext:
      "dd8a1132cf57db67c038c6763afe2cbe6ea1949a86abc5843f8ca656ebbb1ea2",
    kdf: "scrypt",
    kdfparams: {
      dklen: 32,
      n: 262144,
      p: 1,
      r: 8,
      salt: "25710c2ccd7c610b24d068af83b959b7a0e5f40641f0c82daeb1345766191034",
    },
    mac: "337aeb86505d2d0bb620effe57f18381377d67d76dac1090626aa5cd20886a7c",
  },
  id: "3198bc9c-6672-5ab3-d995-4942343ae5b6",
  address: "008aeeda4d805471df9b2a5b0f38a0c3bcba786b",
  version: 3,
};

const insufficientLengthKeyObject: Web3KeyObject = {
  crypto: {
    cipher: "aes-128-ctr",
    cipherparams: {
      iv: "24ece9686a10f8687dc70ca42873a063",
    },
    ciphertext: "14",
    kdf: "pbkdf2",
    kdfparams: {
      c: 10240,
      dklen: 32,
      prf: "hmac-sha256",
      salt: "99b480642f6406a10c67429168fb36ba35da7743965e10390eda649ec6da2ae8",
    },
    mac: "7856d88908c72f0af78457ccd085696ad6193f7d2bda525723862f450ce060fa",
  },
  id: "b35a2647-8581-43ff-a98e-6083dc952632",
  address: "eb9afe072c781401bf364224c75a036e4d832f52",
  version: 3,
};

interface TestVector {
  keyObject: Web3KeyObject;
  passphrase: Passphrase;
  privateKey: RawPrivateKey;
  options?: Partial<Web3AccountOptions>;
}

const testVectors: Record<string, TestVector> = {
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
  insufficientLength: {
    keyObject: insufficientLengthKeyObject,
    passphrase: "1",
    privateKey: RawPrivateKey.fromHex(
      "00000000000000000000000000000000000000000000000000000000000000aa",
    ),
    options: {
      allowWeakPrivateKey: true,
    },
  },
};

describe("Web3Account", () => {
  describe("getAddress()", () => {
    for (const [kdf, { keyObject, passphrase, options }] of Object.entries(
      testVectors,
    )) {
      test(kdf, async () => {
        const passphraseEntry = new MockPassphraseEntry(passphrase);
        const key = new Web3Account(keyObject, passphraseEntry, options);
        expect((await key.getAddress()).toHex("lower")).toBe(keyObject.address);
      });
    }
  });
  describe("getPublicKey()", () => {
    test("fastcheck", async () => {
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

    for (const [
      kdf,
      { keyObject, passphrase, privateKey, options },
    ] of Object.entries(testVectors)) {
      test(kdf, async () => {
        const passphraseEntry = new MockPassphraseEntry(passphrase);
        const key = new Web3Account(keyObject, passphraseEntry, options);

        expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);
        const publicKey = await key.getPublicKey();
        expect(passphraseEntry.authenticateCalls).toStrictEqual([
          { keyId: keyObject.id, firstAttempt: true },
        ]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);

        expect(publicKey).toBeInstanceOf(PublicKey);
        expect(publicKey.toHex("compressed")).toStrictEqual(
          await (await privateKey.getPublicKey()).toHex("compressed"),
        );

        if (options?.allowWeakPrivateKey) {
          const keyWithStricterOptions = new Web3Account(
            keyObject,
            passphraseEntry,
            {
              allowWeakPrivateKey: false,
            },
          );
          const publicKey2 = await key.getPublicKey();
          expect(publicKey2).toBeInstanceOf(PublicKey);
          expect(publicKey2.toHex("compressed")).toStrictEqual(
            await (await privateKey.getPublicKey()).toHex("compressed"),
          );
        }
      });
    }
  });

  describe("sign()", () => {
    test("fastcheck", async () => {
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
            {
              keyId: "3c7bec5e-1f1d-4754-a1ce-3644ce1130f1",
              firstAttempt: true,
            },
          ]);
          expect(passphraseEntry.configurePassphraseCalls).toBe(0);
          return await pubKey.verify(msg, sig);
        }),
      );
    });

    for (const [
      kdf,
      { keyObject, passphrase, privateKey, options },
    ] of Object.entries(testVectors)) {
      const msg = new Uint8Array(128);
      crypto.getRandomValues(msg);

      test(kdf, async () => {
        const passphraseEntry = new MockPassphraseEntry(passphrase);
        const key = new Web3Account(keyObject, passphraseEntry, options);

        expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);
        const sig = await key.sign(msg);
        expect(passphraseEntry.authenticateCalls).toStrictEqual([
          { keyId: keyObject.id, firstAttempt: true },
        ]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);

        const publicKey = await privateKey.getPublicKey();
        expect(publicKey.verify(msg, sig)).toBeTruthy();

        if (options?.allowWeakPrivateKey) {
          const keyWithStricterOptions = new Web3Account(
            keyObject,
            passphraseEntry,
            {
              allowWeakPrivateKey: false,
            },
          );
          expect(keyWithStricterOptions.sign(msg)).rejects.toThrowError(
            WeakPrivateKeyError,
          );
        }
      });
    }
  });

  describe("exportPrivateKey()", () => {
    for (const [
      kdf,
      { keyObject, passphrase, privateKey, options },
    ] of Object.entries(testVectors)) {
      test(kdf, async () => {
        const passphraseEntry = new MockPassphraseEntry(passphrase);
        const key = new Web3Account(keyObject, passphraseEntry, options);

        expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);
        const exported = await key.exportPrivateKey();
        expect(passphraseEntry.authenticateCalls).toStrictEqual([
          { keyId: keyObject.id, firstAttempt: true },
        ]);
        expect(passphraseEntry.configurePassphraseCalls).toBe(0);

        expect(exported).toBeInstanceOf(RawPrivateKey);
        expect(exported.toBytes()).toStrictEqual(privateKey.toBytes());

        if (options?.allowWeakPrivateKey) {
          const keyWithStricterOptions = new Web3Account(
            keyObject,
            passphraseEntry,
            {
              allowWeakPrivateKey: false,
            },
          );
          const exported2 = await keyWithStricterOptions.exportPrivateKey();
          expect(exported2.toBytes()).toStrictEqual(privateKey.toBytes());
        }
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
  for (const [
    kdf,
    { keyObject, passphrase, privateKey, options },
  ] of Object.entries(testVectors)) {
    test(kdf, async () => {
      const { keyId, privateKey } = await decryptKeyObject(
        keyObject,
        passphrase,
        options,
      );
      expect(keyId).toBe(keyObject.id);
      expect(privateKey.toBytes()).toStrictEqual(privateKey.toBytes());

      await expect(
        decryptKeyObject(keyObject, `wrong ${passphrase}`),
      ).rejects.toThrow(IncorrectPassphraseError);

      if (options?.allowWeakPrivateKey) {
        await expect(
          decryptKeyObject(keyObject, passphrase, {
            allowWeakPrivateKey: false,
          }),
        ).rejects.toThrow(WeakPrivateKeyError);
      }
    });
  }
});
