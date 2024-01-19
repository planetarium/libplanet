window.BENCHMARK_DATA = {
  "lastUpdate": 1705705782671,
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
        "date": 1705705730636,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948134.693877551,
            "unit": "ns",
            "range": "± 96104.4836291037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1673742.5925925926,
            "unit": "ns",
            "range": "± 68645.70126807362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610446.875,
            "unit": "ns",
            "range": "± 50119.81762687902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10850395.652173912,
            "unit": "ns",
            "range": "± 928129.5369416524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33985.71428571428,
            "unit": "ns",
            "range": "± 1648.0366636457143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4955486.666666667,
            "unit": "ns",
            "range": "± 12783.40814530788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12850614.285714285,
            "unit": "ns",
            "range": "± 93032.42492761376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32690328.57142857,
            "unit": "ns",
            "range": "± 245210.98742032002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64691171.428571425,
            "unit": "ns",
            "range": "± 493107.3286642753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130539653.33333333,
            "unit": "ns",
            "range": "± 911965.9281438305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3321535.6971153845,
            "unit": "ns",
            "range": "± 4835.602516255068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058983.69140625,
            "unit": "ns",
            "range": "± 1839.27197057159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734370.6473214285,
            "unit": "ns",
            "range": "± 1879.848215416798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922103.0970982143,
            "unit": "ns",
            "range": "± 1916.6022979430659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611853.6458333334,
            "unit": "ns",
            "range": "± 1345.6039154437262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554090.6040736607,
            "unit": "ns",
            "range": "± 2283.852584588298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2090900,
            "unit": "ns",
            "range": "± 35837.13158164308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2247436.8421052634,
            "unit": "ns",
            "range": "± 48339.24343781511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2716542.1052631577,
            "unit": "ns",
            "range": "± 56747.925226776875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2679314.285714286,
            "unit": "ns",
            "range": "± 111063.720241657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12197334.782608695,
            "unit": "ns",
            "range": "± 1395805.1011997042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169269.04761904763,
            "unit": "ns",
            "range": "± 6148.8245196368125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160530.88235294117,
            "unit": "ns",
            "range": "± 7188.989453260237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138748.71794871794,
            "unit": "ns",
            "range": "± 4527.336372402639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752540,
            "unit": "ns",
            "range": "± 30099.947793025443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2380800,
            "unit": "ns",
            "range": "± 30022.0431836855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10037.234042553191,
            "unit": "ns",
            "range": "± 885.7272138323779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51393.68421052631,
            "unit": "ns",
            "range": "± 4853.684946387702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44961.818181818184,
            "unit": "ns",
            "range": "± 1906.4695808289894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49221.739130434784,
            "unit": "ns",
            "range": "± 7271.543604540764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2340,
            "unit": "ns",
            "range": "± 315.0887158823757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9508.988764044943,
            "unit": "ns",
            "range": "± 1230.7278380031692"
          }
        ]
      }
    ]
  }
}