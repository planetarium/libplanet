window.BENCHMARK_DATA = {
  "lastUpdate": 1691650960647,
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
          "id": "a987187212c0fd2aea272fe3a12bb3c27697fde3",
          "message": "Merge pull request #3336 from greymistcube/release/3.1.0\n\n🚀 Release 3.1.0",
          "timestamp": "2023-07-27T18:11:36+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/planetarium/libplanet/commit/a987187212c0fd2aea272fe3a12bb3c27697fde3"
        },
        "date": 1690509085344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442502.1739130435,
            "unit": "ns",
            "range": "± 106729.48548618252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2712057.407407407,
            "unit": "ns",
            "range": "± 113154.01693209403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1882210,
            "unit": "ns",
            "range": "± 141550.95773735916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5006058.441558441,
            "unit": "ns",
            "range": "± 253222.66223863832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53424.46808510638,
            "unit": "ns",
            "range": "± 4376.94193264729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7931063.157894737,
            "unit": "ns",
            "range": "± 175483.60863791464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20895921.42857143,
            "unit": "ns",
            "range": "± 209912.28636512198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53303933.333333336,
            "unit": "ns",
            "range": "± 284813.2487555076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105286892.85714285,
            "unit": "ns",
            "range": "± 1030347.7609072548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210889846.15384614,
            "unit": "ns",
            "range": "± 2986785.6720939386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5021592.916666667,
            "unit": "ns",
            "range": "± 48569.75082439611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564665.5552455357,
            "unit": "ns",
            "range": "± 6936.927035397215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1208145.0260416667,
            "unit": "ns",
            "range": "± 7379.548809773297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2731299.4270833335,
            "unit": "ns",
            "range": "± 20411.65048297571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856315.6459263393,
            "unit": "ns",
            "range": "± 4511.868432821725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783613.0580357143,
            "unit": "ns",
            "range": "± 2210.9539037565573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3414144.827586207,
            "unit": "ns",
            "range": "± 99058.06589429863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3729876.923076923,
            "unit": "ns",
            "range": "± 54016.35792125311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4498666.666666667,
            "unit": "ns",
            "range": "± 64740.8975032306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4092196.7741935486,
            "unit": "ns",
            "range": "± 110311.7234140626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6462232.142857143,
            "unit": "ns",
            "range": "± 178365.82062045537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298312.85714285716,
            "unit": "ns",
            "range": "± 14391.250576920054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268048.14814814815,
            "unit": "ns",
            "range": "± 11300.872244524842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258974.72527472526,
            "unit": "ns",
            "range": "± 14509.939837585616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4301673.333333333,
            "unit": "ns",
            "range": "± 56427.772628463055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3956370.8333333335,
            "unit": "ns",
            "range": "± 102643.7040537999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27260.82474226804,
            "unit": "ns",
            "range": "± 2629.819254761585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103854.54545454546,
            "unit": "ns",
            "range": "± 8773.292876880667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87988.65979381443,
            "unit": "ns",
            "range": "± 7579.067613728674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107713.40206185567,
            "unit": "ns",
            "range": "± 15266.989367490864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6613.265306122449,
            "unit": "ns",
            "range": "± 1216.267550183465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24816.842105263157,
            "unit": "ns",
            "range": "± 3716.457150486169"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cfd938b2104134ff6813217bc9fb3a0c4a08b99",
          "message": "Merge pull request #3340 from greymistcube/prepare/3.1.1\n\n🔧 Prepare 3.1.1",
          "timestamp": "2023-07-28T10:37:50+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/planetarium/libplanet/commit/1cfd938b2104134ff6813217bc9fb3a0c4a08b99"
        },
        "date": 1690509436934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676839.5833333333,
            "unit": "ns",
            "range": "± 221346.52255738195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3164044.4444444445,
            "unit": "ns",
            "range": "± 302186.6801960175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2234839.361702128,
            "unit": "ns",
            "range": "± 270050.9530647895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6275683.673469388,
            "unit": "ns",
            "range": "± 516669.37516738015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60425.77319587629,
            "unit": "ns",
            "range": "± 12130.387792222089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8883614.141414141,
            "unit": "ns",
            "range": "± 605149.5998224958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24939174.69879518,
            "unit": "ns",
            "range": "± 1280775.3694676398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64667065.90909091,
            "unit": "ns",
            "range": "± 2374081.1098723314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128600078.37837838,
            "unit": "ns",
            "range": "± 4260439.263877163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261680373.33333334,
            "unit": "ns",
            "range": "± 3548866.54751841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5792874.791666667,
            "unit": "ns",
            "range": "± 84886.96333341513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959280.4408482143,
            "unit": "ns",
            "range": "± 14634.753424276076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1434958.1510416667,
            "unit": "ns",
            "range": "± 25849.332100330783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3290222.541360294,
            "unit": "ns",
            "range": "± 66854.88451055317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026171.7838541666,
            "unit": "ns",
            "range": "± 13977.321946764605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954947.2591145834,
            "unit": "ns",
            "range": "± 12222.61905778747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3831093.75,
            "unit": "ns",
            "range": "± 301430.64797640214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4042094.845360825,
            "unit": "ns",
            "range": "± 323236.8344093634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5387374.736842105,
            "unit": "ns",
            "range": "± 340456.23112586734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4587851.063829787,
            "unit": "ns",
            "range": "± 348695.92562466685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8092384.615384615,
            "unit": "ns",
            "range": "± 417361.7232951868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341588.2978723404,
            "unit": "ns",
            "range": "± 36599.10350974146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311247.9166666667,
            "unit": "ns",
            "range": "± 46552.06701084772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305603.22580645164,
            "unit": "ns",
            "range": "± 28094.6979819762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5844466.326530612,
            "unit": "ns",
            "range": "± 429649.4116086333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4756228.125,
            "unit": "ns",
            "range": "± 335129.0088444731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21015.853658536584,
            "unit": "ns",
            "range": "± 3713.7206232037256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94460.67415730337,
            "unit": "ns",
            "range": "± 13271.094854278466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115455.10204081633,
            "unit": "ns",
            "range": "± 24498.639231930505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129209.375,
            "unit": "ns",
            "range": "± 22233.81293210861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7490.10989010989,
            "unit": "ns",
            "range": "± 1116.6472580457535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19505.95238095238,
            "unit": "ns",
            "range": "± 4038.6491595395705"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7d8fe2b4efcbda008fa422ca3ad0ed14890a669",
          "message": "Merge pull request #3360 from moreal/cherry-pick-network-bug\n\nCherry-pick #3353 to 3.1.1 version",
          "timestamp": "2023-08-09T19:58:55+09:00",
          "tree_id": "e27048bd25a04e78434e3491b575a7591c39682b",
          "url": "https://github.com/planetarium/libplanet/commit/e7d8fe2b4efcbda008fa422ca3ad0ed14890a669"
        },
        "date": 1691579827865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503397.93814433,
            "unit": "ns",
            "range": "± 120534.7330469706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2799694.3396226414,
            "unit": "ns",
            "range": "± 116108.85544822937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1924022.448979592,
            "unit": "ns",
            "range": "± 139391.38958647294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5140381.0344827585,
            "unit": "ns",
            "range": "± 224758.2088401141"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55838.29787234042,
            "unit": "ns",
            "range": "± 5834.364389057003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7856680,
            "unit": "ns",
            "range": "± 127857.02505980208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21413600,
            "unit": "ns",
            "range": "± 239851.64645607982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54639226.666666664,
            "unit": "ns",
            "range": "± 705877.4898427252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108962957.14285715,
            "unit": "ns",
            "range": "± 795086.9606181798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219131306.66666666,
            "unit": "ns",
            "range": "± 1716544.0652105391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4979136.71875,
            "unit": "ns",
            "range": "± 26773.41072501944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578719.3619791667,
            "unit": "ns",
            "range": "± 5206.030508966774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219851.953125,
            "unit": "ns",
            "range": "± 3904.7935398605828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2728015.4947916665,
            "unit": "ns",
            "range": "± 13013.420772139616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846058.1380208334,
            "unit": "ns",
            "range": "± 3505.253172552364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798944.9739583334,
            "unit": "ns",
            "range": "± 4389.68783701373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3598980,
            "unit": "ns",
            "range": "± 50403.644992911264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3792205,
            "unit": "ns",
            "range": "± 72201.21354133949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493415.384615385,
            "unit": "ns",
            "range": "± 122633.9747127449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4152968.9655172415,
            "unit": "ns",
            "range": "± 113418.13946457555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6513685.185185186,
            "unit": "ns",
            "range": "± 137071.9623008398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300755.8823529412,
            "unit": "ns",
            "range": "± 14381.729519983075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289575,
            "unit": "ns",
            "range": "± 10269.715248343124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272490.4761904762,
            "unit": "ns",
            "range": "± 14559.058117353832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4383842.857142857,
            "unit": "ns",
            "range": "± 61986.34730928459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3894861.5384615385,
            "unit": "ns",
            "range": "± 61906.92662459157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29242.268041237112,
            "unit": "ns",
            "range": "± 3001.2440146943786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112797.93814432989,
            "unit": "ns",
            "range": "± 12029.061851940101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91672.72727272728,
            "unit": "ns",
            "range": "± 10037.448433616677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114424.74226804124,
            "unit": "ns",
            "range": "± 16552.555385094845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7596.907216494846,
            "unit": "ns",
            "range": "± 1917.4882446536353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26046.39175257732,
            "unit": "ns",
            "range": "± 2952.0847808395692"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69bac89710a373b9bf4405b81353d1f99b79f3eb",
          "message": "Merge pull request #3363 from riemannulus/3.1-maintenance\n\n🚀  Release 3.1.1",
          "timestamp": "2023-08-09T20:17:25+09:00",
          "tree_id": "4275059f286345ce564096eb8fa9e68fb3c9d947",
          "url": "https://github.com/planetarium/libplanet/commit/69bac89710a373b9bf4405b81353d1f99b79f3eb"
        },
        "date": 1691580869799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404018,
            "unit": "ns",
            "range": "± 121387.72122684594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2554487.341772152,
            "unit": "ns",
            "range": "± 132241.60228981107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1814666.6666666667,
            "unit": "ns",
            "range": "± 133775.3676222052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4983030.303030303,
            "unit": "ns",
            "range": "± 308400.37701297307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46528.57142857143,
            "unit": "ns",
            "range": "± 2765.03107132575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7341480,
            "unit": "ns",
            "range": "± 136348.39933053852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20111147.36842105,
            "unit": "ns",
            "range": "± 438666.4151068441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50224396,
            "unit": "ns",
            "range": "± 1314908.4399303247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99194547.05882353,
            "unit": "ns",
            "range": "± 2036899.075530513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196553420,
            "unit": "ns",
            "range": "± 3488289.6329208184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4878607.087053572,
            "unit": "ns",
            "range": "± 20942.174083313654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1557317.421875,
            "unit": "ns",
            "range": "± 11490.581526970278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184682.8385416667,
            "unit": "ns",
            "range": "± 5178.41174829903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650029.921875,
            "unit": "ns",
            "range": "± 8640.53887210651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860826.8179086539,
            "unit": "ns",
            "range": "± 2151.273173957317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766288.8216145834,
            "unit": "ns",
            "range": "± 2368.1435836129754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324902.5,
            "unit": "ns",
            "range": "± 118182.53914048517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3499695.4545454546,
            "unit": "ns",
            "range": "± 130475.65745441054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4226787.179487179,
            "unit": "ns",
            "range": "± 147795.0290800835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3665206.18556701,
            "unit": "ns",
            "range": "± 211372.21504888847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6218050,
            "unit": "ns",
            "range": "± 245089.79943529685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264893.75,
            "unit": "ns",
            "range": "± 9795.817740891567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246000,
            "unit": "ns",
            "range": "± 8698.128298515487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215964.44444444444,
            "unit": "ns",
            "range": "± 8140.698974779735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4078930,
            "unit": "ns",
            "range": "± 93644.10847795807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3760528.5714285714,
            "unit": "ns",
            "range": "± 55922.68603336944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18913.684210526317,
            "unit": "ns",
            "range": "± 2247.912058471234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85220,
            "unit": "ns",
            "range": "± 6077.208905830569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71710,
            "unit": "ns",
            "range": "± 2158.4397302138223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98852.57731958762,
            "unit": "ns",
            "range": "± 18099.068189547685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4990.721649484536,
            "unit": "ns",
            "range": "± 920.1542527192115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19204.21052631579,
            "unit": "ns",
            "range": "± 1900.6110881499817"
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
          "id": "9d28c1e2dc3a793fefa41a70432581312c7ca839",
          "message": "Merge pull request #3366 from greymistcube/prepare/3.1.2\n\n🔧 Prepare 3.1.2",
          "timestamp": "2023-08-10T15:03:54+09:00",
          "tree_id": "d30ecd7404f1df3761d2e07603c5ace4f72df8b9",
          "url": "https://github.com/planetarium/libplanet/commit/9d28c1e2dc3a793fefa41a70432581312c7ca839"
        },
        "date": 1691648705299,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1765108.5106382978,
            "unit": "ns",
            "range": "± 212149.36899623313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3458897.9591836734,
            "unit": "ns",
            "range": "± 350808.35311370343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2302601.0204081633,
            "unit": "ns",
            "range": "± 297605.0168955864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6259191.397849462,
            "unit": "ns",
            "range": "± 383242.392549334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66404.1237113402,
            "unit": "ns",
            "range": "± 18414.079291433573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9688533.673469387,
            "unit": "ns",
            "range": "± 689116.877693798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25554914.75409836,
            "unit": "ns",
            "range": "± 1139963.837998976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64030180.39215686,
            "unit": "ns",
            "range": "± 2603842.7784349504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127342764.1025641,
            "unit": "ns",
            "range": "± 4416504.739847849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257600778.78787878,
            "unit": "ns",
            "range": "± 8136263.682572518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054759.739583333,
            "unit": "ns",
            "range": "± 79394.47342340335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1951088.7746710526,
            "unit": "ns",
            "range": "± 43279.155419563554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1462937.3958333333,
            "unit": "ns",
            "range": "± 25658.784995824622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3239589.7916666665,
            "unit": "ns",
            "range": "± 38339.94145640462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1067180.9988839286,
            "unit": "ns",
            "range": "± 34966.74683879257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 986528.2578125,
            "unit": "ns",
            "range": "± 25276.5891364923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3810913.402061856,
            "unit": "ns",
            "range": "± 403071.8305062764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3956394.7916666665,
            "unit": "ns",
            "range": "± 402079.0863210846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5357633.673469388,
            "unit": "ns",
            "range": "± 389463.74735511944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4627429.591836735,
            "unit": "ns",
            "range": "± 381282.23851099523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8152929.166666667,
            "unit": "ns",
            "range": "± 525428.4397000357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323185.8695652174,
            "unit": "ns",
            "range": "± 36630.11305950379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319726.80412371136,
            "unit": "ns",
            "range": "± 49218.09354686868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285859.375,
            "unit": "ns",
            "range": "± 36658.9935202953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5032660.215053763,
            "unit": "ns",
            "range": "± 380052.17037178075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4570424.742268041,
            "unit": "ns",
            "range": "± 411002.7970380615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27852.52525252525,
            "unit": "ns",
            "range": "± 10723.932261529166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104061.29032258065,
            "unit": "ns",
            "range": "± 16676.91734793976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131350.50505050505,
            "unit": "ns",
            "range": "± 24026.33068258347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145101.04166666666,
            "unit": "ns",
            "range": "± 26916.7820661803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8548.936170212766,
            "unit": "ns",
            "range": "± 1146.5464441400188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28962,
            "unit": "ns",
            "range": "± 10399.230546516217"
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
          "id": "d3ebc7aea8d3bd73c422cee6bd4bb8f0def50c24",
          "message": "Merge pull request #3367 from greymistcube/backport/bencodex-bump\n\n🔀 ⬆️ Backport Bencodex bump to 0.14.0",
          "timestamp": "2023-08-10T15:18:00+09:00",
          "tree_id": "2fd4fb29c11262bfa240ed8ebc6a274ff8869231",
          "url": "https://github.com/planetarium/libplanet/commit/d3ebc7aea8d3bd73c422cee6bd4bb8f0def50c24"
        },
        "date": 1691649300971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1256836.5384615385,
            "unit": "ns",
            "range": "± 50617.73318979231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2557660.6741573033,
            "unit": "ns",
            "range": "± 141225.90270554088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1740158.5858585858,
            "unit": "ns",
            "range": "± 142962.86017639874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4605965.59139785,
            "unit": "ns",
            "range": "± 260583.0458859115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47088.76404494382,
            "unit": "ns",
            "range": "± 2467.9048070933295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7309703.333333333,
            "unit": "ns",
            "range": "± 113448.78559235859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20434671.42857143,
            "unit": "ns",
            "range": "± 243118.81371547037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52033800,
            "unit": "ns",
            "range": "± 963151.016196318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102641400,
            "unit": "ns",
            "range": "± 2001893.3358198684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204390406.25,
            "unit": "ns",
            "range": "± 3815792.440803308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4559667.8125,
            "unit": "ns",
            "range": "± 13305.317777726868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1445100.9244791667,
            "unit": "ns",
            "range": "± 7477.633316691306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1064620.3385416667,
            "unit": "ns",
            "range": "± 2849.0540503655825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685176.171875,
            "unit": "ns",
            "range": "± 4905.364257764368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833261.85546875,
            "unit": "ns",
            "range": "± 3579.8319663901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782974.6614583334,
            "unit": "ns",
            "range": "± 2720.376482458114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212333.3333333335,
            "unit": "ns",
            "range": "± 125717.34647881238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417448.9795918367,
            "unit": "ns",
            "range": "± 135802.06202786614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4197777.777777778,
            "unit": "ns",
            "range": "± 137676.04026660582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3746125.8620689656,
            "unit": "ns",
            "range": "± 162213.1287657711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6166450.9433962265,
            "unit": "ns",
            "range": "± 256735.8337209681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252690.84507042254,
            "unit": "ns",
            "range": "± 9771.78997296063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244183.33333333334,
            "unit": "ns",
            "range": "± 7285.416861825733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214810.86956521738,
            "unit": "ns",
            "range": "± 12108.288474635778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4092262.5,
            "unit": "ns",
            "range": "± 105049.34580637723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3781171.4285714286,
            "unit": "ns",
            "range": "± 86395.66043996158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19850.537634408603,
            "unit": "ns",
            "range": "± 1693.3773595157195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85546.31578947368,
            "unit": "ns",
            "range": "± 7255.604004745863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69872.22222222222,
            "unit": "ns",
            "range": "± 2267.107800211048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87241.41414141415,
            "unit": "ns",
            "range": "± 14161.495727680183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5360.63829787234,
            "unit": "ns",
            "range": "± 826.0826177936003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20043.75,
            "unit": "ns",
            "range": "± 2021.5060826288066"
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
          "id": "419d7a510c09c90cfede35fc7973c0af5c10015d",
          "message": "Merge pull request #3369 from greymistcube/release/3.1.2\n\n🚀 Release 3.1.2",
          "timestamp": "2023-08-10T15:46:14+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/planetarium/libplanet/commit/419d7a510c09c90cfede35fc7973c0af5c10015d"
        },
        "date": 1691650896908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1330890.9090909092,
            "unit": "ns",
            "range": "± 111955.83867968316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2416029.411764706,
            "unit": "ns",
            "range": "± 97299.85466405927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703139,
            "unit": "ns",
            "range": "± 137006.11568964226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4359514.814814814,
            "unit": "ns",
            "range": "± 174345.7694455187"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43165.85365853659,
            "unit": "ns",
            "range": "± 2289.440036782682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6989593.333333333,
            "unit": "ns",
            "range": "± 87335.35911863505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18292085.714285713,
            "unit": "ns",
            "range": "± 88482.50463438309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46274640,
            "unit": "ns",
            "range": "± 266231.2845199505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92621200,
            "unit": "ns",
            "range": "± 473185.72312721837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183356853.33333334,
            "unit": "ns",
            "range": "± 1008449.9505015936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4290571.549479167,
            "unit": "ns",
            "range": "± 4623.11408755599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1383169.1341145833,
            "unit": "ns",
            "range": "± 1592.4935411743036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 989234.7786458334,
            "unit": "ns",
            "range": "± 1182.1899122395512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547501.6276041665,
            "unit": "ns",
            "range": "± 1668.8150615333443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806725.3580729166,
            "unit": "ns",
            "range": "± 881.5516269053417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726498.0208333334,
            "unit": "ns",
            "range": "± 861.1797712623896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2937366.6666666665,
            "unit": "ns",
            "range": "± 50301.514698390354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3039848.484848485,
            "unit": "ns",
            "range": "± 83491.00296293951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3912600,
            "unit": "ns",
            "range": "± 102162.51758839932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3406985,
            "unit": "ns",
            "range": "± 120610.61004907594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5645013.793103448,
            "unit": "ns",
            "range": "± 139478.97364359244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239521.73913043478,
            "unit": "ns",
            "range": "± 7556.973616570716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234009.375,
            "unit": "ns",
            "range": "± 7160.841515469911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206290.4255319149,
            "unit": "ns",
            "range": "± 11747.166843508845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3742593.3333333335,
            "unit": "ns",
            "range": "± 43447.512943232796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3488292.8571428573,
            "unit": "ns",
            "range": "± 31053.83574191301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18944.329896907217,
            "unit": "ns",
            "range": "± 1710.1394358456168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78315.85365853658,
            "unit": "ns",
            "range": "± 4155.510086269219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64685.454545454544,
            "unit": "ns",
            "range": "± 2760.4628021683034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79617.17171717172,
            "unit": "ns",
            "range": "± 10074.74150581482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4147.959183673469,
            "unit": "ns",
            "range": "± 650.0165885015259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16932.105263157893,
            "unit": "ns",
            "range": "± 1756.9908358646699"
          }
        ]
      }
    ]
  }
}