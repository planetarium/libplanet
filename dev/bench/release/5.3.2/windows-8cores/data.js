window.BENCHMARK_DATA = {
  "lastUpdate": 1732171467942,
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
      },
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
          "id": "1016bd4c4497c1f88460d543d17430c47f4669af",
          "message": "Release 5.3.2",
          "timestamp": "2024-11-21T15:28:55+09:00",
          "tree_id": "df07ab43c0b7d586cd6ed2c4d15f88d8b220a3fa",
          "url": "https://github.com/planetarium/libplanet/commit/1016bd4c4497c1f88460d543d17430c47f4669af"
        },
        "date": 1732171186801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1073974,
            "unit": "ns",
            "range": "± 121309.12564039181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1851753.9682539683,
            "unit": "ns",
            "range": "± 84851.93712578974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586541.0256410257,
            "unit": "ns",
            "range": "± 77626.18121049115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6654641.463414635,
            "unit": "ns",
            "range": "± 223807.2429297249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29183.333333333332,
            "unit": "ns",
            "range": "± 1816.3138451093037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10096233.333333334,
            "unit": "ns",
            "range": "± 46229.31642334436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25657666.666666668,
            "unit": "ns",
            "range": "± 331587.90187017777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64147606.666666664,
            "unit": "ns",
            "range": "± 1137196.171961465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127801880,
            "unit": "ns",
            "range": "± 1672307.400484219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251707356.66666666,
            "unit": "ns",
            "range": "± 4034091.2512638844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3315846.7708333335,
            "unit": "ns",
            "range": "± 4695.088148652929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060925.15625,
            "unit": "ns",
            "range": "± 4987.988348686918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730684.0950520834,
            "unit": "ns",
            "range": "± 1464.262489245425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955467.0200892857,
            "unit": "ns",
            "range": "± 5256.068772123395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608627.3893229166,
            "unit": "ns",
            "range": "± 1168.2677739947856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573136.62109375,
            "unit": "ns",
            "range": "± 1506.1076446901332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125366.6666666665,
            "unit": "ns",
            "range": "± 26552.874637506793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192057.1428571427,
            "unit": "ns",
            "range": "± 17287.82204931527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2737800,
            "unit": "ns",
            "range": "± 42290.50326807032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2326300,
            "unit": "ns",
            "range": "± 58265.169698542886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2965369.230769231,
            "unit": "ns",
            "range": "± 33476.02088598605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189994.84536082475,
            "unit": "ns",
            "range": "± 11883.05315647404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176740,
            "unit": "ns",
            "range": "± 9559.938732618979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147439.2857142857,
            "unit": "ns",
            "range": "± 4194.205816821873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3105140,
            "unit": "ns",
            "range": "± 46762.57355743251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2586857.1428571427,
            "unit": "ns",
            "range": "± 22081.412799202662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13760.824742268042,
            "unit": "ns",
            "range": "± 2641.9909120550437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60844.897959183676,
            "unit": "ns",
            "range": "± 6835.4461607333615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47296.8085106383,
            "unit": "ns",
            "range": "± 3419.2513840684005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65643.87755102041,
            "unit": "ns",
            "range": "± 14206.895859554723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3167.0103092783506,
            "unit": "ns",
            "range": "± 709.8593830066707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11697.826086956522,
            "unit": "ns",
            "range": "± 1825.3392435482417"
          }
        ]
      }
    ]
  }
}