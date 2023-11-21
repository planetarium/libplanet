window.BENCHMARK_DATA = {
  "lastUpdate": 1700548021233,
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
        "date": 1698993046528,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991208,
            "unit": "ns",
            "range": "± 104768.52954889834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1705436.3636363635,
            "unit": "ns",
            "range": "± 63788.74687850365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1460540.9090909092,
            "unit": "ns",
            "range": "± 123394.768925367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5603102.53164557,
            "unit": "ns",
            "range": "± 290396.7202323637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34490.769230769234,
            "unit": "ns",
            "range": "± 1609.7091232699347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4979853.846153846,
            "unit": "ns",
            "range": "± 29259.23259943248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13103293.333333334,
            "unit": "ns",
            "range": "± 98312.10844380598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32116906.666666668,
            "unit": "ns",
            "range": "± 280195.6063351526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63466635.71428572,
            "unit": "ns",
            "range": "± 535777.8728269665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128083473.33333333,
            "unit": "ns",
            "range": "± 783653.7368239211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3287384.8958333335,
            "unit": "ns",
            "range": "± 5881.5599941316605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1033538.5516826923,
            "unit": "ns",
            "range": "± 2285.6179581900756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745146.58203125,
            "unit": "ns",
            "range": "± 3557.4756955198427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930324.6512276786,
            "unit": "ns",
            "range": "± 2946.3508159579465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627568.896484375,
            "unit": "ns",
            "range": "± 767.2983503007815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557150.0209263393,
            "unit": "ns",
            "range": "± 880.2759469296753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119200,
            "unit": "ns",
            "range": "± 84070.53338318566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2242823.404255319,
            "unit": "ns",
            "range": "± 83749.7026932191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774196.4285714286,
            "unit": "ns",
            "range": "± 72498.90156073557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2756788,
            "unit": "ns",
            "range": "± 71347.51408890619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6407700,
            "unit": "ns",
            "range": "± 186079.26764192147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174655.88235294117,
            "unit": "ns",
            "range": "± 7104.137586760566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163425.8064516129,
            "unit": "ns",
            "range": "± 7144.961207064003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139090.47619047618,
            "unit": "ns",
            "range": "± 3226.2834286380917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2728841.1764705884,
            "unit": "ns",
            "range": "± 53633.37415760276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2431340,
            "unit": "ns",
            "range": "± 43546.507158603265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10186.021505376344,
            "unit": "ns",
            "range": "± 1486.2113634755308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53854.21686746988,
            "unit": "ns",
            "range": "± 2862.8529691771896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44333.333333333336,
            "unit": "ns",
            "range": "± 1845.3970293891857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55015.30612244898,
            "unit": "ns",
            "range": "± 10227.951917211329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2576.595744680851,
            "unit": "ns",
            "range": "± 361.42654391779826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10362.637362637362,
            "unit": "ns",
            "range": "± 1275.1164087728837"
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
        "date": 1698996704017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963503.125,
            "unit": "ns",
            "range": "± 92762.44300489742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727231.6666666667,
            "unit": "ns",
            "range": "± 75955.23322854232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1377398.9473684211,
            "unit": "ns",
            "range": "± 116831.0504984968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5208812.903225807,
            "unit": "ns",
            "range": "± 144673.03075541407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34145.16129032258,
            "unit": "ns",
            "range": "± 1565.6850403865112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4950766.666666667,
            "unit": "ns",
            "range": "± 36282.06299589502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12681358.333333334,
            "unit": "ns",
            "range": "± 32278.629528566176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31953546.666666668,
            "unit": "ns",
            "range": "± 385362.54704714974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64030633.333333336,
            "unit": "ns",
            "range": "± 494559.5120431725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128395442.85714285,
            "unit": "ns",
            "range": "± 860616.0617338521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3343238.7834821427,
            "unit": "ns",
            "range": "± 12482.238339120995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059274.720982143,
            "unit": "ns",
            "range": "± 1954.9739906525922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755298.9708533654,
            "unit": "ns",
            "range": "± 1434.619849209805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912892.5083705357,
            "unit": "ns",
            "range": "± 3190.361225627214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614308.14453125,
            "unit": "ns",
            "range": "± 1494.879496238326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562097.5130208334,
            "unit": "ns",
            "range": "± 1549.3536919550693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2122662.962962963,
            "unit": "ns",
            "range": "± 58764.32819156761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251089.5833333335,
            "unit": "ns",
            "range": "± 87289.16298310335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2812705.5555555555,
            "unit": "ns",
            "range": "± 56994.163501209616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2625335.4430379746,
            "unit": "ns",
            "range": "± 134992.3796880389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6469782.142857143,
            "unit": "ns",
            "range": "± 277322.26551081677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166238.96103896105,
            "unit": "ns",
            "range": "± 8466.8262220727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161739.72602739726,
            "unit": "ns",
            "range": "± 7239.988100934577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139013.04347826086,
            "unit": "ns",
            "range": "± 4555.66112756192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2735393.3333333335,
            "unit": "ns",
            "range": "± 49336.2293229785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2465073.3333333335,
            "unit": "ns",
            "range": "± 31681.05487661732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10161.111111111111,
            "unit": "ns",
            "range": "± 1195.4684516858986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56717.89473684211,
            "unit": "ns",
            "range": "± 8840.958585595004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52793.333333333336,
            "unit": "ns",
            "range": "± 4594.667157927202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52668.75,
            "unit": "ns",
            "range": "± 9734.370063148195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2354.255319148936,
            "unit": "ns",
            "range": "± 297.17844956419844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9768.60465116279,
            "unit": "ns",
            "range": "± 849.4304843498484"
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
        "date": 1699333901652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015006.5934065934,
            "unit": "ns",
            "range": "± 143500.5743714388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1802685.4838709678,
            "unit": "ns",
            "range": "± 81585.83902914709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1459580.8510638298,
            "unit": "ns",
            "range": "± 137007.03480611744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5715913.333333333,
            "unit": "ns",
            "range": "± 457544.75195869507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34947.36842105263,
            "unit": "ns",
            "range": "± 2592.8232417235754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5135320,
            "unit": "ns",
            "range": "± 64684.87568865803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13436740,
            "unit": "ns",
            "range": "± 93198.61127107605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32899261.53846154,
            "unit": "ns",
            "range": "± 353435.1202565603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67909750,
            "unit": "ns",
            "range": "± 690413.8106961651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134812514.2857143,
            "unit": "ns",
            "range": "± 1208515.8907692353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3343452.5260416665,
            "unit": "ns",
            "range": "± 12119.700015568791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068011.2079326923,
            "unit": "ns",
            "range": "± 6016.843364268763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753045.2287946428,
            "unit": "ns",
            "range": "± 3209.2104575216626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969863.002232143,
            "unit": "ns",
            "range": "± 3327.117924683877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626574.9774639423,
            "unit": "ns",
            "range": "± 1595.704180927201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565700.4115513393,
            "unit": "ns",
            "range": "± 1418.7717950187164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2253020,
            "unit": "ns",
            "range": "± 84710.0632639465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2395238.888888889,
            "unit": "ns",
            "range": "± 98500.769878548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2868568,
            "unit": "ns",
            "range": "± 73627.58043016217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2867584.4444444445,
            "unit": "ns",
            "range": "± 104824.31396379275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6716902.94117647,
            "unit": "ns",
            "range": "± 151306.36487502235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181595.45454545456,
            "unit": "ns",
            "range": "± 8403.39550087082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171984.44444444444,
            "unit": "ns",
            "range": "± 6131.1409124965385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146098.86363636365,
            "unit": "ns",
            "range": "± 7684.68389134692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2837400,
            "unit": "ns",
            "range": "± 31337.19834318314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2655614.285714286,
            "unit": "ns",
            "range": "± 38779.2342754342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13026.315789473685,
            "unit": "ns",
            "range": "± 2191.143222753908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59373.68421052631,
            "unit": "ns",
            "range": "± 5812.993708637825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47545.833333333336,
            "unit": "ns",
            "range": "± 3534.399872133931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64263.26530612245,
            "unit": "ns",
            "range": "± 10063.073127740246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3168.75,
            "unit": "ns",
            "range": "± 703.5717148199868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11597.916666666666,
            "unit": "ns",
            "range": "± 2050.3134120712616"
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
        "date": 1699887836093,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002625.5319148937,
            "unit": "ns",
            "range": "± 112665.79461662596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1681931.3725490195,
            "unit": "ns",
            "range": "± 64333.759380891395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1404762.6262626264,
            "unit": "ns",
            "range": "± 141624.8944635366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5535534.090909091,
            "unit": "ns",
            "range": "± 363563.64709788864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34553.968253968254,
            "unit": "ns",
            "range": "± 1595.6417858195348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4863233.333333333,
            "unit": "ns",
            "range": "± 39336.70889470377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12695450,
            "unit": "ns",
            "range": "± 42248.94627725597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32422128.57142857,
            "unit": "ns",
            "range": "± 327996.94517473184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63766078.571428575,
            "unit": "ns",
            "range": "± 650777.1592826196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126436591.66666667,
            "unit": "ns",
            "range": "± 1431589.5669171596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3410348.465401786,
            "unit": "ns",
            "range": "± 16700.92375845454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081867.0479910714,
            "unit": "ns",
            "range": "± 6304.324984117629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750806.3997395834,
            "unit": "ns",
            "range": "± 4686.667381506979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942529.4363839286,
            "unit": "ns",
            "range": "± 7249.176141460683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615407.4869791666,
            "unit": "ns",
            "range": "± 4181.456042283945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562485.0376674107,
            "unit": "ns",
            "range": "± 1986.1090711486102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121760,
            "unit": "ns",
            "range": "± 62975.80049730104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2318562.8571428573,
            "unit": "ns",
            "range": "± 74392.84471330435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767642.8571428573,
            "unit": "ns",
            "range": "± 89039.57245059566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2690456.4102564105,
            "unit": "ns",
            "range": "± 137735.2123627387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6257402.94117647,
            "unit": "ns",
            "range": "± 180778.70531154284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166153.57142857142,
            "unit": "ns",
            "range": "± 8862.747900297858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158776.92307692306,
            "unit": "ns",
            "range": "± 8126.530594324954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138711.36363636365,
            "unit": "ns",
            "range": "± 3713.909487137097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2679392.8571428573,
            "unit": "ns",
            "range": "± 33930.07434496637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2588157.6923076925,
            "unit": "ns",
            "range": "± 43032.90333257529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12037.209302325582,
            "unit": "ns",
            "range": "± 1589.1578614531443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61069.791666666664,
            "unit": "ns",
            "range": "± 7478.461983613401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48695.78947368421,
            "unit": "ns",
            "range": "± 5353.164023415511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66395.45454545454,
            "unit": "ns",
            "range": "± 9972.409168230099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3200,
            "unit": "ns",
            "range": "± 681.3299687492026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12522.58064516129,
            "unit": "ns",
            "range": "± 1713.636422821749"
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
        "date": 1699930067972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1064244,
            "unit": "ns",
            "range": "± 146044.6291412666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1848177.6315789474,
            "unit": "ns",
            "range": "± 88698.8051008343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554564.2857142857,
            "unit": "ns",
            "range": "± 159469.63531540692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5618176.19047619,
            "unit": "ns",
            "range": "± 202557.35087843557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35836.36363636364,
            "unit": "ns",
            "range": "± 2704.1977508022774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5174136.666666667,
            "unit": "ns",
            "range": "± 47509.80149500983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13844831.746031746,
            "unit": "ns",
            "range": "± 631611.2940075328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34150169.23076923,
            "unit": "ns",
            "range": "± 492852.6172271912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68477053.33333333,
            "unit": "ns",
            "range": "± 898670.1451642443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134830173.33333334,
            "unit": "ns",
            "range": "± 1805644.229103629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3387063.28125,
            "unit": "ns",
            "range": "± 40021.772549258974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060879.1145833333,
            "unit": "ns",
            "range": "± 1456.4376971422332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758665.4017857143,
            "unit": "ns",
            "range": "± 4073.328946423055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954965.9458705357,
            "unit": "ns",
            "range": "± 2415.8391821851556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639481.77734375,
            "unit": "ns",
            "range": "± 920.2629087467062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575760.6595552885,
            "unit": "ns",
            "range": "± 1827.7354832793767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2264450.769230769,
            "unit": "ns",
            "range": "± 102502.03370402726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2374062.7906976743,
            "unit": "ns",
            "range": "± 83021.0989340484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2870800,
            "unit": "ns",
            "range": "± 84250.65281646191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2979003.092783505,
            "unit": "ns",
            "range": "± 269948.40496750805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6631025.5813953485,
            "unit": "ns",
            "range": "± 203490.16484133556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194162.96296296295,
            "unit": "ns",
            "range": "± 9860.08930543284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182162.33766233767,
            "unit": "ns",
            "range": "± 9245.269614938496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142061.53846153847,
            "unit": "ns",
            "range": "± 1613.2464481796023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2839900,
            "unit": "ns",
            "range": "± 28523.236141784473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2649503.3333333335,
            "unit": "ns",
            "range": "± 48643.15935854652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14115.30612244898,
            "unit": "ns",
            "range": "± 2365.608486958562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58513.04347826087,
            "unit": "ns",
            "range": "± 5290.863312494045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50730.52631578947,
            "unit": "ns",
            "range": "± 5231.0259699955795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63506.45161290323,
            "unit": "ns",
            "range": "± 9159.870020575012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3989.795918367347,
            "unit": "ns",
            "range": "± 1011.8361176867198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13377.894736842105,
            "unit": "ns",
            "range": "± 2295.192892620075"
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
        "date": 1700037278627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1099258.5858585858,
            "unit": "ns",
            "range": "± 113264.91343000413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871226.1538461538,
            "unit": "ns",
            "range": "± 87343.57853636672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551266.3265306123,
            "unit": "ns",
            "range": "± 158657.04564486965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5554289.285714285,
            "unit": "ns",
            "range": "± 150563.55699759218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34763.529411764706,
            "unit": "ns",
            "range": "± 1886.2186321556992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5198250,
            "unit": "ns",
            "range": "± 35197.61246273564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13579893.333333334,
            "unit": "ns",
            "range": "± 215902.66810588076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33521815.384615384,
            "unit": "ns",
            "range": "± 367409.12220156303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68583864.28571428,
            "unit": "ns",
            "range": "± 506889.05113923614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140066273.33333334,
            "unit": "ns",
            "range": "± 2118551.4308018065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306450.5859375,
            "unit": "ns",
            "range": "± 29249.617623628597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079338.2291666667,
            "unit": "ns",
            "range": "± 4832.834299329749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738365.0651041666,
            "unit": "ns",
            "range": "± 3283.5041999432924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930832.798549107,
            "unit": "ns",
            "range": "± 4860.330738881064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616114.27734375,
            "unit": "ns",
            "range": "± 2701.0481942248753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569543.28125,
            "unit": "ns",
            "range": "± 1102.1386171945792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2270980.9523809524,
            "unit": "ns",
            "range": "± 81389.28508040917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2289817.5,
            "unit": "ns",
            "range": "± 62984.14081012572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2888950,
            "unit": "ns",
            "range": "± 69869.90339194695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2706858.4615384615,
            "unit": "ns",
            "range": "± 112996.84162110972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6725655.555555556,
            "unit": "ns",
            "range": "± 240705.80738127342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181490.47619047618,
            "unit": "ns",
            "range": "± 8096.070617713546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174407.59493670886,
            "unit": "ns",
            "range": "± 9065.145594767522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150418.42105263157,
            "unit": "ns",
            "range": "± 7628.520355024135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2767271.4285714286,
            "unit": "ns",
            "range": "± 30238.269908064634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532733.3333333335,
            "unit": "ns",
            "range": "± 44084.00530588757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11866.304347826086,
            "unit": "ns",
            "range": "± 1733.9706813948535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52670.32967032967,
            "unit": "ns",
            "range": "± 5215.96895239342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44507.24637681159,
            "unit": "ns",
            "range": "± 2143.7541864531036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61193.81443298969,
            "unit": "ns",
            "range": "± 12007.947146516739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2660.824742268041,
            "unit": "ns",
            "range": "± 556.6934938079571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10174.157303370786,
            "unit": "ns",
            "range": "± 1521.5518461192867"
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
        "date": 1700043276740,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991636.0824742268,
            "unit": "ns",
            "range": "± 127649.87366618554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1712685.294117647,
            "unit": "ns",
            "range": "± 77095.44533211403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1374306.25,
            "unit": "ns",
            "range": "± 119739.33426845429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5506596.629213483,
            "unit": "ns",
            "range": "± 336991.94266380736"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33732.43243243243,
            "unit": "ns",
            "range": "± 1615.9401274094548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4973600,
            "unit": "ns",
            "range": "± 26707.32911714364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12560908.333333334,
            "unit": "ns",
            "range": "± 70148.74402210483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31153873.333333332,
            "unit": "ns",
            "range": "± 263350.5308429017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63096414.28571428,
            "unit": "ns",
            "range": "± 544161.204702519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130231592.85714285,
            "unit": "ns",
            "range": "± 1043422.114939613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3347882.3381696427,
            "unit": "ns",
            "range": "± 21216.48590551246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058050.4036458333,
            "unit": "ns",
            "range": "± 3288.6993951020213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731119.6809895834,
            "unit": "ns",
            "range": "± 2697.606857525421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955282.7845982143,
            "unit": "ns",
            "range": "± 2807.7679854540015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602066.328125,
            "unit": "ns",
            "range": "± 2876.9935143981684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561959.1080729166,
            "unit": "ns",
            "range": "± 1506.4076802817754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2029814.5833333333,
            "unit": "ns",
            "range": "± 69521.95119309465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2228618.75,
            "unit": "ns",
            "range": "± 41324.975801565815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2703007.1428571427,
            "unit": "ns",
            "range": "± 32465.732568491214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2639440.9836065574,
            "unit": "ns",
            "range": "± 118687.56797723056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6266843.243243244,
            "unit": "ns",
            "range": "± 188262.3192671753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170077.77777777778,
            "unit": "ns",
            "range": "± 8916.838004584362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160277.19298245615,
            "unit": "ns",
            "range": "± 6818.646114669153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140300,
            "unit": "ns",
            "range": "± 4017.000908177181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707585.714285714,
            "unit": "ns",
            "range": "± 36175.551819572145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2473871.4285714286,
            "unit": "ns",
            "range": "± 41801.95852186518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10969.072164948453,
            "unit": "ns",
            "range": "± 2195.039902102307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49973.86363636364,
            "unit": "ns",
            "range": "± 3301.270891404188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43787.5,
            "unit": "ns",
            "range": "± 854.692927313664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48938.46153846154,
            "unit": "ns",
            "range": "± 7046.14582166527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2306.451612903226,
            "unit": "ns",
            "range": "± 356.5555178470147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9480.851063829787,
            "unit": "ns",
            "range": "± 1438.9569546600233"
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
        "date": 1700052399301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1074845,
            "unit": "ns",
            "range": "± 129017.31335934975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1844863.2183908045,
            "unit": "ns",
            "range": "± 102849.68385265599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1496208.9887640448,
            "unit": "ns",
            "range": "± 113690.00679724096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5623325.287356322,
            "unit": "ns",
            "range": "± 354282.61324935005"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34838.88888888889,
            "unit": "ns",
            "range": "± 2569.951446419525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4918300,
            "unit": "ns",
            "range": "± 47475.76825527493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13711642.307692308,
            "unit": "ns",
            "range": "± 170872.01088113905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32761766.666666668,
            "unit": "ns",
            "range": "± 668609.1225996916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64313653.333333336,
            "unit": "ns",
            "range": "± 731298.5992315966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133978533.33333333,
            "unit": "ns",
            "range": "± 1566366.6623598645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277533.3426339286,
            "unit": "ns",
            "range": "± 14443.527601892518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070193.7779017857,
            "unit": "ns",
            "range": "± 3555.1335463302444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746767.9622395834,
            "unit": "ns",
            "range": "± 3564.7481899312615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1890460.0520833333,
            "unit": "ns",
            "range": "± 4608.94547507064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627457.4637276785,
            "unit": "ns",
            "range": "± 3064.1811136069286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555733.6688701923,
            "unit": "ns",
            "range": "± 751.9097345201449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184577.777777778,
            "unit": "ns",
            "range": "± 62980.990833339594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2446516,
            "unit": "ns",
            "range": "± 271434.21649237274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2835807.9365079366,
            "unit": "ns",
            "range": "± 109781.29328510728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2738775,
            "unit": "ns",
            "range": "± 79655.81606046142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6403777.586206896,
            "unit": "ns",
            "range": "± 185960.4045730314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173337.87878787878,
            "unit": "ns",
            "range": "± 8160.703498172299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174303.38983050847,
            "unit": "ns",
            "range": "± 7487.206700298734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143615.25423728814,
            "unit": "ns",
            "range": "± 6337.622026556202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809980,
            "unit": "ns",
            "range": "± 38498.593666336885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2599307.1428571427,
            "unit": "ns",
            "range": "± 41305.15826021127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12698.888888888889,
            "unit": "ns",
            "range": "± 1636.8985777401545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59056.701030927834,
            "unit": "ns",
            "range": "± 6976.417227830469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50228.260869565216,
            "unit": "ns",
            "range": "± 5165.158552866909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73395.8762886598,
            "unit": "ns",
            "range": "± 17386.8060460953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3016.494845360825,
            "unit": "ns",
            "range": "± 690.6639939777659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12555.102040816326,
            "unit": "ns",
            "range": "± 2435.2701515704193"
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
        "date": 1700547970522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946579.5918367347,
            "unit": "ns",
            "range": "± 104542.91375471861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718513.253012048,
            "unit": "ns",
            "range": "± 91021.52354825182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1300102.0408163266,
            "unit": "ns",
            "range": "± 92764.83067534333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5129203.191489362,
            "unit": "ns",
            "range": "± 289789.0213093404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34453.846153846156,
            "unit": "ns",
            "range": "± 1603.2269142144348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4990728.571428572,
            "unit": "ns",
            "range": "± 31756.14849179552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13315793.333333334,
            "unit": "ns",
            "range": "± 175629.77077065376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32424028.57142857,
            "unit": "ns",
            "range": "± 458440.6268554832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64597742.85714286,
            "unit": "ns",
            "range": "± 536879.8787213245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128426100,
            "unit": "ns",
            "range": "± 1366766.720611615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296128.019831731,
            "unit": "ns",
            "range": "± 5525.665496639451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1026558.3723958334,
            "unit": "ns",
            "range": "± 6841.505245687192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724664.5357572115,
            "unit": "ns",
            "range": "± 998.8672372158509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908366.9140625,
            "unit": "ns",
            "range": "± 5204.0496377978825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614693.0859375,
            "unit": "ns",
            "range": "± 1015.3095871994651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586492.0052083334,
            "unit": "ns",
            "range": "± 1742.9482158760495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2078301.0204081633,
            "unit": "ns",
            "range": "± 48759.12360116558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284910,
            "unit": "ns",
            "range": "± 81081.46836867541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2784138.4615384615,
            "unit": "ns",
            "range": "± 73047.46991880321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2624016,
            "unit": "ns",
            "range": "± 68277.78237953153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5686981.428571428,
            "unit": "ns",
            "range": "± 186609.1712824498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171078.66666666666,
            "unit": "ns",
            "range": "± 8155.02321294082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166657.37704918033,
            "unit": "ns",
            "range": "± 7408.76640690818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143997.16981132075,
            "unit": "ns",
            "range": "± 5930.287441910932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720040,
            "unit": "ns",
            "range": "± 36427.87002125865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2539542.1052631577,
            "unit": "ns",
            "range": "± 53227.84688685545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10811.363636363636,
            "unit": "ns",
            "range": "± 826.4912427211015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58575.510204081635,
            "unit": "ns",
            "range": "± 7546.816919290999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43898.360655737706,
            "unit": "ns",
            "range": "± 1964.560324286216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55363.04347826087,
            "unit": "ns",
            "range": "± 11505.86775663851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2727.5510204081634,
            "unit": "ns",
            "range": "± 586.9334271325376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11253.535353535353,
            "unit": "ns",
            "range": "± 2190.8116626228534"
          }
        ]
      }
    ]
  }
}