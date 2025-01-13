window.BENCHMARK_DATA = {
  "lastUpdate": 1736739877129,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1736739850691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10708794.433333334,
            "unit": "ns",
            "range": "± 74659.29029882222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27959229.066666666,
            "unit": "ns",
            "range": "± 175833.36838262796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71169839.16666667,
            "unit": "ns",
            "range": "± 549975.2913094845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142827441.26666668,
            "unit": "ns",
            "range": "± 925106.8820512785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294966726.3,
            "unit": "ns",
            "range": "± 2289515.587575153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111222.73655913978,
            "unit": "ns",
            "range": "± 9101.354648810884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196250.13829787233,
            "unit": "ns",
            "range": "± 7558.960750473377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166220.46296296295,
            "unit": "ns",
            "range": "± 4654.51633016861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2928509.8666666667,
            "unit": "ns",
            "range": "± 52239.41779902368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2773387.8,
            "unit": "ns",
            "range": "± 48030.909200222304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13002.611111111111,
            "unit": "ns",
            "range": "± 1220.5580110351668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60505.68817204301,
            "unit": "ns",
            "range": "± 4661.015503221548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50407.375,
            "unit": "ns",
            "range": "± 1313.2296998488944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55367.5,
            "unit": "ns",
            "range": "± 8779.88014664629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3508.7551020408164,
            "unit": "ns",
            "range": "± 674.5957332537884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12896.730337078652,
            "unit": "ns",
            "range": "± 1658.8111622213398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700659.5477764425,
            "unit": "ns",
            "range": "± 6566.146214935651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1231315.6022135417,
            "unit": "ns",
            "range": "± 1224.1939552356046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 852305.9172712053,
            "unit": "ns",
            "range": "± 1193.3346789114955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976911.9916666667,
            "unit": "ns",
            "range": "± 2600.626899828973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638828.2561197917,
            "unit": "ns",
            "range": "± 638.8342904271324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570698.1828776042,
            "unit": "ns",
            "range": "± 504.86372398427903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419693.1764705884,
            "unit": "ns",
            "range": "± 48228.46215700239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562433.705882353,
            "unit": "ns",
            "range": "± 50704.13709669644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3109937.3,
            "unit": "ns",
            "range": "± 45312.210451803956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638103.6333333333,
            "unit": "ns",
            "range": "± 35559.158904295706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3284117.9411764704,
            "unit": "ns",
            "range": "± 54461.80158431066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986755.3924050633,
            "unit": "ns",
            "range": "± 50143.973174025385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1982756.9696969697,
            "unit": "ns",
            "range": "± 92187.76469842067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1601802.6404494382,
            "unit": "ns",
            "range": "± 90551.42505708706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7885691.666666667,
            "unit": "ns",
            "range": "± 258641.81710073765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31018.77142857143,
            "unit": "ns",
            "range": "± 1013.2368367735936"
          }
        ]
      }
    ]
  }
}