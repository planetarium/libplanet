window.BENCHMARK_DATA = {
  "lastUpdate": 1720673347700,
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
          "id": "7f587277e33b1b4b848999929378dca07a5670fc",
          "message": "Bump tar from 6.1.13 to 6.2.1\n\nBumps [tar](https://github.com/isaacs/node-tar) from 6.1.13 to 6.2.1.\n- [Release notes](https://github.com/isaacs/node-tar/releases)\n- [Changelog](https://github.com/isaacs/node-tar/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/isaacs/node-tar/compare/v6.1.13...v6.2.1)\n\n---\nupdated-dependencies:\n- dependency-name: tar\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:26Z",
          "tree_id": "fc5c9cddcc331385dcc8f851b22e5f7d8ffc9227",
          "url": "https://github.com/planetarium/libplanet/commit/7f587277e33b1b4b848999929378dca07a5670fc"
        },
        "date": 1720673321821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760586.208233173,
            "unit": "ns",
            "range": "± 4589.7402674815985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1239562.779017857,
            "unit": "ns",
            "range": "± 2430.7854780237244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762143.7676432292,
            "unit": "ns",
            "range": "± 1527.896551989679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921402.9615885417,
            "unit": "ns",
            "range": "± 2667.5227961543496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623371.5858723958,
            "unit": "ns",
            "range": "± 610.6610144716702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587981.8167317709,
            "unit": "ns",
            "range": "± 608.7460591807944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2493372.470588235,
            "unit": "ns",
            "range": "± 80445.83390779363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2591708.9318181816,
            "unit": "ns",
            "range": "± 96707.62393105621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2992249.6923076925,
            "unit": "ns",
            "range": "± 30655.135410956882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2682178.6,
            "unit": "ns",
            "range": "± 46962.49422647214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3306845.5,
            "unit": "ns",
            "range": "± 39859.108048582464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018550.5512820513,
            "unit": "ns",
            "range": "± 52343.00772902444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054015.608695652,
            "unit": "ns",
            "range": "± 50634.76091556358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1751675.4315789475,
            "unit": "ns",
            "range": "± 125311.68530225138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8406132.625,
            "unit": "ns",
            "range": "± 214819.11502477422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210742.74489795917,
            "unit": "ns",
            "range": "± 17803.70537192566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191649,
            "unit": "ns",
            "range": "± 7233.922832807964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170971.5,
            "unit": "ns",
            "range": "± 7238.136063833798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3062940.466666667,
            "unit": "ns",
            "range": "± 26678.185338979718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3027014.5,
            "unit": "ns",
            "range": "± 53269.82341814172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14109.733333333334,
            "unit": "ns",
            "range": "± 1945.35894870994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81674.9,
            "unit": "ns",
            "range": "± 12997.931943120022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51964.1282051282,
            "unit": "ns",
            "range": "± 2558.001747046987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64240.244897959186,
            "unit": "ns",
            "range": "± 7371.912841977715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3025.6195652173915,
            "unit": "ns",
            "range": "± 514.7529406838449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14057.215789473685,
            "unit": "ns",
            "range": "± 1984.5190888751217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10646504.866666667,
            "unit": "ns",
            "range": "± 103310.27237948707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28277333.133333333,
            "unit": "ns",
            "range": "± 173510.29851027232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69191291.03333333,
            "unit": "ns",
            "range": "± 529763.3709242089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147176711.2142857,
            "unit": "ns",
            "range": "± 741082.1158381198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289302942,
            "unit": "ns",
            "range": "± 1984782.2003567906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41970.92857142857,
            "unit": "ns",
            "range": "± 8303.30258974748"
          }
        ]
      }
    ]
  }
}