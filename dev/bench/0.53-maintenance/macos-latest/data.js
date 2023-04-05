window.BENCHMARK_DATA = {
  "lastUpdate": 1680663621727,
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
          "id": "b2df14c688950b5b85c75d84612e38eb4ace2b65",
          "message": "Version bump",
          "timestamp": "2023-03-28T16:32:59+09:00",
          "tree_id": "8ced6279d3c078684d800c452b0866aad06d8d6e",
          "url": "https://github.com/planetarium/libplanet/commit/b2df14c688950b5b85c75d84612e38eb4ace2b65"
        },
        "date": 1679990030511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9300714.9125,
            "unit": "ns",
            "range": "± 486361.15745838295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22561282.98529412,
            "unit": "ns",
            "range": "± 1073044.0387200944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55695814.96875,
            "unit": "ns",
            "range": "± 1717814.7855978287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112170327.64285715,
            "unit": "ns",
            "range": "± 4077801.9517577374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241126186.60869566,
            "unit": "ns",
            "range": "± 27560858.073029876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75852.2258064516,
            "unit": "ns",
            "range": "± 7943.807561114659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236154.03296703298,
            "unit": "ns",
            "range": "± 20662.267955785464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228841.34210526315,
            "unit": "ns",
            "range": "± 11604.840524025747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223188.2619047619,
            "unit": "ns",
            "range": "± 8165.183226655408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12708312.533333333,
            "unit": "ns",
            "range": "± 212408.29928091212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10223050.6,
            "unit": "ns",
            "range": "± 176249.99896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25879.182795698925,
            "unit": "ns",
            "range": "± 3771.138534535335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64103.56741573034,
            "unit": "ns",
            "range": "± 5419.852653980366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67975.1511627907,
            "unit": "ns",
            "range": "± 9179.195698159849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152213.5,
            "unit": "ns",
            "range": "± 29368.461371843478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9146.270833333334,
            "unit": "ns",
            "range": "± 1406.8780778294872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21552.988764044945,
            "unit": "ns",
            "range": "± 3475.0575027759737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1650577.86,
            "unit": "ns",
            "range": "± 208222.9146270609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2834167.3902439023,
            "unit": "ns",
            "range": "± 94221.52311491204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2538757.716494845,
            "unit": "ns",
            "range": "± 213523.0301692803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6239210.594339622,
            "unit": "ns",
            "range": "± 258592.59396544867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683001.3260869565,
            "unit": "ns",
            "range": "± 354179.4656190096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5497419.010204081,
            "unit": "ns",
            "range": "± 369644.9212200866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27776857.32631579,
            "unit": "ns",
            "range": "± 1548549.0819005687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7020844.755102041,
            "unit": "ns",
            "range": "± 475175.0845844523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32707118.102040816,
            "unit": "ns",
            "range": "± 2413198.7104011904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7417169.400648585,
            "unit": "ns",
            "range": "± 306532.58741564496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2103740.369466146,
            "unit": "ns",
            "range": "± 46654.691656185125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391475.0372596155,
            "unit": "ns",
            "range": "± 17604.698898763665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032452.8018359374,
            "unit": "ns",
            "range": "± 242088.16636600066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934354.6742907072,
            "unit": "ns",
            "range": "± 32070.779555083023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 879333.396077474,
            "unit": "ns",
            "range": "± 12253.531956071713"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a7039b150f1d8641c3fac69a85a074e4dbd9fb6",
          "message": "Merge pull request #3010 from riemannulus/0.53-maintenance\n\n 🔀 Port 0.50.6 to 0.53.1",
          "timestamp": "2023-03-28T17:46:17+09:00",
          "tree_id": "f64408b31c3787ccb81125308b218a2546057403",
          "url": "https://github.com/planetarium/libplanet/commit/0a7039b150f1d8641c3fac69a85a074e4dbd9fb6"
        },
        "date": 1679994234918,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7853644.457142857,
            "unit": "ns",
            "range": "± 253094.36095042207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19900334.279411763,
            "unit": "ns",
            "range": "± 952357.5679855119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50048438.333333336,
            "unit": "ns",
            "range": "± 1864978.023122001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103398172.23469388,
            "unit": "ns",
            "range": "± 4073884.5542917317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208645685.64285713,
            "unit": "ns",
            "range": "± 3635156.363341427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68731.72916666667,
            "unit": "ns",
            "range": "± 9728.767124227825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232232.98888888888,
            "unit": "ns",
            "range": "± 28050.203424223586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220689.46875,
            "unit": "ns",
            "range": "± 26542.947440130672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226700.625,
            "unit": "ns",
            "range": "± 17482.279430873365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12361036.43478261,
            "unit": "ns",
            "range": "± 304102.05952515145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10260541.55263158,
            "unit": "ns",
            "range": "± 227655.71737518077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23766.25773195876,
            "unit": "ns",
            "range": "± 3844.210599173641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64001.563829787236,
            "unit": "ns",
            "range": "± 8480.010961659214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60493.04255319149,
            "unit": "ns",
            "range": "± 8419.574554310278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126651.39361702128,
            "unit": "ns",
            "range": "± 16097.816531441735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8780.543010752688,
            "unit": "ns",
            "range": "± 937.1967209621153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22498.75,
            "unit": "ns",
            "range": "± 2726.2946050792475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1701372.6494845361,
            "unit": "ns",
            "range": "± 269938.623047021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962628.1770833335,
            "unit": "ns",
            "range": "± 172060.25250313332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617876.644329897,
            "unit": "ns",
            "range": "± 238288.47163793186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6417069.29113924,
            "unit": "ns",
            "range": "± 330016.4881549977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3347589.9,
            "unit": "ns",
            "range": "± 162779.1961722017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5586792.824175824,
            "unit": "ns",
            "range": "± 470756.04879599076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25587619.720930234,
            "unit": "ns",
            "range": "± 929398.0170787543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6606816.288888888,
            "unit": "ns",
            "range": "± 507887.43761019805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29812939.486486487,
            "unit": "ns",
            "range": "± 1495629.4771619882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6476545.504595588,
            "unit": "ns",
            "range": "± 129317.78471424167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941745.421123798,
            "unit": "ns",
            "range": "± 14431.707694693405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1263249.1184210526,
            "unit": "ns",
            "range": "± 27940.641134833564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2513039.4268229166,
            "unit": "ns",
            "range": "± 41793.544859291826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787858.4070012019,
            "unit": "ns",
            "range": "± 2156.9097184393954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736052.5908954327,
            "unit": "ns",
            "range": "± 3964.7130622511463"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de35a14d0b35e50e9ebeed8728a2f3c221361d97",
          "message": "Merge pull request #3011 from riemannulus/0.53-maintenance\n\n🚀  Release 0.53.1",
          "timestamp": "2023-03-28T17:48:17+09:00",
          "tree_id": "5327816bb24d6a46b7e74947750e7b5105c5f55e",
          "url": "https://github.com/planetarium/libplanet/commit/de35a14d0b35e50e9ebeed8728a2f3c221361d97"
        },
        "date": 1679994355593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9269294.545454545,
            "unit": "ns",
            "range": "± 227643.53384910224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23802468.269230768,
            "unit": "ns",
            "range": "± 264211.94184945343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59600958.07692308,
            "unit": "ns",
            "range": "± 566853.512677579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118822121.975,
            "unit": "ns",
            "range": "± 4182366.6795039317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242078176.0625,
            "unit": "ns",
            "range": "± 4330603.593837892"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68697.60989010989,
            "unit": "ns",
            "range": "± 6706.9629199819055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240211.98611111112,
            "unit": "ns",
            "range": "± 11829.132514350233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232518.5945945946,
            "unit": "ns",
            "range": "± 10751.138355680487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219179.61224489796,
            "unit": "ns",
            "range": "± 14297.19584475759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13261092.714285715,
            "unit": "ns",
            "range": "± 135717.10832204134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10948827.92857143,
            "unit": "ns",
            "range": "± 160941.40127314578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21197.335164835164,
            "unit": "ns",
            "range": "± 2081.042005362465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63738.09782608696,
            "unit": "ns",
            "range": "± 5561.075915861358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48548.26804123711,
            "unit": "ns",
            "range": "± 3327.661445856359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118929.52061855671,
            "unit": "ns",
            "range": "± 18715.973517503808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5738.25,
            "unit": "ns",
            "range": "± 566.9830221165543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20735.13440860215,
            "unit": "ns",
            "range": "± 2251.116263125369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1793488.5842105264,
            "unit": "ns",
            "range": "± 188023.43297661594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3444221.436781609,
            "unit": "ns",
            "range": "± 222515.220417835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2899382.3595505618,
            "unit": "ns",
            "range": "± 211241.2089353848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7644570.05952381,
            "unit": "ns",
            "range": "± 414536.3271884624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3645380.197674419,
            "unit": "ns",
            "range": "± 134773.59578930086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5739153.660377358,
            "unit": "ns",
            "range": "± 236277.70781254768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25808142.189655174,
            "unit": "ns",
            "range": "± 744189.3695903091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7271173.888888889,
            "unit": "ns",
            "range": "± 241150.30445764703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31925041.18918919,
            "unit": "ns",
            "range": "± 1069743.73946411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7208230.844866072,
            "unit": "ns",
            "range": "± 54344.224732567076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2212542.857872596,
            "unit": "ns",
            "range": "± 16056.627456247747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482813.9881510416,
            "unit": "ns",
            "range": "± 17178.029483751012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3168000.2899639425,
            "unit": "ns",
            "range": "± 31351.04046761521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024978.84375,
            "unit": "ns",
            "range": "± 4453.164709870955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867253.2167271206,
            "unit": "ns",
            "range": "± 3605.139952994936"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08d9132bfee8e672a126af36e410fb3afed7a352",
          "message": "Merge pull request #3012 from riemannulus/0.53-maintenance\n\n🔧  Prepare 0.53.2",
          "timestamp": "2023-03-28T17:51:21+09:00",
          "tree_id": "7d8c64db4eade92724f0287d72f0c6a353e034b8",
          "url": "https://github.com/planetarium/libplanet/commit/08d9132bfee8e672a126af36e410fb3afed7a352"
        },
        "date": 1679994535773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8305302.74137931,
            "unit": "ns",
            "range": "± 238328.50874245813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22278422.223404255,
            "unit": "ns",
            "range": "± 1315919.504019329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55355343.8125,
            "unit": "ns",
            "range": "± 1078910.6622833186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108601957.1904762,
            "unit": "ns",
            "range": "± 3872315.365751238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227067664.7,
            "unit": "ns",
            "range": "± 7880222.927365617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61245.166666666664,
            "unit": "ns",
            "range": "± 8937.984065261988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238106.93406593407,
            "unit": "ns",
            "range": "± 29398.051415320482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243710.95744680852,
            "unit": "ns",
            "range": "± 33852.16817246223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223851.27528089887,
            "unit": "ns",
            "range": "± 25847.802867218015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13071674.253731344,
            "unit": "ns",
            "range": "± 591696.7004499637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10345609.11764706,
            "unit": "ns",
            "range": "± 317987.8114555712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21247.309278350516,
            "unit": "ns",
            "range": "± 4024.077630755962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55552.625,
            "unit": "ns",
            "range": "± 7142.890820138654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61314,
            "unit": "ns",
            "range": "± 5615.604870640196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117556.10309278351,
            "unit": "ns",
            "range": "± 16374.752591314507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7852.380434782609,
            "unit": "ns",
            "range": "± 797.354938302243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23694.385416666668,
            "unit": "ns",
            "range": "± 3111.7271084172485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580549.3969072164,
            "unit": "ns",
            "range": "± 188504.29285769843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2811170.9615384615,
            "unit": "ns",
            "range": "± 114096.00683926302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2488187.4731182796,
            "unit": "ns",
            "range": "± 197598.63473798902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6012481.692982456,
            "unit": "ns",
            "range": "± 249936.04882624038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3687349.1086956523,
            "unit": "ns",
            "range": "± 344485.66485013685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5979879.989130435,
            "unit": "ns",
            "range": "± 695491.3391377144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27947982.10714286,
            "unit": "ns",
            "range": "± 1485440.0472743614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7224916.494623655,
            "unit": "ns",
            "range": "± 777376.0846689111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31480665.39759036,
            "unit": "ns",
            "range": "± 1660078.4843785206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6985929.467578125,
            "unit": "ns",
            "range": "± 160167.20966644384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941709.2864118305,
            "unit": "ns",
            "range": "± 22837.378616862698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302928.7989908855,
            "unit": "ns",
            "range": "± 5437.925859142327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2794228.734825721,
            "unit": "ns",
            "range": "± 40362.849371416596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873203.1486816406,
            "unit": "ns",
            "range": "± 3563.0456134144133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735511.7045522836,
            "unit": "ns",
            "range": "± 5717.917455118225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7356e3db66d1566eb296795721b13f27730a16c4",
          "message": "Merge pull request #3022 from riemannulus/0.53-maintenance\n\n🔀 Port 0.50.7 to 0.53.2",
          "timestamp": "2023-03-29T15:49:11+09:00",
          "tree_id": "82e943ab6bfdba67365883851e29c3374d58d32a",
          "url": "https://github.com/planetarium/libplanet/commit/7356e3db66d1566eb296795721b13f27730a16c4"
        },
        "date": 1680073706584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8506118.192307692,
            "unit": "ns",
            "range": "± 66265.42860771446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20623088.214285713,
            "unit": "ns",
            "range": "± 337653.1786120141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52998678,
            "unit": "ns",
            "range": "± 535285.0301684716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105672460.72222222,
            "unit": "ns",
            "range": "± 1700586.874138759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217608802.30769232,
            "unit": "ns",
            "range": "± 1315498.3965791182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75027.9574468085,
            "unit": "ns",
            "range": "± 8378.138418109864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218216.77777777778,
            "unit": "ns",
            "range": "± 12141.012542254703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209611.75531914894,
            "unit": "ns",
            "range": "± 17174.226871166087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206661.51020408163,
            "unit": "ns",
            "range": "± 17809.438856875924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12623063.92857143,
            "unit": "ns",
            "range": "± 207470.01081702765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10142594.466666667,
            "unit": "ns",
            "range": "± 296836.8052470494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22000.97894736842,
            "unit": "ns",
            "range": "± 3355.513687341336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61008.032608695656,
            "unit": "ns",
            "range": "± 7368.214178872529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61272.333333333336,
            "unit": "ns",
            "range": "± 2823.7684961072578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126050.81720430107,
            "unit": "ns",
            "range": "± 11719.51968980388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9031.773684210526,
            "unit": "ns",
            "range": "± 906.8243096407544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20758,
            "unit": "ns",
            "range": "± 2927.225909589691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1688184.706521739,
            "unit": "ns",
            "range": "± 216818.9962618862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2854064.611111111,
            "unit": "ns",
            "range": "± 130905.3707108271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2611442.836734694,
            "unit": "ns",
            "range": "± 253876.43702647276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6481868.29787234,
            "unit": "ns",
            "range": "± 413351.6269301771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3721167.1,
            "unit": "ns",
            "range": "± 69382.2078251025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5229911.051724138,
            "unit": "ns",
            "range": "± 153207.5074341487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24947375.85,
            "unit": "ns",
            "range": "± 563235.6625068254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6198054.6,
            "unit": "ns",
            "range": "± 228577.3908633082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27692361.815789472,
            "unit": "ns",
            "range": "± 596419.6536763777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6806639.62890625,
            "unit": "ns",
            "range": "± 59650.06539312751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972231.3627232143,
            "unit": "ns",
            "range": "± 24975.13803363625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304135.5115885416,
            "unit": "ns",
            "range": "± 14662.059954733333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2701249.82140625,
            "unit": "ns",
            "range": "± 162789.0134808595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859890.710144043,
            "unit": "ns",
            "range": "± 26715.63319901704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790782.7421223958,
            "unit": "ns",
            "range": "± 13360.269557796239"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4a323ee3312cd72ca15a180c2127af50a436b28",
          "message": "Merge pull request #3027 from limebell/chore/add-missing\n\nAdd missing commit",
          "timestamp": "2023-03-30T15:24:01+09:00",
          "tree_id": "e9e4138353a2808dc8e02aab5bdc269078c1ba27",
          "url": "https://github.com/planetarium/libplanet/commit/c4a323ee3312cd72ca15a180c2127af50a436b28"
        },
        "date": 1680158325660,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7477085.307692308,
            "unit": "ns",
            "range": "± 36488.89254596211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19372293.386363637,
            "unit": "ns",
            "range": "± 716236.9421580522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47106707.21052632,
            "unit": "ns",
            "range": "± 1596183.672726906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94033299.84615384,
            "unit": "ns",
            "range": "± 2528284.924869643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193302098.61764705,
            "unit": "ns",
            "range": "± 3828060.3928468605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56657.93406593407,
            "unit": "ns",
            "range": "± 5959.231654057049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200888.20224719102,
            "unit": "ns",
            "range": "± 13280.05408513406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211993.94086021505,
            "unit": "ns",
            "range": "± 13777.13025622564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190960.3064516129,
            "unit": "ns",
            "range": "± 14877.363767802519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12777732.09375,
            "unit": "ns",
            "range": "± 397082.97642808984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10343382.869565217,
            "unit": "ns",
            "range": "± 257313.04839017754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20249.067010309278,
            "unit": "ns",
            "range": "± 3695.157283828887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55855.37368421053,
            "unit": "ns",
            "range": "± 8562.593921512665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53471.06043956044,
            "unit": "ns",
            "range": "± 4272.7434075617075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114329.17708333333,
            "unit": "ns",
            "range": "± 14017.212591363139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7374.8247422680415,
            "unit": "ns",
            "range": "± 695.4960012212698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18596.72340425532,
            "unit": "ns",
            "range": "± 2564.3135047472547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590941.48,
            "unit": "ns",
            "range": "± 153926.88896864397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2887762.6979166665,
            "unit": "ns",
            "range": "± 179304.47414188314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2552971.826530612,
            "unit": "ns",
            "range": "± 265819.6606425862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6307615.627906977,
            "unit": "ns",
            "range": "± 340219.1994471677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3066583.698412698,
            "unit": "ns",
            "range": "± 140021.72264177035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4732891.111111111,
            "unit": "ns",
            "range": "± 100895.81193773687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23208384.04918033,
            "unit": "ns",
            "range": "± 1017473.7211573973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6124683.5,
            "unit": "ns",
            "range": "± 379794.4705062004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26928654.30487805,
            "unit": "ns",
            "range": "± 969940.7027925268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6724677.530133928,
            "unit": "ns",
            "range": "± 85209.2256474447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1949814.1903645834,
            "unit": "ns",
            "range": "± 29817.572212684947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1233737.8960336538,
            "unit": "ns",
            "range": "± 7736.249075930333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575041.5908854166,
            "unit": "ns",
            "range": "± 30163.57524695587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 760008.196890024,
            "unit": "ns",
            "range": "± 7893.490542809454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701563.5275878906,
            "unit": "ns",
            "range": "± 3762.0346053950843"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62e7fbfe2b13a00510b3110e03f04a8202361a10",
          "message": "Merge pull request #3030 from riemannulus/0.53-maintenance\n\n🚀  Release 0.53.2",
          "timestamp": "2023-03-31T01:40:27+09:00",
          "tree_id": "f8807c957a20862ddfa60f7d2222d184f8957be6",
          "url": "https://github.com/planetarium/libplanet/commit/62e7fbfe2b13a00510b3110e03f04a8202361a10"
        },
        "date": 1680195386679,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8338038.879120879,
            "unit": "ns",
            "range": "± 474327.10926464223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22288574.252873562,
            "unit": "ns",
            "range": "± 4061708.5002522976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52259645.77142857,
            "unit": "ns",
            "range": "± 1710967.5407517075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101251050.91666667,
            "unit": "ns",
            "range": "± 1460940.2421770252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204394386,
            "unit": "ns",
            "range": "± 2094696.0557988067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62211.290322580644,
            "unit": "ns",
            "range": "± 10262.679039989514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197073.70454545456,
            "unit": "ns",
            "range": "± 12321.71935509514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197017.61956521738,
            "unit": "ns",
            "range": "± 12722.734569250944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170149.49425287356,
            "unit": "ns",
            "range": "± 10571.094605567123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11555451.714285715,
            "unit": "ns",
            "range": "± 154397.3375902271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9229088.033333333,
            "unit": "ns",
            "range": "± 238821.39865143248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17134.728260869564,
            "unit": "ns",
            "range": "± 2385.695558736019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54385,
            "unit": "ns",
            "range": "± 7270.539079428327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49484.8969072165,
            "unit": "ns",
            "range": "± 5305.383999777444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104186.41052631578,
            "unit": "ns",
            "range": "± 12789.25014811079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5766.556818181818,
            "unit": "ns",
            "range": "± 852.753233470479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16266.556818181818,
            "unit": "ns",
            "range": "± 1587.0680902757038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479617.5684210525,
            "unit": "ns",
            "range": "± 170849.69924080482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2756328.511111111,
            "unit": "ns",
            "range": "± 152970.86662948693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2398648.4897959186,
            "unit": "ns",
            "range": "± 239239.2022817264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5950336.4130434785,
            "unit": "ns",
            "range": "± 285564.37318532506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3446104.294736842,
            "unit": "ns",
            "range": "± 385949.04002672486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5076783.462962963,
            "unit": "ns",
            "range": "± 204318.26500792254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25752904.3,
            "unit": "ns",
            "range": "± 1246485.7208717049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6461661.978021978,
            "unit": "ns",
            "range": "± 510716.2290821691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29170821.861111112,
            "unit": "ns",
            "range": "± 1431497.349376532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6272352.9625,
            "unit": "ns",
            "range": "± 104754.47080760094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909860.362141927,
            "unit": "ns",
            "range": "± 21336.295900022924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1231682.1065204327,
            "unit": "ns",
            "range": "± 13408.253467176819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569463.8743990385,
            "unit": "ns",
            "range": "± 27823.254687800003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828010.1489633414,
            "unit": "ns",
            "range": "± 8006.054776745144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767034.8820963542,
            "unit": "ns",
            "range": "± 11416.742520030672"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95624b9579b4463f914e45deb791153673adde9c",
          "message": "Merge pull request #3029 from riemannulus/change-blockchain-create-param\n\nGet new parameter for `BlockChain<T>.Create()`",
          "timestamp": "2023-03-31T01:38:22+09:00",
          "tree_id": "dc6eb13acadf577f4752fb875653e855588677b8",
          "url": "https://github.com/planetarium/libplanet/commit/95624b9579b4463f914e45deb791153673adde9c"
        },
        "date": 1680195717163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9394700.43939394,
            "unit": "ns",
            "range": "± 732037.2630706135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25542589.194117647,
            "unit": "ns",
            "range": "± 4851474.767536268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62310044.1627907,
            "unit": "ns",
            "range": "± 13887602.783220585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115118268.06818181,
            "unit": "ns",
            "range": "± 6677455.3285164945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239285128.9117647,
            "unit": "ns",
            "range": "± 10492797.984785898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75385.9382022472,
            "unit": "ns",
            "range": "± 7373.8366431517625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265300.72105263156,
            "unit": "ns",
            "range": "± 34382.29999862279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259055.11111111112,
            "unit": "ns",
            "range": "± 31666.642448561604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227942.1091954023,
            "unit": "ns",
            "range": "± 21873.303285882394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15215090.565656565,
            "unit": "ns",
            "range": "± 1464083.0012718984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11251889.885057472,
            "unit": "ns",
            "range": "± 955894.7612401597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24314.720430107525,
            "unit": "ns",
            "range": "± 2808.1723646683035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74038.5,
            "unit": "ns",
            "range": "± 11447.853972794097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71532.27160493827,
            "unit": "ns",
            "range": "± 6409.225050683479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 153479.86956521738,
            "unit": "ns",
            "range": "± 25764.473628340194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10767.91489361702,
            "unit": "ns",
            "range": "± 1762.1650564653155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27119.206896551725,
            "unit": "ns",
            "range": "± 3442.0517648700325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631332.4591836734,
            "unit": "ns",
            "range": "± 219731.98557038643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2892078.1835443038,
            "unit": "ns",
            "range": "± 149636.17825832608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2635290.276595745,
            "unit": "ns",
            "range": "± 277212.1359479425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6284195.018181819,
            "unit": "ns",
            "range": "± 264478.0033218817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3694459.5,
            "unit": "ns",
            "range": "± 422579.95185591205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5419741.222222222,
            "unit": "ns",
            "range": "± 275109.0398802809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27114989.125,
            "unit": "ns",
            "range": "± 1655369.0126046927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7171083.234042553,
            "unit": "ns",
            "range": "± 625349.8690141457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31380018.051282052,
            "unit": "ns",
            "range": "± 1072588.6626807165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7960790.374561096,
            "unit": "ns",
            "range": "± 502056.2114978415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111945.616455078,
            "unit": "ns",
            "range": "± 37933.46538307781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425263.691328125,
            "unit": "ns",
            "range": "± 37231.808243161344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3361554.3431126643,
            "unit": "ns",
            "range": "± 219373.3668955285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878374.328016493,
            "unit": "ns",
            "range": "± 36285.98334477595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896060.5710611979,
            "unit": "ns",
            "range": "± 25761.48420816154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dafff218f9bcf080846193a34ce4cbc6e6853d91",
          "message": "Merge pull request #3031 from riemannulus/0.53-maintenance\n\n🔧  Prepare 0.53.3",
          "timestamp": "2023-03-31T01:47:46+09:00",
          "tree_id": "97db3519c67c25597ed97e92c6395da6bc61824a",
          "url": "https://github.com/planetarium/libplanet/commit/dafff218f9bcf080846193a34ce4cbc6e6853d91"
        },
        "date": 1680195909225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8423211.966666667,
            "unit": "ns",
            "range": "± 249600.8607331718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22096951.397849463,
            "unit": "ns",
            "range": "± 1373593.8831162164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52968629.4,
            "unit": "ns",
            "range": "± 1559616.9160351546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108840385.5,
            "unit": "ns",
            "range": "± 4922642.817273158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212259641.86842105,
            "unit": "ns",
            "range": "± 3365467.5969201797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76611.38888888889,
            "unit": "ns",
            "range": "± 9456.978058192457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245165.45833333334,
            "unit": "ns",
            "range": "± 33765.57190079445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226632.47826086957,
            "unit": "ns",
            "range": "± 19501.42479775207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206630.43181818182,
            "unit": "ns",
            "range": "± 19103.54756534777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12731255.826086957,
            "unit": "ns",
            "range": "± 315807.71700178174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10100875.26,
            "unit": "ns",
            "range": "± 265732.6447978745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25711.72340425532,
            "unit": "ns",
            "range": "± 4612.756662799268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62095.365979381444,
            "unit": "ns",
            "range": "± 6793.023168155795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62737.78421052632,
            "unit": "ns",
            "range": "± 4969.550034562952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132930.46875,
            "unit": "ns",
            "range": "± 17073.97849357358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9049.294736842105,
            "unit": "ns",
            "range": "± 1387.4745684744976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22147.379120879123,
            "unit": "ns",
            "range": "± 4003.303710229464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1603395.551020408,
            "unit": "ns",
            "range": "± 152455.72855291617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886098.285714286,
            "unit": "ns",
            "range": "± 114059.59160748677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2577103.5206185565,
            "unit": "ns",
            "range": "± 236644.95516688513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6336794.0784313725,
            "unit": "ns",
            "range": "± 256452.44836342218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3605486.6770833335,
            "unit": "ns",
            "range": "± 281657.56112655276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5290678.060975609,
            "unit": "ns",
            "range": "± 277516.09503675066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26160124.40909091,
            "unit": "ns",
            "range": "± 1337308.390847906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6786450.760869565,
            "unit": "ns",
            "range": "± 547097.7884590947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30155061.939393938,
            "unit": "ns",
            "range": "± 2064156.4124722877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6771661.768229167,
            "unit": "ns",
            "range": "± 140705.45177946496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945249.162109375,
            "unit": "ns",
            "range": "± 22547.478253792593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338489.7470495345,
            "unit": "ns",
            "range": "± 38426.441333228606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2504033.345402644,
            "unit": "ns",
            "range": "± 45829.44299086315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786306.9499162947,
            "unit": "ns",
            "range": "± 5985.46999018602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725201.0869140625,
            "unit": "ns",
            "range": "± 5899.755125183051"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20bcd406a8df2ca72829e040ab95b7f7dedca155",
          "message": "Merge pull request #3046 from limebell/chore/fix-logging-53\n\nAdjust consensus loggings",
          "timestamp": "2023-04-03T18:08:38+09:00",
          "tree_id": "b4440e1d84be80722d407fd307bf349bb9acb539",
          "url": "https://github.com/planetarium/libplanet/commit/20bcd406a8df2ca72829e040ab95b7f7dedca155"
        },
        "date": 1680514146183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8258213.888888889,
            "unit": "ns",
            "range": "± 229319.8004021615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20163637.810344826,
            "unit": "ns",
            "range": "± 580930.1901851094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48760696.85714286,
            "unit": "ns",
            "range": "± 742117.9827271514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98502166.16666667,
            "unit": "ns",
            "range": "± 2518995.798957345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201216195.6153846,
            "unit": "ns",
            "range": "± 1442955.364953385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70205.05670103093,
            "unit": "ns",
            "range": "± 12220.953238673963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223351.21264367815,
            "unit": "ns",
            "range": "± 17235.759845151068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229302.16304347827,
            "unit": "ns",
            "range": "± 25870.632074616144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202030.46875,
            "unit": "ns",
            "range": "± 21083.358172765515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12801459.96875,
            "unit": "ns",
            "range": "± 397066.3197872442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10790750.628571428,
            "unit": "ns",
            "range": "± 525015.7934511105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25914.844444444443,
            "unit": "ns",
            "range": "± 2795.7069452725536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70261.2,
            "unit": "ns",
            "range": "± 9413.662197017193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67284.23076923077,
            "unit": "ns",
            "range": "± 9698.592865951596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135522.95744680852,
            "unit": "ns",
            "range": "± 23359.05245027105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8195.787234042553,
            "unit": "ns",
            "range": "± 944.2160868996084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23231.64606741573,
            "unit": "ns",
            "range": "± 2862.375033201378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678804.4897959183,
            "unit": "ns",
            "range": "± 219595.81841278612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2817490.4,
            "unit": "ns",
            "range": "± 99748.84092426003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2622220.97979798,
            "unit": "ns",
            "range": "± 269906.5615214764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6540468.037634409,
            "unit": "ns",
            "range": "± 576791.1672285197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3251284.0714285714,
            "unit": "ns",
            "range": "± 33431.66455384265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5259897.521739131,
            "unit": "ns",
            "range": "± 307363.2755257395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25965222.076086957,
            "unit": "ns",
            "range": "± 1472981.6371170506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6697525.427083333,
            "unit": "ns",
            "range": "± 620477.1356635616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29755686.57792208,
            "unit": "ns",
            "range": "± 1516606.00761639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7170916.414713542,
            "unit": "ns",
            "range": "± 264099.42892130074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2062773.7905560662,
            "unit": "ns",
            "range": "± 66212.00091728101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320118.43359375,
            "unit": "ns",
            "range": "± 18186.941328794917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3129674.3252152423,
            "unit": "ns",
            "range": "± 221662.89964524235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933454.5543212891,
            "unit": "ns",
            "range": "± 18033.401588856108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828103.5919762437,
            "unit": "ns",
            "range": "± 54562.74977861733"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "664f1072f0ee0d4578d59d072e63166c54f193a9",
          "message": "Merge pull request #3047 from limebell/release/0.53.3\n\n🚀 Release 0.53.3",
          "timestamp": "2023-04-03T18:51:07+09:00",
          "tree_id": "1e35e6c59fe736419a8076afcc627d67be75dd32",
          "url": "https://github.com/planetarium/libplanet/commit/664f1072f0ee0d4578d59d072e63166c54f193a9"
        },
        "date": 1680516776587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8739794,
            "unit": "ns",
            "range": "± 186225.16196768064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20508701.076923076,
            "unit": "ns",
            "range": "± 716852.8091484106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55380318.16304348,
            "unit": "ns",
            "range": "± 4607083.246190822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105278870.65714286,
            "unit": "ns",
            "range": "± 4842955.301925031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228312552.59375,
            "unit": "ns",
            "range": "± 10436355.0447416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66972.53191489361,
            "unit": "ns",
            "range": "± 8895.297667327852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232140.64516129033,
            "unit": "ns",
            "range": "± 31406.479955037932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233208.8350515464,
            "unit": "ns",
            "range": "± 27355.963169496372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236475.52173913043,
            "unit": "ns",
            "range": "± 34082.00810616904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14639887.385057472,
            "unit": "ns",
            "range": "± 1675059.151192067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11346888.62371134,
            "unit": "ns",
            "range": "± 750739.0445499113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27887.575268817203,
            "unit": "ns",
            "range": "± 4254.418064830956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76385.9947368421,
            "unit": "ns",
            "range": "± 13379.904729547983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63320.5,
            "unit": "ns",
            "range": "± 5316.298219496409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135574.5618556701,
            "unit": "ns",
            "range": "± 22516.07067176984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7943.785714285715,
            "unit": "ns",
            "range": "± 1110.478998607901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25526.31182795699,
            "unit": "ns",
            "range": "± 3196.994403642865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1578426.9052631578,
            "unit": "ns",
            "range": "± 155125.29001403265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2795126.3333333335,
            "unit": "ns",
            "range": "± 127314.00654769217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2529508.6041666665,
            "unit": "ns",
            "range": "± 209489.3490184106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6165574.192307692,
            "unit": "ns",
            "range": "± 212631.6230110749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3416850.3865979384,
            "unit": "ns",
            "range": "± 215472.5911460317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5487054.276595744,
            "unit": "ns",
            "range": "± 324123.84456250945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26899784.608433735,
            "unit": "ns",
            "range": "± 1427181.9242557401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6766932.717171717,
            "unit": "ns",
            "range": "± 451469.950438882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32203897.347368423,
            "unit": "ns",
            "range": "± 2228380.221796148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7379084.587611607,
            "unit": "ns",
            "range": "± 208392.39352528873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2219436.060649671,
            "unit": "ns",
            "range": "± 47088.19645585961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403322.2076822917,
            "unit": "ns",
            "range": "± 13202.283071066176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3136541.53125,
            "unit": "ns",
            "range": "± 93173.78938177199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975813.1205822172,
            "unit": "ns",
            "range": "± 44787.710250519995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866583.4784765625,
            "unit": "ns",
            "range": "± 61667.535068778285"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b01fee5cd2b9e1d7d01dcb63b6e7abe82f162ddf",
          "message": "Merge pull request #3048 from limebell/release/prepare-0.53.4\n\n🔧 Prepare 0.53.4",
          "timestamp": "2023-04-03T19:07:46+09:00",
          "tree_id": "4792564cb097fb586ec466bed1d1f27d97fdb7bc",
          "url": "https://github.com/planetarium/libplanet/commit/b01fee5cd2b9e1d7d01dcb63b6e7abe82f162ddf"
        },
        "date": 1680517560953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7951178.357142857,
            "unit": "ns",
            "range": "± 134505.93945928253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19336336.8627451,
            "unit": "ns",
            "range": "± 727232.2916914242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49801139.333333336,
            "unit": "ns",
            "range": "± 894614.2128001321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98131557.92857143,
            "unit": "ns",
            "range": "± 1044709.3293546712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196948631.36,
            "unit": "ns",
            "range": "± 5125987.450229808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67437.78125,
            "unit": "ns",
            "range": "± 13065.241947688712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211013.16315789474,
            "unit": "ns",
            "range": "± 17929.20744211388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203482.46808510637,
            "unit": "ns",
            "range": "± 14251.891549765678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179843.68279569893,
            "unit": "ns",
            "range": "± 11238.60202406656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12683250.913043479,
            "unit": "ns",
            "range": "± 295620.0413079282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9933498.210526315,
            "unit": "ns",
            "range": "± 215095.13170651282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20250.18085106383,
            "unit": "ns",
            "range": "± 2456.953424107084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58202.458333333336,
            "unit": "ns",
            "range": "± 10010.489640389771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55089.846153846156,
            "unit": "ns",
            "range": "± 4399.381532097127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120218.92857142857,
            "unit": "ns",
            "range": "± 15546.308024604306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6927.925531914893,
            "unit": "ns",
            "range": "± 581.8629977566164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18285.983870967742,
            "unit": "ns",
            "range": "± 2237.908226607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1557762.9204545454,
            "unit": "ns",
            "range": "± 134587.27618394798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764372.254385965,
            "unit": "ns",
            "range": "± 117961.88593404721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2466471.9777777777,
            "unit": "ns",
            "range": "± 171264.76468145094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6585230.925531914,
            "unit": "ns",
            "range": "± 460657.12541867816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3105565.565217391,
            "unit": "ns",
            "range": "± 118729.59641352225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4858444.05882353,
            "unit": "ns",
            "range": "± 143167.61354931333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22935219.81081081,
            "unit": "ns",
            "range": "± 776883.2236135708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6067749.224719102,
            "unit": "ns",
            "range": "± 348146.2889568822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27718568.02,
            "unit": "ns",
            "range": "± 1383669.512696245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6676448.739583333,
            "unit": "ns",
            "range": "± 101002.92145086575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986092.8914620536,
            "unit": "ns",
            "range": "± 34151.175070145226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343597.1881835938,
            "unit": "ns",
            "range": "± 30551.546706223922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2825649.274639423,
            "unit": "ns",
            "range": "± 29979.42448601076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 894189.5343098958,
            "unit": "ns",
            "range": "± 9702.596460101651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722271.1290364583,
            "unit": "ns",
            "range": "± 11306.149143157114"
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
          "id": "e5b775f2c908829227b50cd3f76fbb1277572dd6",
          "message": "Merge pull request #3052 from tkiapril/release/0.53.4\n\nFix yarn package version resolve & tx export & Release 0.53.4",
          "timestamp": "2023-04-04T16:57:18+09:00",
          "tree_id": "920e9b25b06553bd55cc13430bf2754996ca9c29",
          "url": "https://github.com/planetarium/libplanet/commit/e5b775f2c908829227b50cd3f76fbb1277572dd6"
        },
        "date": 1680596126513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8868077.85,
            "unit": "ns",
            "range": "± 198634.91203058278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23269708.333333332,
            "unit": "ns",
            "range": "± 595248.8003135048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56960945.07692308,
            "unit": "ns",
            "range": "± 1547607.660307403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113384666.11538461,
            "unit": "ns",
            "range": "± 1863902.041203549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219202199.63157895,
            "unit": "ns",
            "range": "± 4849053.179783167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66540.97752808989,
            "unit": "ns",
            "range": "± 5095.331921067843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243683.40625,
            "unit": "ns",
            "range": "± 15083.05617228755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238506.11904761905,
            "unit": "ns",
            "range": "± 12030.629998230834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200221.10256410256,
            "unit": "ns",
            "range": "± 6976.851260813833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13182526.235294119,
            "unit": "ns",
            "range": "± 268560.3803971579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10876332.07142857,
            "unit": "ns",
            "range": "± 178609.39558689957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19191.467391304348,
            "unit": "ns",
            "range": "± 1590.792210210952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61392.857894736844,
            "unit": "ns",
            "range": "± 7199.017564350383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45440.17204301075,
            "unit": "ns",
            "range": "± 2875.2935034443076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103918.54347826086,
            "unit": "ns",
            "range": "± 12983.26366029798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5493.142857142857,
            "unit": "ns",
            "range": "± 581.532430956321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19412.947368421053,
            "unit": "ns",
            "range": "± 2170.2135710590696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1819181.4,
            "unit": "ns",
            "range": "± 174713.93250153668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3248563.875,
            "unit": "ns",
            "range": "± 121944.94977691032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2888845.2448979593,
            "unit": "ns",
            "range": "± 221744.2036249868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7830270.862637362,
            "unit": "ns",
            "range": "± 692227.2928925154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3713310.095238095,
            "unit": "ns",
            "range": "± 128068.15136782132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5816731.5,
            "unit": "ns",
            "range": "± 157468.71821314958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27454596.76470588,
            "unit": "ns",
            "range": "± 527477.1012881186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7575765.818181818,
            "unit": "ns",
            "range": "± 183585.6436366667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30131649.214285713,
            "unit": "ns",
            "range": "± 1537156.2741664082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6971492.6603125,
            "unit": "ns",
            "range": "± 181452.57061203363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2266987.8909040177,
            "unit": "ns",
            "range": "± 26751.955753863298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391982.3377511161,
            "unit": "ns",
            "range": "± 20819.58644276002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2903583.3950520833,
            "unit": "ns",
            "range": "± 22467.09502064548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031840.3513020833,
            "unit": "ns",
            "range": "± 7288.2056675166505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938996.8253255208,
            "unit": "ns",
            "range": "± 7929.251059135137"
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
          "id": "6c17ac655f9eb8f0c8736b0d27181c362fd90c54",
          "message": "Merge pull request #3056 from tkiapril/prepare/0.53.5\n\n🔨 Prepare 0.53.5",
          "timestamp": "2023-04-05T11:44:41+09:00",
          "tree_id": "850e11d88531cbbc0c209aaf41b24521711480e5",
          "url": "https://github.com/planetarium/libplanet/commit/6c17ac655f9eb8f0c8736b0d27181c362fd90c54"
        },
        "date": 1680663574994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7724264.051724138,
            "unit": "ns",
            "range": "± 222214.02126064769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19800665.466666665,
            "unit": "ns",
            "range": "± 316810.09303047933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45925728.61111111,
            "unit": "ns",
            "range": "± 955869.7060140102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93758711,
            "unit": "ns",
            "range": "± 951392.7006733137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191634660.8,
            "unit": "ns",
            "range": "± 3180536.622500949"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57770.42105263158,
            "unit": "ns",
            "range": "± 7732.2557422386035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199968.87234042553,
            "unit": "ns",
            "range": "± 14228.800014376448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209537.11052631578,
            "unit": "ns",
            "range": "± 15265.796044010765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190547.29032258064,
            "unit": "ns",
            "range": "± 14674.090671464513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12354640.23076923,
            "unit": "ns",
            "range": "± 159954.5206150558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10261752.588235294,
            "unit": "ns",
            "range": "± 204284.79142243398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20289.60606060606,
            "unit": "ns",
            "range": "± 3176.7006591622817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52760.739130434784,
            "unit": "ns",
            "range": "± 5253.9719393988435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53112.35567010309,
            "unit": "ns",
            "range": "± 4705.044655273588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116171.55319148937,
            "unit": "ns",
            "range": "± 12651.651529207365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7041.552083333333,
            "unit": "ns",
            "range": "± 653.3160252417806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19107.893617021276,
            "unit": "ns",
            "range": "± 2464.4406472087608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1539492.59,
            "unit": "ns",
            "range": "± 135382.62795641748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860642.6621621624,
            "unit": "ns",
            "range": "± 142361.22202353767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2328421.785714286,
            "unit": "ns",
            "range": "± 159271.0711558083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6178073.945945946,
            "unit": "ns",
            "range": "± 197371.66123781493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3099162.9803921566,
            "unit": "ns",
            "range": "± 119928.93867995168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5125809.535714285,
            "unit": "ns",
            "range": "± 136152.21222899953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23754337.580645163,
            "unit": "ns",
            "range": "± 714786.1340841177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6146663.277777778,
            "unit": "ns",
            "range": "± 123706.37698851332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27467575.885714285,
            "unit": "ns",
            "range": "± 822008.3559067129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6969540.216145833,
            "unit": "ns",
            "range": "± 102630.56155451633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1823488.275,
            "unit": "ns",
            "range": "± 13778.181010016078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296489.2625,
            "unit": "ns",
            "range": "± 22505.018550118257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2394937.669363839,
            "unit": "ns",
            "range": "± 24709.551832528658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864236.8604213169,
            "unit": "ns",
            "range": "± 4343.485809534977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720455.3856119792,
            "unit": "ns",
            "range": "± 4217.414216497978"
          }
        ]
      }
    ]
  }
}