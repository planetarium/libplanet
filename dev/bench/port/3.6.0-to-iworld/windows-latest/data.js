window.BENCHMARK_DATA = {
  "lastUpdate": 1698751267144,
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
          "id": "0bcbff442cb85c7188c18209025a39ac1d4c2a3e",
          "message": "fix: Clean up BlockChain API, update Explorer query",
          "timestamp": "2023-10-23T13:55:20+09:00",
          "tree_id": "02d979dbbc51901a561318d48bdc42129807dccd",
          "url": "https://github.com/planetarium/libplanet/commit/0bcbff442cb85c7188c18209025a39ac1d4c2a3e"
        },
        "date": 1698038257366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1786647.8723404256,
            "unit": "ns",
            "range": "± 187808.73348108304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3376040.425531915,
            "unit": "ns",
            "range": "± 232894.73616453918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2779251.6129032257,
            "unit": "ns",
            "range": "± 227078.90584787025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12377652.272727273,
            "unit": "ns",
            "range": "± 912424.548664858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68186.59793814433,
            "unit": "ns",
            "range": "± 9905.55009479092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10032190.361445783,
            "unit": "ns",
            "range": "± 506655.43629322434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26508426.086956523,
            "unit": "ns",
            "range": "± 1016554.6887916791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68898716.66666667,
            "unit": "ns",
            "range": "± 1436685.5406271266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134786831.57894737,
            "unit": "ns",
            "range": "± 2747124.6632823264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274277360.8695652,
            "unit": "ns",
            "range": "± 6580846.11841884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5691058.700284091,
            "unit": "ns",
            "range": "± 132492.3815860537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895693.275669643,
            "unit": "ns",
            "range": "± 32821.6915167111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320317.7473958333,
            "unit": "ns",
            "range": "± 21724.587543449223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3344543.058894231,
            "unit": "ns",
            "range": "± 35584.28930488434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1124243.7077702703,
            "unit": "ns",
            "range": "± 37893.97447551304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1006636.8619791666,
            "unit": "ns",
            "range": "± 15641.082615598581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4008316.6666666665,
            "unit": "ns",
            "range": "± 224581.67166354205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4277780,
            "unit": "ns",
            "range": "± 280328.1548167767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5496998.9130434785,
            "unit": "ns",
            "range": "± 309214.8598616262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5199482.222222222,
            "unit": "ns",
            "range": "± 294890.02390256175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13925068.604651162,
            "unit": "ns",
            "range": "± 860217.1938133694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325398.9130434783,
            "unit": "ns",
            "range": "± 31451.230324351895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317753.3333333333,
            "unit": "ns",
            "range": "± 26147.48339019359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282929.21348314604,
            "unit": "ns",
            "range": "± 24296.73192692604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5113025.384615385,
            "unit": "ns",
            "range": "± 238452.31246963274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4748045.614035088,
            "unit": "ns",
            "range": "± 203798.16702366466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26248.314606741573,
            "unit": "ns",
            "range": "± 5500.064304573475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117939.13043478261,
            "unit": "ns",
            "range": "± 18735.42778216185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124284.44444444444,
            "unit": "ns",
            "range": "± 15439.886410997957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123163.73626373627,
            "unit": "ns",
            "range": "± 12617.452784699248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9258.241758241758,
            "unit": "ns",
            "range": "± 1409.023770327522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23815.384615384617,
            "unit": "ns",
            "range": "± 4608.637375791077"
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
          "id": "bd633356d388be0f006d5b4d7facdf0c669c2b96",
          "message": "feat: Fix BlockChain API from IAccountState",
          "timestamp": "2023-10-25T18:00:47+09:00",
          "tree_id": "722b91f6a5ac3e1d291ba8b521e5b0e97bd1c629",
          "url": "https://github.com/planetarium/libplanet/commit/bd633356d388be0f006d5b4d7facdf0c669c2b96"
        },
        "date": 1698225306218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346700,
            "unit": "ns",
            "range": "± 121575.7709447408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2411088.709677419,
            "unit": "ns",
            "range": "± 60039.25203519974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2005285.3658536586,
            "unit": "ns",
            "range": "± 102113.31894838507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7771191.176470588,
            "unit": "ns",
            "range": "± 228578.42910720914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44915.068493150684,
            "unit": "ns",
            "range": "± 2244.7884850171854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7089700,
            "unit": "ns",
            "range": "± 37141.01506421169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18170493.333333332,
            "unit": "ns",
            "range": "± 103306.86235446225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46811813.333333336,
            "unit": "ns",
            "range": "± 231133.8136437934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93604564.28571428,
            "unit": "ns",
            "range": "± 283388.38151946134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186143520,
            "unit": "ns",
            "range": "± 961885.6638320972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4333624.665178572,
            "unit": "ns",
            "range": "± 8223.277611984822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1395317.4525669643,
            "unit": "ns",
            "range": "± 1400.668662820472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 994693.8020833334,
            "unit": "ns",
            "range": "± 1102.3274247308325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562092.0758928573,
            "unit": "ns",
            "range": "± 3602.0980441082015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811371.5885416666,
            "unit": "ns",
            "range": "± 1046.0760914397326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718514.5856584822,
            "unit": "ns",
            "range": "± 1294.5827965546214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3074670.9677419355,
            "unit": "ns",
            "range": "± 92529.20689724007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3281206.6666666665,
            "unit": "ns",
            "range": "± 45313.18740036892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3953734.6153846155,
            "unit": "ns",
            "range": "± 106986.712978043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3867695,
            "unit": "ns",
            "range": "± 88667.13907999727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9323067.5,
            "unit": "ns",
            "range": "± 215706.0730306583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248666.07142857142,
            "unit": "ns",
            "range": "± 9781.397497954318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242565,
            "unit": "ns",
            "range": "± 8536.93483694566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215853.42465753425,
            "unit": "ns",
            "range": "± 10731.212034059297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3841896.6666666665,
            "unit": "ns",
            "range": "± 45531.41563276733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3571757.1428571427,
            "unit": "ns",
            "range": "± 21241.277459980323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19159.782608695652,
            "unit": "ns",
            "range": "± 1672.4700284841388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83660.21505376344,
            "unit": "ns",
            "range": "± 6629.1211920839205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67420.96774193548,
            "unit": "ns",
            "range": "± 2789.9196237775527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76263.15789473684,
            "unit": "ns",
            "range": "± 9275.959004519556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4432.98969072165,
            "unit": "ns",
            "range": "± 551.6493544900402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19121.428571428572,
            "unit": "ns",
            "range": "± 1595.8477868299842"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "e0f8b8f7f3ada82d07deafc73ac7b78f0bd928f6",
          "message": "feat: Fix BlockChain API from IAccountState",
          "timestamp": "2023-10-27T11:59:10+09:00",
          "tree_id": "a34bdee629d9c80af766ac7e66843b4956cc0e06",
          "url": "https://github.com/planetarium/libplanet/commit/e0f8b8f7f3ada82d07deafc73ac7b78f0bd928f6"
        },
        "date": 1698384261678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744936.559139785,
            "unit": "ns",
            "range": "± 230806.25782006292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3134826.3157894737,
            "unit": "ns",
            "range": "± 416335.81607510115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2633561.4583333335,
            "unit": "ns",
            "range": "± 285727.10365322605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11434386.206896551,
            "unit": "ns",
            "range": "± 1088249.0010009801"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62296.31578947369,
            "unit": "ns",
            "range": "± 14358.71601654887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8885541.237113401,
            "unit": "ns",
            "range": "± 808473.5239367996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24329889.898989897,
            "unit": "ns",
            "range": "± 1940977.5161140312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65218265.65656566,
            "unit": "ns",
            "range": "± 3917007.674627942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129475376.53061225,
            "unit": "ns",
            "range": "± 7490029.261842569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272196446.25,
            "unit": "ns",
            "range": "± 14212085.98671063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5587833.2741477275,
            "unit": "ns",
            "range": "± 131817.81769739414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1706367.0454545454,
            "unit": "ns",
            "range": "± 41577.62674493848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1253484.8551432292,
            "unit": "ns",
            "range": "± 32549.256901406257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3121048.1770833335,
            "unit": "ns",
            "range": "± 54314.33473169489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026114.16015625,
            "unit": "ns",
            "range": "± 16978.603448729013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972480.0931490385,
            "unit": "ns",
            "range": "± 22806.76875641324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3700686.3157894737,
            "unit": "ns",
            "range": "± 366390.3773852931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3981145.8333333335,
            "unit": "ns",
            "range": "± 522445.78825622343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5093768.085106383,
            "unit": "ns",
            "range": "± 454788.66744346585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5117266.666666667,
            "unit": "ns",
            "range": "± 464771.7282928145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14757508.421052631,
            "unit": "ns",
            "range": "± 1734026.1987678958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331516.4835164835,
            "unit": "ns",
            "range": "± 39803.19156309025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312828.26086956525,
            "unit": "ns",
            "range": "± 36039.368968164614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297462.1052631579,
            "unit": "ns",
            "range": "± 44801.35393790743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4947229.166666667,
            "unit": "ns",
            "range": "± 515113.1429964871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4765523.655913979,
            "unit": "ns",
            "range": "± 400494.57668744307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26416.666666666668,
            "unit": "ns",
            "range": "± 7824.437651448409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108198.96907216495,
            "unit": "ns",
            "range": "± 23702.349104947036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126823.40425531915,
            "unit": "ns",
            "range": "± 22047.965431855228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125933.68421052632,
            "unit": "ns",
            "range": "± 21324.11785372707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8339.560439560439,
            "unit": "ns",
            "range": "± 1138.9936221535531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22748.351648351647,
            "unit": "ns",
            "range": "± 7044.688505649922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "d82c1d18d1df9b139da7b37ba29f1bb72f4769e9",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-27T19:04:54+09:00",
          "tree_id": "ed08d121b65f76bb7c1ad1a5934f4f112474c902",
          "url": "https://github.com/planetarium/libplanet/commit/d82c1d18d1df9b139da7b37ba29f1bb72f4769e9"
        },
        "date": 1698401959687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1264350,
            "unit": "ns",
            "range": "± 95430.8904311641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2309166.6666666665,
            "unit": "ns",
            "range": "± 85816.45265390135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1916332.3232323232,
            "unit": "ns",
            "range": "± 125048.80257795421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7956424.358974359,
            "unit": "ns",
            "range": "± 408128.9614070462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42935,
            "unit": "ns",
            "range": "± 2148.187343031211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6821492.857142857,
            "unit": "ns",
            "range": "± 16112.368124934539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17207553.333333332,
            "unit": "ns",
            "range": "± 81542.3629310615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44418776.92307692,
            "unit": "ns",
            "range": "± 327943.9336071695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88866721.42857143,
            "unit": "ns",
            "range": "± 851248.6432191345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178947042.85714287,
            "unit": "ns",
            "range": "± 856326.1480698414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4343117.239583333,
            "unit": "ns",
            "range": "± 15487.582560766024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1395137.9557291667,
            "unit": "ns",
            "range": "± 2784.6526111466505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 993429.35546875,
            "unit": "ns",
            "range": "± 1839.25595060226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2507525.6640625,
            "unit": "ns",
            "range": "± 5483.5334048513405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789376.5364583334,
            "unit": "ns",
            "range": "± 1118.1291569837078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743742.3600260416,
            "unit": "ns",
            "range": "± 812.2955655864303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2908076.923076923,
            "unit": "ns",
            "range": "± 47090.394523833165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3061960,
            "unit": "ns",
            "range": "± 79090.50722642594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3811696.6666666665,
            "unit": "ns",
            "range": "± 30511.282846717226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3760473.529411765,
            "unit": "ns",
            "range": "± 120937.88052029659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9097180.64516129,
            "unit": "ns",
            "range": "± 253097.22166176228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237593.75,
            "unit": "ns",
            "range": "± 3197.596753813714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227490.56603773584,
            "unit": "ns",
            "range": "± 8579.094988825214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202827.27272727274,
            "unit": "ns",
            "range": "± 6383.586018418288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3666760,
            "unit": "ns",
            "range": "± 34069.39975990185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3392671.4285714286,
            "unit": "ns",
            "range": "± 17067.847801390442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15826.881720430107,
            "unit": "ns",
            "range": "± 1442.683172376346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75732.9268292683,
            "unit": "ns",
            "range": "± 4005.3992843009682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63692,
            "unit": "ns",
            "range": "± 1690.640904114965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67059.375,
            "unit": "ns",
            "range": "± 7627.46530465293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3741.304347826087,
            "unit": "ns",
            "range": "± 467.0816983654162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15202.150537634408,
            "unit": "ns",
            "range": "± 1450.7103578280162"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "05971d07e3cc38e9764c88ccea78c307710241fb",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-27T19:00:37+09:00",
          "tree_id": "b7fb4bf620c736e0b47ca6ce687f8d744b842edf",
          "url": "https://github.com/planetarium/libplanet/commit/05971d07e3cc38e9764c88ccea78c307710241fb"
        },
        "date": 1698402114040,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598709.1836734693,
            "unit": "ns",
            "range": "± 244018.94260032428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2922821.875,
            "unit": "ns",
            "range": "± 274228.64651432564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345290.625,
            "unit": "ns",
            "range": "± 260406.08978169988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10439564.04494382,
            "unit": "ns",
            "range": "± 872169.5202778153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60124.7311827957,
            "unit": "ns",
            "range": "± 12995.899486359553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7522229.787234043,
            "unit": "ns",
            "range": "± 427948.4575611723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20867673.737373736,
            "unit": "ns",
            "range": "± 1619355.9530790704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56322468,
            "unit": "ns",
            "range": "± 3960625.0973289455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113350307.07070707,
            "unit": "ns",
            "range": "± 6809571.774696661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224866336.26373628,
            "unit": "ns",
            "range": "± 12565313.27024711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5027904.716435186,
            "unit": "ns",
            "range": "± 127800.25561641909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577544.921875,
            "unit": "ns",
            "range": "± 24034.743862558655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217401.9653320312,
            "unit": "ns",
            "range": "± 23906.482761205676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2973088.546875,
            "unit": "ns",
            "range": "± 76187.1409814793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 969720.5631510416,
            "unit": "ns",
            "range": "± 16021.311380803529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935221.5680803572,
            "unit": "ns",
            "range": "± 16208.650121812027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285584.8484848486,
            "unit": "ns",
            "range": "± 293684.5167528141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3398325.5102040814,
            "unit": "ns",
            "range": "± 342203.74419108394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5185673.469387755,
            "unit": "ns",
            "range": "± 511960.95968083723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4322184.693877551,
            "unit": "ns",
            "range": "± 395736.8875860539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12602743.181818182,
            "unit": "ns",
            "range": "± 881566.7090366523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303954.1666666667,
            "unit": "ns",
            "range": "± 41230.045040420315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292135.55555555556,
            "unit": "ns",
            "range": "± 40822.33997089248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249252.688172043,
            "unit": "ns",
            "range": "± 35191.23714851484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4304479.797979798,
            "unit": "ns",
            "range": "± 371738.1122208346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3897863.9784946237,
            "unit": "ns",
            "range": "± 265450.31820081244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30345,
            "unit": "ns",
            "range": "± 12089.643075664793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100711.57894736843,
            "unit": "ns",
            "range": "± 19229.149322073918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97634.02061855671,
            "unit": "ns",
            "range": "± 18954.643706523137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118216.66666666667,
            "unit": "ns",
            "range": "± 24429.419997280096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7052.873563218391,
            "unit": "ns",
            "range": "± 1199.596742365104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27381.632653061224,
            "unit": "ns",
            "range": "± 10408.495211350004"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "91a635f42faf65291f9d9bdc4df4613fe0fe281b",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-30T16:02:49+09:00",
          "tree_id": "6dd5899d6a7b02e453602c1f164d19799f21e4ca",
          "url": "https://github.com/planetarium/libplanet/commit/91a635f42faf65291f9d9bdc4df4613fe0fe281b"
        },
        "date": 1698650613900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685792.9292929294,
            "unit": "ns",
            "range": "± 230745.27313022886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3215122.448979592,
            "unit": "ns",
            "range": "± 281995.05206254084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2647101.0416666665,
            "unit": "ns",
            "range": "± 202679.93149417246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11926596.38554217,
            "unit": "ns",
            "range": "± 633950.5725223462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64038.541666666664,
            "unit": "ns",
            "range": "± 11676.61062747294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9527051.851851853,
            "unit": "ns",
            "range": "± 397661.8757805884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25637781.818181816,
            "unit": "ns",
            "range": "± 608899.9829015346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65007900,
            "unit": "ns",
            "range": "± 963812.6329471779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129911861.1111111,
            "unit": "ns",
            "range": "± 2678256.029174668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260060102.7027027,
            "unit": "ns",
            "range": "± 8597174.791836059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5456579.557291667,
            "unit": "ns",
            "range": "± 113454.81517819643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1794724.82421875,
            "unit": "ns",
            "range": "± 29393.746565374815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299864.7727272727,
            "unit": "ns",
            "range": "± 31629.158170071358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3120494.8046875,
            "unit": "ns",
            "range": "± 50882.669340075816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1038004.6875,
            "unit": "ns",
            "range": "± 21955.71570495989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957707.7566964285,
            "unit": "ns",
            "range": "± 15543.581252088774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3816571.875,
            "unit": "ns",
            "range": "± 258907.44889901244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3897741.9191919193,
            "unit": "ns",
            "range": "± 439414.8144040067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5239532.142857143,
            "unit": "ns",
            "range": "± 279701.16891809384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4904237.755102041,
            "unit": "ns",
            "range": "± 391055.8526605415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14027078.089887641,
            "unit": "ns",
            "range": "± 1547529.1737585468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319710.989010989,
            "unit": "ns",
            "range": "± 34258.7683846517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306436.170212766,
            "unit": "ns",
            "range": "± 33399.55202540294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257662.88659793814,
            "unit": "ns",
            "range": "± 35769.57599106755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4596633.333333333,
            "unit": "ns",
            "range": "± 357726.97930027347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4251505.319148936,
            "unit": "ns",
            "range": "± 270033.7969158282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26252.52525252525,
            "unit": "ns",
            "range": "± 8871.708569705408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103056.84210526316,
            "unit": "ns",
            "range": "± 13940.707670242013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115184.53608247422,
            "unit": "ns",
            "range": "± 23199.449258038192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117525,
            "unit": "ns",
            "range": "± 16354.369816288003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7897.826086956522,
            "unit": "ns",
            "range": "± 1041.9738518232696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26476.76767676768,
            "unit": "ns",
            "range": "± 8480.840691419115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "b9972efc5511ef243f5c0d7fa09b0d8b8494a450",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-30T16:15:06+09:00",
          "tree_id": "759b3c702fe49903a3487f8e56917b84415befe3",
          "url": "https://github.com/planetarium/libplanet/commit/b9972efc5511ef243f5c0d7fa09b0d8b8494a450"
        },
        "date": 1698650971205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479829.4117647058,
            "unit": "ns",
            "range": "± 28503.437615178154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2383500,
            "unit": "ns",
            "range": "± 81268.58864284528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2027517.0103092783,
            "unit": "ns",
            "range": "± 120415.57443707317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7557853.571428572,
            "unit": "ns",
            "range": "± 184078.6194399573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43389.28571428572,
            "unit": "ns",
            "range": "± 2329.021608384856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6917213.333333333,
            "unit": "ns",
            "range": "± 41100.43216086083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17868520,
            "unit": "ns",
            "range": "± 110483.98203230315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45739436.666666664,
            "unit": "ns",
            "range": "± 250503.85188560234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90197866.66666667,
            "unit": "ns",
            "range": "± 1285396.6784430325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179711906.66666666,
            "unit": "ns",
            "range": "± 1632012.4581398908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4632223.072916667,
            "unit": "ns",
            "range": "± 23744.64166503412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1466266.0231370192,
            "unit": "ns",
            "range": "± 2209.261272858204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056543.6941964286,
            "unit": "ns",
            "range": "± 1842.4056469356476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2515434.2633928573,
            "unit": "ns",
            "range": "± 10791.547692546053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803526.1369977678,
            "unit": "ns",
            "range": "± 2604.2245395732944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740970.8775111607,
            "unit": "ns",
            "range": "± 1197.5018456201597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2946983.3333333335,
            "unit": "ns",
            "range": "± 86957.14792190833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3090864.285714286,
            "unit": "ns",
            "range": "± 36116.704150314144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3935486.3636363638,
            "unit": "ns",
            "range": "± 94053.20325905994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3713133.3333333335,
            "unit": "ns",
            "range": "± 175818.42420532406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9247230,
            "unit": "ns",
            "range": "± 281919.9506315624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240729.16666666666,
            "unit": "ns",
            "range": "± 9047.580100433423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229407.14285714287,
            "unit": "ns",
            "range": "± 7670.608868800342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201831.25,
            "unit": "ns",
            "range": "± 6241.920584294962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3766980,
            "unit": "ns",
            "range": "± 52825.902737198914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3460673.3333333335,
            "unit": "ns",
            "range": "± 21665.62341810727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18522.340425531915,
            "unit": "ns",
            "range": "± 1498.3972982855696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77983.83838383839,
            "unit": "ns",
            "range": "± 7218.2267463254975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65000,
            "unit": "ns",
            "range": "± 1521.5621956237987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72123.59550561798,
            "unit": "ns",
            "range": "± 6350.626713380881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3990,
            "unit": "ns",
            "range": "± 490.36789674417247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17227.36842105263,
            "unit": "ns",
            "range": "± 1892.0574248664234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "6a11229c1a22ebfe5865a13fd81843db40f6d41c",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-10-31T13:03:55+09:00",
          "tree_id": "41f1594f08294afba15b0f8a6d4393124dee777d",
          "url": "https://github.com/planetarium/libplanet/commit/6a11229c1a22ebfe5865a13fd81843db40f6d41c"
        },
        "date": 1698726664509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718507.2164948455,
            "unit": "ns",
            "range": "± 159286.4075647377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2995826.0416666665,
            "unit": "ns",
            "range": "± 364677.7687204191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2519346.875,
            "unit": "ns",
            "range": "± 266283.816909752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11969195.698924731,
            "unit": "ns",
            "range": "± 1250367.3073309974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63553.68421052631,
            "unit": "ns",
            "range": "± 13449.067123594887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8878917.346938776,
            "unit": "ns",
            "range": "± 726973.273949041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24835357.608695652,
            "unit": "ns",
            "range": "± 1397460.6961964972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62209559.45945946,
            "unit": "ns",
            "range": "± 2087076.0359171631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125860387.09677419,
            "unit": "ns",
            "range": "± 3784139.5129092806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258206835.29411766,
            "unit": "ns",
            "range": "± 5134006.184494372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5410161.472039473,
            "unit": "ns",
            "range": "± 117134.54812929855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1751477.0042782738,
            "unit": "ns",
            "range": "± 41258.500235769105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323015.1875,
            "unit": "ns",
            "range": "± 35275.19210072277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3213425.8463541665,
            "unit": "ns",
            "range": "± 68486.59698777941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028517.8185096154,
            "unit": "ns",
            "range": "± 14254.107967150027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 966282.98828125,
            "unit": "ns",
            "range": "± 16069.812600696907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3731340.404040404,
            "unit": "ns",
            "range": "± 298352.5862093276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3864231.5217391304,
            "unit": "ns",
            "range": "± 301638.0721624487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5290424.2105263155,
            "unit": "ns",
            "range": "± 336534.4314576904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4966566.666666667,
            "unit": "ns",
            "range": "± 253892.35200558207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13654447.777777778,
            "unit": "ns",
            "range": "± 1187174.8452985405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320855.10204081633,
            "unit": "ns",
            "range": "± 40572.81635909772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310112.5,
            "unit": "ns",
            "range": "± 39297.85918904623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269882.6530612245,
            "unit": "ns",
            "range": "± 39673.93916110178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4525458.333333333,
            "unit": "ns",
            "range": "± 222919.62977276856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4369592.473118279,
            "unit": "ns",
            "range": "± 322310.5882046341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28938.775510204083,
            "unit": "ns",
            "range": "± 11405.730903990303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99948.91304347826,
            "unit": "ns",
            "range": "± 15813.817122768163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108737.37373737374,
            "unit": "ns",
            "range": "± 31620.690674725156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122405.20833333333,
            "unit": "ns",
            "range": "± 20575.644108568176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8189.130434782609,
            "unit": "ns",
            "range": "± 1421.4569620244297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25883.673469387755,
            "unit": "ns",
            "range": "± 8937.511518297542"
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
          "id": "b046b46ea91f5ea9322b6380c3bf5de452b582c6",
          "message": "Merge pull request #3471 from greymistcube/fix/build-warnings\n\n🧹 Fix build warnings",
          "timestamp": "2023-10-31T18:10:47+09:00",
          "tree_id": "7719f0f09854ffd982d342983918c97f915476f2",
          "url": "https://github.com/planetarium/libplanet/commit/b046b46ea91f5ea9322b6380c3bf5de452b582c6"
        },
        "date": 1698744404675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1502519.587628866,
            "unit": "ns",
            "range": "± 148093.76368198238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2767866.6666666665,
            "unit": "ns",
            "range": "± 108040.9434736048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2354661.855670103,
            "unit": "ns",
            "range": "± 138393.62901046887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9550331.034482758,
            "unit": "ns",
            "range": "± 689928.8509509502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62836.36363636364,
            "unit": "ns",
            "range": "± 8980.221516124433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8545642.857142856,
            "unit": "ns",
            "range": "± 71753.3431468336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22202471.42857143,
            "unit": "ns",
            "range": "± 256366.8838225388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55316292.85714286,
            "unit": "ns",
            "range": "± 465577.32021534414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110716233.33333333,
            "unit": "ns",
            "range": "± 1087429.6264039124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221698293.33333334,
            "unit": "ns",
            "range": "± 1061685.8497332481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4600323.377403846,
            "unit": "ns",
            "range": "± 40368.94989880671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503520.8658854167,
            "unit": "ns",
            "range": "± 4482.436942952097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1095272.44140625,
            "unit": "ns",
            "range": "± 3800.6357190413405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634451.71875,
            "unit": "ns",
            "range": "± 11649.541981088381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848428.6202566965,
            "unit": "ns",
            "range": "± 3634.6645264808108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755487.96875,
            "unit": "ns",
            "range": "± 4674.589039259071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673288.2352941176,
            "unit": "ns",
            "range": "± 68052.35009124356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748522.8571428573,
            "unit": "ns",
            "range": "± 122506.47782563866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4543432.352941177,
            "unit": "ns",
            "range": "± 141483.4902470169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4417186,
            "unit": "ns",
            "range": "± 175594.7770247377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10705447.5,
            "unit": "ns",
            "range": "± 297943.4105514429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286848,
            "unit": "ns",
            "range": "± 10704.633557102117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279090.1960784314,
            "unit": "ns",
            "range": "± 11360.35659478981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274346.1538461539,
            "unit": "ns",
            "range": "± 7442.1626302698205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4485078.571428572,
            "unit": "ns",
            "range": "± 36565.96102243869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4113403.846153846,
            "unit": "ns",
            "range": "± 21572.150850290574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30834.065934065933,
            "unit": "ns",
            "range": "± 2830.124448783904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119888.88888888889,
            "unit": "ns",
            "range": "± 8300.871467513602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100558.16326530612,
            "unit": "ns",
            "range": "± 9702.679760239986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114959.5744680851,
            "unit": "ns",
            "range": "± 13447.8928208977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8727.272727272728,
            "unit": "ns",
            "range": "± 1333.0047523391704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29974.22680412371,
            "unit": "ns",
            "range": "± 3060.8508604129534"
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
          "id": "f157765a7eabcf08721902ed40f5b8be1fbc33fa",
          "message": "Merge pull request #3472 from greymistcube/refactor/blockchain\n\n🧹 Reorganize and cleanup `BlockChain`",
          "timestamp": "2023-10-31T20:04:52+09:00",
          "tree_id": "a0f54d531e483644a84c33c7d7c4c6a4b54cf95a",
          "url": "https://github.com/planetarium/libplanet/commit/f157765a7eabcf08721902ed40f5b8be1fbc33fa"
        },
        "date": 1698751189571,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1273812.2448979593,
            "unit": "ns",
            "range": "± 97942.7631247798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2312703.125,
            "unit": "ns",
            "range": "± 71477.71809079906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1937108.2474226805,
            "unit": "ns",
            "range": "± 116158.84927376309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7480250,
            "unit": "ns",
            "range": "± 209200.31070722625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43289.743589743586,
            "unit": "ns",
            "range": "± 2238.8302687700493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6947680,
            "unit": "ns",
            "range": "± 81783.52261567468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17649400,
            "unit": "ns",
            "range": "± 107310.01817165068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45008866.666666664,
            "unit": "ns",
            "range": "± 320846.7739918112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91315220,
            "unit": "ns",
            "range": "± 716259.7495721388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182885856.66666666,
            "unit": "ns",
            "range": "± 1627676.9087377551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4546125.334821428,
            "unit": "ns",
            "range": "± 4287.734604172884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1452359.3619791667,
            "unit": "ns",
            "range": "± 1228.4243940108581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046342.7594866072,
            "unit": "ns",
            "range": "± 1013.2092742901784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552941.2369791665,
            "unit": "ns",
            "range": "± 4260.335608365582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831176.2109375,
            "unit": "ns",
            "range": "± 2182.3134104177298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737194.4963727678,
            "unit": "ns",
            "range": "± 627.7200094511287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2946366.6666666665,
            "unit": "ns",
            "range": "± 58979.88357623866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3105248.6486486485,
            "unit": "ns",
            "range": "± 105039.13456321786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3894502.564102564,
            "unit": "ns",
            "range": "± 134193.4041974287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3733454.347826087,
            "unit": "ns",
            "range": "± 136038.24577672876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9322840.322580645,
            "unit": "ns",
            "range": "± 423050.76642217074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238016.66666666666,
            "unit": "ns",
            "range": "± 8183.681462301838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230811.53846153847,
            "unit": "ns",
            "range": "± 8836.369892712994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198529.16666666666,
            "unit": "ns",
            "range": "± 7718.9999995406015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3764860,
            "unit": "ns",
            "range": "± 29323.85182260826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3523323.529411765,
            "unit": "ns",
            "range": "± 68386.69945073168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16284.444444444445,
            "unit": "ns",
            "range": "± 1169.7412669946984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77260.75268817204,
            "unit": "ns",
            "range": "± 5598.16472965435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63150,
            "unit": "ns",
            "range": "± 1487.3274209611202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71128.23529411765,
            "unit": "ns",
            "range": "± 5427.062078244587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4060.8695652173915,
            "unit": "ns",
            "range": "± 470.9019920286091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16551.08695652174,
            "unit": "ns",
            "range": "± 1493.3916384398515"
          }
        ]
      }
    ]
  }
}