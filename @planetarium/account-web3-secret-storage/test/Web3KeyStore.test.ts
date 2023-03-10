import { KeyId } from "../src/KeyId";
import { type Passphrase, type PassphraseEntry } from "../src/PassphraseEntry";
import {
  Web3KeyStore,
  getDefaultWeb3KeyStorePath,
  parseKeyFilename,
} from "../src/Web3KeyStore";
import { RawPrivateKey } from "@planetarium/account";
import { copyFile, mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import * as path from "node:path";
import { describe, expect, test, vi } from "vitest";

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
    vi.spyOn(await import("node:os"), "homedir").mockReturnValue("/home/user");
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
    vi.spyOn(await import("node:os"), "homedir").mockReturnValue(
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

class MockPassphraseEntry implements PassphraseEntry {
  authenticateCalls: { keyId: KeyId; firstAttempt: boolean }[] = [];
  configurePassphraseCalls: number = 0;
  temporaryAuthenticateResult: { passphrase: Passphrase; times: number } = {
    passphrase: "passphrase",
    times: 0,
  };

  setTemporaryAuthenticateResult(passphrase: Passphrase, times: number) {
    this.temporaryAuthenticateResult = { passphrase, times };
  }

  async authenticate(keyId: KeyId, firstAttempt: boolean): Promise<Passphrase> {
    this.authenticateCalls.push({ keyId, firstAttempt });
    if (this.temporaryAuthenticateResult.times > 0) {
      this.temporaryAuthenticateResult.times--;
      return this.temporaryAuthenticateResult.passphrase;
    }
    return "passphrase";
  }

  async configurePassphrase(): Promise<string> {
    this.configurePassphraseCalls++;
    return "passphrase";
  }
}

describe("Web3KeyStore", () => {
  testInTempDir("list", async (tmpDir) => {
    const store = new Web3KeyStore({
      path: tmpDir,
      passphraseEntry: new MockPassphraseEntry(),
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
        metadata: undefined,
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
          metadata: undefined,
        });
      } else {
        expect(key).toStrictEqual({
          keyId: "3b948485-9bd0-4149-9a36-59999b36abf3",
          createdAt: new Date("2023-03-14T07:05:52Z"),
          metadata: undefined,
        });
      }
    }
    expect(i).toBe(2);
  });

  testInTempDir("get", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry();
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry });
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
    expect(passphraseEntry.authenticateCalls).toStrictEqual([
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: true },
    ]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    const account = RawPrivateKey.fromHex(
      "e8b612d1126989e1b85b0b94e511bfca5eff4866bb646fc7a42275759bc2d529",
    );
    expect(result).toStrictEqual({
      result: "success",
      keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690",
      createdAt: new Date("2023-03-14T07:05:42Z"),
      metadata: undefined,
      account,
    });
    // The above assertion is not enough to convince if the appropriate account
    // is returned.  The following assertions are for that purpose:
    if (result.result !== "success") throw new Error(); // type guard
    expect(result.account.toBytes()).toStrictEqual(account.toBytes());

    passphraseEntry.authenticateCalls = [];
    passphraseEntry.setTemporaryAuthenticateResult("wrong pass", 2);
    const result2 = await store.get("babfe5e0-f0f1-4f51-8b8e-97f1a461c690");
    expect(passphraseEntry.authenticateCalls).toStrictEqual([
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: true },
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: false },
      { keyId: "babfe5e0-f0f1-4f51-8b8e-97f1a461c690", firstAttempt: false },
    ]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    expect(result2).toStrictEqual(result);

    passphraseEntry.authenticateCalls = [];
    const result3 = await store.get("00000000-0000-0000-0000-000000000000");
    expect(passphraseEntry.authenticateCalls).toStrictEqual([]);
    expect(passphraseEntry.configurePassphraseCalls).toBe(0);
    expect(result3).toStrictEqual({
      result: "keyNotFound",
      keyId: "00000000-0000-0000-0000-000000000000",
    });
  });

  testInTempDir("generate", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry();
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry });

    const before = new Date().setMilliseconds(0);
    await store.generate();
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
  });

  testInTempDir("delete", async (tmpDir) => {
    const passphraseEntry = new MockPassphraseEntry();
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry });
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
    const store = new Web3KeyStore({ path: tmpDir, passphraseEntry });

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

    const loaded = await store.get(parsed.keyId);
    if (loaded.result !== "success") throw Error(); // type guard
    expect(loaded.account.toBytes()).toStrictEqual(privateKey.toBytes());
  });
});
