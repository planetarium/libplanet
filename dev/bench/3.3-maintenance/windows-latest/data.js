window.BENCHMARK_DATA = {
  "lastUpdate": 1694145181821,
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
          "id": "aa72117b8887ec9e189cac97cefc3fa77966dd81",
          "message": "Merge pull request #3417 from greymistcube/release/3.3.0\n\n🚀 Release 3.3.0",
          "timestamp": "2023-09-07T19:23:55+09:00",
          "tree_id": "b801b394004dbb5681b75d049d42107df46a8d4f",
          "url": "https://github.com/planetarium/libplanet/commit/aa72117b8887ec9e189cac97cefc3fa77966dd81"
        },
        "date": 1694088995261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1123346.9696969697,
            "unit": "ns",
            "range": "± 180005.47749860023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899647.1264367816,
            "unit": "ns",
            "range": "± 116498.54160089298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1373882,
            "unit": "ns",
            "range": "± 129634.29554642622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3238250.819672131,
            "unit": "ns",
            "range": "± 144651.918552723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34552.68817204301,
            "unit": "ns",
            "range": "± 2504.716915265965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5015226.666666667,
            "unit": "ns",
            "range": "± 58899.76311699475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13956757.142857144,
            "unit": "ns",
            "range": "± 181359.8365947387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33919993.333333336,
            "unit": "ns",
            "range": "± 246690.93001644986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68210433.33333333,
            "unit": "ns",
            "range": "± 559071.1016200592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134582080,
            "unit": "ns",
            "range": "± 2338265.410268292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3227835.46875,
            "unit": "ns",
            "range": "± 7338.700788422823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1026469.9348958334,
            "unit": "ns",
            "range": "± 1911.1473514089164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693322.9166666666,
            "unit": "ns",
            "range": "± 1534.5014330446443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935879.771205357,
            "unit": "ns",
            "range": "± 3190.0872693238484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612518.3984375,
            "unit": "ns",
            "range": "± 1067.4333885853766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581038.9787946428,
            "unit": "ns",
            "range": "± 1018.3706731188065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415355,
            "unit": "ns",
            "range": "± 52978.73928086128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2477610.5263157897,
            "unit": "ns",
            "range": "± 51715.32004624336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2954434.210526316,
            "unit": "ns",
            "range": "± 99941.95417047807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2763639.1304347827,
            "unit": "ns",
            "range": "± 105934.71255292807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4254789.743589744,
            "unit": "ns",
            "range": "± 140127.44724351884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185278.0487804878,
            "unit": "ns",
            "range": "± 6136.347129812733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177700,
            "unit": "ns",
            "range": "± 6382.084299035857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147532.29166666666,
            "unit": "ns",
            "range": "± 8662.070917957166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2808246.6666666665,
            "unit": "ns",
            "range": "± 52440.45421328116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2601305.263157895,
            "unit": "ns",
            "range": "± 57224.45547223292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12793.333333333334,
            "unit": "ns",
            "range": "± 1754.3397234197653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60972.52747252747,
            "unit": "ns",
            "range": "± 4653.817212999953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49261.61616161616,
            "unit": "ns",
            "range": "± 6368.796815064277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67084.21052631579,
            "unit": "ns",
            "range": "± 11320.075518407164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3288.659793814433,
            "unit": "ns",
            "range": "± 766.060850588335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13089.690721649484,
            "unit": "ns",
            "range": "± 2489.0796716223945"
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
          "id": "ea788e75329d8be22b7ea0ca2b05cdd1880a5eed",
          "message": "Merge pull request #3419 from greymistcube/prepare/3.3.1\n\n🔧 Prepare 3.3.1",
          "timestamp": "2023-09-08T10:21:16+09:00",
          "tree_id": "31cfafb237c60d6a860c9ac96ba14bd0c4ce6f13",
          "url": "https://github.com/planetarium/libplanet/commit/ea788e75329d8be22b7ea0ca2b05cdd1880a5eed"
        },
        "date": 1694136987255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410569.2307692308,
            "unit": "ns",
            "range": "± 37946.79189845454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2328332.6923076925,
            "unit": "ns",
            "range": "± 95348.80181887775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1564855.2083333333,
            "unit": "ns",
            "range": "± 99621.39367550965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4151858.6666666665,
            "unit": "ns",
            "range": "± 208850.50912162114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46037.36263736264,
            "unit": "ns",
            "range": "± 2600.070441423905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6766214,
            "unit": "ns",
            "range": "± 270410.2672923919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18871666.666666668,
            "unit": "ns",
            "range": "± 345120.8497792925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48401672.72727273,
            "unit": "ns",
            "range": "± 1172828.8231905343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96856478.57142857,
            "unit": "ns",
            "range": "± 1619013.6318989797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195227016.66666666,
            "unit": "ns",
            "range": "± 4020963.0860177823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4124022.3772321427,
            "unit": "ns",
            "range": "± 21472.001687424563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1342759.765625,
            "unit": "ns",
            "range": "± 6027.471311618137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 971515.6510416666,
            "unit": "ns",
            "range": "± 6477.662924071579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2402014.6875,
            "unit": "ns",
            "range": "± 8861.817914551319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761958.3834134615,
            "unit": "ns",
            "range": "± 2607.2000230670797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 695905.0571986607,
            "unit": "ns",
            "range": "± 3369.2277073774476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3128000.9803921566,
            "unit": "ns",
            "range": "± 127682.88902205968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3205493.8775510206,
            "unit": "ns",
            "range": "± 119655.69252401391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3827142.5,
            "unit": "ns",
            "range": "± 134925.31721051826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3538536.274509804,
            "unit": "ns",
            "range": "± 142566.0184189877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5651389.285714285,
            "unit": "ns",
            "range": "± 156174.95730225052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240785.10638297873,
            "unit": "ns",
            "range": "± 8668.508189277269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236589.13043478262,
            "unit": "ns",
            "range": "± 8523.515921936063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207936.84210526315,
            "unit": "ns",
            "range": "± 14938.43431249897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3781590.909090909,
            "unit": "ns",
            "range": "± 88425.16830411118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3492545,
            "unit": "ns",
            "range": "± 78897.25146970384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22665.217391304348,
            "unit": "ns",
            "range": "± 2142.014804978986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91077.77777777778,
            "unit": "ns",
            "range": "± 5999.939658456457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72246.875,
            "unit": "ns",
            "range": "± 6860.5194390573815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95948.48484848485,
            "unit": "ns",
            "range": "± 21322.43411668758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5953.125,
            "unit": "ns",
            "range": "± 867.5983942379162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20444.68085106383,
            "unit": "ns",
            "range": "± 1738.1622368366134"
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
          "id": "26d069a674528cfe43ded5bc1c63450d0bade836",
          "message": "Merge pull request #3420 from greymistcube/fix/trie-value-resolve\n\n🐛 Fix `ITrie.Get()`",
          "timestamp": "2023-09-08T12:21:13+09:00",
          "tree_id": "cfd07e45b9754e4748b068efa5c64f79ca076066",
          "url": "https://github.com/planetarium/libplanet/commit/26d069a674528cfe43ded5bc1c63450d0bade836"
        },
        "date": 1694144048257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1254954.5454545454,
            "unit": "ns",
            "range": "± 96315.50225184922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2308656.0975609757,
            "unit": "ns",
            "range": "± 83136.18961914386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559735.7142857143,
            "unit": "ns",
            "range": "± 105070.2163356712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4380715,
            "unit": "ns",
            "range": "± 260276.07463086676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46071.794871794875,
            "unit": "ns",
            "range": "± 2285.1239663947213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7161175,
            "unit": "ns",
            "range": "± 9222.81016137312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19008807.14285714,
            "unit": "ns",
            "range": "± 267280.4734422559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47233814.28571428,
            "unit": "ns",
            "range": "± 701153.0062987381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94830813.33333333,
            "unit": "ns",
            "range": "± 1410435.6555266716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187039060,
            "unit": "ns",
            "range": "± 2041226.1814899396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4398921.770833333,
            "unit": "ns",
            "range": "± 16789.46676037121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1396065.4296875,
            "unit": "ns",
            "range": "± 3347.5640533765495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049773.032924107,
            "unit": "ns",
            "range": "± 2778.5648497437837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568018.2552083335,
            "unit": "ns",
            "range": "± 10237.275956543159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815869.2940848215,
            "unit": "ns",
            "range": "± 2851.7847575072856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766650.1236979166,
            "unit": "ns",
            "range": "± 2437.1138693642774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3080272.727272727,
            "unit": "ns",
            "range": "± 72262.74929079945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3243666.6666666665,
            "unit": "ns",
            "range": "± 54698.11522825818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3905546.153846154,
            "unit": "ns",
            "range": "± 47495.747447966605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3478297.727272727,
            "unit": "ns",
            "range": "± 126563.34839717731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5658129.72972973,
            "unit": "ns",
            "range": "± 174775.89915353007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237757.14285714287,
            "unit": "ns",
            "range": "± 7529.404543063764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227678.0487804878,
            "unit": "ns",
            "range": "± 7348.928908185258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199717.39130434784,
            "unit": "ns",
            "range": "± 4155.790284094651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3806306.6666666665,
            "unit": "ns",
            "range": "± 32220.52288896155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3462378.5714285714,
            "unit": "ns",
            "range": "± 28813.356373295104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16575.78947368421,
            "unit": "ns",
            "range": "± 1104.7976409947626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72435.21126760563,
            "unit": "ns",
            "range": "± 3300.696835152467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66527.65957446808,
            "unit": "ns",
            "range": "± 2559.696154493781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67372.22222222222,
            "unit": "ns",
            "range": "± 9816.759663307495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4470.212765957447,
            "unit": "ns",
            "range": "± 426.74809049192453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16107.954545454546,
            "unit": "ns",
            "range": "± 904.4235594684773"
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
          "id": "7fbe52e2b3351d4811ecc6da2a09a2f45f4aabeb",
          "message": "Merge pull request #3421 from greymistcube/release/3.3.1\n\n🚀 Release 3.3.1",
          "timestamp": "2023-09-08T12:30:12+09:00",
          "tree_id": "fab2e0507c99a95eceeee8893e42c3adbf3b822b",
          "url": "https://github.com/planetarium/libplanet/commit/7fbe52e2b3351d4811ecc6da2a09a2f45f4aabeb"
        },
        "date": 1694145095196,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1727346.3157894737,
            "unit": "ns",
            "range": "± 136950.8863747708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3316983.1325301207,
            "unit": "ns",
            "range": "± 175942.5632576647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174815.1515151514,
            "unit": "ns",
            "range": "± 168452.98403208397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5770375,
            "unit": "ns",
            "range": "± 298321.03406747675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58905.31914893617,
            "unit": "ns",
            "range": "± 8908.539059611212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9231883.157894736,
            "unit": "ns",
            "range": "± 613704.8444458498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25335800,
            "unit": "ns",
            "range": "± 414409.6954877935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65005205.2631579,
            "unit": "ns",
            "range": "± 1406994.383418342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131480986.66666667,
            "unit": "ns",
            "range": "± 2000180.6150112213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266137564.2857143,
            "unit": "ns",
            "range": "± 3532196.6949340887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5420088.28125,
            "unit": "ns",
            "range": "± 100556.8610999704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1807789.4401041667,
            "unit": "ns",
            "range": "± 22844.05304731757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346266.782924107,
            "unit": "ns",
            "range": "± 18425.986202203814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3207682.734375,
            "unit": "ns",
            "range": "± 37745.54263711247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1070130.020680147,
            "unit": "ns",
            "range": "± 21525.82698298556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967507.1223958334,
            "unit": "ns",
            "range": "± 7004.1224188287815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3915149.4845360825,
            "unit": "ns",
            "range": "± 267411.9220742408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4155497.8947368423,
            "unit": "ns",
            "range": "± 270204.4107940172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5282066.666666667,
            "unit": "ns",
            "range": "± 176186.06398593826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4567705.405405405,
            "unit": "ns",
            "range": "± 226628.86254897976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7547925,
            "unit": "ns",
            "range": "± 238602.73253749416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328862.36559139786,
            "unit": "ns",
            "range": "± 23969.813053534897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325155.4347826087,
            "unit": "ns",
            "range": "± 32084.823580697637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292123.65591397847,
            "unit": "ns",
            "range": "± 24576.753764878074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5269604.651162791,
            "unit": "ns",
            "range": "± 192010.4150864248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4644675.757575758,
            "unit": "ns",
            "range": "± 217080.06325962287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23631.86813186813,
            "unit": "ns",
            "range": "± 5010.475229642596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98724.48979591837,
            "unit": "ns",
            "range": "± 16867.641572289678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117047.87234042553,
            "unit": "ns",
            "range": "± 18145.87680126683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114797.91666666667,
            "unit": "ns",
            "range": "± 20690.908144026966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8953.60824742268,
            "unit": "ns",
            "range": "± 1110.4674180712993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21290.36144578313,
            "unit": "ns",
            "range": "± 2618.7231322485186"
          }
        ]
      }
    ]
  }
}