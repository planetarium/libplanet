window.BENCHMARK_DATA = {
  "lastUpdate": 1687411727811,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a1c360c93a287f9a71a45026cb78a3dfecc5b1c0",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T14:15:49+09:00",
          "tree_id": "865718399b7119b0a6f7a9ed2dde5147e509ab27",
          "url": "https://github.com/planetarium/libplanet/commit/a1c360c93a287f9a71a45026cb78a3dfecc5b1c0"
        },
        "date": 1687411703287,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3136191.6428571427,
            "unit": "ns",
            "range": "± 38446.9079633143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3377938.285714286,
            "unit": "ns",
            "range": "± 78997.31091128537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4218422.666666667,
            "unit": "ns",
            "range": "± 98549.61723737608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4196844.533333333,
            "unit": "ns",
            "range": "± 77602.96489261097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6754230.129032258,
            "unit": "ns",
            "range": "± 166832.3483332378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7620916.6,
            "unit": "ns",
            "range": "± 13551.041361143749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19402961.933333334,
            "unit": "ns",
            "range": "± 59255.20401795545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49740829.266666666,
            "unit": "ns",
            "range": "± 567768.0814544748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98137821.83333333,
            "unit": "ns",
            "range": "± 417055.07426016475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199030537.33333334,
            "unit": "ns",
            "range": "± 1020422.0641216951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279418.52173913043,
            "unit": "ns",
            "range": "± 10706.175874469485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264236.7380952381,
            "unit": "ns",
            "range": "± 9256.36334599866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228427.84615384616,
            "unit": "ns",
            "range": "± 3627.935956944707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4162430,
            "unit": "ns",
            "range": "± 35567.38701796513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3727023.533333333,
            "unit": "ns",
            "range": "± 39146.12821735406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15583.34375,
            "unit": "ns",
            "range": "± 1053.4762888259143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81243.21428571429,
            "unit": "ns",
            "range": "± 3823.7611459454733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70300.35714285714,
            "unit": "ns",
            "range": "± 1222.1168021191666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78445.54794520549,
            "unit": "ns",
            "range": "± 2884.8324091564364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4092.5851063829787,
            "unit": "ns",
            "range": "± 441.9365353545364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15132.333333333334,
            "unit": "ns",
            "range": "± 1130.8331410877809"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45253.87804878049,
            "unit": "ns",
            "range": "± 2157.204938210118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5979254.028125,
            "unit": "ns",
            "range": "± 26455.385963910874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893274.0509114584,
            "unit": "ns",
            "range": "± 5722.781716756828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366045.158954327,
            "unit": "ns",
            "range": "± 1843.0757442921633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635284.2845552885,
            "unit": "ns",
            "range": "± 3181.2031838355774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829739.1427283654,
            "unit": "ns",
            "range": "± 569.7657931727457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734849.8819661458,
            "unit": "ns",
            "range": "± 856.3044996634638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1353858.925531915,
            "unit": "ns",
            "range": "± 91412.997710937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2575623.777777778,
            "unit": "ns",
            "range": "± 70288.67554938832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141371.4024390243,
            "unit": "ns",
            "range": "± 107383.11958370087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5290538.125,
            "unit": "ns",
            "range": "± 96112.28130256472"
          }
        ]
      }
    ]
  }
}