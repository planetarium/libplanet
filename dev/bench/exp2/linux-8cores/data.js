window.BENCHMARK_DATA = {
  "lastUpdate": 1756279543948,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "7293ec43c8e30269ccf6a8c37839c3d65ef99236",
          "message": "Paralleize kv set",
          "timestamp": "2025-08-27T16:13:55+09:00",
          "tree_id": "b772c224f94a3cd60abc9dd444b354a2b1089483",
          "url": "https://github.com/planetarium/libplanet/commit/7293ec43c8e30269ccf6a8c37839c3d65ef99236"
        },
        "date": 1756279516765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2605125.842857143,
            "unit": "ns",
            "range": "± 77029.50741339049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2788349.7352941176,
            "unit": "ns",
            "range": "± 57060.319282020995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3282296.727272727,
            "unit": "ns",
            "range": "± 78374.489240035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2806673.75,
            "unit": "ns",
            "range": "± 47872.24934413117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3495519.1666666665,
            "unit": "ns",
            "range": "± 66477.57575303118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1124367.4382022473,
            "unit": "ns",
            "range": "± 73313.5808005204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2134910.5757575757,
            "unit": "ns",
            "range": "± 66887.55560782136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775191.380952381,
            "unit": "ns",
            "range": "± 62779.561206382845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8464328.468085106,
            "unit": "ns",
            "range": "± 326628.1897138284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38089.927083333336,
            "unit": "ns",
            "range": "± 6778.0567301205465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12412293.961538462,
            "unit": "ns",
            "range": "± 192816.13533433666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30225036.64285714,
            "unit": "ns",
            "range": "± 148091.67333464412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75634397.2,
            "unit": "ns",
            "range": "± 545623.4752514384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 151863093.53846154,
            "unit": "ns",
            "range": "± 1363471.5299491722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 303760840.2,
            "unit": "ns",
            "range": "± 1620999.3012581205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125579.63541666667,
            "unit": "ns",
            "range": "± 13408.061433818397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220014.6701030928,
            "unit": "ns",
            "range": "± 16946.774194470396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213079.73,
            "unit": "ns",
            "range": "± 17175.969019378397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3127511.285714286,
            "unit": "ns",
            "range": "± 33471.736824184554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3095991.423076923,
            "unit": "ns",
            "range": "± 44922.51806993448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16359.943181818182,
            "unit": "ns",
            "range": "± 1608.7639815891966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72951.38461538461,
            "unit": "ns",
            "range": "± 7337.545040208885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72266.17708333333,
            "unit": "ns",
            "range": "± 13055.57568364832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89035.62244897959,
            "unit": "ns",
            "range": "± 18472.128171542194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5095.833333333333,
            "unit": "ns",
            "range": "± 1085.2210802331738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15927.722222222223,
            "unit": "ns",
            "range": "± 2118.0001752118087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3888896.890625,
            "unit": "ns",
            "range": "± 4752.462837213666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1262149.974609375,
            "unit": "ns",
            "range": "± 1750.2687669257316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 796716.2256556919,
            "unit": "ns",
            "range": "± 1165.7983482213283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2030754.21640625,
            "unit": "ns",
            "range": "± 2155.9621447856634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635920.7568359375,
            "unit": "ns",
            "range": "± 984.0736118387706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599681.5053710938,
            "unit": "ns",
            "range": "± 504.0917977810221"
          }
        ]
      }
    ]
  }
}