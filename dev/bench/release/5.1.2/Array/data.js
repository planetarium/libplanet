window.BENCHMARK_DATA = {
  "lastUpdate": 1721204544152,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "715d6e23f0a76bef6c53ea636e4fda4898d195fc",
          "message": "Release 5.1.2",
          "timestamp": "2024-07-17T16:31:46+09:00",
          "tree_id": "d6f06a4a7daaac8e7abdd7aac090c2dad3a510ce",
          "url": "https://github.com/planetarium/libplanet/commit/715d6e23f0a76bef6c53ea636e4fda4898d195fc"
        },
        "date": 1721202410944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10790178.285714285,
            "unit": "ns",
            "range": "± 153539.59898116416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26484407.5,
            "unit": "ns",
            "range": "± 154901.8475500634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67300430.86666666,
            "unit": "ns",
            "range": "± 118517.51562283747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135962183,
            "unit": "ns",
            "range": "± 258291.8796120002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273900883.73333335,
            "unit": "ns",
            "range": "± 581652.915853416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14144.615384615385,
            "unit": "ns",
            "range": "± 204.4926805786858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110435.48,
            "unit": "ns",
            "range": "± 4438.581866924136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106253.2,
            "unit": "ns",
            "range": "± 3532.2852994008904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92083.73170731707,
            "unit": "ns",
            "range": "± 3098.1603172236764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3029060.939759036,
            "unit": "ns",
            "range": "± 160467.55567261914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2725815.836734694,
            "unit": "ns",
            "range": "± 164781.0349392283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5073.494505494506,
            "unit": "ns",
            "range": "± 430.67795066812647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26971.17391304348,
            "unit": "ns",
            "range": "± 1977.5168779024152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24026.427083333332,
            "unit": "ns",
            "range": "± 2202.2492389411022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30218.542553191488,
            "unit": "ns",
            "range": "± 5389.3195625822855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1326.2978723404256,
            "unit": "ns",
            "range": "± 259.6736922505576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4947.208791208791,
            "unit": "ns",
            "range": "± 570.4137974894194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687733.0857142857,
            "unit": "ns",
            "range": "± 30769.935103171996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1314621.112244898,
            "unit": "ns",
            "range": "± 51808.517827998265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082253.6533333333,
            "unit": "ns",
            "range": "± 52026.13919749492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9432304.5,
            "unit": "ns",
            "range": "± 1356704.1208112447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171080.6346153845,
            "unit": "ns",
            "range": "± 76040.51408141476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283779.8723404254,
            "unit": "ns",
            "range": "± 87439.09667718713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2558841.2666666666,
            "unit": "ns",
            "range": "± 40030.953863348346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2306807,
            "unit": "ns",
            "range": "± 59521.21816839773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2998558.193548387,
            "unit": "ns",
            "range": "± 172861.47273531774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036655.9322916665,
            "unit": "ns",
            "range": "± 44226.524611162204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923864.556640625,
            "unit": "ns",
            "range": "± 6325.937902211162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615964.616015625,
            "unit": "ns",
            "range": "± 4631.740874304385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1668469.0369591345,
            "unit": "ns",
            "range": "± 7265.835785683347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466333.16380208335,
            "unit": "ns",
            "range": "± 720.9575675733646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416047.91555989586,
            "unit": "ns",
            "range": "± 828.8342547590921"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "0d0576b1ffe1f6df808743926b476cebd937512e",
          "message": "Release 5.1.2",
          "timestamp": "2024-07-17T17:14:13+09:00",
          "tree_id": "dc88da6b94c65988531bcacfcd575558ae310fa5",
          "url": "https://github.com/planetarium/libplanet/commit/0d0576b1ffe1f6df808743926b476cebd937512e"
        },
        "date": 1721204531761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10963844,
            "unit": "ns",
            "range": "± 86594.2996591262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26696141.384615384,
            "unit": "ns",
            "range": "± 120841.47488861764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67216952,
            "unit": "ns",
            "range": "± 128481.0077416413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135890049.4,
            "unit": "ns",
            "range": "± 995052.0574037321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276180654.15384614,
            "unit": "ns",
            "range": "± 461807.5044073822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14206.261904761905,
            "unit": "ns",
            "range": "± 328.07909179981357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109771.41791044777,
            "unit": "ns",
            "range": "± 5177.334730690468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106691.07692307692,
            "unit": "ns",
            "range": "± 4353.51916628625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92003.36363636363,
            "unit": "ns",
            "range": "± 2902.388777134511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3007965.101010101,
            "unit": "ns",
            "range": "± 184342.7167511475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2764881.6,
            "unit": "ns",
            "range": "± 78883.2858300903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4843.010989010989,
            "unit": "ns",
            "range": "± 493.8792811227702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27365.178947368422,
            "unit": "ns",
            "range": "± 2289.595346478478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23409.40625,
            "unit": "ns",
            "range": "± 1603.310605086107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30391.09793814433,
            "unit": "ns",
            "range": "± 6319.319625923273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1174.7422680412371,
            "unit": "ns",
            "range": "± 259.9251606372542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4667.953488372093,
            "unit": "ns",
            "range": "± 350.06143685919386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 670652.768115942,
            "unit": "ns",
            "range": "± 25054.240102076492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1275356.96,
            "unit": "ns",
            "range": "± 51461.009195970444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1074487.9567901234,
            "unit": "ns",
            "range": "± 55916.57217633458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9956105.24,
            "unit": "ns",
            "range": "± 2019680.3330278683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188565.5,
            "unit": "ns",
            "range": "± 31592.521435723782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271454.918181818,
            "unit": "ns",
            "range": "± 89160.7431950837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2560243.923076923,
            "unit": "ns",
            "range": "± 22883.53083355487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2317525.170212766,
            "unit": "ns",
            "range": "± 81341.56878927791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3063853.525423729,
            "unit": "ns",
            "range": "± 127143.97702039997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3022313.77734375,
            "unit": "ns",
            "range": "± 29634.165091106574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916111.810546875,
            "unit": "ns",
            "range": "± 5109.473032222837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616746.7363932292,
            "unit": "ns",
            "range": "± 4575.777576356641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1664779.7463541667,
            "unit": "ns",
            "range": "± 22004.874616771052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467720.20940290176,
            "unit": "ns",
            "range": "± 665.938423441298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425930.56223958335,
            "unit": "ns",
            "range": "± 881.3269238444511"
          }
        ]
      }
    ]
  }
}