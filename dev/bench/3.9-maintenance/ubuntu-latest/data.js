window.BENCHMARK_DATA = {
  "lastUpdate": 1701065730763,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "115a4231a838e45a141426ede38a5d933c9a432c",
          "message": "Merge pull request #3515 from greymistcube/release/3.8.0\n\n🚀 Release 3.8.0",
          "timestamp": "2023-11-24T11:30:13+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/planetarium/libplanet/commit/115a4231a838e45a141426ede38a5d933c9a432c"
        },
        "date": 1700793855505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197676.01492537314,
            "unit": "ns",
            "range": "± 9336.553892667409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194098.13043478262,
            "unit": "ns",
            "range": "± 9269.416332461355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167295.44827586206,
            "unit": "ns",
            "range": "± 4852.853310801557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3118807.3571428573,
            "unit": "ns",
            "range": "± 54460.56502094978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2857029.7666666666,
            "unit": "ns",
            "range": "± 40997.48906329799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15314.142857142857,
            "unit": "ns",
            "range": "± 3140.61413982325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65593.45918367348,
            "unit": "ns",
            "range": "± 8130.929323787039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73075.81313131313,
            "unit": "ns",
            "range": "± 19076.10603455969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96815.71134020618,
            "unit": "ns",
            "range": "± 17447.789906579597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3741.3295454545455,
            "unit": "ns",
            "range": "± 893.7323356870694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12916.185567010309,
            "unit": "ns",
            "range": "± 2223.1817867355903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3668796.9954927885,
            "unit": "ns",
            "range": "± 10024.313522491615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196393.8860212055,
            "unit": "ns",
            "range": "± 3124.8545575123353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772621.5443359375,
            "unit": "ns",
            "range": "± 12057.499941647571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963817.6298828125,
            "unit": "ns",
            "range": "± 3226.7633891915266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624429.6995192308,
            "unit": "ns",
            "range": "± 2709.350536572185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579265.0088588169,
            "unit": "ns",
            "range": "± 1515.7497335786845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40501.5206185567,
            "unit": "ns",
            "range": "± 4854.650427209334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2404144.8571428573,
            "unit": "ns",
            "range": "± 66602.91420424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554803.263157895,
            "unit": "ns",
            "range": "± 86231.87091747968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3153146.75,
            "unit": "ns",
            "range": "± 80351.250276385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2950945.15942029,
            "unit": "ns",
            "range": "± 107242.84734583402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6544769.5,
            "unit": "ns",
            "range": "± 120595.68096023654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5677798.142857143,
            "unit": "ns",
            "range": "± 24012.184986464184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14412477.888888888,
            "unit": "ns",
            "range": "± 305458.0243325806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36555060.428571425,
            "unit": "ns",
            "range": "± 481430.7980764556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74728933.71428572,
            "unit": "ns",
            "range": "± 600214.9512638629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150159080.15384614,
            "unit": "ns",
            "range": "± 2089475.3262525357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961059.7173913043,
            "unit": "ns",
            "range": "± 81938.36285842703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1881202.5862068965,
            "unit": "ns",
            "range": "± 81802.48841629269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1408875.9646464647,
            "unit": "ns",
            "range": "± 144392.43307384907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5805437.206185567,
            "unit": "ns",
            "range": "± 384238.3395802591"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca5f07bd78696bd410b3135c9c5f55a7c6722619",
          "message": "Merge pull request #3517 from greymistcube/prepare/3.9.0\n\n🔧 Prepare 3.9.0",
          "timestamp": "2023-11-24T13:03:38+09:00",
          "tree_id": "523cbc8c13e1d1c7c7efc4a98ee9d3ab351bdcda",
          "url": "https://github.com/planetarium/libplanet/commit/ca5f07bd78696bd410b3135c9c5f55a7c6722619"
        },
        "date": 1700799260726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210105.32941176472,
            "unit": "ns",
            "range": "± 11287.837967717032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200326.54444444444,
            "unit": "ns",
            "range": "± 13646.346803532151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171176,
            "unit": "ns",
            "range": "± 1937.8594720292112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099020.3333333335,
            "unit": "ns",
            "range": "± 20777.8418834424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2861482.714285714,
            "unit": "ns",
            "range": "± 32109.70001639469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16448.117021276597,
            "unit": "ns",
            "range": "± 2873.7925593770365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64284.54639175258,
            "unit": "ns",
            "range": "± 7861.960054354314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78567.04,
            "unit": "ns",
            "range": "± 16434.059246011446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80087.89690721649,
            "unit": "ns",
            "range": "± 16214.348338151858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6002.777777777777,
            "unit": "ns",
            "range": "± 2243.807535470863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16122.945054945056,
            "unit": "ns",
            "range": "± 1552.4846563037613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3810014.1205729167,
            "unit": "ns",
            "range": "± 55843.67726851043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1246645.6905381945,
            "unit": "ns",
            "range": "± 26554.743167884193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767718.7912248884,
            "unit": "ns",
            "range": "± 2293.5861064323785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949919.9606119792,
            "unit": "ns",
            "range": "± 7507.708358360511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609494.9815266927,
            "unit": "ns",
            "range": "± 1082.1197145653737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571348.3033040365,
            "unit": "ns",
            "range": "± 812.6773384183106"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40721.45360824742,
            "unit": "ns",
            "range": "± 5745.4029069273765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2445037.4655172415,
            "unit": "ns",
            "range": "± 106856.60031202753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2632905.6041666665,
            "unit": "ns",
            "range": "± 101456.31383732117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3186467.789473684,
            "unit": "ns",
            "range": "± 70673.5339230708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2950361.125,
            "unit": "ns",
            "range": "± 115976.18529674117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6601277.090909091,
            "unit": "ns",
            "range": "± 158208.38977539932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5699982.571428572,
            "unit": "ns",
            "range": "± 67453.21161050397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14846314.5,
            "unit": "ns",
            "range": "± 111023.77791595263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36441676.75,
            "unit": "ns",
            "range": "± 236907.98941020618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75368439.92857143,
            "unit": "ns",
            "range": "± 496877.618532814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152412038.6153846,
            "unit": "ns",
            "range": "± 561983.1740957699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967337.2903225806,
            "unit": "ns",
            "range": "± 85670.59482839928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1896879.857142857,
            "unit": "ns",
            "range": "± 91110.6155854306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1410916.87,
            "unit": "ns",
            "range": "± 110298.54010752642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5558642.408163265,
            "unit": "ns",
            "range": "± 220928.53176658342"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99b9e98b2b48adb520cdbc522f1d6cfe221c7fd1",
          "message": "Merge pull request #3523 from greymistcube/refactor/fix-random-seed-generation\n\n♻️ Refactor random seed generation",
          "timestamp": "2023-11-27T15:03:58+09:00",
          "tree_id": "f8b7d238cc9a39cea5dff593eae21973aea26ca1",
          "url": "https://github.com/planetarium/libplanet/commit/99b9e98b2b48adb520cdbc522f1d6cfe221c7fd1"
        },
        "date": 1701065706409,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211392.21505376344,
            "unit": "ns",
            "range": "± 15858.218951786937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197843.88709677418,
            "unit": "ns",
            "range": "± 8471.307335391064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166516.9411764706,
            "unit": "ns",
            "range": "± 3389.025274149417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3143592.1,
            "unit": "ns",
            "range": "± 24954.94745622313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817338.785714286,
            "unit": "ns",
            "range": "± 24374.121403269466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16785.484210526316,
            "unit": "ns",
            "range": "± 2421.897945137848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71732.79545454546,
            "unit": "ns",
            "range": "± 4935.381076621476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60163.59195402299,
            "unit": "ns",
            "range": "± 6076.297692066192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72470.81914893616,
            "unit": "ns",
            "range": "± 16856.64404664607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3330.5842696629215,
            "unit": "ns",
            "range": "± 681.61822507159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16191.354166666666,
            "unit": "ns",
            "range": "± 1308.8372338929548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3855232.124540441,
            "unit": "ns",
            "range": "± 77312.3160530378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236386.4914679276,
            "unit": "ns",
            "range": "± 23172.802918004203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 784469.86171875,
            "unit": "ns",
            "range": "± 13645.343583926644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944265.2975260417,
            "unit": "ns",
            "range": "± 7052.502856660864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623748.3528878348,
            "unit": "ns",
            "range": "± 2359.697708733696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589471.8015407986,
            "unit": "ns",
            "range": "± 12528.137880995768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41289.072916666664,
            "unit": "ns",
            "range": "± 5156.675745283546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454778.6666666665,
            "unit": "ns",
            "range": "± 96613.23238790697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562764.772727273,
            "unit": "ns",
            "range": "± 91861.04826005154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3212943.111111111,
            "unit": "ns",
            "range": "± 67539.39461410553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3060875.475,
            "unit": "ns",
            "range": "± 105482.58090368251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6627837.28,
            "unit": "ns",
            "range": "± 173525.8663983365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694053.166666667,
            "unit": "ns",
            "range": "± 54580.18061225765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14707387.916666666,
            "unit": "ns",
            "range": "± 89091.88677831274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37811664.21428572,
            "unit": "ns",
            "range": "± 235403.60048621523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76749744.28571428,
            "unit": "ns",
            "range": "± 287891.6139747544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149299533.5,
            "unit": "ns",
            "range": "± 1108703.6294662582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 988330.7628865979,
            "unit": "ns",
            "range": "± 85128.75074479992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911773.189189189,
            "unit": "ns",
            "range": "± 94541.53268170652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1433453.242105263,
            "unit": "ns",
            "range": "± 117569.14345606996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5573155.290909091,
            "unit": "ns",
            "range": "± 234979.62448284533"
          }
        ]
      }
    ]
  }
}