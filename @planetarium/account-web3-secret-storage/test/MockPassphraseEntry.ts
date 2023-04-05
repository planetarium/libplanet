import { KeyId } from "../src/KeyId";
import { Passphrase, PassphraseEntry } from "../src/PassphraseEntry";

export class MockPassphraseEntry implements PassphraseEntry {
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
