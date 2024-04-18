window.BENCHMARK_DATA = {
  "lastUpdate": 1713417054046,
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
          "id": "1fa87bec789e297ac0d12b9241a31e172eed014f",
          "message": "Merge pull request #3750 from greymistcube/prepare/4.5.0\n\n🔧 Prepare 4.5.0",
          "timestamp": "2024-04-18T12:46:03+09:00",
          "tree_id": "d051d198797ab21591fcdea2e718cde61ab745b7",
          "url": "https://github.com/planetarium/libplanet/commit/1fa87bec789e297ac0d12b9241a31e172eed014f"
        },
        "date": 1713415818068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1839334.5360824743,
            "unit": "ns",
            "range": "± 222314.34405111225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2927515.3846153845,
            "unit": "ns",
            "range": "± 255012.93732892888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2687800,
            "unit": "ns",
            "range": "± 71507.51009509421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8283320.689655173,
            "unit": "ns",
            "range": "± 241185.003649111"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 181034.2857142857,
            "unit": "ns",
            "range": "± 5892.015677125766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5005213.333333333,
            "unit": "ns",
            "range": "± 22782.10032543302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13327486.666666666,
            "unit": "ns",
            "range": "± 99959.49798841149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33055760,
            "unit": "ns",
            "range": "± 424649.17419307097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66010353.333333336,
            "unit": "ns",
            "range": "± 1084866.3392765203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131651646.66666667,
            "unit": "ns",
            "range": "± 1389534.3335431616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288964.6614583335,
            "unit": "ns",
            "range": "± 7689.057321734516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082949.375,
            "unit": "ns",
            "range": "± 1582.1451372009008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754299.2513020834,
            "unit": "ns",
            "range": "± 701.3422695687415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908224.916294643,
            "unit": "ns",
            "range": "± 2807.3309053608473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612822.05078125,
            "unit": "ns",
            "range": "± 1434.0905377068777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562749.3033854166,
            "unit": "ns",
            "range": "± 885.6677984821168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2563769.4444444445,
            "unit": "ns",
            "range": "± 76465.69284679033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2673087.234042553,
            "unit": "ns",
            "range": "± 96329.81302258285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3524956.603773585,
            "unit": "ns",
            "range": "± 122362.82666636257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3362078.787878788,
            "unit": "ns",
            "range": "± 355994.034939915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8851605.88235294,
            "unit": "ns",
            "range": "± 178520.9434130255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172096.38554216866,
            "unit": "ns",
            "range": "± 9141.80221575503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164264.44444444444,
            "unit": "ns",
            "range": "± 9762.946588627048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142439.62264150943,
            "unit": "ns",
            "range": "± 5919.762846816959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2723933.3333333335,
            "unit": "ns",
            "range": "± 35030.775585122836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2420392.3076923075,
            "unit": "ns",
            "range": "± 33895.955057067935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10367.741935483871,
            "unit": "ns",
            "range": "± 1744.5668012383965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50696.739130434784,
            "unit": "ns",
            "range": "± 3558.0415370749797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43577.19298245614,
            "unit": "ns",
            "range": "± 1892.6566309838186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49319.58762886598,
            "unit": "ns",
            "range": "± 8678.993307301182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2301.0309278350514,
            "unit": "ns",
            "range": "± 293.85896750568145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9284.536082474227,
            "unit": "ns",
            "range": "± 1362.2392874560107"
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
          "id": "da8689a5319160fa420fb426fca8f9afb012a131",
          "message": "Merge pull request #3749 from greymistcube/prepare/4.4.1\n\n🔧 Prepare 4.4.1",
          "timestamp": "2024-04-18T12:45:53+09:00",
          "tree_id": "489eff0480f42ea9f76802245a90e0bab67cdb6c",
          "url": "https://github.com/planetarium/libplanet/commit/da8689a5319160fa420fb426fca8f9afb012a131"
        },
        "date": 1713416027932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1928727.9069767443,
            "unit": "ns",
            "range": "± 63533.22087726042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3055946.875,
            "unit": "ns",
            "range": "± 339818.36323267105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317123.232323232,
            "unit": "ns",
            "range": "± 276746.51550201443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8183783.333333333,
            "unit": "ns",
            "range": "± 182275.33083740118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 182158.69565217392,
            "unit": "ns",
            "range": "± 6439.550573930054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5067133.333333333,
            "unit": "ns",
            "range": "± 19656.17557143907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13192542.857142856,
            "unit": "ns",
            "range": "± 107452.36307159714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32128233.333333332,
            "unit": "ns",
            "range": "± 212645.64980490995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67191878.57142857,
            "unit": "ns",
            "range": "± 227350.05939188693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130107900,
            "unit": "ns",
            "range": "± 815009.0972323122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3278447.421875,
            "unit": "ns",
            "range": "± 5591.488693184744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040421.0546875,
            "unit": "ns",
            "range": "± 2190.636589061618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734940.9912109375,
            "unit": "ns",
            "range": "± 1014.1025983601415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942674.84375,
            "unit": "ns",
            "range": "± 4715.54178574926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606377.9221754808,
            "unit": "ns",
            "range": "± 839.0669198860797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565007.1028645834,
            "unit": "ns",
            "range": "± 1024.3547052947492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2500809.090909091,
            "unit": "ns",
            "range": "± 92524.45262760571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2770192.1052631577,
            "unit": "ns",
            "range": "± 75989.23601433742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3493931.8181818184,
            "unit": "ns",
            "range": "± 154435.47137293886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3387834.090909091,
            "unit": "ns",
            "range": "± 122813.43374589224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8889623.529411765,
            "unit": "ns",
            "range": "± 218194.42964145466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170891.79104477612,
            "unit": "ns",
            "range": "± 7759.981827019711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170019.1489361702,
            "unit": "ns",
            "range": "± 6070.8368557810645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143660,
            "unit": "ns",
            "range": "± 3276.936952318992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2779100,
            "unit": "ns",
            "range": "± 34479.061969341834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2531200,
            "unit": "ns",
            "range": "± 38887.787285984785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9869.89247311828,
            "unit": "ns",
            "range": "± 1379.0186291767936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51564.51612903226,
            "unit": "ns",
            "range": "± 4404.016081232989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43478.57142857143,
            "unit": "ns",
            "range": "± 1592.9012821808888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47435.78947368421,
            "unit": "ns",
            "range": "± 8742.558121533917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2061.2903225806454,
            "unit": "ns",
            "range": "± 329.3710270990546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9197.916666666666,
            "unit": "ns",
            "range": "± 953.3298061522285"
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713416990923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1747955.1020408163,
            "unit": "ns",
            "range": "± 216762.29658573816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2919865.5172413792,
            "unit": "ns",
            "range": "± 208413.74481946052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2637113.3333333335,
            "unit": "ns",
            "range": "± 74280.79871320221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8342706.382978723,
            "unit": "ns",
            "range": "± 217771.9593123038"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 179750,
            "unit": "ns",
            "range": "± 6730.268317675528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5096385.714285715,
            "unit": "ns",
            "range": "± 18967.61844435272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13242753.333333334,
            "unit": "ns",
            "range": "± 79171.53047715597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32462486.666666668,
            "unit": "ns",
            "range": "± 479897.7805840779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67062646.666666664,
            "unit": "ns",
            "range": "± 501216.7179783137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131789493.33333333,
            "unit": "ns",
            "range": "± 898895.6299392103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350487.2005208335,
            "unit": "ns",
            "range": "± 5844.099930262682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083099.8177083333,
            "unit": "ns",
            "range": "± 2691.8179292734108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728564.2159598215,
            "unit": "ns",
            "range": "± 1001.3608986837469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933815.546875,
            "unit": "ns",
            "range": "± 6847.6102464380465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616527.63671875,
            "unit": "ns",
            "range": "± 1773.8640464188695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563294.1536458334,
            "unit": "ns",
            "range": "± 1741.1547828293144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2972607.6923076925,
            "unit": "ns",
            "range": "± 38307.64635462181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2895858.3333333335,
            "unit": "ns",
            "range": "± 69045.9765957291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4180153.846153846,
            "unit": "ns",
            "range": "± 69704.87327995338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3483285.714285714,
            "unit": "ns",
            "range": "± 118936.35225826349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8864356.25,
            "unit": "ns",
            "range": "± 271766.93873967725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174910,
            "unit": "ns",
            "range": "± 8492.488582202544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162438.46153846153,
            "unit": "ns",
            "range": "± 7562.31653454359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143291.30434782608,
            "unit": "ns",
            "range": "± 3510.6219396514425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2724586.6666666665,
            "unit": "ns",
            "range": "± 31182.36375780081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2537771.4285714286,
            "unit": "ns",
            "range": "± 35879.35829482394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10320.833333333334,
            "unit": "ns",
            "range": "± 1264.0716724072477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53550,
            "unit": "ns",
            "range": "± 4677.830349017966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43147.05882352941,
            "unit": "ns",
            "range": "± 850.8214024244627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50033.69565217391,
            "unit": "ns",
            "range": "± 8530.040995146623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2267.6767676767677,
            "unit": "ns",
            "range": "± 406.53545740589595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9713.829787234043,
            "unit": "ns",
            "range": "± 1156.4313910102635"
          }
        ]
      }
    ]
  }
}