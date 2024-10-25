window.BENCHMARK_DATA = {
  "lastUpdate": 1729860153978,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "a50194312c8ae642100951cc0400ea684485dfb4",
          "message": "refactor: Refactor GasTracer",
          "timestamp": "2024-10-25T15:01:52+09:00",
          "tree_id": "c0767e988107193ca2cff5208a057ccbec773e0f",
          "url": "https://github.com/planetarium/libplanet/commit/a50194312c8ae642100951cc0400ea684485dfb4"
        },
        "date": 1729838060072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10577375.357142856,
            "unit": "ns",
            "range": "± 86255.8799811594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26347080.714285713,
            "unit": "ns",
            "range": "± 217782.61426316085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66415917.071428575,
            "unit": "ns",
            "range": "± 74204.44542091312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137017749.76923078,
            "unit": "ns",
            "range": "± 198100.71194813758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269931828.06666666,
            "unit": "ns",
            "range": "± 429621.95725203183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13494.576923076924,
            "unit": "ns",
            "range": "± 469.47537262999526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54057.45161290323,
            "unit": "ns",
            "range": "± 2440.5513598863795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105043.36507936507,
            "unit": "ns",
            "range": "± 4120.848406623784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90615.38095238095,
            "unit": "ns",
            "range": "± 2072.2390421037453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2868599.255319149,
            "unit": "ns",
            "range": "± 162651.59568454843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740895.76,
            "unit": "ns",
            "range": "± 171345.90590364815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5251.627659574468,
            "unit": "ns",
            "range": "± 679.8757671785443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26934.68888888889,
            "unit": "ns",
            "range": "± 1805.488311391626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23197.127659574468,
            "unit": "ns",
            "range": "± 1947.3229279393631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31766.680412371134,
            "unit": "ns",
            "range": "± 5768.688991274345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1131.0106382978724,
            "unit": "ns",
            "range": "± 244.78072235400265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4985.815217391304,
            "unit": "ns",
            "range": "± 719.2854654897368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687087.5108695652,
            "unit": "ns",
            "range": "± 56049.664433712256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1259501.5476190476,
            "unit": "ns",
            "range": "± 45751.71636188803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1047398.25,
            "unit": "ns",
            "range": "± 54229.41949226779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8771111.99,
            "unit": "ns",
            "range": "± 1352634.9076278878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2132030.388888889,
            "unit": "ns",
            "range": "± 89931.00700430399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259355,
            "unit": "ns",
            "range": "± 80557.23884201841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2552189.423076923,
            "unit": "ns",
            "range": "± 63452.025828131336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2298398.867924528,
            "unit": "ns",
            "range": "± 95044.16550539457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2881775.0625,
            "unit": "ns",
            "range": "± 85120.26697331764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037154.5356770833,
            "unit": "ns",
            "range": "± 45883.148315700564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913195.6650390625,
            "unit": "ns",
            "range": "± 5159.919315756196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614744.8029296875,
            "unit": "ns",
            "range": "± 4726.107987844922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621268.8264973958,
            "unit": "ns",
            "range": "± 7687.113688506459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463491.1473214286,
            "unit": "ns",
            "range": "± 513.4946478407841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422825.9219726563,
            "unit": "ns",
            "range": "± 1102.1591303458313"
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
          "id": "680df7e0f9b05df884b769d4084e1af840ce65b5",
          "message": "test: Remove test code for GasTracer",
          "timestamp": "2024-10-25T15:55:40+09:00",
          "tree_id": "5a70baf4dd1ff61cc4e5cca3cd162c6123893c7c",
          "url": "https://github.com/planetarium/libplanet/commit/680df7e0f9b05df884b769d4084e1af840ce65b5"
        },
        "date": 1729839832684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10542702.23076923,
            "unit": "ns",
            "range": "± 103500.92175849921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26233734.785714287,
            "unit": "ns",
            "range": "± 212850.23225667333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67265144.06666666,
            "unit": "ns",
            "range": "± 146764.77408204047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134273294.92857143,
            "unit": "ns",
            "range": "± 161709.46679840758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273846432.6666667,
            "unit": "ns",
            "range": "± 608264.8484299614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12928.857142857143,
            "unit": "ns",
            "range": "± 423.79565781385907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54164.104651162794,
            "unit": "ns",
            "range": "± 2981.2481201042574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106606.39024390244,
            "unit": "ns",
            "range": "± 3700.3412199285676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92320.86111111111,
            "unit": "ns",
            "range": "± 3066.020008813453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838375.73,
            "unit": "ns",
            "range": "± 182244.85553764328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2741847.86,
            "unit": "ns",
            "range": "± 163919.80874762818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4961.539325842697,
            "unit": "ns",
            "range": "± 531.6774495572688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26965.2,
            "unit": "ns",
            "range": "± 1726.6163340964142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22904.705263157895,
            "unit": "ns",
            "range": "± 1775.2028944493545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30111.933333333334,
            "unit": "ns",
            "range": "± 4080.9607174693665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1360.7263157894736,
            "unit": "ns",
            "range": "± 200.06708673274824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4915.2444444444445,
            "unit": "ns",
            "range": "± 627.9330022429682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681478.2637362637,
            "unit": "ns",
            "range": "± 46544.863737840235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1287411.75,
            "unit": "ns",
            "range": "± 22141.645285148377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1022742.5645161291,
            "unit": "ns",
            "range": "± 44316.63963516578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8656565.626262626,
            "unit": "ns",
            "range": "± 1124255.5328161595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121151,
            "unit": "ns",
            "range": "± 57205.77936537532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2231696.3571428573,
            "unit": "ns",
            "range": "± 17673.353099672804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2522150.3333333335,
            "unit": "ns",
            "range": "± 44732.58114245887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2271085.084745763,
            "unit": "ns",
            "range": "± 99824.54828905256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2802714.5263157897,
            "unit": "ns",
            "range": "± 61827.0244044431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030749.000558036,
            "unit": "ns",
            "range": "± 38420.1388934979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925082.3408854167,
            "unit": "ns",
            "range": "± 5486.68715190018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615741.9813802083,
            "unit": "ns",
            "range": "± 5326.899094683254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637494.8770833334,
            "unit": "ns",
            "range": "± 16779.956214126603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468986.10465494794,
            "unit": "ns",
            "range": "± 689.1824594457405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426752.09228515625,
            "unit": "ns",
            "range": "± 338.25162174295434"
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
          "id": "efd4aa4a416ab1b5d56f368569b20f7f8ef1bed1",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T16:07:57+09:00",
          "tree_id": "508f630c27766e3fe2c0aaaff482bb711bac9420",
          "url": "https://github.com/planetarium/libplanet/commit/efd4aa4a416ab1b5d56f368569b20f7f8ef1bed1"
        },
        "date": 1729840935128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10703006.692307692,
            "unit": "ns",
            "range": "± 141056.83684327666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25978547.92857143,
            "unit": "ns",
            "range": "± 89781.18523941698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66207419.6,
            "unit": "ns",
            "range": "± 106630.61593101942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135714011.42857143,
            "unit": "ns",
            "range": "± 168147.9788184362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270163041.26666665,
            "unit": "ns",
            "range": "± 573638.7978518571"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12530.130434782608,
            "unit": "ns",
            "range": "± 481.5577781739246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 55672.32530120482,
            "unit": "ns",
            "range": "± 2973.4039092465687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 109559.24528301887,
            "unit": "ns",
            "range": "± 4400.549501988186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89370.4705882353,
            "unit": "ns",
            "range": "± 1814.870385098033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2910480.336734694,
            "unit": "ns",
            "range": "± 172288.7795714673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2796899.8208955224,
            "unit": "ns",
            "range": "± 131572.72012452825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5182.880434782609,
            "unit": "ns",
            "range": "± 669.8975293526436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26273.2125,
            "unit": "ns",
            "range": "± 1378.3500106070687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22650.36559139785,
            "unit": "ns",
            "range": "± 1714.851697130398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30323.44680851064,
            "unit": "ns",
            "range": "± 4977.840339281363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1412.978494623656,
            "unit": "ns",
            "range": "± 334.91916540947426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5136.478723404255,
            "unit": "ns",
            "range": "± 789.2228207754521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688506.4222222222,
            "unit": "ns",
            "range": "± 45848.65363957047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1292731.6326530613,
            "unit": "ns",
            "range": "± 50662.913851296704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1063880.5647058825,
            "unit": "ns",
            "range": "± 57124.696588638246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8734780.71,
            "unit": "ns",
            "range": "± 1344801.6119680887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2131061.3076923075,
            "unit": "ns",
            "range": "± 25132.122106262785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2250806.5,
            "unit": "ns",
            "range": "± 39804.617637037656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2542672.8571428573,
            "unit": "ns",
            "range": "± 35324.87612882009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263818.254237288,
            "unit": "ns",
            "range": "± 95467.92182529766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2704651,
            "unit": "ns",
            "range": "± 37428.20311387301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036409.466703869,
            "unit": "ns",
            "range": "± 70798.44492874142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918744.4511021206,
            "unit": "ns",
            "range": "± 6781.556866719416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617144.38671875,
            "unit": "ns",
            "range": "± 8921.727043704843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642577.7770833333,
            "unit": "ns",
            "range": "± 14658.037983456674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467852.6785714286,
            "unit": "ns",
            "range": "± 962.6998490157738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425071.9644856771,
            "unit": "ns",
            "range": "± 1943.6268607257657"
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
          "id": "7b8b6ad6d76eb3652d03a0d895253c358a074612",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T16:11:34+09:00",
          "tree_id": "071485a386c218869c7e5b9a66d87d7e907bbd39",
          "url": "https://github.com/planetarium/libplanet/commit/7b8b6ad6d76eb3652d03a0d895253c358a074612"
        },
        "date": 1729842015608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10902913.285714285,
            "unit": "ns",
            "range": "± 181348.04772694307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26168946.64285714,
            "unit": "ns",
            "range": "± 113406.43652172017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66695417,
            "unit": "ns",
            "range": "± 80203.62692259286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134770417,
            "unit": "ns",
            "range": "± 237483.4126032104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269952073.6923077,
            "unit": "ns",
            "range": "± 274158.63309356273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13022.323529411764,
            "unit": "ns",
            "range": "± 418.38772221022055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54251.7,
            "unit": "ns",
            "range": "± 3051.5756381385827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105897.76595744681,
            "unit": "ns",
            "range": "± 4112.230671570749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90687.38235294117,
            "unit": "ns",
            "range": "± 2907.7713194723224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2896300.9285714286,
            "unit": "ns",
            "range": "± 140840.4683711142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2744381.6836734693,
            "unit": "ns",
            "range": "± 159899.847633216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5278.692307692308,
            "unit": "ns",
            "range": "± 799.6748602096243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27157.032608695652,
            "unit": "ns",
            "range": "± 2282.2362488638823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22999.021276595744,
            "unit": "ns",
            "range": "± 1829.824775550888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 32451.04081632653,
            "unit": "ns",
            "range": "± 6093.467159092222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1151.178947368421,
            "unit": "ns",
            "range": "± 245.67865098960405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5045.134408602151,
            "unit": "ns",
            "range": "± 725.1247686484904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 699438.2978723404,
            "unit": "ns",
            "range": "± 55382.1002702175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1288793.9523809524,
            "unit": "ns",
            "range": "± 55108.15481057888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1045614.1081081082,
            "unit": "ns",
            "range": "± 51809.75273598104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8794424.08,
            "unit": "ns",
            "range": "± 1331625.688167629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119381.5833333335,
            "unit": "ns",
            "range": "± 26588.227933218637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262095.85,
            "unit": "ns",
            "range": "± 79766.11734910558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2598400.4285714286,
            "unit": "ns",
            "range": "± 72395.69490879994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2278381.947368421,
            "unit": "ns",
            "range": "± 98694.31747236752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2937653.652173913,
            "unit": "ns",
            "range": "± 74115.31781782463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3025046.955078125,
            "unit": "ns",
            "range": "± 68118.25128577865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918928.4971354167,
            "unit": "ns",
            "range": "± 3863.3951249996203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612076.4544921875,
            "unit": "ns",
            "range": "± 5903.344524199572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637429.5145833334,
            "unit": "ns",
            "range": "± 16750.585707960025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456008.9250325521,
            "unit": "ns",
            "range": "± 1135.087513219214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420679.64817708335,
            "unit": "ns",
            "range": "± 1301.0011560719324"
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
          "id": "129b0cbc78441199ea4837efb2d0d8d17f2c2f2a",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T19:56:42+09:00",
          "tree_id": "ead3a5e3d24d257b130cc5f02db9d2b6c262792c",
          "url": "https://github.com/planetarium/libplanet/commit/129b0cbc78441199ea4837efb2d0d8d17f2c2f2a"
        },
        "date": 1729854304398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10591768.923076924,
            "unit": "ns",
            "range": "± 133888.93814741974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26233940.85714286,
            "unit": "ns",
            "range": "± 235514.81121507054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66594753.13333333,
            "unit": "ns",
            "range": "± 179940.30377714027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134194515.28571428,
            "unit": "ns",
            "range": "± 208415.57553061683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270676199.78571427,
            "unit": "ns",
            "range": "± 350146.6700675763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12899.166666666666,
            "unit": "ns",
            "range": "± 426.26047897378345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 55028.40845070423,
            "unit": "ns",
            "range": "± 2686.6132242098033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105119.94444444444,
            "unit": "ns",
            "range": "± 3766.422552756388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91237.04,
            "unit": "ns",
            "range": "± 2134.922939280635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2886954.4415584416,
            "unit": "ns",
            "range": "± 147770.82165276757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2803026.262626263,
            "unit": "ns",
            "range": "± 162362.91524674016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5178.666666666667,
            "unit": "ns",
            "range": "± 720.7583530620868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27128.827956989247,
            "unit": "ns",
            "range": "± 2371.509804468067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23875.28125,
            "unit": "ns",
            "range": "± 1885.433350735525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30418.72340425532,
            "unit": "ns",
            "range": "± 5091.4859237671935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1380.8351648351647,
            "unit": "ns",
            "range": "± 256.8784089251507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4866.582417582417,
            "unit": "ns",
            "range": "± 600.7410805910029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 667070.65,
            "unit": "ns",
            "range": "± 34584.1532204739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1281970.8793103448,
            "unit": "ns",
            "range": "± 55490.38451905787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1035201.6506024096,
            "unit": "ns",
            "range": "± 53580.00605555227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9013295.93,
            "unit": "ns",
            "range": "± 1312480.223110908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2091670.1666666667,
            "unit": "ns",
            "range": "± 19993.506001760277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2264923.8604651163,
            "unit": "ns",
            "range": "± 83352.1410358833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2518993.4166666665,
            "unit": "ns",
            "range": "± 24556.07335155541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2313582.380952381,
            "unit": "ns",
            "range": "± 106035.12369621631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2727784.6071428573,
            "unit": "ns",
            "range": "± 75491.18053140468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030585.5361979166,
            "unit": "ns",
            "range": "± 49013.17762203575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 910869.6156901042,
            "unit": "ns",
            "range": "± 7541.456102030011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616693.23203125,
            "unit": "ns",
            "range": "± 5015.345911205591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1634915.24609375,
            "unit": "ns",
            "range": "± 12048.713356671631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468033.2336425781,
            "unit": "ns",
            "range": "± 831.9109678235046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417372.20675223216,
            "unit": "ns",
            "range": "± 516.7960673211965"
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
          "id": "7d041d1c7292aeae445b6efa205ac6c0a2d5641d",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T21:34:03+09:00",
          "tree_id": "d5cab7dceccae85dcc2ab6f675b5d666734f3e90",
          "url": "https://github.com/planetarium/libplanet/commit/7d041d1c7292aeae445b6efa205ac6c0a2d5641d"
        },
        "date": 1729860141205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10650831.61904762,
            "unit": "ns",
            "range": "± 250949.72286246426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26011301,
            "unit": "ns",
            "range": "± 128541.29640703023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66431530.071428575,
            "unit": "ns",
            "range": "± 61974.03061638528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133903550.92857143,
            "unit": "ns",
            "range": "± 246045.87542772284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268979979.5,
            "unit": "ns",
            "range": "± 395050.530863458"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12678.19512195122,
            "unit": "ns",
            "range": "± 453.54830059830425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54152.64367816092,
            "unit": "ns",
            "range": "± 3413.461058048593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105570.76470588235,
            "unit": "ns",
            "range": "± 4740.466927432257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93117.22222222222,
            "unit": "ns",
            "range": "± 3096.5882987674504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2843173.3333333335,
            "unit": "ns",
            "range": "± 179362.35342371557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2729240.43877551,
            "unit": "ns",
            "range": "± 157934.6006142309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5526.791666666667,
            "unit": "ns",
            "range": "± 1099.9156897514479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27545.719101123595,
            "unit": "ns",
            "range": "± 1927.4052092525142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22527.1,
            "unit": "ns",
            "range": "± 1421.166912921217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31031.597826086956,
            "unit": "ns",
            "range": "± 4687.807543164871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1280.3333333333333,
            "unit": "ns",
            "range": "± 320.5274638349477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4858.311827956989,
            "unit": "ns",
            "range": "± 747.1268441647793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 673495.5285714286,
            "unit": "ns",
            "range": "± 32548.700815463195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272502.92,
            "unit": "ns",
            "range": "± 48913.140828073374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1042541.4625,
            "unit": "ns",
            "range": "± 52364.717681825714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8735773.23,
            "unit": "ns",
            "range": "± 1296631.3459342131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118147.6071428573,
            "unit": "ns",
            "range": "± 57933.97446860379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2236774.285714286,
            "unit": "ns",
            "range": "± 33828.20464193604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2526458.5384615385,
            "unit": "ns",
            "range": "± 32989.322453422676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2259796.3103448274,
            "unit": "ns",
            "range": "± 98122.34000456864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2806444.275862069,
            "unit": "ns",
            "range": "± 75582.82644693102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3009127.6806066176,
            "unit": "ns",
            "range": "± 59015.77074397584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918402.0367838541,
            "unit": "ns",
            "range": "± 6623.073331264898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612439.3140625,
            "unit": "ns",
            "range": "± 5998.12979623413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636136.6195591518,
            "unit": "ns",
            "range": "± 8220.46572619782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466890.4107747396,
            "unit": "ns",
            "range": "± 456.62194342742697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419243.5898763021,
            "unit": "ns",
            "range": "± 1506.4697738432799"
          }
        ]
      }
    ]
  }
}