window.BENCHMARK_DATA = {
  "lastUpdate": 1679471350280,
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
      }
    ]
  }
}