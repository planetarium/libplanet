window.BENCHMARK_DATA = {
  "lastUpdate": 1680863313466,
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
      }
    ]
  }
}