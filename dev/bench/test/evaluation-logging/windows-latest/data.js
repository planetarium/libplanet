window.BENCHMARK_DATA = {
  "lastUpdate": 1679986237053,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470047090,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73248.91304347826,
            "unit": "ns",
            "range": "± 4172.924095743773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3563682.0442708335,
            "unit": "ns",
            "range": "± 11081.873398596425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1103923.3203125,
            "unit": "ns",
            "range": "± 1223.9944018459437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 833657.28515625,
            "unit": "ns",
            "range": "± 1104.2571391615722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1860716.4322916667,
            "unit": "ns",
            "range": "± 3540.5735810026536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613771.6936383928,
            "unit": "ns",
            "range": "± 1043.1737966145772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 525081.8815104166,
            "unit": "ns",
            "range": "± 750.0421901522449"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3098437.9464285714,
            "unit": "ns",
            "range": "± 12983.509635233222"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4410900,
            "unit": "ns",
            "range": "± 141922.67420868823"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 18121146.666666668,
            "unit": "ns",
            "range": "± 305156.99909266067"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 4546541.772151899,
            "unit": "ns",
            "range": "± 234299.69390942447"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 20368393.103448275,
            "unit": "ns",
            "range": "± 588187.8768915315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 74248.45360824742,
            "unit": "ns",
            "range": "± 7941.690014858061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 147198.94736842104,
            "unit": "ns",
            "range": "± 14145.636833786262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 122867.79661016949,
            "unit": "ns",
            "range": "± 5312.686205352245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2576580,
            "unit": "ns",
            "range": "± 29780.127602144352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6614200,
            "unit": "ns",
            "range": "± 53935.54354173931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15713.541666666666,
            "unit": "ns",
            "range": "± 1727.2807830543275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40634.69387755102,
            "unit": "ns",
            "range": "± 6109.1464644318075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40771,
            "unit": "ns",
            "range": "± 4012.412433356463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84503.37078651685,
            "unit": "ns",
            "range": "± 10437.851240014985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5194.736842105263,
            "unit": "ns",
            "range": "± 866.3162929166807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14663.541666666666,
            "unit": "ns",
            "range": "± 1747.215516587324"
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1679470358294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104036.7816091954,
            "unit": "ns",
            "range": "± 5699.75754161054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4779288.950892857,
            "unit": "ns",
            "range": "± 38487.68805968142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537209.5982142857,
            "unit": "ns",
            "range": "± 6371.325814135606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172287.7650669643,
            "unit": "ns",
            "range": "± 6978.5796501558925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596516.015625,
            "unit": "ns",
            "range": "± 7678.4792420185795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842107.4137369791,
            "unit": "ns",
            "range": "± 966.5861768032987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772468.1989397322,
            "unit": "ns",
            "range": "± 2870.8465056699556"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4660792.074092742,
            "unit": "ns",
            "range": "± 139588.26109465226"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5477676.666666667,
            "unit": "ns",
            "range": "± 73389.77611421933"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25198834.285714287,
            "unit": "ns",
            "range": "± 820747.9870226189"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6123548.780487805,
            "unit": "ns",
            "range": "± 220498.49673178184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27782287.096774194,
            "unit": "ns",
            "range": "± 827701.4239212655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88153.53535353535,
            "unit": "ns",
            "range": "± 8292.24266372768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178814.0625,
            "unit": "ns",
            "range": "± 7774.783561270576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169747.42268041236,
            "unit": "ns",
            "range": "± 13489.3097548848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3581735.714285714,
            "unit": "ns",
            "range": "± 58454.71103134667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9945006.25,
            "unit": "ns",
            "range": "± 181599.75208775295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19552.577319587628,
            "unit": "ns",
            "range": "± 2481.3509754225097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50769.565217391304,
            "unit": "ns",
            "range": "± 4798.253783338927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39247.84946236559,
            "unit": "ns",
            "range": "± 2826.7348845491124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96036.0824742268,
            "unit": "ns",
            "range": "± 16698.684987940233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5370.103092783505,
            "unit": "ns",
            "range": "± 1111.2272634019714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17386.956521739132,
            "unit": "ns",
            "range": "± 2502.667473238375"
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
          "id": "8aa2e534c2706a35f0f5712c365b5c388ee9039f",
          "message": "Merge pull request #2978 from greymistcube/refactor/additional-evaluation-logging\n\n♻️ Added additional metrics to measure evaluation duration",
          "timestamp": "2023-03-22T16:32:51+09:00",
          "tree_id": "31f691be0aaf62e39e260347c1ac0ce65a4cae9f",
          "url": "https://github.com/planetarium/libplanet/commit/8aa2e534c2706a35f0f5712c365b5c388ee9039f"
        },
        "date": 1679471301325,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90644.8275862069,
            "unit": "ns",
            "range": "± 2615.009725042904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4825475.78125,
            "unit": "ns",
            "range": "± 5881.876966726287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520240.5338541667,
            "unit": "ns",
            "range": "± 1835.756884736724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1126162.2981770833,
            "unit": "ns",
            "range": "± 1456.0883467822746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2767393.28125,
            "unit": "ns",
            "range": "± 7882.535565349497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808918.7272135416,
            "unit": "ns",
            "range": "± 711.683337306808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771868.92578125,
            "unit": "ns",
            "range": "± 654.1001776151866"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3923770.4427083335,
            "unit": "ns",
            "range": "± 7708.666047249402"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5442469.230769231,
            "unit": "ns",
            "range": "± 70129.31370707716"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22843368.75,
            "unit": "ns",
            "range": "± 379536.4588876805"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6061453.333333333,
            "unit": "ns",
            "range": "± 111710.10228435454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25377984.615384616,
            "unit": "ns",
            "range": "± 224029.55848932764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81472.09302325582,
            "unit": "ns",
            "range": "± 4905.738564358388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175305.1724137931,
            "unit": "ns",
            "range": "± 7608.984126901316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148863.33333333334,
            "unit": "ns",
            "range": "± 2719.996498597186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3341733.3333333335,
            "unit": "ns",
            "range": "± 35514.89962308911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8383316.666666667,
            "unit": "ns",
            "range": "± 88890.71674707952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15664.893617021276,
            "unit": "ns",
            "range": "± 1560.721328049882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46351.51515151515,
            "unit": "ns",
            "range": "± 5704.927401859061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40486.868686868685,
            "unit": "ns",
            "range": "± 5507.131674338219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88668.42105263157,
            "unit": "ns",
            "range": "± 15186.64911394842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5375.789473684211,
            "unit": "ns",
            "range": "± 745.1568147788907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15322.680412371134,
            "unit": "ns",
            "range": "± 1830.8982969796994"
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
          "id": "f96f3225123873e5c62fdd47de65bfabd23754a6",
          "message": "Merge pull request #2979 from limebell/log/getstate-logging\n\nAdd time measure for `AccountStateDeltaImpl.GetState()` method",
          "timestamp": "2023-03-22T18:06:30+09:00",
          "tree_id": "5419d5b724fb3ad6d51fee9bcfc63f452a315433",
          "url": "https://github.com/planetarium/libplanet/commit/f96f3225123873e5c62fdd47de65bfabd23754a6"
        },
        "date": 1679477073080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 116154.54545454546,
            "unit": "ns",
            "range": "± 3634.2202489917727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5753312.444196428,
            "unit": "ns",
            "range": "± 89357.5711227897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878775.5766369049,
            "unit": "ns",
            "range": "± 43716.80825158193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394941.4417613635,
            "unit": "ns",
            "range": "± 33420.83008247868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3104140.972222222,
            "unit": "ns",
            "range": "± 63605.79845898398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 972708.203125,
            "unit": "ns",
            "range": "± 8128.201101167572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909725.9638247283,
            "unit": "ns",
            "range": "± 22001.594736318166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5490239.03125,
            "unit": "ns",
            "range": "± 329251.9893206826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6258570,
            "unit": "ns",
            "range": "± 139852.17797449752"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31534570,
            "unit": "ns",
            "range": "± 2292161.7204787894"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6829595.348837209,
            "unit": "ns",
            "range": "± 367957.7951843604"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35393916.666666664,
            "unit": "ns",
            "range": "± 2560847.7723725215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101441.17647058824,
            "unit": "ns",
            "range": "± 5489.129823431705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212107.46268656716,
            "unit": "ns",
            "range": "± 10083.128925043116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196565.59139784946,
            "unit": "ns",
            "range": "± 12537.114419261887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4153340,
            "unit": "ns",
            "range": "± 155347.62543171598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10382760.869565217,
            "unit": "ns",
            "range": "± 255121.15791794163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22560,
            "unit": "ns",
            "range": "± 2070.8924995472003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56268.47826086957,
            "unit": "ns",
            "range": "± 4157.29015046179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44181.25,
            "unit": "ns",
            "range": "± 2033.3626071272906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107826.04166666667,
            "unit": "ns",
            "range": "± 19778.266885871773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6156.521739130435,
            "unit": "ns",
            "range": "± 694.3736758547368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20027.956989247312,
            "unit": "ns",
            "range": "± 2467.147868861049"
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
          "id": "7944e4a33f6c9e7c3358b07f63623d18f1032d57",
          "message": "Merge pull request #2981 from greymistcube/chore/more-logging\n\n🔧 Added logging info",
          "timestamp": "2023-03-23T11:54:01+09:00",
          "tree_id": "d66f794203c10cf5dacdcbd2cbed3dc4742f99b4",
          "url": "https://github.com/planetarium/libplanet/commit/7944e4a33f6c9e7c3358b07f63623d18f1032d57"
        },
        "date": 1679540895296,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100301.2048192771,
            "unit": "ns",
            "range": "± 5317.424050299938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4735056.875,
            "unit": "ns",
            "range": "± 29691.464301809076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1538259.9739583333,
            "unit": "ns",
            "range": "± 2795.391441976373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166488.9322916667,
            "unit": "ns",
            "range": "± 2830.518463016277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621824.3489583335,
            "unit": "ns",
            "range": "± 5465.305417631224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830089.0559895834,
            "unit": "ns",
            "range": "± 1491.8992061052627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754326.1090959822,
            "unit": "ns",
            "range": "± 928.852475437965"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4523638.75,
            "unit": "ns",
            "range": "± 39435.24265804932"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5513484.615384615,
            "unit": "ns",
            "range": "± 56585.3167961714"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24274733.333333332,
            "unit": "ns",
            "range": "± 795301.6473550863"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6129370,
            "unit": "ns",
            "range": "± 107296.84591290251"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26301463.157894738,
            "unit": "ns",
            "range": "± 560370.8189033067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84491.57894736843,
            "unit": "ns",
            "range": "± 8208.048244926527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169888.23529411765,
            "unit": "ns",
            "range": "± 6333.644987172032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156266.66666666666,
            "unit": "ns",
            "range": "± 5599.767707144979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3386110,
            "unit": "ns",
            "range": "± 54312.80827629099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8372342.857142857,
            "unit": "ns",
            "range": "± 195868.6794039021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19146.907216494845,
            "unit": "ns",
            "range": "± 2096.895205230393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51147.82608695652,
            "unit": "ns",
            "range": "± 5358.704088479175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38662.244897959186,
            "unit": "ns",
            "range": "± 2661.544211335071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97412.79069767441,
            "unit": "ns",
            "range": "± 11504.605691651628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6236.082474226804,
            "unit": "ns",
            "range": "± 860.1339003088306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18041.935483870966,
            "unit": "ns",
            "range": "± 2170.4699241050544"
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
          "id": "4ac5b5442c64be640ce105c95625a639758a24c6",
          "message": "Merge pull request #2983 from greymistcube/refactor/state-caching\n\n🔧 Added state caching",
          "timestamp": "2023-03-23T18:20:56+09:00",
          "tree_id": "d4cdb454c29ceb38ec313af5f3988a6cad100edc",
          "url": "https://github.com/planetarium/libplanet/commit/4ac5b5442c64be640ce105c95625a639758a24c6"
        },
        "date": 1679564123948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98647.95918367348,
            "unit": "ns",
            "range": "± 3699.4644767811988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4734233.177083333,
            "unit": "ns",
            "range": "± 32820.86763240404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508264.9479166667,
            "unit": "ns",
            "range": "± 10282.205185206698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163765.4231770833,
            "unit": "ns",
            "range": "± 9410.1523417995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626914.921875,
            "unit": "ns",
            "range": "± 14529.504557620214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827167.2921316965,
            "unit": "ns",
            "range": "± 3390.303141317426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758176.0481770834,
            "unit": "ns",
            "range": "± 2828.796867998726"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4496315.46875,
            "unit": "ns",
            "range": "± 80677.46315878468"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5541393.333333333,
            "unit": "ns",
            "range": "± 36787.33218818415"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23569786.666666668,
            "unit": "ns",
            "range": "± 408679.96187493124"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6036895.238095238,
            "unit": "ns",
            "range": "± 141294.73619420675"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28193426.666666668,
            "unit": "ns",
            "range": "± 473422.71728139033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89094.79166666667,
            "unit": "ns",
            "range": "± 6270.7150568783945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176409.3023255814,
            "unit": "ns",
            "range": "± 9607.639459207043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161173.95833333334,
            "unit": "ns",
            "range": "± 11078.734915348476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3564966.6666666665,
            "unit": "ns",
            "range": "± 66610.02355573249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8696481.481481481,
            "unit": "ns",
            "range": "± 235100.96364203424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17663.529411764706,
            "unit": "ns",
            "range": "± 1473.9683283752136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49849.48453608248,
            "unit": "ns",
            "range": "± 5101.901682039342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39192.857142857145,
            "unit": "ns",
            "range": "± 2112.6575346856453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91892.78350515464,
            "unit": "ns",
            "range": "± 14895.400908101077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5156.701030927835,
            "unit": "ns",
            "range": "± 851.0908706495992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18146.938775510203,
            "unit": "ns",
            "range": "± 2691.3455831162432"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "8361ae9a1d1b251f68d46b145a61d4163ecaecab",
          "message": "More logging",
          "timestamp": "2023-03-23T19:37:21+09:00",
          "tree_id": "c7a804c87d04f2578052416c55966df9db654b5d",
          "url": "https://github.com/planetarium/libplanet/commit/8361ae9a1d1b251f68d46b145a61d4163ecaecab"
        },
        "date": 1679568743887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91424.41860465116,
            "unit": "ns",
            "range": "± 3374.6317628570564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4949055.691964285,
            "unit": "ns",
            "range": "± 19886.96554978219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514323.895733173,
            "unit": "ns",
            "range": "± 2324.1565088257616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134545.1729910714,
            "unit": "ns",
            "range": "± 1850.5993709689951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563203.2291666665,
            "unit": "ns",
            "range": "± 12477.213401340021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824634.1378348215,
            "unit": "ns",
            "range": "± 5795.401019441881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719498.0013020834,
            "unit": "ns",
            "range": "± 1598.4770342288211"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3945159.765625,
            "unit": "ns",
            "range": "± 16989.963348441714"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4816126,
            "unit": "ns",
            "range": "± 177384.15341183284"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22873533.333333332,
            "unit": "ns",
            "range": "± 289876.12296749564"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5457703.225806451,
            "unit": "ns",
            "range": "± 233809.50752502712"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25664436.666666668,
            "unit": "ns",
            "range": "± 369841.66663716023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86118.18181818182,
            "unit": "ns",
            "range": "± 10697.142128704605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183059.79381443298,
            "unit": "ns",
            "range": "± 17982.819693354857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153776.66666666666,
            "unit": "ns",
            "range": "± 1871.0068590645699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3340726.6666666665,
            "unit": "ns",
            "range": "± 34361.13807084697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8369846.666666667,
            "unit": "ns",
            "range": "± 130579.79972123596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14731.868131868132,
            "unit": "ns",
            "range": "± 1102.4093936947704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43719.66292134832,
            "unit": "ns",
            "range": "± 3549.4687340752466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37292.78350515464,
            "unit": "ns",
            "range": "± 2571.731235256078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83203.15789473684,
            "unit": "ns",
            "range": "± 14217.440987023117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4920.618556701031,
            "unit": "ns",
            "range": "± 920.5906329102323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14600,
            "unit": "ns",
            "range": "± 1223.163534552132"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "57902588f81bc45ac7d3c895aaeeb0004042e7c6",
          "message": "Even more logging",
          "timestamp": "2023-03-23T20:14:42+09:00",
          "tree_id": "8ffc356651c118f2d476bd744f639d6cffea2f23",
          "url": "https://github.com/planetarium/libplanet/commit/57902588f81bc45ac7d3c895aaeeb0004042e7c6"
        },
        "date": 1679571690904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125985.41666666667,
            "unit": "ns",
            "range": "± 23171.847615799314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5488365.959821428,
            "unit": "ns",
            "range": "± 81931.70892625202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821483.4106445312,
            "unit": "ns",
            "range": "± 34501.24652777579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348559.8581414474,
            "unit": "ns",
            "range": "± 29372.3665593425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3030667.236328125,
            "unit": "ns",
            "range": "± 50695.53655071877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989559.6622242647,
            "unit": "ns",
            "range": "± 20005.005088992097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 887360.7192095588,
            "unit": "ns",
            "range": "± 17869.791785220496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5790242.886513158,
            "unit": "ns",
            "range": "± 332059.4733291775"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5966210.30927835,
            "unit": "ns",
            "range": "± 464932.1819910352"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31074575,
            "unit": "ns",
            "range": "± 1154618.7803622095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6831703.0612244895,
            "unit": "ns",
            "range": "± 654209.0380409383"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35944691.75257732,
            "unit": "ns",
            "range": "± 2295868.4866638747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109752.1978021978,
            "unit": "ns",
            "range": "± 19296.136504618844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231777.6595744681,
            "unit": "ns",
            "range": "± 30893.838875818183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210955,
            "unit": "ns",
            "range": "± 32171.888020255803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4396297.959183673,
            "unit": "ns",
            "range": "± 380533.62287729856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11304576.288659794,
            "unit": "ns",
            "range": "± 823877.493772233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30033,
            "unit": "ns",
            "range": "± 10236.536415105344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69361.70212765958,
            "unit": "ns",
            "range": "± 14027.033089241007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61369.38775510204,
            "unit": "ns",
            "range": "± 13985.415143451906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136534.375,
            "unit": "ns",
            "range": "± 27806.07971431693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7404.705882352941,
            "unit": "ns",
            "range": "± 1512.007958718105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28764,
            "unit": "ns",
            "range": "± 9950.671466100297"
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
          "id": "fda564fa603611e27aef86aea50d932277227ee3",
          "message": "Merge pull request #2985 from greymistcube/refactor/account-state-delta-caching\n\n🔧 Added caching to `AccountStateDeltaImpl`",
          "timestamp": "2023-03-24T09:44:57+09:00",
          "tree_id": "ecfd3ce8bde11199f643174bd303a620d5911aaf",
          "url": "https://github.com/planetarium/libplanet/commit/fda564fa603611e27aef86aea50d932277227ee3"
        },
        "date": 1679619805705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102693.67816091955,
            "unit": "ns",
            "range": "± 5593.573994750588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4873658.958333333,
            "unit": "ns",
            "range": "± 10464.223196997615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529294.614955357,
            "unit": "ns",
            "range": "± 1756.2341968096432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171075.0260416667,
            "unit": "ns",
            "range": "± 3437.0249835612767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636550.4166666665,
            "unit": "ns",
            "range": "± 11380.138311469022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825113.2587139423,
            "unit": "ns",
            "range": "± 1713.3768928035943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755958.0810546875,
            "unit": "ns",
            "range": "± 1128.6252360632855"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4735840.985576923,
            "unit": "ns",
            "range": "± 11994.41214209426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5673946.666666667,
            "unit": "ns",
            "range": "± 69736.97386472634"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25317617.85714286,
            "unit": "ns",
            "range": "± 719334.9866388021"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6210413.333333333,
            "unit": "ns",
            "range": "± 82081.86563831664"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28344413.04347826,
            "unit": "ns",
            "range": "± 711743.3477061467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92557.77777777778,
            "unit": "ns",
            "range": "± 7932.6551342001685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191301.1235955056,
            "unit": "ns",
            "range": "± 16230.082159527261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176434.34343434343,
            "unit": "ns",
            "range": "± 11583.020310502023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3611262.5,
            "unit": "ns",
            "range": "± 65885.36382738329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9417946.666666666,
            "unit": "ns",
            "range": "± 168907.12522679722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21787.09677419355,
            "unit": "ns",
            "range": "± 2853.83897836686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55664.444444444445,
            "unit": "ns",
            "range": "± 5770.543391761709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45270.707070707074,
            "unit": "ns",
            "range": "± 4601.646833100313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105976.62337662338,
            "unit": "ns",
            "range": "± 6256.320932168399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7438.144329896907,
            "unit": "ns",
            "range": "± 1134.537653533466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22441.052631578947,
            "unit": "ns",
            "range": "± 2946.4184799350173"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "646fe97a1595f131c8571ad0153d8023f8e9beef",
          "message": "Remove logging from AccountStateDeltaImpl",
          "timestamp": "2023-03-24T15:00:36+09:00",
          "tree_id": "56d480473e97842fdb4390a3251fc9ebaf2cabd7",
          "url": "https://github.com/planetarium/libplanet/commit/646fe97a1595f131c8571ad0153d8023f8e9beef"
        },
        "date": 1679638777183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106397.9797979798,
            "unit": "ns",
            "range": "± 9397.090081487338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831360.546875,
            "unit": "ns",
            "range": "± 21721.70076227854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524290.1646205357,
            "unit": "ns",
            "range": "± 3527.0403367321055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171922.94921875,
            "unit": "ns",
            "range": "± 3608.1918069383346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649691.6536458335,
            "unit": "ns",
            "range": "± 8255.093768979816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830808.49609375,
            "unit": "ns",
            "range": "± 2196.896682505127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760882.6041666666,
            "unit": "ns",
            "range": "± 1681.6730122556994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4831740,
            "unit": "ns",
            "range": "± 39678.08538321324"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5427613.953488372,
            "unit": "ns",
            "range": "± 287153.69779257715"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26147764.70588235,
            "unit": "ns",
            "range": "± 527550.6835143621"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6093479.72972973,
            "unit": "ns",
            "range": "± 304404.1550036523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29333722.222222224,
            "unit": "ns",
            "range": "± 621495.7513039722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101253.33333333333,
            "unit": "ns",
            "range": "± 7820.4456897619875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197018.6813186813,
            "unit": "ns",
            "range": "± 13415.95163384835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187584.693877551,
            "unit": "ns",
            "range": "± 13643.814746366137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3653157.1428571427,
            "unit": "ns",
            "range": "± 48104.43309630084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9049812.5,
            "unit": "ns",
            "range": "± 170923.88120642086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23391.489361702126,
            "unit": "ns",
            "range": "± 3361.856232476725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59442.10526315789,
            "unit": "ns",
            "range": "± 6540.228686016838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41154.444444444445,
            "unit": "ns",
            "range": "± 2349.2366013746787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119042.85714285714,
            "unit": "ns",
            "range": "± 23141.30506259316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7992.783505154639,
            "unit": "ns",
            "range": "± 1318.6362449105336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24542.85714285714,
            "unit": "ns",
            "range": "± 3096.4562385271006"
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
          "id": "b06a0868901ad6b9134bda33c895d740cf67a057",
          "message": "Merge pull request #2987 from greymistcube/optimization/state-cache\n\n♻️ Refactored to more granular caching scheme for `BlockChainStates<T>`",
          "timestamp": "2023-03-24T21:56:45+09:00",
          "tree_id": "3ef82fcb07ac2f63eacca5bb11dd399b5a8d8a7c",
          "url": "https://github.com/planetarium/libplanet/commit/b06a0868901ad6b9134bda33c895d740cf67a057"
        },
        "date": 1679663727634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109744.32989690722,
            "unit": "ns",
            "range": "± 8740.6136449356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4853706.432291667,
            "unit": "ns",
            "range": "± 21060.494207948137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537147.3697916667,
            "unit": "ns",
            "range": "± 3004.6320594407503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173093.9908854167,
            "unit": "ns",
            "range": "± 3773.105233496924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676997.7864583335,
            "unit": "ns",
            "range": "± 8491.23350780582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827278.8837139423,
            "unit": "ns",
            "range": "± 477.24160283666953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761802.05078125,
            "unit": "ns",
            "range": "± 660.4968695170518"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4869816.183035715,
            "unit": "ns",
            "range": "± 36413.27209120339"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6268430,
            "unit": "ns",
            "range": "± 186031.86999859035"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26610250,
            "unit": "ns",
            "range": "± 220084.59737110182"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6409045.945945946,
            "unit": "ns",
            "range": "± 216141.594015737"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29825546.666666668,
            "unit": "ns",
            "range": "± 474861.89701648545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121313.68421052632,
            "unit": "ns",
            "range": "± 12305.599923355388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211216.43835616438,
            "unit": "ns",
            "range": "± 10508.739929995707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208283,
            "unit": "ns",
            "range": "± 16181.477470593134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3729126.6666666665,
            "unit": "ns",
            "range": "± 31639.81367713485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9526826.666666666,
            "unit": "ns",
            "range": "± 123853.89126286012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26266.304347826088,
            "unit": "ns",
            "range": "± 2960.1483915103154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62047.77777777778,
            "unit": "ns",
            "range": "± 6543.582975122239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49376.80412371134,
            "unit": "ns",
            "range": "± 5352.540585707828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125156.12244897959,
            "unit": "ns",
            "range": "± 24290.314841905038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8106.122448979592,
            "unit": "ns",
            "range": "± 1366.4474464928865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25259.59595959596,
            "unit": "ns",
            "range": "± 3898.3491846803304"
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
          "id": "7c95388b8da3e5f1957ec79c31457793bae6918f",
          "message": "Merge pull request #2988 from greymistcube/optimization/account-state-delta-cache\n\n♻️ Reduced call to lower level `GetStates()` with empty addresses",
          "timestamp": "2023-03-25T09:28:13+09:00",
          "tree_id": "244138a8f31b2b5fc77932bfb2137ac88923d21b",
          "url": "https://github.com/planetarium/libplanet/commit/7c95388b8da3e5f1957ec79c31457793bae6918f"
        },
        "date": 1679705582268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 142998.9898989899,
            "unit": "ns",
            "range": "± 25428.790107203757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6009914.811197917,
            "unit": "ns",
            "range": "± 234269.53253046641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918847.0269097222,
            "unit": "ns",
            "range": "± 88092.86049705863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302932.6416015625,
            "unit": "ns",
            "range": "± 24712.81017333283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126263.8020833335,
            "unit": "ns",
            "range": "± 114057.46211348954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999337.0297080592,
            "unit": "ns",
            "range": "± 21445.06011983746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903621.8854631697,
            "unit": "ns",
            "range": "± 25645.475693902878"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5865365.885416667,
            "unit": "ns",
            "range": "± 341607.4723223233"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6829028.865979382,
            "unit": "ns",
            "range": "± 802168.9207962429"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33243146.875,
            "unit": "ns",
            "range": "± 2087691.0173658647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7761089.583333333,
            "unit": "ns",
            "range": "± 620279.3828046006"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37008595,
            "unit": "ns",
            "range": "± 2477034.7230238128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124058.58585858585,
            "unit": "ns",
            "range": "± 18515.49825229714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249735.10638297873,
            "unit": "ns",
            "range": "± 31238.801718123887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251642.70833333334,
            "unit": "ns",
            "range": "± 31951.287742080025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4681969.791666667,
            "unit": "ns",
            "range": "± 293435.4198186828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11156466.25,
            "unit": "ns",
            "range": "± 575323.4583761655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34322.34042553192,
            "unit": "ns",
            "range": "± 7908.701540386218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75563.44086021505,
            "unit": "ns",
            "range": "± 11942.841997963144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77151.64835164836,
            "unit": "ns",
            "range": "± 12332.96722553338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160889.36170212767,
            "unit": "ns",
            "range": "± 30738.643214770706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 22505.050505050505,
            "unit": "ns",
            "range": "± 8720.458864276905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32621.428571428572,
            "unit": "ns",
            "range": "± 8850.630474368167"
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
          "id": "a76a9bb9a81bfbb08df9ca35674c4b0b6d1db640",
          "message": "Merge pull request #2990 from greymistcube/refactor/faster-key-bytes-conversion\n\n♻️ Improved `KeyConverters` performance",
          "timestamp": "2023-03-25T12:11:30+09:00",
          "tree_id": "adb4e0426a83696735a7801c1ad275c5aa15b795",
          "url": "https://github.com/planetarium/libplanet/commit/a76a9bb9a81bfbb08df9ca35674c4b0b6d1db640"
        },
        "date": 1679714760379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99541.79104477612,
            "unit": "ns",
            "range": "± 4738.243801168585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4770115.3125,
            "unit": "ns",
            "range": "± 13530.743334037343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515963.8997395833,
            "unit": "ns",
            "range": "± 7162.477590988231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164253.6328125,
            "unit": "ns",
            "range": "± 5992.435517823832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604523.7239583335,
            "unit": "ns",
            "range": "± 7890.706918204695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821155.9765625,
            "unit": "ns",
            "range": "± 1286.1959682408612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765476.2776692709,
            "unit": "ns",
            "range": "± 1289.4777200009319"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4692807.5,
            "unit": "ns",
            "range": "± 31571.208136067005"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5720525.925925926,
            "unit": "ns",
            "range": "± 155333.580481077"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24835858.333333332,
            "unit": "ns",
            "range": "± 630999.8097682252"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6264893.75,
            "unit": "ns",
            "range": "± 113922.37397309918"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28020540,
            "unit": "ns",
            "range": "± 725098.5398551014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98297.93814432989,
            "unit": "ns",
            "range": "± 7207.200961848321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187273.33333333334,
            "unit": "ns",
            "range": "± 11879.27853141622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162311.29032258064,
            "unit": "ns",
            "range": "± 7304.683088887917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3559021.4285714286,
            "unit": "ns",
            "range": "± 45753.422378447925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8722346.666666666,
            "unit": "ns",
            "range": "± 159848.75828047437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19001.041666666668,
            "unit": "ns",
            "range": "± 1857.643940256563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50208.42105263158,
            "unit": "ns",
            "range": "± 4422.877256389101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39648.80952380953,
            "unit": "ns",
            "range": "± 2145.575107423404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99013.18681318681,
            "unit": "ns",
            "range": "± 17800.56933416088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6567.676767676768,
            "unit": "ns",
            "range": "± 1136.305172686968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17852.808988764045,
            "unit": "ns",
            "range": "± 1447.1044668924567"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "e4bb87e69b9e18864d0aefdf5507f2f8c642026b",
          "message": "Minor logging change",
          "timestamp": "2023-03-25T13:50:51+09:00",
          "tree_id": "859926b9eb3eeee5989fcf06a37bb87c324663b7",
          "url": "https://github.com/planetarium/libplanet/commit/e4bb87e69b9e18864d0aefdf5507f2f8c642026b"
        },
        "date": 1679720822083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94840.4109589041,
            "unit": "ns",
            "range": "± 4703.224791552944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4899050.721153846,
            "unit": "ns",
            "range": "± 9891.497262036384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1512503.7109375,
            "unit": "ns",
            "range": "± 1930.1460827960402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1139849.6744791667,
            "unit": "ns",
            "range": "± 1165.3605661447286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2522071.5104166665,
            "unit": "ns",
            "range": "± 2496.5650817898854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840348.1863839285,
            "unit": "ns",
            "range": "± 3006.9198507474803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743855.0911458334,
            "unit": "ns",
            "range": "± 715.2509418426173"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3990589.2427884615,
            "unit": "ns",
            "range": "± 5969.916881567083"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5623781.25,
            "unit": "ns",
            "range": "± 106322.67377343995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23329160,
            "unit": "ns",
            "range": "± 219103.19421287705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5653023.333333333,
            "unit": "ns",
            "range": "± 93520.80338976279"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26023006.666666668,
            "unit": "ns",
            "range": "± 405996.19714381325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90956.56565656565,
            "unit": "ns",
            "range": "± 10174.820477944579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186090.9090909091,
            "unit": "ns",
            "range": "± 8743.608254873117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163736.66666666666,
            "unit": "ns",
            "range": "± 7091.292504087748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3380893.3333333335,
            "unit": "ns",
            "range": "± 18680.259506711765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8428130.76923077,
            "unit": "ns",
            "range": "± 44635.045734179635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18575.25773195876,
            "unit": "ns",
            "range": "± 2110.2444036885795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51801.0101010101,
            "unit": "ns",
            "range": "± 7568.577562278361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44513.978494623654,
            "unit": "ns",
            "range": "± 2842.556695081012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94100,
            "unit": "ns",
            "range": "± 12476.900003921855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5907.142857142857,
            "unit": "ns",
            "range": "± 727.2671625841468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15914.893617021276,
            "unit": "ns",
            "range": "± 1310.0896667013021"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "06084a521d1c6ce05229fb0a0d7e546cf9eac9b8",
          "message": "Increased cache count",
          "timestamp": "2023-03-25T13:53:05+09:00",
          "tree_id": "eae3ce2e84a24477f1735d138701afa6166a7122",
          "url": "https://github.com/planetarium/libplanet/commit/06084a521d1c6ce05229fb0a0d7e546cf9eac9b8"
        },
        "date": 1679721107448,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124998.94736842105,
            "unit": "ns",
            "range": "± 9287.494391474405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6201974.494485294,
            "unit": "ns",
            "range": "± 101363.17646167017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938919.3638392857,
            "unit": "ns",
            "range": "± 29755.902290452712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425863.4635416667,
            "unit": "ns",
            "range": "± 25372.35277153368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3212589.453125,
            "unit": "ns",
            "range": "± 41517.800766135755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027072.4330357143,
            "unit": "ns",
            "range": "± 23938.71076236232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 951579.2131696428,
            "unit": "ns",
            "range": "± 7515.804011439356"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5837719.510957792,
            "unit": "ns",
            "range": "± 298667.7927589214"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6754823,
            "unit": "ns",
            "range": "± 597770.9565848475"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31180552.63157895,
            "unit": "ns",
            "range": "± 1271764.741006042"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7249703.333333333,
            "unit": "ns",
            "range": "± 437384.3013499864"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35617749.35064935,
            "unit": "ns",
            "range": "± 1823962.2191827747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106000,
            "unit": "ns",
            "range": "± 12167.523642013084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219390.21739130435,
            "unit": "ns",
            "range": "± 21399.014354330367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200439.78494623656,
            "unit": "ns",
            "range": "± 18507.19683625421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240694.366197183,
            "unit": "ns",
            "range": "± 206277.2855629902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10947210,
            "unit": "ns",
            "range": "± 384229.00876884244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20301.052631578947,
            "unit": "ns",
            "range": "± 4101.2581032063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56541.75257731959,
            "unit": "ns",
            "range": "± 7614.824769584502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58055.67010309279,
            "unit": "ns",
            "range": "± 7317.956925037277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125922.72727272728,
            "unit": "ns",
            "range": "± 13720.030890960224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9508.333333333334,
            "unit": "ns",
            "range": "± 1802.4887970397526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20338.947368421053,
            "unit": "ns",
            "range": "± 3396.8475603512557"
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
          "id": "ca4d3168f49854f75a6d927521318b1e412b79ca",
          "message": "Merge pull request #2991 from greymistcube/refactor/remove-state-delta-cache\n\n♻️ Remove state delta cache",
          "timestamp": "2023-03-25T19:54:01+09:00",
          "tree_id": "51067fb468ca59e1b776c0eb20895db4da154a8b",
          "url": "https://github.com/planetarium/libplanet/commit/ca4d3168f49854f75a6d927521318b1e412b79ca"
        },
        "date": 1679742549129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93688.23529411765,
            "unit": "ns",
            "range": "± 1896.9984030505852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4817021.540178572,
            "unit": "ns",
            "range": "± 12494.167429487808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540774.609375,
            "unit": "ns",
            "range": "± 8132.512567694792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127570.3404017857,
            "unit": "ns",
            "range": "± 1605.8930619819575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532585.6026785714,
            "unit": "ns",
            "range": "± 5366.057529309051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812684.7307477678,
            "unit": "ns",
            "range": "± 6718.960609326851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735312.67578125,
            "unit": "ns",
            "range": "± 846.7949661620103"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3856783.7332589286,
            "unit": "ns",
            "range": "± 17835.52451026869"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5458385.714285715,
            "unit": "ns",
            "range": "± 84633.73447384329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22476806.666666668,
            "unit": "ns",
            "range": "± 273899.53180648107"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5488501.449275362,
            "unit": "ns",
            "range": "± 250676.52902446024"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25066473.333333332,
            "unit": "ns",
            "range": "± 313050.1476638862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80743.87755102041,
            "unit": "ns",
            "range": "± 6661.058804516202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170894,
            "unit": "ns",
            "range": "± 6409.444880289509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145610.7142857143,
            "unit": "ns",
            "range": "± 4133.811736267083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3296393.3333333335,
            "unit": "ns",
            "range": "± 37365.17604605097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8128260,
            "unit": "ns",
            "range": "± 120413.40575581393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14061.95652173913,
            "unit": "ns",
            "range": "± 1016.4409347881674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43402.0618556701,
            "unit": "ns",
            "range": "± 4311.998265050751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35111.11111111111,
            "unit": "ns",
            "range": "± 1725.578535812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74810.98901098901,
            "unit": "ns",
            "range": "± 9455.409392975367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4261.224489795918,
            "unit": "ns",
            "range": "± 599.0770656001508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14494.623655913978,
            "unit": "ns",
            "range": "± 1106.9312840891187"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ffb0168fccdeeab068171e6ce38db86f2842ab68",
          "message": "Removed unnecessary logging",
          "timestamp": "2023-03-25T21:33:31+09:00",
          "tree_id": "3c13c9cfbea7a0a6a8d5fd897110ac350025fbbd",
          "url": "https://github.com/planetarium/libplanet/commit/ffb0168fccdeeab068171e6ce38db86f2842ab68"
        },
        "date": 1679748634595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102940.40404040404,
            "unit": "ns",
            "range": "± 7598.548722764658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831231.588541667,
            "unit": "ns",
            "range": "± 12735.346997669192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531288.950892857,
            "unit": "ns",
            "range": "± 3671.959360976205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166529.375,
            "unit": "ns",
            "range": "± 3991.8026400634017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660959.5963541665,
            "unit": "ns",
            "range": "± 12985.137507616757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827605.1953125,
            "unit": "ns",
            "range": "± 1798.2196015187267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755339.5182291666,
            "unit": "ns",
            "range": "± 1169.625004528474"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4635230.885416667,
            "unit": "ns",
            "range": "± 35923.49495749502"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5573733.333333333,
            "unit": "ns",
            "range": "± 61285.96514545172"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25815504.76190476,
            "unit": "ns",
            "range": "± 598922.4452933705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5787016.981132075,
            "unit": "ns",
            "range": "± 239339.2938710883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28026362.5,
            "unit": "ns",
            "range": "± 525610.479189041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92636.45833333333,
            "unit": "ns",
            "range": "± 8953.0132509636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185178.78787878787,
            "unit": "ns",
            "range": "± 7418.475173024028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161118.33333333334,
            "unit": "ns",
            "range": "± 6818.034203161511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3497950,
            "unit": "ns",
            "range": "± 58923.46731142016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9305383.333333334,
            "unit": "ns",
            "range": "± 142043.80947272503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21600,
            "unit": "ns",
            "range": "± 2434.132288927617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55814.28571428572,
            "unit": "ns",
            "range": "± 5218.547508190196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44679.38144329897,
            "unit": "ns",
            "range": "± 4922.142532820647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107597.5,
            "unit": "ns",
            "range": "± 9451.930015222193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7490.721649484536,
            "unit": "ns",
            "range": "± 1147.5592281579995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20788.659793814433,
            "unit": "ns",
            "range": "± 3167.8356270705485"
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
          "id": "447a3618b57d1f6ac22e3f49d470ce2044270ad7",
          "message": "Merge pull request #2992 from greymistcube/feature/set-state-caching\n\n🔧 Cache during commit",
          "timestamp": "2023-03-26T22:06:32+09:00",
          "tree_id": "0378e668cb7a863f559be06c1ee8577a1c7f451d",
          "url": "https://github.com/planetarium/libplanet/commit/447a3618b57d1f6ac22e3f49d470ce2044270ad7"
        },
        "date": 1679836771009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98519.23076923077,
            "unit": "ns",
            "range": "± 3947.599839740721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831668.125,
            "unit": "ns",
            "range": "± 12900.990972803489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519299.609375,
            "unit": "ns",
            "range": "± 7980.13125553761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121940.4296875,
            "unit": "ns",
            "range": "± 3602.9080452871763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569789.0755208335,
            "unit": "ns",
            "range": "± 12773.705931869385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816776.7838541666,
            "unit": "ns",
            "range": "± 3431.0051096271823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753799.2057291666,
            "unit": "ns",
            "range": "± 1397.448252886385"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4521743.020833333,
            "unit": "ns",
            "range": "± 61505.02425630541"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5442960,
            "unit": "ns",
            "range": "± 40720.06876222092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23805942.85714286,
            "unit": "ns",
            "range": "± 542481.2131045909"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6094605.882352941,
            "unit": "ns",
            "range": "± 120518.27387676647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27000256.52173913,
            "unit": "ns",
            "range": "± 652611.738134542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82364.21052631579,
            "unit": "ns",
            "range": "± 5266.593145427363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169293.01075268816,
            "unit": "ns",
            "range": "± 13248.292735369983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152276.92307692306,
            "unit": "ns",
            "range": "± 1773.4870764277957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3385300,
            "unit": "ns",
            "range": "± 51437.46550076955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8537452.38095238,
            "unit": "ns",
            "range": "± 175609.21564384832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16332.051282051281,
            "unit": "ns",
            "range": "± 862.7189862777153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46001.57894736842,
            "unit": "ns",
            "range": "± 4990.456064902514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37150.84745762712,
            "unit": "ns",
            "range": "± 1563.5252918960405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85556.25,
            "unit": "ns",
            "range": "± 15237.549274563047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4711.458333333333,
            "unit": "ns",
            "range": "± 658.8458475828721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15570.93023255814,
            "unit": "ns",
            "range": "± 871.761742824099"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "d6f5cee610bc8d5ed695fd07b2ce03d7390425aa",
          "message": "Reduced cache size to 1000",
          "timestamp": "2023-03-27T07:40:40+09:00",
          "tree_id": "c0d64ea115905f686c343c104bae76119989add5",
          "url": "https://github.com/planetarium/libplanet/commit/d6f5cee610bc8d5ed695fd07b2ce03d7390425aa"
        },
        "date": 1679871343100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108743.87755102041,
            "unit": "ns",
            "range": "± 8546.188230035785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4835646.822916667,
            "unit": "ns",
            "range": "± 12818.392095991283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534966.2527901786,
            "unit": "ns",
            "range": "± 2232.5607124865537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169820.29296875,
            "unit": "ns",
            "range": "± 3662.9931409807377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608769.0625,
            "unit": "ns",
            "range": "± 10639.22453442203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835280.8463541666,
            "unit": "ns",
            "range": "± 1572.7219067371207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762500.09765625,
            "unit": "ns",
            "range": "± 1188.9824578392393"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4650190.733506944,
            "unit": "ns",
            "range": "± 96973.91680701391"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5551250,
            "unit": "ns",
            "range": "± 135060.63453130968"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24058350,
            "unit": "ns",
            "range": "± 588712.6162431119"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6158061.538461538,
            "unit": "ns",
            "range": "± 79366.4448246396"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28245994.11764706,
            "unit": "ns",
            "range": "± 900584.4896480576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105787.23404255319,
            "unit": "ns",
            "range": "± 9714.62962888218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198473.41772151898,
            "unit": "ns",
            "range": "± 10057.663347695594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189050,
            "unit": "ns",
            "range": "± 8455.135837696418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3703021.4285714286,
            "unit": "ns",
            "range": "± 29769.116122674433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9345007.692307692,
            "unit": "ns",
            "range": "± 77349.48245397273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24080.85106382979,
            "unit": "ns",
            "range": "± 1939.5862875435098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58953.260869565216,
            "unit": "ns",
            "range": "± 4338.289810587784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45998.969072164946,
            "unit": "ns",
            "range": "± 3253.219394095154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113566.29213483146,
            "unit": "ns",
            "range": "± 15068.245839725827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8550,
            "unit": "ns",
            "range": "± 1046.176149643297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23976.08695652174,
            "unit": "ns",
            "range": "± 1785.3721602504138"
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
          "id": "ccb1a00588fe74530e3f126f3f55136ded8f174c",
          "message": "Merge pull request #2993 from greymistcube/revert/set-state-cache\n\n⏪ Revert set state cache",
          "timestamp": "2023-03-27T07:40:03+09:00",
          "tree_id": "3c13c9cfbea7a0a6a8d5fd897110ac350025fbbd",
          "url": "https://github.com/planetarium/libplanet/commit/ccb1a00588fe74530e3f126f3f55136ded8f174c"
        },
        "date": 1679871542873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122251.06382978724,
            "unit": "ns",
            "range": "± 12440.981054916256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5767026.768092105,
            "unit": "ns",
            "range": "± 124846.36585796867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1809273.5961914062,
            "unit": "ns",
            "range": "± 32814.591303892565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314587.2135416667,
            "unit": "ns",
            "range": "± 21112.16912533309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2952176.09375,
            "unit": "ns",
            "range": "± 46307.475369423984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981882.7994791666,
            "unit": "ns",
            "range": "± 15866.613500096917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903504.3196614584,
            "unit": "ns",
            "range": "± 12179.0242840733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5510091.42578125,
            "unit": "ns",
            "range": "± 285670.14586701355"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5949836.559139785,
            "unit": "ns",
            "range": "± 422968.0948973282"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29665920.70707071,
            "unit": "ns",
            "range": "± 2200887.0296765515"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6876510.30927835,
            "unit": "ns",
            "range": "± 762097.8609629333"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33759633.67346939,
            "unit": "ns",
            "range": "± 2670532.400486892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101467.01030927835,
            "unit": "ns",
            "range": "± 15102.191629373176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208468.88888888888,
            "unit": "ns",
            "range": "± 20986.69934299718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179084.44444444444,
            "unit": "ns",
            "range": "± 16275.389231342839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3900522.340425532,
            "unit": "ns",
            "range": "± 260298.51025654245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10066887.5,
            "unit": "ns",
            "range": "± 675233.4141847388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24942,
            "unit": "ns",
            "range": "± 6208.826887031987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58161.458333333336,
            "unit": "ns",
            "range": "± 10340.532102685367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50592.78350515464,
            "unit": "ns",
            "range": "± 9982.29941177842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120769.07216494845,
            "unit": "ns",
            "range": "± 24555.96652218129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13035,
            "unit": "ns",
            "range": "± 6457.184159734587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22923.958333333332,
            "unit": "ns",
            "range": "± 6631.92827070071"
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
          "id": "44c08f358a28391ed432740246f85f3a29bbca61",
          "message": "Merge pull request #2994 from greymistcube/feature/state-cache\n\n⚡ Introduce `StateCache`",
          "timestamp": "2023-03-27T14:01:22+09:00",
          "tree_id": "fe738e78b4353bc36fcbc3b06b14e8466f83bfd4",
          "url": "https://github.com/planetarium/libplanet/commit/44c08f358a28391ed432740246f85f3a29bbca61"
        },
        "date": 1679894185854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99488.09523809524,
            "unit": "ns",
            "range": "± 5355.155263335964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4755398.958333333,
            "unit": "ns",
            "range": "± 14064.109868131423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510345.1497395833,
            "unit": "ns",
            "range": "± 1368.2145285990268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157770.2734375,
            "unit": "ns",
            "range": "± 3688.4152609473886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616707.6923076925,
            "unit": "ns",
            "range": "± 11968.8897727563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819122.6771763393,
            "unit": "ns",
            "range": "± 1734.072793467524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766327.8245192308,
            "unit": "ns",
            "range": "± 2137.590911099974"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4750379.185267857,
            "unit": "ns",
            "range": "± 31508.49398175879"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5671357.142857143,
            "unit": "ns",
            "range": "± 65227.574564109644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25209880,
            "unit": "ns",
            "range": "± 378594.2347308376"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5948746.9387755105,
            "unit": "ns",
            "range": "± 236551.97640797048"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28043564,
            "unit": "ns",
            "range": "± 736470.9192493618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90076.40449438202,
            "unit": "ns",
            "range": "± 8369.71030333773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188168.75,
            "unit": "ns",
            "range": "± 9258.743301963046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163934.74576271186,
            "unit": "ns",
            "range": "± 6958.2452593611115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3534980,
            "unit": "ns",
            "range": "± 60944.016464761684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8973416.666666666,
            "unit": "ns",
            "range": "± 185013.76816811418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19760.20408163265,
            "unit": "ns",
            "range": "± 2888.931589899143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51682.10526315789,
            "unit": "ns",
            "range": "± 5744.414103549388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39438.37209302326,
            "unit": "ns",
            "range": "± 2140.707338002265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92790.80459770115,
            "unit": "ns",
            "range": "± 10197.019995418043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5861.224489795918,
            "unit": "ns",
            "range": "± 853.2089401058457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20414.21052631579,
            "unit": "ns",
            "range": "± 2552.383774813374"
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
          "id": "5d7454eec707ac2b6eed5f4e1657e855bb77235e",
          "message": "Merge pull request #2995 from greymistcube/fix/state-cache\n\n🔧 Fixed improper cache fetching",
          "timestamp": "2023-03-27T15:01:45+09:00",
          "tree_id": "32e53a21b0e02d9b0181c0b9be199bbd2ccefe6d",
          "url": "https://github.com/planetarium/libplanet/commit/5d7454eec707ac2b6eed5f4e1657e855bb77235e"
        },
        "date": 1679898018972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94883.87096774194,
            "unit": "ns",
            "range": "± 6316.838957734503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4354938.75,
            "unit": "ns",
            "range": "± 33601.76292621329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1362672.5390625,
            "unit": "ns",
            "range": "± 11034.488953137303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052836.5234375,
            "unit": "ns",
            "range": "± 12261.022518903314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2372310.15625,
            "unit": "ns",
            "range": "± 9492.584299775452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 756560.4701450893,
            "unit": "ns",
            "range": "± 1966.8371407932602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 669848.4750600961,
            "unit": "ns",
            "range": "± 2926.6986556697616"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4407806.363075658,
            "unit": "ns",
            "range": "± 149872.4940620646"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5119359.183673469,
            "unit": "ns",
            "range": "± 203610.33139140983"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24247161.904761903,
            "unit": "ns",
            "range": "± 880506.9373980192"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5844440.625,
            "unit": "ns",
            "range": "± 390879.9480734731"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27208013.333333332,
            "unit": "ns",
            "range": "± 508921.1865262028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94384.21052631579,
            "unit": "ns",
            "range": "± 11625.268844198315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181234.4827586207,
            "unit": "ns",
            "range": "± 7672.634253920512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180623.2323232323,
            "unit": "ns",
            "range": "± 15021.541187559844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3293636.3636363638,
            "unit": "ns",
            "range": "± 79466.11464406308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8461373.333333334,
            "unit": "ns",
            "range": "± 151747.7016378863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18807.21649484536,
            "unit": "ns",
            "range": "± 2448.0114133159354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48506.25,
            "unit": "ns",
            "range": "± 6647.798408812539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39469.14893617021,
            "unit": "ns",
            "range": "± 2557.3014420970285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86722.5,
            "unit": "ns",
            "range": "± 7348.313765067019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6928.282828282829,
            "unit": "ns",
            "range": "± 1225.4978500252084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17953.684210526317,
            "unit": "ns",
            "range": "± 2478.666874286299"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "338dc3bb5650cde1d790a76e45c28c8f2ce82095",
          "message": "Logging fix",
          "timestamp": "2023-03-27T17:07:14+09:00",
          "tree_id": "3b48bd076381d53ae1001f02d1647b9b27251ca9",
          "url": "https://github.com/planetarium/libplanet/commit/338dc3bb5650cde1d790a76e45c28c8f2ce82095"
        },
        "date": 1679905491245,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91361.62790697675,
            "unit": "ns",
            "range": "± 2981.5471616759473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4786393.90625,
            "unit": "ns",
            "range": "± 13408.567677744939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517517.1354166667,
            "unit": "ns",
            "range": "± 2017.330708324055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154490.8333333333,
            "unit": "ns",
            "range": "± 963.9762059840261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638550.6380208335,
            "unit": "ns",
            "range": "± 12506.160008980542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801400.0338040865,
            "unit": "ns",
            "range": "± 1184.061781564227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730890.6119791666,
            "unit": "ns",
            "range": "± 724.3032479262132"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3999538.699776786,
            "unit": "ns",
            "range": "± 10264.077382757667"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5453133.333333333,
            "unit": "ns",
            "range": "± 66836.8019525029"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22892280,
            "unit": "ns",
            "range": "± 276403.10159516765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5540892.592592592,
            "unit": "ns",
            "range": "± 230831.29905482993"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25742453.333333332,
            "unit": "ns",
            "range": "± 324862.2210517355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84049.48453608247,
            "unit": "ns",
            "range": "± 8416.416543866073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178832.8125,
            "unit": "ns",
            "range": "± 7560.235460503461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150226.66666666666,
            "unit": "ns",
            "range": "± 2747.847642549831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3349033.3333333335,
            "unit": "ns",
            "range": "± 33533.728578566275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8482807.142857144,
            "unit": "ns",
            "range": "± 52412.11639549528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16916.326530612245,
            "unit": "ns",
            "range": "± 1618.3671214224667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45570.21276595745,
            "unit": "ns",
            "range": "± 5053.686608936159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38523.958333333336,
            "unit": "ns",
            "range": "± 3288.1844227849533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86563.15789473684,
            "unit": "ns",
            "range": "± 13431.64770735067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4745.833333333333,
            "unit": "ns",
            "range": "± 792.8518367814501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14184.946236559139,
            "unit": "ns",
            "range": "± 1057.473017083974"
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
          "id": "c416eda41bbfeb2bc7bcb8134f64e01849e3af0f",
          "message": "Merge pull request #2999 from limebell/feature/getstate-measure\n\nAdd `GetState` measurement for single action execution",
          "timestamp": "2023-03-28T15:27:51+09:00",
          "tree_id": "cf1d21492170b9a59cb00ae8f0eaf617d97b074a",
          "url": "https://github.com/planetarium/libplanet/commit/c416eda41bbfeb2bc7bcb8134f64e01849e3af0f"
        },
        "date": 1679986167010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 113436.17021276595,
            "unit": "ns",
            "range": "± 7188.728499051948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5490322.042410715,
            "unit": "ns",
            "range": "± 91389.3465346086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1779376.6080729167,
            "unit": "ns",
            "range": "± 28986.67762067466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312665.2901785714,
            "unit": "ns",
            "range": "± 20089.73597062843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3042962.5558035714,
            "unit": "ns",
            "range": "± 35194.0417355007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 983892.7133413461,
            "unit": "ns",
            "range": "± 12957.653155381175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891138.9723557692,
            "unit": "ns",
            "range": "± 7699.674482345186"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5474127.798763736,
            "unit": "ns",
            "range": "± 306511.3800581599"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5818733.333333333,
            "unit": "ns",
            "range": "± 445453.2888915174"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30455504.12371134,
            "unit": "ns",
            "range": "± 1959341.745805927"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6750245.054945055,
            "unit": "ns",
            "range": "± 522635.2008521042"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35061436.36363637,
            "unit": "ns",
            "range": "± 2631980.170799264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103286.45833333333,
            "unit": "ns",
            "range": "± 11526.158987658113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212402.22222222222,
            "unit": "ns",
            "range": "± 14414.482244500798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196360.20408163266,
            "unit": "ns",
            "range": "± 13103.770920199091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4073106.6666666665,
            "unit": "ns",
            "range": "± 152685.33209304567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10094705,
            "unit": "ns",
            "range": "± 351928.1059665891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21289.130434782608,
            "unit": "ns",
            "range": "± 2167.819409865319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57098.94736842105,
            "unit": "ns",
            "range": "± 7367.647719776805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43100,
            "unit": "ns",
            "range": "± 3314.1697195877823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109593.6170212766,
            "unit": "ns",
            "range": "± 22025.468193481673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6810.869565217391,
            "unit": "ns",
            "range": "± 1053.6651387219995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22202.197802197803,
            "unit": "ns",
            "range": "± 2102.0084586983853"
          }
        ]
      }
    ]
  }
}