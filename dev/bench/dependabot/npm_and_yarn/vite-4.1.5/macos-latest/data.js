window.BENCHMARK_DATA = {
  "lastUpdate": 1686019550225,
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
        "date": 1686019469570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8878780.57142857,
            "unit": "ns",
            "range": "± 245352.4963287218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21270013.9375,
            "unit": "ns",
            "range": "± 778955.8155502189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54288363.54545455,
            "unit": "ns",
            "range": "± 3042939.1432073177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119848067.11494254,
            "unit": "ns",
            "range": "± 17901207.170433946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249389440.35263157,
            "unit": "ns",
            "range": "± 34619002.72934083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84987.51204819277,
            "unit": "ns",
            "range": "± 9082.243569512471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388785.55555555556,
            "unit": "ns",
            "range": "± 47768.014375274484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378693.7894736842,
            "unit": "ns",
            "range": "± 44275.53485648195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354154.5,
            "unit": "ns",
            "range": "± 26383.694812823134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4669691.544943821,
            "unit": "ns",
            "range": "± 379545.4131990996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4490466.282608695,
            "unit": "ns",
            "range": "± 593200.0393705171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29621.476470588233,
            "unit": "ns",
            "range": "± 3582.2193572210654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135492.73863636365,
            "unit": "ns",
            "range": "± 11927.246299428283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136347.4775280899,
            "unit": "ns",
            "range": "± 17495.09801212999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143594.085106383,
            "unit": "ns",
            "range": "± 25454.44077926585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10216.5625,
            "unit": "ns",
            "range": "± 1442.541637180709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29160.934065934067,
            "unit": "ns",
            "range": "± 3035.649591117005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1869370.4943820224,
            "unit": "ns",
            "range": "± 311116.5213253244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3620758.4545454546,
            "unit": "ns",
            "range": "± 776354.1495405763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3129849.488888889,
            "unit": "ns",
            "range": "± 601348.3664557087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10138330.127659574,
            "unit": "ns",
            "range": "± 3209871.6626035697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3628722.177777778,
            "unit": "ns",
            "range": "± 492635.28446567315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4260002.241758241,
            "unit": "ns",
            "range": "± 640650.4923039523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5388793.643678161,
            "unit": "ns",
            "range": "± 815121.6704507339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4985106.282352941,
            "unit": "ns",
            "range": "± 708994.8683863861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10179537.56521739,
            "unit": "ns",
            "range": "± 2504103.171945188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7250794.993275316,
            "unit": "ns",
            "range": "± 376560.09096017113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2169505.0726467227,
            "unit": "ns",
            "range": "± 114712.90681457456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405727.2339242788,
            "unit": "ns",
            "range": "± 37879.583823423316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3191767.1938802083,
            "unit": "ns",
            "range": "± 240234.34057387995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027604.3422270275,
            "unit": "ns",
            "range": "± 55193.00530521444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1016235.2602306547,
            "unit": "ns",
            "range": "± 24157.059508831415"
          }
        ]
      }
    ]
  }
}