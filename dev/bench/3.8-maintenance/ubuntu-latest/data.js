window.BENCHMARK_DATA = {
  "lastUpdate": 1698996752070,
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
      }
    ]
  }
}