window.BENCHMARK_DATA = {
  "lastUpdate": 1703664847375,
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
          "id": "f9e49c31a71c533d96c233dc34b6d9d73b8d9f93",
          "message": "Merge pull request #3526 from OnedgeLee/port/3.8.1-to-3.9.0\n\n🔀 Port 3.8.1 to 3.9.0",
          "timestamp": "2023-11-27T15:18:56+09:00",
          "tree_id": "32706cbfdb86b43bfbbc5bdf131a3105cb792706",
          "url": "https://github.com/planetarium/libplanet/commit/f9e49c31a71c533d96c233dc34b6d9d73b8d9f93"
        },
        "date": 1701066591975,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203398.68,
            "unit": "ns",
            "range": "± 7542.417715663262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194396.91818181818,
            "unit": "ns",
            "range": "± 8230.54183602016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170672.1851851852,
            "unit": "ns",
            "range": "± 4773.5127690931295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106064,
            "unit": "ns",
            "range": "± 34995.26237605929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2818141.2333333334,
            "unit": "ns",
            "range": "± 27571.047377552382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13148.056179775282,
            "unit": "ns",
            "range": "± 1481.8825968675374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80448.71,
            "unit": "ns",
            "range": "± 13257.011333664504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86855.5625,
            "unit": "ns",
            "range": "± 1643.089365342007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89281.27551020408,
            "unit": "ns",
            "range": "± 15012.465186122787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5915.427083333333,
            "unit": "ns",
            "range": "± 1515.6620873559664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12399.797872340425,
            "unit": "ns",
            "range": "± 1362.750821974114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3799414.8015625,
            "unit": "ns",
            "range": "± 57475.4235658856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1231946.8286389802,
            "unit": "ns",
            "range": "± 26869.97266715824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770626.7516276041,
            "unit": "ns",
            "range": "± 2827.6027328519244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955620.41171875,
            "unit": "ns",
            "range": "± 21931.23410007959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627052.888671875,
            "unit": "ns",
            "range": "± 662.7889526442049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568924.9133864183,
            "unit": "ns",
            "range": "± 7255.364126453769"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41398.60638297872,
            "unit": "ns",
            "range": "± 5936.595866134758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2402034.4615384615,
            "unit": "ns",
            "range": "± 64732.786533706865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593769.3333333335,
            "unit": "ns",
            "range": "± 93305.43701870771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3242545.470588235,
            "unit": "ns",
            "range": "± 66459.40032843138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3015235.117647059,
            "unit": "ns",
            "range": "± 114216.80799718523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6586840.928571428,
            "unit": "ns",
            "range": "± 169833.0252209458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5642137.666666667,
            "unit": "ns",
            "range": "± 67442.64377408478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14476373.357142856,
            "unit": "ns",
            "range": "± 118177.42421581931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36942417.75,
            "unit": "ns",
            "range": "± 135746.2392796507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74801649,
            "unit": "ns",
            "range": "± 448273.13913338596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153120729,
            "unit": "ns",
            "range": "± 638626.0292637364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005029.3571428572,
            "unit": "ns",
            "range": "± 93887.63690896964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1974206.6818181819,
            "unit": "ns",
            "range": "± 73934.3001988685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1536421.3,
            "unit": "ns",
            "range": "± 201198.28345016495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5634115.083333333,
            "unit": "ns",
            "range": "± 249401.13390784408"
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
          "id": "7e1213d127652079d0c45c22999b238d81fe7000",
          "message": "Merge pull request #3529 from greymistcube/refactor/tx-spec\n\n♻️ Update `TxInvoice` specification",
          "timestamp": "2023-11-28T16:34:22+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/planetarium/libplanet/commit/7e1213d127652079d0c45c22999b238d81fe7000"
        },
        "date": 1701157525576,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214677.8510638298,
            "unit": "ns",
            "range": "± 16771.456463037368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199241.86842105264,
            "unit": "ns",
            "range": "± 10094.732809199202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171723.98484848486,
            "unit": "ns",
            "range": "± 5188.215842905513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3143038.5384615385,
            "unit": "ns",
            "range": "± 32766.690679752264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2932438.8571428573,
            "unit": "ns",
            "range": "± 37052.814759905465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22593.88775510204,
            "unit": "ns",
            "range": "± 3815.9547119377426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102271.9052631579,
            "unit": "ns",
            "range": "± 11438.045638256755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104267.47619047618,
            "unit": "ns",
            "range": "± 5603.470035001635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98232.34536082474,
            "unit": "ns",
            "range": "± 13480.73509165039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7120.714285714285,
            "unit": "ns",
            "range": "± 954.9293734341942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19508.25773195876,
            "unit": "ns",
            "range": "± 4737.347779608927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3779691.2447916665,
            "unit": "ns",
            "range": "± 64569.783991116165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1245672.9041466345,
            "unit": "ns",
            "range": "± 5757.152443983452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770007.0602463942,
            "unit": "ns",
            "range": "± 2288.6838621678853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943187.7005709135,
            "unit": "ns",
            "range": "± 2281.813824181756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616140.7942457933,
            "unit": "ns",
            "range": "± 1360.1091165810014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584233.9693509615,
            "unit": "ns",
            "range": "± 1092.565144134504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42195.42105263158,
            "unit": "ns",
            "range": "± 5576.984414650466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2515876.470588235,
            "unit": "ns",
            "range": "± 48844.689267511014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589280.4411764704,
            "unit": "ns",
            "range": "± 69037.52787069099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3278573.8695652173,
            "unit": "ns",
            "range": "± 82648.81139127958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3080268.1578947366,
            "unit": "ns",
            "range": "± 104462.31280344441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6701374.74137931,
            "unit": "ns",
            "range": "± 136722.10528128507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5773637.583333333,
            "unit": "ns",
            "range": "± 33488.38110709807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14689821.642857144,
            "unit": "ns",
            "range": "± 104417.36265130884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37068911.916666664,
            "unit": "ns",
            "range": "± 304936.07732842467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75092021.83333333,
            "unit": "ns",
            "range": "± 393502.980234978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153168635.23333332,
            "unit": "ns",
            "range": "± 845797.3618447242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030420.3263157895,
            "unit": "ns",
            "range": "± 112982.10377184315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2026285.8103448276,
            "unit": "ns",
            "range": "± 88414.1666846572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538932.7653061224,
            "unit": "ns",
            "range": "± 152113.53064807452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5730561.724137931,
            "unit": "ns",
            "range": "± 250749.0142869008"
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
          "id": "e5fd96be3cfdbd103299de4bd8efc907cd56d227",
          "message": "Merge pull request #3530 from greymistcube/refactor/context-scoping\n\n♻️ `ActionEvaluator` context scoping",
          "timestamp": "2023-11-29T16:48:16+09:00",
          "tree_id": "4a3d52b03284e22bc5bfc9961f5c6a72e8f83202",
          "url": "https://github.com/planetarium/libplanet/commit/e5fd96be3cfdbd103299de4bd8efc907cd56d227"
        },
        "date": 1701244751016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197407.9090909091,
            "unit": "ns",
            "range": "± 6146.904771730831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190724.64102564103,
            "unit": "ns",
            "range": "± 6661.553373007718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160540.46153846153,
            "unit": "ns",
            "range": "± 2025.36270889046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082957.3846153845,
            "unit": "ns",
            "range": "± 41857.281412633696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2749992,
            "unit": "ns",
            "range": "± 17811.732753066633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14477.41237113402,
            "unit": "ns",
            "range": "± 1879.5657119873981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64986.20430107527,
            "unit": "ns",
            "range": "± 4593.517579294287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51942.97014925373,
            "unit": "ns",
            "range": "± 2461.2813734100846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59089.336734693876,
            "unit": "ns",
            "range": "± 13150.04252585643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2790.0105263157893,
            "unit": "ns",
            "range": "± 316.53131654877853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14036.373737373737,
            "unit": "ns",
            "range": "± 3214.5005788053563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3747323.3602120536,
            "unit": "ns",
            "range": "± 42893.201235993874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236591.4786783855,
            "unit": "ns",
            "range": "± 6493.120270358733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762334.6328876202,
            "unit": "ns",
            "range": "± 3470.1771899142764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940758.2473493305,
            "unit": "ns",
            "range": "± 2009.6159298325883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629077.2848307291,
            "unit": "ns",
            "range": "± 996.6686260711944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592731.7883463542,
            "unit": "ns",
            "range": "± 8625.451377717254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38037.91836734694,
            "unit": "ns",
            "range": "± 3970.944843091585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420617.2,
            "unit": "ns",
            "range": "± 32351.651605443578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531347.0784313725,
            "unit": "ns",
            "range": "± 96443.38246802487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3106536.6071428573,
            "unit": "ns",
            "range": "± 59084.06594896944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2909842,
            "unit": "ns",
            "range": "± 111831.58988932382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6322302.233333333,
            "unit": "ns",
            "range": "± 113588.09169568201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5542153.533333333,
            "unit": "ns",
            "range": "± 28627.332496027208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14315185.666666666,
            "unit": "ns",
            "range": "± 74541.44237552855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37066150.5,
            "unit": "ns",
            "range": "± 254841.19292451977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74854766.53846154,
            "unit": "ns",
            "range": "± 310436.37837234203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147958436.5,
            "unit": "ns",
            "range": "± 938421.5527490625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961212.8854166666,
            "unit": "ns",
            "range": "± 95980.37823949882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868895.7464788733,
            "unit": "ns",
            "range": "± 90511.5167039482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1389155.2419354839,
            "unit": "ns",
            "range": "± 129238.26482903442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5612563.797979798,
            "unit": "ns",
            "range": "± 366396.8661588136"
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
          "id": "5ffe61d749e10ec138111a261bf3cfb3760dd9e1",
          "message": "Merge pull request #3533 from greymistcube/revert/context-scoping\n\n⏪ Revert context scoping",
          "timestamp": "2023-12-04T15:48:20+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/planetarium/libplanet/commit/5ffe61d749e10ec138111a261bf3cfb3760dd9e1"
        },
        "date": 1701673137893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203256.48,
            "unit": "ns",
            "range": "± 9930.43011691976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193383.73913043478,
            "unit": "ns",
            "range": "± 7002.698814456489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175400.25806451612,
            "unit": "ns",
            "range": "± 4816.424994867334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3100417.214285714,
            "unit": "ns",
            "range": "± 30386.706479032193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2947433.0714285714,
            "unit": "ns",
            "range": "± 31608.332169429108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14597.70652173913,
            "unit": "ns",
            "range": "± 2502.6459559945547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70339.03448275862,
            "unit": "ns",
            "range": "± 6051.100365911311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90588.68604651163,
            "unit": "ns",
            "range": "± 8320.704076913666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96994.60416666667,
            "unit": "ns",
            "range": "± 11737.03914109352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5432.540816326531,
            "unit": "ns",
            "range": "± 1812.3742411735577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16033.533333333333,
            "unit": "ns",
            "range": "± 2034.3501209493766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3740874.3744791667,
            "unit": "ns",
            "range": "± 51972.940933207996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1245467.3134765625,
            "unit": "ns",
            "range": "± 8243.798706676338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775210.7095052083,
            "unit": "ns",
            "range": "± 10185.064477628803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951012.4270833333,
            "unit": "ns",
            "range": "± 2765.243313445265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629484.7161959135,
            "unit": "ns",
            "range": "± 2466.6991179474226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 598402.6512858073,
            "unit": "ns",
            "range": "± 2350.617150202479"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40307.27551020408,
            "unit": "ns",
            "range": "± 5551.729581954316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381357.163265306,
            "unit": "ns",
            "range": "± 86354.129960671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2524936.296296296,
            "unit": "ns",
            "range": "± 77933.29783754234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139126.5,
            "unit": "ns",
            "range": "± 28578.893480074672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3009787.5384615385,
            "unit": "ns",
            "range": "± 110230.55105487425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6660440.645161291,
            "unit": "ns",
            "range": "± 161685.8728562988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5700921.733333333,
            "unit": "ns",
            "range": "± 77902.16078102314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14807438.6,
            "unit": "ns",
            "range": "± 85016.27257413724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37289848.21428572,
            "unit": "ns",
            "range": "± 194800.07893466201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75197116,
            "unit": "ns",
            "range": "± 819628.0151813644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151902939.23076922,
            "unit": "ns",
            "range": "± 614823.5661648733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969293.5217391305,
            "unit": "ns",
            "range": "± 78532.55824206593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1924068.189189189,
            "unit": "ns",
            "range": "± 96533.04780710838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1429481.21875,
            "unit": "ns",
            "range": "± 115512.17624331832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5660896.20754717,
            "unit": "ns",
            "range": "± 235211.67651748846"
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
          "id": "e9cc22e70f944fe75ccb6cfa93f1fd84a131ba38",
          "message": "Merge pull request #3520 from greymistcube/refactor/trie-based-account\n\n♻️ `ITrie` based `IAccount`",
          "timestamp": "2023-12-05T12:18:56+09:00",
          "tree_id": "37805f611374463cf0883181b4383c3a752277f1",
          "url": "https://github.com/planetarium/libplanet/commit/e9cc22e70f944fe75ccb6cfa93f1fd84a131ba38"
        },
        "date": 1701746999592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202902.47311827957,
            "unit": "ns",
            "range": "± 13936.19811825009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193006.21538461538,
            "unit": "ns",
            "range": "± 9014.907765217824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171629.61764705883,
            "unit": "ns",
            "range": "± 3437.4688522652996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3114191.1428571427,
            "unit": "ns",
            "range": "± 34413.08768836724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804378,
            "unit": "ns",
            "range": "± 28350.007475239825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15635.943181818182,
            "unit": "ns",
            "range": "± 2241.256202345167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63919,
            "unit": "ns",
            "range": "± 7615.766841055442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60972.33707865168,
            "unit": "ns",
            "range": "± 3663.3263974395904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69350.07291666667,
            "unit": "ns",
            "range": "± 12575.437289242862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6602.010101010101,
            "unit": "ns",
            "range": "± 1190.0251454636177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11465.150537634408,
            "unit": "ns",
            "range": "± 1040.8395017467615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690592.6201171875,
            "unit": "ns",
            "range": "± 12435.087840783628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217711.3983072916,
            "unit": "ns",
            "range": "± 21509.648310680313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774028.5002253606,
            "unit": "ns",
            "range": "± 1844.0838614868119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913975.4926060268,
            "unit": "ns",
            "range": "± 3630.2936848347504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610286.7422572544,
            "unit": "ns",
            "range": "± 997.471566325546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581639.7995793269,
            "unit": "ns",
            "range": "± 1982.6974920133682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40465.854166666664,
            "unit": "ns",
            "range": "± 4703.544363403919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400178.1428571427,
            "unit": "ns",
            "range": "± 56270.59858779335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2459928,
            "unit": "ns",
            "range": "± 107461.06619641448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3174737.25,
            "unit": "ns",
            "range": "± 61888.139739910315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2956924.9615384615,
            "unit": "ns",
            "range": "± 137211.2041003163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6920489.090909091,
            "unit": "ns",
            "range": "± 140745.42035682694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5630581.7,
            "unit": "ns",
            "range": "± 47233.97027291753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14464226.846153846,
            "unit": "ns",
            "range": "± 136679.44047712893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36981579.166666664,
            "unit": "ns",
            "range": "± 234194.61927746152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74266238.03333333,
            "unit": "ns",
            "range": "± 576498.9955487306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147752113.73333332,
            "unit": "ns",
            "range": "± 774272.1827684802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934649.5777777778,
            "unit": "ns",
            "range": "± 61437.77296339563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1874452.8582089553,
            "unit": "ns",
            "range": "± 87863.00836110543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1412921.7040816327,
            "unit": "ns",
            "range": "± 116315.01480193966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5762653.59375,
            "unit": "ns",
            "range": "± 178878.47942836452"
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
          "id": "95f57e68db9a49bffafe2de06c19b70e1e370360",
          "message": "Merge pull request #3535 from greymistcube/refactor/remove-iaccount-delta\n\n🧹 Remove `IAccountDelta`",
          "timestamp": "2023-12-05T12:37:01+09:00",
          "tree_id": "7cef5086b6450859deb782f56a7fce91ad1f9bbf",
          "url": "https://github.com/planetarium/libplanet/commit/95f57e68db9a49bffafe2de06c19b70e1e370360"
        },
        "date": 1701748067721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217370.45679012345,
            "unit": "ns",
            "range": "± 11364.967816770737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208363.48611111112,
            "unit": "ns",
            "range": "± 10218.727981661154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179721.07142857142,
            "unit": "ns",
            "range": "± 2978.894211830075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3118132.6666666665,
            "unit": "ns",
            "range": "± 34006.94687809679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2885249.3571428573,
            "unit": "ns",
            "range": "± 39358.35980128304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15799.366666666667,
            "unit": "ns",
            "range": "± 1960.6059611333078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84313.45360824742,
            "unit": "ns",
            "range": "± 10220.880323326503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90620.36666666667,
            "unit": "ns",
            "range": "± 1423.8249725232918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86820.92783505155,
            "unit": "ns",
            "range": "± 16967.25072213099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6000.484210526316,
            "unit": "ns",
            "range": "± 832.2082245468135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19245.907216494845,
            "unit": "ns",
            "range": "± 4004.327583696362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3893280.0402960526,
            "unit": "ns",
            "range": "± 79592.79849646616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215337.5365084135,
            "unit": "ns",
            "range": "± 8961.542646569013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774126.0476888021,
            "unit": "ns",
            "range": "± 1433.9117423564555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2016994.8121995192,
            "unit": "ns",
            "range": "± 19212.078450885343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613247.0712139423,
            "unit": "ns",
            "range": "± 2482.23715875897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590080.9888916016,
            "unit": "ns",
            "range": "± 11502.365483171168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46515.414893617024,
            "unit": "ns",
            "range": "± 7747.6899500800555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2577155.8666666667,
            "unit": "ns",
            "range": "± 33618.32759048184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2655469.11627907,
            "unit": "ns",
            "range": "± 87124.27569561859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3183330.0476190476,
            "unit": "ns",
            "range": "± 74939.797400631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3173511.8205128205,
            "unit": "ns",
            "range": "± 110384.0688502676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7141927.6875,
            "unit": "ns",
            "range": "± 215781.17330959838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5749010.3,
            "unit": "ns",
            "range": "± 34110.61343252064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15020660.466666667,
            "unit": "ns",
            "range": "± 167663.64841843612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37275959.92307692,
            "unit": "ns",
            "range": "± 156939.55081785555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75640893.5,
            "unit": "ns",
            "range": "± 394626.6767669355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153164395.3,
            "unit": "ns",
            "range": "± 771833.9635395501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062501.2258064516,
            "unit": "ns",
            "range": "± 111576.61590303038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1984268.1204819276,
            "unit": "ns",
            "range": "± 105588.68603267708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1466554.0212765958,
            "unit": "ns",
            "range": "± 105329.51559061356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6334830.196969697,
            "unit": "ns",
            "range": "± 492552.7389634712"
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
          "id": "480b70825d4bb894ba095b697d26014510cecca8",
          "message": "Merge pull request #3537 from greymistcube/refactor/total-updated-fungible-assets\n\n🧹 Remove internal tracking of amounts for `TotalUpdatedFungibleAssets`",
          "timestamp": "2023-12-05T13:51:27+09:00",
          "tree_id": "c1644d4dc792be582a8456158f5713a5b9e1bed9",
          "url": "https://github.com/planetarium/libplanet/commit/480b70825d4bb894ba095b697d26014510cecca8"
        },
        "date": 1701752532333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196043.1851851852,
            "unit": "ns",
            "range": "± 7903.898634562362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187209.38888888888,
            "unit": "ns",
            "range": "± 7348.754638858095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164840.45,
            "unit": "ns",
            "range": "± 3679.6511916355967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3010357.8,
            "unit": "ns",
            "range": "± 67927.07740627366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2844043.1,
            "unit": "ns",
            "range": "± 35431.64345771003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14768.377551020409,
            "unit": "ns",
            "range": "± 2255.9892178002656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66234.5612244898,
            "unit": "ns",
            "range": "± 7916.363162002344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52169.56140350877,
            "unit": "ns",
            "range": "± 2005.640608540465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65782.25510204081,
            "unit": "ns",
            "range": "± 12351.329348139447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3021.2526315789473,
            "unit": "ns",
            "range": "± 507.5391603887404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13953.149484536083,
            "unit": "ns",
            "range": "± 2559.837458386588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3680802.835637019,
            "unit": "ns",
            "range": "± 8787.550431585027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212509.6985212055,
            "unit": "ns",
            "range": "± 3138.780709863701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783319.6576772836,
            "unit": "ns",
            "range": "± 9848.598920506462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951631.0968191964,
            "unit": "ns",
            "range": "± 14353.674619389742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621646.53515625,
            "unit": "ns",
            "range": "± 2538.1550393130765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587458.6030273438,
            "unit": "ns",
            "range": "± 2062.718854273896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39349.427835051545,
            "unit": "ns",
            "range": "± 5714.02196218402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380683.065217391,
            "unit": "ns",
            "range": "± 91199.5189945045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496783.069767442,
            "unit": "ns",
            "range": "± 92457.15405382708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3060437.210526316,
            "unit": "ns",
            "range": "± 65417.232886363905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939629.611111111,
            "unit": "ns",
            "range": "± 111037.86913547317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6964657.815789473,
            "unit": "ns",
            "range": "± 239229.9975483398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5582224.923076923,
            "unit": "ns",
            "range": "± 62618.04258952518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14242486.57142857,
            "unit": "ns",
            "range": "± 143167.98664960754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36076724.92307692,
            "unit": "ns",
            "range": "± 175705.9034563445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75013337.03846154,
            "unit": "ns",
            "range": "± 448307.8057699523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149879165.2857143,
            "unit": "ns",
            "range": "± 605522.9719851426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938271.0454545454,
            "unit": "ns",
            "range": "± 60222.45666509728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841469.6153846155,
            "unit": "ns",
            "range": "± 63286.09592436698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504879.2307692308,
            "unit": "ns",
            "range": "± 22309.045083231173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6118627.164948453,
            "unit": "ns",
            "range": "± 388840.45019842545"
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
          "id": "f5762f93ba0366280c8aa7f7b7b6e3331ad8fe86",
          "message": "Merge pull request #3538 from greymistcube/release/3.9.0\n\n🚀 Release 3.9.0",
          "timestamp": "2023-12-05T14:10:29+09:00",
          "tree_id": "5787cbf94dba3ffe5c78fe22ca49a64303906978",
          "url": "https://github.com/planetarium/libplanet/commit/f5762f93ba0366280c8aa7f7b7b6e3331ad8fe86"
        },
        "date": 1701753685445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195345.73880597015,
            "unit": "ns",
            "range": "± 8705.68160367308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191514.48484848486,
            "unit": "ns",
            "range": "± 7810.3380690987415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169763.7,
            "unit": "ns",
            "range": "± 6834.249905096105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018505,
            "unit": "ns",
            "range": "± 37005.09295093977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2705952.285714286,
            "unit": "ns",
            "range": "± 41463.48889069769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13019.96875,
            "unit": "ns",
            "range": "± 1846.6708563370833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62954.10101010101,
            "unit": "ns",
            "range": "± 5828.941892104396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59239.58064516129,
            "unit": "ns",
            "range": "± 4643.144802737314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61314.19587628866,
            "unit": "ns",
            "range": "± 10727.783400124315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.5052631578947,
            "unit": "ns",
            "range": "± 602.0000154393899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14422.689473684211,
            "unit": "ns",
            "range": "± 1674.2892000547372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3685149.585677083,
            "unit": "ns",
            "range": "± 56715.3701627331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205994.7898995536,
            "unit": "ns",
            "range": "± 3469.032397302392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770289.5952148438,
            "unit": "ns",
            "range": "± 1755.0739652130733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921640.7827148438,
            "unit": "ns",
            "range": "± 6263.591989299254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626430.6417410715,
            "unit": "ns",
            "range": "± 3578.4881806874714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567989.234375,
            "unit": "ns",
            "range": "± 1046.9200122323841"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38545.936842105264,
            "unit": "ns",
            "range": "± 4885.060488335026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2434876.5,
            "unit": "ns",
            "range": "± 55448.52457863391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2439637.6951219514,
            "unit": "ns",
            "range": "± 87128.79429792987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139610.6666666665,
            "unit": "ns",
            "range": "± 58609.852152867206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2895482.6,
            "unit": "ns",
            "range": "± 77487.80138817159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6617888.928571428,
            "unit": "ns",
            "range": "± 115573.72049556427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5547110.230769231,
            "unit": "ns",
            "range": "± 17044.282957215917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13870838.133333333,
            "unit": "ns",
            "range": "± 108631.1259951813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36368007.428571425,
            "unit": "ns",
            "range": "± 208406.03295101397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74861550.78571428,
            "unit": "ns",
            "range": "± 723958.3815572208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145429588.5,
            "unit": "ns",
            "range": "± 639998.0535121541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940663.6559139785,
            "unit": "ns",
            "range": "± 70639.77358054563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1831840.2127659575,
            "unit": "ns",
            "range": "± 71065.06794570494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1378575.2688172043,
            "unit": "ns",
            "range": "± 92578.60551434818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6044681.228260869,
            "unit": "ns",
            "range": "± 340525.1225781755"
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
          "id": "eec1b9883176e13c7492c6dde65f1c555ce8a351",
          "message": "Merge pull request #3539 from greymistcube/prepare/3.9.1\n\n🔧 Prepare 3.9.1",
          "timestamp": "2023-12-08T11:25:23+09:00",
          "tree_id": "23990157ea6683c0744454ad72efa3c105fe0488",
          "url": "https://github.com/planetarium/libplanet/commit/eec1b9883176e13c7492c6dde65f1c555ce8a351"
        },
        "date": 1702002972346,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223040.88043478262,
            "unit": "ns",
            "range": "± 15878.824308654199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201103.7634408602,
            "unit": "ns",
            "range": "± 13314.210269317718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163308.15384615384,
            "unit": "ns",
            "range": "± 2264.916181162629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087327.5,
            "unit": "ns",
            "range": "± 18419.056599076946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2824290.230769231,
            "unit": "ns",
            "range": "± 36104.05287765222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17154.67525773196,
            "unit": "ns",
            "range": "± 2573.6918360366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76631.27319587629,
            "unit": "ns",
            "range": "± 12340.479351934593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64992.0824742268,
            "unit": "ns",
            "range": "± 16111.674277180522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60687.62371134021,
            "unit": "ns",
            "range": "± 11657.115346125278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2879.133333333333,
            "unit": "ns",
            "range": "± 489.29849348872625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14885.75,
            "unit": "ns",
            "range": "± 3065.723450294271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3688735.5929129464,
            "unit": "ns",
            "range": "± 47727.329365762314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226153.220703125,
            "unit": "ns",
            "range": "± 2833.1630375645123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769668.7204589844,
            "unit": "ns",
            "range": "± 4240.8811153545585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1978463.850360577,
            "unit": "ns",
            "range": "± 13133.712761426767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622222.398061899,
            "unit": "ns",
            "range": "± 4843.934925177816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573699.6381022135,
            "unit": "ns",
            "range": "± 1707.7437217130068"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41048.364583333336,
            "unit": "ns",
            "range": "± 5803.260278987995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2508726.119047619,
            "unit": "ns",
            "range": "± 91314.65738920249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2621877.2604166665,
            "unit": "ns",
            "range": "± 151134.70996705626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3212525.2,
            "unit": "ns",
            "range": "± 70373.20171179099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3089777.533333333,
            "unit": "ns",
            "range": "± 117100.78972418277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7098599.94117647,
            "unit": "ns",
            "range": "± 227849.73973305454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5694744.230769231,
            "unit": "ns",
            "range": "± 58116.915756306626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14583556.454545455,
            "unit": "ns",
            "range": "± 346595.3323129394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37142784.57692308,
            "unit": "ns",
            "range": "± 217125.7253914045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75044752.53846154,
            "unit": "ns",
            "range": "± 747970.529011406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153153430.80769232,
            "unit": "ns",
            "range": "± 927512.3989685515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943047.4239130435,
            "unit": "ns",
            "range": "± 64076.23177315356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895134.1538461538,
            "unit": "ns",
            "range": "± 96627.55459422091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1361502.6235955057,
            "unit": "ns",
            "range": "± 75469.67736807524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6015406.461538462,
            "unit": "ns",
            "range": "± 245552.03223337344"
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
          "id": "6f396be522b4f0c642971a3269410d93c660b5eb",
          "message": "Merge pull request #3542 from greymistcube/feature/tx-status-included\n\n✨ Added `TxStatus.INCLUDED`",
          "timestamp": "2023-12-08T12:01:59+09:00",
          "tree_id": "d5ed442d625d23764bdc746fa0e52be794b536a5",
          "url": "https://github.com/planetarium/libplanet/commit/6f396be522b4f0c642971a3269410d93c660b5eb"
        },
        "date": 1702005161880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200027.42857142858,
            "unit": "ns",
            "range": "± 7299.783776092299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193133.59420289856,
            "unit": "ns",
            "range": "± 8816.85754896774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165299.1923076923,
            "unit": "ns",
            "range": "± 3652.4608665307364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044781,
            "unit": "ns",
            "range": "± 56712.76145513166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780628.3571428573,
            "unit": "ns",
            "range": "± 35259.020525810985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15361.632653061224,
            "unit": "ns",
            "range": "± 1755.1474554775098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59312.54494382023,
            "unit": "ns",
            "range": "± 3727.6594042804845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52035.12195121951,
            "unit": "ns",
            "range": "± 1810.6652119472824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65172.86956521739,
            "unit": "ns",
            "range": "± 7176.382521346665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2736.5714285714284,
            "unit": "ns",
            "range": "± 366.8494739098538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11609.06976744186,
            "unit": "ns",
            "range": "± 1127.695688412204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3634908.904296875,
            "unit": "ns",
            "range": "± 22757.91430578933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206612.3783482143,
            "unit": "ns",
            "range": "± 3488.0977512629834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765073.2471454327,
            "unit": "ns",
            "range": "± 1107.1192188935686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938124.3098493305,
            "unit": "ns",
            "range": "± 5283.9095581274305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626633.451171875,
            "unit": "ns",
            "range": "± 1082.223384499142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587612.2952706473,
            "unit": "ns",
            "range": "± 7012.629160001657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36132.83720930233,
            "unit": "ns",
            "range": "± 3029.546677836045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2458354.529411765,
            "unit": "ns",
            "range": "± 78581.23497422821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522344.970588235,
            "unit": "ns",
            "range": "± 81088.52798302393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3250783.82,
            "unit": "ns",
            "range": "± 85082.85352168987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2953249.0185185187,
            "unit": "ns",
            "range": "± 117564.55793351764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6995494.028571429,
            "unit": "ns",
            "range": "± 226675.46899042377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5621231,
            "unit": "ns",
            "range": "± 45703.428610053816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14077306.166666666,
            "unit": "ns",
            "range": "± 98106.59693754883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36277222.28571428,
            "unit": "ns",
            "range": "± 429432.8939665533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74328251.6923077,
            "unit": "ns",
            "range": "± 437764.8798025763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150768584.92857143,
            "unit": "ns",
            "range": "± 1373987.28548621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947357.445652174,
            "unit": "ns",
            "range": "± 65961.09516653314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1847768.4193548388,
            "unit": "ns",
            "range": "± 55425.07062919823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1385171.757894737,
            "unit": "ns",
            "range": "± 107295.51196317932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6213756.193877551,
            "unit": "ns",
            "range": "± 367798.52778534207"
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
          "id": "d049d46d1b7373a90c74d6d51795f3292fb27c25",
          "message": "Merge pull request #3543 from greymistcube/release/3.9.1\n\n🚀 Release 3.9.1",
          "timestamp": "2023-12-08T12:05:28+09:00",
          "tree_id": "9bee94af45c895ba31e0991f1abcb83f913c2b87",
          "url": "https://github.com/planetarium/libplanet/commit/d049d46d1b7373a90c74d6d51795f3292fb27c25"
        },
        "date": 1702005355380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202712.39534883722,
            "unit": "ns",
            "range": "± 10544.096734001358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190397.8,
            "unit": "ns",
            "range": "± 8997.262534729138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171282.34615384616,
            "unit": "ns",
            "range": "± 2290.6911928554755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3003558.411764706,
            "unit": "ns",
            "range": "± 55886.98050089442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2726008.2,
            "unit": "ns",
            "range": "± 26359.469646193025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14523.673469387755,
            "unit": "ns",
            "range": "± 2811.042591100247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65159.35051546392,
            "unit": "ns",
            "range": "± 8137.875640384234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51283.11111111111,
            "unit": "ns",
            "range": "± 1944.6896132594509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61337.857142857145,
            "unit": "ns",
            "range": "± 12946.130196189943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3406.5876288659792,
            "unit": "ns",
            "range": "± 447.9941115818683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15479.351063829787,
            "unit": "ns",
            "range": "± 1052.608819572526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690681.8587239585,
            "unit": "ns",
            "range": "± 11571.619192701348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213268.1075721155,
            "unit": "ns",
            "range": "± 6615.275938881241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776246.5232121394,
            "unit": "ns",
            "range": "± 4291.5461691126775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2009316.1325520833,
            "unit": "ns",
            "range": "± 2740.299847005933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628625.4651227678,
            "unit": "ns",
            "range": "± 6839.579447482084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574385.3409705529,
            "unit": "ns",
            "range": "± 1514.7882247965717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38419.967741935485,
            "unit": "ns",
            "range": "± 4431.798804125979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380477.36,
            "unit": "ns",
            "range": "± 62670.00096396468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2446820.875,
            "unit": "ns",
            "range": "± 91702.37660059203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057337.3125,
            "unit": "ns",
            "range": "± 92194.2979450281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2928555.7083333335,
            "unit": "ns",
            "range": "± 115284.38166901332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6881692.916666667,
            "unit": "ns",
            "range": "± 229351.79628464405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5545484,
            "unit": "ns",
            "range": "± 21896.50483524711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14161344.166666666,
            "unit": "ns",
            "range": "± 180695.5240665827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37120954,
            "unit": "ns",
            "range": "± 291019.43507607875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73233930.64285715,
            "unit": "ns",
            "range": "± 406078.86593821936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148295122.03846154,
            "unit": "ns",
            "range": "± 779946.2868052319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960294.303030303,
            "unit": "ns",
            "range": "± 86622.55700279895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837076.44,
            "unit": "ns",
            "range": "± 73160.87336017017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1366423.7835051545,
            "unit": "ns",
            "range": "± 82144.70586058113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6056869.52631579,
            "unit": "ns",
            "range": "± 388541.87144805683"
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
          "id": "0a2a1bec0b4f69e6827d6cf29e1dc239591ce3b0",
          "message": "Merge pull request #3544 from greymistcube/prepare/3.9.2\n\n🔧 Prepare 3.9.2",
          "timestamp": "2023-12-08T17:06:51+09:00",
          "tree_id": "b3037719533c28a873c12113bb86fca1a23b8831",
          "url": "https://github.com/planetarium/libplanet/commit/0a2a1bec0b4f69e6827d6cf29e1dc239591ce3b0"
        },
        "date": 1702023471817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202787.94642857142,
            "unit": "ns",
            "range": "± 7681.700530054628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195864.25362318842,
            "unit": "ns",
            "range": "± 9412.856255902783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173656.26470588235,
            "unit": "ns",
            "range": "± 5315.903180530772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080011.4,
            "unit": "ns",
            "range": "± 28476.5836504311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2841843.0384615385,
            "unit": "ns",
            "range": "± 27372.263536334805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13791.458333333334,
            "unit": "ns",
            "range": "± 2256.0866814098895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64424.0618556701,
            "unit": "ns",
            "range": "± 5661.527276301041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58983.73863636364,
            "unit": "ns",
            "range": "± 6682.245884232385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60130.543956043955,
            "unit": "ns",
            "range": "± 12397.49849849834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2790.6555555555556,
            "unit": "ns",
            "range": "± 432.74800413306195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13792.19387755102,
            "unit": "ns",
            "range": "± 2847.2344790197435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3712641.4526041667,
            "unit": "ns",
            "range": "± 66794.74813659354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216439.0841471355,
            "unit": "ns",
            "range": "± 6719.338872943351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756197.1931340144,
            "unit": "ns",
            "range": "± 2234.1329170796066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961361.294921875,
            "unit": "ns",
            "range": "± 25592.573298306772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612211.3288010817,
            "unit": "ns",
            "range": "± 6498.79615942745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575684.050374349,
            "unit": "ns",
            "range": "± 4161.342691745691"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38050.55263157895,
            "unit": "ns",
            "range": "± 4317.676764897602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2337864.8846153845,
            "unit": "ns",
            "range": "± 85175.75150175304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504674.8666666667,
            "unit": "ns",
            "range": "± 43527.435689404425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3126607.4285714286,
            "unit": "ns",
            "range": "± 47425.16773209751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2966469.4615384615,
            "unit": "ns",
            "range": "± 104779.66290080501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6938959.657142857,
            "unit": "ns",
            "range": "± 223964.7962839831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5563011.384615385,
            "unit": "ns",
            "range": "± 15550.451094949312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14414728.307692308,
            "unit": "ns",
            "range": "± 90186.72576787988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37246738.23076923,
            "unit": "ns",
            "range": "± 256535.44751981608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75344073.1923077,
            "unit": "ns",
            "range": "± 344278.9281312912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149520393.2,
            "unit": "ns",
            "range": "± 1059808.1357028869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 944890.7888888889,
            "unit": "ns",
            "range": "± 79803.1995504129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1846255.6470588236,
            "unit": "ns",
            "range": "± 74610.93382576673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1388193.0842105264,
            "unit": "ns",
            "range": "± 118397.50246688942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5996635.411764706,
            "unit": "ns",
            "range": "± 285923.1248924451"
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
          "id": "b37461e9aa2120125b450d265ab7c0f02dc0bffb",
          "message": "Merge pull request #3549 from greymistcube/feature/new-query-types\n\n✨ New query types",
          "timestamp": "2023-12-14T10:56:10+09:00",
          "tree_id": "0fa6d0e6cbcf60bfa543a2fe18cb6a1cea6ff2c1",
          "url": "https://github.com/planetarium/libplanet/commit/b37461e9aa2120125b450d265ab7c0f02dc0bffb"
        },
        "date": 1702519627632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222966.2894736842,
            "unit": "ns",
            "range": "± 15098.850039975736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213483.7,
            "unit": "ns",
            "range": "± 6886.766180183033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175045.64864864864,
            "unit": "ns",
            "range": "± 5921.389805969055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3198897,
            "unit": "ns",
            "range": "± 50539.118150049035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2885488.5,
            "unit": "ns",
            "range": "± 37421.49211965683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17816.984848484848,
            "unit": "ns",
            "range": "± 3008.85062591246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72101.1,
            "unit": "ns",
            "range": "± 6380.709872466836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95311.91666666667,
            "unit": "ns",
            "range": "± 2873.509316647006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84026.88541666667,
            "unit": "ns",
            "range": "± 13843.079955338348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6749.505154639175,
            "unit": "ns",
            "range": "± 1500.9955801880255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18315.954545454544,
            "unit": "ns",
            "range": "± 3669.021501855238"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40541.52105263158,
            "unit": "ns",
            "range": "± 5073.969871301093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041641.0670103093,
            "unit": "ns",
            "range": "± 109700.34718437797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1997245.5526315789,
            "unit": "ns",
            "range": "± 83628.63674975325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1479841.5340909092,
            "unit": "ns",
            "range": "± 76979.41088995383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6089465.075,
            "unit": "ns",
            "range": "± 215901.99475716392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2522804.6363636362,
            "unit": "ns",
            "range": "± 79982.11916024504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2555524.7352941176,
            "unit": "ns",
            "range": "± 121542.35834567055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3255225.2702702703,
            "unit": "ns",
            "range": "± 108737.66559851196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3182724.074074074,
            "unit": "ns",
            "range": "± 87591.9569133912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7228611.03125,
            "unit": "ns",
            "range": "± 225053.4806287786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5757161.533333333,
            "unit": "ns",
            "range": "± 14060.616435717922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14881107.766666668,
            "unit": "ns",
            "range": "± 129727.8280744876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37309502.333333336,
            "unit": "ns",
            "range": "± 329728.07055589784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76633809.06666666,
            "unit": "ns",
            "range": "± 431195.2925939817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152597424.07142857,
            "unit": "ns",
            "range": "± 664139.6018169748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3666265.972956731,
            "unit": "ns",
            "range": "± 5850.966858977129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199922.846484375,
            "unit": "ns",
            "range": "± 2926.8026032187686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769386.2354492188,
            "unit": "ns",
            "range": "± 12211.54569653275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958297.0067608173,
            "unit": "ns",
            "range": "± 4127.010625721615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625013.6379743303,
            "unit": "ns",
            "range": "± 6190.940748251726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565583.4525553385,
            "unit": "ns",
            "range": "± 3869.583355940022"
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
          "id": "fda1f3c8a71be27993843f899c00a899507f6674",
          "message": "Merge pull request #3551 from greymistcube/refactor/bencodex-value-type\n\n♻️ Allow to choose output format of `BencodexValueType`",
          "timestamp": "2023-12-14T17:39:43+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/planetarium/libplanet/commit/fda1f3c8a71be27993843f899c00a899507f6674"
        },
        "date": 1702543845596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208067.63461538462,
            "unit": "ns",
            "range": "± 8247.415737918902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189671.88235294117,
            "unit": "ns",
            "range": "± 6735.3731289277775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166109.96,
            "unit": "ns",
            "range": "± 4437.60951489275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3072675.566666667,
            "unit": "ns",
            "range": "± 39870.90341243611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2850374,
            "unit": "ns",
            "range": "± 59110.406229260814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14374.540816326531,
            "unit": "ns",
            "range": "± 2811.4370978234397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65906.16842105263,
            "unit": "ns",
            "range": "± 6693.218871735005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52713.617021276594,
            "unit": "ns",
            "range": "± 1986.3104266474375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70817.24742268042,
            "unit": "ns",
            "range": "± 10882.165593329497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3438.7938144329896,
            "unit": "ns",
            "range": "± 916.053911920403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13248.739583333334,
            "unit": "ns",
            "range": "± 2081.878399021279"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40391.426315789475,
            "unit": "ns",
            "range": "± 5385.630177556429"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018944.6021505377,
            "unit": "ns",
            "range": "± 106021.70201140114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2024952.2736842106,
            "unit": "ns",
            "range": "± 124403.77320100748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1460712.5,
            "unit": "ns",
            "range": "± 132444.2690306284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5630807.9375,
            "unit": "ns",
            "range": "± 106061.96296220353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2413702.611111111,
            "unit": "ns",
            "range": "± 50619.47707813069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527592.6774193547,
            "unit": "ns",
            "range": "± 75559.48248869323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3144429.925925926,
            "unit": "ns",
            "range": "± 86436.87793142903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2969979.290909091,
            "unit": "ns",
            "range": "± 119970.6056898125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7058632.728571429,
            "unit": "ns",
            "range": "± 225980.77277946688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5471617.615384615,
            "unit": "ns",
            "range": "± 17831.69491634891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14233521.566666666,
            "unit": "ns",
            "range": "± 91545.37457650376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37092513.13333333,
            "unit": "ns",
            "range": "± 245183.7757333019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74958127.35714285,
            "unit": "ns",
            "range": "± 580503.334799751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150817490.5,
            "unit": "ns",
            "range": "± 988435.9722362973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3762314.4145833333,
            "unit": "ns",
            "range": "± 53528.41074528599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208405.6082589286,
            "unit": "ns",
            "range": "± 2774.9369791553854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777443.0060096154,
            "unit": "ns",
            "range": "± 1624.8720199272802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920061.9069260817,
            "unit": "ns",
            "range": "± 6355.469423621955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615080.5528846154,
            "unit": "ns",
            "range": "± 1171.9095829731157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565762.16796875,
            "unit": "ns",
            "range": "± 1261.3814507435056"
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
          "id": "ec2bbdc099f4454a97116d141753fab743217793",
          "message": "Merge pull request #3553 from riemannulus/fix/set-compaction-limit\n\nfeat: new argument for `RocksDBKeyValueStore.ctor`",
          "timestamp": "2023-12-15T12:36:48+09:00",
          "tree_id": "bb7d4a1c65526b9d6a6dd9d3feb97ee8ff59ca56",
          "url": "https://github.com/planetarium/libplanet/commit/ec2bbdc099f4454a97116d141753fab743217793"
        },
        "date": 1702612070428,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733961.9580078125,
            "unit": "ns",
            "range": "± 12501.952431642312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212947.526592548,
            "unit": "ns",
            "range": "± 2329.1915241727797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763866.1030273438,
            "unit": "ns",
            "range": "± 1891.7152850936286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912142.7114583333,
            "unit": "ns",
            "range": "± 2445.1683310098238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617646.7587890625,
            "unit": "ns",
            "range": "± 5126.80281098656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578411.9523925781,
            "unit": "ns",
            "range": "± 2417.6050361991297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2362709.736842105,
            "unit": "ns",
            "range": "± 81384.73051930041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501825.294117647,
            "unit": "ns",
            "range": "± 49344.188266913334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3134029.4444444445,
            "unit": "ns",
            "range": "± 115137.82572018071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2903559.3571428573,
            "unit": "ns",
            "range": "± 129720.60131706108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6855124.887096774,
            "unit": "ns",
            "range": "± 171009.00283799437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40040.41052631579,
            "unit": "ns",
            "range": "± 5656.21866300427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197337.35294117648,
            "unit": "ns",
            "range": "± 5528.095380718789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190809.4090909091,
            "unit": "ns",
            "range": "± 5730.967099689831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161639.06896551725,
            "unit": "ns",
            "range": "± 3229.835432904488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2986055.4,
            "unit": "ns",
            "range": "± 44028.537358983755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2769230.6333333333,
            "unit": "ns",
            "range": "± 29754.287729110012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14311.151515151516,
            "unit": "ns",
            "range": "± 1813.7788345006056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62865.979166666664,
            "unit": "ns",
            "range": "± 6558.489981822543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52298.83870967742,
            "unit": "ns",
            "range": "± 2242.2333362553286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62020.3125,
            "unit": "ns",
            "range": "± 8331.147260747655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2991.0729166666665,
            "unit": "ns",
            "range": "± 480.3305823195142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14405.580808080807,
            "unit": "ns",
            "range": "± 2801.681308905195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5489892.357142857,
            "unit": "ns",
            "range": "± 28329.41300976817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14148988.833333334,
            "unit": "ns",
            "range": "± 103632.30052220113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36108799.6,
            "unit": "ns",
            "range": "± 130114.0813230561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75083626.42857143,
            "unit": "ns",
            "range": "± 1201091.633222155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148793793.2857143,
            "unit": "ns",
            "range": "± 1358803.730320927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938474.5555555555,
            "unit": "ns",
            "range": "± 64610.422754575506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1818692.1724137932,
            "unit": "ns",
            "range": "± 52221.08549855876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1401734.5384615385,
            "unit": "ns",
            "range": "± 120806.62960039421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5995119.329787234,
            "unit": "ns",
            "range": "± 347397.66916073975"
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
          "id": "2729ebda0cff75bd15c92165834479e10b0be756",
          "message": "Merge pull request #3555 from greymistcube/chore/error-logging-for-evaluation-failure\n\n♻️ Additional error logging for better debugging",
          "timestamp": "2023-12-15T13:22:22+09:00",
          "tree_id": "b5f8ba557541555efe7169019c7b0391f4389796",
          "url": "https://github.com/planetarium/libplanet/commit/2729ebda0cff75bd15c92165834479e10b0be756"
        },
        "date": 1702614786031,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701462.1282552085,
            "unit": "ns",
            "range": "± 6820.8151336077535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218079.045673077,
            "unit": "ns",
            "range": "± 5956.46816229199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780077.266015625,
            "unit": "ns",
            "range": "± 13189.062560776927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934167.8282752405,
            "unit": "ns",
            "range": "± 5757.965506450137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616284.9777994792,
            "unit": "ns",
            "range": "± 1478.3968816928448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588904.5691856971,
            "unit": "ns",
            "range": "± 884.2096992265256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2349129.2,
            "unit": "ns",
            "range": "± 33963.40539925709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2466336.24,
            "unit": "ns",
            "range": "± 57793.999928827674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203334.153846154,
            "unit": "ns",
            "range": "± 87558.23106296394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939150.4322033897,
            "unit": "ns",
            "range": "± 129799.07716608673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6826156.884615385,
            "unit": "ns",
            "range": "± 182935.8375156332"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40793.22680412371,
            "unit": "ns",
            "range": "± 5437.524234630199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198106.46666666667,
            "unit": "ns",
            "range": "± 8809.130110513457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190857.4655172414,
            "unit": "ns",
            "range": "± 8255.16919814598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167740.33333333334,
            "unit": "ns",
            "range": "± 4572.861862705303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3049289.533333333,
            "unit": "ns",
            "range": "± 52625.31073252906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2714077.5,
            "unit": "ns",
            "range": "± 39976.60752288095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14362.661616161617,
            "unit": "ns",
            "range": "± 2504.18136734392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60962.166666666664,
            "unit": "ns",
            "range": "± 5320.0329513555425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51256.03846153846,
            "unit": "ns",
            "range": "± 827.9479266419896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63336.10989010989,
            "unit": "ns",
            "range": "± 5818.405910844098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3099.53125,
            "unit": "ns",
            "range": "± 621.9958022049074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14417.479591836734,
            "unit": "ns",
            "range": "± 2048.3518241394722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5442097.230769231,
            "unit": "ns",
            "range": "± 18564.093725764647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14295342,
            "unit": "ns",
            "range": "± 207433.0810884733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36666640.5,
            "unit": "ns",
            "range": "± 148502.8540770798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74463311.65384616,
            "unit": "ns",
            "range": "± 611895.0059293732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149163717.41666666,
            "unit": "ns",
            "range": "± 475197.6166546558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937086.3181818182,
            "unit": "ns",
            "range": "± 58863.23571168443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837954.6764705882,
            "unit": "ns",
            "range": "± 70760.09621522737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1365638.6123595505,
            "unit": "ns",
            "range": "± 75398.97993453922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6122708.09375,
            "unit": "ns",
            "range": "± 425292.9703747893"
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
          "id": "fcdc6c6a5a90b58bff35a75bc5ceb515520c4d72",
          "message": "Merge pull request #3556 from greymistcube/revert/all-incompatible-api-changes\n\n⏪ Revert all incompatible api changes",
          "timestamp": "2023-12-15T14:03:35+09:00",
          "tree_id": "0ff2e84ad8519699dbabc9df3474a2991791b687",
          "url": "https://github.com/planetarium/libplanet/commit/fcdc6c6a5a90b58bff35a75bc5ceb515520c4d72"
        },
        "date": 1702617271691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3749339.9615885415,
            "unit": "ns",
            "range": "± 37308.82860500599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189571.0667317708,
            "unit": "ns",
            "range": "± 8448.1376427124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775965.0310997596,
            "unit": "ns",
            "range": "± 2455.928582268653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940207.43359375,
            "unit": "ns",
            "range": "± 3703.338175114701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611676.8383789062,
            "unit": "ns",
            "range": "± 706.1403998228967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582178.09296875,
            "unit": "ns",
            "range": "± 761.9491794351501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463902.8214285714,
            "unit": "ns",
            "range": "± 57873.907950054454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2610160.8518518517,
            "unit": "ns",
            "range": "± 71910.4036394776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3144852.3571428573,
            "unit": "ns",
            "range": "± 53659.10172648631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2975493.375,
            "unit": "ns",
            "range": "± 115021.17825392076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6895459.5,
            "unit": "ns",
            "range": "± 128657.70730362406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41393.0306122449,
            "unit": "ns",
            "range": "± 5527.786170566553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200871.01123595505,
            "unit": "ns",
            "range": "± 11069.069501311857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192572.2857142857,
            "unit": "ns",
            "range": "± 8269.310499374475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172683.30952380953,
            "unit": "ns",
            "range": "± 3530.115700923238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101745.6923076925,
            "unit": "ns",
            "range": "± 22283.311907436528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2752499,
            "unit": "ns",
            "range": "± 32841.49896735953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13263.956043956045,
            "unit": "ns",
            "range": "± 1985.5409109755228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70171.65957446808,
            "unit": "ns",
            "range": "± 7032.832143845714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68334.72043010753,
            "unit": "ns",
            "range": "± 5794.827165456521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68015.97959183673,
            "unit": "ns",
            "range": "± 16332.410063870688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4301.79797979798,
            "unit": "ns",
            "range": "± 1690.3635038351713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12348.439560439561,
            "unit": "ns",
            "range": "± 1073.5770138372955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5578393.5,
            "unit": "ns",
            "range": "± 83134.46716268215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14500632.142857144,
            "unit": "ns",
            "range": "± 135060.22921337848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36802024.15384615,
            "unit": "ns",
            "range": "± 367038.95038625126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75914827.11538461,
            "unit": "ns",
            "range": "± 582536.2512634641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147843141.5,
            "unit": "ns",
            "range": "± 1046357.8247335814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976471.840425532,
            "unit": "ns",
            "range": "± 89887.22952059565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1878639.6818181819,
            "unit": "ns",
            "range": "± 76211.89418886806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1434057.3775510204,
            "unit": "ns",
            "range": "± 115583.24015644383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5838845.65625,
            "unit": "ns",
            "range": "± 177065.4366474047"
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
          "id": "81408bf2f1fdce9f3674009438e2a038322ec2b6",
          "message": "Merge pull request #3557 from greymistcube/release/3.9.2\n\n🚀 Release 3.9.2",
          "timestamp": "2023-12-15T14:16:05+09:00",
          "tree_id": "1dc3d85314af7613e4e013cb5bf0ffe3c279cd5b",
          "url": "https://github.com/planetarium/libplanet/commit/81408bf2f1fdce9f3674009438e2a038322ec2b6"
        },
        "date": 1702618015926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3794145.7142427885,
            "unit": "ns",
            "range": "± 7851.234503546235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215040.2315848214,
            "unit": "ns",
            "range": "± 28432.360454942358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762153.8149038461,
            "unit": "ns",
            "range": "± 9401.762088007616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952570.8173076923,
            "unit": "ns",
            "range": "± 6777.840941876473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621976.3550180289,
            "unit": "ns",
            "range": "± 649.5574291248258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573956.5138346354,
            "unit": "ns",
            "range": "± 1009.3951287749175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2389359.205882353,
            "unit": "ns",
            "range": "± 76756.41328116928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492417.119047619,
            "unit": "ns",
            "range": "± 90099.81087476492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101247.066666667,
            "unit": "ns",
            "range": "± 90371.27114525498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2904751.826923077,
            "unit": "ns",
            "range": "± 108700.39721985276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6912841.722222222,
            "unit": "ns",
            "range": "± 110795.76242788858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39502.958333333336,
            "unit": "ns",
            "range": "± 5263.238814579692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198588.17857142858,
            "unit": "ns",
            "range": "± 5646.9961864600355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192686.44444444444,
            "unit": "ns",
            "range": "± 7594.27817980926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163866.82352941178,
            "unit": "ns",
            "range": "± 5141.4994023415065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3113863.1333333333,
            "unit": "ns",
            "range": "± 50793.47094553824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2943307.7,
            "unit": "ns",
            "range": "± 17867.84042910614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12875.5,
            "unit": "ns",
            "range": "± 693.2238898406366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69315.89361702128,
            "unit": "ns",
            "range": "± 10326.767540620991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58569.0404040404,
            "unit": "ns",
            "range": "± 6901.659171886241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66405.53157894737,
            "unit": "ns",
            "range": "± 12516.723014017305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3086.644329896907,
            "unit": "ns",
            "range": "± 626.9221275022043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13245.78125,
            "unit": "ns",
            "range": "± 2247.3766119311786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5544800.928571428,
            "unit": "ns",
            "range": "± 29095.822960757378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14680081.692307692,
            "unit": "ns",
            "range": "± 195923.70408757956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37081607,
            "unit": "ns",
            "range": "± 219520.12906071584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73954777.64285715,
            "unit": "ns",
            "range": "± 519267.9765122921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149514314.83333334,
            "unit": "ns",
            "range": "± 967843.9748186737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982568.8548387097,
            "unit": "ns",
            "range": "± 111900.64945139713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855057.4,
            "unit": "ns",
            "range": "± 54873.788732904606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393728.9583333333,
            "unit": "ns",
            "range": "± 93644.13433148379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6159850.198630137,
            "unit": "ns",
            "range": "± 306718.4656777506"
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
          "id": "4719f6e54611e13a98b8589e3be2ef822dfd9006",
          "message": "Merge pull request #3558 from greymistcube/prepare/3.9.3\n\n🔧 Prepare 3.9.3",
          "timestamp": "2023-12-15T14:32:00+09:00",
          "tree_id": "10171e9d05502bea7fd706aa57892745ff0e2867",
          "url": "https://github.com/planetarium/libplanet/commit/4719f6e54611e13a98b8589e3be2ef822dfd9006"
        },
        "date": 1702618963042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3639165.516826923,
            "unit": "ns",
            "range": "± 7308.057757447336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210193.5733173077,
            "unit": "ns",
            "range": "± 2903.7619761100946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755558.963297526,
            "unit": "ns",
            "range": "± 1141.6258386771515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958823.569110577,
            "unit": "ns",
            "range": "± 17377.107088227767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631120.8314208984,
            "unit": "ns",
            "range": "± 12190.64471872431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569880.7624511719,
            "unit": "ns",
            "range": "± 616.6209788952776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2364994.6585365855,
            "unit": "ns",
            "range": "± 76992.29177638817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2568455.066666667,
            "unit": "ns",
            "range": "± 41132.74651742413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3100605,
            "unit": "ns",
            "range": "± 105604.15648965666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2924115.06122449,
            "unit": "ns",
            "range": "± 115614.79922595841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6954952.018518519,
            "unit": "ns",
            "range": "± 194977.69701989595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40176.85567010309,
            "unit": "ns",
            "range": "± 5423.03187415661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199724.97777777776,
            "unit": "ns",
            "range": "± 7604.836106323423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195092.4180327869,
            "unit": "ns",
            "range": "± 8745.342336152584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170617.54545454544,
            "unit": "ns",
            "range": "± 5267.397145951862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3047701.9285714286,
            "unit": "ns",
            "range": "± 23048.676245867424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2961386.529411765,
            "unit": "ns",
            "range": "± 57632.897064217635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13894.260416666666,
            "unit": "ns",
            "range": "± 3207.8740697319727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62380.535294117646,
            "unit": "ns",
            "range": "± 7081.173598666663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92364.4387755102,
            "unit": "ns",
            "range": "± 12737.514089156904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94414.53125,
            "unit": "ns",
            "range": "± 15251.107776126073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3020.1052631578946,
            "unit": "ns",
            "range": "± 598.500688310527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14268.727272727272,
            "unit": "ns",
            "range": "± 2588.8597514380644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5416461.269230769,
            "unit": "ns",
            "range": "± 11669.502311251656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14135507.076923076,
            "unit": "ns",
            "range": "± 86321.51694243788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36656867.93333333,
            "unit": "ns",
            "range": "± 148144.68224507835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74930963.86666666,
            "unit": "ns",
            "range": "± 817391.3272769368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149366599.2857143,
            "unit": "ns",
            "range": "± 834283.134912974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977700.5268817204,
            "unit": "ns",
            "range": "± 77558.33897889401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859474.5897435897,
            "unit": "ns",
            "range": "± 64580.60901887123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1465637.505050505,
            "unit": "ns",
            "range": "± 137859.77303925972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6142877.908163265,
            "unit": "ns",
            "range": "± 432801.35202858935"
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
          "id": "e16b80ca83f7181506f460b09bd550937bce4d54",
          "message": "Merge pull request #3559 from greymistcube/feature/new-query-types\n\n✨ New Query Types",
          "timestamp": "2023-12-17T16:00:40+09:00",
          "tree_id": "971b4e69b096d781d447d43150eecda2f505b388",
          "url": "https://github.com/planetarium/libplanet/commit/e16b80ca83f7181506f460b09bd550937bce4d54"
        },
        "date": 1702797206707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3717910.4441964286,
            "unit": "ns",
            "range": "± 27106.748790994017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212286.1135416667,
            "unit": "ns",
            "range": "± 1510.419495043458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 774660.0858561198,
            "unit": "ns",
            "range": "± 2339.7395934417887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930748.833233173,
            "unit": "ns",
            "range": "± 5426.139382413499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610521.6829659598,
            "unit": "ns",
            "range": "± 4340.412368396935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585777.0609266493,
            "unit": "ns",
            "range": "± 12242.305312361554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2382520.066666667,
            "unit": "ns",
            "range": "± 39126.41041632451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2566454.9285714286,
            "unit": "ns",
            "range": "± 54142.340479121725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3155592.2586206896,
            "unit": "ns",
            "range": "± 92109.65207553099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2944619.4,
            "unit": "ns",
            "range": "± 100488.0946521042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6951433.846153846,
            "unit": "ns",
            "range": "± 187394.45473160455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40209.197916666664,
            "unit": "ns",
            "range": "± 4303.0676979392565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196211.125,
            "unit": "ns",
            "range": "± 8645.489815091863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187465.46808510637,
            "unit": "ns",
            "range": "± 7302.298232185904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165912.32258064515,
            "unit": "ns",
            "range": "± 4918.119351859995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3063952,
            "unit": "ns",
            "range": "± 52499.86024596784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834263.533333333,
            "unit": "ns",
            "range": "± 47223.47227486812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15768.229166666666,
            "unit": "ns",
            "range": "± 2435.1720591071453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61465.467391304344,
            "unit": "ns",
            "range": "± 5819.9588844344435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57260.83157894737,
            "unit": "ns",
            "range": "± 5486.799517939032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74277.0824742268,
            "unit": "ns",
            "range": "± 17779.48068623754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2992.9,
            "unit": "ns",
            "range": "± 532.660592106248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15502.144444444444,
            "unit": "ns",
            "range": "± 1228.163464590649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5783180.133333334,
            "unit": "ns",
            "range": "± 20125.838058386063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14453765.692307692,
            "unit": "ns",
            "range": "± 128857.09871558275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35670966.307692304,
            "unit": "ns",
            "range": "± 238828.11489869468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73604213.08333333,
            "unit": "ns",
            "range": "± 210218.19379373782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146203001.66666666,
            "unit": "ns",
            "range": "± 1136408.5463582608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962950.1578947369,
            "unit": "ns",
            "range": "± 92512.80342147424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876573.0980392157,
            "unit": "ns",
            "range": "± 76405.90569825213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1408692.731958763,
            "unit": "ns",
            "range": "± 127591.31839935559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6127405.742105263,
            "unit": "ns",
            "range": "± 363678.2141485975"
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
          "id": "ffc6fb26115058977fc138bdc6785f5635858c59",
          "message": "Merge pull request #3560 from greymistcube/refactor/bencodex-value-type\n\n♻️ Allow to choose output format of `BencodexValueType`",
          "timestamp": "2023-12-17T17:17:36+09:00",
          "tree_id": "3c00699ed21dbef772b741b88a672b59f77cf114",
          "url": "https://github.com/planetarium/libplanet/commit/ffc6fb26115058977fc138bdc6785f5635858c59"
        },
        "date": 1702801700684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3764760.6354166665,
            "unit": "ns",
            "range": "± 50444.244760091395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202839.8551682692,
            "unit": "ns",
            "range": "± 4225.666093927025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 785162.7126652644,
            "unit": "ns",
            "range": "± 2616.883669887247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949159.0523158482,
            "unit": "ns",
            "range": "± 1922.3500894637268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620703.9067382812,
            "unit": "ns",
            "range": "± 1208.7539572163107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569693.0052083334,
            "unit": "ns",
            "range": "± 1161.9926653377681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2329829.466666667,
            "unit": "ns",
            "range": "± 35431.90969182333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2526711.933333333,
            "unit": "ns",
            "range": "± 38721.93443637905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3014147.0714285714,
            "unit": "ns",
            "range": "± 51069.53509520778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2943799.868131868,
            "unit": "ns",
            "range": "± 167013.25854781765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6738836.3125,
            "unit": "ns",
            "range": "± 114550.48446149191"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40406.768421052635,
            "unit": "ns",
            "range": "± 5320.838738579744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199696.6896551724,
            "unit": "ns",
            "range": "± 7928.473715326799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190346.53333333333,
            "unit": "ns",
            "range": "± 5046.2145712257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172507.23076923078,
            "unit": "ns",
            "range": "± 1018.2399155606824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3045899.6153846155,
            "unit": "ns",
            "range": "± 38199.43369243943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2783035.5714285714,
            "unit": "ns",
            "range": "± 29961.067179474216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15305.89247311828,
            "unit": "ns",
            "range": "± 1443.160416693964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66173.74747474748,
            "unit": "ns",
            "range": "± 8531.427789617508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52070.794871794875,
            "unit": "ns",
            "range": "± 1806.770456679792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64194.32989690721,
            "unit": "ns",
            "range": "± 11857.48296323329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3667.068181818182,
            "unit": "ns",
            "range": "± 482.6043998888308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15109.770833333334,
            "unit": "ns",
            "range": "± 2214.035108736827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5603642.928571428,
            "unit": "ns",
            "range": "± 21379.737570218876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13988034.076923076,
            "unit": "ns",
            "range": "± 44249.23515621775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36749990.916666664,
            "unit": "ns",
            "range": "± 163520.40466584996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74361250.28571428,
            "unit": "ns",
            "range": "± 957375.5957101948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151549581.14285713,
            "unit": "ns",
            "range": "± 1182371.6052308958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963901.3578947368,
            "unit": "ns",
            "range": "± 79107.71874421042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1845485.3035714286,
            "unit": "ns",
            "range": "± 73319.51783205036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1397304.043478261,
            "unit": "ns",
            "range": "± 97369.70101627144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6153379.484210527,
            "unit": "ns",
            "range": "± 359741.57728601666"
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
          "id": "62ef2cbdb6d3a5cb1c6b832ef310b76e8f885f39",
          "message": "Merge pull request #3554 from greymistcube/chore/remove-unnecessary-generic-type-parameter\n\n🧹 Removed `IBlockPolicy` as generic type parameter for `StateQuery`",
          "timestamp": "2023-12-17T20:01:27+09:00",
          "tree_id": "22049ab28f9daf3e161ccde365e95779a0bddef9",
          "url": "https://github.com/planetarium/libplanet/commit/62ef2cbdb6d3a5cb1c6b832ef310b76e8f885f39"
        },
        "date": 1702811528301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3735120.7778645833,
            "unit": "ns",
            "range": "± 48200.35822433039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206660.278125,
            "unit": "ns",
            "range": "± 27185.126568465294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764983.7385066106,
            "unit": "ns",
            "range": "± 2399.2747169993117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918921.9718191964,
            "unit": "ns",
            "range": "± 4616.528647113811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621665.9564302885,
            "unit": "ns",
            "range": "± 952.0863086092351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567434.3146784856,
            "unit": "ns",
            "range": "± 1058.578898710657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2373964,
            "unit": "ns",
            "range": "± 80275.34286610223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2539697.6052631577,
            "unit": "ns",
            "range": "± 82035.35429957128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3138622.8571428573,
            "unit": "ns",
            "range": "± 49597.98644270077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3012121.3695652173,
            "unit": "ns",
            "range": "± 114120.71663079869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6999222.514285714,
            "unit": "ns",
            "range": "± 228589.0210325292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39865.322916666664,
            "unit": "ns",
            "range": "± 5054.548751778036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199262.27551020408,
            "unit": "ns",
            "range": "± 7953.757176290194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191585.6,
            "unit": "ns",
            "range": "± 8560.217564556544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167580.10714285713,
            "unit": "ns",
            "range": "± 4677.055993450688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3019022.8571428573,
            "unit": "ns",
            "range": "± 38038.09059878136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2753602.236842105,
            "unit": "ns",
            "range": "± 58998.01319050414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17113.379120879123,
            "unit": "ns",
            "range": "± 2532.953861207042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70085.22164948453,
            "unit": "ns",
            "range": "± 7646.242190806142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57089.969072164946,
            "unit": "ns",
            "range": "± 6546.265049078253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73391.04081632652,
            "unit": "ns",
            "range": "± 12000.069962784339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2963.1022727272725,
            "unit": "ns",
            "range": "± 689.5871501818496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12099.869565217392,
            "unit": "ns",
            "range": "± 1184.1970406783903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5662280.076923077,
            "unit": "ns",
            "range": "± 31551.053940297934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15035695.166666666,
            "unit": "ns",
            "range": "± 269383.555587479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37557247.038461536,
            "unit": "ns",
            "range": "± 312132.65618793544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76111688.5,
            "unit": "ns",
            "range": "± 407627.74995208555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150396783.85714287,
            "unit": "ns",
            "range": "± 869241.3396550826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974606.0631578948,
            "unit": "ns",
            "range": "± 83306.10724525346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1906574.4545454546,
            "unit": "ns",
            "range": "± 68370.02595502585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1395691.3626373627,
            "unit": "ns",
            "range": "± 77694.31353416291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5721544.794117647,
            "unit": "ns",
            "range": "± 112860.36069174415"
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
          "id": "baa4f279cf948220fcf52a5223fa564ac459d28e",
          "message": "Merge pull request #3561 from greymistcube/feature/helper-queries\n\n✨ QoL GraphQL queries",
          "timestamp": "2023-12-18T15:43:59+09:00",
          "tree_id": "bb91dfc788764d68cf62ade0d144340ff6a81ded",
          "url": "https://github.com/planetarium/libplanet/commit/baa4f279cf948220fcf52a5223fa564ac459d28e"
        },
        "date": 1702882484918,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3758203.6361979167,
            "unit": "ns",
            "range": "± 48711.07700123784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207735.777064732,
            "unit": "ns",
            "range": "± 2394.4847170359662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 786590.1405273437,
            "unit": "ns",
            "range": "± 12100.704421001867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955637.3540736607,
            "unit": "ns",
            "range": "± 3952.5425415783457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605430.8006310096,
            "unit": "ns",
            "range": "± 1059.2530493312997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579395.6609700521,
            "unit": "ns",
            "range": "± 11739.655664451086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2383554.64516129,
            "unit": "ns",
            "range": "± 50817.97883003507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2481720.2,
            "unit": "ns",
            "range": "± 73198.60111834624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3193543,
            "unit": "ns",
            "range": "± 71285.07275203665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2926610.76119403,
            "unit": "ns",
            "range": "± 75313.68617646837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7079377.439024391,
            "unit": "ns",
            "range": "± 250608.32262946182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41825.242105263154,
            "unit": "ns",
            "range": "± 6169.3079282122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193971.38888888888,
            "unit": "ns",
            "range": "± 5008.732147975048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190990.65384615384,
            "unit": "ns",
            "range": "± 7843.0528317081535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171731.53333333333,
            "unit": "ns",
            "range": "± 3106.176562607998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3076966.285714286,
            "unit": "ns",
            "range": "± 46379.47889452266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811700.285714286,
            "unit": "ns",
            "range": "± 19103.035978723266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14450.744680851063,
            "unit": "ns",
            "range": "± 2711.3470759696647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72677.08695652174,
            "unit": "ns",
            "range": "± 6764.078186023665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99882.86206896552,
            "unit": "ns",
            "range": "± 10982.752076178369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72441.96907216495,
            "unit": "ns",
            "range": "± 15240.294203370335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3324.563829787234,
            "unit": "ns",
            "range": "± 731.1996264573796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14750.010752688173,
            "unit": "ns",
            "range": "± 2070.2217613549205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5628525.3,
            "unit": "ns",
            "range": "± 14919.79163584877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14207765.866666667,
            "unit": "ns",
            "range": "± 256960.38748743985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37822488.538461536,
            "unit": "ns",
            "range": "± 162519.87013470865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75285280,
            "unit": "ns",
            "range": "± 424573.5149477378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148619256.2,
            "unit": "ns",
            "range": "± 1090687.0849315384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002764.252631579,
            "unit": "ns",
            "range": "± 87845.68388602586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2017678.9454545456,
            "unit": "ns",
            "range": "± 77409.60766703081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1526590.7684210527,
            "unit": "ns",
            "range": "± 95163.16149035517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6099351.452830189,
            "unit": "ns",
            "range": "± 252810.0264629828"
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
          "id": "ad5153274c4bedbf9c74cbc09ad47d009724faba",
          "message": "Merge pull request #3562 from greymistcube/refactor/irichstore\n\n♻️ Removed updated addresses from `IRichStore`",
          "timestamp": "2023-12-19T13:44:10+09:00",
          "tree_id": "36bf7b00a2e4e18bcec64a1ecbbbb17332996df9",
          "url": "https://github.com/planetarium/libplanet/commit/ad5153274c4bedbf9c74cbc09ad47d009724faba"
        },
        "date": 1702961692770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662190.2869591345,
            "unit": "ns",
            "range": "± 10272.031979603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207688.1853966345,
            "unit": "ns",
            "range": "± 11336.549693957617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764747.887094351,
            "unit": "ns",
            "range": "± 3204.6253757084646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961611.154296875,
            "unit": "ns",
            "range": "± 20762.416967405752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606437.5954589844,
            "unit": "ns",
            "range": "± 2295.9759941501943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580506.9729817709,
            "unit": "ns",
            "range": "± 950.2738034909877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380903.592592593,
            "unit": "ns",
            "range": "± 88609.99055209411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2595798.111111111,
            "unit": "ns",
            "range": "± 69752.70512445728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3141073.8,
            "unit": "ns",
            "range": "± 56539.934465068894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2910770.4680851065,
            "unit": "ns",
            "range": "± 110236.5572946082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6849454.285714285,
            "unit": "ns",
            "range": "± 147804.37319245425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41354.13829787234,
            "unit": "ns",
            "range": "± 5546.017078738333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202946.46296296295,
            "unit": "ns",
            "range": "± 7807.032351675753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194698.83018867925,
            "unit": "ns",
            "range": "± 7265.524105548194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165134.92307692306,
            "unit": "ns",
            "range": "± 2446.215221573198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141735.966666667,
            "unit": "ns",
            "range": "± 27650.470290153597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881605.9166666665,
            "unit": "ns",
            "range": "± 10558.595623371451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18496.56,
            "unit": "ns",
            "range": "± 6006.364466753141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96430.54,
            "unit": "ns",
            "range": "± 17882.60568144307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92093.21428571429,
            "unit": "ns",
            "range": "± 1585.2336968492607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62111.65957446808,
            "unit": "ns",
            "range": "± 16820.086910872844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2813.4684210526316,
            "unit": "ns",
            "range": "± 419.37573800883996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11566.869565217392,
            "unit": "ns",
            "range": "± 1074.9439159138715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5588251.366666666,
            "unit": "ns",
            "range": "± 23181.995568811173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14262898.566666666,
            "unit": "ns",
            "range": "± 111347.78707947113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36121353.14285714,
            "unit": "ns",
            "range": "± 241596.9006961348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75433566.14285715,
            "unit": "ns",
            "range": "± 308504.596601551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151404616.07142857,
            "unit": "ns",
            "range": "± 1222708.811356066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994346.1464646464,
            "unit": "ns",
            "range": "± 96528.34631903742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1915103.2222222222,
            "unit": "ns",
            "range": "± 63703.37149817834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1474210.0104166667,
            "unit": "ns",
            "range": "± 112684.70367487607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6209095.359550562,
            "unit": "ns",
            "range": "± 343492.2949561356"
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
          "id": "b8c41801dd5dc3558abe0defe9edca543997980d",
          "message": "Merge pull request #3563 from greymistcube/chore/cleanup\n\n🧹 Remove unnecessary usings",
          "timestamp": "2023-12-19T15:24:44+09:00",
          "tree_id": "bb928fd783d48f64083e075008c91e6889ce7a17",
          "url": "https://github.com/planetarium/libplanet/commit/b8c41801dd5dc3558abe0defe9edca543997980d"
        },
        "date": 1702967747378,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700125.897879464,
            "unit": "ns",
            "range": "± 26967.7006149098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189311.317545573,
            "unit": "ns",
            "range": "± 4629.061900465698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 788989.2213541666,
            "unit": "ns",
            "range": "± 1044.7366079402523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928739.08203125,
            "unit": "ns",
            "range": "± 3395.442803788512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630376.4001302083,
            "unit": "ns",
            "range": "± 11516.090341811207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574616.9375813802,
            "unit": "ns",
            "range": "± 1111.1449599892023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2366488.6,
            "unit": "ns",
            "range": "± 28150.2847836394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2537679.9857142856,
            "unit": "ns",
            "range": "± 82040.30992548059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3181714.466666667,
            "unit": "ns",
            "range": "± 56721.74839621756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3033868.84,
            "unit": "ns",
            "range": "± 120031.22695052896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6980346.282051282,
            "unit": "ns",
            "range": "± 214038.99826678765"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39992.43298969072,
            "unit": "ns",
            "range": "± 5782.3545573783085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199833.19565217392,
            "unit": "ns",
            "range": "± 7320.908460990541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190986.34782608695,
            "unit": "ns",
            "range": "± 7226.387805866286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166440.90476190476,
            "unit": "ns",
            "range": "± 3802.9594515950585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3104994.5714285714,
            "unit": "ns",
            "range": "± 37664.59048111223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870913.846153846,
            "unit": "ns",
            "range": "± 37327.37108308539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12633.944444444445,
            "unit": "ns",
            "range": "± 1376.853531993979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62867.04301075269,
            "unit": "ns",
            "range": "± 7713.58469634548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55017.94565217391,
            "unit": "ns",
            "range": "± 5913.0267074627445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64331.48387096774,
            "unit": "ns",
            "range": "± 16037.02283956727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2972.5224719101125,
            "unit": "ns",
            "range": "± 474.7496942774661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11862.127906976744,
            "unit": "ns",
            "range": "± 1166.3137283163126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5603235.153846154,
            "unit": "ns",
            "range": "± 38656.62582457276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14460630.857142856,
            "unit": "ns",
            "range": "± 186896.4533922284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36673524.733333334,
            "unit": "ns",
            "range": "± 214323.72658816405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75369670.5,
            "unit": "ns",
            "range": "± 652397.9762052564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150014388.33333334,
            "unit": "ns",
            "range": "± 368406.20983262226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945949.304347826,
            "unit": "ns",
            "range": "± 62050.606208130346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852300.512195122,
            "unit": "ns",
            "range": "± 65438.34627690478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1360089.7323943663,
            "unit": "ns",
            "range": "± 66295.07534736708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6125676.335051547,
            "unit": "ns",
            "range": "± 436392.08637296763"
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
          "id": "799a291b6fd45b2a79bc99ff176024670b8fbf3d",
          "message": "Merge pull request #3564 from greymistcube/remove/irichstore\n\n🧹 Remove `IRichStore`",
          "timestamp": "2023-12-19T16:42:47+09:00",
          "tree_id": "77bd1dbc57562835aab336666e502ff4af90e801",
          "url": "https://github.com/planetarium/libplanet/commit/799a291b6fd45b2a79bc99ff176024670b8fbf3d"
        },
        "date": 1702972635640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3691095.669921875,
            "unit": "ns",
            "range": "± 8859.677247686635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200897.556640625,
            "unit": "ns",
            "range": "± 1692.1281985299422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769935.470703125,
            "unit": "ns",
            "range": "± 3871.84032879671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938543.377704327,
            "unit": "ns",
            "range": "± 5598.383317495423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619160.9678485577,
            "unit": "ns",
            "range": "± 1271.6596460389296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591202.1492598684,
            "unit": "ns",
            "range": "± 12602.80855716162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423882.095238095,
            "unit": "ns",
            "range": "± 87250.79011391761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563512.1379310344,
            "unit": "ns",
            "range": "± 72566.94419328767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3128496.5,
            "unit": "ns",
            "range": "± 78380.2226861683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3034943.4,
            "unit": "ns",
            "range": "± 77924.65033019612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6972400,
            "unit": "ns",
            "range": "± 226224.24183516394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41353.760416666664,
            "unit": "ns",
            "range": "± 5788.026015190492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197618.2786885246,
            "unit": "ns",
            "range": "± 8407.98099651188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193570.66666666666,
            "unit": "ns",
            "range": "± 7240.45029848439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164241.4814814815,
            "unit": "ns",
            "range": "± 4331.426487094685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3078392.5,
            "unit": "ns",
            "range": "± 41622.98795246335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805967.947368421,
            "unit": "ns",
            "range": "± 59718.82196266255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14918.272727272728,
            "unit": "ns",
            "range": "± 2144.648930968832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64324.75257731959,
            "unit": "ns",
            "range": "± 6572.82590644828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53632.65053763441,
            "unit": "ns",
            "range": "± 4406.719878298115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59366.290322580644,
            "unit": "ns",
            "range": "± 10722.845130213145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2847.8315789473686,
            "unit": "ns",
            "range": "± 510.81061262554516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13509.469387755102,
            "unit": "ns",
            "range": "± 1971.8602091984715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5615411,
            "unit": "ns",
            "range": "± 27453.208752955154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14652987.583333334,
            "unit": "ns",
            "range": "± 116544.5376212719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37000310,
            "unit": "ns",
            "range": "± 306526.30737596645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73949898.35714285,
            "unit": "ns",
            "range": "± 330300.7350103858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151124326.86666667,
            "unit": "ns",
            "range": "± 914394.7373006495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987669.9795918367,
            "unit": "ns",
            "range": "± 108782.58406024524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1885529.7666666666,
            "unit": "ns",
            "range": "± 84260.21956895816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1424025.4587628867,
            "unit": "ns",
            "range": "± 107580.18847100342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6010415.212328767,
            "unit": "ns",
            "range": "± 298945.9942792752"
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
          "id": "75b92cb5b230ae83b7a4df2ad95bb9e09385a2a4",
          "message": "Merge pull request #3565 from greymistcube/chore/remove-execute-records\n\n🧹 Remove ExecuteRecord",
          "timestamp": "2023-12-19T18:18:26+09:00",
          "tree_id": "aef18ca1a5f3a2a0a1e649adcc6097661f51a3c9",
          "url": "https://github.com/planetarium/libplanet/commit/75b92cb5b230ae83b7a4df2ad95bb9e09385a2a4"
        },
        "date": 1702978141359,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739008.618582589,
            "unit": "ns",
            "range": "± 41942.512788137785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207199.5668247768,
            "unit": "ns",
            "range": "± 4119.619451556521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777476.2652869591,
            "unit": "ns",
            "range": "± 3041.7945117140657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960341.323939732,
            "unit": "ns",
            "range": "± 4434.165179627969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633944.7019042969,
            "unit": "ns",
            "range": "± 838.1729650851487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563122.8728515625,
            "unit": "ns",
            "range": "± 977.7697035135736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395889.310810811,
            "unit": "ns",
            "range": "± 80311.07148071105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492815.7916666665,
            "unit": "ns",
            "range": "± 48490.578431798094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3088603.3684210526,
            "unit": "ns",
            "range": "± 57382.08322020087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2898456.4444444445,
            "unit": "ns",
            "range": "± 82055.02696969165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7149895.933333334,
            "unit": "ns",
            "range": "± 200832.70109959913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39802.663157894734,
            "unit": "ns",
            "range": "± 5651.570370373866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192488.625,
            "unit": "ns",
            "range": "± 8303.002131568159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194060.66101694916,
            "unit": "ns",
            "range": "± 8469.88218908046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168378.04166666666,
            "unit": "ns",
            "range": "± 4206.446894523842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3127494.6428571427,
            "unit": "ns",
            "range": "± 30773.811012730494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772311.3076923075,
            "unit": "ns",
            "range": "± 27194.676223434537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15661.438775510203,
            "unit": "ns",
            "range": "± 3502.2887099085824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65009.60112359551,
            "unit": "ns",
            "range": "± 6872.535252472409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80559.25,
            "unit": "ns",
            "range": "± 14005.328336228164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93513.36170212766,
            "unit": "ns",
            "range": "± 12339.295709194574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3784.8947368421054,
            "unit": "ns",
            "range": "± 1285.5855646828575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17994.5,
            "unit": "ns",
            "range": "± 6004.786019619196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5594580.714285715,
            "unit": "ns",
            "range": "± 38596.35786011335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14409789.416666666,
            "unit": "ns",
            "range": "± 135914.07383240227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36348124.71428572,
            "unit": "ns",
            "range": "± 245306.59822617227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74435622.85714285,
            "unit": "ns",
            "range": "± 302479.2615077697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149279077.53846154,
            "unit": "ns",
            "range": "± 1348832.47845063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974051.7989690722,
            "unit": "ns",
            "range": "± 105867.30476896587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1905007.8,
            "unit": "ns",
            "range": "± 75547.94173488482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1416507.611111111,
            "unit": "ns",
            "range": "± 95421.43982030857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5782958.523809524,
            "unit": "ns",
            "range": "± 208279.32270159703"
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
          "id": "74c991ab6ece3ff9bd2f5b7740f7e3bbc7f1fc81",
          "message": "Merge pull request #3567 from greymistcube/refactor/tx-gas-policy\n\n♻️ Refactor tx gas policy",
          "timestamp": "2023-12-20T18:41:39+09:00",
          "tree_id": "e408a49df40a47b9b59e91767314eab8ddb4f697",
          "url": "https://github.com/planetarium/libplanet/commit/74c991ab6ece3ff9bd2f5b7740f7e3bbc7f1fc81"
        },
        "date": 1703065963390,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739629.2083333335,
            "unit": "ns",
            "range": "± 47587.73713061944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222632.02734375,
            "unit": "ns",
            "range": "± 15296.943098750578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772825.7415364584,
            "unit": "ns",
            "range": "± 4031.466594522375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944135.5276442308,
            "unit": "ns",
            "range": "± 3452.56382838365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614871.5561523438,
            "unit": "ns",
            "range": "± 411.5249096573299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588344.7727322049,
            "unit": "ns",
            "range": "± 12306.34589577277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2378786.9743589745,
            "unit": "ns",
            "range": "± 82307.0250041006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2484162.533333333,
            "unit": "ns",
            "range": "± 94387.0279645557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3174056.470588235,
            "unit": "ns",
            "range": "± 63664.23422939057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2981189.0816326533,
            "unit": "ns",
            "range": "± 118208.24010738365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6838161.523809524,
            "unit": "ns",
            "range": "± 160953.8985130895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41136.16494845361,
            "unit": "ns",
            "range": "± 5768.807536152966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204797.9024390244,
            "unit": "ns",
            "range": "± 10640.74908206191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204957.63402061857,
            "unit": "ns",
            "range": "± 21542.429519356323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167937.06976744186,
            "unit": "ns",
            "range": "± 6207.9608468456845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3078262.076923077,
            "unit": "ns",
            "range": "± 28880.594902291337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2829022.8333333335,
            "unit": "ns",
            "range": "± 20229.22250711639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15086.41237113402,
            "unit": "ns",
            "range": "± 3124.6960043891245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67258.67032967033,
            "unit": "ns",
            "range": "± 6442.801706047084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64265.85882352941,
            "unit": "ns",
            "range": "± 3512.802639573398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84427.09278350516,
            "unit": "ns",
            "range": "± 24067.400170355988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3174.934065934066,
            "unit": "ns",
            "range": "± 514.6175667899806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14369.091836734693,
            "unit": "ns",
            "range": "± 2862.120348340769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5612510.714285715,
            "unit": "ns",
            "range": "± 27689.252784397086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14509358.5,
            "unit": "ns",
            "range": "± 107357.43129420948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37627688.14285714,
            "unit": "ns",
            "range": "± 278960.7283264789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75846717.85714285,
            "unit": "ns",
            "range": "± 516061.64163638395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150049404.92857143,
            "unit": "ns",
            "range": "± 1241186.6757317658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005561.6530612245,
            "unit": "ns",
            "range": "± 90634.01343810727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933296.7608695652,
            "unit": "ns",
            "range": "± 106562.349068192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1420686.15625,
            "unit": "ns",
            "range": "± 109313.92449679556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6157639.458762887,
            "unit": "ns",
            "range": "± 356981.75685544824"
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
          "id": "7d27880ed049d2ad57c92287ef8d7a385f787e3e",
          "message": "Merge pull request #3572 from greymistcube/refactor/shortnode\n\n♻️ Refactor `ShortNode`",
          "timestamp": "2023-12-27T13:22:20+09:00",
          "tree_id": "9a6c9abd10c9c5f186ad70cb60d91371c7b633dd",
          "url": "https://github.com/planetarium/libplanet/commit/7d27880ed049d2ad57c92287ef8d7a385f787e3e"
        },
        "date": 1703651599696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3775611.9328125,
            "unit": "ns",
            "range": "± 99342.5340270527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212399.8638392857,
            "unit": "ns",
            "range": "± 3484.7461728932767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763326.814860026,
            "unit": "ns",
            "range": "± 1290.8439942112216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946526.576985677,
            "unit": "ns",
            "range": "± 3924.933662370426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613826.5489908854,
            "unit": "ns",
            "range": "± 1304.811309847188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580462.1319986979,
            "unit": "ns",
            "range": "± 11887.780288806154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437506.871794872,
            "unit": "ns",
            "range": "± 83751.13915366025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523484.8358208956,
            "unit": "ns",
            "range": "± 108300.89236678678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3140215.306451613,
            "unit": "ns",
            "range": "± 94971.11619730122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3084396.9285714286,
            "unit": "ns",
            "range": "± 86686.88936282186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7091445.59375,
            "unit": "ns",
            "range": "± 216468.82834723152"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38829.989795918365,
            "unit": "ns",
            "range": "± 4784.667219562575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198580.05454545454,
            "unit": "ns",
            "range": "± 8396.969608619578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188012.03773584907,
            "unit": "ns",
            "range": "± 7378.1965639992395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167944.97368421053,
            "unit": "ns",
            "range": "± 5787.963374652244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3048124.066666667,
            "unit": "ns",
            "range": "± 28426.288535857257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747397.4615384615,
            "unit": "ns",
            "range": "± 43114.09495863927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12564.208333333334,
            "unit": "ns",
            "range": "± 1410.620042218588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62599.96875,
            "unit": "ns",
            "range": "± 8143.629519870602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51853.829268292684,
            "unit": "ns",
            "range": "± 1849.4082283589937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58402.1030927835,
            "unit": "ns",
            "range": "± 11453.094413996936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2688.3894736842103,
            "unit": "ns",
            "range": "± 444.1945207096137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11273.75,
            "unit": "ns",
            "range": "± 735.60618187946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5567037.307692308,
            "unit": "ns",
            "range": "± 17520.9313126929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14539130.6,
            "unit": "ns",
            "range": "± 110492.79300466354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36553160,
            "unit": "ns",
            "range": "± 111766.44389814128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75132915.14285715,
            "unit": "ns",
            "range": "± 563039.828150844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147397220,
            "unit": "ns",
            "range": "± 1020666.3476459499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958976.0204081633,
            "unit": "ns",
            "range": "± 75577.56048572755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1846478.0789473683,
            "unit": "ns",
            "range": "± 62318.66097440034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1398200.0322580645,
            "unit": "ns",
            "range": "± 109132.38938360618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6047555.777777778,
            "unit": "ns",
            "range": "± 360666.6081267635"
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
          "id": "faa7b7fcbfbfb94934f96934ac29597cb4599176",
          "message": "Merge pull request #3573 from greymistcube/chore/fullnode-optimization\n\n⚡ ♻️ Slightly optimized `FullNode`",
          "timestamp": "2023-12-27T16:12:58+09:00",
          "tree_id": "d889867351d6c3596bc4fa674fbb5420ac7897dc",
          "url": "https://github.com/planetarium/libplanet/commit/faa7b7fcbfbfb94934f96934ac29597cb4599176"
        },
        "date": 1703661820254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773919.1,
            "unit": "ns",
            "range": "± 50269.38764099362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200816.2693810095,
            "unit": "ns",
            "range": "± 7231.352315730491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 791473.6373465402,
            "unit": "ns",
            "range": "± 3451.543634879515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942731.5401041666,
            "unit": "ns",
            "range": "± 7620.117797394244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622045.2107747396,
            "unit": "ns",
            "range": "± 3426.0409074210493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583285.5426682692,
            "unit": "ns",
            "range": "± 3122.7675284963807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2342392.6333333333,
            "unit": "ns",
            "range": "± 62200.79357043569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502833.3363636364,
            "unit": "ns",
            "range": "± 102788.86459303158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3194559.673076923,
            "unit": "ns",
            "range": "± 130513.05826271602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2976128.2558139535,
            "unit": "ns",
            "range": "± 154718.66075314107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6955606.619047619,
            "unit": "ns",
            "range": "± 160833.0645720824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41858.72631578947,
            "unit": "ns",
            "range": "± 5897.786684457478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202017.95454545456,
            "unit": "ns",
            "range": "± 9936.39606320523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207076.64285714287,
            "unit": "ns",
            "range": "± 21956.574955542375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169546.72727272726,
            "unit": "ns",
            "range": "± 4151.117832031664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3568224.6666666665,
            "unit": "ns",
            "range": "± 19916.236466001727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2922615.3571428573,
            "unit": "ns",
            "range": "± 42163.86918798012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14226.022222222222,
            "unit": "ns",
            "range": "± 1150.6946312258892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70556.98979591837,
            "unit": "ns",
            "range": "± 10889.467127198088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62923.68817204301,
            "unit": "ns",
            "range": "± 13300.465382490827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70652.45263157894,
            "unit": "ns",
            "range": "± 15459.151992767856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3579.5050505050503,
            "unit": "ns",
            "range": "± 797.0873172374297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13923.918367346938,
            "unit": "ns",
            "range": "± 2317.9697999040905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5613859.666666667,
            "unit": "ns",
            "range": "± 64020.76266746444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14966188,
            "unit": "ns",
            "range": "± 106187.70889471009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37035179.64285714,
            "unit": "ns",
            "range": "± 272990.25867795164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74534309.3076923,
            "unit": "ns",
            "range": "± 472496.5025049365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149039425.85714287,
            "unit": "ns",
            "range": "± 1352757.8316516033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984493.7395833334,
            "unit": "ns",
            "range": "± 97620.50885791794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1849784.1515151516,
            "unit": "ns",
            "range": "± 57950.393966047166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1365413.7252747254,
            "unit": "ns",
            "range": "± 73231.47001681509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5820992.257142857,
            "unit": "ns",
            "range": "± 190726.47138080522"
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
          "id": "9bc0a5956080f82a859025405eb3ddbc8779660b",
          "message": "Merge pull request #3574 from greymistcube/refactor/fullnode\n\n♻️ Changed `FullNode` to no longer inherit `BaseNode`",
          "timestamp": "2023-12-27T16:28:54+09:00",
          "tree_id": "58b8e3af75d02d34e4efe5417c31029d7f1e7d65",
          "url": "https://github.com/planetarium/libplanet/commit/9bc0a5956080f82a859025405eb3ddbc8779660b"
        },
        "date": 1703662776028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3787146.631610577,
            "unit": "ns",
            "range": "± 62172.95154192111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197404.5475725445,
            "unit": "ns",
            "range": "± 3707.592926198141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779559.6036458333,
            "unit": "ns",
            "range": "± 13196.010376213497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953871.2920673077,
            "unit": "ns",
            "range": "± 1722.2005196115597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633679.8283342634,
            "unit": "ns",
            "range": "± 946.8495274623635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565804.0675920759,
            "unit": "ns",
            "range": "± 751.8296650450284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2534180.9714285713,
            "unit": "ns",
            "range": "± 58386.10490039849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2648432.5,
            "unit": "ns",
            "range": "± 50900.292722144535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3232845.5714285714,
            "unit": "ns",
            "range": "± 49917.34295152997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3082088.1525423727,
            "unit": "ns",
            "range": "± 135166.60138087234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6950208.090909091,
            "unit": "ns",
            "range": "± 148288.6042269777"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39549.642105263156,
            "unit": "ns",
            "range": "± 4785.922474756408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199151.60344827586,
            "unit": "ns",
            "range": "± 7318.4717389885345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196866.60714285713,
            "unit": "ns",
            "range": "± 10088.871168084834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168078.85,
            "unit": "ns",
            "range": "± 3710.780358772617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3092453.8666666667,
            "unit": "ns",
            "range": "± 39781.514497254095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2810017.714285714,
            "unit": "ns",
            "range": "± 34033.832823843375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14752.58510638298,
            "unit": "ns",
            "range": "± 2313.239061369277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69933.76288659793,
            "unit": "ns",
            "range": "± 7377.6651282960065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66156.01098901099,
            "unit": "ns",
            "range": "± 10967.631103990107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82882.8163265306,
            "unit": "ns",
            "range": "± 17162.573365997185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3907.3315789473686,
            "unit": "ns",
            "range": "± 1243.0956353260312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15387.005050505051,
            "unit": "ns",
            "range": "± 3018.5621775726586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5824082.4375,
            "unit": "ns",
            "range": "± 109262.75911762357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14800584.285714285,
            "unit": "ns",
            "range": "± 203873.6489123476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36889905.76923077,
            "unit": "ns",
            "range": "± 166448.34493627638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76113542.57142857,
            "unit": "ns",
            "range": "± 633010.2714863218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152399800.64285713,
            "unit": "ns",
            "range": "± 897919.4089093587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989173.6063829787,
            "unit": "ns",
            "range": "± 92173.44003237884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1938120.328358209,
            "unit": "ns",
            "range": "± 87571.10426743412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384605.6573033708,
            "unit": "ns",
            "range": "± 81518.00061334737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5720025.923076923,
            "unit": "ns",
            "range": "± 80915.19139862998"
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
          "id": "1b348254dea706c8d825ff0ca8ffe11a62b7910d",
          "message": "Merge pull request #3575 from greymistcube/refactor/merkletrie-split\n\n♻️ 🧹 Minor code cleanup.",
          "timestamp": "2023-12-27T17:02:55+09:00",
          "tree_id": "e7541ac8b2d46dab6ea0d2bb84a32e1f2d35b86d",
          "url": "https://github.com/planetarium/libplanet/commit/1b348254dea706c8d825ff0ca8ffe11a62b7910d"
        },
        "date": 1703664823314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3740168.9052083334,
            "unit": "ns",
            "range": "± 61621.820438856535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1232111.1442307692,
            "unit": "ns",
            "range": "± 3940.5772407165273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773591.4266880581,
            "unit": "ns",
            "range": "± 9321.46668070028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971941.5421316964,
            "unit": "ns",
            "range": "± 5729.185464367804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619769.2111979167,
            "unit": "ns",
            "range": "± 956.1209943308867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588389.4600360577,
            "unit": "ns",
            "range": "± 5515.35115038749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396097.064102564,
            "unit": "ns",
            "range": "± 78229.33634069122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2486000.3636363638,
            "unit": "ns",
            "range": "± 46386.62733538566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3308472.212121212,
            "unit": "ns",
            "range": "± 102051.38707005579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2985867.283333333,
            "unit": "ns",
            "range": "± 133548.90910888262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7189097.435897436,
            "unit": "ns",
            "range": "± 251051.50049162118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42977.574468085106,
            "unit": "ns",
            "range": "± 5903.715495373134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201251.09411764707,
            "unit": "ns",
            "range": "± 10782.037226467974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195707.18181818182,
            "unit": "ns",
            "range": "± 10034.640447663067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164218.125,
            "unit": "ns",
            "range": "± 5089.099151855793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3053438.7333333334,
            "unit": "ns",
            "range": "± 52184.62862686492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2882805.1428571427,
            "unit": "ns",
            "range": "± 44736.55957828115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15328.845360824742,
            "unit": "ns",
            "range": "± 2912.7832385173515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68334.7052631579,
            "unit": "ns",
            "range": "± 6870.639070083292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63832.71428571428,
            "unit": "ns",
            "range": "± 14177.259507910516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63435.21052631579,
            "unit": "ns",
            "range": "± 13119.826026102905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3213.8315789473686,
            "unit": "ns",
            "range": "± 624.5332495898238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13814.957894736843,
            "unit": "ns",
            "range": "± 2248.932152821761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5845212.833333333,
            "unit": "ns",
            "range": "± 81727.96763625278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14833644.75,
            "unit": "ns",
            "range": "± 72799.82261607386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36486709.76923077,
            "unit": "ns",
            "range": "± 327961.2410751088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75039641.5,
            "unit": "ns",
            "range": "± 583900.7376628589"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153902722.30769232,
            "unit": "ns",
            "range": "± 938484.8839653187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976119.618556701,
            "unit": "ns",
            "range": "± 90488.05803730899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957002.8711340206,
            "unit": "ns",
            "range": "± 136810.78863596305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1387246.831460674,
            "unit": "ns",
            "range": "± 131447.42066707925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5733114.875,
            "unit": "ns",
            "range": "± 148088.67071698236"
          }
        ]
      }
    ]
  }
}