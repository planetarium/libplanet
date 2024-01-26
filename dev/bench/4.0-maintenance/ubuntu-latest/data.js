window.BENCHMARK_DATA = {
  "lastUpdate": 1706261078018,
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
          "id": "42fbee9dc6e6cde218c38433906f0c4d6353aca9",
          "message": "Merge pull request #3627 from greymistcube/release/4.0.0\n\n🚀 Release 4.0.0",
          "timestamp": "2024-01-22T18:01:32+09:00",
          "tree_id": "0245be269c574f07dbe7fadfeb6f381c819d1952",
          "url": "https://github.com/planetarium/libplanet/commit/42fbee9dc6e6cde218c38433906f0c4d6353aca9"
        },
        "date": 1705914821033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3764089.2878289474,
            "unit": "ns",
            "range": "± 81309.26350947516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233648.3430524555,
            "unit": "ns",
            "range": "± 3671.034295830251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775810.80078125,
            "unit": "ns",
            "range": "± 1730.3257403475654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964916.271205357,
            "unit": "ns",
            "range": "± 13034.062896134485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628854.7516276041,
            "unit": "ns",
            "range": "± 2883.9931638978474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572983.2393391927,
            "unit": "ns",
            "range": "± 1643.6733411301834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420186.44,
            "unit": "ns",
            "range": "± 63452.73916144204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2677015.0454545454,
            "unit": "ns",
            "range": "± 65140.745054533574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3202393.28125,
            "unit": "ns",
            "range": "± 98980.356340892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3208330.4235294117,
            "unit": "ns",
            "range": "± 172811.96596950994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13830500.043478262,
            "unit": "ns",
            "range": "± 937876.4341021667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40249.762886597935,
            "unit": "ns",
            "range": "± 5359.99777630006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204674.21641791044,
            "unit": "ns",
            "range": "± 9643.685878721559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194647.31967213115,
            "unit": "ns",
            "range": "± 8534.209677347979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165013,
            "unit": "ns",
            "range": "± 2744.3039971131893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3272154.4,
            "unit": "ns",
            "range": "± 30765.85043703953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2819184.714285714,
            "unit": "ns",
            "range": "± 31962.660783094467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15042.198924731183,
            "unit": "ns",
            "range": "± 1739.7110816163788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70447.83684210526,
            "unit": "ns",
            "range": "± 6719.614881965043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55092.058139534885,
            "unit": "ns",
            "range": "± 5788.771011708081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71607.6649484536,
            "unit": "ns",
            "range": "± 13698.159579605644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4815.772727272727,
            "unit": "ns",
            "range": "± 1997.773811113525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16892.18085106383,
            "unit": "ns",
            "range": "± 3056.149752716189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5630946.1,
            "unit": "ns",
            "range": "± 80081.21386068022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14950466.5,
            "unit": "ns",
            "range": "± 68177.73176988008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36966644.807692304,
            "unit": "ns",
            "range": "± 279146.96116364485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75423347.35714285,
            "unit": "ns",
            "range": "± 327021.8162877392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151756971.08333334,
            "unit": "ns",
            "range": "± 691771.2368140022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062483.452631579,
            "unit": "ns",
            "range": "± 119099.76198439588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2011616.3684210526,
            "unit": "ns",
            "range": "± 101094.02196277048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709062.543478261,
            "unit": "ns",
            "range": "± 155822.84160386623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13057605.47368421,
            "unit": "ns",
            "range": "± 998034.2140382107"
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
          "id": "c223d621dbf14ec8cf3ab832d7919c93a4621fba",
          "message": "Merge pull request #3628 from greymistcube/prepare/4.0.1\n\n🔧 Prepare 4.0.1",
          "timestamp": "2024-01-22T18:56:14+09:00",
          "tree_id": "944c887df52a61c35d84f4f3b2a40b6b0e31e8b6",
          "url": "https://github.com/planetarium/libplanet/commit/c223d621dbf14ec8cf3ab832d7919c93a4621fba"
        },
        "date": 1705918022399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731860.714092548,
            "unit": "ns",
            "range": "± 7081.1223196918545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204630.5893229167,
            "unit": "ns",
            "range": "± 3812.9454858080517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771410.2079380581,
            "unit": "ns",
            "range": "± 3824.237804131387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946418.5420673077,
            "unit": "ns",
            "range": "± 3967.0535241143466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622777.5111490885,
            "unit": "ns",
            "range": "± 1734.6642742299202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574714.2194010416,
            "unit": "ns",
            "range": "± 2785.578373546877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2508986.4285714286,
            "unit": "ns",
            "range": "± 71762.5381802287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2560169.8333333335,
            "unit": "ns",
            "range": "± 79600.01453308074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3119322.0714285714,
            "unit": "ns",
            "range": "± 43411.76665634877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3315487.3620689656,
            "unit": "ns",
            "range": "± 96161.53037828891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14062058.60989011,
            "unit": "ns",
            "range": "± 1117434.2294294098"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41904.197916666664,
            "unit": "ns",
            "range": "± 5070.047977806403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200211.9255319149,
            "unit": "ns",
            "range": "± 7697.836948425924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191032.73469387754,
            "unit": "ns",
            "range": "± 7060.526599740721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161887,
            "unit": "ns",
            "range": "± 2814.6364910807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3214583.4,
            "unit": "ns",
            "range": "± 29717.206393410725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2870191.9375,
            "unit": "ns",
            "range": "± 54979.40338765509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12804.835164835165,
            "unit": "ns",
            "range": "± 969.1935165525368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68591.43037974683,
            "unit": "ns",
            "range": "± 3517.3778464877314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62450.153846153844,
            "unit": "ns",
            "range": "± 1704.584992127003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65256.915789473685,
            "unit": "ns",
            "range": "± 10080.188982802025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3844.4545454545455,
            "unit": "ns",
            "range": "± 516.4443624625321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15119.255102040815,
            "unit": "ns",
            "range": "± 2254.181440164009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5706284.230769231,
            "unit": "ns",
            "range": "± 54488.66963133077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14452551.766666668,
            "unit": "ns",
            "range": "± 104623.4346177257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36124093.53333333,
            "unit": "ns",
            "range": "± 215957.9362200184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79724358.03846154,
            "unit": "ns",
            "range": "± 215497.08285868412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152697928.14285713,
            "unit": "ns",
            "range": "± 1148572.2642351617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966181.6521739131,
            "unit": "ns",
            "range": "± 71980.80398065769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900415.986111111,
            "unit": "ns",
            "range": "± 93309.16110368285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619942.5326086956,
            "unit": "ns",
            "range": "± 173652.9122765288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12769702.043478262,
            "unit": "ns",
            "range": "± 903424.1074246225"
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
          "id": "3965ad5df6473ea47aaf3872edbeea838e4b31f0",
          "message": "Merge pull request #3633 from greymistcube/refactor/worldstate-behavior\n\n♻️ More strict `IWorld.SetAccount()` behavior",
          "timestamp": "2024-01-26T12:57:28+09:00",
          "tree_id": "5a63cc075cd49b1b9f5dc9186adce5c94e8cf63e",
          "url": "https://github.com/planetarium/libplanet/commit/3965ad5df6473ea47aaf3872edbeea838e4b31f0"
        },
        "date": 1706242105076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2608153.1142857145,
            "unit": "ns",
            "range": "± 80432.05356981223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2752162,
            "unit": "ns",
            "range": "± 53126.14025003761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3150601.0714285714,
            "unit": "ns",
            "range": "± 51415.67041202111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3472621.2083333335,
            "unit": "ns",
            "range": "± 87359.23806453201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13640633.675824177,
            "unit": "ns",
            "range": "± 896556.8887926693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43137.73195876289,
            "unit": "ns",
            "range": "± 6203.335780239975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968584.9892473118,
            "unit": "ns",
            "range": "± 86627.97801675636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1880033.745614035,
            "unit": "ns",
            "range": "± 75517.74440210362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643719.4333333333,
            "unit": "ns",
            "range": "± 203571.68550914648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12602558.163043479,
            "unit": "ns",
            "range": "± 975630.2068803931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5812405.2,
            "unit": "ns",
            "range": "± 37172.634844927066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15753378.266666668,
            "unit": "ns",
            "range": "± 69748.40218801396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37826363.15384615,
            "unit": "ns",
            "range": "± 305258.5333210321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 82369168.85714285,
            "unit": "ns",
            "range": "± 458560.9113444527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151014844.46153846,
            "unit": "ns",
            "range": "± 1076123.6692112123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3692836.68359375,
            "unit": "ns",
            "range": "± 23928.889367863598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196368.5633370536,
            "unit": "ns",
            "range": "± 2712.604626960964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762708.6787109375,
            "unit": "ns",
            "range": "± 2470.3244195472075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935453.1430288462,
            "unit": "ns",
            "range": "± 2301.216546244883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611530.9126790365,
            "unit": "ns",
            "range": "± 1863.3343704608903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560056.1189152644,
            "unit": "ns",
            "range": "± 977.2120182499768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200364.2972972973,
            "unit": "ns",
            "range": "± 9341.758826109679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193483.98765432098,
            "unit": "ns",
            "range": "± 9621.264543309559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171249.4,
            "unit": "ns",
            "range": "± 5061.498087929862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3281977.214285714,
            "unit": "ns",
            "range": "± 55181.2115215769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2815214.3846153845,
            "unit": "ns",
            "range": "± 46413.216527440505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14991.927083333334,
            "unit": "ns",
            "range": "± 3003.900474014591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64961.21717171717,
            "unit": "ns",
            "range": "± 7988.40637097058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91256.96808510639,
            "unit": "ns",
            "range": "± 9560.932828586023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98695.71134020618,
            "unit": "ns",
            "range": "± 11735.07993240669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7509.714285714285,
            "unit": "ns",
            "range": "± 847.9742750425986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18714.23157894737,
            "unit": "ns",
            "range": "± 4543.739381040902"
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
          "id": "109625fd6caede15818989b09d5872f62c715068",
          "message": "Merge pull request #3637 from greymistcube/merge/3.9.6-to-4.0.1\n\n🔀 Merge 3.9.6 to 4.0-maintenance",
          "timestamp": "2024-01-26T15:49:42+09:00",
          "tree_id": "325a2bcac55fa63637e4047806c84fe2ec7ad395",
          "url": "https://github.com/planetarium/libplanet/commit/109625fd6caede15818989b09d5872f62c715068"
        },
        "date": 1706252472266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2473093.710526316,
            "unit": "ns",
            "range": "± 106609.83416675046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531384.474576271,
            "unit": "ns",
            "range": "± 103231.82010496904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3148569.125,
            "unit": "ns",
            "range": "± 59664.34207785529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3277585,
            "unit": "ns",
            "range": "± 63522.203044289956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14018857.652173912,
            "unit": "ns",
            "range": "± 1311438.0938229053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42118.04210526316,
            "unit": "ns",
            "range": "± 5167.737082263356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999962.4072164949,
            "unit": "ns",
            "range": "± 98796.88625323701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1940479.1612903227,
            "unit": "ns",
            "range": "± 127623.13930630923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595025.111111111,
            "unit": "ns",
            "range": "± 118045.86307980969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13235897.191489361,
            "unit": "ns",
            "range": "± 1094870.9513538573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5905977.857142857,
            "unit": "ns",
            "range": "± 76956.71323728499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14698984.8,
            "unit": "ns",
            "range": "± 151884.38851602134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36547751.461538464,
            "unit": "ns",
            "range": "± 336082.28111272975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74557789.07692307,
            "unit": "ns",
            "range": "± 344190.9324351485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149591781.26923078,
            "unit": "ns",
            "range": "± 546288.4352304427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3787018.4765625,
            "unit": "ns",
            "range": "± 57509.65412823015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1177459.720703125,
            "unit": "ns",
            "range": "± 4765.186930479668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763916.8192138672,
            "unit": "ns",
            "range": "± 14791.29727307131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944381.616048177,
            "unit": "ns",
            "range": "± 3370.556213811086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627907.703500601,
            "unit": "ns",
            "range": "± 965.5202612667634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560450.0059291294,
            "unit": "ns",
            "range": "± 1202.1807865565033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203904.71739130435,
            "unit": "ns",
            "range": "± 12190.34564215874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192878.76388888888,
            "unit": "ns",
            "range": "± 8925.987744281972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172508.5294117647,
            "unit": "ns",
            "range": "± 5496.0275033237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3231338.1428571427,
            "unit": "ns",
            "range": "± 46953.00649480392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2762127.6,
            "unit": "ns",
            "range": "± 41509.49645872788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18033,
            "unit": "ns",
            "range": "± 1856.5525541615127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68874.80612244898,
            "unit": "ns",
            "range": "± 7367.243662919538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59269.12631578947,
            "unit": "ns",
            "range": "± 7887.238205848069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64937.885416666664,
            "unit": "ns",
            "range": "± 8106.715490219455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5302.656565656565,
            "unit": "ns",
            "range": "± 1884.8341190565059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11843.566666666668,
            "unit": "ns",
            "range": "± 967.9987905090411"
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
          "id": "01c368ead33e909bb67e9a1fe6300edb539b037c",
          "message": "Merge pull request #3638 from greymistcube/chore/fix-changelog\n\n🧹 Fix changelog",
          "timestamp": "2024-01-26T16:17:16+09:00",
          "tree_id": "f4c0a18daa555aea8fd3e2452632ee0bd7a5d7b3",
          "url": "https://github.com/planetarium/libplanet/commit/01c368ead33e909bb67e9a1fe6300edb539b037c"
        },
        "date": 1706254093343,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420520.9375,
            "unit": "ns",
            "range": "± 47504.28436603552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528017.611111111,
            "unit": "ns",
            "range": "± 81302.36579839405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3170246.1428571427,
            "unit": "ns",
            "range": "± 45518.52156051363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3151120.2,
            "unit": "ns",
            "range": "± 138308.09224169602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13921842.912087912,
            "unit": "ns",
            "range": "± 989388.0160694697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41317.181818181816,
            "unit": "ns",
            "range": "± 6202.272574553122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948484.3444444444,
            "unit": "ns",
            "range": "± 58685.30952211011"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1853310.8867924528,
            "unit": "ns",
            "range": "± 77209.09113336839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561678.3548387096,
            "unit": "ns",
            "range": "± 101196.21539985156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12736431.139784947,
            "unit": "ns",
            "range": "± 1075635.8844085387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5572999.2,
            "unit": "ns",
            "range": "± 18396.298506570747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14220767.8,
            "unit": "ns",
            "range": "± 127018.56247313957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37229697.64285714,
            "unit": "ns",
            "range": "± 655264.6797362007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73368216.07142857,
            "unit": "ns",
            "range": "± 182916.86701191895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148108723.7857143,
            "unit": "ns",
            "range": "± 586910.1042807124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3670546.540885417,
            "unit": "ns",
            "range": "± 53641.13162109424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221823.8053850445,
            "unit": "ns",
            "range": "± 3298.7445226158648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754192.0234375,
            "unit": "ns",
            "range": "± 2029.2226121407232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962324.8682291666,
            "unit": "ns",
            "range": "± 22319.584059822984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620162.9348958334,
            "unit": "ns",
            "range": "± 2588.982218043658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582013.5343889509,
            "unit": "ns",
            "range": "± 1119.1628777854853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207567.44594594595,
            "unit": "ns",
            "range": "± 7033.766345066987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189017.29090909092,
            "unit": "ns",
            "range": "± 7937.665275439361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171188.26470588235,
            "unit": "ns",
            "range": "± 3264.515651850435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3214115.5,
            "unit": "ns",
            "range": "± 34452.934259318514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2829835.533333333,
            "unit": "ns",
            "range": "± 40399.581284723135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16914.09375,
            "unit": "ns",
            "range": "± 1621.8556433790668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69164.8163265306,
            "unit": "ns",
            "range": "± 2727.037034290983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54917.602150537634,
            "unit": "ns",
            "range": "± 5144.89152532749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67282.95918367348,
            "unit": "ns",
            "range": "± 13453.402259236596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3065.5777777777776,
            "unit": "ns",
            "range": "± 578.5549021324797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13171.758241758242,
            "unit": "ns",
            "range": "± 1280.6842471521"
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
          "id": "a53a465253e15d4ab870082cdd191b568e3edf8f",
          "message": "Merge pull request #3639 from greymistcube/release/4.0.1\n\n🚀 Release 4.0.1",
          "timestamp": "2024-01-26T16:46:01+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/planetarium/libplanet/commit/a53a465253e15d4ab870082cdd191b568e3edf8f"
        },
        "date": 1706255850958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2513227.9487179485,
            "unit": "ns",
            "range": "± 87008.31080750993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2643189.5405405406,
            "unit": "ns",
            "range": "± 88240.95202864666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3165605.28,
            "unit": "ns",
            "range": "± 54751.00153841936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3451562.4727272727,
            "unit": "ns",
            "range": "± 146440.41574405238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13789068.239130436,
            "unit": "ns",
            "range": "± 903066.5817660593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41283.86170212766,
            "unit": "ns",
            "range": "± 5194.457566558377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004550.8666666667,
            "unit": "ns",
            "range": "± 67085.774658679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1999953.267857143,
            "unit": "ns",
            "range": "± 85847.06447482716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1724794.1098901099,
            "unit": "ns",
            "range": "± 146347.6586462258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12967331.56521739,
            "unit": "ns",
            "range": "± 1125193.7933248598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5730523.333333333,
            "unit": "ns",
            "range": "± 25112.237855182044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14674268.333333334,
            "unit": "ns",
            "range": "± 106497.32184537832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36743754.71428572,
            "unit": "ns",
            "range": "± 204067.11221148586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75228287.85714285,
            "unit": "ns",
            "range": "± 298406.5327084093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149771452.15384614,
            "unit": "ns",
            "range": "± 932116.857105986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687944.0005208333,
            "unit": "ns",
            "range": "± 44534.588699347885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200581.242938702,
            "unit": "ns",
            "range": "± 5545.592359457984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766953.5967447917,
            "unit": "ns",
            "range": "± 10581.344051039283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1895127.5740559895,
            "unit": "ns",
            "range": "± 7254.028755756806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606671.7553335336,
            "unit": "ns",
            "range": "± 1236.2029057288985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572971.7966796875,
            "unit": "ns",
            "range": "± 1595.1106818561038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206237.28070175438,
            "unit": "ns",
            "range": "± 8923.35217031771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204814.7594936709,
            "unit": "ns",
            "range": "± 10401.379785461886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167286.76470588235,
            "unit": "ns",
            "range": "± 4963.879171354546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3257559.6428571427,
            "unit": "ns",
            "range": "± 42274.92305157377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808614.285714286,
            "unit": "ns",
            "range": "± 33785.68323879344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16367.438775510203,
            "unit": "ns",
            "range": "± 2742.8686806527403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70852.66666666667,
            "unit": "ns",
            "range": "± 6642.035900102137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83025.62,
            "unit": "ns",
            "range": "± 15551.059809465585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88266.47872340426,
            "unit": "ns",
            "range": "± 14005.6164532698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6796.5,
            "unit": "ns",
            "range": "± 1026.80787932925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17254.397959183672,
            "unit": "ns",
            "range": "± 2312.6941077176807"
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
          "id": "cb924e8036545dc84ea88916181e404ed19895ec",
          "message": "Merge pull request #3640 from greymistcube/prepare/4.0.2\n\n🔧 Prepare 4.0.2",
          "timestamp": "2024-01-26T18:12:57+09:00",
          "tree_id": "45947cb5d90cbe1550fc6fa9f09310ccc7cd8312",
          "url": "https://github.com/planetarium/libplanet/commit/cb924e8036545dc84ea88916181e404ed19895ec"
        },
        "date": 1706261051748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385491.6274509802,
            "unit": "ns",
            "range": "± 97274.86806590093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2620067.7083333335,
            "unit": "ns",
            "range": "± 66607.84132353186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3235044.0384615385,
            "unit": "ns",
            "range": "± 88542.39787332655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3266690.7291666665,
            "unit": "ns",
            "range": "± 120675.81386406672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13772101.528735632,
            "unit": "ns",
            "range": "± 848413.4744932139"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41365.5625,
            "unit": "ns",
            "range": "± 5274.140458406469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977469.8777777777,
            "unit": "ns",
            "range": "± 82289.11173029698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1877673.673076923,
            "unit": "ns",
            "range": "± 73853.35616883522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1645581.2448979593,
            "unit": "ns",
            "range": "± 189294.1133757398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12879918.410526317,
            "unit": "ns",
            "range": "± 997823.0525273238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5608970.576923077,
            "unit": "ns",
            "range": "± 39727.44323189688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14621008.266666668,
            "unit": "ns",
            "range": "± 130950.60959901019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36869972.5,
            "unit": "ns",
            "range": "± 297127.1905685221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75904903.61538461,
            "unit": "ns",
            "range": "± 446686.16669154837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151607170.3846154,
            "unit": "ns",
            "range": "± 622097.706007068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722988.870768229,
            "unit": "ns",
            "range": "± 4858.13978296988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1176515.9287109375,
            "unit": "ns",
            "range": "± 2567.750536754837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763656.458577474,
            "unit": "ns",
            "range": "± 972.8008194901142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933594.921484375,
            "unit": "ns",
            "range": "± 26166.403528423307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602823.4637920673,
            "unit": "ns",
            "range": "± 2837.908050507595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575640.0802083333,
            "unit": "ns",
            "range": "± 1494.894915097583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205099.08860759492,
            "unit": "ns",
            "range": "± 10668.248117770061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196523.31578947368,
            "unit": "ns",
            "range": "± 8509.7306239007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169189.33333333334,
            "unit": "ns",
            "range": "± 2573.831043035894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3216466.5,
            "unit": "ns",
            "range": "± 40948.1866828726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2795205.214285714,
            "unit": "ns",
            "range": "± 45550.5174068031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13929.752577319588,
            "unit": "ns",
            "range": "± 1745.6822629402893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65275.32989690721,
            "unit": "ns",
            "range": "± 8258.083133262082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56655.49462365591,
            "unit": "ns",
            "range": "± 6389.85247605386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68781.92708333333,
            "unit": "ns",
            "range": "± 13884.915327713925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3179.4777777777776,
            "unit": "ns",
            "range": "± 606.4179220058043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14862.368421052632,
            "unit": "ns",
            "range": "± 2230.653272563089"
          }
        ]
      }
    ]
  }
}