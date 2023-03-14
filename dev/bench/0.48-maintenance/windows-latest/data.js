window.BENCHMARK_DATA = {
  "lastUpdate": 1678784075842,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f40550f24d6e65b9022bce3b49fb4398fca7dca5",
          "message": "Merge pull request #2909 from colibrishin/benchmark/fix/0.48-maintenance\n\nci/bench: cherrypick of bench pr update to 0.48-maintenance",
          "timestamp": "2023-03-10T11:50:41+09:00",
          "tree_id": "b8377ad036a6e981a456e455b5c1b38f0ac2e7e7",
          "url": "https://github.com/planetarium/libplanet/commit/f40550f24d6e65b9022bce3b49fb4398fca7dca5"
        },
        "date": 1678417478172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101885,
            "unit": "ns",
            "range": "± 3613.617407699765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4878837.65625,
            "unit": "ns",
            "range": "± 18132.844352487104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1535277.9296875,
            "unit": "ns",
            "range": "± 5796.609903001915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156242.2154017857,
            "unit": "ns",
            "range": "± 2372.9927440792467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632417.2395833335,
            "unit": "ns",
            "range": "± 5098.012796410539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833103.271484375,
            "unit": "ns",
            "range": "± 908.9580976850574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760788.2682291666,
            "unit": "ns",
            "range": "± 1223.4988826485526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4678103.932291667,
            "unit": "ns",
            "range": "± 45661.76360194614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5731146.428571428,
            "unit": "ns",
            "range": "± 158996.57923677072"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25636492.85714286,
            "unit": "ns",
            "range": "± 388181.4216302747"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6112700,
            "unit": "ns",
            "range": "± 92138.63777714847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28018675,
            "unit": "ns",
            "range": "± 546941.9439026413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87286.51685393258,
            "unit": "ns",
            "range": "± 7946.342655175568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183105.6338028169,
            "unit": "ns",
            "range": "± 8894.876331332449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164143.75,
            "unit": "ns",
            "range": "± 7538.280613188567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3645373.3333333335,
            "unit": "ns",
            "range": "± 47109.49959807419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8880735.714285715,
            "unit": "ns",
            "range": "± 81824.4519325729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18538.775510204083,
            "unit": "ns",
            "range": "± 1929.4052634773946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51125.26315789474,
            "unit": "ns",
            "range": "± 5126.194067873411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40578.125,
            "unit": "ns",
            "range": "± 3429.5374285294233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100350,
            "unit": "ns",
            "range": "± 21014.285867626237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6144.897959183673,
            "unit": "ns",
            "range": "± 1031.376064982348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20913.40206185567,
            "unit": "ns",
            "range": "± 2605.9079058450443"
          }
        ]
      },
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
          "id": "b553911468123a8bca1195ba2e674552abf06cc3",
          "message": "Merge pull request #2931 from greymistcube/port/0.47.1-to-0.48.1\n\n🔀🚀 Port 0.47.1 to 0.48.1 and release 0.48.1",
          "timestamp": "2023-03-14T17:37:17+09:00",
          "tree_id": "7177f2855a73fc46fa2a4893941bbfd749f80bb2",
          "url": "https://github.com/planetarium/libplanet/commit/b553911468123a8bca1195ba2e674552abf06cc3"
        },
        "date": 1678784031250,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106402.0202020202,
            "unit": "ns",
            "range": "± 9142.700666049146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4945599.441964285,
            "unit": "ns",
            "range": "± 29531.24917555162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1535507.5130208333,
            "unit": "ns",
            "range": "± 6636.872024065041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142325.5338541667,
            "unit": "ns",
            "range": "± 8535.301414818397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638872.65625,
            "unit": "ns",
            "range": "± 7213.881924779832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834452.63671875,
            "unit": "ns",
            "range": "± 3653.083848587443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763956.2044270834,
            "unit": "ns",
            "range": "± 1201.7384050407666"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4618388.783482143,
            "unit": "ns",
            "range": "± 54445.26187559143"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5169654.347826087,
            "unit": "ns",
            "range": "± 198750.1979946147"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24672084,
            "unit": "ns",
            "range": "± 639597.567277008"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6145407.142857143,
            "unit": "ns",
            "range": "± 106957.55063277505"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27111476.923076924,
            "unit": "ns",
            "range": "± 736149.6990736013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87923.23232323233,
            "unit": "ns",
            "range": "± 10257.96682208644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174490.14084507042,
            "unit": "ns",
            "range": "± 8546.06266784514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160045.67901234567,
            "unit": "ns",
            "range": "± 8368.707328236484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3569935.294117647,
            "unit": "ns",
            "range": "± 70485.18409191104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8619785.714285715,
            "unit": "ns",
            "range": "± 137335.42798644412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22230.927835051545,
            "unit": "ns",
            "range": "± 2524.10713688781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49254.34782608696,
            "unit": "ns",
            "range": "± 4365.7108743167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39720.20202020202,
            "unit": "ns",
            "range": "± 2756.8460165144133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91876.5306122449,
            "unit": "ns",
            "range": "± 19365.13394173992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5886.868686868687,
            "unit": "ns",
            "range": "± 943.7924435268924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16620.879120879123,
            "unit": "ns",
            "range": "± 1336.7054427888895"
          }
        ]
      }
    ]
  }
}