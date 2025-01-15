window.BENCHMARK_DATA = {
  "lastUpdate": 1736908952469,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "89b9e8cc75ff5c93da324f370e74c44412532e14",
          "message": "release: 5.5.0",
          "timestamp": "2025-01-15T11:32:52+09:00",
          "tree_id": "1fbf6106ca5d65e0d15336d9b818ff0842baa216",
          "url": "https://github.com/planetarium/libplanet/commit/89b9e8cc75ff5c93da324f370e74c44412532e14"
        },
        "date": 1736908925625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10978058.866666667,
            "unit": "ns",
            "range": "± 108455.26430275735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28205053.933333334,
            "unit": "ns",
            "range": "± 148876.10399709007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71746167.21428572,
            "unit": "ns",
            "range": "± 248902.47289386523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142625500,
            "unit": "ns",
            "range": "± 959956.5530228066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298514371.56666666,
            "unit": "ns",
            "range": "± 1225372.6109658277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125211,
            "unit": "ns",
            "range": "± 13449.517408720378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233394.59259259258,
            "unit": "ns",
            "range": "± 8719.866448948129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179809.04761904763,
            "unit": "ns",
            "range": "± 9637.739786406157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2922598.2,
            "unit": "ns",
            "range": "± 27766.000628209214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2855725.214285714,
            "unit": "ns",
            "range": "± 17409.316525171987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16913.125,
            "unit": "ns",
            "range": "± 2438.12422398428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73839.22222222222,
            "unit": "ns",
            "range": "± 9261.816958819949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51428.64864864865,
            "unit": "ns",
            "range": "± 1746.9030726818662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77993.3,
            "unit": "ns",
            "range": "± 8673.537448113646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3118.3092783505153,
            "unit": "ns",
            "range": "± 501.0511525954034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13808.033333333333,
            "unit": "ns",
            "range": "± 1165.9587312256588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742071.162109375,
            "unit": "ns",
            "range": "± 4635.172295395559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201444.7341145833,
            "unit": "ns",
            "range": "± 2491.210769029741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750418.2735072544,
            "unit": "ns",
            "range": "± 1163.4731354355158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955120.9700520833,
            "unit": "ns",
            "range": "± 2617.9513320839933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628471.40703125,
            "unit": "ns",
            "range": "± 680.3218746638767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566441.22890625,
            "unit": "ns",
            "range": "± 516.0765971889109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2497618.4545454546,
            "unit": "ns",
            "range": "± 60668.8755996157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621152.710526316,
            "unit": "ns",
            "range": "± 57116.70792681999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3234097.8,
            "unit": "ns",
            "range": "± 86082.78505262634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2722608,
            "unit": "ns",
            "range": "± 68122.56396155134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3298470.9285714286,
            "unit": "ns",
            "range": "± 44115.366449736146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039051.3958333334,
            "unit": "ns",
            "range": "± 95484.16942393387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1975093.4,
            "unit": "ns",
            "range": "± 57499.428354339856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1635582.097826087,
            "unit": "ns",
            "range": "± 100738.19395240578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7811912.78125,
            "unit": "ns",
            "range": "± 215105.35039171888"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31025.931034482757,
            "unit": "ns",
            "range": "± 916.6902004741406"
          }
        ]
      }
    ]
  }
}