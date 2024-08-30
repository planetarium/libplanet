window.BENCHMARK_DATA = {
  "lastUpdate": 1724995952396,
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
        "date": 1724821290667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044753.0612244898,
            "unit": "ns",
            "range": "± 130049.9802447748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1785532.3529411764,
            "unit": "ns",
            "range": "± 57448.188623437745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569434.7826086956,
            "unit": "ns",
            "range": "± 75238.23892083019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7164350.9433962265,
            "unit": "ns",
            "range": "± 297838.2696277665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34455.555555555555,
            "unit": "ns",
            "range": "± 5234.076380370806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9828253.333333334,
            "unit": "ns",
            "range": "± 103642.92317283184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24583760,
            "unit": "ns",
            "range": "± 329297.38144809386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61117993.333333336,
            "unit": "ns",
            "range": "± 634769.0912750047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121711657.14285715,
            "unit": "ns",
            "range": "± 1027497.959357349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245043986.66666666,
            "unit": "ns",
            "range": "± 2150129.468150587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3283207.7083333335,
            "unit": "ns",
            "range": "± 15552.018087091381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076780.9765625,
            "unit": "ns",
            "range": "± 2845.434759022233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737857.5520833334,
            "unit": "ns",
            "range": "± 2579.1933672670543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987133.671875,
            "unit": "ns",
            "range": "± 6340.535030541838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626669.3359375,
            "unit": "ns",
            "range": "± 3693.1455365177553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563367.2712053572,
            "unit": "ns",
            "range": "± 1333.9677064935163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128000,
            "unit": "ns",
            "range": "± 33347.26375581661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286426.6666666665,
            "unit": "ns",
            "range": "± 32703.701552547464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2641492.1052631577,
            "unit": "ns",
            "range": "± 53701.182645672336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2314552.0408163266,
            "unit": "ns",
            "range": "± 91326.48276421048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2926250,
            "unit": "ns",
            "range": "± 39230.30898243274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178159.83606557376,
            "unit": "ns",
            "range": "± 7803.732118203288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167282.92682926828,
            "unit": "ns",
            "range": "± 8379.89665038437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142973.80952380953,
            "unit": "ns",
            "range": "± 3261.120169804351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2696813.3333333335,
            "unit": "ns",
            "range": "± 38500.46134541148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450478.5714285714,
            "unit": "ns",
            "range": "± 25133.8931011012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11892.391304347826,
            "unit": "ns",
            "range": "± 1465.368250282005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58487.5,
            "unit": "ns",
            "range": "± 5196.076455010626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46073.170731707316,
            "unit": "ns",
            "range": "± 2441.010152187698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56898.86363636364,
            "unit": "ns",
            "range": "± 9710.587826450788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2882.6530612244896,
            "unit": "ns",
            "range": "± 655.0400176968935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11564.285714285714,
            "unit": "ns",
            "range": "± 1602.7199818452962"
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
        "date": 1724915692887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1028942,
            "unit": "ns",
            "range": "± 125709.96776691814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1777069.2307692308,
            "unit": "ns",
            "range": "± 71333.83691904397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545423.1578947369,
            "unit": "ns",
            "range": "± 98587.47865407867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6876802.325581395,
            "unit": "ns",
            "range": "± 254885.5508695657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32853.60824742268,
            "unit": "ns",
            "range": "± 3919.3447011710955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10525013.333333334,
            "unit": "ns",
            "range": "± 111276.89316466809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24812900,
            "unit": "ns",
            "range": "± 291610.0233433099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61597628.571428575,
            "unit": "ns",
            "range": "± 341631.55463288096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119294426.66666667,
            "unit": "ns",
            "range": "± 797482.1471057399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243731215.3846154,
            "unit": "ns",
            "range": "± 1136578.7572404544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3301444.453125,
            "unit": "ns",
            "range": "± 7027.543902059615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1036274.1536458334,
            "unit": "ns",
            "range": "± 1353.27974309548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730186.1607142857,
            "unit": "ns",
            "range": "± 1589.1882153668992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962999.21875,
            "unit": "ns",
            "range": "± 4647.713525930006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604852.34375,
            "unit": "ns",
            "range": "± 1736.456383343818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572500.5403645834,
            "unit": "ns",
            "range": "± 770.6487848398122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175800,
            "unit": "ns",
            "range": "± 57656.40322924535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2184170,
            "unit": "ns",
            "range": "± 30985.5311856541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2657465.625,
            "unit": "ns",
            "range": "± 82264.91671531321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2221293.75,
            "unit": "ns",
            "range": "± 39823.6691554156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2894050,
            "unit": "ns",
            "range": "± 35415.44100443282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174223.80952380953,
            "unit": "ns",
            "range": "± 7295.595540167662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168502.77777777778,
            "unit": "ns",
            "range": "± 7030.917080450834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147806.66666666666,
            "unit": "ns",
            "range": "± 2702.238930608328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752368.75,
            "unit": "ns",
            "range": "± 51349.05021841527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2428726.6666666665,
            "unit": "ns",
            "range": "± 42704.25650692825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10816.483516483517,
            "unit": "ns",
            "range": "± 1214.1996665626418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51975.82417582418,
            "unit": "ns",
            "range": "± 4220.8566971210075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44011.23595505618,
            "unit": "ns",
            "range": "± 2454.4689391471215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53365.217391304344,
            "unit": "ns",
            "range": "± 8714.159688294725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2537.8947368421054,
            "unit": "ns",
            "range": "± 486.2314805024238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9643.478260869566,
            "unit": "ns",
            "range": "± 1258.4924129164906"
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
        "date": 1724919871173,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990854.081632653,
            "unit": "ns",
            "range": "± 106762.3163839347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728917.5438596492,
            "unit": "ns",
            "range": "± 73548.07495491595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1482408.7719298245,
            "unit": "ns",
            "range": "± 63980.07022475758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6824730.555555556,
            "unit": "ns",
            "range": "± 223443.07273658822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30664.285714285714,
            "unit": "ns",
            "range": "± 498.6244815754373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10026633.333333334,
            "unit": "ns",
            "range": "± 179030.51083411401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24723806.666666668,
            "unit": "ns",
            "range": "± 296540.2320733145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60426400,
            "unit": "ns",
            "range": "± 590464.2340283336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120531306.66666667,
            "unit": "ns",
            "range": "± 2239856.0175239155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241530836.66666666,
            "unit": "ns",
            "range": "± 3476867.302177692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3449680.4947916665,
            "unit": "ns",
            "range": "± 27494.842405304516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1094813.4895833333,
            "unit": "ns",
            "range": "± 2538.1703215179123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747075.8091517857,
            "unit": "ns",
            "range": "± 2341.3953928350643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961458.7332589286,
            "unit": "ns",
            "range": "± 2845.804628180336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639298.5481770834,
            "unit": "ns",
            "range": "± 2080.7511214483648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558360.8119419643,
            "unit": "ns",
            "range": "± 639.761960332899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134211.111111111,
            "unit": "ns",
            "range": "± 38067.57486904382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310256,
            "unit": "ns",
            "range": "± 53186.46507022878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759062.5,
            "unit": "ns",
            "range": "± 97310.40919233403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2305524.5614035088,
            "unit": "ns",
            "range": "± 99538.44246733046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3003942.8571428573,
            "unit": "ns",
            "range": "± 41320.59859358124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174065.95744680852,
            "unit": "ns",
            "range": "± 5581.307178810071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176952.38095238095,
            "unit": "ns",
            "range": "± 8083.672455552835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150927.27272727274,
            "unit": "ns",
            "range": "± 4443.905428173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806557.1428571427,
            "unit": "ns",
            "range": "± 31536.41885639069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2609363.3333333335,
            "unit": "ns",
            "range": "± 31561.25261561503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14524.742268041236,
            "unit": "ns",
            "range": "± 1927.3811532661707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64792.92929292929,
            "unit": "ns",
            "range": "± 6474.159822966749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64379.79797979798,
            "unit": "ns",
            "range": "± 7248.7856801206635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74597.4025974026,
            "unit": "ns",
            "range": "± 5003.8136515528695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4470.103092783505,
            "unit": "ns",
            "range": "± 782.512639468421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14651.08695652174,
            "unit": "ns",
            "range": "± 1793.363502387659"
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
        "date": 1724981304183,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960197.0588235294,
            "unit": "ns",
            "range": "± 47055.22740111143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1789150,
            "unit": "ns",
            "range": "± 76413.3305837999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1548770.7692307692,
            "unit": "ns",
            "range": "± 71360.57368015996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6774066.666666667,
            "unit": "ns",
            "range": "± 222789.39318173504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30007.14285714286,
            "unit": "ns",
            "range": "± 490.6264217449828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10016964.285714285,
            "unit": "ns",
            "range": "± 106336.74816820858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24830721.42857143,
            "unit": "ns",
            "range": "± 212980.30309278486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60832650,
            "unit": "ns",
            "range": "± 390347.209841148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121542240,
            "unit": "ns",
            "range": "± 727079.2585995796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242696106.66666666,
            "unit": "ns",
            "range": "± 1991615.6207126582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305515.078125,
            "unit": "ns",
            "range": "± 9561.07715587607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060313.1901041667,
            "unit": "ns",
            "range": "± 3867.7353063274954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754214.2447916666,
            "unit": "ns",
            "range": "± 1962.9247141155638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2092850.6009615385,
            "unit": "ns",
            "range": "± 2867.7766393452707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622055.6901041666,
            "unit": "ns",
            "range": "± 1483.5424160645346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593646.2262834822,
            "unit": "ns",
            "range": "± 2134.192324115459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119611.5384615385,
            "unit": "ns",
            "range": "± 54756.00662519557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2263935.714285714,
            "unit": "ns",
            "range": "± 24483.985571196314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2716933.3333333335,
            "unit": "ns",
            "range": "± 34598.011228282776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2239957.1428571427,
            "unit": "ns",
            "range": "± 25061.423444308686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2920160,
            "unit": "ns",
            "range": "± 26574.310903577538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178753.44827586206,
            "unit": "ns",
            "range": "± 7784.807866275283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168215.09433962265,
            "unit": "ns",
            "range": "± 6998.609648362998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144500,
            "unit": "ns",
            "range": "± 3347.0882868547105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2797162.5,
            "unit": "ns",
            "range": "± 53243.87758230988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2529946.6666666665,
            "unit": "ns",
            "range": "± 45284.22725514082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10611.23595505618,
            "unit": "ns",
            "range": "± 855.1233566311821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51983.69565217391,
            "unit": "ns",
            "range": "± 3766.0215161627357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43956.25,
            "unit": "ns",
            "range": "± 1343.3077854503833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56466.666666666664,
            "unit": "ns",
            "range": "± 13205.804227918965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2550,
            "unit": "ns",
            "range": "± 441.10077360294696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9998.936170212766,
            "unit": "ns",
            "range": "± 1178.3435321471059"
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
        "date": 1724995881143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975988.4210526316,
            "unit": "ns",
            "range": "± 64844.36172467428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1820746.1538461538,
            "unit": "ns",
            "range": "± 74438.94843252806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574929.347826087,
            "unit": "ns",
            "range": "± 120194.8130548248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6913997.297297297,
            "unit": "ns",
            "range": "± 182782.43364187938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29966.666666666668,
            "unit": "ns",
            "range": "± 196.94638556693238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9475635.714285715,
            "unit": "ns",
            "range": "± 61024.542441707665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23806653.846153848,
            "unit": "ns",
            "range": "± 91154.24304792962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58482606.666666664,
            "unit": "ns",
            "range": "± 367712.6313279097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116071420,
            "unit": "ns",
            "range": "± 673383.1749351288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235085223.07692307,
            "unit": "ns",
            "range": "± 1542203.254089122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3282751.7447916665,
            "unit": "ns",
            "range": "± 18834.157228050328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056789.8307291667,
            "unit": "ns",
            "range": "± 4329.060960564236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730261.0276442308,
            "unit": "ns",
            "range": "± 3683.1767264961586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918887.8385416667,
            "unit": "ns",
            "range": "± 8156.744661901242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631031.7252604166,
            "unit": "ns",
            "range": "± 2029.7163137411872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559821.9935825893,
            "unit": "ns",
            "range": "± 2760.3914940118857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195880,
            "unit": "ns",
            "range": "± 27732.27104192618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2219126.086956522,
            "unit": "ns",
            "range": "± 84821.99514219988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2743620.8333333335,
            "unit": "ns",
            "range": "± 71126.99896582209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2259594.4444444445,
            "unit": "ns",
            "range": "± 48006.4514319166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2885457.1428571427,
            "unit": "ns",
            "range": "± 34059.24056892443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183276.5625,
            "unit": "ns",
            "range": "± 8315.786138853191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177093.6507936508,
            "unit": "ns",
            "range": "± 6357.060413579104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147928.57142857142,
            "unit": "ns",
            "range": "± 4055.6186122516906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2755542.8571428573,
            "unit": "ns",
            "range": "± 45647.17051279494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2503726.6666666665,
            "unit": "ns",
            "range": "± 36752.61830646834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11268.421052631578,
            "unit": "ns",
            "range": "± 2149.679004137284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52373.19587628866,
            "unit": "ns",
            "range": "± 4011.974666127577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45223.21428571428,
            "unit": "ns",
            "range": "± 1945.5301751290472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64863.75,
            "unit": "ns",
            "range": "± 7501.160142338827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2929.1666666666665,
            "unit": "ns",
            "range": "± 701.1144011563106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10019.565217391304,
            "unit": "ns",
            "range": "± 1002.1667877280839"
          }
        ]
      }
    ]
  }
}