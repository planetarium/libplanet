window.BENCHMARK_DATA = {
  "lastUpdate": 1748056001248,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4",
          "message": "Merge pull request #4034 from planetarium/prepare/5.5.2\n\nPrepare 5.5.2",
          "timestamp": "2025-02-18T09:27:55+09:00",
          "tree_id": "2e2d668e1ee286aa02c9f861aa68bbb6be813dd4",
          "url": "https://github.com/planetarium/libplanet/commit/2f8dac93d6ff24f8d9e6d2343460ac95f9a1b8e4"
        },
        "date": 1748055974127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2680412.0625,
            "unit": "ns",
            "range": "± 52082.44251692855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2674307.3666666667,
            "unit": "ns",
            "range": "± 40800.482134522914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3019315.066666667,
            "unit": "ns",
            "range": "± 33861.65120112525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2587729.214285714,
            "unit": "ns",
            "range": "± 40079.01568810632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3250200.5,
            "unit": "ns",
            "range": "± 31740.649604028495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3891428.49921875,
            "unit": "ns",
            "range": "± 13537.766306456506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236117.9444010416,
            "unit": "ns",
            "range": "± 1696.7749121394872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 786530.8130258414,
            "unit": "ns",
            "range": "± 1026.5569213666538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010808.5162259615,
            "unit": "ns",
            "range": "± 6501.654180944035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621082.6052594866,
            "unit": "ns",
            "range": "± 1524.131739184636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581498.3015625,
            "unit": "ns",
            "range": "± 2246.1176204672292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11691666.266666668,
            "unit": "ns",
            "range": "± 178603.72823474987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27950301.14285714,
            "unit": "ns",
            "range": "± 160870.87571791004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70064007.07692307,
            "unit": "ns",
            "range": "± 834149.5187793034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141389562.42857143,
            "unit": "ns",
            "range": "± 1022822.9092683764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283544839.21428573,
            "unit": "ns",
            "range": "± 2094638.2044052077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977432.9850746269,
            "unit": "ns",
            "range": "± 46043.2253653589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1954738.0555555555,
            "unit": "ns",
            "range": "± 68289.9596718273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596783.5443037974,
            "unit": "ns",
            "range": "± 82012.63509468707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7832000.629032258,
            "unit": "ns",
            "range": "± 233428.44234550654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33885.89473684211,
            "unit": "ns",
            "range": "± 5614.4119971648115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105485.5617977528,
            "unit": "ns",
            "range": "± 6668.35610271489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191022.77173913043,
            "unit": "ns",
            "range": "± 11047.653978101047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172271.66,
            "unit": "ns",
            "range": "± 6905.044915871588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2954436.8125,
            "unit": "ns",
            "range": "± 57297.95084552181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862568.5,
            "unit": "ns",
            "range": "± 50628.20727276294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12056.627659574468,
            "unit": "ns",
            "range": "± 1130.751907361166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68101.37894736842,
            "unit": "ns",
            "range": "± 7616.437359183136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50732.3125,
            "unit": "ns",
            "range": "± 837.0490402797994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59170.989795918365,
            "unit": "ns",
            "range": "± 11829.722965179044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2856.0520833333335,
            "unit": "ns",
            "range": "± 364.24027263077363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11770.09677419355,
            "unit": "ns",
            "range": "± 1203.736511184672"
          }
        ]
      }
    ]
  }
}