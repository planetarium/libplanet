import {
  encodeUnsignedTxWithCustomActions,
  encodeUnsignedTxWithSystemAction,
} from "../../src/tx/unsigned";
import { FOO, key1, key2 } from "./fixtures";
import { RecordView, encode } from "@planetarium/bencodex";
import { execa } from "execa";
import { join } from "node:path";
import { expect, test } from "vitest";

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
    gasLimit: 1000000n,
    maxGasPrice: {
        rawValue: 12500n,
        currency: {
            ticker: "FOO",
            decimalPlaces: 2,
            totalSupplyTrackable: true,
            minters: null,
            maximumSupply: null,
        },
      },
    });
  const payload = encode(encoded);
  const { stdout } = await execa(
    "dotnet",
    [
      "run",
      "--no-build",
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
    nonce: 123,
    signer: "268344BA46e6CA2A8a5096565548b9018bc687Ce",
    updatedAddresses: [],
    actions: [
      {
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
    ],
    timestamp: "2022-05-23T01:02:00+00:00",
    publicKey:
      "0200e02709cc0c051dc105188c454a2e7ef7b36b85da34529d3abc1968167cf54f",
    genesisHash: null,
    gasLimit: 1000000,
    maxGasPrice: {
          "quantity": "125",
          "currency": {
            "decimalPlaces": 2,
            "minters": null,
            "ticker": "FOO",
            "totalSupplyTrackable": true,
            "hash": "946ea39b6f49926c0ed3df2a3aa0d2aba0f0fc25",
            "maximumSupply": null,
          },
    }
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
    gasLimit: null,
    maxGasPrice: null,
    customActions: [
      new RecordView(
        {
          type_id: "transfer_asset",
          values: {
            amount: [
              new RecordView(
                {
                  decimalPlaces: new Uint8Array([0x02]),
                  minters: [
                    new Uint8Array(
                      Buffer.from(
                        "47d082a115c63e7b58b1532d20e631538eafadde",
                        "hex",
                      ),
                    ),
                  ],
                  ticker: "NCG",
                },
                "text",
              ),
              1000n,
            ],
            recipient: new Uint8Array(
              Buffer.from("5a533067D0cBa77490268b26195EdB10B990143D", "hex"),
            ),
            sender: new Uint8Array(
              Buffer.from("111CB8E18c6D70f5032000c5739c5ac36E793EDB", "hex"),
            ),
          },
        },
        "text",
      ),
    ],
  });
  const payload = encode(encoded);
  const { stdout } = await execa(
    "dotnet",
    [
      "run",
      "--no-build",
      "--project",
      join(__dirname, "..", "..", "..", "..", "Libplanet.Tools"),
      "--",
      "tx",
      "analyze",
      "--unsigned",
      "-",
    ],
    {
      input: Buffer.from(payload),
    },
  );
  expect(JSON.parse(stdout)).toStrictEqual({
    nonce: 123,
    signer: "268344BA46e6CA2A8a5096565548b9018bc687Ce",
    updatedAddresses: [],
    actions: [
      {
        "\ufefftype_id": "\ufefftransfer_asset",
        "\ufeffvalues": {
          "\ufeffamount": [
            {
              "\ufeffdecimalPlaces": "0x02",
              "\ufeffminters": ["0x47d082a115c63e7b58b1532d20e631538eafadde"],
              "\ufeffticker": "\ufeffNCG",
            },
            "1000",
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
    gasLimit: null,
    maxGasPrice: null,
  });
}, 30_000);
