window.BENCHMARK_DATA = {
  "lastUpdate": 1728885959495,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9671f7952a37890619ef9b0fd41709719331afbe",
          "message": "Merge pull request #3695 from riemannulus/ci/use/self-hosted-macos\n\nci: use self-hosted macos",
          "timestamp": "2024-03-14T14:54:36+09:00",
          "tree_id": "703011aae57abc4e5aa6fa7b1e4ced12b79af3d1",
          "url": "https://github.com/planetarium/libplanet/commit/9671f7952a37890619ef9b0fd41709719331afbe"
        },
        "date": 1710396207478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5728097.928571428,
            "unit": "ns",
            "range": "± 51822.74874952162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14661898.5,
            "unit": "ns",
            "range": "± 239047.60712838708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36418850.928571425,
            "unit": "ns",
            "range": "± 446992.09240320406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72918644,
            "unit": "ns",
            "range": "± 211502.1100252734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145865877.4,
            "unit": "ns",
            "range": "± 411567.6896210044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17583.247311827956,
            "unit": "ns",
            "range": "± 1705.991007774316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109938.83333333333,
            "unit": "ns",
            "range": "± 4294.83866555201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107375.5,
            "unit": "ns",
            "range": "± 4294.029596249819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90180.02083333333,
            "unit": "ns",
            "range": "± 3501.312723364021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3175589,
            "unit": "ns",
            "range": "± 52986.41740469547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776774.3488372094,
            "unit": "ns",
            "range": "± 149553.63931920234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4982.368131868132,
            "unit": "ns",
            "range": "± 617.5700087851707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26840.545454545456,
            "unit": "ns",
            "range": "± 1950.673169447432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22111.944444444445,
            "unit": "ns",
            "range": "± 1228.3344836079766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28986.63829787234,
            "unit": "ns",
            "range": "± 4630.977529476632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1356,
            "unit": "ns",
            "range": "± 241.64229762191883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4915.153846153846,
            "unit": "ns",
            "range": "± 599.7631555331178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 712988.42,
            "unit": "ns",
            "range": "± 79265.75370644059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1240677.6545454545,
            "unit": "ns",
            "range": "± 51946.53786888628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1054801.5909090908,
            "unit": "ns",
            "range": "± 68863.53245251502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8201417.39,
            "unit": "ns",
            "range": "± 1792090.8981520648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2187447.1379310344,
            "unit": "ns",
            "range": "± 47684.078326391485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2315114.7454545456,
            "unit": "ns",
            "range": "± 97921.86688398622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2683292.0833333335,
            "unit": "ns",
            "range": "± 22645.97819585124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2992728.1551724137,
            "unit": "ns",
            "range": "± 131245.58440944023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10211988.83,
            "unit": "ns",
            "range": "± 1047892.6156561119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3052821.802994792,
            "unit": "ns",
            "range": "± 53330.57409958498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924597.6722005209,
            "unit": "ns",
            "range": "± 7063.856236388403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609680.1538411458,
            "unit": "ns",
            "range": "± 4212.430911095582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642263.474330357,
            "unit": "ns",
            "range": "± 4169.48710385078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 453832.8319614955,
            "unit": "ns",
            "range": "± 643.2014699985739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423496.28597005206,
            "unit": "ns",
            "range": "± 1563.4115679987858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fc05429fba439add17e3c91f90d4fff3e17bd9f",
          "message": "Merge pull request #3685 from s2quake/chore/split-changeslog\n\nSplit changes.md by major version",
          "timestamp": "2024-03-14T16:36:50+09:00",
          "tree_id": "5ec541d47c2fa91af9db7266b8c10e833a4378cf",
          "url": "https://github.com/planetarium/libplanet/commit/5fc05429fba439add17e3c91f90d4fff3e17bd9f"
        },
        "date": 1710402334636,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5706773.571428572,
            "unit": "ns",
            "range": "± 51477.23225139184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14273010,
            "unit": "ns",
            "range": "± 61282.413661397724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36024598.63333333,
            "unit": "ns",
            "range": "± 127567.78019035699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74186733.13333334,
            "unit": "ns",
            "range": "± 223862.20571109827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146127381.07142857,
            "unit": "ns",
            "range": "± 344374.4384533664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18196.96875,
            "unit": "ns",
            "range": "± 1663.0861638793228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109107.97272727273,
            "unit": "ns",
            "range": "± 4123.452270154515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103994.91176470589,
            "unit": "ns",
            "range": "± 4680.34761349444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91002.08064516129,
            "unit": "ns",
            "range": "± 2746.3325335702225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177283.0714285714,
            "unit": "ns",
            "range": "± 41812.32607638066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846454.793650794,
            "unit": "ns",
            "range": "± 130078.55233977498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5054.163157894737,
            "unit": "ns",
            "range": "± 911.7820009438883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27422.817204301075,
            "unit": "ns",
            "range": "± 2650.6549803620587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23569.711340206184,
            "unit": "ns",
            "range": "± 1966.886922476114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29240.78021978022,
            "unit": "ns",
            "range": "± 3743.2144825365085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1334.9301075268818,
            "unit": "ns",
            "range": "± 230.0651324530522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4697.261904761905,
            "unit": "ns",
            "range": "± 340.0427017496416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676772.304347826,
            "unit": "ns",
            "range": "± 54222.49853014346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1248904.3409090908,
            "unit": "ns",
            "range": "± 42811.20356350072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1046543.3369565217,
            "unit": "ns",
            "range": "± 64146.38181367919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8291994.59,
            "unit": "ns",
            "range": "± 1867827.1270459841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2211168.592592593,
            "unit": "ns",
            "range": "± 61962.301531631856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2479719.7333333334,
            "unit": "ns",
            "range": "± 44019.51269521062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2642656.5833333335,
            "unit": "ns",
            "range": "± 21377.558013692487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2920636.14,
            "unit": "ns",
            "range": "± 116112.9873574082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10141680.397959184,
            "unit": "ns",
            "range": "± 934116.1008404776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3000076.3426649305,
            "unit": "ns",
            "range": "± 63524.23277537067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923097.2517578125,
            "unit": "ns",
            "range": "± 5363.493569166807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615452.690625,
            "unit": "ns",
            "range": "± 5124.98975541825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1620032.187890625,
            "unit": "ns",
            "range": "± 15826.038760923602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457465.5617675781,
            "unit": "ns",
            "range": "± 885.5842561911725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419483.56669921876,
            "unit": "ns",
            "range": "± 1521.3844606714365"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bad0ed71b73360b295dab729bb5ff4e9d30e5bc3",
          "message": "Merge pull request #3684 from s2quake/chore/remove-unused-field\n\nRemoved unused field in NullBlockPolicy",
          "timestamp": "2024-03-14T16:56:42+09:00",
          "tree_id": "5156e3d39cee3ea16e56a57e59dc0997b9442757",
          "url": "https://github.com/planetarium/libplanet/commit/bad0ed71b73360b295dab729bb5ff4e9d30e5bc3"
        },
        "date": 1710403527674,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5751503.615384615,
            "unit": "ns",
            "range": "± 45375.32906132006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14339183.076923076,
            "unit": "ns",
            "range": "± 36247.852765052485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36045743.15384615,
            "unit": "ns",
            "range": "± 198630.76161261552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73776325.4,
            "unit": "ns",
            "range": "± 183987.9099971362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146124233.53333333,
            "unit": "ns",
            "range": "± 333488.1599647808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17680.25581395349,
            "unit": "ns",
            "range": "± 981.932271967118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110439.93478260869,
            "unit": "ns",
            "range": "± 4231.3283934752635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105721.17543859649,
            "unit": "ns",
            "range": "± 4555.838695418405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 96861.45614035087,
            "unit": "ns",
            "range": "± 4183.510278761875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3231047.6,
            "unit": "ns",
            "range": "± 56430.067096742474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2771136.34,
            "unit": "ns",
            "range": "± 111868.81385356908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4862.717391304348,
            "unit": "ns",
            "range": "± 695.5834585627285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27053.32183908046,
            "unit": "ns",
            "range": "± 2487.7221087902926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22337.76595744681,
            "unit": "ns",
            "range": "± 1518.0587361349117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27638.31182795699,
            "unit": "ns",
            "range": "± 5059.3995282532305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1223.536842105263,
            "unit": "ns",
            "range": "± 262.19335931860036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4697.206896551724,
            "unit": "ns",
            "range": "± 456.1375031855523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 677534.1157894736,
            "unit": "ns",
            "range": "± 56223.71453094026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1244541,
            "unit": "ns",
            "range": "± 47196.88294039013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1062362.4929577464,
            "unit": "ns",
            "range": "± 51471.66750688417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8529835.3,
            "unit": "ns",
            "range": "± 1952449.5385878081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2200222.433333333,
            "unit": "ns",
            "range": "± 92797.22338050354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303111.566666667,
            "unit": "ns",
            "range": "± 87478.38762527681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2648260,
            "unit": "ns",
            "range": "± 40672.896859076696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2952425.254901961,
            "unit": "ns",
            "range": "± 119193.41381466395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10213997.07,
            "unit": "ns",
            "range": "± 921719.735714683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3024019.072150735,
            "unit": "ns",
            "range": "± 60874.55004453929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922058.2820963542,
            "unit": "ns",
            "range": "± 4897.396409392857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614108.6477213542,
            "unit": "ns",
            "range": "± 4197.241483063923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631673.8737444195,
            "unit": "ns",
            "range": "± 10992.231996337154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463851.125390625,
            "unit": "ns",
            "range": "± 1066.570992236178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426121.77360026044,
            "unit": "ns",
            "range": "± 1457.6256337839886"
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
          "id": "d23ccf45a60ff011dcc112274755f6dcc1cd8e9e",
          "message": "Merge pull request #3697 from greymistcube/refactor/iworld-currency-handling\n\nMove FAV related operations from `IAccount` to `IWorld`",
          "timestamp": "2024-03-19T16:55:40+09:00",
          "tree_id": "243ee74689121f2566388a90479c76b16fd15d7d",
          "url": "https://github.com/planetarium/libplanet/commit/d23ccf45a60ff011dcc112274755f6dcc1cd8e9e"
        },
        "date": 1710835464126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5758306.285714285,
            "unit": "ns",
            "range": "± 51969.748717482194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14289295.416666666,
            "unit": "ns",
            "range": "± 47095.876647263314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36408057.92307692,
            "unit": "ns",
            "range": "± 132248.42498839166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72803065.28571428,
            "unit": "ns",
            "range": "± 176724.22334004715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145764424.86666667,
            "unit": "ns",
            "range": "± 359661.5898463973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17930.945652173912,
            "unit": "ns",
            "range": "± 1466.9063459481954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109223.47692307692,
            "unit": "ns",
            "range": "± 4474.936609563915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104694.09333333334,
            "unit": "ns",
            "range": "± 5108.735296431888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92740.96774193548,
            "unit": "ns",
            "range": "± 2795.9098397942066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134110.5714285714,
            "unit": "ns",
            "range": "± 45551.28709439552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2731243.8554216865,
            "unit": "ns",
            "range": "± 145493.3169634524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5085.7555555555555,
            "unit": "ns",
            "range": "± 575.9844393792173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26270.420454545456,
            "unit": "ns",
            "range": "± 1793.816631805581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22747.863157894735,
            "unit": "ns",
            "range": "± 1634.3737990795073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29643.063829787236,
            "unit": "ns",
            "range": "± 4934.171394542416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1162.0842105263157,
            "unit": "ns",
            "range": "± 175.18929963181864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4761.238636363636,
            "unit": "ns",
            "range": "± 407.0111691629684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681546.15,
            "unit": "ns",
            "range": "± 61278.8444519078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1247501.1296296297,
            "unit": "ns",
            "range": "± 52362.014726955436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1063621.4239130435,
            "unit": "ns",
            "range": "± 63275.1111098288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8320829.97,
            "unit": "ns",
            "range": "± 1796291.926675461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2215185.367647059,
            "unit": "ns",
            "range": "± 102711.22900752358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295390.85,
            "unit": "ns",
            "range": "± 119889.04768055074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2660741,
            "unit": "ns",
            "range": "± 50155.16305094289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3011602.7333333334,
            "unit": "ns",
            "range": "± 88064.85135660492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10247179.96,
            "unit": "ns",
            "range": "± 983523.8761826945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3059633.958984375,
            "unit": "ns",
            "range": "± 60033.21181512873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929198.8256510417,
            "unit": "ns",
            "range": "± 6113.971354288977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615206.3268229166,
            "unit": "ns",
            "range": "± 4944.183804346021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632302.7388020833,
            "unit": "ns",
            "range": "± 17450.288286690236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466370.4130533854,
            "unit": "ns",
            "range": "± 1062.2846779371393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 412871.4704752604,
            "unit": "ns",
            "range": "± 1205.481475469797"
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
          "id": "19ab254e527b7686280b57b8472bc789f64238a4",
          "message": "Merge pull request #3699 from greymistcube/refactor/simplify-iworld-delta\n\n🧹 Removed unnecessary methods and properties from `IWorldDelta`",
          "timestamp": "2024-03-19T18:20:26+09:00",
          "tree_id": "15ab5a662974ada3e2d9b22783e6225f894d7a9b",
          "url": "https://github.com/planetarium/libplanet/commit/19ab254e527b7686280b57b8472bc789f64238a4"
        },
        "date": 1710840555383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5822125.428571428,
            "unit": "ns",
            "range": "± 24570.061434174742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14222184.357142856,
            "unit": "ns",
            "range": "± 23397.598284397096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35840445.92307692,
            "unit": "ns",
            "range": "± 91097.42969431277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72513867,
            "unit": "ns",
            "range": "± 260899.03989474548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146192669.13333333,
            "unit": "ns",
            "range": "± 461074.59626195394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17548.347826086956,
            "unit": "ns",
            "range": "± 1576.4507320733378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109848.63253012048,
            "unit": "ns",
            "range": "± 5840.278576238913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106221,
            "unit": "ns",
            "range": "± 4478.965779376997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93829.53703703704,
            "unit": "ns",
            "range": "± 2357.480246780472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3155839.9655172415,
            "unit": "ns",
            "range": "± 91391.02473886698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2735093.022727273,
            "unit": "ns",
            "range": "± 150003.5743025469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4881.340659340659,
            "unit": "ns",
            "range": "± 669.1630962093243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27296.01111111111,
            "unit": "ns",
            "range": "± 2466.5065113762976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23413.64285714286,
            "unit": "ns",
            "range": "± 2388.6026411522676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30216.907216494845,
            "unit": "ns",
            "range": "± 5815.953818095379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1110.5425531914893,
            "unit": "ns",
            "range": "± 199.9406183293611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4726.233333333334,
            "unit": "ns",
            "range": "± 534.0087330430956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681775.0408163265,
            "unit": "ns",
            "range": "± 64212.75768380566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1252188.2545454546,
            "unit": "ns",
            "range": "± 50716.44014343766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1052483.8631578947,
            "unit": "ns",
            "range": "± 76956.029456397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8272676.560606061,
            "unit": "ns",
            "range": "± 1854026.1077534985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178941.1129032257,
            "unit": "ns",
            "range": "± 80019.15527334175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2319972.895522388,
            "unit": "ns",
            "range": "± 109291.01392919154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2698454.9393939395,
            "unit": "ns",
            "range": "± 75851.10415723169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2969081.1363636362,
            "unit": "ns",
            "range": "± 109473.75892233547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10062272.397959184,
            "unit": "ns",
            "range": "± 915762.9795977825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3057598.1454503676,
            "unit": "ns",
            "range": "± 62330.85084594705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929087.8229817708,
            "unit": "ns",
            "range": "± 4605.589464780298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613947.7486328125,
            "unit": "ns",
            "range": "± 5237.610226869953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1609736.693359375,
            "unit": "ns",
            "range": "± 9782.569500359823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462525.99680989585,
            "unit": "ns",
            "range": "± 837.4045013551724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425254.62236328126,
            "unit": "ns",
            "range": "± 1395.387083349085"
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
          "id": "0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50",
          "message": "Merge pull request #3702 from greymistcube/refactor/move-validator-mutation\n\n🚚 Move `Validator` related methods from `IAccount` to `IWorld`",
          "timestamp": "2024-03-21T15:56:52+09:00",
          "tree_id": "a761e93f03edfdcd597e405bad0050b411e979c3",
          "url": "https://github.com/planetarium/libplanet/commit/0e48fff7c859bf78f0242a2ef52bb2eb7bb70a50"
        },
        "date": 1711004744329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5695163.428571428,
            "unit": "ns",
            "range": "± 51525.76519898234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14386294.583333334,
            "unit": "ns",
            "range": "± 59483.89865785428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36431283.13333333,
            "unit": "ns",
            "range": "± 156095.3093327767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73004183.8,
            "unit": "ns",
            "range": "± 251575.83939559857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146372317.96666667,
            "unit": "ns",
            "range": "± 340808.792252838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18105.145161290322,
            "unit": "ns",
            "range": "± 1433.7871760478115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109446.70909090909,
            "unit": "ns",
            "range": "± 4260.00404569764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105137.02173913043,
            "unit": "ns",
            "range": "± 4030.468340523388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90680.32857142857,
            "unit": "ns",
            "range": "± 2775.489469134645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3158193.1153846155,
            "unit": "ns",
            "range": "± 129228.56113880564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2783047.9625,
            "unit": "ns",
            "range": "± 145256.36959457592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4891.373626373626,
            "unit": "ns",
            "range": "± 754.9352238341992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26687.459770114943,
            "unit": "ns",
            "range": "± 2311.860324121347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22739,
            "unit": "ns",
            "range": "± 1672.9806722345388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28757.5,
            "unit": "ns",
            "range": "± 7015.259462508553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1248.5212765957447,
            "unit": "ns",
            "range": "± 321.06609136797636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4556.227272727273,
            "unit": "ns",
            "range": "± 497.6317645013754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687660.2323232323,
            "unit": "ns",
            "range": "± 61740.118666187074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1243934.1904761905,
            "unit": "ns",
            "range": "± 44764.25002177088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1052543.6170212766,
            "unit": "ns",
            "range": "± 66799.83420736402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8557802.22,
            "unit": "ns",
            "range": "± 1942820.5128786424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2217335.640625,
            "unit": "ns",
            "range": "± 101214.19895910006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301544.081395349,
            "unit": "ns",
            "range": "± 84418.27175926192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2739953.7352941176,
            "unit": "ns",
            "range": "± 83705.25492656807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2862274.3333333335,
            "unit": "ns",
            "range": "± 79245.28118783137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10143954.877551021,
            "unit": "ns",
            "range": "± 923719.9572129366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3035291.017020089,
            "unit": "ns",
            "range": "± 23874.906182881055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922420.8765625,
            "unit": "ns",
            "range": "± 6151.778049708228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615659.9174479167,
            "unit": "ns",
            "range": "± 4832.344911545085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1617935.9361979167,
            "unit": "ns",
            "range": "± 16184.652984156679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455998.7423828125,
            "unit": "ns",
            "range": "± 789.6029062964325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425284.5934244792,
            "unit": "ns",
            "range": "± 1186.540091863832"
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
          "id": "6815582f07d67a2c4468c2d7723eb8844bd39651",
          "message": "Merge pull request #3704 from greymistcube/refactor/cleanup\n\n♻️ Docs cleanup",
          "timestamp": "2024-03-21T17:53:16+09:00",
          "tree_id": "5a79dee718ab7a05427020dd64f4fa753ef2e2af",
          "url": "https://github.com/planetarium/libplanet/commit/6815582f07d67a2c4468c2d7723eb8844bd39651"
        },
        "date": 1711011719593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5751225.416666667,
            "unit": "ns",
            "range": "± 53497.96870308312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14362489.5,
            "unit": "ns",
            "range": "± 48081.694588954066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36191141.461538464,
            "unit": "ns",
            "range": "± 215730.80210940956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73042541.33333333,
            "unit": "ns",
            "range": "± 299898.5741479149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146250699.42857143,
            "unit": "ns",
            "range": "± 421252.0823107565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17509.505494505494,
            "unit": "ns",
            "range": "± 1304.0467474036043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111255.54,
            "unit": "ns",
            "range": "± 4432.58367191996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105212.25,
            "unit": "ns",
            "range": "± 4130.58619558398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91076.1836734694,
            "unit": "ns",
            "range": "± 3270.6076822808573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169440.3846153845,
            "unit": "ns",
            "range": "± 84304.9176184056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747387.3846153845,
            "unit": "ns",
            "range": "± 111958.46117551967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4797.076923076923,
            "unit": "ns",
            "range": "± 536.2615288741375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27032.714285714286,
            "unit": "ns",
            "range": "± 2022.4505118830161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22198.779411764706,
            "unit": "ns",
            "range": "± 1061.9795630828396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27660.24418604651,
            "unit": "ns",
            "range": "± 4006.380616660633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1252.4157894736843,
            "unit": "ns",
            "range": "± 200.6993974886213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4700.704545454545,
            "unit": "ns",
            "range": "± 573.893841741046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 691872.1288659794,
            "unit": "ns",
            "range": "± 66126.80700513339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1255710.4571428571,
            "unit": "ns",
            "range": "± 57029.56502175517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1032574.3571428572,
            "unit": "ns",
            "range": "± 66552.12838890117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8582358.26,
            "unit": "ns",
            "range": "± 1648759.9585655401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185934.574074074,
            "unit": "ns",
            "range": "± 55014.69033388049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2376745.210526316,
            "unit": "ns",
            "range": "± 102301.05567423062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2679955.8947368423,
            "unit": "ns",
            "range": "± 84280.64132626778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2958726.3846153845,
            "unit": "ns",
            "range": "± 121101.61017034072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10118694.925531914,
            "unit": "ns",
            "range": "± 888688.6099206116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034346.9192708335,
            "unit": "ns",
            "range": "± 46455.08645056572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922396.3592447917,
            "unit": "ns",
            "range": "± 5724.548511373495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618343.0965494792,
            "unit": "ns",
            "range": "± 7951.938193664651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1620483.1752604167,
            "unit": "ns",
            "range": "± 16433.111190150656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462897.78922526044,
            "unit": "ns",
            "range": "± 962.5632298032629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425971.0491536458,
            "unit": "ns",
            "range": "± 1376.8785416674934"
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
          "id": "e3df1917a9739c156d0e9eb0d58fef17b9b6206c",
          "message": "Merge pull request #3705 from greymistcube/refactor/cleanup\n\n🧹 Removed unnecessary test code",
          "timestamp": "2024-03-22T14:32:16+09:00",
          "tree_id": "244b5fe74be3f90bb2e7ed3f92e3709161f56e0d",
          "url": "https://github.com/planetarium/libplanet/commit/e3df1917a9739c156d0e9eb0d58fef17b9b6206c"
        },
        "date": 1711086058016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5776648.642857143,
            "unit": "ns",
            "range": "± 20782.38726424611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14310775.923076924,
            "unit": "ns",
            "range": "± 72007.74250437881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36169195.92307692,
            "unit": "ns",
            "range": "± 210683.84837336311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73123335.73333333,
            "unit": "ns",
            "range": "± 248772.35523508137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145557896.8,
            "unit": "ns",
            "range": "± 410557.8434938422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17295.224719101123,
            "unit": "ns",
            "range": "± 1276.6721188024264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109800.1862745098,
            "unit": "ns",
            "range": "± 4434.804981011886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104893.35294117648,
            "unit": "ns",
            "range": "± 3968.1866227461096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90290.69696969698,
            "unit": "ns",
            "range": "± 2793.5113039511816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3195681,
            "unit": "ns",
            "range": "± 72064.99308540867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780089.1470588236,
            "unit": "ns",
            "range": "± 133205.66924796763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4753.290697674419,
            "unit": "ns",
            "range": "± 395.4596392369136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26305.908045977012,
            "unit": "ns",
            "range": "± 1624.080552992655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23429.677083333332,
            "unit": "ns",
            "range": "± 2152.918391367948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29853.09375,
            "unit": "ns",
            "range": "± 5179.22652440675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1302.7446808510638,
            "unit": "ns",
            "range": "± 252.20625141136432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4711.933333333333,
            "unit": "ns",
            "range": "± 532.8674139960863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 698814.64,
            "unit": "ns",
            "range": "± 64900.91859344619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1253400.1666666667,
            "unit": "ns",
            "range": "± 49226.106360964535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1037986.6046511628,
            "unit": "ns",
            "range": "± 56463.65082344967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8365822.44,
            "unit": "ns",
            "range": "± 1798498.055477068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2222232.71875,
            "unit": "ns",
            "range": "± 67169.49030683229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260294.285714286,
            "unit": "ns",
            "range": "± 19351.808213778295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2689670.230769231,
            "unit": "ns",
            "range": "± 31749.612956049943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2936013.8833333333,
            "unit": "ns",
            "range": "± 130211.58450079047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10300204.826530613,
            "unit": "ns",
            "range": "± 1129162.40569263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3004251.898567708,
            "unit": "ns",
            "range": "± 55108.881810496685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915323.9071614583,
            "unit": "ns",
            "range": "± 8427.196998022375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614498.4397135417,
            "unit": "ns",
            "range": "± 5021.960205575821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623684.7760416667,
            "unit": "ns",
            "range": "± 8562.814051680982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455957.85811941966,
            "unit": "ns",
            "range": "± 877.029272129097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422876.2344125601,
            "unit": "ns",
            "range": "± 740.811331859006"
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
          "id": "5210b9336f9bb6e4f3c79b3c9f9612cad6719342",
          "message": "Merge pull request #3706 from greymistcube/chore/changelog\n\n🧹 Changelog formatting",
          "timestamp": "2024-03-22T17:50:34+09:00",
          "tree_id": "594bbc5288a619fc2040847db66ae22c22e2db13",
          "url": "https://github.com/planetarium/libplanet/commit/5210b9336f9bb6e4f3c79b3c9f9612cad6719342"
        },
        "date": 1711097955507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5715982.428571428,
            "unit": "ns",
            "range": "± 44542.23501130357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14182388.916666666,
            "unit": "ns",
            "range": "± 32874.43003158405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36040625.166666664,
            "unit": "ns",
            "range": "± 63617.697077340374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72991402.63333334,
            "unit": "ns",
            "range": "± 246985.32319635822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148346974.73333332,
            "unit": "ns",
            "range": "± 433607.19491023646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17893.645161290322,
            "unit": "ns",
            "range": "± 1387.676245329339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110357.0625,
            "unit": "ns",
            "range": "± 3404.7769282952463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105188.88888888889,
            "unit": "ns",
            "range": "± 4818.328495179132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92246.13793103448,
            "unit": "ns",
            "range": "± 4037.661388652247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3170522.466666667,
            "unit": "ns",
            "range": "± 56236.018183401015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2704389.9444444445,
            "unit": "ns",
            "range": "± 113934.12235717062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4994.70786516854,
            "unit": "ns",
            "range": "± 745.1266549179771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27065.521739130436,
            "unit": "ns",
            "range": "± 2599.089181030691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22655.129032258064,
            "unit": "ns",
            "range": "± 1699.503132157509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30317.473684210527,
            "unit": "ns",
            "range": "± 5988.700062905893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1181.978021978022,
            "unit": "ns",
            "range": "± 219.89734867897783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4669.311111111111,
            "unit": "ns",
            "range": "± 501.2866511455588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683355.5,
            "unit": "ns",
            "range": "± 58961.500907896065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1246833.6333333333,
            "unit": "ns",
            "range": "± 55399.95468179223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1038405.1145833334,
            "unit": "ns",
            "range": "± 59473.401156955915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8405199.07,
            "unit": "ns",
            "range": "± 1773108.2981201888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221804.1272727274,
            "unit": "ns",
            "range": "± 94125.9940233882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316661.756756757,
            "unit": "ns",
            "range": "± 77715.14682816034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2649183.6,
            "unit": "ns",
            "range": "± 46919.802383276445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2901077.4814814813,
            "unit": "ns",
            "range": "± 79009.66149799965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10236598.74489796,
            "unit": "ns",
            "range": "± 992676.6849562853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2996582.13984375,
            "unit": "ns",
            "range": "± 50827.60217435052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918817.0809151785,
            "unit": "ns",
            "range": "± 3556.371897425012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613126.9416015625,
            "unit": "ns",
            "range": "± 3760.961094743409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1604553.0716145833,
            "unit": "ns",
            "range": "± 13039.29433963097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465824.23463541665,
            "unit": "ns",
            "range": "± 921.1056872847589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421055.4922572545,
            "unit": "ns",
            "range": "± 1020.0849135568832"
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
          "id": "30938b465c34003a3ea9268ed23166a34acc301b",
          "message": "Merge pull request #3642 from greymistcube/feature/mocks\n\n✨ Mocks",
          "timestamp": "2024-03-22T19:00:38+09:00",
          "tree_id": "031a5cb565d418e6075c81a74d21d70109ec35ae",
          "url": "https://github.com/planetarium/libplanet/commit/30938b465c34003a3ea9268ed23166a34acc301b"
        },
        "date": 1711102415992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5746878.428571428,
            "unit": "ns",
            "range": "± 55987.40328339565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14293896.923076924,
            "unit": "ns",
            "range": "± 108125.12403959094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36122073.461538464,
            "unit": "ns",
            "range": "± 218594.62704307845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72656220,
            "unit": "ns",
            "range": "± 159755.7581420415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145879242.06666666,
            "unit": "ns",
            "range": "± 389802.9305661052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18438.489247311827,
            "unit": "ns",
            "range": "± 1381.781816718384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108679.69491525424,
            "unit": "ns",
            "range": "± 3855.2113688385466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106287.21153846153,
            "unit": "ns",
            "range": "± 4376.879577590295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91556.71739130435,
            "unit": "ns",
            "range": "± 3187.4380981390996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163406.5833333335,
            "unit": "ns",
            "range": "± 79579.6085427595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2665987.42,
            "unit": "ns",
            "range": "± 169803.77248056035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4893.290697674419,
            "unit": "ns",
            "range": "± 435.52707395492973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27033.102272727272,
            "unit": "ns",
            "range": "± 1957.1525794646468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23684.726315789474,
            "unit": "ns",
            "range": "± 1881.7987458930863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28536.287234042553,
            "unit": "ns",
            "range": "± 4629.32414682688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1337.2142857142858,
            "unit": "ns",
            "range": "± 185.280465224078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4922.372340425532,
            "unit": "ns",
            "range": "± 707.7917648945402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685330.0104166666,
            "unit": "ns",
            "range": "± 62557.87505233093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1246210.2,
            "unit": "ns",
            "range": "± 41242.57212467791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1061173.8105263158,
            "unit": "ns",
            "range": "± 71524.31127280307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8169255.02,
            "unit": "ns",
            "range": "± 1695539.3768635262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209307.5555555555,
            "unit": "ns",
            "range": "± 107188.1609266711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294861.1621621624,
            "unit": "ns",
            "range": "± 77256.8467356035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2639435.088235294,
            "unit": "ns",
            "range": "± 44687.513811268946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2973025.452830189,
            "unit": "ns",
            "range": "± 122950.28454507163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10108929.84375,
            "unit": "ns",
            "range": "± 883451.8750709781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023021.58828125,
            "unit": "ns",
            "range": "± 50264.39118076502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923663.9326822917,
            "unit": "ns",
            "range": "± 2782.349004386295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613435.0344401042,
            "unit": "ns",
            "range": "± 4101.823372651798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1610563.298046875,
            "unit": "ns",
            "range": "± 14765.428508778845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458987.2612955729,
            "unit": "ns",
            "range": "± 796.5973808619128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426815.6816080729,
            "unit": "ns",
            "range": "± 1464.9489927144234"
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711106292895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5785003.192307692,
            "unit": "ns",
            "range": "± 50338.54570370605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14512832.846153846,
            "unit": "ns",
            "range": "± 39111.95037505833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36064870.115384616,
            "unit": "ns",
            "range": "± 267712.74060160655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72893437.35714285,
            "unit": "ns",
            "range": "± 141276.32590157227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145601563.4,
            "unit": "ns",
            "range": "± 450984.8973296112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18607,
            "unit": "ns",
            "range": "± 1746.173432369757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109247.27272727272,
            "unit": "ns",
            "range": "± 4290.077179028392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106119.30263157895,
            "unit": "ns",
            "range": "± 5109.418949403769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93125.1052631579,
            "unit": "ns",
            "range": "± 3198.846325309255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3139024.4814814813,
            "unit": "ns",
            "range": "± 130526.03373584508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759463.1931818184,
            "unit": "ns",
            "range": "± 151600.3932753412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4872.965909090909,
            "unit": "ns",
            "range": "± 497.74275424074636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26664.352941176472,
            "unit": "ns",
            "range": "± 1759.3928315911548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22283.209677419356,
            "unit": "ns",
            "range": "± 1010.2864410747907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30268.842105263157,
            "unit": "ns",
            "range": "± 5516.112330324817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1194.0425531914893,
            "unit": "ns",
            "range": "± 257.2336252411442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4649.186813186813,
            "unit": "ns",
            "range": "± 637.3477842170615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 697593.9191919192,
            "unit": "ns",
            "range": "± 69303.99698557853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1242196.2702702703,
            "unit": "ns",
            "range": "± 41737.24415158923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1063368.616161616,
            "unit": "ns",
            "range": "± 72512.63293775404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8443929.93,
            "unit": "ns",
            "range": "± 1819631.1312055502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209450.7280701753,
            "unit": "ns",
            "range": "± 95489.54829176287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309213.7551020407,
            "unit": "ns",
            "range": "± 90809.5089696766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2677699.909090909,
            "unit": "ns",
            "range": "± 78312.06684132546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2920698.6296296297,
            "unit": "ns",
            "range": "± 79477.31938646112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10068011.581632653,
            "unit": "ns",
            "range": "± 746003.9739357398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3020644.8540900736,
            "unit": "ns",
            "range": "± 61119.31803463693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921968.9313802083,
            "unit": "ns",
            "range": "± 4529.348760874614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613323.3320963542,
            "unit": "ns",
            "range": "± 6080.568433797365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621897.8075520834,
            "unit": "ns",
            "range": "± 12220.926870996407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462256.04244559153,
            "unit": "ns",
            "range": "± 408.3808767714736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418813.52015904017,
            "unit": "ns",
            "range": "± 1078.3581261705099"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e9ea5bd1ebbf2d303391caeee97ac71c23507c1",
          "message": "Merge pull request #3708 from greymistcube/prepare/4.3.0\n\n🔧 Prepare 4.3.0",
          "timestamp": "2024-03-22T22:19:38+09:00",
          "tree_id": "3bd385ff7052df8da1bc5a68e3098fe6e3e329ce",
          "url": "https://github.com/planetarium/libplanet/commit/0e9ea5bd1ebbf2d303391caeee97ac71c23507c1"
        },
        "date": 1711114179963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5713405.266666667,
            "unit": "ns",
            "range": "± 63059.74159303979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14429875.416666666,
            "unit": "ns",
            "range": "± 46469.372993908255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36199701.538461536,
            "unit": "ns",
            "range": "± 238742.17786055853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73404341.36666666,
            "unit": "ns",
            "range": "± 175115.1197448886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146053377.26666668,
            "unit": "ns",
            "range": "± 372299.37665683334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18600.854166666668,
            "unit": "ns",
            "range": "± 2050.2866910144244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109671.26865671642,
            "unit": "ns",
            "range": "± 4921.779853541804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106231.93650793651,
            "unit": "ns",
            "range": "± 4864.156203962708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90591.33870967742,
            "unit": "ns",
            "range": "± 2739.489284480767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3152133.111111111,
            "unit": "ns",
            "range": "± 104804.33493195861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2728835.84,
            "unit": "ns",
            "range": "± 176437.93737208447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4836.372340425532,
            "unit": "ns",
            "range": "± 817.2037161169324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26911.37777777778,
            "unit": "ns",
            "range": "± 2643.309228203374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23581.531914893618,
            "unit": "ns",
            "range": "± 1577.199051620579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28611.8,
            "unit": "ns",
            "range": "± 5483.377299485293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1027.3626373626373,
            "unit": "ns",
            "range": "± 251.2509819321229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5028.265957446809,
            "unit": "ns",
            "range": "± 904.5751474163254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 673353.1648351648,
            "unit": "ns",
            "range": "± 50238.54715748406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1250512.9206349207,
            "unit": "ns",
            "range": "± 57455.39347189025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1039315.0224719101,
            "unit": "ns",
            "range": "± 57587.181568663495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8363732.62,
            "unit": "ns",
            "range": "± 1845035.2052719826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202947.918918919,
            "unit": "ns",
            "range": "± 106501.145044556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307740.8571428573,
            "unit": "ns",
            "range": "± 75438.35472487877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2631878.25,
            "unit": "ns",
            "range": "± 33438.192002355085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2942605.4375,
            "unit": "ns",
            "range": "± 115834.06189301275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10189866.666666666,
            "unit": "ns",
            "range": "± 1096699.7988606754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3055056.336328125,
            "unit": "ns",
            "range": "± 34575.2511463222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928724.0081612723,
            "unit": "ns",
            "range": "± 4568.869972252917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619593.934765625,
            "unit": "ns",
            "range": "± 4716.783278109695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623283.1569475445,
            "unit": "ns",
            "range": "± 1674.503357448517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465109.3926106771,
            "unit": "ns",
            "range": "± 1253.5277461021276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424433.09596354165,
            "unit": "ns",
            "range": "± 1302.4394812324883"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "757ba26ea62bc3ef51199853d452e4b119a10e5a",
          "message": "Merge pull request #3710 from xiaoxianBoy/fix-typos\n\nchore: fix typos",
          "timestamp": "2024-03-25T17:49:36+09:00",
          "tree_id": "3ac7612ac12e4b8910b4ff8d747654a7bd720f66",
          "url": "https://github.com/planetarium/libplanet/commit/757ba26ea62bc3ef51199853d452e4b119a10e5a"
        },
        "date": 1711357577329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5643235.5,
            "unit": "ns",
            "range": "± 37267.65472951661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14383194.083333334,
            "unit": "ns",
            "range": "± 101406.93416353226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36409730.307692304,
            "unit": "ns",
            "range": "± 208647.2562841348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72994688.53333333,
            "unit": "ns",
            "range": "± 256161.7327417713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145841163.46666667,
            "unit": "ns",
            "range": "± 432254.77522023424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17963.822916666668,
            "unit": "ns",
            "range": "± 1234.6896988806257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109766.85416666667,
            "unit": "ns",
            "range": "± 4280.660105138803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106961.88372093023,
            "unit": "ns",
            "range": "± 3931.6252558991328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91378.08108108108,
            "unit": "ns",
            "range": "± 3010.4181545867455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3198100.35,
            "unit": "ns",
            "range": "± 70638.46189783655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785186.24,
            "unit": "ns",
            "range": "± 72433.27997559778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4752.989010989011,
            "unit": "ns",
            "range": "± 644.1765371301651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27302.516853932586,
            "unit": "ns",
            "range": "± 2130.4376957050163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22316.293103448275,
            "unit": "ns",
            "range": "± 1202.9965506526264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28966.212765957447,
            "unit": "ns",
            "range": "± 5491.3277805056905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1213.9789473684211,
            "unit": "ns",
            "range": "± 348.3560473456496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4776.689655172414,
            "unit": "ns",
            "range": "± 548.9687649509216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 704886.1836734693,
            "unit": "ns",
            "range": "± 62298.63553210289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273778.7727272727,
            "unit": "ns",
            "range": "± 31203.58739744033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1043855.9512195121,
            "unit": "ns",
            "range": "± 55274.722580874644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8418590.29,
            "unit": "ns",
            "range": "± 1849680.8721080604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2201692.3048780486,
            "unit": "ns",
            "range": "± 116512.76016207373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321193.6603773586,
            "unit": "ns",
            "range": "± 91454.23372648105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2682004.121212121,
            "unit": "ns",
            "range": "± 83552.05817885247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2963817.6842105263,
            "unit": "ns",
            "range": "± 63621.986783966284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10123149,
            "unit": "ns",
            "range": "± 911754.2915417277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3025306.966282895,
            "unit": "ns",
            "range": "± 64018.99812358962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 934719.7862630208,
            "unit": "ns",
            "range": "± 5723.434705974288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610833.2295572917,
            "unit": "ns",
            "range": "± 5386.488285936643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642398.6248497595,
            "unit": "ns",
            "range": "± 17833.30939587354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457704.67142159597,
            "unit": "ns",
            "range": "± 452.9177031197365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424959.71946614585,
            "unit": "ns",
            "range": "± 1383.8364682574197"
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
          "id": "200a0686c37ec092e96f7582fbc6c472d71babd2",
          "message": "Merge pull request #3713 from greymistcube/refactor/add-info-to-action-context\n\n✨ ♻️ Added `Txs` property to `IActionContext`",
          "timestamp": "2024-03-28T14:27:37+09:00",
          "tree_id": "e833efb9d625c8f530880a2800a40c432cc015d4",
          "url": "https://github.com/planetarium/libplanet/commit/200a0686c37ec092e96f7582fbc6c472d71babd2"
        },
        "date": 1711604187062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5841535.714285715,
            "unit": "ns",
            "range": "± 62979.55093053687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14276132.083333334,
            "unit": "ns",
            "range": "± 63646.71778934135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35872779.538461536,
            "unit": "ns",
            "range": "± 227444.75906162921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73297053.85714285,
            "unit": "ns",
            "range": "± 257325.09302103773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145359775.4,
            "unit": "ns",
            "range": "± 528113.4869324694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18111.494736842105,
            "unit": "ns",
            "range": "± 1355.115311680422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109439.5487804878,
            "unit": "ns",
            "range": "± 3443.295114793528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105385.94117647059,
            "unit": "ns",
            "range": "± 4265.775373419302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94473.61111111111,
            "unit": "ns",
            "range": "± 3557.519444923682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3156651.5,
            "unit": "ns",
            "range": "± 41802.175384597096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2709832.42,
            "unit": "ns",
            "range": "± 169805.3619924812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4855.648351648351,
            "unit": "ns",
            "range": "± 651.9636897460263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26509.70930232558,
            "unit": "ns",
            "range": "± 1918.4133463468868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22616.90322580645,
            "unit": "ns",
            "range": "± 1311.5053420676904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28023.136842105265,
            "unit": "ns",
            "range": "± 5374.223323619783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1249.891304347826,
            "unit": "ns",
            "range": "± 194.02506105954225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4916.617021276596,
            "unit": "ns",
            "range": "± 731.8848711740102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 660167.4175824176,
            "unit": "ns",
            "range": "± 39177.01708940699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1258600.1896551724,
            "unit": "ns",
            "range": "± 51703.90521965821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1054690.894736842,
            "unit": "ns",
            "range": "± 75062.74608030578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10103050.38,
            "unit": "ns",
            "range": "± 2209651.8948340337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205530.96875,
            "unit": "ns",
            "range": "± 96838.70598110162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309602.6764705884,
            "unit": "ns",
            "range": "± 110486.89553003068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2651038.3571428573,
            "unit": "ns",
            "range": "± 38688.04943411445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2967330.066666667,
            "unit": "ns",
            "range": "± 111164.62081063709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10026121.73,
            "unit": "ns",
            "range": "± 859137.2972043023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054462.034375,
            "unit": "ns",
            "range": "± 51537.19257567631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919321.2763020833,
            "unit": "ns",
            "range": "± 5033.511684568543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615083.7696614583,
            "unit": "ns",
            "range": "± 4546.079887923468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1638572.4764322916,
            "unit": "ns",
            "range": "± 16971.88091571225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471446.46559495194,
            "unit": "ns",
            "range": "± 645.6758644439069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421745.2935546875,
            "unit": "ns",
            "range": "± 1120.3554675111975"
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
          "id": "c8c03a16a0d34aa8b3274fef5cbfb64298084a41",
          "message": "Merge pull request #3714 from greymistcube/remove/total-updated-fungible-assets\n\n🧹 Removed `TotalUpdatedFungibleAssets` from `IWorld`",
          "timestamp": "2024-03-28T15:38:23+09:00",
          "tree_id": "33555845d43c83cb9f31a0f0daf13075fab4237b",
          "url": "https://github.com/planetarium/libplanet/commit/c8c03a16a0d34aa8b3274fef5cbfb64298084a41"
        },
        "date": 1711608436473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5806771.357142857,
            "unit": "ns",
            "range": "± 18962.553563058646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14279670.23076923,
            "unit": "ns",
            "range": "± 56426.84705609828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36539830.307692304,
            "unit": "ns",
            "range": "± 317795.37084036344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72895338.85714285,
            "unit": "ns",
            "range": "± 270567.80007914896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145708180.4,
            "unit": "ns",
            "range": "± 351695.9705595567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17881.58064516129,
            "unit": "ns",
            "range": "± 1537.6417101365823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109744.10447761194,
            "unit": "ns",
            "range": "± 4339.894689178697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103709.72222222222,
            "unit": "ns",
            "range": "± 3938.5619658177093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91978.73076923077,
            "unit": "ns",
            "range": "± 2446.0726654405394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153914.8157894737,
            "unit": "ns",
            "range": "± 107230.98012281847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759260.8170731706,
            "unit": "ns",
            "range": "± 145607.8079243911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5746.655913978495,
            "unit": "ns",
            "range": "± 658.6096438153645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26254.168674698794,
            "unit": "ns",
            "range": "± 1317.4938683550297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22250.74074074074,
            "unit": "ns",
            "range": "± 1173.808063289925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27958.494736842105,
            "unit": "ns",
            "range": "± 5587.223243417119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1204.5652173913043,
            "unit": "ns",
            "range": "± 269.99423291959835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5036.835051546392,
            "unit": "ns",
            "range": "± 1044.739826866921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 658017.9157894737,
            "unit": "ns",
            "range": "± 39825.85413133917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1245199.44,
            "unit": "ns",
            "range": "± 47330.62935768218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1025152.4731182796,
            "unit": "ns",
            "range": "± 58595.68792722746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9992595.43,
            "unit": "ns",
            "range": "± 2122239.414154499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2218051.7678571427,
            "unit": "ns",
            "range": "± 92261.77015821313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2314244.1967213117,
            "unit": "ns",
            "range": "± 104251.63651038763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2630201,
            "unit": "ns",
            "range": "± 27268.73380065362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2896471.111111111,
            "unit": "ns",
            "range": "± 80745.39549593446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11181006.31,
            "unit": "ns",
            "range": "± 1511399.913862252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3102252.365364583,
            "unit": "ns",
            "range": "± 30014.75250840103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920849.3001953125,
            "unit": "ns",
            "range": "± 4513.511833936919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 632980.9861979167,
            "unit": "ns",
            "range": "± 6564.792665839364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619349.4789663462,
            "unit": "ns",
            "range": "± 1090.0640588465378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458218.7974934896,
            "unit": "ns",
            "range": "± 1322.7706859357888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428775.30485026044,
            "unit": "ns",
            "range": "± 1174.7029981360627"
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
          "id": "b15c7261184cdbdbd9cb5850914a0999f9137ab8",
          "message": "Merge pull request #3715 from greymistcube/refactor/iworld-extensions\n\n♻️ 🚚 Moved `Currency` and `Validator` related methods from `IWorldState` and `IWorld` to an extension `class`",
          "timestamp": "2024-03-29T08:57:43+09:00",
          "tree_id": "e5b1e33019de8451e46cbbf3bb85c042d0273f24",
          "url": "https://github.com/planetarium/libplanet/commit/b15c7261184cdbdbd9cb5850914a0999f9137ab8"
        },
        "date": 1711670796740,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5878300.285714285,
            "unit": "ns",
            "range": "± 18822.145146398376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14389112.538461538,
            "unit": "ns",
            "range": "± 71788.60715161725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36755958.692307696,
            "unit": "ns",
            "range": "± 127574.90295337912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72665399.21428572,
            "unit": "ns",
            "range": "± 217597.82586165649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146858797.6,
            "unit": "ns",
            "range": "± 526904.9595393027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18164.333333333332,
            "unit": "ns",
            "range": "± 1665.0753715620372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109484.54838709677,
            "unit": "ns",
            "range": "± 4921.389072960638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105225.41666666667,
            "unit": "ns",
            "range": "± 4062.865663508642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91742.39130434782,
            "unit": "ns",
            "range": "± 2291.08983076793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3165321.189189189,
            "unit": "ns",
            "range": "± 106561.05225770235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2701595.7108433736,
            "unit": "ns",
            "range": "± 143684.4462323118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5674.966292134832,
            "unit": "ns",
            "range": "± 409.4097594386283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27167.279069767443,
            "unit": "ns",
            "range": "± 1876.1204630279115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21956.11111111111,
            "unit": "ns",
            "range": "± 1024.8019686749242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27488.541666666668,
            "unit": "ns",
            "range": "± 5360.4805929803815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1066.3804347826087,
            "unit": "ns",
            "range": "± 218.09892111887092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5273.471910112359,
            "unit": "ns",
            "range": "± 427.07025422394025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 674651.445652174,
            "unit": "ns",
            "range": "± 52734.00033370136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1229526.5869565217,
            "unit": "ns",
            "range": "± 43777.144583079265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1042743.3333333334,
            "unit": "ns",
            "range": "± 69868.53411517598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9940116.13,
            "unit": "ns",
            "range": "± 2234187.5616577617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2210337.5149253733,
            "unit": "ns",
            "range": "± 100810.52090273908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317178.5573770492,
            "unit": "ns",
            "range": "± 103600.00906153831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2667486.4102564105,
            "unit": "ns",
            "range": "± 89876.95744291571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2940016.418918919,
            "unit": "ns",
            "range": "± 97841.47050866928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11361375.83,
            "unit": "ns",
            "range": "± 1639490.5691499708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3096847.8598958333,
            "unit": "ns",
            "range": "± 49864.71647134617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928257.9949079241,
            "unit": "ns",
            "range": "± 4543.3721733589155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 633768.8692708333,
            "unit": "ns",
            "range": "± 8749.879196029338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619934.1953125,
            "unit": "ns",
            "range": "± 1254.5732072061528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462148.63804408483,
            "unit": "ns",
            "range": "± 1502.5827180589565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421862.5472330729,
            "unit": "ns",
            "range": "± 1090.213430909136"
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
          "id": "362de2c5404515ccb1b22a0d454c87d1db580b79",
          "message": "Merge pull request #3716 from greymistcube/refactor/dumb-action\n\n🧹 Cleanup `DumbAction`",
          "timestamp": "2024-03-29T20:27:00+09:00",
          "tree_id": "7145d7a7252499b8292eaabb2d5a56d421e6c0c3",
          "url": "https://github.com/planetarium/libplanet/commit/362de2c5404515ccb1b22a0d454c87d1db580b79"
        },
        "date": 1711712155798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5984268.214285715,
            "unit": "ns",
            "range": "± 17253.798846713646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14442339.153846154,
            "unit": "ns",
            "range": "± 50921.053147406776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36191106,
            "unit": "ns",
            "range": "± 55050.154975561454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72785388.15384616,
            "unit": "ns",
            "range": "± 184843.06493746082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146901986.33333334,
            "unit": "ns",
            "range": "± 328579.8415655442"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17707.82978723404,
            "unit": "ns",
            "range": "± 1542.2859980393848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109999.47916666667,
            "unit": "ns",
            "range": "± 3823.0619008105373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105193.1,
            "unit": "ns",
            "range": "± 5100.9870603497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92534.24528301887,
            "unit": "ns",
            "range": "± 3791.816557280146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3196580.5714285714,
            "unit": "ns",
            "range": "± 53129.96033778405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738287.4081632653,
            "unit": "ns",
            "range": "± 159753.18866043657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5586.021978021978,
            "unit": "ns",
            "range": "± 567.0569827925776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27439.13953488372,
            "unit": "ns",
            "range": "± 1799.1574509314448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22509.197916666668,
            "unit": "ns",
            "range": "± 1547.966935725979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27905.925531914894,
            "unit": "ns",
            "range": "± 4588.933884759722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1141.3297872340424,
            "unit": "ns",
            "range": "± 199.4688855623381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4873.591397849463,
            "unit": "ns",
            "range": "± 825.625457727012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 694546.7040816327,
            "unit": "ns",
            "range": "± 63944.93561162954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1242733.425531915,
            "unit": "ns",
            "range": "± 48461.836746196335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1007376.44,
            "unit": "ns",
            "range": "± 50285.78852842426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10065746.55,
            "unit": "ns",
            "range": "± 2176845.663201681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204740.8596491227,
            "unit": "ns",
            "range": "± 95274.6452308945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306422.5833333335,
            "unit": "ns",
            "range": "± 99743.79657177815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2670946.919354839,
            "unit": "ns",
            "range": "± 79631.95410418868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2890092.205128205,
            "unit": "ns",
            "range": "± 100436.86677111607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11424949.62,
            "unit": "ns",
            "range": "± 1570834.1890134905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3093609.375260417,
            "unit": "ns",
            "range": "± 45458.29492001097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 937610.2893229167,
            "unit": "ns",
            "range": "± 5866.20471573168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 625935.5972055289,
            "unit": "ns",
            "range": "± 6269.757236366394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1616285.130045573,
            "unit": "ns",
            "range": "± 1388.4772076331444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458875.1791341146,
            "unit": "ns",
            "range": "± 1053.404891582941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428096.0259440104,
            "unit": "ns",
            "range": "± 715.3017036999527"
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
          "id": "ad08e71a984c56196853c85567a50b7e6ea7e374",
          "message": "Merge pull request #3717 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup",
          "timestamp": "2024-03-29T20:58:16+09:00",
          "tree_id": "e2d7a8ace564d7f0e6b01893b169194ab2e4d640",
          "url": "https://github.com/planetarium/libplanet/commit/ad08e71a984c56196853c85567a50b7e6ea7e374"
        },
        "date": 1711714071682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5764985.428571428,
            "unit": "ns",
            "range": "± 62267.2538581313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14389410.083333334,
            "unit": "ns",
            "range": "± 86179.05531081872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36250673.384615384,
            "unit": "ns",
            "range": "± 85359.31193640451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72912936.53333333,
            "unit": "ns",
            "range": "± 266248.54121582035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145915011.46666667,
            "unit": "ns",
            "range": "± 379922.85706139775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17662.42391304348,
            "unit": "ns",
            "range": "± 1443.6647599779187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110385.83928571429,
            "unit": "ns",
            "range": "± 4751.324920585208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105902.58695652174,
            "unit": "ns",
            "range": "± 4042.08701086229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92571.9705882353,
            "unit": "ns",
            "range": "± 2982.609214493488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3151771.1818181816,
            "unit": "ns",
            "range": "± 115759.13234279562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747872.4054054054,
            "unit": "ns",
            "range": "± 137757.18421619927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5080.83908045977,
            "unit": "ns",
            "range": "± 494.9670619429609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27373.12,
            "unit": "ns",
            "range": "± 1286.1953422316449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23376.760416666668,
            "unit": "ns",
            "range": "± 1954.898286463177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29497.554347826088,
            "unit": "ns",
            "range": "± 4883.951058525136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1214.563829787234,
            "unit": "ns",
            "range": "± 228.98220612235113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4688.771739130435,
            "unit": "ns",
            "range": "± 484.7155981198443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 696718.3195876288,
            "unit": "ns",
            "range": "± 73609.37098624435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1245681.3846153845,
            "unit": "ns",
            "range": "± 42524.222089246345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1046789.5913978495,
            "unit": "ns",
            "range": "± 65704.94259703037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10147525.73,
            "unit": "ns",
            "range": "± 2288570.4120006193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195793.4821428573,
            "unit": "ns",
            "range": "± 94177.5337409456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2315649.595744681,
            "unit": "ns",
            "range": "± 88600.1204959578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2683048.6764705884,
            "unit": "ns",
            "range": "± 86067.88652577318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2995785.644444444,
            "unit": "ns",
            "range": "± 113962.7739419874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10014081.935483871,
            "unit": "ns",
            "range": "± 717284.3484821279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3024184.460503472,
            "unit": "ns",
            "range": "± 63763.53938908329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924426.2867606027,
            "unit": "ns",
            "range": "± 3003.624811644402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615976.1938151042,
            "unit": "ns",
            "range": "± 4175.928795566543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1643662.3774038462,
            "unit": "ns",
            "range": "± 19032.545108754006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463835.53336588544,
            "unit": "ns",
            "range": "± 976.1630320830164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431547.95188802085,
            "unit": "ns",
            "range": "± 912.5108238371042"
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
          "id": "ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc",
          "message": "Merge pull request #3718 from greymistcube/refactor/dumb-action\n\n♻️ Overhaul `DumbAction`",
          "timestamp": "2024-04-01T10:34:00+09:00",
          "tree_id": "87a583c1d570c6bc2afb4f2b8f7a1ca01ed70eaa",
          "url": "https://github.com/planetarium/libplanet/commit/ea7bae21f01aef2eafb78cb40df02c5cc09dd9fc"
        },
        "date": 1711935772212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5780711.714285715,
            "unit": "ns",
            "range": "± 57064.97715146046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14361809.416666666,
            "unit": "ns",
            "range": "± 36101.34481115963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36203779.23076923,
            "unit": "ns",
            "range": "± 185356.71542512914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72696388.07692307,
            "unit": "ns",
            "range": "± 180979.97206111948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147124936.4,
            "unit": "ns",
            "range": "± 352571.8502517911"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18330.489361702126,
            "unit": "ns",
            "range": "± 1540.976137672111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109679.14285714286,
            "unit": "ns",
            "range": "± 3044.05843163229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105406.42,
            "unit": "ns",
            "range": "± 3936.2761646624585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91021.28571428571,
            "unit": "ns",
            "range": "± 1596.266578304197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169022.6,
            "unit": "ns",
            "range": "± 38834.65847814663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2698103.28,
            "unit": "ns",
            "range": "± 175539.7614068945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5243.097826086957,
            "unit": "ns",
            "range": "± 738.2389062035303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26817.795454545456,
            "unit": "ns",
            "range": "± 2246.3039075415804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21526.020408163266,
            "unit": "ns",
            "range": "± 718.380397427549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28234.236559139787,
            "unit": "ns",
            "range": "± 4825.913967047542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1161.5384615384614,
            "unit": "ns",
            "range": "± 253.45130181784901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4686.011111111111,
            "unit": "ns",
            "range": "± 531.9923859902137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689312.06,
            "unit": "ns",
            "range": "± 61218.720369699295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1254040.1395348837,
            "unit": "ns",
            "range": "± 44711.77592812361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1034732.9712643678,
            "unit": "ns",
            "range": "± 56476.39105400264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9852734.57,
            "unit": "ns",
            "range": "± 2304803.4749052194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209715.275,
            "unit": "ns",
            "range": "± 78442.8514577324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2299535.1166666667,
            "unit": "ns",
            "range": "± 96173.02490737003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2674835.236842105,
            "unit": "ns",
            "range": "± 89702.04575311391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2879853.724137931,
            "unit": "ns",
            "range": "± 82911.3246193514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10086025.777777778,
            "unit": "ns",
            "range": "± 970496.435526154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3029027.34140625,
            "unit": "ns",
            "range": "± 45389.14425560349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926981.3777994792,
            "unit": "ns",
            "range": "± 5991.473991331235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616715.4560546875,
            "unit": "ns",
            "range": "± 5258.156522057176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1634385.7036458333,
            "unit": "ns",
            "range": "± 18196.086531669745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465305.0662760417,
            "unit": "ns",
            "range": "± 528.6809184490618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417785.17789713544,
            "unit": "ns",
            "range": "± 1223.9048706751491"
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
          "id": "421ca95ad9e5ae172247b8b16b9057487bf47028",
          "message": "Merge pull request #3719 from greymistcube/refactor/test-util-bytes-equality\n\n♻️ Changed `AssertBytesEqual()` overloads and use more hex representation",
          "timestamp": "2024-04-01T12:48:45+09:00",
          "tree_id": "407de50a21cfd9ecda31c72e8385cd67126ba4b7",
          "url": "https://github.com/planetarium/libplanet/commit/421ca95ad9e5ae172247b8b16b9057487bf47028"
        },
        "date": 1711943869797,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5698219.8,
            "unit": "ns",
            "range": "± 58419.20536848917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14246972.25,
            "unit": "ns",
            "range": "± 40002.93579482068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36271008.038461536,
            "unit": "ns",
            "range": "± 238225.99728220797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72793035.86666666,
            "unit": "ns",
            "range": "± 263306.6614956427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145761676.36666667,
            "unit": "ns",
            "range": "± 438073.1240717478"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17998.86170212766,
            "unit": "ns",
            "range": "± 1130.2751268556115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110941.5294117647,
            "unit": "ns",
            "range": "± 3507.5249430875706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105044.96428571429,
            "unit": "ns",
            "range": "± 4230.49412959284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90970.17073170732,
            "unit": "ns",
            "range": "± 2861.476715809855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3189589.6428571427,
            "unit": "ns",
            "range": "± 53174.58356946215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2704283.76,
            "unit": "ns",
            "range": "± 178547.1604414346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4602.988095238095,
            "unit": "ns",
            "range": "± 428.2827152640165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26479.978494623654,
            "unit": "ns",
            "range": "± 1876.3491782349379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22722.8064516129,
            "unit": "ns",
            "range": "± 1538.8790899340288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30780.94680851064,
            "unit": "ns",
            "range": "± 5752.776577617016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1393.7916666666667,
            "unit": "ns",
            "range": "± 300.01971572641924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4914.548387096775,
            "unit": "ns",
            "range": "± 725.5780082133175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 694524.3939393939,
            "unit": "ns",
            "range": "± 72733.87228988983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1257970.698630137,
            "unit": "ns",
            "range": "± 61711.633137675315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1039137.4086021505,
            "unit": "ns",
            "range": "± 72642.30149884171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8411160.41,
            "unit": "ns",
            "range": "± 1829985.613177733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2235860.9864864866,
            "unit": "ns",
            "range": "± 74962.2474440826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2313571.8258426967,
            "unit": "ns",
            "range": "± 124144.30043215978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2677538.0512820515,
            "unit": "ns",
            "range": "± 89749.70821502157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2937493.8983050846,
            "unit": "ns",
            "range": "± 129333.8484738564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9880161.96875,
            "unit": "ns",
            "range": "± 816501.3771738462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3050036.1395970397,
            "unit": "ns",
            "range": "± 65516.796291834245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928195.1175130209,
            "unit": "ns",
            "range": "± 4511.614362755473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618889.9931640625,
            "unit": "ns",
            "range": "± 5521.368813037371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630076.2416294643,
            "unit": "ns",
            "range": "± 14378.26536266503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469745.25556640624,
            "unit": "ns",
            "range": "± 684.7532443814154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417318.3447614397,
            "unit": "ns",
            "range": "± 428.7194842300641"
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
          "id": "a763a2bd7072f072d207e8bd859df1389f5102eb",
          "message": "Merge pull request #3720 from greymistcube/refactor/dumb-action\n\n♻️ Refactor `DumbAction`",
          "timestamp": "2024-04-02T08:53:21+09:00",
          "tree_id": "4a1f60ea587825d5c1cadd8ec7f90693d651c6dd",
          "url": "https://github.com/planetarium/libplanet/commit/a763a2bd7072f072d207e8bd859df1389f5102eb"
        },
        "date": 1712016133055,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5751100.5,
            "unit": "ns",
            "range": "± 62531.807817179055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14484794.833333334,
            "unit": "ns",
            "range": "± 26857.055781347743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35933193.961538464,
            "unit": "ns",
            "range": "± 97795.59869409204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72525735.8,
            "unit": "ns",
            "range": "± 242988.16424620946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146557583.6,
            "unit": "ns",
            "range": "± 502230.27113307297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17784.852631578946,
            "unit": "ns",
            "range": "± 1488.8195593083708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112931.85714285714,
            "unit": "ns",
            "range": "± 1963.2931462270167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104402.10869565218,
            "unit": "ns",
            "range": "± 3856.342743402014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91437.81578947368,
            "unit": "ns",
            "range": "± 3123.8180974073857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3185635.1666666665,
            "unit": "ns",
            "range": "± 28033.433049042556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740694.7647058824,
            "unit": "ns",
            "range": "± 147685.0471444656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4911.155913978495,
            "unit": "ns",
            "range": "± 601.9214432101305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27059.196629213482,
            "unit": "ns",
            "range": "± 2602.8677995473236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22561.197916666668,
            "unit": "ns",
            "range": "± 1803.021680809551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28923.659574468085,
            "unit": "ns",
            "range": "± 4708.369412867434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1237.9105263157894,
            "unit": "ns",
            "range": "± 255.70854813663465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4562.318181818182,
            "unit": "ns",
            "range": "± 499.8723410699687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684223.191919192,
            "unit": "ns",
            "range": "± 55945.787202684856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1249545.1818181819,
            "unit": "ns",
            "range": "± 29952.53357856213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1033511.0326086957,
            "unit": "ns",
            "range": "± 71021.18825423074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9946280.28,
            "unit": "ns",
            "range": "± 2143497.3643838866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2211438.2115384615,
            "unit": "ns",
            "range": "± 90574.1444938759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310443.395348837,
            "unit": "ns",
            "range": "± 85012.54720869978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2669949.6756756757,
            "unit": "ns",
            "range": "± 76390.4563498369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2868475.214285714,
            "unit": "ns",
            "range": "± 65769.94830782738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10116974.888888888,
            "unit": "ns",
            "range": "± 956543.2661955331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3080544.578342014,
            "unit": "ns",
            "range": "± 63805.94130930423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914141.9156668527,
            "unit": "ns",
            "range": "± 4482.702135890186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614313.8999348958,
            "unit": "ns",
            "range": "± 5096.102041909989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651409.6091145833,
            "unit": "ns",
            "range": "± 16241.829707456745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460397.9383789062,
            "unit": "ns",
            "range": "± 859.1968899514592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420823.10953776044,
            "unit": "ns",
            "range": "± 1163.7158610566717"
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
          "id": "1ea676dfe55226895127f404097c0fb64399b925",
          "message": "Merge pull request #3721 from greymistcube/refactor/dumb-action\n\n♻️ Add mint and burn functionality to `DumbAction`",
          "timestamp": "2024-04-02T18:27:19+09:00",
          "tree_id": "581ef3be9c0e05074ee9c4ffb20168dd9eff71a3",
          "url": "https://github.com/planetarium/libplanet/commit/1ea676dfe55226895127f404097c0fb64399b925"
        },
        "date": 1712050561386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5741146.285714285,
            "unit": "ns",
            "range": "± 54519.12579640649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14269763.666666666,
            "unit": "ns",
            "range": "± 65784.99900755673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36119328.57692308,
            "unit": "ns",
            "range": "± 178645.61579584572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72684684.64285715,
            "unit": "ns",
            "range": "± 205585.6568548486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145990175.46666667,
            "unit": "ns",
            "range": "± 345798.926139551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17963.989361702126,
            "unit": "ns",
            "range": "± 1416.3968408035573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113184.25490196078,
            "unit": "ns",
            "range": "± 4575.773372199009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104272.75555555556,
            "unit": "ns",
            "range": "± 3958.9469281360643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94444.15151515152,
            "unit": "ns",
            "range": "± 2981.5590313753237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3217176.433333333,
            "unit": "ns",
            "range": "± 58887.8291032641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2778385.662337662,
            "unit": "ns",
            "range": "± 140733.5198304163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4854.583333333333,
            "unit": "ns",
            "range": "± 373.44428168885446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27717.298850574713,
            "unit": "ns",
            "range": "± 1603.7757347348302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22014.170454545456,
            "unit": "ns",
            "range": "± 1249.6989312979138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27924.58064516129,
            "unit": "ns",
            "range": "± 4780.484922470643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1184.1473684210525,
            "unit": "ns",
            "range": "± 189.8319507903595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4889.747252747253,
            "unit": "ns",
            "range": "± 542.2942127543066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686019.6170212766,
            "unit": "ns",
            "range": "± 59010.90414238044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1237131.956521739,
            "unit": "ns",
            "range": "± 30969.308285459687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1013630,
            "unit": "ns",
            "range": "± 54466.64738080325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8117545.14,
            "unit": "ns",
            "range": "± 1918654.3882502336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2244628.6486486485,
            "unit": "ns",
            "range": "± 64071.197244946976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320244.4,
            "unit": "ns",
            "range": "± 112494.9234801029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2665201.75,
            "unit": "ns",
            "range": "± 52767.5037677696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2984662.9607843137,
            "unit": "ns",
            "range": "± 120713.16603352939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9994629.717171717,
            "unit": "ns",
            "range": "± 924903.688007888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031500.2513020835,
            "unit": "ns",
            "range": "± 36799.14482765773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918062.4698567708,
            "unit": "ns",
            "range": "± 6261.107238836218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614200.8188151042,
            "unit": "ns",
            "range": "± 5925.740256672786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1622038.0041666667,
            "unit": "ns",
            "range": "± 15973.06167967615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455008.9927734375,
            "unit": "ns",
            "range": "± 1048.9900763261428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427497.1808035714,
            "unit": "ns",
            "range": "± 957.7391961710354"
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
          "id": "438df37e9ef7b1b76cc81331e1c1cde526e10e0b",
          "message": "Merge pull request #3722 from greymistcube/refactor/random-test\n\n♻️ Changed `RandomAction` to `ContextRecordingAction`",
          "timestamp": "2024-04-02T19:01:15+09:00",
          "tree_id": "8ac4897b6fdb0cba78832f4cd134cac834f7fdee",
          "url": "https://github.com/planetarium/libplanet/commit/438df37e9ef7b1b76cc81331e1c1cde526e10e0b"
        },
        "date": 1712052603025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5831815.142857143,
            "unit": "ns",
            "range": "± 48289.23824822055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14192486.76923077,
            "unit": "ns",
            "range": "± 47699.88906897276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36467449.86666667,
            "unit": "ns",
            "range": "± 681765.8600577376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72622800.78571428,
            "unit": "ns",
            "range": "± 164929.65030123907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146509159.56666666,
            "unit": "ns",
            "range": "± 375537.80351982574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17922.82608695652,
            "unit": "ns",
            "range": "± 1629.2730571321088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111204.89583333333,
            "unit": "ns",
            "range": "± 4344.981026031991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105744.01612903226,
            "unit": "ns",
            "range": "± 3154.1689964338493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91869.475,
            "unit": "ns",
            "range": "± 3208.8581401273473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149569.8333333335,
            "unit": "ns",
            "range": "± 33030.523929550465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2779332.5568181816,
            "unit": "ns",
            "range": "± 152665.57458562803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4921.698924731183,
            "unit": "ns",
            "range": "± 521.6224643599221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26614.6,
            "unit": "ns",
            "range": "± 1826.6476137344896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21926.09638554217,
            "unit": "ns",
            "range": "± 1171.6440462377375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29995.630434782608,
            "unit": "ns",
            "range": "± 4940.999357734169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1225.2736842105264,
            "unit": "ns",
            "range": "± 262.6302895344766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4776.733333333334,
            "unit": "ns",
            "range": "± 717.3087154485347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 697410.4848484849,
            "unit": "ns",
            "range": "± 73810.9365833651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1239751.6279069767,
            "unit": "ns",
            "range": "± 45821.5202108101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1012172.0394736842,
            "unit": "ns",
            "range": "± 51152.621349432535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8304633.86,
            "unit": "ns",
            "range": "± 1955105.1028564307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221126.946666667,
            "unit": "ns",
            "range": "± 111637.12547657607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317418.34375,
            "unit": "ns",
            "range": "± 104731.53166166061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2680610.6470588236,
            "unit": "ns",
            "range": "± 50176.92638173095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2985708.0188679243,
            "unit": "ns",
            "range": "± 124598.41674455431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10102738.442105263,
            "unit": "ns",
            "range": "± 945089.7221088714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3055373.18828125,
            "unit": "ns",
            "range": "± 44673.28784860569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917817.0681501116,
            "unit": "ns",
            "range": "± 5286.352083106899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617330.083984375,
            "unit": "ns",
            "range": "± 4299.831942154327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1627309.6889322917,
            "unit": "ns",
            "range": "± 1070.8904857532552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462467.9818929036,
            "unit": "ns",
            "range": "± 563.6307707871075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426205.6013671875,
            "unit": "ns",
            "range": "± 1389.4910043708114"
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
          "id": "03c1a63b7ab259350002a9031c78a30c64dcaf3e",
          "message": "Merge pull request #3723 from greymistcube/chore/cleanup\n\n🧹 Removed RecordRandom from DumbAction",
          "timestamp": "2024-04-03T00:56:21+09:00",
          "tree_id": "3421221604a67af3a457b2d9bdd5d6fdb44dfe0c",
          "url": "https://github.com/planetarium/libplanet/commit/03c1a63b7ab259350002a9031c78a30c64dcaf3e"
        },
        "date": 1712073920034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5729705.714285715,
            "unit": "ns",
            "range": "± 52663.450468960946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14254096.666666666,
            "unit": "ns",
            "range": "± 21815.494990876778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36353192.692307696,
            "unit": "ns",
            "range": "± 215563.12338245017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73417850.46666667,
            "unit": "ns",
            "range": "± 251554.05766919782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145848183.53333333,
            "unit": "ns",
            "range": "± 367035.76839416515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18339.968421052632,
            "unit": "ns",
            "range": "± 1712.9292470429539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108224.74626865672,
            "unit": "ns",
            "range": "± 3928.7516883336307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105570.43902439025,
            "unit": "ns",
            "range": "± 3791.171343059955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90537.84615384616,
            "unit": "ns",
            "range": "± 2405.609605772436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3154783.7666666666,
            "unit": "ns",
            "range": "± 92101.49631031435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2690896.78,
            "unit": "ns",
            "range": "± 178688.06862174472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4932.961538461538,
            "unit": "ns",
            "range": "± 494.10570861107374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 25956.01204819277,
            "unit": "ns",
            "range": "± 1155.080331848743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22801.422680412372,
            "unit": "ns",
            "range": "± 1936.7540705770846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28761.619565217392,
            "unit": "ns",
            "range": "± 4333.928674398995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1105.1758241758241,
            "unit": "ns",
            "range": "± 177.41142349582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5040.263157894737,
            "unit": "ns",
            "range": "± 633.9079604734616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690278.75,
            "unit": "ns",
            "range": "± 67886.9612849571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1249894.2549019607,
            "unit": "ns",
            "range": "± 51020.66555028193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1030830.951807229,
            "unit": "ns",
            "range": "± 54794.5227452133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8375096.3,
            "unit": "ns",
            "range": "± 1976991.2280456845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191689.587301587,
            "unit": "ns",
            "range": "± 93523.91798041601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292202.4782608696,
            "unit": "ns",
            "range": "± 73704.93059693847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2687415.117647059,
            "unit": "ns",
            "range": "± 70317.56645596298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2995002.156862745,
            "unit": "ns",
            "range": "± 121896.84855866825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9977255.129032258,
            "unit": "ns",
            "range": "± 810514.2774349349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3057669.106640625,
            "unit": "ns",
            "range": "± 32369.930690784255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921251.6112630208,
            "unit": "ns",
            "range": "± 3160.9087540572623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610044.4442057292,
            "unit": "ns",
            "range": "± 4798.4227236824945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1617413.6983072916,
            "unit": "ns",
            "range": "± 3455.7950645172873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466098.78365652903,
            "unit": "ns",
            "range": "± 667.3729141522264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421061.2052176339,
            "unit": "ns",
            "range": "± 1255.2106124661495"
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
          "id": "2b09e6c5623785e1b228b73e0e6c412d2a08355c",
          "message": "Merge pull request #3724 from greymistcube/chore/test-description-for-qol\n\n🧹 More descriptive currency ticker and documentation for easier testing",
          "timestamp": "2024-04-03T14:48:08+09:00",
          "tree_id": "23b3b99e5773f34063f3e1c09242ba5917cfc817",
          "url": "https://github.com/planetarium/libplanet/commit/2b09e6c5623785e1b228b73e0e6c412d2a08355c"
        },
        "date": 1712123813904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5719028.615384615,
            "unit": "ns",
            "range": "± 60629.19501298923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14363739.333333334,
            "unit": "ns",
            "range": "± 93478.72708641773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36033333.07692308,
            "unit": "ns",
            "range": "± 158158.90605625173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73299491.46666667,
            "unit": "ns",
            "range": "± 269221.2975089629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145619969.2,
            "unit": "ns",
            "range": "± 387413.45617370744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17673.260869565216,
            "unit": "ns",
            "range": "± 1401.0812533368587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109009.36206896552,
            "unit": "ns",
            "range": "± 4578.404232259816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106154.61363636363,
            "unit": "ns",
            "range": "± 3432.5976482386404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94450.9,
            "unit": "ns",
            "range": "± 3256.7578876025677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087855.8484848486,
            "unit": "ns",
            "range": "± 96698.56413816377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740994.794117647,
            "unit": "ns",
            "range": "± 129760.53430995399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4966.913043478261,
            "unit": "ns",
            "range": "± 714.7125319626639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26182.38157894737,
            "unit": "ns",
            "range": "± 1290.3153616291406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22088.391304347828,
            "unit": "ns",
            "range": "± 1511.7670539531082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28948.58064516129,
            "unit": "ns",
            "range": "± 5169.453751990547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1014.0957446808511,
            "unit": "ns",
            "range": "± 235.79160058498422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4785.752688172043,
            "unit": "ns",
            "range": "± 612.8420900219547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685987.6391752578,
            "unit": "ns",
            "range": "± 62962.408193994605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1254199.6101694915,
            "unit": "ns",
            "range": "± 53353.084843113305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1036863.588888889,
            "unit": "ns",
            "range": "± 59215.63923262136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8277660.94,
            "unit": "ns",
            "range": "± 1927274.2959950434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2176969.7391304346,
            "unit": "ns",
            "range": "± 61430.77279866782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2327822.689189189,
            "unit": "ns",
            "range": "± 78306.79596477415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2663114.25,
            "unit": "ns",
            "range": "± 25111.303529124452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2942310.5576923075,
            "unit": "ns",
            "range": "± 121385.89887746732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10004799.346938776,
            "unit": "ns",
            "range": "± 938160.1156341092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3040708.5477764425,
            "unit": "ns",
            "range": "± 19734.264330112215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916475.5291015625,
            "unit": "ns",
            "range": "± 5358.189190972156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613155.9763671875,
            "unit": "ns",
            "range": "± 4907.7758209300455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1638607.2259114583,
            "unit": "ns",
            "range": "± 4138.921164297451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457021.9129882812,
            "unit": "ns",
            "range": "± 1140.6401749966785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424845.57662760414,
            "unit": "ns",
            "range": "± 1701.2050149889656"
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
          "id": "c000850274ad9a846d44f628b66e2561b4002830",
          "message": "Merge pull request #3726 from greymistcube/refactor/shared-currency-for-testing\n\n♻️ Shared `Currencies` for testing",
          "timestamp": "2024-04-04T10:02:44+09:00",
          "tree_id": "c95218d091f584782dc1bef9ce1fca86a42984f5",
          "url": "https://github.com/planetarium/libplanet/commit/c000850274ad9a846d44f628b66e2561b4002830"
        },
        "date": 1712193085195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5734122.285714285,
            "unit": "ns",
            "range": "± 53969.99725656494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14309490.846153846,
            "unit": "ns",
            "range": "± 30784.163439031854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36171241.428571425,
            "unit": "ns",
            "range": "± 117047.3028202466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73040650.92307693,
            "unit": "ns",
            "range": "± 158406.63774311013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146090938.6,
            "unit": "ns",
            "range": "± 346822.84942538437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17496.510869565216,
            "unit": "ns",
            "range": "± 1348.9314492684975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108740.0425531915,
            "unit": "ns",
            "range": "± 4204.063561951992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105224.48214285714,
            "unit": "ns",
            "range": "± 4490.769636370591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91407.23809523809,
            "unit": "ns",
            "range": "± 2046.2403061410434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145460.972972973,
            "unit": "ns",
            "range": "± 104536.38678535882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705563.27,
            "unit": "ns",
            "range": "± 171740.31895735158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4979.9111111111115,
            "unit": "ns",
            "range": "± 747.889098977608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26429.535714285714,
            "unit": "ns",
            "range": "± 1323.322301773749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21976.904761904763,
            "unit": "ns",
            "range": "± 1174.2944317790032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30388.5625,
            "unit": "ns",
            "range": "± 5162.863291282628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1295.4130434782608,
            "unit": "ns",
            "range": "± 253.7550152018399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4760.011235955056,
            "unit": "ns",
            "range": "± 633.667831223003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 677979.9587628866,
            "unit": "ns",
            "range": "± 59851.73841911317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1249187.8,
            "unit": "ns",
            "range": "± 43582.16300818254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1046707.9896907216,
            "unit": "ns",
            "range": "± 69526.80659232795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8215716.65,
            "unit": "ns",
            "range": "± 2047471.2566293823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2222385.0588235296,
            "unit": "ns",
            "range": "± 106467.93632348457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321223.5555555555,
            "unit": "ns",
            "range": "± 63801.8576654638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2696433.28125,
            "unit": "ns",
            "range": "± 65615.70811353733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3010655.4444444445,
            "unit": "ns",
            "range": "± 82476.79407115925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10078874.86,
            "unit": "ns",
            "range": "± 851973.0344387838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3025877.0736979167,
            "unit": "ns",
            "range": "± 38028.77433963708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924354.9396484375,
            "unit": "ns",
            "range": "± 4357.098597369916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 607910.1458984375,
            "unit": "ns",
            "range": "± 5001.406345739982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644311.9079427083,
            "unit": "ns",
            "range": "± 5180.88835595605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462695.36409505206,
            "unit": "ns",
            "range": "± 948.6881630297295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420478.6940917969,
            "unit": "ns",
            "range": "± 1039.6003001812683"
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
          "id": "f63f65c6f3d180999373bb839c5cb8396c5c3bc5",
          "message": "Merge pull request #3727 from greymistcube/chore/fix-exception-message\n\n🩹 Added missing information in Exception",
          "timestamp": "2024-04-04T16:52:49+09:00",
          "tree_id": "446381872af4f2fe81380a140647caf2f459f254",
          "url": "https://github.com/planetarium/libplanet/commit/f63f65c6f3d180999373bb839c5cb8396c5c3bc5"
        },
        "date": 1712217698063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5730369.428571428,
            "unit": "ns",
            "range": "± 59322.92217336241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14282910.538461538,
            "unit": "ns",
            "range": "± 122077.20087483943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36312896.28571428,
            "unit": "ns",
            "range": "± 523282.11169655365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73019291.93333334,
            "unit": "ns",
            "range": "± 241196.3895037363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148319308.13333333,
            "unit": "ns",
            "range": "± 498853.7794457075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 19064.565217391304,
            "unit": "ns",
            "range": "± 1830.7869700666668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109755.4827586207,
            "unit": "ns",
            "range": "± 4800.490692175377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105943.30434782608,
            "unit": "ns",
            "range": "± 4076.2859722468233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93234.04347826086,
            "unit": "ns",
            "range": "± 3516.511389662088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113220.8333333335,
            "unit": "ns",
            "range": "± 152327.2019242011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2768965.590909091,
            "unit": "ns",
            "range": "± 129942.09545047683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5102.755319148936,
            "unit": "ns",
            "range": "± 815.645422727648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27100.846153846152,
            "unit": "ns",
            "range": "± 2580.760701477492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22766.447368421053,
            "unit": "ns",
            "range": "± 1486.8636516093343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28686.5,
            "unit": "ns",
            "range": "± 4969.834643838442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1291.9893617021276,
            "unit": "ns",
            "range": "± 289.0567806958606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4689.630434782609,
            "unit": "ns",
            "range": "± 630.4278978980551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684901.7204301076,
            "unit": "ns",
            "range": "± 60867.60507166453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1246584.9047619049,
            "unit": "ns",
            "range": "± 44924.30685096309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1032829.7386363636,
            "unit": "ns",
            "range": "± 53829.157158357775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8359221.56,
            "unit": "ns",
            "range": "± 1862839.662922333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178297.875,
            "unit": "ns",
            "range": "± 55438.23858088939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289041.3913043477,
            "unit": "ns",
            "range": "± 86320.72979005636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2712896.175,
            "unit": "ns",
            "range": "± 87153.05117770677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2869426.904761905,
            "unit": "ns",
            "range": "± 67962.31954833852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10194572.969696969,
            "unit": "ns",
            "range": "± 1058059.473604501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3040334.7885416667,
            "unit": "ns",
            "range": "± 44677.40389580349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920187.3283203125,
            "unit": "ns",
            "range": "± 5612.33103801437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614149.6741536459,
            "unit": "ns",
            "range": "± 4873.944583500505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1618562.7374441964,
            "unit": "ns",
            "range": "± 17514.555364435713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456574.25807291665,
            "unit": "ns",
            "range": "± 1124.4466563841959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426819.4921549479,
            "unit": "ns",
            "range": "± 1805.203057389527"
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
          "id": "74c0af4f0eb2c55103c10378c3e77f7d2e595d44",
          "message": "Merge pull request #3728 from greymistcube/refactor/remove-negative-balance\n\n♻️ Removed negative balance feature",
          "timestamp": "2024-04-05T13:01:33+09:00",
          "tree_id": "38305c1f46d1f603d4fb690302d54cb8f389db44",
          "url": "https://github.com/planetarium/libplanet/commit/74c0af4f0eb2c55103c10378c3e77f7d2e595d44"
        },
        "date": 1712290224599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5615288.846153846,
            "unit": "ns",
            "range": "± 19376.806960238806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14297230.384615384,
            "unit": "ns",
            "range": "± 56564.23962118714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36230882.166666664,
            "unit": "ns",
            "range": "± 232276.23022710512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72292946.71428572,
            "unit": "ns",
            "range": "± 184312.6006913374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145304441.33333334,
            "unit": "ns",
            "range": "± 256184.76059216846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17928.90425531915,
            "unit": "ns",
            "range": "± 1307.1566373642272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107822.39682539682,
            "unit": "ns",
            "range": "± 3948.1273492373834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 102082.92857142857,
            "unit": "ns",
            "range": "± 3468.0911850083285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90881.96,
            "unit": "ns",
            "range": "± 2413.2196764212467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3152886.011111111,
            "unit": "ns",
            "range": "± 118444.79140772375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808576.533333333,
            "unit": "ns",
            "range": "± 155871.1315342174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4943.033707865168,
            "unit": "ns",
            "range": "± 473.1088537400583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26561.68604651163,
            "unit": "ns",
            "range": "± 1865.5074267065054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23259.16,
            "unit": "ns",
            "range": "± 1976.4961228488069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27763.59574468085,
            "unit": "ns",
            "range": "± 4620.667147564715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1383.2,
            "unit": "ns",
            "range": "± 204.56360400889096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4574.011111111111,
            "unit": "ns",
            "range": "± 568.1485304778538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687864.4081632653,
            "unit": "ns",
            "range": "± 64145.49305970702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1247991.288888889,
            "unit": "ns",
            "range": "± 43582.37286742836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1032804.8913043478,
            "unit": "ns",
            "range": "± 58032.979041848026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8512344.58,
            "unit": "ns",
            "range": "± 1925998.116263261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2228826.727272727,
            "unit": "ns",
            "range": "± 104579.53475653689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2318779.878787879,
            "unit": "ns",
            "range": "± 108830.06670337937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2672833.0714285714,
            "unit": "ns",
            "range": "± 43271.25993163856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2903772.1428571427,
            "unit": "ns",
            "range": "± 104921.72197348619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10196829.887755102,
            "unit": "ns",
            "range": "± 1055300.1106265604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3048984.026953125,
            "unit": "ns",
            "range": "± 41547.81829870911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922117.6750837053,
            "unit": "ns",
            "range": "± 5307.161054054393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619131.7106770833,
            "unit": "ns",
            "range": "± 4560.296159427451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1618931.8090444712,
            "unit": "ns",
            "range": "± 2394.071764361817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458900.1653645833,
            "unit": "ns",
            "range": "± 999.4283184105898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425060.9001464844,
            "unit": "ns",
            "range": "± 646.7461581527303"
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
          "id": "c8f6d650474f812c3b47cbe82532c0c9f932d6a2",
          "message": "Merge pull request #3729 from greymistcube/bump/litedb-to-5.0.19\n\n⬆️ Bump Litedb to 5.0.15",
          "timestamp": "2024-04-08T16:23:12+09:00",
          "tree_id": "35c6f1dfd73b98176c26ec1f06a87cf0b097b299",
          "url": "https://github.com/planetarium/libplanet/commit/c8f6d650474f812c3b47cbe82532c0c9f932d6a2"
        },
        "date": 1712561492042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5801782.285714285,
            "unit": "ns",
            "range": "± 59151.41741643751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14208843.75,
            "unit": "ns",
            "range": "± 44065.604061392994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36179863.65384615,
            "unit": "ns",
            "range": "± 52996.10056071131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72345494.57142857,
            "unit": "ns",
            "range": "± 199697.0998667402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147537985.73333332,
            "unit": "ns",
            "range": "± 463183.2039936044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86485.13461538461,
            "unit": "ns",
            "range": "± 3539.2936208323486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110426.33582089552,
            "unit": "ns",
            "range": "± 4826.672646479475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105559.38333333333,
            "unit": "ns",
            "range": "± 4673.82091391088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93130.48780487805,
            "unit": "ns",
            "range": "± 3340.776325361751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3183008.414893617,
            "unit": "ns",
            "range": "± 120731.281943905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870146.964285714,
            "unit": "ns",
            "range": "± 80144.74070981277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5126.575268817204,
            "unit": "ns",
            "range": "± 690.9146306756867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27123.719101123595,
            "unit": "ns",
            "range": "± 1862.171911241646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22720.284210526315,
            "unit": "ns",
            "range": "± 1940.0540772412453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31014.365979381444,
            "unit": "ns",
            "range": "± 5545.337496546209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1195.7578947368422,
            "unit": "ns",
            "range": "± 237.3183388467219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4864.7,
            "unit": "ns",
            "range": "± 574.0251814936032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1141630.1414141415,
            "unit": "ns",
            "range": "± 140142.5545300366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826659.7816091955,
            "unit": "ns",
            "range": "± 97147.20169956725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1527458.8673469387,
            "unit": "ns",
            "range": "± 157283.22711970404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7915132.739130435,
            "unit": "ns",
            "range": "± 480107.2350971889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474554.662921348,
            "unit": "ns",
            "range": "± 130498.5280576117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2659809.381818182,
            "unit": "ns",
            "range": "± 108553.69988175521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3282966.878787879,
            "unit": "ns",
            "range": "± 154696.83967360313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3286714.4929577466,
            "unit": "ns",
            "range": "± 160119.95004262746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10353059.08080808,
            "unit": "ns",
            "range": "± 677153.5671037404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3059600.9482996324,
            "unit": "ns",
            "range": "± 59837.28463180811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924945.65390625,
            "unit": "ns",
            "range": "± 7794.765093569109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613910.5227864584,
            "unit": "ns",
            "range": "± 8760.291171178395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623252.0989583333,
            "unit": "ns",
            "range": "± 18351.095181485667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463269.92744140624,
            "unit": "ns",
            "range": "± 1244.9305325147097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420007.3961263021,
            "unit": "ns",
            "range": "± 1757.3444938348714"
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
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712565415261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5721758.066666666,
            "unit": "ns",
            "range": "± 93871.59525533245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14303782.23076923,
            "unit": "ns",
            "range": "± 42826.119255959224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36145654.307692304,
            "unit": "ns",
            "range": "± 218745.85237720684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72604091.93333334,
            "unit": "ns",
            "range": "± 338912.0827071879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145857541.42857143,
            "unit": "ns",
            "range": "± 404437.3777977946"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82841.91860465116,
            "unit": "ns",
            "range": "± 3036.0499496530815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113025.5,
            "unit": "ns",
            "range": "± 4524.020395711797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 108044.69354838709,
            "unit": "ns",
            "range": "± 4899.277349149783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94157.15384615384,
            "unit": "ns",
            "range": "± 1833.342934473694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3186689.3666666667,
            "unit": "ns",
            "range": "± 94361.87272318431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861749.4583333335,
            "unit": "ns",
            "range": "± 111565.85608127229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5097.686046511628,
            "unit": "ns",
            "range": "± 385.15992894099617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27650.302325581397,
            "unit": "ns",
            "range": "± 1775.047486156969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23141.957894736843,
            "unit": "ns",
            "range": "± 1738.0968371266213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29566.6875,
            "unit": "ns",
            "range": "± 5466.7734201841195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1161.0618556701031,
            "unit": "ns",
            "range": "± 296.8119429324803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5341.041666666667,
            "unit": "ns",
            "range": "± 1007.2502006287547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1139743.2040816327,
            "unit": "ns",
            "range": "± 127449.48449445066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1835594.810810811,
            "unit": "ns",
            "range": "± 91769.56430724621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542351.7171717172,
            "unit": "ns",
            "range": "± 157807.8674958656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8232882.291666667,
            "unit": "ns",
            "range": "± 676997.1254811231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2682871.5384615385,
            "unit": "ns",
            "range": "± 35412.75115598755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2852529.8571428573,
            "unit": "ns",
            "range": "± 48057.228449498136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3276037.320754717,
            "unit": "ns",
            "range": "± 136183.95764775923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3372333.588235294,
            "unit": "ns",
            "range": "± 66961.39874589951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9918028.815789474,
            "unit": "ns",
            "range": "± 332648.5253999316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021372.25390625,
            "unit": "ns",
            "range": "± 48729.600553011835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918912.3911458333,
            "unit": "ns",
            "range": "± 6411.692379795428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615526.40546875,
            "unit": "ns",
            "range": "± 4460.6218504176695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1613736.6666666667,
            "unit": "ns",
            "range": "± 4669.959859798957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460641.99396623886,
            "unit": "ns",
            "range": "± 323.04761435457993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420936.64114583336,
            "unit": "ns",
            "range": "± 1154.4312894795755"
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
          "id": "4e55367a86451f70ecf9de2b90d59c152a5eb5b6",
          "message": "Merge pull request #3733 from greymistcube/prepare/4.4.0\n\n🔧 Prepare 4.4.0",
          "timestamp": "2024-04-08T18:52:52+09:00",
          "tree_id": "e63646c38e8c49ca210258e2d63ecb6a4042cfd0",
          "url": "https://github.com/planetarium/libplanet/commit/4e55367a86451f70ecf9de2b90d59c152a5eb5b6"
        },
        "date": 1712570450806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5715785.571428572,
            "unit": "ns",
            "range": "± 55760.62638907671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14378281.846153846,
            "unit": "ns",
            "range": "± 28308.278482469144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36296818.961538464,
            "unit": "ns",
            "range": "± 113815.75557204678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72775890.14285715,
            "unit": "ns",
            "range": "± 170965.28558154145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145678639.26666668,
            "unit": "ns",
            "range": "± 441740.0620996254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85524.8717948718,
            "unit": "ns",
            "range": "± 2689.5896985021336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112275.72222222222,
            "unit": "ns",
            "range": "± 4697.148855871382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107400.625,
            "unit": "ns",
            "range": "± 4598.334384466145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91207.09433962264,
            "unit": "ns",
            "range": "± 3479.0644922060415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3169597.3125,
            "unit": "ns",
            "range": "± 98460.87688320104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2791429.6363636362,
            "unit": "ns",
            "range": "± 130343.19924446047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4799.398876404494,
            "unit": "ns",
            "range": "± 488.2072269805066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27730.43956043956,
            "unit": "ns",
            "range": "± 2658.1673854526634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22175.96153846154,
            "unit": "ns",
            "range": "± 863.046972605244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30578.345360824744,
            "unit": "ns",
            "range": "± 5538.905832345196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1090.4787234042553,
            "unit": "ns",
            "range": "± 194.5262775583761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4757.38947368421,
            "unit": "ns",
            "range": "± 548.3349320993133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1148368.5757575757,
            "unit": "ns",
            "range": "± 135748.66846598376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859923.3855421687,
            "unit": "ns",
            "range": "± 110064.43033113758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1502963.2105263157,
            "unit": "ns",
            "range": "± 145970.8076219566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7908549.813953488,
            "unit": "ns",
            "range": "± 429554.8591816612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2491539.574468085,
            "unit": "ns",
            "range": "± 150827.17309146654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2838976.1428571427,
            "unit": "ns",
            "range": "± 20844.068411410488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3281982.826923077,
            "unit": "ns",
            "range": "± 123112.65096582155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3289504.9787234045,
            "unit": "ns",
            "range": "± 126810.67513980271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10573045.448979592,
            "unit": "ns",
            "range": "± 675168.020352019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031584.83046875,
            "unit": "ns",
            "range": "± 39907.90486957512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920752.5356770833,
            "unit": "ns",
            "range": "± 6164.009761317811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612277.1565104167,
            "unit": "ns",
            "range": "± 4394.699070321603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1625947.0549479167,
            "unit": "ns",
            "range": "± 21436.192514555773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465179.0394205729,
            "unit": "ns",
            "range": "± 777.4944546092494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423408.1204427083,
            "unit": "ns",
            "range": "± 292.9418036597333"
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
          "id": "4f78091a0c08ef13d674c824be4b836ce7d6e4dc",
          "message": "Merge pull request #3735 from greymistcube/refactor/iworld\n\n♻️ Changed `SetValidator()` to `SetValidatorSet()`",
          "timestamp": "2024-04-09T16:02:50+09:00",
          "tree_id": "13c4d7d33bd113ebaa1a03877172a4f9fde2a8c1",
          "url": "https://github.com/planetarium/libplanet/commit/4f78091a0c08ef13d674c824be4b836ce7d6e4dc"
        },
        "date": 1712646651775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5770483.666666667,
            "unit": "ns",
            "range": "± 89968.4648138023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14239458.76923077,
            "unit": "ns",
            "range": "± 83905.95337455088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35981128.35714286,
            "unit": "ns",
            "range": "± 122446.45267821368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72909782.42857143,
            "unit": "ns",
            "range": "± 188721.16037432838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145795411.4,
            "unit": "ns",
            "range": "± 301783.0758858328"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85654.575,
            "unit": "ns",
            "range": "± 2972.3219524645315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110740.49315068492,
            "unit": "ns",
            "range": "± 5094.419989675217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105163.40277777778,
            "unit": "ns",
            "range": "± 4486.833095831773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89946.60714285714,
            "unit": "ns",
            "range": "± 2341.7525779303387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3182141.8372093025,
            "unit": "ns",
            "range": "± 117820.79298925011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2793872.34375,
            "unit": "ns",
            "range": "± 128973.05628920473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5090.043956043956,
            "unit": "ns",
            "range": "± 631.1140927331587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26462.071428571428,
            "unit": "ns",
            "range": "± 1391.2683022380666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22172.95348837209,
            "unit": "ns",
            "range": "± 1182.5921942120274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28809.515789473684,
            "unit": "ns",
            "range": "± 5006.798428909114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1326.236559139785,
            "unit": "ns",
            "range": "± 241.88136680079987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4989.445652173913,
            "unit": "ns",
            "range": "± 718.1866873543233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1149116.4742268042,
            "unit": "ns",
            "range": "± 126268.64097762066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1879254.4157303371,
            "unit": "ns",
            "range": "± 132340.49381466466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493603.3,
            "unit": "ns",
            "range": "± 134151.64587396465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8143362.223404256,
            "unit": "ns",
            "range": "± 607307.2969089742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2699958,
            "unit": "ns",
            "range": "± 23164.03362614839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2820260,
            "unit": "ns",
            "range": "± 29274.987381152987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3283986.0384615385,
            "unit": "ns",
            "range": "± 133728.00795527003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3324549.125,
            "unit": "ns",
            "range": "± 153643.24130368241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10280745.222222222,
            "unit": "ns",
            "range": "± 701117.1770942307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3043572.2631835938,
            "unit": "ns",
            "range": "± 56108.32378245139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922256.9292689732,
            "unit": "ns",
            "range": "± 6058.020882082534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613065.3514322917,
            "unit": "ns",
            "range": "± 5372.426699275687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1625527.9197823661,
            "unit": "ns",
            "range": "± 7588.159522480985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463635.8818684896,
            "unit": "ns",
            "range": "± 659.8172786994081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422463.5155203683,
            "unit": "ns",
            "range": "± 1169.4362938015556"
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
          "id": "70aeb4796562ecf0585adab341a1d516a0515bbe",
          "message": "Merge pull request #3736 from greymistcube/refactor/block-protocol-version\n\n♻️ Changed constant reference block protocol versions",
          "timestamp": "2024-04-09T18:37:02+09:00",
          "tree_id": "84d13b2792e0acf7939c6c360d75621c214ce7d5",
          "url": "https://github.com/planetarium/libplanet/commit/70aeb4796562ecf0585adab341a1d516a0515bbe"
        },
        "date": 1712655899727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5724468.933333334,
            "unit": "ns",
            "range": "± 82773.55017280293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14497670.23076923,
            "unit": "ns",
            "range": "± 162266.86481901444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36118467.307692304,
            "unit": "ns",
            "range": "± 131932.1520886049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72697225.33333333,
            "unit": "ns",
            "range": "± 217056.22743252057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148645891.26666668,
            "unit": "ns",
            "range": "± 302292.1143814531"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 87310.46774193548,
            "unit": "ns",
            "range": "± 2663.8585233187714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110875.3,
            "unit": "ns",
            "range": "± 3918.7044179491563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106124.68055555556,
            "unit": "ns",
            "range": "± 5077.618022640334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89630.60714285714,
            "unit": "ns",
            "range": "± 2223.7570034330324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3210475.3,
            "unit": "ns",
            "range": "± 70867.15570113155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2683602.4,
            "unit": "ns",
            "range": "± 168812.83205342834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5283.368421052632,
            "unit": "ns",
            "range": "± 761.17571506514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27307.641304347828,
            "unit": "ns",
            "range": "± 2305.248677112764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23593.75,
            "unit": "ns",
            "range": "± 2119.450966642069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28937.641304347828,
            "unit": "ns",
            "range": "± 4440.43704556633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1179.7988505747126,
            "unit": "ns",
            "range": "± 191.8962967844708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4784.604395604396,
            "unit": "ns",
            "range": "± 598.4195644291513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1150834.551020408,
            "unit": "ns",
            "range": "± 124476.52349420574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1754900.0408163266,
            "unit": "ns",
            "range": "± 65641.47651604611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1510306.3404255318,
            "unit": "ns",
            "range": "± 128984.97757260095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7830266.681818182,
            "unit": "ns",
            "range": "± 427267.4090317201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2568631.595238095,
            "unit": "ns",
            "range": "± 93618.04424780188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2644763.587301587,
            "unit": "ns",
            "range": "± 119970.83497111137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3248217.285714286,
            "unit": "ns",
            "range": "± 146810.71363916065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3475516.1904761903,
            "unit": "ns",
            "range": "± 81990.15761578889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10438942.91,
            "unit": "ns",
            "range": "± 703201.4118285017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3016154.62109375,
            "unit": "ns",
            "range": "± 61092.57507954426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919031.3361328125,
            "unit": "ns",
            "range": "± 4226.5238601879955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617057.3678385416,
            "unit": "ns",
            "range": "± 6089.744840190621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639978.3520833333,
            "unit": "ns",
            "range": "± 8775.710349993327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465057.776171875,
            "unit": "ns",
            "range": "± 693.49480825194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423704.8109049479,
            "unit": "ns",
            "range": "± 1105.4211136190809"
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
          "id": "9ab2062035cf17953592afb7a1f1b29d28655e06",
          "message": "Merge pull request #3738 from greymistcube/refactor/trie-metadata\n\n♻️ Refactor `TrieMetadata`",
          "timestamp": "2024-04-11T18:40:39+09:00",
          "tree_id": "f5e5bb85ed32af2e83a2800131f11d15bc40ab1e",
          "url": "https://github.com/planetarium/libplanet/commit/9ab2062035cf17953592afb7a1f1b29d28655e06"
        },
        "date": 1712828940527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5725402.142857143,
            "unit": "ns",
            "range": "± 58865.117554858014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14135760,
            "unit": "ns",
            "range": "± 21372.343501059324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36080914.333333336,
            "unit": "ns",
            "range": "± 144859.30057062104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72878378.21428572,
            "unit": "ns",
            "range": "± 134363.71194014835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146029051.43333334,
            "unit": "ns",
            "range": "± 435086.78154601145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85794.36538461539,
            "unit": "ns",
            "range": "± 3526.111461702098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110836.5,
            "unit": "ns",
            "range": "± 5517.923784258794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106591.65671641791,
            "unit": "ns",
            "range": "± 4565.669261413194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90954.05555555556,
            "unit": "ns",
            "range": "± 1819.0285860128824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113665.3529411764,
            "unit": "ns",
            "range": "± 167376.7306352937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2748288.83,
            "unit": "ns",
            "range": "± 161682.42146500957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4985.340425531915,
            "unit": "ns",
            "range": "± 656.3072574622853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27423.266666666666,
            "unit": "ns",
            "range": "± 2332.2718480129424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22374.1,
            "unit": "ns",
            "range": "± 1280.4112822391849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31461.78947368421,
            "unit": "ns",
            "range": "± 6040.42691335908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1238.1304347826087,
            "unit": "ns",
            "range": "± 248.18808081604075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4875.782608695652,
            "unit": "ns",
            "range": "± 640.5841569316253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1144603.9797979798,
            "unit": "ns",
            "range": "± 135068.32432332088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1853918.1098901099,
            "unit": "ns",
            "range": "± 115252.11942572304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551066.98989899,
            "unit": "ns",
            "range": "± 144103.09531207263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7931756.179775281,
            "unit": "ns",
            "range": "± 438985.3504747045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2556793.1222222224,
            "unit": "ns",
            "range": "± 91471.33445071713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2641513.9850746267,
            "unit": "ns",
            "range": "± 124304.76147655085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3304030.419354839,
            "unit": "ns",
            "range": "± 149883.16418754455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3250202.5081967213,
            "unit": "ns",
            "range": "± 145650.27076089068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10437836.66,
            "unit": "ns",
            "range": "± 784223.9534551871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3038756.7708333335,
            "unit": "ns",
            "range": "± 38638.809326943105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922662.4292317708,
            "unit": "ns",
            "range": "± 7993.043697677222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610591.6063151042,
            "unit": "ns",
            "range": "± 4895.342258047286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1628862.1944754464,
            "unit": "ns",
            "range": "± 12190.934190332833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465819.95852864586,
            "unit": "ns",
            "range": "± 784.9330174759717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421835.0273763021,
            "unit": "ns",
            "range": "± 935.497084871579"
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
          "id": "24fe16c9bb067e1c1199b90e950c5747ac897da0",
          "message": "Merge pull request #3740 from greymistcube/chore/changelog-fix\n\n🧹 Fixed changelog typo",
          "timestamp": "2024-04-12T11:03:44+09:00",
          "tree_id": "5d245d6edd2e752ae75652a1840759df64989b08",
          "url": "https://github.com/planetarium/libplanet/commit/24fe16c9bb067e1c1199b90e950c5747ac897da0"
        },
        "date": 1712887925802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5723874.538461538,
            "unit": "ns",
            "range": "± 55475.286415987954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14341913.23076923,
            "unit": "ns",
            "range": "± 74300.66130947719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36368749.538461536,
            "unit": "ns",
            "range": "± 175518.97188320098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73445292,
            "unit": "ns",
            "range": "± 338658.9025376419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145677797.7857143,
            "unit": "ns",
            "range": "± 261914.39277284083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85521.58490566038,
            "unit": "ns",
            "range": "± 3409.6728042549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111226.86486486487,
            "unit": "ns",
            "range": "± 5547.306525420043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104652.6301369863,
            "unit": "ns",
            "range": "± 4924.097606293093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90278.95,
            "unit": "ns",
            "range": "± 1978.2079203955761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3155406.7209302327,
            "unit": "ns",
            "range": "± 116545.22982951943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765732.1145833335,
            "unit": "ns",
            "range": "± 158793.15384207544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5088.905263157894,
            "unit": "ns",
            "range": "± 741.5534309336389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27291.12222222222,
            "unit": "ns",
            "range": "± 1981.5387042849495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22762.77192982456,
            "unit": "ns",
            "range": "± 986.1371249466248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29411.35106382979,
            "unit": "ns",
            "range": "± 5292.669495271894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1165.494623655914,
            "unit": "ns",
            "range": "± 230.8807156565595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4738.322222222222,
            "unit": "ns",
            "range": "± 478.794408924622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1159360.3333333333,
            "unit": "ns",
            "range": "± 136998.98258418578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860790.3956043955,
            "unit": "ns",
            "range": "± 128830.51932932653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1537216.53,
            "unit": "ns",
            "range": "± 154646.14932842724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8024813.989130435,
            "unit": "ns",
            "range": "± 518956.7071789004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2450020.2025316455,
            "unit": "ns",
            "range": "± 123622.29793260577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2630286.1860465114,
            "unit": "ns",
            "range": "± 142773.9350100267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3255564.090909091,
            "unit": "ns",
            "range": "± 123026.25771072773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3330426.5714285714,
            "unit": "ns",
            "range": "± 121144.75865480666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10551254.313131314,
            "unit": "ns",
            "range": "± 785650.2580683406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042587.237109375,
            "unit": "ns",
            "range": "± 68305.83594948756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 930318.61171875,
            "unit": "ns",
            "range": "± 6987.179866416427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616840.9591145833,
            "unit": "ns",
            "range": "± 8702.378717886872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637337.5049479166,
            "unit": "ns",
            "range": "± 17759.58328947369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465744.4878580729,
            "unit": "ns",
            "range": "± 722.1509253497159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422302.7823660714,
            "unit": "ns",
            "range": "± 1291.6354173789703"
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
          "id": "24e8a381e18b93d71181216254775a2882548c47",
          "message": "Merge pull request #3739 from greymistcube/refactor/iworld-state\n\n♻️ Added `Version` property to `IWorldState`",
          "timestamp": "2024-04-12T18:14:04+09:00",
          "tree_id": "93408a025d34e352529096c6d27af63e2bef7b90",
          "url": "https://github.com/planetarium/libplanet/commit/24e8a381e18b93d71181216254775a2882548c47"
        },
        "date": 1712913737125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5947513.466666667,
            "unit": "ns",
            "range": "± 28829.27351511869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14430753.538461538,
            "unit": "ns",
            "range": "± 46249.62021216207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36381000.15384615,
            "unit": "ns",
            "range": "± 366844.9616452083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73358140.21428572,
            "unit": "ns",
            "range": "± 285907.6411409753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146434687.43333334,
            "unit": "ns",
            "range": "± 411579.65955198003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86132.59615384616,
            "unit": "ns",
            "range": "± 3515.2010416364765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109863.48214285714,
            "unit": "ns",
            "range": "± 3660.2907832380124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105466.28333333334,
            "unit": "ns",
            "range": "± 4573.29004847868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92493.58536585367,
            "unit": "ns",
            "range": "± 3331.7876205995617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3196596.671875,
            "unit": "ns",
            "range": "± 147042.6522284697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2838615.049382716,
            "unit": "ns",
            "range": "± 148934.86988864478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5685.32967032967,
            "unit": "ns",
            "range": "± 510.4131236327656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26805.022727272728,
            "unit": "ns",
            "range": "± 2154.021408752149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21802.884615384617,
            "unit": "ns",
            "range": "± 607.537896387179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29729.581632653062,
            "unit": "ns",
            "range": "± 6082.341711405101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1215.3870967741937,
            "unit": "ns",
            "range": "± 228.88144986557265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5682.433333333333,
            "unit": "ns",
            "range": "± 677.0449680516391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1143109.7171717172,
            "unit": "ns",
            "range": "± 128533.34606630617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1821130.1954022988,
            "unit": "ns",
            "range": "± 97939.52456334436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1500219.8,
            "unit": "ns",
            "range": "± 140644.9162926631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9904683.76,
            "unit": "ns",
            "range": "± 1893579.476066958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2708684.0714285714,
            "unit": "ns",
            "range": "± 43039.757794329016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2859732.1428571427,
            "unit": "ns",
            "range": "± 21367.725387772392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3295809.4415584416,
            "unit": "ns",
            "range": "± 162050.89529693843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3297073.487179487,
            "unit": "ns",
            "range": "± 114336.56720353286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11931051.33,
            "unit": "ns",
            "range": "± 1549932.8599963952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3094641.017578125,
            "unit": "ns",
            "range": "± 18519.469303984442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928477.8119419643,
            "unit": "ns",
            "range": "± 7073.910144547391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 620304.5619140625,
            "unit": "ns",
            "range": "± 11113.618701873427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1611341.146484375,
            "unit": "ns",
            "range": "± 25202.83579017303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465537.4421386719,
            "unit": "ns",
            "range": "± 1400.1904304531747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425654.02218191966,
            "unit": "ns",
            "range": "± 976.467185334636"
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
          "id": "a5d2dbd6405f4fa534b05df34bdc56a422426415",
          "message": "Merge pull request #3741 from greymistcube/bump/block-protocol-version-to-6\n\n♻️ ⬆️ Bump block protocol version to 6",
          "timestamp": "2024-04-15T10:37:40+09:00",
          "tree_id": "fda4bd5af61c41b4577502f139ca173cf7b36593",
          "url": "https://github.com/planetarium/libplanet/commit/a5d2dbd6405f4fa534b05df34bdc56a422426415"
        },
        "date": 1713145556923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5809277,
            "unit": "ns",
            "range": "± 64525.693719633884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14312017.42857143,
            "unit": "ns",
            "range": "± 117902.06227446333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36472156.76923077,
            "unit": "ns",
            "range": "± 200142.75244982596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72590916.64285715,
            "unit": "ns",
            "range": "± 250555.12308406376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146602391.13333333,
            "unit": "ns",
            "range": "± 418490.66797000496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86123.38636363637,
            "unit": "ns",
            "range": "± 3236.2879339511233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109754.57352941176,
            "unit": "ns",
            "range": "± 5202.589666052734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105437.8125,
            "unit": "ns",
            "range": "± 4460.531614252503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91324.4387755102,
            "unit": "ns",
            "range": "± 3387.424472762968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115309.5576923075,
            "unit": "ns",
            "range": "± 128509.78717125216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2824086.871794872,
            "unit": "ns",
            "range": "± 145174.25902054802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5524.79347826087,
            "unit": "ns",
            "range": "± 658.8201164893688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26983.662790697676,
            "unit": "ns",
            "range": "± 2097.442653555067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23308.25,
            "unit": "ns",
            "range": "± 1906.2682861935693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29210.350515463917,
            "unit": "ns",
            "range": "± 5878.249434782925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1182.4213483146068,
            "unit": "ns",
            "range": "± 211.73387159351617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5479.515789473684,
            "unit": "ns",
            "range": "± 860.119126622634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1162641.7474747475,
            "unit": "ns",
            "range": "± 130353.09044130424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771237.45,
            "unit": "ns",
            "range": "± 68504.33824105532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1520319.2777777778,
            "unit": "ns",
            "range": "± 168135.142399333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10183942.42,
            "unit": "ns",
            "range": "± 1887140.76154742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2682743.714285714,
            "unit": "ns",
            "range": "± 23821.73405310166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2885602.769230769,
            "unit": "ns",
            "range": "± 27834.27303449785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3468544.2666666666,
            "unit": "ns",
            "range": "± 62930.04695177321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3264191.227272727,
            "unit": "ns",
            "range": "± 105038.81450724148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11911969.84,
            "unit": "ns",
            "range": "± 1460041.0010438738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3142546.32265625,
            "unit": "ns",
            "range": "± 40831.5656908494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 938599.2370442708,
            "unit": "ns",
            "range": "± 7582.3729732179245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618830.3727463942,
            "unit": "ns",
            "range": "± 6098.884186370368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635780.6364583333,
            "unit": "ns",
            "range": "± 14532.391709219233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458881.50725446426,
            "unit": "ns",
            "range": "± 1520.0335014289371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426348.8688151042,
            "unit": "ns",
            "range": "± 1958.038350411303"
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
          "id": "8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea",
          "message": "Merge pull request #3742 from greymistcube/chore/add-missing-protocol-version\n\n🔧 Add missing protocol versions",
          "timestamp": "2024-04-15T12:30:17+09:00",
          "tree_id": "2c7689bd15fba4748ed896f13ae10b49a60c27da",
          "url": "https://github.com/planetarium/libplanet/commit/8c6eba765a1a401ec979b2068a9b6bc2ca6cb5ea"
        },
        "date": 1713152318787,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5759712.566666666,
            "unit": "ns",
            "range": "± 57931.73704760096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14410218.25,
            "unit": "ns",
            "range": "± 82764.46216509398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37026330.5,
            "unit": "ns",
            "range": "± 316403.3227453043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72883526.42857143,
            "unit": "ns",
            "range": "± 210002.71143257405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147099728.13333333,
            "unit": "ns",
            "range": "± 441697.8848826855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86011.56896551725,
            "unit": "ns",
            "range": "± 3745.7463974630855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109868.84375,
            "unit": "ns",
            "range": "± 4985.342379602937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105151.91025641025,
            "unit": "ns",
            "range": "± 5224.2629907994005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93803.8488372093,
            "unit": "ns",
            "range": "± 3430.9835316513686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3114005.7435897435,
            "unit": "ns",
            "range": "± 106305.42021649792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767119.08,
            "unit": "ns",
            "range": "± 180079.55883109444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4978.196629213483,
            "unit": "ns",
            "range": "± 597.6961337368372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27842.64210526316,
            "unit": "ns",
            "range": "± 3392.8814243811134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22788.702127659573,
            "unit": "ns",
            "range": "± 886.7278371458109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30171.20408163265,
            "unit": "ns",
            "range": "± 5792.055529506808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1326.6236559139784,
            "unit": "ns",
            "range": "± 228.72614696155816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4794.363636363636,
            "unit": "ns",
            "range": "± 623.0866654691589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1168848.6701030927,
            "unit": "ns",
            "range": "± 113153.92234876733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1801223.3684210526,
            "unit": "ns",
            "range": "± 77092.59035624494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1515927.5721649486,
            "unit": "ns",
            "range": "± 143583.63541404533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10230195.47,
            "unit": "ns",
            "range": "± 1912592.5892561025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2688072.9166666665,
            "unit": "ns",
            "range": "± 22904.226300990165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2831512.6153846155,
            "unit": "ns",
            "range": "± 31895.719902359062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3321520.901234568,
            "unit": "ns",
            "range": "± 172841.3313439963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3403627.6666666665,
            "unit": "ns",
            "range": "± 68222.0957116836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12000186.58,
            "unit": "ns",
            "range": "± 1700282.5070594137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023065.223876953,
            "unit": "ns",
            "range": "± 55457.462596625155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913955.6229817708,
            "unit": "ns",
            "range": "± 6553.788277247507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617523.9362630208,
            "unit": "ns",
            "range": "± 5217.995921522053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1612944.4353966345,
            "unit": "ns",
            "range": "± 1095.2046914725292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463262.8728515625,
            "unit": "ns",
            "range": "± 1157.138199075152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417321.8818359375,
            "unit": "ns",
            "range": "± 1759.367840327166"
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
          "id": "ad6b7614bd7eb8becbdbf1d1073a6fb24992f762",
          "message": "Merge pull request #3743 from greymistcube/refactor/world-tests\n\n♻️ Refactor `IWorld` tests",
          "timestamp": "2024-04-15T15:49:49+09:00",
          "tree_id": "2508af505ebc141a466d106fc7738ea6715048aa",
          "url": "https://github.com/planetarium/libplanet/commit/ad6b7614bd7eb8becbdbf1d1073a6fb24992f762"
        },
        "date": 1713164290206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5654933.230769231,
            "unit": "ns",
            "range": "± 27555.6237247313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14271982.5,
            "unit": "ns",
            "range": "± 38814.01400713605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36160445.76923077,
            "unit": "ns",
            "range": "± 207376.72507948498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72756320.83333333,
            "unit": "ns",
            "range": "± 172261.3172444978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146036146.86666667,
            "unit": "ns",
            "range": "± 431300.6797641072"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85713.63461538461,
            "unit": "ns",
            "range": "± 3487.1316041498394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111326.92727272728,
            "unit": "ns",
            "range": "± 4530.63286746984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107236.09375,
            "unit": "ns",
            "range": "± 4594.532850906124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91002.47368421052,
            "unit": "ns",
            "range": "± 1479.9542548643956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3148292,
            "unit": "ns",
            "range": "± 40817.572993465976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740165.680412371,
            "unit": "ns",
            "range": "± 165186.95626796293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4964.074468085107,
            "unit": "ns",
            "range": "± 781.7549906221369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28110.61797752809,
            "unit": "ns",
            "range": "± 2053.679500010662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22929.17777777778,
            "unit": "ns",
            "range": "± 1560.4137655523757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29910.302083333332,
            "unit": "ns",
            "range": "± 4840.208775662019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1293.2842105263157,
            "unit": "ns",
            "range": "± 235.9581040687094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5136.418367346939,
            "unit": "ns",
            "range": "± 930.9301071516759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1158090.4285714286,
            "unit": "ns",
            "range": "± 134494.31520412603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1811459.8194444445,
            "unit": "ns",
            "range": "± 78732.18071971863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1527763.6530612244,
            "unit": "ns",
            "range": "± 154497.5993142216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10115579.15,
            "unit": "ns",
            "range": "± 1963860.0657714866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503583.5804597703,
            "unit": "ns",
            "range": "± 136763.0096599987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2861927.466666667,
            "unit": "ns",
            "range": "± 38327.504581038454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3351115.507936508,
            "unit": "ns",
            "range": "± 153703.06241884507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3317520.434782609,
            "unit": "ns",
            "range": "± 127443.56052319387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11970275.33,
            "unit": "ns",
            "range": "± 1548750.5855827562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034698.930908203,
            "unit": "ns",
            "range": "± 59573.518230169655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925616.178125,
            "unit": "ns",
            "range": "± 4777.993697867132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612496.1591145833,
            "unit": "ns",
            "range": "± 2430.6214318476436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1611893.5850360577,
            "unit": "ns",
            "range": "± 9292.782751301042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464180.8602469308,
            "unit": "ns",
            "range": "± 716.1226614874216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417481.4100585937,
            "unit": "ns",
            "range": "± 1293.4926966745613"
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
          "id": "51705f6444c3d3a4a04ebd2145561cf41eb273c0",
          "message": "Merge pull request #3745 from greymistcube/feature/validator-set-account\n\n✨ Introduce `ValidatorSetAccount`",
          "timestamp": "2024-04-17T11:26:36+09:00",
          "tree_id": "778d877278bab8bb4835ca013d973df5af790da4",
          "url": "https://github.com/planetarium/libplanet/commit/51705f6444c3d3a4a04ebd2145561cf41eb273c0"
        },
        "date": 1713321301517,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5691010.153846154,
            "unit": "ns",
            "range": "± 20643.482372757728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14295732.5,
            "unit": "ns",
            "range": "± 60518.7053637889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36123096.538461536,
            "unit": "ns",
            "range": "± 235397.621110401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72674113.5,
            "unit": "ns",
            "range": "± 173899.36517544588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148223649.53333333,
            "unit": "ns",
            "range": "± 541452.1353603351"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86046,
            "unit": "ns",
            "range": "± 3056.2195043119177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109835.80303030302,
            "unit": "ns",
            "range": "± 4737.434690338374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106493.96590909091,
            "unit": "ns",
            "range": "± 6263.450698616288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92360.1,
            "unit": "ns",
            "range": "± 2666.7347378524482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3066954.6373626376,
            "unit": "ns",
            "range": "± 170807.6935563967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2757357.88,
            "unit": "ns",
            "range": "± 167586.2138820457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4942.358695652174,
            "unit": "ns",
            "range": "± 657.4657402434626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27666.784090909092,
            "unit": "ns",
            "range": "± 2540.368538060822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22707.73404255319,
            "unit": "ns",
            "range": "± 1600.756475575676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30984.31914893617,
            "unit": "ns",
            "range": "± 6095.373040200187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1128.401098901099,
            "unit": "ns",
            "range": "± 177.26659489437276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5061.011111111111,
            "unit": "ns",
            "range": "± 662.6157307344349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1141587.5,
            "unit": "ns",
            "range": "± 124861.27759850501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1822392.0886075948,
            "unit": "ns",
            "range": "± 89837.78385101269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560074.677419355,
            "unit": "ns",
            "range": "± 125715.28543318424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10820929.92,
            "unit": "ns",
            "range": "± 2046884.2539077913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2711681.5714285714,
            "unit": "ns",
            "range": "± 35592.34100080497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2842042,
            "unit": "ns",
            "range": "± 44554.567620460126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3332403.8630136987,
            "unit": "ns",
            "range": "± 165666.56026240005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3316787.2,
            "unit": "ns",
            "range": "± 133536.15425090858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10928015.888888888,
            "unit": "ns",
            "range": "± 715228.8010876117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037190.372612847,
            "unit": "ns",
            "range": "± 63532.63003661007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917539.3470703125,
            "unit": "ns",
            "range": "± 6020.542233741159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609674.9813151042,
            "unit": "ns",
            "range": "± 5517.313839104444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1638676.4568810095,
            "unit": "ns",
            "range": "± 9679.866214135374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462807.15792410716,
            "unit": "ns",
            "range": "± 759.4299351882443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417027.1892578125,
            "unit": "ns",
            "range": "± 1498.7786387505955"
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
          "id": "2f233fa27e5dd57f49840b71a5b469de49ca01c9",
          "message": "Merge pull request #3746 from greymistcube/feature/world-gql-version-property\n\n✨ Added version field to world state query",
          "timestamp": "2024-04-17T11:45:17+09:00",
          "tree_id": "c88b9e958fe6203b44a686601a09d7fe019cfcf8",
          "url": "https://github.com/planetarium/libplanet/commit/2f233fa27e5dd57f49840b71a5b469de49ca01c9"
        },
        "date": 1713322867649,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5748832.933333334,
            "unit": "ns",
            "range": "± 72189.93897892526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14330208.333333334,
            "unit": "ns",
            "range": "± 101104.69461974314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36100782.23076923,
            "unit": "ns",
            "range": "± 275033.84857721115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72933433.1,
            "unit": "ns",
            "range": "± 190582.15926238816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146884184.9,
            "unit": "ns",
            "range": "± 431656.55177281855"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84528.49122807017,
            "unit": "ns",
            "range": "± 3652.740243994945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111007.03174603175,
            "unit": "ns",
            "range": "± 4837.028103075656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104860.13333333333,
            "unit": "ns",
            "range": "± 3928.8102113535797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91976.70454545454,
            "unit": "ns",
            "range": "± 3372.057274055965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3132109.515151515,
            "unit": "ns",
            "range": "± 147438.49730997276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759616.5,
            "unit": "ns",
            "range": "± 113717.3522750639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5099.817204301075,
            "unit": "ns",
            "range": "± 779.9323263039162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27986.471264367818,
            "unit": "ns",
            "range": "± 2026.9544449343405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23717.184782608696,
            "unit": "ns",
            "range": "± 2270.92142759615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29346.304347826088,
            "unit": "ns",
            "range": "± 4961.559821507594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1175.840425531915,
            "unit": "ns",
            "range": "± 267.87247420036573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4829.966292134832,
            "unit": "ns",
            "range": "± 693.6455482291664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1168375.7040816327,
            "unit": "ns",
            "range": "± 115961.7018057014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1793615.8278688525,
            "unit": "ns",
            "range": "± 75188.62759148295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560185.3404255318,
            "unit": "ns",
            "range": "± 134777.67333135728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10519777.2,
            "unit": "ns",
            "range": "± 2085696.4464414483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2681259.1428571427,
            "unit": "ns",
            "range": "± 42404.094767545095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2862392.066666667,
            "unit": "ns",
            "range": "± 43805.438749847795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3264548.1641791044,
            "unit": "ns",
            "range": "± 144342.0628255858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3566575.4375,
            "unit": "ns",
            "range": "± 69010.8033295935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10889607.6,
            "unit": "ns",
            "range": "± 775606.7967236096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3052253.665625,
            "unit": "ns",
            "range": "± 43775.405047858854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921371.9628208706,
            "unit": "ns",
            "range": "± 6705.963648495487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617813.6444010417,
            "unit": "ns",
            "range": "± 9220.786334512497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1646358.5887276786,
            "unit": "ns",
            "range": "± 12754.766206422013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457015.5640950521,
            "unit": "ns",
            "range": "± 579.3604372377243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424310.9089518229,
            "unit": "ns",
            "range": "± 803.2926110428101"
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346647921,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5933982.75,
            "unit": "ns",
            "range": "± 9209.028288735313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14229131.75,
            "unit": "ns",
            "range": "± 31305.93210160017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36278731.07692308,
            "unit": "ns",
            "range": "± 199105.08062514022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73351500.35714285,
            "unit": "ns",
            "range": "± 218305.5902958078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146054102.46666667,
            "unit": "ns",
            "range": "± 399737.016346974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85980.10377358491,
            "unit": "ns",
            "range": "± 3470.364464009855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110699.43835616438,
            "unit": "ns",
            "range": "± 4776.083408174705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105493.69642857143,
            "unit": "ns",
            "range": "± 4353.7074354441365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91823.34615384616,
            "unit": "ns",
            "range": "± 2513.5527994025933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3111431.069767442,
            "unit": "ns",
            "range": "± 168724.0085217339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2850755.6056338027,
            "unit": "ns",
            "range": "± 138741.22323432405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5787.553191489362,
            "unit": "ns",
            "range": "± 749.0993390204585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26950.31111111111,
            "unit": "ns",
            "range": "± 1790.2130413956381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22996.344086021505,
            "unit": "ns",
            "range": "± 1816.8810320617395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30136.305263157894,
            "unit": "ns",
            "range": "± 5670.396777879749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1249.71875,
            "unit": "ns",
            "range": "± 261.11577198932076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5490.044943820225,
            "unit": "ns",
            "range": "± 517.5689218511773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1272171.6666666667,
            "unit": "ns",
            "range": "± 26822.434363354692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1860116.25,
            "unit": "ns",
            "range": "± 111183.0274634973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1544755.1616161617,
            "unit": "ns",
            "range": "± 163775.07310461684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10603619.29,
            "unit": "ns",
            "range": "± 2032426.4754227689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2519899.427536232,
            "unit": "ns",
            "range": "± 121597.96146212598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2900655.0714285714,
            "unit": "ns",
            "range": "± 37053.513776001746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3292104.46,
            "unit": "ns",
            "range": "± 131601.26632109086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3375184.72,
            "unit": "ns",
            "range": "± 136053.71582772833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12432607.94,
            "unit": "ns",
            "range": "± 1463440.7373845489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3104151.4619791666,
            "unit": "ns",
            "range": "± 37532.35582663848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926100.2109375,
            "unit": "ns",
            "range": "± 7166.601593472395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 621013.6567758414,
            "unit": "ns",
            "range": "± 5303.559278614134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1615998.565204327,
            "unit": "ns",
            "range": "± 19442.84511489117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461441.4178989955,
            "unit": "ns",
            "range": "± 1011.8269589541533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428414.6416341146,
            "unit": "ns",
            "range": "± 1672.910435348941"
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713413013102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5795944.733333333,
            "unit": "ns",
            "range": "± 88229.23147806244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14827240,
            "unit": "ns",
            "range": "± 39392.35719231164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35850545,
            "unit": "ns",
            "range": "± 137706.73194705645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72584695.76666667,
            "unit": "ns",
            "range": "± 242722.08869947973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146216817.96666667,
            "unit": "ns",
            "range": "± 388748.3553605756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84382.92105263157,
            "unit": "ns",
            "range": "± 3525.408309418967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111399.35802469136,
            "unit": "ns",
            "range": "± 5593.70850668106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107533.69230769231,
            "unit": "ns",
            "range": "± 5001.696518192218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94309.78787878787,
            "unit": "ns",
            "range": "± 2982.5818488095993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3135445.05,
            "unit": "ns",
            "range": "± 109359.1638196396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807574.2419354836,
            "unit": "ns",
            "range": "± 126331.64833720902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5081.806818181818,
            "unit": "ns",
            "range": "± 438.98956230763275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27373.416666666668,
            "unit": "ns",
            "range": "± 1967.359353117063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22731.691489361703,
            "unit": "ns",
            "range": "± 1447.93383400925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29133.608695652172,
            "unit": "ns",
            "range": "± 4876.336236044078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1309.720430107527,
            "unit": "ns",
            "range": "± 194.80884530356587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5257.075268817204,
            "unit": "ns",
            "range": "± 1021.1011557921094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1140786.4285714286,
            "unit": "ns",
            "range": "± 113749.68996908018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849870.8793103448,
            "unit": "ns",
            "range": "± 104444.11535041692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593728.9393939395,
            "unit": "ns",
            "range": "± 166204.68843222634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8784775.065934066,
            "unit": "ns",
            "range": "± 1013601.4324078144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480086.9404761903,
            "unit": "ns",
            "range": "± 129470.51446810186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2690965.6458333335,
            "unit": "ns",
            "range": "± 104917.48790247274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3239552.8076923075,
            "unit": "ns",
            "range": "± 97536.42736897568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3325019.4237288134,
            "unit": "ns",
            "range": "± 145922.31654326164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10763746.81958763,
            "unit": "ns",
            "range": "± 798682.9691656126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3057837.5651041665,
            "unit": "ns",
            "range": "± 44832.328854205276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922191.3090494792,
            "unit": "ns",
            "range": "± 3829.038900020355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613292.72734375,
            "unit": "ns",
            "range": "± 5882.054927514469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632553.484095982,
            "unit": "ns",
            "range": "± 9848.420982729009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457729.30735677085,
            "unit": "ns",
            "range": "± 930.2202186052924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429298.48674665176,
            "unit": "ns",
            "range": "± 388.25662949035257"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a78b5bf2ff521d08ef5fc25f8d26dc56ccaffbc8",
          "message": "Merge pull request #3808 from OnedgeLee/sloth\n\nMinor fixes for Sloth",
          "timestamp": "2024-06-11T16:00:49+09:00",
          "tree_id": "21e2500216d4541a76cc9c12ac2570103c4633e0",
          "url": "https://github.com/planetarium/libplanet/commit/a78b5bf2ff521d08ef5fc25f8d26dc56ccaffbc8"
        },
        "date": 1718183321733,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5759316.4,
            "unit": "ns",
            "range": "± 55531.9126446355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14292378.75,
            "unit": "ns",
            "range": "± 105369.10612968197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35925027.192307696,
            "unit": "ns",
            "range": "± 304804.8925289161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73365863.5,
            "unit": "ns",
            "range": "± 167566.69761792445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145770158,
            "unit": "ns",
            "range": "± 356415.0587926299"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14790.511904761905,
            "unit": "ns",
            "range": "± 728.2707111865969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108283.17213114754,
            "unit": "ns",
            "range": "± 3156.1817634673253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106556.95,
            "unit": "ns",
            "range": "± 5415.426022957619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91334.06976744186,
            "unit": "ns",
            "range": "± 3360.4905636454246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3058098.7802197803,
            "unit": "ns",
            "range": "± 169743.68866865136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2839034.0625,
            "unit": "ns",
            "range": "± 54198.37921742525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4814.529411764706,
            "unit": "ns",
            "range": "± 392.69846629974717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26735.593023255813,
            "unit": "ns",
            "range": "± 1730.322488663394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22760.77380952381,
            "unit": "ns",
            "range": "± 1188.7308748407988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29856.907216494845,
            "unit": "ns",
            "range": "± 5845.393840243064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1080.9347826086957,
            "unit": "ns",
            "range": "± 201.47940774160583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4889.183908045977,
            "unit": "ns",
            "range": "± 733.6063916553431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 702097.7653061225,
            "unit": "ns",
            "range": "± 59474.69378847621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1276478.44,
            "unit": "ns",
            "range": "± 51111.39088041941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1099140.3655913977,
            "unit": "ns",
            "range": "± 70340.29477348963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9777061.9,
            "unit": "ns",
            "range": "± 1396880.7987707737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2181660.6896551726,
            "unit": "ns",
            "range": "± 62513.83673698822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295646.5789473685,
            "unit": "ns",
            "range": "± 78800.61403815896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2652306.947368421,
            "unit": "ns",
            "range": "± 81255.85672852355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2433379.2333333334,
            "unit": "ns",
            "range": "± 41417.401002247265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3146741.0808080807,
            "unit": "ns",
            "range": "± 208475.56167534488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023088.5070929276,
            "unit": "ns",
            "range": "± 65032.09870748654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929126.9273856027,
            "unit": "ns",
            "range": "± 3345.4668113376365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615871.1965494792,
            "unit": "ns",
            "range": "± 6472.7218835984195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640423.1639229911,
            "unit": "ns",
            "range": "± 10169.36277660029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462444.58684895834,
            "unit": "ns",
            "range": "± 1008.0764904348458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425345.95266927086,
            "unit": "ns",
            "range": "± 871.270182208277"
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
          "id": "bd50824d8d436cd73165cb7f6e92e55f261036c5",
          "message": "Merge pull request #3819 from greymistcube/port/4.6.1-to-main\n\n🔀 Port 4.6.1 to main",
          "timestamp": "2024-06-11T19:56:15+09:00",
          "tree_id": "babb4b2041239105e288ae9faee7c3f6d4dd8d32",
          "url": "https://github.com/planetarium/libplanet/commit/bd50824d8d436cd73165cb7f6e92e55f261036c5"
        },
        "date": 1718186678322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5732178.857142857,
            "unit": "ns",
            "range": "± 53962.82271635244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14275396.25,
            "unit": "ns",
            "range": "± 44602.43926701971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35976350.78571428,
            "unit": "ns",
            "range": "± 91783.24698245784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73230473.63333334,
            "unit": "ns",
            "range": "± 221556.32493820577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146198086.64285713,
            "unit": "ns",
            "range": "± 319016.04527590465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15346.768421052631,
            "unit": "ns",
            "range": "± 1077.9299946936471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110029.49056603774,
            "unit": "ns",
            "range": "± 4102.466174906924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104737.82142857143,
            "unit": "ns",
            "range": "± 4473.299994440316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91528.75925925926,
            "unit": "ns",
            "range": "± 2528.238085073242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101711,
            "unit": "ns",
            "range": "± 46469.188873671155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2822339.4803921566,
            "unit": "ns",
            "range": "± 114247.50360817347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5100.188888888889,
            "unit": "ns",
            "range": "± 735.3223995879836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27680.761363636364,
            "unit": "ns",
            "range": "± 2733.0685713976036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23240.858823529412,
            "unit": "ns",
            "range": "± 1252.2540643722002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28147.5,
            "unit": "ns",
            "range": "± 6167.891734665051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1268.968085106383,
            "unit": "ns",
            "range": "± 217.90135146549068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4842.795454545455,
            "unit": "ns",
            "range": "± 453.667435009718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 730100.8434343435,
            "unit": "ns",
            "range": "± 75115.18936805803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1309232.717647059,
            "unit": "ns",
            "range": "± 86599.49251289383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1100770.7164948455,
            "unit": "ns",
            "range": "± 79030.83943470882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9707814.68,
            "unit": "ns",
            "range": "± 1510863.6567604882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2311154.1666666665,
            "unit": "ns",
            "range": "± 32067.135244819172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296243.796875,
            "unit": "ns",
            "range": "± 105387.46129586127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2635840.065217391,
            "unit": "ns",
            "range": "± 101468.87794752135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2436405,
            "unit": "ns",
            "range": "± 107058.61704563598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2979014.9139784947,
            "unit": "ns",
            "range": "± 184811.52682034322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2988068.3979492188,
            "unit": "ns",
            "range": "± 56015.702662786294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913776.0817708333,
            "unit": "ns",
            "range": "± 4734.524304908717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616697.0862630209,
            "unit": "ns",
            "range": "± 4997.378577345771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1606492.8565848214,
            "unit": "ns",
            "range": "± 3427.590787584672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463288.7682917668,
            "unit": "ns",
            "range": "± 648.7206142621351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421819.4508463542,
            "unit": "ns",
            "range": "± 1332.6069141369642"
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
          "id": "bbd8e6e77ab681b74e2361197368d13a2592a44f",
          "message": "Merge pull request #3820 from greymistcube/chore/fix\n\n✏️ Fixed version prefix",
          "timestamp": "2024-06-11T20:15:29+09:00",
          "tree_id": "49da5500f4c88894a9ae13627ad1c0566e796ef6",
          "url": "https://github.com/planetarium/libplanet/commit/bbd8e6e77ab681b74e2361197368d13a2592a44f"
        },
        "date": 1718187778959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5700253.461538462,
            "unit": "ns",
            "range": "± 31067.274597812688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14506833.76923077,
            "unit": "ns",
            "range": "± 49235.623726041165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36260006.76923077,
            "unit": "ns",
            "range": "± 176649.715831998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72562027.07142857,
            "unit": "ns",
            "range": "± 174005.5532886873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147246957.93333334,
            "unit": "ns",
            "range": "± 313434.1045625441"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15503.925531914894,
            "unit": "ns",
            "range": "± 1348.448126267223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111090.01785714286,
            "unit": "ns",
            "range": "± 3676.7965552592427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105233.66,
            "unit": "ns",
            "range": "± 4179.659260645782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90684.78571428571,
            "unit": "ns",
            "range": "± 1521.460896060677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3151750.230769231,
            "unit": "ns",
            "range": "± 34103.63087745411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835878.8,
            "unit": "ns",
            "range": "± 74515.38659565554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4693.779069767442,
            "unit": "ns",
            "range": "± 462.2712636578553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26880.775280898877,
            "unit": "ns",
            "range": "± 2128.493447962287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23173.617021276597,
            "unit": "ns",
            "range": "± 1819.902562122802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27998.552083333332,
            "unit": "ns",
            "range": "± 5614.65494439571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1135.9666666666667,
            "unit": "ns",
            "range": "± 207.7888648593821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4955.68085106383,
            "unit": "ns",
            "range": "± 838.5309986866363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 718646.8041237113,
            "unit": "ns",
            "range": "± 71030.71754729886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283502.296875,
            "unit": "ns",
            "range": "± 54826.526289506604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1108562.5531914893,
            "unit": "ns",
            "range": "± 80235.50399589719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9853952.06,
            "unit": "ns",
            "range": "± 1416014.024558083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2225137.625,
            "unit": "ns",
            "range": "± 95417.69655897409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292111.6875,
            "unit": "ns",
            "range": "± 70592.92731704442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2637489.4857142856,
            "unit": "ns",
            "range": "± 78425.06585171209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2459978.882352941,
            "unit": "ns",
            "range": "± 116162.79319635865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3192875.0515463916,
            "unit": "ns",
            "range": "± 230932.45902352827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039709.16640625,
            "unit": "ns",
            "range": "± 53763.81031485823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924368.0124348958,
            "unit": "ns",
            "range": "± 7817.22246400282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618708.7406901042,
            "unit": "ns",
            "range": "± 4963.543563519723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630381.0345552885,
            "unit": "ns",
            "range": "± 15772.119774730767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465002.7560872396,
            "unit": "ns",
            "range": "± 959.8234727361591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419437.7239583333,
            "unit": "ns",
            "range": "± 819.5643221331595"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebb5e8493f2beeae562d2438403395991d43c51d",
          "message": "Merge pull request #3821 from greymistcube/chore/cleanup\n\n🧹 Removed `GetNextWorldState()` from `IBlockChainStates`",
          "timestamp": "2024-06-12T13:35:17+09:00",
          "tree_id": "b15d508329512c6fe8df4669e54d28e84f65d513",
          "url": "https://github.com/planetarium/libplanet/commit/ebb5e8493f2beeae562d2438403395991d43c51d"
        },
        "date": 1718189984241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5769762.214285715,
            "unit": "ns",
            "range": "± 58285.414345375364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14391195.846153846,
            "unit": "ns",
            "range": "± 43145.12024328698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36025398.85714286,
            "unit": "ns",
            "range": "± 164305.99141873495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72689920,
            "unit": "ns",
            "range": "± 169140.45451863145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145901988.6,
            "unit": "ns",
            "range": "± 393903.9591243386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15668.744680851063,
            "unit": "ns",
            "range": "± 1220.166203081959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108899.65454545454,
            "unit": "ns",
            "range": "± 3592.2111122186952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105266.64814814815,
            "unit": "ns",
            "range": "± 4016.237510629688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92783.82051282052,
            "unit": "ns",
            "range": "± 3215.7042763992404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141542.813559322,
            "unit": "ns",
            "range": "± 138001.50457406623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835465.3,
            "unit": "ns",
            "range": "± 41627.63447381696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4774.7191011235955,
            "unit": "ns",
            "range": "± 426.0078688124104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26314.063291139242,
            "unit": "ns",
            "range": "± 1367.5793638599905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22840.15053763441,
            "unit": "ns",
            "range": "± 1321.7666697515156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28915.636842105265,
            "unit": "ns",
            "range": "± 6074.592277028875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1062.8478260869565,
            "unit": "ns",
            "range": "± 148.5676620769217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4451.431034482759,
            "unit": "ns",
            "range": "± 461.80159822015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 732268.27,
            "unit": "ns",
            "range": "± 80379.26032680285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1322602.6627906978,
            "unit": "ns",
            "range": "± 101295.81909598308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1132786.74,
            "unit": "ns",
            "range": "± 91249.44740550761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9834802.4,
            "unit": "ns",
            "range": "± 1446688.905958588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188847.342857143,
            "unit": "ns",
            "range": "± 61081.002577071115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291939.064516129,
            "unit": "ns",
            "range": "± 69480.24378144504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2586281.380952381,
            "unit": "ns",
            "range": "± 59365.28688676253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2476985.5846153847,
            "unit": "ns",
            "range": "± 115592.60894609735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3276141.3777777776,
            "unit": "ns",
            "range": "± 355512.2565338476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3049683.6557291667,
            "unit": "ns",
            "range": "± 36168.745303938165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922966.4825520833,
            "unit": "ns",
            "range": "± 6791.789462668514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612176.087890625,
            "unit": "ns",
            "range": "± 4743.647689835077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1620078.15625,
            "unit": "ns",
            "range": "± 2410.8994258978246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463672.9971454327,
            "unit": "ns",
            "range": "± 583.7821583333107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419412.3487723214,
            "unit": "ns",
            "range": "± 1380.674647926443"
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
          "id": "31be60879dc6980427c2bb376c0c7a81ebeab25b",
          "message": "Merge pull request #3823 from greymistcube/chore/fix-ci\n\n👷 Changed to more elaborate version matching",
          "timestamp": "2024-06-13T14:12:56+09:00",
          "tree_id": "d75f573e515fb78404222eb82f98556f6097d5d4",
          "url": "https://github.com/planetarium/libplanet/commit/31be60879dc6980427c2bb376c0c7a81ebeab25b"
        },
        "date": 1718256098924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5851589.307692308,
            "unit": "ns",
            "range": "± 13617.103940661143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14567974.923076924,
            "unit": "ns",
            "range": "± 31766.89255724566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35920563.84615385,
            "unit": "ns",
            "range": "± 143291.86700219367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72801681.5,
            "unit": "ns",
            "range": "± 259478.95578165574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146245886.4,
            "unit": "ns",
            "range": "± 562780.8200820788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15176,
            "unit": "ns",
            "range": "± 1283.4939861565383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109057.75757575757,
            "unit": "ns",
            "range": "± 4971.11702370838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105148.225,
            "unit": "ns",
            "range": "± 3602.161989605544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90168.56756756757,
            "unit": "ns",
            "range": "± 2792.3733985082827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3189368.4444444445,
            "unit": "ns",
            "range": "± 68071.28408576534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808636.587301587,
            "unit": "ns",
            "range": "± 127081.3506272509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4833.736263736264,
            "unit": "ns",
            "range": "± 614.8741304828138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26932.170454545456,
            "unit": "ns",
            "range": "± 1889.4288513739775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24355.336734693876,
            "unit": "ns",
            "range": "± 2316.5380628819767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28975.4,
            "unit": "ns",
            "range": "± 5760.239161701535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1378.0108695652175,
            "unit": "ns",
            "range": "± 188.9319602260029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4792.913978494624,
            "unit": "ns",
            "range": "± 739.5474623319374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 701661.34,
            "unit": "ns",
            "range": "± 64471.94463277587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1290578.5,
            "unit": "ns",
            "range": "± 59383.97581531404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1128481.2,
            "unit": "ns",
            "range": "± 85438.60831437372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9865242.65,
            "unit": "ns",
            "range": "± 1421721.7849287381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209663.574074074,
            "unit": "ns",
            "range": "± 85671.74872025703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2334326.44,
            "unit": "ns",
            "range": "± 60910.54234153559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2655999.6666666665,
            "unit": "ns",
            "range": "± 78008.22659063652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2464170.672413793,
            "unit": "ns",
            "range": "± 107597.01916473533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3169636.797979798,
            "unit": "ns",
            "range": "± 249257.23670660364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3068912.180245536,
            "unit": "ns",
            "range": "± 26652.335933051614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923826.2964192708,
            "unit": "ns",
            "range": "± 4968.238101373436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617068.0930989584,
            "unit": "ns",
            "range": "± 5475.8834815610035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1614784.9022135416,
            "unit": "ns",
            "range": "± 20876.337854957088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456662.53786057694,
            "unit": "ns",
            "range": "± 608.0882242563437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431556.8889973958,
            "unit": "ns",
            "range": "± 1903.0796184251285"
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
          "id": "7bbce0e6f6f5c3477c0d7ebb8a283040a3d20bf9",
          "message": "Merge pull request #3822 from greymistcube/chore/docs\n\n📝 Added some clarifications",
          "timestamp": "2024-06-13T14:22:48+09:00",
          "tree_id": "117b4ead4ab10c1b1a807a9b279bc7c3eb94b5aa",
          "url": "https://github.com/planetarium/libplanet/commit/7bbce0e6f6f5c3477c0d7ebb8a283040a3d20bf9"
        },
        "date": 1718257256175,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5762535.428571428,
            "unit": "ns",
            "range": "± 49426.68890186958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14245572.5,
            "unit": "ns",
            "range": "± 44577.86049456307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35967882.93333333,
            "unit": "ns",
            "range": "± 226857.81442048255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72416907.23076923,
            "unit": "ns",
            "range": "± 170056.48328381655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145668747.53333333,
            "unit": "ns",
            "range": "± 303884.64995593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15352.19587628866,
            "unit": "ns",
            "range": "± 1050.0055321201019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110193.18644067796,
            "unit": "ns",
            "range": "± 4042.9197816914802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104350.73214285714,
            "unit": "ns",
            "range": "± 4487.670241859948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89858.22727272728,
            "unit": "ns",
            "range": "± 2173.3157667669743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3142827.5714285714,
            "unit": "ns",
            "range": "± 47208.94696243708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2787548.68,
            "unit": "ns",
            "range": "± 111636.16964989253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4708.183908045977,
            "unit": "ns",
            "range": "± 412.8179825477351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28527.225806451614,
            "unit": "ns",
            "range": "± 3045.914855532386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23387.630434782608,
            "unit": "ns",
            "range": "± 1522.7599921815715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29260.239583333332,
            "unit": "ns",
            "range": "± 5888.816190113509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1227.4065934065934,
            "unit": "ns",
            "range": "± 153.05184147296686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4733.347826086957,
            "unit": "ns",
            "range": "± 624.3664645727973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 693688.7127659575,
            "unit": "ns",
            "range": "± 45724.94333985268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1281171.1666666667,
            "unit": "ns",
            "range": "± 40629.71749045478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1098310.6304347827,
            "unit": "ns",
            "range": "± 61852.62832808877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9866395.89,
            "unit": "ns",
            "range": "± 1477239.0607186798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2207997.8181818184,
            "unit": "ns",
            "range": "± 69379.57355800703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2281615.440677966,
            "unit": "ns",
            "range": "± 96539.17858538257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2606360,
            "unit": "ns",
            "range": "± 44146.46168589976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2426141.3333333335,
            "unit": "ns",
            "range": "± 32217.86506775099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3203328.9784946237,
            "unit": "ns",
            "range": "± 292330.67085032986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021300.673697917,
            "unit": "ns",
            "range": "± 52291.64187880537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923438.9052083333,
            "unit": "ns",
            "range": "± 7464.468551108708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613811.7479166667,
            "unit": "ns",
            "range": "± 5889.653015883823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1596753.504296875,
            "unit": "ns",
            "range": "± 22271.842925446068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465845.87184495194,
            "unit": "ns",
            "range": "± 577.7800127925201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418353.3407226562,
            "unit": "ns",
            "range": "± 1128.242313981992"
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
          "id": "aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9",
          "message": "Merge pull request #3825 from greymistcube/chore/fix-javascript-ci\n\n👷 Updated javascript ci version parsing",
          "timestamp": "2024-06-13T16:43:39+09:00",
          "tree_id": "6dbc8b89f1ed7f6ea5506c8543a0ecca4ea0cf98",
          "url": "https://github.com/planetarium/libplanet/commit/aa6c4a2f17b00e49bbbec0a52403a71f515b7ff9"
        },
        "date": 1718265148483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5721107.5,
            "unit": "ns",
            "range": "± 56496.69920344564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14170035.538461538,
            "unit": "ns",
            "range": "± 89793.23957813247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36350101.28571428,
            "unit": "ns",
            "range": "± 280510.3173956568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72748541.86666666,
            "unit": "ns",
            "range": "± 204428.40056252552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147706297.6,
            "unit": "ns",
            "range": "± 411142.68253383075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15589.136363636364,
            "unit": "ns",
            "range": "± 1356.1240194817042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109402.20967741935,
            "unit": "ns",
            "range": "± 4477.043883961962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104134.74193548386,
            "unit": "ns",
            "range": "± 3789.6423895280236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90484.5,
            "unit": "ns",
            "range": "± 2213.4120772710908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166106.4714285713,
            "unit": "ns",
            "range": "± 102220.44886549788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746337.7258064514,
            "unit": "ns",
            "range": "± 123290.06027253598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5055.556179775281,
            "unit": "ns",
            "range": "± 584.7214635959461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28257.127659574468,
            "unit": "ns",
            "range": "± 2710.892152612805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23691.08108108108,
            "unit": "ns",
            "range": "± 1180.547362678678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28538.804347826088,
            "unit": "ns",
            "range": "± 4325.611753061369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1172.776595744681,
            "unit": "ns",
            "range": "± 214.16891907549015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4612.7558139534885,
            "unit": "ns",
            "range": "± 448.0986219191042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 697339,
            "unit": "ns",
            "range": "± 54242.468786196536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1278618.0555555555,
            "unit": "ns",
            "range": "± 53107.019212958425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1095843.3258426967,
            "unit": "ns",
            "range": "± 60260.076253002044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9790800.53,
            "unit": "ns",
            "range": "± 1415733.7453223728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165361.25,
            "unit": "ns",
            "range": "± 16702.796701723066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311583.6333333333,
            "unit": "ns",
            "range": "± 68181.64974004892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2577256,
            "unit": "ns",
            "range": "± 23235.09599363285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2515508,
            "unit": "ns",
            "range": "± 117404.94370021221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3138607.42,
            "unit": "ns",
            "range": "± 260367.60064411885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3016410.177734375,
            "unit": "ns",
            "range": "± 67034.30314369657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929955.4907552083,
            "unit": "ns",
            "range": "± 4002.5614117272657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616966.922265625,
            "unit": "ns",
            "range": "± 5288.335769880264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1607523.3501302083,
            "unit": "ns",
            "range": "± 18142.909815457795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461192.17825753347,
            "unit": "ns",
            "range": "± 705.4273952562814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425278.0965494792,
            "unit": "ns",
            "range": "± 1431.6683161746957"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6cea60074a476e0d15dd81462aa9069916a881",
          "message": "Merge pull request #3831 from s2quake/fix/ci-installation-test-error\n\nFix ci installation test error",
          "timestamp": "2024-06-18T16:28:32+09:00",
          "tree_id": "3316e761f9841cb41ac666074759b05c8030e0c7",
          "url": "https://github.com/planetarium/libplanet/commit/9d6cea60074a476e0d15dd81462aa9069916a881"
        },
        "date": 1718696239407,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5721901.428571428,
            "unit": "ns",
            "range": "± 49133.250065063316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14297875.461538462,
            "unit": "ns",
            "range": "± 89407.15493890425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35942429.76923077,
            "unit": "ns",
            "range": "± 300485.18803932023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73171610.57692307,
            "unit": "ns",
            "range": "± 114037.44122835384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145201532.35714287,
            "unit": "ns",
            "range": "± 482188.1742922821"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15657.979591836734,
            "unit": "ns",
            "range": "± 1465.0420561824621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109392.9014084507,
            "unit": "ns",
            "range": "± 4121.606684482329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104997,
            "unit": "ns",
            "range": "± 3582.8766739687767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91252.42105263157,
            "unit": "ns",
            "range": "± 1923.4857049923562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3138513.8695652173,
            "unit": "ns",
            "range": "± 120930.66428745374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2707832.989247312,
            "unit": "ns",
            "range": "± 152866.13541212076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4973.964285714285,
            "unit": "ns",
            "range": "± 417.08906466814585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26913.994252873563,
            "unit": "ns",
            "range": "± 2192.0216954534644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22429.901408450703,
            "unit": "ns",
            "range": "± 1070.686617548752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28786.56989247312,
            "unit": "ns",
            "range": "± 4925.731412027204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1098.1739130434783,
            "unit": "ns",
            "range": "± 148.12673580904595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4896.593023255814,
            "unit": "ns",
            "range": "± 603.6423050295105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 710794.3762886598,
            "unit": "ns",
            "range": "± 59083.7858612062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1306631.2467532468,
            "unit": "ns",
            "range": "± 66492.50251070174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1145519.4242424243,
            "unit": "ns",
            "range": "± 101924.56679740458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9852389.51,
            "unit": "ns",
            "range": "± 1343894.5068462128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2206330.5714285714,
            "unit": "ns",
            "range": "± 32521.576754078647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271561.529411765,
            "unit": "ns",
            "range": "± 71508.96724706302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2588767.8333333335,
            "unit": "ns",
            "range": "± 30974.884755331383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2480364.0135135134,
            "unit": "ns",
            "range": "± 123796.89006268127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3296178.83,
            "unit": "ns",
            "range": "± 463842.65079100843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3070378.9604166667,
            "unit": "ns",
            "range": "± 30675.575328511462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924620.3755208333,
            "unit": "ns",
            "range": "± 5170.873856321991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612857.7145833333,
            "unit": "ns",
            "range": "± 2741.2811138230063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631773.5248697917,
            "unit": "ns",
            "range": "± 20900.27054534593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 448207.8682391827,
            "unit": "ns",
            "range": "± 550.1301058272412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425844.86650390626,
            "unit": "ns",
            "range": "± 1824.8146996846299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0a35dc306cf7d7b4e8210dd5921b53d1e035b70",
          "message": "Merge pull request #3832 from OnedgeLee/chore/fix-duplicated-nsrh-gen\n\nRemove duplicated NSRH generation on BlockChain.Create()",
          "timestamp": "2024-06-19T14:29:27+09:00",
          "tree_id": "126d3de9bd4682bcf0bc2a6ac0cd37e71f4c3ba6",
          "url": "https://github.com/planetarium/libplanet/commit/a0a35dc306cf7d7b4e8210dd5921b53d1e035b70"
        },
        "date": 1718775500330,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5820288.428571428,
            "unit": "ns",
            "range": "± 22032.799817594627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14358107.833333334,
            "unit": "ns",
            "range": "± 70232.14775926185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36546843.461538464,
            "unit": "ns",
            "range": "± 172948.3312151423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72487461.14285715,
            "unit": "ns",
            "range": "± 219801.2948484493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146118213.2,
            "unit": "ns",
            "range": "± 357183.5108174588"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 16042.854166666666,
            "unit": "ns",
            "range": "± 1313.3837614439133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110647.22950819672,
            "unit": "ns",
            "range": "± 4480.930265742604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105794.49056603774,
            "unit": "ns",
            "range": "± 4372.706192625417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91884.025,
            "unit": "ns",
            "range": "± 3197.4448491665244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3210186,
            "unit": "ns",
            "range": "± 64451.212833817175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798496.9415584416,
            "unit": "ns",
            "range": "± 143122.83931841768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5221.183673469388,
            "unit": "ns",
            "range": "± 1107.693064291345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27237.03370786517,
            "unit": "ns",
            "range": "± 1799.5696546765523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22882.755555555555,
            "unit": "ns",
            "range": "± 1364.6451019156123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27615.761363636364,
            "unit": "ns",
            "range": "± 4115.635228394605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1088.4,
            "unit": "ns",
            "range": "± 147.04740502927172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4854.966292134832,
            "unit": "ns",
            "range": "± 595.9676136990507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 721123.42,
            "unit": "ns",
            "range": "± 74686.94327038924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272381.1944444445,
            "unit": "ns",
            "range": "± 41667.31888239061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077016.9879518072,
            "unit": "ns",
            "range": "± 57298.31270586314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11108781.14,
            "unit": "ns",
            "range": "± 2160770.016005251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208314.125,
            "unit": "ns",
            "range": "± 68219.76317458728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2304540.6666666665,
            "unit": "ns",
            "range": "± 102906.63292381844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2603670.5,
            "unit": "ns",
            "range": "± 38452.50741440076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2453584.23880597,
            "unit": "ns",
            "range": "± 116384.8792385263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4253408.787234043,
            "unit": "ns",
            "range": "± 982021.6172160201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036704.2022235575,
            "unit": "ns",
            "range": "± 37040.0973267232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920018.1208333333,
            "unit": "ns",
            "range": "± 5308.810198354926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619579.6553385417,
            "unit": "ns",
            "range": "± 5035.657531109531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1607876.8983072916,
            "unit": "ns",
            "range": "± 16862.410565089143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461820.0636268029,
            "unit": "ns",
            "range": "± 651.7522390376886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424510.11586216517,
            "unit": "ns",
            "range": "± 1190.0024345227473"
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
          "id": "63237131495a8896f81cbf3e1e025b5adc7ccd3b",
          "message": "Merge pull request #3835 from greymistcube/chore/cleanup\n\n🧹 Minor cleanup for #3832",
          "timestamp": "2024-06-20T08:28:03+09:00",
          "tree_id": "852c0e9c90d2f2985d81b58d98ccb2bda333c59f",
          "url": "https://github.com/planetarium/libplanet/commit/63237131495a8896f81cbf3e1e025b5adc7ccd3b"
        },
        "date": 1718840201752,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5713648.5,
            "unit": "ns",
            "range": "± 66274.56198125864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14276702.076923076,
            "unit": "ns",
            "range": "± 50172.84302864372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36174663.76923077,
            "unit": "ns",
            "range": "± 158832.69521320952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72859144.86666666,
            "unit": "ns",
            "range": "± 249183.303046133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148804144.93333334,
            "unit": "ns",
            "range": "± 385834.8164224957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15141.18918918919,
            "unit": "ns",
            "range": "± 734.2828562837419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110712.0076923077,
            "unit": "ns",
            "range": "± 5126.420739423965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104939.86274509804,
            "unit": "ns",
            "range": "± 4245.366005515227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91590.27272727272,
            "unit": "ns",
            "range": "± 3412.300822119036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149193.9032258065,
            "unit": "ns",
            "range": "± 95926.64195357995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2750872.0506329113,
            "unit": "ns",
            "range": "± 142222.3952299571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4773.1373626373625,
            "unit": "ns",
            "range": "± 648.4719905967587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27032.134831460673,
            "unit": "ns",
            "range": "± 1606.6648345889694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22757.52380952381,
            "unit": "ns",
            "range": "± 729.7509845277908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29455.690721649484,
            "unit": "ns",
            "range": "± 5653.149143325678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1244.7659574468084,
            "unit": "ns",
            "range": "± 205.75909421007057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4776.510869565217,
            "unit": "ns",
            "range": "± 632.4922011344794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 712848.494949495,
            "unit": "ns",
            "range": "± 66640.51091787475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282123.579710145,
            "unit": "ns",
            "range": "± 61850.221014728464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1150387.381443299,
            "unit": "ns",
            "range": "± 105956.23294386729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9830873.42,
            "unit": "ns",
            "range": "± 1415115.5234402893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219534.5074626864,
            "unit": "ns",
            "range": "± 104833.57177166695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288909.6,
            "unit": "ns",
            "range": "± 85802.37431722227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2607676.1666666665,
            "unit": "ns",
            "range": "± 49180.83784213285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2436998.566666667,
            "unit": "ns",
            "range": "± 39554.13184388971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3205020.5555555555,
            "unit": "ns",
            "range": "± 285296.00357112894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3013036.568142361,
            "unit": "ns",
            "range": "± 63501.623213603554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929219.313671875,
            "unit": "ns",
            "range": "± 4788.88172375664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616971.8347005208,
            "unit": "ns",
            "range": "± 4319.338761327095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1634069.671484375,
            "unit": "ns",
            "range": "± 11687.3986828415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457220.8380301339,
            "unit": "ns",
            "range": "± 812.4292606469774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 415530.4087565104,
            "unit": "ns",
            "range": "± 798.1483930232719"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd7f7701b050789a1a718f8e68e3f06f7742cd90",
          "message": "Merge pull request #3836 from riemannulus/ci/ai-code-reviewer\n\n✨  ci: introduce ai-code-reviewer",
          "timestamp": "2024-06-20T15:48:02+09:00",
          "tree_id": "23ebb1f68e6571dff33a06d91ecc9581b051906e",
          "url": "https://github.com/planetarium/libplanet/commit/dd7f7701b050789a1a718f8e68e3f06f7742cd90"
        },
        "date": 1718866613381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5835589.857142857,
            "unit": "ns",
            "range": "± 45581.84164750281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14342135,
            "unit": "ns",
            "range": "± 66490.31198352635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36284025.461538464,
            "unit": "ns",
            "range": "± 176022.75522813114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72516994.86666666,
            "unit": "ns",
            "range": "± 251404.7004268123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146764685.4,
            "unit": "ns",
            "range": "± 462225.5429465762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15280.191489361701,
            "unit": "ns",
            "range": "± 1209.6677076526196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108814.17741935483,
            "unit": "ns",
            "range": "± 4594.5579409693355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106069.52,
            "unit": "ns",
            "range": "± 3822.8524623076196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94884.27777777778,
            "unit": "ns",
            "range": "± 2005.3914552747274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3174039.1428571427,
            "unit": "ns",
            "range": "± 42373.187944659134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2823967.204819277,
            "unit": "ns",
            "range": "± 150355.79884043493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4871.555555555556,
            "unit": "ns",
            "range": "± 602.8540381061769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27559.19540229885,
            "unit": "ns",
            "range": "± 2119.216127783498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23632.434210526317,
            "unit": "ns",
            "range": "± 1178.744624143571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29153.690721649484,
            "unit": "ns",
            "range": "± 6646.364606812046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1087.1808510638298,
            "unit": "ns",
            "range": "± 172.8545266150439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4588.337209302325,
            "unit": "ns",
            "range": "± 410.1644608594465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676377.1585365854,
            "unit": "ns",
            "range": "± 34965.10309905638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270111.9787234042,
            "unit": "ns",
            "range": "± 48782.17241382942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1080417.9101123596,
            "unit": "ns",
            "range": "± 61468.44775733624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11094984.5,
            "unit": "ns",
            "range": "± 2202598.00413228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2169704.8076923075,
            "unit": "ns",
            "range": "± 41939.63498841565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295896.3,
            "unit": "ns",
            "range": "± 92387.01129736357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2635283.9166666665,
            "unit": "ns",
            "range": "± 85488.13014226846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2332931.6470588236,
            "unit": "ns",
            "range": "± 46211.099309231395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3132612.489473684,
            "unit": "ns",
            "range": "± 198915.38829455158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3041421.8971354165,
            "unit": "ns",
            "range": "± 38799.098756650164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918646.7600446428,
            "unit": "ns",
            "range": "± 5472.995262488901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615277.5664713542,
            "unit": "ns",
            "range": "± 5187.145100025973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1615744.8725911458,
            "unit": "ns",
            "range": "± 16336.295332108928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465794.5556640625,
            "unit": "ns",
            "range": "± 782.9815409175884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429728.09381510416,
            "unit": "ns",
            "range": "± 986.7683361368469"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73ac2c3ff242444d60953077f7a945db959d93c7",
          "message": "Merge pull request #3838 from riemannulus/fix/ci/ai-code-reviewer\n\nfix: use pull_request_target",
          "timestamp": "2024-06-20T16:02:26+09:00",
          "tree_id": "9054b518b79572df702a71529398fc55fe354619",
          "url": "https://github.com/planetarium/libplanet/commit/73ac2c3ff242444d60953077f7a945db959d93c7"
        },
        "date": 1718870841508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5797708.714285715,
            "unit": "ns",
            "range": "± 16531.85400012106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14258881.692307692,
            "unit": "ns",
            "range": "± 50433.319177214275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36091833.6,
            "unit": "ns",
            "range": "± 83622.35294960656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72841986.73333333,
            "unit": "ns",
            "range": "± 210115.21354671335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145615147.53333333,
            "unit": "ns",
            "range": "± 388780.4776776564"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15543.333333333334,
            "unit": "ns",
            "range": "± 1298.3304474890795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110034.46153846153,
            "unit": "ns",
            "range": "± 3803.3199475565793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105853.93617021276,
            "unit": "ns",
            "range": "± 3899.996869587681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92484.08333333333,
            "unit": "ns",
            "range": "± 2342.4706748044555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145797.8571428573,
            "unit": "ns",
            "range": "± 52654.37005000285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2893802.8076923075,
            "unit": "ns",
            "range": "± 40448.72496009529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5462.887640449439,
            "unit": "ns",
            "range": "± 410.5120814909727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26526.12676056338,
            "unit": "ns",
            "range": "± 1294.112127285703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22274.81395348837,
            "unit": "ns",
            "range": "± 813.5282725737657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28423.963157894737,
            "unit": "ns",
            "range": "± 4330.477382191341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1228.6875,
            "unit": "ns",
            "range": "± 263.4511165083073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5470.902173913043,
            "unit": "ns",
            "range": "± 552.5269832759026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 699349.3118279569,
            "unit": "ns",
            "range": "± 54952.10221262231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1266975.725,
            "unit": "ns",
            "range": "± 38270.846127064004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082461.7191011235,
            "unit": "ns",
            "range": "± 65189.198896887254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10868435.1,
            "unit": "ns",
            "range": "± 2195434.144326257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226879.48,
            "unit": "ns",
            "range": "± 88707.99429686741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292020.2467532465,
            "unit": "ns",
            "range": "± 114242.32575828451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2622569.3448275863,
            "unit": "ns",
            "range": "± 76043.87480183296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2492878.8714285716,
            "unit": "ns",
            "range": "± 121034.71339474659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4150240.4725274723,
            "unit": "ns",
            "range": "± 857759.5576671348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3123666.202566964,
            "unit": "ns",
            "range": "± 15259.320089641209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924153.2846354167,
            "unit": "ns",
            "range": "± 5303.148532664491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 626933.7800641741,
            "unit": "ns",
            "range": "± 5227.091049494028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1614864.0481119792,
            "unit": "ns",
            "range": "± 14783.980305658331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462914.7379231771,
            "unit": "ns",
            "range": "± 1757.0037517466985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422882.4884905134,
            "unit": "ns",
            "range": "± 1456.2343780093324"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48364a0b1d7bbae24b43df4169be269aec4f48ec",
          "message": "Merge pull request #3839 from riemannulus/ci/remove-ai-code-reviewer\n\nremove: ai code reviewer",
          "timestamp": "2024-06-20T16:25:40+09:00",
          "tree_id": "852c0e9c90d2f2985d81b58d98ccb2bda333c59f",
          "url": "https://github.com/planetarium/libplanet/commit/48364a0b1d7bbae24b43df4169be269aec4f48ec"
        },
        "date": 1718874294869,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5686609.785714285,
            "unit": "ns",
            "range": "± 51590.510912195066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14281322.916666666,
            "unit": "ns",
            "range": "± 62344.90005016571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36087351.571428575,
            "unit": "ns",
            "range": "± 164382.0058956081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73446047,
            "unit": "ns",
            "range": "± 256241.65245692813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146024444.2,
            "unit": "ns",
            "range": "± 312688.98217059986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15334.036585365853,
            "unit": "ns",
            "range": "± 789.7439371716047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109203.02666666667,
            "unit": "ns",
            "range": "± 4553.0266677362115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 101602.24615384615,
            "unit": "ns",
            "range": "± 4480.111480305099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93847,
            "unit": "ns",
            "range": "± 2610.0733777112546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3040588.7027027025,
            "unit": "ns",
            "range": "± 102514.38384627487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2897554.0285714287,
            "unit": "ns",
            "range": "± 94959.55935229224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5144.314606741573,
            "unit": "ns",
            "range": "± 564.5684513515534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26580.691011235955,
            "unit": "ns",
            "range": "± 1663.1993052575488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22765.086419753086,
            "unit": "ns",
            "range": "± 1185.6621904818724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28423.989583333332,
            "unit": "ns",
            "range": "± 6606.495467970246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1054.5376344086021,
            "unit": "ns",
            "range": "± 218.7340334118219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5084.958333333333,
            "unit": "ns",
            "range": "± 915.2590765422555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 718700.94,
            "unit": "ns",
            "range": "± 69461.22893621807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1260916.2653061224,
            "unit": "ns",
            "range": "± 50049.70801312411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1105202.7692307692,
            "unit": "ns",
            "range": "± 75989.20950460692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11110097.38,
            "unit": "ns",
            "range": "± 2049238.8564775235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226351.5517241377,
            "unit": "ns",
            "range": "± 97131.45557297773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278957.9583333335,
            "unit": "ns",
            "range": "± 57782.39415064763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2621259.53125,
            "unit": "ns",
            "range": "± 78622.44796247377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2498194.7101449277,
            "unit": "ns",
            "range": "± 115151.57097701087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3962786.2448979593,
            "unit": "ns",
            "range": "± 904313.0947228838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3104554.5106026786,
            "unit": "ns",
            "range": "± 23393.19355663712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918760.3966936384,
            "unit": "ns",
            "range": "± 5387.572118046944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 620083.08359375,
            "unit": "ns",
            "range": "± 7541.92380992235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1585434.7377604167,
            "unit": "ns",
            "range": "± 9692.985260165355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457269.7521033654,
            "unit": "ns",
            "range": "± 646.282273966737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420658.246484375,
            "unit": "ns",
            "range": "± 1810.5870507424443"
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
          "id": "1a9ce89fd322af22e7351d2d32af855852356745",
          "message": "Merge pull request #3834 from greymistcube/refactor/stricter-swap-condition\n\n♻️ Stricter `Swap()` condition",
          "timestamp": "2024-06-20T16:49:28+09:00",
          "tree_id": "b95c422526855a76841da82a16f5ed3e4117e303",
          "url": "https://github.com/planetarium/libplanet/commit/1a9ce89fd322af22e7351d2d32af855852356745"
        },
        "date": 1718875432706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5723663.285714285,
            "unit": "ns",
            "range": "± 58150.58935666493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14348089,
            "unit": "ns",
            "range": "± 49736.17425669477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36359011.35714286,
            "unit": "ns",
            "range": "± 178768.91012426204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72480662.7,
            "unit": "ns",
            "range": "± 252766.89119175173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146092358.66666666,
            "unit": "ns",
            "range": "± 425441.161668461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15745.787234042553,
            "unit": "ns",
            "range": "± 1095.1999559400977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111138.64615384616,
            "unit": "ns",
            "range": "± 5174.764364897356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105879.77586206897,
            "unit": "ns",
            "range": "± 4419.368606340206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91136.28947368421,
            "unit": "ns",
            "range": "± 3113.9899052753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3134017.261904762,
            "unit": "ns",
            "range": "± 112259.36646001038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2760213.27,
            "unit": "ns",
            "range": "± 170306.17316485534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4778.227272727273,
            "unit": "ns",
            "range": "± 468.4963653061997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26293.02564102564,
            "unit": "ns",
            "range": "± 1277.121336610155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24078.346153846152,
            "unit": "ns",
            "range": "± 1242.140212372503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28006.484210526316,
            "unit": "ns",
            "range": "± 5318.623749884283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1196.031914893617,
            "unit": "ns",
            "range": "± 165.30021252499913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4693.781609195402,
            "unit": "ns",
            "range": "± 406.0392759467166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687128.1333333333,
            "unit": "ns",
            "range": "± 42788.500772830506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282149.2592592593,
            "unit": "ns",
            "range": "± 50981.62415571083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1099388.6290322582,
            "unit": "ns",
            "range": "± 64315.62612231113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11060009.21,
            "unit": "ns",
            "range": "± 2320231.1229334185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2210612.0754716983,
            "unit": "ns",
            "range": "± 88506.80336775703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2326342.3661971833,
            "unit": "ns",
            "range": "± 113094.71424142554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2597527.5,
            "unit": "ns",
            "range": "± 30838.816276952595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2470375.58,
            "unit": "ns",
            "range": "± 99575.96232434815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3325135.71,
            "unit": "ns",
            "range": "± 355764.4263040082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3006240.0184895834,
            "unit": "ns",
            "range": "± 54949.72840954538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929242.4864583333,
            "unit": "ns",
            "range": "± 5884.190803257224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615897.5852864584,
            "unit": "ns",
            "range": "± 4526.939645628813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1634833.4830228365,
            "unit": "ns",
            "range": "± 11799.120141341262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466911.7498697917,
            "unit": "ns",
            "range": "± 937.6620332490821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 442582.35403645836,
            "unit": "ns",
            "range": "± 1474.2239692265503"
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
          "id": "cc268b022eb3569d2056d29174a51efaeb408d18",
          "message": "Merge pull request #3840 from greymistcube/chore/fix-evaluate-block\n\n🔧 Fixed `BlockChain.EvaluateBlock()`",
          "timestamp": "2024-06-20T17:27:18+09:00",
          "tree_id": "dc0f79a0fa4f9492af20b5b347ba2b6ac1d8daf1",
          "url": "https://github.com/planetarium/libplanet/commit/cc268b022eb3569d2056d29174a51efaeb408d18"
        },
        "date": 1718876528512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5764932,
            "unit": "ns",
            "range": "± 63341.30889687417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14281624.692307692,
            "unit": "ns",
            "range": "± 74942.04378093849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36675007.884615384,
            "unit": "ns",
            "range": "± 206307.75554194857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72912181.83333333,
            "unit": "ns",
            "range": "± 171039.733703549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145525730.86666667,
            "unit": "ns",
            "range": "± 296804.4379331921"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15144.464705882352,
            "unit": "ns",
            "range": "± 821.2185117114636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109630.70909090909,
            "unit": "ns",
            "range": "± 4644.1396311700955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103189.48888888888,
            "unit": "ns",
            "range": "± 2926.1374526701907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91182.13333333333,
            "unit": "ns",
            "range": "± 2691.2219053207336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082733.7,
            "unit": "ns",
            "range": "± 68224.53860606553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2778770.16,
            "unit": "ns",
            "range": "± 139048.97855549102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5092.101123595506,
            "unit": "ns",
            "range": "± 473.44093528471814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27127.186813186814,
            "unit": "ns",
            "range": "± 2278.4478143005254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22889.474226804123,
            "unit": "ns",
            "range": "± 1362.9712571313905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28117.41052631579,
            "unit": "ns",
            "range": "± 5166.939903654108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1068.9444444444443,
            "unit": "ns",
            "range": "± 197.4212607149295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4681.930232558139,
            "unit": "ns",
            "range": "± 514.7736633579889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 702722.9494949495,
            "unit": "ns",
            "range": "± 55680.808766992624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282144,
            "unit": "ns",
            "range": "± 44088.92687481714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1114124.452631579,
            "unit": "ns",
            "range": "± 88122.93214350929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11123277,
            "unit": "ns",
            "range": "± 2263888.466635303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184406.6923076925,
            "unit": "ns",
            "range": "± 58190.38737095276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303078.4677419355,
            "unit": "ns",
            "range": "± 103839.28365491625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2647224.5384615385,
            "unit": "ns",
            "range": "± 43426.74506494699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2448750.3448275863,
            "unit": "ns",
            "range": "± 107084.99164838716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3091131.0454545454,
            "unit": "ns",
            "range": "± 251054.01626805283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3088686.4994791667,
            "unit": "ns",
            "range": "± 36103.60479453662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914952.7960286458,
            "unit": "ns",
            "range": "± 4533.157245042704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617749.40625,
            "unit": "ns",
            "range": "± 4543.738146945742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636210.7569754464,
            "unit": "ns",
            "range": "± 16987.1088053659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457640.74564034597,
            "unit": "ns",
            "range": "± 746.0487819846929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424504.8555989583,
            "unit": "ns",
            "range": "± 1099.9986748006113"
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
          "id": "87c5fdffc0d7e81e9694b3ce45b27d66677b6767",
          "message": "Merge pull request #3842 from greymistcube/refactor/memory-next-state-root-hash\n\n♻️ In memory \"next state root hash\"",
          "timestamp": "2024-06-21T11:37:54+09:00",
          "tree_id": "0de704360b7bbd2e99d6a58d4c5b53a179e63aba",
          "url": "https://github.com/planetarium/libplanet/commit/87c5fdffc0d7e81e9694b3ce45b27d66677b6767"
        },
        "date": 1718937916783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757516.9,
            "unit": "ns",
            "range": "± 128154.18318896805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14368016.384615384,
            "unit": "ns",
            "range": "± 38424.64303138994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36229219.928571425,
            "unit": "ns",
            "range": "± 162260.21021540786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72752422.46666667,
            "unit": "ns",
            "range": "± 268117.92756409757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146099281.06666666,
            "unit": "ns",
            "range": "± 353592.60921685136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14396.285714285714,
            "unit": "ns",
            "range": "± 225.06082206011249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109305.79310344828,
            "unit": "ns",
            "range": "± 4173.037207525257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105425.15151515152,
            "unit": "ns",
            "range": "± 4896.439730889009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91024,
            "unit": "ns",
            "range": "± 3037.6199107561533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3152596.3636363638,
            "unit": "ns",
            "range": "± 73795.684327644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807927.3529411764,
            "unit": "ns",
            "range": "± 133384.06595474528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5723.39247311828,
            "unit": "ns",
            "range": "± 840.2629177352713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26439.423529411764,
            "unit": "ns",
            "range": "± 1626.620937904788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22686.15,
            "unit": "ns",
            "range": "± 776.6743880985165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28035.319587628866,
            "unit": "ns",
            "range": "± 5518.993306351243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1175.8229166666667,
            "unit": "ns",
            "range": "± 237.41349648114678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4844.612903225807,
            "unit": "ns",
            "range": "± 682.907706417105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 717721.19,
            "unit": "ns",
            "range": "± 67191.48654746733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1267397.1785714286,
            "unit": "ns",
            "range": "± 35299.36044122504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1073954.5443037974,
            "unit": "ns",
            "range": "± 55321.23433041747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11007854.52,
            "unit": "ns",
            "range": "± 1988896.1576984827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2235740.5090909093,
            "unit": "ns",
            "range": "± 94891.18338135428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295537.40625,
            "unit": "ns",
            "range": "± 105637.10943238255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2637500.34375,
            "unit": "ns",
            "range": "± 81818.23777389985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2495599.0877192984,
            "unit": "ns",
            "range": "± 107660.02405792449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4062072.9583333335,
            "unit": "ns",
            "range": "± 1080937.6092375587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031683.8075520834,
            "unit": "ns",
            "range": "± 53481.579520722975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922076.9780598958,
            "unit": "ns",
            "range": "± 5318.488184927437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 622163.8595703125,
            "unit": "ns",
            "range": "± 7410.323184060931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623800.3276367188,
            "unit": "ns",
            "range": "± 8873.790573046126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460541.1717623197,
            "unit": "ns",
            "range": "± 349.0391981058088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420549.7404785156,
            "unit": "ns",
            "range": "± 737.9821825827621"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fbd71c5c052827918df99703928dc77ce985e75",
          "message": "Merge pull request #3827 from moreal/buffer\n\nUse `buffer` dependency for browser environment",
          "timestamp": "2024-06-24T16:41:25+09:00",
          "tree_id": "d6d039b18067bc4e4226835f5c0bbcd1cfed101f",
          "url": "https://github.com/planetarium/libplanet/commit/2fbd71c5c052827918df99703928dc77ce985e75"
        },
        "date": 1719215324015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5751512.357142857,
            "unit": "ns",
            "range": "± 62534.00782787301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14533874.583333334,
            "unit": "ns",
            "range": "± 52884.06540633497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36598141.2,
            "unit": "ns",
            "range": "± 677403.979370424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72665448.53846154,
            "unit": "ns",
            "range": "± 205890.63929370182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147585234.83333334,
            "unit": "ns",
            "range": "± 464714.84402736794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13821.857142857143,
            "unit": "ns",
            "range": "± 242.03459928850515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109302.52,
            "unit": "ns",
            "range": "± 3791.238554232909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105444.72727272728,
            "unit": "ns",
            "range": "± 3956.254097252804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90019.91666666667,
            "unit": "ns",
            "range": "± 2910.2509894214572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3110141.787878788,
            "unit": "ns",
            "range": "± 96696.24491376255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846782.6666666665,
            "unit": "ns",
            "range": "± 78047.98428481723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5003.978021978022,
            "unit": "ns",
            "range": "± 739.7257146030094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27303.355555555554,
            "unit": "ns",
            "range": "± 1990.520062534113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22465.370967741936,
            "unit": "ns",
            "range": "± 1019.1212903228018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28465.5,
            "unit": "ns",
            "range": "± 5982.318622586943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1176.6526315789474,
            "unit": "ns",
            "range": "± 173.47418524128832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4627.965909090909,
            "unit": "ns",
            "range": "± 497.9461367922142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 707396.51,
            "unit": "ns",
            "range": "± 61542.97165797933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271939.6727272726,
            "unit": "ns",
            "range": "± 47059.58643199246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1080302.282352941,
            "unit": "ns",
            "range": "± 55395.44021646972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9874631.66,
            "unit": "ns",
            "range": "± 1502897.3737744086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204752.742857143,
            "unit": "ns",
            "range": "± 55887.83592967723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310846.372881356,
            "unit": "ns",
            "range": "± 101754.60078218243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2610791.9166666665,
            "unit": "ns",
            "range": "± 26520.335636359345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2481029.452830189,
            "unit": "ns",
            "range": "± 103239.20790638193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3065129.197674419,
            "unit": "ns",
            "range": "± 168282.41095064115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3041963.128645833,
            "unit": "ns",
            "range": "± 51744.83498414398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 935320.7300130208,
            "unit": "ns",
            "range": "± 9631.3812014073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615122.4910807292,
            "unit": "ns",
            "range": "± 5454.53176682269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1612963.1918619792,
            "unit": "ns",
            "range": "± 20440.48722028225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468604.3128255208,
            "unit": "ns",
            "range": "± 1230.3293452632472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423504.9356770833,
            "unit": "ns",
            "range": "± 1485.2078040625154"
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
          "id": "d99e816bb653f6fc6484a6a06ea9cc0d5fb4819e",
          "message": "Merge pull request #3845 from greymistcube/fix/new-context-lock\n\nRemove a possible `ConsensusContext` lock due to a future `ConsensusMsg`.",
          "timestamp": "2024-06-25T11:40:07+09:00",
          "tree_id": "429c009bf2e299cfcf46c753881e0bc72afadfe2",
          "url": "https://github.com/planetarium/libplanet/commit/d99e816bb653f6fc6484a6a06ea9cc0d5fb4819e"
        },
        "date": 1719283651829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5721384.357142857,
            "unit": "ns",
            "range": "± 15269.663698916947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14483673.916666666,
            "unit": "ns",
            "range": "± 86089.46024441229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36116409.84615385,
            "unit": "ns",
            "range": "± 168098.51337824005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74338564.2,
            "unit": "ns",
            "range": "± 224925.3188315116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145576107.2857143,
            "unit": "ns",
            "range": "± 373285.57309805433"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13874.277777777777,
            "unit": "ns",
            "range": "± 291.5534065808336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108137.75925925926,
            "unit": "ns",
            "range": "± 3287.3149043821504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105160.62162162163,
            "unit": "ns",
            "range": "± 3547.6108341573536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90586.43333333333,
            "unit": "ns",
            "range": "± 2703.237531289974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3117085.48,
            "unit": "ns",
            "range": "± 125333.76297534847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2646009.56,
            "unit": "ns",
            "range": "± 106080.69213347323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4909.148936170212,
            "unit": "ns",
            "range": "± 834.5472368192989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27267.08791208791,
            "unit": "ns",
            "range": "± 2623.255050286239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22692.29508196721,
            "unit": "ns",
            "range": "± 1015.9294159251796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27051.3,
            "unit": "ns",
            "range": "± 4048.6485786596922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1328.3510638297873,
            "unit": "ns",
            "range": "± 259.3783597247075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4709.852272727273,
            "unit": "ns",
            "range": "± 540.4242169330024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 727547.4545454546,
            "unit": "ns",
            "range": "± 73226.34601020021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1263455.1176470588,
            "unit": "ns",
            "range": "± 38836.84557593176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1094107.817204301,
            "unit": "ns",
            "range": "± 68143.8052221257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9782885.38,
            "unit": "ns",
            "range": "± 1339421.715035034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202137.245283019,
            "unit": "ns",
            "range": "± 78920.83263574612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296602.606060606,
            "unit": "ns",
            "range": "± 107693.80495901384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2656957.7,
            "unit": "ns",
            "range": "± 79787.48271716044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2423044.75,
            "unit": "ns",
            "range": "± 61481.251895439105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3154268.8791208793,
            "unit": "ns",
            "range": "± 255324.41787406403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042362.041015625,
            "unit": "ns",
            "range": "± 56697.92534811009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926266.4659505208,
            "unit": "ns",
            "range": "± 5834.88088312181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611874.3268880208,
            "unit": "ns",
            "range": "± 5221.084554076044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1643656.8854166667,
            "unit": "ns",
            "range": "± 7235.993768146058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464634.57578125,
            "unit": "ns",
            "range": "± 1366.509953407335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419860.9185546875,
            "unit": "ns",
            "range": "± 1009.0557708740358"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56333a073ef06d27586c7fdb14e590298d06fac8",
          "message": "Merge pull request #3871 from planetarium/fix/push-docker-image-error\n\nFix CI errors",
          "timestamp": "2024-07-10T17:53:34+09:00",
          "tree_id": "62a14c74340e3f859883535723f4b7cf84f757c7",
          "url": "https://github.com/planetarium/libplanet/commit/56333a073ef06d27586c7fdb14e590298d06fac8"
        },
        "date": 1720602089738,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10773149.666666666,
            "unit": "ns",
            "range": "± 80585.22017419702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26378642.5,
            "unit": "ns",
            "range": "± 90516.33727484694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67297980.86666666,
            "unit": "ns",
            "range": "± 128930.10481091056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135801687.85714287,
            "unit": "ns",
            "range": "± 402616.9995644567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272651514.1666667,
            "unit": "ns",
            "range": "± 281886.4094530514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14468.793103448275,
            "unit": "ns",
            "range": "± 418.05556528411944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110870,
            "unit": "ns",
            "range": "± 4168.839166962429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105738.78723404255,
            "unit": "ns",
            "range": "± 3361.4904234267883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91932.625,
            "unit": "ns",
            "range": "± 2843.454699662412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3062747.7954545454,
            "unit": "ns",
            "range": "± 114925.1673013194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2878591.21875,
            "unit": "ns",
            "range": "± 89398.5630992393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4998.597826086957,
            "unit": "ns",
            "range": "± 422.15093024570035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26993.139784946237,
            "unit": "ns",
            "range": "± 1655.867299289552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22499.436170212764,
            "unit": "ns",
            "range": "± 1555.7005652020962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28168.479166666668,
            "unit": "ns",
            "range": "± 5048.518604979541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1218.2,
            "unit": "ns",
            "range": "± 254.85108709939746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4674.2,
            "unit": "ns",
            "range": "± 337.8234534698349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680490.1282051282,
            "unit": "ns",
            "range": "± 28703.76570089579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272423.2777777778,
            "unit": "ns",
            "range": "± 42367.58561556303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1085761.9240506329,
            "unit": "ns",
            "range": "± 56029.5238088864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9507334.16,
            "unit": "ns",
            "range": "± 1374602.72211494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2173925.536585366,
            "unit": "ns",
            "range": "± 77984.17814374194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2296287.7083333335,
            "unit": "ns",
            "range": "± 90620.08550594404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583409.736842105,
            "unit": "ns",
            "range": "± 55805.44581036484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299861.96,
            "unit": "ns",
            "range": "± 60463.54284158899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3029285.54,
            "unit": "ns",
            "range": "± 191470.8263314516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039910.34921875,
            "unit": "ns",
            "range": "± 47612.14997820861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 910922.59140625,
            "unit": "ns",
            "range": "± 6176.509342082248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612919.851171875,
            "unit": "ns",
            "range": "± 5687.93183317709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1669679.2201822917,
            "unit": "ns",
            "range": "± 10639.549003026796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464452.1397530692,
            "unit": "ns",
            "range": "± 750.8632552064275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426676.67233072914,
            "unit": "ns",
            "range": "± 1097.2587972728159"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6440b8628f44e022e4a48797f73f0cf8aed763b6",
          "message": "Merge pull request #3872 from planetarium/release/5.1.0\n\n🚀 Release 5.1.0",
          "timestamp": "2024-07-11T11:48:31+09:00",
          "tree_id": "c283794015c8a338ecd8399ae7406c3a8089667a",
          "url": "https://github.com/planetarium/libplanet/commit/6440b8628f44e022e4a48797f73f0cf8aed763b6"
        },
        "date": 1720666603940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10998805.916666666,
            "unit": "ns",
            "range": "± 68842.98867245713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26550372.4,
            "unit": "ns",
            "range": "± 110719.18152038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68546899.6,
            "unit": "ns",
            "range": "± 129599.91317060584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136156218.03333333,
            "unit": "ns",
            "range": "± 151825.75092889814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273768570.38461536,
            "unit": "ns",
            "range": "± 310594.69033359713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13961.028571428571,
            "unit": "ns",
            "range": "± 458.1988706249906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113893.83606557376,
            "unit": "ns",
            "range": "± 5143.7485429089165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105607.925,
            "unit": "ns",
            "range": "± 3415.5468863261576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92322.08823529411,
            "unit": "ns",
            "range": "± 3991.4760922600303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3030959.662337662,
            "unit": "ns",
            "range": "± 155295.85096345437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2756247.5816326533,
            "unit": "ns",
            "range": "± 159916.21356068322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4692.162921348315,
            "unit": "ns",
            "range": "± 412.36984017605283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28327.36559139785,
            "unit": "ns",
            "range": "± 2055.469446987435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22508.225806451614,
            "unit": "ns",
            "range": "± 1285.4066107574527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30398.123711340206,
            "unit": "ns",
            "range": "± 5742.75915693285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1198.7065217391305,
            "unit": "ns",
            "range": "± 201.6377743502234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4659.955056179775,
            "unit": "ns",
            "range": "± 439.2795214406188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683534.8522727273,
            "unit": "ns",
            "range": "± 38879.601821296004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271121.2714285713,
            "unit": "ns",
            "range": "± 40996.742892924696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066811.1746031747,
            "unit": "ns",
            "range": "± 46999.86325599177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9417830.38,
            "unit": "ns",
            "range": "± 1348476.4457400257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186614.4444444445,
            "unit": "ns",
            "range": "± 60513.0206588335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274053.0204081633,
            "unit": "ns",
            "range": "± 84835.47720403931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2604229.6428571427,
            "unit": "ns",
            "range": "± 41128.388226301875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2272768.785714286,
            "unit": "ns",
            "range": "± 48478.626611263295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3050097.111111111,
            "unit": "ns",
            "range": "± 242266.3771380791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3038368.668402778,
            "unit": "ns",
            "range": "± 62046.15919344894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917946.2297526042,
            "unit": "ns",
            "range": "± 6452.50526942043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613343.556640625,
            "unit": "ns",
            "range": "± 4631.4884502991945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1655451.8983072916,
            "unit": "ns",
            "range": "± 5938.035142161578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472821.65095402644,
            "unit": "ns",
            "range": "± 568.5428088435127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426381.0133579799,
            "unit": "ns",
            "range": "± 1292.9489299262045"
          }
        ]
      },
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
          "id": "75b3ae438f440fc85a9245fdb02a3d32ae3252fc",
          "message": "fix: Fix the ci running error when github releasing",
          "timestamp": "2024-07-11T13:36:29+09:00",
          "tree_id": "a8735697867f1301214b2128eb787916f57d5be7",
          "url": "https://github.com/planetarium/libplanet/commit/75b3ae438f440fc85a9245fdb02a3d32ae3252fc"
        },
        "date": 1720673071218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10728462.07142857,
            "unit": "ns",
            "range": "± 97637.80772557341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26459609.85714286,
            "unit": "ns",
            "range": "± 118084.32641702554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68114666.93333334,
            "unit": "ns",
            "range": "± 120800.21471508038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136310152.19230768,
            "unit": "ns",
            "range": "± 194523.9708053931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275231310.65384614,
            "unit": "ns",
            "range": "± 231345.129419174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14050.42857142857,
            "unit": "ns",
            "range": "± 248.54452140588236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110179.19512195123,
            "unit": "ns",
            "range": "± 3924.802779882781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106072.9827586207,
            "unit": "ns",
            "range": "± 4421.5355413653715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93385.28787878787,
            "unit": "ns",
            "range": "± 2904.199467555299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059220.484848485,
            "unit": "ns",
            "range": "± 187454.83990073853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2706471.09,
            "unit": "ns",
            "range": "± 164831.32118060376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4808.540229885058,
            "unit": "ns",
            "range": "± 399.0614222291782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27494.21978021978,
            "unit": "ns",
            "range": "± 1803.0592385794255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22012.756756756757,
            "unit": "ns",
            "range": "± 701.8290946363495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31563.32978723404,
            "unit": "ns",
            "range": "± 5215.64515259741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1264.595744680851,
            "unit": "ns",
            "range": "± 180.89795847257926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5289.126315789474,
            "unit": "ns",
            "range": "± 907.6727341862917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 695319.6505376344,
            "unit": "ns",
            "range": "± 53268.39805970006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1259884.1666666667,
            "unit": "ns",
            "range": "± 32369.587291920718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1035174.9827586206,
            "unit": "ns",
            "range": "± 35213.55498353788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10210289.02,
            "unit": "ns",
            "range": "± 2064447.190747575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195056.804347826,
            "unit": "ns",
            "range": "± 74865.34933328103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287450.275,
            "unit": "ns",
            "range": "± 80113.92548659162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2585767.75,
            "unit": "ns",
            "range": "± 20174.201604682243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2366839.6231884058,
            "unit": "ns",
            "range": "± 112765.5517331399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3045601.9285714286,
            "unit": "ns",
            "range": "± 176010.05844215065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3031892.590401786,
            "unit": "ns",
            "range": "± 32750.92386338954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915789.5508463542,
            "unit": "ns",
            "range": "± 4284.296791582309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614647.6022135416,
            "unit": "ns",
            "range": "± 5143.362244491617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1655534.809765625,
            "unit": "ns",
            "range": "± 5180.377567012881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473895.08600260416,
            "unit": "ns",
            "range": "± 689.1438002420806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422653.4667643229,
            "unit": "ns",
            "range": "± 1270.656237931106"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81e1e323d7d4fe2bd5cb4440280c3fd8f9bb622c",
          "message": "Merge pull request #3877 from planetarium/port/5.1.1-to-main\n\n🔀 Port 5.1.1 to main",
          "timestamp": "2024-07-15T11:03:06+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/81e1e323d7d4fe2bd5cb4440280c3fd8f9bb622c"
        },
        "date": 1721009472394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10720388.666666666,
            "unit": "ns",
            "range": "± 85387.40521543118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26626892.42857143,
            "unit": "ns",
            "range": "± 254320.53541354652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67765722.46666667,
            "unit": "ns",
            "range": "± 150407.28399528426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135442772.46666667,
            "unit": "ns",
            "range": "± 131692.8960280951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273093869.0769231,
            "unit": "ns",
            "range": "± 220592.112556358"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13837.166666666666,
            "unit": "ns",
            "range": "± 465.01044535119235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109575.75,
            "unit": "ns",
            "range": "± 3484.1160510202217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104641.67346938775,
            "unit": "ns",
            "range": "± 3296.5162127853187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90794.53846153847,
            "unit": "ns",
            "range": "± 2423.7703724696235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3094254.1875,
            "unit": "ns",
            "range": "± 94055.50675015379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2769793.897959184,
            "unit": "ns",
            "range": "± 160083.08676843118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4749.393258426966,
            "unit": "ns",
            "range": "± 494.9663583145078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26518.164835164836,
            "unit": "ns",
            "range": "± 1926.445040677178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23233.8064516129,
            "unit": "ns",
            "range": "± 1738.4559257024891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30148.864583333332,
            "unit": "ns",
            "range": "± 5812.731467934108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1062.967032967033,
            "unit": "ns",
            "range": "± 142.4743603092968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4952.860215053764,
            "unit": "ns",
            "range": "± 779.409121112825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 682588.2195121951,
            "unit": "ns",
            "range": "± 30496.98776302155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283318.767857143,
            "unit": "ns",
            "range": "± 52207.14169396962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1075812.445054945,
            "unit": "ns",
            "range": "± 59903.551429566556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9484837.86,
            "unit": "ns",
            "range": "± 1446656.052767474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177844.066666667,
            "unit": "ns",
            "range": "± 92849.09057756152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2335036.214285714,
            "unit": "ns",
            "range": "± 31705.77009407344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2573445.4375,
            "unit": "ns",
            "range": "± 34208.963908053396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2349152.0943396227,
            "unit": "ns",
            "range": "± 97588.38968069767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2899133.568627451,
            "unit": "ns",
            "range": "± 100134.3223395964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3053791.790234375,
            "unit": "ns",
            "range": "± 36725.92925851649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 931078.0681640625,
            "unit": "ns",
            "range": "± 3470.387774951135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 624044.053125,
            "unit": "ns",
            "range": "± 4710.997663694949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1652198.22109375,
            "unit": "ns",
            "range": "± 19122.976195909123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466808.3959309896,
            "unit": "ns",
            "range": "± 384.5103365133903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427042.3943810096,
            "unit": "ns",
            "range": "± 591.761134657194"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "218465d785f99970cc04554c20be9ee61990f213",
          "message": "Merge pull request #3873 from planetarium/prepare/5.2.0\n\n🔧Prepare 5.2.0",
          "timestamp": "2024-07-15T12:22:31+09:00",
          "tree_id": "c9f25753ab85f923ab6000af2d4468c0f2a1c832",
          "url": "https://github.com/planetarium/libplanet/commit/218465d785f99970cc04554c20be9ee61990f213"
        },
        "date": 1721014214607,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11000446,
            "unit": "ns",
            "range": "± 130530.4152863743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26682234.85714286,
            "unit": "ns",
            "range": "± 246262.10826673685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67395267,
            "unit": "ns",
            "range": "± 81762.28336027385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136099824.66666666,
            "unit": "ns",
            "range": "± 178425.0978640884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273163844.65384614,
            "unit": "ns",
            "range": "± 404693.5175378289"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14161.6875,
            "unit": "ns",
            "range": "± 275.01120431720597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110118.32978723405,
            "unit": "ns",
            "range": "± 4132.61307648841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105628.37777777777,
            "unit": "ns",
            "range": "± 4000.362354546994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89674.5,
            "unit": "ns",
            "range": "± 1234.7223709536217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3034502.616161616,
            "unit": "ns",
            "range": "± 185762.58673858512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767836.387640449,
            "unit": "ns",
            "range": "± 152836.2589456768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5138.022727272727,
            "unit": "ns",
            "range": "± 583.6859684987824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26816.393258426968,
            "unit": "ns",
            "range": "± 1668.2670351021686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22368.060606060608,
            "unit": "ns",
            "range": "± 1054.940277256532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29703.927835051545,
            "unit": "ns",
            "range": "± 6247.268630248579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1024.888888888889,
            "unit": "ns",
            "range": "± 192.2396353597404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4924.344444444445,
            "unit": "ns",
            "range": "± 486.43576804082085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676288.8,
            "unit": "ns",
            "range": "± 22593.720933729575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270070.2162162163,
            "unit": "ns",
            "range": "± 42400.74533093278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077807.9550561798,
            "unit": "ns",
            "range": "± 59494.45097843353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9401150.91,
            "unit": "ns",
            "range": "± 1419391.402559021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174177,
            "unit": "ns",
            "range": "± 83719.45085892525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283047.214285714,
            "unit": "ns",
            "range": "± 94349.81985697777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2627319.0588235296,
            "unit": "ns",
            "range": "± 52919.05367808294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2363830.3253968256,
            "unit": "ns",
            "range": "± 108026.17234017422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3045577.7291666665,
            "unit": "ns",
            "range": "± 222319.14665109984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3003383.4051339286,
            "unit": "ns",
            "range": "± 47071.158498508514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925039.74921875,
            "unit": "ns",
            "range": "± 3132.860965434341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 607297.7100260417,
            "unit": "ns",
            "range": "± 4875.572581405219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1671773.327734375,
            "unit": "ns",
            "range": "± 12572.081054847307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472167.2096354167,
            "unit": "ns",
            "range": "± 1366.3809634403217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422430.79045758926,
            "unit": "ns",
            "range": "± 645.7910158347802"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "Kidon (Don) Seo",
            "username": "area363"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31039424f78e5e34ec9b0021f95f9f05d9519f54",
          "message": "Merge pull request #3878 from area363/feat/add-pyroscope\n\nadd pyroscope",
          "timestamp": "2024-07-15T20:12:40-04:00",
          "tree_id": "01d1e771ec0b070893c2973ed66cd55a195ac2a6",
          "url": "https://github.com/planetarium/libplanet/commit/31039424f78e5e34ec9b0021f95f9f05d9519f54"
        },
        "date": 1721089253433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10823737.538461538,
            "unit": "ns",
            "range": "± 156081.95808592322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26310777.214285713,
            "unit": "ns",
            "range": "± 95504.63476484234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67496955.64285715,
            "unit": "ns",
            "range": "± 83515.4726692625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135982124.66666666,
            "unit": "ns",
            "range": "± 298646.6263973591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274486668.03333336,
            "unit": "ns",
            "range": "± 407517.1024698344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13926.693548387097,
            "unit": "ns",
            "range": "± 417.5156220115074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111231.63043478261,
            "unit": "ns",
            "range": "± 4239.505596744852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105837.25862068965,
            "unit": "ns",
            "range": "± 4533.640787666249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93039.53333333334,
            "unit": "ns",
            "range": "± 3533.0177777902304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3025846.13,
            "unit": "ns",
            "range": "± 185403.25726289183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2774453.78,
            "unit": "ns",
            "range": "± 166028.7169070448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5091.284090909091,
            "unit": "ns",
            "range": "± 461.1277268107469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27140.183908045976,
            "unit": "ns",
            "range": "± 2051.1310579646874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22223.6875,
            "unit": "ns",
            "range": "± 508.78187464545346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30346.489361702126,
            "unit": "ns",
            "range": "± 4819.506381150473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1174.8131868131868,
            "unit": "ns",
            "range": "± 170.6270078978584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5208.720430107527,
            "unit": "ns",
            "range": "± 663.3883439616352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688804.1279069767,
            "unit": "ns",
            "range": "± 34353.488423618386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1291144.394736842,
            "unit": "ns",
            "range": "± 43950.18045071923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1079971.6976744186,
            "unit": "ns",
            "range": "± 58554.019978351374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9308831.51,
            "unit": "ns",
            "range": "± 1395016.1487540554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2220759.285714286,
            "unit": "ns",
            "range": "± 28674.789813269163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288948.1923076925,
            "unit": "ns",
            "range": "± 79013.08010241883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2560622.153846154,
            "unit": "ns",
            "range": "± 28414.311804224508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2334212.393939394,
            "unit": "ns",
            "range": "± 73236.75710578133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3081515.8383838385,
            "unit": "ns",
            "range": "± 248626.9288496693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021891.3125,
            "unit": "ns",
            "range": "± 60383.47076794548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915502.3216145834,
            "unit": "ns",
            "range": "± 5756.135464244312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 622622.6594401042,
            "unit": "ns",
            "range": "± 5526.3053207663725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1646809.5810546875,
            "unit": "ns",
            "range": "± 8008.311695196924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465035.0149739583,
            "unit": "ns",
            "range": "± 984.5388924730232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426828.61442057294,
            "unit": "ns",
            "range": "± 944.2325559606843"
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
          "id": "9554cca17656def896209057f14bfb3909d0332e",
          "message": "Merge pull request #3870 from greymistcube/feature/trie-proof\n\n✨ Introduce Merkle inclusion proof",
          "timestamp": "2024-07-16T16:57:23+09:00",
          "tree_id": "cbc50a5ee46e863883892b199e1d16d77ef4c8dd",
          "url": "https://github.com/planetarium/libplanet/commit/9554cca17656def896209057f14bfb3909d0332e"
        },
        "date": 1721117125892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10799308.153846154,
            "unit": "ns",
            "range": "± 131846.83068864804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26650258.85714286,
            "unit": "ns",
            "range": "± 343331.78924152325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67083819,
            "unit": "ns",
            "range": "± 113913.43057841274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135618062.07142857,
            "unit": "ns",
            "range": "± 205930.7169131869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273338743.5,
            "unit": "ns",
            "range": "± 518292.3447989487"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14442.391304347826,
            "unit": "ns",
            "range": "± 363.24731609224773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109589.25,
            "unit": "ns",
            "range": "± 2939.602849069311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104335.60416666667,
            "unit": "ns",
            "range": "± 3815.4190575431057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92129.3125,
            "unit": "ns",
            "range": "± 2860.2357272299396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3046315.054054054,
            "unit": "ns",
            "range": "± 150888.65966864367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798311.98,
            "unit": "ns",
            "range": "± 179603.79308985148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5188.340425531915,
            "unit": "ns",
            "range": "± 501.6690058858366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26472.313186813186,
            "unit": "ns",
            "range": "± 1969.2005253801624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22857.09574468085,
            "unit": "ns",
            "range": "± 2081.3186322134584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29198.842105263157,
            "unit": "ns",
            "range": "± 5587.855458379377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 991.0106382978723,
            "unit": "ns",
            "range": "± 149.0019480771006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5025.6781609195405,
            "unit": "ns",
            "range": "± 510.3787124272564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 716445.3979591837,
            "unit": "ns",
            "range": "± 73741.37001944803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283393.657142857,
            "unit": "ns",
            "range": "± 39458.31548306826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1092019.142857143,
            "unit": "ns",
            "range": "± 60860.728296400244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9444051.16,
            "unit": "ns",
            "range": "± 1575043.763262044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198522.846153846,
            "unit": "ns",
            "range": "± 25011.62208469679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283869.6101694917,
            "unit": "ns",
            "range": "± 99675.31628051789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2595075.7586206896,
            "unit": "ns",
            "range": "± 69667.67465447001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317209.577777778,
            "unit": "ns",
            "range": "± 81925.27105941478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3311630.34,
            "unit": "ns",
            "range": "± 495926.85894345306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036840.159268466,
            "unit": "ns",
            "range": "± 74280.35942020266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929433.704296875,
            "unit": "ns",
            "range": "± 8043.352244424764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616806.3072265625,
            "unit": "ns",
            "range": "± 6081.974688256596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644172.5591145833,
            "unit": "ns",
            "range": "± 8421.131833242938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467841.8443033854,
            "unit": "ns",
            "range": "± 962.2839897530466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418571.2388997396,
            "unit": "ns",
            "range": "± 1532.106893981552"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77be73d70d6c67bce3eda73b9447059b55dca321",
          "message": "Merge pull request #3885 from planetarium/port/5.1.2-to-main\n\n🔀 Port 5.1.2 to main",
          "timestamp": "2024-07-18T14:01:35+09:00",
          "tree_id": "15551f907768d43d161cb699a8026392c40db99c",
          "url": "https://github.com/planetarium/libplanet/commit/77be73d70d6c67bce3eda73b9447059b55dca321"
        },
        "date": 1721279354868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10701502.846153846,
            "unit": "ns",
            "range": "± 132231.8280400286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26605619.5,
            "unit": "ns",
            "range": "± 209330.43345785592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67404845.7,
            "unit": "ns",
            "range": "± 74283.69198283025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135642661.2857143,
            "unit": "ns",
            "range": "± 150392.66446484404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273010958.5,
            "unit": "ns",
            "range": "± 257815.74919332485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14115.529411764706,
            "unit": "ns",
            "range": "± 290.695527495492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112671.07575757576,
            "unit": "ns",
            "range": "± 2965.3678421730315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106311.37037037036,
            "unit": "ns",
            "range": "± 4474.262546156149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92993.53703703704,
            "unit": "ns",
            "range": "± 3886.54463459711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2998526.32,
            "unit": "ns",
            "range": "± 213262.0931603858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2695549.01,
            "unit": "ns",
            "range": "± 180298.29937995234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4914.358695652174,
            "unit": "ns",
            "range": "± 501.9794133846689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26806.155555555557,
            "unit": "ns",
            "range": "± 1461.6690775905877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21965.823529411766,
            "unit": "ns",
            "range": "± 1008.1091822066197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30598.052631578947,
            "unit": "ns",
            "range": "± 5597.94228412096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1242.456043956044,
            "unit": "ns",
            "range": "± 176.31814125406078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4774.837209302325,
            "unit": "ns",
            "range": "± 388.5257765834431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686921.6627906977,
            "unit": "ns",
            "range": "± 38375.874872759035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271706.046511628,
            "unit": "ns",
            "range": "± 44466.96894161922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1072948.3095238095,
            "unit": "ns",
            "range": "± 57069.47858573459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9435625.191919193,
            "unit": "ns",
            "range": "± 1259362.290644767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190535.5384615385,
            "unit": "ns",
            "range": "± 19457.175345766336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309963.9285714286,
            "unit": "ns",
            "range": "± 39546.282183448886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2569444.2608695654,
            "unit": "ns",
            "range": "± 64903.85419653611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2303755.0517241377,
            "unit": "ns",
            "range": "± 65509.72239162357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2917055.75,
            "unit": "ns",
            "range": "± 118953.94886041108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3028413.7102864585,
            "unit": "ns",
            "range": "± 64620.95485595638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917159.890625,
            "unit": "ns",
            "range": "± 3736.5918045234584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615636.266015625,
            "unit": "ns",
            "range": "± 5533.756886499032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1647893.5986979166,
            "unit": "ns",
            "range": "± 16353.636406373573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471016.7051908053,
            "unit": "ns",
            "range": "± 433.8837813284959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420070.6932547433,
            "unit": "ns",
            "range": "± 551.8951499366666"
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
          "id": "318e591ff920e0e9eb5b464ed659af7bf9333079",
          "message": "Merge pull request #3882 from planetarium/feature/policy-action\n\nPolicyActionsRegistry",
          "timestamp": "2024-07-22T17:57:49+09:00",
          "tree_id": "80d3cbc0f9dbb8d367527c8ea32c0d7457cd2a09",
          "url": "https://github.com/planetarium/libplanet/commit/318e591ff920e0e9eb5b464ed659af7bf9333079"
        },
        "date": 1721639141208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10598658.07142857,
            "unit": "ns",
            "range": "± 104087.51750364415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26423178.07142857,
            "unit": "ns",
            "range": "± 219249.3310402791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67671030.86666666,
            "unit": "ns",
            "range": "± 101539.38879277109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135691654.23076922,
            "unit": "ns",
            "range": "± 171285.9886807995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274643247.6,
            "unit": "ns",
            "range": "± 456430.9401976226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14359.307692307691,
            "unit": "ns",
            "range": "± 191.37893676133075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109279.8431372549,
            "unit": "ns",
            "range": "± 4104.5280185305055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104395.78947368421,
            "unit": "ns",
            "range": "± 3941.522021725156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 95575.04166666667,
            "unit": "ns",
            "range": "± 3744.731186320511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3026806.101010101,
            "unit": "ns",
            "range": "± 191021.27928570908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785534.69,
            "unit": "ns",
            "range": "± 173447.90070637444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4996.585106382979,
            "unit": "ns",
            "range": "± 626.1123505208309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27512.34946236559,
            "unit": "ns",
            "range": "± 2362.371716996716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22446.14285714286,
            "unit": "ns",
            "range": "± 1166.5774897480744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29361.447916666668,
            "unit": "ns",
            "range": "± 4726.694403780772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1029.1170212765958,
            "unit": "ns",
            "range": "± 215.7004522097831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4819.711111111111,
            "unit": "ns",
            "range": "± 543.2060722725839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685750.3139534884,
            "unit": "ns",
            "range": "± 34952.5451697219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1287793.9302325582,
            "unit": "ns",
            "range": "± 47722.71125565117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082951.87654321,
            "unit": "ns",
            "range": "± 56826.66300082708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9525212.082474226,
            "unit": "ns",
            "range": "± 1429078.2485708857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2182107.5714285714,
            "unit": "ns",
            "range": "± 61241.78144373428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291872.144444444,
            "unit": "ns",
            "range": "± 86594.64211804635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2587476.086956522,
            "unit": "ns",
            "range": "± 54687.48970860208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305918.904761905,
            "unit": "ns",
            "range": "± 53215.09977619582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3147384.91,
            "unit": "ns",
            "range": "± 287977.34456573694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3033106.686767578,
            "unit": "ns",
            "range": "± 57095.161558395215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 932014.8813151042,
            "unit": "ns",
            "range": "± 7550.242527858667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 620459.9205729166,
            "unit": "ns",
            "range": "± 8624.055565838673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1650184.6080729167,
            "unit": "ns",
            "range": "± 7289.94330633537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462229.9085286458,
            "unit": "ns",
            "range": "± 1395.2669602124465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426100.5859700521,
            "unit": "ns",
            "range": "± 1526.8072753116846"
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
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721644009919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10724724.461538462,
            "unit": "ns",
            "range": "± 55716.6174099125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26451874.615384616,
            "unit": "ns",
            "range": "± 222866.1234760824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67184219.53333333,
            "unit": "ns",
            "range": "± 103426.74691218947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136093841.5,
            "unit": "ns",
            "range": "± 263496.70542152895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272246533.0714286,
            "unit": "ns",
            "range": "± 381349.9675477721"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13696.583333333334,
            "unit": "ns",
            "range": "± 350.8951183159592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109443.125,
            "unit": "ns",
            "range": "± 4090.4431046713253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104881.09615384616,
            "unit": "ns",
            "range": "± 4054.3916942225746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90841.08888888889,
            "unit": "ns",
            "range": "± 3319.088790769253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2975218.31,
            "unit": "ns",
            "range": "± 208411.7291584185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2755496.9,
            "unit": "ns",
            "range": "± 138412.0245971465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4913.704545454545,
            "unit": "ns",
            "range": "± 428.24695204183803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27351.978494623654,
            "unit": "ns",
            "range": "± 1559.5707671642735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22821.64210526316,
            "unit": "ns",
            "range": "± 1334.6935971256796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 32262.364583333332,
            "unit": "ns",
            "range": "± 6167.803955550215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1102.578947368421,
            "unit": "ns",
            "range": "± 256.4232944469952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4823.137931034483,
            "unit": "ns",
            "range": "± 430.10996896720724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678673,
            "unit": "ns",
            "range": "± 32765.85160315538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1308241.6807228916,
            "unit": "ns",
            "range": "± 70263.13481116062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1073886.121212121,
            "unit": "ns",
            "range": "± 48747.25212626867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9597082.18,
            "unit": "ns",
            "range": "± 1328923.6041140826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2220226.5,
            "unit": "ns",
            "range": "± 30099.27018729345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270692.2352941176,
            "unit": "ns",
            "range": "± 72482.20853352569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2608638.5714285714,
            "unit": "ns",
            "range": "± 55565.23045265936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2300967.6428571427,
            "unit": "ns",
            "range": "± 39417.20306318265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2999575.2448979593,
            "unit": "ns",
            "range": "± 210995.35870832534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3020182.7117598685,
            "unit": "ns",
            "range": "± 65581.84229997847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922950.50390625,
            "unit": "ns",
            "range": "± 4828.003631916384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619111.2977213542,
            "unit": "ns",
            "range": "± 6119.545172188091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1656833.9088040865,
            "unit": "ns",
            "range": "± 21166.180506123947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463126.3071695964,
            "unit": "ns",
            "range": "± 336.6469713890568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428009.49860491074,
            "unit": "ns",
            "range": "± 688.6092446430087"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "741899c093b49355f93d1feecd169d99ee5a74e5",
          "message": "Merge pull request #3891 from planetarium/refactor/policy-actions-registry\n\nReopen: ♻️ Overhaul the handling of PolicyActionsRegistry",
          "timestamp": "2024-07-23T16:33:15+09:00",
          "tree_id": "56761a57c2aed7be3372f933d598112818fcc5cb",
          "url": "https://github.com/planetarium/libplanet/commit/741899c093b49355f93d1feecd169d99ee5a74e5"
        },
        "date": 1721720465918,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10712645.5,
            "unit": "ns",
            "range": "± 35295.30066196039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26514232.214285713,
            "unit": "ns",
            "range": "± 181934.53496981083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67466548.61538461,
            "unit": "ns",
            "range": "± 59261.5790099826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135054983.13333333,
            "unit": "ns",
            "range": "± 256952.28965256418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278075319.2,
            "unit": "ns",
            "range": "± 626523.8555639704"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14132.588235294117,
            "unit": "ns",
            "range": "± 290.26562378783535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109987.66666666667,
            "unit": "ns",
            "range": "± 4598.75167126496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104179.71052631579,
            "unit": "ns",
            "range": "± 3118.9799281686046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90492.83333333333,
            "unit": "ns",
            "range": "± 2666.2602517168234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3027067.6836734693,
            "unit": "ns",
            "range": "± 188895.95571678242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765903.3289473685,
            "unit": "ns",
            "range": "± 140367.37134917438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4969.89247311828,
            "unit": "ns",
            "range": "± 483.5319885638067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26759.296703296703,
            "unit": "ns",
            "range": "± 1575.3372442785808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22404.21052631579,
            "unit": "ns",
            "range": "± 756.1443147647589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29463.625,
            "unit": "ns",
            "range": "± 5149.864491318909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1106.0315789473684,
            "unit": "ns",
            "range": "± 219.93139416894857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4754.8626373626375,
            "unit": "ns",
            "range": "± 515.8857435191443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679599.5,
            "unit": "ns",
            "range": "± 26012.28871668158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1298496.1836734693,
            "unit": "ns",
            "range": "± 51363.78442933368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1064954.765625,
            "unit": "ns",
            "range": "± 45952.73751340547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10219138.69,
            "unit": "ns",
            "range": "± 1960399.4438539164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184851.288888889,
            "unit": "ns",
            "range": "± 82586.77949962203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2324278.88,
            "unit": "ns",
            "range": "± 92902.95004336954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2565176.6666666665,
            "unit": "ns",
            "range": "± 66548.00933857854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2324610.1739130435,
            "unit": "ns",
            "range": "± 58225.911254551655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3031243.276595745,
            "unit": "ns",
            "range": "± 168843.9773975609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3051806.6799316406,
            "unit": "ns",
            "range": "± 55626.549976618364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919514.2331380208,
            "unit": "ns",
            "range": "± 5443.011149405458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615968.1346354167,
            "unit": "ns",
            "range": "± 5738.814885649045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644016.2276041666,
            "unit": "ns",
            "range": "± 14174.880719879062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 475554.1583984375,
            "unit": "ns",
            "range": "± 835.7471640176477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419561.0026041667,
            "unit": "ns",
            "range": "± 1282.7434189743726"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29be97f6977e2f8c58397246c85b77a815d1c924",
          "message": "Merge pull request #3892 from planetarium/release/5.2.0\n\n🚀 Release 5.2.0",
          "timestamp": "2024-07-23T17:26:04+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/29be97f6977e2f8c58397246c85b77a815d1c924"
        },
        "date": 1721723636318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10757649.26923077,
            "unit": "ns",
            "range": "± 118476.2385348175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26414917,
            "unit": "ns",
            "range": "± 167500.15933815614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67467349.76666667,
            "unit": "ns",
            "range": "± 111361.03366109112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135600205.53846154,
            "unit": "ns",
            "range": "± 207695.7514577575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275546561.46666664,
            "unit": "ns",
            "range": "± 338806.1181505828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13998.263157894737,
            "unit": "ns",
            "range": "± 302.6011019487285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110438.86486486487,
            "unit": "ns",
            "range": "± 3742.4028018415165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106005.5,
            "unit": "ns",
            "range": "± 4207.743746804873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92921.47692307692,
            "unit": "ns",
            "range": "± 4288.67834429972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3068756.253968254,
            "unit": "ns",
            "range": "± 140044.6787209835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2754567.43902439,
            "unit": "ns",
            "range": "± 146080.04895034694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5032.922222222222,
            "unit": "ns",
            "range": "± 589.63352220838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26782.898876404495,
            "unit": "ns",
            "range": "± 1829.636551370889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23642.785714285714,
            "unit": "ns",
            "range": "± 2338.729068241804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31530.78947368421,
            "unit": "ns",
            "range": "± 6128.7003167252715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1395.2717391304348,
            "unit": "ns",
            "range": "± 338.84085224274617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5079.488888888889,
            "unit": "ns",
            "range": "± 617.9363307525462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 671435.171875,
            "unit": "ns",
            "range": "± 26687.05819607074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1263087.6923076923,
            "unit": "ns",
            "range": "± 33956.006849768695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1072389.724719101,
            "unit": "ns",
            "range": "± 57054.55126908904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9520574.36,
            "unit": "ns",
            "range": "± 1367191.9028071868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175479.3333333335,
            "unit": "ns",
            "range": "± 26346.805893464178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2309562.6486486485,
            "unit": "ns",
            "range": "± 74689.20923221932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2589460.5454545454,
            "unit": "ns",
            "range": "± 61289.01289458881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2288806.7647058824,
            "unit": "ns",
            "range": "± 35801.235227519406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3080982.7040816327,
            "unit": "ns",
            "range": "± 234057.42960108793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3035668.4679129464,
            "unit": "ns",
            "range": "± 35567.08738107253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 939370.6866736779,
            "unit": "ns",
            "range": "± 4191.205003662931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612105.2764322917,
            "unit": "ns",
            "range": "± 4903.419886407936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1660200.6950520833,
            "unit": "ns",
            "range": "± 12109.066375698114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464311.3944010417,
            "unit": "ns",
            "range": "± 904.1785511189828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422316.96110026044,
            "unit": "ns",
            "range": "± 873.9352147639497"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b877fb9a51a449ec2f8e9efce5650cd5d44346ca",
          "message": "Merge pull request #3894 from planetarium/prepare/5.3.0\n\n🔧 Prepare 5.3.0",
          "timestamp": "2024-07-23T22:38:23+09:00",
          "tree_id": "06964644adf84a6643248469a906bd69e944df2b",
          "url": "https://github.com/planetarium/libplanet/commit/b877fb9a51a449ec2f8e9efce5650cd5d44346ca"
        },
        "date": 1721742382689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10818454.5,
            "unit": "ns",
            "range": "± 64175.76746362644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26415122.57142857,
            "unit": "ns",
            "range": "± 143389.91451590703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67426849.66666667,
            "unit": "ns",
            "range": "± 95133.11543806594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137450666.35714287,
            "unit": "ns",
            "range": "± 314855.4995797784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276297172.85714287,
            "unit": "ns",
            "range": "± 317105.72690741176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13894.458333333334,
            "unit": "ns",
            "range": "± 355.8850546193943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111856.375,
            "unit": "ns",
            "range": "± 4356.240974837258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105429.69565217392,
            "unit": "ns",
            "range": "± 3985.4994382110604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93861.97297297297,
            "unit": "ns",
            "range": "± 3183.786708434597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3061546.680412371,
            "unit": "ns",
            "range": "± 175946.08010916933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759235.413043478,
            "unit": "ns",
            "range": "± 154373.2444040337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4955.086956521739,
            "unit": "ns",
            "range": "± 649.3798165955149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27622.78947368421,
            "unit": "ns",
            "range": "± 2888.085204196117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23247.303370786518,
            "unit": "ns",
            "range": "± 1688.7598220190405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30563.515463917527,
            "unit": "ns",
            "range": "± 5410.02127058627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1204.7368421052631,
            "unit": "ns",
            "range": "± 242.32127480674114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4993.366666666667,
            "unit": "ns",
            "range": "± 816.83991596555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679216.8923076923,
            "unit": "ns",
            "range": "± 31739.72300757516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1287439.425531915,
            "unit": "ns",
            "range": "± 49918.08304078954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1068483.0666666667,
            "unit": "ns",
            "range": "± 53341.83521360093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9697219.89,
            "unit": "ns",
            "range": "± 1437781.2297479312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166469.423076923,
            "unit": "ns",
            "range": "± 34597.85916898505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2269932.5833333335,
            "unit": "ns",
            "range": "± 81183.28362751841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2605157.1463414636,
            "unit": "ns",
            "range": "± 78809.92055527051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2327433.3076923075,
            "unit": "ns",
            "range": "± 29560.11158747718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2954679.3958333335,
            "unit": "ns",
            "range": "± 114888.68150124841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023805.841536458,
            "unit": "ns",
            "range": "± 39217.48540753059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919249.6122295673,
            "unit": "ns",
            "range": "± 2786.5977509090662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613030.2873697917,
            "unit": "ns",
            "range": "± 5273.057648089449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1653019.7127403845,
            "unit": "ns",
            "range": "± 4339.785013734808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471408.7211538461,
            "unit": "ns",
            "range": "± 352.70723070377477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425824.4697265625,
            "unit": "ns",
            "range": "± 1004.5453803963172"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f1b3250ed5db44e0f045ab4abfe6a7a875b1033",
          "message": "Merge pull request #3896 from planetarium/ci/nuget-repo-url\n\nAdd SHA value to RepositoryUrl in nuget package",
          "timestamp": "2024-07-29T16:21:46+09:00",
          "tree_id": "306374b24f8c61b594e8fe8f023c4eff34b8585f",
          "url": "https://github.com/planetarium/libplanet/commit/4f1b3250ed5db44e0f045ab4abfe6a7a875b1033"
        },
        "date": 1722239534396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10977384.722222222,
            "unit": "ns",
            "range": "± 230990.0090395573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26312425.64285714,
            "unit": "ns",
            "range": "± 194110.70912194456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67478720.7,
            "unit": "ns",
            "range": "± 82428.02724992443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135796140.2142857,
            "unit": "ns",
            "range": "± 187138.81810413385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272476055.8666667,
            "unit": "ns",
            "range": "± 392603.162207967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14011.45,
            "unit": "ns",
            "range": "± 487.7202303338699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110910.96774193548,
            "unit": "ns",
            "range": "± 4912.027753858894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104563.41935483871,
            "unit": "ns",
            "range": "± 4342.40344626234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93216.03571428571,
            "unit": "ns",
            "range": "± 2664.3031398284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3036236.1694915253,
            "unit": "ns",
            "range": "± 133552.80448638165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2779017.9891304346,
            "unit": "ns",
            "range": "± 156015.31728411675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5144.489361702128,
            "unit": "ns",
            "range": "± 586.1692202123202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26908.695652173912,
            "unit": "ns",
            "range": "± 1945.17081223529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21995.4875,
            "unit": "ns",
            "range": "± 1124.0825456620282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29381.521276595744,
            "unit": "ns",
            "range": "± 5624.107177370751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1165.4673913043478,
            "unit": "ns",
            "range": "± 178.74036982201005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4717.943181818182,
            "unit": "ns",
            "range": "± 364.68851007163005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 698097.8734177215,
            "unit": "ns",
            "range": "± 36208.84685825115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1290537.972972973,
            "unit": "ns",
            "range": "± 42997.92633015799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082959.690140845,
            "unit": "ns",
            "range": "± 50055.21121424437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9545571.35,
            "unit": "ns",
            "range": "± 1298589.4978339586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2210296.1333333333,
            "unit": "ns",
            "range": "± 64974.91885109013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2344986.1964285714,
            "unit": "ns",
            "range": "± 100787.21560404007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2595514.9285714286,
            "unit": "ns",
            "range": "± 45764.6422142084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2363236.5588235296,
            "unit": "ns",
            "range": "± 112718.9360424139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3152352.02,
            "unit": "ns",
            "range": "± 291132.6871938754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3038128.673828125,
            "unit": "ns",
            "range": "± 55904.59687632036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916333.3225911459,
            "unit": "ns",
            "range": "± 4014.4608065466755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610868.847265625,
            "unit": "ns",
            "range": "± 5445.329569647508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1668098.9046875,
            "unit": "ns",
            "range": "± 15933.84399689408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466190.255078125,
            "unit": "ns",
            "range": "± 904.5817350060795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424055.9894856771,
            "unit": "ns",
            "range": "± 1120.3366112382612"
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
          "id": "54aabc8841f90c42b078497c3e9a23967cb53a78",
          "message": "Merge pull request #3901 from greymistcube/chore/cleanup\n\n🧹 Fixed mistakes for arguments when throwing an `ArgumentOutOfRangeException`",
          "timestamp": "2024-07-30T16:08:25+09:00",
          "tree_id": "a14486d46d4a5601993f629246a6f39943670623",
          "url": "https://github.com/planetarium/libplanet/commit/54aabc8841f90c42b078497c3e9a23967cb53a78"
        },
        "date": 1722323813088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10964041.25,
            "unit": "ns",
            "range": "± 80791.83475633818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26608434.214285713,
            "unit": "ns",
            "range": "± 400714.60380256025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67503142.13333334,
            "unit": "ns",
            "range": "± 130390.4235626148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136192161.07142857,
            "unit": "ns",
            "range": "± 215024.71460686496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274907089.3333333,
            "unit": "ns",
            "range": "± 443131.6279078239"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13940.566666666668,
            "unit": "ns",
            "range": "± 408.4568675437814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111552.11627906977,
            "unit": "ns",
            "range": "± 4076.6155267358636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104660.31707317074,
            "unit": "ns",
            "range": "± 2952.6773142270763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90952.74285714286,
            "unit": "ns",
            "range": "± 2927.556352427508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018165.767676768,
            "unit": "ns",
            "range": "± 190104.33712627654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2715988.9191919193,
            "unit": "ns",
            "range": "± 169185.61328893356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5024.784090909091,
            "unit": "ns",
            "range": "± 549.0669923086274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27916.11827956989,
            "unit": "ns",
            "range": "± 2454.938518000446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22137.204301075268,
            "unit": "ns",
            "range": "± 1306.8504751229673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28388.063157894736,
            "unit": "ns",
            "range": "± 4631.182239141412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1235.0531914893618,
            "unit": "ns",
            "range": "± 239.9959841519431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5142.2474226804125,
            "unit": "ns",
            "range": "± 1032.9663901329657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 691951.0487804879,
            "unit": "ns",
            "range": "± 33057.34808768216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289274.4864864864,
            "unit": "ns",
            "range": "± 40775.35764923986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1098881.2307692308,
            "unit": "ns",
            "range": "± 56605.73162272047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9539942.87,
            "unit": "ns",
            "range": "± 1419710.5603553052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199788.5714285714,
            "unit": "ns",
            "range": "± 30608.890791011097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279668.434782609,
            "unit": "ns",
            "range": "± 72312.02562887593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2557277.411764706,
            "unit": "ns",
            "range": "± 41794.246906809465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2348468.4166666665,
            "unit": "ns",
            "range": "± 19663.885181900594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3213110.8181818184,
            "unit": "ns",
            "range": "± 224087.92416777785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3035697.06953125,
            "unit": "ns",
            "range": "± 43806.7483996857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920780.3766927083,
            "unit": "ns",
            "range": "± 5634.998849519131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612680.409375,
            "unit": "ns",
            "range": "± 4621.298220584305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1676954.1673177083,
            "unit": "ns",
            "range": "± 12808.922260140682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468455.630078125,
            "unit": "ns",
            "range": "± 858.1018927290285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 433119.97347005206,
            "unit": "ns",
            "range": "± 1348.822207331988"
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
          "id": "e1e3373fe7a15d8137e5153c4ca2af19042aff7b",
          "message": "Merge pull request #3905 from greymistcube/chore/cleanup\n\n🧹 Cleaned up `BlockChain.FindNextHashes()`",
          "timestamp": "2024-07-30T22:57:57+09:00",
          "tree_id": "f8962e8c6fe463120e1505f37216e347bd225d8a",
          "url": "https://github.com/planetarium/libplanet/commit/e1e3373fe7a15d8137e5153c4ca2af19042aff7b"
        },
        "date": 1722348361807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10754866.222222222,
            "unit": "ns",
            "range": "± 176359.73837804148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26492160.92857143,
            "unit": "ns",
            "range": "± 193527.55726231236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68176497.6,
            "unit": "ns",
            "range": "± 104947.96771584344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135347764.2,
            "unit": "ns",
            "range": "± 162892.0578648853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273643815.93333334,
            "unit": "ns",
            "range": "± 498946.19031235174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13967.103448275862,
            "unit": "ns",
            "range": "± 412.67960114593797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109966.74468085106,
            "unit": "ns",
            "range": "± 4155.043417698571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105470.21818181819,
            "unit": "ns",
            "range": "± 4496.698301885709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90642.8125,
            "unit": "ns",
            "range": "± 1356.2099256752253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3008236.948979592,
            "unit": "ns",
            "range": "± 174196.01097267173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2717597.56,
            "unit": "ns",
            "range": "± 178952.44465975728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4966.021978021978,
            "unit": "ns",
            "range": "± 457.3603485223532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26635.406593406595,
            "unit": "ns",
            "range": "± 1708.2399322631077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23391.766666666666,
            "unit": "ns",
            "range": "± 1429.8347594480426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27886.755319148935,
            "unit": "ns",
            "range": "± 4250.831055207633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1221.223404255319,
            "unit": "ns",
            "range": "± 193.07524881355317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4864.931818181818,
            "unit": "ns",
            "range": "± 615.310122638937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681244.0975609756,
            "unit": "ns",
            "range": "± 35103.005396590765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1257423.5777777778,
            "unit": "ns",
            "range": "± 46965.4187584715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077708.1358024692,
            "unit": "ns",
            "range": "± 56498.943122803874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9691848.25,
            "unit": "ns",
            "range": "± 1377053.3152227136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2180223.4285714286,
            "unit": "ns",
            "range": "± 38098.874535596464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303380.8421052634,
            "unit": "ns",
            "range": "± 78397.11615508478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583564.3846153845,
            "unit": "ns",
            "range": "± 30831.621277346796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2256703.95,
            "unit": "ns",
            "range": "± 37360.56444050542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3144417.92,
            "unit": "ns",
            "range": "± 316342.00570809084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3015368.3666992188,
            "unit": "ns",
            "range": "± 58657.55725878874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929834.4505208334,
            "unit": "ns",
            "range": "± 4743.549520794638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612421.178125,
            "unit": "ns",
            "range": "± 6962.983472846372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1667215.022265625,
            "unit": "ns",
            "range": "± 12798.390409453546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468589.4744215745,
            "unit": "ns",
            "range": "± 355.21358793042515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422332.92634465144,
            "unit": "ns",
            "range": "± 968.0657491636997"
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
          "id": "8841c82c39cfd93ea277117b30f227723455c13e",
          "message": "Merge pull request #3906 from greymistcube/chore/cleanup\n\n🧹 Removed null check for Tip",
          "timestamp": "2024-07-31T00:34:59+09:00",
          "tree_id": "e014a433ec47e481a579116e0adae80ecccfcdcd",
          "url": "https://github.com/planetarium/libplanet/commit/8841c82c39cfd93ea277117b30f227723455c13e"
        },
        "date": 1722354196192,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10760907.57142857,
            "unit": "ns",
            "range": "± 76294.14577371358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26657401.785714287,
            "unit": "ns",
            "range": "± 212877.0242349861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67199396.14285715,
            "unit": "ns",
            "range": "± 94067.03725850733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135659716.33333334,
            "unit": "ns",
            "range": "± 306346.62264585815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275011798.0714286,
            "unit": "ns",
            "range": "± 242814.47217243686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14144,
            "unit": "ns",
            "range": "± 477.84397544058754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109956.28947368421,
            "unit": "ns",
            "range": "± 3188.129352032569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104893.78723404255,
            "unit": "ns",
            "range": "± 4088.0678381600646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92094.32352941176,
            "unit": "ns",
            "range": "± 2906.375004173435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3040222.6764705884,
            "unit": "ns",
            "range": "± 143987.43567403132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2752365.2346938774,
            "unit": "ns",
            "range": "± 164229.4975664822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5032.9010989010985,
            "unit": "ns",
            "range": "± 471.0050260393562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27199.247311827956,
            "unit": "ns",
            "range": "± 2139.652590938813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24711.659793814433,
            "unit": "ns",
            "range": "± 2455.995753960253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29627.91935483871,
            "unit": "ns",
            "range": "± 5345.521854629065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1156.1041666666667,
            "unit": "ns",
            "range": "± 255.9255022839621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5164.829787234043,
            "unit": "ns",
            "range": "± 853.9764122337145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679213.5375,
            "unit": "ns",
            "range": "± 28921.561283049865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283811.7843137255,
            "unit": "ns",
            "range": "± 48380.158581928496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1072649.6307692307,
            "unit": "ns",
            "range": "± 47773.56375541591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9357205.35,
            "unit": "ns",
            "range": "± 1298711.2778769557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2241611.1578947366,
            "unit": "ns",
            "range": "± 76774.39426482734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297713.1224489794,
            "unit": "ns",
            "range": "± 91236.16295057036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2621152.388888889,
            "unit": "ns",
            "range": "± 54160.18813628251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2301624.75,
            "unit": "ns",
            "range": "± 41336.68874508328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3139465.3333333335,
            "unit": "ns",
            "range": "± 267574.3471919009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3038881.052604167,
            "unit": "ns",
            "range": "± 44465.53737914454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925065.4186197916,
            "unit": "ns",
            "range": "± 4659.9384763812595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611345.0139322917,
            "unit": "ns",
            "range": "± 5603.274283638616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1661041.0743489584,
            "unit": "ns",
            "range": "± 15917.304287098648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466187.2285505022,
            "unit": "ns",
            "range": "± 676.413279019557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 415957.4283528646,
            "unit": "ns",
            "range": "± 909.8783304627782"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ed02da3a48f20f4d4d77c7a694823cb09a351bb",
          "message": "Merge pull request #3904 from planetarium/port/5.1.3-to-main\n\n🔀 Port 5.1.3 to main",
          "timestamp": "2024-08-01T10:07:10+09:00",
          "tree_id": "8a78ecb9c02c33f9fe134eedf74921fd8797ae20",
          "url": "https://github.com/planetarium/libplanet/commit/2ed02da3a48f20f4d4d77c7a694823cb09a351bb"
        },
        "date": 1722474910961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10659267.666666666,
            "unit": "ns",
            "range": "± 41607.02131706604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26963217.57142857,
            "unit": "ns",
            "range": "± 391940.3944239313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67221605.2,
            "unit": "ns",
            "range": "± 69458.47206188334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135922125.4,
            "unit": "ns",
            "range": "± 406529.30925559177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275976791.93333334,
            "unit": "ns",
            "range": "± 581460.5036728593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13828.045454545454,
            "unit": "ns",
            "range": "± 339.7021773025148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109552.91228070176,
            "unit": "ns",
            "range": "± 3813.891658326654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103895.45652173914,
            "unit": "ns",
            "range": "± 3145.346649021706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92963.86111111111,
            "unit": "ns",
            "range": "± 3088.7768004528702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3033957.7529411763,
            "unit": "ns",
            "range": "± 162842.80331729693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2621892.8,
            "unit": "ns",
            "range": "± 182555.79426420387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4721.021978021978,
            "unit": "ns",
            "range": "± 467.02031785499156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26276.561643835616,
            "unit": "ns",
            "range": "± 1308.2931627198402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23360.840425531915,
            "unit": "ns",
            "range": "± 1651.9400621347731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30375.55789473684,
            "unit": "ns",
            "range": "± 5148.014654949032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1207.5652173913043,
            "unit": "ns",
            "range": "± 232.6424556770941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4874.625,
            "unit": "ns",
            "range": "± 320.5212103190174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676950.0634920635,
            "unit": "ns",
            "range": "± 30434.06648799834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280431.525,
            "unit": "ns",
            "range": "± 45359.39573716106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1064836.2272727273,
            "unit": "ns",
            "range": "± 46043.699258186476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9400840.081632653,
            "unit": "ns",
            "range": "± 1234361.661683894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186830.4615384615,
            "unit": "ns",
            "range": "± 34849.365088944796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2299777.2769230767,
            "unit": "ns",
            "range": "± 107079.36794229837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2601970.6153846155,
            "unit": "ns",
            "range": "± 31588.198525552918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263489.4375,
            "unit": "ns",
            "range": "± 30775.289986110067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3157875.0606060605,
            "unit": "ns",
            "range": "± 318927.65823045775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3018243.23671875,
            "unit": "ns",
            "range": "± 67089.30307422939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915865.3215144231,
            "unit": "ns",
            "range": "± 4088.9583906186012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613532.8775390625,
            "unit": "ns",
            "range": "± 5347.431489711943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633476.838671875,
            "unit": "ns",
            "range": "± 11258.862118276178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461775.13567708334,
            "unit": "ns",
            "range": "± 683.1638234368348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420512.0370047433,
            "unit": "ns",
            "range": "± 454.3574095113738"
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
          "id": "e1b8327877dbee184fb8b5d2bff1c29f9d61d5af",
          "message": "Merge pull request #3910 from greymistcube/chore/optimization\n\n⚡ Removed unnecessary `ToBuilder()`",
          "timestamp": "2024-08-02T09:41:51+09:00",
          "tree_id": "2ac08bc05f73e4a46481cba42ae92936e530fe02",
          "url": "https://github.com/planetarium/libplanet/commit/e1b8327877dbee184fb8b5d2bff1c29f9d61d5af"
        },
        "date": 1722560332828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10795048.416666666,
            "unit": "ns",
            "range": "± 92634.0070310509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26245047.85714286,
            "unit": "ns",
            "range": "± 106742.78680933984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67156250.46666667,
            "unit": "ns",
            "range": "± 147393.9892047679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135715648.35714287,
            "unit": "ns",
            "range": "± 157040.87913837892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275164791,
            "unit": "ns",
            "range": "± 349989.8764746907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14333.586206896553,
            "unit": "ns",
            "range": "± 417.415048435126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110856.89795918367,
            "unit": "ns",
            "range": "± 3496.8239413603237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106635.83333333333,
            "unit": "ns",
            "range": "± 3910.636620825546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90476.6170212766,
            "unit": "ns",
            "range": "± 3492.4043079429907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3032380.0714285714,
            "unit": "ns",
            "range": "± 162011.07544698543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705063.04,
            "unit": "ns",
            "range": "± 183790.36159431224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4783.488636363636,
            "unit": "ns",
            "range": "± 431.3593321496614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26527.976744186046,
            "unit": "ns",
            "range": "± 1436.822376158332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23919.581632653062,
            "unit": "ns",
            "range": "± 1913.0704360444784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29345.31914893617,
            "unit": "ns",
            "range": "± 5087.7219609455315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1270.483870967742,
            "unit": "ns",
            "range": "± 215.5675831130473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4875.7555555555555,
            "unit": "ns",
            "range": "± 441.9226967611068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 692901.1447368421,
            "unit": "ns",
            "range": "± 35201.13700349425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280173.611111111,
            "unit": "ns",
            "range": "± 47478.199963113315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1098814.0875,
            "unit": "ns",
            "range": "± 57454.64644895594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9558719.96,
            "unit": "ns",
            "range": "± 1328105.7309097971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2192622.3571428573,
            "unit": "ns",
            "range": "± 33078.08784494687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278760.6228070175,
            "unit": "ns",
            "range": "± 91745.88923859791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2597772.466666667,
            "unit": "ns",
            "range": "± 43280.18378602823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2309999.6071428573,
            "unit": "ns",
            "range": "± 62898.82829523951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3221547.56122449,
            "unit": "ns",
            "range": "± 308472.05262606277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3026275.7358398438,
            "unit": "ns",
            "range": "± 55108.49303098412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925781.9167317708,
            "unit": "ns",
            "range": "± 4331.017661551919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613399.4408203125,
            "unit": "ns",
            "range": "± 5523.053767476888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1655924.3223958334,
            "unit": "ns",
            "range": "± 8026.368780539158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464464.4790414664,
            "unit": "ns",
            "range": "± 588.1713890664839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429137.5795522836,
            "unit": "ns",
            "range": "± 1462.3460873665601"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83cc706bf6d142e018f928300dc9c24fa14a5d87",
          "message": "Merge pull request #3915 from riemannulus/main\n\n🔀 Port 5.2.2 to main",
          "timestamp": "2024-08-09T17:03:22+09:00",
          "tree_id": "45d33a91530cdca8df46b26d30d8020608f99b5f",
          "url": "https://github.com/planetarium/libplanet/commit/83cc706bf6d142e018f928300dc9c24fa14a5d87"
        },
        "date": 1723191989554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10749019.866666667,
            "unit": "ns",
            "range": "± 185790.5984042506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26976091.785714287,
            "unit": "ns",
            "range": "± 302167.390818446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66772369.428571425,
            "unit": "ns",
            "range": "± 210294.03996957515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136257003.69230768,
            "unit": "ns",
            "range": "± 131321.3643315414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273936701.3,
            "unit": "ns",
            "range": "± 675102.9586789178"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13873.23076923077,
            "unit": "ns",
            "range": "± 479.3406909242199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112959.48,
            "unit": "ns",
            "range": "± 4495.691662024877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104136.39622641509,
            "unit": "ns",
            "range": "± 3934.836861732266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91789.08333333333,
            "unit": "ns",
            "range": "± 3471.0990278286367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3033717.121621622,
            "unit": "ns",
            "range": "± 151770.8630971669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2795017.595959596,
            "unit": "ns",
            "range": "± 168870.07514164635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4806.131868131868,
            "unit": "ns",
            "range": "± 403.19700750628954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27207.139784946237,
            "unit": "ns",
            "range": "± 1835.3064108077774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22994.86170212766,
            "unit": "ns",
            "range": "± 1339.9754820503235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30379.957894736843,
            "unit": "ns",
            "range": "± 5399.002013602991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1033.8225806451612,
            "unit": "ns",
            "range": "± 228.81434287717056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4821.8279569892475,
            "unit": "ns",
            "range": "± 543.323320821996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688444.3882352941,
            "unit": "ns",
            "range": "± 36555.586560252945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1267538.1627906978,
            "unit": "ns",
            "range": "± 41779.099428923975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066271.203125,
            "unit": "ns",
            "range": "± 49001.051166301826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9715790.38,
            "unit": "ns",
            "range": "± 1434426.4059354684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2192111.5833333335,
            "unit": "ns",
            "range": "± 28335.76274687113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290986.4210526315,
            "unit": "ns",
            "range": "± 99219.51344636714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2543035.5384615385,
            "unit": "ns",
            "range": "± 34557.80719706085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2295158.9615384615,
            "unit": "ns",
            "range": "± 62757.56919542424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3072980.97979798,
            "unit": "ns",
            "range": "± 268427.6202157168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042513.1197916665,
            "unit": "ns",
            "range": "± 29943.868169978614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913439.2713541667,
            "unit": "ns",
            "range": "± 5313.191393402064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617143.7331380208,
            "unit": "ns",
            "range": "± 5459.566966131205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1677721.6967447917,
            "unit": "ns",
            "range": "± 5519.562756795747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462675.51397235575,
            "unit": "ns",
            "range": "± 615.7642913916119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426162.1310546875,
            "unit": "ns",
            "range": "± 1418.5141376165705"
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
          "id": "711895ee13eff21471b5eb4a2f75183a495c4014",
          "message": "Merge pull request #3918 from timesince/main\n\nchore: fix some comments",
          "timestamp": "2024-08-12T09:42:16+09:00",
          "tree_id": "b93e31b3e0fb473f421c2fb7db27b0773d23824e",
          "url": "https://github.com/planetarium/libplanet/commit/711895ee13eff21471b5eb4a2f75183a495c4014"
        },
        "date": 1723423802141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10790981.642857144,
            "unit": "ns",
            "range": "± 88381.68841373554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26504752.714285713,
            "unit": "ns",
            "range": "± 305127.2278248304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67698709.83333333,
            "unit": "ns",
            "range": "± 131705.67139793545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135762826.69230768,
            "unit": "ns",
            "range": "± 140401.81464840155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274042730.8666667,
            "unit": "ns",
            "range": "± 506182.35098852136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14302.605263157895,
            "unit": "ns",
            "range": "± 310.17036443019543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111365.6170212766,
            "unit": "ns",
            "range": "± 4341.834407718909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105554.45945945945,
            "unit": "ns",
            "range": "± 3385.8562153184844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92200.28333333334,
            "unit": "ns",
            "range": "± 3482.215119532474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2989092.7448979593,
            "unit": "ns",
            "range": "± 182433.93529849677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747528.25,
            "unit": "ns",
            "range": "± 166341.7759031496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4935.555555555556,
            "unit": "ns",
            "range": "± 629.0910709353509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26908.067415730337,
            "unit": "ns",
            "range": "± 1680.1175405158199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23863.66176470588,
            "unit": "ns",
            "range": "± 1140.6178557451221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30137.05789473684,
            "unit": "ns",
            "range": "± 5228.956367773652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1063.4887640449438,
            "unit": "ns",
            "range": "± 173.0522447637512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4925.344444444445,
            "unit": "ns",
            "range": "± 547.7228274915204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 674282.7711864407,
            "unit": "ns",
            "range": "± 27042.92343461977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268797.9142857143,
            "unit": "ns",
            "range": "± 41160.39488060982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1063321.4117647058,
            "unit": "ns",
            "range": "± 46034.39121379726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9674165.08,
            "unit": "ns",
            "range": "± 1445457.5813537294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178771.1333333333,
            "unit": "ns",
            "range": "± 64799.203390023315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280182.8113207547,
            "unit": "ns",
            "range": "± 83472.30004849988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2582676.6666666665,
            "unit": "ns",
            "range": "± 26022.264091047928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2325778.4285714286,
            "unit": "ns",
            "range": "± 92310.31472407801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3207850.381443299,
            "unit": "ns",
            "range": "± 326680.68379587814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037645.7884114585,
            "unit": "ns",
            "range": "± 54526.02084830593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928640.5610351562,
            "unit": "ns",
            "range": "± 6197.632462226655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613250.586328125,
            "unit": "ns",
            "range": "± 4788.273647644422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1662032.193359375,
            "unit": "ns",
            "range": "± 11570.616132142062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458990.4798060826,
            "unit": "ns",
            "range": "± 442.2120537093356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417304.4825265067,
            "unit": "ns",
            "range": "± 400.59784222290114"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bd2216241a26704d8d892d22f9f377b2359b27d",
          "message": "Merge pull request #3960 from riemannulus/imp/interfacing-policy-action-registy\n\n🔧 refactor: interfacing policy action registy",
          "timestamp": "2024-10-08T17:00:46+09:00",
          "tree_id": "b30e64110ef3b9365ff071c426cd9e6788b94c85",
          "url": "https://github.com/planetarium/libplanet/commit/9bd2216241a26704d8d892d22f9f377b2359b27d"
        },
        "date": 1728383454266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11124681,
            "unit": "ns",
            "range": "± 134298.07040205115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26746253.35714286,
            "unit": "ns",
            "range": "± 201053.25789589915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67777227.46666667,
            "unit": "ns",
            "range": "± 157111.3161505319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136863990.64285713,
            "unit": "ns",
            "range": "± 458989.09950767097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271493321.85714287,
            "unit": "ns",
            "range": "± 243529.65680869884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14097.555555555555,
            "unit": "ns",
            "range": "± 471.84134406413983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109917.1568627451,
            "unit": "ns",
            "range": "± 4080.7750850668017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107569.14285714286,
            "unit": "ns",
            "range": "± 4048.5707560405394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90342.375,
            "unit": "ns",
            "range": "± 2040.1853882621208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101472.7966101696,
            "unit": "ns",
            "range": "± 136542.66011659702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2680738.47,
            "unit": "ns",
            "range": "± 176837.22823005912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4869.206896551724,
            "unit": "ns",
            "range": "± 533.6743005070151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26459.577777777777,
            "unit": "ns",
            "range": "± 1649.1856483948102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22612.63924050633,
            "unit": "ns",
            "range": "± 1171.1021078583135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29670.416666666668,
            "unit": "ns",
            "range": "± 5169.388337362182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1229.4270833333333,
            "unit": "ns",
            "range": "± 195.65225568213813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5038.7555555555555,
            "unit": "ns",
            "range": "± 566.1469875267755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 697483.2365591398,
            "unit": "ns",
            "range": "± 39995.27382959518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1274373.1282051282,
            "unit": "ns",
            "range": "± 44484.06248734335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1071534.7701149425,
            "unit": "ns",
            "range": "± 58600.69285361124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9146285.944444444,
            "unit": "ns",
            "range": "± 1285930.9420432535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189116.8666666667,
            "unit": "ns",
            "range": "± 36129.036707467356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280364.712121212,
            "unit": "ns",
            "range": "± 71895.88655121271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2551724.769230769,
            "unit": "ns",
            "range": "± 29357.202969498096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2374134.037735849,
            "unit": "ns",
            "range": "± 97306.10597628383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3104382.46,
            "unit": "ns",
            "range": "± 280454.6282183615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3015846.37109375,
            "unit": "ns",
            "range": "± 62623.0820265459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921545.3837890625,
            "unit": "ns",
            "range": "± 4988.151611114838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609973.0416015625,
            "unit": "ns",
            "range": "± 5728.04673455066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1611486.1608072917,
            "unit": "ns",
            "range": "± 6458.833925245658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465690.7157827524,
            "unit": "ns",
            "range": "± 636.0593208579031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422191.75078125,
            "unit": "ns",
            "range": "± 786.8339064930415"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfd304b1f92a9066eb85bbe144d091a45075c3a1",
          "message": "Merge pull request #3961 from riemannulus/test/fix/swarmtest/evidence/do-not-use-exception-in-tests\n\n🔧  fix: use `Assert` instead of exception",
          "timestamp": "2024-10-08T18:03:07+09:00",
          "tree_id": "6f4b783825d6a5b5dd15b2a661fb5dd560304ddc",
          "url": "https://github.com/planetarium/libplanet/commit/bfd304b1f92a9066eb85bbe144d091a45075c3a1"
        },
        "date": 1728384925077,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10684958.142857144,
            "unit": "ns",
            "range": "± 128239.55975490507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26325217.57142857,
            "unit": "ns",
            "range": "± 186306.94157170365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67123810.6923077,
            "unit": "ns",
            "range": "± 93135.8701793466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134478831,
            "unit": "ns",
            "range": "± 278975.8310445548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270886854.6666667,
            "unit": "ns",
            "range": "± 223529.22699741216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14099.32,
            "unit": "ns",
            "range": "± 372.8806466775484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108707.86274509804,
            "unit": "ns",
            "range": "± 4083.9406069119464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103304.12195121951,
            "unit": "ns",
            "range": "± 3238.2465177555737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94921.28,
            "unit": "ns",
            "range": "± 2023.1077274002655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3007380,
            "unit": "ns",
            "range": "± 158209.31239547816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705439.03,
            "unit": "ns",
            "range": "± 176906.17484061013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5183.659340659341,
            "unit": "ns",
            "range": "± 623.1097320836341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26634.065934065933,
            "unit": "ns",
            "range": "± 2362.830171177484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22872.673684210527,
            "unit": "ns",
            "range": "± 1372.4027961711568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30448.67021276596,
            "unit": "ns",
            "range": "± 4719.180319724064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1315.6947368421052,
            "unit": "ns",
            "range": "± 237.60171724092035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4986.268817204301,
            "unit": "ns",
            "range": "± 762.031212127295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 695231.3253012048,
            "unit": "ns",
            "range": "± 35724.257977618305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1281439,
            "unit": "ns",
            "range": "± 41041.98212738323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1071480.0789473683,
            "unit": "ns",
            "range": "± 54445.29027828778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9235515.78,
            "unit": "ns",
            "range": "± 1270443.089350577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205485,
            "unit": "ns",
            "range": "± 43257.85695396849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2267718.189189189,
            "unit": "ns",
            "range": "± 55537.52623718981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2620120.6153846155,
            "unit": "ns",
            "range": "± 58178.57350748774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2321590.659574468,
            "unit": "ns",
            "range": "± 84381.30518387213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2944533.402777778,
            "unit": "ns",
            "range": "± 145468.024771494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039714.2849121094,
            "unit": "ns",
            "range": "± 56612.97968503466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923983.2540364583,
            "unit": "ns",
            "range": "± 5115.549166424369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614811.1873046875,
            "unit": "ns",
            "range": "± 5203.396122439897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635312.688251202,
            "unit": "ns",
            "range": "± 11663.067060035468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468830.6549153646,
            "unit": "ns",
            "range": "± 990.046105480851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426956.7342773437,
            "unit": "ns",
            "range": "± 849.3240073461684"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fba38ed1bbf515b6a421e9797da14a97a67ea4a",
          "message": "Merge pull request #3962 from riemannulus/imp/use-bitfaster-caching\n\n🔴 refactor: use `Bitfaster.Caching` instead of `Libplanet.LruCahceNet`",
          "timestamp": "2024-10-10T17:15:44+09:00",
          "tree_id": "bd5a17b343a2d64c1b98841041bf88c0e30cf632",
          "url": "https://github.com/planetarium/libplanet/commit/1fba38ed1bbf515b6a421e9797da14a97a67ea4a"
        },
        "date": 1728548609689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10723580.166666666,
            "unit": "ns",
            "range": "± 92059.2034378207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26372744.285714287,
            "unit": "ns",
            "range": "± 193641.86038482666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66592984.7,
            "unit": "ns",
            "range": "± 130414.37113085791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134792982.42857143,
            "unit": "ns",
            "range": "± 179605.6041903243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272247089.85714287,
            "unit": "ns",
            "range": "± 590258.8839924209"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13167.058823529413,
            "unit": "ns",
            "range": "± 271.31081589853625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110012.33333333333,
            "unit": "ns",
            "range": "± 3731.4743125813607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105482.9,
            "unit": "ns",
            "range": "± 4290.541455945297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91044.51851851853,
            "unit": "ns",
            "range": "± 2527.4402735143585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063866.5576923075,
            "unit": "ns",
            "range": "± 125218.93834375766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2674309.94,
            "unit": "ns",
            "range": "± 183810.61290568646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5146.896551724138,
            "unit": "ns",
            "range": "± 397.4456825395975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27115.144444444446,
            "unit": "ns",
            "range": "± 2413.898592961937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24704.350515463917,
            "unit": "ns",
            "range": "± 2411.770213631288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30463.894736842107,
            "unit": "ns",
            "range": "± 4944.958329694884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1137.9736842105262,
            "unit": "ns",
            "range": "± 239.6811641959475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5030.076923076923,
            "unit": "ns",
            "range": "± 624.0332831360347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 663510.9629629629,
            "unit": "ns",
            "range": "± 31368.322835881918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1263900.225,
            "unit": "ns",
            "range": "± 42787.26689906317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1031093.9629629629,
            "unit": "ns",
            "range": "± 49959.83588680122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8648788.98,
            "unit": "ns",
            "range": "± 1227110.0624300626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2127988.0714285714,
            "unit": "ns",
            "range": "± 35555.938460434394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308617.933333333,
            "unit": "ns",
            "range": "± 69106.50016569045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2545314.4615384615,
            "unit": "ns",
            "range": "± 30234.645110136447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2258184.9787234045,
            "unit": "ns",
            "range": "± 81365.89553115294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2697961.6923076925,
            "unit": "ns",
            "range": "± 29834.94188973899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021649.298828125,
            "unit": "ns",
            "range": "± 43918.365230387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917526.8201822917,
            "unit": "ns",
            "range": "± 5388.161850641827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612405.9709635417,
            "unit": "ns",
            "range": "± 5290.213577117652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636585.0431082589,
            "unit": "ns",
            "range": "± 10427.189315824055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465438.37039620534,
            "unit": "ns",
            "range": "± 682.7493548500124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424776.5663364955,
            "unit": "ns",
            "range": "± 487.12776626450307"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1e53ae2f4b5c4ce7196771068535a217392067b",
          "message": "Merge pull request #3963 from riemannulus/release/5.3.0\n\n🚀  Release 5.3.0",
          "timestamp": "2024-10-10T17:50:18+09:00",
          "tree_id": "d22162903bd4d305fa1b2bf15484bca665dfcdf7",
          "url": "https://github.com/planetarium/libplanet/commit/d1e53ae2f4b5c4ce7196771068535a217392067b"
        },
        "date": 1728551976609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10703958.75,
            "unit": "ns",
            "range": "± 79774.74715053516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26379137.285714287,
            "unit": "ns",
            "range": "± 300656.2745555203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67263180.2,
            "unit": "ns",
            "range": "± 95827.13349285338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136473141.30769232,
            "unit": "ns",
            "range": "± 219170.80076445124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271595107.4285714,
            "unit": "ns",
            "range": "± 434349.1485020059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13106.307692307691,
            "unit": "ns",
            "range": "± 166.2680489527802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110706.41818181818,
            "unit": "ns",
            "range": "± 4680.607366772556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 109678.78378378379,
            "unit": "ns",
            "range": "± 3690.5611597932057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91636.26315789473,
            "unit": "ns",
            "range": "± 3100.216598223949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2997416.17,
            "unit": "ns",
            "range": "± 183628.94534574047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765277.023255814,
            "unit": "ns",
            "range": "± 150125.9112183132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5436.946808510638,
            "unit": "ns",
            "range": "± 744.93822168653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27734.48275862069,
            "unit": "ns",
            "range": "± 1936.9937499873295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23022.271186440677,
            "unit": "ns",
            "range": "± 974.3556992383343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30307.42105263158,
            "unit": "ns",
            "range": "± 5319.526031876092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1197.0208333333333,
            "unit": "ns",
            "range": "± 186.73736012556952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4960.904255319149,
            "unit": "ns",
            "range": "± 650.4368931915749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 682404.5862068966,
            "unit": "ns",
            "range": "± 41556.80676944868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289026.2608695652,
            "unit": "ns",
            "range": "± 49398.983954096686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1071173.4042553192,
            "unit": "ns",
            "range": "± 71673.00368186795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8865247.01,
            "unit": "ns",
            "range": "± 1351591.9151960262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2135665.2884615385,
            "unit": "ns",
            "range": "± 87186.14753375622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2229134.153846154,
            "unit": "ns",
            "range": "± 36094.947850186625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2547959.65,
            "unit": "ns",
            "range": "± 71290.2780355581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2269426.724137931,
            "unit": "ns",
            "range": "± 98448.21388399528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2759052,
            "unit": "ns",
            "range": "± 77422.85412637585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3052883.2583007812,
            "unit": "ns",
            "range": "± 58450.8387735449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922395.687109375,
            "unit": "ns",
            "range": "± 5877.19012118993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609507.42421875,
            "unit": "ns",
            "range": "± 4564.100415722395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1654097.846842448,
            "unit": "ns",
            "range": "± 10310.076330248346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468713.5470703125,
            "unit": "ns",
            "range": "± 1064.9560762363562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421902.72011021205,
            "unit": "ns",
            "range": "± 886.989571294476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "940e7a47c429f4d52325f7dce33b3c8795350b2e",
          "message": "Merge pull request #3964 from planetarium/prepare/5.4.0\n\n🧹  Prepare 5.4.0",
          "timestamp": "2024-10-10T17:59:54+09:00",
          "tree_id": "0033fe6e460c7fbf5e142fde880619412807c1d6",
          "url": "https://github.com/planetarium/libplanet/commit/940e7a47c429f4d52325f7dce33b3c8795350b2e"
        },
        "date": 1728554022678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10581968.583333334,
            "unit": "ns",
            "range": "± 55850.69054421039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26339529.92857143,
            "unit": "ns",
            "range": "± 162676.40123379644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67725658,
            "unit": "ns",
            "range": "± 145593.184991606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135132550.7142857,
            "unit": "ns",
            "range": "± 192579.5873219807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271675042.06666666,
            "unit": "ns",
            "range": "± 365996.6545652075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13316.589743589744,
            "unit": "ns",
            "range": "± 465.8755039226635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110367.87096774194,
            "unit": "ns",
            "range": "± 4544.652950676667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106618.81395348837,
            "unit": "ns",
            "range": "± 3885.1206958993466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94323.54545454546,
            "unit": "ns",
            "range": "± 2935.5508436546997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2994557.4545454546,
            "unit": "ns",
            "range": "± 175318.7577763727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780687.5757575757,
            "unit": "ns",
            "range": "± 178167.28613564454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5365.13829787234,
            "unit": "ns",
            "range": "± 451.5942512530618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27175.744444444445,
            "unit": "ns",
            "range": "± 1798.3361383628546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22466.61797752809,
            "unit": "ns",
            "range": "± 1237.6212108279808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31256.75257731959,
            "unit": "ns",
            "range": "± 5041.859592102665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1419.1894736842105,
            "unit": "ns",
            "range": "± 261.46670162418525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5061.731182795699,
            "unit": "ns",
            "range": "± 691.361702033605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 667525.1627906977,
            "unit": "ns",
            "range": "± 36314.00631893995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282773.25,
            "unit": "ns",
            "range": "± 44909.273989843925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1039117.7534246575,
            "unit": "ns",
            "range": "± 49168.498984439226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8760051.3,
            "unit": "ns",
            "range": "± 1209472.9153329188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2130741.6153846155,
            "unit": "ns",
            "range": "± 57369.33716408229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287148.3157894737,
            "unit": "ns",
            "range": "± 78028.16649518484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2584498.423076923,
            "unit": "ns",
            "range": "± 29102.822645067547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2250044.1578947366,
            "unit": "ns",
            "range": "± 48388.13142733701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2849421.8636363638,
            "unit": "ns",
            "range": "± 105707.67168713847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039770.754166667,
            "unit": "ns",
            "range": "± 39322.31512351084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920388.2488932292,
            "unit": "ns",
            "range": "± 5609.144656345547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610932.7261067708,
            "unit": "ns",
            "range": "± 5483.210295864334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640949.1325520833,
            "unit": "ns",
            "range": "± 18890.730952855734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461113.60944010416,
            "unit": "ns",
            "range": "± 458.5342616296966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421015.62649972097,
            "unit": "ns",
            "range": "± 1337.8663075887005"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df2c36efad601481083da79bb69cebf6be5ab8f0",
          "message": "Merge pull request #3966 from eugene-doobu/feature/resolve-cve-2024-43485\n\nresolve CVE-2024-43485",
          "timestamp": "2024-10-14T14:57:11+09:00",
          "tree_id": "8c0411593d5f0cd9e6f61a117c29c7602f09ab5b",
          "url": "https://github.com/planetarium/libplanet/commit/df2c36efad601481083da79bb69cebf6be5ab8f0"
        },
        "date": 1728885915572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10651458.76923077,
            "unit": "ns",
            "range": "± 154190.1107178807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26485905.214285713,
            "unit": "ns",
            "range": "± 172270.17149599126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67182155.21428572,
            "unit": "ns",
            "range": "± 113104.02442896306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137925919.42857143,
            "unit": "ns",
            "range": "± 227975.48964702807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271700914.1333333,
            "unit": "ns",
            "range": "± 401243.7891428293"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12919.361111111111,
            "unit": "ns",
            "range": "± 431.8628851699363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111377.7536231884,
            "unit": "ns",
            "range": "± 5318.575968759365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106025.72549019608,
            "unit": "ns",
            "range": "± 4289.699285863434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94188.8918918919,
            "unit": "ns",
            "range": "± 3148.9682594619935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2989753.223529412,
            "unit": "ns",
            "range": "± 160973.77356800472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2786810.7536231885,
            "unit": "ns",
            "range": "± 132996.3033544659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5141.126436781609,
            "unit": "ns",
            "range": "± 526.6808266209993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26474.144444444446,
            "unit": "ns",
            "range": "± 1601.0077185499226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23291.31182795699,
            "unit": "ns",
            "range": "± 1349.7167656062431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31148.375,
            "unit": "ns",
            "range": "± 5067.8824192940265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1287.7083333333333,
            "unit": "ns",
            "range": "± 205.21556915731657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4935.465909090909,
            "unit": "ns",
            "range": "± 588.4121424640759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680862.5384615385,
            "unit": "ns",
            "range": "± 52343.638963065285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1266380.680851064,
            "unit": "ns",
            "range": "± 49221.25219645711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1025928.2857142857,
            "unit": "ns",
            "range": "± 40968.47753374758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8683676.2,
            "unit": "ns",
            "range": "± 1328940.065519271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139709.9534883723,
            "unit": "ns",
            "range": "± 73332.29168750042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275670.966666667,
            "unit": "ns",
            "range": "± 34429.54709644997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555343.076923077,
            "unit": "ns",
            "range": "± 38223.73717439103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2277951.8032786883,
            "unit": "ns",
            "range": "± 102827.26471723014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2765772.0428571426,
            "unit": "ns",
            "range": "± 81802.70367362125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3017160.763802083,
            "unit": "ns",
            "range": "± 39806.151883621766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915973.6821986607,
            "unit": "ns",
            "range": "± 4340.110608392849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614144.6232421875,
            "unit": "ns",
            "range": "± 5681.947750189495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1654960.1657552083,
            "unit": "ns",
            "range": "± 8637.925088685715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 454609.90022786456,
            "unit": "ns",
            "range": "± 840.8078085173364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417069.08642578125,
            "unit": "ns",
            "range": "± 1127.7809373347309"
          }
        ]
      }
    ]
  }
}