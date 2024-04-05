window.BENCHMARK_DATA = {
  "lastUpdate": 1712299520706,
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
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1398e6bb177dda739d30043165ac072ef33dbaf5",
          "message": "Merge pull request #3730 from limebell/feature/update-validatorset\n\nIntroduce `IAccount.SetValidatorSet()` method",
          "timestamp": "2024-04-05T15:35:18+09:00",
          "tree_id": "0f53133435a83c0ce427c2b033a2618f06fc709f",
          "url": "https://github.com/planetarium/libplanet/commit/1398e6bb177dda739d30043165ac072ef33dbaf5"
        },
        "date": 1712299457297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973299,
            "unit": "ns",
            "range": "± 109472.55963080982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1675895.3488372094,
            "unit": "ns",
            "range": "± 61833.751584344805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1475827.3684210526,
            "unit": "ns",
            "range": "± 122276.52863803043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6690482.142857143,
            "unit": "ns",
            "range": "± 182768.36798521463"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36451.063829787236,
            "unit": "ns",
            "range": "± 5804.517052342572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5322969.230769231,
            "unit": "ns",
            "range": "± 12655.524789288973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13141733.333333334,
            "unit": "ns",
            "range": "± 97477.65067415392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31913760,
            "unit": "ns",
            "range": "± 211628.81183808597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64568716.666666664,
            "unit": "ns",
            "range": "± 329160.3553343104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129095013.33333333,
            "unit": "ns",
            "range": "± 676055.2902860901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3382673.465401786,
            "unit": "ns",
            "range": "± 33865.05591304618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075360.078125,
            "unit": "ns",
            "range": "± 6167.859326760686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736318.5616629465,
            "unit": "ns",
            "range": "± 1551.6976652883268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931417.5362723214,
            "unit": "ns",
            "range": "± 3454.1074010807138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600962.3046875,
            "unit": "ns",
            "range": "± 1850.1934616542644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559036.6927083334,
            "unit": "ns",
            "range": "± 1758.366146405637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180070,
            "unit": "ns",
            "range": "± 105773.93907955682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2345535.714285714,
            "unit": "ns",
            "range": "± 65908.60234016394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2827150,
            "unit": "ns",
            "range": "± 40795.24387814005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2852547.76119403,
            "unit": "ns",
            "range": "± 126673.60629898633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7875727.027027027,
            "unit": "ns",
            "range": "± 200692.09646267237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180977.02702702704,
            "unit": "ns",
            "range": "± 9058.490262448591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166953.42465753425,
            "unit": "ns",
            "range": "± 8232.204413018235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143990.9090909091,
            "unit": "ns",
            "range": "± 3470.097993800764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2933746.6666666665,
            "unit": "ns",
            "range": "± 37433.53856535353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2464207.6923076925,
            "unit": "ns",
            "range": "± 21625.350152789877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9996.808510638299,
            "unit": "ns",
            "range": "± 1068.6593075558342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52355.31914893617,
            "unit": "ns",
            "range": "± 4385.940808853804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43506.25,
            "unit": "ns",
            "range": "± 993.8317830011404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54056.12244897959,
            "unit": "ns",
            "range": "± 10382.69839910162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2111.2244897959185,
            "unit": "ns",
            "range": "± 418.11621061570185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9568.181818181818,
            "unit": "ns",
            "range": "± 872.6423678657582"
          }
        ]
      }
    ]
  }
}