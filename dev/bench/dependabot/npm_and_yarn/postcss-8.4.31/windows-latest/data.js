window.BENCHMARK_DATA = {
  "lastUpdate": 1696422225742,
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
          "id": "ab2a1328b2854206290ba75aefd906faa95dcc9e",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-04T12:00:35Z",
          "tree_id": "1bed0488e4e5e26951a5fed09d30df78dabb68c4",
          "url": "https://github.com/planetarium/libplanet/commit/ab2a1328b2854206290ba75aefd906faa95dcc9e"
        },
        "date": 1696422146020,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551495,
            "unit": "ns",
            "range": "± 180439.81193828382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2883556.1224489794,
            "unit": "ns",
            "range": "± 253024.94806554646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187920.4081632653,
            "unit": "ns",
            "range": "± 245082.66771071925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9909291.304347826,
            "unit": "ns",
            "range": "± 868337.0893856116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61532.25806451613,
            "unit": "ns",
            "range": "± 9554.900419137572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8245624.561403509,
            "unit": "ns",
            "range": "± 352093.4602390504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22038810.101010103,
            "unit": "ns",
            "range": "± 1981834.1570937408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55887074,
            "unit": "ns",
            "range": "± 4064777.000719695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110822871.42857143,
            "unit": "ns",
            "range": "± 7802281.871363415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210743504,
            "unit": "ns",
            "range": "± 20105782.500764914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5115525.792910447,
            "unit": "ns",
            "range": "± 240099.3318938779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1739506.0026041667,
            "unit": "ns",
            "range": "± 30468.779377388495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323519.8874080882,
            "unit": "ns",
            "range": "± 26674.39740627718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3287077.734375,
            "unit": "ns",
            "range": "± 44763.67677559342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1127828.0294215425,
            "unit": "ns",
            "range": "± 101884.93671626947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935517.6039751838,
            "unit": "ns",
            "range": "± 18509.494311583334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3410877.0833333335,
            "unit": "ns",
            "range": "± 239445.41119633606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623363.5416666665,
            "unit": "ns",
            "range": "± 286147.785931746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4882359.793814433,
            "unit": "ns",
            "range": "± 344995.9186533329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486471.134020618,
            "unit": "ns",
            "range": "± 414715.3391079343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12169733.333333334,
            "unit": "ns",
            "range": "± 581888.4784669215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301510.20408163266,
            "unit": "ns",
            "range": "± 44294.69608191085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300786.4583333333,
            "unit": "ns",
            "range": "± 37094.24588599797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255061.8556701031,
            "unit": "ns",
            "range": "± 30488.493195859188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4378539.759036144,
            "unit": "ns",
            "range": "± 232025.57730106488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4064217.3469387754,
            "unit": "ns",
            "range": "± 304706.18297534453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29621.21212121212,
            "unit": "ns",
            "range": "± 10086.900706495962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99748.91304347826,
            "unit": "ns",
            "range": "± 11800.39573340161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94605.20833333333,
            "unit": "ns",
            "range": "± 14634.245128548866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110146.31578947368,
            "unit": "ns",
            "range": "± 23261.784067098604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5641.935483870968,
            "unit": "ns",
            "range": "± 1002.9654487790694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26904.040404040403,
            "unit": "ns",
            "range": "± 9213.05550139693"
          }
        ]
      }
    ]
  }
}