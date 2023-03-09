import { type Account } from "./Account.js";
import { RawPrivateKey } from "./RawPrivateKey.js";

export interface AccountMetadata<KeyId, Metadata = undefined> {
  readonly keyId: Readonly<KeyId>;
  readonly metadata: Readonly<Metadata>;
  readonly createdAt?: Readonly<Date>;
}

export type AccountRetrieval<
  KeyId,
  AccountType extends Account,
  Metadata = undefined,
> =
  | ({
      readonly result: "success";
      readonly account: AccountType;
    } & AccountMetadata<KeyId, Metadata>)
  | { readonly keyId: Readonly<KeyId>; readonly result: "keyNotFound" }
  | {
      readonly keyId: Readonly<KeyId>;
      readonly result: "error";
      readonly message?: string;
    };

export interface KeyStore<
  KeyId,
  AccountType extends Account,
  Metadata = undefined,
> {
  list(): AsyncIterable<AccountMetadata<KeyId, Metadata>>;
  get(
    keyId: Readonly<KeyId>,
  ): Promise<AccountRetrieval<KeyId, AccountType, Metadata>>;
}

export type AccountGeneration<KeyId, AccountType extends Account> =
  | {
      readonly result: "success";
      readonly keyId: Readonly<KeyId>;
      readonly account: AccountType;
    }
  | { readonly result: "error"; readonly message?: string };

export type AccountDeletion<KeyId> =
  | { readonly result: "success"; readonly keyId: Readonly<KeyId> }
  | { readonly result: "keyNotFound"; readonly keyId: Readonly<KeyId> }
  | { readonly result: "error"; readonly message?: string };

export interface MutableKeyStore<
  KeyId,
  AccountType extends Account,
  Metadata = undefined,
> extends KeyStore<KeyId, AccountType, Metadata> {
  generate(
    metadata?: Partial<Metadata>,
  ): Promise<AccountGeneration<KeyId, AccountType>>;
  delete(keyId: Readonly<KeyId>): Promise<AccountDeletion<KeyId>>;
}

export type AccountImportation<KeyId> =
  | { readonly result: "success"; readonly keyId: KeyId }
  | { readonly result: "error"; readonly message?: string };

export interface ImportableKeyStore<
  KeyId,
  AccountType extends Account,
  Metadata = undefined,
> extends MutableKeyStore<KeyId, AccountType, Metadata> {
  import(
    privateKey: RawPrivateKey,
    metadata?: Partial<Metadata>,
  ): Promise<AccountImportation<KeyId>>;
}
