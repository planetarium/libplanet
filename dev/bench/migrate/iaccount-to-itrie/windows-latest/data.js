window.BENCHMARK_DATA = {
  "lastUpdate": 1695285346092,
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
          "id": "2dbe34b4f8b633e133ec730a39d49794678ee4b6",
          "message": "Merge pull request #3423 from greymistcube/merge/3.3.1-to-main\n\n🔀 Merge 3.3.1 to main",
          "timestamp": "2023-09-13T12:11:35+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/planetarium/libplanet/commit/2dbe34b4f8b633e133ec730a39d49794678ee4b6"
        },
        "date": 1695086017872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1658959.5959595959,
            "unit": "ns",
            "range": "± 295042.40474168025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3052496.9696969697,
            "unit": "ns",
            "range": "± 368372.6749418105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1977319.587628866,
            "unit": "ns",
            "range": "± 224456.54397491176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5651721.428571428,
            "unit": "ns",
            "range": "± 557627.7147873562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64941.237113402065,
            "unit": "ns",
            "range": "± 15691.662811408532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8547399,
            "unit": "ns",
            "range": "± 804007.8175024485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24775609.18367347,
            "unit": "ns",
            "range": "± 1844137.9180084227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62659693.93939394,
            "unit": "ns",
            "range": "± 3667319.7041452317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128633479.31034483,
            "unit": "ns",
            "range": "± 3381583.5777233248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250985096,
            "unit": "ns",
            "range": "± 10094411.798653748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5148297.106481481,
            "unit": "ns",
            "range": "± 141336.5667628674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1681238.6896306819,
            "unit": "ns",
            "range": "± 41133.722011930644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1243066.4713541667,
            "unit": "ns",
            "range": "± 29215.676081813337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3104552.34375,
            "unit": "ns",
            "range": "± 56533.72317437647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032848.1811523438,
            "unit": "ns",
            "range": "± 19082.27569818327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953688.037109375,
            "unit": "ns",
            "range": "± 19280.437017733333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3614724.7422680412,
            "unit": "ns",
            "range": "± 445392.5981252681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3971241.935483871,
            "unit": "ns",
            "range": "± 406882.30680611485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5143005.208333333,
            "unit": "ns",
            "range": "± 387996.3907509265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4403075.531914894,
            "unit": "ns",
            "range": "± 421837.2028863283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7522801.063829787,
            "unit": "ns",
            "range": "± 545676.0779453933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312293.5483870968,
            "unit": "ns",
            "range": "± 35306.144946280125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308343.43434343435,
            "unit": "ns",
            "range": "± 44840.19734890796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253078,
            "unit": "ns",
            "range": "± 37697.69861421359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4495716.4948453605,
            "unit": "ns",
            "range": "± 433132.21799671353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4269171.428571428,
            "unit": "ns",
            "range": "± 391273.49976588954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28212.121212121212,
            "unit": "ns",
            "range": "± 10270.169530696141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106154.63917525773,
            "unit": "ns",
            "range": "± 20294.585795942374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117177.55102040817,
            "unit": "ns",
            "range": "± 25027.93400459988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121721.42857142857,
            "unit": "ns",
            "range": "± 29124.18929449978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7327.906976744186,
            "unit": "ns",
            "range": "± 1492.3058480707118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28861.616161616163,
            "unit": "ns",
            "range": "± 10678.671352334275"
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
          "id": "57c96c96e8eb2639b4bbe10305015495d41c202a",
          "message": "Merge pull request #3427 from greymistcube/feature/iactionrendercontext\n\n♻️ Refactor `IActionRenderer`",
          "timestamp": "2023-09-19T10:49:44+09:00",
          "tree_id": "e79f208a94880406de3d65f93e0d362d8e27ac23",
          "url": "https://github.com/planetarium/libplanet/commit/57c96c96e8eb2639b4bbe10305015495d41c202a"
        },
        "date": 1695089388255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1602754.5454545454,
            "unit": "ns",
            "range": "± 75168.91375033694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3098256.25,
            "unit": "ns",
            "range": "± 94346.04095322912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2054306.3829787234,
            "unit": "ns",
            "range": "± 141434.99271085838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5400204.615384615,
            "unit": "ns",
            "range": "± 250179.61949290632"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55923.40425531915,
            "unit": "ns",
            "range": "± 4076.477910819712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8890802.702702703,
            "unit": "ns",
            "range": "± 276516.2236414655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23857750,
            "unit": "ns",
            "range": "± 247450.00971447205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59809066.666666664,
            "unit": "ns",
            "range": "± 826197.920744433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121355392,
            "unit": "ns",
            "range": "± 3179781.12086351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240270588,
            "unit": "ns",
            "range": "± 6371071.095409834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5472764.479166667,
            "unit": "ns",
            "range": "± 89432.83002038475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1694758.5546875,
            "unit": "ns",
            "range": "± 29257.144327879447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271448.8151041667,
            "unit": "ns",
            "range": "± 23127.15312904899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3204361.3802083335,
            "unit": "ns",
            "range": "± 40969.79569196839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016723.9973958334,
            "unit": "ns",
            "range": "± 16216.847886136313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930330.1822916666,
            "unit": "ns",
            "range": "± 9427.78352701963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3744196.5517241377,
            "unit": "ns",
            "range": "± 108379.11133331466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4202876.923076923,
            "unit": "ns",
            "range": "± 61300.13803472977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5019804.444444444,
            "unit": "ns",
            "range": "± 188099.06837954442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436537.037037037,
            "unit": "ns",
            "range": "± 121942.25981727881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7181684.146341464,
            "unit": "ns",
            "range": "± 233885.54530983322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294220,
            "unit": "ns",
            "range": "± 11031.228399412279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284268.6274509804,
            "unit": "ns",
            "range": "± 11558.728134117151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254449.15254237287,
            "unit": "ns",
            "range": "± 10902.046199608521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4760662.5,
            "unit": "ns",
            "range": "± 91900.13329696536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4417190.909090909,
            "unit": "ns",
            "range": "± 105776.1963909826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24023.958333333332,
            "unit": "ns",
            "range": "± 2436.59576120225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96445.78947368421,
            "unit": "ns",
            "range": "± 6047.171235809945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82365.9574468085,
            "unit": "ns",
            "range": "± 6195.637611862446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90731.86813186813,
            "unit": "ns",
            "range": "± 11979.870887088327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5889.473684210527,
            "unit": "ns",
            "range": "± 774.9363301520156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21607.865168539327,
            "unit": "ns",
            "range": "± 1601.8614682400203"
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
          "id": "a7b56a6a7e866cf8abb80aeb9d53b2b06a0a60a8",
          "message": "Merge pull request #3424 from greymistcube/feature/inverse-keyconversion\n\nInitial implementation of AccountDiff",
          "timestamp": "2023-09-19T11:01:54+09:00",
          "tree_id": "cc068e28f549f9bb67e03f8e667c1fb610b3a3ce",
          "url": "https://github.com/planetarium/libplanet/commit/a7b56a6a7e866cf8abb80aeb9d53b2b06a0a60a8"
        },
        "date": 1695089900947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1370197.9797979798,
            "unit": "ns",
            "range": "± 114084.5711901142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2478250,
            "unit": "ns",
            "range": "± 103350.3503094736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703664,
            "unit": "ns",
            "range": "± 139431.37446736507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4486627,
            "unit": "ns",
            "range": "± 274966.50626333867"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47075,
            "unit": "ns",
            "range": "± 3084.9020858239373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7394371.428571428,
            "unit": "ns",
            "range": "± 129640.9786743696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20535121.42857143,
            "unit": "ns",
            "range": "± 334519.21453051077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51000493.333333336,
            "unit": "ns",
            "range": "± 871792.1987546824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104398623.8095238,
            "unit": "ns",
            "range": "± 2484067.2539013033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210971286.66666666,
            "unit": "ns",
            "range": "± 1407165.2400008559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4554849.114583333,
            "unit": "ns",
            "range": "± 18156.17231873314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1440040.2864583333,
            "unit": "ns",
            "range": "± 4004.1224812764794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070805.3292410714,
            "unit": "ns",
            "range": "± 1617.5595478903053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660045.9114583335,
            "unit": "ns",
            "range": "± 7495.162561834309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835178.4830729166,
            "unit": "ns",
            "range": "± 1921.2922778067793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766801.6276041666,
            "unit": "ns",
            "range": "± 1824.7332247935199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3262712.5,
            "unit": "ns",
            "range": "± 114120.24065398336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3567950,
            "unit": "ns",
            "range": "± 70214.82563626028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4145471.4285714286,
            "unit": "ns",
            "range": "± 69915.70120312944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3781647.619047619,
            "unit": "ns",
            "range": "± 88009.46323576584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5994762.162162162,
            "unit": "ns",
            "range": "± 197860.44373546523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246944.44444444444,
            "unit": "ns",
            "range": "± 9325.672956984334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246600,
            "unit": "ns",
            "range": "± 9590.700624122226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223107.14285714287,
            "unit": "ns",
            "range": "± 13905.670800517722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4079909.523809524,
            "unit": "ns",
            "range": "± 95464.34886784651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3829770,
            "unit": "ns",
            "range": "± 86312.50504020718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20817.204301075268,
            "unit": "ns",
            "range": "± 1802.2102164645291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84122.47191011236,
            "unit": "ns",
            "range": "± 4738.736713345292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72007.93650793651,
            "unit": "ns",
            "range": "± 3294.1444426143435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85984.69387755102,
            "unit": "ns",
            "range": "± 14869.628300048782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5172.680412371134,
            "unit": "ns",
            "range": "± 869.3274645091043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20103.225806451614,
            "unit": "ns",
            "range": "± 1376.6256487215737"
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
          "id": "48a855a9788df70037f00e522d370b01af67db01",
          "message": "Merge pull request #3428 from greymistcube/refactor/cleanup-txsuccess\n\n♻️ Cleanup `TxSuccess` and `TxFailure`",
          "timestamp": "2023-09-20T10:49:28+09:00",
          "tree_id": "39ff51a5edb05c68e803a2e0d9eec444ab4d1c41",
          "url": "https://github.com/planetarium/libplanet/commit/48a855a9788df70037f00e522d370b01af67db01"
        },
        "date": 1695175576808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343288,
            "unit": "ns",
            "range": "± 133732.456627236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2391282.1428571427,
            "unit": "ns",
            "range": "± 68190.43624466773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1697520.202020202,
            "unit": "ns",
            "range": "± 174984.20335689897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4333338.461538462,
            "unit": "ns",
            "range": "± 223407.45213696355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44781.05263157895,
            "unit": "ns",
            "range": "± 2821.5468345844697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7033596.875,
            "unit": "ns",
            "range": "± 214330.32011115836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19314100,
            "unit": "ns",
            "range": "± 357418.4644782639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48717242.85714286,
            "unit": "ns",
            "range": "± 795054.3858652165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97106285.71428572,
            "unit": "ns",
            "range": "± 514008.3145947422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195799193.33333334,
            "unit": "ns",
            "range": "± 1857436.8793223274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4049555.5208333335,
            "unit": "ns",
            "range": "± 23383.733588448362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1287274.53125,
            "unit": "ns",
            "range": "± 7935.770574671488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 966948.2486979166,
            "unit": "ns",
            "range": "± 3470.5358657931283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2400932.03125,
            "unit": "ns",
            "range": "± 9545.877213565645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 758803.5872395834,
            "unit": "ns",
            "range": "± 5198.140334955114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 690101.71875,
            "unit": "ns",
            "range": "± 4008.4629626301758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3133853.4482758623,
            "unit": "ns",
            "range": "± 117778.71343658827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3412011.7647058824,
            "unit": "ns",
            "range": "± 69408.37379553835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3987738.095238095,
            "unit": "ns",
            "range": "± 91034.86956211051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3522386.6666666665,
            "unit": "ns",
            "range": "± 99516.6412468662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5614150,
            "unit": "ns",
            "range": "± 191099.071164671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240596.55172413794,
            "unit": "ns",
            "range": "± 7008.132151733273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223176.4705882353,
            "unit": "ns",
            "range": "± 9110.819682889001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210517.3469387755,
            "unit": "ns",
            "range": "± 16355.490427238985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3756894.4444444445,
            "unit": "ns",
            "range": "± 78202.43318181063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3443115.3846153845,
            "unit": "ns",
            "range": "± 49320.9868472818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21564.516129032258,
            "unit": "ns",
            "range": "± 1916.1014065754725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89512.90322580645,
            "unit": "ns",
            "range": "± 6739.472076577493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79605.78947368421,
            "unit": "ns",
            "range": "± 6123.597812395351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96635.41666666667,
            "unit": "ns",
            "range": "± 14340.454218503068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6185.416666666667,
            "unit": "ns",
            "range": "± 964.3082240016379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20762.5,
            "unit": "ns",
            "range": "± 2184.647388144438"
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
          "id": "c7170b1176182a22224dae5d920fcedff4fd4900",
          "message": "Merge pull request #3429 from greymistcube/refactor/txexecution-itrie\n\n♻️ `TxExecution` overhaul",
          "timestamp": "2023-09-21T17:18:45+09:00",
          "tree_id": "0d2b90731f22301d1c2f7ca0cccf215cf3f3bfbf",
          "url": "https://github.com/planetarium/libplanet/commit/c7170b1176182a22224dae5d920fcedff4fd4900"
        },
        "date": 1695285280202,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334009,
            "unit": "ns",
            "range": "± 128233.98995901235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2401167.7419354836,
            "unit": "ns",
            "range": "± 98621.96040186021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1723148.4210526317,
            "unit": "ns",
            "range": "± 110905.23927454569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5496586.046511628,
            "unit": "ns",
            "range": "± 298900.80438472074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43825,
            "unit": "ns",
            "range": "± 2358.1632121080506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6944592.857142857,
            "unit": "ns",
            "range": "± 47339.56654258212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18397045,
            "unit": "ns",
            "range": "± 379959.0427719948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45868285.71428572,
            "unit": "ns",
            "range": "± 417548.6040011351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93587355,
            "unit": "ns",
            "range": "± 1804319.412577846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191152838.46153846,
            "unit": "ns",
            "range": "± 2688104.5055138953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4399519.765625,
            "unit": "ns",
            "range": "± 35086.165399504775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1421021.8489583333,
            "unit": "ns",
            "range": "± 17760.567529910757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1014531.9411057692,
            "unit": "ns",
            "range": "± 2535.5624885371144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608481.640625,
            "unit": "ns",
            "range": "± 27108.685169424767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835790.4427083334,
            "unit": "ns",
            "range": "± 12505.856945351803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747260.859375,
            "unit": "ns",
            "range": "± 10068.744281856141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2964089.7435897435,
            "unit": "ns",
            "range": "± 103749.54101324419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151455.882352941,
            "unit": "ns",
            "range": "± 92771.11355267826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3997966.6666666665,
            "unit": "ns",
            "range": "± 72142.75200369519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3460420,
            "unit": "ns",
            "range": "± 55969.27983916075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5586775,
            "unit": "ns",
            "range": "± 103918.20606915603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250713.698630137,
            "unit": "ns",
            "range": "± 11799.415181700191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239519.29824561405,
            "unit": "ns",
            "range": "± 10234.787292724666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209777.08333333334,
            "unit": "ns",
            "range": "± 13050.577556621909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3791103.846153846,
            "unit": "ns",
            "range": "± 44266.9104295111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3444771.4285714286,
            "unit": "ns",
            "range": "± 50718.97579303535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19725,
            "unit": "ns",
            "range": "± 2367.0545765615657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89665.26315789473,
            "unit": "ns",
            "range": "± 8105.209362687057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65555,
            "unit": "ns",
            "range": "± 3293.7570406813516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80202.04081632652,
            "unit": "ns",
            "range": "± 14019.566441756022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4111.340206185567,
            "unit": "ns",
            "range": "± 508.44458249723766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18054.081632653062,
            "unit": "ns",
            "range": "± 1844.2397571702015"
          }
        ]
      }
    ]
  }
}