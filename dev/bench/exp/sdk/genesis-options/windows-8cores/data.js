window.BENCHMARK_DATA = {
  "lastUpdate": 1724399251927,
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
          "id": "9a191d98d1204fbe17ea76b1643b27cf85284e45",
          "message": "WIP",
          "timestamp": "2024-08-23T16:31:09+09:00",
          "tree_id": "bc8bd2b650e5169879959ffcbb5844cd85b8479f",
          "url": "https://github.com/planetarium/libplanet/commit/9a191d98d1204fbe17ea76b1643b27cf85284e45"
        },
        "date": 1724398980566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039706.3829787234,
            "unit": "ns",
            "range": "± 101204.4078245635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870623.6363636365,
            "unit": "ns",
            "range": "± 78440.86228121714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1655031.9587628867,
            "unit": "ns",
            "range": "± 137287.4414218757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7043307.317073171,
            "unit": "ns",
            "range": "± 253123.3951951537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32372.727272727272,
            "unit": "ns",
            "range": "± 2410.0711713975734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10303500,
            "unit": "ns",
            "range": "± 85829.32399327666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25026666.666666668,
            "unit": "ns",
            "range": "± 366156.50570031756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61735893.333333336,
            "unit": "ns",
            "range": "± 720501.7085998049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119452433.33333333,
            "unit": "ns",
            "range": "± 1431907.5991072024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241603327.7777778,
            "unit": "ns",
            "range": "± 5114716.908134748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3344415.1041666665,
            "unit": "ns",
            "range": "± 14231.960867136262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1092783.1510416667,
            "unit": "ns",
            "range": "± 5642.567442568934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750506.3541666666,
            "unit": "ns",
            "range": "± 1735.1656981028766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931915.0130208333,
            "unit": "ns",
            "range": "± 4310.73803457216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622268.3035714285,
            "unit": "ns",
            "range": "± 1128.8534987409387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564631.1453683035,
            "unit": "ns",
            "range": "± 1072.6231029521289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145603.5714285714,
            "unit": "ns",
            "range": "± 59923.114208142724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273197.8260869565,
            "unit": "ns",
            "range": "± 82109.86539490295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2730242.8571428573,
            "unit": "ns",
            "range": "± 89555.49474295512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2334687.5,
            "unit": "ns",
            "range": "± 66411.817593927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3098626.6666666665,
            "unit": "ns",
            "range": "± 54978.13158321181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190631.25,
            "unit": "ns",
            "range": "± 7380.773074022312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175134.78260869565,
            "unit": "ns",
            "range": "± 7970.180197367975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149919.29824561405,
            "unit": "ns",
            "range": "± 6501.4129946741805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2769573.3333333335,
            "unit": "ns",
            "range": "± 47295.808734067796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2566107.1428571427,
            "unit": "ns",
            "range": "± 24048.93934285842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12559.782608695652,
            "unit": "ns",
            "range": "± 1477.6771036161326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59541.666666666664,
            "unit": "ns",
            "range": "± 6157.813464750833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46847.4358974359,
            "unit": "ns",
            "range": "± 1634.2529565663583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61472.72727272727,
            "unit": "ns",
            "range": "± 8734.022881517993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2528.723404255319,
            "unit": "ns",
            "range": "± 566.3735498246493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11270.526315789473,
            "unit": "ns",
            "range": "± 1421.6317927252985"
          }
        ]
      }
    ]
  }
}