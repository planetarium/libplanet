window.BENCHMARK_DATA = {
  "lastUpdate": 1739774821127,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "lime_bell@naver.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "cb0ff06e16a83e5306c74d8ae03d2ab3a6894db6",
          "message": "prepare: 5.5.2",
          "timestamp": "2025-02-17T15:38:38+09:00",
          "tree_id": "2e2d668e1ee286aa02c9f861aa68bbb6be813dd4",
          "url": "https://github.com/planetarium/libplanet/commit/cb0ff06e16a83e5306c74d8ae03d2ab3a6894db6"
        },
        "date": 1739774794254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999607.5927835051,
            "unit": "ns",
            "range": "± 94416.680129458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1983810.223076923,
            "unit": "ns",
            "range": "± 92719.35712415108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1572026.3670886075,
            "unit": "ns",
            "range": "± 77569.17167263618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7800908.863636363,
            "unit": "ns",
            "range": "± 206047.6119167937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380728.5,
            "unit": "ns",
            "range": "± 25160.315926841253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2493154.7666666666,
            "unit": "ns",
            "range": "± 36031.330661099986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2954896.7666666666,
            "unit": "ns",
            "range": "± 74198.82348666822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2623802.730769231,
            "unit": "ns",
            "range": "± 25951.52105097068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3204684.214285714,
            "unit": "ns",
            "range": "± 53214.1912003217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3867763.7176339286,
            "unit": "ns",
            "range": "± 12132.271601071494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1230543.1811899038,
            "unit": "ns",
            "range": "± 1588.722349498842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766312.0204380581,
            "unit": "ns",
            "range": "± 2911.7603363324492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967034.8607700893,
            "unit": "ns",
            "range": "± 2469.846108517525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622570.5715680803,
            "unit": "ns",
            "range": "± 1908.0495822677108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581460.0854817708,
            "unit": "ns",
            "range": "± 2968.7943274119284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11520089.4,
            "unit": "ns",
            "range": "± 115547.9985737529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27927840.35714286,
            "unit": "ns",
            "range": "± 435851.97039990313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68497447.06666666,
            "unit": "ns",
            "range": "± 205761.22542245995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139338817.33333334,
            "unit": "ns",
            "range": "± 707178.4615147586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275109441.4285714,
            "unit": "ns",
            "range": "± 1124815.2287279975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30808.236842105263,
            "unit": "ns",
            "range": "± 676.1938284007416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100946.6170212766,
            "unit": "ns",
            "range": "± 8387.344025896364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186631.57317073172,
            "unit": "ns",
            "range": "± 9341.152047847187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163888.39130434784,
            "unit": "ns",
            "range": "± 4046.111879313392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2907554.5,
            "unit": "ns",
            "range": "± 24392.278013065254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2733341.1428571427,
            "unit": "ns",
            "range": "± 34277.75664245781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10806.633333333333,
            "unit": "ns",
            "range": "± 700.1654571711819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56106.31914893617,
            "unit": "ns",
            "range": "± 4224.868926420774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51027.791666666664,
            "unit": "ns",
            "range": "± 1280.8159756209309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52209.416666666664,
            "unit": "ns",
            "range": "± 7708.680981672091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2549.8894736842103,
            "unit": "ns",
            "range": "± 223.6398745864413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10477.04347826087,
            "unit": "ns",
            "range": "± 737.4702067074813"
          }
        ]
      }
    ]
  }
}