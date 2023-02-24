import { join } from "node:path";
import { encode } from "bencodex";
import { execa } from "execa";
import { expect, test } from "vitest";
import { encodeUnsignedTxWithCustomActions, encodeUnsignedTxWithSystemAction } from "../../src/tx/unsigned";
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

test("encodeUnsignedTxWithCustomActions", async () => {
  const encoded = encodeUnsignedTxWithCustomActions({
    nonce: 123n,
    publicKey: key1.public,
    signer: key1.address,
    timestamp: new Date("2022-05-23T01:02:00+00:00"),
    updatedAddresses: new Set(),
    genesisHash: null,
    customActions: [
      {
        type_id: "transfer_asset",
        values: {
          amount: [
            {
              decimalPlaces: Buffer.from([0x02]),
              minters: [Buffer.from("47d082a115c63e7b58b1532d20e631538eafadde", "hex")],
              ticker: "NCG",
            },
            1000,
          ],
          recipient: Buffer.from("5a533067D0cBa77490268b26195EdB10B990143D", "hex"),
          sender: Buffer.from("111CB8E18c6D70f5032000c5739c5ac36E793EDB", "hex"),
        },
      },
    ],
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
    id: "f03738f2d844906e1e5f889b6445e4cef6833444c2a5fc335a15fad074da8f2e",
    nonce: 123,
    signer: "268344BA46e6CA2A8a5096565548b9018bc687Ce",
    updatedAddresses: [],
    signature: "",
    customActions: [
      {
        "\ufefftype_id": "\ufefftransfer_asset",
        "\ufeffvalues": {
          "\ufeffamount": [
            {
              "\ufeffdecimalPlaces": "0x02",
              "\ufeffminters": [
                "0x47d082a115c63e7b58b1532d20e631538eafadde"
              ],
              "\ufeffticker": "\ufeffNCG",
            },
            "1000"
          ],
          "\ufeffsender": "0x111cb8e18c6d70f5032000c5739c5ac36e793edb",
          "\ufeffrecipient": "0x5a533067d0cba77490268b26195edb10b990143d",
        },
      },
    ],
    timestamp: "2022-05-23T01:02:00+00:00",
    publicKey:
      "0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f",
    genesisHash: null,
  });
}, 30_000);
