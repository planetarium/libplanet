window.BENCHMARK_DATA = {
  "lastUpdate": 1678931347452,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "209fdb1c17f0cb26789b857f271544b8935dc5e2",
          "message": "Merge pull request #2905 from colibrishin/0.50-maintenance-bench-failing\n\nci/bench: cherrypick of bench pr update to 0.50-maintenance",
          "timestamp": "2023-03-13T10:51:25+09:00",
          "tree_id": "615717a9642490f590a5330c4a347ecae47b95d4",
          "url": "https://github.com/planetarium/libplanet/commit/209fdb1c17f0cb26789b857f271544b8935dc5e2"
        },
        "date": 1678673089913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111132.09278350516,
            "unit": "ns",
            "range": "± 8539.255156435964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93337.62105263158,
            "unit": "ns",
            "range": "± 15003.36091863657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200677.58241758242,
            "unit": "ns",
            "range": "± 22421.994537638922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183669.085106383,
            "unit": "ns",
            "range": "± 13339.247827176374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3433121.3571428573,
            "unit": "ns",
            "range": "± 95362.96508262107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9749165.935483871,
            "unit": "ns",
            "range": "± 616199.6894986519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16659.1,
            "unit": "ns",
            "range": "± 2032.530586582465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50227.57526881721,
            "unit": "ns",
            "range": "± 8745.107705897697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42769.88202247191,
            "unit": "ns",
            "range": "± 3725.465094532792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97548.56382978724,
            "unit": "ns",
            "range": "± 14952.09245241479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5367.885057471264,
            "unit": "ns",
            "range": "± 781.5005308109813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15459.489130434782,
            "unit": "ns",
            "range": "± 1757.3969855202665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4506916.038541666,
            "unit": "ns",
            "range": "± 77832.50696235153"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5544999.108695652,
            "unit": "ns",
            "range": "± 427792.78933140525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25666608.688405797,
            "unit": "ns",
            "range": "± 1227377.4953096285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6647351.074468086,
            "unit": "ns",
            "range": "± 593264.3595878914"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29048274.875,
            "unit": "ns",
            "range": "± 1009989.7897736314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6311526.815104167,
            "unit": "ns",
            "range": "± 85194.99748552345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873899.101171875,
            "unit": "ns",
            "range": "± 17960.326879057364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1253510.38984375,
            "unit": "ns",
            "range": "± 19415.06501476257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2424444.9346354166,
            "unit": "ns",
            "range": "± 32389.021371689974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858919.64609375,
            "unit": "ns",
            "range": "± 11282.040785758176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691391.9158854167,
            "unit": "ns",
            "range": "± 5762.64876483982"
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
          "id": "aaabbcbef70b2a687645c71efc7e4590d48d7a3c",
          "message": "Merge pull request #2935 from greymistcube/port/0.49.3-to-0.50.3\n\n🔀🚀 Port 0.49.3 to 0.50.3 and release 0.50.3",
          "timestamp": "2023-03-14T18:25:39+09:00",
          "tree_id": "ff7fb2fc6be7e74a14b2c5236392739d907b0fff",
          "url": "https://github.com/planetarium/libplanet/commit/aaabbcbef70b2a687645c71efc7e4590d48d7a3c"
        },
        "date": 1678786993654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138358.44252873564,
            "unit": "ns",
            "range": "± 8046.011567716108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113554.67368421053,
            "unit": "ns",
            "range": "± 15588.382063249286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243549.93103448275,
            "unit": "ns",
            "range": "± 16006.378460282423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208995.69892473117,
            "unit": "ns",
            "range": "± 12477.56278005074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238190.733333333,
            "unit": "ns",
            "range": "± 77311.67961427919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10813086.411764706,
            "unit": "ns",
            "range": "± 289286.2821364161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19392.752808988764,
            "unit": "ns",
            "range": "± 1728.5990404798047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62632.81443298969,
            "unit": "ns",
            "range": "± 7633.61274005999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51000.78723404255,
            "unit": "ns",
            "range": "± 6077.207162873455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120069.64516129032,
            "unit": "ns",
            "range": "± 18243.677137361483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6580.054945054945,
            "unit": "ns",
            "range": "± 904.4280987653942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19081.139784946237,
            "unit": "ns",
            "range": "± 2184.9443958271513"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5537591.97337963,
            "unit": "ns",
            "range": "± 287352.0174899966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6776401.04,
            "unit": "ns",
            "range": "± 272035.65501437563"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29386975.14285714,
            "unit": "ns",
            "range": "± 301401.4680352838"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7491102.830508474,
            "unit": "ns",
            "range": "± 305687.6703291231"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32900184.5,
            "unit": "ns",
            "range": "± 644304.4410164085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6975823.525390625,
            "unit": "ns",
            "range": "± 31795.293936769995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2153045.5751201925,
            "unit": "ns",
            "range": "± 33946.040260560585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1452383.529296875,
            "unit": "ns",
            "range": "± 25918.63001555035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2957954.8409598214,
            "unit": "ns",
            "range": "± 23485.711050679172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990842.380859375,
            "unit": "ns",
            "range": "± 5402.272251782488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862537.5419170673,
            "unit": "ns",
            "range": "± 4576.513043327758"
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
          "id": "599ba5d49bea770c77ec9c5bcb83314d8e56de50",
          "message": "Merge pull request #2936 from greymistcube/prepare/0.50.4\n\n🔧 Prepare 0.50.4",
          "timestamp": "2023-03-16T10:34:54+09:00",
          "tree_id": "6df23b5e65ea251201fdd4b86139e1111bcb91ab",
          "url": "https://github.com/planetarium/libplanet/commit/599ba5d49bea770c77ec9c5bcb83314d8e56de50"
        },
        "date": 1678931304873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124484.73195876289,
            "unit": "ns",
            "range": "± 8602.13808755739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95952.44791666667,
            "unit": "ns",
            "range": "± 10603.311949197552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223327.56,
            "unit": "ns",
            "range": "± 26982.050193655214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207139.94949494948,
            "unit": "ns",
            "range": "± 20222.977899153928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3699370.7666666666,
            "unit": "ns",
            "range": "± 65677.5624705018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9716719.542553192,
            "unit": "ns",
            "range": "± 375204.28134075564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17424.802197802197,
            "unit": "ns",
            "range": "± 2256.597099960618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54408.427083333336,
            "unit": "ns",
            "range": "± 6198.812137048249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55308.40206185567,
            "unit": "ns",
            "range": "± 7746.496270707102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121061.63157894737,
            "unit": "ns",
            "range": "± 15500.799382991774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8045.670212765957,
            "unit": "ns",
            "range": "± 743.3220352817734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18526.90625,
            "unit": "ns",
            "range": "± 3017.1243247699326"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4741743.848177084,
            "unit": "ns",
            "range": "± 55666.10096825338"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6165982.75,
            "unit": "ns",
            "range": "± 71071.11361564684"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25851447.974358976,
            "unit": "ns",
            "range": "± 901405.4174515917"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6655439.864583333,
            "unit": "ns",
            "range": "± 381827.0902828749"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30545136.914285716,
            "unit": "ns",
            "range": "± 974795.5438843202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6418069.008928572,
            "unit": "ns",
            "range": "± 35163.24234917609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913640.8341145834,
            "unit": "ns",
            "range": "± 26416.558217906844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226309.969140625,
            "unit": "ns",
            "range": "± 12702.93772253232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2465714.5814144737,
            "unit": "ns",
            "range": "± 54216.83401799838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 762252.3716796875,
            "unit": "ns",
            "range": "± 4472.437297387785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706994.4250651042,
            "unit": "ns",
            "range": "± 3886.6951717300385"
          }
        ]
      }
    ]
  }
}