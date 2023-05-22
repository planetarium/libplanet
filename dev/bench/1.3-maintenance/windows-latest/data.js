window.BENCHMARK_DATA = {
  "lastUpdate": 1684725759766,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/planetarium/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684481403706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346770,
            "unit": "ns",
            "range": "± 117718.3528854384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2430532.5581395347,
            "unit": "ns",
            "range": "± 89004.30894044838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107930.9278350514,
            "unit": "ns",
            "range": "± 159850.8206636378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5069289.583333333,
            "unit": "ns",
            "range": "± 194779.71435246267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44139.65517241379,
            "unit": "ns",
            "range": "± 1928.451761076055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6816135.714285715,
            "unit": "ns",
            "range": "± 55511.06067391307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17017386.666666668,
            "unit": "ns",
            "range": "± 116225.38981692099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44446586.666666664,
            "unit": "ns",
            "range": "± 274855.49675281753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88565242.85714285,
            "unit": "ns",
            "range": "± 662455.8292552688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177835053.33333334,
            "unit": "ns",
            "range": "± 1102058.6222848496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4941786.662946428,
            "unit": "ns",
            "range": "± 15234.359056680161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507300.5729166667,
            "unit": "ns",
            "range": "± 1553.893409841624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148063.96484375,
            "unit": "ns",
            "range": "± 1656.8404540330498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647677.34375,
            "unit": "ns",
            "range": "± 31125.8176768626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813109.2145647322,
            "unit": "ns",
            "range": "± 1283.3949123318853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750740.5622209822,
            "unit": "ns",
            "range": "± 731.5148807268879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2925307.547169811,
            "unit": "ns",
            "range": "± 113570.82481710326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3082942.8571428573,
            "unit": "ns",
            "range": "± 45853.99427758493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3952465,
            "unit": "ns",
            "range": "± 74266.1945833684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3848403.4482758623,
            "unit": "ns",
            "range": "± 112364.15125690545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6340917.5,
            "unit": "ns",
            "range": "± 222424.68605788503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255576.36363636365,
            "unit": "ns",
            "range": "± 10376.48630382501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239064.70588235295,
            "unit": "ns",
            "range": "± 9735.395698776949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215992.59259259258,
            "unit": "ns",
            "range": "± 11344.842195660742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804928.5714285714,
            "unit": "ns",
            "range": "± 35053.111977977926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3483557.1428571427,
            "unit": "ns",
            "range": "± 52237.47128827549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17152.083333333332,
            "unit": "ns",
            "range": "± 1419.041868501914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80505.1282051282,
            "unit": "ns",
            "range": "± 4159.948096451224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65601.96078431372,
            "unit": "ns",
            "range": "± 2493.550897501668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82601.05263157895,
            "unit": "ns",
            "range": "± 12631.432380635306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4050,
            "unit": "ns",
            "range": "± 703.8919785917248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16182.291666666666,
            "unit": "ns",
            "range": "± 1489.7541154705373"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f8d76421cd2de19f739ef0a53b4fe02b3c00c05",
          "message": "Merge pull request #3192 from greymistcube/prepare/1.3.1\n\n🔧 Prepare 1.3.1",
          "timestamp": "2023-05-22T12:10:53+09:00",
          "tree_id": "c546d985806a3d5acd8e4c9d43c70e1c7aa4249d",
          "url": "https://github.com/planetarium/libplanet/commit/9f8d76421cd2de19f739ef0a53b4fe02b3c00c05"
        },
        "date": 1684725721735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1036342.8571428572,
            "unit": "ns",
            "range": "± 110932.89324688018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1789995.1219512196,
            "unit": "ns",
            "range": "± 80209.31860280129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1701100,
            "unit": "ns",
            "range": "± 51917.614223562574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3770490.476190476,
            "unit": "ns",
            "range": "± 201071.26268885017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33685.71428571428,
            "unit": "ns",
            "range": "± 1650.7605374392963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4903393.333333333,
            "unit": "ns",
            "range": "± 19894.416541427134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13021873.333333334,
            "unit": "ns",
            "range": "± 125627.25174480409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31477342.85714286,
            "unit": "ns",
            "range": "± 172949.69795283835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63641540,
            "unit": "ns",
            "range": "± 337462.45463119936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128216433.33333333,
            "unit": "ns",
            "range": "± 1128175.2907534656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3565771.7247596155,
            "unit": "ns",
            "range": "± 7566.0566432002315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1112726.3253348214,
            "unit": "ns",
            "range": "± 1527.651813888756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 809129.5638020834,
            "unit": "ns",
            "range": "± 1448.3920467034989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990808.28125,
            "unit": "ns",
            "range": "± 7512.807747839611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623995.234375,
            "unit": "ns",
            "range": "± 1191.0317447152202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585105.7356770834,
            "unit": "ns",
            "range": "± 2662.5157403683193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2136932,
            "unit": "ns",
            "range": "± 51816.79039333358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2184898.113207547,
            "unit": "ns",
            "range": "± 57095.589519028515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817080.64516129,
            "unit": "ns",
            "range": "± 38882.218895486905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2904040.625,
            "unit": "ns",
            "range": "± 63385.769031587886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4621279.365079365,
            "unit": "ns",
            "range": "± 211917.55332213984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173343.2098765432,
            "unit": "ns",
            "range": "± 9003.637296554167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162573.97260273973,
            "unit": "ns",
            "range": "± 7315.414232162649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144643.47826086957,
            "unit": "ns",
            "range": "± 3050.1603664183895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2701497.3684210526,
            "unit": "ns",
            "range": "± 58881.83429001448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2444742.8571428573,
            "unit": "ns",
            "range": "± 22434.77603686241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9509.278350515464,
            "unit": "ns",
            "range": "± 1268.5361046486817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50312.64367816092,
            "unit": "ns",
            "range": "± 2791.96540749965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46166.666666666664,
            "unit": "ns",
            "range": "± 1812.994857855347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53778.089887640446,
            "unit": "ns",
            "range": "± 9551.951118679712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2175.7894736842104,
            "unit": "ns",
            "range": "± 394.2986743179197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8344.318181818182,
            "unit": "ns",
            "range": "± 772.7928087028649"
          }
        ]
      }
    ]
  }
}