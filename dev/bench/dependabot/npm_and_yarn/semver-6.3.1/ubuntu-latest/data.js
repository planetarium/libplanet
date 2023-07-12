window.BENCHMARK_DATA = {
  "lastUpdate": 1689146382920,
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
          "id": "54f3da7499608f66b25a96c4a8104ab40778d80e",
          "message": "build(deps): bump semver from 6.3.0 to 6.3.1\n\nBumps [semver](https://github.com/npm/node-semver) from 6.3.0 to 6.3.1.\n- [Release notes](https://github.com/npm/node-semver/releases)\n- [Changelog](https://github.com/npm/node-semver/blob/v6.3.1/CHANGELOG.md)\n- [Commits](https://github.com/npm/node-semver/compare/v6.3.0...v6.3.1)\n\n---\nupdated-dependencies:\n- dependency-name: semver\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-07-12T07:00:45Z",
          "tree_id": "0aaa3e850e1015375116d3a7947d4a4ade1b201e",
          "url": "https://github.com/planetarium/libplanet/commit/54f3da7499608f66b25a96c4a8104ab40778d80e"
        },
        "date": 1689146354197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384230.52040816325,
            "unit": "ns",
            "range": "± 87687.45384112117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328541.07216494845,
            "unit": "ns",
            "range": "± 47054.34211438573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291912.64210526313,
            "unit": "ns",
            "range": "± 50005.67852944001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5010571.119565218,
            "unit": "ns",
            "range": "± 393119.05525581853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5056014.816326531,
            "unit": "ns",
            "range": "± 644910.1841543734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21897.957446808512,
            "unit": "ns",
            "range": "± 7981.524779427887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101782.22727272728,
            "unit": "ns",
            "range": "± 19373.596224846475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98150.9574468085,
            "unit": "ns",
            "range": "± 23646.004874276307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110777,
            "unit": "ns",
            "range": "± 22835.146676131295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5072.186046511628,
            "unit": "ns",
            "range": "± 960.2516644594413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18181.305882352943,
            "unit": "ns",
            "range": "± 4949.37382528992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692579.8659793814,
            "unit": "ns",
            "range": "± 228052.61407990864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3250664.967391304,
            "unit": "ns",
            "range": "± 331609.15155661467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2230304.102040816,
            "unit": "ns",
            "range": "± 350276.7035606997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6249194.051020408,
            "unit": "ns",
            "range": "± 754716.7782663299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7400873.081088362,
            "unit": "ns",
            "range": "± 210467.80968584883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2404275.6572265625,
            "unit": "ns",
            "range": "± 61288.95045483181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1666314.2720052083,
            "unit": "ns",
            "range": "± 18964.27819375378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3267987.8119140626,
            "unit": "ns",
            "range": "± 72603.31064729101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023958.4331752232,
            "unit": "ns",
            "range": "± 11664.716503527494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 977809.8569335938,
            "unit": "ns",
            "range": "± 19205.09099285599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3862914.785714286,
            "unit": "ns",
            "range": "± 469067.77310230944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4255752.947916667,
            "unit": "ns",
            "range": "± 514693.3440339499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5199033.989795919,
            "unit": "ns",
            "range": "± 556308.3201865801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4732697.865979382,
            "unit": "ns",
            "range": "± 486391.06647392083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8620591.18556701,
            "unit": "ns",
            "range": "± 918635.6504633689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9152023.091836736,
            "unit": "ns",
            "range": "± 670226.033194912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23398815.94897959,
            "unit": "ns",
            "range": "± 1729553.5726470076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63641885.94623656,
            "unit": "ns",
            "range": "± 3579870.8306336715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131264685.6226415,
            "unit": "ns",
            "range": "± 5343907.6717631435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258550333.36363637,
            "unit": "ns",
            "range": "± 9684459.746507235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63846.926315789475,
            "unit": "ns",
            "range": "± 19503.44418969302"
          }
        ]
      }
    ]
  }
}