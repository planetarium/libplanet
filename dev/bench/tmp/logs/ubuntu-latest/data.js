window.BENCHMARK_DATA = {
  "lastUpdate": 1708485066698,
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
      },
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
          "id": "532814416591ec7f436d5d659e31c6a589ce8be5",
          "message": "tmp: logs",
          "timestamp": "2024-02-21T12:00:01+09:00",
          "tree_id": "d395dd51c4a4e7cf6838b57a0757ded6fd9e846d",
          "url": "https://github.com/planetarium/libplanet/commit/532814416591ec7f436d5d659e31c6a589ce8be5"
        },
        "date": 1708485039788,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5730510.466666667,
            "unit": "ns",
            "range": "± 17545.938141537677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14244699.57142857,
            "unit": "ns",
            "range": "± 118821.7368915199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36808016.73076923,
            "unit": "ns",
            "range": "± 95787.32888031506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76578275.34615384,
            "unit": "ns",
            "range": "± 297363.862081134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151453987.07142857,
            "unit": "ns",
            "range": "± 1534766.2860770947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193414.35714285713,
            "unit": "ns",
            "range": "± 7273.885997628331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187736.57692307694,
            "unit": "ns",
            "range": "± 7130.947632062777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166655.29411764705,
            "unit": "ns",
            "range": "± 5378.496807740378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3301055,
            "unit": "ns",
            "range": "± 53486.48537714924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835707.75,
            "unit": "ns",
            "range": "± 45376.269637333564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13703.505050505051,
            "unit": "ns",
            "range": "± 2841.65922131354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59846.225,
            "unit": "ns",
            "range": "± 3066.501445180018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52482.86046511628,
            "unit": "ns",
            "range": "± 1004.1221843076797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59281.68947368421,
            "unit": "ns",
            "range": "± 10515.636436557013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3546.305263157895,
            "unit": "ns",
            "range": "± 542.3310222898575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13940.855670103092,
            "unit": "ns",
            "range": "± 2513.315543384586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40155.701030927834,
            "unit": "ns",
            "range": "± 5991.407702154514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967508.8764044944,
            "unit": "ns",
            "range": "± 77597.01722606532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1872183.6976744186,
            "unit": "ns",
            "range": "± 68541.70120011922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1676795.242105263,
            "unit": "ns",
            "range": "± 182220.94842716653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7751351.322580645,
            "unit": "ns",
            "range": "± 216984.0377200417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3708674.260216346,
            "unit": "ns",
            "range": "± 5468.924784689108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201092.96640625,
            "unit": "ns",
            "range": "± 2995.714748416802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757718.5047433035,
            "unit": "ns",
            "range": "± 2163.6210061644592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940894.0817708333,
            "unit": "ns",
            "range": "± 6273.324624614583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613435.6413411458,
            "unit": "ns",
            "range": "± 2823.3029938195846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575882.0256159856,
            "unit": "ns",
            "range": "± 5966.043398880075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2339807.5384615385,
            "unit": "ns",
            "range": "± 36119.410669369514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589717.066666667,
            "unit": "ns",
            "range": "± 40919.882089389306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3147521.263157895,
            "unit": "ns",
            "range": "± 69884.39059764832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3253782.933333333,
            "unit": "ns",
            "range": "± 59673.23765363052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9289805.232558139,
            "unit": "ns",
            "range": "± 255322.4495738148"
          }
        ]
      }
    ]
  }
}