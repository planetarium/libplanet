import { isKeyId, KeyId } from "./KeyId.js";
import { Passphrase, PassphraseEntry } from "./PassphraseEntry.js";
import {
  Address,
  ExportableAccount,
  PublicKey,
  RawPrivateKey,
  Signature,
} from "@planetarium/account";
import { crypto } from "#crypto";
import { pbkdf2Async } from "@noble/hashes/pbkdf2";
import { scryptAsync } from "@noble/hashes/scrypt";
import { sha256 } from "@noble/hashes/sha256";
import { keccak_256 } from "@noble/hashes/sha3";

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

export type Web3KeyObjectCipher = {
  cipher: "aes-128-ctr";
  cipherparams: {
    iv: string;
  };
  ciphertext: string;
  mac: string;
};

export interface Web3KeyObject {
  version: 3;
  id: KeyId;
  address: string;
  crypto: Web3KeyObjectCipher & Web3KeyObjectKdf;
}

export class Web3Account implements ExportableAccount {
  #keyObject: Web3KeyObject;
  #passphraseEntry: PassphraseEntry;
  #options: Partial<Web3AccountOptions>;

  constructor(
    keyObject: Web3KeyObject,
    passphraseEntry: PassphraseEntry,
    options: Partial<Web3AccountOptions> = {},
  ) {
    this.#keyObject = keyObject;
    this.#passphraseEntry = passphraseEntry;
    this.#options = options;
  }

