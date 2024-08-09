window.BENCHMARK_DATA = {
  "lastUpdate": 1723191096559,
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
          "id": "ab547a08597479dcbda1af84a588c5214396f320",
          "message": "Merge pull request #3907 from planetarium/release/5.2.1\n\n🚀 Release 5.2.1",
          "timestamp": "2024-07-31T11:06:51+09:00",
          "tree_id": "26877b6a16528547babb7bfadd8a08aca9060b6f",
          "url": "https://github.com/planetarium/libplanet/commit/ab547a08597479dcbda1af84a588c5214396f320"
        },
        "date": 1722392275338,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1137548.1505376345,
            "unit": "ns",
            "range": "± 105172.0646201041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2201342.1,
            "unit": "ns",
            "range": "± 115079.42256992712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1907699.6022727273,
            "unit": "ns",
            "range": "± 111823.33621479826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8744167.722222222,
            "unit": "ns",
            "range": "± 292190.2354109744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225832.47872340426,
            "unit": "ns",
            "range": "± 13922.923653796097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210012.74444444446,
            "unit": "ns",
            "range": "± 13017.511057224756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189340.5606060606,
            "unit": "ns",
            "range": "± 14086.152517681734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3175554.714285714,
            "unit": "ns",
            "range": "± 55778.98456777506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2871427.3571428573,
            "unit": "ns",
            "range": "± 49739.815943501504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20348.427083333332,
            "unit": "ns",
            "range": "± 4488.174402617549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81040.14432989691,
            "unit": "ns",
            "range": "± 11484.05339934258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61939.041666666664,
            "unit": "ns",
            "range": "± 6895.27969421136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72707.83695652174,
            "unit": "ns",
            "range": "± 11674.90385331347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3458.7315789473682,
            "unit": "ns",
            "range": "± 623.6215343789031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23410.063829787236,
            "unit": "ns",
            "range": "± 2450.970221797893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46110.59595959596,
            "unit": "ns",
            "range": "± 8359.542013281603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11491120.166666666,
            "unit": "ns",
            "range": "± 235485.10037542402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28029754.14285714,
            "unit": "ns",
            "range": "± 296861.2892510982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71333416.33333333,
            "unit": "ns",
            "range": "± 316560.8526010681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144850566.7857143,
            "unit": "ns",
            "range": "± 1942414.3074108108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297525269.4285714,
            "unit": "ns",
            "range": "± 3687345.7039528806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754789.91953125,
            "unit": "ns",
            "range": "± 25651.804069014655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205487.1901041667,
            "unit": "ns",
            "range": "± 3506.2504136038233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783506.0350864956,
            "unit": "ns",
            "range": "± 1973.429684203459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957064.9182291667,
            "unit": "ns",
            "range": "± 8955.687245667235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635097.4401041666,
            "unit": "ns",
            "range": "± 1383.20314702041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576493.2850911458,
            "unit": "ns",
            "range": "± 983.7471957037072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2599022.911764706,
            "unit": "ns",
            "range": "± 49196.10826968281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2631502.772727273,
            "unit": "ns",
            "range": "± 97693.54687773291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3269815.6315789474,
            "unit": "ns",
            "range": "± 62099.289512137584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2668699.5,
            "unit": "ns",
            "range": "± 48919.124268591346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3417208.8571428573,
            "unit": "ns",
            "range": "± 38368.06649286747"
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
          "id": "b27574e7edd909fbfac6564824fbe44f81e9d9cb",
          "message": "Merge pull request #3908 from planetarium/prepare/5.2.2\n\n🔧 Prepare 5.2.2",
          "timestamp": "2024-08-01T10:07:27+09:00",
          "tree_id": "9dc41c3f7dd933b72c67220cb777d849f7964635",
          "url": "https://github.com/planetarium/libplanet/commit/b27574e7edd909fbfac6564824fbe44f81e9d9cb"
        },
        "date": 1722475028239,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1020027.8513513514,
            "unit": "ns",
            "range": "± 51189.02817336705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1937946.5,
            "unit": "ns",
            "range": "± 63036.39147531029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1718810.4666666666,
            "unit": "ns",
            "range": "± 86434.04207651454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8271780.456521739,
            "unit": "ns",
            "range": "± 207174.5727736697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200257.55319148937,
            "unit": "ns",
            "range": "± 7377.501992127707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193592.52173913043,
            "unit": "ns",
            "range": "± 7420.716837158975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163022.07142857142,
            "unit": "ns",
            "range": "± 1993.847786192691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3182627,
            "unit": "ns",
            "range": "± 28842.58904566549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2823008.875,
            "unit": "ns",
            "range": "± 53160.961486006505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13479.913978494624,
            "unit": "ns",
            "range": "± 1664.497382394496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59554.29746835443,
            "unit": "ns",
            "range": "± 3022.794595003645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49855,
            "unit": "ns",
            "range": "± 351.33498648337417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64309.510204081635,
            "unit": "ns",
            "range": "± 17401.877445516067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3472.463917525773,
            "unit": "ns",
            "range": "± 844.9118428108303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11977.395604395604,
            "unit": "ns",
            "range": "± 735.0206630371524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31467.846153846152,
            "unit": "ns",
            "range": "± 242.7553110142825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10344572.566666666,
            "unit": "ns",
            "range": "± 70698.9565850128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26884014.7,
            "unit": "ns",
            "range": "± 125348.84248607962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68977882.93333334,
            "unit": "ns",
            "range": "± 283344.33515763783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140052947.36666667,
            "unit": "ns",
            "range": "± 444994.4785827391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287459905.9285714,
            "unit": "ns",
            "range": "± 649825.5912173623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3727137.783954327,
            "unit": "ns",
            "range": "± 5862.485224487378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218916.7200520833,
            "unit": "ns",
            "range": "± 2524.185208599985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775679.8137019231,
            "unit": "ns",
            "range": "± 1661.353550457806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923625.5482700893,
            "unit": "ns",
            "range": "± 837.3141499292018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621196.8522135416,
            "unit": "ns",
            "range": "± 362.7141114330572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584043.2831380208,
            "unit": "ns",
            "range": "± 672.9904941332526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393201.933333333,
            "unit": "ns",
            "range": "± 36489.80122967173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551971.9,
            "unit": "ns",
            "range": "± 42694.35359589636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3022315.5714285714,
            "unit": "ns",
            "range": "± 24990.162060342824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2515475,
            "unit": "ns",
            "range": "± 33561.682929747774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3213414,
            "unit": "ns",
            "range": "± 39691.8231395694"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2975b6df880c9e76543eab856d43f3d44444cdc",
          "message": "Merge pull request #3897 from planetarium/fix/explorer/blockQuery\n\n🔧  fix: use cache instead of get block from store",
          "timestamp": "2024-08-08T21:29:04+09:00",
          "tree_id": "f681f5862dae3e359abfe88dfd9c1121f6ec910b",
          "url": "https://github.com/planetarium/libplanet/commit/a2975b6df880c9e76543eab856d43f3d44444cdc"
        },
        "date": 1723120705389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32019.35714285714,
            "unit": "ns",
            "range": "± 304.9922715648475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3811291.618582589,
            "unit": "ns",
            "range": "± 7792.750571770174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1225422.811748798,
            "unit": "ns",
            "range": "± 2472.4966755714527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773490.9874348958,
            "unit": "ns",
            "range": "± 1701.7800478201113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927329.6665736607,
            "unit": "ns",
            "range": "± 2601.5545852261916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622478.4865885417,
            "unit": "ns",
            "range": "± 647.6738095133549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568373.6602213542,
            "unit": "ns",
            "range": "± 858.1562264844811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397970.0555555555,
            "unit": "ns",
            "range": "± 49653.94713233039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2544824.6333333333,
            "unit": "ns",
            "range": "± 45251.59024966758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3055079.5,
            "unit": "ns",
            "range": "± 33665.83625130972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2548689.7,
            "unit": "ns",
            "range": "± 25483.864982712937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3238933.8333333335,
            "unit": "ns",
            "range": "± 55026.11354317754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199232,
            "unit": "ns",
            "range": "± 6331.406133836223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196736.94594594595,
            "unit": "ns",
            "range": "± 6685.360789507615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164555.6923076923,
            "unit": "ns",
            "range": "± 1754.5996877073026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3023518,
            "unit": "ns",
            "range": "± 31127.040232791907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2770228.3333333335,
            "unit": "ns",
            "range": "± 38840.4669433949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12747,
            "unit": "ns",
            "range": "± 694.3402553819723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64588.90909090909,
            "unit": "ns",
            "range": "± 4973.163652660246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56794.30808080808,
            "unit": "ns",
            "range": "± 5363.976954547215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50792.20618556701,
            "unit": "ns",
            "range": "± 7564.66855676515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3069.716494845361,
            "unit": "ns",
            "range": "± 594.3047798829758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12092.711111111112,
            "unit": "ns",
            "range": "± 688.2184008662413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026503.9444444445,
            "unit": "ns",
            "range": "± 50098.92217442531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916315.6451612904,
            "unit": "ns",
            "range": "± 57423.04196142195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1724091.4692307692,
            "unit": "ns",
            "range": "± 80321.21180064479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8403887.076923076,
            "unit": "ns",
            "range": "± 287520.5564572626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10304901.633333333,
            "unit": "ns",
            "range": "± 64639.383159701225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27295986.066666666,
            "unit": "ns",
            "range": "± 140490.7101216847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68082816.6,
            "unit": "ns",
            "range": "± 265673.7775309089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137452682.53333333,
            "unit": "ns",
            "range": "± 623341.9139603042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283794176.1333333,
            "unit": "ns",
            "range": "± 397104.5345583932"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94fd763206ee1211320be311b42c53a4a7a95895",
          "message": "Merge pull request #3914 from riemannulus/5.2-maintenance\n\n🚀  Release 5.2.2",
          "timestamp": "2024-08-08T21:33:26+09:00",
          "tree_id": "94b66acc3ef27a3441fca23afd7882df4aa7eb58",
          "url": "https://github.com/planetarium/libplanet/commit/94fd763206ee1211320be311b42c53a4a7a95895"
        },
        "date": 1723121107816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46552.34848484849,
            "unit": "ns",
            "range": "± 7395.492652883222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3711086.9934895835,
            "unit": "ns",
            "range": "± 2915.4167648313364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207716.8236979167,
            "unit": "ns",
            "range": "± 2411.516275237516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771919.1658203125,
            "unit": "ns",
            "range": "± 1486.5605288945976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934850.3041294643,
            "unit": "ns",
            "range": "± 1408.116561542596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617313.2956194197,
            "unit": "ns",
            "range": "± 565.7762570993248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580345.9728515625,
            "unit": "ns",
            "range": "± 1059.264774350099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2603825,
            "unit": "ns",
            "range": "± 69217.32360110436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2727909.966666667,
            "unit": "ns",
            "range": "± 40395.457394660225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3243839.4615384615,
            "unit": "ns",
            "range": "± 76794.41591950851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2789279.193548387,
            "unit": "ns",
            "range": "± 83170.31932262829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3435001.4,
            "unit": "ns",
            "range": "± 63300.81942575016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248139.16,
            "unit": "ns",
            "range": "± 16747.5575847629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230830.14772727274,
            "unit": "ns",
            "range": "± 12707.173566863148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182962.01515151514,
            "unit": "ns",
            "range": "± 11827.094909884723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3151911.3,
            "unit": "ns",
            "range": "± 39025.360211021754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929461.411764706,
            "unit": "ns",
            "range": "± 57256.88655639908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22160.515151515152,
            "unit": "ns",
            "range": "± 3064.2750061872052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100057.25268817204,
            "unit": "ns",
            "range": "± 6922.339860530814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59927.10638297872,
            "unit": "ns",
            "range": "± 6138.619028735927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70692.26804123711,
            "unit": "ns",
            "range": "± 12558.717751124335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4397.010416666667,
            "unit": "ns",
            "range": "± 608.6068040990128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19339.76,
            "unit": "ns",
            "range": "± 4494.885461895058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050657.5617977527,
            "unit": "ns",
            "range": "± 68925.56562285722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2065314.290909091,
            "unit": "ns",
            "range": "± 86486.38259750893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1858184.4133333333,
            "unit": "ns",
            "range": "± 80247.10036389685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8708767.78125,
            "unit": "ns",
            "range": "± 269846.192091303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11229983.133333333,
            "unit": "ns",
            "range": "± 107506.15930452321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27725337.066666666,
            "unit": "ns",
            "range": "± 216594.08877980115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72140497.66666667,
            "unit": "ns",
            "range": "± 407343.9102200755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141893336.13333333,
            "unit": "ns",
            "range": "± 1048193.2449233005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294994342.8,
            "unit": "ns",
            "range": "± 1294917.9381607934"
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
          "id": "e4207c1f5ac1c7603212c8f1355ad638cc51eef9",
          "message": "Merge pull request #3916 from riemannulus/5.2-maintenance\n\n🔧 Prepare 5.2.3",
          "timestamp": "2024-08-09T17:02:34+09:00",
          "tree_id": "44b65e526ceb33f5c4027adc72af72e019e885a5",
          "url": "https://github.com/planetarium/libplanet/commit/e4207c1f5ac1c7603212c8f1355ad638cc51eef9"
        },
        "date": 1723191070311,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203182.5,
            "unit": "ns",
            "range": "± 6479.5023669319635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190170.11764705883,
            "unit": "ns",
            "range": "± 6583.740798807495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163083.83333333334,
            "unit": "ns",
            "range": "± 3407.97349219876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3024125.7333333334,
            "unit": "ns",
            "range": "± 37088.18934159627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2843833.533333333,
            "unit": "ns",
            "range": "± 44549.961284040684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13034.801369863013,
            "unit": "ns",
            "range": "± 656.2398292319049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60131.29230769231,
            "unit": "ns",
            "range": "± 2792.6863563773422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49170.46153846154,
            "unit": "ns",
            "range": "± 543.5978316403613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55843.87362637363,
            "unit": "ns",
            "range": "± 5417.739259236687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3092.3979591836733,
            "unit": "ns",
            "range": "± 587.6083929803478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11989.638888888889,
            "unit": "ns",
            "range": "± 600.5779916881373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2391560.3125,
            "unit": "ns",
            "range": "± 37760.440929132434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2456496.794117647,
            "unit": "ns",
            "range": "± 47488.5669487466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3070285.0476190476,
            "unit": "ns",
            "range": "± 71438.42268448835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2551397.8125,
            "unit": "ns",
            "range": "± 46692.25149810727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3238887.6,
            "unit": "ns",
            "range": "± 73668.88127746806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10268883.166666666,
            "unit": "ns",
            "range": "± 29767.19290874883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26906322,
            "unit": "ns",
            "range": "± 128276.3583384383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69119518.93333334,
            "unit": "ns",
            "range": "± 307519.9148172513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138618566.73076922,
            "unit": "ns",
            "range": "± 608193.95912326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 281708253.56666666,
            "unit": "ns",
            "range": "± 483818.46383202553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015460.7692307692,
            "unit": "ns",
            "range": "± 51950.78453732394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929878.3421052631,
            "unit": "ns",
            "range": "± 61849.55765066152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1675652.652173913,
            "unit": "ns",
            "range": "± 80092.18245335773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8122049.076923077,
            "unit": "ns",
            "range": "± 218310.33506678938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750699.295673077,
            "unit": "ns",
            "range": "± 2270.58131614859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197277.449969952,
            "unit": "ns",
            "range": "± 1043.1221021930169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762443.5513822115,
            "unit": "ns",
            "range": "± 997.633239399757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942844.93046875,
            "unit": "ns",
            "range": "± 2105.429212634165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619758.8801618303,
            "unit": "ns",
            "range": "± 833.1491192636854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576003.3208984375,
            "unit": "ns",
            "range": "± 796.0516237938308"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32050.85714285714,
            "unit": "ns",
            "range": "± 466.2054032526629"
          }
        ]
      }
    ]
  }
}