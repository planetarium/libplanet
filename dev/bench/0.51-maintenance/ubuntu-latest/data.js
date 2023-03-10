window.BENCHMARK_DATA = {
  "lastUpdate": 1678419656981,
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
        "date": 1678419638298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194770.84210526315,
            "unit": "ns",
            "range": "± 4152.411364538788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190048.66666666666,
            "unit": "ns",
            "range": "± 4683.188057788774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157424.6923076923,
            "unit": "ns",
            "range": "± 1168.5357921073266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11193791.642857144,
            "unit": "ns",
            "range": "± 39505.73328130243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8974776.533333333,
            "unit": "ns",
            "range": "± 75772.99236711368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16747.618556701033,
            "unit": "ns",
            "range": "± 1368.2815746653641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49319.52173913043,
            "unit": "ns",
            "range": "± 2919.7169100251917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39167.166666666664,
            "unit": "ns",
            "range": "± 436.64731624948615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82518.36734693877,
            "unit": "ns",
            "range": "± 12489.213759796565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4595.784946236559,
            "unit": "ns",
            "range": "± 469.9671091512305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17430.58762886598,
            "unit": "ns",
            "range": "± 1505.6029505966574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3219735.714285714,
            "unit": "ns",
            "range": "± 46366.6249869593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5112198.047619048,
            "unit": "ns",
            "range": "± 121143.4536021143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22969556.133333333,
            "unit": "ns",
            "range": "± 215660.062434533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6056586.04,
            "unit": "ns",
            "range": "± 153818.24600495223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26579562.92857143,
            "unit": "ns",
            "range": "± 385488.534161217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873819.811941965,
            "unit": "ns",
            "range": "± 21563.972309044846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1949336.4559895834,
            "unit": "ns",
            "range": "± 9004.554999900807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346444.6824776786,
            "unit": "ns",
            "range": "± 1254.5672307078592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578090.270926339,
            "unit": "ns",
            "range": "± 1466.5933574389649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822562.9989483173,
            "unit": "ns",
            "range": "± 839.4535405475823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752934.3077566965,
            "unit": "ns",
            "range": "± 962.4017701670172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7828199.461538462,
            "unit": "ns",
            "range": "± 12814.6038540369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19498130.133333333,
            "unit": "ns",
            "range": "± 77506.21921024575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49763354.666666664,
            "unit": "ns",
            "range": "± 255008.50600677915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99834717.06666666,
            "unit": "ns",
            "range": "± 1255543.8716363101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200098593.8,
            "unit": "ns",
            "range": "± 2315870.9727714662"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45121.3962264151,
            "unit": "ns",
            "range": "± 1760.3833207967327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346959.9591836734,
            "unit": "ns",
            "range": "± 99148.49134743576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481894.2,
            "unit": "ns",
            "range": "± 65789.31428621216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109277.2040816327,
            "unit": "ns",
            "range": "± 125762.59521903147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4891258.647058823,
            "unit": "ns",
            "range": "± 93914.6731486494"
          }
        ]
      }
    ]
  }
}