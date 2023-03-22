import { AwsKmsAccount } from "./AwsKmsAccount.js";
import { AwsKmsKeyId } from "./AwsKmsKeyId.js";
import { AwsKmsMetadata } from "./AwsKmsMetadata.js";
import { parseSubjectPublicKeyInfo } from "./asn1.js";
import {
  CreateKeyCommand,
  DescribeKeyCommand,
  GetPublicKeyCommand,
  KMSClient,
  KMSInvalidStateException,
  type KeyMetadata,
  ListKeysCommand,
  ListResourceTagsCommand,
  NotFoundException,
  OriginType,
  ScheduleKeyDeletionCommand,
} from "@aws-sdk/client-kms";
import {
  type AccountDeletion,
  type AccountGeneration,
  type AccountMetadata,
  type AccountRetrieval,
  type MutableKeyStore,
  PublicKey,
} from "@planetarium/account";

export interface AwsKmsKeyStoreOptions {
  listWindow: number;
  scopingTags: Record<string, string>;
}

export class AwsKmsKeyStore
  implements MutableKeyStore<AwsKmsKeyId, AwsKmsAccount, AwsKmsMetadata>
{
  readonly #client: KMSClient;
  readonly #options: AwsKmsKeyStoreOptions;

  constructor(client: KMSClient, options: Partial<AwsKmsKeyStoreOptions> = {}) {
    this.#client = client;
    this.#options = {
      listWindow: options.listWindow ?? 100,
      scopingTags: options.scopingTags ?? {},
    };
  }

  #isValidKey(
    metadata: KeyMetadata,
  ): metadata is KeyMetadata & { KeyId: string } {
    return (
      metadata.KeyId != null &&
      metadata.Enabled === true &&
      metadata.DeletionDate == null &&
      metadata.KeySpec === "ECC_SECG_P256K1" &&
      metadata.KeyUsage === "SIGN_VERIFY"
    );
  }

  #mapMetadata(metadata: KeyMetadata): AwsKmsMetadata {
    return {
      customKeyStoreId: metadata.CustomKeyStoreId,
      description: metadata.Description ?? "",
      multiRegion: metadata.MultiRegion ?? false,
      origin: metadata.Origin ?? OriginType.AWS_KMS,
    };
  }

  async #hasTags(
    keyId: AwsKmsKeyId,
    tags: Record<string, string>,
  ): Promise<boolean> {
    let marker: string | undefined;
    const remainTags = new Map(Object.entries(tags));
    do {
      const cmd = new ListResourceTagsCommand({ KeyId: keyId, Marker: marker });
      const result = await this.#client.send(cmd);
      marker = result.NextMarker;
      if (result.Tags == null) continue;
      for (const { TagKey, TagValue } of result.Tags) {
        if (TagKey == null || TagValue == null) continue;
        if (remainTags.has(TagKey)) {
          if (remainTags.get(TagKey) === TagValue) {
            remainTags.delete(TagKey);
            if (remainTags.size < 1) return true;
          } else return false;
        }
      }
    } while (marker != null);
    return remainTags.size < 1;
  }

  async *list(): AsyncIterable<AccountMetadata<AwsKmsKeyId, AwsKmsMetadata>> {
    let nextMarker: string | undefined;
    const hasScopingTags = Object.keys(this.#options).length > 0;
    do {
      const listCmd = new ListKeysCommand({
        Marker: nextMarker,
        Limit: this.#options.listWindow,
      });
      const resp = await this.#client.send(listCmd);
      const keys = resp.Keys ?? [];
      for (let i = 0; i < keys.length; i += 5) {
        const promises = keys
          .slice(i, i + 5)
          .map(({ KeyId }) => new DescribeKeyCommand({ KeyId }))
          .map((cmd) => this.#client.send(cmd));
        const responses = await Promise.all(promises);
        for (const resp of responses) {
          const metadata = resp.KeyMetadata;
          if (
            metadata == null ||
            !this.#isValidKey(metadata) ||
            (hasScopingTags &&
              !this.#hasTags(metadata.KeyId, this.#options.scopingTags))
          ) {
            continue;
          }
          yield {
            keyId: metadata.KeyId,
            metadata: this.#mapMetadata(metadata),
            createdAt: metadata.CreationDate,
          };
        }
      }
      nextMarker = resp.NextMarker;
    } while (nextMarker != null);
  }

  async get(
    keyId: AwsKmsKeyId,
  ): Promise<AccountRetrieval<AwsKmsKeyId, AwsKmsAccount, AwsKmsMetadata>> {
    const descCmd = new DescribeKeyCommand({ KeyId: keyId });
    const pubKeyCmd = new GetPublicKeyCommand({ KeyId: keyId });
    const descPromise = this.#client.send(descCmd);
    const pubKeyPromise = this.#client.send(pubKeyCmd);
    let descResp;
    let pubKeyResp;
    try {
      [descResp, pubKeyResp] = await Promise.all([descPromise, pubKeyPromise]);
    } catch (e) {
      if (
        e instanceof NotFoundException ||
        e instanceof KMSInvalidStateException
      ) {
        return { result: "keyNotFound", keyId };
      }
      return { result: "error", keyId, message: `${e}` };
    }
    if (
      descResp.KeyMetadata == null ||
      !this.#isValidKey(descResp.KeyMetadata) ||
      pubKeyResp.PublicKey == null
    ) {
      return { result: "keyNotFound", keyId };
    }
    const publicKeyBytes: Uint8Array = parseSubjectPublicKeyInfo(
      pubKeyResp.PublicKey,
    );
    const publicKey = PublicKey.fromBytes(publicKeyBytes, "uncompressed");
    return {
      result: "success",
      keyId,
      account: new AwsKmsAccount(keyId, publicKey, this.#client),
      metadata: this.#mapMetadata(descResp.KeyMetadata),
      createdAt: descResp.KeyMetadata.CreationDate,
    };
  }

  async generate(
    metadata?: AwsKmsMetadata,
  ): Promise<AccountGeneration<AwsKmsKeyId, AwsKmsAccount>> {
    const cmd = new CreateKeyCommand({
      KeySpec: "ECC_SECG_P256K1",
      KeyUsage: "SIGN_VERIFY",
      CustomKeyStoreId: metadata?.customKeyStoreId,
      Description: metadata?.description,
      MultiRegion: metadata?.multiRegion,
      Origin: metadata?.origin,
      Tags: Object.entries(this.#options.scopingTags).map(
        ([TagKey, TagValue]) => ({ TagKey, TagValue }),
      ),
    });
    let response;
    try {
      response = await this.#client.send(cmd);
    } catch (e) {
      return { result: "error", message: `${e}` };
    }
    const keyId = response.KeyMetadata?.KeyId;
    if (keyId == null) {
      return { result: "error", message: "failed to determine keyId" };
    }
    const pubKeyCmd = new GetPublicKeyCommand({ KeyId: keyId });
    let pubKeyResp;
    try {
      pubKeyResp = await this.#client.send(pubKeyCmd);
    } catch (e) {
      return { result: "error", message: `${e}` };
    }
    if (pubKeyResp.PublicKey == null) {
      return { result: "error", message: "failed to get public key" };
    }
    const publicKeyBytes: Uint8Array = parseSubjectPublicKeyInfo(
      pubKeyResp.PublicKey,
    );
    const publicKey = PublicKey.fromBytes(publicKeyBytes, "uncompressed");
    const account = new AwsKmsAccount(keyId, publicKey, this.#client);
    return { result: "success", keyId, account };
  }

  async delete(keyId: AwsKmsKeyId): Promise<AccountDeletion<AwsKmsKeyId>> {
    const cmd = new ScheduleKeyDeletionCommand({ KeyId: keyId });
    try {
      await this.#client.send(cmd);
    } catch (e) {
      if (
        e instanceof NotFoundException ||
        e instanceof KMSInvalidStateException
      ) {
        return { result: "keyNotFound", keyId };
      }
      return { result: "error", message: `${e}` };
    }
    return { result: "success", keyId };
  }
}
