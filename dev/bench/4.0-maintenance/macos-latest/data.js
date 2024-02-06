window.BENCHMARK_DATA = {
  "lastUpdate": 1707184841858,
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
        "date": 1706252890350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10566229.807692308,
            "unit": "ns",
            "range": "± 277935.58982350846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26094050.1,
            "unit": "ns",
            "range": "± 758386.8328097452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66982137.22807018,
            "unit": "ns",
            "range": "± 2909075.9683435136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137255602.1,
            "unit": "ns",
            "range": "± 5090000.4910212485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256344781.0652174,
            "unit": "ns",
            "range": "± 36036899.356131785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58889.63684210526,
            "unit": "ns",
            "range": "± 13101.074082661045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324488.9,
            "unit": "ns",
            "range": "± 20180.747907349716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281828.72631578945,
            "unit": "ns",
            "range": "± 27755.418471738474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268207.23711340205,
            "unit": "ns",
            "range": "± 28701.050705858743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5313887.123655914,
            "unit": "ns",
            "range": "± 436221.08245632483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4356804.74,
            "unit": "ns",
            "range": "± 306661.6926548567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21525.816326530614,
            "unit": "ns",
            "range": "± 5106.371721353423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94695.87096774194,
            "unit": "ns",
            "range": "± 16655.13800487497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90411.88888888889,
            "unit": "ns",
            "range": "± 19502.417171949553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85561.86842105263,
            "unit": "ns",
            "range": "± 16102.172314168121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6575.323232323232,
            "unit": "ns",
            "range": "± 1810.3577774047467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19304.531914893618,
            "unit": "ns",
            "range": "± 3837.8349959267057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321809.6666666667,
            "unit": "ns",
            "range": "± 117621.59849254742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2925690.3615384614,
            "unit": "ns",
            "range": "± 136523.09857571687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2236896.3673469387,
            "unit": "ns",
            "range": "± 158631.38965489474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 25152475.241573032,
            "unit": "ns",
            "range": "± 2909672.741145317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4167127.2608695654,
            "unit": "ns",
            "range": "± 88832.26109574943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4205431.076923077,
            "unit": "ns",
            "range": "± 113015.50994263508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4671452.020618557,
            "unit": "ns",
            "range": "± 522203.9176601651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4275383.51,
            "unit": "ns",
            "range": "± 637611.0391968815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27140272.74736842,
            "unit": "ns",
            "range": "± 3435864.954528301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5923588.052978516,
            "unit": "ns",
            "range": "± 173990.17577263282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1725334.5183155295,
            "unit": "ns",
            "range": "± 68547.00620840891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 918492.1881087662,
            "unit": "ns",
            "range": "± 47038.95661023779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2059780.3214962122,
            "unit": "ns",
            "range": "± 63400.08024225116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630355.5327148438,
            "unit": "ns",
            "range": "± 13107.799081976038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577884.6632879849,
            "unit": "ns",
            "range": "± 16672.788278871783"
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
        "date": 1706255115026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9153891.115384616,
            "unit": "ns",
            "range": "± 92556.24942031958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22756777.166666668,
            "unit": "ns",
            "range": "± 395186.7229348076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57808134.46969697,
            "unit": "ns",
            "range": "± 1776633.894897991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120530559.34615384,
            "unit": "ns",
            "range": "± 1657203.7252637271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240164890.9918033,
            "unit": "ns",
            "range": "± 10742849.678513523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53362.52688172043,
            "unit": "ns",
            "range": "± 10433.665649349783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282215.71428571426,
            "unit": "ns",
            "range": "± 20865.915149025917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265461.02173913043,
            "unit": "ns",
            "range": "± 16901.513225040693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246955.87628865978,
            "unit": "ns",
            "range": "± 21509.323804001127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5550420.928571428,
            "unit": "ns",
            "range": "± 234233.24329207005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4910995.630434782,
            "unit": "ns",
            "range": "± 418516.3689484774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15358.064516129032,
            "unit": "ns",
            "range": "± 2783.755665371528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75857.29896907216,
            "unit": "ns",
            "range": "± 14583.345835350554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89184.29569892473,
            "unit": "ns",
            "range": "± 9033.710275310039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69959.02083333333,
            "unit": "ns",
            "range": "± 15156.588487122772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5283.454545454545,
            "unit": "ns",
            "range": "± 1746.9964327891767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15945.977272727272,
            "unit": "ns",
            "range": "± 3059.8828689822963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1872484.5108695652,
            "unit": "ns",
            "range": "± 503630.87554930564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3245657.794117647,
            "unit": "ns",
            "range": "± 359415.80573599285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2555557,
            "unit": "ns",
            "range": "± 606183.450185363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28841124.430107526,
            "unit": "ns",
            "range": "± 5849997.570656277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530591.88372093,
            "unit": "ns",
            "range": "± 247681.2391126674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3719373.2,
            "unit": "ns",
            "range": "± 161069.84220073215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4549092.444444444,
            "unit": "ns",
            "range": "± 96771.0225808825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4469981.878947369,
            "unit": "ns",
            "range": "± 260425.16594714797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26592432.731578946,
            "unit": "ns",
            "range": "± 3202449.4760732977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4605020.228576031,
            "unit": "ns",
            "range": "± 284395.9424990142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1466229.347315228,
            "unit": "ns",
            "range": "± 66973.78002006552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1102351.7556407417,
            "unit": "ns",
            "range": "± 52187.372456439276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2915772.6214586194,
            "unit": "ns",
            "range": "± 219550.36858457903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991362.9611791746,
            "unit": "ns",
            "range": "± 207596.35616219277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706683.5663956351,
            "unit": "ns",
            "range": "± 50860.48900972613"
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
        "date": 1706256078138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8903839.967741935,
            "unit": "ns",
            "range": "± 373651.24910356535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22919169.98529412,
            "unit": "ns",
            "range": "± 1020629.1625763484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55370670.11111111,
            "unit": "ns",
            "range": "± 2323957.2784196925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113575036.60227273,
            "unit": "ns",
            "range": "± 7399173.904237243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222656071.97727272,
            "unit": "ns",
            "range": "± 8306073.2115409905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47995.244680851065,
            "unit": "ns",
            "range": "± 10101.741883953735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271121.3253012048,
            "unit": "ns",
            "range": "± 14312.422318978404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250957.46666666667,
            "unit": "ns",
            "range": "± 24559.99615946243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202684.6326530612,
            "unit": "ns",
            "range": "± 12078.303547490208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4055015.6733333333,
            "unit": "ns",
            "range": "± 204832.4672887032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3470596.1666666665,
            "unit": "ns",
            "range": "± 28997.26483757746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13813.90322580645,
            "unit": "ns",
            "range": "± 1329.9789967654779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63855.75,
            "unit": "ns",
            "range": "± 8283.221238395756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54602.17816091954,
            "unit": "ns",
            "range": "± 4097.888209668013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60885.17741935484,
            "unit": "ns",
            "range": "± 9558.490751069905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3327.913043478261,
            "unit": "ns",
            "range": "± 374.65015629012873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12053.054945054944,
            "unit": "ns",
            "range": "± 915.1441946204419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1269529.25,
            "unit": "ns",
            "range": "± 142849.6980823956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2710267.7252747254,
            "unit": "ns",
            "range": "± 338836.4897765117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1955839.8775510204,
            "unit": "ns",
            "range": "± 285497.95222792844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21418390.247311827,
            "unit": "ns",
            "range": "± 3575315.9041148066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3471473.371794872,
            "unit": "ns",
            "range": "± 112873.88488746365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3678428.1458333335,
            "unit": "ns",
            "range": "± 143152.7333100856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4168162.396551724,
            "unit": "ns",
            "range": "± 120430.32644922742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4306252.965753425,
            "unit": "ns",
            "range": "± 208538.6850799898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25631166.242105264,
            "unit": "ns",
            "range": "± 3296125.988457529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4314359.952083333,
            "unit": "ns",
            "range": "± 66715.99676311448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1332044.5562220982,
            "unit": "ns",
            "range": "± 15209.611468107336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 886767.0046037947,
            "unit": "ns",
            "range": "± 11553.128527970783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974751.4096354167,
            "unit": "ns",
            "range": "± 29709.49847275513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627565.5659179688,
            "unit": "ns",
            "range": "± 11490.436028585129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556200.0028645833,
            "unit": "ns",
            "range": "± 4775.617948073187"
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
        "date": 1706261705167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8904697.978021977,
            "unit": "ns",
            "range": "± 805596.140230216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21063720.181818184,
            "unit": "ns",
            "range": "± 1942093.334629116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52279322.96067416,
            "unit": "ns",
            "range": "± 3518596.1710270937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105642198.15957446,
            "unit": "ns",
            "range": "± 8497148.066555684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229559240.5,
            "unit": "ns",
            "range": "± 22567215.61570919"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56142.83516483517,
            "unit": "ns",
            "range": "± 13071.242487285452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238536.375,
            "unit": "ns",
            "range": "± 19877.209594089618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233721.2159090909,
            "unit": "ns",
            "range": "± 20208.857248114913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220477.02127659574,
            "unit": "ns",
            "range": "± 18790.254398055084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4085883.625,
            "unit": "ns",
            "range": "± 144955.32983729983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3617515.6578947366,
            "unit": "ns",
            "range": "± 78205.26527121016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19536.94210526316,
            "unit": "ns",
            "range": "± 4908.629337470529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76436.25773195876,
            "unit": "ns",
            "range": "± 14401.47894479819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77353.3870967742,
            "unit": "ns",
            "range": "± 13832.210881499259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97586.125,
            "unit": "ns",
            "range": "± 18752.989212529912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7553.046391752578,
            "unit": "ns",
            "range": "± 1979.2735410825742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26259.867346938776,
            "unit": "ns",
            "range": "± 7041.261560520605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1789040.542105263,
            "unit": "ns",
            "range": "± 619412.9478485788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572536.405882353,
            "unit": "ns",
            "range": "± 265950.57322007464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2763516.104395604,
            "unit": "ns",
            "range": "± 805991.4268926586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 26551006.12087912,
            "unit": "ns",
            "range": "± 5122802.486365251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2972831.864197531,
            "unit": "ns",
            "range": "± 156460.3200986398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3133429.6,
            "unit": "ns",
            "range": "± 174394.5873080142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3827708.2528089886,
            "unit": "ns",
            "range": "± 262760.47508776374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3992708.1914893617,
            "unit": "ns",
            "range": "± 421045.5810296394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25281997.53125,
            "unit": "ns",
            "range": "± 4301692.555955741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7156547.918648098,
            "unit": "ns",
            "range": "± 1305767.1935261283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887365.615404212,
            "unit": "ns",
            "range": "± 376766.9364760076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047563.9044176869,
            "unit": "ns",
            "range": "± 72627.2402578143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2446165.2265066965,
            "unit": "ns",
            "range": "± 78762.17037158304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 700641.1422293527,
            "unit": "ns",
            "range": "± 19762.501969931083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 631458.4877596769,
            "unit": "ns",
            "range": "± 53342.01088819936"
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
        "date": 1707183381861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9215568.440860216,
            "unit": "ns",
            "range": "± 1766874.964897448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21724856.63114754,
            "unit": "ns",
            "range": "± 866655.4628587319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60914411.127659574,
            "unit": "ns",
            "range": "± 11603738.088290112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118323782.46703297,
            "unit": "ns",
            "range": "± 20706371.05649141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255009622.9574468,
            "unit": "ns",
            "range": "± 41055811.40099785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56557.942528735635,
            "unit": "ns",
            "range": "± 7912.9871808670105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334600.7755102041,
            "unit": "ns",
            "range": "± 88279.93160951143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304650.0408163265,
            "unit": "ns",
            "range": "± 69904.94574352757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309336.69696969696,
            "unit": "ns",
            "range": "± 77994.09625858198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4774664.05319149,
            "unit": "ns",
            "range": "± 928680.0789914593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4776071.05,
            "unit": "ns",
            "range": "± 1044826.0976668053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24191.425531914894,
            "unit": "ns",
            "range": "± 7140.205009314511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79782.60752688172,
            "unit": "ns",
            "range": "± 19100.689619614102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80924.59550561798,
            "unit": "ns",
            "range": "± 15926.338379408939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79384.15463917526,
            "unit": "ns",
            "range": "± 13822.121644562661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5495.742268041237,
            "unit": "ns",
            "range": "± 1500.5967651678789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19539.85106382979,
            "unit": "ns",
            "range": "± 3943.88553212219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1149502.75,
            "unit": "ns",
            "range": "± 129460.69143942068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424520.409090909,
            "unit": "ns",
            "range": "± 147524.55313597343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2201798.846153846,
            "unit": "ns",
            "range": "± 444888.0361362326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 23826016.76344086,
            "unit": "ns",
            "range": "± 5544941.316626625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3065440.9468085105,
            "unit": "ns",
            "range": "± 193521.13652465158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3479391.488888889,
            "unit": "ns",
            "range": "± 609473.6586341012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4539089.72631579,
            "unit": "ns",
            "range": "± 1065222.127928769"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3998506.1931818184,
            "unit": "ns",
            "range": "± 398703.30576253537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25269169.89010989,
            "unit": "ns",
            "range": "± 4542687.323136306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4871749.313512731,
            "unit": "ns",
            "range": "± 135180.61686099178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1373317.7482910156,
            "unit": "ns",
            "range": "± 34140.519604812245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 931223.7953629033,
            "unit": "ns",
            "range": "± 38101.66579002227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2145253.23828125,
            "unit": "ns",
            "range": "± 51827.46249361097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 706717.093605324,
            "unit": "ns",
            "range": "± 19788.509449599464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586310.2727399553,
            "unit": "ns",
            "range": "± 6566.5383956123005"
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
        "date": 1707184758212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8089781.615384615,
            "unit": "ns",
            "range": "± 63050.64524456835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19504118.033333335,
            "unit": "ns",
            "range": "± 244382.60303316737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48994082,
            "unit": "ns",
            "range": "± 1078911.0959404756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94281466.21428572,
            "unit": "ns",
            "range": "± 1118996.144398402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193494223.4,
            "unit": "ns",
            "range": "± 3257658.158131605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41046.094736842104,
            "unit": "ns",
            "range": "± 10117.656360818464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225430.0894736842,
            "unit": "ns",
            "range": "± 17483.547680602125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215612.51063829788,
            "unit": "ns",
            "range": "± 17760.077359092807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201927.63541666666,
            "unit": "ns",
            "range": "± 16850.97553391575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3902889.222222222,
            "unit": "ns",
            "range": "± 82355.10248027106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3475684.3529411764,
            "unit": "ns",
            "range": "± 69739.8126242654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13329.489130434782,
            "unit": "ns",
            "range": "± 1706.4769987120542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61817.565217391304,
            "unit": "ns",
            "range": "± 6289.633643490401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60562.927835051545,
            "unit": "ns",
            "range": "± 11530.353529965503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65790.11458333333,
            "unit": "ns",
            "range": "± 13049.3209005557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4544.244897959184,
            "unit": "ns",
            "range": "± 1241.2410821201386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13346.4,
            "unit": "ns",
            "range": "± 1570.5904798257084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1059681.53125,
            "unit": "ns",
            "range": "± 94705.62549988955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2243778.442105263,
            "unit": "ns",
            "range": "± 134610.46584676584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1655121.3481012657,
            "unit": "ns",
            "range": "± 85643.02688546707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18301200.277777776,
            "unit": "ns",
            "range": "± 1608159.6821211788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2920626.4086021506,
            "unit": "ns",
            "range": "± 160420.66271472396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3002437.476923077,
            "unit": "ns",
            "range": "± 140091.19487622022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3603278.527777778,
            "unit": "ns",
            "range": "± 106249.25112650002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3679289.144927536,
            "unit": "ns",
            "range": "± 175837.09936800922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22250035.51612903,
            "unit": "ns",
            "range": "± 2852841.1505390503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4304052.954927885,
            "unit": "ns",
            "range": "± 57415.57434430672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361079.6201822916,
            "unit": "ns",
            "range": "± 13002.533971319723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 913854.9900390625,
            "unit": "ns",
            "range": "± 9683.034724347326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2110944.118815104,
            "unit": "ns",
            "range": "± 54338.124609590246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 648088.148334704,
            "unit": "ns",
            "range": "± 6157.10436395909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581707.9366861979,
            "unit": "ns",
            "range": "± 5115.574540264973"
          }
        ]
      }
    ]
  }
}