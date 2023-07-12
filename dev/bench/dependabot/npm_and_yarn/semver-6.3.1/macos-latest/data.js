window.BENCHMARK_DATA = {
  "lastUpdate": 1689146268375,
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
        "date": 1689146186731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8165646.6,
            "unit": "ns",
            "range": "± 184742.10953491498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20399830.5,
            "unit": "ns",
            "range": "± 337146.8828142782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56746668.461538464,
            "unit": "ns",
            "range": "± 703907.0735349962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105372837.9375,
            "unit": "ns",
            "range": "± 1941109.1000633966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216924999.16666666,
            "unit": "ns",
            "range": "± 5973717.263007541"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70298.28021978022,
            "unit": "ns",
            "range": "± 9624.405640294764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328267.3791208791,
            "unit": "ns",
            "range": "± 20988.479068201606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310768.9,
            "unit": "ns",
            "range": "± 27808.574539580495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317702.54210526316,
            "unit": "ns",
            "range": "± 23349.45293537275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4277874.84,
            "unit": "ns",
            "range": "± 113800.95211841009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3872225.2083333335,
            "unit": "ns",
            "range": "± 99820.96032178517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17617.763157894737,
            "unit": "ns",
            "range": "± 2007.562601819421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98766.12631578947,
            "unit": "ns",
            "range": "± 10983.976229656628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106762.76288659793,
            "unit": "ns",
            "range": "± 13889.717011586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109674.58421052631,
            "unit": "ns",
            "range": "± 14912.035491624589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5956.331578947368,
            "unit": "ns",
            "range": "± 1222.397980363358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16885.130434782608,
            "unit": "ns",
            "range": "± 1953.5280663140552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1655174.6368421053,
            "unit": "ns",
            "range": "± 200116.13432766244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2918965.6440677964,
            "unit": "ns",
            "range": "± 128946.92487378523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2118051.033333333,
            "unit": "ns",
            "range": "± 149610.72781335423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6074035.346938776,
            "unit": "ns",
            "range": "± 239600.38529563058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3408355.769230769,
            "unit": "ns",
            "range": "± 73597.45215402919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3373294.795180723,
            "unit": "ns",
            "range": "± 173728.66024797145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4350850.9433962265,
            "unit": "ns",
            "range": "± 170175.97857279467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4094851.7157894736,
            "unit": "ns",
            "range": "± 250011.1815536335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7492945.362068965,
            "unit": "ns",
            "range": "± 325712.28825305623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6475506.006138393,
            "unit": "ns",
            "range": "± 91027.9912253928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2011069.4807291667,
            "unit": "ns",
            "range": "± 20073.733232608873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1257081.004185268,
            "unit": "ns",
            "range": "± 9553.82925838714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2496410.2115885415,
            "unit": "ns",
            "range": "± 43687.68419684106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818716.480329241,
            "unit": "ns",
            "range": "± 12170.400168064234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743031.7588541667,
            "unit": "ns",
            "range": "± 10003.414251398945"
          }
        ]
      }
    ]
  }
}