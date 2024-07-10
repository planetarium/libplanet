window.BENCHMARK_DATA = {
  "lastUpdate": 1720597417389,
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
          "id": "7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a",
          "message": "style: Change dotnet option -p to --project",
          "timestamp": "2024-07-10T16:15:17+09:00",
          "tree_id": "ffcdb296cd2d895cadbc7021388037a0b2a930d1",
          "url": "https://github.com/planetarium/libplanet/commit/7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a"
        },
        "date": 1720597368719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10699038.846153846,
            "unit": "ns",
            "range": "± 132011.0679273056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26548571,
            "unit": "ns",
            "range": "± 149717.2813199804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67497574.71428572,
            "unit": "ns",
            "range": "± 86428.52134338755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135854889.7142857,
            "unit": "ns",
            "range": "± 238224.80946122122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273039715.0769231,
            "unit": "ns",
            "range": "± 251298.21648938057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14134.86,
            "unit": "ns",
            "range": "± 369.3143286325801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109125.72222222222,
            "unit": "ns",
            "range": "± 2884.9818183245957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105359.375,
            "unit": "ns",
            "range": "± 4460.195397523623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92983.68571428572,
            "unit": "ns",
            "range": "± 2972.8646095230474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3086570.7464788733,
            "unit": "ns",
            "range": "± 151019.796013987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825710.4714285713,
            "unit": "ns",
            "range": "± 137194.35995038145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4746.122222222222,
            "unit": "ns",
            "range": "± 591.769785707166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26455.393258426968,
            "unit": "ns",
            "range": "± 1521.4536531194103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22367.536231884056,
            "unit": "ns",
            "range": "± 1068.178267504046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28780.271739130436,
            "unit": "ns",
            "range": "± 5135.243474338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1094.0652173913043,
            "unit": "ns",
            "range": "± 201.43702445387578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4904.425531914893,
            "unit": "ns",
            "range": "± 553.2801598241982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683884.2,
            "unit": "ns",
            "range": "± 34001.34786025289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262266.7435897435,
            "unit": "ns",
            "range": "± 43676.23992498845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1070886.8,
            "unit": "ns",
            "range": "± 53396.52316951362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9478517.62,
            "unit": "ns",
            "range": "± 1322245.924285224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188229.2560975607,
            "unit": "ns",
            "range": "± 78637.60617534733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290647.6078431373,
            "unit": "ns",
            "range": "± 92422.02380040777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555634.0714285714,
            "unit": "ns",
            "range": "± 41605.52281888748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2334588.388888889,
            "unit": "ns",
            "range": "± 43017.71727356189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2953788.5416666665,
            "unit": "ns",
            "range": "± 115015.35410062365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034692.257467831,
            "unit": "ns",
            "range": "± 59037.25251236289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922202.8429036458,
            "unit": "ns",
            "range": "± 8813.908274722537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 607766.2702473958,
            "unit": "ns",
            "range": "± 5369.888058122946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1634044.5140904018,
            "unit": "ns",
            "range": "± 12120.378279451754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462132.06904296874,
            "unit": "ns",
            "range": "± 961.5602287938626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424381.2703776042,
            "unit": "ns",
            "range": "± 1407.0790286680092"
          }
        ]
      }
    ]
  }
}