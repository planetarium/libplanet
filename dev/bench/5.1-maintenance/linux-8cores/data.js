window.BENCHMARK_DATA = {
  "lastUpdate": 1720673451403,
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
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720673425877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3831597.9709821427,
            "unit": "ns",
            "range": "± 7168.949593744745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1240126.2532552083,
            "unit": "ns",
            "range": "± 1500.8295033667437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776215.1680989583,
            "unit": "ns",
            "range": "± 987.484717812125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975411.5955729166,
            "unit": "ns",
            "range": "± 1607.6823783746818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625337.603515625,
            "unit": "ns",
            "range": "± 596.6441390621069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573107.6499399039,
            "unit": "ns",
            "range": "± 734.8938655573639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544291.4285714286,
            "unit": "ns",
            "range": "± 44555.588793385665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2573563.5714285714,
            "unit": "ns",
            "range": "± 33941.51696830727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3037459.346153846,
            "unit": "ns",
            "range": "± 25833.77098826958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572985.888888889,
            "unit": "ns",
            "range": "± 71232.83595797568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3313490.8695652173,
            "unit": "ns",
            "range": "± 82753.20078198808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014587.8181818182,
            "unit": "ns",
            "range": "± 49057.8200278769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929781.054054054,
            "unit": "ns",
            "range": "± 59452.29310919337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699270.9264705882,
            "unit": "ns",
            "range": "± 72113.17275246838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8285650.708333333,
            "unit": "ns",
            "range": "± 206840.92635151948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199467.82,
            "unit": "ns",
            "range": "± 7968.2880563249855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197575.20238095237,
            "unit": "ns",
            "range": "± 10554.921753552164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168072.48,
            "unit": "ns",
            "range": "± 4433.833942161869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3142013.566666667,
            "unit": "ns",
            "range": "± 39464.573182732354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2743050.6153846155,
            "unit": "ns",
            "range": "± 36984.327526531335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16058.054347826086,
            "unit": "ns",
            "range": "± 3361.1142558636566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61701.85106382979,
            "unit": "ns",
            "range": "± 5625.766643015468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51779.583333333336,
            "unit": "ns",
            "range": "± 502.2598853424813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58833.244897959186,
            "unit": "ns",
            "range": "± 10463.846118368296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2861.2448979591836,
            "unit": "ns",
            "range": "± 358.87648454484696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13844.808510638299,
            "unit": "ns",
            "range": "± 1328.913923332025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10475589.807692308,
            "unit": "ns",
            "range": "± 53460.87568709261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27193090.6,
            "unit": "ns",
            "range": "± 192872.00991027334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69129411.92857143,
            "unit": "ns",
            "range": "± 630582.7646680629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140652318.63333333,
            "unit": "ns",
            "range": "± 776102.4346508526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288668121,
            "unit": "ns",
            "range": "± 1086005.9721802375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32536,
            "unit": "ns",
            "range": "± 439.64596146055"
          }
        ]
      }
    ]
  }
}