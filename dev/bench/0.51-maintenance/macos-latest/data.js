window.BENCHMARK_DATA = {
  "lastUpdate": 1678690446011,
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
      }
    ]
  }
}