window.BENCHMARK_DATA = {
  "lastUpdate": 1724720357303,
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
      }
    ]
  }
}