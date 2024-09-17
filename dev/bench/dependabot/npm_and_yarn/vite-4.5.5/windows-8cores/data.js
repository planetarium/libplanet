window.BENCHMARK_DATA = {
  "lastUpdate": 1726602411792,
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
          "id": "b617c68eb33f9e6c475466f50ec836f6635f4430",
          "message": "Bump vite from 4.1.4 to 4.5.5\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.5.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.5/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.5/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-09-17T19:30:12Z",
          "tree_id": "2770aa9dcd31dde1e12bf4deddcbf80c6883869b",
          "url": "https://github.com/planetarium/libplanet/commit/b617c68eb33f9e6c475466f50ec836f6635f4430"
        },
        "date": 1726602154751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983989.898989899,
            "unit": "ns",
            "range": "± 79358.78678373058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732684.7457627119,
            "unit": "ns",
            "range": "± 70209.20170943142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1497794.680851064,
            "unit": "ns",
            "range": "± 91100.36810121361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6902782.8125,
            "unit": "ns",
            "range": "± 317176.42607144744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29987.5,
            "unit": "ns",
            "range": "± 650.5175454383048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9680453.333333334,
            "unit": "ns",
            "range": "± 89298.31118757164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23301653.333333332,
            "unit": "ns",
            "range": "± 293921.6850665853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59072073.333333336,
            "unit": "ns",
            "range": "± 332923.16030379536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116052340,
            "unit": "ns",
            "range": "± 814210.7236897759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235631903.33333334,
            "unit": "ns",
            "range": "± 1328759.2493249732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3340093.359375,
            "unit": "ns",
            "range": "± 15527.764630274074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042809.8046875,
            "unit": "ns",
            "range": "± 1821.4874508955256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730557.4776785715,
            "unit": "ns",
            "range": "± 1044.0883934601616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946002.0182291667,
            "unit": "ns",
            "range": "± 9250.496125534139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610426.26953125,
            "unit": "ns",
            "range": "± 1794.0315291484526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553702.4934895834,
            "unit": "ns",
            "range": "± 994.2265733568211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2074136,
            "unit": "ns",
            "range": "± 83612.555838687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2208596.4285714286,
            "unit": "ns",
            "range": "± 94882.25806811248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2684047.0588235296,
            "unit": "ns",
            "range": "± 47620.834695108235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2256466.6666666665,
            "unit": "ns",
            "range": "± 32941.26085423365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2866180,
            "unit": "ns",
            "range": "± 29764.89303093255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172170.9090909091,
            "unit": "ns",
            "range": "± 7321.775556953198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163274.54545454544,
            "unit": "ns",
            "range": "± 6108.53131956896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145820,
            "unit": "ns",
            "range": "± 3221.572025547384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2794278.5714285714,
            "unit": "ns",
            "range": "± 31305.005217190934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2536359.090909091,
            "unit": "ns",
            "range": "± 59639.501603510675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11555.78947368421,
            "unit": "ns",
            "range": "± 1589.4409420921102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53992.78350515464,
            "unit": "ns",
            "range": "± 6725.76277307824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43672.72727272727,
            "unit": "ns",
            "range": "± 1376.8788815816206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47475.2808988764,
            "unit": "ns",
            "range": "± 7214.557267630943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2536.734693877551,
            "unit": "ns",
            "range": "± 403.9464481967011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9442.045454545454,
            "unit": "ns",
            "range": "± 959.9714544258253"
          }
        ]
      }
    ]
  }
}