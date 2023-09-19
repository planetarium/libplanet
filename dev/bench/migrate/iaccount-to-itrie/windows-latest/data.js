window.BENCHMARK_DATA = {
  "lastUpdate": 1695089462985,
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
      }
    ]
  }
}