window.BENCHMARK_DATA = {
  "lastUpdate": 1698996748863,
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
      }
    ]
  }
}