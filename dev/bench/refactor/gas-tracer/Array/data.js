window.BENCHMARK_DATA = {
  "lastUpdate": 1729840981194,
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
      }
    ]
  }
}