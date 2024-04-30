window.BENCHMARK_DATA = {
  "lastUpdate": 1714444936310,
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
          "id": "5ddfb2fa0bbee25b6acc5ba86c92771399e8109c",
          "message": "Merge pull request #3747 from greymistcube/release/4.4.0\n\n🚀 Release 4.4.0",
          "timestamp": "2024-04-17T18:28:59+09:00",
          "tree_id": "4792fe9d6a901fb7e19cbe0a570d73b8e4a6bad0",
          "url": "https://github.com/planetarium/libplanet/commit/5ddfb2fa0bbee25b6acc5ba86c92771399e8109c"
        },
        "date": 1713346928493,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1883067.0212765958,
            "unit": "ns",
            "range": "± 202309.94128210665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3060242.222222222,
            "unit": "ns",
            "range": "± 300368.0278089493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586825.2525252528,
            "unit": "ns",
            "range": "± 332517.0756221291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8619968.181818182,
            "unit": "ns",
            "range": "± 279076.16679149785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 206949,
            "unit": "ns",
            "range": "± 23522.005579130502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5183176.923076923,
            "unit": "ns",
            "range": "± 44564.24489517267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13847720,
            "unit": "ns",
            "range": "± 72379.86302438387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33526100,
            "unit": "ns",
            "range": "± 476339.14238851774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71800853.33333333,
            "unit": "ns",
            "range": "± 893253.9071656315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137911590,
            "unit": "ns",
            "range": "± 1622719.7789953928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3325984.8493303573,
            "unit": "ns",
            "range": "± 11736.011513987432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078685.5338541667,
            "unit": "ns",
            "range": "± 5958.086633707688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737336.3151041666,
            "unit": "ns",
            "range": "± 2424.8451011711795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922435.0390625,
            "unit": "ns",
            "range": "± 9432.81667226813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602286.4908854166,
            "unit": "ns",
            "range": "± 1617.6721167327212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561483.6588541666,
            "unit": "ns",
            "range": "± 2246.646855625281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2705478.378378378,
            "unit": "ns",
            "range": "± 78856.47347179816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3297893.3333333335,
            "unit": "ns",
            "range": "± 54729.770779017614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4399473.333333333,
            "unit": "ns",
            "range": "± 69881.08743395728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3442548.484848485,
            "unit": "ns",
            "range": "± 252446.08329734628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9047865.625,
            "unit": "ns",
            "range": "± 252971.06376584375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184440.35087719298,
            "unit": "ns",
            "range": "± 7895.112856542576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172558.92857142858,
            "unit": "ns",
            "range": "± 7180.979340292958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143818.29268292684,
            "unit": "ns",
            "range": "± 5105.165963237153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815207.1428571427,
            "unit": "ns",
            "range": "± 30662.667461005018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555943.75,
            "unit": "ns",
            "range": "± 46883.50056256465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10772.727272727272,
            "unit": "ns",
            "range": "± 1169.018379129217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55548.45360824742,
            "unit": "ns",
            "range": "± 5691.863955866849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46354.117647058825,
            "unit": "ns",
            "range": "± 2508.4406530360493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64135.051546391755,
            "unit": "ns",
            "range": "± 15475.081052810849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2858.695652173913,
            "unit": "ns",
            "range": "± 585.2870384209153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11901.08695652174,
            "unit": "ns",
            "range": "± 2018.1317965879796"
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
          "id": "da8689a5319160fa420fb426fca8f9afb012a131",
          "message": "Merge pull request #3749 from greymistcube/prepare/4.4.1\n\n🔧 Prepare 4.4.1",
          "timestamp": "2024-04-18T12:45:53+09:00",
          "tree_id": "489eff0480f42ea9f76802245a90e0bab67cdb6c",
          "url": "https://github.com/planetarium/libplanet/commit/da8689a5319160fa420fb426fca8f9afb012a131"
        },
        "date": 1713412483167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2000172,
            "unit": "ns",
            "range": "± 44757.611270784626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3064777.551020408,
            "unit": "ns",
            "range": "± 377937.7111528651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317989.5833333335,
            "unit": "ns",
            "range": "± 259472.7291133093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8304300,
            "unit": "ns",
            "range": "± 252325.23175585346"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 181180.70175438595,
            "unit": "ns",
            "range": "± 7215.000212763369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4935376.666666667,
            "unit": "ns",
            "range": "± 22696.77342287938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12973871.42857143,
            "unit": "ns",
            "range": "± 79962.03357335788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32223735.714285713,
            "unit": "ns",
            "range": "± 246579.40399094057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65121658.333333336,
            "unit": "ns",
            "range": "± 364287.173078736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129523192.85714285,
            "unit": "ns",
            "range": "± 580599.4723152504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3331002.890625,
            "unit": "ns",
            "range": "± 9462.285200576076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058370.1171875,
            "unit": "ns",
            "range": "± 1641.6279312185466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739577.2721354166,
            "unit": "ns",
            "range": "± 1870.425342604074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1902596.3641826923,
            "unit": "ns",
            "range": "± 2627.4514834488164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626465.9375,
            "unit": "ns",
            "range": "± 2025.5154867545064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585107.1028645834,
            "unit": "ns",
            "range": "± 1677.1791441570665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2573922.4137931033,
            "unit": "ns",
            "range": "± 74834.28309343502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3173685.185185185,
            "unit": "ns",
            "range": "± 82159.89431357756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3614558.43373494,
            "unit": "ns",
            "range": "± 191543.18573411956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3336205.263157895,
            "unit": "ns",
            "range": "± 228513.1479845125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8702715.789473685,
            "unit": "ns",
            "range": "± 180793.08695964474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173876.38888888888,
            "unit": "ns",
            "range": "± 8531.60640811409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163613.9534883721,
            "unit": "ns",
            "range": "± 8491.728332230103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144019.35483870967,
            "unit": "ns",
            "range": "± 4358.701592205237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754006.6666666665,
            "unit": "ns",
            "range": "± 39491.92443067437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2455942.8571428573,
            "unit": "ns",
            "range": "± 23200.653647480056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10273.404255319148,
            "unit": "ns",
            "range": "± 1286.8378791804062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53478.35051546392,
            "unit": "ns",
            "range": "± 5366.722828461126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43741.30434782609,
            "unit": "ns",
            "range": "± 1569.9364582975286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51800,
            "unit": "ns",
            "range": "± 8188.6756317581985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2165.625,
            "unit": "ns",
            "range": "± 395.98727385186453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10154.166666666666,
            "unit": "ns",
            "range": "± 1387.759774954749"
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
          "id": "90e70576ece55b54c5bef2dfc9125de483ca9f70",
          "message": "Merge pull request #3757 from greymistcube/port/4.3.1-to-4.4\n\n🔀 Port 4.3.1 to 4.4",
          "timestamp": "2024-04-18T15:51:15+09:00",
          "tree_id": "3b40adf1bdb746bb2eda7f4b514d5412ad17a0d3",
          "url": "https://github.com/planetarium/libplanet/commit/90e70576ece55b54c5bef2dfc9125de483ca9f70"
        },
        "date": 1713423645084,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967767,
            "unit": "ns",
            "range": "± 95660.23529749295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1714341.935483871,
            "unit": "ns",
            "range": "± 71157.94150209408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511808,
            "unit": "ns",
            "range": "± 125338.83182651881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7076028.260869565,
            "unit": "ns",
            "range": "± 413176.11265859444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35502.22222222222,
            "unit": "ns",
            "range": "± 3095.2293040168192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5340140,
            "unit": "ns",
            "range": "± 29933.636121069077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13004128.57142857,
            "unit": "ns",
            "range": "± 132244.2520406925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32806414.285714287,
            "unit": "ns",
            "range": "± 141643.92982808285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67091426.666666664,
            "unit": "ns",
            "range": "± 963770.0129229607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132090146.66666667,
            "unit": "ns",
            "range": "± 844788.9667727392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277862.1744791665,
            "unit": "ns",
            "range": "± 5986.77760392107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054422.8125,
            "unit": "ns",
            "range": "± 2822.81247231598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744342.4544270834,
            "unit": "ns",
            "range": "± 1005.2516384627538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927390.2213541667,
            "unit": "ns",
            "range": "± 4377.985462998991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627418.5091145834,
            "unit": "ns",
            "range": "± 1164.9233888095177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578783.3268229166,
            "unit": "ns",
            "range": "± 856.8034673238083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234151.724137931,
            "unit": "ns",
            "range": "± 64440.69599633923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255840.5405405406,
            "unit": "ns",
            "range": "± 46041.403223737776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767451.724137931,
            "unit": "ns",
            "range": "± 79018.35510405006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3347700,
            "unit": "ns",
            "range": "± 45734.49776387936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7594252.631578947,
            "unit": "ns",
            "range": "± 141756.46710084262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175255.223880597,
            "unit": "ns",
            "range": "± 8237.962450017962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164766.66666666666,
            "unit": "ns",
            "range": "± 7551.009332233929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139684.61538461538,
            "unit": "ns",
            "range": "± 2208.259553678022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2799653.3333333335,
            "unit": "ns",
            "range": "± 41304.7708532331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2438633.3333333335,
            "unit": "ns",
            "range": "± 41311.09616878578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9730.681818181818,
            "unit": "ns",
            "range": "± 878.0016435647506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53821.64948453608,
            "unit": "ns",
            "range": "± 6067.076911566155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43651.282051282054,
            "unit": "ns",
            "range": "± 1351.971619694304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54712.121212121216,
            "unit": "ns",
            "range": "± 13728.521426453262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2263.157894736842,
            "unit": "ns",
            "range": "± 285.48302911103895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9185.555555555555,
            "unit": "ns",
            "range": "± 1054.7443495683287"
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
          "id": "01ff04787bdd1c89b75d7d821718b9a2bd40f994",
          "message": "Merge pull request #3758 from greymistcube/release/4.4.1\n\n🚀 Release 4.4.1",
          "timestamp": "2024-04-18T16:05:22+09:00",
          "tree_id": "6ffc1104a7fa6713ef80a0c59ec9b8066316b36b",
          "url": "https://github.com/planetarium/libplanet/commit/01ff04787bdd1c89b75d7d821718b9a2bd40f994"
        },
        "date": 1713424469770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999777.3195876288,
            "unit": "ns",
            "range": "± 118855.36597860114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702469.387755102,
            "unit": "ns",
            "range": "± 60168.493292037936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1534185.8585858585,
            "unit": "ns",
            "range": "± 156140.67506650757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6645893.548387097,
            "unit": "ns",
            "range": "± 199509.01556150935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35037.36263736264,
            "unit": "ns",
            "range": "± 3477.9830793674514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5080713.333333333,
            "unit": "ns",
            "range": "± 34080.21769436396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13619064.285714285,
            "unit": "ns",
            "range": "± 101964.67417797097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33198807.14285714,
            "unit": "ns",
            "range": "± 245412.41180537685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66201728.571428575,
            "unit": "ns",
            "range": "± 355308.6208410317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129120338.46153846,
            "unit": "ns",
            "range": "± 798918.190991691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329440.5729166665,
            "unit": "ns",
            "range": "± 8019.151023592423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046103.8010817308,
            "unit": "ns",
            "range": "± 2218.674038034083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725397.4609375,
            "unit": "ns",
            "range": "± 1623.1272988135506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2003358.3072916667,
            "unit": "ns",
            "range": "± 12849.309286256677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619521.5625,
            "unit": "ns",
            "range": "± 1425.0853196035932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576731.2290736607,
            "unit": "ns",
            "range": "± 1564.6838682012462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2243560,
            "unit": "ns",
            "range": "± 39953.23695092981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2312744.117647059,
            "unit": "ns",
            "range": "± 71717.44300388884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2853644.4444444445,
            "unit": "ns",
            "range": "± 58501.2138860707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2921309.433962264,
            "unit": "ns",
            "range": "± 121262.37805834814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7958994.117647059,
            "unit": "ns",
            "range": "± 239519.40636398428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172632.25806451612,
            "unit": "ns",
            "range": "± 7367.4244046709055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167227.5,
            "unit": "ns",
            "range": "± 8719.307471629276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142931.57894736843,
            "unit": "ns",
            "range": "± 2955.795180014818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2717753.3333333335,
            "unit": "ns",
            "range": "± 24513.3161091409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2419046.6666666665,
            "unit": "ns",
            "range": "± 36008.70661910745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10810.63829787234,
            "unit": "ns",
            "range": "± 1762.541425432879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51238.09523809524,
            "unit": "ns",
            "range": "± 3379.488261036436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43481.818181818184,
            "unit": "ns",
            "range": "± 1306.8221343813743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49312.22222222222,
            "unit": "ns",
            "range": "± 7702.0619999572855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2364.5833333333335,
            "unit": "ns",
            "range": "± 357.17581301581544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9838.297872340425,
            "unit": "ns",
            "range": "± 1550.362869975147"
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
          "id": "980e86faec3eca09b3c0b2b239b354038e8402df",
          "message": "Merge pull request #3759 from greymistcube/prepare/4.4.2\n\n🔧 Prepare 4.4.2",
          "timestamp": "2024-04-19T14:11:39+09:00",
          "tree_id": "dbde54531bdc4ccc2cbd9936f214caa5716598bd",
          "url": "https://github.com/planetarium/libplanet/commit/980e86faec3eca09b3c0b2b239b354038e8402df"
        },
        "date": 1713504084166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980493.8775510204,
            "unit": "ns",
            "range": "± 92685.1346707405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1736663.5294117648,
            "unit": "ns",
            "range": "± 93590.7184641354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1522343.1578947369,
            "unit": "ns",
            "range": "± 136119.92807707784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6982155,
            "unit": "ns",
            "range": "± 245854.95301717418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35272.72727272727,
            "unit": "ns",
            "range": "± 3419.9457975380583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5193592.857142857,
            "unit": "ns",
            "range": "± 25618.967260927664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13156600,
            "unit": "ns",
            "range": "± 39541.87653614836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32732906.666666668,
            "unit": "ns",
            "range": "± 501650.45950722456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65939800,
            "unit": "ns",
            "range": "± 888900.8606138257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131495326.66666667,
            "unit": "ns",
            "range": "± 1140757.4259904607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3297069.7265625,
            "unit": "ns",
            "range": "± 8532.981325150267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057179.2410714286,
            "unit": "ns",
            "range": "± 1556.5075753807655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734880.1231971154,
            "unit": "ns",
            "range": "± 2200.152628696005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961370.1302083333,
            "unit": "ns",
            "range": "± 4742.1241985311835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623388.7369791666,
            "unit": "ns",
            "range": "± 1216.2016273474803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569693.8346354166,
            "unit": "ns",
            "range": "± 1257.7546478840436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183745.652173913,
            "unit": "ns",
            "range": "± 46376.12271906856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2269105.5555555555,
            "unit": "ns",
            "range": "± 87881.72458323328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2791839.4736842103,
            "unit": "ns",
            "range": "± 77813.15646235169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3033580,
            "unit": "ns",
            "range": "± 76928.73728776298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8107425.806451613,
            "unit": "ns",
            "range": "± 238371.33352221968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173628.57142857142,
            "unit": "ns",
            "range": "± 7824.064380924597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167040,
            "unit": "ns",
            "range": "± 6298.01850084906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141586.66666666666,
            "unit": "ns",
            "range": "± 3361.622487300803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2760453.3333333335,
            "unit": "ns",
            "range": "± 42627.48721971149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2518729.411764706,
            "unit": "ns",
            "range": "± 45291.13827099461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10466.315789473685,
            "unit": "ns",
            "range": "± 1447.0520676361884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54192.391304347824,
            "unit": "ns",
            "range": "± 4599.384423590565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44007.40740740741,
            "unit": "ns",
            "range": "± 1179.6107330308084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59811.22448979592,
            "unit": "ns",
            "range": "± 13004.962436304972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2301.063829787234,
            "unit": "ns",
            "range": "± 381.70378676165353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9735.416666666666,
            "unit": "ns",
            "range": "± 1246.3824847315584"
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
          "id": "51e2e17b4380e9fd066b30028a75330d7e22f595",
          "message": "Merge pull request #3763 from greymistcube/feature/raw-state-query\n\n✨ Added `RawStateQuery`",
          "timestamp": "2024-04-29T18:18:54+09:00",
          "tree_id": "47f16d1c6892b647e7e0e5dd599f8fef085d0951",
          "url": "https://github.com/planetarium/libplanet/commit/51e2e17b4380e9fd066b30028a75330d7e22f595"
        },
        "date": 1714382874211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979359.375,
            "unit": "ns",
            "range": "± 105962.16512274559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698157.5757575757,
            "unit": "ns",
            "range": "± 53132.24674281518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1487019.1489361702,
            "unit": "ns",
            "range": "± 108381.4036707105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7058784.615384615,
            "unit": "ns",
            "range": "± 290561.79956511117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35134.06593406593,
            "unit": "ns",
            "range": "± 3131.3901698134637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4906726.666666667,
            "unit": "ns",
            "range": "± 25628.652120699004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12688007.692307692,
            "unit": "ns",
            "range": "± 73500.9009189509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31640192.85714286,
            "unit": "ns",
            "range": "± 190805.13807097994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65034857.14285714,
            "unit": "ns",
            "range": "± 302215.1925985235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126976214.28571428,
            "unit": "ns",
            "range": "± 697019.3991971406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3328338.515625,
            "unit": "ns",
            "range": "± 4456.693634898319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069761.1979166667,
            "unit": "ns",
            "range": "± 2205.39956235345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752020.95703125,
            "unit": "ns",
            "range": "± 1171.8778028472807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927522.8255208333,
            "unit": "ns",
            "range": "± 2609.695931066175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625497.63671875,
            "unit": "ns",
            "range": "± 2403.256947967798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565075.2604166666,
            "unit": "ns",
            "range": "± 1433.0742306096424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2178086.4864864866,
            "unit": "ns",
            "range": "± 70265.41413400638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2388828.5714285714,
            "unit": "ns",
            "range": "± 28128.836246304767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2840571.4285714286,
            "unit": "ns",
            "range": "± 48282.588493662515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2798081.4285714286,
            "unit": "ns",
            "range": "± 132466.72898424222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8022658.064516129,
            "unit": "ns",
            "range": "± 231758.86142597088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168872.88135593222,
            "unit": "ns",
            "range": "± 7484.209365758582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163258.82352941178,
            "unit": "ns",
            "range": "± 4666.587725331805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142213.33333333334,
            "unit": "ns",
            "range": "± 2602.9836360461063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2683046.6666666665,
            "unit": "ns",
            "range": "± 28075.761449199934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2415453.3333333335,
            "unit": "ns",
            "range": "± 39681.60543027222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8875.29411764706,
            "unit": "ns",
            "range": "± 709.2762713722014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50041.573033707864,
            "unit": "ns",
            "range": "± 2883.7636782496293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44256.666666666664,
            "unit": "ns",
            "range": "± 1312.718509451844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47971.42857142857,
            "unit": "ns",
            "range": "± 9032.119090099066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2018.888888888889,
            "unit": "ns",
            "range": "± 215.6226648175494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9513.40206185567,
            "unit": "ns",
            "range": "± 1178.6847247726473"
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
          "id": "001085a1bdb136bb4f3e2447ccead27d8646812a",
          "message": "Merge pull request #3770 from greymistcube/release/4.4.2\n\n🚀 Release 4.4.2",
          "timestamp": "2024-04-29T21:24:36+09:00",
          "tree_id": "4b5ed6a261cd3e35dd06354ec30d506d17dc9e74",
          "url": "https://github.com/planetarium/libplanet/commit/001085a1bdb136bb4f3e2447ccead27d8646812a"
        },
        "date": 1714394041017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015473.7373737374,
            "unit": "ns",
            "range": "± 120076.92312222924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771504.5454545454,
            "unit": "ns",
            "range": "± 82762.56945079642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1550286.4583333333,
            "unit": "ns",
            "range": "± 127487.30679420735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6931585.714285715,
            "unit": "ns",
            "range": "± 157231.14286207515"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37085.56701030928,
            "unit": "ns",
            "range": "± 4970.579897647794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4920006.666666667,
            "unit": "ns",
            "range": "± 33263.031102039364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13037266.666666666,
            "unit": "ns",
            "range": "± 112107.43996380479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32400306.666666668,
            "unit": "ns",
            "range": "± 284624.02134009975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65802340,
            "unit": "ns",
            "range": "± 404706.1434812036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131983416.66666667,
            "unit": "ns",
            "range": "± 505588.5748013863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3364510.8072916665,
            "unit": "ns",
            "range": "± 7260.3678712366855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053364.325420673,
            "unit": "ns",
            "range": "± 1274.5337882931456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739692.1735491072,
            "unit": "ns",
            "range": "± 1095.7473947094686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922615.72265625,
            "unit": "ns",
            "range": "± 1784.4444153480947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639488.0859375,
            "unit": "ns",
            "range": "± 1089.2972367546063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566488.14453125,
            "unit": "ns",
            "range": "± 1534.9881941322265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2225210.465116279,
            "unit": "ns",
            "range": "± 39895.913023378635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2353657.37704918,
            "unit": "ns",
            "range": "± 104616.46055794533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2867007.1428571427,
            "unit": "ns",
            "range": "± 48629.59631091582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2860962.5,
            "unit": "ns",
            "range": "± 85630.36963919667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8129832.258064516,
            "unit": "ns",
            "range": "± 202136.83053334078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178459.42028985507,
            "unit": "ns",
            "range": "± 8023.665709867275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177850,
            "unit": "ns",
            "range": "± 12456.601586184053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143480.4347826087,
            "unit": "ns",
            "range": "± 3599.676094343729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2721360,
            "unit": "ns",
            "range": "± 29830.56438333964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2451778.5714285714,
            "unit": "ns",
            "range": "± 31870.903744552106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10633.157894736842,
            "unit": "ns",
            "range": "± 1177.7776251816383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56129.47368421053,
            "unit": "ns",
            "range": "± 6152.388805814952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45370.52631578947,
            "unit": "ns",
            "range": "± 2634.625157407557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61208.163265306124,
            "unit": "ns",
            "range": "± 12339.640869888066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2756.25,
            "unit": "ns",
            "range": "± 521.4983473758948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10895.918367346938,
            "unit": "ns",
            "range": "± 1322.9082588405922"
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
          "id": "21dbf423bcf05f0825a4faebf0ced07d2317c6bd",
          "message": "Merge pull request #3771 from greymistcube/prepare/4.4.3\n\n🔧 Prepare 4.4.3",
          "timestamp": "2024-04-30T11:32:08+09:00",
          "tree_id": "342df7550fbbf2d9b3febc7e613dc7bb7a9ca48f",
          "url": "https://github.com/planetarium/libplanet/commit/21dbf423bcf05f0825a4faebf0ced07d2317c6bd"
        },
        "date": 1714444869532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955879.7979797979,
            "unit": "ns",
            "range": "± 94675.027394787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1666289.7435897435,
            "unit": "ns",
            "range": "± 58071.07620870985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1461265.9574468085,
            "unit": "ns",
            "range": "± 96817.3433245732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6853400,
            "unit": "ns",
            "range": "± 216909.0146236435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33377.10843373494,
            "unit": "ns",
            "range": "± 1964.3360015850462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4960880,
            "unit": "ns",
            "range": "± 23533.963299270876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13046653.333333334,
            "unit": "ns",
            "range": "± 68509.41402116799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32509478.57142857,
            "unit": "ns",
            "range": "± 133471.02352525477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65368392.85714286,
            "unit": "ns",
            "range": "± 175829.2767443453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129157428.57142857,
            "unit": "ns",
            "range": "± 627326.2817196995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3320679.2131696427,
            "unit": "ns",
            "range": "± 2866.1247153341787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060994.8958333333,
            "unit": "ns",
            "range": "± 2801.0475581975793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756283.2682291666,
            "unit": "ns",
            "range": "± 1795.589060866083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906216.5114182692,
            "unit": "ns",
            "range": "± 3606.228880588816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618034.765625,
            "unit": "ns",
            "range": "± 1950.675150211366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565788.6002604166,
            "unit": "ns",
            "range": "± 1777.2507083192475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205882.6086956523,
            "unit": "ns",
            "range": "± 35677.844381494586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287083.673469388,
            "unit": "ns",
            "range": "± 78985.17621189746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826400,
            "unit": "ns",
            "range": "± 54342.923489018634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2782683.076923077,
            "unit": "ns",
            "range": "± 124637.1503219831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7918191.176470588,
            "unit": "ns",
            "range": "± 214460.6983386637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168051.61290322582,
            "unit": "ns",
            "range": "± 6817.377553000761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161558.13953488372,
            "unit": "ns",
            "range": "± 5938.663973453142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142887.5,
            "unit": "ns",
            "range": "± 2025.133740439546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2655253.3333333335,
            "unit": "ns",
            "range": "± 31335.736483324927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2411486.6666666665,
            "unit": "ns",
            "range": "± 29461.642536565763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9455.056179775282,
            "unit": "ns",
            "range": "± 651.9221990591739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50343.67816091954,
            "unit": "ns",
            "range": "± 2710.303387695687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44906.89655172414,
            "unit": "ns",
            "range": "± 787.3695059603568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49274.22680412371,
            "unit": "ns",
            "range": "± 9279.157630034315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2156.122448979592,
            "unit": "ns",
            "range": "± 361.57340203319467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9403.061224489797,
            "unit": "ns",
            "range": "± 1332.500485029807"
          }
        ]
      }
    ]
  }
}