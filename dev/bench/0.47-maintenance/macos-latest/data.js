window.BENCHMARK_DATA = {
  "lastUpdate": 1678783293515,
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
          "id": "52939420ad5a4cad7ecdb67a3942742a2e6e5dac",
          "message": "Merge pull request #2929 from greymistcube/port/0.46.3-to-0.47.1\n\n🚀🔀 Port 0.46.3 to 0.47.1 and release 0.47.1",
          "timestamp": "2023-03-14T17:18:47+09:00",
          "tree_id": "6218ba1cf7c2488a66174c10c4596de0d553d1d8",
          "url": "https://github.com/planetarium/libplanet/commit/52939420ad5a4cad7ecdb67a3942742a2e6e5dac"
        },
        "date": 1678783246523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 152380.22727272726,
            "unit": "ns",
            "range": "± 12175.879170718528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121101.10824742269,
            "unit": "ns",
            "range": "± 17987.908361450234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261706.66666666666,
            "unit": "ns",
            "range": "± 39598.669833359665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222123.6379310345,
            "unit": "ns",
            "range": "± 6430.243922968008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3795469.5384615385,
            "unit": "ns",
            "range": "± 131955.33616896888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11182940.38983051,
            "unit": "ns",
            "range": "± 491042.83636092267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25444.826315789473,
            "unit": "ns",
            "range": "± 3635.903330767072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67451.84848484848,
            "unit": "ns",
            "range": "± 10623.064810430407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53863.27272727273,
            "unit": "ns",
            "range": "± 6448.489641799626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132630.47916666666,
            "unit": "ns",
            "range": "± 21736.452796350706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8236.659574468085,
            "unit": "ns",
            "range": "± 2237.7138513924865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26294.0206185567,
            "unit": "ns",
            "range": "± 4494.3347834138685"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5403089.359933035,
            "unit": "ns",
            "range": "± 365781.7544821175"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6392861.05,
            "unit": "ns",
            "range": "± 138849.1909896167"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27901430.07142857,
            "unit": "ns",
            "range": "± 1355503.3916640575"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7041212.843434343,
            "unit": "ns",
            "range": "± 483022.7417166954"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31905399.041666668,
            "unit": "ns",
            "range": "± 706074.6001457007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7579041.328164457,
            "unit": "ns",
            "range": "± 442011.9207349156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2174776.795591518,
            "unit": "ns",
            "range": "± 105110.81048190552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522013.6763237847,
            "unit": "ns",
            "range": "± 31108.704680507188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2989074.69171875,
            "unit": "ns",
            "range": "± 358777.7373578187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847202.4853190104,
            "unit": "ns",
            "range": "± 23959.97283419574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794332.9732349537,
            "unit": "ns",
            "range": "± 20593.390918836634"
          }
        ]
      }
    ]
  }
}