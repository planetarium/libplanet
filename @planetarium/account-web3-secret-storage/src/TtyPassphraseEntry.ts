import { KeyId } from "./KeyId.js";
import { Passphrase, PassphraseEntry } from "./PassphraseEntry.js";
import * as readline from "node:readline";
import { Readable, Writable } from "node:stream";

export interface PassphraseReaderOptions {
  input: Readable;
  output: Writable;
  mask: string | false;
}

function isNewLine(chunk: Buffer | string) {
  return (
    (typeof chunk === "string" && chunk.endsWith("\n")) ||
    (chunk instanceof Buffer && chunk.at(chunk.length - 1) === 0x0a)
  );
}

export function readPassphrase(
  prompt: string,
  { input, output, mask }: PassphraseReaderOptions,
): Promise<Passphrase> {
  let masking = false;
  const rl = readline.createInterface({
    input,
    output: new Writable({
      write: (chunk, encoding: BufferEncoding, callback) => {
        if (masking && !isNewLine(chunk)) {
          output.write(
            mask,
            encoding.endsWith("buffer") ? "utf8" : encoding,
            callback,
          );
        } else output.write(chunk, encoding, callback);
      },
    }),
    terminal: true,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
    setTimeout(() => (masking = mask !== false), 0); // wait for I/O interrupt
  });
}

const prompts: {
  authenticate: Record<string, string>;
  authenticateRetry: Record<string, string>;
  configurePassphrase: Record<string, string>;
  configurePassphraseRetry: Record<string, string>;
  confirmConfigurePassphrase: Record<string, string>;
} = {
  authenticate: {
    "": "Passphrase for {keyId}: ",
    ko: "{keyId} 키의 암호: ",
    qts: "AUTHENTICATE:{keyId}", // for unit test
  },
  authenticateRetry: {
    "": "Incorrect; try again: ",
    ko: "틀림. 재시도: ",
    qts: "AUTHENTICATE_RETRY:{keyId}", // for unit test
  },
  configurePassphrase: {
    "": "New passphrase: ",
    ko: "새 암호: ",
    qts: "CONFIGURE_PASSPHRASE", // for unit test
  },
  configurePassphraseRetry: {
    "": "Mismatch; new passphrase: ",
    ko: "틀림. 새 암호 재입력:",
    qts: "CONFIGURE_PASSPHRASE_RETRY", // for unit test
  },
  confirmConfigurePassphrase: {
    "": "Confirm passphrase: ",
    ko: "암호 확인:",
    qts: "CONFIRM_CONFIGURE_PASSPHRASE", // for unit test
  },
};

function getLocale(): string {
  return Intl.DateTimeFormat().resolvedOptions().locale;
}

interface TtyPassphraseEntryOptions extends PassphraseReaderOptions {
  locale: string;
}

export class TtyPassphraseEntry implements PassphraseEntry {
  #options: TtyPassphraseEntryOptions;

  constructor(options: Partial<TtyPassphraseEntryOptions> = {}) {
    this.#options = {
      input: options.input ?? process.stdin,
      output: options.output ?? process.stdout,
      mask: options.mask ?? "*",
      locale: options.locale ?? getLocale(),
    };
  }

  #getPrompt(promptType: keyof typeof prompts) {
    const table = prompts[promptType];
    let locale = this.#options.locale;
    let msg;
    while (msg == null) {
      msg = table[locale];
      locale = locale.replace(/(^|[-_.])[^-_.]*$/, "");
    }
    return msg;
  }

  authenticate(keyId: KeyId, firstAttempt: boolean): Promise<Passphrase> {
    const message = this.#getPrompt(
      firstAttempt ? "authenticate" : "authenticateRetry",
    );
    const prompt = message.replace(/\{keyId\}/g, keyId);
    return readPassphrase(prompt, this.#options);
  }

  async configurePassphrase(): Promise<Passphrase> {
    let prompt = this.#getPrompt("configurePassphrase");
    const retryPrompt = this.#getPrompt("configurePassphraseRetry");
    const confirmPrompt = this.#getPrompt("confirmConfigurePassphrase");
    while (true) {
      const passphrase = await readPassphrase(prompt, this.#options);
      const confirmPassphrase = await readPassphrase(
        confirmPrompt,
        this.#options,
      );
      if (passphrase === confirmPassphrase) return passphrase;
      prompt = retryPrompt;
    }
  }
}
