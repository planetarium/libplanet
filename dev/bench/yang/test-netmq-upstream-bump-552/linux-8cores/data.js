window.BENCHMARK_DATA = {
  "lastUpdate": 1778136461448,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "21497cdd0fbdd9f9707fa163fa0e16719ca6a710",
          "message": "test(5.5.2): bump NetMQ from Planetarium fork to upstream 4.0.4.1\n\nSame change as #PR-on-main-branch but rebased onto release tag 5.5.2,\nwhich is the version NineChronicles.Headless currently consumes\n(LibplanetVersion=5.5.2 in NineChronicles.Headless/Directory.Build.props).\n\nThis branch validates that the *exact* Libplanet.Net code path running\nin production today (5.5.2) builds and passes its tests against the\nupstream NetMQ 4.0.4.1 package, in addition to the parallel main-branch\ntest. If both CI runs are green, swapping the package becomes a low-risk\nchange for Headless.\n\nBranched from tag 5.5.2 (commit c6233b1e4d).",
          "timestamp": "2026-05-07T15:37:23+09:00",
          "tree_id": "b648428123c6acca6549d73c2e476e2eaa729d23",
          "url": "https://github.com/planetarium/libplanet/commit/21497cdd0fbdd9f9707fa163fa0e16719ca6a710"
        },
        "date": 1778136435635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11893888.3,
            "unit": "ns",
            "range": "± 273294.969519748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28796459.133333333,
            "unit": "ns",
            "range": "± 407527.7522943975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74716768.28571428,
            "unit": "ns",
            "range": "± 977291.6617455869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144960925.2,
            "unit": "ns",
            "range": "± 2128000.106807167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297007126.93333334,
            "unit": "ns",
            "range": "± 1846829.9904060499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4045641.754206731,
            "unit": "ns",
            "range": "± 12779.60832244828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222186.3057291666,
            "unit": "ns",
            "range": "± 3166.8192055130717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 789761.3367838542,
            "unit": "ns",
            "range": "± 3126.4276413645553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2001440.9994791667,
            "unit": "ns",
            "range": "± 9217.641371823425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 650168.2799944197,
            "unit": "ns",
            "range": "± 2653.95035875301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576210.6335797991,
            "unit": "ns",
            "range": "± 1008.0761888076385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32827.29885057471,
            "unit": "ns",
            "range": "± 1805.0511048292165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517048.462962963,
            "unit": "ns",
            "range": "± 68413.34820243639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2600345.3095238097,
            "unit": "ns",
            "range": "± 61414.78492644832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3171487.933333333,
            "unit": "ns",
            "range": "± 54597.84927536284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2834228.4545454546,
            "unit": "ns",
            "range": "± 68755.55313519343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3433628,
            "unit": "ns",
            "range": "± 42771.50309898114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1089628.607142857,
            "unit": "ns",
            "range": "± 58528.79479017821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2073738.3125,
            "unit": "ns",
            "range": "± 63448.04111083666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1724244.6470588236,
            "unit": "ns",
            "range": "± 76499.85038230706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8267686.5813953485,
            "unit": "ns",
            "range": "± 304290.12272940733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123143.89795918367,
            "unit": "ns",
            "range": "± 12931.468568373863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203485.32291666666,
            "unit": "ns",
            "range": "± 12786.123447743768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188273.72164948453,
            "unit": "ns",
            "range": "± 12911.764005922298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3032933.5625,
            "unit": "ns",
            "range": "± 58488.87394250722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2890296.0434782607,
            "unit": "ns",
            "range": "± 71506.45674818354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13322.536842105263,
            "unit": "ns",
            "range": "± 2298.7158247110833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61505.565217391304,
            "unit": "ns",
            "range": "± 4007.19796817421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51218.26,
            "unit": "ns",
            "range": "± 1348.0273946276711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64394.56701030928,
            "unit": "ns",
            "range": "± 14285.385009619693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2547.3,
            "unit": "ns",
            "range": "± 415.4817403878837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12484.682795698925,
            "unit": "ns",
            "range": "± 2002.2106909626525"
          }
        ]
      }
    ]
  }
}