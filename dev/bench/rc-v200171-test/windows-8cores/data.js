window.BENCHMARK_DATA = {
  "lastUpdate": 1714522850690,
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
          "id": "7aeef50400efb9106f8c103329819a1ead8614a4",
          "message": "test",
          "timestamp": "2024-05-01T09:10:34+09:00",
          "tree_id": "0c6020a9510d7bbe88234211b90fa3d7e5d1c829",
          "url": "https://github.com/planetarium/libplanet/commit/7aeef50400efb9106f8c103329819a1ead8614a4"
        },
        "date": 1714522788773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966273.2323232323,
            "unit": "ns",
            "range": "± 98484.53709384197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692662.5,
            "unit": "ns",
            "range": "± 71375.5179888862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1481493.6842105263,
            "unit": "ns",
            "range": "± 116256.70770904372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6885859.259259259,
            "unit": "ns",
            "range": "± 187913.06144323407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33742.857142857145,
            "unit": "ns",
            "range": "± 2634.5839713771734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4939385.714285715,
            "unit": "ns",
            "range": "± 21897.02674382484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12630693.333333334,
            "unit": "ns",
            "range": "± 79025.83182250027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31743533.333333332,
            "unit": "ns",
            "range": "± 123852.27183259594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 61757335.71428572,
            "unit": "ns",
            "range": "± 284061.5767674403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125620342.85714285,
            "unit": "ns",
            "range": "± 774944.8523448777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3263030.6510416665,
            "unit": "ns",
            "range": "± 4616.479313632531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054336.09375,
            "unit": "ns",
            "range": "± 1448.078974869652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733036.6145833334,
            "unit": "ns",
            "range": "± 1487.1127475002352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925135.6640625,
            "unit": "ns",
            "range": "± 4580.29094393044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613101.1197916666,
            "unit": "ns",
            "range": "± 1241.9138924561582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564447.0982142857,
            "unit": "ns",
            "range": "± 727.3731130801407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182280,
            "unit": "ns",
            "range": "± 58162.26583160827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279256.0975609757,
            "unit": "ns",
            "range": "± 66252.5737189903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774783.7837837837,
            "unit": "ns",
            "range": "± 86257.3491668118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2909747.474747475,
            "unit": "ns",
            "range": "± 298995.50482711836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7648140.625,
            "unit": "ns",
            "range": "± 234850.20463893918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168860.37735849057,
            "unit": "ns",
            "range": "± 6267.41695114323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157610.86956521738,
            "unit": "ns",
            "range": "± 6052.19806758465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140530.76923076922,
            "unit": "ns",
            "range": "± 2158.079630668825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2670740,
            "unit": "ns",
            "range": "± 46694.8421746373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2419973.3333333335,
            "unit": "ns",
            "range": "± 38400.95732933652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9853.763440860215,
            "unit": "ns",
            "range": "± 1134.0154837322784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49116.666666666664,
            "unit": "ns",
            "range": "± 4408.930331346444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44354.28571428572,
            "unit": "ns",
            "range": "± 1915.6628030932998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46093.333333333336,
            "unit": "ns",
            "range": "± 7711.188427622044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1978.021978021978,
            "unit": "ns",
            "range": "± 282.37177928012164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9047.872340425532,
            "unit": "ns",
            "range": "± 877.0341913375495"
          }
        ]
      }
    ]
  }
}