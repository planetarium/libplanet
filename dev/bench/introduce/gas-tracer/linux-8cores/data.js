window.BENCHMARK_DATA = {
  "lastUpdate": 1720694723135,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "47aad3fd44f64470dfb29e066e70a5ea8fa9ec57",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-11T19:34:24+09:00",
          "tree_id": "e1ce2f2894f4cd42bcca2e3a3c33fb811626d035",
          "url": "https://github.com/planetarium/libplanet/commit/47aad3fd44f64470dfb29e066e70a5ea8fa9ec57"
        },
        "date": 1720694697468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746337.535286458,
            "unit": "ns",
            "range": "± 43475.32368117512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201409.41484375,
            "unit": "ns",
            "range": "± 3326.6514921934017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779044.6621907552,
            "unit": "ns",
            "range": "± 997.9898859164526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943884.293247768,
            "unit": "ns",
            "range": "± 2626.6458551780074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615240.8270733173,
            "unit": "ns",
            "range": "± 423.7155855715511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582536.0412109375,
            "unit": "ns",
            "range": "± 960.9332531802661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2539409.5,
            "unit": "ns",
            "range": "± 80795.54137788455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2600832.8333333335,
            "unit": "ns",
            "range": "± 39307.956504043934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3049788.1333333333,
            "unit": "ns",
            "range": "± 46470.36176327363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2637172.1428571427,
            "unit": "ns",
            "range": "± 45431.39199489057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3219255.9285714286,
            "unit": "ns",
            "range": "± 34135.94635641953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045814.4948453609,
            "unit": "ns",
            "range": "± 87198.55118924037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2019717.012987013,
            "unit": "ns",
            "range": "± 102777.191346454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708036.3333333333,
            "unit": "ns",
            "range": "± 83750.08220891487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8288276.173913044,
            "unit": "ns",
            "range": "± 182614.95045379255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207924.8125,
            "unit": "ns",
            "range": "± 8190.281837709678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192323.91044776118,
            "unit": "ns",
            "range": "± 9022.573794136946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173572,
            "unit": "ns",
            "range": "± 4115.241542410476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3081573.2333333334,
            "unit": "ns",
            "range": "± 40962.49071400856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2812537.5,
            "unit": "ns",
            "range": "± 37767.21564872294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13411.977528089888,
            "unit": "ns",
            "range": "± 925.478684219048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68751.43298969071,
            "unit": "ns",
            "range": "± 11051.188336278607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51667.84444444445,
            "unit": "ns",
            "range": "± 1831.1023251726062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66419.33673469388,
            "unit": "ns",
            "range": "± 10778.557323604318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3147.978021978022,
            "unit": "ns",
            "range": "± 775.8651225570643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19814.737373737375,
            "unit": "ns",
            "range": "± 4812.793962579534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10934019.214285715,
            "unit": "ns",
            "range": "± 60164.87681258581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28211858.4,
            "unit": "ns",
            "range": "± 121268.72757923088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72304814.66666667,
            "unit": "ns",
            "range": "± 372159.15162710904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143994264.06666666,
            "unit": "ns",
            "range": "± 756562.2451876331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301074570.0714286,
            "unit": "ns",
            "range": "± 1163849.9538738108"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36222.71276595745,
            "unit": "ns",
            "range": "± 2481.446399544784"
          }
        ]
      }
    ]
  }
}