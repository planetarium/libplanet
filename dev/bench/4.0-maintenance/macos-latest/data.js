window.BENCHMARK_DATA = {
  "lastUpdate": 1706242837288,
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
        "date": 1705915609671,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8815075.686813187,
            "unit": "ns",
            "range": "± 725963.0602333535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21375561.541666668,
            "unit": "ns",
            "range": "± 842424.7333903149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67155142.04210526,
            "unit": "ns",
            "range": "± 18650129.05023813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149282628.10416666,
            "unit": "ns",
            "range": "± 30877182.66078075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302171479.969697,
            "unit": "ns",
            "range": "± 67905579.87488356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79477.68390804598,
            "unit": "ns",
            "range": "± 8199.934776440454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357821.45652173914,
            "unit": "ns",
            "range": "± 42596.16660586457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363532.5689655172,
            "unit": "ns",
            "range": "± 50185.75132324821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334806.9130434783,
            "unit": "ns",
            "range": "± 32639.20907929642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4781170.52020202,
            "unit": "ns",
            "range": "± 374079.235055726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3998959.0689655175,
            "unit": "ns",
            "range": "± 217103.35045831912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24257.38888888889,
            "unit": "ns",
            "range": "± 3137.644173488402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114084.16666666667,
            "unit": "ns",
            "range": "± 12634.119455273181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115763.37777777777,
            "unit": "ns",
            "range": "± 10569.3742892811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114590.58602150538,
            "unit": "ns",
            "range": "± 13683.95234640222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7861.989361702128,
            "unit": "ns",
            "range": "± 770.0161951191836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26264.016853932586,
            "unit": "ns",
            "range": "± 3661.2390696703887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697532.412087912,
            "unit": "ns",
            "range": "± 291978.6353894426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3238605.5274725277,
            "unit": "ns",
            "range": "± 431473.8754575566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2718357.8651685393,
            "unit": "ns",
            "range": "± 280672.793356314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 37120518.09793814,
            "unit": "ns",
            "range": "± 10160071.084930448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3706039.117977528,
            "unit": "ns",
            "range": "± 442463.35703018453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3947032.011904762,
            "unit": "ns",
            "range": "± 611728.5401305294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4774308.143678161,
            "unit": "ns",
            "range": "± 595949.1115691584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4934186.44047619,
            "unit": "ns",
            "range": "± 553529.563188953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 44145003.829896905,
            "unit": "ns",
            "range": "± 11455263.265838495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6577006.270235656,
            "unit": "ns",
            "range": "± 295807.83367410867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2023152.638414885,
            "unit": "ns",
            "range": "± 101757.5293141696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285881.471015625,
            "unit": "ns",
            "range": "± 75573.77187049607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3145681.6149259866,
            "unit": "ns",
            "range": "± 69824.41946285187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924622.8968424479,
            "unit": "ns",
            "range": "± 26263.249201763287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889687.4268229167,
            "unit": "ns",
            "range": "± 13984.63845091603"
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
        "date": 1705918207288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7540434.785714285,
            "unit": "ns",
            "range": "± 84759.25532596477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18893536.75,
            "unit": "ns",
            "range": "± 73068.92362958663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47020031.85714286,
            "unit": "ns",
            "range": "± 679257.7166545459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92968170.5,
            "unit": "ns",
            "range": "± 1537071.7718006608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194048829.9,
            "unit": "ns",
            "range": "± 5653824.018541514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35803.01204819277,
            "unit": "ns",
            "range": "± 4809.193303617602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224517.28350515463,
            "unit": "ns",
            "range": "± 19796.823583714762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207790.0483870968,
            "unit": "ns",
            "range": "± 9389.247731572184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190760.27272727274,
            "unit": "ns",
            "range": "± 4564.868755551604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3963438.5862068967,
            "unit": "ns",
            "range": "± 114361.34886668825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3430155.736842105,
            "unit": "ns",
            "range": "± 71723.65312072758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12465.011235955057,
            "unit": "ns",
            "range": "± 786.374325253421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57706.09302325582,
            "unit": "ns",
            "range": "± 4066.272469612338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51043.083333333336,
            "unit": "ns",
            "range": "± 2520.6567373055664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62320.494736842105,
            "unit": "ns",
            "range": "± 9780.898789220346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3361.0652173913045,
            "unit": "ns",
            "range": "± 488.77516358251785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11918.244444444445,
            "unit": "ns",
            "range": "± 1461.4256108266425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1194372.9945054946,
            "unit": "ns",
            "range": "± 166216.3382699636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2615681.836734694,
            "unit": "ns",
            "range": "± 182450.88574058664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091028.1797752809,
            "unit": "ns",
            "range": "± 208978.6878650201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23159084.466666665,
            "unit": "ns",
            "range": "± 4834774.807993068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2890753.309090909,
            "unit": "ns",
            "range": "± 118763.5056581672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3270911.125,
            "unit": "ns",
            "range": "± 59567.80186966222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3546903.36,
            "unit": "ns",
            "range": "± 93694.0265838223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3738200.87654321,
            "unit": "ns",
            "range": "± 195113.67603056316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21620723.277777776,
            "unit": "ns",
            "range": "± 2407376.7377022603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4348859.586538462,
            "unit": "ns",
            "range": "± 49134.411742813005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1360187.1400240385,
            "unit": "ns",
            "range": "± 19022.421170755722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 875339.8784505208,
            "unit": "ns",
            "range": "± 8173.818934716005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2018915.7090871711,
            "unit": "ns",
            "range": "± 42586.02056523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634353.8540364583,
            "unit": "ns",
            "range": "± 7537.813119887712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565507.6431640625,
            "unit": "ns",
            "range": "± 7578.49057035113"
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
        "date": 1706242768926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11239464.287878787,
            "unit": "ns",
            "range": "± 2568180.7990943803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20567315.115384616,
            "unit": "ns",
            "range": "± 193773.90343281458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72427872.35789473,
            "unit": "ns",
            "range": "± 9503395.00950897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123289798.57368422,
            "unit": "ns",
            "range": "± 27580932.58851937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 318401663.2070707,
            "unit": "ns",
            "range": "± 101850011.34273595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76097.41304347826,
            "unit": "ns",
            "range": "± 10520.656005381239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314323.6170212766,
            "unit": "ns",
            "range": "± 29476.365889391767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313969.95652173914,
            "unit": "ns",
            "range": "± 42064.64010734819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295152.8209876543,
            "unit": "ns",
            "range": "± 15340.927928931776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4543086.553763441,
            "unit": "ns",
            "range": "± 304834.98827506683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3994041.1428571427,
            "unit": "ns",
            "range": "± 120363.10964868977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21722.427083333332,
            "unit": "ns",
            "range": "± 5022.469168897102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97605.50537634408,
            "unit": "ns",
            "range": "± 15957.4066506296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95906.78571428571,
            "unit": "ns",
            "range": "± 15293.059938194052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108145.70652173914,
            "unit": "ns",
            "range": "± 17225.151876099153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7420.5360824742265,
            "unit": "ns",
            "range": "± 1431.1076207336725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21698.184782608696,
            "unit": "ns",
            "range": "± 4783.691100802575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707169.4130434783,
            "unit": "ns",
            "range": "± 274125.88011312345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3082855.3829787234,
            "unit": "ns",
            "range": "± 394938.15221292194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2741114.5,
            "unit": "ns",
            "range": "± 398294.2140820802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 31517733.826086957,
            "unit": "ns",
            "range": "± 7753527.859865278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3492653.8085106383,
            "unit": "ns",
            "range": "± 405940.5822055782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579431.345360825,
            "unit": "ns",
            "range": "± 335759.01791796484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4633260.146067415,
            "unit": "ns",
            "range": "± 319521.96437051764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4634771.742424242,
            "unit": "ns",
            "range": "± 526331.5896725045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30277089.836842105,
            "unit": "ns",
            "range": "± 4753731.8917752905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5914035.396022728,
            "unit": "ns",
            "range": "± 241729.44841355778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957281.4825492527,
            "unit": "ns",
            "range": "± 109885.46310287455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143406.7966496395,
            "unit": "ns",
            "range": "± 16527.267961149984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2756410.05129523,
            "unit": "ns",
            "range": "± 94976.86522615622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843067.3138427734,
            "unit": "ns",
            "range": "± 21777.089744699926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770923.72109375,
            "unit": "ns",
            "range": "± 12155.364200879876"
          }
        ]
      }
    ]
  }
}