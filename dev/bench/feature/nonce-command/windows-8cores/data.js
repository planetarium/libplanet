window.BENCHMARK_DATA = {
  "lastUpdate": 1739433592409,
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
          "id": "7095eb601833273e1c833fd374202908a7294020",
          "message": "docs: update CHANGES.md",
          "timestamp": "2025-02-13T16:45:27+09:00",
          "tree_id": "2d09e898a704c2bf5e1b2d4bac3330249e705cec",
          "url": "https://github.com/planetarium/libplanet/commit/7095eb601833273e1c833fd374202908a7294020"
        },
        "date": 1739433350144,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948411.8556701031,
            "unit": "ns",
            "range": "± 84766.21949428882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1706369.512195122,
            "unit": "ns",
            "range": "± 60138.54928210439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1438272.448979592,
            "unit": "ns",
            "range": "± 93143.73747630094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6500396.153846154,
            "unit": "ns",
            "range": "± 176129.13780693806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33181.818181818184,
            "unit": "ns",
            "range": "± 3702.188090910884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9904413.333333334,
            "unit": "ns",
            "range": "± 130791.27246258044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23966326.666666668,
            "unit": "ns",
            "range": "± 158247.69674093052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59709333.333333336,
            "unit": "ns",
            "range": "± 1034116.9930129256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121020805,
            "unit": "ns",
            "range": "± 2682326.0953047136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237275100,
            "unit": "ns",
            "range": "± 1565182.4526233356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3278750.1822916665,
            "unit": "ns",
            "range": "± 5188.7810440606045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097507.993861607,
            "unit": "ns",
            "range": "± 1538.2873379364266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720884.3359375,
            "unit": "ns",
            "range": "± 2196.824454036341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928125.6119791667,
            "unit": "ns",
            "range": "± 7688.763520921224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607592.3697916666,
            "unit": "ns",
            "range": "± 786.6582094081189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574359.033203125,
            "unit": "ns",
            "range": "± 1060.932851132737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2150625,
            "unit": "ns",
            "range": "± 60862.08629670114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316728.5714285714,
            "unit": "ns",
            "range": "± 64701.290027455645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2721421.052631579,
            "unit": "ns",
            "range": "± 57257.91142761523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2280823.529411765,
            "unit": "ns",
            "range": "± 46738.04030727761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2996912.5,
            "unit": "ns",
            "range": "± 58784.67912645267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87002.94117647059,
            "unit": "ns",
            "range": "± 4157.100402646317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160271.73913043478,
            "unit": "ns",
            "range": "± 5297.826096868131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147016.66666666666,
            "unit": "ns",
            "range": "± 2078.825425935317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2540873.3333333335,
            "unit": "ns",
            "range": "± 33618.181022150726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2391140,
            "unit": "ns",
            "range": "± 31837.933350015042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9281.6091954023,
            "unit": "ns",
            "range": "± 752.4423389222814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49760.67415730337,
            "unit": "ns",
            "range": "± 3667.2264097471934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42997.619047619046,
            "unit": "ns",
            "range": "± 1360.1449161023509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47761.22448979592,
            "unit": "ns",
            "range": "± 9824.193077255142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2078.494623655914,
            "unit": "ns",
            "range": "± 309.2239452894066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8966.292134831461,
            "unit": "ns",
            "range": "± 816.9989179119237"
          }
        ]
      }
    ]
  }
}