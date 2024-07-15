window.BENCHMARK_DATA = {
  "lastUpdate": 1721033804096,
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
          "id": "9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0",
          "message": "Prepare 5.1.2",
          "timestamp": "2024-07-15T17:45:54+09:00",
          "tree_id": "b98ac14d02e74eef1d4802753356bee3fcc4ff10",
          "url": "https://github.com/planetarium/libplanet/commit/9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0"
        },
        "date": 1721033777683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212595.15714285715,
            "unit": "ns",
            "range": "± 10347.112047744116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198487,
            "unit": "ns",
            "range": "± 9333.103996816099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174793.93333333332,
            "unit": "ns",
            "range": "± 5101.328913631963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3069090.4285714286,
            "unit": "ns",
            "range": "± 28395.503074266166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819999.7666666666,
            "unit": "ns",
            "range": "± 39894.66094688194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13991.15909090909,
            "unit": "ns",
            "range": "± 885.9177057129606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63826.67525773196,
            "unit": "ns",
            "range": "± 5132.3240999455065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58601.90909090909,
            "unit": "ns",
            "range": "± 5276.893009962394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61272.37628865979,
            "unit": "ns",
            "range": "± 10430.030323399646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3600.074468085106,
            "unit": "ns",
            "range": "± 522.9815112043083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13342.608695652174,
            "unit": "ns",
            "range": "± 1010.7816631068281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055822.75,
            "unit": "ns",
            "range": "± 53345.4068358592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2033378.9210526317,
            "unit": "ns",
            "range": "± 70108.58719105693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1783517.425531915,
            "unit": "ns",
            "range": "± 109161.21930749352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8344887.357142857,
            "unit": "ns",
            "range": "± 187705.53802493037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750078.503348214,
            "unit": "ns",
            "range": "± 6252.445057613965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205431.0390625,
            "unit": "ns",
            "range": "± 1893.2495577449124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761903.7039620535,
            "unit": "ns",
            "range": "± 1624.4112352270265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921209.263671875,
            "unit": "ns",
            "range": "± 1514.9057777784485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610624.087109375,
            "unit": "ns",
            "range": "± 494.463943170597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569683.4908621652,
            "unit": "ns",
            "range": "± 1817.0811075600693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521746.1666666665,
            "unit": "ns",
            "range": "± 78806.13148562216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2615887.8,
            "unit": "ns",
            "range": "± 39760.5527972494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3116798.076923077,
            "unit": "ns",
            "range": "± 22277.440537688715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2627195.8666666667,
            "unit": "ns",
            "range": "± 76409.2723924955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3412966.785714286,
            "unit": "ns",
            "range": "± 55896.819860592004"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41716.75,
            "unit": "ns",
            "range": "± 10203.016945759453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11069770.285714285,
            "unit": "ns",
            "range": "± 87151.92674967846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27510407.233333334,
            "unit": "ns",
            "range": "± 124272.8386945817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70457471.28571428,
            "unit": "ns",
            "range": "± 270997.5527732758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140747028.8,
            "unit": "ns",
            "range": "± 954446.3484329691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291446158.85714287,
            "unit": "ns",
            "range": "± 688333.398530533"
          }
        ]
      }
    ]
  }
}