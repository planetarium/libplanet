window.BENCHMARK_DATA = {
  "lastUpdate": 1741149306616,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "70913b1666371fd401981f0e4dca895aa293780a",
          "message": "feat: Introduce Nethereum crypto",
          "timestamp": "2025-03-05T13:24:12+09:00",
          "tree_id": "f42c4854f95ac7375d07d7f70520cba1c67a2db1",
          "url": "https://github.com/planetarium/libplanet/commit/70913b1666371fd401981f0e4dca895aa293780a"
        },
        "date": 1741149280227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2159877.64,
            "unit": "ns",
            "range": "± 1145054.166714445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1970497.0120481928,
            "unit": "ns",
            "range": "± 443296.265606007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3668711.67,
            "unit": "ns",
            "range": "± 1544676.8831133423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7010809.863636363,
            "unit": "ns",
            "range": "± 260325.0761818269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22951.67948717949,
            "unit": "ns",
            "range": "± 1182.8989208619462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2949929.5,
            "unit": "ns",
            "range": "± 92359.32190888854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2508447.31,
            "unit": "ns",
            "range": "± 472025.2567298092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2547327.6463414636,
            "unit": "ns",
            "range": "± 326111.8261038678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2261094.1666666665,
            "unit": "ns",
            "range": "± 170819.33993178562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2854895.096153846,
            "unit": "ns",
            "range": "± 102795.17115370733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11120442.7,
            "unit": "ns",
            "range": "± 88681.51017561987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22088564.59375,
            "unit": "ns",
            "range": "± 556112.2204601639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58585194.84615385,
            "unit": "ns",
            "range": "± 249112.25527689524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112513831.58333333,
            "unit": "ns",
            "range": "± 214585.0141414431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221499895.42857143,
            "unit": "ns",
            "range": "± 660046.3747408458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101187.48235294118,
            "unit": "ns",
            "range": "± 17318.84571074704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170950,
            "unit": "ns",
            "range": "± 18295.195563080433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139306.5641025641,
            "unit": "ns",
            "range": "± 4864.05952285078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2744790.3333333335,
            "unit": "ns",
            "range": "± 38533.996686121995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490359.7,
            "unit": "ns",
            "range": "± 46550.080548035265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12916.858823529412,
            "unit": "ns",
            "range": "± 4314.932549693374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66728.69791666667,
            "unit": "ns",
            "range": "± 21456.139767647812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45404.25490196078,
            "unit": "ns",
            "range": "± 1695.1079711114248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69041.48484848485,
            "unit": "ns",
            "range": "± 25131.324907765327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3539.5,
            "unit": "ns",
            "range": "± 1206.0909453358202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14446.924731182795,
            "unit": "ns",
            "range": "± 5678.749952840125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3836873.5022321427,
            "unit": "ns",
            "range": "± 30891.79824262817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921707.9174107143,
            "unit": "ns",
            "range": "± 5075.02005711771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 705877.3420758928,
            "unit": "ns",
            "range": "± 4632.119875432762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1737504.6589006695,
            "unit": "ns",
            "range": "± 4300.752101568224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464274.7158551897,
            "unit": "ns",
            "range": "± 759.9075284388877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 443492.5558035714,
            "unit": "ns",
            "range": "± 1458.9615390510398"
          }
        ]
      }
    ]
  }
}