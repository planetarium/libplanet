window.BENCHMARK_DATA = {
  "lastUpdate": 1696408500601,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4de791ec79e187d4f37220ca3f714d0fa1503b4",
          "message": "Merge pull request #3441 from greymistcube/release/3.5.0\n\n🚀 Release 3.5.0",
          "timestamp": "2023-10-04T17:16:25+09:00",
          "tree_id": "3e3fb2039e8bdf70273fc070e13a90ca8e2a47eb",
          "url": "https://github.com/planetarium/libplanet/commit/f4de791ec79e187d4f37220ca3f714d0fa1503b4"
        },
        "date": 1696408377567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8574585.6,
            "unit": "ns",
            "range": "± 112644.64052611265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21610562,
            "unit": "ns",
            "range": "± 349293.82159375714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52310295.25,
            "unit": "ns",
            "range": "± 993758.3454475908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105807926,
            "unit": "ns",
            "range": "± 1151692.7530337514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215657554.57142857,
            "unit": "ns",
            "range": "± 3412078.075737057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76391.37640449438,
            "unit": "ns",
            "range": "± 7874.456728476035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330025.91011235956,
            "unit": "ns",
            "range": "± 21964.31720822768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309705.0722891566,
            "unit": "ns",
            "range": "± 16414.555618884184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319036.98484848486,
            "unit": "ns",
            "range": "± 10094.851441827946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4213842.642857143,
            "unit": "ns",
            "range": "± 118791.03497153505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3798110.8666666667,
            "unit": "ns",
            "range": "± 53657.79345719723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27129.89898989899,
            "unit": "ns",
            "range": "± 4588.058580784825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112942.16161616161,
            "unit": "ns",
            "range": "± 12718.94061634793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110792.99,
            "unit": "ns",
            "range": "± 11880.461474980038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113863.25257731958,
            "unit": "ns",
            "range": "± 15310.8869170974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8386.402173913044,
            "unit": "ns",
            "range": "± 1071.1377032556934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21050.892473118278,
            "unit": "ns",
            "range": "± 2479.767014224126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1501143.469387755,
            "unit": "ns",
            "range": "± 144298.4272252276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2912283.5,
            "unit": "ns",
            "range": "± 127005.62421100022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2482480.8571428573,
            "unit": "ns",
            "range": "± 249726.45000393334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10855667.564102564,
            "unit": "ns",
            "range": "± 658857.6904503681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3668544,
            "unit": "ns",
            "range": "± 39724.6286053543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3510039.6551724137,
            "unit": "ns",
            "range": "± 101703.23231142231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4445611.95,
            "unit": "ns",
            "range": "± 98592.22242436933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4344164.357142857,
            "unit": "ns",
            "range": "± 153878.32858720448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15222951.833333334,
            "unit": "ns",
            "range": "± 1590499.5810065959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5706596.593149038,
            "unit": "ns",
            "range": "± 49054.67394380536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1657234.4808872768,
            "unit": "ns",
            "range": "± 4734.873416995798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1009179.7904146635,
            "unit": "ns",
            "range": "± 7999.820599453944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659700.3130326704,
            "unit": "ns",
            "range": "± 64569.06744325309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787784.7548828125,
            "unit": "ns",
            "range": "± 7190.6589586476375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715422.8860909598,
            "unit": "ns",
            "range": "± 3147.5914306842683"
          }
        ]
      }
    ]
  }
}