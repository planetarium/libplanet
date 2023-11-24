window.BENCHMARK_DATA = {
  "lastUpdate": 1700793686372,
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
          "id": "2129953e0062c014183e2943559eaea1a324a6d0",
          "message": "Merge pull request #3480 from greymistcube/refactor/updated-addresses\n\n♻️ Disallow creation of new `Transaction`s with a non-empty `UpdatedAddresses`",
          "timestamp": "2023-11-15T17:22:36+09:00",
          "tree_id": "5b0805250ca7bc9038df196c115713b35ae40f22",
          "url": "https://github.com/planetarium/libplanet/commit/2129953e0062c014183e2943559eaea1a324a6d0"
        },
        "date": 1700037392991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8700492.6,
            "unit": "ns",
            "range": "± 122601.28580239278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23032292.666666668,
            "unit": "ns",
            "range": "± 285362.08071642864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57209705.85714286,
            "unit": "ns",
            "range": "± 311211.68233778834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115446896.07142857,
            "unit": "ns",
            "range": "± 1612750.258340676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221997136.8,
            "unit": "ns",
            "range": "± 3398656.627203002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376701.288888889,
            "unit": "ns",
            "range": "± 76173.50334808095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2545806.285714286,
            "unit": "ns",
            "range": "± 42473.93261832408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2038416.6547619049,
            "unit": "ns",
            "range": "± 108617.79346438662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9436814.388888888,
            "unit": "ns",
            "range": "± 596659.8575848965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3676638.3333333335,
            "unit": "ns",
            "range": "± 115344.11277690624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3606277.066666667,
            "unit": "ns",
            "range": "± 156332.99773098066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4336922.871794872,
            "unit": "ns",
            "range": "± 151137.6868427175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4200445.338983051,
            "unit": "ns",
            "range": "± 183938.65354444995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10395619.1875,
            "unit": "ns",
            "range": "± 318767.8205678494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52755.71111111111,
            "unit": "ns",
            "range": "± 3078.947873136721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5195438.411979167,
            "unit": "ns",
            "range": "± 18341.05318179019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1623272.7864583333,
            "unit": "ns",
            "range": "± 5041.374145956811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159541.0464564732,
            "unit": "ns",
            "range": "± 3739.929069153607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633250.9420072115,
            "unit": "ns",
            "range": "± 2505.025038881649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815027.1666666666,
            "unit": "ns",
            "range": "± 2423.22251972919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749408.2662760416,
            "unit": "ns",
            "range": "± 1524.795697415241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273858.0714285714,
            "unit": "ns",
            "range": "± 4721.665293977502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263663.81481481483,
            "unit": "ns",
            "range": "± 7271.799243214725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226205.42857142858,
            "unit": "ns",
            "range": "± 5253.781472153449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4332861.066666666,
            "unit": "ns",
            "range": "± 75317.76407088898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4027666,
            "unit": "ns",
            "range": "± 57023.521092908086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18889.478723404256,
            "unit": "ns",
            "range": "± 1456.0330754302045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84896.37333333334,
            "unit": "ns",
            "range": "± 4293.132230111859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70350.22222222222,
            "unit": "ns",
            "range": "± 1498.3285415090554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77575.8085106383,
            "unit": "ns",
            "range": "± 7542.34113746556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5270.967741935484,
            "unit": "ns",
            "range": "± 448.32554291091594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18062,
            "unit": "ns",
            "range": "± 1221.427538075522"
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
          "id": "e9b0caa717aaa65581eaa006e5d00bd30634b595",
          "message": "Merge pull request #3487 from riemannulus/refactor/use-different-rocksdb-backend",
          "timestamp": "2023-11-15T19:02:18+09:00",
          "tree_id": "e19ea67d6945b5b1ba0d7d8e25d043cb55512b96",
          "url": "https://github.com/planetarium/libplanet/commit/e9b0caa717aaa65581eaa006e5d00bd30634b595"
        },
        "date": 1700043190705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5683320.75,
            "unit": "ns",
            "range": "± 80920.3227605196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14471584.423076924,
            "unit": "ns",
            "range": "± 107953.43125738797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37053262.92307692,
            "unit": "ns",
            "range": "± 616921.5940667908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75427889.85714285,
            "unit": "ns",
            "range": "± 351751.7520769567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148069088.46153846,
            "unit": "ns",
            "range": "± 910428.9861617998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988160.7835051547,
            "unit": "ns",
            "range": "± 70975.11708840681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889362.3043478262,
            "unit": "ns",
            "range": "± 72352.61395473624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1462532.2307692308,
            "unit": "ns",
            "range": "± 102646.92463619346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6476092.356164384,
            "unit": "ns",
            "range": "± 319172.0048810485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2410634.64,
            "unit": "ns",
            "range": "± 64125.98861738247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564280.8333333335,
            "unit": "ns",
            "range": "± 76666.98955169389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3134245.705882353,
            "unit": "ns",
            "range": "± 61754.50463505143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3046110.343137255,
            "unit": "ns",
            "range": "± 98147.21148649564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7815238.9186046515,
            "unit": "ns",
            "range": "± 217605.14579516472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39054.758241758245,
            "unit": "ns",
            "range": "± 3771.306541477692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662803.238606771,
            "unit": "ns",
            "range": "± 10343.544763468255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204435.268329327,
            "unit": "ns",
            "range": "± 2052.8082017242423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766029.4008789062,
            "unit": "ns",
            "range": "± 1740.657123422912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951097.1942608173,
            "unit": "ns",
            "range": "± 3402.9462862544096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612243.9201472356,
            "unit": "ns",
            "range": "± 1439.940231684374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581597.9181315104,
            "unit": "ns",
            "range": "± 1636.9196733533058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205420.89743589744,
            "unit": "ns",
            "range": "± 10574.993694806071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197325.14705882352,
            "unit": "ns",
            "range": "± 9373.166371552208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167447.17741935485,
            "unit": "ns",
            "range": "± 5039.629691337098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3133918.214285714,
            "unit": "ns",
            "range": "± 42335.89252846004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2865484.6153846155,
            "unit": "ns",
            "range": "± 32985.436436753065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13022.137931034482,
            "unit": "ns",
            "range": "± 1501.4917556822336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65703.51030927835,
            "unit": "ns",
            "range": "± 5603.743266214346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60330.69047619047,
            "unit": "ns",
            "range": "± 4689.2654085384665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63990.606060606064,
            "unit": "ns",
            "range": "± 14582.881622109286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2975.278350515464,
            "unit": "ns",
            "range": "± 531.5304503324189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13917.40206185567,
            "unit": "ns",
            "range": "± 2512.8861297809945"
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
          "id": "754e461e6b508e08f953370d290b29353252da8c",
          "message": "Merge pull request #3493 from greymistcube/refactor/remove-rehearsal\n\n🧹 Remove `DumbAction` rehearsal code",
          "timestamp": "2023-11-15T21:34:11+09:00",
          "tree_id": "949aef8401dbf12e76a0babf2cb44532db090d7f",
          "url": "https://github.com/planetarium/libplanet/commit/754e461e6b508e08f953370d290b29353252da8c"
        },
        "date": 1700052308906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5842815.866666666,
            "unit": "ns",
            "range": "± 49137.16907344562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14720722.75,
            "unit": "ns",
            "range": "± 84449.69905875115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36610007.884615384,
            "unit": "ns",
            "range": "± 194575.7638211649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76617210.42857143,
            "unit": "ns",
            "range": "± 879295.4417433806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150336422.07142857,
            "unit": "ns",
            "range": "± 541429.0087793262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057812.411111111,
            "unit": "ns",
            "range": "± 76182.14582224563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2047381.2142857143,
            "unit": "ns",
            "range": "± 87539.50434231793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553081.1875,
            "unit": "ns",
            "range": "± 129197.82840274648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6371442.057142857,
            "unit": "ns",
            "range": "± 193488.13269064922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2530040.904761905,
            "unit": "ns",
            "range": "± 87677.86323582746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2763560.75,
            "unit": "ns",
            "range": "± 53857.816990665335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3332578.3125,
            "unit": "ns",
            "range": "± 65123.96255011796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3228989.7,
            "unit": "ns",
            "range": "± 144066.0520812636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7486013.55,
            "unit": "ns",
            "range": "± 194430.01059796722"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42538.14893617021,
            "unit": "ns",
            "range": "± 5509.07482223053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3765187.451302083,
            "unit": "ns",
            "range": "± 62537.88301898829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216748.3454026442,
            "unit": "ns",
            "range": "± 2693.1438683067713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772621.6068522135,
            "unit": "ns",
            "range": "± 3948.103968172998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939264.2962239583,
            "unit": "ns",
            "range": "± 4243.73266897964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616129.8157784598,
            "unit": "ns",
            "range": "± 2624.057976079489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578743.5087890625,
            "unit": "ns",
            "range": "± 2348.713600961609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243822.05223880598,
            "unit": "ns",
            "range": "± 11476.238053346498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212629.55208333334,
            "unit": "ns",
            "range": "± 16337.021475532056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169633.15789473685,
            "unit": "ns",
            "range": "± 5788.563021404692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145866.214285714,
            "unit": "ns",
            "range": "± 44152.52184483058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2907676.6428571427,
            "unit": "ns",
            "range": "± 40162.200410158235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16866.75,
            "unit": "ns",
            "range": "± 5722.284560683289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80992.4797979798,
            "unit": "ns",
            "range": "± 13161.279834314697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81506.34,
            "unit": "ns",
            "range": "± 17614.573086068376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92075.51020408163,
            "unit": "ns",
            "range": "± 16537.504252203456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6168.663265306122,
            "unit": "ns",
            "range": "± 1464.8352917077489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19937.272727272728,
            "unit": "ns",
            "range": "± 6373.822309495623"
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
          "id": "2b7d10652985bfdfc28b0fc950b95b67ece2aafa",
          "message": "Merge pull request #3511 from greymistcube/port/3.7.1-to-3.8.0\n\n🔀 Port 3.7.1 to 3.8.0",
          "timestamp": "2023-11-21T15:12:57+09:00",
          "tree_id": "3d17b59700923895a777cec17203c71dd9223b48",
          "url": "https://github.com/planetarium/libplanet/commit/2b7d10652985bfdfc28b0fc950b95b67ece2aafa"
        },
        "date": 1700547839609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199038.2659574468,
            "unit": "ns",
            "range": "± 11628.603794902836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189879.75675675675,
            "unit": "ns",
            "range": "± 9512.180965162237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163267.83333333334,
            "unit": "ns",
            "range": "± 3540.284840747025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3046789.8,
            "unit": "ns",
            "range": "± 39381.74171799487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862484.1666666665,
            "unit": "ns",
            "range": "± 17638.3415363099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15526.835051546392,
            "unit": "ns",
            "range": "± 2879.58227468417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65589.10204081633,
            "unit": "ns",
            "range": "± 9044.840275144852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77704.05,
            "unit": "ns",
            "range": "± 18739.44897445391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94387.92783505155,
            "unit": "ns",
            "range": "± 11975.031887785852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4223.98969072165,
            "unit": "ns",
            "range": "± 981.4535828602789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17013.742424242424,
            "unit": "ns",
            "range": "± 3538.938143783918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3758895.328425481,
            "unit": "ns",
            "range": "± 14049.696889479863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205998.853515625,
            "unit": "ns",
            "range": "± 2062.8786031606837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773164.205078125,
            "unit": "ns",
            "range": "± 2662.4224717580587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923758.187220982,
            "unit": "ns",
            "range": "± 2660.581475035321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602586.2475585938,
            "unit": "ns",
            "range": "± 1634.575288651275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575957.2326311384,
            "unit": "ns",
            "range": "± 1060.5755761379585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42239.98453608248,
            "unit": "ns",
            "range": "± 5560.887547403071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407396.1714285715,
            "unit": "ns",
            "range": "± 59484.69892456562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2583371.6551724137,
            "unit": "ns",
            "range": "± 112118.78022171542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3210657.4375,
            "unit": "ns",
            "range": "± 48652.47273944563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3091510.789473684,
            "unit": "ns",
            "range": "± 61556.91316766131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6548652.70967742,
            "unit": "ns",
            "range": "± 149014.6731167088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5793209.2,
            "unit": "ns",
            "range": "± 31258.736185036567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14431661.033333333,
            "unit": "ns",
            "range": "± 139447.79544478114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36592377.71428572,
            "unit": "ns",
            "range": "± 102532.94265028909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74948102.57142857,
            "unit": "ns",
            "range": "± 304010.92068712425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148735454.6,
            "unit": "ns",
            "range": "± 410039.914818197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968222.5567010309,
            "unit": "ns",
            "range": "± 104855.19237152822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858529.6233766233,
            "unit": "ns",
            "range": "± 94671.58831622516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1367380.4193548388,
            "unit": "ns",
            "range": "± 99009.61245168622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5684754.064516129,
            "unit": "ns",
            "range": "± 360950.2768668513"
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
          "id": "9cc8a432a827fc18443789509cca7b3762c7f007",
          "message": "Merge pull request #3488 from riemannulus/feature/introduce-rocksdb-instance-type\n\n➕  introduce: `RocksDb` instance type",
          "timestamp": "2023-11-24T11:16:28+09:00",
          "tree_id": "22ccaf4463569cdc9bdc0e6d657992818a503cb0",
          "url": "https://github.com/planetarium/libplanet/commit/9cc8a432a827fc18443789509cca7b3762c7f007"
        },
        "date": 1700792850938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207643.52380952382,
            "unit": "ns",
            "range": "± 9331.68187457625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222416.85263157895,
            "unit": "ns",
            "range": "± 17879.4134667282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182386.20408163266,
            "unit": "ns",
            "range": "± 20893.765995344897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3127748.2,
            "unit": "ns",
            "range": "± 46427.285221392944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2847091.3076923075,
            "unit": "ns",
            "range": "± 35255.23095793638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23952.94,
            "unit": "ns",
            "range": "± 5168.507196747266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90109.76767676767,
            "unit": "ns",
            "range": "± 16046.42448623412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100227.26315789473,
            "unit": "ns",
            "range": "± 1365.2989433374519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98126.1052631579,
            "unit": "ns",
            "range": "± 17352.298740643746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6970.69696969697,
            "unit": "ns",
            "range": "± 2285.961618111844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20924.131313131315,
            "unit": "ns",
            "range": "± 3585.996035164228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722184.0890625,
            "unit": "ns",
            "range": "± 61610.90818180784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1244822.865985577,
            "unit": "ns",
            "range": "± 4607.340307679071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770907.072265625,
            "unit": "ns",
            "range": "± 1592.7264584974657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1996001.8357421875,
            "unit": "ns",
            "range": "± 26302.503720470417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619767.0770733173,
            "unit": "ns",
            "range": "± 1812.8954942686087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577479.1485188802,
            "unit": "ns",
            "range": "± 3867.9775474400567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39499.91052631579,
            "unit": "ns",
            "range": "± 5124.363745652758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415469.2545454544,
            "unit": "ns",
            "range": "± 93691.83612686272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2553918,
            "unit": "ns",
            "range": "± 64231.228181681785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3258185.32,
            "unit": "ns",
            "range": "± 86396.00981561591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3008004.7,
            "unit": "ns",
            "range": "± 111565.9797126998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6879765.604651162,
            "unit": "ns",
            "range": "± 254215.99966930444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5732858.5,
            "unit": "ns",
            "range": "± 102280.95934029671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14216681.9,
            "unit": "ns",
            "range": "± 96103.57962026478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36846959.083333336,
            "unit": "ns",
            "range": "± 291534.1320517621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75895320.14285715,
            "unit": "ns",
            "range": "± 241274.68701552507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149932546.5,
            "unit": "ns",
            "range": "± 626654.4687850774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948701.4,
            "unit": "ns",
            "range": "± 79697.10341907972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888648.463768116,
            "unit": "ns",
            "range": "± 90764.383837329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1386067.2842105264,
            "unit": "ns",
            "range": "± 120583.46146078728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5694729.322916667,
            "unit": "ns",
            "range": "± 339695.34927208547"
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
          "id": "115a4231a838e45a141426ede38a5d933c9a432c",
          "message": "Merge pull request #3515 from greymistcube/release/3.8.0\n\n🚀 Release 3.8.0",
          "timestamp": "2023-11-24T11:30:13+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/planetarium/libplanet/commit/115a4231a838e45a141426ede38a5d933c9a432c"
        },
        "date": 1700793663255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196492.84210526315,
            "unit": "ns",
            "range": "± 8425.624285453516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193595.61764705883,
            "unit": "ns",
            "range": "± 10354.525212048438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165831.24390243902,
            "unit": "ns",
            "range": "± 5901.2690575014785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3043852.4285714286,
            "unit": "ns",
            "range": "± 35155.65541267159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2924276.0714285714,
            "unit": "ns",
            "range": "± 38637.76062045698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14097.489583333334,
            "unit": "ns",
            "range": "± 2930.218587121343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61887.20786516854,
            "unit": "ns",
            "range": "± 8157.370005932515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60907.5,
            "unit": "ns",
            "range": "± 16371.516004049025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67053.09139784946,
            "unit": "ns",
            "range": "± 11893.635421880936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3898.061224489796,
            "unit": "ns",
            "range": "± 1716.9300150633073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13420.929292929293,
            "unit": "ns",
            "range": "± 3215.669671114402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690856.245793269,
            "unit": "ns",
            "range": "± 19095.15623852407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223879.4106069712,
            "unit": "ns",
            "range": "± 2292.752887144335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 786524.4301060268,
            "unit": "ns",
            "range": "± 7273.475410014143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957515.3197115385,
            "unit": "ns",
            "range": "± 11058.248611358675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610708.0694173177,
            "unit": "ns",
            "range": "± 1975.7752219872216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571163.0345052084,
            "unit": "ns",
            "range": "± 2880.2538818822873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41191.572164948455,
            "unit": "ns",
            "range": "± 5802.008128023834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2409142.5,
            "unit": "ns",
            "range": "± 13423.794924752769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564580.1885245903,
            "unit": "ns",
            "range": "± 114331.05261061566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3140573.3157894737,
            "unit": "ns",
            "range": "± 66854.41757701135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2995844.8571428573,
            "unit": "ns",
            "range": "± 49276.46298161041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6602440.029411765,
            "unit": "ns",
            "range": "± 174815.37788668872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5562083.538461538,
            "unit": "ns",
            "range": "± 15467.504423874076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14090531.75,
            "unit": "ns",
            "range": "± 43111.13516382556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36470662.06666667,
            "unit": "ns",
            "range": "± 289003.5080690363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74157358.13333334,
            "unit": "ns",
            "range": "± 711471.5966248976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148831325.53846154,
            "unit": "ns",
            "range": "± 1100018.3116561905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971603.3421052631,
            "unit": "ns",
            "range": "± 96323.7850020082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889601.6029411764,
            "unit": "ns",
            "range": "± 89497.63234042274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1406318.074468085,
            "unit": "ns",
            "range": "± 124513.54882067704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5535505.857142857,
            "unit": "ns",
            "range": "± 201483.9914283056"
          }
        ]
      }
    ]
  }
}