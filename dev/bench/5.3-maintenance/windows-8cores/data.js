window.BENCHMARK_DATA = {
  "lastUpdate": 1728551382850,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "7063430cde5bbc731a6c900aa461119b1c8f0ade",
          "message": "Prepare 5.3.1",
          "timestamp": "2024-10-10T17:56:15+09:00",
          "tree_id": "a924950a4d2ac793b68a6139ae388d38e427220c",
          "url": "https://github.com/planetarium/libplanet/commit/7063430cde5bbc731a6c900aa461119b1c8f0ade"
        },
        "date": 1728551208515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971381.6326530612,
            "unit": "ns",
            "range": "± 93822.14073528873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1707750,
            "unit": "ns",
            "range": "± 60173.129650325594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1490963.7362637362,
            "unit": "ns",
            "range": "± 118960.8754698447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6608128.571428572,
            "unit": "ns",
            "range": "± 238969.02777752138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32783.83838383838,
            "unit": "ns",
            "range": "± 4720.660345339692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9628237.5,
            "unit": "ns",
            "range": "± 187391.20888309213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23638728.57142857,
            "unit": "ns",
            "range": "± 338118.9672939926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60029196.666666664,
            "unit": "ns",
            "range": "± 1059008.5254389509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122258864.28571428,
            "unit": "ns",
            "range": "± 1610803.5178884352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249162405.55555555,
            "unit": "ns",
            "range": "± 5252943.034424463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3330433.426339286,
            "unit": "ns",
            "range": "± 12169.374573177836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1085881.3671875,
            "unit": "ns",
            "range": "± 1944.0517582761845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739018.8997395834,
            "unit": "ns",
            "range": "± 1713.7945339496378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970386.9891826923,
            "unit": "ns",
            "range": "± 3006.0477963089734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616211.5931919643,
            "unit": "ns",
            "range": "± 1572.9847496486655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559053.9341517857,
            "unit": "ns",
            "range": "± 1484.9741921229047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2181655.5555555555,
            "unit": "ns",
            "range": "± 45452.227308683796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2345970,
            "unit": "ns",
            "range": "± 53929.85795408114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2629964.285714286,
            "unit": "ns",
            "range": "± 95462.06645785634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2206307.407407407,
            "unit": "ns",
            "range": "± 52894.495321608236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2888786.6666666665,
            "unit": "ns",
            "range": "± 33732.13530716596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174443.58974358975,
            "unit": "ns",
            "range": "± 5418.671174831027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168946.92307692306,
            "unit": "ns",
            "range": "± 7803.283948736927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145621.73913043478,
            "unit": "ns",
            "range": "± 3528.9654061700103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2625300,
            "unit": "ns",
            "range": "± 26226.26399388451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2389260,
            "unit": "ns",
            "range": "± 34690.46390168753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10319.78021978022,
            "unit": "ns",
            "range": "± 1138.9293003342882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58332.291666666664,
            "unit": "ns",
            "range": "± 8283.05174871737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43519.354838709674,
            "unit": "ns",
            "range": "± 1316.9204873083543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51952.12765957447,
            "unit": "ns",
            "range": "± 10396.915679154168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2418.75,
            "unit": "ns",
            "range": "± 468.21328922887943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10196.808510638299,
            "unit": "ns",
            "range": "± 1443.7445435476334"
          }
        ]
      }
    ]
  }
}