window.BENCHMARK_DATA = {
  "lastUpdate": 1711342474389,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711342451214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5725671.733333333,
            "unit": "ns",
            "range": "± 24217.383380145602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14443082.07142857,
            "unit": "ns",
            "range": "± 53045.62134574393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37108958.06666667,
            "unit": "ns",
            "range": "± 203761.54361881883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74614454.33333333,
            "unit": "ns",
            "range": "± 235910.85939931596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151775682.93333334,
            "unit": "ns",
            "range": "± 838155.4504644169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37695.93010752688,
            "unit": "ns",
            "range": "± 3809.0088816938737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965199.4888888889,
            "unit": "ns",
            "range": "± 53499.12979513736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1885993.5625,
            "unit": "ns",
            "range": "± 74220.49659339715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665584.7307692308,
            "unit": "ns",
            "range": "± 100300.16517822634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7553532.117647059,
            "unit": "ns",
            "range": "± 210426.1552209626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2443914.066666667,
            "unit": "ns",
            "range": "± 72166.06760078396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541009.4285714286,
            "unit": "ns",
            "range": "± 91679.73086255959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120217.214285714,
            "unit": "ns",
            "range": "± 43362.46197981094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3235799.94,
            "unit": "ns",
            "range": "± 128671.0004995988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8728248.972972972,
            "unit": "ns",
            "range": "± 207577.63332753448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196444.16666666666,
            "unit": "ns",
            "range": "± 7643.8534181402365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192620.73684210525,
            "unit": "ns",
            "range": "± 8300.01667495381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167767.10606060605,
            "unit": "ns",
            "range": "± 5097.579419068635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3234188.4,
            "unit": "ns",
            "range": "± 32291.11337902648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807245.8,
            "unit": "ns",
            "range": "± 47711.630804538334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12323.966666666667,
            "unit": "ns",
            "range": "± 750.7328322334508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59731.64444444444,
            "unit": "ns",
            "range": "± 3740.4461649125815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54103.37234042553,
            "unit": "ns",
            "range": "± 3368.901346021685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88498.70408163265,
            "unit": "ns",
            "range": "± 10999.590904491344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4421.9,
            "unit": "ns",
            "range": "± 1734.468791849248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12319.41111111111,
            "unit": "ns",
            "range": "± 803.686053698124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3685505.6043526786,
            "unit": "ns",
            "range": "± 7537.434831876887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211846.054408482,
            "unit": "ns",
            "range": "± 933.7923826736269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771780.8053152902,
            "unit": "ns",
            "range": "± 1203.8485818614174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927315.7895833333,
            "unit": "ns",
            "range": "± 1978.8143364796108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612769.3057291667,
            "unit": "ns",
            "range": "± 564.1199153222238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567795.2611328125,
            "unit": "ns",
            "range": "± 655.8924547350892"
          }
        ]
      }
    ]
  }
}