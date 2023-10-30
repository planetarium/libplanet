import { BencodexDictionary, Dictionary, encode } from "@planetarium/bencodex";
import { Account, Address, Signature } from "@planetarium/account";
import { type UnsignedTx, encodeUnsignedTx } from "./unsigned.js";
import { bytesEqual } from "../bytes.js";

const SIGNATURE_KEY = new Uint8Array([0x53]); // 'S'

export type SignedTx<T extends UnsignedTx> = T & { signature: Signature };

export async function signTx(
  tx: UnsignedTx,
  signAccount: Account
): Promise<SignedTx<typeof tx>> {
  if (
    !bytesEqual(
      tx.publicKey,
      (await signAccount.getPublicKey()).toBytes("uncompressed")
    )
  ) {
    throw new Error("Public keys in the tx and the signAccount are mismatched");
  } else if (
    !bytesEqual(
      tx.signer,
      Address.deriveFrom(await signAccount.getPublicKey()).toBytes()
    )
  ) {
    throw new Error("The transaction signer does not match to the signAccount");
  }
  const payload = encodeUnsignedTx(tx);
  const signature = await signAccount.sign(encode(payload));
  return {
    ...tx,
    signature,
  };
}

export function encodeSignedTx<T extends UnsignedTx>(
  tx: SignedTx<T>
): Dictionary {
  const dict = encodeUnsignedTx(tx);
  const sig = tx.signature.toBytes();
  return new BencodexDictionary([...dict, [SIGNATURE_KEY, sig]]);
}
