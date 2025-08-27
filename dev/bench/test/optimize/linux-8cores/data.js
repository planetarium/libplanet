window.BENCHMARK_DATA = {
  "lastUpdate": 1756287618863,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0df115f8f4320098c7ea02e2924043dda780f1f2",
          "message": "Test singleton ActivitySource",
          "timestamp": "2025-08-27T18:00:37+09:00",
          "tree_id": "8edb064c933208a8f9463cd72f0d54fcf4031257",
          "url": "https://github.com/planetarium/libplanet/commit/0df115f8f4320098c7ea02e2924043dda780f1f2"
        },
        "date": 1756287592041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2428999.1,
            "unit": "ns",
            "range": "± 28936.927250240555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2515815.5,
            "unit": "ns",
            "range": "± 25973.548561125466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3024134.909090909,
            "unit": "ns",
            "range": "± 71311.82919431363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2630211.923076923,
            "unit": "ns",
            "range": "± 26311.10847931452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3233441.222222222,
            "unit": "ns",
            "range": "± 67803.207214231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996586.825,
            "unit": "ns",
            "range": "± 49261.40013268278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968522.851851852,
            "unit": "ns",
            "range": "± 82151.48737761841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1646720,
            "unit": "ns",
            "range": "± 97876.39425867944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7988111.131578947,
            "unit": "ns",
            "range": "± 248465.4983853102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31396.714285714286,
            "unit": "ns",
            "range": "± 198.16860675519902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11788045.92857143,
            "unit": "ns",
            "range": "± 88499.65126959913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28285814.42857143,
            "unit": "ns",
            "range": "± 162705.20029404492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70787030.38461539,
            "unit": "ns",
            "range": "± 381835.17728236667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140080812.7142857,
            "unit": "ns",
            "range": "± 810120.0976978118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280540677.43333334,
            "unit": "ns",
            "range": "± 1851511.1048630162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104466.90588235293,
            "unit": "ns",
            "range": "± 7270.328959649116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192942.79787234042,
            "unit": "ns",
            "range": "± 12224.22183866342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170795.25,
            "unit": "ns",
            "range": "± 3186.1001553623514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2960303.230769231,
            "unit": "ns",
            "range": "± 38558.29898814228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2855250.6923076925,
            "unit": "ns",
            "range": "± 28712.369394230933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11306.988636363636,
            "unit": "ns",
            "range": "± 802.8371887210516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57230.77528089887,
            "unit": "ns",
            "range": "± 3156.063769493464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50053.192307692305,
            "unit": "ns",
            "range": "± 544.4653929338064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58245.85051546392,
            "unit": "ns",
            "range": "± 10862.566751848253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2535.5104166666665,
            "unit": "ns",
            "range": "± 368.63309371933457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10683.926315789473,
            "unit": "ns",
            "range": "± 1031.8550764367044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3867135.815011161,
            "unit": "ns",
            "range": "± 6573.728717489209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1252837.554408482,
            "unit": "ns",
            "range": "± 1555.0831932125857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 816416.2691127232,
            "unit": "ns",
            "range": "± 2026.981249548053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2015082.7101004464,
            "unit": "ns",
            "range": "± 4527.266117709613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632955.8344726562,
            "unit": "ns",
            "range": "± 1408.5450881605682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574846.9952566965,
            "unit": "ns",
            "range": "± 755.176284158572"
          }
        ]
      }
    ]
  }
}