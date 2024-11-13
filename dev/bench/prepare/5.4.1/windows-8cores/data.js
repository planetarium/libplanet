window.BENCHMARK_DATA = {
  "lastUpdate": 1731485679621,
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
          "id": "d257534143323bead2c439d84f8e44859b76b7e7",
          "message": "Prepare 5.4.1",
          "timestamp": "2024-11-13T16:19:14+09:00",
          "tree_id": "fab508f993e275a5d9142bada18e2d94b1a43499",
          "url": "https://github.com/planetarium/libplanet/commit/d257534143323bead2c439d84f8e44859b76b7e7"
        },
        "date": 1731485611789,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 957888.5416666666,
            "unit": "ns",
            "range": "± 76539.59122715054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1813750,
            "unit": "ns",
            "range": "± 49594.03862024817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1521520.652173913,
            "unit": "ns",
            "range": "± 124372.17060720625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6611577.419354838,
            "unit": "ns",
            "range": "± 201917.56851031628"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28714.285714285714,
            "unit": "ns",
            "range": "± 937.5007002798504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9958261.538461538,
            "unit": "ns",
            "range": "± 83602.45748442983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23655371.42857143,
            "unit": "ns",
            "range": "± 218835.42966056772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58706330.76923077,
            "unit": "ns",
            "range": "± 162322.9414090698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119003413.33333333,
            "unit": "ns",
            "range": "± 577685.3430058699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238528521.42857143,
            "unit": "ns",
            "range": "± 887940.652190892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3272857.902644231,
            "unit": "ns",
            "range": "± 3341.927058552782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049774.8307291667,
            "unit": "ns",
            "range": "± 2151.114774717999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733686.30859375,
            "unit": "ns",
            "range": "± 3453.65531122964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922834.4308035714,
            "unit": "ns",
            "range": "± 1581.2160868566862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618563.203125,
            "unit": "ns",
            "range": "± 1812.2199683884323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561080.8663504465,
            "unit": "ns",
            "range": "± 2484.0375024065065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2223653.3333333335,
            "unit": "ns",
            "range": "± 40025.88210265001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283853.3333333335,
            "unit": "ns",
            "range": "± 37306.81413565598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2726261.111111111,
            "unit": "ns",
            "range": "± 57156.02113193313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2341293.75,
            "unit": "ns",
            "range": "± 43113.021524824726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2956793.3333333335,
            "unit": "ns",
            "range": "± 42726.59704725027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92723.40425531915,
            "unit": "ns",
            "range": "± 9122.952567850527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168023.07692307694,
            "unit": "ns",
            "range": "± 7774.030671705341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150349.0909090909,
            "unit": "ns",
            "range": "± 6400.546062562936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2638992.8571428573,
            "unit": "ns",
            "range": "± 17598.053401341967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2491143.4782608696,
            "unit": "ns",
            "range": "± 61014.728669596705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9886.315789473685,
            "unit": "ns",
            "range": "± 1325.3350059285124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51278.260869565216,
            "unit": "ns",
            "range": "± 3028.285195932268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44395.94594594595,
            "unit": "ns",
            "range": "± 2199.4046011995747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48161.05263157895,
            "unit": "ns",
            "range": "± 8617.995703410912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2415.7894736842104,
            "unit": "ns",
            "range": "± 329.511498354143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9476.923076923076,
            "unit": "ns",
            "range": "± 762.7547913942409"
          }
        ]
      }
    ]
  }
}