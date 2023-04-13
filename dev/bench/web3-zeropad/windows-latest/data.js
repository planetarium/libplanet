window.BENCHMARK_DATA = {
  "lastUpdate": 1681372380080,
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
          "id": "b4d9e6457a2d387590dae0276c7c7a02c45b6bec",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:26:55+09:00",
          "tree_id": "4b1463dc4140dc32c232f7eb6d13b81287913ef6",
          "url": "https://github.com/planetarium/libplanet/commit/b4d9e6457a2d387590dae0276c7c7a02c45b6bec"
        },
        "date": 1680856942092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433585.4166666667,
            "unit": "ns",
            "range": "± 147806.54068510717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508225,
            "unit": "ns",
            "range": "± 68405.71094815535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2333221.212121212,
            "unit": "ns",
            "range": "± 154224.8883225649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5733612,
            "unit": "ns",
            "range": "± 378641.64804247726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52086.73469387755,
            "unit": "ns",
            "range": "± 4475.515008206411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7100973.333333333,
            "unit": "ns",
            "range": "± 117185.52730403106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19884712.5,
            "unit": "ns",
            "range": "± 381468.2265056073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49850253.333333336,
            "unit": "ns",
            "range": "± 605528.9162219691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99068086.66666667,
            "unit": "ns",
            "range": "± 1244668.939268974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200847566.66666666,
            "unit": "ns",
            "range": "± 2135636.3965093023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4875578.958333333,
            "unit": "ns",
            "range": "± 28683.092641963958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532232.1514423077,
            "unit": "ns",
            "range": "± 3610.287091311275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167711.5885416667,
            "unit": "ns",
            "range": "± 3079.660433013693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692779.453125,
            "unit": "ns",
            "range": "± 10527.855930258604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841892.4283854166,
            "unit": "ns",
            "range": "± 2751.1612906995556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763743.9583333334,
            "unit": "ns",
            "range": "± 2942.9102899811214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3151151.2195121953,
            "unit": "ns",
            "range": "± 112635.56303839214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3289899.090909091,
            "unit": "ns",
            "range": "± 140157.72711977197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3998292.592592593,
            "unit": "ns",
            "range": "± 101334.66612371385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4312579.310344827,
            "unit": "ns",
            "range": "± 123924.74784351519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6893076.923076923,
            "unit": "ns",
            "range": "± 236354.95547958597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324468.3333333333,
            "unit": "ns",
            "range": "± 14158.86248982063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268355,
            "unit": "ns",
            "range": "± 11866.966328026236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224063.04347826086,
            "unit": "ns",
            "range": "± 8599.156514078762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5225788.461538462,
            "unit": "ns",
            "range": "± 59808.744322514394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3731544.4444444445,
            "unit": "ns",
            "range": "± 79603.52654190954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22785.416666666668,
            "unit": "ns",
            "range": "± 2531.900853079473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96058.06451612903,
            "unit": "ns",
            "range": "± 7520.686291831365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92798.96907216495,
            "unit": "ns",
            "range": "± 10352.017666109838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 203012.37113402062,
            "unit": "ns",
            "range": "± 22283.51996493129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8141.414141414141,
            "unit": "ns",
            "range": "± 1616.5603507302417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22745.918367346938,
            "unit": "ns",
            "range": "± 3144.8261672361778"
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
          "id": "4b1126f45c6003701f589bd833bd06b4d58ebc0e",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:24:14+09:00",
          "tree_id": "96574fd822fde38ca21564581d22e27b6154869f",
          "url": "https://github.com/planetarium/libplanet/commit/4b1126f45c6003701f589bd833bd06b4d58ebc0e"
        },
        "date": 1680857021341,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1518562.6262626264,
            "unit": "ns",
            "range": "± 153938.88303934035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577873.1707317075,
            "unit": "ns",
            "range": "± 91972.28121665312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2410527.272727273,
            "unit": "ns",
            "range": "± 191868.49706759022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6057353.370786517,
            "unit": "ns",
            "range": "± 334750.6234122236"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57087.5,
            "unit": "ns",
            "range": "± 5809.524846953356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7710027.777777778,
            "unit": "ns",
            "range": "± 164561.66931134343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20073423.076923076,
            "unit": "ns",
            "range": "± 148446.8768833156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51273835.71428572,
            "unit": "ns",
            "range": "± 268478.2203088731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103404053.33333333,
            "unit": "ns",
            "range": "± 642799.2620080512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205521206.66666666,
            "unit": "ns",
            "range": "± 1047612.8493366422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4984638.645833333,
            "unit": "ns",
            "range": "± 28086.36997802251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566667.4348958333,
            "unit": "ns",
            "range": "± 3720.491382111952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182122.2395833333,
            "unit": "ns",
            "range": "± 4881.378764878953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625328.683035714,
            "unit": "ns",
            "range": "± 6267.768523754596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851172.041015625,
            "unit": "ns",
            "range": "± 3673.3493660982517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762054.6549479166,
            "unit": "ns",
            "range": "± 2110.895297632443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3450621.621621622,
            "unit": "ns",
            "range": "± 115265.36083493778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3594146.875,
            "unit": "ns",
            "range": "± 107774.7890334733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4145527.5862068967,
            "unit": "ns",
            "range": "± 120369.23816962932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4600042.857142857,
            "unit": "ns",
            "range": "± 108717.1447906381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7207604.347826087,
            "unit": "ns",
            "range": "± 180117.56887266933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337978.0487804878,
            "unit": "ns",
            "range": "± 11961.699548875193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279348.07692307694,
            "unit": "ns",
            "range": "± 11540.983924897873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256927.8350515464,
            "unit": "ns",
            "range": "± 18746.30931603628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5420928.571428572,
            "unit": "ns",
            "range": "± 46650.112186713624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3714613.3333333335,
            "unit": "ns",
            "range": "± 50831.80762737704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28605.208333333332,
            "unit": "ns",
            "range": "± 2789.8073803218463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117488.77551020408,
            "unit": "ns",
            "range": "± 9206.462125969987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127408,
            "unit": "ns",
            "range": "± 10903.83752296744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 236533.68421052632,
            "unit": "ns",
            "range": "± 18795.323153710542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12450,
            "unit": "ns",
            "range": "± 1660.3212540549696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29344.62365591398,
            "unit": "ns",
            "range": "± 2888.596981212349"
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
          "id": "399c2a5b09de9147e9d826cfbceccae24c08bfdf",
          "message": "account-web3: support scrypt, reduce ethers dependency\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T19:12:03+09:00",
          "tree_id": "1d97dee16e6f78e5deb09cb941f9f803ceeed7de",
          "url": "https://github.com/planetarium/libplanet/commit/399c2a5b09de9147e9d826cfbceccae24c08bfdf"
        },
        "date": 1680863263528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309625.7575757576,
            "unit": "ns",
            "range": "± 115270.95151620304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2376544.117647059,
            "unit": "ns",
            "range": "± 76713.65862018857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093470,
            "unit": "ns",
            "range": "± 160407.2685952286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4981848,
            "unit": "ns",
            "range": "± 132278.77796532595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42384.50704225352,
            "unit": "ns",
            "range": "± 2081.939198187521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6907186.666666667,
            "unit": "ns",
            "range": "± 18674.232310350868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17256400,
            "unit": "ns",
            "range": "± 94542.40167398813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43970921.428571425,
            "unit": "ns",
            "range": "± 385088.69343722204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87727560,
            "unit": "ns",
            "range": "± 732881.2579713813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175920213.33333334,
            "unit": "ns",
            "range": "± 1414067.517516486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4776347.767857143,
            "unit": "ns",
            "range": "± 11253.853998378247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522644.0169270833,
            "unit": "ns",
            "range": "± 2409.82095061934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154299.9088541667,
            "unit": "ns",
            "range": "± 2233.968352841767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590306.015625,
            "unit": "ns",
            "range": "± 15215.283163326258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803416.015625,
            "unit": "ns",
            "range": "± 1118.523762735443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746069.169921875,
            "unit": "ns",
            "range": "± 886.0938733710506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2946200,
            "unit": "ns",
            "range": "± 42743.87174120486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3052258.8235294116,
            "unit": "ns",
            "range": "± 97029.58973129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3947225,
            "unit": "ns",
            "range": "± 76444.24983825359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3877561.904761905,
            "unit": "ns",
            "range": "± 82235.54873769905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6640740.540540541,
            "unit": "ns",
            "range": "± 208609.05815458766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293450,
            "unit": "ns",
            "range": "± 10331.455577941299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235161.76470588235,
            "unit": "ns",
            "range": "± 5969.316224274205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211868.9655172414,
            "unit": "ns",
            "range": "± 8525.610682382934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5189321.428571428,
            "unit": "ns",
            "range": "± 56701.175928267585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3595126.6666666665,
            "unit": "ns",
            "range": "± 61214.81457792324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16230.927835051547,
            "unit": "ns",
            "range": "± 1408.113456066179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77098.68421052632,
            "unit": "ns",
            "range": "± 3901.1619951343596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68595.23809523809,
            "unit": "ns",
            "range": "± 3695.190777535943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148391.7525773196,
            "unit": "ns",
            "range": "± 14391.842814761807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4716.494845360825,
            "unit": "ns",
            "range": "± 637.9786458631037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15611.702127659575,
            "unit": "ns",
            "range": "± 1488.728719626442"
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
          "id": "765bd4d00ad34bf9448beb221f0ffb55a2914c8a",
          "message": "tslib account: remove ethers dep",
          "timestamp": "2023-04-12T15:51:11+09:00",
          "tree_id": "21aba22af8df432c64c30b2eb14b22f96432d756",
          "url": "https://github.com/planetarium/libplanet/commit/765bd4d00ad34bf9448beb221f0ffb55a2914c8a"
        },
        "date": 1681283207252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443593.75,
            "unit": "ns",
            "range": "± 129818.73095934476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619328.282828283,
            "unit": "ns",
            "range": "± 165742.6059793231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2253829.381443299,
            "unit": "ns",
            "range": "± 146987.95226859036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5759669.411764706,
            "unit": "ns",
            "range": "± 310568.9744046322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50858.426966292136,
            "unit": "ns",
            "range": "± 2837.6450298844975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7156459.259259259,
            "unit": "ns",
            "range": "± 196104.7919613374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19624180,
            "unit": "ns",
            "range": "± 165112.90163313795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48862080,
            "unit": "ns",
            "range": "± 715163.2522917907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100864626.66666667,
            "unit": "ns",
            "range": "± 1663400.448078173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200866546.66666666,
            "unit": "ns",
            "range": "± 3366591.8785846885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4826973.270089285,
            "unit": "ns",
            "range": "± 14202.687835663459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1544623.6979166667,
            "unit": "ns",
            "range": "± 5449.183848987909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1177360.4947916667,
            "unit": "ns",
            "range": "± 5999.325843115237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647463.359375,
            "unit": "ns",
            "range": "± 11279.29331149449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843678.4249441965,
            "unit": "ns",
            "range": "± 2174.545813193777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762316.7898995535,
            "unit": "ns",
            "range": "± 2022.4341923816714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3223390.476190476,
            "unit": "ns",
            "range": "± 76523.77999525313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3460476.470588235,
            "unit": "ns",
            "range": "± 70988.97387457229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3950073.529411765,
            "unit": "ns",
            "range": "± 126769.18732023347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4384019.230769231,
            "unit": "ns",
            "range": "± 119171.1375098208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6904978.378378378,
            "unit": "ns",
            "range": "± 228213.14006274333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311687.5,
            "unit": "ns",
            "range": "± 14415.073658901272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264478.3333333333,
            "unit": "ns",
            "range": "± 10984.0267949768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217247.8260869565,
            "unit": "ns",
            "range": "± 5475.471716102093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5359907.692307692,
            "unit": "ns",
            "range": "± 63829.03547156865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3758238.888888889,
            "unit": "ns",
            "range": "± 79945.11454660179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25112.244897959183,
            "unit": "ns",
            "range": "± 2366.0949299969357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100395.91836734694,
            "unit": "ns",
            "range": "± 8575.365320790712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91459,
            "unit": "ns",
            "range": "± 9133.743576276473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 193539.17525773196,
            "unit": "ns",
            "range": "± 16151.428966071333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7927.083333333333,
            "unit": "ns",
            "range": "± 835.8392147910123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21284.69387755102,
            "unit": "ns",
            "range": "± 2222.3954773847686"
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
          "id": "919b1075eb30745dbf7dd175dee54ace3b8e31a6",
          "message": "tslib account: remove ethers dep",
          "timestamp": "2023-04-12T15:53:52+09:00",
          "tree_id": "2534f4fae211deb8004e3486d07c0ce2cd0db91e",
          "url": "https://github.com/planetarium/libplanet/commit/919b1075eb30745dbf7dd175dee54ace3b8e31a6"
        },
        "date": 1681283543580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1709347.4226804124,
            "unit": "ns",
            "range": "± 155798.70432493943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3120054.098360656,
            "unit": "ns",
            "range": "± 139951.81500998896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2760060.2150537632,
            "unit": "ns",
            "range": "± 242853.996726511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7053371.978021978,
            "unit": "ns",
            "range": "± 480614.9546390651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62112.5,
            "unit": "ns",
            "range": "± 7742.762324975024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9280061.363636363,
            "unit": "ns",
            "range": "± 340248.3936813639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23784484.615384616,
            "unit": "ns",
            "range": "± 749509.4250095442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59679278.571428575,
            "unit": "ns",
            "range": "± 818830.7021211794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122602524.24242425,
            "unit": "ns",
            "range": "± 3864589.09725781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249232929.4871795,
            "unit": "ns",
            "range": "± 8662778.961261418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5988914.508928572,
            "unit": "ns",
            "range": "± 74694.93740908953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890931.2725360577,
            "unit": "ns",
            "range": "± 18948.516316829307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1434649.140625,
            "unit": "ns",
            "range": "± 25537.748215556516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3222553.3854166665,
            "unit": "ns",
            "range": "± 50702.61417670729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038302.5065104166,
            "unit": "ns",
            "range": "± 18076.71374513212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957147.6217830882,
            "unit": "ns",
            "range": "± 19190.915909613246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3917905.5555555555,
            "unit": "ns",
            "range": "± 82847.87066184993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4108703.5714285714,
            "unit": "ns",
            "range": "± 116138.20465017133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4782307.142857143,
            "unit": "ns",
            "range": "± 202968.9504755416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5091465,
            "unit": "ns",
            "range": "± 178815.16678345512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8375335.714285715,
            "unit": "ns",
            "range": "± 214947.55814226583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383697.14285714284,
            "unit": "ns",
            "range": "± 12494.880968627434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324362.5,
            "unit": "ns",
            "range": "± 10992.274384941733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292113.9784946237,
            "unit": "ns",
            "range": "± 16376.265907907364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6508983.333333333,
            "unit": "ns",
            "range": "± 44785.52593565619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4577896.666666667,
            "unit": "ns",
            "range": "± 78530.82985742121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30886.842105263157,
            "unit": "ns",
            "range": "± 2816.480852002663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122427.36842105263,
            "unit": "ns",
            "range": "± 10391.817997780376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124362.88659793814,
            "unit": "ns",
            "range": "± 8647.17342531204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 228513.40206185568,
            "unit": "ns",
            "range": "± 21688.613702749168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12043.877551020409,
            "unit": "ns",
            "range": "± 1489.192428111443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28107.291666666668,
            "unit": "ns",
            "range": "± 3316.4103863781984"
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
          "id": "3fb50722691ddfa2aeb7690fa068f4fbb187ed6f",
          "message": "Optional Web3KeyStore.get() weak key\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T16:38:27+09:00",
          "tree_id": "4b5c647b2564abf00b6c060c9d8219866ebd67aa",
          "url": "https://github.com/planetarium/libplanet/commit/3fb50722691ddfa2aeb7690fa068f4fbb187ed6f"
        },
        "date": 1681372328335,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1359288,
            "unit": "ns",
            "range": "± 120539.97809520259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2454055.882352941,
            "unit": "ns",
            "range": "± 78716.58094623093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196820.8333333335,
            "unit": "ns",
            "range": "± 128613.51645155765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5134616.666666667,
            "unit": "ns",
            "range": "± 150104.40064153358"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44314.51612903226,
            "unit": "ns",
            "range": "± 1927.101516224288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6853364.285714285,
            "unit": "ns",
            "range": "± 43695.79467783453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17310760,
            "unit": "ns",
            "range": "± 147640.67287070418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44397633.333333336,
            "unit": "ns",
            "range": "± 384385.4142220626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90508486.66666667,
            "unit": "ns",
            "range": "± 455080.5452517902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181960353.33333334,
            "unit": "ns",
            "range": "± 893615.784221342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4869967.708333333,
            "unit": "ns",
            "range": "± 5891.930334420666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1516881.8584735577,
            "unit": "ns",
            "range": "± 1668.805303218636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145347.1354166667,
            "unit": "ns",
            "range": "± 1145.1825539233303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569708.5100446427,
            "unit": "ns",
            "range": "± 7372.536165257048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819342.2037760416,
            "unit": "ns",
            "range": "± 1619.225989686885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743823.2142857143,
            "unit": "ns",
            "range": "± 1795.2422524926951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2933700,
            "unit": "ns",
            "range": "± 28012.7374874085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3135586.9565217393,
            "unit": "ns",
            "range": "± 76940.25016115856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3969678.5714285714,
            "unit": "ns",
            "range": "± 54746.467094604915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3916548.3870967743,
            "unit": "ns",
            "range": "± 176707.74008852008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6705008.823529412,
            "unit": "ns",
            "range": "± 214738.0721175353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298476.6666666667,
            "unit": "ns",
            "range": "± 8895.705408377891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244893.33333333334,
            "unit": "ns",
            "range": "± 7242.733972906836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227901.21951219512,
            "unit": "ns",
            "range": "± 12055.299474007668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5276764.285714285,
            "unit": "ns",
            "range": "± 38714.05245053606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3515961.5384615385,
            "unit": "ns",
            "range": "± 25130.576941962503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17863.043478260868,
            "unit": "ns",
            "range": "± 1530.8345344011682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80786.66666666667,
            "unit": "ns",
            "range": "± 4456.612307395266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72798.95833333333,
            "unit": "ns",
            "range": "± 6568.144731908566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161553.60824742267,
            "unit": "ns",
            "range": "± 14519.692531866205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5628.571428571428,
            "unit": "ns",
            "range": "± 918.5376095763229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18033.333333333332,
            "unit": "ns",
            "range": "± 1930.2395088184023"
          }
        ]
      }
    ]
  }
}