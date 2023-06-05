import { generateKeyId, KeyId } from "./KeyId.js";
import { PassphraseEntry } from "./PassphraseEntry.js";
import {
  encryptKeyObject,
  isKeyObject,
  type Web3AccountOptions,
  Web3Account,
  Web3KeyObject,
} from "./Web3Account.js";
import {
  type AccountDeletion,
  type AccountGeneration,
  type AccountImportation,
  type AccountMetadata,
  type AccountRetrieval,
  Address,
  type ImportableKeyStore,
  RawPrivateKey,
} from "@planetarium/account";
import { join, getDefaultWeb3KeyStorePath } from "#path";
export { getDefaultWeb3KeyStorePath } from "#path";
import * as fs from "#fs";

export interface Web3KeyStoreOptions {
  path?: string;
  passphraseEntry: PassphraseEntry;
}

const pattern =
  /^(?:UTC--([0-9]{4}-[0-9]{2}-[0-9]{2})T([0-9]{2}-[0-9]{2}-[0-9]{2})Z--)?([0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12})(?:.json)?$$/i;
export function parseKeyFilename(
  name: string,
): undefined | { keyId: KeyId; createdAt?: Date } {
  const match = pattern.exec(name);
  if (match == null) return undefined;
  return {
    keyId: match[3].toLowerCase(),
    createdAt:
      match[1] != null && match[2] != null
        ? new Date(`${match[1]}T${match[2].replace(/-/g, ":")}Z`)
        : undefined,
  };
}

export interface Web3KeyMetadata {
  address?: Address;
}

export class Web3KeyStore
  implements ImportableKeyStore<KeyId, Web3Account, Web3KeyMetadata>
{
  readonly #passphraseEntry: PassphraseEntry;
  readonly #accountOptions: Partial<Web3AccountOptions>;

  readonly path: string;

  constructor(options: Web3KeyStoreOptions & Partial<Web3AccountOptions>) {
    this.path = options.path ?? getDefaultWeb3KeyStorePath();
    this.#passphraseEntry = options.passphraseEntry;
    this.#accountOptions = options;
  }

  async *#listKeyFiles(): AsyncIterable<string> {
    for await (const name of fs.listFiles(this.path)) {
      yield name;
    }
  }

  async #getKeyPath(
    keyId: KeyId,
  ): Promise<{ path: string; keyId: string; createdAt?: Date } | undefined> {
    for await (const name of this.#listKeyFiles()) {
      const parsed = parseKeyFilename(name);
      if (parsed != null && parsed.keyId === keyId) {
        return { ...parsed, path: join(this.path, name) };
      }
    }
    return undefined;
  }

  async *list(): AsyncIterable<AccountMetadata<KeyId, Web3KeyMetadata>> {
    for await (const name of this.#listKeyFiles()) {
      const parsed = parseKeyFilename(name);
      if (parsed == null) continue;
      const keyPath = join(this.path, name);
      let json: unknown;
      try {
        json = JSON.parse(await fs.readFile(keyPath, { encoding: "utf8" }));
      } catch (_) {
        continue;
      }
      if (!isKeyObject(json)) continue;
      let address: Address;
      try {
        address = Address.fromHex(json.address, true);
      } catch (_) {
        continue;
      }
      const metadata: Web3KeyMetadata = { address };
      yield { ...parsed, metadata };
    }
  }

  async get(
    keyId: Readonly<KeyId>,
  ): Promise<AccountRetrieval<KeyId, Web3Account, Web3KeyMetadata>> {
    const keyPath = await this.#getKeyPath(keyId);
    if (keyPath == null) return { result: "keyNotFound", keyId };
    let json;
    try {
      json = await fs.readFile(keyPath.path, {
        encoding: "utf8",
      });
    } catch (e) {
      if (
        e != null &&
        typeof e === "object" &&
        "code" in e &&
        e.code === "ENOENT"
      ) {
        return { result: "keyNotFound", keyId };
      }
      return { result: "error", keyId, message: `${e}` };
    }
    const keyObject: unknown = JSON.parse(json);
    if (!isKeyObject(keyObject)) {
      return { result: "error", keyId, message: "Invalid key file" };
    }
    const account = new Web3Account(
      keyObject,
      this.#passphraseEntry,
      this.#accountOptions,
    );
    return {
      result: "success",
      account,
      keyId,
      metadata: { address: await account.getAddress() },
      createdAt: keyPath.createdAt,
    };
  }

  async generate(
    metadata?: Partial<Web3KeyMetadata>,
  ): Promise<AccountGeneration<KeyId, Web3Account>> {
    if (metadata?.address != null) {
      return {
        result: "error",
        message: "Address cannot be predetermined before generating key",
      };
    }
    const privateKey = await RawPrivateKey.generate();
    const result = await this.#import(privateKey, metadata);
    if (result.result === "success") {
      return {
        result: "success",
        keyId: result.keyId,
        account: new Web3Account(result.keyObject, this.#passphraseEntry),
      };
    }
    return result;
  }

  async delete(keyId: Readonly<KeyId>): Promise<AccountDeletion<KeyId>> {
    const keyPath = await this.#getKeyPath(keyId);
    if (keyPath == null) return { result: "keyNotFound", keyId };
    try {
      await fs.removeFile(keyPath.path);
    } catch (e) {
      return { result: "error", message: `${e}` };
    }
    return { result: "success", keyId };
  }

  async #import(
    privateKey: RawPrivateKey,
    metadata?: Partial<Web3KeyMetadata>,
  ): Promise<
    | {
        readonly result: "success";
        readonly keyId: KeyId;
        readonly keyObject: Web3KeyObject;
      }
    | {
        readonly result: "error";
        readonly message?: string;
      }
  > {
    if (
      metadata?.address != null &&
      !metadata.address.equals(await Address.deriveFrom(privateKey))
    ) {
      return {
        result: "error",
        message:
          "Address does not match the private key " +
          "(hint: you do not have to specify it manually)",
      };
    }
    const passphrase = await this.#passphraseEntry.configurePassphrase();
    const keyId = generateKeyId();
    const keyObject = await encryptKeyObject(keyId, privateKey, passphrase);
    try {
      await fs.mkdir(this.path, { recursive: true });
    } catch (e) {
      return { result: "error", message: `${e}` };
    }
    const createdAt = new Date();
    const keyPath = join(
      this.path,
      `UTC--${createdAt
        .toISOString()
        .replace(/\.[0-9]+Z$/, "Z")
        .replace(/:/g, "-")}--${keyId}`,
    );
    try {
      await fs.writeFile(keyPath, JSON.stringify(keyObject), "utf8");
    } catch (e) {
      return { result: "error", message: `${e}` };
    }
    return { result: "success", keyId, keyObject };
  }

  async import(
    privateKey: RawPrivateKey,
    metadata?: Partial<Web3KeyMetadata>,
  ): Promise<AccountImportation<KeyId>> {
    const bytes = await privateKey.toBytes();
    if (bytes.at(0) === 0x00 && !this.#accountOptions.allowWeakPrivateKey) {
      return {
        result: "error",
        message:
          "The private key given is too weak; keys of length less than 32 bytes " +
          "are disallowed by default.  See also " +
          "the Web3AccountOptions.allowWeakPrivateKey option.",
      };
    }

    const result = await this.#import(privateKey, metadata);
    if (result.result === "success") {
      return { result: "success", keyId: result.keyId };
    }
    return result;
  }
}

export default Web3KeyStore;
