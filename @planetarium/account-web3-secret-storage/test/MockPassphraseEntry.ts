import { KeyId } from "../src/KeyId";
import { Passphrase, PassphraseEntry } from "../src/PassphraseEntry";

export class MockPassphraseEntry implements PassphraseEntry {
  rightPassphrase: Passphrase;
  authenticateCalls: { keyId: KeyId; firstAttempt: boolean }[] = [];
  configurePassphraseCalls: number = 0;
  temporaryAuthenticateResult: { passphrase: Passphrase; times: number } = {
    passphrase: "passphrase",
    times: 0,
  };

  constructor(rightPassphrase: Passphrase = "passphrase") {
    this.rightPassphrase = rightPassphrase;
  }

  setTemporaryAuthenticateResult(passphrase: Passphrase, times: number) {
    this.temporaryAuthenticateResult = { passphrase, times };
  }

  async authenticate(keyId: KeyId, firstAttempt: boolean): Promise<Passphrase> {
    this.authenticateCalls.push({ keyId, firstAttempt });
    if (this.temporaryAuthenticateResult.times > 0) {
      this.temporaryAuthenticateResult.times--;
      return this.temporaryAuthenticateResult.passphrase;
    }
    if (this.authenticateCalls.length > 10) {
      throw new Error("Failed to authenticate too many times; probably a bug");
    }
    return this.rightPassphrase;
  }

  async configurePassphrase(): Promise<Passphrase> {
    this.configurePassphraseCalls++;
    return this.rightPassphrase;
  }
}
