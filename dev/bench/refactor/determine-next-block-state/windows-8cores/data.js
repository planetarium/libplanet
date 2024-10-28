window.BENCHMARK_DATA = {
  "lastUpdate": 1730105927129,
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
      },
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
          "id": "89bac0812464be1baa837fd089c9c2a391a9c632",
          "message": "feat: execute states by condition",
          "timestamp": "2024-10-28T17:43:11+09:00",
          "tree_id": "cf6f8daf6f072698a7ea7449249c868667161f81",
          "url": "https://github.com/planetarium/libplanet/commit/89bac0812464be1baa837fd089c9c2a391a9c632"
        },
        "date": 1730105596993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994824.4897959183,
            "unit": "ns",
            "range": "± 98365.68220321566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1762338.775510204,
            "unit": "ns",
            "range": "± 69173.41377631573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570741.6666666667,
            "unit": "ns",
            "range": "± 139376.18664430728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6662576.923076923,
            "unit": "ns",
            "range": "± 232187.03266472876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28563.157894736843,
            "unit": "ns",
            "range": "± 1235.1448120633133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9739333.333333334,
            "unit": "ns",
            "range": "± 80026.48371156948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23639878.57142857,
            "unit": "ns",
            "range": "± 191688.21711940874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61292273.333333336,
            "unit": "ns",
            "range": "± 420150.03011962736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115782846.66666667,
            "unit": "ns",
            "range": "± 831785.4529922508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239761014.2857143,
            "unit": "ns",
            "range": "± 1568446.898077175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3357582.6822916665,
            "unit": "ns",
            "range": "± 10637.748213228642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099103.0078125,
            "unit": "ns",
            "range": "± 2278.777284048566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741915.6510416666,
            "unit": "ns",
            "range": "± 1313.4113088018455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929634.609375,
            "unit": "ns",
            "range": "± 2870.2880546964093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614789.1536458334,
            "unit": "ns",
            "range": "± 1168.005847859969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560395.947265625,
            "unit": "ns",
            "range": "± 1162.5630324560395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2214471.4285714286,
            "unit": "ns",
            "range": "± 32776.807667604255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298057.1428571427,
            "unit": "ns",
            "range": "± 32125.348589206344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2718845,
            "unit": "ns",
            "range": "± 59617.557242635725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2356913.3333333335,
            "unit": "ns",
            "range": "± 36424.45933840663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2946000,
            "unit": "ns",
            "range": "± 43535.97981510854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94132.55813953489,
            "unit": "ns",
            "range": "± 5835.942221632003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166567.1052631579,
            "unit": "ns",
            "range": "± 8474.595575922109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145295.65217391305,
            "unit": "ns",
            "range": "± 5108.9010134487235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2624757.1428571427,
            "unit": "ns",
            "range": "± 35233.87169026013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2476684.6153846155,
            "unit": "ns",
            "range": "± 24931.83527653771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11026.881720430107,
            "unit": "ns",
            "range": "± 1622.0049177635628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53669.14893617021,
            "unit": "ns",
            "range": "± 4595.791122548503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43558.333333333336,
            "unit": "ns",
            "range": "± 676.1634193720995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59639.393939393936,
            "unit": "ns",
            "range": "± 14423.944223959033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2779.381443298969,
            "unit": "ns",
            "range": "± 476.51909377840826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10803.092783505155,
            "unit": "ns",
            "range": "± 1999.5548258845552"
          }
        ]
      }
    ]
  }
}