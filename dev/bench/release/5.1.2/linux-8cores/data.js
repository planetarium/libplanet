window.BENCHMARK_DATA = {
  "lastUpdate": 1721204575265,
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
          "id": "715d6e23f0a76bef6c53ea636e4fda4898d195fc",
          "message": "Release 5.1.2",
          "timestamp": "2024-07-17T16:31:46+09:00",
          "tree_id": "d6f06a4a7daaac8e7abdd7aac090c2dad3a510ce",
          "url": "https://github.com/planetarium/libplanet/commit/715d6e23f0a76bef6c53ea636e4fda4898d195fc"
        },
        "date": 1721202006678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206070.66666666666,
            "unit": "ns",
            "range": "± 8996.888017531395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195182.41176470587,
            "unit": "ns",
            "range": "± 6255.68699382457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168533.9,
            "unit": "ns",
            "range": "± 3736.3081680069954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3038436.533333333,
            "unit": "ns",
            "range": "± 53504.907204675656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2786878.2666666666,
            "unit": "ns",
            "range": "± 26879.97351313179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12675.53409090909,
            "unit": "ns",
            "range": "± 913.2244055632796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59217.46511627907,
            "unit": "ns",
            "range": "± 3225.095414722319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49998.307692307695,
            "unit": "ns",
            "range": "± 401.89807675897646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53143.051546391755,
            "unit": "ns",
            "range": "± 7153.209558435893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2657.3894736842103,
            "unit": "ns",
            "range": "± 258.9286147717019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11923.385714285714,
            "unit": "ns",
            "range": "± 591.0585760926499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006104.8701298701,
            "unit": "ns",
            "range": "± 49680.05141941324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1939409.7075471699,
            "unit": "ns",
            "range": "± 80364.29297468795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699313.276119403,
            "unit": "ns",
            "range": "± 80293.16995403345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8157442.285714285,
            "unit": "ns",
            "range": "± 183850.81183479796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741731.1090959823,
            "unit": "ns",
            "range": "± 4241.974651470107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206228.4552176339,
            "unit": "ns",
            "range": "± 1430.150347469073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763584.2158203125,
            "unit": "ns",
            "range": "± 1917.7597170613308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947705.1870492788,
            "unit": "ns",
            "range": "± 1772.7166002251508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620707.6116536459,
            "unit": "ns",
            "range": "± 487.3022005779514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587578.8184244792,
            "unit": "ns",
            "range": "± 705.4721307376498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2374166.933333333,
            "unit": "ns",
            "range": "± 46666.38313414688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2468123.9285714286,
            "unit": "ns",
            "range": "± 40808.86050180823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3030622.3666666667,
            "unit": "ns",
            "range": "± 36239.62512788348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2564712.533333333,
            "unit": "ns",
            "range": "± 35874.54138256716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3240524.0714285714,
            "unit": "ns",
            "range": "± 46102.094788822586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32355.1,
            "unit": "ns",
            "range": "± 410.7040644690877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10240555.933333334,
            "unit": "ns",
            "range": "± 48873.89119891938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27210923.3,
            "unit": "ns",
            "range": "± 123039.80658899437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69066052.33333333,
            "unit": "ns",
            "range": "± 333868.0915307436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136942692.7142857,
            "unit": "ns",
            "range": "± 999906.0017083475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287795355.73333335,
            "unit": "ns",
            "range": "± 503699.9969669399"
          }
        ]
      },
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
          "id": "0d0576b1ffe1f6df808743926b476cebd937512e",
          "message": "Release 5.1.2",
          "timestamp": "2024-07-17T17:14:13+09:00",
          "tree_id": "dc88da6b94c65988531bcacfcd575558ae310fa5",
          "url": "https://github.com/planetarium/libplanet/commit/0d0576b1ffe1f6df808743926b476cebd937512e"
        },
        "date": 1721204549482,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198808.90476190476,
            "unit": "ns",
            "range": "± 7188.227583736239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191403.0606060606,
            "unit": "ns",
            "range": "± 8626.604323261648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167496.5,
            "unit": "ns",
            "range": "± 4197.641853521424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101708.5,
            "unit": "ns",
            "range": "± 44006.800162831976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2795468.2,
            "unit": "ns",
            "range": "± 30013.53021365055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12690.173333333334,
            "unit": "ns",
            "range": "± 617.4960197559288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59577.043209876545,
            "unit": "ns",
            "range": "± 3122.4813652341577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50211.02631578947,
            "unit": "ns",
            "range": "± 1032.2076862736196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51735.0412371134,
            "unit": "ns",
            "range": "± 8510.432771405642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2678.453608247423,
            "unit": "ns",
            "range": "± 364.7988606929668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12245.372093023256,
            "unit": "ns",
            "range": "± 1219.0367826956574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000433.1363636364,
            "unit": "ns",
            "range": "± 44243.763842493674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925867.375,
            "unit": "ns",
            "range": "± 70794.28421891946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694317.6538461538,
            "unit": "ns",
            "range": "± 86350.69358117542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8304970.869565218,
            "unit": "ns",
            "range": "± 194518.74442916905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3711911.118389423,
            "unit": "ns",
            "range": "± 4401.7893139517155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1230753.7437220982,
            "unit": "ns",
            "range": "± 1533.941742575599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765400.9335286458,
            "unit": "ns",
            "range": "± 1663.8387016863935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938609.730859375,
            "unit": "ns",
            "range": "± 2183.0990346129715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641368.1960797991,
            "unit": "ns",
            "range": "± 611.0768004402439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560577.085561899,
            "unit": "ns",
            "range": "± 373.95339284416355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2413939.75,
            "unit": "ns",
            "range": "± 53069.18411388249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2602271.4,
            "unit": "ns",
            "range": "± 47195.380671054176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3094767.7333333334,
            "unit": "ns",
            "range": "± 56464.91289220067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2556913.592592593,
            "unit": "ns",
            "range": "± 69789.31344810898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3242701.3076923075,
            "unit": "ns",
            "range": "± 23575.5739569037"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32047.666666666668,
            "unit": "ns",
            "range": "± 454.89146224593225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10179456.666666666,
            "unit": "ns",
            "range": "± 58772.0205633194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27071840.166666668,
            "unit": "ns",
            "range": "± 125927.31404644657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68929461.64285715,
            "unit": "ns",
            "range": "± 261510.08462996286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139763297.85714287,
            "unit": "ns",
            "range": "± 667199.4959197111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283967319.9285714,
            "unit": "ns",
            "range": "± 874540.0157198653"
          }
        ]
      }
    ]
  }
}