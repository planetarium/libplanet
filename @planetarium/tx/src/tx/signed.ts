import { Encodable, encode } from "bencodex";
import { Account, Address, Signature } from "@planetarium/account";
import {
  type UnsignedTxWithSystemAction,
  type UnsignedTxWithCustomActions,
  encodeUnsignedTxWithSystemAction,
  encodeUnsignedTxWithCustomActions,
} from "./unsigned.js";
import { bytesEqual } from "../bytes.js";

const SIGNATURE_KEY = Buffer.from([0x53]); // 'S'

export type SignedTx<
  T extends UnsignedTxWithSystemAction | UnsignedTxWithCustomActions,
> = T & { signature: Signature };

export async function signTx(
  tx: UnsignedTxWithSystemAction | UnsignedTxWithCustomActions,
  signAccount: Account,
): Promise<SignedTx<typeof tx>> {
  if (
    !bytesEqual(tx.publicKey, signAccount.publicKey.toBytes("uncompressed"))
  ) {
    throw new Error("Public keys in the tx and the signAccount are mismatched");
  } else if (
    !bytesEqual(tx.signer, Address.deriveFrom(signAccount.publicKey).toBytes())
  ) {
    throw new Error("The transaction signer does not match to the signAccount");
  }
  const payload =
    "systemAction" in tx
      ? encodeUnsignedTxWithSystemAction(tx)
      : encodeUnsignedTxWithCustomActions(tx);
  const signature = await signAccount.sign(encode(payload));
  return {
    ...tx,
    signature,
  };
}

export function encodeSignedTx<
  T extends UnsignedTxWithSystemAction | UnsignedTxWithCustomActions,
>(tx: SignedTx<T>): Map<string | Buffer, Encodable> {
  const dict =
    "systemAction" in tx
      ? encodeUnsignedTxWithSystemAction(tx)
      : encodeUnsignedTxWithCustomActions(tx);
  const sig = tx.signature.toBytes();
  const sigBuffer = new ArrayBuffer(sig.length);
  new Uint8Array(sigBuffer).set(sig);
  dict.set(SIGNATURE_KEY, sigBuffer);
  return dict;
}
