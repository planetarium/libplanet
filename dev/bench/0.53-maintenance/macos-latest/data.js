window.BENCHMARK_DATA = {
  "lastUpdate": 1679989708715,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d8d5ed9b9406362876512cf8ef4b393304225b72",
          "message": "Version bump",
          "timestamp": "2023-03-27T17:58:08+09:00",
          "tree_id": "3dbd7bd8fcd4b144c04a448633d6660bc6df5655",
          "url": "https://github.com/planetarium/libplanet/commit/d8d5ed9b9406362876512cf8ef4b393304225b72"
        },
        "date": 1679908571835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8988346.652173912,
            "unit": "ns",
            "range": "± 504995.6929134884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21262707.915384617,
            "unit": "ns",
            "range": "± 984047.3282265171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50749275.38888889,
            "unit": "ns",
            "range": "± 854801.4591011859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108728424.40526316,
            "unit": "ns",
            "range": "± 7600784.717485576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226199689.56382978,
            "unit": "ns",
            "range": "± 13985629.1463243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67473.81868131868,
            "unit": "ns",
            "range": "± 10387.007785240517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268679.6144578313,
            "unit": "ns",
            "range": "± 59301.896418454904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249060.9065934066,
            "unit": "ns",
            "range": "± 42369.838349409205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231614.25531914894,
            "unit": "ns",
            "range": "± 29706.29600618747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14101670.357142856,
            "unit": "ns",
            "range": "± 1135755.0727511202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10442146.14,
            "unit": "ns",
            "range": "± 416698.0867703153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25078.117021276597,
            "unit": "ns",
            "range": "± 3644.9882667374113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61352.14444444444,
            "unit": "ns",
            "range": "± 5482.640113973451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61768.175,
            "unit": "ns",
            "range": "± 2081.0136815861442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126458.75,
            "unit": "ns",
            "range": "± 15250.88821572111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9115.893617021276,
            "unit": "ns",
            "range": "± 937.0411045262224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24287.40625,
            "unit": "ns",
            "range": "± 2685.1820209913635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1462948.852631579,
            "unit": "ns",
            "range": "± 122277.31324912589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2716272.6951219514,
            "unit": "ns",
            "range": "± 94888.20086006992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2478576.3608247424,
            "unit": "ns",
            "range": "± 216534.18023659228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6109011.192982456,
            "unit": "ns",
            "range": "± 264858.32029855665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3535653.4886363638,
            "unit": "ns",
            "range": "± 276716.8255988523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5679004.791666667,
            "unit": "ns",
            "range": "± 465789.6806708935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25436627.240740743,
            "unit": "ns",
            "range": "± 697011.146249613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7074549.4375,
            "unit": "ns",
            "range": "± 669440.7597101331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32134150.666666668,
            "unit": "ns",
            "range": "± 2344679.772619259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6901757.947716346,
            "unit": "ns",
            "range": "± 71337.05864385652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002024.2591145833,
            "unit": "ns",
            "range": "± 11487.855532034277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315263.8462611607,
            "unit": "ns",
            "range": "± 6154.887758390947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3008120.6651475695,
            "unit": "ns",
            "range": "± 98029.22496418023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794767.3770182292,
            "unit": "ns",
            "range": "± 8498.449694700643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805482.9636579241,
            "unit": "ns",
            "range": "± 5553.313203179224"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5",
          "message": "Version bump",
          "timestamp": "2023-03-28T15:44:31+09:00",
          "tree_id": "8ced6279d3c078684d800c452b0866aad06d8d6e",
          "url": "https://github.com/planetarium/libplanet/commit/6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5"
        },
        "date": 1679987355423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9069926.105263159,
            "unit": "ns",
            "range": "± 586847.2062317862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24504104.882978722,
            "unit": "ns",
            "range": "± 2068548.4897286114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58579695.1443299,
            "unit": "ns",
            "range": "± 3722150.5474146763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111392819.80645162,
            "unit": "ns",
            "range": "± 3337102.2757872674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238670561.7857143,
            "unit": "ns",
            "range": "± 3908684.9438070687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84446.14516129032,
            "unit": "ns",
            "range": "± 14720.077059732399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 256023.3383838384,
            "unit": "ns",
            "range": "± 40988.06444755946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251926.1182795699,
            "unit": "ns",
            "range": "± 34353.97704647558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243839.86458333334,
            "unit": "ns",
            "range": "± 28234.707548696457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14098107.595505618,
            "unit": "ns",
            "range": "± 778476.4059455511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11389876.756410256,
            "unit": "ns",
            "range": "± 586787.0934462093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27569.303370786518,
            "unit": "ns",
            "range": "± 3508.257170281195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63289.59782608696,
            "unit": "ns",
            "range": "± 8816.199678463769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62393.70786516854,
            "unit": "ns",
            "range": "± 7143.970539747372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142816.45698924732,
            "unit": "ns",
            "range": "± 23905.708230878023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8797.796703296703,
            "unit": "ns",
            "range": "± 1078.595130451392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23591.91935483871,
            "unit": "ns",
            "range": "± 5666.807561740138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1848867.5103092783,
            "unit": "ns",
            "range": "± 301851.08012224943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3166445.43814433,
            "unit": "ns",
            "range": "± 348372.9746345208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2917716.1082474226,
            "unit": "ns",
            "range": "± 378873.3569900193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7276631.857142857,
            "unit": "ns",
            "range": "± 754190.4140000502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3553079.1030927836,
            "unit": "ns",
            "range": "± 313716.38671064173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5573759.030612245,
            "unit": "ns",
            "range": "± 413782.76327063894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28060157.17816092,
            "unit": "ns",
            "range": "± 1498875.108076484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7001013.744897959,
            "unit": "ns",
            "range": "± 575103.6450369353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32690356.916666668,
            "unit": "ns",
            "range": "± 2662716.698440644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7605226.613984375,
            "unit": "ns",
            "range": "± 760386.5836089584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2452208.4937375993,
            "unit": "ns",
            "range": "± 108158.83876390489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1582466.9926382212,
            "unit": "ns",
            "range": "± 43299.74259820434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689575.8843245967,
            "unit": "ns",
            "range": "± 81650.51184598984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946463.6828876202,
            "unit": "ns",
            "range": "± 44109.01112648954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748993.7108999399,
            "unit": "ns",
            "range": "± 20342.348838587306"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59d402c02d16124c08caec2273d957bc8390aa46",
          "message": "Merge pull request #2997 from tkiapril/release/0.53\n\n🚀 Release 0.53.0",
          "timestamp": "2023-03-27T17:55:04+09:00",
          "tree_id": "470c6e76c5b87e56493e384b6d88818eb6a20a81",
          "url": "https://github.com/planetarium/libplanet/commit/59d402c02d16124c08caec2273d957bc8390aa46"
        },
        "date": 1679987644103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8320594.53,
            "unit": "ns",
            "range": "± 530874.3990953012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22810813.444444444,
            "unit": "ns",
            "range": "± 623635.270058015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53752703.46,
            "unit": "ns",
            "range": "± 1403931.2201444225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108724439.47058824,
            "unit": "ns",
            "range": "± 1737402.4915720134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221734168.33333334,
            "unit": "ns",
            "range": "± 3998364.731164277"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70927.8085106383,
            "unit": "ns",
            "range": "± 10699.678897077796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232564.5625,
            "unit": "ns",
            "range": "± 24181.050999670882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230927.5224719101,
            "unit": "ns",
            "range": "± 22956.913696678872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210038.7688172043,
            "unit": "ns",
            "range": "± 19457.106415048383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13713325.086666666,
            "unit": "ns",
            "range": "± 684545.1137845876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11241821.45959596,
            "unit": "ns",
            "range": "± 704297.3284965561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24516.38172043011,
            "unit": "ns",
            "range": "± 4802.8095171052755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65479.916666666664,
            "unit": "ns",
            "range": "± 10358.83821230798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62368.1947368421,
            "unit": "ns",
            "range": "± 7228.10375073262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138763.14583333334,
            "unit": "ns",
            "range": "± 25501.425387191764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8278.747252747253,
            "unit": "ns",
            "range": "± 820.9771764780825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23302.136842105265,
            "unit": "ns",
            "range": "± 4905.615225065473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1637619.101010101,
            "unit": "ns",
            "range": "± 183951.1440577442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3098210.267676768,
            "unit": "ns",
            "range": "± 273105.42107125354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2641200.3958333335,
            "unit": "ns",
            "range": "± 223551.27628469348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6808192.893939394,
            "unit": "ns",
            "range": "± 471791.2818035461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3453143.77,
            "unit": "ns",
            "range": "± 209975.46589055748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5517860.357142857,
            "unit": "ns",
            "range": "± 294046.0025123986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25332062.772727273,
            "unit": "ns",
            "range": "± 794724.2869675494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6686569.852941177,
            "unit": "ns",
            "range": "± 270395.6551970333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31357808.393617023,
            "unit": "ns",
            "range": "± 1842716.385913605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7390873.385416667,
            "unit": "ns",
            "range": "± 389338.62206972734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2189539.6975097656,
            "unit": "ns",
            "range": "± 39693.30812456655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485326.3991629465,
            "unit": "ns",
            "range": "± 48678.832228865554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3097447.536293144,
            "unit": "ns",
            "range": "± 135743.14994435624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880932.9972737631,
            "unit": "ns",
            "range": "± 20748.795737959408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737786.2422526042,
            "unit": "ns",
            "range": "± 11718.85886428294"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b23ea67a4f8e12dbe144eb3496fb24dd72acef6",
          "message": "Merge pull request #3006 from tkiapril/ci-fix-release\n\nFix build artifact and push",
          "timestamp": "2023-03-28T16:00:25+09:00",
          "tree_id": "8d0931c2bea3b02ea4857e88e0f6295c46f2d265",
          "url": "https://github.com/planetarium/libplanet/commit/8b23ea67a4f8e12dbe144eb3496fb24dd72acef6"
        },
        "date": 1679987733487,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8387764.545454546,
            "unit": "ns",
            "range": "± 164437.3182356172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20954392.4,
            "unit": "ns",
            "range": "± 385951.5673669061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53382571.71428572,
            "unit": "ns",
            "range": "± 691530.767916915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97106420.525,
            "unit": "ns",
            "range": "± 3334796.595940375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205791465.375,
            "unit": "ns",
            "range": "± 3898627.206047342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64709.0625,
            "unit": "ns",
            "range": "± 9896.274122711138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223213.53333333333,
            "unit": "ns",
            "range": "± 13764.790029049487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223396.39285714287,
            "unit": "ns",
            "range": "± 9606.152030062576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187703.70833333334,
            "unit": "ns",
            "range": "± 17698.33832159432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11797848.181818182,
            "unit": "ns",
            "range": "± 277070.53224982886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9801013.545454545,
            "unit": "ns",
            "range": "± 363258.4231066795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21511.947368421053,
            "unit": "ns",
            "range": "± 3655.5775378862254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55268.63917525773,
            "unit": "ns",
            "range": "± 8239.872928563038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52775.72631578947,
            "unit": "ns",
            "range": "± 5720.037085957192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122709.88421052632,
            "unit": "ns",
            "range": "± 14437.313182627113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7977.372340425532,
            "unit": "ns",
            "range": "± 888.6865048811669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20045.231958762888,
            "unit": "ns",
            "range": "± 3545.001732238246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483060.5,
            "unit": "ns",
            "range": "± 113834.54153731737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2787041.2448979593,
            "unit": "ns",
            "range": "± 110764.1438860689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2354864.6326530613,
            "unit": "ns",
            "range": "± 144869.16857594054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5987836.125,
            "unit": "ns",
            "range": "± 234201.3643947597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3382982.2564102565,
            "unit": "ns",
            "range": "± 118252.61681086273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5019474.636363637,
            "unit": "ns",
            "range": "± 108066.63617562017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25397772.066666666,
            "unit": "ns",
            "range": "± 363646.25976322225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6418319.631578947,
            "unit": "ns",
            "range": "± 218057.78900141342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28698507.833333332,
            "unit": "ns",
            "range": "± 494620.9884288989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6650986.449596774,
            "unit": "ns",
            "range": "± 202740.0380502499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936288.1932091345,
            "unit": "ns",
            "range": "± 26833.099041092562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1273317.3675130208,
            "unit": "ns",
            "range": "± 17303.385660102518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539843.1711516203,
            "unit": "ns",
            "range": "± 70515.35843742017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787650.4538922991,
            "unit": "ns",
            "range": "± 5058.375660629625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779205.7375139509,
            "unit": "ns",
            "range": "± 7164.4422126237605"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d737a5965c073aeb8531100d7251e233f78c614",
          "message": "Merge branch 'main' into 0.53-maintenance",
          "timestamp": "2023-03-28T16:30:17+09:00",
          "tree_id": "3420c2bc5a00078db976a2da8519e1623951c323",
          "url": "https://github.com/planetarium/libplanet/commit/2d737a5965c073aeb8531100d7251e233f78c614"
        },
        "date": 1679989664942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8120760.64,
            "unit": "ns",
            "range": "± 185032.0256450848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20240280.076923076,
            "unit": "ns",
            "range": "± 158284.08097597896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52082551.4054054,
            "unit": "ns",
            "range": "± 1733432.3172550441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107209266.53571428,
            "unit": "ns",
            "range": "± 2628589.955134691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220726967.7,
            "unit": "ns",
            "range": "± 7230873.325737786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72108.12637362638,
            "unit": "ns",
            "range": "± 10198.655832617631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239992.10204081633,
            "unit": "ns",
            "range": "± 28591.815471449132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249731.93333333332,
            "unit": "ns",
            "range": "± 31223.984489761297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251281.27083333334,
            "unit": "ns",
            "range": "± 44632.231064552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14116137.75925926,
            "unit": "ns",
            "range": "± 700057.1956607327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10980887.763157895,
            "unit": "ns",
            "range": "± 916666.7142578607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23839.126315789475,
            "unit": "ns",
            "range": "± 4488.087713525674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61213.663043478264,
            "unit": "ns",
            "range": "± 7557.754628001676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55391.37362637363,
            "unit": "ns",
            "range": "± 4903.95693666146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128590.54736842106,
            "unit": "ns",
            "range": "± 21270.48444504703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8145.922222222222,
            "unit": "ns",
            "range": "± 888.5869002387473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22859.860215053763,
            "unit": "ns",
            "range": "± 2096.1399233051848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1547234.1145833333,
            "unit": "ns",
            "range": "± 138188.34740198607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2790410.413043478,
            "unit": "ns",
            "range": "± 107283.02870296474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2662320.6827956988,
            "unit": "ns",
            "range": "± 321691.8549445614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6541194.046511628,
            "unit": "ns",
            "range": "± 379953.09615526017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3614639.163043478,
            "unit": "ns",
            "range": "± 379103.3069343441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5407080.791208792,
            "unit": "ns",
            "range": "± 303256.5239879896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28197029.86597938,
            "unit": "ns",
            "range": "± 1748346.1620632524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7217751.03125,
            "unit": "ns",
            "range": "± 744073.1540095179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37017715.17032967,
            "unit": "ns",
            "range": "± 6078834.691493822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7236331.068536932,
            "unit": "ns",
            "range": "± 152344.8312302494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194189.461309524,
            "unit": "ns",
            "range": "± 50053.889255229464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1415456.8707932692,
            "unit": "ns",
            "range": "± 18378.90669565628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3349180.35859375,
            "unit": "ns",
            "range": "± 73899.83381104759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861360.6591308594,
            "unit": "ns",
            "range": "± 17296.181847785378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784990.9596354166,
            "unit": "ns",
            "range": "± 11406.768778219484"
          }
        ]
      }
    ]
  }
}