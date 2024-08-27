window.BENCHMARK_DATA = {
  "lastUpdate": 1724720571338,
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
        "date": 1724398980566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039706.3829787234,
            "unit": "ns",
            "range": "± 101204.4078245635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1870623.6363636365,
            "unit": "ns",
            "range": "± 78440.86228121714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1655031.9587628867,
            "unit": "ns",
            "range": "± 137287.4414218757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7043307.317073171,
            "unit": "ns",
            "range": "± 253123.3951951537"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32372.727272727272,
            "unit": "ns",
            "range": "± 2410.0711713975734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10303500,
            "unit": "ns",
            "range": "± 85829.32399327666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25026666.666666668,
            "unit": "ns",
            "range": "± 366156.50570031756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61735893.333333336,
            "unit": "ns",
            "range": "± 720501.7085998049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119452433.33333333,
            "unit": "ns",
            "range": "± 1431907.5991072024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241603327.7777778,
            "unit": "ns",
            "range": "± 5114716.908134748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3344415.1041666665,
            "unit": "ns",
            "range": "± 14231.960867136262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1092783.1510416667,
            "unit": "ns",
            "range": "± 5642.567442568934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750506.3541666666,
            "unit": "ns",
            "range": "± 1735.1656981028766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931915.0130208333,
            "unit": "ns",
            "range": "± 4310.73803457216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622268.3035714285,
            "unit": "ns",
            "range": "± 1128.8534987409387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564631.1453683035,
            "unit": "ns",
            "range": "± 1072.6231029521289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145603.5714285714,
            "unit": "ns",
            "range": "± 59923.114208142724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273197.8260869565,
            "unit": "ns",
            "range": "± 82109.86539490295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2730242.8571428573,
            "unit": "ns",
            "range": "± 89555.49474295512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2334687.5,
            "unit": "ns",
            "range": "± 66411.817593927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3098626.6666666665,
            "unit": "ns",
            "range": "± 54978.13158321181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190631.25,
            "unit": "ns",
            "range": "± 7380.773074022312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175134.78260869565,
            "unit": "ns",
            "range": "± 7970.180197367975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149919.29824561405,
            "unit": "ns",
            "range": "± 6501.4129946741805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2769573.3333333335,
            "unit": "ns",
            "range": "± 47295.808734067796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2566107.1428571427,
            "unit": "ns",
            "range": "± 24048.93934285842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12559.782608695652,
            "unit": "ns",
            "range": "± 1477.6771036161326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59541.666666666664,
            "unit": "ns",
            "range": "± 6157.813464750833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46847.4358974359,
            "unit": "ns",
            "range": "± 1634.2529565663583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61472.72727272727,
            "unit": "ns",
            "range": "± 8734.022881517993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2528.723404255319,
            "unit": "ns",
            "range": "± 566.3735498246493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11270.526315789473,
            "unit": "ns",
            "range": "± 1421.6317927252985"
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
        "date": 1724399065624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970787.7551020408,
            "unit": "ns",
            "range": "± 91275.97132487953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1713597.6744186047,
            "unit": "ns",
            "range": "± 55858.29643103329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1508780.6451612904,
            "unit": "ns",
            "range": "± 100306.58790847246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6855769.354838709,
            "unit": "ns",
            "range": "± 190672.0612628829"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29962.962962962964,
            "unit": "ns",
            "range": "± 648.7551085603803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9735442.857142856,
            "unit": "ns",
            "range": "± 65025.988464799026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22862500,
            "unit": "ns",
            "range": "± 97411.22980595047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59794807.14285714,
            "unit": "ns",
            "range": "± 287871.088842226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118273564.28571428,
            "unit": "ns",
            "range": "± 378699.83365587716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235130480,
            "unit": "ns",
            "range": "± 750563.027904481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3276456.25,
            "unit": "ns",
            "range": "± 2372.9084000235543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042290.33203125,
            "unit": "ns",
            "range": "± 2624.119828048118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733091.9010416666,
            "unit": "ns",
            "range": "± 1689.1676162013393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948594.224330357,
            "unit": "ns",
            "range": "± 1664.7838655349772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609706.3337053572,
            "unit": "ns",
            "range": "± 1128.362314956682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596888.0483774039,
            "unit": "ns",
            "range": "± 568.0159216103063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2155286.9565217393,
            "unit": "ns",
            "range": "± 34641.00702330885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2175286.6666666665,
            "unit": "ns",
            "range": "± 31163.207854929242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2652121.4285714286,
            "unit": "ns",
            "range": "± 46893.58129886186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2217750,
            "unit": "ns",
            "range": "± 44552.00332196073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2906607.1428571427,
            "unit": "ns",
            "range": "± 43653.68015653195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170723.84615384616,
            "unit": "ns",
            "range": "± 7480.835450567105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161670,
            "unit": "ns",
            "range": "± 7170.414734004381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143582.60869565216,
            "unit": "ns",
            "range": "± 3083.0404376071597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2623953.3333333335,
            "unit": "ns",
            "range": "± 43367.59597847661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2434800,
            "unit": "ns",
            "range": "± 24708.29041808873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9336.666666666666,
            "unit": "ns",
            "range": "± 556.9681168128634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49330.98591549296,
            "unit": "ns",
            "range": "± 2363.0846396361912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43684.21052631579,
            "unit": "ns",
            "range": "± 944.729919015504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46801.041666666664,
            "unit": "ns",
            "range": "± 7508.745704936578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2024.7422680412371,
            "unit": "ns",
            "range": "± 362.58071740276307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9070.114942528735,
            "unit": "ns",
            "range": "± 513.3372214379739"
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
        "date": 1724648253166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983863.5416666666,
            "unit": "ns",
            "range": "± 90900.12578277635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1726957.894736842,
            "unit": "ns",
            "range": "± 59093.633358900755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1539446.3917525774,
            "unit": "ns",
            "range": "± 104739.57989327592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6852720.512820513,
            "unit": "ns",
            "range": "± 236352.7383733309"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33852.083333333336,
            "unit": "ns",
            "range": "± 3975.4769105940823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10212073.333333334,
            "unit": "ns",
            "range": "± 114128.76478951724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25825486.666666668,
            "unit": "ns",
            "range": "± 387198.4925934845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64376093.333333336,
            "unit": "ns",
            "range": "± 801671.766165347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126413777.27272727,
            "unit": "ns",
            "range": "± 3041421.041761301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253372433.33333334,
            "unit": "ns",
            "range": "± 1847350.883859165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3347320.6770833335,
            "unit": "ns",
            "range": "± 18902.64688439353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1090668.1510416667,
            "unit": "ns",
            "range": "± 5322.179655815074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746467.6888020834,
            "unit": "ns",
            "range": "± 1831.5798137870881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943474.2708333333,
            "unit": "ns",
            "range": "± 11918.76431768654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614147.98828125,
            "unit": "ns",
            "range": "± 1942.9691362859928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565817.8335336539,
            "unit": "ns",
            "range": "± 1372.5224220946163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2176347.619047619,
            "unit": "ns",
            "range": "± 49435.72209493474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2232230,
            "unit": "ns",
            "range": "± 45902.86931951755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2796567.7419354836,
            "unit": "ns",
            "range": "± 84138.51035483801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2396734.6153846155,
            "unit": "ns",
            "range": "± 65466.369640038494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2940985,
            "unit": "ns",
            "range": "± 65722.73719353543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179938.77551020408,
            "unit": "ns",
            "range": "± 6603.402416132744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168804.25531914894,
            "unit": "ns",
            "range": "± 10989.211864209226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144535,
            "unit": "ns",
            "range": "± 3179.419841152752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2621514.285714286,
            "unit": "ns",
            "range": "± 38163.71327568914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2365500,
            "unit": "ns",
            "range": "± 31400.293972166273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9629.12087912088,
            "unit": "ns",
            "range": "± 723.6506958956993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56407,
            "unit": "ns",
            "range": "± 6540.445340534944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45047.916666666664,
            "unit": "ns",
            "range": "± 1785.7580288461963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50793.75,
            "unit": "ns",
            "range": "± 7537.929528653565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2600,
            "unit": "ns",
            "range": "± 415.4895653892748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10600,
            "unit": "ns",
            "range": "± 955.24865872714"
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
        "date": 1724720267460,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975166.6666666666,
            "unit": "ns",
            "range": "± 92278.3002329234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758524.1379310344,
            "unit": "ns",
            "range": "± 76681.1427454793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518035.1063829786,
            "unit": "ns",
            "range": "± 108444.01331150945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6853184.615384615,
            "unit": "ns",
            "range": "± 186050.99288594554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30507.14285714286,
            "unit": "ns",
            "range": "± 312.4697787584627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9727906.666666666,
            "unit": "ns",
            "range": "± 57787.794888672106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23247021.42857143,
            "unit": "ns",
            "range": "± 204617.12154306984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58772853.333333336,
            "unit": "ns",
            "range": "± 390874.58687751327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117542850,
            "unit": "ns",
            "range": "± 845973.3908799514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246996280,
            "unit": "ns",
            "range": "± 1412082.2543828164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3317692.8385416665,
            "unit": "ns",
            "range": "± 6663.832032607465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044072.5911458334,
            "unit": "ns",
            "range": "± 2375.727441043093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748402.5766225961,
            "unit": "ns",
            "range": "± 2391.1184264739722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928965.3878348214,
            "unit": "ns",
            "range": "± 1828.9705329164024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604473.1966145834,
            "unit": "ns",
            "range": "± 1054.3821442952876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566913.37890625,
            "unit": "ns",
            "range": "± 9285.811945737023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2187180,
            "unit": "ns",
            "range": "± 40478.28694850752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2193142.8571428573,
            "unit": "ns",
            "range": "± 60655.45945671141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2650593.9393939395,
            "unit": "ns",
            "range": "± 56035.12815298286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2247420,
            "unit": "ns",
            "range": "± 39457.10509980608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2956038.4615384615,
            "unit": "ns",
            "range": "± 42734.442363304144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174710.14492753622,
            "unit": "ns",
            "range": "± 8395.414450890232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164418.57142857142,
            "unit": "ns",
            "range": "± 7476.597165554891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144952.1739130435,
            "unit": "ns",
            "range": "± 3609.9445431672602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2622980,
            "unit": "ns",
            "range": "± 29087.827596534506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2351661.5384615385,
            "unit": "ns",
            "range": "± 18041.6434239206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9998.91304347826,
            "unit": "ns",
            "range": "± 977.4933815820899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49810.75268817204,
            "unit": "ns",
            "range": "± 3007.651921262896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44242.857142857145,
            "unit": "ns",
            "range": "± 1255.7802861106425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49005.26315789474,
            "unit": "ns",
            "range": "± 8592.10880439761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2329.1666666666665,
            "unit": "ns",
            "range": "± 315.86694956035103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9236.170212765957,
            "unit": "ns",
            "range": "± 750.0324098846486"
          }
        ]
      }
    ]
  }
}