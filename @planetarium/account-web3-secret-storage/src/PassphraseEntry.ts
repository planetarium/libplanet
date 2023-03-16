import { KeyId } from "./KeyId.js";

export type Passphrase = Uint8Array | string;

export interface PassphraseEntry {
  authenticate(keyId: KeyId, firstAttempt: boolean): Promise<Passphrase>;
  configurePassphrase(): Promise<Passphrase>;
}
