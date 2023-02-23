import { type Message } from "./Message.js";
import PublicKey from "./PublicKey.js";
import RawPrivateKey from "./RawPrivateKey.js";
import Signature from "./Signature.js";

export interface Account {
  publicKey: PublicKey;
  sign(message: Message): Promise<Signature>;
}

export interface ExportableAccount extends Account {
  exportPrivateKey(): Promise<RawPrivateKey>;
}

export default Account;
