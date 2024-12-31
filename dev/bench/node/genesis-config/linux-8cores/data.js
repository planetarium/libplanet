window.BENCHMARK_DATA = {
  "lastUpdate": 1735609822154,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "439d3da8dea7c8e5aad988c422f93311b3673540",
          "message": "test: add unit test for newly added feature",
          "timestamp": "2024-12-30T20:38:47+09:00",
          "tree_id": "d52a60d4d69dbf788cec93bacb199868f821ed8a",
          "url": "https://github.com/planetarium/libplanet/commit/439d3da8dea7c8e5aad988c422f93311b3673540"
        },
        "date": 1735559246259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10469706,
            "unit": "ns",
            "range": "± 55891.16434608907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27377758.533333335,
            "unit": "ns",
            "range": "± 169869.54792128268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69355155.43333334,
            "unit": "ns",
            "range": "± 251274.5000033306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141113757.43333334,
            "unit": "ns",
            "range": "± 914808.7985808422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290166941.35714287,
            "unit": "ns",
            "range": "± 952984.5948346946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202258.8125,
            "unit": "ns",
            "range": "± 5597.840196623648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191298.10294117648,
            "unit": "ns",
            "range": "± 8796.873084447212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167285.6,
            "unit": "ns",
            "range": "± 3088.7225468514603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3071377.9285714286,
            "unit": "ns",
            "range": "± 24777.651311877144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2756072.769230769,
            "unit": "ns",
            "range": "± 27005.63653867419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13083.902173913044,
            "unit": "ns",
            "range": "± 899.4894652063471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58822.469879518074,
            "unit": "ns",
            "range": "± 3076.0036329125896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50051.846153846156,
            "unit": "ns",
            "range": "± 594.6396452409708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56537.744897959186,
            "unit": "ns",
            "range": "± 9653.681448360361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2700.185567010309,
            "unit": "ns",
            "range": "± 305.93798152488176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13130.123711340206,
            "unit": "ns",
            "range": "± 2572.162215666568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743137.9609375,
            "unit": "ns",
            "range": "± 3055.579259756947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211720.9900841345,
            "unit": "ns",
            "range": "± 1442.439746800992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771020.6056780134,
            "unit": "ns",
            "range": "± 933.0270962041727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909260.538783482,
            "unit": "ns",
            "range": "± 1419.697706079418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612370.1644810268,
            "unit": "ns",
            "range": "± 598.8522285130166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570535.0964704241,
            "unit": "ns",
            "range": "± 982.1935410120972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2421676.6,
            "unit": "ns",
            "range": "± 39808.545839160855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2542290.888888889,
            "unit": "ns",
            "range": "± 49035.375969370485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3050213,
            "unit": "ns",
            "range": "± 40820.253810367925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2597448,
            "unit": "ns",
            "range": "± 45073.98666795358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3233584.6153846155,
            "unit": "ns",
            "range": "± 41415.18173033182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015683.4189189189,
            "unit": "ns",
            "range": "± 47725.61277396939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968990.4117647058,
            "unit": "ns",
            "range": "± 63253.9805078138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666553.9857142856,
            "unit": "ns",
            "range": "± 80135.46008243156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8307287.630434782,
            "unit": "ns",
            "range": "± 194657.57627347574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32481.766666666666,
            "unit": "ns",
            "range": "± 418.8909620596249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "557e951d598137f08497e64b315864f439cc67bc",
          "message": "test: add unit test for newly added feature",
          "timestamp": "2024-12-30T21:06:46+09:00",
          "tree_id": "38f1daf1f12dc4975098f9541c6ef39e88721186",
          "url": "https://github.com/planetarium/libplanet/commit/557e951d598137f08497e64b315864f439cc67bc"
        },
        "date": 1735560986704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10886377.566666666,
            "unit": "ns",
            "range": "± 95799.82267614565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27536494.766666666,
            "unit": "ns",
            "range": "± 104617.73336462793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71653330.6,
            "unit": "ns",
            "range": "± 345697.9770643734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139043997.33333334,
            "unit": "ns",
            "range": "± 621748.0967119662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290216172.1333333,
            "unit": "ns",
            "range": "± 868320.5212392046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209230.34375,
            "unit": "ns",
            "range": "± 14024.762407840697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219158.58163265305,
            "unit": "ns",
            "range": "± 18744.163850987028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176743.79381443298,
            "unit": "ns",
            "range": "± 10319.566802861025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3274024.2666666666,
            "unit": "ns",
            "range": "± 29662.629886457344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875229.966666667,
            "unit": "ns",
            "range": "± 40791.121824426926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20392.88775510204,
            "unit": "ns",
            "range": "± 4048.918411978541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77513.89,
            "unit": "ns",
            "range": "± 18506.08375910173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52794.12903225807,
            "unit": "ns",
            "range": "± 2414.5198313256037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62405.795918367345,
            "unit": "ns",
            "range": "± 9538.479184534483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3240.1702127659573,
            "unit": "ns",
            "range": "± 498.2754050906324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15046.53125,
            "unit": "ns",
            "range": "± 2815.624172936382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743412.2053571427,
            "unit": "ns",
            "range": "± 10723.606188180125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209172.5783854167,
            "unit": "ns",
            "range": "± 2209.6491746821107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767978.2823567708,
            "unit": "ns",
            "range": "± 1669.2155740275043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949101.51171875,
            "unit": "ns",
            "range": "± 1432.357845343361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615259.6600911458,
            "unit": "ns",
            "range": "± 1281.41727873078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584865.4897460938,
            "unit": "ns",
            "range": "± 725.651189393131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2498167.9583333335,
            "unit": "ns",
            "range": "± 64494.7481693895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567122.9,
            "unit": "ns",
            "range": "± 75718.12473188186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3127307.8684210526,
            "unit": "ns",
            "range": "± 69127.2430620282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2604682.6621621624,
            "unit": "ns",
            "range": "± 86596.77783539623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3309591.0555555555,
            "unit": "ns",
            "range": "± 69712.69790696182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1060900,
            "unit": "ns",
            "range": "± 72470.86094079468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2017344.3181818181,
            "unit": "ns",
            "range": "± 94233.17116732859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1756121.935897436,
            "unit": "ns",
            "range": "± 90208.00492114312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8555080.635135135,
            "unit": "ns",
            "range": "± 283187.92270800617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32642.428571428572,
            "unit": "ns",
            "range": "± 554.9319382086023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "a56650d5f57a9e1b6e340b7f43c429c71db7b70c",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2024-12-31T10:40:45+09:00",
          "tree_id": "85dde7ffac6607f294047e23d5fecedd543934c1",
          "url": "https://github.com/planetarium/libplanet/commit/a56650d5f57a9e1b6e340b7f43c429c71db7b70c"
        },
        "date": 1735609795337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10460241.2,
            "unit": "ns",
            "range": "± 102262.63140505292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27167730.714285713,
            "unit": "ns",
            "range": "± 259617.30464797857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70639294.83333333,
            "unit": "ns",
            "range": "± 491942.3600210651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139058477.13333333,
            "unit": "ns",
            "range": "± 635695.2461766191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285326593.76666665,
            "unit": "ns",
            "range": "± 1124465.3037667323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200929.4,
            "unit": "ns",
            "range": "± 7047.449539754409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196916.80898876404,
            "unit": "ns",
            "range": "± 10803.326526706742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169701.39130434784,
            "unit": "ns",
            "range": "± 6516.285425261716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087224.9,
            "unit": "ns",
            "range": "± 56692.16583923088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2830255.1923076925,
            "unit": "ns",
            "range": "± 27328.9496486315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13809.5625,
            "unit": "ns",
            "range": "± 1643.9986221821605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61206.2688172043,
            "unit": "ns",
            "range": "± 4805.001350811431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52674.68518518518,
            "unit": "ns",
            "range": "± 2075.3654811029646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65245.802083333336,
            "unit": "ns",
            "range": "± 7282.321355779196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3010.5,
            "unit": "ns",
            "range": "± 416.5159369978487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16860.79,
            "unit": "ns",
            "range": "± 4218.900728803055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3813671.4734933036,
            "unit": "ns",
            "range": "± 7016.456380618908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205191.1670572916,
            "unit": "ns",
            "range": "± 2783.3407055593166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759014.748828125,
            "unit": "ns",
            "range": "± 2526.9277075914856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909831.1131310095,
            "unit": "ns",
            "range": "± 985.0958180160819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642653.6330217634,
            "unit": "ns",
            "range": "± 376.91640770462016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575575.2959635417,
            "unit": "ns",
            "range": "± 943.2463393965941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2493802.25,
            "unit": "ns",
            "range": "± 63728.33991810387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625373.388888889,
            "unit": "ns",
            "range": "± 86740.67460631563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3039353.933333333,
            "unit": "ns",
            "range": "± 39366.51374213271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638067.6363636362,
            "unit": "ns",
            "range": "± 63345.00155012455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3285552.5384615385,
            "unit": "ns",
            "range": "± 38158.56959149846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037067.2252747252,
            "unit": "ns",
            "range": "± 58461.81706893368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1958439.0897435897,
            "unit": "ns",
            "range": "± 67575.49565669728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702096.611111111,
            "unit": "ns",
            "range": "± 70848.04488125876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8179213.310344827,
            "unit": "ns",
            "range": "± 237698.72020586772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32277.233333333334,
            "unit": "ns",
            "range": "± 562.1116394792899"
          }
        ]
      }
    ]
  }
}