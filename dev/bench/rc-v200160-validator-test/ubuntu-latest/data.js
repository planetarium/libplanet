window.BENCHMARK_DATA = {
  "lastUpdate": 1713668543856,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "d3d5e725560f9f0ac6abfdf3cfac3553a23e2448",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T17:08:06+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/d3d5e725560f9f0ac6abfdf3cfac3553a23e2448"
        },
        "date": 1711095535267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5570442.071428572,
            "unit": "ns",
            "range": "± 20755.807107573848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14836373.57142857,
            "unit": "ns",
            "range": "± 103730.54360417467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38080219,
            "unit": "ns",
            "range": "± 227283.70989038888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76096350.21428572,
            "unit": "ns",
            "range": "± 268865.5929242853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151335723.36666667,
            "unit": "ns",
            "range": "± 1428671.2007754853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41861.1914893617,
            "unit": "ns",
            "range": "± 5247.6301297887385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009370.4210526316,
            "unit": "ns",
            "range": "± 102126.86344814963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861746.5612244897,
            "unit": "ns",
            "range": "± 66206.98239278598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649901.268041237,
            "unit": "ns",
            "range": "± 135356.9213361255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7689965.9375,
            "unit": "ns",
            "range": "± 135891.97166056512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2455353.826923077,
            "unit": "ns",
            "range": "± 101048.0512037095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541416.304347826,
            "unit": "ns",
            "range": "± 53269.8736174711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3136508.9615384615,
            "unit": "ns",
            "range": "± 85604.32199905833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3299144.796296296,
            "unit": "ns",
            "range": "± 170993.2747177827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8906197.064516129,
            "unit": "ns",
            "range": "± 170227.8283967177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204007.1231884058,
            "unit": "ns",
            "range": "± 8682.2565312004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195712.2528735632,
            "unit": "ns",
            "range": "± 10606.26955134446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171405.68181818182,
            "unit": "ns",
            "range": "± 4031.4595181299223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3253020.947368421,
            "unit": "ns",
            "range": "± 59626.94684869481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2995620.4285714286,
            "unit": "ns",
            "range": "± 45925.48872771112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16732.59139784946,
            "unit": "ns",
            "range": "± 1521.5030771701522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63649.0824742268,
            "unit": "ns",
            "range": "± 5507.1437955435495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57741.49462365591,
            "unit": "ns",
            "range": "± 5642.062881343666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66897.33333333333,
            "unit": "ns",
            "range": "± 8250.430898277156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3352.9139784946237,
            "unit": "ns",
            "range": "± 619.9328970684612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15649.308510638299,
            "unit": "ns",
            "range": "± 2492.0929592967136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695255.9821428573,
            "unit": "ns",
            "range": "± 54323.82824173365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215222.4670572917,
            "unit": "ns",
            "range": "± 19750.531806519273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766723.8541917067,
            "unit": "ns",
            "range": "± 2258.203789723938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987923.3765024038,
            "unit": "ns",
            "range": "± 10773.289748474304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641252.6063639323,
            "unit": "ns",
            "range": "± 1579.4509763191593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585108.9712289664,
            "unit": "ns",
            "range": "± 2012.680487681339"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "09761e64a58d6c030f3f7fad0f3b491c8d06c680",
          "message": "increase context timeout",
          "timestamp": "2024-03-27T18:06:55+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/09761e64a58d6c030f3f7fad0f3b491c8d06c680"
        },
        "date": 1711531083472,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5677250.857142857,
            "unit": "ns",
            "range": "± 19978.99819178261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14317844,
            "unit": "ns",
            "range": "± 102169.87271056135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36727223.35714286,
            "unit": "ns",
            "range": "± 156906.84378397028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75977251.76923077,
            "unit": "ns",
            "range": "± 237240.72537374136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149528563.35714287,
            "unit": "ns",
            "range": "± 1258620.4710738235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38796.104166666664,
            "unit": "ns",
            "range": "± 5561.866531601678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955965.1923076923,
            "unit": "ns",
            "range": "± 57819.106187544065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1869907.4864864864,
            "unit": "ns",
            "range": "± 62806.46365207151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663728.3020833333,
            "unit": "ns",
            "range": "± 153726.00274391955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7808869.935483871,
            "unit": "ns",
            "range": "± 231312.0587257159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2618511.9523809524,
            "unit": "ns",
            "range": "± 59408.65215141326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507874.236111111,
            "unit": "ns",
            "range": "± 106282.37365668119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3068713.1333333333,
            "unit": "ns",
            "range": "± 40895.35261033715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3117948.597222222,
            "unit": "ns",
            "range": "± 104773.40343683073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8860216.875,
            "unit": "ns",
            "range": "± 226915.47755657294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197200.94545454546,
            "unit": "ns",
            "range": "± 8152.05034063388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188479.0588235294,
            "unit": "ns",
            "range": "± 7707.158904322044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168227.44,
            "unit": "ns",
            "range": "± 4385.984097858389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3248306.966666667,
            "unit": "ns",
            "range": "± 58919.6522548979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766441.466666667,
            "unit": "ns",
            "range": "± 50493.83807932362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12776.622222222222,
            "unit": "ns",
            "range": "± 1033.3591653772485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60219.56842105263,
            "unit": "ns",
            "range": "± 4872.002636979669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52572,
            "unit": "ns",
            "range": "± 1807.3734439670864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65096.16494845361,
            "unit": "ns",
            "range": "± 12733.340117810481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3187.6315789473683,
            "unit": "ns",
            "range": "± 437.56689586149383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15776.77894736842,
            "unit": "ns",
            "range": "± 1035.055011169849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3873896.611328125,
            "unit": "ns",
            "range": "± 63124.9127554293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221342.776171875,
            "unit": "ns",
            "range": "± 19556.52976446655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760996.6485126202,
            "unit": "ns",
            "range": "± 7610.771069305482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937016.9663461538,
            "unit": "ns",
            "range": "± 7374.488133540755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617545.9607121394,
            "unit": "ns",
            "range": "± 1288.9416538457717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579702.9111328125,
            "unit": "ns",
            "range": "± 810.0204408128822"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "225778269c59f0d59172f99e68c7ddffb2bd5d9b",
          "message": "adjust context timeout",
          "timestamp": "2024-04-20T22:49:10-04:00",
          "tree_id": "bc5851537e4d36c6aaf26859b9671e2ff0dc5705",
          "url": "https://github.com/planetarium/libplanet/commit/225778269c59f0d59172f99e68c7ddffb2bd5d9b"
        },
        "date": 1713668497379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2484775.40625,
            "unit": "ns",
            "range": "± 58146.159272302415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507115.1612903224,
            "unit": "ns",
            "range": "± 76432.75165272052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3220303.45,
            "unit": "ns",
            "range": "± 71537.8425365683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3250281.234042553,
            "unit": "ns",
            "range": "± 125515.46892977544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8974188.130434783,
            "unit": "ns",
            "range": "± 246698.99438777243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202125.27272727274,
            "unit": "ns",
            "range": "± 7447.1367632400625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192056.79591836734,
            "unit": "ns",
            "range": "± 7521.6967887892815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167531.5,
            "unit": "ns",
            "range": "± 5566.013646613321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3180867,
            "unit": "ns",
            "range": "± 46627.64829093203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2873249.5,
            "unit": "ns",
            "range": "± 36842.04687738433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12759.489130434782,
            "unit": "ns",
            "range": "± 1110.9734321366652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59946.01098901099,
            "unit": "ns",
            "range": "± 3740.1446570197595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53176.12,
            "unit": "ns",
            "range": "± 1300.6183567826497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64658,
            "unit": "ns",
            "range": "± 12923.960810899523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3157.0714285714284,
            "unit": "ns",
            "range": "± 628.0076170002314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14500.183673469388,
            "unit": "ns",
            "range": "± 2540.944598068275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5754902.066666666,
            "unit": "ns",
            "range": "± 32573.859369278365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14453531.692307692,
            "unit": "ns",
            "range": "± 61202.75795444818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37461074.571428575,
            "unit": "ns",
            "range": "± 248428.7391648417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76331323.07142857,
            "unit": "ns",
            "range": "± 440167.72699322144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150482966.15384614,
            "unit": "ns",
            "range": "± 973556.0503888861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012194.875,
            "unit": "ns",
            "range": "± 100931.95418302999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1965291.0833333333,
            "unit": "ns",
            "range": "± 116828.58006603357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666148.6956521738,
            "unit": "ns",
            "range": "± 108874.89505090656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7871655.4,
            "unit": "ns",
            "range": "± 252960.12701123705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37439.391304347824,
            "unit": "ns",
            "range": "± 3115.8054360835745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3655260.9073660714,
            "unit": "ns",
            "range": "± 9130.609497514592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209160.3294270833,
            "unit": "ns",
            "range": "± 2789.2107709836064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779374.3209885817,
            "unit": "ns",
            "range": "± 4756.017040106415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964861.104266827,
            "unit": "ns",
            "range": "± 24906.1462980528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611679.7527043269,
            "unit": "ns",
            "range": "± 820.3525889726905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587207.5607722356,
            "unit": "ns",
            "range": "± 3043.7698866455794"
          }
        ]
      }
    ]
  }
}