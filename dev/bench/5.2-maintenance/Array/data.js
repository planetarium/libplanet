window.BENCHMARK_DATA = {
  "lastUpdate": 1721742963510,
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
        "date": 1721724208101,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10944024.333333334,
            "unit": "ns",
            "range": "± 95356.19767514121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26501904.230769232,
            "unit": "ns",
            "range": "± 259250.78946332828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68585973.57142857,
            "unit": "ns",
            "range": "± 119402.63821187556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137959276.16666666,
            "unit": "ns",
            "range": "± 395392.8869579629"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274457702.64285713,
            "unit": "ns",
            "range": "± 320002.67445723905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14544.931034482759,
            "unit": "ns",
            "range": "± 426.5414844197859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111524.12745098039,
            "unit": "ns",
            "range": "± 4553.062727267369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107510.01923076923,
            "unit": "ns",
            "range": "± 4164.073126113773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93215.54545454546,
            "unit": "ns",
            "range": "± 2877.2766539180448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2990386.4183673467,
            "unit": "ns",
            "range": "± 191459.1290572462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2774025.2089552237,
            "unit": "ns",
            "range": "± 131279.4471340981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5048.208791208791,
            "unit": "ns",
            "range": "± 392.25526032825786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27251.757894736842,
            "unit": "ns",
            "range": "± 2138.692226750142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22485.985714285714,
            "unit": "ns",
            "range": "± 1071.095612626232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29757.697916666668,
            "unit": "ns",
            "range": "± 6443.02949848217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1253.4835164835165,
            "unit": "ns",
            "range": "± 153.81116580168913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5098.097826086957,
            "unit": "ns",
            "range": "± 619.220478758498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678375.5303030303,
            "unit": "ns",
            "range": "± 30504.460636725395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1266676.5833333333,
            "unit": "ns",
            "range": "± 43223.755241584426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1065036.5573770492,
            "unit": "ns",
            "range": "± 43976.406720545274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9696429.45,
            "unit": "ns",
            "range": "± 1344516.378092989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199418.5555555555,
            "unit": "ns",
            "range": "± 61433.5946063423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306145.2884615385,
            "unit": "ns",
            "range": "± 92328.47894409853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2568035.714285714,
            "unit": "ns",
            "range": "± 30030.785735202244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2346484.326923077,
            "unit": "ns",
            "range": "± 96549.5814740416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3017892.5102040814,
            "unit": "ns",
            "range": "± 223935.55852909337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3019868.9166949727,
            "unit": "ns",
            "range": "± 74657.44992222123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915405.685546875,
            "unit": "ns",
            "range": "± 4268.966035545066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610616.5410807292,
            "unit": "ns",
            "range": "± 5774.650490924811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651423.8975360577,
            "unit": "ns",
            "range": "± 3265.2126815000047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466622.2668457031,
            "unit": "ns",
            "range": "± 615.746891729422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 432494.4141000601,
            "unit": "ns",
            "range": "± 434.21901320755524"
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
        "date": 1721742913682,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10636757,
            "unit": "ns",
            "range": "± 145321.40397064708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26502120.916666668,
            "unit": "ns",
            "range": "± 69714.46717270555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68161710.73333333,
            "unit": "ns",
            "range": "± 156974.77208932408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135809055.8,
            "unit": "ns",
            "range": "± 292115.477345176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276418125.3076923,
            "unit": "ns",
            "range": "± 443436.5823745985"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13784,
            "unit": "ns",
            "range": "± 367.57573369307175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109222.70588235294,
            "unit": "ns",
            "range": "± 3693.8698639454938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106039.90322580645,
            "unit": "ns",
            "range": "± 3137.1226238368886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90761.47619047618,
            "unit": "ns",
            "range": "± 2134.68207513549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2991898.222222222,
            "unit": "ns",
            "range": "± 190207.73470708047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738028.26,
            "unit": "ns",
            "range": "± 174680.67263545826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5002.532258064516,
            "unit": "ns",
            "range": "± 481.96507747411357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27015.989130434784,
            "unit": "ns",
            "range": "± 1915.7076762855693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22439.324175824175,
            "unit": "ns",
            "range": "± 1411.12014287631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30812.0625,
            "unit": "ns",
            "range": "± 6203.941712733929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1185.6170212765958,
            "unit": "ns",
            "range": "± 239.90594511778934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5078.829787234043,
            "unit": "ns",
            "range": "± 644.1054418171367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683407.3536585366,
            "unit": "ns",
            "range": "± 36233.44285491367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279248.3,
            "unit": "ns",
            "range": "± 49328.403944088706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1050563.8898305085,
            "unit": "ns",
            "range": "± 42353.349769413035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9573209.56,
            "unit": "ns",
            "range": "± 1404874.7176027047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2238504.8125,
            "unit": "ns",
            "range": "± 39412.723500952074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2315219.419354839,
            "unit": "ns",
            "range": "± 70690.72657889161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2582589.95,
            "unit": "ns",
            "range": "± 59238.3609509519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2300743.923076923,
            "unit": "ns",
            "range": "± 28306.218431826182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2890065.9318181816,
            "unit": "ns",
            "range": "± 102705.53078637742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3029270.453125,
            "unit": "ns",
            "range": "± 39971.12293429477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 916800.7951311384,
            "unit": "ns",
            "range": "± 4650.210423184328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609828.1958333333,
            "unit": "ns",
            "range": "± 8412.112432490969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631569.3399739584,
            "unit": "ns",
            "range": "± 14886.681865300103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466046.86771065847,
            "unit": "ns",
            "range": "± 421.8874910915492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423137.36432291666,
            "unit": "ns",
            "range": "± 1620.0712318589262"
          }
        ]
      }
    ]
  }
}