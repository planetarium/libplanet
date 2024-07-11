window.BENCHMARK_DATA = {
  "lastUpdate": 1720673645756,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9068da120aca20e5d3b559519f08bd0034ca8eb2",
          "message": "Bump vite from 4.1.4 to 4.5.3\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.3.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.3/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.3/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:26Z",
          "tree_id": "17f3ae096d1ed211125c1f4b083f9dc8ffd1d478",
          "url": "https://github.com/planetarium/libplanet/commit/9068da120aca20e5d3b559519f08bd0034ca8eb2"
        },
        "date": 1720673589267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10931154.076923076,
            "unit": "ns",
            "range": "± 141230.6481247735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26471943.5,
            "unit": "ns",
            "range": "± 72031.3708804926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67393535.28571428,
            "unit": "ns",
            "range": "± 70852.02680389448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135628911.53333333,
            "unit": "ns",
            "range": "± 210055.76101116807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273777354.5,
            "unit": "ns",
            "range": "± 640758.6235714603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13801.375,
            "unit": "ns",
            "range": "± 254.77673232328993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110074.68333333333,
            "unit": "ns",
            "range": "± 4371.516020987618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105815.92592592593,
            "unit": "ns",
            "range": "± 4307.213181470813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93258.1282051282,
            "unit": "ns",
            "range": "± 3236.591402105545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3100422.9285714286,
            "unit": "ns",
            "range": "± 50168.280094197864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2656116.14,
            "unit": "ns",
            "range": "± 193487.51592208067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4964.2,
            "unit": "ns",
            "range": "± 620.7915425695188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27379.521739130436,
            "unit": "ns",
            "range": "± 2251.0630503531156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21980.63157894737,
            "unit": "ns",
            "range": "± 949.4689235789159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 32222.802083333332,
            "unit": "ns",
            "range": "± 6575.073506284795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1168.1195652173913,
            "unit": "ns",
            "range": "± 226.4338363636458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4601.267441860465,
            "unit": "ns",
            "range": "± 363.73217924953275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690566.8181818182,
            "unit": "ns",
            "range": "± 35071.003959534224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1303272.2105263157,
            "unit": "ns",
            "range": "± 56246.88938120961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1062238.34375,
            "unit": "ns",
            "range": "± 48591.07662616135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9424370.46,
            "unit": "ns",
            "range": "± 1333697.9450694453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170940.6052631577,
            "unit": "ns",
            "range": "± 40607.72404070538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287836.8,
            "unit": "ns",
            "range": "± 80269.04649036136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2599232.5714285714,
            "unit": "ns",
            "range": "± 38129.08798504665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2353684.8095238097,
            "unit": "ns",
            "range": "± 107333.96627512759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3035346.7640449437,
            "unit": "ns",
            "range": "± 166900.30775619962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030431.790457589,
            "unit": "ns",
            "range": "± 29837.286300718297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923797.1358723958,
            "unit": "ns",
            "range": "± 5449.73515161654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 621256.1498697917,
            "unit": "ns",
            "range": "± 10359.672274132277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635433.724609375,
            "unit": "ns",
            "range": "± 8672.007365352787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472542.2144205729,
            "unit": "ns",
            "range": "± 756.9840585622051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427444.96909877233,
            "unit": "ns",
            "range": "± 728.1497160889177"
          }
        ]
      }
    ]
  }
}