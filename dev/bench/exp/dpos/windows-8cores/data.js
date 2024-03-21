window.BENCHMARK_DATA = {
  "lastUpdate": 1711016267076,
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
          "id": "3f15fa48f9f57536b050c7443c2247627f30ee76",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-21T19:07:13+09:00",
          "tree_id": "9951d77e8b5a62bf4d33a34cdbb2c476c8268a10",
          "url": "https://github.com/planetarium/libplanet/commit/3f15fa48f9f57536b050c7443c2247627f30ee76"
        },
        "date": 1711016205526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960708.1632653062,
            "unit": "ns",
            "range": "± 101619.31656769007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1688823.076923077,
            "unit": "ns",
            "range": "± 50531.51940562737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493093.4343434344,
            "unit": "ns",
            "range": "± 146697.48697930758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6909748.148148148,
            "unit": "ns",
            "range": "± 363538.06544539146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33847.5,
            "unit": "ns",
            "range": "± 1559.8583999351035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5062330.769230769,
            "unit": "ns",
            "range": "± 19908.473263721346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12763386.666666666,
            "unit": "ns",
            "range": "± 229743.40614404294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31723300,
            "unit": "ns",
            "range": "± 304085.9136118325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64739753.333333336,
            "unit": "ns",
            "range": "± 401769.567692489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128446056.25,
            "unit": "ns",
            "range": "± 2493011.295593811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3326049.765625,
            "unit": "ns",
            "range": "± 9446.541703459721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062157.34375,
            "unit": "ns",
            "range": "± 1233.5555695527162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733284.5768229166,
            "unit": "ns",
            "range": "± 2190.7760454439713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951387.03125,
            "unit": "ns",
            "range": "± 4582.445652939514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611372.4869791666,
            "unit": "ns",
            "range": "± 1017.9035461352305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554782.4986049107,
            "unit": "ns",
            "range": "± 1140.294907798735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113434.88372093,
            "unit": "ns",
            "range": "± 64672.9018240507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278746.5517241377,
            "unit": "ns",
            "range": "± 99806.59580833402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2840761.5384615385,
            "unit": "ns",
            "range": "± 31907.014340150414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2831269.8113207547,
            "unit": "ns",
            "range": "± 109749.35357248853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7944006.557377049,
            "unit": "ns",
            "range": "± 355333.85750532907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173381.4814814815,
            "unit": "ns",
            "range": "± 9049.269460999476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166427.16049382716,
            "unit": "ns",
            "range": "± 8676.577844197545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149597.14285714287,
            "unit": "ns",
            "range": "± 4891.1375865698465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2863013.3333333335,
            "unit": "ns",
            "range": "± 32458.344000242763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2470140,
            "unit": "ns",
            "range": "± 34244.32799749471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9663.333333333334,
            "unit": "ns",
            "range": "± 839.2680063703453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51076.59574468085,
            "unit": "ns",
            "range": "± 4494.4751157396795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43995,
            "unit": "ns",
            "range": "± 1292.1756648064336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48701.063829787236,
            "unit": "ns",
            "range": "± 7992.866371621112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2479.896907216495,
            "unit": "ns",
            "range": "± 407.5242703543374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9515.95744680851,
            "unit": "ns",
            "range": "± 1048.3272073420712"
          }
        ]
      }
    ]
  }
}