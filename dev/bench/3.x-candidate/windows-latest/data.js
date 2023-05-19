window.BENCHMARK_DATA = {
  "lastUpdate": 1684483009373,
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
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/planetarium/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684482955333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479392.9292929294,
            "unit": "ns",
            "range": "± 137455.16764661943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2742431.3725490198,
            "unit": "ns",
            "range": "± 112040.47927458376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279539.393939394,
            "unit": "ns",
            "range": "± 133965.00823827842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5446930.769230769,
            "unit": "ns",
            "range": "± 214274.55041665456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54745.26315789474,
            "unit": "ns",
            "range": "± 4458.9324268773125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7848187.5,
            "unit": "ns",
            "range": "± 147403.6900261772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20395333.333333332,
            "unit": "ns",
            "range": "± 191925.47908969648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51737715.384615384,
            "unit": "ns",
            "range": "± 403428.26468108274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103003792.3076923,
            "unit": "ns",
            "range": "± 436668.0345936687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206205413.33333334,
            "unit": "ns",
            "range": "± 2065403.9535253376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4910125.446428572,
            "unit": "ns",
            "range": "± 32170.33238094265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1560513.84765625,
            "unit": "ns",
            "range": "± 14780.465948575795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186846.7708333333,
            "unit": "ns",
            "range": "± 9901.196158689723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669526.729910714,
            "unit": "ns",
            "range": "± 27812.497736989044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832701.7415364584,
            "unit": "ns",
            "range": "± 2243.9024286881026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775248.0208333334,
            "unit": "ns",
            "range": "± 4210.999941667153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400465.3846153845,
            "unit": "ns",
            "range": "± 92212.22453582907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623705.882352941,
            "unit": "ns",
            "range": "± 116526.87280435141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4354161.111111111,
            "unit": "ns",
            "range": "± 89347.30740133852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4402110,
            "unit": "ns",
            "range": "± 155712.17332975904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6938357.894736842,
            "unit": "ns",
            "range": "± 145592.98791032133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287020.3125,
            "unit": "ns",
            "range": "± 13314.822623230668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279844.5652173913,
            "unit": "ns",
            "range": "± 15695.175741836358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273048.8888888889,
            "unit": "ns",
            "range": "± 10146.195485416336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4193778.5714285714,
            "unit": "ns",
            "range": "± 49703.214237054184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3835100,
            "unit": "ns",
            "range": "± 40216.60583161369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26224.74226804124,
            "unit": "ns",
            "range": "± 3314.8664794577026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110612.12121212122,
            "unit": "ns",
            "range": "± 9135.435299295084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98910.101010101,
            "unit": "ns",
            "range": "± 10397.639988797057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119214.94845360825,
            "unit": "ns",
            "range": "± 16780.321071354145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7991.7525773195875,
            "unit": "ns",
            "range": "± 1598.4152375017147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25003.092783505155,
            "unit": "ns",
            "range": "± 3193.8565249112567"
          }
        ]
      }
    ]
  }
}