window.BENCHMARK_DATA = {
  "lastUpdate": 1721204665285,
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
        "date": 1721202220748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002151.724137931,
            "unit": "ns",
            "range": "± 78935.77439634656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1785532.5,
            "unit": "ns",
            "range": "± 63396.41010422092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1588861.6279069767,
            "unit": "ns",
            "range": "± 83521.30044429969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6824042.857142857,
            "unit": "ns",
            "range": "± 163359.30729659478"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29834.042553191488,
            "unit": "ns",
            "range": "± 1173.1185854555222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9528892.857142856,
            "unit": "ns",
            "range": "± 100421.09389416696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23591480,
            "unit": "ns",
            "range": "± 245641.90021829976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58854292.85714286,
            "unit": "ns",
            "range": "± 490993.5695400402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117160128.57142857,
            "unit": "ns",
            "range": "± 705086.8800024919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232371569.23076922,
            "unit": "ns",
            "range": "± 1823510.3598026782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3306765.9319196427,
            "unit": "ns",
            "range": "± 5848.912215921644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075634.326171875,
            "unit": "ns",
            "range": "± 2111.367297391016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737972.75390625,
            "unit": "ns",
            "range": "± 1083.270197135952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921614.9869791667,
            "unit": "ns",
            "range": "± 3165.289395984664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611014.8502604166,
            "unit": "ns",
            "range": "± 1618.4709675480447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566379.8307291666,
            "unit": "ns",
            "range": "± 1346.7313558341436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2150688.2352941176,
            "unit": "ns",
            "range": "± 43328.29448456489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258084.4444444445,
            "unit": "ns",
            "range": "± 85784.11316034614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2672640,
            "unit": "ns",
            "range": "± 45365.76430997908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2301862.962962963,
            "unit": "ns",
            "range": "± 63393.61863145914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2960357.1428571427,
            "unit": "ns",
            "range": "± 45032.46203976235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177769.44444444444,
            "unit": "ns",
            "range": "± 8755.354721924708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169531.1475409836,
            "unit": "ns",
            "range": "± 7636.568622612439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143485.7142857143,
            "unit": "ns",
            "range": "± 3326.903322052764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2709513.3333333335,
            "unit": "ns",
            "range": "± 35144.047792451216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2447720,
            "unit": "ns",
            "range": "± 35362.11047354014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10409.574468085106,
            "unit": "ns",
            "range": "± 933.0340321486476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54882.291666666664,
            "unit": "ns",
            "range": "± 5121.0400833314825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45423.07692307692,
            "unit": "ns",
            "range": "± 1505.5094501375409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54652.63157894737,
            "unit": "ns",
            "range": "± 10563.766274143745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2546.3917525773195,
            "unit": "ns",
            "range": "± 575.3734033343953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10543.877551020409,
            "unit": "ns",
            "range": "± 1644.6142233407083"
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
        "date": 1721204594456,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018930.303030303,
            "unit": "ns",
            "range": "± 110957.22604288433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752222.0588235294,
            "unit": "ns",
            "range": "± 83569.06848612276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519373.3333333333,
            "unit": "ns",
            "range": "± 76620.9648350388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6800330.434782608,
            "unit": "ns",
            "range": "± 168221.4299254587"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29672.916666666668,
            "unit": "ns",
            "range": "± 959.5521081353271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9588653.846153846,
            "unit": "ns",
            "range": "± 110153.95752751855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23551413.333333332,
            "unit": "ns",
            "range": "± 154129.76845440833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58581320,
            "unit": "ns",
            "range": "± 421798.6709997352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115379360,
            "unit": "ns",
            "range": "± 763741.0002275454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234815328.57142857,
            "unit": "ns",
            "range": "± 1155867.7296090797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350183.59375,
            "unit": "ns",
            "range": "± 7050.867340128052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052304.1666666667,
            "unit": "ns",
            "range": "± 3439.9075729736574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724681.1174665178,
            "unit": "ns",
            "range": "± 1959.160045245024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926170.41015625,
            "unit": "ns",
            "range": "± 6714.033932151405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631186.9661458334,
            "unit": "ns",
            "range": "± 1829.7531255277481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567986.7838541666,
            "unit": "ns",
            "range": "± 746.9691394883449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120233.3333333335,
            "unit": "ns",
            "range": "± 20016.945202455223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306146.6666666665,
            "unit": "ns",
            "range": "± 34527.60524289983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2734838.888888889,
            "unit": "ns",
            "range": "± 56114.65299764182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2249714.285714286,
            "unit": "ns",
            "range": "± 23413.633672675453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2905513.3333333335,
            "unit": "ns",
            "range": "± 43042.73402539565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172730.9090909091,
            "unit": "ns",
            "range": "± 7305.803698209231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166332.87671232875,
            "unit": "ns",
            "range": "± 8270.060707732988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144107.14285714287,
            "unit": "ns",
            "range": "± 4007.2091120535333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2758246.6666666665,
            "unit": "ns",
            "range": "± 39899.20992176352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2545600,
            "unit": "ns",
            "range": "± 40615.69014204099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11283.673469387755,
            "unit": "ns",
            "range": "± 1425.4457705770078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50597.82608695652,
            "unit": "ns",
            "range": "± 2888.3996200363754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43747.619047619046,
            "unit": "ns",
            "range": "± 1042.889758133163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48297.67441860465,
            "unit": "ns",
            "range": "± 7316.363235831858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2295.8333333333335,
            "unit": "ns",
            "range": "± 442.6990582103726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9136.046511627907,
            "unit": "ns",
            "range": "± 748.9463643244067"
          }
        ]
      }
    ]
  }
}