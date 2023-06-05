import { crypto } from "#crypto";

export type KeyId = string;

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isKeyId(keyId: string): keyId is KeyId {
  return !!keyId.match(UUID_PATTERN);
}

export function generateKeyId(): KeyId {
  return crypto.randomUUID();
}

export default KeyId;
