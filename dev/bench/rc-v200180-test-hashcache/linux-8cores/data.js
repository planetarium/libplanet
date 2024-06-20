window.BENCHMARK_DATA = {
  "lastUpdate": 1718867569504,
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
      }
    ]
  }
}