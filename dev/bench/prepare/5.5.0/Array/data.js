window.BENCHMARK_DATA = {
  "lastUpdate": 1732169892204,
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
          "id": "3c035d5dca56c4b8435bd3fd60228ed8d59a6810",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-13T16:14:39+09:00",
          "tree_id": "a1c568e451c39ae91e9e709792c0f94ec87d9ef8",
          "url": "https://github.com/planetarium/libplanet/commit/3c035d5dca56c4b8435bd3fd60228ed8d59a6810"
        },
        "date": 1731492118836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10621179.846153846,
            "unit": "ns",
            "range": "± 98260.77846886667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27176027,
            "unit": "ns",
            "range": "± 221472.0129056074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67149514.92857143,
            "unit": "ns",
            "range": "± 68775.74909439014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137364938.6,
            "unit": "ns",
            "range": "± 286541.79619205894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270965186.0769231,
            "unit": "ns",
            "range": "± 479117.61585117097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13188.285714285714,
            "unit": "ns",
            "range": "± 520.1320345194414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54281.13333333333,
            "unit": "ns",
            "range": "± 3160.739638229343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105710.56818181818,
            "unit": "ns",
            "range": "± 3887.2775395721023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94637.36363636363,
            "unit": "ns",
            "range": "± 3479.9791137498664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2834517.5463917525,
            "unit": "ns",
            "range": "± 165980.13355318687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2710465.97,
            "unit": "ns",
            "range": "± 182719.11393414196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5530.468085106383,
            "unit": "ns",
            "range": "± 869.6939234442561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27110.402173913044,
            "unit": "ns",
            "range": "± 2229.0156801630637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23905.05319148936,
            "unit": "ns",
            "range": "± 2491.0621708571884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30849.042105263157,
            "unit": "ns",
            "range": "± 5119.11425790071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1430.3617021276596,
            "unit": "ns",
            "range": "± 286.3179618740245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5205.553191489362,
            "unit": "ns",
            "range": "± 665.1367167575041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 692957.3260869565,
            "unit": "ns",
            "range": "± 58196.95827709285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1269450.4571428571,
            "unit": "ns",
            "range": "± 37633.748106580875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1036365.5434782609,
            "unit": "ns",
            "range": "± 48875.27200328547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8743106.15,
            "unit": "ns",
            "range": "± 1372458.830096946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129237.3076923075,
            "unit": "ns",
            "range": "± 24500.279839846102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253938.8170731706,
            "unit": "ns",
            "range": "± 79749.4811990771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2535744.4285714286,
            "unit": "ns",
            "range": "± 30292.177824327176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299865.5319148935,
            "unit": "ns",
            "range": "± 89087.38092648897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2816797.706896552,
            "unit": "ns",
            "range": "± 123457.97673560597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3028911.4578683036,
            "unit": "ns",
            "range": "± 27450.281893504238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920528.0871744792,
            "unit": "ns",
            "range": "± 4978.753208309493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619886.5317057292,
            "unit": "ns",
            "range": "± 6461.923812484979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1624762.319921875,
            "unit": "ns",
            "range": "± 17839.522262290197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 453909.5662760417,
            "unit": "ns",
            "range": "± 1176.606281630883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 415888.0503580729,
            "unit": "ns",
            "range": "± 1026.1750324459188"
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
          "id": "0ae5af9eb145976d099875f790ea3ac5ac0f6f28",
          "message": "Prepare 5.5.0",
          "timestamp": "2024-11-21T15:03:56+09:00",
          "tree_id": "a1c568e451c39ae91e9e709792c0f94ec87d9ef8",
          "url": "https://github.com/planetarium/libplanet/commit/0ae5af9eb145976d099875f790ea3ac5ac0f6f28"
        },
        "date": 1732169505467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10783663.92857143,
            "unit": "ns",
            "range": "± 95610.92195452623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26731326.46153846,
            "unit": "ns",
            "range": "± 102566.85317685516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66588972.78571428,
            "unit": "ns",
            "range": "± 92261.66834204899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134586457.8,
            "unit": "ns",
            "range": "± 228178.4912892286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269839293.78571427,
            "unit": "ns",
            "range": "± 488703.26233712677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13205.214285714286,
            "unit": "ns",
            "range": "± 220.29610442850236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 55670.32584269663,
            "unit": "ns",
            "range": "± 3634.6524867500334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105560.55555555556,
            "unit": "ns",
            "range": "± 4422.539672770919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93693.64102564103,
            "unit": "ns",
            "range": "± 3193.1508155588554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2908665.262626263,
            "unit": "ns",
            "range": "± 171820.80674612577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2742181.8620689656,
            "unit": "ns",
            "range": "± 148490.33379848467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5072.617021276596,
            "unit": "ns",
            "range": "± 553.7036804362656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27141.494382022473,
            "unit": "ns",
            "range": "± 2006.6564860007775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23260.791666666668,
            "unit": "ns",
            "range": "± 1840.3384123388353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 32567.760416666668,
            "unit": "ns",
            "range": "± 5883.253164247413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1449.195652173913,
            "unit": "ns",
            "range": "± 258.9472447918384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5077.808510638298,
            "unit": "ns",
            "range": "± 712.9025371351065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681253.088888889,
            "unit": "ns",
            "range": "± 53073.69703601457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283562.9615384615,
            "unit": "ns",
            "range": "± 48538.996713159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1055254.6896551724,
            "unit": "ns",
            "range": "± 57722.93967765739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8909571.72,
            "unit": "ns",
            "range": "± 1314067.3092548281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2095658.1857142858,
            "unit": "ns",
            "range": "± 55861.46254839179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2229066.4166666665,
            "unit": "ns",
            "range": "± 22069.843165642582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2561300.846153846,
            "unit": "ns",
            "range": "± 68692.97740624862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2260329.9545454546,
            "unit": "ns",
            "range": "± 49295.12021776141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2792483.909090909,
            "unit": "ns",
            "range": "± 86688.58539023594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3058708.7740885415,
            "unit": "ns",
            "range": "± 48456.760378331426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918796.939453125,
            "unit": "ns",
            "range": "± 3901.0101185578815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616146.3138020834,
            "unit": "ns",
            "range": "± 6237.961658532966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648703.8958834135,
            "unit": "ns",
            "range": "± 7743.096620833975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466446.04345703125,
            "unit": "ns",
            "range": "± 534.3177179276572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 430694.952078683,
            "unit": "ns",
            "range": "± 852.747676157872"
          }
        ]
      }
    ]
  }
}