window.BENCHMARK_DATA = {
  "lastUpdate": 1713347170058,
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346928493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1883067.0212765958,
            "unit": "ns",
            "range": "± 202309.94128210665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3060242.222222222,
            "unit": "ns",
            "range": "± 300368.0278089493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586825.2525252528,
            "unit": "ns",
            "range": "± 332517.0756221291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8619968.181818182,
            "unit": "ns",
            "range": "± 279076.16679149785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 206949,
            "unit": "ns",
            "range": "± 23522.005579130502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5183176.923076923,
            "unit": "ns",
            "range": "± 44564.24489517267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13847720,
            "unit": "ns",
            "range": "± 72379.86302438387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33526100,
            "unit": "ns",
            "range": "± 476339.14238851774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71800853.33333333,
            "unit": "ns",
            "range": "± 893253.9071656315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137911590,
            "unit": "ns",
            "range": "± 1622719.7789953928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3325984.8493303573,
            "unit": "ns",
            "range": "± 11736.011513987432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078685.5338541667,
            "unit": "ns",
            "range": "± 5958.086633707688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737336.3151041666,
            "unit": "ns",
            "range": "± 2424.8451011711795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922435.0390625,
            "unit": "ns",
            "range": "± 9432.81667226813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602286.4908854166,
            "unit": "ns",
            "range": "± 1617.6721167327212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561483.6588541666,
            "unit": "ns",
            "range": "± 2246.646855625281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2705478.378378378,
            "unit": "ns",
            "range": "± 78856.47347179816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3297893.3333333335,
            "unit": "ns",
            "range": "± 54729.770779017614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4399473.333333333,
            "unit": "ns",
            "range": "± 69881.08743395728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3442548.484848485,
            "unit": "ns",
            "range": "± 252446.08329734628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9047865.625,
            "unit": "ns",
            "range": "± 252971.06376584375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184440.35087719298,
            "unit": "ns",
            "range": "± 7895.112856542576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172558.92857142858,
            "unit": "ns",
            "range": "± 7180.979340292958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143818.29268292684,
            "unit": "ns",
            "range": "± 5105.165963237153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815207.1428571427,
            "unit": "ns",
            "range": "± 30662.667461005018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555943.75,
            "unit": "ns",
            "range": "± 46883.50056256465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10772.727272727272,
            "unit": "ns",
            "range": "± 1169.018379129217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55548.45360824742,
            "unit": "ns",
            "range": "± 5691.863955866849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46354.117647058825,
            "unit": "ns",
            "range": "± 2508.4406530360493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64135.051546391755,
            "unit": "ns",
            "range": "± 15475.081052810849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2858.695652173913,
            "unit": "ns",
            "range": "± 585.2870384209153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11901.08695652174,
            "unit": "ns",
            "range": "± 2018.1317965879796"
          }
        ]
      }
    ]
  }
}