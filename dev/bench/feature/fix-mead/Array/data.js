window.BENCHMARK_DATA = {
  "lastUpdate": 1722585137563,
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
          "id": "cc643bea29081c37b4edfbd68fcba0731dce23df",
          "message": "chore: Update project targetframework to a previous version",
          "timestamp": "2024-08-02T16:44:00+09:00",
          "tree_id": "38afe68056870734931cb456e83a6f804bcb8004",
          "url": "https://github.com/planetarium/libplanet/commit/cc643bea29081c37b4edfbd68fcba0731dce23df"
        },
        "date": 1722585124584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10724006.285714285,
            "unit": "ns",
            "range": "± 107132.06114915336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26460351.5,
            "unit": "ns",
            "range": "± 111163.51083236317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67158302.06666666,
            "unit": "ns",
            "range": "± 103597.02900419122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135638523.85714287,
            "unit": "ns",
            "range": "± 233593.51455157087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275895886.1333333,
            "unit": "ns",
            "range": "± 451575.57529465127"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14091.4375,
            "unit": "ns",
            "range": "± 259.10383214714005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112250.4255319149,
            "unit": "ns",
            "range": "± 3992.39768181587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106082.11538461539,
            "unit": "ns",
            "range": "± 4378.58059485503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91373.4375,
            "unit": "ns",
            "range": "± 2835.4963147227772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074287.4246575343,
            "unit": "ns",
            "range": "± 152873.4367940354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2725628.3571428573,
            "unit": "ns",
            "range": "± 162132.39746159414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4875.593023255814,
            "unit": "ns",
            "range": "± 409.8272915411184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26234.81395348837,
            "unit": "ns",
            "range": "± 1606.2492115750167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22967.76595744681,
            "unit": "ns",
            "range": "± 1442.710303527327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29070.32978723404,
            "unit": "ns",
            "range": "± 5644.752391091888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1374.4105263157894,
            "unit": "ns",
            "range": "± 206.20226048335027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4888,
            "unit": "ns",
            "range": "± 584.7428533513296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683125.858974359,
            "unit": "ns",
            "range": "± 33063.815838632756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1276732,
            "unit": "ns",
            "range": "± 41673.41394506496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1089041.98989899,
            "unit": "ns",
            "range": "± 68780.82774624831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9527097.31,
            "unit": "ns",
            "range": "± 1479699.9041228136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180389.75,
            "unit": "ns",
            "range": "± 78680.69950432166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295306.849056604,
            "unit": "ns",
            "range": "± 93306.64723257646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2572733.1666666665,
            "unit": "ns",
            "range": "± 53791.74567145365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2308807.3571428573,
            "unit": "ns",
            "range": "± 99343.09997971283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2861962.906976744,
            "unit": "ns",
            "range": "± 105119.89410143021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3024724.2940538195,
            "unit": "ns",
            "range": "± 62980.101984676745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917495.3616071428,
            "unit": "ns",
            "range": "± 4349.195111396432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611657.5958984375,
            "unit": "ns",
            "range": "± 4934.880841508161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623186.0723958334,
            "unit": "ns",
            "range": "± 3321.3746938890936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461484.130859375,
            "unit": "ns",
            "range": "± 415.5556116148057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428469.616141183,
            "unit": "ns",
            "range": "± 391.06315432270924"
          }
        ]
      }
    ]
  }
}