window.BENCHMARK_DATA = {
  "lastUpdate": 1778137596440,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "a638a5b61598d17095327f7efc8d4f782cf11831",
          "message": "prepare: 5.5.4\n\nBump VersionPrefix to 5.5.4 and open the Version 5.5.4 changelog\nsection with the NetMQ dependency bump entry (#4050).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-07T15:56:20+09:00",
          "tree_id": "62a2f0aba2361f404c4dda050b83ae021e0e7021",
          "url": "https://github.com/planetarium/libplanet/commit/a638a5b61598d17095327f7efc8d4f782cf11831"
        },
        "date": 1778137483752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012893.8144329897,
            "unit": "ns",
            "range": "± 111735.25985414603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1816263.888888889,
            "unit": "ns",
            "range": "± 60005.35763116861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1523581.8181818181,
            "unit": "ns",
            "range": "± 95664.0091890753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7063732.075471698,
            "unit": "ns",
            "range": "± 291046.8543918295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30114.285714285714,
            "unit": "ns",
            "range": "± 524.1948299823451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10052635.714285715,
            "unit": "ns",
            "range": "± 89580.96129409209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24935546.666666668,
            "unit": "ns",
            "range": "± 118424.5743480795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60850728.571428575,
            "unit": "ns",
            "range": "± 193844.53099791644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123621214.28571428,
            "unit": "ns",
            "range": "± 540333.7937112333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244903976.92307693,
            "unit": "ns",
            "range": "± 695259.428982983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3473461.2165178573,
            "unit": "ns",
            "range": "± 16008.352586688401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061680.3645833333,
            "unit": "ns",
            "range": "± 3931.4080629521436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741313.5602678572,
            "unit": "ns",
            "range": "± 1052.6397157181389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1998862.3958333333,
            "unit": "ns",
            "range": "± 10057.01032143535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639851.0611979166,
            "unit": "ns",
            "range": "± 2112.43995325346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574759.0890066965,
            "unit": "ns",
            "range": "± 3377.304410601699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194573.3333333335,
            "unit": "ns",
            "range": "± 27464.430676439522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258163.1578947366,
            "unit": "ns",
            "range": "± 35458.586337151675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2721166.6666666665,
            "unit": "ns",
            "range": "± 68874.63511568565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2284165.11627907,
            "unit": "ns",
            "range": "± 78386.14395208271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2987806.6666666665,
            "unit": "ns",
            "range": "± 53228.167444726205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90432.39436619719,
            "unit": "ns",
            "range": "± 4386.888733093106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161694.44444444444,
            "unit": "ns",
            "range": "± 6952.330420697815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150007.6923076923,
            "unit": "ns",
            "range": "± 2301.2538388385647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707013.3333333335,
            "unit": "ns",
            "range": "± 39775.60032170956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2609680,
            "unit": "ns",
            "range": "± 47466.562667087775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10604.444444444445,
            "unit": "ns",
            "range": "± 999.6528735843348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51466.19718309859,
            "unit": "ns",
            "range": "± 2446.043082319561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47028.57142857143,
            "unit": "ns",
            "range": "± 800.4119818314445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50404.255319148935,
            "unit": "ns",
            "range": "± 8646.820720893458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2436.842105263158,
            "unit": "ns",
            "range": "± 367.0041542981722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10909.473684210527,
            "unit": "ns",
            "range": "± 1629.062756533843"
          }
        ]
      }
    ]
  }
}