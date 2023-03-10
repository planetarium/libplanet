window.BENCHMARK_DATA = {
  "lastUpdate": 1678419965029,
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
          "id": "7fd63eb9cf0485d8b189f13caf82cafe8ca51b83",
          "message": "Merge pull request #2913 from colibrishin/benchmark/fix/0.51-maintenance\n\nci/bench: cherrypick of bench pr update to 0.51-maintenance",
          "timestamp": "2023-03-10T12:29:01+09:00",
          "tree_id": "82119e497d3b4c94da39369664c909a5be52b864",
          "url": "https://github.com/planetarium/libplanet/commit/7fd63eb9cf0485d8b189f13caf82cafe8ca51b83"
        },
        "date": 1678419910778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373179.797979798,
            "unit": "ns",
            "range": "± 114886.17968054915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2447381.4814814813,
            "unit": "ns",
            "range": "± 62909.58125043762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105314.4444444445,
            "unit": "ns",
            "range": "± 117053.21037321725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5219101.176470588,
            "unit": "ns",
            "range": "± 280003.2178786682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46510.126582278484,
            "unit": "ns",
            "range": "± 2304.54372461086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7120938.461538462,
            "unit": "ns",
            "range": "± 92036.99019471771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19243000,
            "unit": "ns",
            "range": "± 299048.34773948224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49797323.333333336,
            "unit": "ns",
            "range": "± 582827.133727938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96464343.75,
            "unit": "ns",
            "range": "± 1776200.415481973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 190834212.5,
            "unit": "ns",
            "range": "± 3635693.709665323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834291.953125,
            "unit": "ns",
            "range": "± 19645.8153674945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525076.5206473214,
            "unit": "ns",
            "range": "± 3665.844020513379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146393.5267857143,
            "unit": "ns",
            "range": "± 4062.2239115293005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636542.65625,
            "unit": "ns",
            "range": "± 9908.798721617999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812407.177734375,
            "unit": "ns",
            "range": "± 750.7284736072728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762339.4856770834,
            "unit": "ns",
            "range": "± 850.173600296574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3067640.7407407407,
            "unit": "ns",
            "range": "± 160264.57014713032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4749924.324324325,
            "unit": "ns",
            "range": "± 146656.57617828235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22205217.647058822,
            "unit": "ns",
            "range": "± 448452.47690710507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5978679.310344827,
            "unit": "ns",
            "range": "± 168917.61385638846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26258030.43478261,
            "unit": "ns",
            "range": "± 636955.1071912957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178895.2380952381,
            "unit": "ns",
            "range": "± 6248.666292076483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177153.57142857142,
            "unit": "ns",
            "range": "± 4444.762389421137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148693.75,
            "unit": "ns",
            "range": "± 5837.5310377779815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10849214.814814815,
            "unit": "ns",
            "range": "± 296613.2533784896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8706914.285714285,
            "unit": "ns",
            "range": "± 202653.14526479543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19965.625,
            "unit": "ns",
            "range": "± 1740.3767362874414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51937.096774193546,
            "unit": "ns",
            "range": "± 4226.57806408888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39944.262295081964,
            "unit": "ns",
            "range": "± 1818.5639563644656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97331.9587628866,
            "unit": "ns",
            "range": "± 16490.99846880964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5987.5,
            "unit": "ns",
            "range": "± 913.4376941273179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19892.55319148936,
            "unit": "ns",
            "range": "± 1357.2774267883758"
          }
        ]
      }
    ]
  }
}