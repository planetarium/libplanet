window.BENCHMARK_DATA = {
  "lastUpdate": 1678416734874,
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
          "id": "5c69a2b5739e671425ebdf5609da2f2aa9e466bf",
          "message": "Merge pull request #2910 from colibrishin/benchmark/fix/0.47-maintenance\n\nci/bench: missing cherry pick in 2909",
          "timestamp": "2023-03-10T11:34:30+09:00",
          "tree_id": "31e4b557c4ea549ee4b7a3ea7aa4be393e583997",
          "url": "https://github.com/planetarium/libplanet/commit/5c69a2b5739e671425ebdf5609da2f2aa9e466bf"
        },
        "date": 1678416713258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121572.48387096774,
            "unit": "ns",
            "range": "± 14930.884182453685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275223.10752688174,
            "unit": "ns",
            "range": "± 29493.760687077072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256155.92708333334,
            "unit": "ns",
            "range": "± 25971.213861441527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5205846.736842105,
            "unit": "ns",
            "range": "± 173879.42919855518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13272997.965517242,
            "unit": "ns",
            "range": "± 381615.68913843925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29023.81443298969,
            "unit": "ns",
            "range": "± 9930.290675640174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69800.1170212766,
            "unit": "ns",
            "range": "± 10887.634798352112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62649.12765957447,
            "unit": "ns",
            "range": "± 13599.915459283446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140849.12765957447,
            "unit": "ns",
            "range": "± 19926.417915703507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7725.349397590361,
            "unit": "ns",
            "range": "± 1099.398221575463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23218.48275862069,
            "unit": "ns",
            "range": "± 3593.912630656497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7650255.727604167,
            "unit": "ns",
            "range": "± 75775.58399776937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2383339.384207589,
            "unit": "ns",
            "range": "± 21074.114545621618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1757487.6694010417,
            "unit": "ns",
            "range": "± 24501.023651812746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3421657.0518229166,
            "unit": "ns",
            "range": "± 50631.57546424503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1103096.976171875,
            "unit": "ns",
            "range": "± 14993.042740917495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1010240.5330729167,
            "unit": "ns",
            "range": "± 13161.578986058463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 157341.15625,
            "unit": "ns",
            "range": "± 19153.94126177533"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6681972.839750744,
            "unit": "ns",
            "range": "± 354926.5853644101"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7224620.375,
            "unit": "ns",
            "range": "± 422208.420123054"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36126919.518518515,
            "unit": "ns",
            "range": "± 1513343.9000958975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8626448.02247191,
            "unit": "ns",
            "range": "± 461419.9621975226"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41441747.01960784,
            "unit": "ns",
            "range": "± 1667704.6613443578"
          }
        ]
      }
    ]
  }
}