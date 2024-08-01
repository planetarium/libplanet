window.BENCHMARK_DATA = {
  "lastUpdate": 1722475054910,
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
      }
    ]
  }
}