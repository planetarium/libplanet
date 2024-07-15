window.BENCHMARK_DATA = {
  "lastUpdate": 1721003798206,
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
          "id": "a22f1afc49e01313b5c85f785ba6e4909d1b14f3",
          "message": "Release 5.1.1",
          "timestamp": "2024-07-15T09:25:23+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/a22f1afc49e01313b5c85f785ba6e4909d1b14f3"
        },
        "date": 1721003773093,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206189.22413793104,
            "unit": "ns",
            "range": "± 9047.221533443104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193045.97959183675,
            "unit": "ns",
            "range": "± 7428.97584767969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166366.35714285713,
            "unit": "ns",
            "range": "± 2552.558282530349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3057080.1923076925,
            "unit": "ns",
            "range": "± 33998.33567099184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2779858.9285714286,
            "unit": "ns",
            "range": "± 28902.362483858506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12432.223529411765,
            "unit": "ns",
            "range": "± 677.2207977931463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69613.12121212122,
            "unit": "ns",
            "range": "± 3210.5098110144513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50799.666666666664,
            "unit": "ns",
            "range": "± 571.9151770122644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52292.61855670103,
            "unit": "ns",
            "range": "± 7643.19890960162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2704.4578947368423,
            "unit": "ns",
            "range": "± 268.06266795838536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12022.692307692309,
            "unit": "ns",
            "range": "± 783.6534054217207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033066.1428571428,
            "unit": "ns",
            "range": "± 74613.86781104306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1946892.142857143,
            "unit": "ns",
            "range": "± 19448.012929374014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1658834.5615384616,
            "unit": "ns",
            "range": "± 72979.05104696075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8262534.28,
            "unit": "ns",
            "range": "± 218955.77600311593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3796776.657645089,
            "unit": "ns",
            "range": "± 4975.317789565078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217647.89765625,
            "unit": "ns",
            "range": "± 2026.292267093747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754070.3077473958,
            "unit": "ns",
            "range": "± 1862.3896794648183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934686.6251302084,
            "unit": "ns",
            "range": "± 2925.8702434430347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630948.9966145833,
            "unit": "ns",
            "range": "± 536.6112259473584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580381.6048177084,
            "unit": "ns",
            "range": "± 654.0071178485435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387595.7333333334,
            "unit": "ns",
            "range": "± 43917.25671803847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525195.214285714,
            "unit": "ns",
            "range": "± 37050.75187896601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3028724.2352941176,
            "unit": "ns",
            "range": "± 60230.42111500778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2643809.4,
            "unit": "ns",
            "range": "± 39775.79122639441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3283407.375,
            "unit": "ns",
            "range": "± 82225.05429760789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31953.21818181818,
            "unit": "ns",
            "range": "± 640.2978094984277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10566126.066666666,
            "unit": "ns",
            "range": "± 130032.34477701894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26439540.85714286,
            "unit": "ns",
            "range": "± 139580.2049707276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68458692.14285715,
            "unit": "ns",
            "range": "± 437702.03625822143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136674478.42857143,
            "unit": "ns",
            "range": "± 791310.5359513724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282959864.4285714,
            "unit": "ns",
            "range": "± 1001578.3364295742"
          }
        ]
      }
    ]
  }
}