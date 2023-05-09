window.BENCHMARK_DATA = {
  "lastUpdate": 1683611949786,
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
          "id": "33fadb3ef33986e09fc384dc3d85cf603b338e25",
          "message": "Merge pull request #3141 from greymistcube/release/1.1.0\n\n🚀 Release 1.1.0",
          "timestamp": "2023-05-09T14:35:05+09:00",
          "tree_id": "b784bed2b52d9cdfbb1a2fe74471a840c90f84bd",
          "url": "https://github.com/planetarium/libplanet/commit/33fadb3ef33986e09fc384dc3d85cf603b338e25"
        },
        "date": 1683611909060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1132687,
            "unit": "ns",
            "range": "± 99491.99719605898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2063751.0204081633,
            "unit": "ns",
            "range": "± 77858.27167158975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746696.9387755103,
            "unit": "ns",
            "range": "± 112363.67795935177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4594279.120879121,
            "unit": "ns",
            "range": "± 255238.91531769183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33885.294117647056,
            "unit": "ns",
            "range": "± 668.8994472925174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7170138.095238095,
            "unit": "ns",
            "range": "± 165036.12173154842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17499200,
            "unit": "ns",
            "range": "± 280758.1750495306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44489786.666666664,
            "unit": "ns",
            "range": "± 276679.6648696484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87535226.66666667,
            "unit": "ns",
            "range": "± 761415.7804161053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179126733.33333334,
            "unit": "ns",
            "range": "± 666516.4799877331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4898001.953125,
            "unit": "ns",
            "range": "± 8651.125045758747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1489354.4010416667,
            "unit": "ns",
            "range": "± 13055.633335617977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1027492.9557291666,
            "unit": "ns",
            "range": "± 5714.522110154604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2511581.2239583335,
            "unit": "ns",
            "range": "± 6772.715425516271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831540.5423677885,
            "unit": "ns",
            "range": "± 4924.261173567458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758627.5716145834,
            "unit": "ns",
            "range": "± 2552.004472617014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2818185.8974358975,
            "unit": "ns",
            "range": "± 91232.77194880624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2931066.6666666665,
            "unit": "ns",
            "range": "± 68761.21241901813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3690244.4444444445,
            "unit": "ns",
            "range": "± 76887.13058550959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3620214.285714286,
            "unit": "ns",
            "range": "± 56369.61616308582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5815176.470588235,
            "unit": "ns",
            "range": "± 109331.82021609586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201861.01694915254,
            "unit": "ns",
            "range": "± 8641.360384384581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189335.48387096773,
            "unit": "ns",
            "range": "± 8621.548428386533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164743.33333333334,
            "unit": "ns",
            "range": "± 4579.540959779577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3485614.285714286,
            "unit": "ns",
            "range": "± 36565.63870720617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3187326.6666666665,
            "unit": "ns",
            "range": "± 57406.61319129737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8676.344086021505,
            "unit": "ns",
            "range": "± 1332.731572949068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51116.09195402299,
            "unit": "ns",
            "range": "± 3306.191287366089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41126.19047619047,
            "unit": "ns",
            "range": "± 1376.9991274435345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59802.17391304348,
            "unit": "ns",
            "range": "± 7897.363285965816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2545.918367346939,
            "unit": "ns",
            "range": "± 670.1543701755203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8805.263157894737,
            "unit": "ns",
            "range": "± 1304.930781652734"
          }
        ]
      }
    ]
  }
}