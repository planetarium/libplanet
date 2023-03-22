import { AwsKmsKeyId } from "./AwsKmsKeyId.js";
import { KMSClient, SignCommand } from "@aws-sdk/client-kms";
import { Signature as NobleSignature } from "@noble/secp256k1";
import {
  type Account,
  type Message,
  PublicKey,
  Signature,
} from "@planetarium/account";

export class AwsKmsAccount implements Account {
  readonly #client: KMSClient;

  readonly keyId: AwsKmsKeyId;
  readonly publicKey: PublicKey;

  constructor(keyId: AwsKmsKeyId, publicKey: PublicKey, client: KMSClient) {
    this.keyId = keyId;
    this.publicKey = publicKey;
    this.#client = client;
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
