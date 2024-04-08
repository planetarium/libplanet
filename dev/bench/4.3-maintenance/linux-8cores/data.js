window.BENCHMARK_DATA = {
  "lastUpdate": 1712565631257,
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
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712565608492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5767401.233333333,
            "unit": "ns",
            "range": "± 48590.625776505294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14468820.866666667,
            "unit": "ns",
            "range": "± 78772.28857632854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37524071.53333333,
            "unit": "ns",
            "range": "± 238113.04190802996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79237232,
            "unit": "ns",
            "range": "± 333503.3087882799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153275032.2,
            "unit": "ns",
            "range": "± 362887.6106522317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 198101.83333333334,
            "unit": "ns",
            "range": "± 7621.5527214948015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775063.0303030303,
            "unit": "ns",
            "range": "± 261784.27690123627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2839103.1774193547,
            "unit": "ns",
            "range": "± 128671.35022699689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2439934.5625,
            "unit": "ns",
            "range": "± 257862.764845212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8490695.708333334,
            "unit": "ns",
            "range": "± 216158.9208428713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2839765.511627907,
            "unit": "ns",
            "range": "± 96552.22683860747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2831692.0849056602,
            "unit": "ns",
            "range": "± 102133.84253054982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3892063.1333333333,
            "unit": "ns",
            "range": "± 83019.86969134447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3478786.222222222,
            "unit": "ns",
            "range": "± 177736.11205285083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9340131.631578946,
            "unit": "ns",
            "range": "± 205137.2815493757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200979.66129032258,
            "unit": "ns",
            "range": "± 8194.731538613842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193755.88888888888,
            "unit": "ns",
            "range": "± 5795.589104915555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168504.76,
            "unit": "ns",
            "range": "± 3531.3031857941623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3411726.7333333334,
            "unit": "ns",
            "range": "± 47655.822789885315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2852885.285714286,
            "unit": "ns",
            "range": "± 27299.292147567525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12095.065217391304,
            "unit": "ns",
            "range": "± 849.6407230925992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60082.34444444445,
            "unit": "ns",
            "range": "± 3588.987682100924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51702.51282051282,
            "unit": "ns",
            "range": "± 1793.8850352149525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79539.4375,
            "unit": "ns",
            "range": "± 9513.020940467115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.6129032258063,
            "unit": "ns",
            "range": "± 362.48259425253076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12636.672043010753,
            "unit": "ns",
            "range": "± 1308.9038113898137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3806019.809795673,
            "unit": "ns",
            "range": "± 2610.8990908414917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216773.1377604166,
            "unit": "ns",
            "range": "± 2360.6630676233376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770756.6998046875,
            "unit": "ns",
            "range": "± 1455.0739124940333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959487.8731770834,
            "unit": "ns",
            "range": "± 4528.11018800783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617646.7278878348,
            "unit": "ns",
            "range": "± 809.5788283301836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586699.2317940848,
            "unit": "ns",
            "range": "± 361.9642027725689"
          }
        ]
      }
    ]
  }
}