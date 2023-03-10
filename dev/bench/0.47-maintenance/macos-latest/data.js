window.BENCHMARK_DATA = {
  "lastUpdate": 1678416830611,
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
        "date": 1678416766296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146237.45714285714,
            "unit": "ns",
            "range": "± 6841.235820293093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 135980.61458333334,
            "unit": "ns",
            "range": "± 15333.046657375655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247768.84782608695,
            "unit": "ns",
            "range": "± 24479.479629082285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251329.86956521738,
            "unit": "ns",
            "range": "± 22173.46304135951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3898330.488505747,
            "unit": "ns",
            "range": "± 211972.97223617777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10663281.560240963,
            "unit": "ns",
            "range": "± 569003.5226739802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32932.65625,
            "unit": "ns",
            "range": "± 4154.994277855646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70894.9693877551,
            "unit": "ns",
            "range": "± 17494.051619656842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53561.757731958765,
            "unit": "ns",
            "range": "± 10712.688939677982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126231.09183673469,
            "unit": "ns",
            "range": "± 22472.75199224343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7928.194736842105,
            "unit": "ns",
            "range": "± 1158.007469509627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27846.37777777778,
            "unit": "ns",
            "range": "± 4192.862471390518"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5432741.042067308,
            "unit": "ns",
            "range": "± 390925.64647529216"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7904143.279569892,
            "unit": "ns",
            "range": "± 2238939.2335768137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26933368.443661973,
            "unit": "ns",
            "range": "± 1309202.3487434292"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7581656.088888889,
            "unit": "ns",
            "range": "± 841672.4446651334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32300234.285714287,
            "unit": "ns",
            "range": "± 430092.47787856014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7478250.295733849,
            "unit": "ns",
            "range": "± 578436.0947039888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2064853.3239746094,
            "unit": "ns",
            "range": "± 39350.17775846068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284908.6886160714,
            "unit": "ns",
            "range": "± 20133.739667794212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680842.8999023438,
            "unit": "ns",
            "range": "± 89255.79363651568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790510.6763020833,
            "unit": "ns",
            "range": "± 14772.210352055492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 709958.8900146484,
            "unit": "ns",
            "range": "± 13050.205595306852"
          }
        ]
      }
    ]
  }
}