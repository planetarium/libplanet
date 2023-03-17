window.BENCHMARK_DATA = {
  "lastUpdate": 1679056047039,
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
          "id": "81316dce3bdfd83724ca35d33c890c8e104e2542",
          "message": "Merge pull request #2949 from greymistcube/refactor/validator-encoding\n\n♻️ Changed validator power to use Integer instead of Binary",
          "timestamp": "2023-03-16T10:51:57+09:00",
          "tree_id": "5b3d9db1e1d676d54f19d5d73ca860ba424f30ce",
          "url": "https://github.com/planetarium/libplanet/commit/81316dce3bdfd83724ca35d33c890c8e104e2542"
        },
        "date": 1678932598351,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 131526.08695652173,
            "unit": "ns",
            "range": "± 9971.681363347694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 133278.7111111111,
            "unit": "ns",
            "range": "± 24796.258776113988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254511.25,
            "unit": "ns",
            "range": "± 53552.02889016094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196681.1875,
            "unit": "ns",
            "range": "± 22811.538954204963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3863495.585106383,
            "unit": "ns",
            "range": "± 244817.6304293046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10706670.396226415,
            "unit": "ns",
            "range": "± 444530.91445838206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20702.802197802197,
            "unit": "ns",
            "range": "± 2669.2944520136166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60226.67032967033,
            "unit": "ns",
            "range": "± 9522.034754604063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55212.74736842105,
            "unit": "ns",
            "range": "± 6364.927120921909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133654.41919191918,
            "unit": "ns",
            "range": "± 23416.94803249708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8435.86170212766,
            "unit": "ns",
            "range": "± 1636.9016339299874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15932.747252747253,
            "unit": "ns",
            "range": "± 1423.7251731785768"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4942167.47907366,
            "unit": "ns",
            "range": "± 203472.9206761899"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5975506.128205128,
            "unit": "ns",
            "range": "± 305980.41414032265"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27974233.105882354,
            "unit": "ns",
            "range": "± 1505350.5111964"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6895576.757575758,
            "unit": "ns",
            "range": "± 323878.5427680739"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 47443188.217391305,
            "unit": "ns",
            "range": "± 17000092.597250175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7607579.22001008,
            "unit": "ns",
            "range": "± 329985.8665585663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915927.8182091345,
            "unit": "ns",
            "range": "± 12673.018910514502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1419132.571171875,
            "unit": "ns",
            "range": "± 55646.362023839734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2850472.6446126304,
            "unit": "ns",
            "range": "± 170715.687693329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913761.5482954546,
            "unit": "ns",
            "range": "± 28867.81270723811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781365.9646661932,
            "unit": "ns",
            "range": "± 17180.626809100675"
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
          "id": "cec749e51da5a9352feeeddd6a088626bbb591d6",
          "message": "Merge pull request #2950 from greymistcube/release/0.50.4\n\n🚀 Release 0.50.4",
          "timestamp": "2023-03-16T11:06:13+09:00",
          "tree_id": "57ef9e014cc1b48431b2c2f83edb7b48977a1b79",
          "url": "https://github.com/planetarium/libplanet/commit/cec749e51da5a9352feeeddd6a088626bbb591d6"
        },
        "date": 1678933370465,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140367.5,
            "unit": "ns",
            "range": "± 4390.225955175883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 134644.59473684212,
            "unit": "ns",
            "range": "± 17595.0237295697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277233.8947368421,
            "unit": "ns",
            "range": "± 41011.67349682379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245544.76086956522,
            "unit": "ns",
            "range": "± 22535.6528849993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4124299.125,
            "unit": "ns",
            "range": "± 337932.28449029004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11416154.768421052,
            "unit": "ns",
            "range": "± 779494.434624073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25930.327956989247,
            "unit": "ns",
            "range": "± 4169.323870281231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63300.07058823529,
            "unit": "ns",
            "range": "± 5937.827065253984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58896.93820224719,
            "unit": "ns",
            "range": "± 5417.663679943465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129153.32105263158,
            "unit": "ns",
            "range": "± 22670.61072626143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7929.179775280899,
            "unit": "ns",
            "range": "± 891.884516089868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21930,
            "unit": "ns",
            "range": "± 3782.252397570095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5415059.91212951,
            "unit": "ns",
            "range": "± 478114.0809268765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7066931.649484536,
            "unit": "ns",
            "range": "± 1223284.6843496733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29772797.370588236,
            "unit": "ns",
            "range": "± 2171068.903278931"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7794522.41011236,
            "unit": "ns",
            "range": "± 985275.2823064643"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34912143.52127659,
            "unit": "ns",
            "range": "± 2226701.546592893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7302738.516237745,
            "unit": "ns",
            "range": "± 294160.0681969305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2083377.6002604167,
            "unit": "ns",
            "range": "± 60717.83534757157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322916.3719951923,
            "unit": "ns",
            "range": "± 34694.65763602541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2889315.659464518,
            "unit": "ns",
            "range": "± 200637.94817181534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 941889.3148970171,
            "unit": "ns",
            "range": "± 39973.589019231054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806550.6979836856,
            "unit": "ns",
            "range": "± 25343.125472507505"
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
          "id": "78a303bed6ea7165b87ab40a12fd65541db0b73a",
          "message": "Merge pull request #2951 from greymistcube/prepare/0.50.5\n\n🔧 Prepare 0.50.5",
          "timestamp": "2023-03-17T14:28:30+09:00",
          "tree_id": "3a06b1bc37e8395cfacce61859a4355d14f19254",
          "url": "https://github.com/planetarium/libplanet/commit/78a303bed6ea7165b87ab40a12fd65541db0b73a"
        },
        "date": 1679031905623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132418.5909090909,
            "unit": "ns",
            "range": "± 14038.434249057857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103369.0505050505,
            "unit": "ns",
            "range": "± 15926.268952982346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223165.5306122449,
            "unit": "ns",
            "range": "± 26330.255469257656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190704.53296703298,
            "unit": "ns",
            "range": "± 13508.741121914398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3785765.7714285715,
            "unit": "ns",
            "range": "± 109566.52605745588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9670447.40625,
            "unit": "ns",
            "range": "± 291278.04827965295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19087.417582417584,
            "unit": "ns",
            "range": "± 2202.842830253337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54380.333333333336,
            "unit": "ns",
            "range": "± 7421.484843730012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52918.62886597938,
            "unit": "ns",
            "range": "± 7804.277169069411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118488.56989247311,
            "unit": "ns",
            "range": "± 16433.302431077496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7105.072164948454,
            "unit": "ns",
            "range": "± 1394.825438954509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18696.125,
            "unit": "ns",
            "range": "± 2600.461534946603"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4721583.753866793,
            "unit": "ns",
            "range": "± 274367.8397133586"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6068215.021739131,
            "unit": "ns",
            "range": "± 153021.76067084813"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26062004.57352941,
            "unit": "ns",
            "range": "± 1232594.484519693"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6641720.368131869,
            "unit": "ns",
            "range": "± 361548.9431733723"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30128567.166666668,
            "unit": "ns",
            "range": "± 1227939.5583595093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6546392.377790178,
            "unit": "ns",
            "range": "± 65399.3465085043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1978290.519975142,
            "unit": "ns",
            "range": "± 46534.37700231442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389065.8278664981,
            "unit": "ns",
            "range": "± 63027.48023803838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2744475.3878088663,
            "unit": "ns",
            "range": "± 101131.36831999538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865594.3193945312,
            "unit": "ns",
            "range": "± 34715.968787708145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715178.966015625,
            "unit": "ns",
            "range": "± 8583.280087354218"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba7ed49363bd6f6a2aac05a6fe6210a787dad1cd",
          "message": "Merge pull request #2966 from OnedgeLee/release/0.50.5\n\n🚀 Release 0.50.5",
          "timestamp": "2023-03-17T21:08:39+09:00",
          "tree_id": "3b1dd6f4b8fe0474a0d35e906bd2905a1f02b502",
          "url": "https://github.com/planetarium/libplanet/commit/ba7ed49363bd6f6a2aac05a6fe6210a787dad1cd"
        },
        "date": 1679056000904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140246.4375,
            "unit": "ns",
            "range": "± 13896.424941850104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 128910.14634146342,
            "unit": "ns",
            "range": "± 22348.152772213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254204.34782608695,
            "unit": "ns",
            "range": "± 52024.28766766766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229475.20430107528,
            "unit": "ns",
            "range": "± 15486.802408445787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3882409.625,
            "unit": "ns",
            "range": "± 136921.91996501893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10345425.5625,
            "unit": "ns",
            "range": "± 199540.93707139188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23243.58762886598,
            "unit": "ns",
            "range": "± 4648.355620433105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62139.551020408166,
            "unit": "ns",
            "range": "± 12641.903715379123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52662.37113402062,
            "unit": "ns",
            "range": "± 7995.897425033545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129705.34210526316,
            "unit": "ns",
            "range": "± 20472.952805621055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9924.838709677419,
            "unit": "ns",
            "range": "± 1936.738732858627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22655.393617021276,
            "unit": "ns",
            "range": "± 5204.1529476505075"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5884616.339473684,
            "unit": "ns",
            "range": "± 605729.7087763117"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6714181.739583333,
            "unit": "ns",
            "range": "± 627369.2671534757"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28648568.64935065,
            "unit": "ns",
            "range": "± 1461794.8749808336"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7969293.536842105,
            "unit": "ns",
            "range": "± 794277.375716856"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37100509.89393939,
            "unit": "ns",
            "range": "± 5264955.711014433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6818092.715959822,
            "unit": "ns",
            "range": "± 119094.92793167075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959566.4468149038,
            "unit": "ns",
            "range": "± 15074.890840647351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1278939.063606771,
            "unit": "ns",
            "range": "± 14201.958886820985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547991.711328125,
            "unit": "ns",
            "range": "± 46520.56907653864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859251.6398737981,
            "unit": "ns",
            "range": "± 6584.72146137534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722202.1908804086,
            "unit": "ns",
            "range": "± 5607.303975590709"
          }
        ]
      }
    ]
  }
}