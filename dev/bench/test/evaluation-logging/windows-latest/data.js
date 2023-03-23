window.BENCHMARK_DATA = {
  "lastUpdate": 1679540942891,
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
      }
    ]
  }
}