window.BENCHMARK_DATA = {
  "lastUpdate": 1678673130188,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "209fdb1c17f0cb26789b857f271544b8935dc5e2",
          "message": "Merge pull request #2905 from colibrishin/0.50-maintenance-bench-failing\n\nci/bench: cherrypick of bench pr update to 0.50-maintenance",
          "timestamp": "2023-03-13T10:51:25+09:00",
          "tree_id": "615717a9642490f590a5330c4a347ecae47b95d4",
          "url": "https://github.com/planetarium/libplanet/commit/209fdb1c17f0cb26789b857f271544b8935dc5e2"
        },
        "date": 1678673089913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111132.09278350516,
            "unit": "ns",
            "range": "± 8539.255156435964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93337.62105263158,
            "unit": "ns",
            "range": "± 15003.36091863657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200677.58241758242,
            "unit": "ns",
            "range": "± 22421.994537638922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183669.085106383,
            "unit": "ns",
            "range": "± 13339.247827176374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3433121.3571428573,
            "unit": "ns",
            "range": "± 95362.96508262107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9749165.935483871,
            "unit": "ns",
            "range": "± 616199.6894986519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16659.1,
            "unit": "ns",
            "range": "± 2032.530586582465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50227.57526881721,
            "unit": "ns",
            "range": "± 8745.107705897697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42769.88202247191,
            "unit": "ns",
            "range": "± 3725.465094532792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97548.56382978724,
            "unit": "ns",
            "range": "± 14952.09245241479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5367.885057471264,
            "unit": "ns",
            "range": "± 781.5005308109813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15459.489130434782,
            "unit": "ns",
            "range": "± 1757.3969855202665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4506916.038541666,
            "unit": "ns",
            "range": "± 77832.50696235153"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5544999.108695652,
            "unit": "ns",
            "range": "± 427792.78933140525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25666608.688405797,
            "unit": "ns",
            "range": "± 1227377.4953096285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6647351.074468086,
            "unit": "ns",
            "range": "± 593264.3595878914"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29048274.875,
            "unit": "ns",
            "range": "± 1009989.7897736314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6311526.815104167,
            "unit": "ns",
            "range": "± 85194.99748552345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873899.101171875,
            "unit": "ns",
            "range": "± 17960.326879057364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1253510.38984375,
            "unit": "ns",
            "range": "± 19415.06501476257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2424444.9346354166,
            "unit": "ns",
            "range": "± 32389.021371689974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858919.64609375,
            "unit": "ns",
            "range": "± 11282.040785758176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691391.9158854167,
            "unit": "ns",
            "range": "± 5762.64876483982"
          }
        ]
      }
    ]
  }
}