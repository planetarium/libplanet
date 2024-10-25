window.BENCHMARK_DATA = {
  "lastUpdate": 1729838103154,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "a50194312c8ae642100951cc0400ea684485dfb4",
          "message": "refactor: Refactor GasTracer",
          "timestamp": "2024-10-25T15:01:52+09:00",
          "tree_id": "c0767e988107193ca2cff5208a057ccbec773e0f",
          "url": "https://github.com/planetarium/libplanet/commit/a50194312c8ae642100951cc0400ea684485dfb4"
        },
        "date": 1729838060072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10577375.357142856,
            "unit": "ns",
            "range": "± 86255.8799811594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26347080.714285713,
            "unit": "ns",
            "range": "± 217782.61426316085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66415917.071428575,
            "unit": "ns",
            "range": "± 74204.44542091312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137017749.76923078,
            "unit": "ns",
            "range": "± 198100.71194813758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269931828.06666666,
            "unit": "ns",
            "range": "± 429621.95725203183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13494.576923076924,
            "unit": "ns",
            "range": "± 469.47537262999526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54057.45161290323,
            "unit": "ns",
            "range": "± 2440.5513598863795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105043.36507936507,
            "unit": "ns",
            "range": "± 4120.848406623784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90615.38095238095,
            "unit": "ns",
            "range": "± 2072.2390421037453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2868599.255319149,
            "unit": "ns",
            "range": "± 162651.59568454843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740895.76,
            "unit": "ns",
            "range": "± 171345.90590364815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5251.627659574468,
            "unit": "ns",
            "range": "± 679.8757671785443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26934.68888888889,
            "unit": "ns",
            "range": "± 1805.488311391626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23197.127659574468,
            "unit": "ns",
            "range": "± 1947.3229279393631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31766.680412371134,
            "unit": "ns",
            "range": "± 5768.688991274345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1131.0106382978724,
            "unit": "ns",
            "range": "± 244.78072235400265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4985.815217391304,
            "unit": "ns",
            "range": "± 719.2854654897368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687087.5108695652,
            "unit": "ns",
            "range": "± 56049.664433712256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1259501.5476190476,
            "unit": "ns",
            "range": "± 45751.71636188803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1047398.25,
            "unit": "ns",
            "range": "± 54229.41949226779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8771111.99,
            "unit": "ns",
            "range": "± 1352634.9076278878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2132030.388888889,
            "unit": "ns",
            "range": "± 89931.00700430399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259355,
            "unit": "ns",
            "range": "± 80557.23884201841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2552189.423076923,
            "unit": "ns",
            "range": "± 63452.025828131336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2298398.867924528,
            "unit": "ns",
            "range": "± 95044.16550539457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2881775.0625,
            "unit": "ns",
            "range": "± 85120.26697331764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037154.5356770833,
            "unit": "ns",
            "range": "± 45883.148315700564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913195.6650390625,
            "unit": "ns",
            "range": "± 5159.919315756196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614744.8029296875,
            "unit": "ns",
            "range": "± 4726.107987844922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621268.8264973958,
            "unit": "ns",
            "range": "± 7687.113688506459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463491.1473214286,
            "unit": "ns",
            "range": "± 513.4946478407841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422825.9219726563,
            "unit": "ns",
            "range": "± 1102.1591303458313"
          }
        ]
      }
    ]
  }
}