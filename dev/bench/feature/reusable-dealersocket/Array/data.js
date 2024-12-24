window.BENCHMARK_DATA = {
  "lastUpdate": 1735032883906,
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
        "date": 1735032608413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10535739.916666666,
            "unit": "ns",
            "range": "± 79349.58352581125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26332432.07142857,
            "unit": "ns",
            "range": "± 189308.43738174374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67228494.21428572,
            "unit": "ns",
            "range": "± 129858.1162056843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135182050.85714287,
            "unit": "ns",
            "range": "± 175185.60768240909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269603947.6,
            "unit": "ns",
            "range": "± 469806.0138743893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13067.692307692309,
            "unit": "ns",
            "range": "± 186.03511524054835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54375.01282051282,
            "unit": "ns",
            "range": "± 2690.6441402466976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103397.55102040817,
            "unit": "ns",
            "range": "± 3479.9458093315698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92933.15909090909,
            "unit": "ns",
            "range": "± 3272.226110507574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2843698.2045454546,
            "unit": "ns",
            "range": "± 156264.9541774982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2714883.0108695654,
            "unit": "ns",
            "range": "± 152392.4339348326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5242.655913978495,
            "unit": "ns",
            "range": "± 770.8848881335579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26740.96629213483,
            "unit": "ns",
            "range": "± 1824.235976122097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23885.489583333332,
            "unit": "ns",
            "range": "± 2021.6443749674966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30090.197916666668,
            "unit": "ns",
            "range": "± 5907.562098690994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1278.378947368421,
            "unit": "ns",
            "range": "± 213.2819619582315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5010.170454545455,
            "unit": "ns",
            "range": "± 513.1324406483847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679417.0268817204,
            "unit": "ns",
            "range": "± 47047.97926552615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1264782.358974359,
            "unit": "ns",
            "range": "± 40827.346403378106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1025426.1461538462,
            "unit": "ns",
            "range": "± 47099.24651382134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8797667.01,
            "unit": "ns",
            "range": "± 1379194.552108208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124058.5517241377,
            "unit": "ns",
            "range": "± 92660.2284086484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273288.06097561,
            "unit": "ns",
            "range": "± 81738.19808909686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2531140.214285714,
            "unit": "ns",
            "range": "± 37627.76303819085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263461.846153846,
            "unit": "ns",
            "range": "± 18588.52262305136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2734084.9411764704,
            "unit": "ns",
            "range": "± 70530.89491070935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3016871.233642578,
            "unit": "ns",
            "range": "± 55145.48126974788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921075.4805385044,
            "unit": "ns",
            "range": "± 4556.268365149505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614782.7260416667,
            "unit": "ns",
            "range": "± 5081.4541084072425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1624797.3951322115,
            "unit": "ns",
            "range": "± 8523.735312315595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462881.5388671875,
            "unit": "ns",
            "range": "± 1126.282097055333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419041.3208658854,
            "unit": "ns",
            "range": "± 906.8548059245628"
          }
        ]
      }
    ]
  }
}