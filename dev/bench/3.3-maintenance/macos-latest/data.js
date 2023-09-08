window.BENCHMARK_DATA = {
  "lastUpdate": 1694144758372,
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
        "date": 1694089527799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9253463.51724138,
            "unit": "ns",
            "range": "± 1627854.426295816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20342038.546511628,
            "unit": "ns",
            "range": "± 738001.3614305404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59286008.62222222,
            "unit": "ns",
            "range": "± 13542738.982698716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141333388.61,
            "unit": "ns",
            "range": "± 41953713.972555816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298997026.91,
            "unit": "ns",
            "range": "± 67420580.41991249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73309.06741573034,
            "unit": "ns",
            "range": "± 10968.704272940431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336205.48780487804,
            "unit": "ns",
            "range": "± 36875.32725897683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351061.1091954023,
            "unit": "ns",
            "range": "± 46992.53239570916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304792.8,
            "unit": "ns",
            "range": "± 23224.92406221182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4505819.126373626,
            "unit": "ns",
            "range": "± 437667.997344122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4155729.835164835,
            "unit": "ns",
            "range": "± 538723.9735755483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28331.29761904762,
            "unit": "ns",
            "range": "± 3556.246812621899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126592.96590909091,
            "unit": "ns",
            "range": "± 16490.668639998403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117274.31764705882,
            "unit": "ns",
            "range": "± 9459.156923083483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121626.90659340659,
            "unit": "ns",
            "range": "± 17972.768967386943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8973.613402061856,
            "unit": "ns",
            "range": "± 1198.121175670202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26407.91304347826,
            "unit": "ns",
            "range": "± 3859.568146576732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653795.231958763,
            "unit": "ns",
            "range": "± 215866.24918045878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198737.554347826,
            "unit": "ns",
            "range": "± 377213.8178172001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285904.0268817204,
            "unit": "ns",
            "range": "± 459632.591907611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5868818.714285715,
            "unit": "ns",
            "range": "± 646179.6949258927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3495913.8260869565,
            "unit": "ns",
            "range": "± 412834.6900061379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3907153.2717391304,
            "unit": "ns",
            "range": "± 440261.5068423302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4901408.302197802,
            "unit": "ns",
            "range": "± 591982.1366776238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4110788.811764706,
            "unit": "ns",
            "range": "± 444399.4338171593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8673949.811827958,
            "unit": "ns",
            "range": "± 2382170.7173236655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7801156.560647552,
            "unit": "ns",
            "range": "± 1228178.279444758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862359.7694196429,
            "unit": "ns",
            "range": "± 60491.736011667344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081525.4985351562,
            "unit": "ns",
            "range": "± 20452.173326523196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190955.81875,
            "unit": "ns",
            "range": "± 58493.670844690554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 921158.1301269531,
            "unit": "ns",
            "range": "± 17369.548816823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1033749.3012695312,
            "unit": "ns",
            "range": "± 157241.6012628967"
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
        "date": 1694137106967,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9417575.727272727,
            "unit": "ns",
            "range": "± 516685.4213739803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22611822.5,
            "unit": "ns",
            "range": "± 1031234.5549599995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54500724.18181818,
            "unit": "ns",
            "range": "± 1868716.4453740767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114767364.17582418,
            "unit": "ns",
            "range": "± 8248307.160981945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224418926.70833334,
            "unit": "ns",
            "range": "± 4922811.440548493"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79400.88157894737,
            "unit": "ns",
            "range": "± 4053.266971936276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353513.54,
            "unit": "ns",
            "range": "± 47379.06054694959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372508.89898989897,
            "unit": "ns",
            "range": "± 66177.55318351563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328994.967032967,
            "unit": "ns",
            "range": "± 32218.844590446522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4445713.048192771,
            "unit": "ns",
            "range": "± 237223.2283596779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4053677.709090909,
            "unit": "ns",
            "range": "± 162350.72190929536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24127.527472527472,
            "unit": "ns",
            "range": "± 3942.201137381273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100974.79787234042,
            "unit": "ns",
            "range": "± 18099.17018271255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111384.34090909091,
            "unit": "ns",
            "range": "± 9697.435003781162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113307.48947368421,
            "unit": "ns",
            "range": "± 16283.37477599876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8364.159574468085,
            "unit": "ns",
            "range": "± 775.2681610733221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21199.317204301075,
            "unit": "ns",
            "range": "± 2670.389537397105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575588.6894736842,
            "unit": "ns",
            "range": "± 149891.22974615553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3008242.752631579,
            "unit": "ns",
            "range": "± 210692.30898160316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1978696.0515463918,
            "unit": "ns",
            "range": "± 186871.21817836494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5543673.45,
            "unit": "ns",
            "range": "± 244010.36927837788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3568590.6767676766,
            "unit": "ns",
            "range": "± 289326.23885001946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3717958.8061224488,
            "unit": "ns",
            "range": "± 311569.44559445203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4663337.05050505,
            "unit": "ns",
            "range": "± 325858.14783734846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4021873.5824742266,
            "unit": "ns",
            "range": "± 322011.28253359476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7453739.625,
            "unit": "ns",
            "range": "± 531220.7839492619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6037113.814583333,
            "unit": "ns",
            "range": "± 77017.7976480376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1793733.4421037945,
            "unit": "ns",
            "range": "± 12326.700669995362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062496.0611979167,
            "unit": "ns",
            "range": "± 14295.26362125764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3018611.48828125,
            "unit": "ns",
            "range": "± 47155.02374136976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817390.1220703125,
            "unit": "ns",
            "range": "± 6708.535707070609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760895.8376953125,
            "unit": "ns",
            "range": "± 13740.216744863661"
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
        "date": 1694144478426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9002606.525423728,
            "unit": "ns",
            "range": "± 398741.95354892407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21162325.416666668,
            "unit": "ns",
            "range": "± 529649.459244091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51900064.4,
            "unit": "ns",
            "range": "± 935354.8189995525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106305621.36666666,
            "unit": "ns",
            "range": "± 1811644.4284693738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215199985.66666666,
            "unit": "ns",
            "range": "± 2798135.165290184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70023.51063829787,
            "unit": "ns",
            "range": "± 7444.8812677761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325546.8510638298,
            "unit": "ns",
            "range": "± 29217.939506942355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311424.3947368421,
            "unit": "ns",
            "range": "± 27515.649523720247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304044.85365853657,
            "unit": "ns",
            "range": "± 9840.253992049635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4179488.1666666665,
            "unit": "ns",
            "range": "± 130004.38994671169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3644801.68,
            "unit": "ns",
            "range": "± 96551.26860884152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21837.032258064515,
            "unit": "ns",
            "range": "± 3523.7803978719176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103680.3947368421,
            "unit": "ns",
            "range": "± 16392.861265751122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104583.14893617021,
            "unit": "ns",
            "range": "± 14094.856519127245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106899.5,
            "unit": "ns",
            "range": "± 14581.340584087824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7282.876344086021,
            "unit": "ns",
            "range": "± 1233.8163568691223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19778.521505376346,
            "unit": "ns",
            "range": "± 3315.441648652476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668688.4329896907,
            "unit": "ns",
            "range": "± 189533.3388190423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3065270.7395833335,
            "unit": "ns",
            "range": "± 228129.3391949421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993797.306122449,
            "unit": "ns",
            "range": "± 191709.3066193779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5647437.242268041,
            "unit": "ns",
            "range": "± 341081.1919453184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3426934.1210526316,
            "unit": "ns",
            "range": "± 235753.62363047025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579730.277777778,
            "unit": "ns",
            "range": "± 175524.53893058654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4448437.547619048,
            "unit": "ns",
            "range": "± 203122.8490513155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3940101.87628866,
            "unit": "ns",
            "range": "± 238099.7665503658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6809251.818181818,
            "unit": "ns",
            "range": "± 252536.8218684318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5802361.2425986845,
            "unit": "ns",
            "range": "± 114684.99345708884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1725743.1041666667,
            "unit": "ns",
            "range": "± 29650.46836469581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073107.4787176724,
            "unit": "ns",
            "range": "± 31142.61521414718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2795748.948982008,
            "unit": "ns",
            "range": "± 87990.31278335265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828223.7595052083,
            "unit": "ns",
            "range": "± 14713.501309823543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812637.5704427083,
            "unit": "ns",
            "range": "± 14130.17403534703"
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
        "date": 1694144674965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7592837.583333333,
            "unit": "ns",
            "range": "± 81451.01040553967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18602770.055555556,
            "unit": "ns",
            "range": "± 388908.51507206104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45828516.428571425,
            "unit": "ns",
            "range": "± 1002624.5083072511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91593705.71428572,
            "unit": "ns",
            "range": "± 704485.8811374629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191171044.2142857,
            "unit": "ns",
            "range": "± 2893349.074570351"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53496.8064516129,
            "unit": "ns",
            "range": "± 6438.646494374662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295823.26136363635,
            "unit": "ns",
            "range": "± 16160.744658922866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275081.9696969697,
            "unit": "ns",
            "range": "± 12789.097335043683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249451.16393442624,
            "unit": "ns",
            "range": "± 10547.40992563313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3849859.8181818184,
            "unit": "ns",
            "range": "± 90548.91163429765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3459845.3333333335,
            "unit": "ns",
            "range": "± 87226.09725737832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16585.080459770114,
            "unit": "ns",
            "range": "± 1756.9065058207095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81008.55494505494,
            "unit": "ns",
            "range": "± 6336.866544914656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73253.71875,
            "unit": "ns",
            "range": "± 7776.134548060461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79581.43298969071,
            "unit": "ns",
            "range": "± 11594.525234555043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4310.011363636364,
            "unit": "ns",
            "range": "± 534.1253564671009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16198.045977011494,
            "unit": "ns",
            "range": "± 1699.1235285591792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520869.25,
            "unit": "ns",
            "range": "± 145680.50639742296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2724761.391891892,
            "unit": "ns",
            "range": "± 136408.0096779127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1780284.4484536082,
            "unit": "ns",
            "range": "± 121621.17498373546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5330949.514285714,
            "unit": "ns",
            "range": "± 257176.62565760175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3071869.342857143,
            "unit": "ns",
            "range": "± 142251.98698053302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3208493.8571428573,
            "unit": "ns",
            "range": "± 91798.73922648081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4106752.102040816,
            "unit": "ns",
            "range": "± 163719.3685930599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3540833.0793650793,
            "unit": "ns",
            "range": "± 149197.0834312683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6305053.178571428,
            "unit": "ns",
            "range": "± 241093.30744884248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4979106.069010417,
            "unit": "ns",
            "range": "± 20530.113093555687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593576.2826450893,
            "unit": "ns",
            "range": "± 8359.028375154123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 933597.8500600961,
            "unit": "ns",
            "range": "± 2902.6324050047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2325513.82734375,
            "unit": "ns",
            "range": "± 10961.500024522602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 755368.3596354167,
            "unit": "ns",
            "range": "± 5999.6928869967505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 669220.9375651042,
            "unit": "ns",
            "range": "± 6034.07662515416"
          }
        ]
      }
    ]
  }
}