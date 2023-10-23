window.BENCHMARK_DATA = {
  "lastUpdate": 1698032608739,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "582769981f960a65c5fc10d5a8a917e7fd8b9d4a",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>\n(cherry picked from commit 9ab368f1b8a524c29bf8e6d03020c4a2efde28ea)",
          "timestamp": "2023-10-18T19:04:17+09:00",
          "tree_id": "60b507f13188cb08f123b870814e041ea22f4f73",
          "url": "https://github.com/planetarium/libplanet/commit/582769981f960a65c5fc10d5a8a917e7fd8b9d4a"
        },
        "date": 1697628155481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1318176.8292682928,
            "unit": "ns",
            "range": "± 66819.86342284032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2447512.765957447,
            "unit": "ns",
            "range": "± 93609.41428180803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174884.6938775512,
            "unit": "ns",
            "range": "± 144315.28796571406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8589560.975609757,
            "unit": "ns",
            "range": "± 308406.6462303048"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50097.9381443299,
            "unit": "ns",
            "range": "± 3676.0763554548234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7606843.75,
            "unit": "ns",
            "range": "± 229670.76988664138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21082326.666666668,
            "unit": "ns",
            "range": "± 143439.42706973993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53232506.666666664,
            "unit": "ns",
            "range": "± 608417.3784343707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105811853.33333333,
            "unit": "ns",
            "range": "± 1957735.7941789601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206946163.33333334,
            "unit": "ns",
            "range": "± 2741069.3632404194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4519352.083333333,
            "unit": "ns",
            "range": "± 18720.674098775533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1432787.1651785714,
            "unit": "ns",
            "range": "± 5429.366655112934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072481.953125,
            "unit": "ns",
            "range": "± 4373.123886988973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650050.0520833335,
            "unit": "ns",
            "range": "± 8376.197271749883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848626.4778645834,
            "unit": "ns",
            "range": "± 2361.996946707629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768258.3426339285,
            "unit": "ns",
            "range": "± 2303.900874121951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281011.111111111,
            "unit": "ns",
            "range": "± 90252.1013321673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3452370.8333333335,
            "unit": "ns",
            "range": "± 89157.49610839708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4135393.75,
            "unit": "ns",
            "range": "± 162841.13052264656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4148863.1578947366,
            "unit": "ns",
            "range": "± 180069.33548693618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10217583.870967742,
            "unit": "ns",
            "range": "± 311129.9450891586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255534.78260869565,
            "unit": "ns",
            "range": "± 9698.023106484798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241183.05084745763,
            "unit": "ns",
            "range": "± 10574.3696729464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220565,
            "unit": "ns",
            "range": "± 11453.031216696867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4182393.3333333335,
            "unit": "ns",
            "range": "± 64986.46525751856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762016.6666666665,
            "unit": "ns",
            "range": "± 48483.968877302505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20594.25287356322,
            "unit": "ns",
            "range": "± 1085.1381137943172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86240.21739130435,
            "unit": "ns",
            "range": "± 5254.21985891798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71304.34782608696,
            "unit": "ns",
            "range": "± 4478.149957574299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84801.02040816327,
            "unit": "ns",
            "range": "± 12009.897077577818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5155.789473684211,
            "unit": "ns",
            "range": "± 558.0581433662443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20511.458333333332,
            "unit": "ns",
            "range": "± 2493.1852293239863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7c0bebbfbe90ce56325d4e67173700a68f2d140d",
          "message": "fix: Remove GetAccountState, GetState from BlockChain",
          "timestamp": "2023-10-20T16:52:22+09:00",
          "tree_id": "d7fea795e4c5aa85d969933e29e4af1236e14e4a",
          "url": "https://github.com/planetarium/libplanet/commit/7c0bebbfbe90ce56325d4e67173700a68f2d140d"
        },
        "date": 1697789670489,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1768953.125,
            "unit": "ns",
            "range": "± 194798.63176495876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3409251.086956522,
            "unit": "ns",
            "range": "± 282842.8509799283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2748788.2978723403,
            "unit": "ns",
            "range": "± 244757.535434377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11887777.272727273,
            "unit": "ns",
            "range": "± 866693.2257284067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72200,
            "unit": "ns",
            "range": "± 13534.377282352249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9643236.170212766,
            "unit": "ns",
            "range": "± 631982.4723394747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26078545.714285713,
            "unit": "ns",
            "range": "± 845856.458530036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68912387.01298702,
            "unit": "ns",
            "range": "± 3517827.1468093935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134762288.8888889,
            "unit": "ns",
            "range": "± 3702993.81782792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273001295.65217394,
            "unit": "ns",
            "range": "± 6690054.99464271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6075841.964285715,
            "unit": "ns",
            "range": "± 194187.388150621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1795928.8541666667,
            "unit": "ns",
            "range": "± 25781.86581522655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299059.654017857,
            "unit": "ns",
            "range": "± 15467.682575182516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3321649.5833333335,
            "unit": "ns",
            "range": "± 39783.03298236232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1080962.890625,
            "unit": "ns",
            "range": "± 23423.006173143534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1009968.8411458334,
            "unit": "ns",
            "range": "± 17636.735188696573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4215640.425531914,
            "unit": "ns",
            "range": "± 286238.9491012931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4449847.368421053,
            "unit": "ns",
            "range": "± 354543.25902433525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5461846.666666667,
            "unit": "ns",
            "range": "± 259344.96870537667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5294146.428571428,
            "unit": "ns",
            "range": "± 284331.5633884118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14177312.64367816,
            "unit": "ns",
            "range": "± 1039668.7140963878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326149.4382022472,
            "unit": "ns",
            "range": "± 32824.2846754278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306219.5652173913,
            "unit": "ns",
            "range": "± 23938.727825821847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280301.06382978725,
            "unit": "ns",
            "range": "± 30019.887654188107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5068865.671641791,
            "unit": "ns",
            "range": "± 233777.64594396672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550089.583333333,
            "unit": "ns",
            "range": "± 177426.386580863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26217.525773195877,
            "unit": "ns",
            "range": "± 5688.109130554692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120159.793814433,
            "unit": "ns",
            "range": "± 19636.226405728892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126251.72413793103,
            "unit": "ns",
            "range": "± 6991.853433435454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124527.65957446808,
            "unit": "ns",
            "range": "± 11288.78408316913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8770.967741935483,
            "unit": "ns",
            "range": "± 1195.7879560794333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22912.08791208791,
            "unit": "ns",
            "range": "± 3898.94102901559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "141cc92b4583b8cb649ba7ffaaee1630e5caaab4",
          "message": "fix: Clean up BlockChain API, update Explorer query",
          "timestamp": "2023-10-23T12:25:25+09:00",
          "tree_id": "65a3a471159be7156a9f48e9c5bb82429af83fb9",
          "url": "https://github.com/planetarium/libplanet/commit/141cc92b4583b8cb649ba7ffaaee1630e5caaab4"
        },
        "date": 1698032541859,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1361623.3333333333,
            "unit": "ns",
            "range": "± 90603.3484635584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2708855.263157895,
            "unit": "ns",
            "range": "± 136387.271541726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2224770.4081632653,
            "unit": "ns",
            "range": "± 165536.02417861382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9109304.615384616,
            "unit": "ns",
            "range": "± 422070.9428041871"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53519.58762886598,
            "unit": "ns",
            "range": "± 4958.276733050711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8410986.666666666,
            "unit": "ns",
            "range": "± 84871.1449085921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21180564.285714287,
            "unit": "ns",
            "range": "± 85801.01852670388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53022060,
            "unit": "ns",
            "range": "± 550456.3688431627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103670471.42857143,
            "unit": "ns",
            "range": "± 831219.758435269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213681614.2857143,
            "unit": "ns",
            "range": "± 1482098.8131996843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4575460.572916667,
            "unit": "ns",
            "range": "± 26750.906512136655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1434923.203125,
            "unit": "ns",
            "range": "± 4318.774745981466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1075702.2005208333,
            "unit": "ns",
            "range": "± 3340.2694155782847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668932.6041666665,
            "unit": "ns",
            "range": "± 5860.329096180234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847273.0018028846,
            "unit": "ns",
            "range": "± 1590.6025951111035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778536.8094308035,
            "unit": "ns",
            "range": "± 1995.1017289562758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3444368.1818181816,
            "unit": "ns",
            "range": "± 83925.88786351714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587240,
            "unit": "ns",
            "range": "± 77119.99126446774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4262168.571428572,
            "unit": "ns",
            "range": "± 129159.5360316038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4235880,
            "unit": "ns",
            "range": "± 131655.85664236624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10499744.11764706,
            "unit": "ns",
            "range": "± 277621.46584456094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259689.13043478262,
            "unit": "ns",
            "range": "± 9797.124935654894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259281.81818181818,
            "unit": "ns",
            "range": "± 13304.240788805168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239400,
            "unit": "ns",
            "range": "± 13033.630707203758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4255185.714285715,
            "unit": "ns",
            "range": "± 58208.42665856838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3923400,
            "unit": "ns",
            "range": "± 69126.57128154743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23962.36559139785,
            "unit": "ns",
            "range": "± 1898.0489970822457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98703.2258064516,
            "unit": "ns",
            "range": "± 7681.237043897563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87210.41666666667,
            "unit": "ns",
            "range": "± 6651.307416657058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96538.94736842105,
            "unit": "ns",
            "range": "± 8823.521450932887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6832.105263157895,
            "unit": "ns",
            "range": "± 904.2428297668554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25244.791666666668,
            "unit": "ns",
            "range": "± 1954.6365817375533"
          }
        ]
      }
    ]
  }
}