window.BENCHMARK_DATA = {
  "lastUpdate": 1700818645493,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "f8a55beec6ab7d0e4ff88aa55b90332b61ab00df",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T18:20:16+09:00",
          "tree_id": "e316a526d60d145eec27f10293b3b2bef907f65d",
          "url": "https://github.com/planetarium/libplanet/commit/f8a55beec6ab7d0e4ff88aa55b90332b61ab00df"
        },
        "date": 1700818594868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949671,
            "unit": "ns",
            "range": "± 106721.85626688895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1707289.2307692308,
            "unit": "ns",
            "range": "± 79252.16109647445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1324735.7142857143,
            "unit": "ns",
            "range": "± 133716.3941787429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5203861.6161616165,
            "unit": "ns",
            "range": "± 312784.58770784317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35201.11111111111,
            "unit": "ns",
            "range": "± 1972.2510064541545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4939830.769230769,
            "unit": "ns",
            "range": "± 25524.053512173723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13255261.904761905,
            "unit": "ns",
            "range": "± 273311.0635817557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32533746.666666668,
            "unit": "ns",
            "range": "± 502441.6893910131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65291900,
            "unit": "ns",
            "range": "± 598312.4949946029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129940220,
            "unit": "ns",
            "range": "± 1116364.2910294624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360694.6063701925,
            "unit": "ns",
            "range": "± 11164.042805157402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046658.8040865385,
            "unit": "ns",
            "range": "± 2004.9604753220376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737777.3307291666,
            "unit": "ns",
            "range": "± 2542.923814995035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1902750.3348214286,
            "unit": "ns",
            "range": "± 2896.1018632820555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614219.0150669643,
            "unit": "ns",
            "range": "± 1628.044701341844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551987.6395089285,
            "unit": "ns",
            "range": "± 1222.4308666781667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160080.769230769,
            "unit": "ns",
            "range": "± 58805.20398216994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258368.8311688313,
            "unit": "ns",
            "range": "± 115748.85614956048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2766489.285714286,
            "unit": "ns",
            "range": "± 61860.25672783668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2784321.4285714286,
            "unit": "ns",
            "range": "± 45257.26764537685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5762633.333333333,
            "unit": "ns",
            "range": "± 169355.93273937286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173210,
            "unit": "ns",
            "range": "± 8408.142189120244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165283.7837837838,
            "unit": "ns",
            "range": "± 7542.560101458722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141909.375,
            "unit": "ns",
            "range": "± 6580.990390800576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2780011.5384615385,
            "unit": "ns",
            "range": "± 44152.90738750089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2512292.8571428573,
            "unit": "ns",
            "range": "± 33279.272003079415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11211.494252873563,
            "unit": "ns",
            "range": "± 1096.445131911382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54629.56989247312,
            "unit": "ns",
            "range": "± 4784.952844703927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45096.72131147541,
            "unit": "ns",
            "range": "± 2035.924623122932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56249.45054945055,
            "unit": "ns",
            "range": "± 10615.10845316841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2447.872340425532,
            "unit": "ns",
            "range": "± 436.1928949356154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10609.574468085106,
            "unit": "ns",
            "range": "± 1638.9787765187036"
          }
        ]
      }
    ]
  }
}