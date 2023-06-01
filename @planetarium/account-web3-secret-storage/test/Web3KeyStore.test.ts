import {
  NodeJsFileSystem,
  Web3KeyStore,
  getDefaultWeb3KeyStorePath,
  parseKeyFilename,
} from "../src/Web3KeyStore";
import { Address, RawPrivateKey } from "@planetarium/account";
import { copyFile, mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import * as path from "node:path";
import { describe, expect, test, vi } from "vitest";
import { WeakPrivateKeyError, Web3Account } from "../src/Web3Account";
import { MockPassphraseEntry } from "./MockPassphraseEntry";

vi.mock("node:os", async (importOriginal) => ({
  ...((await importOriginal()) as object),
}));

vi.mock("node:fs/promises", async (importOriginal) => ({
  ...((await importOriginal()) as object),
}));

describe("getDefaultWeb3KeyStorePath", () => {
  test("posix with XDG_CONFIG_HOME", () => {
    vi.stubGlobal("process", {
      ...process,
      platform: "linux",
    });
    vi.stubEnv("XDG_CONFIG_HOME", "/home/user/.config");
    expect(getDefaultWeb3KeyStorePath()).toBe(
      "/home/user/.config/planetarium/keystore",
    );
  });

  test("posix without XDG_CONFIG_HOME", async () => {
    vi.stubGlobal("process", {
      ...process,
      platform: "linux",
    });
    vi.stubEnv("XDG_CONFIG_HOME", "");
    vi.spyOn(require("node:os"), "homedir").mockReturnValue("/home/user");
    expect(getDefaultWeb3KeyStorePath()).toBe(
      "/home/user/.config/planetarium/keystore",
    );
  });

  test("win32", () => {
    vi.stubGlobal("process", {
      ...process,
      platform: "win32",
    });
    vi.stubEnv("AppData", "C:\\Users\\user\\AppData\\Roaming");
    expect(getDefaultWeb3KeyStorePath()).toBe(
      "C:\\Users\\user\\AppData\\Roaming\\planetarium\\keystore",
    );
  });

  test("win32 without AppData", async () => {
    vi.stubGlobal("process", {
      ...process,
      platform: "win32",
    });
    vi.stubEnv("AppData", "");
    vi.spyOn(require("node:os"), "homedir").mockReturnValue(
      "C:\\Users\\user",
    );
    expect(getDefaultWeb3KeyStorePath()).toBe(
      "C:\\Users\\user\\AppData\\Roaming\\planetarium\\keystore",
    );
  });
});

describe("parseKeyFilename", () => {
  const filenames = {
    "UTC--2022-02-21T10-28-53Z--ababb677-86c3-450e-b142-b73207589b7f": {
      keyId: "ababb677-86c3-450e-b142-b73207589b7f",
      createdAt: new Date("2022-02-21T10:28:53Z"),
    },
    "UTC--2023-02-03T08-31-05Z--5c6ea22a-6e51-4a28-b624-a33e545d49a1.json": {
      keyId: "5c6ea22a-6e51-4a28-b624-a33e545d49a1",
      createdAt: new Date("2023-02-03T08:31:05Z"),
    },
    "99b24ec5-04c9-47e2-b204-82f292e8db57": {
      keyId: "99b24ec5-04c9-47e2-b204-82f292e8db57",
      createdAt: undefined,
    },
    "99B24EC5-04C9-47E2-B204-82F292E8DB57": {
      keyId: "99b24ec5-04c9-47e2-b204-82f292e8db57",
      createdAt: undefined,
    },
    "e64381d9-0447-4355-9514-cd38adbfc420.json": {
      keyId: "e64381d9-0447-4355-9514-cd38adbfc420",
      createdAt: undefined,
    },

    // Wrong cases:
    asdf: undefined,
    "UTC--2022-02-21T10-28-53Z--ababb677-86c3-450e-b142-b73207589b7f.dat":
      undefined,
    "e64381d9-0447-4355-9514-cd38adbfc420.wrong": undefined,
    "KST--2022-02-21T10-28-53--ababb677-86c3-450e-b142-b73207589b7f": undefined,
  };
  for (const [filename, expected] of Object.entries(filenames)) {
    test(filename, () =>
      expect(parseKeyFilename(filename)).toStrictEqual(expected),
    );
  }
});

function testInTempDir(label: string, fn: (dirPath: string) => Promise<void>) {
  test(label, async () => {
    const dirPath = await mkdtemp(
      path.join(tmpdir(), "account-web3-secret-storage-"),
    );
    try {
      await fn(dirPath);
    } finally {
      await rm(dirPath, { recursive: true, force: true });
    }
  });
}

describe("Web3KeyStore", () => {
  testInTempDir("list", async (tmpDir) => {
    const store = new Web3KeyStore({
      path: tmpDir,
      passphraseEntry: new MockPassphraseEntry(),
      fileSystem: await NodeJsFileSystem.create(),
    });
    let i = 0;
    for await (const key of store.list()) {
      i++;
    }
    expect(i).toBeFalsy();

    await copyFile(
      path.join(
        __dirname,
        "fixtures",
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
      path.join(
        tmpDir,
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
    );
    i = 0;
    for await (const key of store.list()) {
      i++;
      expect(key).toStrictEqual({
        keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
        createdAt: new Date("2023-03-14T07:05:42Z"),
        metadata: {
          address: Address.fromHex("6A58a1222E562174943c98ECf6e2290adA79b1B8"),
        },
      });
    }
    expect(i).toBe(1);

    await copyFile(
      path.join(
        __dirname,
        "fixtures",
        "UTC--2023-03-14T07-05-52Z--3b948485-9bd0-4149-9a36-59999b36abf3",
      ),
      path.join(
        tmpDir,
        "UTC--2023-03-14T07-05-52Z--3b948485-9bd0-4149-9a36-59999b36abf3",
      ),
    );
    i = 0;
    for await (const key of store.list()) {
      i++;
      if (key.keyId === "babfe5e0-f0f1-4f51-8b8e-97f1a461c690") {
        expect(key).toStrictEqual({
          keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
          createdAt: new Date("2023-03-14T07:05:42Z"),
          metadata: {
            address: Address.fromHex(
              "6A58a1222E562174943c98ECf6e2290adA79b1B8",
            ),
          },
        });
      } else {
        expect(key).toStrictEqual({
          keyId: "3b948485-9bd0-4149-9a36-59999b36abf3",
          createdAt: new Date("2023-03-14T07:05:52Z"),
          metadata: {
            address: Address.fromHex(
              "596f54a9f0c0c3da7b8BE6A577dCCb66dd36ed1E",
            ),
          },
        });
      }
    }
    expect(i).toBe(2);
  });

  testInTempDir("get", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry();
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry, fileSystem: await NodeJsFileSystem.create() });
    await copyFile(
      path.join(
        __dirname,
        "fixtures",
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
      path.join(
        tmpDir,
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
    );

    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    const result = await store.get("babfe5e0-f0f1-4f51-8b8e-97f1a461c690");
    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    const account = RawPrivateKey.fromHex(
      "e8b612d1126989e1b85b0b94e511bfca5eff4866bb646fc7a42275759bc2d529",
    );
    expect({ ...result, account: undefined }).toStrictEqual({
      result: "success",
      keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      createdAt: new Date("2023-03-14T07:05:42Z"),
      metadata: {
        address: Address.fromHex("6A58a1222E562174943c98ECf6e2290adA79b1B8"),
      },
      account: undefined,
    });

    // The above assertion is not enough to convince if the appropriate account
    // is returned.  The following assertions are for that purpose:
    if (result.result !== "success") throw new Error(); // type guard
    expect(result.account).toBeInstanceOf(Web3Account);

    const exportedKey = await result.account.exportPrivateKey();
    expect(passphraseEntry.authenticateCalls).toStrictEqual([
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: true },
    ]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);

    expect(exportedKey.toBytes()).toStrictEqual(account.toBytes());

    passphraseEntry.authenticateCalls = [];
    passphraseEntry.setTemporaryAuthenticateResult("wrong pass", 2);
    await result.account.exportPrivateKey();
    expect(passphraseEntry.authenticateCalls).toStrictEqual([
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: true },
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: false },
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: false },
    ]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);

    passphraseEntry.authenticateCalls = [];
    const notFound = await store.get("00000000-0000-0000-0000-000000000000");
    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    expect(notFound).toStrictEqual({
      result: "keyNotFound",
      keyId: "00000000-0000-0000-0000-000000000000",
    });
  });

  testInTempDir("get insufficient lengthed key", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry("1");
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry, fileSystem: await NodeJsFileSystem.create() });
    await copyFile(
      path.join(
        __dirname,
        "fixtures",
        "insufficient-lengthed-keys",
        "UTC--2023-01-30T11-33-11Z--b35a2647-8581-43ff-a98e-6083dc952632",
      ),
      path.join(
        tmpDir,
        "UTC--2023-01-30T11-33-11Z--b35a2647-8581-43ff-a98e-6083dc952632",
      ),
    );

    const result = await store.get("b35a2647-8581-43ff-a98e-6083dc952632");
    if (result.result !== "success") throw new Error(); // type guard

    const msg = new Uint8Array([1, 2, 3]);
    expect(result.account.sign(msg)).rejects.toThrowError(WeakPrivateKeyError);

    const nonStrictStore = new Web3KeyStore({
      path: tmpDir,
      passphraseEntry,
      allowWeakPrivateKey: true,
      fileSystem: await NodeJsFileSystem.create()
    });
    const result2 = await nonStrictStore.get(
      "b35a2647-8581-43ff-a98e-6083dc952632",
    );
    if (result2.result !== "success") throw new Error(); // type guard
    const sig = await result2.account.sign(msg);
    await expect(
      (await result2.account.getPublicKey()).verify(msg, sig),
    ).resolves.toBeTruthy();
  });

  testInTempDir("generate", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry();
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry, fileSystem: await NodeJsFileSystem.create() });

    const before = new Date().setMilliseconds(0);
    const result = await store.generate();
    const after = new Date();
    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(1);
    expect(result.result).toBe("success");
    if (result.result !== "success") throw new Error(); // type guard

    const files = await readdir(tmpDir);
    expect(files.length).toBe(1);
    const parsed = parseKeyFilename(files[0]);
    if (parsed == null) throw new Error("Invalid key filename");
    expect(parsed.createdAt).toBeInstanceOf(Date);
    if (parsed.createdAt == null) throw new Error(); // type guard
    expect(+parsed.createdAt).toBeGreaterThanOrEqual(+before);
    expect(+parsed.createdAt).toBeLessThanOrEqual(+after);
    expect(parsed.keyId).toBe(result.keyId);

    const error = await store.generate({
      address: Address.fromHex("0000000000000000000000000000000000000000"),
    });
    expect(error.result).toBe("error");
    if (error.result !== "error") throw new Error(); // type guard
    expect(error.message).toMatch(/\baddress\s+cannot\s+be\s+predetermined\b/i);
  });

  testInTempDir("delete", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry();
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry, fileSystem: await NodeJsFileSystem.create() });
    await copyFile(
      path.join(
        __dirname,
        "fixtures",
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
      path.join(
        tmpDir,
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
    );

    const result = await store.delete("babfe5e0-f0f1-4f51-8b8e-97f1a461c690");
    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    expect(result).toStrictEqual({
      result: "success",
      keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
    });

    const files = await readdir(tmpDir);
    expect(files.length).toBe(0);

    const result2 = await store.delete("00000000-0000-0000-0000-000000000000");
    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    expect(result2).toStrictEqual({
      result: "keyNotFound",
      keyId: "00000000-0000-0000-0000-000000000000",
    });

    await copyFile(
      path.join(
        __dirname,
        "fixtures",
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
      path.join(
        tmpDir,
        "UTC--2023-03-14T07-05-42Z--babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      ),
    );
    vi.spyOn(await import("node:fs/promises"), "unlink").mockRejectedValue(
      new Error("unlink error"),
    );
    const result3 = await store.delete("babfe5e0-f0f1-4f51-8b8e-97f1a461c690");
    expect(result3).toStrictEqual({
      result: "error",
      message: "Error: unlink error",
    });
  });

  testInTempDir("import", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry();
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry, fileSystem: await NodeJsFileSystem.create() });

    const privateKey = RawPrivateKey.fromHex(
      "e8b612d1126989e1b85b0b94e511bfca5eff4866bb646fc7a42275759bc2d529",
    );
    const before = new Date().setMilliseconds(0);
    const result = await store.import(privateKey);
    const after = new Date();
    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(1);

    const files = await readdir(tmpDir);
    expect(files.length).toBe(1);
    const parsed = parseKeyFilename(files[0]);
    if (parsed == null) throw new Error("Invalid key filename");
    expect(parsed.createdAt).toBeInstanceOf(Date);
    if (parsed.createdAt == null) throw new Error(); // type guard
    expect(+parsed.createdAt).toBeGreaterThanOrEqual(+before);
    expect(+parsed.createdAt).toBeLessThanOrEqual(+after);
    expect(result).toStrictEqual({ result: "success", keyId: parsed.keyId });

    const loaded = await store.get(parsed.keyId);
    if (loaded.result !== "success") throw Error(); // type guard
    const exportedKey = await loaded.account.exportPrivateKey();
    expect(exportedKey.toBytes()).toStrictEqual(privateKey.toBytes());

    const insufficientLenghtedKey = RawPrivateKey.fromHex(
      "00000000000000000000000000000000000000000000000000000000000000aa",
    );

    const error = await store.import(insufficientLenghtedKey);
    expect(error.result).toBe("error");
    if (error.result !== "error") throw new Error(); // type guard
    expect(error.message).toMatch(/\btoo\s+weak\b/i);

    const nonStrictStore = new Web3KeyStore({
      path: tmpDir,
      passphraseEntry,
      allowWeakPrivateKey: true,
      fileSystem: await NodeJsFileSystem.create()
    });
    const result2 = await nonStrictStore.import(insufficientLenghtedKey);
    expect(result2.result).toBe("success");
    if (result2.result !== "success") throw new Error(); // type guard
    const loaded2 = await nonStrictStore.get(result2.keyId);
    if (loaded2.result !== "success") throw Error(); // type guard
    expect((await loaded2.account.exportPrivateKey()).toBytes()).toStrictEqual(
      insufficientLenghtedKey.toBytes(),
    );

    const error2 = await store.import(privateKey, {
      address: Address.fromHex("0000000000000000000000000000000000000000"),
    });
    expect(error2.result).toBe("error");
    if (error2.result !== "error") throw new Error(); // type guard
    expect(error2.message).toMatch(/\baddress\s+does\s+not\s+match\b/i);
  });
});
