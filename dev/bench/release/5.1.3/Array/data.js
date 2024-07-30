window.BENCHMARK_DATA = {
  "lastUpdate": 1722321203700,
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
          "id": "f037f4d6e6b19539c8286664c4021971742909f6",
          "message": "Release 5.1.3",
          "timestamp": "2024-07-30T15:16:44+09:00",
          "tree_id": "6390d9a3eae9dcd8e92fcfd6c15a159ff2e46ca0",
          "url": "https://github.com/planetarium/libplanet/commit/f037f4d6e6b19539c8286664c4021971742909f6"
        },
        "date": 1722321082107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10727937.833333334,
            "unit": "ns",
            "range": "± 84375.2571948493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26686594.85714286,
            "unit": "ns",
            "range": "± 188720.63581057385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68275134.84615384,
            "unit": "ns",
            "range": "± 112300.96487181679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136894711.64285713,
            "unit": "ns",
            "range": "± 149083.15805390014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276650757.6666667,
            "unit": "ns",
            "range": "± 649423.3005885922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14416.465517241379,
            "unit": "ns",
            "range": "± 413.95923563615895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110961.28571428571,
            "unit": "ns",
            "range": "± 4745.416516708591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106598.53846153847,
            "unit": "ns",
            "range": "± 4215.8117724173235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91302.375,
            "unit": "ns",
            "range": "± 2305.575092126644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3067124.413043478,
            "unit": "ns",
            "range": "± 117595.55861144043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785476.565217391,
            "unit": "ns",
            "range": "± 155484.29535623288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4942.0114942528735,
            "unit": "ns",
            "range": "± 463.0378831820295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27328.879120879123,
            "unit": "ns",
            "range": "± 2230.4156106737137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23416.59139784946,
            "unit": "ns",
            "range": "± 2035.2419909348198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29611.947368421053,
            "unit": "ns",
            "range": "± 5200.113393543556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1209.5851063829787,
            "unit": "ns",
            "range": "± 206.26803783356496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4801.833333333333,
            "unit": "ns",
            "range": "± 461.02913700604574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683785.6447368421,
            "unit": "ns",
            "range": "± 29609.334168222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283188.611111111,
            "unit": "ns",
            "range": "± 42089.16587625288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1087189.6101694915,
            "unit": "ns",
            "range": "± 47912.24479875428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9567296.78,
            "unit": "ns",
            "range": "± 1422808.1099102348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177769.242424242,
            "unit": "ns",
            "range": "± 57976.474170040674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2300464.128205128,
            "unit": "ns",
            "range": "± 79818.60870293723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2595746.4615384615,
            "unit": "ns",
            "range": "± 34640.974480171564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2340974.1428571427,
            "unit": "ns",
            "range": "± 75663.96551865626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2989365.736263736,
            "unit": "ns",
            "range": "± 166025.12773726185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2999398.1325334823,
            "unit": "ns",
            "range": "± 46629.84088431324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920605.9189453125,
            "unit": "ns",
            "range": "± 6972.948574565466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615063.4581380208,
            "unit": "ns",
            "range": "± 4318.012561668793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651365.8143136161,
            "unit": "ns",
            "range": "± 7212.798585233119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468962.11051432294,
            "unit": "ns",
            "range": "± 836.7268764172898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418615.4877278646,
            "unit": "ns",
            "range": "± 850.0794956893408"
          }
        ]
      }
    ]
  }
}