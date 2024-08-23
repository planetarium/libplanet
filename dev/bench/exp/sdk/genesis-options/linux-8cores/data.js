window.BENCHMARK_DATA = {
  "lastUpdate": 1724399060092,
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
          "id": "9a191d98d1204fbe17ea76b1643b27cf85284e45",
          "message": "WIP",
          "timestamp": "2024-08-23T16:31:09+09:00",
          "tree_id": "bc8bd2b650e5169879959ffcbb5844cd85b8479f",
          "url": "https://github.com/planetarium/libplanet/commit/9a191d98d1204fbe17ea76b1643b27cf85284e45"
        },
        "date": 1724398854183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202117.20588235295,
            "unit": "ns",
            "range": "± 6430.225764354655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190208.2213114754,
            "unit": "ns",
            "range": "± 8070.119586332344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165427.61538461538,
            "unit": "ns",
            "range": "± 2447.711738830832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074237.423076923,
            "unit": "ns",
            "range": "± 18879.67878196704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2850710.933333333,
            "unit": "ns",
            "range": "± 40889.96331875982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12408.023529411765,
            "unit": "ns",
            "range": "± 678.219798205472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60012.15217391304,
            "unit": "ns",
            "range": "± 3480.651276163551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50224.07142857143,
            "unit": "ns",
            "range": "± 880.5104129433037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52354.61855670103,
            "unit": "ns",
            "range": "± 7761.16142033966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2815.0421052631577,
            "unit": "ns",
            "range": "± 278.38232992153434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15216.40404040404,
            "unit": "ns",
            "range": "± 2746.674508472694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2351971.1904761903,
            "unit": "ns",
            "range": "± 55069.077160071465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531061.933333333,
            "unit": "ns",
            "range": "± 32363.73259522514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3027495.5,
            "unit": "ns",
            "range": "± 40636.7144336441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2566375.9375,
            "unit": "ns",
            "range": "± 40155.0584650199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324106.8695652173,
            "unit": "ns",
            "range": "± 82009.37262028725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10175551.785714285,
            "unit": "ns",
            "range": "± 56658.2549001923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27284462.933333334,
            "unit": "ns",
            "range": "± 246045.34191005953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68383824.56666666,
            "unit": "ns",
            "range": "± 388390.6701585525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139555885.07142857,
            "unit": "ns",
            "range": "± 488580.3113608407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287463230.06666666,
            "unit": "ns",
            "range": "± 1128696.3791659616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011183.5185185185,
            "unit": "ns",
            "range": "± 49448.568465151526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959509.3265306123,
            "unit": "ns",
            "range": "± 77842.49573133446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681002.4893617022,
            "unit": "ns",
            "range": "± 65034.06036467497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8241040.222222222,
            "unit": "ns",
            "range": "± 146121.97705293846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752468.7247596155,
            "unit": "ns",
            "range": "± 4791.243030335453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1185548.1953125,
            "unit": "ns",
            "range": "± 1700.4354333713497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767237.8294921875,
            "unit": "ns",
            "range": "± 1871.365907584526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942666.3575520834,
            "unit": "ns",
            "range": "± 2263.79941179628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625461.7409319197,
            "unit": "ns",
            "range": "± 944.7859641098742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581334.7882952009,
            "unit": "ns",
            "range": "± 315.4408557945915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32048.473684210527,
            "unit": "ns",
            "range": "± 641.1495204726734"
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
          "id": "91f3f1293dbbb1c9e405ccb52bcf266337f18c8c",
          "message": "feat: Add GenesisBlockPath option to GenesisOptions",
          "timestamp": "2024-08-23T16:34:31+09:00",
          "tree_id": "bc8bd2b650e5169879959ffcbb5844cd85b8479f",
          "url": "https://github.com/planetarium/libplanet/commit/91f3f1293dbbb1c9e405ccb52bcf266337f18c8c"
        },
        "date": 1724399033626,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201128.71698113208,
            "unit": "ns",
            "range": "± 8395.791119037787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190130.75,
            "unit": "ns",
            "range": "± 6603.187317985933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170622.4705882353,
            "unit": "ns",
            "range": "± 2905.8847430181877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090086.533333333,
            "unit": "ns",
            "range": "± 52686.61054476021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825648.4,
            "unit": "ns",
            "range": "± 40646.24391854325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12714.83695652174,
            "unit": "ns",
            "range": "± 763.2080107219759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60136.75581395349,
            "unit": "ns",
            "range": "± 3280.296675736534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50120,
            "unit": "ns",
            "range": "± 544.1107841740921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51438.32474226804,
            "unit": "ns",
            "range": "± 7924.129217420767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2664.021052631579,
            "unit": "ns",
            "range": "± 235.44218149827657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14117.234693877552,
            "unit": "ns",
            "range": "± 1962.5164563025078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2427453.619047619,
            "unit": "ns",
            "range": "± 55772.11715227977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576388.3333333335,
            "unit": "ns",
            "range": "± 42520.00093849391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3095872.3666666667,
            "unit": "ns",
            "range": "± 80685.78435553452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2622593.9375,
            "unit": "ns",
            "range": "± 49634.55272081973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3267690.9444444445,
            "unit": "ns",
            "range": "± 69365.68873240042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10580237.692307692,
            "unit": "ns",
            "range": "± 175073.26496850047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26736261.333333332,
            "unit": "ns",
            "range": "± 149597.89168762023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67063052.733333334,
            "unit": "ns",
            "range": "± 262694.25064497284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134781789.46666667,
            "unit": "ns",
            "range": "± 723515.7945680312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283926932.21428573,
            "unit": "ns",
            "range": "± 1336472.2438050325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005143.1621621621,
            "unit": "ns",
            "range": "± 49303.52336273943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917180.4,
            "unit": "ns",
            "range": "± 77015.26852123518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1718907.28125,
            "unit": "ns",
            "range": "± 79480.16309636264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8342500.586206896,
            "unit": "ns",
            "range": "± 205970.52388258258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3804624.823660714,
            "unit": "ns",
            "range": "± 3427.9038314504983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213898.2420572916,
            "unit": "ns",
            "range": "± 1732.5782863284564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781962.0467447917,
            "unit": "ns",
            "range": "± 2381.6987035318825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967422.7651041667,
            "unit": "ns",
            "range": "± 1878.5344663576125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621490.0979166667,
            "unit": "ns",
            "range": "± 549.3480632258867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574561.4606119791,
            "unit": "ns",
            "range": "± 894.4873305348292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32090.714285714286,
            "unit": "ns",
            "range": "± 420.5372348961099"
          }
        ]
      }
    ]
  }
}