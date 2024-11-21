window.BENCHMARK_DATA = {
  "lastUpdate": 1732172624367,
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
          "id": "54fbc412588ed4df00c631103c22c0ffd725f7af",
          "message": "Merge remote-tracking branch 'origin/5.3-maintenance' into port/5.3.2-to-5.4.1",
          "timestamp": "2024-11-21T15:53:33+09:00",
          "tree_id": "a6817dda74909352d820c37eb73962ef30f8f415",
          "url": "https://github.com/planetarium/libplanet/commit/54fbc412588ed4df00c631103c22c0ffd725f7af"
        },
        "date": 1732172551399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973990.9090909091,
            "unit": "ns",
            "range": "± 91350.52259148029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1747074.1935483871,
            "unit": "ns",
            "range": "± 47947.22771090411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1476808.5106382978,
            "unit": "ns",
            "range": "± 116931.75995395772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6453665.714285715,
            "unit": "ns",
            "range": "± 170989.91876519425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29719.565217391304,
            "unit": "ns",
            "range": "± 1148.0649546504842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9812273.333333334,
            "unit": "ns",
            "range": "± 89326.34763020586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24233273.333333332,
            "unit": "ns",
            "range": "± 191934.68184577295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58368873.333333336,
            "unit": "ns",
            "range": "± 213658.96212243964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118047633.33333333,
            "unit": "ns",
            "range": "± 1270427.8574371631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236793628.57142857,
            "unit": "ns",
            "range": "± 1655341.790144199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3283825.1822916665,
            "unit": "ns",
            "range": "± 14031.961545746635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056346.7075892857,
            "unit": "ns",
            "range": "± 1573.2946473915301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737269.0559895834,
            "unit": "ns",
            "range": "± 2390.5924282805427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916539.6614583333,
            "unit": "ns",
            "range": "± 7474.980060923217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639937.4790736607,
            "unit": "ns",
            "range": "± 729.683394294511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561146.2960379465,
            "unit": "ns",
            "range": "± 1288.3226380238837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186964.705882353,
            "unit": "ns",
            "range": "± 69178.12266874175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275431.25,
            "unit": "ns",
            "range": "± 43198.22093173128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2699813.6363636362,
            "unit": "ns",
            "range": "± 65069.298557143025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2321480,
            "unit": "ns",
            "range": "± 38917.82918626665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2929746.6666666665,
            "unit": "ns",
            "range": "± 46391.0377223056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92376.13636363637,
            "unit": "ns",
            "range": "± 5578.3653173107205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164035.08771929826,
            "unit": "ns",
            "range": "± 6627.795669647374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143643.33333333334,
            "unit": "ns",
            "range": "± 4223.3287519593405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2546985.714285714,
            "unit": "ns",
            "range": "± 32640.250214511743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493807.6923076925,
            "unit": "ns",
            "range": "± 19472.050976483428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9572.727272727272,
            "unit": "ns",
            "range": "± 1182.7036310030837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50937.234042553195,
            "unit": "ns",
            "range": "± 3978.5712041329016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45875,
            "unit": "ns",
            "range": "± 1459.8471995910552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50578.49462365591,
            "unit": "ns",
            "range": "± 8544.497968593409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2472.680412371134,
            "unit": "ns",
            "range": "± 387.16521953359245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11736.170212765957,
            "unit": "ns",
            "range": "± 1090.1169971568545"
          }
        ]
      }
    ]
  }
}