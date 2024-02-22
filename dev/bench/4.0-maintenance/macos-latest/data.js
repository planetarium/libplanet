window.BENCHMARK_DATA = {
  "lastUpdate": 1708601089541,
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
        "date": 1707186811879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9616372.095959596,
            "unit": "ns",
            "range": "± 745423.2721944903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22444069.70707071,
            "unit": "ns",
            "range": "± 2025328.904422023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58386446.97777778,
            "unit": "ns",
            "range": "± 3586595.3730947953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115215675.1891892,
            "unit": "ns",
            "range": "± 3802980.5354124093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227619390.66842106,
            "unit": "ns",
            "range": "± 15332088.687178757"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80239.64772727272,
            "unit": "ns",
            "range": "± 10828.770671400694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346435.0430107527,
            "unit": "ns",
            "range": "± 51546.57269147252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329675.27894736844,
            "unit": "ns",
            "range": "± 55814.61983802615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 372797.98979591834,
            "unit": "ns",
            "range": "± 79657.076976908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4314609.5,
            "unit": "ns",
            "range": "± 125201.94369383522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733540.769230769,
            "unit": "ns",
            "range": "± 102167.98420809043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21772.1875,
            "unit": "ns",
            "range": "± 4286.050556748019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108667.71276595745,
            "unit": "ns",
            "range": "± 16216.913274350094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109982.3829787234,
            "unit": "ns",
            "range": "± 11417.04970280266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111355.45959595959,
            "unit": "ns",
            "range": "± 21166.906512877158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7976.184210526316,
            "unit": "ns",
            "range": "± 1570.1240313058743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21890.755555555555,
            "unit": "ns",
            "range": "± 3181.092669003689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679711.712643678,
            "unit": "ns",
            "range": "± 268051.209120697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3019368.0568181816,
            "unit": "ns",
            "range": "± 284253.3406852229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2761921.8085106383,
            "unit": "ns",
            "range": "± 333764.34631941665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33891470.07608695,
            "unit": "ns",
            "range": "± 7493078.479373926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3547827.8282828284,
            "unit": "ns",
            "range": "± 345171.873537974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748863.9545454546,
            "unit": "ns",
            "range": "± 290031.50387888984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4857110.5,
            "unit": "ns",
            "range": "± 402296.7549036942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5035691.378787879,
            "unit": "ns",
            "range": "± 569535.9692723412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32881600.737373736,
            "unit": "ns",
            "range": "± 5035955.259016633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6184120.0765625,
            "unit": "ns",
            "range": "± 115599.44197586016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1789759.6087239583,
            "unit": "ns",
            "range": "± 15751.005126663253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1104712.8564967106,
            "unit": "ns",
            "range": "± 23378.6907803608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3031140.574099171,
            "unit": "ns",
            "range": "± 209640.74059267915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957179.9738769531,
            "unit": "ns",
            "range": "± 18117.958133059426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 895548.6902994792,
            "unit": "ns",
            "range": "± 15787.278449047059"
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
        "date": 1707193251229,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8486722.315789474,
            "unit": "ns",
            "range": "± 429395.4031239959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24179942,
            "unit": "ns",
            "range": "± 1000593.0559942938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60079032.58571429,
            "unit": "ns",
            "range": "± 1948816.8980417985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108742147.60526316,
            "unit": "ns",
            "range": "± 5268399.7788006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212130647.76923078,
            "unit": "ns",
            "range": "± 2660330.765005834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75713.00537634408,
            "unit": "ns",
            "range": "± 12466.022118947145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357291.9387755102,
            "unit": "ns",
            "range": "± 63970.746939006094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384987.4166666667,
            "unit": "ns",
            "range": "± 77843.29842996212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329823.5,
            "unit": "ns",
            "range": "± 38841.04619975245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4395517.40625,
            "unit": "ns",
            "range": "± 136803.40205785757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4180989.65,
            "unit": "ns",
            "range": "± 351151.64493815956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22324.72105263158,
            "unit": "ns",
            "range": "± 5602.6501540332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101389.16842105263,
            "unit": "ns",
            "range": "± 21784.695975812163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93769.31443298969,
            "unit": "ns",
            "range": "± 21731.097475416183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106415.13829787234,
            "unit": "ns",
            "range": "± 21073.86581080583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7469.677083333333,
            "unit": "ns",
            "range": "± 1789.1727491234992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23706.097826086956,
            "unit": "ns",
            "range": "± 4216.610677512154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483190.448979592,
            "unit": "ns",
            "range": "± 180764.63787974775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2936585.313186813,
            "unit": "ns",
            "range": "± 195996.05951287856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638366.673469388,
            "unit": "ns",
            "range": "± 328701.8633399735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 27369215.173913043,
            "unit": "ns",
            "range": "± 3265184.0141931763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3406631.8791208793,
            "unit": "ns",
            "range": "± 227418.22560490886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4054043.2422680412,
            "unit": "ns",
            "range": "± 480759.6787267235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4382158.613333333,
            "unit": "ns",
            "range": "± 220840.34547094614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4633560.573684211,
            "unit": "ns",
            "range": "± 285934.30123292014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31971910.015789475,
            "unit": "ns",
            "range": "± 4405287.109424176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6116970.188671875,
            "unit": "ns",
            "range": "± 445395.721546381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880304.3302027925,
            "unit": "ns",
            "range": "± 73129.68335316918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147889.9699388586,
            "unit": "ns",
            "range": "± 28297.098409996364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3385502.5097064395,
            "unit": "ns",
            "range": "± 250788.9040831694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939343.2615411932,
            "unit": "ns",
            "range": "± 34616.41395052068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801861.3837316176,
            "unit": "ns",
            "range": "± 15784.741808014734"
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
        "date": 1707198433793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7849717.782608695,
            "unit": "ns",
            "range": "± 198167.1427807979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18952243.066666666,
            "unit": "ns",
            "range": "± 292088.378176994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47909241.35714286,
            "unit": "ns",
            "range": "± 1370184.419500399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95245169.13333334,
            "unit": "ns",
            "range": "± 1778318.1242105805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196210846.8888889,
            "unit": "ns",
            "range": "± 4179559.5126757664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38031.34090909091,
            "unit": "ns",
            "range": "± 5260.958340840036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217147.94805194804,
            "unit": "ns",
            "range": "± 11117.907859911253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211045.77142857143,
            "unit": "ns",
            "range": "± 9444.19407747876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206742.87628865978,
            "unit": "ns",
            "range": "± 19822.37741021166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4018567.40625,
            "unit": "ns",
            "range": "± 121936.72199781153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3582736.1,
            "unit": "ns",
            "range": "± 81630.20167766855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13747.91304347826,
            "unit": "ns",
            "range": "± 1442.8387590660168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61976.425531914894,
            "unit": "ns",
            "range": "± 6051.212615061087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58937.25,
            "unit": "ns",
            "range": "± 8475.507332742296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67830.86458333333,
            "unit": "ns",
            "range": "± 12440.894744959201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4204.20618556701,
            "unit": "ns",
            "range": "± 1190.8723425335481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12882.136842105263,
            "unit": "ns",
            "range": "± 1717.1771219967586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1068771.0353535353,
            "unit": "ns",
            "range": "± 95154.24122598059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2319798.19,
            "unit": "ns",
            "range": "± 169670.0125582868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797736.616161616,
            "unit": "ns",
            "range": "± 180140.37260095344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18759516.43258427,
            "unit": "ns",
            "range": "± 1829441.1486344167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2915720.361111111,
            "unit": "ns",
            "range": "± 143898.2942195785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3037346.5319148935,
            "unit": "ns",
            "range": "± 116428.27203398499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3622059.4571428574,
            "unit": "ns",
            "range": "± 116836.53721214973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3709104.1298701297,
            "unit": "ns",
            "range": "± 187921.76507766193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22319830.468085106,
            "unit": "ns",
            "range": "± 2532941.613092379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4480113.546354166,
            "unit": "ns",
            "range": "± 47912.943299229984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1341855.3237680288,
            "unit": "ns",
            "range": "± 3942.656028405195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905334.7262137277,
            "unit": "ns",
            "range": "± 6092.20407369446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010133.1459263393,
            "unit": "ns",
            "range": "± 11804.952014844497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626333.2238420759,
            "unit": "ns",
            "range": "± 2889.025029738159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581940.2091471354,
            "unit": "ns",
            "range": "± 3490.3508807144012"
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
        "date": 1707212171248,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10327351.56043956,
            "unit": "ns",
            "range": "± 1412290.4452590654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 31181868.659574468,
            "unit": "ns",
            "range": "± 5451915.99488323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70523719.3367347,
            "unit": "ns",
            "range": "± 8309438.419527672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148990267.75789472,
            "unit": "ns",
            "range": "± 21207380.215194166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302862078,
            "unit": "ns",
            "range": "± 30494910.349033803"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52390.13043478261,
            "unit": "ns",
            "range": "± 11469.53905367077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 411200.5105263158,
            "unit": "ns",
            "range": "± 104756.8706936264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349876.5052631579,
            "unit": "ns",
            "range": "± 81424.01202189678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 356025.6354166667,
            "unit": "ns",
            "range": "± 103590.6279042777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6437129.979591837,
            "unit": "ns",
            "range": "± 1455340.647442286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4527037.970588235,
            "unit": "ns",
            "range": "± 289074.3791980744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20400.20618556701,
            "unit": "ns",
            "range": "± 6119.412888740064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96431.64736842105,
            "unit": "ns",
            "range": "± 22763.753910673677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77688.05154639175,
            "unit": "ns",
            "range": "± 14059.222525750321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83880.74736842106,
            "unit": "ns",
            "range": "± 17098.42561868273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6512.413978494624,
            "unit": "ns",
            "range": "± 1660.5041446075948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23790.957894736843,
            "unit": "ns",
            "range": "± 8057.485566712655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391752.021978022,
            "unit": "ns",
            "range": "± 263392.2231262714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2913853.852272727,
            "unit": "ns",
            "range": "± 377320.1447577844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276299.5393258426,
            "unit": "ns",
            "range": "± 299938.66936713667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21167982.104395606,
            "unit": "ns",
            "range": "± 3598117.029573972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4472173.530927835,
            "unit": "ns",
            "range": "± 1001144.2017265112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4144412.3764044945,
            "unit": "ns",
            "range": "± 518954.6702893542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6077735.035353536,
            "unit": "ns",
            "range": "± 1570278.1222292054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5769150.12244898,
            "unit": "ns",
            "range": "± 1492448.344973906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35951094.989583336,
            "unit": "ns",
            "range": "± 6183929.135952684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5932711.494325658,
            "unit": "ns",
            "range": "± 752407.2293830623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1654500.5007161458,
            "unit": "ns",
            "range": "± 73866.04174666875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1119550.359773597,
            "unit": "ns",
            "range": "± 43090.655367835454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2476295.7106741574,
            "unit": "ns",
            "range": "± 193521.43151880556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 703382.890211839,
            "unit": "ns",
            "range": "± 19176.425400573284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576016.276968149,
            "unit": "ns",
            "range": "± 5042.513983396086"
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
        "date": 1707214789064,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12829144.957894737,
            "unit": "ns",
            "range": "± 2148706.1602289774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28738510.952631578,
            "unit": "ns",
            "range": "± 2320744.099036634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73271733.04444444,
            "unit": "ns",
            "range": "± 10887896.911667537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 168503840.54651162,
            "unit": "ns",
            "range": "± 29288954.030031618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 318963612.2580645,
            "unit": "ns",
            "range": "± 42399682.79926948"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64067.02298850575,
            "unit": "ns",
            "range": "± 8985.401472798661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 584117.887755102,
            "unit": "ns",
            "range": "± 190336.53493755125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 625802.159574468,
            "unit": "ns",
            "range": "± 162019.40965759888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 510592,
            "unit": "ns",
            "range": "± 176172.09017937098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7875615.1,
            "unit": "ns",
            "range": "± 2512246.486126091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5430144.545454546,
            "unit": "ns",
            "range": "± 720335.4023785129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32498.565656565657,
            "unit": "ns",
            "range": "± 5904.66470934878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 143598.98958333334,
            "unit": "ns",
            "range": "± 41684.98130034865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134298.4081632653,
            "unit": "ns",
            "range": "± 31754.890063501833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134785.75773195876,
            "unit": "ns",
            "range": "± 32840.37017283959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9253.294736842105,
            "unit": "ns",
            "range": "± 1429.261436068146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34170.697916666664,
            "unit": "ns",
            "range": "± 7440.668791558983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2132811.96,
            "unit": "ns",
            "range": "± 577189.520807366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4192214.6770833335,
            "unit": "ns",
            "range": "± 1027622.2150291982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3411486.5656565656,
            "unit": "ns",
            "range": "± 839797.162371782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 29349822.260869566,
            "unit": "ns",
            "range": "± 4805310.147723915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4579394.931034483,
            "unit": "ns",
            "range": "± 934491.4091014126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4296474.415730337,
            "unit": "ns",
            "range": "± 412183.153684682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 7392285.88,
            "unit": "ns",
            "range": "± 2212229.916776323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7129673.043010753,
            "unit": "ns",
            "range": "± 1874103.8026345905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 52058477.458762884,
            "unit": "ns",
            "range": "± 16774436.25378806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8802976.38984375,
            "unit": "ns",
            "range": "± 2934487.748201397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1995744.4772194603,
            "unit": "ns",
            "range": "± 84965.93738427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1112355.1836344402,
            "unit": "ns",
            "range": "± 139867.3387254289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2375008.4594921875,
            "unit": "ns",
            "range": "± 303275.8608986732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 661157.9235164562,
            "unit": "ns",
            "range": "± 24890.462620613675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 615118.5542562905,
            "unit": "ns",
            "range": "± 31260.368879854836"
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
        "date": 1707215224450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9167582.760416666,
            "unit": "ns",
            "range": "± 649500.1347855984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21603084.56741573,
            "unit": "ns",
            "range": "± 1390285.092226311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51238262.13736264,
            "unit": "ns",
            "range": "± 3620541.473032914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113401848.23809524,
            "unit": "ns",
            "range": "± 10506560.83683719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227172654.6875,
            "unit": "ns",
            "range": "± 17788541.368183907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52003.57777777778,
            "unit": "ns",
            "range": "± 8791.610909356892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253919.52222222224,
            "unit": "ns",
            "range": "± 19620.87601798104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246232.39175257733,
            "unit": "ns",
            "range": "± 33843.235541352005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250305.05681818182,
            "unit": "ns",
            "range": "± 28703.918205987924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4423365.623529412,
            "unit": "ns",
            "range": "± 268830.5126488123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933149.0476190476,
            "unit": "ns",
            "range": "± 131941.34550684335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16737.804347826088,
            "unit": "ns",
            "range": "± 3476.2847375731726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79210.5425531915,
            "unit": "ns",
            "range": "± 10429.689023771434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76886.52747252748,
            "unit": "ns",
            "range": "± 9032.461835378559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83562.92307692308,
            "unit": "ns",
            "range": "± 10646.68893885248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5211.75,
            "unit": "ns",
            "range": "± 1125.288697460158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18700.015463917527,
            "unit": "ns",
            "range": "± 4823.87062152333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1221290.2282608696,
            "unit": "ns",
            "range": "± 140172.05558453323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600944.5681818184,
            "unit": "ns",
            "range": "± 221459.33171312264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2177610.489010989,
            "unit": "ns",
            "range": "± 252018.12039042372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 22289073.86956522,
            "unit": "ns",
            "range": "± 3347418.644653437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3022591.505376344,
            "unit": "ns",
            "range": "± 218054.47123540644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3166329.4574468085,
            "unit": "ns",
            "range": "± 222231.2599154925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4072126.0483870967,
            "unit": "ns",
            "range": "± 385038.68063881126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4362606,
            "unit": "ns",
            "range": "± 429633.08642713854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24780787.8655914,
            "unit": "ns",
            "range": "± 3148121.005009281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4945833.895608836,
            "unit": "ns",
            "range": "± 216493.11653650997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1366296.7528645834,
            "unit": "ns",
            "range": "± 16292.485092363626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 903706.4822126116,
            "unit": "ns",
            "range": "± 6604.873128770859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2178397.789607558,
            "unit": "ns",
            "range": "± 78528.72606390736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 667035.0528301165,
            "unit": "ns",
            "range": "± 25633.56012371251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571887.068359375,
            "unit": "ns",
            "range": "± 8415.969522504327"
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
          "id": "ce5eb2935801d186b9793fd6384183c0dbfab51a",
          "message": "Merge pull request #3664 from greymistcube/release/4.0.4\n\n🚀 Release 4.0.4",
          "timestamp": "2024-02-07T15:50:45+09:00",
          "tree_id": "6334141a92893468fe729e7e55eb13bb97e411f1",
          "url": "https://github.com/planetarium/libplanet/commit/ce5eb2935801d186b9793fd6384183c0dbfab51a"
        },
        "date": 1707289903326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9632548.202380951,
            "unit": "ns",
            "range": "± 780582.6324830778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22151249.86,
            "unit": "ns",
            "range": "± 832629.7603208704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56386853.75,
            "unit": "ns",
            "range": "± 1042254.1518647935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109048992.52857143,
            "unit": "ns",
            "range": "± 3510232.8558419994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224534248.91025642,
            "unit": "ns",
            "range": "± 11588568.871030875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54592.967391304344,
            "unit": "ns",
            "range": "± 12998.14165115692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325523.89247311826,
            "unit": "ns",
            "range": "± 80159.20865831601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389457.97,
            "unit": "ns",
            "range": "± 120810.08718424027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327075.3020833333,
            "unit": "ns",
            "range": "± 99196.42652096313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5741852,
            "unit": "ns",
            "range": "± 1356576.1189485323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5896054.153061224,
            "unit": "ns",
            "range": "± 1230463.4803350123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27034.104166666668,
            "unit": "ns",
            "range": "± 6115.006289929486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133280.53125,
            "unit": "ns",
            "range": "± 32159.853574867342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96943.38659793814,
            "unit": "ns",
            "range": "± 33040.54070503017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84311.44827586207,
            "unit": "ns",
            "range": "± 17375.256129120116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6781.673913043478,
            "unit": "ns",
            "range": "± 2209.3696311898743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15263.805263157894,
            "unit": "ns",
            "range": "± 2405.6719062907746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300470.6853932585,
            "unit": "ns",
            "range": "± 142495.3919221916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2657504.694736842,
            "unit": "ns",
            "range": "± 214594.65194165256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2005511.0967741935,
            "unit": "ns",
            "range": "± 179531.33063243746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21923928.231578946,
            "unit": "ns",
            "range": "± 3795714.1839454095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3186254.6086956523,
            "unit": "ns",
            "range": "± 105896.0153394154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3408120.0344827585,
            "unit": "ns",
            "range": "± 207387.0963899561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185540.2558139535,
            "unit": "ns",
            "range": "± 227426.6921965476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4459002.977011494,
            "unit": "ns",
            "range": "± 261290.19572800823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26992901.18888889,
            "unit": "ns",
            "range": "± 5892421.03959708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5342502.936650815,
            "unit": "ns",
            "range": "± 323337.3703171351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1605817.8681640625,
            "unit": "ns",
            "range": "± 26623.342074394695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046730.206272978,
            "unit": "ns",
            "range": "± 57811.31964576887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559935.8787109377,
            "unit": "ns",
            "range": "± 58441.3610409352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 747277.0223632812,
            "unit": "ns",
            "range": "± 38864.32089803182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 656435.3507486979,
            "unit": "ns",
            "range": "± 10574.463988741161"
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
        "date": 1707289968592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9609803.36,
            "unit": "ns",
            "range": "± 920823.6016814493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24389847.14,
            "unit": "ns",
            "range": "± 1671366.7989836426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57636073.73529412,
            "unit": "ns",
            "range": "± 1817511.0244024165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131037403.21578947,
            "unit": "ns",
            "range": "± 8184621.683522926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238109093.4107143,
            "unit": "ns",
            "range": "± 10149277.252514502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93524.9052631579,
            "unit": "ns",
            "range": "± 22131.17914486242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374419.4684210526,
            "unit": "ns",
            "range": "± 65434.966598882456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 389499.8917525773,
            "unit": "ns",
            "range": "± 77727.00722421025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 374074.36,
            "unit": "ns",
            "range": "± 72930.41263964084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5065818.520408163,
            "unit": "ns",
            "range": "± 498558.47816266835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4535335.07,
            "unit": "ns",
            "range": "± 459201.2351370793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23857.872093023256,
            "unit": "ns",
            "range": "± 2469.1299863169793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116982.31182795699,
            "unit": "ns",
            "range": "± 21672.145464196008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134392.0744680851,
            "unit": "ns",
            "range": "± 23766.619262001328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125540.43010752689,
            "unit": "ns",
            "range": "± 26305.560467487645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6552.078947368421,
            "unit": "ns",
            "range": "± 1177.0759893305335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16814.608695652172,
            "unit": "ns",
            "range": "± 1502.2913704344426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685342.663265306,
            "unit": "ns",
            "range": "± 280554.5672127104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096989.370967742,
            "unit": "ns",
            "range": "± 337044.8598283329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2736167.597938144,
            "unit": "ns",
            "range": "± 343627.2307453257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 28794763.79,
            "unit": "ns",
            "range": "± 3877673.612609098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3510246.4895833335,
            "unit": "ns",
            "range": "± 422412.6529538446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4030457.170212766,
            "unit": "ns",
            "range": "± 452977.9371310932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4754827.388888889,
            "unit": "ns",
            "range": "± 480414.7951147644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5166016.888888889,
            "unit": "ns",
            "range": "± 674851.3693412293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34690156.53,
            "unit": "ns",
            "range": "± 4484788.199001239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6204927.135602678,
            "unit": "ns",
            "range": "± 440064.5407080487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1782039.8122016059,
            "unit": "ns",
            "range": "± 85348.64725196878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1204978.3062091207,
            "unit": "ns",
            "range": "± 65494.291111501225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2862771.0480034724,
            "unit": "ns",
            "range": "± 108247.31133687825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 884840.9190340909,
            "unit": "ns",
            "range": "± 56560.79717966015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742233.3797679228,
            "unit": "ns",
            "range": "± 14671.81871577332"
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
          "id": "6ac43e6f2e230ecce359db98fa3b7d94e42ad6f9",
          "message": "Merge pull request #3665 from greymistcube/prepare/4.0.5\n\n🔧 Prepare 4.0.5",
          "timestamp": "2024-02-07T16:34:49+09:00",
          "tree_id": "3d806d9db013e1f653f5897c9fb66ad9b584d62e",
          "url": "https://github.com/planetarium/libplanet/commit/6ac43e6f2e230ecce359db98fa3b7d94e42ad6f9"
        },
        "date": 1707292408895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8146157.362068965,
            "unit": "ns",
            "range": "± 236989.18819939627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20503301.7,
            "unit": "ns",
            "range": "± 1137718.5300182395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50237675.28571428,
            "unit": "ns",
            "range": "± 1819954.3759301847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99904971.9736842,
            "unit": "ns",
            "range": "± 2179348.220691411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212364267.91489363,
            "unit": "ns",
            "range": "± 8125019.682562316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69791.40860215054,
            "unit": "ns",
            "range": "± 10886.593729302189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310398.13636363635,
            "unit": "ns",
            "range": "± 25233.473264093012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319387.097826087,
            "unit": "ns",
            "range": "± 32339.13285552765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303815.52898550726,
            "unit": "ns",
            "range": "± 14521.829991198254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4684352.6630434785,
            "unit": "ns",
            "range": "± 263391.6535769198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4179076.9210526315,
            "unit": "ns",
            "range": "± 318480.6813756887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24258.17777777778,
            "unit": "ns",
            "range": "± 3976.1139336019746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115619.31958762887,
            "unit": "ns",
            "range": "± 22633.11153282324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119428.15053763441,
            "unit": "ns",
            "range": "± 16117.566382910507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113911.96666666666,
            "unit": "ns",
            "range": "± 21898.893942209386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7184.456989247312,
            "unit": "ns",
            "range": "± 1339.1489665648503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20281.68131868132,
            "unit": "ns",
            "range": "± 4049.506811889075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526332.1063829786,
            "unit": "ns",
            "range": "± 199313.0748893663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2909716.230769231,
            "unit": "ns",
            "range": "± 265310.4858516224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3075206,
            "unit": "ns",
            "range": "± 826763.9037520249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 30917194.891304348,
            "unit": "ns",
            "range": "± 5405602.347605213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3247392.915789474,
            "unit": "ns",
            "range": "± 247111.354211815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3489463.9494949495,
            "unit": "ns",
            "range": "± 326928.6815435494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4479119.774193549,
            "unit": "ns",
            "range": "± 287291.6511132035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4895740.782608695,
            "unit": "ns",
            "range": "± 461141.8538459859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31549018.53125,
            "unit": "ns",
            "range": "± 3791825.2918547904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5709158.672433035,
            "unit": "ns",
            "range": "± 74246.48683682352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1731558.4921875,
            "unit": "ns",
            "range": "± 6089.368014969065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1104113.2392064144,
            "unit": "ns",
            "range": "± 23913.0579482762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570100.8738839286,
            "unit": "ns",
            "range": "± 43952.144397197866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920466.1528033088,
            "unit": "ns",
            "range": "± 17405.880204808866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763795.3592447917,
            "unit": "ns",
            "range": "± 10483.172721908642"
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
          "id": "14380af897bff497d29c5f80f6add1e681d5fd72",
          "message": "Merge pull request #3675 from greymistcube/refactor/optimize-action-evaluator\n\n♻️ ⚡ Optimized action evaluator",
          "timestamp": "2024-02-20T13:14:26+09:00",
          "tree_id": "192497160d353fc82748f877c127cb77f44b8b25",
          "url": "https://github.com/planetarium/libplanet/commit/14380af897bff497d29c5f80f6add1e681d5fd72"
        },
        "date": 1708403226185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7963747.366666666,
            "unit": "ns",
            "range": "± 144080.4089824581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20270568.875,
            "unit": "ns",
            "range": "± 382025.09031561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49290822.428571425,
            "unit": "ns",
            "range": "± 293802.42015176284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99633428.64285715,
            "unit": "ns",
            "range": "± 1042015.7866043812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203092002.5,
            "unit": "ns",
            "range": "± 2260459.135931383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47486.98936170213,
            "unit": "ns",
            "range": "± 5990.876609334622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237939.9625,
            "unit": "ns",
            "range": "± 12052.022087751053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235327.6595744681,
            "unit": "ns",
            "range": "± 14713.96315354703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227850.63855421686,
            "unit": "ns",
            "range": "± 12152.86311099541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4036425,
            "unit": "ns",
            "range": "± 30511.445715774706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3610156.4285714286,
            "unit": "ns",
            "range": "± 36881.38843689276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18122.052083333332,
            "unit": "ns",
            "range": "± 3002.075171294163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76247.19791666667,
            "unit": "ns",
            "range": "± 8933.502142432031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78010.9247311828,
            "unit": "ns",
            "range": "± 7283.811872669897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81365.58421052631,
            "unit": "ns",
            "range": "± 9792.020633042985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6000.447916666667,
            "unit": "ns",
            "range": "± 764.5674851600968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16745.721649484534,
            "unit": "ns",
            "range": "± 2242.8612201747833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287243.357142857,
            "unit": "ns",
            "range": "± 27190.592254097217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2334376.3448275863,
            "unit": "ns",
            "range": "± 97969.67900482695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1886459.9368421054,
            "unit": "ns",
            "range": "± 160528.00405813806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8802721.015151516,
            "unit": "ns",
            "range": "± 275822.9159272894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2997281.464285714,
            "unit": "ns",
            "range": "± 117873.45672433703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3123658.3974358975,
            "unit": "ns",
            "range": "± 106598.1650532787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3722084.6923076925,
            "unit": "ns",
            "range": "± 99242.19763458252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3856549.6885245903,
            "unit": "ns",
            "range": "± 173408.5713095464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16910771.06122449,
            "unit": "ns",
            "range": "± 2160577.0043900805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4559348.713727678,
            "unit": "ns",
            "range": "± 47390.91491583879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1363282.7225060095,
            "unit": "ns",
            "range": "± 6747.448968151683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 916133.2605329241,
            "unit": "ns",
            "range": "± 3814.720808744507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2034741.3203125,
            "unit": "ns",
            "range": "± 19005.401558574336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653564.4447916667,
            "unit": "ns",
            "range": "± 4095.824005395789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593212.2872721354,
            "unit": "ns",
            "range": "± 2500.372133599982"
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
          "id": "18deb9363123124f8edd23535d1d524717c10abb",
          "message": "Merge pull request #3676 from greymistcube/release/4.0.5\n\n🚀 Release 4.0.5",
          "timestamp": "2024-02-20T13:28:36+09:00",
          "tree_id": "9784c0ff337c321fabf7d47683498ac11e2f95cc",
          "url": "https://github.com/planetarium/libplanet/commit/18deb9363123124f8edd23535d1d524717c10abb"
        },
        "date": 1708404518714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8894914.469072165,
            "unit": "ns",
            "range": "± 634842.7040049051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23782954.20652174,
            "unit": "ns",
            "range": "± 1724231.8281136893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55032041.07575758,
            "unit": "ns",
            "range": "± 2469223.927329115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111892741.35454546,
            "unit": "ns",
            "range": "± 4763152.587805563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220916800.14285713,
            "unit": "ns",
            "range": "± 6223596.0467357235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72764.53333333334,
            "unit": "ns",
            "range": "± 11409.40418359868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298214.65789473685,
            "unit": "ns",
            "range": "± 26926.51819276756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310699.9365079365,
            "unit": "ns",
            "range": "± 13383.20138887772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294819.55333333334,
            "unit": "ns",
            "range": "± 14740.224379359832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4325809.066666666,
            "unit": "ns",
            "range": "± 77138.00435533583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737494.0897435895,
            "unit": "ns",
            "range": "± 129153.04606830611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19586.36170212766,
            "unit": "ns",
            "range": "± 3295.9343139955654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84255.84536082474,
            "unit": "ns",
            "range": "± 11170.023479291393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103596.16483516483,
            "unit": "ns",
            "range": "± 16027.802550057777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119411.48936170213,
            "unit": "ns",
            "range": "± 24338.352836422768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7193.279569892473,
            "unit": "ns",
            "range": "± 1322.208226757102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22145.186813186814,
            "unit": "ns",
            "range": "± 4248.14278351817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477364.7835051545,
            "unit": "ns",
            "range": "± 127986.55188747915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872576.310810811,
            "unit": "ns",
            "range": "± 142646.55864947833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2485543.90625,
            "unit": "ns",
            "range": "± 244480.8751191875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16705016.65,
            "unit": "ns",
            "range": "± 5933971.595601503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461933.7333333334,
            "unit": "ns",
            "range": "± 348675.89983764436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3706399.0824175826,
            "unit": "ns",
            "range": "± 446593.198904926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277642.163934426,
            "unit": "ns",
            "range": "± 163315.84522260135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4534645.162790698,
            "unit": "ns",
            "range": "± 245836.36155003888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22500498.391304348,
            "unit": "ns",
            "range": "± 2998444.9001696794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5942638.97315492,
            "unit": "ns",
            "range": "± 339045.12997036224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942847.8762335526,
            "unit": "ns",
            "range": "± 41124.94676733241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144368.82421875,
            "unit": "ns",
            "range": "± 17898.890580211628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572294.7260416667,
            "unit": "ns",
            "range": "± 142357.92865041713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838140.1423688616,
            "unit": "ns",
            "range": "± 5147.421391790743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801514.6337239583,
            "unit": "ns",
            "range": "± 14694.418822489904"
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
          "id": "d7305f485f297f4f18e57fceb33ba79cbb16276b",
          "message": "Merge pull request #3677 from greymistcube/prepare/4.0.6\n\n🔧 Prepare 4.0.6",
          "timestamp": "2024-02-20T14:24:54+09:00",
          "tree_id": "ed9db8d13dffc5260b39f9aee313d6d1c82c6e13",
          "url": "https://github.com/planetarium/libplanet/commit/d7305f485f297f4f18e57fceb33ba79cbb16276b"
        },
        "date": 1708407743371,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8529226.537037037,
            "unit": "ns",
            "range": "± 214030.33569215972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20238109.352941178,
            "unit": "ns",
            "range": "± 646558.3004728627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49437145.28571428,
            "unit": "ns",
            "range": "± 836225.5807623304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98727319.8076923,
            "unit": "ns",
            "range": "± 1189111.7611467664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219249087.8529412,
            "unit": "ns",
            "range": "± 8953893.90138014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67220.02173913043,
            "unit": "ns",
            "range": "± 9273.382114723629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332354.9104477612,
            "unit": "ns",
            "range": "± 15380.270216457604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297098.5930232558,
            "unit": "ns",
            "range": "± 16122.796181824562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315237.4285714286,
            "unit": "ns",
            "range": "± 10220.062781221102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4381449.619047619,
            "unit": "ns",
            "range": "± 103887.39422878802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3820766.1666666665,
            "unit": "ns",
            "range": "± 37022.87651594824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27964.117021276597,
            "unit": "ns",
            "range": "± 2777.1418474751135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113006.12359550562,
            "unit": "ns",
            "range": "± 9406.626178609205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112298.76041666667,
            "unit": "ns",
            "range": "± 6382.316140786429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110004.43548387097,
            "unit": "ns",
            "range": "± 10844.838201938617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7719.914893617021,
            "unit": "ns",
            "range": "± 929.5685021588793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23725.31818181818,
            "unit": "ns",
            "range": "± 4499.22884177794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1425643.2164948455,
            "unit": "ns",
            "range": "± 208029.66180983194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2667749.901639344,
            "unit": "ns",
            "range": "± 119747.59173357167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2434307.8125,
            "unit": "ns",
            "range": "± 151026.5223196392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12542359.386363637,
            "unit": "ns",
            "range": "± 462765.6020549343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3607459.7653061226,
            "unit": "ns",
            "range": "± 322465.79313633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3601502.311827957,
            "unit": "ns",
            "range": "± 371185.1962471604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4643438.71875,
            "unit": "ns",
            "range": "± 360593.9753009923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5066385.121052631,
            "unit": "ns",
            "range": "± 576918.3439346338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23788734.770833332,
            "unit": "ns",
            "range": "± 3325511.322332788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5347810.653610642,
            "unit": "ns",
            "range": "± 180306.8936999393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963870.325078125,
            "unit": "ns",
            "range": "± 52080.61470244401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1096067.8928385417,
            "unit": "ns",
            "range": "± 15500.66805256279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2966166.1549479165,
            "unit": "ns",
            "range": "± 146563.66303915618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879296.9617745535,
            "unit": "ns",
            "range": "± 14948.442480016243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789624.0215494792,
            "unit": "ns",
            "range": "± 12059.946658717747"
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
          "id": "88657ffbb76a56d552c9a93fd2b27d64a13c1c7b",
          "message": "Merge pull request #3680 from OnedgeLee/fix/mortgage\n\nFix Mortgage not to clean TotalUpdatedFungibleAssets",
          "timestamp": "2024-02-22T19:45:31+09:00",
          "tree_id": "a0d9de13a8359f5b9ef681b7ed0e224994becf14",
          "url": "https://github.com/planetarium/libplanet/commit/88657ffbb76a56d552c9a93fd2b27d64a13c1c7b"
        },
        "date": 1708599490899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7663845.733333333,
            "unit": "ns",
            "range": "± 135171.63617863593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18978603.35714286,
            "unit": "ns",
            "range": "± 177045.42694922077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47222876.74074074,
            "unit": "ns",
            "range": "± 1292099.7051200033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93101173.73809524,
            "unit": "ns",
            "range": "± 2203468.7208019975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188614456.46666667,
            "unit": "ns",
            "range": "± 3022908.082305109"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39915.989130434784,
            "unit": "ns",
            "range": "± 6504.608085083981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216327.36486486485,
            "unit": "ns",
            "range": "± 10801.998055375574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211072.35869565216,
            "unit": "ns",
            "range": "± 13389.61140896592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200854.12371134022,
            "unit": "ns",
            "range": "± 18552.936629781892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3877907.076923077,
            "unit": "ns",
            "range": "± 58192.00482520708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3514024.0714285714,
            "unit": "ns",
            "range": "± 59446.87617815304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12439.64606741573,
            "unit": "ns",
            "range": "± 1217.3594706144056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57650.61797752809,
            "unit": "ns",
            "range": "± 4267.865613846686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52392.24418604651,
            "unit": "ns",
            "range": "± 3515.4826961216163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62899.5,
            "unit": "ns",
            "range": "± 10804.827279133846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3349.4204545454545,
            "unit": "ns",
            "range": "± 422.1130948740619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12709.557894736841,
            "unit": "ns",
            "range": "± 1565.8849562086693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1124924.7272727273,
            "unit": "ns",
            "range": "± 114351.24182212276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2379510.0531914895,
            "unit": "ns",
            "range": "± 162076.70876547878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1855405.9210526317,
            "unit": "ns",
            "range": "± 169153.73440658403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12681271.711340206,
            "unit": "ns",
            "range": "± 4888531.809754101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2916961.3,
            "unit": "ns",
            "range": "± 122881.14968694419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2999166.742424242,
            "unit": "ns",
            "range": "± 139518.55434604228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3615734.6136363638,
            "unit": "ns",
            "range": "± 133862.28892796245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3655754.935064935,
            "unit": "ns",
            "range": "± 178210.1065392918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16468971.597826088,
            "unit": "ns",
            "range": "± 2045311.126714719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4309732.019270834,
            "unit": "ns",
            "range": "± 67881.52960837839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1331962.3686197917,
            "unit": "ns",
            "range": "± 16883.480341884533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 881608.6082682292,
            "unit": "ns",
            "range": "± 9761.851229587977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945763.2018229167,
            "unit": "ns",
            "range": "± 27409.27213889552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616563.5689453125,
            "unit": "ns",
            "range": "± 5724.422564580525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578392.9881347656,
            "unit": "ns",
            "range": "± 10625.929199943597"
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
          "id": "1016fbce882309452a45eda1a19c9a8b213801a5",
          "message": "Merge pull request #3681 from OnedgeLee/release/4.0.6\n\n🚀 Release 4.0.6",
          "timestamp": "2024-02-22T19:53:18+09:00",
          "tree_id": "fee32a6b01e16aac4ea8da9bae064a264cf31dbb",
          "url": "https://github.com/planetarium/libplanet/commit/1016fbce882309452a45eda1a19c9a8b213801a5"
        },
        "date": 1708600015833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8079010.925925926,
            "unit": "ns",
            "range": "± 221943.38525033568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19983710.523809522,
            "unit": "ns",
            "range": "± 456725.56368268013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47073178.94444445,
            "unit": "ns",
            "range": "± 1517751.2803332799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92914583.92307693,
            "unit": "ns",
            "range": "± 959991.3107985633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190642111.67647058,
            "unit": "ns",
            "range": "± 3790283.1225642664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45781.391304347824,
            "unit": "ns",
            "range": "± 8725.351780378378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222366.3033707865,
            "unit": "ns",
            "range": "± 13702.265754416223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211363.54166666666,
            "unit": "ns",
            "range": "± 14231.463200222886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195877.52631578947,
            "unit": "ns",
            "range": "± 17585.324816171513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3869949.1875,
            "unit": "ns",
            "range": "± 71508.90659325242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3477566.5,
            "unit": "ns",
            "range": "± 42572.96517940307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13139.5,
            "unit": "ns",
            "range": "± 1289.1368797520463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57663.62637362637,
            "unit": "ns",
            "range": "± 3556.3090155957784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54596.58620689655,
            "unit": "ns",
            "range": "± 5507.154757627453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60547.82989690721,
            "unit": "ns",
            "range": "± 9975.283873071869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3445.4204545454545,
            "unit": "ns",
            "range": "± 317.6039687348268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12438.68817204301,
            "unit": "ns",
            "range": "± 1005.7750632190883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1124929.597826087,
            "unit": "ns",
            "range": "± 105712.37289732802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2353724.074468085,
            "unit": "ns",
            "range": "± 165043.65519684885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1851832.9787234042,
            "unit": "ns",
            "range": "± 141548.3959162825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12832287.149484536,
            "unit": "ns",
            "range": "± 5218388.184991459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912538.3775510206,
            "unit": "ns",
            "range": "± 115063.72914672704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2982954.4545454546,
            "unit": "ns",
            "range": "± 109268.00105170358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3569899.5384615385,
            "unit": "ns",
            "range": "± 145542.44688755958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3707891.6049382715,
            "unit": "ns",
            "range": "± 191529.41086499477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16458110.326086957,
            "unit": "ns",
            "range": "± 1864163.4851916532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4376175.556361607,
            "unit": "ns",
            "range": "± 100735.71916649163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1341416.1568509615,
            "unit": "ns",
            "range": "± 10836.16722798447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 874432.0592215402,
            "unit": "ns",
            "range": "± 7362.683759006121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1954154.4627604166,
            "unit": "ns",
            "range": "± 24122.591462699667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621846.8683733259,
            "unit": "ns",
            "range": "± 9549.411747568061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553771.4138020833,
            "unit": "ns",
            "range": "± 5335.607688325105"
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
          "id": "2b1781a6f82d495e952dffc4fe38604031e15f98",
          "message": "Merge pull request #3682 from OnedgeLee/prepare/4.0.7\n\n🔧 Prepare 4.0.7",
          "timestamp": "2024-02-22T20:01:05+09:00",
          "tree_id": "7ecc2e5ec9876c5a41779d840614a8429327d2ab",
          "url": "https://github.com/planetarium/libplanet/commit/2b1781a6f82d495e952dffc4fe38604031e15f98"
        },
        "date": 1708601007850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11184309.875,
            "unit": "ns",
            "range": "± 546147.3023698694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26541474.285714287,
            "unit": "ns",
            "range": "± 300096.15154491056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68356122.75,
            "unit": "ns",
            "range": "± 1009293.3362267182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132485198.36666666,
            "unit": "ns",
            "range": "± 3865560.828407552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268701592.34042555,
            "unit": "ns",
            "range": "± 15202561.467799056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61910.31182795699,
            "unit": "ns",
            "range": "± 9390.77656530771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300158.9574468085,
            "unit": "ns",
            "range": "± 22342.34853747951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292244.27659574465,
            "unit": "ns",
            "range": "± 23100.971383548625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287708.6804123711,
            "unit": "ns",
            "range": "± 38452.7785554748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4498996.1736842105,
            "unit": "ns",
            "range": "± 538148.3042842657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4248244.37,
            "unit": "ns",
            "range": "± 450693.1744905583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23770.752688172044,
            "unit": "ns",
            "range": "± 2803.7260947280492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94103.16842105263,
            "unit": "ns",
            "range": "± 11186.155961963657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53822.61797752809,
            "unit": "ns",
            "range": "± 2983.2839078987577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78275.8829787234,
            "unit": "ns",
            "range": "± 7191.437749166522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4925.742424242424,
            "unit": "ns",
            "range": "± 1505.4565589331628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13647.340425531915,
            "unit": "ns",
            "range": "± 2700.420725098545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424711.9639175257,
            "unit": "ns",
            "range": "± 128375.27249711924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2987287.5860215053,
            "unit": "ns",
            "range": "± 183707.97650427942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2481811.758241758,
            "unit": "ns",
            "range": "± 148319.66756984656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16183021.775510205,
            "unit": "ns",
            "range": "± 6663477.596783916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3724833.8595505618,
            "unit": "ns",
            "range": "± 278368.90385590383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4100047.030927835,
            "unit": "ns",
            "range": "± 262884.9110543058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4838229.1,
            "unit": "ns",
            "range": "± 108840.71293282819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4757940.4387755105,
            "unit": "ns",
            "range": "± 286801.1640325652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22128089.967391305,
            "unit": "ns",
            "range": "± 3340756.4421339487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4589790.966737689,
            "unit": "ns",
            "range": "± 214948.79453827513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409111.5731907894,
            "unit": "ns",
            "range": "± 47652.33129963502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915513.4942255435,
            "unit": "ns",
            "range": "± 22809.208582366595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506206.5895675505,
            "unit": "ns",
            "range": "± 282223.6075510687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804651.3213964844,
            "unit": "ns",
            "range": "± 68691.17907794986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723791.2475097657,
            "unit": "ns",
            "range": "± 75799.89709770925"
          }
        ]
      }
    ]
  }
}