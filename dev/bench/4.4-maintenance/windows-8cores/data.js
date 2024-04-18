window.BENCHMARK_DATA = {
  "lastUpdate": 1713423711494,
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
      }
    ]
  }
}