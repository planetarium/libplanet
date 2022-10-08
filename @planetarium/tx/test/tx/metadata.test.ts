import { encode } from "bencodex";
import { expect, test } from "vitest";
import { encodeTxMetadata } from "../../src/tx/metadata";
import { key1 } from "./fixtures";

test("encodeTxMetadata", () => {
  const encoded = encodeTxMetadata({
    nonce: 123n,
    publicKey: key1.public,
    signer: key1.address,
    timestamp: new Date("2022-05-23T01:02:00+00:00"),
    updatedAddresses: new Set(),
    genesisHash: null,
  });
  expect(encoded).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();
});
