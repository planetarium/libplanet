window.BENCHMARK_DATA = {
  "lastUpdate": 1686019029367,
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
          "id": "0cb03141cf2d12d2260c7391cae7a817474a8c79",
          "message": "Bump vite from 4.1.4 to 4.1.5\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.1.5.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.1.5/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.1.5/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-06T02:18:59Z",
          "tree_id": "33dcf160414df3684fa109e1d4062e00563bed27",
          "url": "https://github.com/planetarium/libplanet/commit/0cb03141cf2d12d2260c7391cae7a817474a8c79"
        },
        "date": 1686019003201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1850237.4375,
            "unit": "ns",
            "range": "± 165957.52552060533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3686398.197674419,
            "unit": "ns",
            "range": "± 199457.7374372131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2863260.3789473684,
            "unit": "ns",
            "range": "± 204620.13508518753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7402188.45,
            "unit": "ns",
            "range": "± 330076.3257422531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4365286.8533333335,
            "unit": "ns",
            "range": "± 218498.69583497816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4705543.441558441,
            "unit": "ns",
            "range": "± 240272.56121256237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5809849.816326531,
            "unit": "ns",
            "range": "± 231818.549735714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5668820.291666667,
            "unit": "ns",
            "range": "± 278489.99873409054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9280222.870967742,
            "unit": "ns",
            "range": "± 276298.43874329585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10878138.114754098,
            "unit": "ns",
            "range": "± 485634.9049456838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27395118,
            "unit": "ns",
            "range": "± 665492.0452401402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70579209.52173913,
            "unit": "ns",
            "range": "± 1717836.9329981625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139976956.13333333,
            "unit": "ns",
            "range": "± 2586450.5609290632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280711436.71428573,
            "unit": "ns",
            "range": "± 2925209.3829107853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7596467.665736607,
            "unit": "ns",
            "range": "± 70422.07722219797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2317660.454947917,
            "unit": "ns",
            "range": "± 38225.043850585425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1711708.7469308036,
            "unit": "ns",
            "range": "± 13380.808426413938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3247579.7338541667,
            "unit": "ns",
            "range": "± 46830.994206681346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1053435.72890625,
            "unit": "ns",
            "range": "± 12775.839832659061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 975350.9416666667,
            "unit": "ns",
            "range": "± 17087.86702425618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81701.10869565218,
            "unit": "ns",
            "range": "± 13122.261805388363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393769.7291666667,
            "unit": "ns",
            "range": "± 34513.70627796538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 394940.1770833333,
            "unit": "ns",
            "range": "± 39776.059645283545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355411.7551020408,
            "unit": "ns",
            "range": "± 38850.677027114725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5680669.361111111,
            "unit": "ns",
            "range": "± 277022.0087865754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5203307.257142857,
            "unit": "ns",
            "range": "± 158893.13633037306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34231.20202020202,
            "unit": "ns",
            "range": "± 9268.677132984301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127542.84782608696,
            "unit": "ns",
            "range": "± 16384.778164963056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 142196.19791666666,
            "unit": "ns",
            "range": "± 22773.233290362146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156340.1326530612,
            "unit": "ns",
            "range": "± 28474.61296955108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14049.97,
            "unit": "ns",
            "range": "± 8748.788258324115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30050.298969072166,
            "unit": "ns",
            "range": "± 8669.213255063563"
          }
        ]
      }
    ]
  }
}