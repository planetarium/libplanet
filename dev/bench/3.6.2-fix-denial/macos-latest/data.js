window.BENCHMARK_DATA = {
  "lastUpdate": 1700828464178,
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
          "id": "64549cf36514ad8e12634c0b5de0965cc846df15",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T20:57:00+09:00",
          "tree_id": "cfa4c98881ec3188cd6ce0622c3b63905a3f30b3",
          "url": "https://github.com/planetarium/libplanet/commit/64549cf36514ad8e12634c0b5de0965cc846df15"
        },
        "date": 1700828333486,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9679021.714285715,
            "unit": "ns",
            "range": "± 108430.18621599412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23923818.977011494,
            "unit": "ns",
            "range": "± 1453004.4065237124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62875992.45555556,
            "unit": "ns",
            "range": "± 3437009.5357703785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125621608.88461539,
            "unit": "ns",
            "range": "± 3420772.872649341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250226723,
            "unit": "ns",
            "range": "± 6729327.616398605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56560.770833333336,
            "unit": "ns",
            "range": "± 10830.695017285645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295232.58219178085,
            "unit": "ns",
            "range": "± 14700.689480952005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290083.1111111111,
            "unit": "ns",
            "range": "± 16597.61116674842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242185.61,
            "unit": "ns",
            "range": "± 44540.986268328794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4124837.8469387754,
            "unit": "ns",
            "range": "± 352803.40722334164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756711.529411765,
            "unit": "ns",
            "range": "± 115622.13545502836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14058.942528735632,
            "unit": "ns",
            "range": "± 1278.0428474485752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59180.81318681319,
            "unit": "ns",
            "range": "± 5014.869879583867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53274.505494505494,
            "unit": "ns",
            "range": "± 3457.2168490906297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59777.03684210526,
            "unit": "ns",
            "range": "± 10244.742609988052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3441.0689655172414,
            "unit": "ns",
            "range": "± 665.037851573624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12180.645161290322,
            "unit": "ns",
            "range": "± 903.1158099596963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444962.1736842105,
            "unit": "ns",
            "range": "± 133161.0327980344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2760245.2210526317,
            "unit": "ns",
            "range": "± 390112.9105856946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2120015.0568181816,
            "unit": "ns",
            "range": "± 199222.80137429555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8562030.534090908,
            "unit": "ns",
            "range": "± 1399040.948319347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3731459.379310345,
            "unit": "ns",
            "range": "± 106863.99590882323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3867169.6938775512,
            "unit": "ns",
            "range": "± 152000.34793466266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4682058.214285715,
            "unit": "ns",
            "range": "± 55072.623178125265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4474599.477777778,
            "unit": "ns",
            "range": "± 249085.40747644645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17117593.555555556,
            "unit": "ns",
            "range": "± 4122775.479638281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4284329.084147136,
            "unit": "ns",
            "range": "± 168730.35612079754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1325539.0213583668,
            "unit": "ns",
            "range": "± 39546.74337615745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 876133.1712890625,
            "unit": "ns",
            "range": "± 63249.98729916329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2011186.843796503,
            "unit": "ns",
            "range": "± 72185.13392490022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857242.0255699937,
            "unit": "ns",
            "range": "± 197154.6266700826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710576.5553721006,
            "unit": "ns",
            "range": "± 61108.13587223797"
          }
        ]
      }
    ]
  }
}