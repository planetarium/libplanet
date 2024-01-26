window.BENCHMARK_DATA = {
  "lastUpdate": 1706242130676,
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
      }
    ]
  }
}