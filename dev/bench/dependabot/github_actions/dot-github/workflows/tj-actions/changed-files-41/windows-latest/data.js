window.BENCHMARK_DATA = {
  "lastUpdate": 1704214992946,
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
          "id": "ad1adcfa5e73650cc1450919baf5390f1434ea58",
          "message": "chore(deps): bump tj-actions/changed-files in /.github/workflows\n\nBumps [tj-actions/changed-files](https://github.com/tj-actions/changed-files) from 35 to 41.\n- [Release notes](https://github.com/tj-actions/changed-files/releases)\n- [Changelog](https://github.com/tj-actions/changed-files/blob/main/HISTORY.md)\n- [Commits](https://github.com/tj-actions/changed-files/compare/v35...v41)\n\n---\nupdated-dependencies:\n- dependency-name: tj-actions/changed-files\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-01-02T16:49:39Z",
          "tree_id": "d9a90a0fa421cca9442baba4591fba8de5eabfcd",
          "url": "https://github.com/planetarium/libplanet/commit/ad1adcfa5e73650cc1450919baf5390f1434ea58"
        },
        "date": 1704214923503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991770.2127659575,
            "unit": "ns",
            "range": "± 103537.99451158558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1745037.5,
            "unit": "ns",
            "range": "± 58961.38817441925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1572753,
            "unit": "ns",
            "range": "± 167150.99352792892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10862029.67032967,
            "unit": "ns",
            "range": "± 890335.042740716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33613.58024691358,
            "unit": "ns",
            "range": "± 1782.046091324503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4927766.666666667,
            "unit": "ns",
            "range": "± 32345.029794095914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13319857.142857144,
            "unit": "ns",
            "range": "± 185819.42729553216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33008950,
            "unit": "ns",
            "range": "± 405090.1039370035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65294942.85714286,
            "unit": "ns",
            "range": "± 654877.3974678663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131905664.70588236,
            "unit": "ns",
            "range": "± 2676843.076727971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3291328.0208333335,
            "unit": "ns",
            "range": "± 14351.506561493832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038093.02734375,
            "unit": "ns",
            "range": "± 5291.9646698522365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745668.57421875,
            "unit": "ns",
            "range": "± 1502.3327305316445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950166.826923077,
            "unit": "ns",
            "range": "± 3081.9396601615367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620030.9151785715,
            "unit": "ns",
            "range": "± 1248.2827493436275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580381.1941964285,
            "unit": "ns",
            "range": "± 1261.5032725358367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202686.7924528304,
            "unit": "ns",
            "range": "± 91272.62635755638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311590.909090909,
            "unit": "ns",
            "range": "± 69511.68680353489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817162.5,
            "unit": "ns",
            "range": "± 81983.60083853119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2844404,
            "unit": "ns",
            "range": "± 169173.3137490913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12634329.67032967,
            "unit": "ns",
            "range": "± 1570244.6783503739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177698.9247311828,
            "unit": "ns",
            "range": "± 11052.065463303345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166802.5641025641,
            "unit": "ns",
            "range": "± 8173.587083253337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148279.16666666666,
            "unit": "ns",
            "range": "± 5855.528696202995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2887853.846153846,
            "unit": "ns",
            "range": "± 39340.93744402081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2592940,
            "unit": "ns",
            "range": "± 38903.13612036953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11881.720430107527,
            "unit": "ns",
            "range": "± 1672.0168917234384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55618.604651162794,
            "unit": "ns",
            "range": "± 3087.565636469535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47885.86956521739,
            "unit": "ns",
            "range": "± 3698.725100276471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63224.17582417582,
            "unit": "ns",
            "range": "± 11099.542940132873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2618.3673469387754,
            "unit": "ns",
            "range": "± 622.6559240443535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11687.878787878788,
            "unit": "ns",
            "range": "± 2143.393872175655"
          }
        ]
      }
    ]
  }
}