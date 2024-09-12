window.BENCHMARK_DATA = {
  "lastUpdate": 1725604083194,
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
          "id": "286cc3595b9d29fb534ae2db82f1e27efde0b35c",
          "message": "feat: Add IActionService to load action loader from external assembly",
          "timestamp": "2024-09-05T17:22:39+09:00",
          "tree_id": "4b3cbb5c04d4387d240e976e6920b0d5332abb32",
          "url": "https://github.com/planetarium/libplanet/commit/286cc3595b9d29fb534ae2db82f1e27efde0b35c"
        },
        "date": 1725525178468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 950933.8709677419,
            "unit": "ns",
            "range": "± 70653.44123795937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704226.1904761905,
            "unit": "ns",
            "range": "± 54605.682092991774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1480291.1392405063,
            "unit": "ns",
            "range": "± 69245.99255251474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6643110.52631579,
            "unit": "ns",
            "range": "± 133668.82331899754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34203.030303030304,
            "unit": "ns",
            "range": "± 4940.3060003023475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9463250,
            "unit": "ns",
            "range": "± 45518.512717354904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23515178.57142857,
            "unit": "ns",
            "range": "± 113121.18198280467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57302453.333333336,
            "unit": "ns",
            "range": "± 199230.87062381627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115151886.66666667,
            "unit": "ns",
            "range": "± 419700.58692675986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234674914.2857143,
            "unit": "ns",
            "range": "± 951440.8279083829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336274.9479166665,
            "unit": "ns",
            "range": "± 2790.3308669745993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040442.9361979166,
            "unit": "ns",
            "range": "± 3239.7831853398534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741847.05078125,
            "unit": "ns",
            "range": "± 1399.8061640514434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914015.7505580357,
            "unit": "ns",
            "range": "± 1217.8085792843115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620779.3489583334,
            "unit": "ns",
            "range": "± 959.6530345392147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554557.1514423077,
            "unit": "ns",
            "range": "± 717.7381908706275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2151978.5714285714,
            "unit": "ns",
            "range": "± 24640.80975728082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2204584.210526316,
            "unit": "ns",
            "range": "± 48844.631948407994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2650694.4444444445,
            "unit": "ns",
            "range": "± 56287.18872335947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2228180,
            "unit": "ns",
            "range": "± 48022.731459613016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2915590.476190476,
            "unit": "ns",
            "range": "± 58363.977801053836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171135.84905660377,
            "unit": "ns",
            "range": "± 7107.528358113904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161083.33333333334,
            "unit": "ns",
            "range": "± 6990.613682194121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145339.13043478262,
            "unit": "ns",
            "range": "± 3590.737975609772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2715563.3333333335,
            "unit": "ns",
            "range": "± 30211.063883160106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2473746.153846154,
            "unit": "ns",
            "range": "± 23793.71819705835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9421.686746987953,
            "unit": "ns",
            "range": "± 437.29997316434043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50714.43298969072,
            "unit": "ns",
            "range": "± 4759.945502373636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43625,
            "unit": "ns",
            "range": "± 569.0901829794961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46962.244897959186,
            "unit": "ns",
            "range": "± 7800.046461745344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2401.0309278350514,
            "unit": "ns",
            "range": "± 375.969537041906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9471.739130434782,
            "unit": "ns",
            "range": "± 968.6657967042762"
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
          "id": "0a252d4c9b7232a09e0563098a69baffb0a2a4da",
          "message": "test: Add test code for ActionService",
          "timestamp": "2024-09-06T14:49:54+09:00",
          "tree_id": "1b2700491bd78407119e8beceb0d4771bb4d2367",
          "url": "https://github.com/planetarium/libplanet/commit/0a252d4c9b7232a09e0563098a69baffb0a2a4da"
        },
        "date": 1725602602957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982379.381443299,
            "unit": "ns",
            "range": "± 96743.95000264049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1739910,
            "unit": "ns",
            "range": "± 60841.626270009314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1514676.5957446808,
            "unit": "ns",
            "range": "± 100080.6872602301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6866955.555555556,
            "unit": "ns",
            "range": "± 189437.68476799017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30314.285714285714,
            "unit": "ns",
            "range": "± 406.877684998146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9743330.76923077,
            "unit": "ns",
            "range": "± 52575.17450621514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23318530.769230768,
            "unit": "ns",
            "range": "± 228419.95455963482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57390764.28571428,
            "unit": "ns",
            "range": "± 206677.2832113012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115857706.66666667,
            "unit": "ns",
            "range": "± 1558243.4421336036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232088520,
            "unit": "ns",
            "range": "± 1128528.624360056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3325181.171875,
            "unit": "ns",
            "range": "± 12153.749509896501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1094754.7433035714,
            "unit": "ns",
            "range": "± 2145.2951060603814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755823.193359375,
            "unit": "ns",
            "range": "± 5664.041572738559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933425.3208705357,
            "unit": "ns",
            "range": "± 10661.295805242318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614653.2486979166,
            "unit": "ns",
            "range": "± 2354.3605516973075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577812.3186383928,
            "unit": "ns",
            "range": "± 1601.5860293297644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133272.4137931033,
            "unit": "ns",
            "range": "± 45749.05070484074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2212100,
            "unit": "ns",
            "range": "± 62383.6635785482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2596561.5384615385,
            "unit": "ns",
            "range": "± 34959.82309407802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2226382.6086956523,
            "unit": "ns",
            "range": "± 54951.992702506104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2903638.4615384615,
            "unit": "ns",
            "range": "± 34178.80772402539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168814.54545454544,
            "unit": "ns",
            "range": "± 5502.101220908049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172734.4827586207,
            "unit": "ns",
            "range": "± 7541.919149965066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146894.11764705883,
            "unit": "ns",
            "range": "± 4710.847647875839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2725057.1428571427,
            "unit": "ns",
            "range": "± 27551.31476091377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2475980,
            "unit": "ns",
            "range": "± 29178.76429381967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10317.525773195875,
            "unit": "ns",
            "range": "± 1403.0480442354742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53793.333333333336,
            "unit": "ns",
            "range": "± 946.0192286377592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46310.34482758621,
            "unit": "ns",
            "range": "± 1242.504621315409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49761.95652173913,
            "unit": "ns",
            "range": "± 8294.256484788224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2269.0721649484535,
            "unit": "ns",
            "range": "± 293.4567063264572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9716.483516483517,
            "unit": "ns",
            "range": "± 1143.2180443587727"
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
          "id": "24c08d70a0badc5a4b25729e5477c9c96c9557dd",
          "message": "test: Add test code for ActionService",
          "timestamp": "2024-09-06T15:09:42+09:00",
          "tree_id": "a784d86d0ac7e276f49798009f515994eac9b12e",
          "url": "https://github.com/planetarium/libplanet/commit/24c08d70a0badc5a4b25729e5477c9c96c9557dd"
        },
        "date": 1725603699639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018844.9438202247,
            "unit": "ns",
            "range": "± 56253.88069691474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852706.5217391304,
            "unit": "ns",
            "range": "± 69159.78408222164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1547888.888888889,
            "unit": "ns",
            "range": "± 104593.51922102319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7006066,
            "unit": "ns",
            "range": "± 282629.6824323955"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34021.21212121212,
            "unit": "ns",
            "range": "± 4958.074690665614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9854106.666666666,
            "unit": "ns",
            "range": "± 152045.42773539128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23825040,
            "unit": "ns",
            "range": "± 210044.72244874763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59362417.64705882,
            "unit": "ns",
            "range": "± 1147553.0805998116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117129106.66666667,
            "unit": "ns",
            "range": "± 969314.3080598387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239441603.33333334,
            "unit": "ns",
            "range": "± 1693541.2517084118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3308445.46875,
            "unit": "ns",
            "range": "± 10192.816569825833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071024.8567708333,
            "unit": "ns",
            "range": "± 5850.316862561777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734642.9296875,
            "unit": "ns",
            "range": "± 2003.2755740699488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926124.0625,
            "unit": "ns",
            "range": "± 13145.519380553296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617770.7486979166,
            "unit": "ns",
            "range": "± 1699.6193262711038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552540.7291666666,
            "unit": "ns",
            "range": "± 2472.006425322167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221006.25,
            "unit": "ns",
            "range": "± 66627.3892024555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2242238.8235294116,
            "unit": "ns",
            "range": "± 120583.43001357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2632613.6363636362,
            "unit": "ns",
            "range": "± 64602.958029390466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2207346.6666666665,
            "unit": "ns",
            "range": "± 36938.904513624475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2833653.3333333335,
            "unit": "ns",
            "range": "± 48503.120174548225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167588.23529411765,
            "unit": "ns",
            "range": "± 7220.421482958704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159925.8620689655,
            "unit": "ns",
            "range": "± 6657.36791002369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142227.77777777778,
            "unit": "ns",
            "range": "± 2900.0619781522223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2695180,
            "unit": "ns",
            "range": "± 31472.282590059647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2481366.6666666665,
            "unit": "ns",
            "range": "± 36896.257391825115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9953.846153846154,
            "unit": "ns",
            "range": "± 755.9111782489457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49869.01408450704,
            "unit": "ns",
            "range": "± 2453.4868219562704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43057.627118644064,
            "unit": "ns",
            "range": "± 1856.2293435358745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47805.26315789474,
            "unit": "ns",
            "range": "± 8222.250150439002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2308.4210526315787,
            "unit": "ns",
            "range": "± 277.3979236813245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9170.329670329671,
            "unit": "ns",
            "range": "± 951.3142377778119"
          }
        ]
      }
    ]
  }
}