window.BENCHMARK_DATA = {
  "lastUpdate": 1678417524599,
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
      }
    ]
  }
}