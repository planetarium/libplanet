window.BENCHMARK_DATA = {
  "lastUpdate": 1735279865109,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "9f747b2ca24ebd8b4688717d5d9389c4bb0c2b3e",
          "message": "add test and logging",
          "timestamp": "2024-12-24T18:09:53+09:00",
          "tree_id": "8c7b17e56b027e14ae3629d27cf9fffa874531e4",
          "url": "https://github.com/planetarium/libplanet/commit/9f747b2ca24ebd8b4688717d5d9389c4bb0c2b3e"
        },
        "date": 1735032108391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975227.2727272727,
            "unit": "ns",
            "range": "± 91290.11929700604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767128.3018867925,
            "unit": "ns",
            "range": "± 65985.2063180088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1549159,
            "unit": "ns",
            "range": "± 149493.7707529628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6727056.862745098,
            "unit": "ns",
            "range": "± 273942.5372262599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28605.555555555555,
            "unit": "ns",
            "range": "± 1213.0449239089967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9903380,
            "unit": "ns",
            "range": "± 139437.426826516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23885468.75,
            "unit": "ns",
            "range": "± 466137.3813498191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58429230.76923077,
            "unit": "ns",
            "range": "± 350214.3471852045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119059806.66666667,
            "unit": "ns",
            "range": "± 1023963.6373752081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245521286.66666666,
            "unit": "ns",
            "range": "± 3594947.6409591967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3262462.6302083335,
            "unit": "ns",
            "range": "± 9873.993679505747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047500.1041666666,
            "unit": "ns",
            "range": "± 2014.056861010187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739540.9480168269,
            "unit": "ns",
            "range": "± 3962.8721783188626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959165.2064732143,
            "unit": "ns",
            "range": "± 7189.889185148178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625944.8307291666,
            "unit": "ns",
            "range": "± 960.299857733518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562004.6549479166,
            "unit": "ns",
            "range": "± 1505.5879091607126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2295886.6666666665,
            "unit": "ns",
            "range": "± 40530.79722642431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2254153.3333333335,
            "unit": "ns",
            "range": "± 36412.33830657379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2719831.25,
            "unit": "ns",
            "range": "± 53160.77148612499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312755.263157895,
            "unit": "ns",
            "range": "± 73379.31790276346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2967891.304347826,
            "unit": "ns",
            "range": "± 67722.2127722271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91954.44444444444,
            "unit": "ns",
            "range": "± 7073.64408909058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167444.44444444444,
            "unit": "ns",
            "range": "± 7032.9358293623245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147783.87096774194,
            "unit": "ns",
            "range": "± 4315.483501238577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2578870,
            "unit": "ns",
            "range": "± 44987.6522741836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2438390.909090909,
            "unit": "ns",
            "range": "± 49246.18340629636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10389.772727272728,
            "unit": "ns",
            "range": "± 1086.8640719849868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50479.545454545456,
            "unit": "ns",
            "range": "± 3049.294589271921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43874.444444444445,
            "unit": "ns",
            "range": "± 1662.166652233758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51932.608695652176,
            "unit": "ns",
            "range": "± 8883.40975887634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2257.608695652174,
            "unit": "ns",
            "range": "± 307.8581433177806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9937.5,
            "unit": "ns",
            "range": "± 1426.9031612477938"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "cb5da2d51552f30f0ac908597d007224f3284a01",
          "message": "feat: use random guid as identity",
          "timestamp": "2024-12-27T14:53:16+09:00",
          "tree_id": "878a4a6b8eaf68d37cf2d0a678becca187e481fc",
          "url": "https://github.com/planetarium/libplanet/commit/cb5da2d51552f30f0ac908597d007224f3284a01"
        },
        "date": 1735279603196,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026801,
            "unit": "ns",
            "range": "± 118189.17509696483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1819217.7419354839,
            "unit": "ns",
            "range": "± 82186.94309006564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567677.1739130435,
            "unit": "ns",
            "range": "± 135368.88397253418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6585362.068965517,
            "unit": "ns",
            "range": "± 170683.3187384359"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30119.014084507042,
            "unit": "ns",
            "range": "± 1470.723004831858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10282006.666666666,
            "unit": "ns",
            "range": "± 177330.69779638376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24989586.363636363,
            "unit": "ns",
            "range": "± 613490.5900589748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61539050,
            "unit": "ns",
            "range": "± 1190107.1615615124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124562540,
            "unit": "ns",
            "range": "± 2243700.890365864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252107320,
            "unit": "ns",
            "range": "± 4344241.934890038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296779.9479166665,
            "unit": "ns",
            "range": "± 10454.347428858655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081250.8723958333,
            "unit": "ns",
            "range": "± 6649.392873609492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741946.3541666666,
            "unit": "ns",
            "range": "± 1567.704056328273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945075.697544643,
            "unit": "ns",
            "range": "± 2276.4192073510535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625288.8113839285,
            "unit": "ns",
            "range": "± 1025.4516871086455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 606485.2083333334,
            "unit": "ns",
            "range": "± 7101.723266572374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2368497.8260869565,
            "unit": "ns",
            "range": "± 89927.17483023061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2380206.25,
            "unit": "ns",
            "range": "± 44645.63388507324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2824009.375,
            "unit": "ns",
            "range": "± 87074.47075728506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2449097.8723404254,
            "unit": "ns",
            "range": "± 93950.46680440688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3091152.380952381,
            "unit": "ns",
            "range": "± 70182.85844169943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107666.30434782608,
            "unit": "ns",
            "range": "± 9542.82743335737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175653.2258064516,
            "unit": "ns",
            "range": "± 7928.920248610859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160256.1224489796,
            "unit": "ns",
            "range": "± 13089.895893410137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2727830.434782609,
            "unit": "ns",
            "range": "± 68998.81049556124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2573900,
            "unit": "ns",
            "range": "± 46366.82927635722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12663.04347826087,
            "unit": "ns",
            "range": "± 1924.7501559745438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59604.255319148935,
            "unit": "ns",
            "range": "± 6719.765659214341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46821.60493827161,
            "unit": "ns",
            "range": "± 2212.760412239723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71210.20408163265,
            "unit": "ns",
            "range": "± 13520.694255614153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2859.574468085106,
            "unit": "ns",
            "range": "± 816.2751946002072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12622.105263157895,
            "unit": "ns",
            "range": "± 2525.1997581555847"
          }
        ]
      }
    ]
  }
}