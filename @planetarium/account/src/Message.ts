import { sha256 } from "@noble/hashes/sha256";

export type Message = Uint8Array;

export async function hashMessage(message: Message): Promise<Uint8Array> {
  // TODO: Use Web Crypto API when it is available.
  // return new Uint8Array(await crypto!.subtle.digest("SHA-256", message));
  return sha256(message);
}

export default Message;
