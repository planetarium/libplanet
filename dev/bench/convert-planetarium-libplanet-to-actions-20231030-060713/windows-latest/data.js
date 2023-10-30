window.BENCHMARK_DATA = {
  "lastUpdate": 1698646953213,
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "b4e68ad4036d61a9c11148a9aac5a071c309018d",
          "message": "Add composite action netcore_build_base",
          "timestamp": "2023-10-30T15:07:15+09:00",
          "tree_id": "bd3a28705c00cb6c075306eb8b84cc3bf2e74113",
          "url": "https://github.com/planetarium/libplanet/commit/b4e68ad4036d61a9c11148a9aac5a071c309018d"
        },
        "date": 1698646884763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1277981,
            "unit": "ns",
            "range": "± 92698.96831282767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2341413.793103448,
            "unit": "ns",
            "range": "± 102546.57212962017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1900584,
            "unit": "ns",
            "range": "± 136795.12936571176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7579500,
            "unit": "ns",
            "range": "± 267794.203418624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44786.458333333336,
            "unit": "ns",
            "range": "± 2871.662631983399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7131807.692307692,
            "unit": "ns",
            "range": "± 56209.27357560704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17952140,
            "unit": "ns",
            "range": "± 74971.93570168201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46417746.666666664,
            "unit": "ns",
            "range": "± 268174.7134842898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93340780,
            "unit": "ns",
            "range": "± 317360.10236233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184894623.33333334,
            "unit": "ns",
            "range": "± 918024.779829473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4472209.988839285,
            "unit": "ns",
            "range": "± 4968.20372265936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1474558.6635044643,
            "unit": "ns",
            "range": "± 1786.5617488096511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068347.2935267857,
            "unit": "ns",
            "range": "± 948.5778847238196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549334.7265625,
            "unit": "ns",
            "range": "± 3815.4473356421618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824483.9618389423,
            "unit": "ns",
            "range": "± 1223.7548878642235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736161.8619791666,
            "unit": "ns",
            "range": "± 1076.5469689316342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2977286.8421052634,
            "unit": "ns",
            "range": "± 101306.91439024136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3201335.714285714,
            "unit": "ns",
            "range": "± 35981.71773260708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3949884.210526316,
            "unit": "ns",
            "range": "± 71274.93141317791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3742744,
            "unit": "ns",
            "range": "± 85995.79001323262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8978492.857142856,
            "unit": "ns",
            "range": "± 174457.9816302406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246854.54545454544,
            "unit": "ns",
            "range": "± 6002.358843680681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231669.69696969696,
            "unit": "ns",
            "range": "± 6788.017238509566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209716.92307692306,
            "unit": "ns",
            "range": "± 9717.068893684731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3835571.4285714286,
            "unit": "ns",
            "range": "± 38011.990589436755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3540484.6153846155,
            "unit": "ns",
            "range": "± 26302.84668224608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19629.166666666668,
            "unit": "ns",
            "range": "± 2466.274269405133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77540.21739130435,
            "unit": "ns",
            "range": "± 4642.329364687912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66207.44680851063,
            "unit": "ns",
            "range": "± 3856.6863977070416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74965.59139784946,
            "unit": "ns",
            "range": "± 7487.968532537581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4273.469387755102,
            "unit": "ns",
            "range": "± 607.0973733287882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16645.555555555555,
            "unit": "ns",
            "range": "± 1654.21906019913"
          }
        ]
      }
    ]
  }
}