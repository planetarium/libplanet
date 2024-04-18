window.BENCHMARK_DATA = {
  "lastUpdate": 1713415882277,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713415818068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1839334.5360824743,
            "unit": "ns",
            "range": "± 222314.34405111225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2927515.3846153845,
            "unit": "ns",
            "range": "± 255012.93732892888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2687800,
            "unit": "ns",
            "range": "± 71507.51009509421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8283320.689655173,
            "unit": "ns",
            "range": "± 241185.003649111"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 181034.2857142857,
            "unit": "ns",
            "range": "± 5892.015677125766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5005213.333333333,
            "unit": "ns",
            "range": "± 22782.10032543302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13327486.666666666,
            "unit": "ns",
            "range": "± 99959.49798841149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33055760,
            "unit": "ns",
            "range": "± 424649.17419307097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66010353.333333336,
            "unit": "ns",
            "range": "± 1084866.3392765203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131651646.66666667,
            "unit": "ns",
            "range": "± 1389534.3335431616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288964.6614583335,
            "unit": "ns",
            "range": "± 7689.057321734516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082949.375,
            "unit": "ns",
            "range": "± 1582.1451372009008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754299.2513020834,
            "unit": "ns",
            "range": "± 701.3422695687415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908224.916294643,
            "unit": "ns",
            "range": "± 2807.3309053608473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612822.05078125,
            "unit": "ns",
            "range": "± 1434.0905377068777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562749.3033854166,
            "unit": "ns",
            "range": "± 885.6677984821168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2563769.4444444445,
            "unit": "ns",
            "range": "± 76465.69284679033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2673087.234042553,
            "unit": "ns",
            "range": "± 96329.81302258285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3524956.603773585,
            "unit": "ns",
            "range": "± 122362.82666636257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3362078.787878788,
            "unit": "ns",
            "range": "± 355994.034939915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8851605.88235294,
            "unit": "ns",
            "range": "± 178520.9434130255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172096.38554216866,
            "unit": "ns",
            "range": "± 9141.80221575503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164264.44444444444,
            "unit": "ns",
            "range": "± 9762.946588627048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142439.62264150943,
            "unit": "ns",
            "range": "± 5919.762846816959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2723933.3333333335,
            "unit": "ns",
            "range": "± 35030.775585122836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2420392.3076923075,
            "unit": "ns",
            "range": "± 33895.955057067935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10367.741935483871,
            "unit": "ns",
            "range": "± 1744.5668012383965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50696.739130434784,
            "unit": "ns",
            "range": "± 3558.0415370749797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43577.19298245614,
            "unit": "ns",
            "range": "± 1892.6566309838186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49319.58762886598,
            "unit": "ns",
            "range": "± 8678.993307301182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2301.0309278350514,
            "unit": "ns",
            "range": "± 293.85896750568145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9284.536082474227,
            "unit": "ns",
            "range": "± 1362.2392874560107"
          }
        ]
      }
    ]
  }
}