  async #exportPrivateKey(
    options: Partial<Web3AccountOptions> = {},
  ): Promise<RawPrivateKey> {
    let firstAttempt = true;
    let privateKey: RawPrivateKey;
    while (true) {
      const passphrase = await this.#passphraseEntry.authenticate(
        this.#keyObject.id,
        firstAttempt,
      );
      try {
        const result = await decryptKeyObject(this.#keyObject, passphrase, {
          ...this.#options,
          ...options,
        });
        privateKey = result.privateKey;
      } catch (e) {
        if (e instanceof IncorrectPassphraseError) {
          firstAttempt = false;
          continue;
        }
        throw e;
      }
      break;
    }
    return privateKey;
  }

  exportPrivateKey(): Promise<RawPrivateKey> {
    return this.#exportPrivateKey({ allowWeakPrivateKey: true });
  }

  getAddress(): Promise<Address> {
    return Promise.resolve(Address.fromHex(this.#keyObject.address, true));
  }

  async getPublicKey(): Promise<PublicKey> {
    const key = await this.#exportPrivateKey({ allowWeakPrivateKey: true });
    return await key.getPublicKey();
  }

  async sign(message: Uint8Array): Promise<Signature> {
    const key = await this.#exportPrivateKey();
    return await key.sign(message);
  }
}

function toHex(bytes: Uint8Array | ArrayBuffer): string {
  const array = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let hex = "";
  for (let i = 0; i < array.length; i++) {
    hex += array[i].toString(16).padStart(2, "0");
  }
  return hex;
}

export async function encryptKeyObject(
  keyId: KeyId,
  privateKey: RawPrivateKey,
  passphrase: Passphrase,
): Promise<Web3KeyObject> {
  if (!isKeyId(keyId)) {
    throw new Error(`Invalid key ID: ${keyId}`);
  }

  const salt = new Uint8Array(32);
  crypto.getRandomValues(salt);
  const kdf: Web3KeyObjectKdf = {
    kdf: "pbkdf2",
    kdfparams: {
      c: 10240,
      dklen: 32,
      prf: "hmac-sha256",
      salt: toHex(salt),
    },
  };
  const derivedKey = await deriveKey(kdf, passphrase);
  const cipher = await encipher({
    derivedKey,
    privateKey: privateKey.toBytes(),
  });
  const address = await Address.deriveFrom(privateKey);

  return {
    version: 3,
    id: keyId,
    address: address.toHex("lower"),
    crypto: { ...cipher, ...kdf },
  };
}

export function isKeyObject(json: unknown): json is Web3KeyObject {
  if (
    typeof json !== "object" ||
    json == null ||
    !("version" in json) ||
    json.version !== 3 ||
    !("id" in json) ||
    typeof json.id !== "string" ||
    !isKeyId(json.id) ||
    !("address" in json) ||
    typeof json.address !== "string"
  ) {
    return false;
  }

  try {
    Address.fromHex(json.address, true);
  } catch (e) {
    return false;
  }

  return (
    "crypto" in json &&
    typeof json.crypto === "object" &&
    isKeyObjectCipher(json.crypto) &&
    isKeyObjectKdf(json.crypto)
  );
}

function isKeyObjectCipher(json: unknown): json is Web3KeyObjectCipher {
  return (
    typeof json === "object" &&
    json != null &&
    "cipher" in json &&
    json.cipher === "aes-128-ctr" &&
    "cipherparams" in json &&
    typeof json.cipherparams === "object" &&
    json.cipherparams != null &&
    "iv" in json.cipherparams &&
    typeof json.cipherparams.iv === "string" &&
    "ciphertext" in json &&
    typeof json.ciphertext === "string" &&
    "mac" in json &&
    typeof json.mac === "string"
  );
}

function isKeyObjectKdf(json: unknown): json is Web3KeyObjectKdf {
  if (typeof json !== "object" || json == null || !("kdf" in json)) {
    return false;
  }

  switch (json.kdf) {
    case "pbkdf2":
      return (
        "kdfparams" in json &&
        typeof json.kdfparams === "object" &&
        json.kdfparams != null &&
        "c" in json.kdfparams &&
        typeof json.kdfparams.c === "number" &&
        "dklen" in json.kdfparams &&
        typeof json.kdfparams.dklen === "number" &&
        "prf" in json.kdfparams &&
        json.kdfparams.prf === "hmac-sha256" &&
        "salt" in json.kdfparams &&
        typeof json.kdfparams.salt === "string"
      );

    case "scrypt":
      return (
        "kdfparams" in json &&
        typeof json.kdfparams === "object" &&
        json.kdfparams != null &&
        "dklen" in json.kdfparams &&
        typeof json.kdfparams.dklen === "number" &&
        "n" in json.kdfparams &&
        typeof json.kdfparams.n === "number" &&
        "p" in json.kdfparams &&
        typeof json.kdfparams.p === "number" &&
        "r" in json.kdfparams &&
        typeof json.kdfparams.r === "number" &&
        "salt" in json.kdfparams &&
        typeof json.kdfparams.salt === "string"
      );

    default:
      return false;
  }
}

export interface Web3AccountOptions {
  /**
   * Whether to allow weak private keys (i.e. private keys with leading zeros).
   */
  readonly allowWeakPrivateKey: boolean;
}

export class WeakPrivateKeyError extends Error {
  readonly name = "WeakPrivateKeyError";
}

export async function decryptKeyObject(
  keyObject: Web3KeyObject,
  passphrase: Passphrase,
  options: Partial<Web3AccountOptions> = {},
): Promise<{ keyId: KeyId; privateKey: RawPrivateKey }> {
  if (keyObject == null) {
    throw new Error("Key object is null.");
  } else if (keyObject.version !== 3) {
    throw new Error(`Unsupported key object version: ${keyObject?.version}`);
  } else if (keyObject.crypto == null) {
    throw new Error("Key object does not have crypto field.");
  }

  const keyObjectAddress = Address.fromHex(keyObject.address, true);
  const derivedKey = await deriveKey(keyObject.crypto, passphrase);
  let privateKeyBytes = await decipher(keyObject.crypto, derivedKey);
  if (privateKeyBytes.length < 32) {
    const zeroPadded = new Uint8Array(32);
    zeroPadded.set(privateKeyBytes, 32 - privateKeyBytes.length);
    privateKeyBytes = zeroPadded;
  }
  if (privateKeyBytes.at(0) === 0x00 && !options.allowWeakPrivateKey) {
    throw new WeakPrivateKeyError(
      "The private key given is too weak; keys of length less than 32 bytes " +
        "are disallowed by default.  See also " +
        "the Web3AccountOptions.allowWeakPrivateKey option.",
    );
  }
  const privateKey = RawPrivateKey.fromBytes(privateKeyBytes);
  const address = await Address.deriveFrom(privateKey);
  if (!keyObjectAddress.equals(address)) {
    throw new Error(
      `Failed to decrypt the key object; expected account ${keyObjectAddress} but got ${address} instead.`,
    );
  }
  return { keyId: keyObject.id, privateKey };
}

async function deriveKey(
  kdf: Web3KeyObjectKdf,
  passphrase: Passphrase,
): Promise<Uint8Array> {
  if (kdf.kdf === "pbkdf2") {
    const { c, dklen, prf, salt } = kdf.kdfparams;
    if (dklen < 16) throw new Error(`Too short dklen: ${dklen}`);
    if (prf !== "hmac-sha256") throw new Error(`Unsupported prf: ${prf}`);
    const derivedKey = await pbkdf2Async(
      sha256,
      passphrase,
      Buffer.from(salt, "hex"),
      {
        c,
        dkLen: dklen,
      },
    );
    if (derivedKey.length < dklen) {
      throw new Error(`Too short key: ${toHex(derivedKey)}`);
    }
    return derivedKey;
  } else if (kdf.kdf === "scrypt") {
    const { dklen, n, p, r, salt } = kdf.kdfparams;
    const derivedKey = await scryptAsync(passphrase, salt, { N: n, r, p, dkLen: dklen});
    if (derivedKey.length < dklen) {
      throw new Error(`Too Short key: ${toHex(derivedKey)}`);
    }
    return derivedKey;
  }

  throw new Error(`Unsupported kdf: ${kdf["kdf"]}`);
}

export class IncorrectPassphraseError extends Error {
  readonly name = "IncorrectPassphraseError";

  constructor(
    readonly expectedMac: Uint8Array,
    readonly actualMac: Uint8Array,
  ) {
    super(`Expected: ${toHex(expectedMac)}, Actual: ${toHex(actualMac)}`);
  }
}

async function encipher({
  derivedKey,
  privateKey,
}: {
  derivedKey: Uint8Array;
  privateKey: Uint8Array;
}): Promise<Web3KeyObjectCipher> {
  const iv = new Uint8Array(16);
  crypto.getRandomValues(iv);
  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter: iv,
      length: 128,
    },
    await crypto.subtle.importKey(
      "raw",
      derivedKey.subarray(0, 16),
      { name: "AES-CTR" },
      false,
      ["encrypt"],
    ),
    privateKey,
  );
  return {
    cipher: "aes-128-ctr",
    cipherparams: { iv: toHex(iv) },
    ciphertext: toHex(ciphertext),
    mac: toHex(calculateMac(derivedKey, ciphertext)),
  };
}

