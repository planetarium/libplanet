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

const IS_NODE = typeof window === "undefined";

interface IFileSystem {
  mkdir(path: string, options?: { recursive: true }): Promise<void>;
  listFiles(directory: string): AsyncIterable<string>;
  readFile(path: string, options?: { encoding: "utf8" }): Promise<string>;
  delete(path: string): Promise<void>;
  writeFile(path: string, content: string, encoding?: "utf8"): Promise<void>;
}

export class NodeJsFileSystem implements IFileSystem {
  readonly #fs: typeof import("node:fs/promises");

  private constructor(fs: typeof import("node:fs/promises")) {
    this.#fs = fs;
  }

  static async create(): Promise<NodeJsFileSystem> {
    return new NodeJsFileSystem(await import("node:fs/promises"));
  }

  async mkdir(path: string, options?: { recursive: true }): Promise<void> {
    await this.#fs.mkdir(path, options);
  }

  readFile(path: string, options?: { encoding: "utf8" }): Promise<string> {
    return this.#fs.readFile(path, options) as Promise<string>;
  }

  delete(path: string): Promise<void> {
    return this.#fs.unlink(path);
  }

  async *listFiles(directory: string): AsyncIterable<string> {
    let dir;
    try {
      dir = await this.#fs.opendir(directory);
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
      yield dirEntry.name;
    }
  }

  writeFile(path: string, content: string, encoding?: "utf8"): Promise<void> {
    return this.#fs.writeFile(path, content, encoding);
  }
}

export class LocalStorageFileSystem implements IFileSystem {
  async mkdir(path: string, options?: unknown): Promise<void> {}

  readFile(path: string, options?: { encoding: "utf8" }): Promise<string> {
    const item = localStorage.getItem(path);
    if (item == null) {
      throw new Error("Not found");
    }

    return Promise.resolve(item);
  }

  async delete(path: string): Promise<void> {
    localStorage.removeItem(path);
  }

  async *listFiles(directory: string): AsyncIterable<string> {
    for (let i = 0; i < localStorage.length; ++i) {
      const item = localStorage.key(i);
      if (item == null) {
        throw new Error(`Expected ${i}th item in localStorage.`);
      }

      if (item.startsWith(directory)) {
        yield item.slice(directory.length);
      }
    }
  }

  async writeFile(
    path: string,
    content: string,
    encoding?: "utf8",
  ): Promise<void> {
    localStorage.setItem(path, content);
  }
}

export interface Web3KeyStoreOptions {
  path?: string;
  passphraseEntry: PassphraseEntry;
  fileSystem: IFileSystem;
}

function pathJoin(x: string, y: string) {
  if (IS_NODE) {
    return require("path").join(x, y);
  }

  return `${x}/${y}`;
}

/**
 * Determines the default key store path.  It depends on the platform:
 *
 * - Linux/macOS: `$HOME/.config/planetarium/keystore`
 * - Windows: `%AppData%\planetarium\keystore`
 */
export function getDefaultWeb3KeyStorePath(): string {
  if (IS_NODE) {
    const { homedir } = require("node:os");
    const path = require("node:path");
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
  } else {
    return "/planetarium/account/web3-secret-storage/keystore";
  }
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
  readonly #fileSystem: IFileSystem;

  readonly path: string;

  constructor(options: Web3KeyStoreOptions & Partial<Web3AccountOptions>) {
    this.path = options.path || getDefaultWeb3KeyStorePath();
    this.#passphraseEntry = options.passphraseEntry;
    this.#fileSystem = options.fileSystem;
    this.#accountOptions = options;
  }

  async *#listKeyFiles(): AsyncIterable<string> {
    for await (const name of this.#fileSystem.listFiles(this.path)) {
      yield name;
    }
  }

  async #getKeyPath(
    keyId: KeyId,
  ): Promise<{ path: string; keyId: string; createdAt?: Date } | undefined> {
    for await (const name of this.#listKeyFiles()) {
      const parsed = parseKeyFilename(name);
      if (parsed != null && parsed.keyId === keyId) {
        return { ...parsed, path: pathJoin(this.path, name) };
      }
    }
    return undefined;
  }

  async *list(): AsyncIterable<AccountMetadata<KeyId, Web3KeyMetadata>> {
    for await (const name of this.#listKeyFiles()) {
      const parsed = parseKeyFilename(name);
      if (parsed == null) continue;
      const keyPath = pathJoin(this.path, name);
      let json: unknown;
      try {
        json = JSON.parse(
          await this.#fileSystem.readFile(keyPath, { encoding: "utf8" }),
        );
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
      json = await this.#fileSystem.readFile(keyPath.path, {
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
      await this.#fileSystem.delete(keyPath.path);
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
      await this.#fileSystem.mkdir(this.path, { recursive: true });
    } catch (e) {
      return { result: "error", message: `${e}` };
    }
    const createdAt = new Date();
    const keyPath = pathJoin(
      this.path,
      `UTC--${createdAt
        .toISOString()
        .replace(/\.[0-9]+Z$/, "Z")
        .replace(/:/g, "-")}--${keyId}`,
    );
    try {
      await this.#fileSystem.writeFile(
        keyPath,
        JSON.stringify(keyObject),
        "utf8",
      );
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
