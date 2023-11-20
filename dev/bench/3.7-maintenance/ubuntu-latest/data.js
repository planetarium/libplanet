window.BENCHMARK_DATA = {
  "lastUpdate": 1700490875489,
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
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414422833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49693.78723404255,
            "unit": "ns",
            "range": "± 4597.197121464199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5122429.132254465,
            "unit": "ns",
            "range": "± 4040.5552248167605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1605610.6979166667,
            "unit": "ns",
            "range": "± 382.4630906531098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136038.8246372768,
            "unit": "ns",
            "range": "± 1067.435386075598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526605.434375,
            "unit": "ns",
            "range": "± 3902.888656578481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804437.052734375,
            "unit": "ns",
            "range": "± 987.3164885617598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715744.1974158654,
            "unit": "ns",
            "range": "± 621.3554819622989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7744396.083333333,
            "unit": "ns",
            "range": "± 23709.526315034916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19605902.714285713,
            "unit": "ns",
            "range": "± 54619.366370192525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51243842.071428575,
            "unit": "ns",
            "range": "± 192465.31158845391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101566727.71428572,
            "unit": "ns",
            "range": "± 182082.19928855824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203274045.07692307,
            "unit": "ns",
            "range": "± 375347.5693479448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264784.4615384615,
            "unit": "ns",
            "range": "± 19489.44346569609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419437.5714285714,
            "unit": "ns",
            "range": "± 34770.08029395894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4151586,
            "unit": "ns",
            "range": "± 33392.003608648585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4163772.380952381,
            "unit": "ns",
            "range": "± 82117.3203365016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10002545.05,
            "unit": "ns",
            "range": "± 214984.332004767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270729.5641025641,
            "unit": "ns",
            "range": "± 8510.378174523992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263906.15,
            "unit": "ns",
            "range": "± 5903.924977014065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230737.95918367346,
            "unit": "ns",
            "range": "± 9117.598457011545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174213.4,
            "unit": "ns",
            "range": "± 30499.418668464583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3883847.4285714286,
            "unit": "ns",
            "range": "± 30329.117879368983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20374.827956989247,
            "unit": "ns",
            "range": "± 1229.6008598026037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91667.46391752578,
            "unit": "ns",
            "range": "± 5868.064842968988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72382.80952380953,
            "unit": "ns",
            "range": "± 3138.7027310819644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84207.67708333333,
            "unit": "ns",
            "range": "± 8773.452407533694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5589.836734693878,
            "unit": "ns",
            "range": "± 654.9925740332575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20686.26595744681,
            "unit": "ns",
            "range": "± 1474.8532945123793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333132.4893617022,
            "unit": "ns",
            "range": "± 99861.55105210484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536799.2,
            "unit": "ns",
            "range": "± 75543.94695503292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993171.1276595744,
            "unit": "ns",
            "range": "± 117621.17441012879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8385292.113207547,
            "unit": "ns",
            "range": "± 347892.1666647837"
          }
        ]
      },
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
          "distinct": false,
          "id": "630d3e5a289c2ac575750f4fd85df62a6da710f1",
          "message": "Merge pull request #3466 from planetarium/use-nodejs-18\n\nUse Nodejs 18",
          "timestamp": "2023-10-30T14:38:44+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/630d3e5a289c2ac575750f4fd85df62a6da710f1"
        },
        "date": 1698646390210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51075.18681318681,
            "unit": "ns",
            "range": "± 3114.3060861203735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5193351.433035715,
            "unit": "ns",
            "range": "± 15897.620736747247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1618025.1481770833,
            "unit": "ns",
            "range": "± 3411.155255071018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152066.2470703125,
            "unit": "ns",
            "range": "± 564.1461640325142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688824.4635416665,
            "unit": "ns",
            "range": "± 1974.2169690507758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820089.6872395833,
            "unit": "ns",
            "range": "± 371.3006285575444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758258.0360630581,
            "unit": "ns",
            "range": "± 459.4305647625557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8638025.92857143,
            "unit": "ns",
            "range": "± 143076.7512472101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22764006.8,
            "unit": "ns",
            "range": "± 281755.7912963433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57631018.692307696,
            "unit": "ns",
            "range": "± 379654.93456303724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114252831.53333333,
            "unit": "ns",
            "range": "± 868406.7438729279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229008314.06666666,
            "unit": "ns",
            "range": "± 2187109.5775125693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3569741.45,
            "unit": "ns",
            "range": "± 81514.79595526782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3852252.576923077,
            "unit": "ns",
            "range": "± 86101.90050303099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4495750,
            "unit": "ns",
            "range": "± 99522.06157318979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4526936.548387097,
            "unit": "ns",
            "range": "± 135003.05019784768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10898531.043478262,
            "unit": "ns",
            "range": "± 289145.4727377789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274545.5172413793,
            "unit": "ns",
            "range": "± 7474.595529528622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270701.19178082194,
            "unit": "ns",
            "range": "± 12245.739504752863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237492.4516129032,
            "unit": "ns",
            "range": "± 10790.302837904313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4461366.2,
            "unit": "ns",
            "range": "± 65624.54011506888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4163524.533333333,
            "unit": "ns",
            "range": "± 70260.15498017418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21228.291666666668,
            "unit": "ns",
            "range": "± 1775.0729438928279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90555.09782608696,
            "unit": "ns",
            "range": "± 5120.959064235687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73886.86206896552,
            "unit": "ns",
            "range": "± 3242.47097376815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90878.11340206186,
            "unit": "ns",
            "range": "± 10425.323942685076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6233.385416666667,
            "unit": "ns",
            "range": "± 833.4847881009068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20855.010752688173,
            "unit": "ns",
            "range": "± 1624.9888995916763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416471.469879518,
            "unit": "ns",
            "range": "± 69956.54143306772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679937.0454545454,
            "unit": "ns",
            "range": "± 63537.22974796316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2119218.3626373624,
            "unit": "ns",
            "range": "± 118474.17372214422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9030356.23076923,
            "unit": "ns",
            "range": "± 261077.09849214455"
          }
        ]
      },
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
          "id": "14419c5bf4f1227746805085cc75c6e14c984e90",
          "message": "Merge pull request #3464 from OnedgeLee/prepare/3.7.1\n\n🔧 Prepare 3.7.1",
          "timestamp": "2023-10-30T17:36:19+09:00",
          "tree_id": "128822e516289030ef4a4d75fb9f83ebcd06916b",
          "url": "https://github.com/planetarium/libplanet/commit/14419c5bf4f1227746805085cc75c6e14c984e90"
        },
        "date": 1698655991395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63335.585106382976,
            "unit": "ns",
            "range": "± 8640.264286093292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6014603.6953125,
            "unit": "ns",
            "range": "± 80762.19162376737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1968307.28359375,
            "unit": "ns",
            "range": "± 27599.299227787364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345711.8966145834,
            "unit": "ns",
            "range": "± 24705.475726800436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3054792.5966145834,
            "unit": "ns",
            "range": "± 15934.400775715996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947900.1967447917,
            "unit": "ns",
            "range": "± 8577.776158586106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 870808.2913411459,
            "unit": "ns",
            "range": "± 7300.186749112613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10562247.3125,
            "unit": "ns",
            "range": "± 415590.461439397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27415425.44827586,
            "unit": "ns",
            "range": "± 781266.674055737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66481675.47058824,
            "unit": "ns",
            "range": "± 1299590.0648269397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129594746.28,
            "unit": "ns",
            "range": "± 5169446.125909204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260849905.6,
            "unit": "ns",
            "range": "± 10437972.456605019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3963202.533333333,
            "unit": "ns",
            "range": "± 198307.28663149054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4151830.5833333335,
            "unit": "ns",
            "range": "± 241206.52569188687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5121759.551282051,
            "unit": "ns",
            "range": "± 263962.8092819457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4999365.705882353,
            "unit": "ns",
            "range": "± 201968.20093502782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12580976.2,
            "unit": "ns",
            "range": "± 417820.4808658674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315855.76923076925,
            "unit": "ns",
            "range": "± 8424.174947412677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313032,
            "unit": "ns",
            "range": "± 12921.49286467519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279842.3369565217,
            "unit": "ns",
            "range": "± 15794.41912166152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4962585.514285714,
            "unit": "ns",
            "range": "± 161453.25852929612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4514500.647058823,
            "unit": "ns",
            "range": "± 92546.01168468929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21693.87777777778,
            "unit": "ns",
            "range": "± 1449.6124769083945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95317.69047619047,
            "unit": "ns",
            "range": "± 5088.680835936626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82138.77586206897,
            "unit": "ns",
            "range": "± 3580.966012189975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94720.54639175258,
            "unit": "ns",
            "range": "± 10718.80020495591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5557.123711340206,
            "unit": "ns",
            "range": "± 826.3178774152732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20508.08695652174,
            "unit": "ns",
            "range": "± 1973.4931135624843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1618996.094117647,
            "unit": "ns",
            "range": "± 87384.9816033875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3213009.736842105,
            "unit": "ns",
            "range": "± 107013.47657912296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2363125.5,
            "unit": "ns",
            "range": "± 116984.08991042855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10923863.427835051,
            "unit": "ns",
            "range": "± 818689.9107588655"
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
          "id": "488a3058fdbab4bb136baf75ce95cf52206e06d3",
          "message": "Merge pull request #3500 from greymistcube/port/3.6.1-to-3.7.1\n\n🔀 Port 3.6.1 to 3.7.1",
          "timestamp": "2023-11-20T23:23:14+09:00",
          "tree_id": "acbf576ffed94e9f951fd1e72fa90f9712fea70c",
          "url": "https://github.com/planetarium/libplanet/commit/488a3058fdbab4bb136baf75ce95cf52206e06d3"
        },
        "date": 1700490852479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199153.93220338982,
            "unit": "ns",
            "range": "± 8735.738442355942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189774.44444444444,
            "unit": "ns",
            "range": "± 9336.088917475025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169623.92307692306,
            "unit": "ns",
            "range": "± 4646.1688576553215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3078035.466666667,
            "unit": "ns",
            "range": "± 56459.44590445513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2844475.066666667,
            "unit": "ns",
            "range": "± 31037.294164708797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11995.021739130434,
            "unit": "ns",
            "range": "± 1293.546279629838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66576.23711340207,
            "unit": "ns",
            "range": "± 7708.8751810997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61331.17010309279,
            "unit": "ns",
            "range": "± 7256.728187978452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64086.23469387755,
            "unit": "ns",
            "range": "± 13486.629004047103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3163.6526315789474,
            "unit": "ns",
            "range": "± 723.8406249941607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13536.082474226803,
            "unit": "ns",
            "range": "± 2355.5078967094296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3724872.9653645833,
            "unit": "ns",
            "range": "± 53771.0896074681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198812.8921274038,
            "unit": "ns",
            "range": "± 2520.875743999987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766225.8138521635,
            "unit": "ns",
            "range": "± 2844.407885127856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953470.1812220982,
            "unit": "ns",
            "range": "± 24813.314047120122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626479.697641226,
            "unit": "ns",
            "range": "± 1591.9423730394574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576015.4959635417,
            "unit": "ns",
            "range": "± 721.2786230589575"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41434.278947368424,
            "unit": "ns",
            "range": "± 3716.7327025938794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397126.785714286,
            "unit": "ns",
            "range": "± 54464.11096505923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2462957.4423076925,
            "unit": "ns",
            "range": "± 101632.0477851185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3174698.7333333334,
            "unit": "ns",
            "range": "± 51684.19329718663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2913617.1279069767,
            "unit": "ns",
            "range": "± 61080.02101732855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6436139.65,
            "unit": "ns",
            "range": "± 124347.97304520085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5595711.428571428,
            "unit": "ns",
            "range": "± 12969.553338577154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14235835.285714285,
            "unit": "ns",
            "range": "± 196049.87317219866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37186112.916666664,
            "unit": "ns",
            "range": "± 211843.64849167687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75229348,
            "unit": "ns",
            "range": "± 340800.9855258412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148073598.19230768,
            "unit": "ns",
            "range": "± 910386.0700947506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941140.6666666666,
            "unit": "ns",
            "range": "± 61541.61727037085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841382.6290322582,
            "unit": "ns",
            "range": "± 76453.97929071262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1437390.4052631578,
            "unit": "ns",
            "range": "± 159895.28753431857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5682993.853658536,
            "unit": "ns",
            "range": "± 300316.1357511395"
          }
        ]
      }
    ]
  }
}