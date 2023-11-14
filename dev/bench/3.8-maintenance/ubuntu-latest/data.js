window.BENCHMARK_DATA = {
  "lastUpdate": 1699929997200,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "630d3e5a289c2ac575750f4fd85df62a6da710f1",
          "message": "Merge pull request #3466 from planetarium/use-nodejs-18\n\nUse Nodejs 18",
          "timestamp": "2023-10-30T14:38:44+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/630d3e5a289c2ac575750f4fd85df62a6da710f1"
        },
        "date": 1698993175225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8210760.533333333,
            "unit": "ns",
            "range": "± 83576.63753950337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21630111.666666668,
            "unit": "ns",
            "range": "± 268939.5851556008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54401764.5,
            "unit": "ns",
            "range": "± 1393055.0389393934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111110103.46666667,
            "unit": "ns",
            "range": "± 1595520.5406123227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218066839.4,
            "unit": "ns",
            "range": "± 3007846.152033041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360795.78125,
            "unit": "ns",
            "range": "± 83258.33680288853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2688726.876923077,
            "unit": "ns",
            "range": "± 124931.59575775203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075061.1265822784,
            "unit": "ns",
            "range": "± 103894.99939514462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9215805.35483871,
            "unit": "ns",
            "range": "± 416792.03551632236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400219.727272727,
            "unit": "ns",
            "range": "± 160091.56023404427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3541487.3684210526,
            "unit": "ns",
            "range": "± 77609.5664816383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4260137.212121212,
            "unit": "ns",
            "range": "± 128916.04249102339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4262521.844444444,
            "unit": "ns",
            "range": "± 158492.82418355666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10502516.352941176,
            "unit": "ns",
            "range": "± 289140.36741776083"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49931.06024096385,
            "unit": "ns",
            "range": "± 2613.7213091094136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5243120.221540178,
            "unit": "ns",
            "range": "± 8373.145711664783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1626215.0333333334,
            "unit": "ns",
            "range": "± 6931.348149542424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130702.4247395834,
            "unit": "ns",
            "range": "± 2494.9583576822497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595323.2887834823,
            "unit": "ns",
            "range": "± 2350.846075144634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825608.6228376116,
            "unit": "ns",
            "range": "± 940.0074436394192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757383.8711588542,
            "unit": "ns",
            "range": "± 993.2819585416956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270709.45652173914,
            "unit": "ns",
            "range": "± 9509.391488199726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262302.7291666667,
            "unit": "ns",
            "range": "± 10365.962468763431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226627.38461538462,
            "unit": "ns",
            "range": "± 3480.412991261754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4360772.681818182,
            "unit": "ns",
            "range": "± 101912.4771946083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4050107.0625,
            "unit": "ns",
            "range": "± 73649.3458196507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19731.191489361703,
            "unit": "ns",
            "range": "± 1385.933863001753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84446.85333333333,
            "unit": "ns",
            "range": "± 4284.673738543667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72270.82608695653,
            "unit": "ns",
            "range": "± 1583.3317188813623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80749.19318181818,
            "unit": "ns",
            "range": "± 6654.785810275386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4905.571428571428,
            "unit": "ns",
            "range": "± 459.8355054402521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20155.635416666668,
            "unit": "ns",
            "range": "± 1687.534770759385"
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
          "id": "e96f2e6fbed9f95412b2b05e7a210528e095f61b",
          "message": "Merge pull request #3479 from greymistcube/prepare/3.8.0\n\n🔧 Prepare 3.8.0",
          "timestamp": "2023-11-03T16:21:19+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/planetarium/libplanet/commit/e96f2e6fbed9f95412b2b05e7a210528e095f61b"
        },
        "date": 1698996728828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5576742.214285715,
            "unit": "ns",
            "range": "± 51241.75424274257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14424440.1,
            "unit": "ns",
            "range": "± 155961.12695192444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36490949.071428575,
            "unit": "ns",
            "range": "± 224011.36809742294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73948159.7,
            "unit": "ns",
            "range": "± 178665.6246776563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146965500,
            "unit": "ns",
            "range": "± 857986.0177989051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070617.125,
            "unit": "ns",
            "range": "± 101500.79104947124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2019801.6851851852,
            "unit": "ns",
            "range": "± 83905.49639625997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1503030.418367347,
            "unit": "ns",
            "range": "± 105896.96579621054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6327808.201754386,
            "unit": "ns",
            "range": "± 271758.44362023345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2483641.035714286,
            "unit": "ns",
            "range": "± 61133.804076996574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621663.6923076925,
            "unit": "ns",
            "range": "± 55836.47124363732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153260.153846154,
            "unit": "ns",
            "range": "± 41916.21512781212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3056583.198412698,
            "unit": "ns",
            "range": "± 140088.34647045747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7457877.608108108,
            "unit": "ns",
            "range": "± 182544.37326271352"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42423.530927835054,
            "unit": "ns",
            "range": "± 5549.249550340133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3885291.264266304,
            "unit": "ns",
            "range": "± 94284.98369841522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193782.1243024555,
            "unit": "ns",
            "range": "± 2938.7371833990946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778308.0723470052,
            "unit": "ns",
            "range": "± 3211.665161646263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929472.0135967548,
            "unit": "ns",
            "range": "± 6983.91479117071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633595.720703125,
            "unit": "ns",
            "range": "± 1316.2117327268315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583056.4682617188,
            "unit": "ns",
            "range": "± 1678.6566412129541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214957.10714285713,
            "unit": "ns",
            "range": "± 9246.245049509796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208832.3924731183,
            "unit": "ns",
            "range": "± 19799.1735886289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167393.25,
            "unit": "ns",
            "range": "± 2565.9164574605047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3125374.8,
            "unit": "ns",
            "range": "± 32081.091489714443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2923512.4285714286,
            "unit": "ns",
            "range": "± 17935.97570297146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20315.381443298967,
            "unit": "ns",
            "range": "± 4498.711365128396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71525.23195876289,
            "unit": "ns",
            "range": "± 8755.930145853847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87905.77,
            "unit": "ns",
            "range": "± 17081.487143910384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88557.87755102041,
            "unit": "ns",
            "range": "± 15279.92897866672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6656.816326530612,
            "unit": "ns",
            "range": "± 806.8298354932325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16955.21505376344,
            "unit": "ns",
            "range": "± 2150.42676679215"
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
          "id": "ca03af071a8c73e225c5a6c31934cac1af45e74a",
          "message": "Merge pull request #3481 from greymistcube/chore/bencoded-address\n\n🧹 Use `Address.Bencoded` instead of `Address.ByteArray`",
          "timestamp": "2023-11-07T14:00:29+09:00",
          "tree_id": "ea3cfcea6fe14dec7636971cca2796d673d0f37c",
          "url": "https://github.com/planetarium/libplanet/commit/ca03af071a8c73e225c5a6c31934cac1af45e74a"
        },
        "date": 1699333890683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5905596.785714285,
            "unit": "ns",
            "range": "± 60459.31580719076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14749529.7,
            "unit": "ns",
            "range": "± 115572.2810632871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36971849.071428575,
            "unit": "ns",
            "range": "± 216357.4588604076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75395262.6,
            "unit": "ns",
            "range": "± 1002359.4670736213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146642969,
            "unit": "ns",
            "range": "± 881142.0828086316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1119017.2608695652,
            "unit": "ns",
            "range": "± 106180.57559015432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2088692.42,
            "unit": "ns",
            "range": "± 99580.29368924735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1636713.0227272727,
            "unit": "ns",
            "range": "± 125560.74060330343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6279223.9375,
            "unit": "ns",
            "range": "± 194147.43525757105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2576208.25,
            "unit": "ns",
            "range": "± 89697.23636745618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2721069.6785714286,
            "unit": "ns",
            "range": "± 115466.87388559969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3320479.537037037,
            "unit": "ns",
            "range": "± 91914.04238220098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3190198.0569620254,
            "unit": "ns",
            "range": "± 164823.44301774638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7631189.2,
            "unit": "ns",
            "range": "± 228870.19593459184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53659.969696969696,
            "unit": "ns",
            "range": "± 12947.128933532767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3810288.125558036,
            "unit": "ns",
            "range": "± 43000.474629400946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207084.2283653845,
            "unit": "ns",
            "range": "± 2162.0422723392303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 786916.834391276,
            "unit": "ns",
            "range": "± 3387.154166132746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2006515.07421875,
            "unit": "ns",
            "range": "± 15714.539290675462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617775.4388020834,
            "unit": "ns",
            "range": "± 1443.283412983912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582925.5404459635,
            "unit": "ns",
            "range": "± 928.9418129490614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237376.86813186813,
            "unit": "ns",
            "range": "± 17013.670792897232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232777.7808988764,
            "unit": "ns",
            "range": "± 12640.02217524375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183245.05050505052,
            "unit": "ns",
            "range": "± 19111.513119099305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3188547.6428571427,
            "unit": "ns",
            "range": "± 43024.044828010265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3001036.45,
            "unit": "ns",
            "range": "± 67644.50423817849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25385.673469387755,
            "unit": "ns",
            "range": "± 3035.7361851934684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105235.16666666667,
            "unit": "ns",
            "range": "± 8152.540831791956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91121.15,
            "unit": "ns",
            "range": "± 2087.9918147399558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93666.27659574468,
            "unit": "ns",
            "range": "± 7004.944158948307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6215.443298969072,
            "unit": "ns",
            "range": "± 813.2007358922335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23150.39393939394,
            "unit": "ns",
            "range": "± 4638.133794785381"
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
          "id": "4b75f0ec3db1b6fc2c937a18b699e1878fa8694c",
          "message": "Merge pull request #3486 from greymistcube/refactor/crypto\n\n♻️ Refactor crypto",
          "timestamp": "2023-11-13T23:52:07+09:00",
          "tree_id": "de06c7658cf66089c6b29abf46d9bd761dbc0c8c",
          "url": "https://github.com/planetarium/libplanet/commit/4b75f0ec3db1b6fc2c937a18b699e1878fa8694c"
        },
        "date": 1699887777108,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5429428.142857143,
            "unit": "ns",
            "range": "± 57145.31937842887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14610532,
            "unit": "ns",
            "range": "± 49122.32436557663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36197961.222222224,
            "unit": "ns",
            "range": "± 576272.2640492239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73723212.88461539,
            "unit": "ns",
            "range": "± 428634.5657067215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151131138.6153846,
            "unit": "ns",
            "range": "± 611285.9917589772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991890.6170212766,
            "unit": "ns",
            "range": "± 94823.87031563674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919796.1176470588,
            "unit": "ns",
            "range": "± 88946.52281266292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524585.7857142857,
            "unit": "ns",
            "range": "± 127956.71168292107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6350895.0875,
            "unit": "ns",
            "range": "± 330968.7146145959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419357.722222222,
            "unit": "ns",
            "range": "± 73304.28907295987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500814.023809524,
            "unit": "ns",
            "range": "± 87187.69008979732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3128883.7647058824,
            "unit": "ns",
            "range": "± 48573.736344254765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3001566.202247191,
            "unit": "ns",
            "range": "± 161657.89728882717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7531841.0813953485,
            "unit": "ns",
            "range": "± 154873.27360646348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40467.926315789475,
            "unit": "ns",
            "range": "± 5039.044248795736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3757862.7704326925,
            "unit": "ns",
            "range": "± 7485.8873505757165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228368.2556966145,
            "unit": "ns",
            "range": "± 2882.8314026169774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776986.6428034856,
            "unit": "ns",
            "range": "± 2999.2297785245773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937305.8541666667,
            "unit": "ns",
            "range": "± 3153.416810399847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627386.7012416294,
            "unit": "ns",
            "range": "± 2312.242582833391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580274.9037710336,
            "unit": "ns",
            "range": "± 617.398684577837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195657.89361702127,
            "unit": "ns",
            "range": "± 7206.855891181863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189264.74074074073,
            "unit": "ns",
            "range": "± 7310.987051511271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171189.92857142858,
            "unit": "ns",
            "range": "± 2338.6593945541244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3100593.6666666665,
            "unit": "ns",
            "range": "± 55537.71793843824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848355.2,
            "unit": "ns",
            "range": "± 26114.42758925199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13948.645833333334,
            "unit": "ns",
            "range": "± 2758.791447752618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68215.11458333333,
            "unit": "ns",
            "range": "± 4387.732378898891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54862.15789473684,
            "unit": "ns",
            "range": "± 5970.897520323749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65440.697916666664,
            "unit": "ns",
            "range": "± 16302.949578862805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3329.5842696629215,
            "unit": "ns",
            "range": "± 605.5899416907594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11838.901098901099,
            "unit": "ns",
            "range": "± 1160.3140384773717"
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
          "id": "06d73575e43e359f575e7cac611238e04eba1f29",
          "message": "Merge pull request #3485 from greymistcube/refactor/remove-rehearsal\n\n♻️ Remove `Rehearsal` from `IActionContext`",
          "timestamp": "2023-11-14T11:35:13+09:00",
          "tree_id": "ba2912dd11fe2a26c28195cddb7aeebcd4aaf042",
          "url": "https://github.com/planetarium/libplanet/commit/06d73575e43e359f575e7cac611238e04eba1f29"
        },
        "date": 1699929974814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5463800.428571428,
            "unit": "ns",
            "range": "± 20543.948383570605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13799511.416666666,
            "unit": "ns",
            "range": "± 104250.5228959708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35680668.86666667,
            "unit": "ns",
            "range": "± 390751.23666029825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73469313.73333333,
            "unit": "ns",
            "range": "± 640504.5668453746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147892435.3846154,
            "unit": "ns",
            "range": "± 735661.8174850609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043988.9795918367,
            "unit": "ns",
            "range": "± 113056.61527556268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1977739.8625,
            "unit": "ns",
            "range": "± 99529.26820983825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1485982.2808988765,
            "unit": "ns",
            "range": "± 123921.56932447497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6279993.02,
            "unit": "ns",
            "range": "± 253309.1518345163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2401003.3076923075,
            "unit": "ns",
            "range": "± 49074.117622037156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532268.734042553,
            "unit": "ns",
            "range": "± 98727.33447870515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3201462.285714286,
            "unit": "ns",
            "range": "± 65076.91346026089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2993777.8170731706,
            "unit": "ns",
            "range": "± 157327.23945606925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7333244.162790698,
            "unit": "ns",
            "range": "± 271419.21846866247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39371.39361702128,
            "unit": "ns",
            "range": "± 4458.341700045816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3799941.6009114585,
            "unit": "ns",
            "range": "± 17484.84934767152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215518.3321940105,
            "unit": "ns",
            "range": "± 5355.889091896733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770243.2584402902,
            "unit": "ns",
            "range": "± 3132.0133711011918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954310.2689302885,
            "unit": "ns",
            "range": "± 4290.874996683371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621901.6400553385,
            "unit": "ns",
            "range": "± 1831.961289881075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573486.2611929086,
            "unit": "ns",
            "range": "± 3587.875994318312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203448.18421052632,
            "unit": "ns",
            "range": "± 6166.006591747506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192139.0481927711,
            "unit": "ns",
            "range": "± 9821.754690113732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171551.63636363635,
            "unit": "ns",
            "range": "± 3988.714861007771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3092681,
            "unit": "ns",
            "range": "± 29468.28370338315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834058.3333333335,
            "unit": "ns",
            "range": "± 31378.471381475792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13119.62886597938,
            "unit": "ns",
            "range": "± 2133.9582173334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69702.58163265306,
            "unit": "ns",
            "range": "± 8518.509307570444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60153.98924731183,
            "unit": "ns",
            "range": "± 6803.623033378459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62354.707070707074,
            "unit": "ns",
            "range": "± 14234.697354726715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2979.3695652173915,
            "unit": "ns",
            "range": "± 847.9282537214748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13131.872340425532,
            "unit": "ns",
            "range": "± 1636.1603572726583"
          }
        ]
      }
    ]
  }
}