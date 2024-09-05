window.BENCHMARK_DATA = {
  "lastUpdate": 1725525048205,
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
          "id": "428330408c520bc52a7a8f7071f381e43979ab8b",
          "message": "feat: Add the feature to load action loader from external assembly",
          "timestamp": "2024-08-27T09:50:57+09:00",
          "tree_id": "656a1dac46e2f88d4e6c42ee262131e1eccc417c",
          "url": "https://github.com/planetarium/libplanet/commit/428330408c520bc52a7a8f7071f381e43979ab8b"
        },
        "date": 1724720617922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025212.6315789474,
            "unit": "ns",
            "range": "± 87197.85552958609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865789.2857142857,
            "unit": "ns",
            "range": "± 100157.4591870668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1627734,
            "unit": "ns",
            "range": "± 126858.35791833888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7953405.263157895,
            "unit": "ns",
            "range": "± 635747.6249515832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30784.615384615383,
            "unit": "ns",
            "range": "± 418.02343205087175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9806907.142857144,
            "unit": "ns",
            "range": "± 134854.79635111647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24176962.068965517,
            "unit": "ns",
            "range": "± 701030.2537866237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62545607.40740741,
            "unit": "ns",
            "range": "± 1581696.8721368944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117285164.28571428,
            "unit": "ns",
            "range": "± 1210627.8222521525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239213620,
            "unit": "ns",
            "range": "± 1745632.8002025103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319343.028846154,
            "unit": "ns",
            "range": "± 7959.168851463412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1091523.6607142857,
            "unit": "ns",
            "range": "± 5653.455312011954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744168.9313616072,
            "unit": "ns",
            "range": "± 2564.817063331945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904000.625,
            "unit": "ns",
            "range": "± 5035.359449583291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626670.0455729166,
            "unit": "ns",
            "range": "± 2006.2743037242449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592104.7330729166,
            "unit": "ns",
            "range": "± 1955.9989826884378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2192900,
            "unit": "ns",
            "range": "± 34816.773146110085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287921.052631579,
            "unit": "ns",
            "range": "± 47100.21914253536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2712919.565217391,
            "unit": "ns",
            "range": "± 103685.92451258263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2258775.8620689656,
            "unit": "ns",
            "range": "± 98409.18925560535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3403385.567010309,
            "unit": "ns",
            "range": "± 269698.61419342185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164707.31707317074,
            "unit": "ns",
            "range": "± 5304.261977122852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156009.23076923078,
            "unit": "ns",
            "range": "± 6053.91719975905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141675,
            "unit": "ns",
            "range": "± 2214.466896651119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809830.303030303,
            "unit": "ns",
            "range": "± 126185.24961914218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540322.972972973,
            "unit": "ns",
            "range": "± 126506.37273167423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11148.924731182795,
            "unit": "ns",
            "range": "± 885.940255083475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52541.30434782609,
            "unit": "ns",
            "range": "± 4577.600796182609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44217.142857142855,
            "unit": "ns",
            "range": "± 1458.1385624236439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54979.166666666664,
            "unit": "ns",
            "range": "± 10426.41298430569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2334.6938775510203,
            "unit": "ns",
            "range": "± 493.4837322371911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10019.78021978022,
            "unit": "ns",
            "range": "± 1031.311977824555"
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
          "id": "350f808856c80bc5d7e7f0dbfd0a3e615d74eb22",
          "message": "feat: Add the feature to load action loader from external assembly",
          "timestamp": "2024-09-05T17:14:15+09:00",
          "tree_id": "bb76e1003837b118eca277142aa7abfe2b09429b",
          "url": "https://github.com/planetarium/libplanet/commit/350f808856c80bc5d7e7f0dbfd0a3e615d74eb22"
        },
        "date": 1725524784369,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1089686.3157894737,
            "unit": "ns",
            "range": "± 116292.6925591852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918213.043478261,
            "unit": "ns",
            "range": "± 87696.8540468737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665203.1914893617,
            "unit": "ns",
            "range": "± 124329.52871355612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7047730,
            "unit": "ns",
            "range": "± 159618.5654021882"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35640.625,
            "unit": "ns",
            "range": "± 6175.274605017045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9874456,
            "unit": "ns",
            "range": "± 259608.62703949833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24720876,
            "unit": "ns",
            "range": "± 636255.1514395253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61361472.72727273,
            "unit": "ns",
            "range": "± 1492381.0059230274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125296525,
            "unit": "ns",
            "range": "± 2451478.4435791667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244930893.33333334,
            "unit": "ns",
            "range": "± 3993808.3837836976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3500004.715401786,
            "unit": "ns",
            "range": "± 8319.939130109375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093359.4270833333,
            "unit": "ns",
            "range": "± 3056.1718207451404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755417.4595424107,
            "unit": "ns",
            "range": "± 1157.6190583287737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1988574.9441964286,
            "unit": "ns",
            "range": "± 4246.656208482052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632986.8359375,
            "unit": "ns",
            "range": "± 1240.274911128365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586889.1950334822,
            "unit": "ns",
            "range": "± 1353.3520685990188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170259.7014925373,
            "unit": "ns",
            "range": "± 102940.95403721184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245030,
            "unit": "ns",
            "range": "± 124769.98022878794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774767.7419354836,
            "unit": "ns",
            "range": "± 67560.4735877262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2372720,
            "unit": "ns",
            "range": "± 100355.06113941786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3039633.3333333335,
            "unit": "ns",
            "range": "± 61292.44267780298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190197.8494623656,
            "unit": "ns",
            "range": "± 11388.81963665342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179985.88235294117,
            "unit": "ns",
            "range": "± 9404.838584235149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158730.20833333334,
            "unit": "ns",
            "range": "± 14118.618687405326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2890992.8571428573,
            "unit": "ns",
            "range": "± 46500.97541219662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2732733.3333333335,
            "unit": "ns",
            "range": "± 46938.708769547346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14647.916666666666,
            "unit": "ns",
            "range": "± 2162.8431174907705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62129.47368421053,
            "unit": "ns",
            "range": "± 6566.110181190547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55395.78947368421,
            "unit": "ns",
            "range": "± 7788.014738829687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77905.26315789473,
            "unit": "ns",
            "range": "± 15228.147010262985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4063.265306122449,
            "unit": "ns",
            "range": "± 1137.2228566970657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13082.105263157895,
            "unit": "ns",
            "range": "± 1877.4688113888772"
          }
        ]
      }
    ]
  }
}