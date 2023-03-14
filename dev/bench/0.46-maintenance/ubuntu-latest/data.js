window.BENCHMARK_DATA = {
  "lastUpdate": 1678780888079,
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
      },
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
          "id": "0ce281b8b267050a46c1aefca6c8f04e4e082817",
          "message": "Merge pull request #2927 from greymistcube/refactor/validator\n\n♻️🚀 Updated `Validator` bencoding and release 0.46.3",
          "timestamp": "2023-03-14T16:45:09+09:00",
          "tree_id": "01f6ba45b937da56e7e2ab5e83cb6dc8ec80f2e4",
          "url": "https://github.com/planetarium/libplanet/commit/0ce281b8b267050a46c1aefca6c8f04e4e082817"
        },
        "date": 1678780867310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105584.79545454546,
            "unit": "ns",
            "range": "± 6838.122505919012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243483.2680412371,
            "unit": "ns",
            "range": "± 20303.18778414461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205439.97872340426,
            "unit": "ns",
            "range": "± 19498.058066513542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4427725.28,
            "unit": "ns",
            "range": "± 220966.842972434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10879770.777777778,
            "unit": "ns",
            "range": "± 454763.35006054456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21295.52380952381,
            "unit": "ns",
            "range": "± 1597.5007624953626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60812.30927835051,
            "unit": "ns",
            "range": "± 8780.6403730983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46973.40476190476,
            "unit": "ns",
            "range": "± 3008.061947096072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111151.11458333333,
            "unit": "ns",
            "range": "± 18365.82322333913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6300.446808510638,
            "unit": "ns",
            "range": "± 516.4438288168793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22490.011494252874,
            "unit": "ns",
            "range": "± 2642.271615592163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6997265.140104166,
            "unit": "ns",
            "range": "± 103946.92315431975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2144887.50390625,
            "unit": "ns",
            "range": "± 17311.661411899095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1560236.5528645834,
            "unit": "ns",
            "range": "± 19948.721919315936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2959952.4207589286,
            "unit": "ns",
            "range": "± 31989.518172453492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961960.3838867188,
            "unit": "ns",
            "range": "± 13198.670081290009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886769.7735351563,
            "unit": "ns",
            "range": "± 9888.49977286491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126109.58426966293,
            "unit": "ns",
            "range": "± 9311.289733203388"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5643542.935628255,
            "unit": "ns",
            "range": "± 324160.08449631993"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6730738.081632653,
            "unit": "ns",
            "range": "± 536671.2643924311"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33061370.68627451,
            "unit": "ns",
            "range": "± 1335298.3605606875"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7222634.911392405,
            "unit": "ns",
            "range": "± 374194.7545190115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38884513.13131313,
            "unit": "ns",
            "range": "± 3051313.662308615"
          }
        ]
      }
    ]
  }
}