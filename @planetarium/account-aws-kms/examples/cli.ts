import { RawPrivateKey } from "@planetarium/account";
import { AwsKmsKeyStore, KMSClient } from "@planetarium/account-aws-kms";

// Expects the below environment variables:
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
const store = new AwsKmsKeyStore(
  new KMSClient({
    region: "ap-northeast-3",
  }),
);

if (process.argv[2] === "list") {
  for await (const key of store.list()) {
    console.log(key);
  }
} else if (process.argv[2] === "get") {
  const keyId = process.argv[3];
  if (keyId == null) {
    console.error("error: missing key id");
    process.exit(1);
  }
  const key = await store.get(keyId);
  console.log(key);
} else if (process.argv[2] === "generate") {
  console.log(await store.generate());
} else if (process.argv[2] === "delete") {
  const keyId = process.argv[3];
  if (keyId == null) {
    console.error("error: missing key id");
    process.exit(1);
  }
  const key = await store.delete(keyId);
  console.log(key);
} else {
  console.error("usage: cli.ts list|get|generate|delete");
  process.exit(1);
}
