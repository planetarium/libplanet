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
import { Dirent } from "node:fs";
import * as fs from "node:fs/promises";
import { homedir } from "node:os";
import * as path from "node:path";

export interface Web3KeyStoreOptions {
  path?: string;
  passphraseEntry: PassphraseEntry;
}

/**
 * Determines the default key store path.  It depends on the platform:
 *
 * - Linux/macOS: `$HOME/.config/planetarium/keystore`
 * - Windows: `%AppData%\planetarium\keystore`
 */
export function getDefaultWeb3KeyStorePath(): string {
  const baseDir =
    process.platform === "win32"
      ? process.env.AppData || path.join(homedir(), "AppData", "Roaming")
      : process.env.XDG_CONFIG_HOME || path.join(homedir(), ".config");
  // Note that it's not necessary to explicitly choose one of `path.win32` or
  // `path.posix` here, but it makes unit tests less dependent on mocks:
  return (process.platform === "win32" ? path.win32 : path.posix).join(
    baseDir,
    "planetarium",
    "keystore",
  );
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

  async *#listKeyFiles(): AsyncIterable<Dirent> {
    let dir;
    try {
      dir = await fs.opendir(this.path);
    } catch (e) {
      if (
        typeof e === "object" &&
        e != null &&
        "code" in e &&
        e.code === "ENOENT"
      ) {
        // In case where there is no directory at all (it's likely the first
        // time to run this operation in a system), it should be considered
        // it's just empty (instead of considering it an exceptional case).
        return;
      }
      throw e;
    }
    for await (const dirEntry of dir) {
      if (!dirEntry.isFile()) continue;
      yield dirEntry;
    }
  }

  async #getKeyPath(
    keyId: KeyId,
  ): Promise<{ path: string; keyId: string; createdAt?: Date } | undefined> {
    for await (const dirEntry of this.#listKeyFiles()) {
      const parsed = parseKeyFilename(dirEntry.name);
      if (parsed != null && parsed.keyId === keyId) {
        return { ...parsed, path: path.join(this.path, dirEntry.name) };
      }
    }
    return undefined;
  }

  async *list(): AsyncIterable<AccountMetadata<KeyId, Web3KeyMetadata>> {
    for await (const dirEntry of this.#listKeyFiles()) {
      const parsed = parseKeyFilename(dirEntry.name);
      if (parsed == null) continue;
      const keyPath = path.join(this.path, dirEntry.name);
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
      json = await fs.readFile(keyPath.path, { encoding: "utf8" });
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
      await fs.unlink(keyPath.path);
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
    const keyPath = path.join(
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
