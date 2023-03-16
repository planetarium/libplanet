import { Passphrase } from "../src/PassphraseEntry";
import { TtyPassphraseEntry, readPassphrase } from "../src/TtyPassphraseEntry";
import { setTimeout } from "node:timers/promises";
import { ReadableStreamBuffer, WritableStreamBuffer } from "stream-buffers";
import { describe, expect, test } from "vitest";

async function waitUntilRead(
  input: ReadableStreamBuffer,
  dataToWrite: Buffer | string,
): Promise<void> {
  const data =
    typeof dataToWrite === "string"
      ? Buffer.from(dataToWrite, "utf8")
      : dataToWrite;
  await setTimeout(0); // mimicks I/O interrupt
  input.put(dataToWrite);
  return await new Promise((resolve) => {
    input.on("data", (chunk: Buffer) => {
      if (chunk.equals(data)) resolve();
    });
  });
}

describe("readPassphrase", () => {
  test("mask: '*'", async () => {
    const input = new ReadableStreamBuffer();
    const output = new WritableStreamBuffer();

    let result: Passphrase | undefined;
    const awaitable = readPassphrase("Prompt: ", {
      mask: "*",
      input,
      output,
    }).then((passphrase) => {
      result = passphrase;
      return passphrase;
    });
    await setTimeout(100);
    expect(result).toBeUndefined();
    expect(output.getContentsAsString("utf8")).toContain("Prompt: ");

    await waitUntilRead(input, "passphrase");
    expect(result).toBeUndefined();
    expect(output.getContentsAsString("utf8")).toContain("*********");

    await waitUntilRead(input, "\n");
    expect(await awaitable).toBe("passphrase");
    expect(result).toBe("passphrase");
    expect(output.getContentsAsString("utf8")).toContain("\n");
  });

  test("mask: ''", async () => {
    const input = new ReadableStreamBuffer();
    const output = new WritableStreamBuffer();

    let result: Passphrase | undefined;
    const awaitable = readPassphrase("Prompt: ", {
      mask: "",
      input,
      output,
    }).then((passphrase) => {
      result = passphrase;
      return passphrase;
    });
    await setTimeout(100);
    expect(result).toBeUndefined();
    expect(output.getContentsAsString("utf8")).toContain("Prompt: ");

    await waitUntilRead(input, "passphrase");
    expect(result).toBeUndefined();
    expect(output.getContentsAsString("utf8")).toBeFalsy();

    await waitUntilRead(input, "\n");
    expect(await awaitable).toBe("passphrase");
    expect(result).toBe("passphrase");
    expect(output.getContentsAsString("utf8")).toContain("\n");
  });

  test("mask: false", async () => {
    const input = new ReadableStreamBuffer();
    const output = new WritableStreamBuffer();

    let result: Passphrase | undefined;
    const awaitable = readPassphrase("Prompt: ", {
      mask: false,
      input,
      output,
    }).then((passphrase) => {
      result = passphrase;
      return passphrase;
    });
    await setTimeout(100);
    expect(result).toBeUndefined();
    expect(output.getContentsAsString("utf8")).toContain("Prompt: ");

    await waitUntilRead(input, "passphrase");
    expect(result).toBeUndefined();
    expect(output.getContentsAsString("utf8")).toContain("passphrase");

    await waitUntilRead(input, "\n");
    expect(await awaitable).toBe("passphrase");
    expect(result).toBe("passphrase");
    expect(output.getContentsAsString("utf8")).toContain("\n");
  });
});

describe("TtyPassphraseEntry", () => {
  test("authenticate", async () => {
    const input = new ReadableStreamBuffer();
    const output = new WritableStreamBuffer();
    const entry = new TtyPassphraseEntry({
      input,
      output,
      mask: "#",
      locale: "qts-XX",
    });
    const awaitable = entry.authenticate(
      "00000000-0000-0000-0000-000000000000",
      true,
    );
    await waitUntilRead(input, "wrong\n");
    expect(output.getContentsAsString("utf8")).toMatch(
      /AUTHENTICATE:00000000-0000-0000-0000-000000000000.*?#####/,
    );
    expect(await awaitable).toBe("wrong");

    const awaitable2 = entry.authenticate(
      "00000000-0000-0000-0000-000000000000",
      false,
    );
    await waitUntilRead(input, "passphrase\n");
    expect(output.getContentsAsString("utf8")).toMatch(
      /AUTHENTICATE_RETRY:00000000-0000-0000-0000-000000000000.*?##########/,
    );
    expect(await awaitable2).toBe("passphrase");
  });

  test("configurePassphrase", async () => {
    const input = new ReadableStreamBuffer();
    const output = new WritableStreamBuffer();
    const entry = new TtyPassphraseEntry({
      input,
      output,
      mask: "#",
      locale: "qts-XX",
    });

    const awaitable = entry.configurePassphrase();
    await waitUntilRead(input, "passphrase\n");
    expect(output.getContentsAsString("utf8")).toMatch(
      /CONFIGURE_PASSPHRASE.*?##########/,
    );
    await waitUntilRead(input, "unmatched\n");
    expect(output.getContentsAsString("utf8")).toMatch(
      /CONFIRM_CONFIGURE_PASSPHRASE.*?#########/,
    );
    await waitUntilRead(input, "passphrase\n");
    expect(output.getContentsAsString("utf8")).toMatch(
      /CONFIGURE_PASSPHRASE_RETRY.*?##########/,
    );
    await waitUntilRead(input, "passphrase\n");
    expect(output.getContentsAsString("utf8")).toMatch(
      /CONFIRM_CONFIGURE_PASSPHRASE.*?##########/,
    );
    expect(await awaitable).toBe("passphrase");
  });
});
