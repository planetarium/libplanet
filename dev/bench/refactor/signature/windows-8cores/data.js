window.BENCHMARK_DATA = {
  "lastUpdate": 1741253228328,
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
          "id": "bca1dbb3b7a668312e83c14e723eca926c034760",
          "message": "wip",
          "timestamp": "2025-03-06T17:58:03+09:00",
          "tree_id": "86937a2eddc8cf0a325db9685622660ba201d61d",
          "url": "https://github.com/planetarium/libplanet/commit/bca1dbb3b7a668312e83c14e723eca926c034760"
        },
        "date": 1741252030778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3118806.25,
            "unit": "ns",
            "range": "± 59630.22129479872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4867651,
            "unit": "ns",
            "range": "± 952216.7607713799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4427280,
            "unit": "ns",
            "range": "± 278693.1225661239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11069176.767676767,
            "unit": "ns",
            "range": "± 4276497.616489749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22645.78313253012,
            "unit": "ns",
            "range": "± 1235.4816583036356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 3874353.846153846,
            "unit": "ns",
            "range": "± 13179.694949973575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 9754114.285714285,
            "unit": "ns",
            "range": "± 102557.96002668522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21070741.666666668,
            "unit": "ns",
            "range": "± 904669.3337837314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41289486.36363637,
            "unit": "ns",
            "range": "± 399638.61210021394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82180106.66666667,
            "unit": "ns",
            "range": "± 203382.1085917788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4125927.9427083335,
            "unit": "ns",
            "range": "± 56434.26273723866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919907.4934895834,
            "unit": "ns",
            "range": "± 4744.866312499911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725833.0208333334,
            "unit": "ns",
            "range": "± 8792.625433180514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1718082.6450892857,
            "unit": "ns",
            "range": "± 5986.194403611978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 446594.8172433036,
            "unit": "ns",
            "range": "± 1033.8989254177675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 396045.2799479167,
            "unit": "ns",
            "range": "± 1113.4885635536652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3060560.975609756,
            "unit": "ns",
            "range": "± 101568.81134986464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3176271.4285714286,
            "unit": "ns",
            "range": "± 89621.47914316927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3952960.465116279,
            "unit": "ns",
            "range": "± 145140.0065282368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3168900,
            "unit": "ns",
            "range": "± 30257.584645365012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4433560,
            "unit": "ns",
            "range": "± 59300.43121982455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221506.3829787234,
            "unit": "ns",
            "range": "± 39868.95148047947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351098,
            "unit": "ns",
            "range": "± 98265.52462228514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163831.0344827586,
            "unit": "ns",
            "range": "± 4701.1475383506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1469056.0606060605,
            "unit": "ns",
            "range": "± 45617.909992909714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1254630.2325581396,
            "unit": "ns",
            "range": "± 33575.03703422218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20740.20618556701,
            "unit": "ns",
            "range": "± 5766.2390218447135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82081.44329896907,
            "unit": "ns",
            "range": "± 22262.22664953326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34153.75,
            "unit": "ns",
            "range": "± 3335.8977213929893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60653.68421052631,
            "unit": "ns",
            "range": "± 28337.33275683434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3654.040404040404,
            "unit": "ns",
            "range": "± 1535.094173267502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19713.541666666668,
            "unit": "ns",
            "range": "± 4237.715864190757"
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
          "id": "25c9380284901d17588d7796e22da7059c325955",
          "message": "wip",
          "timestamp": "2025-03-06T18:01:19+09:00",
          "tree_id": "86937a2eddc8cf0a325db9685622660ba201d61d",
          "url": "https://github.com/planetarium/libplanet/commit/25c9380284901d17588d7796e22da7059c325955"
        },
        "date": 1741252207072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2878443.5483870967,
            "unit": "ns",
            "range": "± 84125.07725794915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5189127.450980392,
            "unit": "ns",
            "range": "± 193325.95902095648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4236767.391304348,
            "unit": "ns",
            "range": "± 103060.4661535861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12233190,
            "unit": "ns",
            "range": "± 5737679.385554245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22169.767441860466,
            "unit": "ns",
            "range": "± 1291.9724789858753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 3863766.6666666665,
            "unit": "ns",
            "range": "± 12021.567919289697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 9649650,
            "unit": "ns",
            "range": "± 61814.50850357432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 22558014.285714287,
            "unit": "ns",
            "range": "± 98811.95705552469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41469325,
            "unit": "ns",
            "range": "± 776035.9154059817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82094764.28571428,
            "unit": "ns",
            "range": "± 111971.05125290786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091802.957589286,
            "unit": "ns",
            "range": "± 5319.878617892107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914150.6966145834,
            "unit": "ns",
            "range": "± 7064.082971237989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725238.8671875,
            "unit": "ns",
            "range": "± 5101.041838073386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1642672.5260416667,
            "unit": "ns",
            "range": "± 7932.271130713588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 448102.6692708333,
            "unit": "ns",
            "range": "± 2721.772179463706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 410128.0794270833,
            "unit": "ns",
            "range": "± 1298.5256806438674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3012597.0588235296,
            "unit": "ns",
            "range": "± 97053.46694288049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3150308.8235294116,
            "unit": "ns",
            "range": "± 100529.9875889507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3643868.4210526315,
            "unit": "ns",
            "range": "± 58229.35545115805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3198880.769230769,
            "unit": "ns",
            "range": "± 13568.184883234788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3297026,
            "unit": "ns",
            "range": "± 572597.1888957481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222497.87234042553,
            "unit": "ns",
            "range": "± 29454.76202886514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 388203.0612244898,
            "unit": "ns",
            "range": "± 77453.0538942307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165137.03703703705,
            "unit": "ns",
            "range": "± 3875.876888192097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1473000,
            "unit": "ns",
            "range": "± 26410.60393099711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1238888.2352941176,
            "unit": "ns",
            "range": "± 35464.48299872989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21104.123711340206,
            "unit": "ns",
            "range": "± 4556.403861731613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75689,
            "unit": "ns",
            "range": "± 24702.38566567524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32893.506493506495,
            "unit": "ns",
            "range": "± 3361.208181213606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56362.244897959186,
            "unit": "ns",
            "range": "± 27204.223881050795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3073.7373737373737,
            "unit": "ns",
            "range": "± 1277.7200564163275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17644.897959183672,
            "unit": "ns",
            "range": "± 6425.2100523083645"
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
          "id": "fef0a2a89cb7559296e18250fa5fe5597485c06e",
          "message": "wip",
          "timestamp": "2025-03-06T18:04:40+09:00",
          "tree_id": "5503406f1e3ef2af09b66bbbe3cf29ad74bfd98e",
          "url": "https://github.com/planetarium/libplanet/commit/fef0a2a89cb7559296e18250fa5fe5597485c06e"
        },
        "date": 1741252390168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2932807.6923076925,
            "unit": "ns",
            "range": "± 47742.70383242627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4791608,
            "unit": "ns",
            "range": "± 835868.0257678302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4174523.4375,
            "unit": "ns",
            "range": "± 187308.31280308648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12797082,
            "unit": "ns",
            "range": "± 5625278.363956397"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21718.75,
            "unit": "ns",
            "range": "± 432.3867867238005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 3855785.714285714,
            "unit": "ns",
            "range": "± 13581.71039092121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 9653542.857142856,
            "unit": "ns",
            "range": "± 113712.86859241783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21208941.666666668,
            "unit": "ns",
            "range": "± 810032.2113895845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41537762.96296296,
            "unit": "ns",
            "range": "± 1155108.8477342557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 81710500,
            "unit": "ns",
            "range": "± 91560.88138501071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4086856.171875,
            "unit": "ns",
            "range": "± 8326.072074891561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 910740.9855769231,
            "unit": "ns",
            "range": "± 3504.3478384938035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727107.8125,
            "unit": "ns",
            "range": "± 6571.086337910164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635355.9151785714,
            "unit": "ns",
            "range": "± 5977.567889109577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459175.791015625,
            "unit": "ns",
            "range": "± 1255.5746965436947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 391935.38643973216,
            "unit": "ns",
            "range": "± 864.345469166035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2900075,
            "unit": "ns",
            "range": "± 16038.030087604559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3056515.3846153845,
            "unit": "ns",
            "range": "± 46824.385494345544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4028371.4285714286,
            "unit": "ns",
            "range": "± 30582.660461103133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3211010.3448275863,
            "unit": "ns",
            "range": "± 92927.88426988343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4410185.714285715,
            "unit": "ns",
            "range": "± 59707.85101247132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209667.02127659574,
            "unit": "ns",
            "range": "± 37354.000774046945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354959.595959596,
            "unit": "ns",
            "range": "± 77697.4691878856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160431.81818181818,
            "unit": "ns",
            "range": "± 3426.8389381797783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1444918.75,
            "unit": "ns",
            "range": "± 44851.17639698594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1247665.3846153845,
            "unit": "ns",
            "range": "± 49552.17446254823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18426.315789473683,
            "unit": "ns",
            "range": "± 4687.425699299155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75426.31578947368,
            "unit": "ns",
            "range": "± 19507.201128215776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32698.75,
            "unit": "ns",
            "range": "± 2407.6877793929125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53086.73469387755,
            "unit": "ns",
            "range": "± 26449.66679873186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2948.453608247423,
            "unit": "ns",
            "range": "± 1293.7440339686798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18645.918367346938,
            "unit": "ns",
            "range": "± 7224.01733576922"
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
          "id": "8c41e5e57c2e16d9b7b6ed3a23419181e938e344",
          "message": "wip",
          "timestamp": "2025-03-06T18:18:49+09:00",
          "tree_id": "97c913525a8b1bb489e6207902e8feb0b63efdec",
          "url": "https://github.com/planetarium/libplanet/commit/8c41e5e57c2e16d9b7b6ed3a23419181e938e344"
        },
        "date": 1741253154213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2815675,
            "unit": "ns",
            "range": "± 72234.62526348788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4689627,
            "unit": "ns",
            "range": "± 1008301.6294394763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3899250,
            "unit": "ns",
            "range": "± 129208.42851764741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12850488,
            "unit": "ns",
            "range": "± 5986244.553144865"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21093.617021276597,
            "unit": "ns",
            "range": "± 829.1966398448952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 3839208.3333333335,
            "unit": "ns",
            "range": "± 5782.176113372941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 9264679.487179488,
            "unit": "ns",
            "range": "± 319583.80762245593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 22736166.666666668,
            "unit": "ns",
            "range": "± 189680.4631353427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41007173.684210524,
            "unit": "ns",
            "range": "± 176032.88153102805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 81874115.38461539,
            "unit": "ns",
            "range": "± 37056.86724827681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4213361.875,
            "unit": "ns",
            "range": "± 3776.215947845889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918791.1272321428,
            "unit": "ns",
            "range": "± 3900.367521777962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 712838.0924479166,
            "unit": "ns",
            "range": "± 2219.9896548761253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1641019.5162259615,
            "unit": "ns",
            "range": "± 4004.115860447566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 439486.21651785716,
            "unit": "ns",
            "range": "± 817.4382376617833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416700.126953125,
            "unit": "ns",
            "range": "± 1168.8045296359112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2911669.230769231,
            "unit": "ns",
            "range": "± 37039.82956708865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3042442.8571428573,
            "unit": "ns",
            "range": "± 44257.91044957542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3660585.714285714,
            "unit": "ns",
            "range": "± 57866.369363359096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3069738.4615384615,
            "unit": "ns",
            "range": "± 27191.620598434933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4466664.705882353,
            "unit": "ns",
            "range": "± 86622.85308433675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208113.63636363635,
            "unit": "ns",
            "range": "± 35633.266717629136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345532.967032967,
            "unit": "ns",
            "range": "± 86687.47834087053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161245.83333333334,
            "unit": "ns",
            "range": "± 4179.346648197192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1422200,
            "unit": "ns",
            "range": "± 51051.90567619128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1230158.6956521738,
            "unit": "ns",
            "range": "± 44104.560490255964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18465.9793814433,
            "unit": "ns",
            "range": "± 5558.04384424686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73456.4705882353,
            "unit": "ns",
            "range": "± 16446.872962727626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32301.639344262294,
            "unit": "ns",
            "range": "± 1466.230064175775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50939.393939393936,
            "unit": "ns",
            "range": "± 24678.544834311986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2810.4166666666665,
            "unit": "ns",
            "range": "± 877.7338244973055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17638.383838383837,
            "unit": "ns",
            "range": "± 5443.582761356361"
          }
        ]
      }
    ]
  }
}