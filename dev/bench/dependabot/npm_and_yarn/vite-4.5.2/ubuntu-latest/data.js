window.BENCHMARK_DATA = {
  "lastUpdate": 1705705661627,
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
          "id": "5d0510f102af048b9756cde98c5824afb734fbeb",
          "message": "Bump vite from 4.1.4 to 4.5.2\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.2.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.2/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.2/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-01-19T22:56:24Z",
          "tree_id": "812bb093a755767b10a763f8b7c0eec6c7cfc204",
          "url": "https://github.com/planetarium/libplanet/commit/5d0510f102af048b9756cde98c5824afb734fbeb"
        },
        "date": 1705705634594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3670493.923076923,
            "unit": "ns",
            "range": "± 9136.646559105779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203254.5139322917,
            "unit": "ns",
            "range": "± 21049.155027583198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768013.1819411058,
            "unit": "ns",
            "range": "± 2747.0287511206297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962611.9930245536,
            "unit": "ns",
            "range": "± 9349.682404022198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619587.7016225961,
            "unit": "ns",
            "range": "± 1035.4774155895834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569111.8636300223,
            "unit": "ns",
            "range": "± 2109.541749783838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2425018.65625,
            "unit": "ns",
            "range": "± 46091.25432934341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2558123.1666666665,
            "unit": "ns",
            "range": "± 71191.74557651168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3124949,
            "unit": "ns",
            "range": "± 72896.9701895409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3173689.619047619,
            "unit": "ns",
            "range": "± 114683.16786694409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13967691.924731182,
            "unit": "ns",
            "range": "± 1086916.394449846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41408.448979591834,
            "unit": "ns",
            "range": "± 6670.858956999033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205955.0285714286,
            "unit": "ns",
            "range": "± 6760.716871516416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197146.44827586206,
            "unit": "ns",
            "range": "± 5156.927813189103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172663.1739130435,
            "unit": "ns",
            "range": "± 4293.081248327719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3248012.7333333334,
            "unit": "ns",
            "range": "± 42872.74948107092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2880386.466666667,
            "unit": "ns",
            "range": "± 43259.92807085141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17185.453608247422,
            "unit": "ns",
            "range": "± 2004.3543589552442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60249,
            "unit": "ns",
            "range": "± 4047.56426830064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68028.41,
            "unit": "ns",
            "range": "± 15673.760707277299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63696.7311827957,
            "unit": "ns",
            "range": "± 12162.402303231362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4295.085858585859,
            "unit": "ns",
            "range": "± 1826.5201385510848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14629.848484848484,
            "unit": "ns",
            "range": "± 2720.0610976167586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5654969,
            "unit": "ns",
            "range": "± 57586.38274552662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14902994.133333333,
            "unit": "ns",
            "range": "± 183167.89567063743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36938050.64285714,
            "unit": "ns",
            "range": "± 230455.58726761787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75558423.9,
            "unit": "ns",
            "range": "± 807667.3906608905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149882731.3846154,
            "unit": "ns",
            "range": "± 719389.6775644313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990558,
            "unit": "ns",
            "range": "± 90622.39572897846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1901703,
            "unit": "ns",
            "range": "± 78512.59532892171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575466.6631578947,
            "unit": "ns",
            "range": "± 92303.33140510734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12763850.709677419,
            "unit": "ns",
            "range": "± 960483.5763651261"
          }
        ]
      }
    ]
  }
}