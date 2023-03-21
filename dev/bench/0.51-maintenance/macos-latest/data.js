window.BENCHMARK_DATA = {
  "lastUpdate": 1679374627567,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d23d43a83cc8ab4879ec60a13e6436bb87c8c52",
          "message": "Merge pull request #2917 from OnedgeLee/fix/0.51-maintenance\n\nFix ActionExecutionState total count",
          "timestamp": "2023-03-13T13:14:46+09:00",
          "tree_id": "a307135d2d9e360060cf6e08395ba431cb14e229",
          "url": "https://github.com/planetarium/libplanet/commit/6d23d43a83cc8ab4879ec60a13e6436bb87c8c52"
        },
        "date": 1678681905672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8640554,
            "unit": "ns",
            "range": "± 95701.67569065862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23344250.29411765,
            "unit": "ns",
            "range": "± 478582.1167928975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57789144.93333333,
            "unit": "ns",
            "range": "± 961320.9820342057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116974684.35714285,
            "unit": "ns",
            "range": "± 738313.228590956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231270321.93333334,
            "unit": "ns",
            "range": "± 4281079.954902342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70070.77173913043,
            "unit": "ns",
            "range": "± 6153.820369910598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241068.65277777778,
            "unit": "ns",
            "range": "± 11861.574769165316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246716.59259259258,
            "unit": "ns",
            "range": "± 10392.861218741427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227354.56024096385,
            "unit": "ns",
            "range": "± 12088.406716162022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13102364.2,
            "unit": "ns",
            "range": "± 123102.54351683513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10799402,
            "unit": "ns",
            "range": "± 145365.62544150525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20337.691489361703,
            "unit": "ns",
            "range": "± 2744.6107389024824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61283.21649484536,
            "unit": "ns",
            "range": "± 8503.442475975544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46032.032608695656,
            "unit": "ns",
            "range": "± 4432.036072301053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108666.62903225806,
            "unit": "ns",
            "range": "± 12063.09836923244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6001.1612903225805,
            "unit": "ns",
            "range": "± 501.2539990152216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19792.402298850575,
            "unit": "ns",
            "range": "± 2242.131489307327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1714020.5102040817,
            "unit": "ns",
            "range": "± 124840.83515620955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3246991.7678571427,
            "unit": "ns",
            "range": "± 139305.9850337302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2714787.734042553,
            "unit": "ns",
            "range": "± 225718.38381426578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7291399.823529412,
            "unit": "ns",
            "range": "± 341708.6697844364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3789946.6,
            "unit": "ns",
            "range": "± 122481.9065793225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6064111.575757576,
            "unit": "ns",
            "range": "± 190568.5031386401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27560740.92857143,
            "unit": "ns",
            "range": "± 479639.0541962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7431668.794117647,
            "unit": "ns",
            "range": "± 239431.47094046324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31978831.416666668,
            "unit": "ns",
            "range": "± 818518.0844014711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7433143.309375,
            "unit": "ns",
            "range": "± 68846.04290469614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2259845.7796875,
            "unit": "ns",
            "range": "± 11153.847217789193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1446170.2602163462,
            "unit": "ns",
            "range": "± 7704.652012025816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3174948.099739583,
            "unit": "ns",
            "range": "± 25581.42012680861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934093.8110677083,
            "unit": "ns",
            "range": "± 3836.216586190597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835406.5379557292,
            "unit": "ns",
            "range": "± 7466.160605539316"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8af6e82f9f5359a8f8292ff460d3758e05fe6111",
          "message": "Merge pull request #2918 from OnedgeLee/0.51-maintenance\n\n🚀 Release 0.51.1",
          "timestamp": "2023-03-13T14:58:05+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/planetarium/libplanet/commit/8af6e82f9f5359a8f8292ff460d3758e05fe6111"
        },
        "date": 1678687964428,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8128662.391752577,
            "unit": "ns",
            "range": "± 464359.73826714617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20784821.166666668,
            "unit": "ns",
            "range": "± 291607.84441699064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49560986.26530612,
            "unit": "ns",
            "range": "± 2887858.79550815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103978105,
            "unit": "ns",
            "range": "± 3260754.886102494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 210654214.29166666,
            "unit": "ns",
            "range": "± 5467639.887938341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71360.74725274726,
            "unit": "ns",
            "range": "± 13673.522558087225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205106.6914893617,
            "unit": "ns",
            "range": "± 12966.703768661791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216189.93529411763,
            "unit": "ns",
            "range": "± 11696.675734957327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188823.51041666666,
            "unit": "ns",
            "range": "± 16808.492415564844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12256493.2,
            "unit": "ns",
            "range": "± 278228.89410871384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9710501.41935484,
            "unit": "ns",
            "range": "± 290283.5237636673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20469.729166666668,
            "unit": "ns",
            "range": "± 3363.109536939904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53694.566666666666,
            "unit": "ns",
            "range": "± 4319.8682402919585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56492.602040816324,
            "unit": "ns",
            "range": "± 5348.314272894337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114591,
            "unit": "ns",
            "range": "± 13825.252344243936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6942.569892473119,
            "unit": "ns",
            "range": "± 678.6251510262665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18293.902173913044,
            "unit": "ns",
            "range": "± 2246.489623320688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613338.2424242424,
            "unit": "ns",
            "range": "± 147636.79530835198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2972669.2021276597,
            "unit": "ns",
            "range": "± 114678.62736870463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2578981.121212121,
            "unit": "ns",
            "range": "± 191105.9787664721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6178190.08,
            "unit": "ns",
            "range": "± 161170.73905021758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300342.738095238,
            "unit": "ns",
            "range": "± 173413.168985499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5098636.825,
            "unit": "ns",
            "range": "± 180496.63292028007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24485192.401960783,
            "unit": "ns",
            "range": "± 981571.6726432411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6471843.064516129,
            "unit": "ns",
            "range": "± 293806.8182608871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28081280.294871796,
            "unit": "ns",
            "range": "± 982597.4018030015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6560935.497159091,
            "unit": "ns",
            "range": "± 156029.48786845183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910813.8480747768,
            "unit": "ns",
            "range": "± 14873.869333354856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291385.764453125,
            "unit": "ns",
            "range": "± 6508.395363414184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630110.97109375,
            "unit": "ns",
            "range": "± 37389.06164783579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854090.7202845982,
            "unit": "ns",
            "range": "± 2974.4394489188358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 697554.5326171875,
            "unit": "ns",
            "range": "± 5323.118332663398"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aafb851c0bfe09ab016c62303d25c8b89d341d6",
          "message": "Merge pull request #2920 from OnedgeLee/0.51-maintenance\n\nFix typo 0.51.1",
          "timestamp": "2023-03-13T15:32:29+09:00",
          "tree_id": "c5804224cca4a1d8c02e7a4eb637cc263479fc46",
          "url": "https://github.com/planetarium/libplanet/commit/7aafb851c0bfe09ab016c62303d25c8b89d341d6"
        },
        "date": 1678690405360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8622327.15116279,
            "unit": "ns",
            "range": "± 301131.7178591521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22297238.35714286,
            "unit": "ns",
            "range": "± 1697532.803574641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51849186.63636363,
            "unit": "ns",
            "range": "± 1234641.6194592295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104011424.5,
            "unit": "ns",
            "range": "± 2031317.5330558242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223270219.42857143,
            "unit": "ns",
            "range": "± 2678139.182405193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67810.39010989011,
            "unit": "ns",
            "range": "± 10356.487755616497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241877.4945054945,
            "unit": "ns",
            "range": "± 33532.15983181043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233720.811827957,
            "unit": "ns",
            "range": "± 18770.178286648636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212986.82795698923,
            "unit": "ns",
            "range": "± 21870.987219335577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13030391.525,
            "unit": "ns",
            "range": "± 674570.5685023017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10311177.296875,
            "unit": "ns",
            "range": "± 477508.906910203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23915.24226804124,
            "unit": "ns",
            "range": "± 4795.529418284524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72845.81052631579,
            "unit": "ns",
            "range": "± 11767.929210353366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70462.70454545454,
            "unit": "ns",
            "range": "± 7295.093509613299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153780.72340425532,
            "unit": "ns",
            "range": "± 25339.01082096612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9664.074468085106,
            "unit": "ns",
            "range": "± 1069.0553209919083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25447.7,
            "unit": "ns",
            "range": "± 4538.839221745034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731968.2021276595,
            "unit": "ns",
            "range": "± 202746.15011832604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3322365.65625,
            "unit": "ns",
            "range": "± 438397.6695786197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2874082.865591398,
            "unit": "ns",
            "range": "± 342073.80746255635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7131128.747368421,
            "unit": "ns",
            "range": "± 753683.9529577928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3457181.9166666665,
            "unit": "ns",
            "range": "± 200192.39340582068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5192740.2894736845,
            "unit": "ns",
            "range": "± 224837.12010799037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25549435.822580647,
            "unit": "ns",
            "range": "± 756594.1570883908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6502439.2835820895,
            "unit": "ns",
            "range": "± 296189.39536158415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30452316.3125,
            "unit": "ns",
            "range": "± 1395618.8099836058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7589789.968860035,
            "unit": "ns",
            "range": "± 372068.20692990016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2276329.8158637155,
            "unit": "ns",
            "range": "± 112228.70545410871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1492827.6995898439,
            "unit": "ns",
            "range": "± 115325.91887716406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3070585.0932667525,
            "unit": "ns",
            "range": "± 276176.03532852733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 944155.163828125,
            "unit": "ns",
            "range": "± 37973.61101840341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798334.1896784856,
            "unit": "ns",
            "range": "± 27635.81252877703"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19a15c713cf42e16718fa824231d6d1d2feef464",
          "message": "Merge pull request #2922 from OnedgeLee/0.51-maintenance\n\n🔧 Prepare 0.51.2",
          "timestamp": "2023-03-13T16:53:15+09:00",
          "tree_id": "abde72e5843a7fb700dfba7dc6d60d4b3693cbb4",
          "url": "https://github.com/planetarium/libplanet/commit/19a15c713cf42e16718fa824231d6d1d2feef464"
        },
        "date": 1678694845958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8159547.692307692,
            "unit": "ns",
            "range": "± 135799.91103849848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20249395.944444444,
            "unit": "ns",
            "range": "± 357243.51086293114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49972355.4,
            "unit": "ns",
            "range": "± 1147667.485525196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97351683.6,
            "unit": "ns",
            "range": "± 1145908.3020452005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204527301.83333334,
            "unit": "ns",
            "range": "± 2924845.3774849284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62492.336842105266,
            "unit": "ns",
            "range": "± 7860.343330180245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213119.02127659574,
            "unit": "ns",
            "range": "± 14240.019844871638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206644.92222222223,
            "unit": "ns",
            "range": "± 17252.64698090746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188644.9292929293,
            "unit": "ns",
            "range": "± 17798.73187425678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12242907.12,
            "unit": "ns",
            "range": "± 320071.82577226835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9745910.090909092,
            "unit": "ns",
            "range": "± 357800.42190254986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19983.4587628866,
            "unit": "ns",
            "range": "± 3674.914854222039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55683.11827956989,
            "unit": "ns",
            "range": "± 5081.112865627882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55675.95789473684,
            "unit": "ns",
            "range": "± 5450.881730188811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119682.85263157895,
            "unit": "ns",
            "range": "± 19001.15693452354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7622.936842105263,
            "unit": "ns",
            "range": "± 829.3831315787465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17894.449438202246,
            "unit": "ns",
            "range": "± 2510.0928994544656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1558316.1021505375,
            "unit": "ns",
            "range": "± 147469.69361327885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2827038.773809524,
            "unit": "ns",
            "range": "± 150828.6240077017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2459624.14893617,
            "unit": "ns",
            "range": "± 207636.62510529632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5927196.68,
            "unit": "ns",
            "range": "± 156494.1105480544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3327989.111111111,
            "unit": "ns",
            "range": "± 70225.97091334674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5335882.133333334,
            "unit": "ns",
            "range": "± 90184.61598684799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23866699.136363637,
            "unit": "ns",
            "range": "± 579128.7645456089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6458647.857142857,
            "unit": "ns",
            "range": "± 113426.94056043784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28859910.59375,
            "unit": "ns",
            "range": "± 879570.4111203982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6370589.37890625,
            "unit": "ns",
            "range": "± 102492.6343561138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893454.7701322115,
            "unit": "ns",
            "range": "± 14671.436045264512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1273805.9779947917,
            "unit": "ns",
            "range": "± 8054.370260687887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2453642.9096354167,
            "unit": "ns",
            "range": "± 41865.207318150264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829508.7659737723,
            "unit": "ns",
            "range": "± 4921.84297702026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773546.5161132812,
            "unit": "ns",
            "range": "± 2812.3055852224406"
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
          "id": "8f3b269526a4e41f476d5ff9e3ee65dd0a0c704f",
          "message": "Merge pull request #2937 from greymistcube/port/0.50.3-to-0.51.2\n\n🔀 Port 0.50.3 to 0.51.2",
          "timestamp": "2023-03-15T11:22:20+09:00",
          "tree_id": "4283086a07662080e9bc8e33e4880b769f6ad26d",
          "url": "https://github.com/planetarium/libplanet/commit/8f3b269526a4e41f476d5ff9e3ee65dd0a0c704f"
        },
        "date": 1678848211385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8508857.401098901,
            "unit": "ns",
            "range": "± 575603.6285158208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21010925.722222224,
            "unit": "ns",
            "range": "± 449474.33559539117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55249165.27659574,
            "unit": "ns",
            "range": "± 4384072.149227538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107089395.53061225,
            "unit": "ns",
            "range": "± 6209732.972895816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 212319102.5,
            "unit": "ns",
            "range": "± 3909301.610425951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68699.0744680851,
            "unit": "ns",
            "range": "± 12579.745774342304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220441.15217391305,
            "unit": "ns",
            "range": "± 19770.57098673237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190700.04347826086,
            "unit": "ns",
            "range": "± 12345.0502501775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212256.34065934067,
            "unit": "ns",
            "range": "± 26213.59574564304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12770416.75,
            "unit": "ns",
            "range": "± 523321.9956704898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12567347.52,
            "unit": "ns",
            "range": "± 2628951.9043543483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21530.03125,
            "unit": "ns",
            "range": "± 4189.4658683621055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59105.73655913978,
            "unit": "ns",
            "range": "± 7746.119027416875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60462.01111111111,
            "unit": "ns",
            "range": "± 7408.464567064364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128840.77083333333,
            "unit": "ns",
            "range": "± 17124.85300219917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9004.202127659575,
            "unit": "ns",
            "range": "± 1112.0118726621856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24951.739583333332,
            "unit": "ns",
            "range": "± 3829.913631690165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676439.324742268,
            "unit": "ns",
            "range": "± 259630.01286333764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3104836.905263158,
            "unit": "ns",
            "range": "± 409526.736824871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2799985.3917525774,
            "unit": "ns",
            "range": "± 506000.1190104347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7006701.572916667,
            "unit": "ns",
            "range": "± 894281.5152831055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342426.7213114756,
            "unit": "ns",
            "range": "± 150394.93383922338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5249382.159090909,
            "unit": "ns",
            "range": "± 184412.16136131276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25894966.90909091,
            "unit": "ns",
            "range": "± 1420460.1850901314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6659246.286516854,
            "unit": "ns",
            "range": "± 595652.8774974464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30958247.247311827,
            "unit": "ns",
            "range": "± 2554901.5920424904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6452804.4328125,
            "unit": "ns",
            "range": "± 81446.6100111306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2161047.395970395,
            "unit": "ns",
            "range": "± 143911.4166904525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386082.6150962752,
            "unit": "ns",
            "range": "± 89158.7921068437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2807313.314642137,
            "unit": "ns",
            "range": "± 188672.7266336898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 874820.7093874008,
            "unit": "ns",
            "range": "± 36939.61113031154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792217.0647583008,
            "unit": "ns",
            "range": "± 56152.622587617974"
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
          "id": "48188be98ede9f04525c7a20ed2d8d6c434ebe08",
          "message": "Merge pull request #2938 from greymistcube/refactor/blockcommit-encoding\n\n♻️ Refactor `BlockCommit` encoding",
          "timestamp": "2023-03-15T16:30:44+09:00",
          "tree_id": "f1a76ecc24619636b246c8f654731b40b288d6fe",
          "url": "https://github.com/planetarium/libplanet/commit/48188be98ede9f04525c7a20ed2d8d6c434ebe08"
        },
        "date": 1678866546608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10189022.276595745,
            "unit": "ns",
            "range": "± 887930.2401916365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23248710.47191011,
            "unit": "ns",
            "range": "± 1842960.782301114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58971940.44318182,
            "unit": "ns",
            "range": "± 7602929.542013507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110468377.38095239,
            "unit": "ns",
            "range": "± 6161074.136144034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 237967491.35185185,
            "unit": "ns",
            "range": "± 9921997.940981744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84810.13043478261,
            "unit": "ns",
            "range": "± 12062.014698059624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243337.0842696629,
            "unit": "ns",
            "range": "± 26394.714664548494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238548.24444444446,
            "unit": "ns",
            "range": "± 29806.855109774348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205640.125,
            "unit": "ns",
            "range": "± 20893.88340727597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12670939.210526315,
            "unit": "ns",
            "range": "± 273370.32484842057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10285745.52631579,
            "unit": "ns",
            "range": "± 522912.8803446191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22242.458333333332,
            "unit": "ns",
            "range": "± 2673.111102566945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58055.45652173913,
            "unit": "ns",
            "range": "± 8194.216879776503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55877.28947368421,
            "unit": "ns",
            "range": "± 6742.832003193633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133845.15555555557,
            "unit": "ns",
            "range": "± 14579.181741277303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8025.163157894737,
            "unit": "ns",
            "range": "± 1480.269215095732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20630.694736842106,
            "unit": "ns",
            "range": "± 3659.802968402151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514209.2362637362,
            "unit": "ns",
            "range": "± 99257.94520337574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2846394.0634920634,
            "unit": "ns",
            "range": "± 129750.4229174378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2529300.282828283,
            "unit": "ns",
            "range": "± 205229.71041608523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6149566.074074074,
            "unit": "ns",
            "range": "± 257220.96044435984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3531940.510752688,
            "unit": "ns",
            "range": "± 256864.36662851326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5727735.610526316,
            "unit": "ns",
            "range": "± 380672.44580544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27315333.02222222,
            "unit": "ns",
            "range": "± 1674167.4575088678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6809291.621052631,
            "unit": "ns",
            "range": "± 520317.92215633794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32436957.597938143,
            "unit": "ns",
            "range": "± 3202096.680437144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7083442.026154892,
            "unit": "ns",
            "range": "± 164813.95670353383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2063688.559279057,
            "unit": "ns",
            "range": "± 79974.50574660506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358359.5459635416,
            "unit": "ns",
            "range": "± 23214.039827634024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2880629.5850883154,
            "unit": "ns",
            "range": "± 72240.47529733584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919064.9653862847,
            "unit": "ns",
            "range": "± 18913.726856589197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788468.5300292969,
            "unit": "ns",
            "range": "± 17795.84268301993"
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
          "id": "11585f9a7385ff8790a5174038abea7a0bdb91c9",
          "message": "Merge pull request #2943 from greymistcube/refactor/vote-encoding\n\n♻️ Updated `Vote.Encoded` and `Proposal.Encoded`",
          "timestamp": "2023-03-15T17:57:15+09:00",
          "tree_id": "5f1e0dc67d0e5ebed283e11d5b73d4e0dc48ab97",
          "url": "https://github.com/planetarium/libplanet/commit/11585f9a7385ff8790a5174038abea7a0bdb91c9"
        },
        "date": 1678871484446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7647959.466666667,
            "unit": "ns",
            "range": "± 69541.4581905403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20515959.5,
            "unit": "ns",
            "range": "± 356471.66987611604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47375684.6,
            "unit": "ns",
            "range": "± 1085588.7403305466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95323531.59523809,
            "unit": "ns",
            "range": "± 2211734.5807703715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 197322661.26666668,
            "unit": "ns",
            "range": "± 3212214.0749045326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57590.436170212764,
            "unit": "ns",
            "range": "± 8639.762941738063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204491.62631578947,
            "unit": "ns",
            "range": "± 20839.599773713395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196307.0779220779,
            "unit": "ns",
            "range": "± 10074.177300570103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168416.6170212766,
            "unit": "ns",
            "range": "± 12548.74966149233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11591969.384615384,
            "unit": "ns",
            "range": "± 82839.53689165022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9272595.75,
            "unit": "ns",
            "range": "± 77695.17039409967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18075.539325842696,
            "unit": "ns",
            "range": "± 2098.9301498630407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50992.91935483871,
            "unit": "ns",
            "range": "± 6559.076788036593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47474.306818181816,
            "unit": "ns",
            "range": "± 3339.245714119182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106810.94086021505,
            "unit": "ns",
            "range": "± 16046.09471075667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6128.318681318681,
            "unit": "ns",
            "range": "± 889.2179945087942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17136.114942528737,
            "unit": "ns",
            "range": "± 1628.4508005740931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491980.1368421053,
            "unit": "ns",
            "range": "± 128561.38111453541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2713538.210526316,
            "unit": "ns",
            "range": "± 116724.71142955132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2383358.3157894737,
            "unit": "ns",
            "range": "± 181725.34203608823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5824843.820512821,
            "unit": "ns",
            "range": "± 203688.10030119345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3200955.590909091,
            "unit": "ns",
            "range": "± 104512.45438353562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4950687.40625,
            "unit": "ns",
            "range": "± 217126.5848154985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23111779.138888888,
            "unit": "ns",
            "range": "± 765295.7370255222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6148425.010752688,
            "unit": "ns",
            "range": "± 342361.4247713796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27145882.46969697,
            "unit": "ns",
            "range": "± 861062.0441960571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6128184.502083333,
            "unit": "ns",
            "range": "± 84320.53198842805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847761.6092447916,
            "unit": "ns",
            "range": "± 13070.12558570205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1254598.3154947916,
            "unit": "ns",
            "range": "± 9975.768261972014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583815.540885417,
            "unit": "ns",
            "range": "± 24797.29657310974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 759852.2400390625,
            "unit": "ns",
            "range": "± 3678.6879531590644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 705454.6608723958,
            "unit": "ns",
            "range": "± 4294.46914294268"
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
          "id": "3be11d61b46fb602d283f1817888249aeeb40115",
          "message": "Merge pull request #2944 from greymistcube/release/0.51.2\n\n🚀 Release 0.51.2",
          "timestamp": "2023-03-15T18:19:25+09:00",
          "tree_id": "8ea7ba6864a0af3ce8fc71e60b7c98bcdac8f132",
          "url": "https://github.com/planetarium/libplanet/commit/3be11d61b46fb602d283f1817888249aeeb40115"
        },
        "date": 1678872988396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9002977.452380951,
            "unit": "ns",
            "range": "± 212527.77565755404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22847071.895833332,
            "unit": "ns",
            "range": "± 899268.7802390846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53445212.675675675,
            "unit": "ns",
            "range": "± 1811737.8381438705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108824301,
            "unit": "ns",
            "range": "± 1936052.2992832605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 220934672.96,
            "unit": "ns",
            "range": "± 5692095.797462313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74190.09139784946,
            "unit": "ns",
            "range": "± 6541.818338891384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231882.04736842104,
            "unit": "ns",
            "range": "± 25867.30187501095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239422.13684210528,
            "unit": "ns",
            "range": "± 41115.529209313674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194454.61224489796,
            "unit": "ns",
            "range": "± 16838.196868155934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12298663.125,
            "unit": "ns",
            "range": "± 212741.92899626063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10098181.55263158,
            "unit": "ns",
            "range": "± 340412.60699680616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22387.567010309278,
            "unit": "ns",
            "range": "± 3405.997987335529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64505.3125,
            "unit": "ns",
            "range": "± 8981.650050387823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61045.42857142857,
            "unit": "ns",
            "range": "± 6096.544373575007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119514.36559139784,
            "unit": "ns",
            "range": "± 15444.21245601825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7819.367346938776,
            "unit": "ns",
            "range": "± 1234.4539373580808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24545.44623655914,
            "unit": "ns",
            "range": "± 3722.62256307003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534151.8404255318,
            "unit": "ns",
            "range": "± 112260.31007663014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2795318.6153846155,
            "unit": "ns",
            "range": "± 106837.61289335856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2469873.414893617,
            "unit": "ns",
            "range": "± 224663.12952198225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6046964.4,
            "unit": "ns",
            "range": "± 213905.00854270466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3548731.87628866,
            "unit": "ns",
            "range": "± 284328.1411530471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5687593.136363637,
            "unit": "ns",
            "range": "± 611185.7440907774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26569862.78301887,
            "unit": "ns",
            "range": "± 1108314.959069404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6878642.897959184,
            "unit": "ns",
            "range": "± 548773.869385003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31410671.924657535,
            "unit": "ns",
            "range": "± 1558069.790093035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6564265.324344758,
            "unit": "ns",
            "range": "± 297818.85020018107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059665.3178013393,
            "unit": "ns",
            "range": "± 21993.547431660732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1310664.9142127405,
            "unit": "ns",
            "range": "± 10351.935507663604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2419421.7607421875,
            "unit": "ns",
            "range": "± 27844.762870262177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 771235.5434194711,
            "unit": "ns",
            "range": "± 4859.546137024747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706899.0434895833,
            "unit": "ns",
            "range": "± 9306.010033638562"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "254786a1d96265e39eb3c9f9a8926385cd88d6cb",
          "message": "Merge pull request #2945 from greymistcube/prepare/0.51.3",
          "timestamp": "2023-03-16T10:19:00+09:00",
          "tree_id": "47dbbdaffe5d3c55e1f6518e77cde938901434ba",
          "url": "https://github.com/planetarium/libplanet/commit/254786a1d96265e39eb3c9f9a8926385cd88d6cb"
        },
        "date": 1678930702394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8514104.142857144,
            "unit": "ns",
            "range": "± 106504.15455230419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21762844.4,
            "unit": "ns",
            "range": "± 389467.79574105993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54524240.10869565,
            "unit": "ns",
            "range": "± 1250776.1153501577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 118434114.94117647,
            "unit": "ns",
            "range": "± 4778036.22555335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 242753146.76842105,
            "unit": "ns",
            "range": "± 15224384.801187241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70907.75531914894,
            "unit": "ns",
            "range": "± 9985.31663250172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231558.01086956522,
            "unit": "ns",
            "range": "± 30724.194971881854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253566.2415730337,
            "unit": "ns",
            "range": "± 36619.899456048384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218393.39130434784,
            "unit": "ns",
            "range": "± 31473.72958881444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13514252.878787879,
            "unit": "ns",
            "range": "± 877429.9140970478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10623008.712121213,
            "unit": "ns",
            "range": "± 732273.4107692132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24892.304347826088,
            "unit": "ns",
            "range": "± 3706.994476555321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68371.75274725274,
            "unit": "ns",
            "range": "± 15252.14411564151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60139.85393258427,
            "unit": "ns",
            "range": "± 6004.509668026346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117688.28723404255,
            "unit": "ns",
            "range": "± 17837.15757505858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6994.025773195876,
            "unit": "ns",
            "range": "± 1048.1634543013747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16645.423076923078,
            "unit": "ns",
            "range": "± 1523.1458180049547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1603309.574468085,
            "unit": "ns",
            "range": "± 148152.95667336145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2791455.3055555555,
            "unit": "ns",
            "range": "± 89642.87998395774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2560078.803030303,
            "unit": "ns",
            "range": "± 225571.3069480562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6235340.448717949,
            "unit": "ns",
            "range": "± 318224.4815486081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3558522.3333333335,
            "unit": "ns",
            "range": "± 41749.060689125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5598258.707865168,
            "unit": "ns",
            "range": "± 647176.1560399288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24413613.589743588,
            "unit": "ns",
            "range": "± 839075.6003156945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6529109.166666667,
            "unit": "ns",
            "range": "± 283320.20029779966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30407440.052083332,
            "unit": "ns",
            "range": "± 2138384.5613540774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7948816.544020433,
            "unit": "ns",
            "range": "± 324544.3219490786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2304905.8952105977,
            "unit": "ns",
            "range": "± 57132.60905094981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444876.746495864,
            "unit": "ns",
            "range": "± 45087.97611335745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3526872.33328125,
            "unit": "ns",
            "range": "± 89908.15337671842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887393.6361490885,
            "unit": "ns",
            "range": "± 22400.477724306184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797870.9749098558,
            "unit": "ns",
            "range": "± 10660.140386771362"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4df3b19c4b729d103e7b6b0953cdad9e5701263",
          "message": "Merge pull request #2956 from OnedgeLee/fix/dealer-socket-ipv6\n\nFix `ResolveNetMQAddressAsync` to return IPv4",
          "timestamp": "2023-03-17T17:38:40+09:00",
          "tree_id": "be13a186e8a16afc326d2a53fe070fad1092e816",
          "url": "https://github.com/planetarium/libplanet/commit/d4df3b19c4b729d103e7b6b0953cdad9e5701263"
        },
        "date": 1679043858915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9403209.235632183,
            "unit": "ns",
            "range": "± 512435.73987670627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23466833.005263157,
            "unit": "ns",
            "range": "± 1495658.1842897928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 61712419.60824742,
            "unit": "ns",
            "range": "± 4131056.8383182343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113471992.89361702,
            "unit": "ns",
            "range": "± 12392541.532562679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 257002180.82222223,
            "unit": "ns",
            "range": "± 42223137.25568937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85285.22727272728,
            "unit": "ns",
            "range": "± 13532.03487915775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220102.71505376344,
            "unit": "ns",
            "range": "± 23300.780752383394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220904.65217391305,
            "unit": "ns",
            "range": "± 19404.538583432724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204523.6847826087,
            "unit": "ns",
            "range": "± 20199.187884300212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13271464.134408602,
            "unit": "ns",
            "range": "± 953284.3279690413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10382608.761904761,
            "unit": "ns",
            "range": "± 554352.1950873791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25450.263157894737,
            "unit": "ns",
            "range": "± 5134.918462984642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62617.798969072166,
            "unit": "ns",
            "range": "± 9476.356408149166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63871.82978723404,
            "unit": "ns",
            "range": "± 7037.589144015399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140918.51063829788,
            "unit": "ns",
            "range": "± 21260.50660173109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10430.291666666666,
            "unit": "ns",
            "range": "± 1160.7346395747702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23391.989361702126,
            "unit": "ns",
            "range": "± 4241.099242511526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1882849.058139535,
            "unit": "ns",
            "range": "± 305519.5120612682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4017805.3529411764,
            "unit": "ns",
            "range": "± 1330035.7697567109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3539791.659090909,
            "unit": "ns",
            "range": "± 1128849.1125127813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7340796.873684211,
            "unit": "ns",
            "range": "± 683886.5537799574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683206.71,
            "unit": "ns",
            "range": "± 379463.5927896032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5675751.827956989,
            "unit": "ns",
            "range": "± 505799.25929870864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27756689.940860216,
            "unit": "ns",
            "range": "± 2139754.9815627127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6538451.373333333,
            "unit": "ns",
            "range": "± 315962.7467758328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32278889.91758242,
            "unit": "ns",
            "range": "± 3088743.566252217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7276223.725911458,
            "unit": "ns",
            "range": "± 102154.32180071875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2153549.5133522726,
            "unit": "ns",
            "range": "± 91019.76016828674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1474394.9083881578,
            "unit": "ns",
            "range": "± 125803.00773431848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3039773.8500079717,
            "unit": "ns",
            "range": "± 345195.13340504013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026820.9416579413,
            "unit": "ns",
            "range": "± 73771.49635243184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874918.0296660633,
            "unit": "ns",
            "range": "± 45831.61261707932"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee01f32a11e460bc94de0d135e30e7fd6e9f122b",
          "message": "Merge pull request #2960 from OnedgeLee/release/0.51.3\n\n🚀 Release 0.51.3",
          "timestamp": "2023-03-17T18:02:24+09:00",
          "tree_id": "0e5ef6e39328e71b5e04266b0f2f1b9e4003d975",
          "url": "https://github.com/planetarium/libplanet/commit/ee01f32a11e460bc94de0d135e30e7fd6e9f122b"
        },
        "date": 1679044992711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10121189.271084337,
            "unit": "ns",
            "range": "± 1902074.1027077253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21548250.82183908,
            "unit": "ns",
            "range": "± 2187233.2595620286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51451467.85185185,
            "unit": "ns",
            "range": "± 1377225.7755120143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103732900.47058824,
            "unit": "ns",
            "range": "± 3313724.9615932447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224732974.56451613,
            "unit": "ns",
            "range": "± 10119544.690238357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72836.05747126437,
            "unit": "ns",
            "range": "± 8848.347399710352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230993.29787234042,
            "unit": "ns",
            "range": "± 32399.492072077264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211161.2558139535,
            "unit": "ns",
            "range": "± 20006.214895074656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200699.01041666666,
            "unit": "ns",
            "range": "± 23858.83965546425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12884365.611111112,
            "unit": "ns",
            "range": "± 712393.8528349202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10087191.357142856,
            "unit": "ns",
            "range": "± 288001.028960638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21021.350515463917,
            "unit": "ns",
            "range": "± 4163.614040213034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57134.05376344086,
            "unit": "ns",
            "range": "± 7222.71963767592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51849.744897959186,
            "unit": "ns",
            "range": "± 7839.9771473752035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129249,
            "unit": "ns",
            "range": "± 16707.66582015258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7679.03125,
            "unit": "ns",
            "range": "± 1208.6775239524789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21790.418367346938,
            "unit": "ns",
            "range": "± 3440.1990440001546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1787723.9204545454,
            "unit": "ns",
            "range": "± 309605.28244037135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2889359.442857143,
            "unit": "ns",
            "range": "± 139623.9540936666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2632509.1063829786,
            "unit": "ns",
            "range": "± 268509.98425210157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6247559.402777778,
            "unit": "ns",
            "range": "± 299605.08470276505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3286235.0256410255,
            "unit": "ns",
            "range": "± 113563.8429700708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5662711.1,
            "unit": "ns",
            "range": "± 705859.4115294113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26533968.135416668,
            "unit": "ns",
            "range": "± 2059034.6334976475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6591932,
            "unit": "ns",
            "range": "± 623040.1124997892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30274582.354166668,
            "unit": "ns",
            "range": "± 2131556.876221361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6905499.297092014,
            "unit": "ns",
            "range": "± 229997.6684340677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929385.5707632212,
            "unit": "ns",
            "range": "± 30269.384871090355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303220.5972055288,
            "unit": "ns",
            "range": "± 6561.173987026542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2920156.946875,
            "unit": "ns",
            "range": "± 95424.25865200878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 883199.6281550481,
            "unit": "ns",
            "range": "± 12497.978951492085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793797.9891183035,
            "unit": "ns",
            "range": "± 8006.630868877263"
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
          "id": "099fc9fa047dd46dff322e5d8eb3962a281c92e8",
          "message": "Merge pull request #2965 from OnedgeLee/prepare/0.51.4\n\n🔧 Prepare 0.51.4",
          "timestamp": "2023-03-21T13:40:30+09:00",
          "tree_id": "04b511c8d3d9638abf78f6ec1d85b047e8def794",
          "url": "https://github.com/planetarium/libplanet/commit/099fc9fa047dd46dff322e5d8eb3962a281c92e8"
        },
        "date": 1679374581407,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8277612.066037736,
            "unit": "ns",
            "range": "± 344940.05452260555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20421705.076923076,
            "unit": "ns",
            "range": "± 197980.58638978616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51354583.35135135,
            "unit": "ns",
            "range": "± 1730984.55752519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101243209.83783785,
            "unit": "ns",
            "range": "± 3380247.830565111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204448607.66666666,
            "unit": "ns",
            "range": "± 3675625.176158835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74607.58333333333,
            "unit": "ns",
            "range": "± 13600.623350007603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201364.010989011,
            "unit": "ns",
            "range": "± 11516.213653892504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215893.91304347827,
            "unit": "ns",
            "range": "± 15481.195154442628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228987.48888888888,
            "unit": "ns",
            "range": "± 22119.34989113868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13053632.340425532,
            "unit": "ns",
            "range": "± 881889.1601422934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10468860.364864865,
            "unit": "ns",
            "range": "± 353070.7970908921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25368.954545454544,
            "unit": "ns",
            "range": "± 4714.413972871568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60193.358695652176,
            "unit": "ns",
            "range": "± 6922.93541498355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59874.76315789474,
            "unit": "ns",
            "range": "± 9109.145117432081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125784.38888888889,
            "unit": "ns",
            "range": "± 13841.060009006134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8327.557894736841,
            "unit": "ns",
            "range": "± 840.4075976115283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21431.364583333332,
            "unit": "ns",
            "range": "± 3883.217437342368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677704.308988764,
            "unit": "ns",
            "range": "± 203911.54585137448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2897889.14893617,
            "unit": "ns",
            "range": "± 111844.02660984367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2610333.974226804,
            "unit": "ns",
            "range": "± 231463.5814884049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6315102.266666667,
            "unit": "ns",
            "range": "± 186692.17450099293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307230.0975609757,
            "unit": "ns",
            "range": "± 96021.84313472765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5365938.802469136,
            "unit": "ns",
            "range": "± 281058.4949560064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24592203.78125,
            "unit": "ns",
            "range": "± 1480366.972201016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6405111.458333333,
            "unit": "ns",
            "range": "± 390429.17616044596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30647997.727272727,
            "unit": "ns",
            "range": "± 1262519.5713688217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6027647.229166667,
            "unit": "ns",
            "range": "± 72199.64773951778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857119.795703125,
            "unit": "ns",
            "range": "± 20596.540719750476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285356.8041735198,
            "unit": "ns",
            "range": "± 27433.16282171286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2832636.5638020835,
            "unit": "ns",
            "range": "± 60407.08414024769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885682.5182059152,
            "unit": "ns",
            "range": "± 14567.887666073519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741613.5569661459,
            "unit": "ns",
            "range": "± 7637.619182163807"
          }
        ]
      }
    ]
  }
}