window.BENCHMARK_DATA = {
  "lastUpdate": 1722234628122,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:22:01+09:00",
          "tree_id": "b54d9c304404e61b9d2fd242c8811566e524801f",
          "url": "https://github.com/planetarium/libplanet/commit/2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323"
        },
        "date": 1722234615329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10824813.083333334,
            "unit": "ns",
            "range": "± 85829.12861182474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26835360.57142857,
            "unit": "ns",
            "range": "± 390124.81802420306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67022291.266666666,
            "unit": "ns",
            "range": "± 168418.43172563924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135868416.33333334,
            "unit": "ns",
            "range": "± 332180.2148369093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274894988.4230769,
            "unit": "ns",
            "range": "± 321999.76116980315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14113.192307692309,
            "unit": "ns",
            "range": "± 374.65450956642917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110995.23684210527,
            "unit": "ns",
            "range": "± 3485.690217695931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105455.90476190476,
            "unit": "ns",
            "range": "± 3307.9740304044753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90348.22727272728,
            "unit": "ns",
            "range": "± 2193.598021338636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3075236.466666667,
            "unit": "ns",
            "range": "± 57123.01161386797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788503.515151515,
            "unit": "ns",
            "range": "± 169899.51093960696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4970.25,
            "unit": "ns",
            "range": "± 490.420443638376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27251.13953488372,
            "unit": "ns",
            "range": "± 1469.1433291130681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22534.39393939394,
            "unit": "ns",
            "range": "± 1058.3166441794815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28982.516483516483,
            "unit": "ns",
            "range": "± 4040.778102633857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1189.1521739130435,
            "unit": "ns",
            "range": "± 194.55160815829927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4677.9655172413795,
            "unit": "ns",
            "range": "± 479.15440168861875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676235.8676470588,
            "unit": "ns",
            "range": "± 30131.318048014087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270220.2222222222,
            "unit": "ns",
            "range": "± 38818.45923129953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1075021.447761194,
            "unit": "ns",
            "range": "± 51032.8254374555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9650778.161616161,
            "unit": "ns",
            "range": "± 1421857.3211462314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208372.3571428573,
            "unit": "ns",
            "range": "± 63175.084093636906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301409.6739130435,
            "unit": "ns",
            "range": "± 88361.05901132249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2565969.8571428573,
            "unit": "ns",
            "range": "± 41981.4531757448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2316348.470588235,
            "unit": "ns",
            "range": "± 73027.99090312971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3130799.57,
            "unit": "ns",
            "range": "± 275764.3564193877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044604.590625,
            "unit": "ns",
            "range": "± 53221.71290010388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 933349.663671875,
            "unit": "ns",
            "range": "± 7120.804749400892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616741.2001302083,
            "unit": "ns",
            "range": "± 5866.142833244272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636895.898828125,
            "unit": "ns",
            "range": "± 10778.213942983939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466338.2928936298,
            "unit": "ns",
            "range": "± 355.66719832563354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426240.1180338542,
            "unit": "ns",
            "range": "± 860.2020300735282"
          }
        ]
      }
    ]
  }
}