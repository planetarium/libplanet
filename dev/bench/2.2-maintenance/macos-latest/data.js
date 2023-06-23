window.BENCHMARK_DATA = {
  "lastUpdate": 1687491459374,
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
          "id": "c59018e3f7b058437f3ded9b3e3cc54e59ec2c53",
          "message": "Merge pull request #3240 from greymistcube/release/2.2.0\n\n🚀 Release 2.2.0",
          "timestamp": "2023-06-23T11:31:50+09:00",
          "tree_id": "14e032a1fe636bb468fbd87eec710f1cc0784d9b",
          "url": "https://github.com/planetarium/libplanet/commit/c59018e3f7b058437f3ded9b3e3cc54e59ec2c53"
        },
        "date": 1687488915892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9706798.020408163,
            "unit": "ns",
            "range": "± 666214.982838339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23460334.977272727,
            "unit": "ns",
            "range": "± 1715602.9811306482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52964983.81034483,
            "unit": "ns",
            "range": "± 2221826.7592881345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111045730.375,
            "unit": "ns",
            "range": "± 2828603.3663583766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221731352.89285713,
            "unit": "ns",
            "range": "± 9415298.410230014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81353.93181818182,
            "unit": "ns",
            "range": "± 9951.927714602689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356092.51515151514,
            "unit": "ns",
            "range": "± 46300.43105903355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329782.0578947368,
            "unit": "ns",
            "range": "± 41676.689488458134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 350146.98876404495,
            "unit": "ns",
            "range": "± 65466.0217653705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242929.706896552,
            "unit": "ns",
            "range": "± 180250.4824178043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858146.2297297297,
            "unit": "ns",
            "range": "± 186594.89055010432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21813.552083333332,
            "unit": "ns",
            "range": "± 5291.551178146441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116296.43298969071,
            "unit": "ns",
            "range": "± 21877.265785469335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111656.69473684211,
            "unit": "ns",
            "range": "± 19838.573501540777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122044.8085106383,
            "unit": "ns",
            "range": "± 17465.864477819614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7482.201030927835,
            "unit": "ns",
            "range": "± 1733.3903866709002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19686.6,
            "unit": "ns",
            "range": "± 4254.018551710591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1891712.7,
            "unit": "ns",
            "range": "± 324885.53956643754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3430608.202247191,
            "unit": "ns",
            "range": "± 379857.5616148823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2818942.38372093,
            "unit": "ns",
            "range": "± 331785.9181280877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7184063.2289156625,
            "unit": "ns",
            "range": "± 758396.5492687448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372142.234042553,
            "unit": "ns",
            "range": "± 329378.83076276915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3686460.0408163266,
            "unit": "ns",
            "range": "± 329639.792677949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4563648.67721519,
            "unit": "ns",
            "range": "± 236667.78153383636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4460689.577319588,
            "unit": "ns",
            "range": "± 291278.03880370024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8102594.829787234,
            "unit": "ns",
            "range": "± 508503.73413546063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6935888.948918269,
            "unit": "ns",
            "range": "± 180649.43059782186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1977373.908482143,
            "unit": "ns",
            "range": "± 45192.8190314877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369286.5518973214,
            "unit": "ns",
            "range": "± 32107.046672671768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618812.772633272,
            "unit": "ns",
            "range": "± 48440.83115986942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850309.1612119932,
            "unit": "ns",
            "range": "± 24652.474032683767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749472.4462890625,
            "unit": "ns",
            "range": "± 8459.45485967694"
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
          "id": "c8600baf235f5117460228c3ddeeafa0706037a9",
          "message": "Merge pull request #3241 from greymistcube/prepare/2.2.1\n\n🔧 Prepare 2.2.1",
          "timestamp": "2023-06-23T12:11:41+09:00",
          "tree_id": "58bd13e35f132365d6012e0272eec3219a5dbcbb",
          "url": "https://github.com/planetarium/libplanet/commit/c8600baf235f5117460228c3ddeeafa0706037a9"
        },
        "date": 1687491389383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10974578.34375,
            "unit": "ns",
            "range": "± 1984744.1805728464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27131195.686813187,
            "unit": "ns",
            "range": "± 5483849.443579167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67759975.11627907,
            "unit": "ns",
            "range": "± 10613730.271436175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145510027.2263158,
            "unit": "ns",
            "range": "± 33434313.517471105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 317993146.8333333,
            "unit": "ns",
            "range": "± 66987496.816427976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86962.41764705883,
            "unit": "ns",
            "range": "± 7367.095683820445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441010.02127659577,
            "unit": "ns",
            "range": "± 83689.07273347453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 413582.5333333333,
            "unit": "ns",
            "range": "± 76940.83753373194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 394979.5444444445,
            "unit": "ns",
            "range": "± 65217.48224933114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4837698.073033708,
            "unit": "ns",
            "range": "± 432418.8127822348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4420398.436842105,
            "unit": "ns",
            "range": "± 535700.5454729708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28383.095505617977,
            "unit": "ns",
            "range": "± 4185.779735439495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 147547.3829787234,
            "unit": "ns",
            "range": "± 30344.07184414994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 139494.2411764706,
            "unit": "ns",
            "range": "± 12569.31497466003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 159694.22340425532,
            "unit": "ns",
            "range": "± 32381.749436493283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10516.011235955057,
            "unit": "ns",
            "range": "± 1389.1047108118207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32526.15168539326,
            "unit": "ns",
            "range": "± 9617.476750569913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1824271.393258427,
            "unit": "ns",
            "range": "± 309161.39915693406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3947473.0760869565,
            "unit": "ns",
            "range": "± 1268342.1775854074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2936688.214285714,
            "unit": "ns",
            "range": "± 512528.27327183983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9424968.6,
            "unit": "ns",
            "range": "± 2792866.7046714206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4352520.344444444,
            "unit": "ns",
            "range": "± 1086926.1893674321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4743159.130434782,
            "unit": "ns",
            "range": "± 1311138.0350442752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5031183.983516484,
            "unit": "ns",
            "range": "± 487733.2171181145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5009086.822222223,
            "unit": "ns",
            "range": "± 577003.7437996779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10930460.231182795,
            "unit": "ns",
            "range": "± 2814506.2230804516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8179610.980589562,
            "unit": "ns",
            "range": "± 630218.3979445463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2115370.956285511,
            "unit": "ns",
            "range": "± 84420.13630882377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379956.6606820913,
            "unit": "ns",
            "range": "± 21645.93052525781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2875931.1214758833,
            "unit": "ns",
            "range": "± 186156.797465322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 889384.4190076463,
            "unit": "ns",
            "range": "± 34469.487995943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 853709.1452811105,
            "unit": "ns",
            "range": "± 36529.19543330879"
          }
        ]
      }
    ]
  }
}