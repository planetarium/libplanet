import { type Message } from "./Message.js";
import PublicKey from "./PublicKey.js";
import RawPrivateKey from "./RawPrivateKey.js";
import Signature from "./Signature.js";

export interface Account {
  publicKey: PublicKey;
  sign(message: Message): Promise<Signature>;
}

export function isAccount(account: unknown): account is Account {
  return (
    (account as { publicKey: unknown }).publicKey instanceof PublicKey &&
    (account as { sign: unknown }).sign instanceof Function
  );
}

export interface ExportableAccount extends Account {
  exportPrivateKey(): Promise<RawPrivateKey>;
}

export default Account;
