window.BENCHMARK_DATA = {
  "lastUpdate": 1744252210796,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "96d0939b259534eaeb8b570aeaf1edeb2e2035a6",
          "message": "fix: Remove temporary code",
          "timestamp": "2025-04-10T11:23:14+09:00",
          "tree_id": "682eb97e99da8be6985b7bc58f61596655809c6b",
          "url": "https://github.com/planetarium/libplanet/commit/96d0939b259534eaeb8b570aeaf1edeb2e2035a6"
        },
        "date": 1744252184773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2373571.8163265307,
            "unit": "ns",
            "range": "± 70887.3300590667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5211504.454545454,
            "unit": "ns",
            "range": "± 117541.16766223908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4045522.7395833335,
            "unit": "ns",
            "range": "± 233063.2447476434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15485674.66,
            "unit": "ns",
            "range": "± 7337096.77734168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34578.26666666667,
            "unit": "ns",
            "range": "± 649.8260719681258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204744.3076923075,
            "unit": "ns",
            "range": "± 11868.644779309721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580837.8545454545,
            "unit": "ns",
            "range": "± 109622.45780682022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3036685.879310345,
            "unit": "ns",
            "range": "± 48662.90631287111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2535634.1153846155,
            "unit": "ns",
            "range": "± 67250.05642782878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2211834.688235294,
            "unit": "ns",
            "range": "± 195991.5757321323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2864136.8666666667,
            "unit": "ns",
            "range": "± 12320.462015146457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 7075850.884615385,
            "unit": "ns",
            "range": "± 16340.251158506619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 18732237.785714287,
            "unit": "ns",
            "range": "± 161839.08010032616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 25450336.333333332,
            "unit": "ns",
            "range": "± 333326.3551303823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 50698657.28571428,
            "unit": "ns",
            "range": "± 31723.616719381822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244164.68,
            "unit": "ns",
            "range": "± 30696.82083031539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 479514.05,
            "unit": "ns",
            "range": "± 10889.073376434215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165077.03703703705,
            "unit": "ns",
            "range": "± 6941.369775953945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 985365.8243243244,
            "unit": "ns",
            "range": "± 33080.92639023787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 868473.9210526316,
            "unit": "ns",
            "range": "± 24774.405877057205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24200.875,
            "unit": "ns",
            "range": "± 1968.1247727348568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101575.64285714286,
            "unit": "ns",
            "range": "± 16259.076900922237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39862.23417721519,
            "unit": "ns",
            "range": "± 2108.4726925191594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62288.333333333336,
            "unit": "ns",
            "range": "± 30854.060760096956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3606.4242424242425,
            "unit": "ns",
            "range": "± 1629.8830250434155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23122.968421052632,
            "unit": "ns",
            "range": "± 1900.6075369813886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3859549.33828125,
            "unit": "ns",
            "range": "± 22214.297479803172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912063.1952427456,
            "unit": "ns",
            "range": "± 5309.269868794089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717244.8003255208,
            "unit": "ns",
            "range": "± 3587.967669563542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1746400.5963541667,
            "unit": "ns",
            "range": "± 5325.127967208172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462636.01002604165,
            "unit": "ns",
            "range": "± 1895.1356761330283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425504.92548828124,
            "unit": "ns",
            "range": "± 1952.8758386527068"
          }
        ]
      }
    ]
  }
}