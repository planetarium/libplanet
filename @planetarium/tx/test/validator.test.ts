import { encode } from "bencodex";
import { expect, test } from "vitest";
import { PublicKey } from "../src/key";
import { encodeValidator } from "../src/validator";
import { fromHex } from "./hex";

const publicKeyA: PublicKey = fromHex("033369e95dbfd970dd9a7b4df31dcf5004d7cfd63289d26cc42bbdd01e25675b6f");

test("encodeValidator", () => {
  const encoded = encodeValidator({
    publicKey: publicKeyA,
    power: 1n,
  });
  expect(encoded).toMatchSnapshot();
  expect(encode(encoded)).toMatchSnapshot();
});
