window.BENCHMARK_DATA = {
  "lastUpdate": 1722329731706,
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
          "id": "7b7b0e2b8b1f0132f1e84f67e233a6c57ae798d4",
          "message": "Prepare 5.1.4",
          "timestamp": "2024-07-30T17:44:56+09:00",
          "tree_id": "074f2d6d79d41c7724b127e60b5ef1a6e9d034e7",
          "url": "https://github.com/planetarium/libplanet/commit/7b7b0e2b8b1f0132f1e84f67e233a6c57ae798d4"
        },
        "date": 1722329705650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008151.3888888889,
            "unit": "ns",
            "range": "± 46313.216192925065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1950419.177777778,
            "unit": "ns",
            "range": "± 73115.05299721706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702883.1739130435,
            "unit": "ns",
            "range": "± 81698.3393995605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8399670.847826088,
            "unit": "ns",
            "range": "± 206065.3699900744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205090.84426229508,
            "unit": "ns",
            "range": "± 9218.056857576232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192415.28260869565,
            "unit": "ns",
            "range": "± 7254.7462377338215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166194.33333333334,
            "unit": "ns",
            "range": "± 3770.4957012750106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3108123.5,
            "unit": "ns",
            "range": "± 31889.6586618833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2892733.705882353,
            "unit": "ns",
            "range": "± 58183.90809618746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13092.197802197803,
            "unit": "ns",
            "range": "± 1026.5551478370128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66220.42857142857,
            "unit": "ns",
            "range": "± 8676.267394569042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50357.53333333333,
            "unit": "ns",
            "range": "± 910.9257353034304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59418.65625,
            "unit": "ns",
            "range": "± 9844.867732482026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2890.96875,
            "unit": "ns",
            "range": "± 348.86592065162404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12423.586021505376,
            "unit": "ns",
            "range": "± 902.7413401979982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31932.9375,
            "unit": "ns",
            "range": "± 431.7314301481626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10670304.2,
            "unit": "ns",
            "range": "± 76285.36323867865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27033134.57142857,
            "unit": "ns",
            "range": "± 106236.25592678171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70119867.33333333,
            "unit": "ns",
            "range": "± 521349.7956913198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141277866.5,
            "unit": "ns",
            "range": "± 479689.6448045489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291989032.28571427,
            "unit": "ns",
            "range": "± 1379120.025002185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3736935.997295673,
            "unit": "ns",
            "range": "± 4399.783883398139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1183203.07421875,
            "unit": "ns",
            "range": "± 2315.024758552861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762683.0643229167,
            "unit": "ns",
            "range": "± 1389.8534160214415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950026.165625,
            "unit": "ns",
            "range": "± 3655.3911242834847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621353.5423409598,
            "unit": "ns",
            "range": "± 769.2465706411778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575416.1178850447,
            "unit": "ns",
            "range": "± 616.6750062940071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429863.1333333333,
            "unit": "ns",
            "range": "± 36691.35157707305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2539860.533333333,
            "unit": "ns",
            "range": "± 41252.749288236475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3060215.8076923075,
            "unit": "ns",
            "range": "± 25292.682355392226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2632147.064516129,
            "unit": "ns",
            "range": "± 79527.9774322368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3279560.3,
            "unit": "ns",
            "range": "± 54289.01467832011"
          }
        ]
      }
    ]
  }
}