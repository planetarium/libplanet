window.BENCHMARK_DATA = {
  "lastUpdate": 1689753618879,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3057b13bde32b53348fce9975f6d496c22c86c20",
          "message": "Merge pull request #3316 from OnedgeLee/release/2.6.0\n\n🚀 Release 3.0.0",
          "timestamp": "2023-07-19T16:32:06+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/planetarium/libplanet/commit/3057b13bde32b53348fce9975f6d496c22c86c20"
        },
        "date": 1689753539379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615808.3333333333,
            "unit": "ns",
            "range": "± 137823.596380657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3283615.3846153845,
            "unit": "ns",
            "range": "± 301617.00840748975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336561.4583333335,
            "unit": "ns",
            "range": "± 220776.97599723222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6344151.0869565215,
            "unit": "ns",
            "range": "± 414398.1107276307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63768.42105263158,
            "unit": "ns",
            "range": "± 11323.091292424224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9391988.659793815,
            "unit": "ns",
            "range": "± 1169750.8727713039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23523633.333333332,
            "unit": "ns",
            "range": "± 1078193.167054898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61563971.428571425,
            "unit": "ns",
            "range": "± 1408539.039268297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123962536.36363636,
            "unit": "ns",
            "range": "± 2672830.270482059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239425277.7777778,
            "unit": "ns",
            "range": "± 10933772.338839084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5726269.03492647,
            "unit": "ns",
            "range": "± 308730.7737395401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888205.7164634147,
            "unit": "ns",
            "range": "± 67189.7623637861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381916.6276041667,
            "unit": "ns",
            "range": "± 18555.360767840648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2995350.4516601562,
            "unit": "ns",
            "range": "± 91882.77107718901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1022387.5128495066,
            "unit": "ns",
            "range": "± 35012.504771720225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932034.1276041666,
            "unit": "ns",
            "range": "± 13271.88076783367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3417811.3402061854,
            "unit": "ns",
            "range": "± 359892.68275310454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3633423.1578947366,
            "unit": "ns",
            "range": "± 324936.56220561994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5228660.638297873,
            "unit": "ns",
            "range": "± 341284.48613584467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4783282.417582418,
            "unit": "ns",
            "range": "± 363959.59714519186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7956918.085106383,
            "unit": "ns",
            "range": "± 573684.2796174258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330316.84210526315,
            "unit": "ns",
            "range": "± 41920.217162401364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313117.8947368421,
            "unit": "ns",
            "range": "± 42486.94412466765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284590.72164948453,
            "unit": "ns",
            "range": "± 44594.02305446472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4377763.541666667,
            "unit": "ns",
            "range": "± 380584.5487694704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4007272.6315789474,
            "unit": "ns",
            "range": "± 312430.26334810635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29367.525773195877,
            "unit": "ns",
            "range": "± 10450.98689826785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101035.71428571429,
            "unit": "ns",
            "range": "± 17498.44912126456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110912.5,
            "unit": "ns",
            "range": "± 23254.220895864997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135324.48979591837,
            "unit": "ns",
            "range": "± 30152.34535072487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5248.837209302325,
            "unit": "ns",
            "range": "± 1036.594445178851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26737.755102040817,
            "unit": "ns",
            "range": "± 9189.36538318029"
          }
        ]
      }
    ]
  }
}