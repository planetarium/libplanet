window.BENCHMARK_DATA = {
  "lastUpdate": 1729569216983,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57a4569717082553221fedeaa74ac656edb9d5c2",
          "message": "Merge pull request #3971 from riemannulus/prepare/5.3.2\n\n🧹  prepare: 5.3.2",
          "timestamp": "2024-10-16T15:08:31+09:00",
          "tree_id": "6dbfc866a79fbd44fcbac641b75e9992b736d867",
          "url": "https://github.com/planetarium/libplanet/commit/57a4569717082553221fedeaa74ac656edb9d5c2"
        },
        "date": 1729569189654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10360547,
            "unit": "ns",
            "range": "± 51227.27469536405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27229866.35714286,
            "unit": "ns",
            "range": "± 149358.75617856756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68425983,
            "unit": "ns",
            "range": "± 611493.0996387916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139499828.92307693,
            "unit": "ns",
            "range": "± 824778.9942345629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289711008.5714286,
            "unit": "ns",
            "range": "± 1789869.6989178467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202203.07272727272,
            "unit": "ns",
            "range": "± 8513.05714303262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191340.60416666666,
            "unit": "ns",
            "range": "± 7520.279482808915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169648.91666666666,
            "unit": "ns",
            "range": "± 2559.92931217511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101663.214285714,
            "unit": "ns",
            "range": "± 33529.58559283834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2839539.214285714,
            "unit": "ns",
            "range": "± 32478.50723449769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12550.788888888888,
            "unit": "ns",
            "range": "± 807.5797416979941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62114.07142857143,
            "unit": "ns",
            "range": "± 6111.637024022455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49994.307692307695,
            "unit": "ns",
            "range": "± 712.8394378137086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63590.06701030928,
            "unit": "ns",
            "range": "± 7804.417258711058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2460.0833333333335,
            "unit": "ns",
            "range": "± 342.75197927691914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13884.112244897959,
            "unit": "ns",
            "range": "± 2318.3933464623037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3692184.722355769,
            "unit": "ns",
            "range": "± 5135.684416442375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197512.0322265625,
            "unit": "ns",
            "range": "± 1536.5481472317147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760309.3470982143,
            "unit": "ns",
            "range": "± 1272.927323434308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961378.3657924107,
            "unit": "ns",
            "range": "± 6402.940110359352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615217.5251652644,
            "unit": "ns",
            "range": "± 1042.2000331654006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568613.4521484375,
            "unit": "ns",
            "range": "± 420.19948836479006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395754.033333333,
            "unit": "ns",
            "range": "± 41769.1766717767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538238.3181818184,
            "unit": "ns",
            "range": "± 62276.859157418876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3029539.9583333335,
            "unit": "ns",
            "range": "± 78246.08311462497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2587168.5789473685,
            "unit": "ns",
            "range": "± 56766.725053126946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3171386.5833333335,
            "unit": "ns",
            "range": "± 17198.459008444668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005074.0217391305,
            "unit": "ns",
            "range": "± 67168.6754929933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1906703.836734694,
            "unit": "ns",
            "range": "± 75633.11977025092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561999.6486486488,
            "unit": "ns",
            "range": "± 73669.27047496274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7900668.5,
            "unit": "ns",
            "range": "± 171723.29875964628"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30651.629032258064,
            "unit": "ns",
            "range": "± 935.0670115713805"
          }
        ]
      }
    ]
  }
}