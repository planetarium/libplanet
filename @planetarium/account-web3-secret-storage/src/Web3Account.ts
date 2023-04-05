import { KeyId } from "./KeyId.js";
import { PassphraseEntry } from "./PassphraseEntry.js";
import {
  ExportableAccount,
  PublicKey,
  RawPrivateKey,
  Signature,
} from "@planetarium/account";
import { type KeystoreAccount, decryptKeystoreJson } from "ethers";

export type Web3KeyObjectKdf =
  | {
      kdf: "pbkdf2";
      kdfparams: {
        c: number;
        dklen: number;
        prf: "hmac-sha256";
        salt: string;
      };
    }
  | {
      kdf: "scrypt";
      kdfparams: {
        dklen: number;
        n: number;
        p: number;
        r: number;
        salt: string;
      };
    };

export interface Web3KeyObject {
  version: 3;
  id: KeyId;
  address: string;
  crypto: {
    cipher: "aes-128-ctr" | "aes-128-cbc";
    cipherparams: {
      iv: string;
    };
    ciphertext: string;
    mac: string;
  } & Web3KeyObjectKdf;
}

export class Web3Account implements ExportableAccount {
  #keyObject: Web3KeyObject;
  #passphraseEntry: PassphraseEntry;

  constructor(keyObject: Web3KeyObject, passphraseEntry: PassphraseEntry) {
    this.#keyObject = keyObject;
    this.#passphraseEntry = passphraseEntry;
  }

  async exportPrivateKey(): Promise<RawPrivateKey> {
    let firstAttempt = true;
    let account: KeystoreAccount;
    while (true) {
      const passphrase = await this.#passphraseEntry.authenticate(
        this.#keyObject.id,
        firstAttempt,
      );
      let currentProgress = 0;
      const json = JSON.stringify(this.#keyObject);
      try {
        // TODO: ethers does not support scrypt yet, however Libplanet.KeyStore.Web3KeyStore does.
        // We need to support scrypt in the future.
        account = await decryptKeystoreJson(json, passphrase, (progress) => {
          currentProgress = progress;
        });
      } catch (e) {
        if (currentProgress <= 0) {
          throw e;
        }
        firstAttempt = false;
        continue;
      }
      break;
    }
    return RawPrivateKey.fromHex(account.privateKey.replace(/^0x/i, ""));
  }

  async getPublicKey(): Promise<PublicKey> {
    const key = await this.exportPrivateKey();
    return await key.getPublicKey();
  }

  async sign(message: Uint8Array): Promise<Signature> {
    const key = await this.exportPrivateKey();
    return await key.sign(message);
  }
}
