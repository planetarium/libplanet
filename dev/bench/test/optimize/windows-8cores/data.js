window.BENCHMARK_DATA = {
  "lastUpdate": 1756287921421,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0df115f8f4320098c7ea02e2924043dda780f1f2",
          "message": "Test singleton ActivitySource",
          "timestamp": "2025-08-27T18:00:37+09:00",
          "tree_id": "8edb064c933208a8f9463cd72f0d54fcf4031257",
          "url": "https://github.com/planetarium/libplanet/commit/0df115f8f4320098c7ea02e2924043dda780f1f2"
        },
        "date": 1756287748992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054272.9166666667,
            "unit": "ns",
            "range": "± 152344.30290363004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876310.6382978724,
            "unit": "ns",
            "range": "± 72413.71247168277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591746.4705882352,
            "unit": "ns",
            "range": "± 84252.64507231017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6965092.857142857,
            "unit": "ns",
            "range": "± 299375.9775734385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34678.57142857143,
            "unit": "ns",
            "range": "± 4000.212623214901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10420027.777777778,
            "unit": "ns",
            "range": "± 210669.62372273114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25076892.85714286,
            "unit": "ns",
            "range": "± 310934.2880473565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63130440,
            "unit": "ns",
            "range": "± 632236.6281701812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128023040,
            "unit": "ns",
            "range": "± 1927227.3821662634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257190220,
            "unit": "ns",
            "range": "± 4228018.312603942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3404052.8385416665,
            "unit": "ns",
            "range": "± 9558.404228595904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077277.9557291667,
            "unit": "ns",
            "range": "± 2337.707785241757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737705.078125,
            "unit": "ns",
            "range": "± 1599.1132092396956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942873.939732143,
            "unit": "ns",
            "range": "± 7773.590696766312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632098.0859375,
            "unit": "ns",
            "range": "± 1913.5059317734278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569359.0559895834,
            "unit": "ns",
            "range": "± 1063.853313651687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185312.5,
            "unit": "ns",
            "range": "± 77298.85787957789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273710.714285714,
            "unit": "ns",
            "range": "± 63812.17426679713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2765959.090909091,
            "unit": "ns",
            "range": "± 67406.61906943779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2339880,
            "unit": "ns",
            "range": "± 42541.49570881185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3062913.3333333335,
            "unit": "ns",
            "range": "± 35998.608438713425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98929.26829268293,
            "unit": "ns",
            "range": "± 5223.4392861900005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174086.95652173914,
            "unit": "ns",
            "range": "± 6225.239261645635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155029.16666666666,
            "unit": "ns",
            "range": "± 6108.276851886363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2695976.923076923,
            "unit": "ns",
            "range": "± 20074.82477491621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2595247.3684210526,
            "unit": "ns",
            "range": "± 56757.235157203155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12742.857142857143,
            "unit": "ns",
            "range": "± 2584.0111071862393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59621.64948453608,
            "unit": "ns",
            "range": "± 5667.620510484016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46428.813559322036,
            "unit": "ns",
            "range": "± 2040.5417508726339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59713.41463414634,
            "unit": "ns",
            "range": "± 8050.807216565412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2842.7083333333335,
            "unit": "ns",
            "range": "± 466.95988595137317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11636.458333333334,
            "unit": "ns",
            "range": "± 1689.7287101884392"
          }
        ]
      }
    ]
  }
}