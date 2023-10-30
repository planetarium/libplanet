import { type Message } from "./Message.js";
import Address from "./Address.js";
import PublicKey from "./PublicKey.js";
import RawPrivateKey from "./RawPrivateKey.js";
import Signature from "./Signature.js";

export interface Account {
  getAddress(): Promise<Address>;
  getPublicKey(): Promise<PublicKey>;
  sign(message: Message): Promise<Signature>;
}

export function isAccount(account: unknown): account is Account {
  return (
    typeof account === "object" &&
    account != null &&
    "getAddress" in account &&
    account.getAddress instanceof Function &&
    "getPublicKey" in account &&
    account.getPublicKey instanceof Function &&
    "sign" in account &&
    account.sign instanceof Function
  );
}

export interface ExportableAccount extends Account {
  exportPrivateKey(): Promise<RawPrivateKey>;
}

export default Account;
