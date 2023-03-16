import { RawPrivateKey } from "@planetarium/account";
import {
  TtyPassphraseEntry,
  Web3KeyStore,
} from "@planetarium/account-web3-secret-storage";

const store = new Web3KeyStore({ passphraseEntry: new TtyPassphraseEntry() });

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
} else if (process.argv[2] === "import") {
  const privateKeyHex = process.argv[3];
  if (privateKeyHex == null) {
    console.error("error: missing private key hex");
    process.exit(1);
  }
  const privateKey = RawPrivateKey.fromHex(privateKeyHex);
  console.log(await store.import(privateKey, undefined));
} else if (process.argv[2] === "delete") {
  const keyId = process.argv[3];
  if (keyId == null) {
    console.error("error: missing key id");
    process.exit(1);
  }
  const key = await store.delete(keyId);
  console.log(key);
} else {
  console.error("usage: cli.ts list|get|generate|import|delete");
  process.exit(1);
}
