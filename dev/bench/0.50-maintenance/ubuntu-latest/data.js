window.BENCHMARK_DATA = {
  "lastUpdate": 1678673339839,
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
        "date": 1678673317712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125993.8947368421,
            "unit": "ns",
            "range": "± 26726.004196834725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252969.9239130435,
            "unit": "ns",
            "range": "± 29252.479521930447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232572.48936170212,
            "unit": "ns",
            "range": "± 30304.47445785114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5105278.357142857,
            "unit": "ns",
            "range": "± 90123.30037028086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13218678.875,
            "unit": "ns",
            "range": "± 566122.1237575724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19565.567901234568,
            "unit": "ns",
            "range": "± 2610.276278185279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65557.41935483871,
            "unit": "ns",
            "range": "± 11920.390741993117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58028.21276595745,
            "unit": "ns",
            "range": "± 10143.104680342918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149216.92708333334,
            "unit": "ns",
            "range": "± 38386.17666467279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6730.077777777778,
            "unit": "ns",
            "range": "± 1138.8422391042754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22958.417582417584,
            "unit": "ns",
            "range": "± 6775.305215045353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7585979.464488637,
            "unit": "ns",
            "range": "± 185722.8839967594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2423286.6681985296,
            "unit": "ns",
            "range": "± 46865.79477317825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1750736.821116728,
            "unit": "ns",
            "range": "± 27759.495403781806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3298584.657470703,
            "unit": "ns",
            "range": "± 64197.373303542176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1117594.0476740056,
            "unit": "ns",
            "range": "± 26347.607695654337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1013331.9194010417,
            "unit": "ns",
            "range": "± 18080.47935302183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146183.46739130435,
            "unit": "ns",
            "range": "± 20926.797200356745"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6670753.716210937,
            "unit": "ns",
            "range": "± 232650.50763355428"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7617218.417582418,
            "unit": "ns",
            "range": "± 425443.5972771653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36334667.755555555,
            "unit": "ns",
            "range": "± 1355185.022432733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8173541.28125,
            "unit": "ns",
            "range": "± 521356.3247422744"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 43448679.989247315,
            "unit": "ns",
            "range": "± 2511421.4006118756"
          }
        ]
      }
    ]
  }
}