window.BENCHMARK_DATA = {
  "lastUpdate": 1741674725009,
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
          "id": "68837f5a29787c038172481403d3ffc141cb9ca8",
          "message": "wip",
          "timestamp": "2025-03-07T20:23:10+09:00",
          "tree_id": "84226a8ea52953f6b1317fedfe5c5b78f955e416",
          "url": "https://github.com/planetarium/libplanet/commit/68837f5a29787c038172481403d3ffc141cb9ca8"
        },
        "date": 1741387544829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2945191.304347826,
            "unit": "ns",
            "range": "± 74472.19684396854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5005025,
            "unit": "ns",
            "range": "± 74621.76291136521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4158286,
            "unit": "ns",
            "range": "± 355425.09248458635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12462202,
            "unit": "ns",
            "range": "± 5512584.570330551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21302,
            "unit": "ns",
            "range": "± 871.8944890294927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 3844864.285714286,
            "unit": "ns",
            "range": "± 11091.688304787034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 9649946.153846154,
            "unit": "ns",
            "range": "± 96729.12880293278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 24486907.14285714,
            "unit": "ns",
            "range": "± 67159.42529975525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41249112,
            "unit": "ns",
            "range": "± 788608.2922465373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 81671541.66666667,
            "unit": "ns",
            "range": "± 18257.275428184956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4090911.875,
            "unit": "ns",
            "range": "± 5702.048380216467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912330.4427083334,
            "unit": "ns",
            "range": "± 3971.929175014681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 714900.546875,
            "unit": "ns",
            "range": "± 4380.059451472997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1611230.9988839286,
            "unit": "ns",
            "range": "± 4234.438538058965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 439369.9479166667,
            "unit": "ns",
            "range": "± 2456.7386797564614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 407115.48828125,
            "unit": "ns",
            "range": "± 739.1374767618368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2894369.230769231,
            "unit": "ns",
            "range": "± 19396.536830724217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3187573.076923077,
            "unit": "ns",
            "range": "± 86458.88991974074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3526798,
            "unit": "ns",
            "range": "± 465787.10530746455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3228211.4285714286,
            "unit": "ns",
            "range": "± 102603.2901990178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4441115.384615385,
            "unit": "ns",
            "range": "± 29517.363425444077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231091.91919191918,
            "unit": "ns",
            "range": "± 34617.49786631055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 433546.6666666667,
            "unit": "ns",
            "range": "± 7467.631740352748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157473.91304347827,
            "unit": "ns",
            "range": "± 3907.942656984194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1413956,
            "unit": "ns",
            "range": "± 37568.94861451409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1224187.1794871795,
            "unit": "ns",
            "range": "± 42248.94380172921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19356.25,
            "unit": "ns",
            "range": "± 4502.299120274113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78872.91666666667,
            "unit": "ns",
            "range": "± 20515.983392501643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 32179.72972972973,
            "unit": "ns",
            "range": "± 1635.8969497076946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47888,
            "unit": "ns",
            "range": "± 22278.14202578869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2869.387755102041,
            "unit": "ns",
            "range": "± 923.5362520879632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19532.65306122449,
            "unit": "ns",
            "range": "± 3663.522486953399"
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
          "id": "6110e00b42367cb7727fe9ae2d328296d8d075a2",
          "message": "wip",
          "timestamp": "2025-03-10T14:07:13+09:00",
          "tree_id": "443bd8e526923b898c84c93bb9acb63f58c058c6",
          "url": "https://github.com/planetarium/libplanet/commit/6110e00b42367cb7727fe9ae2d328296d8d075a2"
        },
        "date": 1741583885536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2927926.6666666665,
            "unit": "ns",
            "range": "± 86340.10908483731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5176028.571428572,
            "unit": "ns",
            "range": "± 69557.88047564228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3954878.787878788,
            "unit": "ns",
            "range": "± 630239.6030070751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11152475.252525253,
            "unit": "ns",
            "range": "± 4364117.857663824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22926.666666666668,
            "unit": "ns",
            "range": "± 435.01505173740276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4041507.6923076925,
            "unit": "ns",
            "range": "± 13670.312209215848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10092721.42857143,
            "unit": "ns",
            "range": "± 153023.4681778805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21305652.542372882,
            "unit": "ns",
            "range": "± 931678.467615994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41945114.28571428,
            "unit": "ns",
            "range": "± 1258751.8486797237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 83210858.33333333,
            "unit": "ns",
            "range": "± 1259489.0655690024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091221.6666666665,
            "unit": "ns",
            "range": "± 9648.437136109498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 939277.0298549107,
            "unit": "ns",
            "range": "± 5842.716082603694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758637.4088541666,
            "unit": "ns",
            "range": "± 5516.664251695504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1691890.3395432692,
            "unit": "ns",
            "range": "± 3201.0856432063415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 435530.96051897324,
            "unit": "ns",
            "range": "± 1216.8769850130936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 400167.75390625,
            "unit": "ns",
            "range": "± 2483.606740253898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3021300,
            "unit": "ns",
            "range": "± 42779.542199154384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3228330,
            "unit": "ns",
            "range": "± 93769.12273936631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3752050,
            "unit": "ns",
            "range": "± 37759.28141971631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3163153.846153846,
            "unit": "ns",
            "range": "± 39538.72817429799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3316500,
            "unit": "ns",
            "range": "± 606778.70474384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223284.693877551,
            "unit": "ns",
            "range": "± 37446.49888536046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353622.1052631579,
            "unit": "ns",
            "range": "± 86395.00106074814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159354.16666666666,
            "unit": "ns",
            "range": "± 4139.2058854711295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1459790,
            "unit": "ns",
            "range": "± 51775.376783038875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1266717.6470588236,
            "unit": "ns",
            "range": "± 39085.24072819239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19353.061224489797,
            "unit": "ns",
            "range": "± 5212.340710941158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85105.26315789473,
            "unit": "ns",
            "range": "± 14400.054435631835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33298.75,
            "unit": "ns",
            "range": "± 2170.194750054602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57501.02040816326,
            "unit": "ns",
            "range": "± 28613.897008985274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3413.131313131313,
            "unit": "ns",
            "range": "± 1254.9206385710306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18953.763440860213,
            "unit": "ns",
            "range": "± 4257.667230747293"
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
          "id": "78c5e13142e76b7ec8d0b0f7a8c0a0a94e4df32b",
          "message": "wip",
          "timestamp": "2025-03-10T18:09:06+09:00",
          "tree_id": "d08aa47a4650ab2dde3c2824a5b25641e8b638d8",
          "url": "https://github.com/planetarium/libplanet/commit/78c5e13142e76b7ec8d0b0f7a8c0a0a94e4df32b"
        },
        "date": 1741598403320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3199907.2463768115,
            "unit": "ns",
            "range": "± 153903.36188549944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5019184.848484849,
            "unit": "ns",
            "range": "± 689318.708516566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4415673.958333333,
            "unit": "ns",
            "range": "± 506132.9409811933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13290715,
            "unit": "ns",
            "range": "± 6459419.734350773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 27575.280898876405,
            "unit": "ns",
            "range": "± 4356.533257358644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4044485.714285714,
            "unit": "ns",
            "range": "± 25887.206734745883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10414457.142857144,
            "unit": "ns",
            "range": "± 78020.36927609368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21149091.666666668,
            "unit": "ns",
            "range": "± 596534.4557947635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41850542.10526316,
            "unit": "ns",
            "range": "± 314770.5113178832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 83003214.28571428,
            "unit": "ns",
            "range": "± 131546.28233288997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4447764.710365853,
            "unit": "ns",
            "range": "± 158419.14710977022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 942992.431640625,
            "unit": "ns",
            "range": "± 8539.848999748561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729968.3518629808,
            "unit": "ns",
            "range": "± 6344.558148885347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1586264.51171875,
            "unit": "ns",
            "range": "± 240016.82648382787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455685.14578683034,
            "unit": "ns",
            "range": "± 3493.561157417358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 398229.599609375,
            "unit": "ns",
            "range": "± 1891.0797657789908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3016247.619047619,
            "unit": "ns",
            "range": "± 57256.804128833624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366981.8181818184,
            "unit": "ns",
            "range": "± 126234.23645125472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3772879.797979798,
            "unit": "ns",
            "range": "± 527490.1113261722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3503303.4482758623,
            "unit": "ns",
            "range": "± 102609.34405640028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3492087,
            "unit": "ns",
            "range": "± 725310.9171913585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272512.5,
            "unit": "ns",
            "range": "± 46620.630739258726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389854.0816326531,
            "unit": "ns",
            "range": "± 98706.30304858471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193441.11111111112,
            "unit": "ns",
            "range": "± 22791.09152024415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1510203.125,
            "unit": "ns",
            "range": "± 46935.470350430376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1315871.7391304348,
            "unit": "ns",
            "range": "± 49698.364216512215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26838.88888888889,
            "unit": "ns",
            "range": "± 6442.863737002594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105116.49484536082,
            "unit": "ns",
            "range": "± 26930.209494529452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67361.45833333333,
            "unit": "ns",
            "range": "± 20202.341551579284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84479.79797979798,
            "unit": "ns",
            "range": "± 34683.952002177946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5647.368421052632,
            "unit": "ns",
            "range": "± 1798.985654222552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25465.263157894737,
            "unit": "ns",
            "range": "± 7434.37628371631"
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
          "id": "ca94f4c3ede92396fbb57320e966bfb43931bfa4",
          "message": "test: Fix test code",
          "timestamp": "2025-03-11T14:54:58+09:00",
          "tree_id": "314091282d4ce1707560d22f16d518505cd2daad",
          "url": "https://github.com/planetarium/libplanet/commit/ca94f4c3ede92396fbb57320e966bfb43931bfa4"
        },
        "date": 1741673016249,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2901970.588235294,
            "unit": "ns",
            "range": "± 93099.94476257765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5154605.263157895,
            "unit": "ns",
            "range": "± 109159.82407911097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4214221.666666667,
            "unit": "ns",
            "range": "± 188359.80273219317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12572541,
            "unit": "ns",
            "range": "± 5471337.605628688"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25196.938775510203,
            "unit": "ns",
            "range": "± 3890.179390071179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4043369.230769231,
            "unit": "ns",
            "range": "± 39389.7064518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10063278.57142857,
            "unit": "ns",
            "range": "± 89648.35730247915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 22892600,
            "unit": "ns",
            "range": "± 149838.08880636076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41620650,
            "unit": "ns",
            "range": "± 791692.7066734921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82519980,
            "unit": "ns",
            "range": "± 185552.27295832298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4089652.4479166665,
            "unit": "ns",
            "range": "± 8232.941400404388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 945061.2044270834,
            "unit": "ns",
            "range": "± 4363.432428390062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 712538.4830729166,
            "unit": "ns",
            "range": "± 5558.641212792043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1627510.0306919643,
            "unit": "ns",
            "range": "± 3704.4947215587504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 433938.642578125,
            "unit": "ns",
            "range": "± 3556.9008482706195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414544.46149553574,
            "unit": "ns",
            "range": "± 2017.9956032465134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3000428.5714285714,
            "unit": "ns",
            "range": "± 37968.27478448145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3247197.435897436,
            "unit": "ns",
            "range": "± 112108.31812694525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3700707.1428571427,
            "unit": "ns",
            "range": "± 40253.97188784298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3284780.5555555555,
            "unit": "ns",
            "range": "± 109207.65493693834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4342646.428571428,
            "unit": "ns",
            "range": "± 122251.29396313717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231144.79166666666,
            "unit": "ns",
            "range": "± 29228.914558565644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 438561.90476190473,
            "unit": "ns",
            "range": "± 8819.153938472567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159709.67741935485,
            "unit": "ns",
            "range": "± 4094.4966999384005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1423250,
            "unit": "ns",
            "range": "± 36838.93261919703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1253612.1951219512,
            "unit": "ns",
            "range": "± 44642.548063041555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18451.020408163266,
            "unit": "ns",
            "range": "± 5573.968304482279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83029.59183673469,
            "unit": "ns",
            "range": "± 18076.04902309389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45364,
            "unit": "ns",
            "range": "± 18586.3723293072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50554.545454545456,
            "unit": "ns",
            "range": "± 23900.995934877596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3072.4489795918366,
            "unit": "ns",
            "range": "± 990.7594309151951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17715.463917525773,
            "unit": "ns",
            "range": "± 5360.335425725581"
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
          "id": "bba527ec722685ab5faa1bfbfe8bee720634ac58",
          "message": "fix: Remove netstandard2.0",
          "timestamp": "2025-03-11T15:23:34+09:00",
          "tree_id": "2a362bd2fb28da30e2bf351fe8257baf7c705c96",
          "url": "https://github.com/planetarium/libplanet/commit/bba527ec722685ab5faa1bfbfe8bee720634ac58"
        },
        "date": 1741674655796,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2923433.3333333335,
            "unit": "ns",
            "range": "± 96294.22175217546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4963045.714285715,
            "unit": "ns",
            "range": "± 160091.64533967106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4144292.98245614,
            "unit": "ns",
            "range": "± 175144.2312369693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13132873,
            "unit": "ns",
            "range": "± 5670305.197705166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23866.666666666668,
            "unit": "ns",
            "range": "± 3506.0588956250917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4066728.5714285714,
            "unit": "ns",
            "range": "± 32456.181788123755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10399950,
            "unit": "ns",
            "range": "± 115851.57447221987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 25477114.285714287,
            "unit": "ns",
            "range": "± 114798.31047498951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41810472,
            "unit": "ns",
            "range": "± 1099530.8698561704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82675413.33333333,
            "unit": "ns",
            "range": "± 258895.29010411762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4079618.6941964286,
            "unit": "ns",
            "range": "± 28179.82329451198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913727.9817708334,
            "unit": "ns",
            "range": "± 4397.686731824884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 718036.2174479166,
            "unit": "ns",
            "range": "± 2128.1692957577725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637872.6712740385,
            "unit": "ns",
            "range": "± 2756.385313720767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 441256.7057291667,
            "unit": "ns",
            "range": "± 1081.1551304701252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 405024.599609375,
            "unit": "ns",
            "range": "± 900.3025587460576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3070591.6666666665,
            "unit": "ns",
            "range": "± 78399.8664410279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3114146.6666666665,
            "unit": "ns",
            "range": "± 52157.36993077045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3584627,
            "unit": "ns",
            "range": "± 423085.4688004553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3224357.8947368423,
            "unit": "ns",
            "range": "± 69981.1745780366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4261960.714285715,
            "unit": "ns",
            "range": "± 121536.88767669495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212019.35483870967,
            "unit": "ns",
            "range": "± 35991.33125720969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360459.1836734694,
            "unit": "ns",
            "range": "± 83946.93689325257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159354.7619047619,
            "unit": "ns",
            "range": "± 5836.520947550543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1444892.3076923077,
            "unit": "ns",
            "range": "± 39140.95474642306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1232740,
            "unit": "ns",
            "range": "± 39818.23555047287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18632,
            "unit": "ns",
            "range": "± 5742.661192840613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77666.16161616161,
            "unit": "ns",
            "range": "± 17664.028402439377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 31980.76923076923,
            "unit": "ns",
            "range": "± 1867.428100968739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46243.75,
            "unit": "ns",
            "range": "± 19137.259400667095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2983.505154639175,
            "unit": "ns",
            "range": "± 931.0254664852013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18560,
            "unit": "ns",
            "range": "± 4164.091686606826"
          }
        ]
      }
    ]
  }
}