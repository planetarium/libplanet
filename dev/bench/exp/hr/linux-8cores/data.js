window.BENCHMARK_DATA = {
  "lastUpdate": 1743064408496,
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
          "id": "b1d96ff91b659d5ed066e72a3e1fb9a6002a2811",
          "message": "test: Change tx.bin",
          "timestamp": "2025-03-11T18:13:38+09:00",
          "tree_id": "56b1a3806a7626d429197468352950372021272a",
          "url": "https://github.com/planetarium/libplanet/commit/b1d96ff91b659d5ed066e72a3e1fb9a6002a2811"
        },
        "date": 1742890763563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2513823.3571428573,
            "unit": "ns",
            "range": "± 107713.63813834068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5228427.98989899,
            "unit": "ns",
            "range": "± 318698.4823780805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4070911.2083333335,
            "unit": "ns",
            "range": "± 247336.9189302601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15828831.49,
            "unit": "ns",
            "range": "± 7360034.972833185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22952.776315789473,
            "unit": "ns",
            "range": "± 1196.1880632373736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2394932.2,
            "unit": "ns",
            "range": "± 90835.73316672447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2351568.6363636362,
            "unit": "ns",
            "range": "± 83132.48234835513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3340896.0185185187,
            "unit": "ns",
            "range": "± 140149.69675092772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2531133.3076923075,
            "unit": "ns",
            "range": "± 86716.63013612783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2927399.46,
            "unit": "ns",
            "range": "± 830890.9828738783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2854393.153846154,
            "unit": "ns",
            "range": "± 7708.9390844455575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7431346.575757576,
            "unit": "ns",
            "range": "± 227165.20281215914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 15465767.815789474,
            "unit": "ns",
            "range": "± 124915.79153264838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25361044.17647059,
            "unit": "ns",
            "range": "± 153627.800856825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50848120.8,
            "unit": "ns",
            "range": "± 44468.692168439455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233314.32,
            "unit": "ns",
            "range": "± 29103.25437072756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 429924.4,
            "unit": "ns",
            "range": "± 46412.08718783624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161119.16666666666,
            "unit": "ns",
            "range": "± 10808.294713020588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 987148.358490566,
            "unit": "ns",
            "range": "± 39977.58676390018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 865508.6153846154,
            "unit": "ns",
            "range": "± 30863.21193059303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23461.470588235294,
            "unit": "ns",
            "range": "± 1304.623496027323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97778.101010101,
            "unit": "ns",
            "range": "± 15059.475212754605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39568.025,
            "unit": "ns",
            "range": "± 2346.52964320839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61945.88,
            "unit": "ns",
            "range": "± 32909.155212088524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3385.234693877551,
            "unit": "ns",
            "range": "± 1284.5148913915348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23652.56989247312,
            "unit": "ns",
            "range": "± 2401.881438254501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3879915.6552083334,
            "unit": "ns",
            "range": "± 18274.06168762269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 940806.7842122396,
            "unit": "ns",
            "range": "± 5208.317655516969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 699688.8466145833,
            "unit": "ns",
            "range": "± 4650.0040914569445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1724309.9603365385,
            "unit": "ns",
            "range": "± 4638.82426583757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462264.9904296875,
            "unit": "ns",
            "range": "± 2087.4365819115114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425084.68896484375,
            "unit": "ns",
            "range": "± 1512.1655155158091"
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
          "id": "e98ae39bf62ae3ba49a15acd3728ac1c29fac5f9",
          "message": "fix: Fix render action invoke",
          "timestamp": "2025-03-27T17:25:58+09:00",
          "tree_id": "fa71a4e5e6fdb26667319b79e26d04bf495669a2",
          "url": "https://github.com/planetarium/libplanet/commit/e98ae39bf62ae3ba49a15acd3728ac1c29fac5f9"
        },
        "date": 1743064381914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2297664.3076923075,
            "unit": "ns",
            "range": "± 13392.4278629419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5014141.3655913975,
            "unit": "ns",
            "range": "± 283126.7022029177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4005569.5425531915,
            "unit": "ns",
            "range": "± 223613.31811899386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15905115.37,
            "unit": "ns",
            "range": "± 7824123.079758226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25941.603092783505,
            "unit": "ns",
            "range": "± 4128.7400027241365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2363286.9836065574,
            "unit": "ns",
            "range": "± 106295.28039122777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2564746.3333333335,
            "unit": "ns",
            "range": "± 89141.67329456177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3009913.1515151514,
            "unit": "ns",
            "range": "± 378709.60033975524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2673892.8571428573,
            "unit": "ns",
            "range": "± 26979.616718658446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3670314.75,
            "unit": "ns",
            "range": "± 70270.64300877477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2858618,
            "unit": "ns",
            "range": "± 11917.291580530562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7144631.730769231,
            "unit": "ns",
            "range": "± 105503.87533810773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 14047385.868686868,
            "unit": "ns",
            "range": "± 1890011.7896670166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25858365.588235293,
            "unit": "ns",
            "range": "± 834479.9650560592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50807388.428571425,
            "unit": "ns",
            "range": "± 33874.20670592957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245613.98,
            "unit": "ns",
            "range": "± 32511.56252376944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 493025.2702702703,
            "unit": "ns",
            "range": "± 16464.448463361983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156934.15217391305,
            "unit": "ns",
            "range": "± 6039.730052714428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 993480.1891891892,
            "unit": "ns",
            "range": "± 30946.077527278383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 865218.0175438597,
            "unit": "ns",
            "range": "± 37597.15565727737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24098.720430107525,
            "unit": "ns",
            "range": "± 2545.805481851647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98737.51,
            "unit": "ns",
            "range": "± 15122.146869052422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38908.5,
            "unit": "ns",
            "range": "± 1495.0593100541898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55396.76530612245,
            "unit": "ns",
            "range": "± 26838.758967940306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3223.4897959183672,
            "unit": "ns",
            "range": "± 1189.749520939267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22900.78125,
            "unit": "ns",
            "range": "± 1880.4179166127994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3819036.6922433036,
            "unit": "ns",
            "range": "± 17492.29353633318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915389.7319661458,
            "unit": "ns",
            "range": "± 7766.749211523931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 710033.9741536458,
            "unit": "ns",
            "range": "± 5119.61236664386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1680349.3006310095,
            "unit": "ns",
            "range": "± 3976.0877471843305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 458230.91826171876,
            "unit": "ns",
            "range": "± 2131.1077278591933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427750.59022739955,
            "unit": "ns",
            "range": "± 1371.3793747378143"
          }
        ]
      }
    ]
  }
}