window.BENCHMARK_DATA = {
  "lastUpdate": 1690509146894,
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
      }
    ]
  }
}