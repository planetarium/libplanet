window.BENCHMARK_DATA = {
  "lastUpdate": 1689237175312,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "19fdfd85ed4dfb1e1066e213fd8c9a11648ab1da",
          "message": "refactor: introduce `Libplanet.Common`",
          "timestamp": "2023-07-13T17:16:03+09:00",
          "tree_id": "96fa10e3bf972068a8a90dc531478a06c21ef329",
          "url": "https://github.com/planetarium/libplanet/commit/19fdfd85ed4dfb1e1066e213fd8c9a11648ab1da"
        },
        "date": 1689237147080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346088.862745098,
            "unit": "ns",
            "range": "± 14010.819482128243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327608.9605263158,
            "unit": "ns",
            "range": "± 16653.949469873136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295147.95454545453,
            "unit": "ns",
            "range": "± 13203.229340910175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5383226.133333334,
            "unit": "ns",
            "range": "± 75023.16117408265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4791322.615384615,
            "unit": "ns",
            "range": "± 64873.76352134256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21651.043956043955,
            "unit": "ns",
            "range": "± 1718.1694193536193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103773.57894736843,
            "unit": "ns",
            "range": "± 6520.313906389013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88800.484375,
            "unit": "ns",
            "range": "± 4024.870136886357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106445.5,
            "unit": "ns",
            "range": "± 12643.706778264705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6160.117021276596,
            "unit": "ns",
            "range": "± 664.6118578859729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20920.195652173912,
            "unit": "ns",
            "range": "± 2059.0784412531825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1764634.3368421053,
            "unit": "ns",
            "range": "± 100327.60304055936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3303450.423076923,
            "unit": "ns",
            "range": "± 134081.71713202514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245777.1066666665,
            "unit": "ns",
            "range": "± 113503.20824821261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6386243.559139785,
            "unit": "ns",
            "range": "± 360075.4727370259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7344991.030208333,
            "unit": "ns",
            "range": "± 31335.79978027662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2286856.7065104167,
            "unit": "ns",
            "range": "± 10477.702455030352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1654823.7752604166,
            "unit": "ns",
            "range": "± 8983.095297606154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3156230.6125,
            "unit": "ns",
            "range": "± 7992.143315289031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993128.1626352164,
            "unit": "ns",
            "range": "± 5256.9149622169525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900243.6190104167,
            "unit": "ns",
            "range": "± 2449.368765556188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4131352.761904762,
            "unit": "ns",
            "range": "± 186789.03039350468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4430152,
            "unit": "ns",
            "range": "± 123942.04405315443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5400747,
            "unit": "ns",
            "range": "± 123491.1380707134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4805337.208333333,
            "unit": "ns",
            "range": "± 111658.65848666492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7909651.0322580645,
            "unit": "ns",
            "range": "± 240867.33126052105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9866519.029411765,
            "unit": "ns",
            "range": "± 312799.50374858774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26331825.333333332,
            "unit": "ns",
            "range": "± 480303.29322711244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65642642.93333333,
            "unit": "ns",
            "range": "± 951971.0697267964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132621372.53333333,
            "unit": "ns",
            "range": "± 2418533.6292405087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263876574.5,
            "unit": "ns",
            "range": "± 4090472.3803294594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55335.3870967742,
            "unit": "ns",
            "range": "± 3620.857762393308"
          }
        ]
      }
    ]
  }
}