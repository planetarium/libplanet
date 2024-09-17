window.BENCHMARK_DATA = {
  "lastUpdate": 1726602033287,
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
          "id": "b617c68eb33f9e6c475466f50ec836f6635f4430",
          "message": "Bump vite from 4.1.4 to 4.5.5\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 4.1.4 to 4.5.5.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v4.5.5/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v4.5.5/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-09-17T19:30:12Z",
          "tree_id": "2770aa9dcd31dde1e12bf4deddcbf80c6883869b",
          "url": "https://github.com/planetarium/libplanet/commit/b617c68eb33f9e6c475466f50ec836f6635f4430"
        },
        "date": 1726602005380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418433.933333333,
            "unit": "ns",
            "range": "± 36425.44436529943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2561357.214285714,
            "unit": "ns",
            "range": "± 33247.12262432199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3032891.066666667,
            "unit": "ns",
            "range": "± 25561.792745274754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572435.714285714,
            "unit": "ns",
            "range": "± 42469.94731196777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3255104.785714286,
            "unit": "ns",
            "range": "± 44575.49587830407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027806.2413793104,
            "unit": "ns",
            "range": "± 56071.90876651275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1992624,
            "unit": "ns",
            "range": "± 86803.26449779228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1693368.0789473683,
            "unit": "ns",
            "range": "± 56926.61575512316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8189223,
            "unit": "ns",
            "range": "± 127557.33570350934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10544226.3,
            "unit": "ns",
            "range": "± 144643.25762381242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27395537,
            "unit": "ns",
            "range": "± 160363.78606735732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69293767,
            "unit": "ns",
            "range": "± 511463.0768131194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138181461.92857143,
            "unit": "ns",
            "range": "± 537051.6991891526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284644869.06666666,
            "unit": "ns",
            "range": "± 1297133.5036484138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205330.22222222222,
            "unit": "ns",
            "range": "± 8587.08375534929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190328.3679245283,
            "unit": "ns",
            "range": "± 7807.313144732502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172237.24,
            "unit": "ns",
            "range": "± 4408.995579872283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082833.3666666667,
            "unit": "ns",
            "range": "± 33746.71878836449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2873262.714285714,
            "unit": "ns",
            "range": "± 40635.67165099492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13152.173684210526,
            "unit": "ns",
            "range": "± 1078.5969456236294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69250.51388888889,
            "unit": "ns",
            "range": "± 3417.9724304060214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51359.833333333336,
            "unit": "ns",
            "range": "± 609.3514933306083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62534.8870967742,
            "unit": "ns",
            "range": "± 7145.784862773933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2902.020618556701,
            "unit": "ns",
            "range": "± 384.2028267340659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12389.505617977527,
            "unit": "ns",
            "range": "± 798.4261524967771"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31937.066666666666,
            "unit": "ns",
            "range": "± 316.79296228354093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3666263.0226004464,
            "unit": "ns",
            "range": "± 4800.010578748387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196805.8523995536,
            "unit": "ns",
            "range": "± 2088.036512330625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764140.7560686384,
            "unit": "ns",
            "range": "± 772.1488141827322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939023.4990885416,
            "unit": "ns",
            "range": "± 1891.6628554421106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629885.0152064732,
            "unit": "ns",
            "range": "± 470.76840635556755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582897.3752604167,
            "unit": "ns",
            "range": "± 701.0714558040838"
          }
        ]
      }
    ]
  }
}