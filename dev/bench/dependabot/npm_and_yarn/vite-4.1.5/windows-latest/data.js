window.BENCHMARK_DATA = {
  "lastUpdate": 1686018752286,
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
        "date": 1686018713112,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028177.7777777778,
            "unit": "ns",
            "range": "± 95771.32900987362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843613.1868131869,
            "unit": "ns",
            "range": "± 122195.25650803601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586262.2448979593,
            "unit": "ns",
            "range": "± 116364.76112647625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3855192.405063291,
            "unit": "ns",
            "range": "± 197889.7781608534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35920.22471910113,
            "unit": "ns",
            "range": "± 2470.3321351628783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4910493.333333333,
            "unit": "ns",
            "range": "± 24363.01255904903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12700814.285714285,
            "unit": "ns",
            "range": "± 68453.72223562491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33441581.818181816,
            "unit": "ns",
            "range": "± 660349.6650463677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68248384.61538461,
            "unit": "ns",
            "range": "± 899283.968727485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133853483.33333333,
            "unit": "ns",
            "range": "± 2697588.202395963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3542285.3125,
            "unit": "ns",
            "range": "± 27810.633043669743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1113142.7083333333,
            "unit": "ns",
            "range": "± 7642.184218380701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 850127.3372395834,
            "unit": "ns",
            "range": "± 10524.07443501031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891669.3359375,
            "unit": "ns",
            "range": "± 5617.741171217584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610017.0833333334,
            "unit": "ns",
            "range": "± 3112.0088933868296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 537226.9921875,
            "unit": "ns",
            "range": "± 1588.271518827844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183595.744680851,
            "unit": "ns",
            "range": "± 142525.71314127403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2342205.3571428573,
            "unit": "ns",
            "range": "± 98977.31313909145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2969304.1666666665,
            "unit": "ns",
            "range": "± 145707.87429058764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2940556.25,
            "unit": "ns",
            "range": "± 170031.252738709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4718347.457627119,
            "unit": "ns",
            "range": "± 207533.27889009315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193404.44444444444,
            "unit": "ns",
            "range": "± 5538.376672059798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185205,
            "unit": "ns",
            "range": "± 5944.657157309302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155641.37931034484,
            "unit": "ns",
            "range": "± 4472.336976297364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2859286.6666666665,
            "unit": "ns",
            "range": "± 81410.9953318318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2602531.25,
            "unit": "ns",
            "range": "± 50412.60052473654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17037.113402061856,
            "unit": "ns",
            "range": "± 2604.376108416245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62735.71428571428,
            "unit": "ns",
            "range": "± 3440.357324434987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52925.58139534884,
            "unit": "ns",
            "range": "± 1876.3050091242292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71438.77551020408,
            "unit": "ns",
            "range": "± 12538.235399719353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4786.458333333333,
            "unit": "ns",
            "range": "± 764.2842942623773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12894.623655913978,
            "unit": "ns",
            "range": "± 952.4984983895329"
          }
        ]
      }
    ]
  }
}