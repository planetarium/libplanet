window.BENCHMARK_DATA = {
  "lastUpdate": 1720673238329,
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
          "id": "28c6a36fec15c3efd6012fbe7f72031cb5cd3f49",
          "message": "Bump braces from 3.0.2 to 3.0.3\n\nBumps [braces](https://github.com/micromatch/braces) from 3.0.2 to 3.0.3.\n- [Changelog](https://github.com/micromatch/braces/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/micromatch/braces/compare/3.0.2...3.0.3)\n\n---\nupdated-dependencies:\n- dependency-name: braces\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:29Z",
          "tree_id": "7783b70b3b207686b30737915f07b61494f0e89b",
          "url": "https://github.com/planetarium/libplanet/commit/28c6a36fec15c3efd6012fbe7f72031cb5cd3f49"
        },
        "date": 1720673212699,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714994.542410714,
            "unit": "ns",
            "range": "± 5416.752788416663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1178198.4509114583,
            "unit": "ns",
            "range": "± 1346.596278472689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766466.6179547991,
            "unit": "ns",
            "range": "± 625.9935267421681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946457.3080357143,
            "unit": "ns",
            "range": "± 1277.9766677499215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608714.9052083333,
            "unit": "ns",
            "range": "± 295.75291076954915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569187.5525251116,
            "unit": "ns",
            "range": "± 359.06247379929414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400228.888888889,
            "unit": "ns",
            "range": "± 65826.7298515483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2599254.6,
            "unit": "ns",
            "range": "± 47305.549261914595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3082101.4838709678,
            "unit": "ns",
            "range": "± 87611.89119591432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2578624.7666666666,
            "unit": "ns",
            "range": "± 34746.966879893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3281437.8666666667,
            "unit": "ns",
            "range": "± 47263.70297727221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013396.7083333334,
            "unit": "ns",
            "range": "± 48397.108849290475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1903391.4,
            "unit": "ns",
            "range": "± 56396.575611742905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684672.455882353,
            "unit": "ns",
            "range": "± 80319.6811412982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8293518.185185186,
            "unit": "ns",
            "range": "± 210627.1779159779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202806.42647058822,
            "unit": "ns",
            "range": "± 9201.118024727239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192639.11363636365,
            "unit": "ns",
            "range": "± 6667.4549630620595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170202.29411764705,
            "unit": "ns",
            "range": "± 3261.560147473634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070345.533333333,
            "unit": "ns",
            "range": "± 54422.93808794054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805146.5,
            "unit": "ns",
            "range": "± 29318.555552624137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13248.95652173913,
            "unit": "ns",
            "range": "± 1046.88494401293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62993.652631578945,
            "unit": "ns",
            "range": "± 4384.6389423357605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50670.142857142855,
            "unit": "ns",
            "range": "± 1247.4757836077745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57250.051020408166,
            "unit": "ns",
            "range": "± 8210.940033231813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3421.6629213483147,
            "unit": "ns",
            "range": "± 196.84684539349047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12611.724489795919,
            "unit": "ns",
            "range": "± 1258.4775741962555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10546093.642857144,
            "unit": "ns",
            "range": "± 52577.67406105304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27279199.933333334,
            "unit": "ns",
            "range": "± 67532.67290353047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69070039.25,
            "unit": "ns",
            "range": "± 164034.09726258134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140068713.53333333,
            "unit": "ns",
            "range": "± 684332.3210174452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284703282.8,
            "unit": "ns",
            "range": "± 789291.0941972097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31937.85714285714,
            "unit": "ns",
            "range": "± 422.81630984167566"
          }
        ]
      }
    ]
  }
}