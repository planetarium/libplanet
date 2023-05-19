window.BENCHMARK_DATA = {
  "lastUpdate": 1684481458239,
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
      }
    ]
  }
}