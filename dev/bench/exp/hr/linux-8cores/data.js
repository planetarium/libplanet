window.BENCHMARK_DATA = {
  "lastUpdate": 1744362483879,
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
          "id": "3c6a83391c5dad0c54892a6b38b2fddbebfac938",
          "message": "chore: temp currency",
          "timestamp": "2025-03-28T19:10:03+09:00",
          "tree_id": "1cad61d5ae4f0242bd831d58bc5dfcd5dc7c7042",
          "url": "https://github.com/planetarium/libplanet/commit/3c6a83391c5dad0c54892a6b38b2fddbebfac938"
        },
        "date": 1743157010617,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2294306.294117647,
            "unit": "ns",
            "range": "± 92974.98846534893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4682858.714285715,
            "unit": "ns",
            "range": "± 60707.94645669553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4207862.418367347,
            "unit": "ns",
            "range": "± 408986.5152103875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13839126.04,
            "unit": "ns",
            "range": "± 6870462.300400248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25289.462962962964,
            "unit": "ns",
            "range": "± 1083.0640665202043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2093240.4166666667,
            "unit": "ns",
            "range": "± 21097.423799896143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2324196.4310344825,
            "unit": "ns",
            "range": "± 101704.6665045953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2964280.74,
            "unit": "ns",
            "range": "± 373689.0808453099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2438477.084745763,
            "unit": "ns",
            "range": "± 106163.53612612495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2338063.2183908047,
            "unit": "ns",
            "range": "± 439441.54672986426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2656157.714285714,
            "unit": "ns",
            "range": "± 8313.766074118566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6992663.763157895,
            "unit": "ns",
            "range": "± 231593.40947450008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 17730239.066666666,
            "unit": "ns",
            "range": "± 127105.4200414908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25224236.17647059,
            "unit": "ns",
            "range": "± 508063.77841889043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 49892201.46666667,
            "unit": "ns",
            "range": "± 116841.55673931543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237334.4,
            "unit": "ns",
            "range": "± 30912.76068097432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 437512.1565656566,
            "unit": "ns",
            "range": "± 44637.806241392675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172468.05263157896,
            "unit": "ns",
            "range": "± 8728.658993445652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1015624.7272727273,
            "unit": "ns",
            "range": "± 29605.514631146896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 901424.8333333334,
            "unit": "ns",
            "range": "± 13062.114553396805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27173.309278350516,
            "unit": "ns",
            "range": "± 3730.354058712191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99664.82653061225,
            "unit": "ns",
            "range": "± 14044.444345165226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57226.1,
            "unit": "ns",
            "range": "± 19552.696126575018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66395.32474226804,
            "unit": "ns",
            "range": "± 26871.579631962115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4890.0204081632655,
            "unit": "ns",
            "range": "± 1864.7496735326267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25334.115789473683,
            "unit": "ns",
            "range": "± 2866.3446766917455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3460261.79140625,
            "unit": "ns",
            "range": "± 40475.11106178178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 950362.7687639509,
            "unit": "ns",
            "range": "± 8739.82829228991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775437.0829427083,
            "unit": "ns",
            "range": "± 4346.160093044438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1739811.1123046875,
            "unit": "ns",
            "range": "± 7588.321149576574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473639.34814453125,
            "unit": "ns",
            "range": "± 3828.6530653861696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429936.25266927085,
            "unit": "ns",
            "range": "± 3507.6657166114596"
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
          "id": "e494099d997514507c03c10b3e729ab4f6fddbc9",
          "message": "bump: Bump serilog version to 4.0.0",
          "timestamp": "2025-03-30T09:10:54+09:00",
          "tree_id": "0c4a4dfc26de86610367035942a3939ff53aed56",
          "url": "https://github.com/planetarium/libplanet/commit/e494099d997514507c03c10b3e729ab4f6fddbc9"
        },
        "date": 1743293850432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2499530.3061224488,
            "unit": "ns",
            "range": "± 99356.12554178612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5127404.428571428,
            "unit": "ns",
            "range": "± 74784.33701365165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4443709.744897959,
            "unit": "ns",
            "range": "± 347824.1239123934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16169691.4,
            "unit": "ns",
            "range": "± 7756187.0180233335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23507.66233766234,
            "unit": "ns",
            "range": "± 1243.8263080044323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2361324.975,
            "unit": "ns",
            "range": "± 83625.13668701796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2361574.346153846,
            "unit": "ns",
            "range": "± 13135.629421831763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3371076.3333333335,
            "unit": "ns",
            "range": "± 98461.52552142255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2614877.7195121953,
            "unit": "ns",
            "range": "± 92021.38503997649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3813279.5483870967,
            "unit": "ns",
            "range": "± 114877.44614989741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2876163.5,
            "unit": "ns",
            "range": "± 8515.586693280107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7084482.083333333,
            "unit": "ns",
            "range": "± 23732.429636406163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 18853144.214285713,
            "unit": "ns",
            "range": "± 217774.5102320212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25541027.393939395,
            "unit": "ns",
            "range": "± 293708.932807416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50688228.78571428,
            "unit": "ns",
            "range": "± 38696.55829692703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244264.21212121213,
            "unit": "ns",
            "range": "± 28995.77176152382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 443862.96,
            "unit": "ns",
            "range": "± 62425.13164962596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156803.61538461538,
            "unit": "ns",
            "range": "± 4205.128814454302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 994887.0588235294,
            "unit": "ns",
            "range": "± 29749.650246929235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 882570.5714285715,
            "unit": "ns",
            "range": "± 27134.64887047632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23972.684210526317,
            "unit": "ns",
            "range": "± 1805.8906758878509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98970.91,
            "unit": "ns",
            "range": "± 15958.944438711438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61120.46464646464,
            "unit": "ns",
            "range": "± 17526.966228348127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62786.197916666664,
            "unit": "ns",
            "range": "± 30207.48652434213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3542.181818181818,
            "unit": "ns",
            "range": "± 1379.1594479723346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23368.75257731959,
            "unit": "ns",
            "range": "± 2291.8206283020922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3791324.490364583,
            "unit": "ns",
            "range": "± 11598.461177836378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913777.7885416667,
            "unit": "ns",
            "range": "± 5923.33244395137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717000.66484375,
            "unit": "ns",
            "range": "± 6405.3108581686265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1709660.3372395833,
            "unit": "ns",
            "range": "± 2894.8386761077654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 490660.11681189906,
            "unit": "ns",
            "range": "± 1260.1494587308862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423226.03727213544,
            "unit": "ns",
            "range": "± 1898.7780095382984"
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
          "id": "a05615a452c69b45334efcf6c05f8bb18c292fc8",
          "message": "refactor: Change SerializeUnsignedTxToJson to SerializeUnsignedTx",
          "timestamp": "2025-04-09T18:15:28+09:00",
          "tree_id": "8c5eb065353ba1af408e34fbd4f30f69ea90ca4c",
          "url": "https://github.com/planetarium/libplanet/commit/a05615a452c69b45334efcf6c05f8bb18c292fc8"
        },
        "date": 1744190762964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2629705.4897959186,
            "unit": "ns",
            "range": "± 173817.8319596244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5170406.375,
            "unit": "ns",
            "range": "± 128365.79274896662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4144508.9156626505,
            "unit": "ns",
            "range": "± 221150.4609177909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15963115.06,
            "unit": "ns",
            "range": "± 7882104.090304402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23248.8417721519,
            "unit": "ns",
            "range": "± 1242.9469828625338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2292993.918918919,
            "unit": "ns",
            "range": "± 76406.92750674524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2370246.230769231,
            "unit": "ns",
            "range": "± 18833.708491044483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3090321.53,
            "unit": "ns",
            "range": "± 404880.63376614836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2502810.797979798,
            "unit": "ns",
            "range": "± 197962.81670545804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2671785.0808080807,
            "unit": "ns",
            "range": "± 726542.6196473222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2863754.5,
            "unit": "ns",
            "range": "± 9531.987102141116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7070713.714285715,
            "unit": "ns",
            "range": "± 17112.42675515514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 13361026.189473685,
            "unit": "ns",
            "range": "± 915802.2722169622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25641220.44,
            "unit": "ns",
            "range": "± 615915.0879668181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50847152.916666664,
            "unit": "ns",
            "range": "± 178486.3347223781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240223.11,
            "unit": "ns",
            "range": "± 30612.241411900974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 437406.57,
            "unit": "ns",
            "range": "± 48680.821739961204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160142.85714285713,
            "unit": "ns",
            "range": "± 8575.248476701843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1002173.5,
            "unit": "ns",
            "range": "± 29092.114972470263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 877203.6739130435,
            "unit": "ns",
            "range": "± 33593.470064585366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24026.447916666668,
            "unit": "ns",
            "range": "± 2224.0828736442622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99045.53,
            "unit": "ns",
            "range": "± 12912.349297197172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40902.825,
            "unit": "ns",
            "range": "± 5158.374179091605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63564.232323232325,
            "unit": "ns",
            "range": "± 31447.922693742392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4019.9583333333335,
            "unit": "ns",
            "range": "± 1312.894840192278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23682.115789473683,
            "unit": "ns",
            "range": "± 2465.991009039355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803828.9192708335,
            "unit": "ns",
            "range": "± 38095.066492089994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929244.719140625,
            "unit": "ns",
            "range": "± 7901.746316781299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 706895.220563616,
            "unit": "ns",
            "range": "± 5916.422565251734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1752716.2639322917,
            "unit": "ns",
            "range": "± 22822.61729990783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460526.83743489586,
            "unit": "ns",
            "range": "± 2705.3887965356253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425743.7916015625,
            "unit": "ns",
            "range": "± 1706.8118967327507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98728ca3ffb04e695b45d7d85d7cc454b74769aa",
          "message": "Merge pull request #4038 from planetarium/feature/action-provider\n\nAdd IActionProvider",
          "timestamp": "2025-04-11T17:56:06+09:00",
          "tree_id": "851063420637a127bb269ca7f71f3b284e9b112f",
          "url": "https://github.com/planetarium/libplanet/commit/98728ca3ffb04e695b45d7d85d7cc454b74769aa"
        },
        "date": 1744362166126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2466207.214285714,
            "unit": "ns",
            "range": "± 89231.6304212575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5227606.787878788,
            "unit": "ns",
            "range": "± 161579.71962524368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3996098.5595238097,
            "unit": "ns",
            "range": "± 212545.46911124524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14459851.39,
            "unit": "ns",
            "range": "± 6598140.377394038"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23046.68493150685,
            "unit": "ns",
            "range": "± 1173.7663130651065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2214201.153846154,
            "unit": "ns",
            "range": "± 23723.244314547122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2366584.1153846155,
            "unit": "ns",
            "range": "± 13543.652335679013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3146178.67,
            "unit": "ns",
            "range": "± 383790.39251364657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2438796,
            "unit": "ns",
            "range": "± 39085.144468888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2786700.68,
            "unit": "ns",
            "range": "± 758987.3565516425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2856799.1666666665,
            "unit": "ns",
            "range": "± 14234.062614861912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7116837.142857143,
            "unit": "ns",
            "range": "± 84145.52822215637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 13057306.966666667,
            "unit": "ns",
            "range": "± 573725.9341703176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25498296.848484848,
            "unit": "ns",
            "range": "± 359706.4593398624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 51085489.28571428,
            "unit": "ns",
            "range": "± 781019.9780350769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234539.14285714287,
            "unit": "ns",
            "range": "± 30484.00605387657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 527651.0416666666,
            "unit": "ns",
            "range": "± 13481.003079951679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160844.8116883117,
            "unit": "ns",
            "range": "± 8248.095097880321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 981172.8684210526,
            "unit": "ns",
            "range": "± 31212.311722079685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 860511.0392156863,
            "unit": "ns",
            "range": "± 34695.388427259764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23905.092783505155,
            "unit": "ns",
            "range": "± 2339.586577984427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100205.41414141415,
            "unit": "ns",
            "range": "± 14921.771103919173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39473.26315789474,
            "unit": "ns",
            "range": "± 2384.6963768632186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58851.88888888889,
            "unit": "ns",
            "range": "± 23910.336564983638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3166.826530612245,
            "unit": "ns",
            "range": "± 1146.3836799968399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23276.021276595744,
            "unit": "ns",
            "range": "± 1585.8437391918021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3799825.357291667,
            "unit": "ns",
            "range": "± 59986.31017279676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 980412.4360677083,
            "unit": "ns",
            "range": "± 7732.362493610144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 711252.0901692709,
            "unit": "ns",
            "range": "± 3325.581074259821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1683771.0701622595,
            "unit": "ns",
            "range": "± 2343.062237685553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462008.8707356771,
            "unit": "ns",
            "range": "± 2235.433465971291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423697.33255208336,
            "unit": "ns",
            "range": "± 1610.6194690129391"
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
          "id": "47928e8b99779f8f9375a0336fcc83d6c7b1df90",
          "message": "fix: Fix warnings",
          "timestamp": "2025-04-11T18:00:48+09:00",
          "tree_id": "04f81ff5bde3e04fa28ceea3a1f6ea4dc134ffea",
          "url": "https://github.com/planetarium/libplanet/commit/47928e8b99779f8f9375a0336fcc83d6c7b1df90"
        },
        "date": 1744362457344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2480239.7333333334,
            "unit": "ns",
            "range": "± 110783.32584195895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5295159,
            "unit": "ns",
            "range": "± 139613.59421990396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4118931.1086956523,
            "unit": "ns",
            "range": "± 231941.11371935048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13971078,
            "unit": "ns",
            "range": "± 6031079.089373903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23199.7,
            "unit": "ns",
            "range": "± 1188.4015154926874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2214478.214285714,
            "unit": "ns",
            "range": "± 9395.530813011139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2483978.7790697673,
            "unit": "ns",
            "range": "± 87229.00320484432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2984572.525252525,
            "unit": "ns",
            "range": "± 390601.4427286737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2458220.7916666665,
            "unit": "ns",
            "range": "± 61934.26414737201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2904801.65,
            "unit": "ns",
            "range": "± 792808.6308613127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2862204.566666667,
            "unit": "ns",
            "range": "± 8045.441810355074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7113497.692307692,
            "unit": "ns",
            "range": "± 22043.645809259924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 18805034.5,
            "unit": "ns",
            "range": "± 173472.33837649072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25660041.433333334,
            "unit": "ns",
            "range": "± 592663.3965988756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50823966,
            "unit": "ns",
            "range": "± 173609.17071399195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234634.01,
            "unit": "ns",
            "range": "± 32272.198850345827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 450159.3,
            "unit": "ns",
            "range": "± 58200.01559069873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163739.47540983607,
            "unit": "ns",
            "range": "± 7383.640372712631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 987116.9024390244,
            "unit": "ns",
            "range": "± 35178.080705039094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 871769.3571428572,
            "unit": "ns",
            "range": "± 31544.307703278162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24926.98979591837,
            "unit": "ns",
            "range": "± 2750.173854841466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100657.33333333333,
            "unit": "ns",
            "range": "± 14108.174564805344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41270.725,
            "unit": "ns",
            "range": "± 5171.106230289291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55446.86170212766,
            "unit": "ns",
            "range": "± 26298.555786668952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4217.1752577319585,
            "unit": "ns",
            "range": "± 1372.489169738002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25919.346153846152,
            "unit": "ns",
            "range": "± 431.08638851044043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3813269.2921316964,
            "unit": "ns",
            "range": "± 18691.85017453882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 895578.6185546875,
            "unit": "ns",
            "range": "± 5486.1015418717025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 711456.725,
            "unit": "ns",
            "range": "± 3573.8613895962803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1698935.41953125,
            "unit": "ns",
            "range": "± 3042.9164123876494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463602.458203125,
            "unit": "ns",
            "range": "± 3594.8719392111043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422791.5957728795,
            "unit": "ns",
            "range": "± 922.3771411653507"
          }
        ]
      }
    ]
  }
}