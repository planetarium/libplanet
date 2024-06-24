window.BENCHMARK_DATA = {
  "lastUpdate": 1719196856959,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "69f068f3312857b817e758a94602e64c327f688b",
          "message": "reduce hash node cache size",
          "timestamp": "2024-06-20T16:02:24+09:00",
          "tree_id": "196befe55dbba86c6b00feadc678bd971d64ce7f",
          "url": "https://github.com/planetarium/libplanet/commit/69f068f3312857b817e758a94602e64c327f688b"
        },
        "date": 1718871446094,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5743354.357142857,
            "unit": "ns",
            "range": "± 33828.00263688501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14216371.642857144,
            "unit": "ns",
            "range": "± 59839.715785790424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36508300.85714286,
            "unit": "ns",
            "range": "± 617564.7295860955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74350479.23333333,
            "unit": "ns",
            "range": "± 279100.8532907739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146493936.46666667,
            "unit": "ns",
            "range": "± 508241.9892012728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17654.387096774193,
            "unit": "ns",
            "range": "± 1462.335602296799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109429.29508196721,
            "unit": "ns",
            "range": "± 4911.477009156758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103978.56338028169,
            "unit": "ns",
            "range": "± 4326.973283064517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93492.71428571429,
            "unit": "ns",
            "range": "± 2861.4750471353323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3073759.4285714286,
            "unit": "ns",
            "range": "± 110396.64774407292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799461.6703296704,
            "unit": "ns",
            "range": "± 156624.53751447587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5112.397727272727,
            "unit": "ns",
            "range": "± 625.5234413089242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26707.664835164836,
            "unit": "ns",
            "range": "± 1864.1247887636248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22628.387096774193,
            "unit": "ns",
            "range": "± 1030.597472817743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29384.41489361702,
            "unit": "ns",
            "range": "± 4901.159889951823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1193.0208333333333,
            "unit": "ns",
            "range": "± 253.99353407297048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4701.857142857143,
            "unit": "ns",
            "range": "± 528.145488613561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 702289.6060606061,
            "unit": "ns",
            "range": "± 72583.33514500281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1263926.1294117647,
            "unit": "ns",
            "range": "± 71706.18693416778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1057886.4938271604,
            "unit": "ns",
            "range": "± 55533.68041178331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10811310.34,
            "unit": "ns",
            "range": "± 2490117.922900374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2229967.9402985075,
            "unit": "ns",
            "range": "± 103189.18366280635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2329183.1612903224,
            "unit": "ns",
            "range": "± 57836.599977348116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2679016.3571428573,
            "unit": "ns",
            "range": "± 84721.61805838173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2930769.375,
            "unit": "ns",
            "range": "± 75489.09944909842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10562271.180851065,
            "unit": "ns",
            "range": "± 1098354.9315199298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3047946.633072917,
            "unit": "ns",
            "range": "± 40325.01119402404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917577.1704427083,
            "unit": "ns",
            "range": "± 4011.578777220307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 624119.7805338542,
            "unit": "ns",
            "range": "± 4251.7436795926005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1622263.47734375,
            "unit": "ns",
            "range": "± 9998.496808770244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465991.44830729166,
            "unit": "ns",
            "range": "± 579.58828104177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424074.7650716146,
            "unit": "ns",
            "range": "± 1214.2859534928143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "1594fa3bf040c04a143a08043b190a704a47a6cd",
          "message": "cache size must be at least 2",
          "timestamp": "2024-06-24T11:29:34+09:00",
          "tree_id": "50e3a761f61e045406d65fb27a3e4ecb3757875b",
          "url": "https://github.com/planetarium/libplanet/commit/1594fa3bf040c04a143a08043b190a704a47a6cd"
        },
        "date": 1719196811413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5781511.714285715,
            "unit": "ns",
            "range": "± 59375.815129858755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14356732.75,
            "unit": "ns",
            "range": "± 37771.922761670954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36045333.538461536,
            "unit": "ns",
            "range": "± 199314.24080607627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72563898.63333334,
            "unit": "ns",
            "range": "± 316627.4413874331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146037672.6,
            "unit": "ns",
            "range": "± 417375.5407664832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17221,
            "unit": "ns",
            "range": "± 1403.358154966547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108561.93506493507,
            "unit": "ns",
            "range": "± 4599.7182131588015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104669.46296296296,
            "unit": "ns",
            "range": "± 4330.95776027011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92422.2564102564,
            "unit": "ns",
            "range": "± 3186.4068422131163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3120506.769230769,
            "unit": "ns",
            "range": "± 35637.41897489643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2791289.7972972975,
            "unit": "ns",
            "range": "± 138357.5172422934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5015.532258064516,
            "unit": "ns",
            "range": "± 716.5751189666158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27247.722222222223,
            "unit": "ns",
            "range": "± 2629.4344749256616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24048.052083333332,
            "unit": "ns",
            "range": "± 1883.7374069416908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 26712.315217391304,
            "unit": "ns",
            "range": "± 3214.3097320252537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1363.298969072165,
            "unit": "ns",
            "range": "± 244.59354741371672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4884.6741573033705,
            "unit": "ns",
            "range": "± 590.8177456112089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 759361.0909090909,
            "unit": "ns",
            "range": "± 80142.25003756439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1376405.411111111,
            "unit": "ns",
            "range": "± 146335.18736390467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1322379.8369565217,
            "unit": "ns",
            "range": "± 78707.53228867696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9822262.2,
            "unit": "ns",
            "range": "± 452213.1593248555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2213050.033333333,
            "unit": "ns",
            "range": "± 64771.01507977444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2319460.25,
            "unit": "ns",
            "range": "± 121284.89746137064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2619780.7352941176,
            "unit": "ns",
            "range": "± 38599.99208634862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3039198.3666666667,
            "unit": "ns",
            "range": "± 129509.50654746684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10683809.3,
            "unit": "ns",
            "range": "± 320894.56182214216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034133.5220052083,
            "unit": "ns",
            "range": "± 56762.075811242634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917882.387109375,
            "unit": "ns",
            "range": "± 5936.897831547902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612490.2149739583,
            "unit": "ns",
            "range": "± 4796.814592405345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1649537.3870192308,
            "unit": "ns",
            "range": "± 14404.823406782703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464246.65290178574,
            "unit": "ns",
            "range": "± 819.5113730395133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425038.47347005206,
            "unit": "ns",
            "range": "± 1237.7900779042252"
          }
        ]
      }
    ]
  }
}