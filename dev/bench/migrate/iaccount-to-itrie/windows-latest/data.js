window.BENCHMARK_DATA = {
  "lastUpdate": 1695628817658,
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
          "id": "b4bdf49f452e229086e153945eaff2810b22cf53",
          "message": "Merge pull request #3430 from greymistcube/chore/remove-clutter\n\n🧹 Remove unnecessary clutter",
          "timestamp": "2023-09-22T10:36:21+09:00",
          "tree_id": "e99e29b817674d96659443d5dc38aa9a9006f502",
          "url": "https://github.com/planetarium/libplanet/commit/b4bdf49f452e229086e153945eaff2810b22cf53"
        },
        "date": 1695347675433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398787.878787879,
            "unit": "ns",
            "range": "± 120948.23591084054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2635715.873015873,
            "unit": "ns",
            "range": "± 119552.41825963015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1856436.8421052631,
            "unit": "ns",
            "range": "± 137975.14581351975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5751726.923076923,
            "unit": "ns",
            "range": "± 152945.11514315795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52076.086956521736,
            "unit": "ns",
            "range": "± 3542.3146826667994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7892386.666666667,
            "unit": "ns",
            "range": "± 122987.62926563366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21066176.923076924,
            "unit": "ns",
            "range": "± 145781.67553940695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53011026.666666664,
            "unit": "ns",
            "range": "± 526557.9977100157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106034019.23076923,
            "unit": "ns",
            "range": "± 535345.2614662419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213630160,
            "unit": "ns",
            "range": "± 2182645.1648008595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4558783.958333333,
            "unit": "ns",
            "range": "± 14239.152175091433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1442826.9921875,
            "unit": "ns",
            "range": "± 3769.9743745720007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083091.2109375,
            "unit": "ns",
            "range": "± 3078.382392063773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663626.640625,
            "unit": "ns",
            "range": "± 10073.837314008428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852178.1575520834,
            "unit": "ns",
            "range": "± 2623.454182872353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769175.7533482143,
            "unit": "ns",
            "range": "± 1852.3067136595307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3484160,
            "unit": "ns",
            "range": "± 50777.607550685454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3630100,
            "unit": "ns",
            "range": "± 104452.78915036363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4329116.666666667,
            "unit": "ns",
            "range": "± 109506.42583360382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3961302.272727273,
            "unit": "ns",
            "range": "± 147608.47251260778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6212074.358974359,
            "unit": "ns",
            "range": "± 209137.32043545067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262242.1052631579,
            "unit": "ns",
            "range": "± 8149.5691008274025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261143.75,
            "unit": "ns",
            "range": "± 10231.114542767764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238840.6779661017,
            "unit": "ns",
            "range": "± 10476.988226158215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4228307.142857143,
            "unit": "ns",
            "range": "± 50401.85763190929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3800050,
            "unit": "ns",
            "range": "± 59437.69523950786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23420.408163265307,
            "unit": "ns",
            "range": "± 2332.025321416234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92686.02150537634,
            "unit": "ns",
            "range": "± 6170.416647863266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82489.58333333333,
            "unit": "ns",
            "range": "± 6624.920721141009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86523.41772151898,
            "unit": "ns",
            "range": "± 5103.535950208105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6450,
            "unit": "ns",
            "range": "± 945.2267496465716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23026.315789473683,
            "unit": "ns",
            "range": "± 2436.7841786376316"
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
          "id": "d5c4ad2909d2dbbdf36a6c80622ea4ceba8ac559",
          "message": "Merge pull request #3431 from greymistcube/refactor/single-trie-commit\n\n♻️ Commit once for `IActionEvaluation`s",
          "timestamp": "2023-09-25T14:57:18+09:00",
          "tree_id": "78f01675d622d3342bb8561bfb371a960019f4fe",
          "url": "https://github.com/planetarium/libplanet/commit/d5c4ad2909d2dbbdf36a6c80622ea4ceba8ac559"
        },
        "date": 1695622512116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316635.7142857143,
            "unit": "ns",
            "range": "± 118524.00883408851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2512813.5135135134,
            "unit": "ns",
            "range": "± 124969.7084659377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1975302.0202020202,
            "unit": "ns",
            "range": "± 119112.45071042943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8739160,
            "unit": "ns",
            "range": "± 256413.9589508098"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50110.98901098901,
            "unit": "ns",
            "range": "± 2952.4171095505435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7705109.090909091,
            "unit": "ns",
            "range": "± 182500.55683957037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20887938.46153846,
            "unit": "ns",
            "range": "± 192831.08989675195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52932540,
            "unit": "ns",
            "range": "± 596755.7035456684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107142900,
            "unit": "ns",
            "range": "± 1140050.972544649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213768523.07692307,
            "unit": "ns",
            "range": "± 2272553.8032332133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4605178.385416667,
            "unit": "ns",
            "range": "± 40833.50348606377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1435766.3783482143,
            "unit": "ns",
            "range": "± 11522.868139010634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097093.1361607143,
            "unit": "ns",
            "range": "± 8489.83691813725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683099.386160714,
            "unit": "ns",
            "range": "± 13996.36613967806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849420.8268229166,
            "unit": "ns",
            "range": "± 6666.276339675556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785615.6770833334,
            "unit": "ns",
            "range": "± 11924.85294279167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387011.111111111,
            "unit": "ns",
            "range": "± 70136.2648066294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577681.25,
            "unit": "ns",
            "range": "± 69444.21472184226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4135548,
            "unit": "ns",
            "range": "± 110270.73168645734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4063812.2448979593,
            "unit": "ns",
            "range": "± 142952.85737008587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10393413.953488372,
            "unit": "ns",
            "range": "± 383850.7265550698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262414,
            "unit": "ns",
            "range": "± 10605.9669381852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254830.61224489796,
            "unit": "ns",
            "range": "± 9980.276467480595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242537.75510204083,
            "unit": "ns",
            "range": "± 15057.344101910012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4154768.75,
            "unit": "ns",
            "range": "± 81316.15435037084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3807006.6666666665,
            "unit": "ns",
            "range": "± 66848.2232552291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21887.113402061856,
            "unit": "ns",
            "range": "± 2136.5041338807064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92826.04166666667,
            "unit": "ns",
            "range": "± 7643.85194700416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78820.40816326531,
            "unit": "ns",
            "range": "± 8384.90247542611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82855.1724137931,
            "unit": "ns",
            "range": "± 9923.202298919268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6030.927835051546,
            "unit": "ns",
            "range": "± 924.2520427285908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21259.139784946237,
            "unit": "ns",
            "range": "± 2215.814530730315"
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
          "id": "6e8bf54a7739ec8f2a108b843bb48202647527b0",
          "message": "Merge pull request #3433 from greymistcube/chore/docs-fix\n\n🧹 Docs fix",
          "timestamp": "2023-09-25T16:43:20+09:00",
          "tree_id": "3be4ec43e39631347d4fc02318a7d2438c02fade",
          "url": "https://github.com/planetarium/libplanet/commit/6e8bf54a7739ec8f2a108b843bb48202647527b0"
        },
        "date": 1695628751176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351368,
            "unit": "ns",
            "range": "± 114007.65336705526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2454016.6666666665,
            "unit": "ns",
            "range": "± 81475.13205179322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001624.2105263157,
            "unit": "ns",
            "range": "± 110898.54834323151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9033671.590909092,
            "unit": "ns",
            "range": "± 494476.37507315335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50589.36170212766,
            "unit": "ns",
            "range": "± 3505.8006643094154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7334346.666666667,
            "unit": "ns",
            "range": "± 127107.31049374139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20519326.666666668,
            "unit": "ns",
            "range": "± 246861.65433487715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52144846.666666664,
            "unit": "ns",
            "range": "± 835202.1302540795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103329223.8095238,
            "unit": "ns",
            "range": "± 2336659.246425281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208823093.33333334,
            "unit": "ns",
            "range": "± 2505199.4549811985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4507735.379464285,
            "unit": "ns",
            "range": "± 13294.144544426224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1435628.9192708333,
            "unit": "ns",
            "range": "± 5542.749271007962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087056.1458333333,
            "unit": "ns",
            "range": "± 3918.061684284348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656958.6774553573,
            "unit": "ns",
            "range": "± 5280.787822081589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841405.908203125,
            "unit": "ns",
            "range": "± 2523.2634418341954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770532.3311941965,
            "unit": "ns",
            "range": "± 2780.3732567664524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325442.3076923075,
            "unit": "ns",
            "range": "± 82631.29636198102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453368.4210526315,
            "unit": "ns",
            "range": "± 75366.67442600269"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4053833.3333333335,
            "unit": "ns",
            "range": "± 111726.0213475529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4006776.470588235,
            "unit": "ns",
            "range": "± 124267.66335963168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10236894.11764706,
            "unit": "ns",
            "range": "± 293855.7107701468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257448.71794871794,
            "unit": "ns",
            "range": "± 8466.67994940886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245325,
            "unit": "ns",
            "range": "± 10128.447125619534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224206,
            "unit": "ns",
            "range": "± 13745.874091721287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4078776.470588235,
            "unit": "ns",
            "range": "± 77781.70197266646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751707.1428571427,
            "unit": "ns",
            "range": "± 64859.901851081064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20846.39175257732,
            "unit": "ns",
            "range": "± 2301.5421395080457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88745.83333333333,
            "unit": "ns",
            "range": "± 6311.29174644715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69578.94736842105,
            "unit": "ns",
            "range": "± 4104.561415315169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83813.26530612246,
            "unit": "ns",
            "range": "± 13146.209031818582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5523.711340206186,
            "unit": "ns",
            "range": "± 795.137985388423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19555.208333333332,
            "unit": "ns",
            "range": "± 1908.4780263846328"
          }
        ]
      }
    ]
  }
}