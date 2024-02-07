window.BENCHMARK_DATA = {
  "lastUpdate": 1707289000901,
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
          "id": "cebfa59eb4758e98836df6c9d4d6f167ebca4aa7",
          "message": "Merge pull request #3648 from greymistcube/chore/apv-parsing-log\n\n🔊 Added which string caused an APV parsing error to log",
          "timestamp": "2024-02-06T10:17:56+09:00",
          "tree_id": "00660c0b4df326a0cea1429d4df493cd2104ebb9",
          "url": "https://github.com/planetarium/libplanet/commit/cebfa59eb4758e98836df6c9d4d6f167ebca4aa7"
        },
        "date": 1707182935041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245393.60714285713,
            "unit": "ns",
            "range": "± 7011.056307265746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213901.70967741936,
            "unit": "ns",
            "range": "± 9440.951968422929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176443.87878787878,
            "unit": "ns",
            "range": "± 5572.067641131834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3295760.9375,
            "unit": "ns",
            "range": "± 60869.11233071472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2920832.8571428573,
            "unit": "ns",
            "range": "± 47614.92906780255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26683.081632653062,
            "unit": "ns",
            "range": "± 2977.6113123253726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88269.19191919192,
            "unit": "ns",
            "range": "± 16061.927198824624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94852.05882352941,
            "unit": "ns",
            "range": "± 1779.1966048819702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88404.76288659793,
            "unit": "ns",
            "range": "± 13473.189013102092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7211.132653061224,
            "unit": "ns",
            "range": "± 729.0582915865049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20459.48,
            "unit": "ns",
            "range": "± 4509.34391066444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40321.14736842105,
            "unit": "ns",
            "range": "± 5375.95890895917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2492176.125,
            "unit": "ns",
            "range": "± 66864.57493092697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2672097.7954545454,
            "unit": "ns",
            "range": "± 100178.11008110658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3324308,
            "unit": "ns",
            "range": "± 54251.95150867847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3403151.25,
            "unit": "ns",
            "range": "± 171486.25811398623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14128968.382022472,
            "unit": "ns",
            "range": "± 1092128.5192686748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985686.081632653,
            "unit": "ns",
            "range": "± 98818.13929363973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1874444.433962264,
            "unit": "ns",
            "range": "± 72177.27881551022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589689.0652173914,
            "unit": "ns",
            "range": "± 152608.46055696625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12763215.675824177,
            "unit": "ns",
            "range": "± 1014988.4057044373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5553334.866666666,
            "unit": "ns",
            "range": "± 42293.333748386176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14919988.57142857,
            "unit": "ns",
            "range": "± 79363.71376305254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36718699.038461536,
            "unit": "ns",
            "range": "± 157482.19835990743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75541849.25,
            "unit": "ns",
            "range": "± 405686.3904256195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150151015.16666666,
            "unit": "ns",
            "range": "± 591402.6423679453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3699042.4637276786,
            "unit": "ns",
            "range": "± 5776.135437432058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221135.6787860577,
            "unit": "ns",
            "range": "± 3915.9805259658424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750033.9807692308,
            "unit": "ns",
            "range": "± 681.4859155334374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940405.0196814905,
            "unit": "ns",
            "range": "± 3146.782418993969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615329.1005045573,
            "unit": "ns",
            "range": "± 804.9315660610914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570922.4809895833,
            "unit": "ns",
            "range": "± 659.3809855476123"
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
          "id": "8668a8f7757123df6f788b3e38c964dec763ece9",
          "message": "Merge pull request #3650 from greymistcube/chore/changelog-checker\n\n📈 Added GitHub action to check changelog",
          "timestamp": "2024-02-06T10:47:08+09:00",
          "tree_id": "d8093f71bda1d6357463a066a3fc42579702174f",
          "url": "https://github.com/planetarium/libplanet/commit/8668a8f7757123df6f788b3e38c964dec763ece9"
        },
        "date": 1707184693316,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203490.40322580645,
            "unit": "ns",
            "range": "± 9199.040966513629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196691.20588235295,
            "unit": "ns",
            "range": "± 10216.420928634274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168982.67647058822,
            "unit": "ns",
            "range": "± 3249.414182496864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3168827.5,
            "unit": "ns",
            "range": "± 73562.58313374758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814629.5,
            "unit": "ns",
            "range": "± 42627.82356043996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12660.285714285714,
            "unit": "ns",
            "range": "± 1293.6879064563957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65912.06565656565,
            "unit": "ns",
            "range": "± 6491.205202648434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54677.01648351648,
            "unit": "ns",
            "range": "± 4649.10794636428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61382.113402061856,
            "unit": "ns",
            "range": "± 12716.242159698335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5314.358585858586,
            "unit": "ns",
            "range": "± 1871.6978105676392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11909.58510638298,
            "unit": "ns",
            "range": "± 999.9847058999751"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40779.989795918365,
            "unit": "ns",
            "range": "± 5756.31648488177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437184.515151515,
            "unit": "ns",
            "range": "± 76821.94086820233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2480544.314814815,
            "unit": "ns",
            "range": "± 63486.21160537813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3160118.4523809524,
            "unit": "ns",
            "range": "± 74822.350862878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3188583.722222222,
            "unit": "ns",
            "range": "± 157026.6612919129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13974941.362637363,
            "unit": "ns",
            "range": "± 806470.1428050997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018989.6315789474,
            "unit": "ns",
            "range": "± 141480.6944285327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858905.7272727273,
            "unit": "ns",
            "range": "± 57477.60097217911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566987.0280898877,
            "unit": "ns",
            "range": "± 156997.5344500302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12653086.52688172,
            "unit": "ns",
            "range": "± 895913.3052735555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5490300.6,
            "unit": "ns",
            "range": "± 29378.239332150977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14299360.5,
            "unit": "ns",
            "range": "± 138994.61694939516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36902127.384615384,
            "unit": "ns",
            "range": "± 343244.0847702352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74482120.28571428,
            "unit": "ns",
            "range": "± 804237.1906731705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149312295.2857143,
            "unit": "ns",
            "range": "± 1528670.2332688938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722923.5826822915,
            "unit": "ns",
            "range": "± 7701.992280358374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202895.7890625,
            "unit": "ns",
            "range": "± 3421.142785555019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757397.4516601562,
            "unit": "ns",
            "range": "± 2701.547528928772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936879.6484375,
            "unit": "ns",
            "range": "± 6691.871348047541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618264.8254206731,
            "unit": "ns",
            "range": "± 5516.648337554285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594593.2150691106,
            "unit": "ns",
            "range": "± 953.8736134312832"
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
          "id": "9821f30849d2489011ec931e226194f82296bf1f",
          "message": "Merge pull request #3649 from greymistcube/chore/update-graphql-schema\n\n📝 Updated graphql schema",
          "timestamp": "2024-02-06T11:13:01+09:00",
          "tree_id": "73ebd0ce727580667e70013cc894375f97c0ab4d",
          "url": "https://github.com/planetarium/libplanet/commit/9821f30849d2489011ec931e226194f82296bf1f"
        },
        "date": 1707186246901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196291.05660377358,
            "unit": "ns",
            "range": "± 7587.67087354189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192863,
            "unit": "ns",
            "range": "± 7775.358728701847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172546.23076923078,
            "unit": "ns",
            "range": "± 1830.7621889004843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3159236,
            "unit": "ns",
            "range": "± 49953.23838120238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2731286,
            "unit": "ns",
            "range": "± 30191.223385918987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12573.681318681318,
            "unit": "ns",
            "range": "± 921.5065789735717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63637.260416666664,
            "unit": "ns",
            "range": "± 8122.58406931244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54876.50515463918,
            "unit": "ns",
            "range": "± 5385.575613625466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61196.95789473684,
            "unit": "ns",
            "range": "± 10701.274432868731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2829.478494623656,
            "unit": "ns",
            "range": "± 274.1447958610727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15363.031914893618,
            "unit": "ns",
            "range": "± 2313.6523909324105"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39457.541666666664,
            "unit": "ns",
            "range": "± 4925.988988419999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442781.714285714,
            "unit": "ns",
            "range": "± 88712.7027141852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2619686.085106383,
            "unit": "ns",
            "range": "± 91972.53979191401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191429.1923076925,
            "unit": "ns",
            "range": "± 83620.66157117832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3249764.2075471696,
            "unit": "ns",
            "range": "± 135637.38588297708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13872728.41935484,
            "unit": "ns",
            "range": "± 1006934.0160220804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952396.5520833334,
            "unit": "ns",
            "range": "± 68628.72175560161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1865468.7894736843,
            "unit": "ns",
            "range": "± 63336.81070498264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1572447.127118644,
            "unit": "ns",
            "range": "± 69267.9373728787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12732806.578651685,
            "unit": "ns",
            "range": "± 1048042.7439038255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5740061.214285715,
            "unit": "ns",
            "range": "± 30784.961434562047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14872459.2,
            "unit": "ns",
            "range": "± 101776.15552082915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36418362.07692308,
            "unit": "ns",
            "range": "± 189209.3697655508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75553241.85714285,
            "unit": "ns",
            "range": "± 684954.6606499539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149456626.76923078,
            "unit": "ns",
            "range": "± 1318360.1766491428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3740520.1529947915,
            "unit": "ns",
            "range": "± 17075.439342031645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192874.9693509615,
            "unit": "ns",
            "range": "± 2628.6761111912924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 800272.2318359375,
            "unit": "ns",
            "range": "± 14057.936858275847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950486.0545247395,
            "unit": "ns",
            "range": "± 5417.771582039347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606560.0748197115,
            "unit": "ns",
            "range": "± 994.5467808524319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575398.5668569711,
            "unit": "ns",
            "range": "± 3515.7850464426865"
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
          "id": "aefc466003f3d23a70c1a2320daa38cf38489af4",
          "message": "Merge pull request #3652 from greymistcube/release/4.0.2\n\n🚀 Release 4.0.2",
          "timestamp": "2024-02-06T12:58:15+09:00",
          "tree_id": "ef42b44dbe32becfe4bec6a583d944ef92df7e9c",
          "url": "https://github.com/planetarium/libplanet/commit/aefc466003f3d23a70c1a2320daa38cf38489af4"
        },
        "date": 1707192576631,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203857.65454545454,
            "unit": "ns",
            "range": "± 8196.418974654773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189379.85483870967,
            "unit": "ns",
            "range": "± 8222.73515151895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178285.25531914894,
            "unit": "ns",
            "range": "± 6902.491920748889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3213439.785714286,
            "unit": "ns",
            "range": "± 29978.16626615642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2839630.285714286,
            "unit": "ns",
            "range": "± 21133.880375354172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12630.87912087912,
            "unit": "ns",
            "range": "± 1148.4672378161235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63035.30107526882,
            "unit": "ns",
            "range": "± 6813.016114928941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57390.655913978495,
            "unit": "ns",
            "range": "± 6568.642627459225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63525.07731958763,
            "unit": "ns",
            "range": "± 12689.689775590665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2858.857894736842,
            "unit": "ns",
            "range": "± 415.4966245552391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13758.051020408164,
            "unit": "ns",
            "range": "± 2671.622543106342"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39489,
            "unit": "ns",
            "range": "± 4977.471283588422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2438028.0588235296,
            "unit": "ns",
            "range": "± 78180.8073840614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567875.4782608696,
            "unit": "ns",
            "range": "± 97978.96837280701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191129.1379310344,
            "unit": "ns",
            "range": "± 80997.38337869057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3182018.527027027,
            "unit": "ns",
            "range": "± 151645.45969041882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13927038.085106382,
            "unit": "ns",
            "range": "± 1054396.5408407496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978133.3958333334,
            "unit": "ns",
            "range": "± 77067.61512190779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1915000.2173913044,
            "unit": "ns",
            "range": "± 115332.46912823795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1632646.1505376345,
            "unit": "ns",
            "range": "± 133760.79557122354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12673522.076923076,
            "unit": "ns",
            "range": "± 1048457.0245806316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5495101.2,
            "unit": "ns",
            "range": "± 36336.97759701148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14134660.5,
            "unit": "ns",
            "range": "± 141591.44694887797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37699445.666666664,
            "unit": "ns",
            "range": "± 530702.4655470018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74385491.6,
            "unit": "ns",
            "range": "± 586140.0823959357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150606362.16666666,
            "unit": "ns",
            "range": "± 455079.22107711266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3790527.5205729166,
            "unit": "ns",
            "range": "± 50736.753412677004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1180482.539341518,
            "unit": "ns",
            "range": "± 3959.776413894631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768247.1582782452,
            "unit": "ns",
            "range": "± 3385.3648985046243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944098.886439732,
            "unit": "ns",
            "range": "± 9445.11688025609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613090.6896972656,
            "unit": "ns",
            "range": "± 946.0291986011142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574189.6940104166,
            "unit": "ns",
            "range": "± 2239.845548617764"
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
          "id": "a602c0a450304dcab4a19a850e010cb85f479d11",
          "message": "Merge pull request #3653 from greymistcube/prepare/4.0.3\n\n🔧 Prepare 4.0.3",
          "timestamp": "2024-02-06T14:34:19+09:00",
          "tree_id": "a9aeb51f656297f693ffd7fd27d8441e992b96d3",
          "url": "https://github.com/planetarium/libplanet/commit/a602c0a450304dcab4a19a850e010cb85f479d11"
        },
        "date": 1707198307272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205472.36538461538,
            "unit": "ns",
            "range": "± 8278.789769063284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207179.23333333334,
            "unit": "ns",
            "range": "± 6196.664774133623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171801.04545454544,
            "unit": "ns",
            "range": "± 4124.814186028757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3238202.5,
            "unit": "ns",
            "range": "± 37967.143652988525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877925.6428571427,
            "unit": "ns",
            "range": "± 28760.604655185325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16593.171717171717,
            "unit": "ns",
            "range": "± 3430.9771798990214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69981.48969072165,
            "unit": "ns",
            "range": "± 7948.678580555131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98193.70588235294,
            "unit": "ns",
            "range": "± 1497.3159638460531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74276.89583333333,
            "unit": "ns",
            "range": "± 15505.754547046257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3769.054945054945,
            "unit": "ns",
            "range": "± 668.8169881321523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15002.474226804125,
            "unit": "ns",
            "range": "± 2243.991301290253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38814.645161290326,
            "unit": "ns",
            "range": "± 4437.077631203853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2521005.7333333334,
            "unit": "ns",
            "range": "± 61525.55477922937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2634217.125,
            "unit": "ns",
            "range": "± 67801.47974678178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3165415.16,
            "unit": "ns",
            "range": "± 67981.09313483174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3487005.16,
            "unit": "ns",
            "range": "± 91885.55524205096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13975841.77173913,
            "unit": "ns",
            "range": "± 907610.8351540517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995696.8865979381,
            "unit": "ns",
            "range": "± 79102.5096140914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1949312.2419354839,
            "unit": "ns",
            "range": "± 88234.19467306563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1674109.2577319588,
            "unit": "ns",
            "range": "± 150541.71939859382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12771775.847368421,
            "unit": "ns",
            "range": "± 1119253.157626765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5638848.5,
            "unit": "ns",
            "range": "± 40269.13564470224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14538132.642857144,
            "unit": "ns",
            "range": "± 79648.15786232999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37544520.928571425,
            "unit": "ns",
            "range": "± 220605.0801149714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74779256.03846154,
            "unit": "ns",
            "range": "± 214084.42875986078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151715080.83333334,
            "unit": "ns",
            "range": "± 576237.9606014789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3833116.9822716345,
            "unit": "ns",
            "range": "± 37478.92093884864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1183096.9399038462,
            "unit": "ns",
            "range": "± 2476.7378755879154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762708.3594563802,
            "unit": "ns",
            "range": "± 2146.727504493767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927051.4732572115,
            "unit": "ns",
            "range": "± 3103.0677627206483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626849.986328125,
            "unit": "ns",
            "range": "± 2240.668054229345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583317.4033203125,
            "unit": "ns",
            "range": "± 1985.7766412889894"
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
          "id": "06ebc6e1fa1938652760331fdb6f0a3027418e0c",
          "message": "Merge pull request #3657 from greymistcube/revert/graphql-type-changes\n\n⏪ Revert graphql type changes",
          "timestamp": "2024-02-06T18:12:11+09:00",
          "tree_id": "958311acadc0b8cce6ebec4f5fc0e200ae4f6e8a",
          "url": "https://github.com/planetarium/libplanet/commit/06ebc6e1fa1938652760331fdb6f0a3027418e0c"
        },
        "date": 1707211403174,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202389.2901234568,
            "unit": "ns",
            "range": "± 10496.501417991676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202461.17213114753,
            "unit": "ns",
            "range": "± 9072.846401435643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170677.38709677418,
            "unit": "ns",
            "range": "± 5158.205958647634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3280664.2,
            "unit": "ns",
            "range": "± 61272.73115482472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846077,
            "unit": "ns",
            "range": "± 37844.606518914006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16266.01030927835,
            "unit": "ns",
            "range": "± 2452.6729869965566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62439.406593406595,
            "unit": "ns",
            "range": "± 6902.101612275659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58854.257731958765,
            "unit": "ns",
            "range": "± 6295.771054641808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63246.729166666664,
            "unit": "ns",
            "range": "± 11422.460867200169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3129.5104166666665,
            "unit": "ns",
            "range": "± 417.6992873194698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13913.11,
            "unit": "ns",
            "range": "± 3309.0252856865764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39774.02105263158,
            "unit": "ns",
            "range": "± 5859.063656909889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2404509.4285714286,
            "unit": "ns",
            "range": "± 87577.33067142066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2535551.0692307693,
            "unit": "ns",
            "range": "± 108127.57201391344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139099.263157895,
            "unit": "ns",
            "range": "± 69219.77803252006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3214793.904761905,
            "unit": "ns",
            "range": "± 117456.71597112878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13988521.776595745,
            "unit": "ns",
            "range": "± 1231071.5745860985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967741.5617977529,
            "unit": "ns",
            "range": "± 75005.05875999223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054834.6865671643,
            "unit": "ns",
            "range": "± 96459.0920015522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551685.2802197803,
            "unit": "ns",
            "range": "± 117444.73030056895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12632245.680851065,
            "unit": "ns",
            "range": "± 1005784.5083363546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5650418.666666667,
            "unit": "ns",
            "range": "± 15780.419275645103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14293703.857142856,
            "unit": "ns",
            "range": "± 108771.79775804242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35827090.428571425,
            "unit": "ns",
            "range": "± 186013.0926915813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73514189.58333333,
            "unit": "ns",
            "range": "± 231983.14737554782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149430305.4,
            "unit": "ns",
            "range": "± 910743.628268351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709204.9775390625,
            "unit": "ns",
            "range": "± 13833.68974135113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213879.645733173,
            "unit": "ns",
            "range": "± 2628.5487244074247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763773.4952566965,
            "unit": "ns",
            "range": "± 1571.3967313633186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942542.705859375,
            "unit": "ns",
            "range": "± 26106.16565876219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633767.8937800481,
            "unit": "ns",
            "range": "± 6571.921504271237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566178.1862444197,
            "unit": "ns",
            "range": "± 956.7825489160823"
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
          "id": "c57e5060f0c17c297c25d36b05f3910af26937af",
          "message": "Merge pull request #3658 from greymistcube/release/4.0.3\n\n🚀 Release 4.0.3",
          "timestamp": "2024-02-06T18:47:26+09:00",
          "tree_id": "52802fbf3945f1888b4771fd252a9ead9b4186dc",
          "url": "https://github.com/planetarium/libplanet/commit/c57e5060f0c17c297c25d36b05f3910af26937af"
        },
        "date": 1707213528165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208800.1739130435,
            "unit": "ns",
            "range": "± 9973.777144499118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198058.65476190476,
            "unit": "ns",
            "range": "± 10591.72930633387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165142.23076923078,
            "unit": "ns",
            "range": "± 4389.889222362608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3209700.1428571427,
            "unit": "ns",
            "range": "± 28300.778526549253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929369.5714285714,
            "unit": "ns",
            "range": "± 36743.70788723149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15942.08762886598,
            "unit": "ns",
            "range": "± 2737.0891386980243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63857.79347826087,
            "unit": "ns",
            "range": "± 6449.183942818552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88202.88383838384,
            "unit": "ns",
            "range": "± 15802.913183196777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73635.27551020408,
            "unit": "ns",
            "range": "± 20071.32390641687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3901.2,
            "unit": "ns",
            "range": "± 526.3918777762098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14992.694736842106,
            "unit": "ns",
            "range": "± 2914.822826168124"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39334.072916666664,
            "unit": "ns",
            "range": "± 4379.033704380554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380198.7959183673,
            "unit": "ns",
            "range": "± 93938.44284423257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2597625.9591836734,
            "unit": "ns",
            "range": "± 95761.60155127401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3203784.222222222,
            "unit": "ns",
            "range": "± 65993.35930634194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3231256.340425532,
            "unit": "ns",
            "range": "± 188114.4047684357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13906484.77173913,
            "unit": "ns",
            "range": "± 1014533.4399627659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001980.3723404255,
            "unit": "ns",
            "range": "± 101055.77233623409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1930177.4710144927,
            "unit": "ns",
            "range": "± 92779.47696157731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1640654.6304347827,
            "unit": "ns",
            "range": "± 139214.7107875605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12754217.903225806,
            "unit": "ns",
            "range": "± 967781.3196667604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5648478.2,
            "unit": "ns",
            "range": "± 44640.87385409411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14383055.733333332,
            "unit": "ns",
            "range": "± 180821.0311414761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36584889.73076923,
            "unit": "ns",
            "range": "± 176198.63970159448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74930235.78571428,
            "unit": "ns",
            "range": "± 1144233.1827486495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150379524.43333334,
            "unit": "ns",
            "range": "± 999354.2732837516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709913.537667411,
            "unit": "ns",
            "range": "± 42512.50217519386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1231489.4674479167,
            "unit": "ns",
            "range": "± 26062.438125424953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757762.5102163461,
            "unit": "ns",
            "range": "± 2912.2537975463247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910660.3064778645,
            "unit": "ns",
            "range": "± 3805.334582823768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625440.4621744792,
            "unit": "ns",
            "range": "± 938.7748343745473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576974.8452473958,
            "unit": "ns",
            "range": "± 1767.9989779718398"
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
          "id": "49170f9c8cc8e14c9d75815f6ba24fa73021f520",
          "message": "Merge pull request #3659 from greymistcube/prepare/4.0.4\n\n🔧 Prepare 4.0.4",
          "timestamp": "2024-02-06T19:07:49+09:00",
          "tree_id": "75058dbf56fb8f6737f039bf16f5d40f7545fd4f",
          "url": "https://github.com/planetarium/libplanet/commit/49170f9c8cc8e14c9d75815f6ba24fa73021f520"
        },
        "date": 1707214744572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198123.63829787233,
            "unit": "ns",
            "range": "± 6788.829486819513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192156.04761904763,
            "unit": "ns",
            "range": "± 6450.4457662275545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167627.91025641025,
            "unit": "ns",
            "range": "± 5749.535284277782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3217882,
            "unit": "ns",
            "range": "± 46237.4642254525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2792171.6,
            "unit": "ns",
            "range": "± 47004.70176299996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14949.744897959185,
            "unit": "ns",
            "range": "± 2786.7137365929725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60472.5,
            "unit": "ns",
            "range": "± 2485.3263796397714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53252.44117647059,
            "unit": "ns",
            "range": "± 1701.4801433613968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60869.58762886598,
            "unit": "ns",
            "range": "± 9565.779293651165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3195.8279569892475,
            "unit": "ns",
            "range": "± 425.3192055400455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12040.130434782608,
            "unit": "ns",
            "range": "± 762.9420673841654"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41304.08163265306,
            "unit": "ns",
            "range": "± 5921.9830522906705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2351656.515625,
            "unit": "ns",
            "range": "± 101220.36822640314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527979.6875,
            "unit": "ns",
            "range": "± 49073.66519117798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3208996.6875,
            "unit": "ns",
            "range": "± 59700.5020779767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3108861.492753623,
            "unit": "ns",
            "range": "± 149698.27692705783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13924667.608695652,
            "unit": "ns",
            "range": "± 948567.9895295608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013355.2197802198,
            "unit": "ns",
            "range": "± 139807.49827068188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1882226.9264705882,
            "unit": "ns",
            "range": "± 89365.11394363403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1638013.6105263159,
            "unit": "ns",
            "range": "± 186695.9842795002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12709496.382022472,
            "unit": "ns",
            "range": "± 973445.8475096751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5471082.846153846,
            "unit": "ns",
            "range": "± 27864.308971771738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13951403.4,
            "unit": "ns",
            "range": "± 92331.09167849613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36495931.73076923,
            "unit": "ns",
            "range": "± 167135.3325727158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74586421.53333333,
            "unit": "ns",
            "range": "± 943437.8061821766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149094768.2142857,
            "unit": "ns",
            "range": "± 808965.9966510125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3745420.226236979,
            "unit": "ns",
            "range": "± 10875.287387818713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1179329.967923678,
            "unit": "ns",
            "range": "± 3511.0399736963955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779247.4900251116,
            "unit": "ns",
            "range": "± 1898.1494542184303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943297.446875,
            "unit": "ns",
            "range": "± 28265.190259984054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614743.7405348558,
            "unit": "ns",
            "range": "± 1823.9920789512992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584111.51171875,
            "unit": "ns",
            "range": "± 1402.8493114350758"
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
          "id": "b206b23258049946ef7d73845e027d461502c244",
          "message": "Merge pull request #3663 from greymistcube/revert/graphql-query-argument-type-change\n\n⏪ Revert query argument type to be compatible with legacy queries",
          "timestamp": "2024-02-07T15:45:18+09:00",
          "tree_id": "860337a27fac6ecfcb572b6ddca5876c812426c9",
          "url": "https://github.com/planetarium/libplanet/commit/b206b23258049946ef7d73845e027d461502c244"
        },
        "date": 1707288973966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197296.75,
            "unit": "ns",
            "range": "± 7301.668151245241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191091,
            "unit": "ns",
            "range": "± 7547.265870661307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161789.38461538462,
            "unit": "ns",
            "range": "± 1928.6219405947834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3186677.1428571427,
            "unit": "ns",
            "range": "± 43091.509713198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840360.3571428573,
            "unit": "ns",
            "range": "± 35672.94102647022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15315.378947368421,
            "unit": "ns",
            "range": "± 1938.6869551813593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69702.75555555556,
            "unit": "ns",
            "range": "± 3891.5295491246575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51044.692307692305,
            "unit": "ns",
            "range": "± 816.6634746143791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61417.9693877551,
            "unit": "ns",
            "range": "± 9084.641443320283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3148.4052631578948,
            "unit": "ns",
            "range": "± 518.1297191081287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12155.576086956522,
            "unit": "ns",
            "range": "± 1028.1439292249418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38406.742105263154,
            "unit": "ns",
            "range": "± 4302.7075140427305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2426390.0384615385,
            "unit": "ns",
            "range": "± 63668.74285957326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496444.3695652173,
            "unit": "ns",
            "range": "± 95659.3532836082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3087346.430232558,
            "unit": "ns",
            "range": "± 102486.01323604517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3095814.75,
            "unit": "ns",
            "range": "± 142195.53505559178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14048143.983516483,
            "unit": "ns",
            "range": "± 1207175.2807313937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947798.3139534884,
            "unit": "ns",
            "range": "± 58356.43232966982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1848870.6875,
            "unit": "ns",
            "range": "± 72923.15545385481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557474.9278350514,
            "unit": "ns",
            "range": "± 118471.20374494379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13041814.627659574,
            "unit": "ns",
            "range": "± 1141306.486112759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5552326.166666667,
            "unit": "ns",
            "range": "± 29861.91151585833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14034991,
            "unit": "ns",
            "range": "± 131941.8573492477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35854101.15384615,
            "unit": "ns",
            "range": "± 124499.00748924745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74708392.71428572,
            "unit": "ns",
            "range": "± 685322.6266035838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149092538.83333334,
            "unit": "ns",
            "range": "± 669518.1253964178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3636314.096028646,
            "unit": "ns",
            "range": "± 14423.424005662951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1191015.9561298077,
            "unit": "ns",
            "range": "± 1959.9020138604467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758621.2751464844,
            "unit": "ns",
            "range": "± 2729.0529337063276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958157.1427283655,
            "unit": "ns",
            "range": "± 4413.954021383666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619082.4419759115,
            "unit": "ns",
            "range": "± 1714.8213733316509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578830.7092507102,
            "unit": "ns",
            "range": "± 14030.305445418837"
          }
        ]
      }
    ]
  }
}