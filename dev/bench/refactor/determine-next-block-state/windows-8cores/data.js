window.BENCHMARK_DATA = {
  "lastUpdate": 1730105458238,
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
          "id": "de936b06196be9c33f60fc2577bb31097dd42c96",
          "message": "feat: execute states by condition",
          "timestamp": "2024-10-28T17:35:07+09:00",
          "tree_id": "533fa0dd1d522a54577c03fd8e0ff0df08b480e0",
          "url": "https://github.com/planetarium/libplanet/commit/de936b06196be9c33f60fc2577bb31097dd42c96"
        },
        "date": 1730105167784,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061163.6363636365,
            "unit": "ns",
            "range": "± 109035.96434817187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858995.1219512196,
            "unit": "ns",
            "range": "± 65486.45642886593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1614607.7777777778,
            "unit": "ns",
            "range": "± 100362.27997707731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6878782.352941177,
            "unit": "ns",
            "range": "± 211156.77425909883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30482.954545454544,
            "unit": "ns",
            "range": "± 2066.1042017823734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10436250,
            "unit": "ns",
            "range": "± 102106.69193770572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25849733.333333332,
            "unit": "ns",
            "range": "± 333909.52082149155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63365469.23076923,
            "unit": "ns",
            "range": "± 410353.93541148386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126529130.76923077,
            "unit": "ns",
            "range": "± 658334.8380378779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253215925,
            "unit": "ns",
            "range": "± 1136630.3861734152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3403491.9270833335,
            "unit": "ns",
            "range": "± 8027.141569711604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070644.3229166667,
            "unit": "ns",
            "range": "± 2345.6142470294703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757994.8502604166,
            "unit": "ns",
            "range": "± 1283.377063256233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948533.3286830357,
            "unit": "ns",
            "range": "± 10218.854643846806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624843.49609375,
            "unit": "ns",
            "range": "± 593.5079621053976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565295.7291666666,
            "unit": "ns",
            "range": "± 1257.289573176161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2325300,
            "unit": "ns",
            "range": "± 34221.435777399325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2367386.6666666665,
            "unit": "ns",
            "range": "± 40154.858568629854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2845714.285714286,
            "unit": "ns",
            "range": "± 34314.245912266124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2407040,
            "unit": "ns",
            "range": "± 78900.74628738237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3087513.3333333335,
            "unit": "ns",
            "range": "± 55483.741076188475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105546.66666666667,
            "unit": "ns",
            "range": "± 5342.166109242461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176304,
            "unit": "ns",
            "range": "± 7012.436765330231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170750.66666666666,
            "unit": "ns",
            "range": "± 8631.500657684248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2678135.714285714,
            "unit": "ns",
            "range": "± 25949.969827842462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2625973.3333333335,
            "unit": "ns",
            "range": "± 38005.40312464356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14692.553191489362,
            "unit": "ns",
            "range": "± 1831.6946358702173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63142.10526315789,
            "unit": "ns",
            "range": "± 7117.39820600508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55801.030927835054,
            "unit": "ns",
            "range": "± 8321.727270191577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73153.48837209302,
            "unit": "ns",
            "range": "± 9942.241405170504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3962.3711340206187,
            "unit": "ns",
            "range": "± 1141.1121888278158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14290.425531914894,
            "unit": "ns",
            "range": "± 2022.032893223202"
          }
        ]
      }
    ]
  }
}