window.BENCHMARK_DATA = {
  "lastUpdate": 1710840586796,
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
      }
    ]
  }
}