window.BENCHMARK_DATA = {
  "lastUpdate": 1680066327871,
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
          "id": "4de176fbd56fa316a196d4582b82a1b0d5fd4f21",
          "message": "Merge pull request #2967 from OnedgeLee/prepare/0.50.6\n\n🔧 Prepare 0.50.6",
          "timestamp": "2023-03-21T14:01:00+09:00",
          "tree_id": "91fc0766ea67f93c0e75924a192b075e4ce0f897",
          "url": "https://github.com/planetarium/libplanet/commit/4de176fbd56fa316a196d4582b82a1b0d5fd4f21"
        },
        "date": 1679375982759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139538.16666666666,
            "unit": "ns",
            "range": "± 17841.544232681812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103673.98979591837,
            "unit": "ns",
            "range": "± 19257.887366599618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214595.33684210526,
            "unit": "ns",
            "range": "± 27314.112809428414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183248.74731182796,
            "unit": "ns",
            "range": "± 17123.52370511036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3613118.4375,
            "unit": "ns",
            "range": "± 107465.47199582892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10202433.5,
            "unit": "ns",
            "range": "± 162704.80395050242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20535.96907216495,
            "unit": "ns",
            "range": "± 3014.11325908912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58029.875,
            "unit": "ns",
            "range": "± 9498.9737365343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48198.585106382976,
            "unit": "ns",
            "range": "± 7067.546246349713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111504.97894736842,
            "unit": "ns",
            "range": "± 17841.956754496947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6700.75,
            "unit": "ns",
            "range": "± 1244.7079809717366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19341.402173913044,
            "unit": "ns",
            "range": "± 3038.721557597966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4989837.103844804,
            "unit": "ns",
            "range": "± 519065.13491671754"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6084203.906593407,
            "unit": "ns",
            "range": "± 454544.9723064443"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26345515.811320756,
            "unit": "ns",
            "range": "± 1099399.5379583882"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6362696.913978495,
            "unit": "ns",
            "range": "± 355873.8857242419"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30654628.183908045,
            "unit": "ns",
            "range": "± 1677281.7922477506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431770.872767857,
            "unit": "ns",
            "range": "± 47569.205753969356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2019021.7427819294,
            "unit": "ns",
            "range": "± 50555.135135576194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393433.9859232088,
            "unit": "ns",
            "range": "± 49780.01351700859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2991690.6368408203,
            "unit": "ns",
            "range": "± 220337.48382522888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 902515.2906177662,
            "unit": "ns",
            "range": "± 25299.69251406914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789390.3385953609,
            "unit": "ns",
            "range": "± 49760.85271284822"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d30c448ecf83bd4e1d451ca2dafb170dcc21e7fc",
          "message": "Merge pull request #2974 from riemannulus/0.50-maintenance\n\n🚀  Release 0.50.6",
          "timestamp": "2023-03-22T11:17:14+09:00",
          "tree_id": "801f74dd85ddcce3a318a2cdac350e0f82106f83",
          "url": "https://github.com/planetarium/libplanet/commit/d30c448ecf83bd4e1d451ca2dafb170dcc21e7fc"
        },
        "date": 1679452414531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129667.125,
            "unit": "ns",
            "range": "± 10178.897918061453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116617.47872340426,
            "unit": "ns",
            "range": "± 8902.064336800295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266956.4081632653,
            "unit": "ns",
            "range": "± 30700.491704929886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235698.5,
            "unit": "ns",
            "range": "± 14261.562021956868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190397.2333333334,
            "unit": "ns",
            "range": "± 68086.61257909104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10943004.533333333,
            "unit": "ns",
            "range": "± 133385.2125986271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21400.630434782608,
            "unit": "ns",
            "range": "± 2176.4366568456217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55060.63684210526,
            "unit": "ns",
            "range": "± 7092.54081293881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47330.17391304348,
            "unit": "ns",
            "range": "± 3641.6146328595846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126323.83695652174,
            "unit": "ns",
            "range": "± 13961.437060607357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5978.836956521739,
            "unit": "ns",
            "range": "± 556.4155944831542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18057.736263736264,
            "unit": "ns",
            "range": "± 1897.6932771432728"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5316439.086710165,
            "unit": "ns",
            "range": "± 296431.6659393803"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7517707.066666666,
            "unit": "ns",
            "range": "± 91556.16588931835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30931330.833333332,
            "unit": "ns",
            "range": "± 450250.7281854454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7821527.814814814,
            "unit": "ns",
            "range": "± 328102.4232136553"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34981897.0625,
            "unit": "ns",
            "range": "± 582076.3139920708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7231839.358854166,
            "unit": "ns",
            "range": "± 56437.679827429136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2261453.967122396,
            "unit": "ns",
            "range": "± 11056.474597284405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468283.1558159722,
            "unit": "ns",
            "range": "± 31280.091355602577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107773.7799479165,
            "unit": "ns",
            "range": "± 15774.804783908392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1039728.4281529018,
            "unit": "ns",
            "range": "± 11561.111391767687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 864669.5874720982,
            "unit": "ns",
            "range": "± 5409.750453441161"
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
          "id": "d489fd135c653727f04f6621f607983cdf032778",
          "message": "Merge pull request #3000 from greymistcube/chore/code-cleanup\n\n🧹 General code readability",
          "timestamp": "2023-03-28T15:32:47+09:00",
          "tree_id": "41a9bcd723c8126f258ace5210139b44b1b90a97",
          "url": "https://github.com/planetarium/libplanet/commit/d489fd135c653727f04f6621f607983cdf032778"
        },
        "date": 1679986350478,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147956.05434782608,
            "unit": "ns",
            "range": "± 8738.713078694089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123281.24210526315,
            "unit": "ns",
            "range": "± 24900.27123739982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244002.48936170212,
            "unit": "ns",
            "range": "± 31623.836566298036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234750.95555555556,
            "unit": "ns",
            "range": "± 20150.764364547827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3823168.3857142855,
            "unit": "ns",
            "range": "± 185918.34047615374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10396900.233333332,
            "unit": "ns",
            "range": "± 309850.9738839072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19958.297872340427,
            "unit": "ns",
            "range": "± 4991.624799752161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59849.291666666664,
            "unit": "ns",
            "range": "± 9963.662348138827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61895.6404494382,
            "unit": "ns",
            "range": "± 6310.703743077368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139307.80434782608,
            "unit": "ns",
            "range": "± 26053.598136368986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8222.747252747253,
            "unit": "ns",
            "range": "± 1044.763073549922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21496.892473118278,
            "unit": "ns",
            "range": "± 3612.698511056598"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5906363.425944011,
            "unit": "ns",
            "range": "± 517310.5524548581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6903512.095744681,
            "unit": "ns",
            "range": "± 516875.7987822788"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31033610.3,
            "unit": "ns",
            "range": "± 1943557.4368907255"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7886051.132653061,
            "unit": "ns",
            "range": "± 666151.5508490278"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36388767.86813187,
            "unit": "ns",
            "range": "± 3256078.739993246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7129045.115625,
            "unit": "ns",
            "range": "± 154529.9759609878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2145131.3216911764,
            "unit": "ns",
            "range": "± 114984.77878992858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395692.4927497632,
            "unit": "ns",
            "range": "± 65743.1703787816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3155176.2573292525,
            "unit": "ns",
            "range": "± 253835.52464119808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864713.7476509713,
            "unit": "ns",
            "range": "± 29197.396706314892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756422.9490234375,
            "unit": "ns",
            "range": "± 13624.968288926202"
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
          "id": "cb1d85ccec2ba77f535b4dac30bf08c8bf989bc2",
          "message": "Merge pull request #3003 from greymistcube/chore/logging\n\n🧹 Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:49:18+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/planetarium/libplanet/commit/cb1d85ccec2ba77f535b4dac30bf08c8bf989bc2"
        },
        "date": 1679987517789,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 152210.78021978022,
            "unit": "ns",
            "range": "± 10819.57190753271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 142964,
            "unit": "ns",
            "range": "± 23062.02635226418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275663.2244897959,
            "unit": "ns",
            "range": "± 45503.247369905555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274123.2826086957,
            "unit": "ns",
            "range": "± 37294.96072367945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180835.5463917525,
            "unit": "ns",
            "range": "± 342004.01333683264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11775822.963157894,
            "unit": "ns",
            "range": "± 939757.6500967344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30744.967391304348,
            "unit": "ns",
            "range": "± 7708.656908216589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67783.39795918367,
            "unit": "ns",
            "range": "± 12490.821505665172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67228.53448275862,
            "unit": "ns",
            "range": "± 7275.104262736089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139956.6559139785,
            "unit": "ns",
            "range": "± 21982.233231830174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10161.647727272728,
            "unit": "ns",
            "range": "± 1706.303846624707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21543.42105263158,
            "unit": "ns",
            "range": "± 4884.858831077115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5549786.681056701,
            "unit": "ns",
            "range": "± 587473.6441906315"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7995310.304347826,
            "unit": "ns",
            "range": "± 1147129.4151566857"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31827947.48453608,
            "unit": "ns",
            "range": "± 2388576.9382329197"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8349448.615384615,
            "unit": "ns",
            "range": "± 897192.7422896842"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35746672.4680851,
            "unit": "ns",
            "range": "± 2031677.793809981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7763542.840557796,
            "unit": "ns",
            "range": "± 439583.77005831414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2155895.3461914062,
            "unit": "ns",
            "range": "± 84203.9961936339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391261.821512613,
            "unit": "ns",
            "range": "± 74263.93601523105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3192281.145222982,
            "unit": "ns",
            "range": "± 252841.2259070696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 888362.1239232772,
            "unit": "ns",
            "range": "± 30916.28481580108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 875212.9276485234,
            "unit": "ns",
            "range": "± 48928.06169945263"
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
          "id": "030f1277010353d3e4a6fa5d1f42a82a95674a3b",
          "message": "Merge pull request #3007 from greymistcube/refactor/optimize-key-converter\n\n⚡ Optimize key conversion",
          "timestamp": "2023-03-28T16:55:35+09:00",
          "tree_id": "0b287f44514e60c26c243cb104c6f6b16a277ad8",
          "url": "https://github.com/planetarium/libplanet/commit/030f1277010353d3e4a6fa5d1f42a82a95674a3b"
        },
        "date": 1679991109655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137069.86956521738,
            "unit": "ns",
            "range": "± 11469.818964643728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125885.51041666667,
            "unit": "ns",
            "range": "± 24737.2557787449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231410.14285714287,
            "unit": "ns",
            "range": "± 27310.422571162533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236424.57954545456,
            "unit": "ns",
            "range": "± 34580.308353305525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3927187.043956044,
            "unit": "ns",
            "range": "± 227406.7067011052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10668595.225806452,
            "unit": "ns",
            "range": "± 484646.4678039971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25412.352631578946,
            "unit": "ns",
            "range": "± 2784.2649091698318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68811.70833333333,
            "unit": "ns",
            "range": "± 11996.424108363262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60481.10752688172,
            "unit": "ns",
            "range": "± 3639.140672760313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115248.06818181818,
            "unit": "ns",
            "range": "± 15553.515103161193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7181.8125,
            "unit": "ns",
            "range": "± 1267.4049933250474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17283.978260869564,
            "unit": "ns",
            "range": "± 2512.924647743442"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5277025.483881579,
            "unit": "ns",
            "range": "± 429591.9090754349"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6529459.8369565215,
            "unit": "ns",
            "range": "± 490081.96751634055"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29871860.1827957,
            "unit": "ns",
            "range": "± 1941266.3859100705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7510012.879310345,
            "unit": "ns",
            "range": "± 566434.0568193233"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34171030.678571425,
            "unit": "ns",
            "range": "± 1823040.6174952793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6636010.958834135,
            "unit": "ns",
            "range": "± 101487.47956979458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956567.5434895833,
            "unit": "ns",
            "range": "± 33739.81646954612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302523.029575893,
            "unit": "ns",
            "range": "± 11344.890850361011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2821377.949140625,
            "unit": "ns",
            "range": "± 74769.65460270579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796375.0622746394,
            "unit": "ns",
            "range": "± 7022.761584463311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723788.9054236779,
            "unit": "ns",
            "range": "± 2047.7752370852884"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9958f96e2ce25d998f78aaf2f9431f08e77c84a4",
          "message": "Merge pull request #3009 from limebell/feature/getstate-measure-0.50\n\nAdd measure metric for `GetState` method",
          "timestamp": "2023-03-29T09:07:08+09:00",
          "tree_id": "e3bed9b2029d34ce60a47a82bbc36e6733cafcf7",
          "url": "https://github.com/planetarium/libplanet/commit/9958f96e2ce25d998f78aaf2f9431f08e77c84a4"
        },
        "date": 1680049387451,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129870.31746031746,
            "unit": "ns",
            "range": "± 5958.622383071867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105769.84782608696,
            "unit": "ns",
            "range": "± 9143.72600722867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242115.47191011236,
            "unit": "ns",
            "range": "± 21994.14999292161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208121.05555555556,
            "unit": "ns",
            "range": "± 19254.312318450367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4028694.0705882353,
            "unit": "ns",
            "range": "± 216631.28336644953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10509977.365853658,
            "unit": "ns",
            "range": "± 554051.29838875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18812.17391304348,
            "unit": "ns",
            "range": "± 2180.8241491284625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56640.427835051545,
            "unit": "ns",
            "range": "± 7398.462002683708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47818.46153846154,
            "unit": "ns",
            "range": "± 3344.0800937633467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116702.80526315789,
            "unit": "ns",
            "range": "± 17362.63922179599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6439.908163265306,
            "unit": "ns",
            "range": "± 683.8122381517285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19666.489583333332,
            "unit": "ns",
            "range": "± 2290.1068510801056"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5215291.537730824,
            "unit": "ns",
            "range": "± 283990.5869815759"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7165865,
            "unit": "ns",
            "range": "± 65833.7256744734"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29646930.714285713,
            "unit": "ns",
            "range": "± 436479.78602295305"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8144259.095238095,
            "unit": "ns",
            "range": "± 295124.84011502244"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35339271.833333336,
            "unit": "ns",
            "range": "± 618922.6081679203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7210636.670072115,
            "unit": "ns",
            "range": "± 56456.46737688047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2244233.6072716345,
            "unit": "ns",
            "range": "± 18277.071707673585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1502572.0552455357,
            "unit": "ns",
            "range": "± 15305.47141062955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3090661.8307291665,
            "unit": "ns",
            "range": "± 95640.74048922898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908493.6042175293,
            "unit": "ns",
            "range": "± 28144.854666236257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826177.0140625,
            "unit": "ns",
            "range": "± 14331.070498451716"
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
          "id": "6c77f69e285802836a0ce7af1dcc1275487329a1",
          "message": "Merge pull request #3018 from greymistcube/feature/chain-state-cache\n\n⚡ Introduce `ChainStateCache`",
          "timestamp": "2023-03-29T12:15:38+09:00",
          "tree_id": "53ed75b50401b7780b637c6b67055c065b4b7b7e",
          "url": "https://github.com/planetarium/libplanet/commit/6c77f69e285802836a0ce7af1dcc1275487329a1"
        },
        "date": 1680060669536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133859.1530612245,
            "unit": "ns",
            "range": "± 11358.569987088535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107702.93814432989,
            "unit": "ns",
            "range": "± 13225.353044920983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217175.32653061225,
            "unit": "ns",
            "range": "± 22406.29450256284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213770.71739130435,
            "unit": "ns",
            "range": "± 22754.402176343177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3601053.0714285714,
            "unit": "ns",
            "range": "± 63159.0454724777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12543259.513513513,
            "unit": "ns",
            "range": "± 414245.62885634665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19350.698924731183,
            "unit": "ns",
            "range": "± 3003.0444689150772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51060.979166666664,
            "unit": "ns",
            "range": "± 6841.126716956509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53828.22448979592,
            "unit": "ns",
            "range": "± 9346.129957698973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117026.24175824175,
            "unit": "ns",
            "range": "± 14868.266908898187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7510.041237113402,
            "unit": "ns",
            "range": "± 1529.2285222561693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18486.81111111111,
            "unit": "ns",
            "range": "± 3124.674770112288"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4911249.7754130745,
            "unit": "ns",
            "range": "± 270450.42117972526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6451506.875,
            "unit": "ns",
            "range": "± 177047.4583922208"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27335666.656862747,
            "unit": "ns",
            "range": "± 1112836.444138713"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7656768.222891566,
            "unit": "ns",
            "range": "± 1071988.672852849"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31236403.698113207,
            "unit": "ns",
            "range": "± 1207556.3264870376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6930034.304199219,
            "unit": "ns",
            "range": "± 70922.03068868152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020906.36328125,
            "unit": "ns",
            "range": "± 25545.689623059923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322751.2848958333,
            "unit": "ns",
            "range": "± 21231.921107989616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2543716.0760216345,
            "unit": "ns",
            "range": "± 40060.73937590783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 895621.8074629934,
            "unit": "ns",
            "range": "± 19260.636180013338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742298.2399338942,
            "unit": "ns",
            "range": "± 7997.912047539262"
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
          "id": "44bc3b1ab669c500557c2d7fdd1cb735a2423d4b",
          "message": "Merge pull request #3019 from greymistcube/refactor/parallel-get-state\n\n⚡ Parallel get states",
          "timestamp": "2023-03-29T12:26:17+09:00",
          "tree_id": "53a12b681c5c39d08102169a09d791e726fae45a",
          "url": "https://github.com/planetarium/libplanet/commit/44bc3b1ab669c500557c2d7fdd1cb735a2423d4b"
        },
        "date": 1680061654591,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136440.69565217392,
            "unit": "ns",
            "range": "± 9213.06904424616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104814.67171717172,
            "unit": "ns",
            "range": "± 13875.208718445154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219377.08988764044,
            "unit": "ns",
            "range": "± 19612.825284190752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218702.5185185185,
            "unit": "ns",
            "range": "± 8371.089387167747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3574583.933333333,
            "unit": "ns",
            "range": "± 59449.76019111391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10292730.625,
            "unit": "ns",
            "range": "± 127998.65895801409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20958.81914893617,
            "unit": "ns",
            "range": "± 3971.8013145164964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63945.203296703294,
            "unit": "ns",
            "range": "± 11325.786231716744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57665.028735632186,
            "unit": "ns",
            "range": "± 5620.170658335547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132716.02222222224,
            "unit": "ns",
            "range": "± 20942.06818767021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8557.426966292134,
            "unit": "ns",
            "range": "± 818.1171271951287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23494.39534883721,
            "unit": "ns",
            "range": "± 3073.719923055755"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5570763.663802084,
            "unit": "ns",
            "range": "± 427195.8068383608"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6873052.06185567,
            "unit": "ns",
            "range": "± 519221.54914546537"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31019263.189473685,
            "unit": "ns",
            "range": "± 1723262.7529269368"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8530154.842105264,
            "unit": "ns",
            "range": "± 1983291.1545115863"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32832087.649425287,
            "unit": "ns",
            "range": "± 2368090.742849309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7147776.595012627,
            "unit": "ns",
            "range": "± 435861.7255595787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2258683.740944602,
            "unit": "ns",
            "range": "± 48479.129134265015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381492.0506228886,
            "unit": "ns",
            "range": "± 46437.314493249185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3049691.5446875,
            "unit": "ns",
            "range": "± 292368.3982608182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960343.4805982941,
            "unit": "ns",
            "range": "± 55943.15650368819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848738.9182291667,
            "unit": "ns",
            "range": "± 24863.228806106472"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c800bd80a3f751b67167d9a44ba0f42a9243ebb",
          "message": "Merge pull request #3017 from riemannulus/0.50-maintenance\n\nMake `IValidatorSupportStateDelta` to public",
          "timestamp": "2023-03-29T13:43:13+09:00",
          "tree_id": "1266b1c3e4bd90db72c6a14164aceeb73f8d2b82",
          "url": "https://github.com/planetarium/libplanet/commit/0c800bd80a3f751b67167d9a44ba0f42a9243ebb"
        },
        "date": 1680066048965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 131331.7588235294,
            "unit": "ns",
            "range": "± 12328.79235884241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109416.7311827957,
            "unit": "ns",
            "range": "± 15090.720380808018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258169.6182795699,
            "unit": "ns",
            "range": "± 40301.84105133614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234748.2365591398,
            "unit": "ns",
            "range": "± 25603.890408956726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3768927.8055555555,
            "unit": "ns",
            "range": "± 124383.15568248193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10805650.224489795,
            "unit": "ns",
            "range": "± 763421.6698521675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23845.957894736843,
            "unit": "ns",
            "range": "± 4397.234863526941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60134.8085106383,
            "unit": "ns",
            "range": "± 11925.667047258923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54558.406593406595,
            "unit": "ns",
            "range": "± 5435.696616867311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123623.26804123711,
            "unit": "ns",
            "range": "± 19039.272946834717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6184,
            "unit": "ns",
            "range": "± 737.3749996507138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16906.21505376344,
            "unit": "ns",
            "range": "± 2102.5717733159154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5040152.589765625,
            "unit": "ns",
            "range": "± 529789.4479197445"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6897692.958762887,
            "unit": "ns",
            "range": "± 603128.4885752634"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29451092.477272727,
            "unit": "ns",
            "range": "± 1620980.12044295"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7467821.189473684,
            "unit": "ns",
            "range": "± 597090.8565027228"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31747875.731578946,
            "unit": "ns",
            "range": "± 1883656.406888472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6473056.223557692,
            "unit": "ns",
            "range": "± 76480.89618590158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984291.6609933036,
            "unit": "ns",
            "range": "± 23918.478064727293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298747.8846354166,
            "unit": "ns",
            "range": "± 19053.925360869172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675091.4106770833,
            "unit": "ns",
            "range": "± 79479.49195797578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900489.5797991072,
            "unit": "ns",
            "range": "± 10704.626133823684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771016.6877604167,
            "unit": "ns",
            "range": "± 13119.348144804888"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2f39d9fa0c72a602f80f562793b3a4b8ae2c1bf",
          "message": "Merge pull request #3020 from riemannulus/0.50-maintenance\n\n🚀  Release 0.50.7",
          "timestamp": "2023-03-29T13:50:55+09:00",
          "tree_id": "de23d49d91470e064594750e38ecea8f3ee96990",
          "url": "https://github.com/planetarium/libplanet/commit/d2f39d9fa0c72a602f80f562793b3a4b8ae2c1bf"
        },
        "date": 1680066266072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115688.22448979592,
            "unit": "ns",
            "range": "± 8006.879865852753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100196.77083333333,
            "unit": "ns",
            "range": "± 14397.468349444134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213802.95918367346,
            "unit": "ns",
            "range": "± 26448.754790293613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211133.57731958764,
            "unit": "ns",
            "range": "± 30001.17248953053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3740839.846153846,
            "unit": "ns",
            "range": "± 40109.57579939848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10211495.355555555,
            "unit": "ns",
            "range": "± 385145.2591106583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18771.064516129034,
            "unit": "ns",
            "range": "± 2813.753800941754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52900.71428571428,
            "unit": "ns",
            "range": "± 3962.2989070199424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60608.70212765958,
            "unit": "ns",
            "range": "± 5404.079635425161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117561.32608695653,
            "unit": "ns",
            "range": "± 16727.089531003687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7636.315789473684,
            "unit": "ns",
            "range": "± 898.063522644967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22291.070707070707,
            "unit": "ns",
            "range": "± 5937.770443684083"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4441772.167803697,
            "unit": "ns",
            "range": "± 217185.48608925493"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6380993.5869565215,
            "unit": "ns",
            "range": "± 159397.97938690582"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26570085.324324325,
            "unit": "ns",
            "range": "± 893875.6136461498"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6762358.111111111,
            "unit": "ns",
            "range": "± 253570.3893139502"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30481450.57142857,
            "unit": "ns",
            "range": "± 988009.5263476874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6488236.89390625,
            "unit": "ns",
            "range": "± 170325.45569683213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1788087.2318638393,
            "unit": "ns",
            "range": "± 14099.474351873212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1237909.520703125,
            "unit": "ns",
            "range": "± 8226.049483576557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593783.71875,
            "unit": "ns",
            "range": "± 19558.3392493448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832320.4944010417,
            "unit": "ns",
            "range": "± 6335.37882069933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 704532.1481770833,
            "unit": "ns",
            "range": "± 11538.35370300145"
          }
        ]
      }
    ]
  }
}