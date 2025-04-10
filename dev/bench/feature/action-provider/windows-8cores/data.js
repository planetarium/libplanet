window.BENCHMARK_DATA = {
  "lastUpdate": 1744252715205,
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
          "id": "96d0939b259534eaeb8b570aeaf1edeb2e2035a6",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:23:14+09:00",
          "tree_id": "682eb97e99da8be6985b7bc58f61596655809c6b",
          "url": "https://github.com/planetarium/libplanet/commit/96d0939b259534eaeb8b570aeaf1edeb2e2035a6"
        },
        "date": 1744252290938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2918774.285714286,
            "unit": "ns",
            "range": "± 93009.07401291281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5005142.307692308,
            "unit": "ns",
            "range": "± 136976.62916885322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4052437.5,
            "unit": "ns",
            "range": "± 102717.6281915833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10706569.387755102,
            "unit": "ns",
            "range": "± 4182324.6236278387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21258.333333333332,
            "unit": "ns",
            "range": "± 1607.0783438317035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4016225,
            "unit": "ns",
            "range": "± 6082.781211972635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10178614.285714285,
            "unit": "ns",
            "range": "± 169055.9664141428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 22815546.666666668,
            "unit": "ns",
            "range": "± 229741.92622737947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41804603.03030303,
            "unit": "ns",
            "range": "± 1308469.2412521704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82354635.71428572,
            "unit": "ns",
            "range": "± 56214.1455937486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091422.8645833335,
            "unit": "ns",
            "range": "± 9761.402602649854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917963.5677083334,
            "unit": "ns",
            "range": "± 4797.203172944319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736227.4088541666,
            "unit": "ns",
            "range": "± 6703.223681075492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1662188.5807291667,
            "unit": "ns",
            "range": "± 5626.5511684556095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 435629.5670572917,
            "unit": "ns",
            "range": "± 1432.506823896375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 410211.44080528844,
            "unit": "ns",
            "range": "± 350.07191122759093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3097496.296296296,
            "unit": "ns",
            "range": "± 86759.50172517785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3246385.714285714,
            "unit": "ns",
            "range": "± 100449.64832561386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4000921.4285714286,
            "unit": "ns",
            "range": "± 41368.60903132729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3349415.625,
            "unit": "ns",
            "range": "± 103907.11456710407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3381023,
            "unit": "ns",
            "range": "± 671607.0277838722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239154.54545454544,
            "unit": "ns",
            "range": "± 41306.99469533783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 376025,
            "unit": "ns",
            "range": "± 94966.09921440388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161073.07692307694,
            "unit": "ns",
            "range": "± 4334.379558119726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1447748.2758620689,
            "unit": "ns",
            "range": "± 36859.798277582035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1265308.8235294118,
            "unit": "ns",
            "range": "± 37648.62360272996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18470.70707070707,
            "unit": "ns",
            "range": "± 5942.191798696882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75861.22448979592,
            "unit": "ns",
            "range": "± 21363.91906136196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34278.94736842105,
            "unit": "ns",
            "range": "± 2603.1425003623954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60947.47474747475,
            "unit": "ns",
            "range": "± 32536.60840369156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3841.4141414141413,
            "unit": "ns",
            "range": "± 1307.202192330901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19929.591836734693,
            "unit": "ns",
            "range": "± 4353.1232817268165"
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
          "id": "2e3287cdda36d54de0f7780e3c1876179714bf59",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:25:01+09:00",
          "tree_id": "682eb97e99da8be6985b7bc58f61596655809c6b",
          "url": "https://github.com/planetarium/libplanet/commit/2e3287cdda36d54de0f7780e3c1876179714bf59"
        },
        "date": 1744252519475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2900995.8333333335,
            "unit": "ns",
            "range": "± 74475.99250862608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5165557.377049181,
            "unit": "ns",
            "range": "± 231330.13167262092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3931410.101010101,
            "unit": "ns",
            "range": "± 542220.1397005911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12500223,
            "unit": "ns",
            "range": "± 6006505.019750998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 21575.287356321838,
            "unit": "ns",
            "range": "± 1205.4352095293889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4020450,
            "unit": "ns",
            "range": "± 9536.549125903417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 10287310,
            "unit": "ns",
            "range": "± 82924.4906095729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 21000871.05263158,
            "unit": "ns",
            "range": "± 642401.294093432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 41401473.333333336,
            "unit": "ns",
            "range": "± 599510.6009627075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 82458885.71428572,
            "unit": "ns",
            "range": "± 172919.0689183943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4212662.552083333,
            "unit": "ns",
            "range": "± 4602.175592292374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922424.8893229166,
            "unit": "ns",
            "range": "± 8389.4065362211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724593.1640625,
            "unit": "ns",
            "range": "± 5045.603190910671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648142.5030048077,
            "unit": "ns",
            "range": "± 4913.736696369035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 440171.4290364583,
            "unit": "ns",
            "range": "± 2050.0907828724285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 397676.20192307694,
            "unit": "ns",
            "range": "± 1253.8230628410254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3087727.5862068967,
            "unit": "ns",
            "range": "± 88427.34667733783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182350,
            "unit": "ns",
            "range": "± 92754.9152894057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4050192.8571428573,
            "unit": "ns",
            "range": "± 19023.890416878632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3120766.6666666665,
            "unit": "ns",
            "range": "± 22068.708135907702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4478021.428571428,
            "unit": "ns",
            "range": "± 73786.01262665344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221644.79166666666,
            "unit": "ns",
            "range": "± 41191.2864311237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343913.2653061224,
            "unit": "ns",
            "range": "± 93030.97105155289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160768.18181818182,
            "unit": "ns",
            "range": "± 5055.3470791736045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1455051.4285714286,
            "unit": "ns",
            "range": "± 43897.53022282536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1272920,
            "unit": "ns",
            "range": "± 41250.082352858975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19180.61224489796,
            "unit": "ns",
            "range": "± 5146.045587468317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85985,
            "unit": "ns",
            "range": "± 17841.1530575869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42350.52631578947,
            "unit": "ns",
            "range": "± 16433.210235867336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59452.52525252525,
            "unit": "ns",
            "range": "± 29892.393215155214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3252.577319587629,
            "unit": "ns",
            "range": "± 1161.185886596216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18120.20202020202,
            "unit": "ns",
            "range": "± 5744.722152709615"
          }
        ]
      }
    ]
  }
}