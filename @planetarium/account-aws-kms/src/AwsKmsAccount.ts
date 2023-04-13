import { AwsKmsKeyId } from "./AwsKmsKeyId.js";
import { KMSClient, SignCommand } from "@aws-sdk/client-kms";
import { Signature as NobleSignature } from "@noble/secp256k1";
import {
  Address,
  type Account,
  type Message,
  PublicKey,
  Signature,
} from "@planetarium/account";

export class AwsKmsAccount implements Account {
  readonly #client: KMSClient;

  readonly keyId: AwsKmsKeyId;

  // TODO: This attribute is deprecated.  We should remove it and make
  // getPublicKey() method the only choice in the future.
  /**
   * @deprecated Use {@link getPublicKey()} instead.
   */
  readonly publicKey: PublicKey;

  constructor(keyId: AwsKmsKeyId, publicKey: PublicKey, client: KMSClient) {
    this.keyId = keyId;
    this.publicKey = publicKey;
    this.#client = client;
  }

  getAddress(): Promise<Address> {
    return Promise.resolve(Address.deriveFrom(this.publicKey));
  }

  getPublicKey(): Promise<PublicKey> {
    return Promise.resolve(this.publicKey);
  }

  async sign(message: Message): Promise<Signature> {
    const cmd = new SignCommand({
      KeyId: this.keyId,
      Message: message,
      SigningAlgorithm: "ECDSA_SHA_256",
    });
    const response = await this.#client.send(cmd);
    if (response.Signature == null) throw new Error("Failed to sign message");
    const sig = NobleSignature.fromDER(response.Signature).normalizeS();
    return Signature.fromHex(sig.toDERHex());
  }
}

export default AwsKmsAccount;
