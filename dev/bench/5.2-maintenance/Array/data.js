window.BENCHMARK_DATA = {
  "lastUpdate": 1722476085977,
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
        "date": 1722385941646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10747139.782608695,
            "unit": "ns",
            "range": "± 246594.63156361706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26429993.714285713,
            "unit": "ns",
            "range": "± 123298.46654759746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68425833.13333334,
            "unit": "ns",
            "range": "± 124995.03415614253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135662628.2857143,
            "unit": "ns",
            "range": "± 332277.58993311337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273055240.35714287,
            "unit": "ns",
            "range": "± 482193.8965981993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14189.857142857143,
            "unit": "ns",
            "range": "± 325.35846165641453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109924.6888888889,
            "unit": "ns",
            "range": "± 3713.169271306351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105576.04615384615,
            "unit": "ns",
            "range": "± 4873.986690940132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92160.12857142858,
            "unit": "ns",
            "range": "± 2985.2541529965574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3042151.6071428573,
            "unit": "ns",
            "range": "± 162664.56878060062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746784.868686869,
            "unit": "ns",
            "range": "± 162501.57441828478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5009.333333333333,
            "unit": "ns",
            "range": "± 423.44060473274664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26364.539325842696,
            "unit": "ns",
            "range": "± 1898.032498381726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22828.559139784946,
            "unit": "ns",
            "range": "± 1323.4411705061002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29178.59574468085,
            "unit": "ns",
            "range": "± 5176.076340862189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1095.10989010989,
            "unit": "ns",
            "range": "± 193.4936950192694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4812.406593406594,
            "unit": "ns",
            "range": "± 526.0100966082512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675501.3766233766,
            "unit": "ns",
            "range": "± 28788.16363818505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1284362,
            "unit": "ns",
            "range": "± 53069.25528604471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1075177.6621621621,
            "unit": "ns",
            "range": "± 53349.41317269201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9658403.35,
            "unit": "ns",
            "range": "± 1474120.297000162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194964.1428571427,
            "unit": "ns",
            "range": "± 32962.928545347946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2308813.4242424243,
            "unit": "ns",
            "range": "± 71634.67534172535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2578765.769230769,
            "unit": "ns",
            "range": "± 32899.31259199257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2347594.173076923,
            "unit": "ns",
            "range": "± 96014.57509123211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3029773.2444444443,
            "unit": "ns",
            "range": "± 167911.31060017267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030804.8388020834,
            "unit": "ns",
            "range": "± 35812.92024757613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924029.2837239583,
            "unit": "ns",
            "range": "± 3010.877118801896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617612.4858723958,
            "unit": "ns",
            "range": "± 5341.879206437071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1641220.3893229167,
            "unit": "ns",
            "range": "± 15610.995868337484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472182.6361328125,
            "unit": "ns",
            "range": "± 552.1310525538296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421210.2728841146,
            "unit": "ns",
            "range": "± 869.7059469124811"
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
        "date": 1722392102604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10746422.857142856,
            "unit": "ns",
            "range": "± 94870.28094586446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26474862.57142857,
            "unit": "ns",
            "range": "± 52996.66352446421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67752264.2,
            "unit": "ns",
            "range": "± 163714.38432316898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136092821,
            "unit": "ns",
            "range": "± 136239.1205451763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273262907.85714287,
            "unit": "ns",
            "range": "± 320146.7347119868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14098.41935483871,
            "unit": "ns",
            "range": "± 424.3990868819542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110141.33333333333,
            "unit": "ns",
            "range": "± 4911.237800642855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105788.07692307692,
            "unit": "ns",
            "range": "± 3683.508549028932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91331.6875,
            "unit": "ns",
            "range": "± 2631.6330688131593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3055035.4895833335,
            "unit": "ns",
            "range": "± 175775.1060640598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2773677.3804347827,
            "unit": "ns",
            "range": "± 156295.34397133338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4759.923076923077,
            "unit": "ns",
            "range": "± 549.088380474992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27162.85714285714,
            "unit": "ns",
            "range": "± 1853.1799311299637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23441.98901098901,
            "unit": "ns",
            "range": "± 1657.7473570716074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29966.79591836735,
            "unit": "ns",
            "range": "± 5593.613882562833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1175.75,
            "unit": "ns",
            "range": "± 234.5724442021001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4768.75,
            "unit": "ns",
            "range": "± 414.67783403981946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690321.5632183908,
            "unit": "ns",
            "range": "± 44149.84927275521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280528.0588235294,
            "unit": "ns",
            "range": "± 50771.11964430636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1083620.1445783132,
            "unit": "ns",
            "range": "± 57373.95447437472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9541834.65,
            "unit": "ns",
            "range": "± 1473047.4290023972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198233.8214285714,
            "unit": "ns",
            "range": "± 61750.90464177867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2360646.7741935486,
            "unit": "ns",
            "range": "± 71649.30856410255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2574649.5833333335,
            "unit": "ns",
            "range": "± 31529.70546948424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2294206.3703703703,
            "unit": "ns",
            "range": "± 63567.80556960003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3196169.86,
            "unit": "ns",
            "range": "± 334536.3784791723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3039891.8225097656,
            "unit": "ns",
            "range": "± 58723.21192899662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919662.67109375,
            "unit": "ns",
            "range": "± 4225.335220376931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615771.4223307292,
            "unit": "ns",
            "range": "± 5408.241358064219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636374.7389322917,
            "unit": "ns",
            "range": "± 16546.44281208421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461981.6313100961,
            "unit": "ns",
            "range": "± 663.0019525137758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425511.5705217634,
            "unit": "ns",
            "range": "± 1022.7348715283644"
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
        "date": 1722476015517,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10715820.346153846,
            "unit": "ns",
            "range": "± 64256.867088073624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26466036.14285714,
            "unit": "ns",
            "range": "± 139157.2984701718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67299421.57692307,
            "unit": "ns",
            "range": "± 51045.25322766969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135308274.14285713,
            "unit": "ns",
            "range": "± 122757.80233818582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274597610.4285714,
            "unit": "ns",
            "range": "± 392947.8038525873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13849.692307692309,
            "unit": "ns",
            "range": "± 375.01666834750364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110403.36734693877,
            "unit": "ns",
            "range": "± 4407.056659938872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105193.87234042553,
            "unit": "ns",
            "range": "± 4077.7286656060473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92327.68181818182,
            "unit": "ns",
            "range": "± 2887.4868230710754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3014121.61,
            "unit": "ns",
            "range": "± 183190.8514639823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772864.0206185565,
            "unit": "ns",
            "range": "± 163809.00562856856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4759.56043956044,
            "unit": "ns",
            "range": "± 406.77731305664327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27069.341463414636,
            "unit": "ns",
            "range": "± 1435.621242215044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22582.10989010989,
            "unit": "ns",
            "range": "± 1548.7621397644525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31551.123711340206,
            "unit": "ns",
            "range": "± 6301.413676141999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1233.6290322580646,
            "unit": "ns",
            "range": "± 157.5044668660192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4890.290322580645,
            "unit": "ns",
            "range": "± 550.734244690572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 692327.7391304348,
            "unit": "ns",
            "range": "± 42467.59418374645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1277743.475609756,
            "unit": "ns",
            "range": "± 44041.5496057347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1100446.978021978,
            "unit": "ns",
            "range": "± 62306.25448022909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9604988.78,
            "unit": "ns",
            "range": "± 1565616.3341889207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171603.361111111,
            "unit": "ns",
            "range": "± 71133.40454994315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2329345.9375,
            "unit": "ns",
            "range": "± 72084.9091772525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2590672.9142857143,
            "unit": "ns",
            "range": "± 83523.1445540595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2306983.0833333335,
            "unit": "ns",
            "range": "± 29074.31022697258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3127356.2268041237,
            "unit": "ns",
            "range": "± 256159.3459568309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3013384.56953125,
            "unit": "ns",
            "range": "± 48607.85405425129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913382.7696614583,
            "unit": "ns",
            "range": "± 5426.142499772324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615342.5128255208,
            "unit": "ns",
            "range": "± 5661.026827360016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648870.648046875,
            "unit": "ns",
            "range": "± 16738.02156868224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461246.0123046875,
            "unit": "ns",
            "range": "± 502.8135913704333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424447.607421875,
            "unit": "ns",
            "range": "± 1067.1472798921016"
          }
        ]
      }
    ]
  }
}