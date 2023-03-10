window.BENCHMARK_DATA = {
  "lastUpdate": 1678420063525,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7fd63eb9cf0485d8b189f13caf82cafe8ca51b83",
          "message": "Merge pull request #2913 from colibrishin/benchmark/fix/0.51-maintenance\n\nci/bench: cherrypick of bench pr update to 0.51-maintenance",
          "timestamp": "2023-03-10T12:29:01+09:00",
          "tree_id": "82119e497d3b4c94da39369664c909a5be52b864",
          "url": "https://github.com/planetarium/libplanet/commit/7fd63eb9cf0485d8b189f13caf82cafe8ca51b83"
        },
        "date": 1678419997145,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8976436.433333334,
            "unit": "ns",
            "range": "± 149105.1593619496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23360421.03846154,
            "unit": "ns",
            "range": "± 304277.7809101456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57420329.684210524,
            "unit": "ns",
            "range": "± 980340.4548961013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 137798063.3529412,
            "unit": "ns",
            "range": "± 2699494.4117861902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 228685200.7857143,
            "unit": "ns",
            "range": "± 2378713.57599769"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69154.88541666667,
            "unit": "ns",
            "range": "± 8536.411048986498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229772.14545454545,
            "unit": "ns",
            "range": "± 9727.472096380365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231864.88235294117,
            "unit": "ns",
            "range": "± 12410.949719436276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196958.14285714287,
            "unit": "ns",
            "range": "± 9288.97961468077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13333363.75,
            "unit": "ns",
            "range": "± 375589.66471197206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10729978.884615384,
            "unit": "ns",
            "range": "± 282793.602527119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20403.054945054944,
            "unit": "ns",
            "range": "± 1455.1992941986969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59650.41111111111,
            "unit": "ns",
            "range": "± 4391.9615486498715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46377.72988505747,
            "unit": "ns",
            "range": "± 2555.493779715823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120015.82291666667,
            "unit": "ns",
            "range": "± 20338.603996235335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6099.566666666667,
            "unit": "ns",
            "range": "± 791.5760846266195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21309.42105263158,
            "unit": "ns",
            "range": "± 5697.647107842808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1703515.5647058825,
            "unit": "ns",
            "range": "± 91611.22744542974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3308174.963636364,
            "unit": "ns",
            "range": "± 138624.320690045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2836195.2580645164,
            "unit": "ns",
            "range": "± 211992.85490178896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7189599.571428572,
            "unit": "ns",
            "range": "± 268748.8700261516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4003047.6515151514,
            "unit": "ns",
            "range": "± 188679.72702141767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5992638.409090909,
            "unit": "ns",
            "range": "± 184991.15597447552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27782751.07142857,
            "unit": "ns",
            "range": "± 452239.5104558006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7341600.630434782,
            "unit": "ns",
            "range": "± 251844.25228917517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33132711.95238095,
            "unit": "ns",
            "range": "± 1114598.4735108775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6630191.795200893,
            "unit": "ns",
            "range": "± 93240.87879428141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2136726.6846354166,
            "unit": "ns",
            "range": "± 34001.58895893266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442705.001953125,
            "unit": "ns",
            "range": "± 8652.118885088843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2821057.646484375,
            "unit": "ns",
            "range": "± 29779.655242795307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913342.31328125,
            "unit": "ns",
            "range": "± 10267.201880952412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 799252.8724190848,
            "unit": "ns",
            "range": "± 7241.978252239798"
          }
        ]
      }
    ]
  }
}