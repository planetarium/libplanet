window.BENCHMARK_DATA = {
  "lastUpdate": 1722299775063,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "bc059152bb158e6b435e0ec3320b91fa1572d4bc",
          "message": "use cache",
          "timestamp": "2024-07-30T09:20:05+09:00",
          "tree_id": "11512283d7a990c058267a16d6a6a1fe8e4d4321",
          "url": "https://github.com/planetarium/libplanet/commit/bc059152bb158e6b435e0ec3320b91fa1572d4bc"
        },
        "date": 1722299477367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1024898.4210526316,
            "unit": "ns",
            "range": "± 95678.05820536122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1773658.064516129,
            "unit": "ns",
            "range": "± 80340.9324423154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554554.255319149,
            "unit": "ns",
            "range": "± 111308.66476903445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6782545.833333333,
            "unit": "ns",
            "range": "± 174740.8863809166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36947.47474747475,
            "unit": "ns",
            "range": "± 4538.6625611234385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9610446.666666666,
            "unit": "ns",
            "range": "± 76834.00350911109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24501038.888888888,
            "unit": "ns",
            "range": "± 817029.6767744478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58720660,
            "unit": "ns",
            "range": "± 385453.99169587763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119019314.28571428,
            "unit": "ns",
            "range": "± 994555.8605630051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237489864.2857143,
            "unit": "ns",
            "range": "± 1461650.4783750684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314055.6490384615,
            "unit": "ns",
            "range": "± 10019.116212640618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1085215.3515625,
            "unit": "ns",
            "range": "± 1826.0398586735625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738818.4221540178,
            "unit": "ns",
            "range": "± 905.7878918724749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953576.478794643,
            "unit": "ns",
            "range": "± 2648.0912826560216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625180.7198660715,
            "unit": "ns",
            "range": "± 1032.2362831025505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563689.6275111607,
            "unit": "ns",
            "range": "± 920.066081052111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2352531.25,
            "unit": "ns",
            "range": "± 43613.92314005548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2242039.2156862747,
            "unit": "ns",
            "range": "± 85982.91011225746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2691508.3333333335,
            "unit": "ns",
            "range": "± 67638.51434788028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2282008.5714285714,
            "unit": "ns",
            "range": "± 65828.0262655414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2944576.923076923,
            "unit": "ns",
            "range": "± 38367.89356232964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173505.79710144928,
            "unit": "ns",
            "range": "± 8020.999718715774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166226.02739726027,
            "unit": "ns",
            "range": "± 8193.154788488246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144651.72413793104,
            "unit": "ns",
            "range": "± 3808.695004259068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2839996.153846154,
            "unit": "ns",
            "range": "± 30943.809703628267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2508833.3333333335,
            "unit": "ns",
            "range": "± 31307.682002680303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11139.175257731958,
            "unit": "ns",
            "range": "± 1685.511587831652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54612.244897959186,
            "unit": "ns",
            "range": "± 5986.070864349582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45200,
            "unit": "ns",
            "range": "± 1728.1581560276531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54288.38383838384,
            "unit": "ns",
            "range": "± 10818.594226369625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2470.8333333333335,
            "unit": "ns",
            "range": "± 408.82802114971645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9412.359550561798,
            "unit": "ns",
            "range": "± 1198.2771936787854"
          }
        ]
      }
    ]
  }
}