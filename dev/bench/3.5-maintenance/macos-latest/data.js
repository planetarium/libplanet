window.BENCHMARK_DATA = {
  "lastUpdate": 1696421580597,
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
      },
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
          "id": "2c220258279adbad575c0686da121881db5772c4",
          "message": "Merge pull request #3443 from greymistcube/prepare/3.5.1\n\n🔧 Prepare 3.5.1",
          "timestamp": "2023-10-04T20:57:49+09:00",
          "tree_id": "6660c95a6a1132eb392ccdb1480cc8a13c802149",
          "url": "https://github.com/planetarium/libplanet/commit/2c220258279adbad575c0686da121881db5772c4"
        },
        "date": 1696421533108,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7388009.333333333,
            "unit": "ns",
            "range": "± 154467.27213498505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18397077.14285714,
            "unit": "ns",
            "range": "± 294677.96476097486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45237470.428571425,
            "unit": "ns",
            "range": "± 473161.12963388866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92061646.13333334,
            "unit": "ns",
            "range": "± 1655509.3750447265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184334264.46153846,
            "unit": "ns",
            "range": "± 1857607.8101328157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37264.734042553195,
            "unit": "ns",
            "range": "± 5571.56330482647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220297.04347826086,
            "unit": "ns",
            "range": "± 16206.409648697196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215150.16129032258,
            "unit": "ns",
            "range": "± 18226.107266590632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195678.49494949495,
            "unit": "ns",
            "range": "± 18078.035262339847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3662110.5,
            "unit": "ns",
            "range": "± 67738.80697699559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3424935.5,
            "unit": "ns",
            "range": "± 64920.535904545126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13213.54347826087,
            "unit": "ns",
            "range": "± 1707.6570345181776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57605.65517241379,
            "unit": "ns",
            "range": "± 4273.937901050609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54013.313953488374,
            "unit": "ns",
            "range": "± 5872.981343830361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60015.0618556701,
            "unit": "ns",
            "range": "± 11919.242459512014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5480.3877551020405,
            "unit": "ns",
            "range": "± 1327.265290821564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14266.327956989247,
            "unit": "ns",
            "range": "± 2231.935807396876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070846.1315789474,
            "unit": "ns",
            "range": "± 65321.74717293258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2391039,
            "unit": "ns",
            "range": "± 156965.2052562579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1719192.581632653,
            "unit": "ns",
            "range": "± 136447.46922896046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7789904.379746836,
            "unit": "ns",
            "range": "± 545233.2784580472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2868646.896551724,
            "unit": "ns",
            "range": "± 53316.972017323504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2909934.4285714286,
            "unit": "ns",
            "range": "± 57418.33804594124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3484456.3571428573,
            "unit": "ns",
            "range": "± 82008.62516323525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3434986.103448276,
            "unit": "ns",
            "range": "± 150544.99519793745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10989168.717391305,
            "unit": "ns",
            "range": "± 996350.3039520968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4276972.828385416,
            "unit": "ns",
            "range": "± 46241.990441281545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1381363.1640842014,
            "unit": "ns",
            "range": "± 116846.80904289284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 861260.0102667557,
            "unit": "ns",
            "range": "± 40704.782725322024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2065166.522845644,
            "unit": "ns",
            "range": "± 64357.0009947544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 681144.310407366,
            "unit": "ns",
            "range": "± 11816.849165298141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567712.7463191106,
            "unit": "ns",
            "range": "± 5318.491897895671"
          }
        ]
      }
    ]
  }
}