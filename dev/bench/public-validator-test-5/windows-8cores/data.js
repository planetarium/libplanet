window.BENCHMARK_DATA = {
  "lastUpdate": 1738655036056,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1737091705374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007816.6666666666,
            "unit": "ns",
            "range": "± 102116.63781822355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1777673.6842105263,
            "unit": "ns",
            "range": "± 77230.81251842194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545025.2525252525,
            "unit": "ns",
            "range": "± 126051.37140608167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6733978.048780488,
            "unit": "ns",
            "range": "± 242298.6767526756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30652.68817204301,
            "unit": "ns",
            "range": "± 3484.643060688147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9995506.666666666,
            "unit": "ns",
            "range": "± 84432.79209496973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24586820,
            "unit": "ns",
            "range": "± 392355.59527405386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59857457.14285714,
            "unit": "ns",
            "range": "± 600349.5119374351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121480830.76923077,
            "unit": "ns",
            "range": "± 1003381.7521965534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238568686.66666666,
            "unit": "ns",
            "range": "± 2970761.0566189615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336847.0252403845,
            "unit": "ns",
            "range": "± 9375.935681304823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073372.16796875,
            "unit": "ns",
            "range": "± 2106.234914259359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746039.7321428572,
            "unit": "ns",
            "range": "± 3311.7947670888157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975111.8229166667,
            "unit": "ns",
            "range": "± 17115.410099287492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619521.1983816965,
            "unit": "ns",
            "range": "± 1826.6495437959452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560423.88671875,
            "unit": "ns",
            "range": "± 1121.4930018277164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2218250,
            "unit": "ns",
            "range": "± 87031.3394275487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295500,
            "unit": "ns",
            "range": "± 26206.83997620586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2772644.4444444445,
            "unit": "ns",
            "range": "± 56368.65234614238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2394214.285714286,
            "unit": "ns",
            "range": "± 42400.178830226236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2990820,
            "unit": "ns",
            "range": "± 55642.779020667695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100551.57894736843,
            "unit": "ns",
            "range": "± 9467.760111185557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168952.05479452055,
            "unit": "ns",
            "range": "± 7889.657603981745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148902.1739130435,
            "unit": "ns",
            "range": "± 5161.28705440523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2599400,
            "unit": "ns",
            "range": "± 41357.06883783162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2527591.1764705884,
            "unit": "ns",
            "range": "± 51806.60019273038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11424.731182795698,
            "unit": "ns",
            "range": "± 1981.0875314802802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54198.94736842105,
            "unit": "ns",
            "range": "± 4615.826030518151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45070.65217391304,
            "unit": "ns",
            "range": "± 3332.7063234145144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57734.782608695656,
            "unit": "ns",
            "range": "± 10576.019263820637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2543.877551020408,
            "unit": "ns",
            "range": "± 596.2194169088216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10805.263157894737,
            "unit": "ns",
            "range": "± 1599.958006167837"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "f6ce114ac02a1034a302f1f68bdbac7d63156eb3",
          "message": "log",
          "timestamp": "2025-02-04T16:16:08+09:00",
          "tree_id": "a5a22b529c593808881ea6a80a2009ce616a6016",
          "url": "https://github.com/planetarium/libplanet/commit/f6ce114ac02a1034a302f1f68bdbac7d63156eb3"
        },
        "date": 1738654087430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965218.4782608695,
            "unit": "ns",
            "range": "± 97101.26687344555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781137.5,
            "unit": "ns",
            "range": "± 73609.60797588612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1544790.9090909092,
            "unit": "ns",
            "range": "± 183028.2180156422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6810120.238095238,
            "unit": "ns",
            "range": "± 364433.7200815435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28273.684210526317,
            "unit": "ns",
            "range": "± 621.6841867621979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9678420,
            "unit": "ns",
            "range": "± 91902.53532955443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24433026.666666668,
            "unit": "ns",
            "range": "± 169569.32617944904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60515828.571428575,
            "unit": "ns",
            "range": "± 424969.9327437928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119300661.53846154,
            "unit": "ns",
            "range": "± 516592.019131896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240933273.33333334,
            "unit": "ns",
            "range": "± 1718620.4868467976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350219.1927083335,
            "unit": "ns",
            "range": "± 5092.14387890851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048691.0435267857,
            "unit": "ns",
            "range": "± 4621.883038245405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736558.5807291666,
            "unit": "ns",
            "range": "± 1747.8169623635265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920775.9347098214,
            "unit": "ns",
            "range": "± 4112.095069654694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618219.1105769231,
            "unit": "ns",
            "range": "± 811.7160843675287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557502.67578125,
            "unit": "ns",
            "range": "± 2063.535874334033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199845.4545454546,
            "unit": "ns",
            "range": "± 53650.737599977554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192300,
            "unit": "ns",
            "range": "± 35316.92014438474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2763215.789473684,
            "unit": "ns",
            "range": "± 95149.11633088916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2320110.5263157897,
            "unit": "ns",
            "range": "± 51519.822449841166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2955973.3333333335,
            "unit": "ns",
            "range": "± 39358.83394517436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90211.76470588235,
            "unit": "ns",
            "range": "± 3734.05183520388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163489.2857142857,
            "unit": "ns",
            "range": "± 6226.561244785515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148020,
            "unit": "ns",
            "range": "± 2621.122987249113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2553400,
            "unit": "ns",
            "range": "± 20973.75343931871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2465960,
            "unit": "ns",
            "range": "± 39258.02556711903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10547.368421052632,
            "unit": "ns",
            "range": "± 1352.5265644351682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50591.30434782609,
            "unit": "ns",
            "range": "± 3729.586259170885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43366.666666666664,
            "unit": "ns",
            "range": "± 1105.5730037707444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50546.39175257732,
            "unit": "ns",
            "range": "± 10159.643016362892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2292.783505154639,
            "unit": "ns",
            "range": "± 380.3089266965553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10565.30612244898,
            "unit": "ns",
            "range": "± 1710.5555883358104"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "91a2e383e6ff89be523e25b7561726a60e5f93b5",
          "message": "log",
          "timestamp": "2025-02-04T16:30:01+09:00",
          "tree_id": "7715dffc173f8797352199a160f6b763c2650064",
          "url": "https://github.com/planetarium/libplanet/commit/91a2e383e6ff89be523e25b7561726a60e5f93b5"
        },
        "date": 1738654780623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996694.3298969072,
            "unit": "ns",
            "range": "± 106711.67829822266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728064.2857142857,
            "unit": "ns",
            "range": "± 68266.03596713864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581103,
            "unit": "ns",
            "range": "± 205452.68444696616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6769676.388888889,
            "unit": "ns",
            "range": "± 332536.2767430893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 27671.69811320755,
            "unit": "ns",
            "range": "± 1155.6512247497521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9885113.333333334,
            "unit": "ns",
            "range": "± 109431.84354177892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23329053.846153848,
            "unit": "ns",
            "range": "± 114266.32352669658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58809106.666666664,
            "unit": "ns",
            "range": "± 332883.38899180095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124651706.66666667,
            "unit": "ns",
            "range": "± 1056629.2040978146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236506928.57142857,
            "unit": "ns",
            "range": "± 718911.0359303282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3337052.5520833335,
            "unit": "ns",
            "range": "± 58778.62446210599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060414.1043526786,
            "unit": "ns",
            "range": "± 3536.830112793961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719732.24609375,
            "unit": "ns",
            "range": "± 1652.4348604230318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928460.142299107,
            "unit": "ns",
            "range": "± 1562.291395074811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602476.8484933035,
            "unit": "ns",
            "range": "± 1378.1821233064418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565995.99609375,
            "unit": "ns",
            "range": "± 522.4223804630503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126202.9411764704,
            "unit": "ns",
            "range": "± 67464.18347310968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2179215.789473684,
            "unit": "ns",
            "range": "± 37793.639428964096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2668692.3076923075,
            "unit": "ns",
            "range": "± 29228.7946364101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242696.4285714286,
            "unit": "ns",
            "range": "± 63454.32000670424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2893946.153846154,
            "unit": "ns",
            "range": "± 46484.07640229457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88380.82191780822,
            "unit": "ns",
            "range": "± 3771.8864103848978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158825.97402597402,
            "unit": "ns",
            "range": "± 6654.151901304347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144376.66666666666,
            "unit": "ns",
            "range": "± 3921.3547389270643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2558842.8571428573,
            "unit": "ns",
            "range": "± 28827.650035918756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2434353.3333333335,
            "unit": "ns",
            "range": "± 38720.571621124946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9891.176470588236,
            "unit": "ns",
            "range": "± 729.6923875114477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49673.11827956989,
            "unit": "ns",
            "range": "± 4063.1734166927636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43106.25,
            "unit": "ns",
            "range": "± 742.4901795085688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48614.14141414141,
            "unit": "ns",
            "range": "± 8416.917004304427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2375.5102040816328,
            "unit": "ns",
            "range": "± 368.07138048470546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9155.29411764706,
            "unit": "ns",
            "range": "± 509.5529979335625"
          }
        ]
      }
    ]
  }
}