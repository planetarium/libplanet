window.BENCHMARK_DATA = {
  "lastUpdate": 1742890789596,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "b1d96ff91b659d5ed066e72a3e1fb9a6002a2811",
          "message": "test: Change tx.bin",
          "timestamp": "2025-03-11T18:13:38+09:00",
          "tree_id": "56b1a3806a7626d429197468352950372021272a",
          "url": "https://github.com/planetarium/libplanet/commit/b1d96ff91b659d5ed066e72a3e1fb9a6002a2811"
        },
        "date": 1742890763563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2513823.3571428573,
            "unit": "ns",
            "range": "± 107713.63813834068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5228427.98989899,
            "unit": "ns",
            "range": "± 318698.4823780805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4070911.2083333335,
            "unit": "ns",
            "range": "± 247336.9189302601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15828831.49,
            "unit": "ns",
            "range": "± 7360034.972833185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22952.776315789473,
            "unit": "ns",
            "range": "± 1196.1880632373736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2394932.2,
            "unit": "ns",
            "range": "± 90835.73316672447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2351568.6363636362,
            "unit": "ns",
            "range": "± 83132.48234835513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3340896.0185185187,
            "unit": "ns",
            "range": "± 140149.69675092772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2531133.3076923075,
            "unit": "ns",
            "range": "± 86716.63013612783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2927399.46,
            "unit": "ns",
            "range": "± 830890.9828738783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2854393.153846154,
            "unit": "ns",
            "range": "± 7708.9390844455575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7431346.575757576,
            "unit": "ns",
            "range": "± 227165.20281215914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 15465767.815789474,
            "unit": "ns",
            "range": "± 124915.79153264838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25361044.17647059,
            "unit": "ns",
            "range": "± 153627.800856825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50848120.8,
            "unit": "ns",
            "range": "± 44468.692168439455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233314.32,
            "unit": "ns",
            "range": "± 29103.25437072756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 429924.4,
            "unit": "ns",
            "range": "± 46412.08718783624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161119.16666666666,
            "unit": "ns",
            "range": "± 10808.294713020588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 987148.358490566,
            "unit": "ns",
            "range": "± 39977.58676390018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 865508.6153846154,
            "unit": "ns",
            "range": "± 30863.21193059303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23461.470588235294,
            "unit": "ns",
            "range": "± 1304.623496027323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97778.101010101,
            "unit": "ns",
            "range": "± 15059.475212754605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39568.025,
            "unit": "ns",
            "range": "± 2346.52964320839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61945.88,
            "unit": "ns",
            "range": "± 32909.155212088524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3385.234693877551,
            "unit": "ns",
            "range": "± 1284.5148913915348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23652.56989247312,
            "unit": "ns",
            "range": "± 2401.881438254501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3879915.6552083334,
            "unit": "ns",
            "range": "± 18274.06168762269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 940806.7842122396,
            "unit": "ns",
            "range": "± 5208.317655516969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 699688.8466145833,
            "unit": "ns",
            "range": "± 4650.0040914569445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1724309.9603365385,
            "unit": "ns",
            "range": "± 4638.82426583757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462264.9904296875,
            "unit": "ns",
            "range": "± 2087.4365819115114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425084.68896484375,
            "unit": "ns",
            "range": "± 1512.1655155158091"
          }
        ]
      }
    ]
  }
}