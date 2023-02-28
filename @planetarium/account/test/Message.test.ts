import { hashMessage } from "../src/Message";
import { expect, test } from "vitest";

test("hashMessage()", async () => {
  const foo = new Uint8Array([0x66, 0x6f, 0x6f]);
  expect(await hashMessage(foo)).toStrictEqual(
    new Uint8Array(
      Buffer.from(
        "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae",
        "hex"
      )
    )
  );

  const bar = new Uint8Array([0x62, 0x61, 0x72]);
  expect(await hashMessage(bar)).toStrictEqual(
    new Uint8Array(
      Buffer.from(
        "fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9",
        "hex"
      )
    )
  );
});
