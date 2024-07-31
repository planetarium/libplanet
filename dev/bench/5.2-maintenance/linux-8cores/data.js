window.BENCHMARK_DATA = {
  "lastUpdate": 1722385994023,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29be97f6977e2f8c58397246c85b77a815d1c924",
          "message": "Merge pull request #3892 from planetarium/release/5.2.0\n\n🚀 Release 5.2.0",
          "timestamp": "2024-07-23T17:26:04+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/29be97f6977e2f8c58397246c85b77a815d1c924"
        },
        "date": 1721723774005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199601.5,
            "unit": "ns",
            "range": "± 8122.135749871721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192029.9411764706,
            "unit": "ns",
            "range": "± 7052.997344141751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166703,
            "unit": "ns",
            "range": "± 3750.154634145104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3047957.9285714286,
            "unit": "ns",
            "range": "± 35747.85719390806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2848111.8,
            "unit": "ns",
            "range": "± 36089.82263385146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13178.68888888889,
            "unit": "ns",
            "range": "± 1370.9524258003048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59220.1914893617,
            "unit": "ns",
            "range": "± 3411.627171535776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50320.46666666667,
            "unit": "ns",
            "range": "± 899.551306141541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55575.010309278354,
            "unit": "ns",
            "range": "± 8612.6753677052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2677.6082474226805,
            "unit": "ns",
            "range": "± 278.95278710074126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12216.057471264368,
            "unit": "ns",
            "range": "± 681.7378503931313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001758.1594202898,
            "unit": "ns",
            "range": "± 42604.97902366066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1954729.2285714287,
            "unit": "ns",
            "range": "± 64153.09815593509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1678182.8674698796,
            "unit": "ns",
            "range": "± 88771.81924225605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8415297.55,
            "unit": "ns",
            "range": "± 189759.17066070737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3801135.717247596,
            "unit": "ns",
            "range": "± 7817.2267970793555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203605.8143229166,
            "unit": "ns",
            "range": "± 3025.334512408434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 795694.9357722356,
            "unit": "ns",
            "range": "± 847.8377773628707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952130.383984375,
            "unit": "ns",
            "range": "± 3704.7028466203783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623815.1162109375,
            "unit": "ns",
            "range": "± 654.3109510555576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583968.3946814904,
            "unit": "ns",
            "range": "± 414.2124768503587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424152.0967741935,
            "unit": "ns",
            "range": "± 63639.65508410346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554631.777777778,
            "unit": "ns",
            "range": "± 53770.87382540582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065964.3571428573,
            "unit": "ns",
            "range": "± 35344.4969029717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572346.527777778,
            "unit": "ns",
            "range": "± 74666.61205365244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3255041.095238095,
            "unit": "ns",
            "range": "± 75479.00224095756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31967.25,
            "unit": "ns",
            "range": "± 462.6888066705113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10471026.4,
            "unit": "ns",
            "range": "± 91032.01890841956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27149157.35714286,
            "unit": "ns",
            "range": "± 168996.91725572853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69945240.85714285,
            "unit": "ns",
            "range": "± 270338.7124677989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139728907.73333332,
            "unit": "ns",
            "range": "± 628271.4863493632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284254123.6,
            "unit": "ns",
            "range": "± 633719.9800188679"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eee04f556662285122b7817386ed2c07488c1b9e",
          "message": "Merge pull request #3893 from planetarium/prepare/5.2.1\n\n🔧 Prepare 5.2.1",
          "timestamp": "2024-07-23T22:39:17+09:00",
          "tree_id": "6169e6940dd919f784390a0d283f591f1994f863",
          "url": "https://github.com/planetarium/libplanet/commit/eee04f556662285122b7817386ed2c07488c1b9e"
        },
        "date": 1721742498490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199391.38775510204,
            "unit": "ns",
            "range": "± 7623.423112400379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195655.6181818182,
            "unit": "ns",
            "range": "± 8348.470810276194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166588.93333333332,
            "unit": "ns",
            "range": "± 3052.2861096624115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106012.0625,
            "unit": "ns",
            "range": "± 56758.30961420979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788519.4285714286,
            "unit": "ns",
            "range": "± 21348.179071020357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12738.829545454546,
            "unit": "ns",
            "range": "± 783.0490688165742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60897.25274725275,
            "unit": "ns",
            "range": "± 4536.696398612851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51695.192307692305,
            "unit": "ns",
            "range": "± 736.0196311484481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60510.142857142855,
            "unit": "ns",
            "range": "± 11410.193124308662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2750.5208333333335,
            "unit": "ns",
            "range": "± 332.38344943173746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12735.10752688172,
            "unit": "ns",
            "range": "± 1250.248857509416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012983.2380952381,
            "unit": "ns",
            "range": "± 46380.407271826116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1940184.9054054054,
            "unit": "ns",
            "range": "± 65777.46924308904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707827.7716049382,
            "unit": "ns",
            "range": "± 89689.67690403566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8248693.647058823,
            "unit": "ns",
            "range": "± 134132.56925516875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3791494.11328125,
            "unit": "ns",
            "range": "± 5034.692722164829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210798.5751302084,
            "unit": "ns",
            "range": "± 2953.444142927566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770587.5979352678,
            "unit": "ns",
            "range": "± 1556.9143269099004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953630.502232143,
            "unit": "ns",
            "range": "± 1711.8891453176666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607631.3124302456,
            "unit": "ns",
            "range": "± 1220.6017623043156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572466.8407451923,
            "unit": "ns",
            "range": "± 381.7118359517624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480224.466666667,
            "unit": "ns",
            "range": "± 45900.38982540137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567985.125,
            "unit": "ns",
            "range": "± 40297.66779666039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3027096.785714286,
            "unit": "ns",
            "range": "± 38221.009681906566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2626863.6428571427,
            "unit": "ns",
            "range": "± 32239.140470640876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3230787,
            "unit": "ns",
            "range": "± 36479.50490148054"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31649,
            "unit": "ns",
            "range": "± 607.5158891383463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10618537.666666666,
            "unit": "ns",
            "range": "± 121960.71430216878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27343192.666666668,
            "unit": "ns",
            "range": "± 133207.70675080898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69147902.34615384,
            "unit": "ns",
            "range": "± 428260.82582577446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140373639.76666668,
            "unit": "ns",
            "range": "± 2475076.323836138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288643083.9285714,
            "unit": "ns",
            "range": "± 1368558.461537117"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8c20cbfc3a194f770ed2a5f165acf4a17aeb38d",
          "message": "Merge pull request #3902 from planetarium/port/5.1.3-to-5.2.1\n\n🔀 Port 5.1.3 to 5.2.1",
          "timestamp": "2024-07-31T09:24:23+09:00",
          "tree_id": "f1286f61ec1d31e86157086eb19a9aa7d15be065",
          "url": "https://github.com/planetarium/libplanet/commit/c8c20cbfc3a194f770ed2a5f165acf4a17aeb38d"
        },
        "date": 1722385967945,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021819.9078947369,
            "unit": "ns",
            "range": "± 51596.11802353032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1936422.880952381,
            "unit": "ns",
            "range": "± 45908.83990309077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1706035.256097561,
            "unit": "ns",
            "range": "± 87664.47586303709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8318688.869565218,
            "unit": "ns",
            "range": "± 210415.18904608669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201501.8805970149,
            "unit": "ns",
            "range": "± 8223.208263022532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197814.16666666666,
            "unit": "ns",
            "range": "± 7456.211824561268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166630.625,
            "unit": "ns",
            "range": "± 4260.387141140029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3022833.3,
            "unit": "ns",
            "range": "± 24280.059908728163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2716542.388888889,
            "unit": "ns",
            "range": "± 48627.98157577576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17375.54,
            "unit": "ns",
            "range": "± 4091.3217417288797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65450.95652173913,
            "unit": "ns",
            "range": "± 5884.940002519456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54212.7705882353,
            "unit": "ns",
            "range": "± 2934.628748273975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62735.64367816092,
            "unit": "ns",
            "range": "± 5373.383302514762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3836.0416666666665,
            "unit": "ns",
            "range": "± 506.58486932059225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18647.742105263158,
            "unit": "ns",
            "range": "± 2876.9708497912716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32406.666666666668,
            "unit": "ns",
            "range": "± 366.92051818706824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10499221.384615384,
            "unit": "ns",
            "range": "± 134350.88095700406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27552834.285714287,
            "unit": "ns",
            "range": "± 183925.49610902386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70056968.26666667,
            "unit": "ns",
            "range": "± 592927.8593927483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138926902.46153846,
            "unit": "ns",
            "range": "± 632103.5566605648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287468425.53333336,
            "unit": "ns",
            "range": "± 810375.0055491829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733765.439753606,
            "unit": "ns",
            "range": "± 8368.560481773153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205868.1522135416,
            "unit": "ns",
            "range": "± 1617.4806559305691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768196.3608723958,
            "unit": "ns",
            "range": "± 954.6837295926465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964653.3819110577,
            "unit": "ns",
            "range": "± 2444.3310791845997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629343.5010416667,
            "unit": "ns",
            "range": "± 930.4454229374213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574559.5841796875,
            "unit": "ns",
            "range": "± 949.2635949882753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2402491.1,
            "unit": "ns",
            "range": "± 43377.12646380743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2508543.966666667,
            "unit": "ns",
            "range": "± 45845.80542094596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3090793.1904761903,
            "unit": "ns",
            "range": "± 72393.33761377427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2680476.1428571427,
            "unit": "ns",
            "range": "± 37797.78000981446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3291133.3571428573,
            "unit": "ns",
            "range": "± 53990.96071616938"
          }
        ]
      }
    ]
  }
}