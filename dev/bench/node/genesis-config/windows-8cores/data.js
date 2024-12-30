window.BENCHMARK_DATA = {
  "lastUpdate": 1735559941636,
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
          "id": "439d3da8dea7c8e5aad988c422f93311b3673540",
          "message": "test: add unit test for newly added feature",
          "timestamp": "2024-12-30T20:38:47+09:00",
          "tree_id": "d52a60d4d69dbf788cec93bacb199868f821ed8a",
          "url": "https://github.com/planetarium/libplanet/commit/439d3da8dea7c8e5aad988c422f93311b3673540"
        },
        "date": 1735559569260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020833.3333333334,
            "unit": "ns",
            "range": "± 89941.15386974024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826639.1304347827,
            "unit": "ns",
            "range": "± 68781.19083412547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610706.3829787234,
            "unit": "ns",
            "range": "± 114999.01524450802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6789576.19047619,
            "unit": "ns",
            "range": "± 159134.87017232238"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31202.272727272728,
            "unit": "ns",
            "range": "± 1178.3884613108398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10056526.666666666,
            "unit": "ns",
            "range": "± 107829.58424335707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25510576.666666668,
            "unit": "ns",
            "range": "± 435399.30682185566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61168100,
            "unit": "ns",
            "range": "± 774538.0383539228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126683093.33333333,
            "unit": "ns",
            "range": "± 1637595.4364628063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256602723.33333334,
            "unit": "ns",
            "range": "± 1853001.2063316815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3381172.2395833335,
            "unit": "ns",
            "range": "± 7842.087076647832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061192.8385416667,
            "unit": "ns",
            "range": "± 1971.8389197904755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753679.7395833334,
            "unit": "ns",
            "range": "± 1446.3602045891053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931292.4348958333,
            "unit": "ns",
            "range": "± 4988.245129110352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621859.5284598215,
            "unit": "ns",
            "range": "± 726.3772502984503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562102.6041666666,
            "unit": "ns",
            "range": "± 1895.493489481302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188364.285714286,
            "unit": "ns",
            "range": "± 38268.67783575365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302403.125,
            "unit": "ns",
            "range": "± 69809.91465019666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746324,
            "unit": "ns",
            "range": "± 70861.59208861549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2277295.238095238,
            "unit": "ns",
            "range": "± 52762.813383958935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2904978.5714285714,
            "unit": "ns",
            "range": "± 39975.7845657637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182263.33333333334,
            "unit": "ns",
            "range": "± 8070.493792606322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176600,
            "unit": "ns",
            "range": "± 7640.470254787052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144795.83333333334,
            "unit": "ns",
            "range": "± 3318.7843723485457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2771183.3333333335,
            "unit": "ns",
            "range": "± 56680.15785191187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532913.3333333335,
            "unit": "ns",
            "range": "± 30435.52592112116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11383.720930232557,
            "unit": "ns",
            "range": "± 1137.8628538382852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56440.625,
            "unit": "ns",
            "range": "± 5699.336584199954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46234.09090909091,
            "unit": "ns",
            "range": "± 1732.3116940945786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57874.117647058825,
            "unit": "ns",
            "range": "± 8146.736900676953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2928.125,
            "unit": "ns",
            "range": "± 672.888999213955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10962.921348314607,
            "unit": "ns",
            "range": "± 1126.5778856253035"
          }
        ]
      }
    ]
  }
}