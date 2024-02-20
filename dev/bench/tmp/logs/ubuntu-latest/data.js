window.BENCHMARK_DATA = {
  "lastUpdate": 1708420293517,
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
          "id": "c4a796309df66c22cce3355051ffa8b893e3816f",
          "message": "tmp: add logs",
          "timestamp": "2024-02-20T17:59:14+09:00",
          "tree_id": "804a9bc27afc1ff196a1dd7da9418e50258aec91",
          "url": "https://github.com/planetarium/libplanet/commit/c4a796309df66c22cce3355051ffa8b893e3816f"
        },
        "date": 1708420264845,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5741492,
            "unit": "ns",
            "range": "± 36216.3332466628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14985651.42857143,
            "unit": "ns",
            "range": "± 114309.81037292689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37624717.23076923,
            "unit": "ns",
            "range": "± 292823.38278706325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78409089.06666666,
            "unit": "ns",
            "range": "± 350584.6425652985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156131982.46153846,
            "unit": "ns",
            "range": "± 464397.737156168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217244.6947368421,
            "unit": "ns",
            "range": "± 15952.711112264114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203161.25862068965,
            "unit": "ns",
            "range": "± 8819.945903403232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173186,
            "unit": "ns",
            "range": "± 4736.505758467944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3289826.9210526315,
            "unit": "ns",
            "range": "± 70964.34689046777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2888522.1428571427,
            "unit": "ns",
            "range": "± 30577.698806249537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19869.52525252525,
            "unit": "ns",
            "range": "± 3933.992450278165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74351.42424242424,
            "unit": "ns",
            "range": "± 9581.148787253433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82949.38,
            "unit": "ns",
            "range": "± 11750.820364467316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80677.14583333333,
            "unit": "ns",
            "range": "± 15279.210665737364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4534.0368421052635,
            "unit": "ns",
            "range": "± 918.7221793214505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15707.54255319149,
            "unit": "ns",
            "range": "± 2820.9113819919044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41149.315217391304,
            "unit": "ns",
            "range": "± 5685.228898190541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1085993.5319148935,
            "unit": "ns",
            "range": "± 112064.84230062773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2023464.76,
            "unit": "ns",
            "range": "± 81649.39036147427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1800955.4886363635,
            "unit": "ns",
            "range": "± 116590.82315802791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13168044.989130436,
            "unit": "ns",
            "range": "± 961470.1376983029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750219.684375,
            "unit": "ns",
            "range": "± 51167.26608664511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1240357.720982143,
            "unit": "ns",
            "range": "± 28676.929542834143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765867.9986049107,
            "unit": "ns",
            "range": "± 2597.827461102169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935597.5740792411,
            "unit": "ns",
            "range": "± 4759.148726272048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618541.3997628348,
            "unit": "ns",
            "range": "± 1603.2085701257467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572440.1347005208,
            "unit": "ns",
            "range": "± 2154.558505162297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2548661.909090909,
            "unit": "ns",
            "range": "± 61334.001671495076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2736587.6333333333,
            "unit": "ns",
            "range": "± 50726.038506396115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3258429.081081081,
            "unit": "ns",
            "range": "± 110327.98705158339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3413653.918181818,
            "unit": "ns",
            "range": "± 129485.94746530819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14114294.590909092,
            "unit": "ns",
            "range": "± 859061.8157709164"
          }
        ]
      }
    ]
  }
}