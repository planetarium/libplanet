window.BENCHMARK_DATA = {
  "lastUpdate": 1687490652100,
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
        "date": 1687488692326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497912.8484848486,
            "unit": "ns",
            "range": "± 421011.4038039185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3603336.3368421053,
            "unit": "ns",
            "range": "± 395966.85945472564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4755771.835051547,
            "unit": "ns",
            "range": "± 537045.0780709792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4695208.319587629,
            "unit": "ns",
            "range": "± 685661.2301228151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8027164.302083333,
            "unit": "ns",
            "range": "± 720132.2877275012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8787061.542553192,
            "unit": "ns",
            "range": "± 795871.859019486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22923062.326530613,
            "unit": "ns",
            "range": "± 2930657.9571215142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57085541.104166664,
            "unit": "ns",
            "range": "± 3864679.6625835444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111527809.2,
            "unit": "ns",
            "range": "± 6564606.48788852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225489009.6056338,
            "unit": "ns",
            "range": "± 10975410.606175369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336052.89898989897,
            "unit": "ns",
            "range": "± 52914.30369146851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328892.2,
            "unit": "ns",
            "range": "± 52804.6682215833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263856.90425531915,
            "unit": "ns",
            "range": "± 42901.62641628843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4563176.204081632,
            "unit": "ns",
            "range": "± 443767.9019866908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4140050.8163265307,
            "unit": "ns",
            "range": "± 431579.1574806625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28435.29292929293,
            "unit": "ns",
            "range": "± 10874.236588970678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103008.67346938775,
            "unit": "ns",
            "range": "± 21925.5013408341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102703.21052631579,
            "unit": "ns",
            "range": "± 24192.487938998987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125922.68041237113,
            "unit": "ns",
            "range": "± 29658.256667813148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4853.098765432099,
            "unit": "ns",
            "range": "± 942.3456319861925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27319.8125,
            "unit": "ns",
            "range": "± 11124.129259182491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58623.52747252747,
            "unit": "ns",
            "range": "± 11772.363978913269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6346758.797554348,
            "unit": "ns",
            "range": "± 155661.6708677388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2061693.8729166666,
            "unit": "ns",
            "range": "± 92085.0069813696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1481076.0452148437,
            "unit": "ns",
            "range": "± 32951.839058017154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2852650.231007543,
            "unit": "ns",
            "range": "± 81784.86488251877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918576.9621233259,
            "unit": "ns",
            "range": "± 26169.63627094532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882505.8645926339,
            "unit": "ns",
            "range": "± 28931.96056918429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1589772.4040404041,
            "unit": "ns",
            "range": "± 224842.36090175694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003839.0408163266,
            "unit": "ns",
            "range": "± 360221.89738949086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2374932.904255319,
            "unit": "ns",
            "range": "± 221731.54078226874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6572997.696969697,
            "unit": "ns",
            "range": "± 649479.957839464"
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
        "date": 1687490627260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3164641.6666666665,
            "unit": "ns",
            "range": "± 83976.68054978667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3369520.533333333,
            "unit": "ns",
            "range": "± 33887.49130340125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4160592,
            "unit": "ns",
            "range": "± 28987.07150322939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4133618.793103448,
            "unit": "ns",
            "range": "± 112467.13931296278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6598849.105263158,
            "unit": "ns",
            "range": "± 72946.77278208843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7580900,
            "unit": "ns",
            "range": "± 9766.950677589271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19655952.266666666,
            "unit": "ns",
            "range": "± 104342.46110659339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48914575.84615385,
            "unit": "ns",
            "range": "± 119651.71039510617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98843635.6,
            "unit": "ns",
            "range": "± 701469.1874610439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196779327.8,
            "unit": "ns",
            "range": "± 1042893.5802714074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276903.1041666667,
            "unit": "ns",
            "range": "± 10086.958078964679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264300.2195121951,
            "unit": "ns",
            "range": "± 9454.023533692402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227245.46153846153,
            "unit": "ns",
            "range": "± 2806.8686768765597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4157644.7333333334,
            "unit": "ns",
            "range": "± 38965.33631954481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3826178.285714286,
            "unit": "ns",
            "range": "± 24022.53425249068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15778.083333333334,
            "unit": "ns",
            "range": "± 1138.0088397276381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81391.52325581395,
            "unit": "ns",
            "range": "± 4133.178309091796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71515,
            "unit": "ns",
            "range": "± 849.2977491237491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84835.4387755102,
            "unit": "ns",
            "range": "± 10824.052706406148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4405.061224489796,
            "unit": "ns",
            "range": "± 514.3476864968584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15528.68085106383,
            "unit": "ns",
            "range": "± 1018.5636124133833"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46317.87951807229,
            "unit": "ns",
            "range": "± 2418.024498038008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6016298.4625,
            "unit": "ns",
            "range": "± 16852.844844548734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2013429.23359375,
            "unit": "ns",
            "range": "± 2182.9600456251624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363145.0671875,
            "unit": "ns",
            "range": "± 2216.048427351524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593672.7265625,
            "unit": "ns",
            "range": "± 3559.103865564701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815040.8526088169,
            "unit": "ns",
            "range": "± 727.0624313295904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725627.7745535715,
            "unit": "ns",
            "range": "± 603.484703941749"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1320050.6341463414,
            "unit": "ns",
            "range": "± 67960.42645113444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2538484.8333333335,
            "unit": "ns",
            "range": "± 82657.44381914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2115219.638554217,
            "unit": "ns",
            "range": "± 111676.50175488676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5140972.1034482755,
            "unit": "ns",
            "range": "± 138247.98144156567"
          }
        ]
      }
    ]
  }
}