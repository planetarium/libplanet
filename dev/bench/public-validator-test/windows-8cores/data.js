window.BENCHMARK_DATA = {
  "lastUpdate": 1732784441441,
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
          "id": "2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18",
          "message": "timeout 3",
          "timestamp": "2024-11-28T17:50:09+09:00",
          "tree_id": "7be3901dd8475bfc75dbd4bbba88c66d252776b2",
          "url": "https://github.com/planetarium/libplanet/commit/2d3e294dfbcacf5b2472b2cd0fee4d0bb9ec6c18"
        },
        "date": 1732784368052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976865.9574468085,
            "unit": "ns",
            "range": "± 97643.91700238198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1749950.8196721312,
            "unit": "ns",
            "range": "± 77873.09895582432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1469688.1720430108,
            "unit": "ns",
            "range": "± 107251.49522567967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6711442.372881356,
            "unit": "ns",
            "range": "± 296892.984437264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30592.708333333332,
            "unit": "ns",
            "range": "± 3543.303388578061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9749073.076923076,
            "unit": "ns",
            "range": "± 32662.622721957327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23483715.384615384,
            "unit": "ns",
            "range": "± 89913.56818406076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58784980,
            "unit": "ns",
            "range": "± 460545.1136580278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119984820,
            "unit": "ns",
            "range": "± 628229.6090716241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237656513.33333334,
            "unit": "ns",
            "range": "± 1182995.743783351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3258683.370535714,
            "unit": "ns",
            "range": "± 5555.712553492064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035447.4308894231,
            "unit": "ns",
            "range": "± 1147.7018553774026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729957.2591145834,
            "unit": "ns",
            "range": "± 1234.5376080634658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952120.9635416667,
            "unit": "ns",
            "range": "± 5161.135012789829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625712.7734375,
            "unit": "ns",
            "range": "± 1228.895418276837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555273.5072544643,
            "unit": "ns",
            "range": "± 2177.608541481327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2167600,
            "unit": "ns",
            "range": "± 23063.359933638712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293864.285714286,
            "unit": "ns",
            "range": "± 54730.90544273875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2784573.3333333335,
            "unit": "ns",
            "range": "± 79894.37826381101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2298393.3333333335,
            "unit": "ns",
            "range": "± 30036.89318789399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2960026.6666666665,
            "unit": "ns",
            "range": "± 54499.92747920033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89387.20930232559,
            "unit": "ns",
            "range": "± 4619.212983936904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162340.9638554217,
            "unit": "ns",
            "range": "± 8597.518589041929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148156.52173913043,
            "unit": "ns",
            "range": "± 3707.7101591826085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2591314.285714286,
            "unit": "ns",
            "range": "± 26798.61813724607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2463480,
            "unit": "ns",
            "range": "± 32313.977515266404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10186.59793814433,
            "unit": "ns",
            "range": "± 1673.0479213337073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50860.63829787234,
            "unit": "ns",
            "range": "± 4377.219082936434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43820,
            "unit": "ns",
            "range": "± 1383.0486359531124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52732.989690721646,
            "unit": "ns",
            "range": "± 9325.588918506755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2509.6774193548385,
            "unit": "ns",
            "range": "± 359.6690858725536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10216.304347826086,
            "unit": "ns",
            "range": "± 868.7843184984413"
          }
        ]
      }
    ]
  }
}