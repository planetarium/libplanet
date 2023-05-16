window.BENCHMARK_DATA = {
  "lastUpdate": 1684228456987,
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
          "id": "329dd0a8838dd9ffe6ccf309df4f80c318524a70",
          "message": "Merge pull request #3167 from greymistcube/release/1.2.0\n\n🚀 Release 1.2.0",
          "timestamp": "2023-05-16T17:54:33+09:00",
          "tree_id": "2085a9782b57ad4f6a8e3a8d2d33efcec83c8ad6",
          "url": "https://github.com/planetarium/libplanet/commit/329dd0a8838dd9ffe6ccf309df4f80c318524a70"
        },
        "date": 1684228395906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360750,
            "unit": "ns",
            "range": "± 131819.06978087328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2560122.580645161,
            "unit": "ns",
            "range": "± 116109.67599130083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2144289.6907216497,
            "unit": "ns",
            "range": "± 170334.79379135967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5275476.288659794,
            "unit": "ns",
            "range": "± 306451.884060803"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47424.17582417582,
            "unit": "ns",
            "range": "± 2756.8234803983555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7001820,
            "unit": "ns",
            "range": "± 105397.93437932535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19450153.333333332,
            "unit": "ns",
            "range": "± 298128.0498296631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48770713.333333336,
            "unit": "ns",
            "range": "± 848365.3137203392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93003533.33333333,
            "unit": "ns",
            "range": "± 1428031.2730002333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184943528.57142857,
            "unit": "ns",
            "range": "± 3000048.497602503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4710249.739583333,
            "unit": "ns",
            "range": "± 21358.691684475205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1497133.84765625,
            "unit": "ns",
            "range": "± 7681.923464727917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152573.2161458333,
            "unit": "ns",
            "range": "± 8935.159298552766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628276.5364583335,
            "unit": "ns",
            "range": "± 15533.944850261561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829519.5442708334,
            "unit": "ns",
            "range": "± 4001.6218677766356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774799.3424479166,
            "unit": "ns",
            "range": "± 2001.4587547211308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2993945.238095238,
            "unit": "ns",
            "range": "± 107522.85792691336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3179829.411764706,
            "unit": "ns",
            "range": "± 64168.7303589712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4115446.6666666665,
            "unit": "ns",
            "range": "± 76356.0631577636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4262112.5,
            "unit": "ns",
            "range": "± 108213.03189421841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6704147.916666667,
            "unit": "ns",
            "range": "± 261601.7242359594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267803.0303030303,
            "unit": "ns",
            "range": "± 8376.77163532008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256512.24489795917,
            "unit": "ns",
            "range": "± 10086.286743500248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238283.33333333334,
            "unit": "ns",
            "range": "± 11786.241680779605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3969564.285714286,
            "unit": "ns",
            "range": "± 50820.2504632047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3656968.4210526315,
            "unit": "ns",
            "range": "± 81300.5196965184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19610.752688172044,
            "unit": "ns",
            "range": "± 1836.0201740385073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88325.26315789473,
            "unit": "ns",
            "range": "± 5894.389117483597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77724.41860465116,
            "unit": "ns",
            "range": "± 4229.5650185613695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104582.6530612245,
            "unit": "ns",
            "range": "± 16943.592137979078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6687.628865979382,
            "unit": "ns",
            "range": "± 1012.6551045764505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20305.263157894737,
            "unit": "ns",
            "range": "± 2267.5494515263786"
          }
        ]
      }
    ]
  }
}