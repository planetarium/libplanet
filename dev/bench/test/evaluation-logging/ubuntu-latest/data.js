window.BENCHMARK_DATA = {
  "lastUpdate": 1679469908394,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679469888178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101832.82857142857,
            "unit": "ns",
            "range": "± 3348.395414538259"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4402345.159635416,
            "unit": "ns",
            "range": "± 42964.66278555664"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5452597.583333333,
            "unit": "ns",
            "range": "± 217777.3375803121"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25526996.133333333,
            "unit": "ns",
            "range": "± 322683.53709585994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6698944.714285715,
            "unit": "ns",
            "range": "± 65556.77079322291"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28345433.125,
            "unit": "ns",
            "range": "± 554354.9258374547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5890813.116145833,
            "unit": "ns",
            "range": "± 27799.320339083853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822175.1474609375,
            "unit": "ns",
            "range": "± 3468.6971124858633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338430.9600360577,
            "unit": "ns",
            "range": "± 1315.0861089895488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563176.681510417,
            "unit": "ns",
            "range": "± 2358.351015627408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822965.8002115885,
            "unit": "ns",
            "range": "± 600.6546693847212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746605.1708286831,
            "unit": "ns",
            "range": "± 2173.5859591037633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90082.76842105263,
            "unit": "ns",
            "range": "± 8167.375950972508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196118.58666666667,
            "unit": "ns",
            "range": "± 9911.63612655475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170690.7142857143,
            "unit": "ns",
            "range": "± 2445.2978245092054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3760215.6,
            "unit": "ns",
            "range": "± 34370.732640680544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9483764.8,
            "unit": "ns",
            "range": "± 61482.74731081651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15532.38202247191,
            "unit": "ns",
            "range": "± 1123.9343084331645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47905.08045977011,
            "unit": "ns",
            "range": "± 3177.7361629559373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40508.43820224719,
            "unit": "ns",
            "range": "± 2243.8732541738477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91112.3125,
            "unit": "ns",
            "range": "± 13692.493759500034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5087.693877551021,
            "unit": "ns",
            "range": "± 576.78601882199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15033.954545454546,
            "unit": "ns",
            "range": "± 1093.8792922238324"
          }
        ]
      }
    ]
  }
}