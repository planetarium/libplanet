import { KeyId } from "./KeyId.js";
import { PassphraseEntry } from "./PassphraseEntry.js";
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
import {
  type KeystoreAccount,
  decryptKeystoreJson,
  encryptKeystoreJson,
  isKeystoreJson,
} from "ethers";
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

export class Web3KeyStore implements ImportableKeyStore<KeyId, RawPrivateKey> {
  readonly #passphraseEntry: PassphraseEntry;

  readonly path: string;

  constructor(options: Web3KeyStoreOptions) {
    this.path = options.path ?? getDefaultWeb3KeyStorePath();
    this.#passphraseEntry = options.passphraseEntry;
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

  async *list(): AsyncIterable<AccountMetadata<KeyId>> {
    for await (const dirEntry of this.#listKeyFiles()) {
      const parsed = parseKeyFilename(dirEntry.name);
      if (parsed == null) continue;
      yield { ...parsed, metadata: undefined };
    }
  }

  async get(
    keyId: Readonly<KeyId>,
  ): Promise<AccountRetrieval<KeyId, RawPrivateKey>> {
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
    if (!isKeystoreJson(json)) {
      return { result: "error", keyId, message: "Invalid key file" };
    }
    let firstAttempt = true;
    let account: KeystoreAccount;
    while (true) {
      const passphrase = await this.#passphraseEntry.authenticate(
        keyId,
        firstAttempt,
      );
      let currentProgress = 0;
      try {
        account = await decryptKeystoreJson(json, passphrase, (progress) => {
          currentProgress = progress;
        });
      } catch (e) {
        if (currentProgress <= 0) {
          return { result: "error", keyId, message: `${e}` };
        }
        firstAttempt = false;
        continue;
      }
      break;
    }
    return {
      result: "success",
      // TODO: Declare Web3Account
      account: RawPrivateKey.fromHex(account.privateKey.replace(/^0x/i, "")),
      keyId,
      metadata: undefined,
      createdAt: keyPath.createdAt,
    };
  }

  async generate(
    metadata?: Partial<undefined>,
  ): Promise<AccountGeneration<KeyId, RawPrivateKey>> {
    const account = await RawPrivateKey.generate();
    const result = await this.import(account, metadata);
    if (result.result === "success") return { ...result, account };
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

  async import(
    privateKey: RawPrivateKey,
    metadata?: Partial<undefined>,
  ): Promise<AccountImportation<KeyId>> {
    const passphrase = await this.#passphraseEntry.configurePassphrase();
    const json = await encryptKeystoreJson(
      {
        address: Address.deriveFrom(privateKey).toString(),
        privateKey: "0x" + Buffer.from(privateKey.toBytes()).toString("hex"),
      },
      passphrase,
    );
    const { id: keyId } = JSON.parse(json);
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
      await fs.writeFile(keyPath, json, "utf8");
    } catch (e) {
      return { result: "error", message: `${e}` };
    }
    return { result: "success", keyId };
  }
}

export default Web3KeyStore;
