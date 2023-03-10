window.BENCHMARK_DATA = {
  "lastUpdate": 1678418121428,
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
          "id": "817a98f02924626bbd45d526378b982a9c85b128",
          "message": "Merge pull request #2911 from colibrishin/benchmark/fix/0.46-maintenance\n\nci/bench: cherrypick of bench pr update to 0.46-maintenance",
          "timestamp": "2023-03-10T12:04:29+09:00",
          "tree_id": "03862efdee3eb379f92abe122d993e0ea57039ee",
          "url": "https://github.com/planetarium/libplanet/commit/817a98f02924626bbd45d526378b982a9c85b128"
        },
        "date": 1678418103623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97890.15789473684,
            "unit": "ns",
            "range": "± 10459.471889068218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212084.15942028986,
            "unit": "ns",
            "range": "± 10156.801156083122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180923.73684210525,
            "unit": "ns",
            "range": "± 6112.800679319788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3838536.533333333,
            "unit": "ns",
            "range": "± 57838.80544714233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9550284.6875,
            "unit": "ns",
            "range": "± 175572.5193347823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19214.543478260868,
            "unit": "ns",
            "range": "± 2092.7992160091294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52008.04761904762,
            "unit": "ns",
            "range": "± 3078.8302343849587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41277.46153846154,
            "unit": "ns",
            "range": "± 510.19630460320786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93074.56521739131,
            "unit": "ns",
            "range": "± 12779.289040487163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5124.2307692307695,
            "unit": "ns",
            "range": "± 452.476839847401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19809.224719101123,
            "unit": "ns",
            "range": "± 1351.9407241646172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5971140.371875,
            "unit": "ns",
            "range": "± 39996.35679184395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858533.144921875,
            "unit": "ns",
            "range": "± 2676.646364710978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347691.2787760417,
            "unit": "ns",
            "range": "± 6041.515999351812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626860.840104167,
            "unit": "ns",
            "range": "± 5368.05185602651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825154.0358537947,
            "unit": "ns",
            "range": "± 1068.6740740455675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774558.9731119792,
            "unit": "ns",
            "range": "± 1167.0877461523373"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109566.28571428571,
            "unit": "ns",
            "range": "± 1912.9546791274497"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4926680.343290441,
            "unit": "ns",
            "range": "± 235760.5092372272"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5773816.817073171,
            "unit": "ns",
            "range": "± 305920.0684842135"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27071356.125,
            "unit": "ns",
            "range": "± 688052.7764802647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6554632.349206349,
            "unit": "ns",
            "range": "± 298084.20721582853"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31144006.125,
            "unit": "ns",
            "range": "± 597710.2040375838"
          }
        ]
      }
    ]
  }
}