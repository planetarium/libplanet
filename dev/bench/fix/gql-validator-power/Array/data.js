window.BENCHMARK_DATA = {
  "lastUpdate": 1733469406556,
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
          "id": "62e3c800cf2602ad9b50ef88d4d6c70197d2e931",
          "message": "chore: Changes",
          "timestamp": "2024-12-05T13:12:32+09:00",
          "tree_id": "728eda738ebffb6d400d115e7e10522c0fc3a29d",
          "url": "https://github.com/planetarium/libplanet/commit/62e3c800cf2602ad9b50ef88d4d6c70197d2e931"
        },
        "date": 1733469393894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10779363.111111112,
            "unit": "ns",
            "range": "± 226257.29419165276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26463034.692307692,
            "unit": "ns",
            "range": "± 206682.38450231822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67305988.21428572,
            "unit": "ns",
            "range": "± 104070.80409578307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135535083.85714287,
            "unit": "ns",
            "range": "± 263113.04349296686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272246341.26666665,
            "unit": "ns",
            "range": "± 1504593.6195601819"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13461.89010989011,
            "unit": "ns",
            "range": "± 1072.5904722322127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54582.47142857143,
            "unit": "ns",
            "range": "± 2655.893908968049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105592.51612903226,
            "unit": "ns",
            "range": "± 4789.6656570467385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90977.72222222222,
            "unit": "ns",
            "range": "± 2887.574856035138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2821549.585858586,
            "unit": "ns",
            "range": "± 178103.821109934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2671347.97979798,
            "unit": "ns",
            "range": "± 184297.62209772848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5197.869565217391,
            "unit": "ns",
            "range": "± 685.4666849719265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27448.571428571428,
            "unit": "ns",
            "range": "± 2175.8636402477937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21906.339285714286,
            "unit": "ns",
            "range": "± 935.3432967591139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31052.4375,
            "unit": "ns",
            "range": "± 5107.5590684942545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1145.9263157894736,
            "unit": "ns",
            "range": "± 186.06897840758919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5067.691489361702,
            "unit": "ns",
            "range": "± 770.190173786811"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669599.9512195121,
            "unit": "ns",
            "range": "± 35478.596828038164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262481.24,
            "unit": "ns",
            "range": "± 49155.41572859933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1047213.686746988,
            "unit": "ns",
            "range": "± 53533.8889327735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8749793.23,
            "unit": "ns",
            "range": "± 1368225.614384202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2098250.78,
            "unit": "ns",
            "range": "± 53176.150693175725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2227859.3076923075,
            "unit": "ns",
            "range": "± 28047.455708687183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2514303.5,
            "unit": "ns",
            "range": "± 41458.20791703746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2274800.53125,
            "unit": "ns",
            "range": "± 69666.5953158486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2740754.1,
            "unit": "ns",
            "range": "± 50757.74498790448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3003167.012276786,
            "unit": "ns",
            "range": "± 35233.56451155121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917909.1689453125,
            "unit": "ns",
            "range": "± 9397.19452019079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619241.262890625,
            "unit": "ns",
            "range": "± 8760.600073521253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1625408.2264229911,
            "unit": "ns",
            "range": "± 11327.600114576817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466641.2746233259,
            "unit": "ns",
            "range": "± 603.7228172521885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424211.89915364585,
            "unit": "ns",
            "range": "± 964.7200384055701"
          }
        ]
      }
    ]
  }
}