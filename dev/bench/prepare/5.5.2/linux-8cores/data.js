window.BENCHMARK_DATA = {
  "lastUpdate": 1757926138108,
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
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "3bbbd805f99ac890709c03451e309b8821de9b24",
          "message": "Decreate HashNodeCache size & ActivitySource as singleton",
          "timestamp": "2025-09-15T17:38:16+09:00",
          "tree_id": "86c3af752c136908e76635197e662d20ca218d46",
          "url": "https://github.com/planetarium/libplanet/commit/3bbbd805f99ac890709c03451e309b8821de9b24"
        },
        "date": 1757926111263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1101442.3152173914,
            "unit": "ns",
            "range": "± 74316.69001162634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2109287.4324324327,
            "unit": "ns",
            "range": "± 105143.74234144352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1731409.1477272727,
            "unit": "ns",
            "range": "± 103874.66492171523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8269617.638888889,
            "unit": "ns",
            "range": "± 271400.7673383355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124042.48958333333,
            "unit": "ns",
            "range": "± 15534.401660419971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212509.51162790696,
            "unit": "ns",
            "range": "± 11025.623786001925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196536.58585858587,
            "unit": "ns",
            "range": "± 17263.074197700367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3046032.5,
            "unit": "ns",
            "range": "± 48490.24258985592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2895522.9285714286,
            "unit": "ns",
            "range": "± 46583.46861852353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14688.939560439561,
            "unit": "ns",
            "range": "± 1612.7665616627792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69288.5752688172,
            "unit": "ns",
            "range": "± 7789.839348174004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56698.593406593405,
            "unit": "ns",
            "range": "± 4762.920240958672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78582.43298969071,
            "unit": "ns",
            "range": "± 14727.390784200948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3382.288888888889,
            "unit": "ns",
            "range": "± 712.556313476455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14672.8,
            "unit": "ns",
            "range": "± 2125.101096969371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4162573.1266741073,
            "unit": "ns",
            "range": "± 16956.837258179345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1272034.90859375,
            "unit": "ns",
            "range": "± 2627.5983062460477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784115.8440104167,
            "unit": "ns",
            "range": "± 1534.3270073478732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2026068.6610576923,
            "unit": "ns",
            "range": "± 4718.96942950428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645101.2756911058,
            "unit": "ns",
            "range": "± 1171.5385796436801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580858.7449869792,
            "unit": "ns",
            "range": "± 1479.7184165300657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12180207.733333332,
            "unit": "ns",
            "range": "± 215402.31699823827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30427875.888888888,
            "unit": "ns",
            "range": "± 551246.0105450025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74751136.92307693,
            "unit": "ns",
            "range": "± 734419.9111864254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 146709692.41666666,
            "unit": "ns",
            "range": "± 1242513.7709645834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300145864,
            "unit": "ns",
            "range": "± 3793879.560348935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34239.58064516129,
            "unit": "ns",
            "range": "± 3369.3789497491402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2561112.5,
            "unit": "ns",
            "range": "± 41411.33490130078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2671298.447368421,
            "unit": "ns",
            "range": "± 57085.065148886635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3122002.0384615385,
            "unit": "ns",
            "range": "± 83904.22170617197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2698407.7843137253,
            "unit": "ns",
            "range": "± 109498.26582102818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3475215.5483870967,
            "unit": "ns",
            "range": "± 104834.32206831205"
          }
        ]
      }
    ]
  }
}