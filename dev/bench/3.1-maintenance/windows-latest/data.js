window.BENCHMARK_DATA = {
  "lastUpdate": 1690509509927,
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
      }
    ]
  }
}