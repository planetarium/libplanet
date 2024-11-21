window.BENCHMARK_DATA = {
  "lastUpdate": 1732170946805,
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
          "id": "dc8b4db138fa7492ff258154907fcb7c39adecab",
          "message": "Release 5.3.2",
          "timestamp": "2024-11-21T15:24:46+09:00",
          "tree_id": "ca52bd1bf724252aa2f667f5618ddb0eea8c1a8b",
          "url": "https://github.com/planetarium/libplanet/commit/dc8b4db138fa7492ff258154907fcb7c39adecab"
        },
        "date": 1732170877669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946394.9494949495,
            "unit": "ns",
            "range": "± 82840.26228751795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1715118.9655172413,
            "unit": "ns",
            "range": "± 41803.111849652756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1430582.7586206896,
            "unit": "ns",
            "range": "± 82902.69472279851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6615510,
            "unit": "ns",
            "range": "± 170492.7666711391"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31160,
            "unit": "ns",
            "range": "± 4511.019056631542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9962728.57142857,
            "unit": "ns",
            "range": "± 92542.2433982817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24249815.384615384,
            "unit": "ns",
            "range": "± 110295.60920660627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60777333.333333336,
            "unit": "ns",
            "range": "± 229718.7859232688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119003026.66666667,
            "unit": "ns",
            "range": "± 637608.031705403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239142000,
            "unit": "ns",
            "range": "± 1054101.2637719938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3248191.8880208335,
            "unit": "ns",
            "range": "± 5359.218573771627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049422.377232143,
            "unit": "ns",
            "range": "± 1993.890769909173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 718710.9244791666,
            "unit": "ns",
            "range": "± 1302.1705793408084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926647.6171875,
            "unit": "ns",
            "range": "± 2670.7256144710136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632203.0729166666,
            "unit": "ns",
            "range": "± 1367.1232072268715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559618.1640625,
            "unit": "ns",
            "range": "± 526.9954753925197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2036283.3333333333,
            "unit": "ns",
            "range": "± 30102.63000691689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237857.1428571427,
            "unit": "ns",
            "range": "± 50644.521632932534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2615818.1818181816,
            "unit": "ns",
            "range": "± 63665.20793415114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2191346.6666666665,
            "unit": "ns",
            "range": "± 29518.07839919381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2874726.6666666665,
            "unit": "ns",
            "range": "± 51676.223693668784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181531.57894736843,
            "unit": "ns",
            "range": "± 9143.204551670284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166923.33333333334,
            "unit": "ns",
            "range": "± 7429.678613088545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143878.26086956522,
            "unit": "ns",
            "range": "± 3577.7032401120555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2728385.714285714,
            "unit": "ns",
            "range": "± 37805.12495056024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2428792.8571428573,
            "unit": "ns",
            "range": "± 18538.2541824161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11465.263157894737,
            "unit": "ns",
            "range": "± 1676.5445987844541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55754.08163265306,
            "unit": "ns",
            "range": "± 5573.911402521961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44779.545454545456,
            "unit": "ns",
            "range": "± 2579.100756184956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53443.01075268817,
            "unit": "ns",
            "range": "± 8025.955149029364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2263.265306122449,
            "unit": "ns",
            "range": "± 340.22059402446354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9620.87912087912,
            "unit": "ns",
            "range": "± 1101.5662065659546"
          }
        ]
      }
    ]
  }
}