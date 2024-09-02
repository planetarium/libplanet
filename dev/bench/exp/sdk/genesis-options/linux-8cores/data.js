window.BENCHMARK_DATA = {
  "lastUpdate": 1725255864492,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "9a191d98d1204fbe17ea76b1643b27cf85284e45",
          "message": "WIP",
          "timestamp": "2024-08-23T16:31:09+09:00",
          "tree_id": "bc8bd2b650e5169879959ffcbb5844cd85b8479f",
          "url": "https://github.com/planetarium/libplanet/commit/9a191d98d1204fbe17ea76b1643b27cf85284e45"
        },
        "date": 1724398854183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202117.20588235295,
            "unit": "ns",
            "range": "± 6430.225764354655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190208.2213114754,
            "unit": "ns",
            "range": "± 8070.119586332344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165427.61538461538,
            "unit": "ns",
            "range": "± 2447.711738830832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074237.423076923,
            "unit": "ns",
            "range": "± 18879.67878196704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2850710.933333333,
            "unit": "ns",
            "range": "± 40889.96331875982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12408.023529411765,
            "unit": "ns",
            "range": "± 678.219798205472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60012.15217391304,
            "unit": "ns",
            "range": "± 3480.651276163551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50224.07142857143,
            "unit": "ns",
            "range": "± 880.5104129433037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52354.61855670103,
            "unit": "ns",
            "range": "± 7761.16142033966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2815.0421052631577,
            "unit": "ns",
            "range": "± 278.38232992153434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15216.40404040404,
            "unit": "ns",
            "range": "± 2746.674508472694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2351971.1904761903,
            "unit": "ns",
            "range": "± 55069.077160071465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531061.933333333,
            "unit": "ns",
            "range": "± 32363.73259522514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3027495.5,
            "unit": "ns",
            "range": "± 40636.7144336441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2566375.9375,
            "unit": "ns",
            "range": "± 40155.0584650199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324106.8695652173,
            "unit": "ns",
            "range": "± 82009.37262028725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10175551.785714285,
            "unit": "ns",
            "range": "± 56658.2549001923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27284462.933333334,
            "unit": "ns",
            "range": "± 246045.34191005953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68383824.56666666,
            "unit": "ns",
            "range": "± 388390.6701585525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139555885.07142857,
            "unit": "ns",
            "range": "± 488580.3113608407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287463230.06666666,
            "unit": "ns",
            "range": "± 1128696.3791659616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011183.5185185185,
            "unit": "ns",
            "range": "± 49448.568465151526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959509.3265306123,
            "unit": "ns",
            "range": "± 77842.49573133446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681002.4893617022,
            "unit": "ns",
            "range": "± 65034.06036467497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8241040.222222222,
            "unit": "ns",
            "range": "± 146121.97705293846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3752468.7247596155,
            "unit": "ns",
            "range": "± 4791.243030335453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1185548.1953125,
            "unit": "ns",
            "range": "± 1700.4354333713497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767237.8294921875,
            "unit": "ns",
            "range": "± 1871.365907584526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942666.3575520834,
            "unit": "ns",
            "range": "± 2263.79941179628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625461.7409319197,
            "unit": "ns",
            "range": "± 944.7859641098742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581334.7882952009,
            "unit": "ns",
            "range": "± 315.4408557945915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32048.473684210527,
            "unit": "ns",
            "range": "± 641.1495204726734"
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
          "id": "91f3f1293dbbb1c9e405ccb52bcf266337f18c8c",
          "message": "feat: Add GenesisBlockPath option to GenesisOptions",
          "timestamp": "2024-08-23T16:34:31+09:00",
          "tree_id": "bc8bd2b650e5169879959ffcbb5844cd85b8479f",
          "url": "https://github.com/planetarium/libplanet/commit/91f3f1293dbbb1c9e405ccb52bcf266337f18c8c"
        },
        "date": 1724399033626,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201128.71698113208,
            "unit": "ns",
            "range": "± 8395.791119037787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190130.75,
            "unit": "ns",
            "range": "± 6603.187317985933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170622.4705882353,
            "unit": "ns",
            "range": "± 2905.8847430181877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3090086.533333333,
            "unit": "ns",
            "range": "± 52686.61054476021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825648.4,
            "unit": "ns",
            "range": "± 40646.24391854325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12714.83695652174,
            "unit": "ns",
            "range": "± 763.2080107219759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60136.75581395349,
            "unit": "ns",
            "range": "± 3280.296675736534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50120,
            "unit": "ns",
            "range": "± 544.1107841740921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51438.32474226804,
            "unit": "ns",
            "range": "± 7924.129217420767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2664.021052631579,
            "unit": "ns",
            "range": "± 235.44218149827657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14117.234693877552,
            "unit": "ns",
            "range": "± 1962.5164563025078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2427453.619047619,
            "unit": "ns",
            "range": "± 55772.11715227977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576388.3333333335,
            "unit": "ns",
            "range": "± 42520.00093849391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3095872.3666666667,
            "unit": "ns",
            "range": "± 80685.78435553452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2622593.9375,
            "unit": "ns",
            "range": "± 49634.55272081973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3267690.9444444445,
            "unit": "ns",
            "range": "± 69365.68873240042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10580237.692307692,
            "unit": "ns",
            "range": "± 175073.26496850047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26736261.333333332,
            "unit": "ns",
            "range": "± 149597.89168762023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67063052.733333334,
            "unit": "ns",
            "range": "± 262694.25064497284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134781789.46666667,
            "unit": "ns",
            "range": "± 723515.7945680312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283926932.21428573,
            "unit": "ns",
            "range": "± 1336472.2438050325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005143.1621621621,
            "unit": "ns",
            "range": "± 49303.52336273943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917180.4,
            "unit": "ns",
            "range": "± 77015.26852123518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1718907.28125,
            "unit": "ns",
            "range": "± 79480.16309636264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8342500.586206896,
            "unit": "ns",
            "range": "± 205970.52388258258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3804624.823660714,
            "unit": "ns",
            "range": "± 3427.9038314504983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213898.2420572916,
            "unit": "ns",
            "range": "± 1732.5782863284564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781962.0467447917,
            "unit": "ns",
            "range": "± 2381.6987035318825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967422.7651041667,
            "unit": "ns",
            "range": "± 1878.5344663576125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621490.0979166667,
            "unit": "ns",
            "range": "± 549.3480632258867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574561.4606119791,
            "unit": "ns",
            "range": "± 894.4873305348292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32090.714285714286,
            "unit": "ns",
            "range": "± 420.5372348961099"
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
          "id": "17a399301038ee3f389c190df1cf6f197981a05c",
          "message": "feat: Add GenesisBlockPath option to GenesisOptions",
          "timestamp": "2024-08-26T13:43:39+09:00",
          "tree_id": "29ad95971ead8b105f23ef522fdc649f63dacfcf",
          "url": "https://github.com/planetarium/libplanet/commit/17a399301038ee3f389c190df1cf6f197981a05c"
        },
        "date": 1724647968130,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198107.72549019608,
            "unit": "ns",
            "range": "± 7986.83123667561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192119.16949152542,
            "unit": "ns",
            "range": "± 8250.272438871634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166951.26666666666,
            "unit": "ns",
            "range": "± 2985.0096546067048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3087246.033333333,
            "unit": "ns",
            "range": "± 38609.131591718906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2806515.6666666665,
            "unit": "ns",
            "range": "± 43157.65808002539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14922.314432989691,
            "unit": "ns",
            "range": "± 1927.0589385657581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61005.66842105263,
            "unit": "ns",
            "range": "± 4331.478069805378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50338.62790697674,
            "unit": "ns",
            "range": "± 1285.9310324255491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60122.26804123711,
            "unit": "ns",
            "range": "± 10408.5882333167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2565.3118279569894,
            "unit": "ns",
            "range": "± 213.65494217335694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11897.290322580646,
            "unit": "ns",
            "range": "± 768.0765725618593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437612.6,
            "unit": "ns",
            "range": "± 33014.363248224465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2533097.933333333,
            "unit": "ns",
            "range": "± 42060.22571345364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3058745.1428571427,
            "unit": "ns",
            "range": "± 38317.39653685565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2603267.7592592593,
            "unit": "ns",
            "range": "± 72693.13643645225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3250795.611111111,
            "unit": "ns",
            "range": "± 67866.23445220916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10237358.433333334,
            "unit": "ns",
            "range": "± 101754.97994515106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27049571.533333335,
            "unit": "ns",
            "range": "± 107486.79885779109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69060479,
            "unit": "ns",
            "range": "± 270816.7319960124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136988163.84615386,
            "unit": "ns",
            "range": "± 263857.4151531613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299739497.46666664,
            "unit": "ns",
            "range": "± 1296912.6820626121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009570.309859155,
            "unit": "ns",
            "range": "± 44563.168033892085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1939502.0833333333,
            "unit": "ns",
            "range": "± 62908.96858857703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703340.4661016949,
            "unit": "ns",
            "range": "± 75051.35045052225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8270753.954545454,
            "unit": "ns",
            "range": "± 193677.6659252066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3707089.163504464,
            "unit": "ns",
            "range": "± 6697.0895768505825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201711.1221354166,
            "unit": "ns",
            "range": "± 1861.1349089997125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771722.7313151042,
            "unit": "ns",
            "range": "± 1946.4574914596292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957325.7067708333,
            "unit": "ns",
            "range": "± 2479.1913009161512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621479.8024338942,
            "unit": "ns",
            "range": "± 403.31301881039326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562138.0768229166,
            "unit": "ns",
            "range": "± 358.17582248895786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32447.571428571428,
            "unit": "ns",
            "range": "± 456.0613511841976"
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
          "id": "86fe44d7b95e17e112667f2dc1f80381be154598",
          "message": "feat: Add GenesisBlockPath option to GenesisOptions",
          "timestamp": "2024-08-27T09:47:47+09:00",
          "tree_id": "b3127dc1f81f824957921a84a754b41a966a642f",
          "url": "https://github.com/planetarium/libplanet/commit/86fe44d7b95e17e112667f2dc1f80381be154598"
        },
        "date": 1724720330773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213957.3431372549,
            "unit": "ns",
            "range": "± 8664.653759666451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209881.24242424243,
            "unit": "ns",
            "range": "± 19524.154642177244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185362.19696969696,
            "unit": "ns",
            "range": "± 19383.2826553985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3190148.6315789474,
            "unit": "ns",
            "range": "± 69592.36342780605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2876682,
            "unit": "ns",
            "range": "± 41322.34743127221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19202.908163265307,
            "unit": "ns",
            "range": "± 4415.227871404546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98224.3125,
            "unit": "ns",
            "range": "± 6348.7353656788255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61866.447916666664,
            "unit": "ns",
            "range": "± 11048.607558725782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73886.3163265306,
            "unit": "ns",
            "range": "± 13324.829771719325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3531.4044943820227,
            "unit": "ns",
            "range": "± 804.1596788390226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17252.68,
            "unit": "ns",
            "range": "± 4593.6312573920095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429376.5714285714,
            "unit": "ns",
            "range": "± 37787.14212271415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2631515.1666666665,
            "unit": "ns",
            "range": "± 85290.00938997988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139579.6666666665,
            "unit": "ns",
            "range": "± 85343.0642117886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2631892.033333333,
            "unit": "ns",
            "range": "± 45467.52904289683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3447632.7333333334,
            "unit": "ns",
            "range": "± 47012.92773340825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10397148.533333333,
            "unit": "ns",
            "range": "± 142955.60934523228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27583183.266666666,
            "unit": "ns",
            "range": "± 174381.27733441154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70661795.96666667,
            "unit": "ns",
            "range": "± 322243.49230353895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138576546.4,
            "unit": "ns",
            "range": "± 815108.8002441147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288752906.3333333,
            "unit": "ns",
            "range": "± 1804760.295901792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1086101.0631578946,
            "unit": "ns",
            "range": "± 92760.9418414621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2044507.527027027,
            "unit": "ns",
            "range": "± 67704.44625334049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764201.4523809524,
            "unit": "ns",
            "range": "± 94154.1313999787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8639443.072727272,
            "unit": "ns",
            "range": "± 362838.84753482783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3777208.23828125,
            "unit": "ns",
            "range": "± 11719.013502897267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200954.8282645089,
            "unit": "ns",
            "range": "± 3042.2004273491775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770951.8833383414,
            "unit": "ns",
            "range": "± 960.7481552694628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973482.6190104166,
            "unit": "ns",
            "range": "± 5302.913136657933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621056.2953776042,
            "unit": "ns",
            "range": "± 575.5641081645807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583294.456640625,
            "unit": "ns",
            "range": "± 2119.0603322519623"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37091.707070707074,
            "unit": "ns",
            "range": "± 6944.138046527821"
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
          "id": "e190b26be9adb5149a11fc3081342978e8eda25e",
          "message": "test: Fix failed tests",
          "timestamp": "2024-08-28T13:50:55+09:00",
          "tree_id": "020b48d76659d08e70941b141bd253287177df16",
          "url": "https://github.com/planetarium/libplanet/commit/e190b26be9adb5149a11fc3081342978e8eda25e"
        },
        "date": 1724821257216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209962.2676056338,
            "unit": "ns",
            "range": "± 10258.710399262454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202761.76829268291,
            "unit": "ns",
            "range": "± 10664.824238217368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173402.44594594595,
            "unit": "ns",
            "range": "± 5794.363127432777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3205572.6923076925,
            "unit": "ns",
            "range": "± 41237.452092292304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2872671.966666667,
            "unit": "ns",
            "range": "± 43760.60226450707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19674.978021978022,
            "unit": "ns",
            "range": "± 1676.1561978263242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69043.05319148937,
            "unit": "ns",
            "range": "± 9786.707893067874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58276.27472527473,
            "unit": "ns",
            "range": "± 3884.004171144156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67487.82105263158,
            "unit": "ns",
            "range": "± 9186.145837073218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3378.547368421053,
            "unit": "ns",
            "range": "± 578.5965920651314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15096.326530612245,
            "unit": "ns",
            "range": "± 2216.764075052532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454940.807017544,
            "unit": "ns",
            "range": "± 105339.72380205974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2588934.11627907,
            "unit": "ns",
            "range": "± 95960.348302036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3128360.2666666666,
            "unit": "ns",
            "range": "± 57507.872366021904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2690040.15,
            "unit": "ns",
            "range": "± 59874.235156767514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3332854.5,
            "unit": "ns",
            "range": "± 45491.77064210456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11390326.357142856,
            "unit": "ns",
            "range": "± 95386.51268138742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27486491.92857143,
            "unit": "ns",
            "range": "± 207916.7419471496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69808279.86666666,
            "unit": "ns",
            "range": "± 640285.9210048125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140057288.2142857,
            "unit": "ns",
            "range": "± 913408.2225336202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293641470.4,
            "unit": "ns",
            "range": "± 1712254.4700484714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1073597.6421052632,
            "unit": "ns",
            "range": "± 77473.09639795979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2073654.0588235294,
            "unit": "ns",
            "range": "± 93047.00650247226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732126.1746031747,
            "unit": "ns",
            "range": "± 79440.77310813012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8613244.962962963,
            "unit": "ns",
            "range": "± 235950.62369397437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3644177.395089286,
            "unit": "ns",
            "range": "± 4942.145039643384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203002.2713541666,
            "unit": "ns",
            "range": "± 1584.7335188242023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761981.6301618303,
            "unit": "ns",
            "range": "± 845.6427650840216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947852.1143973214,
            "unit": "ns",
            "range": "± 5081.428345554477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618719.3100961539,
            "unit": "ns",
            "range": "± 696.6566806298001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566496.6543619792,
            "unit": "ns",
            "range": "± 763.6185925592663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32868.58620689655,
            "unit": "ns",
            "range": "± 948.4012305394115"
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
          "id": "69c9fb9d915ab1b4b17ee7e4e3719858da6e1dde",
          "message": "test: Fix failed tests",
          "timestamp": "2024-08-29T15:35:08+09:00",
          "tree_id": "d419795eb76294389144fcb7064997df4b1a83af",
          "url": "https://github.com/planetarium/libplanet/commit/69c9fb9d915ab1b4b17ee7e4e3719858da6e1dde"
        },
        "date": 1724915602696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203519.5,
            "unit": "ns",
            "range": "± 6084.278633142493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189967.4358974359,
            "unit": "ns",
            "range": "± 6304.65126459435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165073,
            "unit": "ns",
            "range": "± 2768.901177964525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3073442.9285714286,
            "unit": "ns",
            "range": "± 44945.31915640859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2744856.3666666667,
            "unit": "ns",
            "range": "± 31118.234651697312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16768.575757575756,
            "unit": "ns",
            "range": "± 2265.6539943829575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59988.62962962963,
            "unit": "ns",
            "range": "± 3147.0267175718595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49686.666666666664,
            "unit": "ns",
            "range": "± 489.9085876389842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50705.31182795699,
            "unit": "ns",
            "range": "± 5743.9498623570535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2757.557894736842,
            "unit": "ns",
            "range": "± 325.9486879011125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12052.961538461539,
            "unit": "ns",
            "range": "± 631.5940345471325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2520490,
            "unit": "ns",
            "range": "± 42715.024502734756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2539307.2647058824,
            "unit": "ns",
            "range": "± 49059.38761660378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048690.6428571427,
            "unit": "ns",
            "range": "± 33088.78105911461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2600994.6428571427,
            "unit": "ns",
            "range": "± 45774.05783361298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3327388.533333333,
            "unit": "ns",
            "range": "± 57886.49066537356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10637824.666666666,
            "unit": "ns",
            "range": "± 63908.393987763746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27805315.85714286,
            "unit": "ns",
            "range": "± 127470.9130313851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68026187.26666667,
            "unit": "ns",
            "range": "± 344593.93740676175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136221280.2,
            "unit": "ns",
            "range": "± 756583.2466267769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282703277.71428573,
            "unit": "ns",
            "range": "± 3704718.8284709468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012239.9846153846,
            "unit": "ns",
            "range": "± 44345.05288201982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927801.3783783785,
            "unit": "ns",
            "range": "± 64597.4761599998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683373.4305555555,
            "unit": "ns",
            "range": "± 82375.1263220432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8358142.357142857,
            "unit": "ns",
            "range": "± 123376.24347303042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3723069.0525841345,
            "unit": "ns",
            "range": "± 6722.040067193264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210935.7524739583,
            "unit": "ns",
            "range": "± 2437.6352347915163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765245.9865234375,
            "unit": "ns",
            "range": "± 1136.8775766949825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919560.7239583333,
            "unit": "ns",
            "range": "± 1913.1141370898392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629315.2290414664,
            "unit": "ns",
            "range": "± 273.2245694619858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581057.9983956473,
            "unit": "ns",
            "range": "± 397.7706093806163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32533.333333333332,
            "unit": "ns",
            "range": "± 455.3974193205419"
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
          "id": "615751a816055720aa9e458e60b16dc9b6b0b148",
          "message": "test: Fix failed tests",
          "timestamp": "2024-08-29T17:14:44+09:00",
          "tree_id": "1a52715e35eb0124cc12a9b59521b772162567df",
          "url": "https://github.com/planetarium/libplanet/commit/615751a816055720aa9e458e60b16dc9b6b0b148"
        },
        "date": 1724919966269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202838.625,
            "unit": "ns",
            "range": "± 9314.82597116102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196054.43023255814,
            "unit": "ns",
            "range": "± 10595.243040868636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179939.84782608695,
            "unit": "ns",
            "range": "± 6529.240065419869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3231824,
            "unit": "ns",
            "range": "± 41132.03531312303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2933883.6428571427,
            "unit": "ns",
            "range": "± 38004.98993473831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14143.261363636364,
            "unit": "ns",
            "range": "± 1028.3213080127541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77643.92,
            "unit": "ns",
            "range": "± 12820.8210559656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52628.06140350877,
            "unit": "ns",
            "range": "± 2279.869553110001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63460.57142857143,
            "unit": "ns",
            "range": "± 10781.709926929661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3709.744680851064,
            "unit": "ns",
            "range": "± 571.7923891253931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13400.516853932584,
            "unit": "ns",
            "range": "± 1346.5888310194591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2528007.6666666665,
            "unit": "ns",
            "range": "± 45865.173900819136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580267.7608695654,
            "unit": "ns",
            "range": "± 99365.42647496994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3054841.214285714,
            "unit": "ns",
            "range": "± 48699.900025451905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2716568.966666667,
            "unit": "ns",
            "range": "± 44649.68402042516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3381420.1818181816,
            "unit": "ns",
            "range": "± 82527.7454726512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10605988.4,
            "unit": "ns",
            "range": "± 196568.19559008742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27585655.633333333,
            "unit": "ns",
            "range": "± 137717.4843634951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71846985.64285715,
            "unit": "ns",
            "range": "± 361890.55858810246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138666817,
            "unit": "ns",
            "range": "± 568978.7053967161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292078188.3,
            "unit": "ns",
            "range": "± 2760776.156639655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052234.1451612904,
            "unit": "ns",
            "range": "± 72385.15083574825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2034298.8363636364,
            "unit": "ns",
            "range": "± 85967.29379392204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764010.9714285715,
            "unit": "ns",
            "range": "± 80098.0174528885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8584113.88235294,
            "unit": "ns",
            "range": "± 274950.20916806284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3796931.8040865385,
            "unit": "ns",
            "range": "± 5553.475358286377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219914.575420673,
            "unit": "ns",
            "range": "± 932.3527977412217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762205.5173828125,
            "unit": "ns",
            "range": "± 2716.471396608971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948178.099888393,
            "unit": "ns",
            "range": "± 3536.827078444056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625559.3959960938,
            "unit": "ns",
            "range": "± 594.8008545227268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566526.9444754465,
            "unit": "ns",
            "range": "± 483.81918413843107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33634.57777777778,
            "unit": "ns",
            "range": "± 2396.1675403700583"
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
          "id": "3b09aa8228b97e291815e45768ace5dc2fdbfacd",
          "message": "test: Fix failed tests",
          "timestamp": "2024-08-30T10:19:04+09:00",
          "tree_id": "1a52715e35eb0124cc12a9b59521b772162567df",
          "url": "https://github.com/planetarium/libplanet/commit/3b09aa8228b97e291815e45768ace5dc2fdbfacd"
        },
        "date": 1724981328163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196122.47222222222,
            "unit": "ns",
            "range": "± 5905.669641411722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192975,
            "unit": "ns",
            "range": "± 7693.5316337817185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170019.63333333333,
            "unit": "ns",
            "range": "± 2788.974641760113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3271392.1428571427,
            "unit": "ns",
            "range": "± 24280.173665128328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2837453.3333333335,
            "unit": "ns",
            "range": "± 57257.45827118482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14103.453608247422,
            "unit": "ns",
            "range": "± 2827.4809202886267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60036.38461538462,
            "unit": "ns",
            "range": "± 3345.551274185635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50423.94117647059,
            "unit": "ns",
            "range": "± 766.4248553012418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53351.117021276594,
            "unit": "ns",
            "range": "± 8546.307398370896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2754.2916666666665,
            "unit": "ns",
            "range": "± 288.8305610257614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11978.847826086956,
            "unit": "ns",
            "range": "± 850.6767756255185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463777.933333333,
            "unit": "ns",
            "range": "± 40894.76095238094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2539073.3571428573,
            "unit": "ns",
            "range": "± 40409.808936039924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3085809.4,
            "unit": "ns",
            "range": "± 50261.43429083007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2567992.777777778,
            "unit": "ns",
            "range": "± 70852.46915698158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3251503.5714285714,
            "unit": "ns",
            "range": "± 56495.50823631132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10799851.6,
            "unit": "ns",
            "range": "± 126404.54462377078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27153708.266666666,
            "unit": "ns",
            "range": "± 184306.7458905966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67963919.33333333,
            "unit": "ns",
            "range": "± 288855.9546414259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137554453.6,
            "unit": "ns",
            "range": "± 823375.4380538685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282758136.23333335,
            "unit": "ns",
            "range": "± 1269634.224394483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043549.347368421,
            "unit": "ns",
            "range": "± 87025.63592068331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907116.5185185184,
            "unit": "ns",
            "range": "± 52040.47164272938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722334.4057971016,
            "unit": "ns",
            "range": "± 80527.12567118187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8396717.82857143,
            "unit": "ns",
            "range": "± 274646.10682620876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3798830.84375,
            "unit": "ns",
            "range": "± 10542.523790852405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207337.7033854167,
            "unit": "ns",
            "range": "± 1897.8480953489054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760044.7227260044,
            "unit": "ns",
            "range": "± 693.482753757178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973962.5873325893,
            "unit": "ns",
            "range": "± 2276.971433716135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617504.8679547991,
            "unit": "ns",
            "range": "± 844.772796588493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581345.5078776042,
            "unit": "ns",
            "range": "± 914.1421317861331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32148.94,
            "unit": "ns",
            "range": "± 408.1484697182305"
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
          "id": "2061d13416a4eb551c1804d708d484a76855c6bb",
          "message": "test: Fix failed tests",
          "timestamp": "2024-08-30T14:22:49+09:00",
          "tree_id": "1a52715e35eb0124cc12a9b59521b772162567df",
          "url": "https://github.com/planetarium/libplanet/commit/2061d13416a4eb551c1804d708d484a76855c6bb"
        },
        "date": 1724995947121,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203661.32786885247,
            "unit": "ns",
            "range": "± 8055.678195577974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194779.7258064516,
            "unit": "ns",
            "range": "± 8794.68026086216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183486.95555555556,
            "unit": "ns",
            "range": "± 6388.506220177963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3161387.7333333334,
            "unit": "ns",
            "range": "± 50850.70513412863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853860.285714286,
            "unit": "ns",
            "range": "± 35183.13302931167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13981.758064516129,
            "unit": "ns",
            "range": "± 1444.6580075456536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69024.86363636363,
            "unit": "ns",
            "range": "± 8590.851508548469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56904.315217391304,
            "unit": "ns",
            "range": "± 4214.18560674747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61364.02040816326,
            "unit": "ns",
            "range": "± 11501.236677548257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3021.728260869565,
            "unit": "ns",
            "range": "± 422.7565507127815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13386.664835164835,
            "unit": "ns",
            "range": "± 972.9795277478153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442172.7666666666,
            "unit": "ns",
            "range": "± 37570.24281161634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551028,
            "unit": "ns",
            "range": "± 62270.181553672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3026927.214285714,
            "unit": "ns",
            "range": "± 28552.80771638774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2646424.846153846,
            "unit": "ns",
            "range": "± 40831.6757857715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3294955.1333333333,
            "unit": "ns",
            "range": "± 56878.743227358755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10834094.866666667,
            "unit": "ns",
            "range": "± 72553.15397876696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27138153.57142857,
            "unit": "ns",
            "range": "± 112291.00664479857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70693677.35714285,
            "unit": "ns",
            "range": "± 372863.4890921067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139152398.93333334,
            "unit": "ns",
            "range": "± 763997.1496466525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283865534.9285714,
            "unit": "ns",
            "range": "± 927491.7958842394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022457.5901639344,
            "unit": "ns",
            "range": "± 46137.99393355295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1972136.0697674418,
            "unit": "ns",
            "range": "± 72448.36575152296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790912.902173913,
            "unit": "ns",
            "range": "± 116569.69124977231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8483101.844827587,
            "unit": "ns",
            "range": "± 246720.54943097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3737124.199776786,
            "unit": "ns",
            "range": "± 9987.262595630054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233153.5574776786,
            "unit": "ns",
            "range": "± 1040.954764430214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 796833.2799944197,
            "unit": "ns",
            "range": "± 1164.2050893459916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920192.0969587055,
            "unit": "ns",
            "range": "± 823.8192112437584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624567.2650240385,
            "unit": "ns",
            "range": "± 647.1913555202383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 594290.8660016741,
            "unit": "ns",
            "range": "± 379.3182714853161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32867.35294117647,
            "unit": "ns",
            "range": "± 668.3031629784936"
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
          "id": "dbdac35fe5cf5bd56ed04a4f37522da312903591",
          "message": "feat: Add NodeOptionsBase for common properties like PrivateKey and APV",
          "timestamp": "2024-08-30T15:37:23+09:00",
          "tree_id": "14ffdb402bfbdb94df121c8bb8dbdee9c29c1c49",
          "url": "https://github.com/planetarium/libplanet/commit/dbdac35fe5cf5bd56ed04a4f37522da312903591"
        },
        "date": 1725000509915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206706.625,
            "unit": "ns",
            "range": "± 9467.423438061463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201411.40677966102,
            "unit": "ns",
            "range": "± 8876.863239320995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167460.5185185185,
            "unit": "ns",
            "range": "± 4538.597575415444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3132784.466666667,
            "unit": "ns",
            "range": "± 58104.46584123494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817189.7,
            "unit": "ns",
            "range": "± 34086.67888360915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16324.333333333334,
            "unit": "ns",
            "range": "± 3427.3451824991316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62448.61956521739,
            "unit": "ns",
            "range": "± 4843.760184176214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52022.25,
            "unit": "ns",
            "range": "± 1617.1475285304857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60028.795918367345,
            "unit": "ns",
            "range": "± 9880.433876444258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3155.9583333333335,
            "unit": "ns",
            "range": "± 390.9761041740118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12128.747252747253,
            "unit": "ns",
            "range": "± 747.6441457955574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437780.8846153845,
            "unit": "ns",
            "range": "± 65706.18775432154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2622557.238095238,
            "unit": "ns",
            "range": "± 61198.91919871196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3078465.8571428573,
            "unit": "ns",
            "range": "± 37394.92194003217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2637586.15625,
            "unit": "ns",
            "range": "± 80904.27839363103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3420344.7333333334,
            "unit": "ns",
            "range": "± 63317.66532387835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10873616.5,
            "unit": "ns",
            "range": "± 139224.6667484996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28410611.5,
            "unit": "ns",
            "range": "± 387790.84217747365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70687810.6,
            "unit": "ns",
            "range": "± 546287.2708485109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140483791.46666667,
            "unit": "ns",
            "range": "± 1146370.9349470034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290827164.73333335,
            "unit": "ns",
            "range": "± 2585889.997618103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1087403.046511628,
            "unit": "ns",
            "range": "± 58531.24737269567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2119294.272727273,
            "unit": "ns",
            "range": "± 90327.51713839591"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1751516.9677419355,
            "unit": "ns",
            "range": "± 130752.3271557346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8839846.432098765,
            "unit": "ns",
            "range": "± 453632.42332768557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3776570.8328683036,
            "unit": "ns",
            "range": "± 8127.335808641946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214083.4321986607,
            "unit": "ns",
            "range": "± 1210.4269604408385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767379.994280134,
            "unit": "ns",
            "range": "± 1221.6962840821984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970009.794642857,
            "unit": "ns",
            "range": "± 2024.6776083513028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607313.9070870535,
            "unit": "ns",
            "range": "± 751.745681251226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578094.484375,
            "unit": "ns",
            "range": "± 2301.267794065695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33825.96428571428,
            "unit": "ns",
            "range": "± 2158.530772329796"
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
          "id": "9a53e202399cdfe1075a89873b52449de9db3b83",
          "message": "feat: Add NodeOptionsBase for common properties like PrivateKey and APV",
          "timestamp": "2024-09-02T14:22:29+09:00",
          "tree_id": "0853ff9a4ea13c2033c2f4953f5cfe61d7530326",
          "url": "https://github.com/planetarium/libplanet/commit/9a53e202399cdfe1075a89873b52449de9db3b83"
        },
        "date": 1725255838297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206610.07692307694,
            "unit": "ns",
            "range": "± 5340.157143179042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198226.6301369863,
            "unit": "ns",
            "range": "± 9746.948528908431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164253.52631578947,
            "unit": "ns",
            "range": "± 2048.477954439481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153351.3333333335,
            "unit": "ns",
            "range": "± 47099.070581771215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2962050.5,
            "unit": "ns",
            "range": "± 30082.301139659226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13554.636363636364,
            "unit": "ns",
            "range": "± 1134.1699195793278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62927.74725274725,
            "unit": "ns",
            "range": "± 5659.749082764489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51355.46153846154,
            "unit": "ns",
            "range": "± 512.8343812227322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57040.87640449438,
            "unit": "ns",
            "range": "± 8800.478118235995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3406.8333333333335,
            "unit": "ns",
            "range": "± 501.2259216774443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12634.865168539325,
            "unit": "ns",
            "range": "± 883.2433540780154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2471933.9285714286,
            "unit": "ns",
            "range": "± 29968.245128325892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2594020.6764705884,
            "unit": "ns",
            "range": "± 50515.596551009985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3054889.6666666665,
            "unit": "ns",
            "range": "± 38485.42071387306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2602356.9714285713,
            "unit": "ns",
            "range": "± 84003.40727805444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3318275.6666666665,
            "unit": "ns",
            "range": "± 55538.02442685638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10595281.285714285,
            "unit": "ns",
            "range": "± 178254.53564082872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27376962.1,
            "unit": "ns",
            "range": "± 183812.3569046123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68999799.66666667,
            "unit": "ns",
            "range": "± 626149.4359978143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140154283.07142857,
            "unit": "ns",
            "range": "± 767844.5549141455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294207372.73333335,
            "unit": "ns",
            "range": "± 1708866.890093611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010909.1571428571,
            "unit": "ns",
            "range": "± 43252.625613067976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1964075.0294117648,
            "unit": "ns",
            "range": "± 61841.86154411535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703127.875,
            "unit": "ns",
            "range": "± 84879.32860875364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8653601.575757576,
            "unit": "ns",
            "range": "± 271245.40173291764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760482.9776785714,
            "unit": "ns",
            "range": "± 6780.763869442602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192080.279017857,
            "unit": "ns",
            "range": "± 1386.6127770763246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765394.2350911458,
            "unit": "ns",
            "range": "± 2003.186082012081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913590.4189453125,
            "unit": "ns",
            "range": "± 1875.8003067090735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618599.6728515625,
            "unit": "ns",
            "range": "± 723.6397417284549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564955.1683872768,
            "unit": "ns",
            "range": "± 408.121951213663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32167.115384615383,
            "unit": "ns",
            "range": "± 282.3952721693296"
          }
        ]
      }
    ]
  }
}