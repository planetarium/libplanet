window.BENCHMARK_DATA = {
  "lastUpdate": 1719196894110,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "69f068f3312857b817e758a94602e64c327f688b",
          "message": "reduce hash node cache size",
          "timestamp": "2024-06-20T16:02:24+09:00",
          "tree_id": "196befe55dbba86c6b00feadc678bd971d64ce7f",
          "url": "https://github.com/planetarium/libplanet/commit/69f068f3312857b817e758a94602e64c327f688b"
        },
        "date": 1718867543535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995987.7291666666,
            "unit": "ns",
            "range": "± 89405.85671508023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1923023.7746478873,
            "unit": "ns",
            "range": "± 94282.81761323931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1674954.737113402,
            "unit": "ns",
            "range": "± 127300.58183486546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7894474.6034482755,
            "unit": "ns",
            "range": "± 230112.43606198637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757277.357142857,
            "unit": "ns",
            "range": "± 29591.36168808298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15001122.1,
            "unit": "ns",
            "range": "± 89909.39336417684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38127175.86666667,
            "unit": "ns",
            "range": "± 120457.46573190215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78147909.13333334,
            "unit": "ns",
            "range": "± 318811.00087912957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154996674.64285713,
            "unit": "ns",
            "range": "± 608755.1739859866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3951058.200721154,
            "unit": "ns",
            "range": "± 6521.751846722764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220706.0880301339,
            "unit": "ns",
            "range": "± 1573.8617540724238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772941.3687220982,
            "unit": "ns",
            "range": "± 933.6663940077658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922769.7088541666,
            "unit": "ns",
            "range": "± 3322.55480402816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620332.5975811298,
            "unit": "ns",
            "range": "± 398.5079393841316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574244.3883231027,
            "unit": "ns",
            "range": "± 546.8004529134146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419395.1818181816,
            "unit": "ns",
            "range": "± 69692.68760353133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548556.236842105,
            "unit": "ns",
            "range": "± 87471.81150076963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3192973.5384615385,
            "unit": "ns",
            "range": "± 52991.67825960252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3186179.9565217393,
            "unit": "ns",
            "range": "± 111394.15599930755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8822548.692307692,
            "unit": "ns",
            "range": "± 142132.5818073772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203547.32558139536,
            "unit": "ns",
            "range": "± 7449.8282937097665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193761.11194029852,
            "unit": "ns",
            "range": "± 8700.153244828027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167458.23529411765,
            "unit": "ns",
            "range": "± 3384.173302473807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3170453.1333333333,
            "unit": "ns",
            "range": "± 42190.12496826829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2909625.285714286,
            "unit": "ns",
            "range": "± 31687.462044713597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13143.684210526315,
            "unit": "ns",
            "range": "± 988.337474269752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62597.21428571428,
            "unit": "ns",
            "range": "± 4819.798110768897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60626.50574712644,
            "unit": "ns",
            "range": "± 7212.23352475946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90710,
            "unit": "ns",
            "range": "± 11389.434343502246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3133.8651685393256,
            "unit": "ns",
            "range": "± 389.46473148211663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12394.965517241379,
            "unit": "ns",
            "range": "± 938.4425178252683"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36211.35365853659,
            "unit": "ns",
            "range": "± 1669.8170475075835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "1594fa3bf040c04a143a08043b190a704a47a6cd",
          "message": "cache size must be at least 2",
          "timestamp": "2024-06-24T11:29:34+09:00",
          "tree_id": "50e3a761f61e045406d65fb27a3e4ecb3757875b",
          "url": "https://github.com/planetarium/libplanet/commit/1594fa3bf040c04a143a08043b190a704a47a6cd"
        },
        "date": 1719196867812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3768622.2268415177,
            "unit": "ns",
            "range": "± 3805.4609020102134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193402.3338541666,
            "unit": "ns",
            "range": "± 1452.962299317912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784695.6956612723,
            "unit": "ns",
            "range": "± 973.7324326659331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2012209.6666666667,
            "unit": "ns",
            "range": "± 4079.2484177810466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631871.5103934152,
            "unit": "ns",
            "range": "± 1474.211396852765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576282.7861328125,
            "unit": "ns",
            "range": "± 652.7865979894386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2414318.4838709678,
            "unit": "ns",
            "range": "± 73264.80611037879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2584613.8695652173,
            "unit": "ns",
            "range": "± 63808.525385295114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3129123.3,
            "unit": "ns",
            "range": "± 45549.59252162103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3538506.75,
            "unit": "ns",
            "range": "± 105817.43172153171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13046117.476190476,
            "unit": "ns",
            "range": "± 525730.4262790119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1090399.9361702127,
            "unit": "ns",
            "range": "± 99471.85359318837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2020680.5555555555,
            "unit": "ns",
            "range": "± 95564.75988459181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1977158.8837209302,
            "unit": "ns",
            "range": "± 105258.48578432927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11845805.196721312,
            "unit": "ns",
            "range": "± 488238.2898989256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200151.38461538462,
            "unit": "ns",
            "range": "± 8842.910943752324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194328.46875,
            "unit": "ns",
            "range": "± 5818.988793565175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173727.03846153847,
            "unit": "ns",
            "range": "± 1936.9325670324122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3280574.933333333,
            "unit": "ns",
            "range": "± 32895.56892319925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2711023.1923076925,
            "unit": "ns",
            "range": "± 15764.507320690442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12883.887640449439,
            "unit": "ns",
            "range": "± 891.8319047459437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72987.0947368421,
            "unit": "ns",
            "range": "± 4722.541992815751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55971.593406593405,
            "unit": "ns",
            "range": "± 3749.3938679857815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61174.86956521739,
            "unit": "ns",
            "range": "± 7404.24086115873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3345.6666666666665,
            "unit": "ns",
            "range": "± 415.13854076937804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12943.436170212766,
            "unit": "ns",
            "range": "± 1170.2593091792344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5747697.4,
            "unit": "ns",
            "range": "± 31169.967910520172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14774562.4,
            "unit": "ns",
            "range": "± 85604.0852085927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39057495.28571428,
            "unit": "ns",
            "range": "± 165174.09802919536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76570057.07142857,
            "unit": "ns",
            "range": "± 691512.66179839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150463244.85714287,
            "unit": "ns",
            "range": "± 654770.9371032106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36628.142857142855,
            "unit": "ns",
            "range": "± 1851.3178074172329"
          }
        ]
      }
    ]
  }
}