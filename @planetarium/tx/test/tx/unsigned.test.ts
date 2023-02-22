import { join } from "node:path";
import { encode } from "bencodex";
import { execa } from "execa";
import { expect, test } from "vitest";
import { encodeUnsignedTxWithSystemAction } from "../../src/tx/unsigned";
import { FOO, key1, key2 } from "./fixtures";

test("encodeUnsignedTxWithSystemAction", async () => {
  const encoded = encodeUnsignedTxWithSystemAction({
    nonce: 123n,
    publicKey: key1.public,
    signer: key1.address,
    timestamp: new Date("2022-05-23T01:02:00+00:00"),
    updatedAddresses: new Set(),
    genesisHash: null,
    systemAction: {
      type: "transfer",
      recipient: key2.address,
      amount: {
        rawValue: 12500n,
        currency: FOO,
      },
    },
  });
  const payload = encode(encoded);
  const { stdout } = await execa(
    "dotnet",
    [
      "run",
      "--project",
      join(__dirname, "..", "..", "..", "..", "Libplanet.Tools"),
      "--",
      "tx",
      "analyze",
      "--unsigned",
      "-",
    ],
    { input: payload },
  );
  expect(JSON.parse(stdout)).toStrictEqual({
    id: "e3286d7b5f1b2a7a434f8a2827bcf36072e3b52091959f8cd6a3e64a62f13d0b",
    nonce: 123,
    signer: "268344BA46e6CA2A8a5096565548b9018bc687Ce",
    updatedAddresses: [],
    signature: "",
    systemAction: {
      "\ufefftype_id": "1",
      "\ufeffvalues": {
        "\ufeffamount": "12500",
        "\ufeffcurrency": {
          "\ufeffdecimals": "2",
          "\ufeffminters": null,
          "\ufeffticker": "\ufeffFOO",
          "\ufefftotalSupplyTrackable": true,
        },
        "\ufeffrecipient": "0x8a29de186b85560d708451101c4bf02d63b25c50",
      },
    },
    timestamp: "2022-05-23T01:02:00+00:00",
    publicKey:
      "0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f",
    genesisHash: null,
  });
}, 30_000);