async function decipher(
  cipher: Web3KeyObjectCipher,
  derivedKey: Uint8Array,
): Promise<Uint8Array> {
  if (cipher.cipher !== "aes-128-ctr") {
    throw new Error(`Unsupported cipher: ${cipher.cipher}`);
  }

  const ciphertext = new Uint8Array(Buffer.from(cipher.ciphertext, "hex"));
  const mac = calculateMac(derivedKey, ciphertext);
  const expectedMac = new Uint8Array(Buffer.from(cipher.mac, "hex"));
  if (!mac.every((v, i) => v === expectedMac[i])) {
    throw new IncorrectPassphraseError(expectedMac, mac);
  }
  const decrypted = await crypto.subtle.decrypt(
    {
      name: "AES-CTR",
      counter: new Uint8Array(Buffer.from(cipher.cipherparams.iv, "hex")),
      length: 128,
    },
    await crypto.subtle.importKey(
      "raw",
      derivedKey.subarray(0, 16),
      { name: "AES-CTR" },
      false,
      ["decrypt"],
    ),
    ciphertext,
  );
  // FIXME: This is a workaround for a bug in @peculiar/webcrypto.
  return decrypted instanceof Uint8Array
    ? decrypted
    : new Uint8Array(decrypted);
}

function calculateMac(
  derivedKey: Uint8Array,
  ciphertext: Uint8Array | ArrayBuffer,
): Uint8Array {
  const keySubBytes = 16;
  const ciphertextBytes =
    ciphertext instanceof Uint8Array ? ciphertext : new Uint8Array(ciphertext);
  const seal = new Uint8Array(keySubBytes + ciphertextBytes.length);
  if (derivedKey.length < keySubBytes) {
    throw new Error(
      `Too short derived key (${derivedKey.length} < ${keySubBytes}): ${toHex(
        derivedKey,
      )}`,
    );
  }
  seal.set(derivedKey.subarray(derivedKey.length - keySubBytes));
  seal.set(ciphertextBytes, keySubBytes);
  const mac = keccak_256(seal);
  return mac;
}
