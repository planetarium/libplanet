window.BENCHMARK_DATA = {
  "lastUpdate": 1714519346965,
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
          "id": "c9be7a2535a3b615b281fc92bb7cf17c68b811fc",
          "message": "increase context timeout",
          "timestamp": "2024-05-01T08:12:18+09:00",
          "tree_id": "4d114093a815defdd158fe0beb2131183af54f87",
          "url": "https://github.com/planetarium/libplanet/commit/c9be7a2535a3b615b281fc92bb7cf17c68b811fc"
        },
        "date": 1714519284627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953340.206185567,
            "unit": "ns",
            "range": "± 95280.84655790153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692176.6666666667,
            "unit": "ns",
            "range": "± 61931.88540145158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1533462,
            "unit": "ns",
            "range": "± 140319.38445035045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6823414.814814814,
            "unit": "ns",
            "range": "± 191140.66246877678"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34032.94117647059,
            "unit": "ns",
            "range": "± 2136.0504405546794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4855706.666666667,
            "unit": "ns",
            "range": "± 26628.595442458005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12739493.333333334,
            "unit": "ns",
            "range": "± 60622.0547640009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31483253.846153848,
            "unit": "ns",
            "range": "± 181107.61356803225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63185613.333333336,
            "unit": "ns",
            "range": "± 491272.05856206553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 124988216.66666667,
            "unit": "ns",
            "range": "± 650767.4070627985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3246990.1432291665,
            "unit": "ns",
            "range": "± 5436.083480091842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061197.5390625,
            "unit": "ns",
            "range": "± 2356.0542339195717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734882.4153645834,
            "unit": "ns",
            "range": "± 1759.7958059211212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935975.4324776786,
            "unit": "ns",
            "range": "± 3293.8650785059804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619250.8919270834,
            "unit": "ns",
            "range": "± 1088.2716830472102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557305.6919642857,
            "unit": "ns",
            "range": "± 1281.9195258351222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2161618.1818181816,
            "unit": "ns",
            "range": "± 36621.36556143717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2236431.5789473685,
            "unit": "ns",
            "range": "± 49258.85202604682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810347.3684210526,
            "unit": "ns",
            "range": "± 60978.770152871446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2943905.5555555555,
            "unit": "ns",
            "range": "± 62501.34560642977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7897564.285714285,
            "unit": "ns",
            "range": "± 224221.70528673875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169200,
            "unit": "ns",
            "range": "± 7239.437446753342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163002.35294117648,
            "unit": "ns",
            "range": "± 8344.60156928658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141848,
            "unit": "ns",
            "range": "± 3672.887147735416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2763413.3333333335,
            "unit": "ns",
            "range": "± 45534.5530757635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2477500,
            "unit": "ns",
            "range": "± 33092.992518751664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9635.106382978724,
            "unit": "ns",
            "range": "± 1137.6931429369263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50346.06741573034,
            "unit": "ns",
            "range": "± 3121.8459057166538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43770.21276595745,
            "unit": "ns",
            "range": "± 1704.203867884282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50209.278350515466,
            "unit": "ns",
            "range": "± 9107.129561436865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2288.659793814433,
            "unit": "ns",
            "range": "± 437.5300676953037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9560.227272727272,
            "unit": "ns",
            "range": "± 760.1481665502573"
          }
        ]
      }
    ]
  }
}