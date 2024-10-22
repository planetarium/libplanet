window.BENCHMARK_DATA = {
  "lastUpdate": 1729569289020,
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
        "date": 1729569216253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027694.8979591837,
            "unit": "ns",
            "range": "± 109471.50207937795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1789636.5384615385,
            "unit": "ns",
            "range": "± 63052.903491934434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1500761.5384615385,
            "unit": "ns",
            "range": "± 76406.4086364441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6868547.05882353,
            "unit": "ns",
            "range": "± 278599.16249187913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29270,
            "unit": "ns",
            "range": "± 1271.4649772627624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10165185.714285715,
            "unit": "ns",
            "range": "± 55707.158180322505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24860261.53846154,
            "unit": "ns",
            "range": "± 86313.89940658011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62183315.384615384,
            "unit": "ns",
            "range": "± 541547.1983834124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121077166.66666667,
            "unit": "ns",
            "range": "± 1210468.8328239168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252522726.66666666,
            "unit": "ns",
            "range": "± 4453547.74140262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3298362.4479166665,
            "unit": "ns",
            "range": "± 4176.69582171346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059099.5396205357,
            "unit": "ns",
            "range": "± 2675.02823969789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739917.71484375,
            "unit": "ns",
            "range": "± 1392.3697205362546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960109.095982143,
            "unit": "ns",
            "range": "± 5562.564217747481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636173.4375,
            "unit": "ns",
            "range": "± 2800.2842848834716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577119.4921875,
            "unit": "ns",
            "range": "± 1712.2770674691935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2034538.4615384615,
            "unit": "ns",
            "range": "± 55260.713545324965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2162407.6923076925,
            "unit": "ns",
            "range": "± 35693.124023600154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2621694.4444444445,
            "unit": "ns",
            "range": "± 85686.74157966145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2322190,
            "unit": "ns",
            "range": "± 31950.895359687718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2916773.3333333335,
            "unit": "ns",
            "range": "± 33766.307524061966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178860,
            "unit": "ns",
            "range": "± 4754.787061478148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168071.69811320756,
            "unit": "ns",
            "range": "± 5710.360939639272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143837.03703703705,
            "unit": "ns",
            "range": "± 3997.41725734814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2672086.6666666665,
            "unit": "ns",
            "range": "± 40804.44420239867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2466800,
            "unit": "ns",
            "range": "± 47314.56435390693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11915.625,
            "unit": "ns",
            "range": "± 1723.6942044708267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55682.291666666664,
            "unit": "ns",
            "range": "± 4992.309765854439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44702.857142857145,
            "unit": "ns",
            "range": "± 1388.0764757465665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52717.72151898734,
            "unit": "ns",
            "range": "± 4151.606408079639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2734.6938775510203,
            "unit": "ns",
            "range": "± 493.6925962071519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11037.362637362638,
            "unit": "ns",
            "range": "± 1315.6872603445574"
          }
        ]
      }
    ]
  }
}