window.BENCHMARK_DATA = {
  "lastUpdate": 1734058647489,
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
          "id": "cd60cf1a4a53da7d0e90c16c4efe9949c841034b",
          "message": "feat: delayed consensus step transition",
          "timestamp": "2024-12-06T19:00:24+09:00",
          "tree_id": "c1104c807c075cc1878d91a6db932c71b4c684eb",
          "url": "https://github.com/planetarium/libplanet/commit/cd60cf1a4a53da7d0e90c16c4efe9949c841034b"
        },
        "date": 1733479762254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10858220.8,
            "unit": "ns",
            "range": "± 60814.111250362184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28092336.366666667,
            "unit": "ns",
            "range": "± 150802.25355736882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72097258.21428572,
            "unit": "ns",
            "range": "± 262238.3099212882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142827396.8,
            "unit": "ns",
            "range": "± 862594.6123314077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294422982.1666667,
            "unit": "ns",
            "range": "± 970815.276560499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110815.78260869565,
            "unit": "ns",
            "range": "± 6663.6494997499985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189955.2068965517,
            "unit": "ns",
            "range": "± 8212.391101595542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170734.16666666666,
            "unit": "ns",
            "range": "± 3784.6491559104043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2987666.346153846,
            "unit": "ns",
            "range": "± 36661.45835625872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2791354.8,
            "unit": "ns",
            "range": "± 30348.4352531442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13459.797872340425,
            "unit": "ns",
            "range": "± 1047.1179374044425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64415.36781609195,
            "unit": "ns",
            "range": "± 5756.072114621185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54129.5404040404,
            "unit": "ns",
            "range": "± 5838.269845962005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59915.255102040814,
            "unit": "ns",
            "range": "± 14042.682927976954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2656.90206185567,
            "unit": "ns",
            "range": "± 429.8769363578037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12606.627659574468,
            "unit": "ns",
            "range": "± 742.415821723245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753644.498372396,
            "unit": "ns",
            "range": "± 3031.909920107815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218014.7997395834,
            "unit": "ns",
            "range": "± 1165.8712490405414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762231.0239583333,
            "unit": "ns",
            "range": "± 1075.8473819807582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970443.3716517857,
            "unit": "ns",
            "range": "± 954.1168784014684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627230.129045759,
            "unit": "ns",
            "range": "± 791.2699112751291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567816.7555989583,
            "unit": "ns",
            "range": "± 724.0227974538152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2386635.2,
            "unit": "ns",
            "range": "± 29044.974099784336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563237.53125,
            "unit": "ns",
            "range": "± 78334.64143082399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3049976.8571428573,
            "unit": "ns",
            "range": "± 35914.46404917607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2594776.3,
            "unit": "ns",
            "range": "± 42739.60539660073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3313508.533333333,
            "unit": "ns",
            "range": "± 57662.059863442606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004811.9354838709,
            "unit": "ns",
            "range": "± 79816.04086160801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932577.40625,
            "unit": "ns",
            "range": "± 60022.91949175338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595675.5459770116,
            "unit": "ns",
            "range": "± 87002.52284151626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7792929.577777778,
            "unit": "ns",
            "range": "± 292389.91454776534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30542.96875,
            "unit": "ns",
            "range": "± 952.6143648004651"
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
          "id": "611edf443e1eb2c1703d360689f141598fedf0b1",
          "message": "test: add unit test for delayed consensus",
          "timestamp": "2024-12-07T15:02:44+09:00",
          "tree_id": "67ef8e106f212a77f0d1174f03d314824b774db5",
          "url": "https://github.com/planetarium/libplanet/commit/611edf443e1eb2c1703d360689f141598fedf0b1"
        },
        "date": 1733551850189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10823852.233333332,
            "unit": "ns",
            "range": "± 63235.80647122852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27862624.42857143,
            "unit": "ns",
            "range": "± 209589.6574069342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70463009.42857143,
            "unit": "ns",
            "range": "± 244707.06415936278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141006532.57142857,
            "unit": "ns",
            "range": "± 439768.1101668966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292657528.8,
            "unit": "ns",
            "range": "± 762371.7602724314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118760.1914893617,
            "unit": "ns",
            "range": "± 4542.327471004159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194098.39534883722,
            "unit": "ns",
            "range": "± 7181.146572928491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166247.88461538462,
            "unit": "ns",
            "range": "± 2254.3287078589324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2851666.1428571427,
            "unit": "ns",
            "range": "± 35316.15088761067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2725165.5714285714,
            "unit": "ns",
            "range": "± 27994.672943022808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13322.302631578947,
            "unit": "ns",
            "range": "± 689.2899925718124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60535.683333333334,
            "unit": "ns",
            "range": "± 2416.5052963267312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49022.78571428572,
            "unit": "ns",
            "range": "± 805.133570244134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48877.56701030928,
            "unit": "ns",
            "range": "± 6578.756819470808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2476.8229166666665,
            "unit": "ns",
            "range": "± 241.71209471695067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12329.722222222223,
            "unit": "ns",
            "range": "± 698.4647695711537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702627.6766183036,
            "unit": "ns",
            "range": "± 7421.425153117901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206017.1693638393,
            "unit": "ns",
            "range": "± 2154.856650358441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757583.3758463542,
            "unit": "ns",
            "range": "± 3279.770813897519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956303.1526041667,
            "unit": "ns",
            "range": "± 2544.1645330343977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633129.6818659856,
            "unit": "ns",
            "range": "± 489.87076537168605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 591344.2746744792,
            "unit": "ns",
            "range": "± 890.2234362685987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395146.3666666667,
            "unit": "ns",
            "range": "± 29774.109838838813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510387.5,
            "unit": "ns",
            "range": "± 25620.04331648293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3034862.285714286,
            "unit": "ns",
            "range": "± 31149.242223598245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2554246.0263157897,
            "unit": "ns",
            "range": "± 87820.70729732249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3255800.2666666666,
            "unit": "ns",
            "range": "± 50299.47538560086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974463.5949367088,
            "unit": "ns",
            "range": "± 46860.0937252198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1854388.8125,
            "unit": "ns",
            "range": "± 34429.21567742286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554738.5873015872,
            "unit": "ns",
            "range": "± 60959.49742157861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7739211.65,
            "unit": "ns",
            "range": "± 274618.29886800406"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30813.41304347826,
            "unit": "ns",
            "range": "± 750.8664639203939"
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
          "id": "842da15cd149225a24bb4c8280524d97d16dfe45",
          "message": "chore: add logging",
          "timestamp": "2024-12-09T14:14:16+09:00",
          "tree_id": "7e1b1e7376fbd4b87456ff2648c111f2a1d790b9",
          "url": "https://github.com/planetarium/libplanet/commit/842da15cd149225a24bb4c8280524d97d16dfe45"
        },
        "date": 1733721896516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10873514.666666666,
            "unit": "ns",
            "range": "± 70778.8451058917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27661022.066666666,
            "unit": "ns",
            "range": "± 161455.5304430235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72341372.66666667,
            "unit": "ns",
            "range": "± 287333.2350302561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143703360.96666667,
            "unit": "ns",
            "range": "± 1028918.1434905214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293336818.2,
            "unit": "ns",
            "range": "± 2103125.691379864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118306.07,
            "unit": "ns",
            "range": "± 13278.102509303644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189003.31914893616,
            "unit": "ns",
            "range": "± 7313.333933440797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162435.06666666668,
            "unit": "ns",
            "range": "± 4812.849818424905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2874147.7333333334,
            "unit": "ns",
            "range": "± 48734.342438611086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2784930.214285714,
            "unit": "ns",
            "range": "± 30698.84130656944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12566.573033707866,
            "unit": "ns",
            "range": "± 1007.7752261974308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60025.333333333336,
            "unit": "ns",
            "range": "± 3328.6063318391302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49463,
            "unit": "ns",
            "range": "± 784.6696757234856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53969.82989690721,
            "unit": "ns",
            "range": "± 8581.896137025955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2788.6979166666665,
            "unit": "ns",
            "range": "± 360.0645298829427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13234.404255319148,
            "unit": "ns",
            "range": "± 1573.9049944626904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3761086.758370536,
            "unit": "ns",
            "range": "± 6531.113971118535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218907.1735677083,
            "unit": "ns",
            "range": "± 2058.383041748542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757595.3556941106,
            "unit": "ns",
            "range": "± 1365.8996647815163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937359.9425223214,
            "unit": "ns",
            "range": "± 3017.7459215968074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 656348.3932059152,
            "unit": "ns",
            "range": "± 970.0890849152058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572244.6827674279,
            "unit": "ns",
            "range": "± 553.3958654692709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2438872.3571428573,
            "unit": "ns",
            "range": "± 26543.805409772507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2553030.195652174,
            "unit": "ns",
            "range": "± 62442.53712846337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3085461.066666667,
            "unit": "ns",
            "range": "± 50307.75650145337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2583996.846153846,
            "unit": "ns",
            "range": "± 27782.018353742627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3269799.3333333335,
            "unit": "ns",
            "range": "± 55380.028021541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972520.6176470588,
            "unit": "ns",
            "range": "± 44059.966057746846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1948811.02,
            "unit": "ns",
            "range": "± 78309.62278959446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1573477.5689655172,
            "unit": "ns",
            "range": "± 61697.483647715104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7546544.695652174,
            "unit": "ns",
            "range": "± 185540.14004728678"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34300.25252525252,
            "unit": "ns",
            "range": "± 5844.42739176569"
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
          "id": "e8bab4f85bdad8168f7881cf95d35cda7d6f1f13",
          "message": "chore: rebuild connection via seed peer",
          "timestamp": "2024-12-11T14:55:49+09:00",
          "tree_id": "18c9f91fcd2649c219d65b8127e518443705f1f3",
          "url": "https://github.com/planetarium/libplanet/commit/e8bab4f85bdad8168f7881cf95d35cda7d6f1f13"
        },
        "date": 1733897122298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10741415.5,
            "unit": "ns",
            "range": "± 148537.5521745259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28246792.807692308,
            "unit": "ns",
            "range": "± 332463.48179922573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71376369,
            "unit": "ns",
            "range": "± 379024.46696109587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144594801.73076922,
            "unit": "ns",
            "range": "± 542810.445231598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298267312.23333335,
            "unit": "ns",
            "range": "± 1690775.1709926457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109919.19230769231,
            "unit": "ns",
            "range": "± 6524.011897414569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195210.49315068492,
            "unit": "ns",
            "range": "± 9666.548854344277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169736.26923076922,
            "unit": "ns",
            "range": "± 2260.851246538427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2960213.888888889,
            "unit": "ns",
            "range": "± 58887.951303240385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2709661.4,
            "unit": "ns",
            "range": "± 46216.91580208639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13062.148936170213,
            "unit": "ns",
            "range": "± 1235.1967581494628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60783.90425531915,
            "unit": "ns",
            "range": "± 4038.3526985165754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50300.08064516129,
            "unit": "ns",
            "range": "± 1354.3276012888844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58053.57894736842,
            "unit": "ns",
            "range": "± 11298.621981104268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2494.2680412371133,
            "unit": "ns",
            "range": "± 343.7809233201162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12253.620689655172,
            "unit": "ns",
            "range": "± 1182.547135019871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3765403.49609375,
            "unit": "ns",
            "range": "± 5688.67876011248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220725.9032552084,
            "unit": "ns",
            "range": "± 2622.3916183274046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775585.7507512019,
            "unit": "ns",
            "range": "± 465.40956671853485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929298.8583233173,
            "unit": "ns",
            "range": "± 2695.673380486571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636762.5822916667,
            "unit": "ns",
            "range": "± 574.5872461430848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585460.214436849,
            "unit": "ns",
            "range": "± 410.9545268968344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2489988.875,
            "unit": "ns",
            "range": "± 47803.15481761289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2607127.763157895,
            "unit": "ns",
            "range": "± 55582.857997809704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3010215.4615384615,
            "unit": "ns",
            "range": "± 20937.723135588647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2673311.6666666665,
            "unit": "ns",
            "range": "± 40145.690079414264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3291168.3571428573,
            "unit": "ns",
            "range": "± 54729.9600666865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026480.652631579,
            "unit": "ns",
            "range": "± 80901.30410302136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1926241.28,
            "unit": "ns",
            "range": "± 72772.30003910296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1592869.1222222222,
            "unit": "ns",
            "range": "± 88597.47411366746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7810490.769230769,
            "unit": "ns",
            "range": "± 272465.9767419992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30808.444444444445,
            "unit": "ns",
            "range": "± 954.3887930261798"
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
          "id": "323abe7931a3f0be1678cee6794e1d9cb4679150",
          "message": "logging: add log when failed to receive multipart message",
          "timestamp": "2024-12-11T16:56:18+09:00",
          "tree_id": "c4762782f3d13ee0c2cb7fa841c45666f3a5c231",
          "url": "https://github.com/planetarium/libplanet/commit/323abe7931a3f0be1678cee6794e1d9cb4679150"
        },
        "date": 1733904281439,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10549848.866666667,
            "unit": "ns",
            "range": "± 60661.00144699542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27853205.533333335,
            "unit": "ns",
            "range": "± 135667.20772109262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69993394.21428572,
            "unit": "ns",
            "range": "± 342007.8637024815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141742224.6,
            "unit": "ns",
            "range": "± 901637.7640443132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293192018.65384614,
            "unit": "ns",
            "range": "± 419105.3110472049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107336.27464788733,
            "unit": "ns",
            "range": "± 5246.451634056199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192272.2142857143,
            "unit": "ns",
            "range": "± 6935.602643327572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163273.07692307694,
            "unit": "ns",
            "range": "± 2353.8798277715337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2890939.153846154,
            "unit": "ns",
            "range": "± 28280.0210538764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2797976.214285714,
            "unit": "ns",
            "range": "± 30447.918661161446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12791.252747252747,
            "unit": "ns",
            "range": "± 779.3703811183685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60617.77333333333,
            "unit": "ns",
            "range": "± 2754.925081501253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60184.307692307695,
            "unit": "ns",
            "range": "± 558.1053342358986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47148.23809523809,
            "unit": "ns",
            "range": "± 3185.4435227458603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2371.0315789473684,
            "unit": "ns",
            "range": "± 244.75904141392488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11815.604395604396,
            "unit": "ns",
            "range": "± 672.5182835865817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800637.602120536,
            "unit": "ns",
            "range": "± 5128.0267315703895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228377.795200893,
            "unit": "ns",
            "range": "± 1300.702561017935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769928.7461688702,
            "unit": "ns",
            "range": "± 1581.8928206687294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917909.58984375,
            "unit": "ns",
            "range": "± 2456.8740428181227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631737.641015625,
            "unit": "ns",
            "range": "± 799.7663332872798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565139.9074519231,
            "unit": "ns",
            "range": "± 390.1813787043318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2404008.3181818184,
            "unit": "ns",
            "range": "± 74941.81087953113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546166.8666666667,
            "unit": "ns",
            "range": "± 35112.22493024874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3011292.6333333333,
            "unit": "ns",
            "range": "± 32781.43331841248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2551850.1428571427,
            "unit": "ns",
            "range": "± 31417.543011844497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3194752.4375,
            "unit": "ns",
            "range": "± 60297.25836660541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983661.1369863014,
            "unit": "ns",
            "range": "± 47418.721051370005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913961.6666666667,
            "unit": "ns",
            "range": "± 63490.87844487391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561743.6739130435,
            "unit": "ns",
            "range": "± 75111.85331850026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7494528.454545454,
            "unit": "ns",
            "range": "± 207615.8976705979"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30732.090909090908,
            "unit": "ns",
            "range": "± 760.3512289343598"
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
          "id": "9af4ea2da47c0391dbf2c0d261a4b107f23c870e",
          "message": "logs: ReceiveMessage",
          "timestamp": "2024-12-12T10:48:12+09:00",
          "tree_id": "37ae023bde8a5c8bb388de481e61a2c8f4dd94dd",
          "url": "https://github.com/planetarium/libplanet/commit/9af4ea2da47c0391dbf2c0d261a4b107f23c870e"
        },
        "date": 1733968612004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10762997.9,
            "unit": "ns",
            "range": "± 73138.7910373148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27978045.066666666,
            "unit": "ns",
            "range": "± 120209.68785861923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71670307.9,
            "unit": "ns",
            "range": "± 368527.413493759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141761231.93333334,
            "unit": "ns",
            "range": "± 845792.7532863107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296256540.1333333,
            "unit": "ns",
            "range": "± 1422203.7556104795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109747.17415730337,
            "unit": "ns",
            "range": "± 6597.676425997677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195053.7641509434,
            "unit": "ns",
            "range": "± 7133.507892471933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165269.77586206896,
            "unit": "ns",
            "range": "± 4677.829379840242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2928655.285714286,
            "unit": "ns",
            "range": "± 39078.25105561832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2715137.923076923,
            "unit": "ns",
            "range": "± 15830.332805837967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13437.488636363636,
            "unit": "ns",
            "range": "± 838.3146611707034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61639.2875,
            "unit": "ns",
            "range": "± 3232.7969537454046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50066.807692307695,
            "unit": "ns",
            "range": "± 1144.05807612134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61201.927835051545,
            "unit": "ns",
            "range": "± 9004.862707457267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2718.561224489796,
            "unit": "ns",
            "range": "± 348.1477665402132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12024.622222222222,
            "unit": "ns",
            "range": "± 781.1605249836675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715390.940011161,
            "unit": "ns",
            "range": "± 10454.914296342215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195820.742466518,
            "unit": "ns",
            "range": "± 2453.656711364324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769750.5735212053,
            "unit": "ns",
            "range": "± 913.8170199349844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941841.9102957589,
            "unit": "ns",
            "range": "± 1520.3125362129629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618878.4791434152,
            "unit": "ns",
            "range": "± 585.8351440320513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579506.33515625,
            "unit": "ns",
            "range": "± 1400.2579800745796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2376682.533333333,
            "unit": "ns",
            "range": "± 39301.120688976844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581993.785714286,
            "unit": "ns",
            "range": "± 23585.629703041872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3032178.4,
            "unit": "ns",
            "range": "± 40857.58894851377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2612759.1428571427,
            "unit": "ns",
            "range": "± 39328.818186897275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3329904.5,
            "unit": "ns",
            "range": "± 57764.52549445897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992662.1449275363,
            "unit": "ns",
            "range": "± 45999.20514571432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933172.724489796,
            "unit": "ns",
            "range": "± 76859.05862715676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579526.4268292682,
            "unit": "ns",
            "range": "± 79007.20961976818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7739711.722222222,
            "unit": "ns",
            "range": "± 255504.9735364529"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31032.23076923077,
            "unit": "ns",
            "range": "± 822.6865530780144"
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
          "id": "1d57bcebcfcccdbb0d3625ed69001e7995ad8aa4",
          "message": "logs: frames",
          "timestamp": "2024-12-12T11:19:26+09:00",
          "tree_id": "d4d1c291bc792c56419bc282ddcfa3c4ec54d0bc",
          "url": "https://github.com/planetarium/libplanet/commit/1d57bcebcfcccdbb0d3625ed69001e7995ad8aa4"
        },
        "date": 1733970484162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10784788.133333333,
            "unit": "ns",
            "range": "± 181823.8196959851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28104419.5,
            "unit": "ns",
            "range": "± 140807.14058598023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70914220.16666667,
            "unit": "ns",
            "range": "± 284308.02418219036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148075935.13333333,
            "unit": "ns",
            "range": "± 588095.7738932697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292123707.8666667,
            "unit": "ns",
            "range": "± 2085710.582596111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107991.26966292135,
            "unit": "ns",
            "range": "± 7076.060480695142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191958.82539682538,
            "unit": "ns",
            "range": "± 8134.274005592281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168898.02564102566,
            "unit": "ns",
            "range": "± 5795.559922485032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2908252.5714285714,
            "unit": "ns",
            "range": "± 27516.004008057356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2758616.533333333,
            "unit": "ns",
            "range": "± 30496.23704859027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12589.08988764045,
            "unit": "ns",
            "range": "± 866.5820744905795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59182.05,
            "unit": "ns",
            "range": "± 2956.173428478192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49487.769230769234,
            "unit": "ns",
            "range": "± 813.6459256382302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51664.19587628866,
            "unit": "ns",
            "range": "± 7618.427371674735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2720.6145833333335,
            "unit": "ns",
            "range": "± 446.7066945356678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11994.212765957447,
            "unit": "ns",
            "range": "± 1130.6724673562317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744399.5920758927,
            "unit": "ns",
            "range": "± 4093.5334113156027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204699.1138392857,
            "unit": "ns",
            "range": "± 1888.4573425824456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767631.9107421875,
            "unit": "ns",
            "range": "± 1367.1079348693559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932633.5939002405,
            "unit": "ns",
            "range": "± 1233.2123856396884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619658.4142127404,
            "unit": "ns",
            "range": "± 343.40400428345384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568819.8877604167,
            "unit": "ns",
            "range": "± 699.2669680041406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2407051.466666667,
            "unit": "ns",
            "range": "± 40116.56622156891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2488070.6,
            "unit": "ns",
            "range": "± 43303.09766352914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2987043.214285714,
            "unit": "ns",
            "range": "± 21546.318644790743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2551960.033333333,
            "unit": "ns",
            "range": "± 42970.27088725192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3296583.0714285714,
            "unit": "ns",
            "range": "± 46235.55699885647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981444.6594202898,
            "unit": "ns",
            "range": "± 46848.253411671714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913997.027027027,
            "unit": "ns",
            "range": "± 64067.66478605364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581723.8275862068,
            "unit": "ns",
            "range": "± 86095.75726442647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7655173.44117647,
            "unit": "ns",
            "range": "± 246402.15698890362"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30177.03846153846,
            "unit": "ns",
            "range": "± 804.1131502851688"
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
          "id": "4778de3804f90328ce6ac25da8c86f586d3cd4e3",
          "message": "logs: frames",
          "timestamp": "2024-12-12T11:23:40+09:00",
          "tree_id": "24ee351552c4a575cd39f297454b53df3d2e8260",
          "url": "https://github.com/planetarium/libplanet/commit/4778de3804f90328ce6ac25da8c86f586d3cd4e3"
        },
        "date": 1733970729505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10545744.1,
            "unit": "ns",
            "range": "± 54817.409381118545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27059226.384615384,
            "unit": "ns",
            "range": "± 82907.49708112296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69663689.46666667,
            "unit": "ns",
            "range": "± 348441.201457468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140859647.2,
            "unit": "ns",
            "range": "± 590733.2536977364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293105106.14285713,
            "unit": "ns",
            "range": "± 821465.5090330336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109522.84444444445,
            "unit": "ns",
            "range": "± 6233.062556647505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191188.14150943398,
            "unit": "ns",
            "range": "± 7652.24264788369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168404.5,
            "unit": "ns",
            "range": "± 2945.4983057592767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2859662.5,
            "unit": "ns",
            "range": "± 31044.238514144246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2726113.5833333335,
            "unit": "ns",
            "range": "± 18849.085342932467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12616.7,
            "unit": "ns",
            "range": "± 715.1248056391619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65276.927835051545,
            "unit": "ns",
            "range": "± 5448.959415658001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59204.34444444445,
            "unit": "ns",
            "range": "± 3287.154775862312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50553.654639175256,
            "unit": "ns",
            "range": "± 7579.150112232525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2495.9791666666665,
            "unit": "ns",
            "range": "± 303.073587700089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12241.806451612903,
            "unit": "ns",
            "range": "± 718.1250081630833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3857176.814453125,
            "unit": "ns",
            "range": "± 5486.524067183024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204545.0494791667,
            "unit": "ns",
            "range": "± 2278.293797712244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780315.6805989583,
            "unit": "ns",
            "range": "± 2281.32679042098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010578.310267857,
            "unit": "ns",
            "range": "± 3893.653789674924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611940.896875,
            "unit": "ns",
            "range": "± 812.1882680490438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 550350.9146484375,
            "unit": "ns",
            "range": "± 1411.3843303936467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2381555.8181818184,
            "unit": "ns",
            "range": "± 58372.943144867546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2488010.65,
            "unit": "ns",
            "range": "± 53552.49557925185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3017051.8,
            "unit": "ns",
            "range": "± 55062.172037226635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2550347.3333333335,
            "unit": "ns",
            "range": "± 34662.41320357309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3313024.6666666665,
            "unit": "ns",
            "range": "± 60919.989790669184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015629.876344086,
            "unit": "ns",
            "range": "± 83396.31848027435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899019.65,
            "unit": "ns",
            "range": "± 66697.78830552568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569647.2808988765,
            "unit": "ns",
            "range": "± 102554.95771115167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7360830.1,
            "unit": "ns",
            "range": "± 137243.33712478494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30507.962962962964,
            "unit": "ns",
            "range": "± 831.2451957747338"
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
          "id": "87973e47176007bcc71d1faab68416d715c2e1af",
          "message": "feat: force reply Pong",
          "timestamp": "2024-12-12T14:41:22+09:00",
          "tree_id": "dbd6ad137bbecd6caaf254e3b46ec6176e2974da",
          "url": "https://github.com/planetarium/libplanet/commit/87973e47176007bcc71d1faab68416d715c2e1af"
        },
        "date": 1733982595498,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11118157.57142857,
            "unit": "ns",
            "range": "± 114290.18922661754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28163952,
            "unit": "ns",
            "range": "± 92617.36827668987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72091311.46666667,
            "unit": "ns",
            "range": "± 546835.570278393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142651580.6,
            "unit": "ns",
            "range": "± 690591.6575076143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 296657574.8333333,
            "unit": "ns",
            "range": "± 1643245.8317350217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107497.62765957447,
            "unit": "ns",
            "range": "± 7051.300650225595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195366.12765957447,
            "unit": "ns",
            "range": "± 12163.827502272186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165831.13043478262,
            "unit": "ns",
            "range": "± 4094.727888665306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2906998.1666666665,
            "unit": "ns",
            "range": "± 20450.79697417164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785795.8571428573,
            "unit": "ns",
            "range": "± 22250.027514614423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12963.34065934066,
            "unit": "ns",
            "range": "± 1245.8833119944368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80492.72,
            "unit": "ns",
            "range": "± 14659.588580691872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50494.78301886792,
            "unit": "ns",
            "range": "± 1938.2817269363416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64626.82653061225,
            "unit": "ns",
            "range": "± 10966.132366890108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3157.1473684210528,
            "unit": "ns",
            "range": "± 402.37560436448183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21720.18,
            "unit": "ns",
            "range": "± 3947.9262038071415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750678.6875,
            "unit": "ns",
            "range": "± 4580.2308983510065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214509.372265625,
            "unit": "ns",
            "range": "± 2451.8357298267692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754214.9244791666,
            "unit": "ns",
            "range": "± 982.0695886144404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958514.8856026786,
            "unit": "ns",
            "range": "± 4214.137037127035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617888.1802734375,
            "unit": "ns",
            "range": "± 587.7075555405245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580717.6535993303,
            "unit": "ns",
            "range": "± 514.5320497737071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415008.382352941,
            "unit": "ns",
            "range": "± 47883.99672761552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2571181.3714285716,
            "unit": "ns",
            "range": "± 84385.89298367412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3053179,
            "unit": "ns",
            "range": "± 55142.60550867826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2662916.625,
            "unit": "ns",
            "range": "± 68029.93745775043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3312364.75,
            "unit": "ns",
            "range": "± 70685.87769016487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973324.2272727273,
            "unit": "ns",
            "range": "± 43921.58173759419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2026697.46875,
            "unit": "ns",
            "range": "± 61642.375114371825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590694.4487179487,
            "unit": "ns",
            "range": "± 81910.19029553395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7746239.5121951215,
            "unit": "ns",
            "range": "± 274622.78025530966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30974.236842105263,
            "unit": "ns",
            "range": "± 659.2491387181215"
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
          "id": "d789611f32ed336db3841a704ea16459735c44ce",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-12-12T19:29:35+09:00",
          "tree_id": "1bbdb3cef786ee346da06b34cc1838945d8e792f",
          "url": "https://github.com/planetarium/libplanet/commit/d789611f32ed336db3841a704ea16459735c44ce"
        },
        "date": 1733999892385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10928874.133333333,
            "unit": "ns",
            "range": "± 52641.09675891026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28318497.066666666,
            "unit": "ns",
            "range": "± 153900.3600596673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72488665.93333334,
            "unit": "ns",
            "range": "± 469561.93946736393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141089831,
            "unit": "ns",
            "range": "± 635928.2550206205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293307365.0714286,
            "unit": "ns",
            "range": "± 1765201.6093238455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108885.03260869565,
            "unit": "ns",
            "range": "± 6318.098000156718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190520.693877551,
            "unit": "ns",
            "range": "± 7520.200618456713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165992.44444444444,
            "unit": "ns",
            "range": "± 3453.666801978003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2861746.4285714286,
            "unit": "ns",
            "range": "± 28653.2588661107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2748168.125,
            "unit": "ns",
            "range": "± 51563.14765783149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13431.897727272728,
            "unit": "ns",
            "range": "± 1088.287044198123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60531.62365591398,
            "unit": "ns",
            "range": "± 4391.138569085765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50529.03333333333,
            "unit": "ns",
            "range": "± 1468.3349350911717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55124.984210526316,
            "unit": "ns",
            "range": "± 7907.088804281295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2450.2604166666665,
            "unit": "ns",
            "range": "± 286.2565005390746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14391,
            "unit": "ns",
            "range": "± 2183.1808582418944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3757795.66796875,
            "unit": "ns",
            "range": "± 3926.9943780246012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221763.3481770833,
            "unit": "ns",
            "range": "± 2799.7899527409795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776647.9598214285,
            "unit": "ns",
            "range": "± 882.2898892783587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948887.4666666666,
            "unit": "ns",
            "range": "± 4781.824427822639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619624.255452474,
            "unit": "ns",
            "range": "± 421.5776692769468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578187.7802036831,
            "unit": "ns",
            "range": "± 545.227539494396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385245.904761905,
            "unit": "ns",
            "range": "± 53792.31665387238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528438.5,
            "unit": "ns",
            "range": "± 72655.16129095225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3145703,
            "unit": "ns",
            "range": "± 45893.34945101886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2577998.45,
            "unit": "ns",
            "range": "± 58845.308675395965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3254431.5,
            "unit": "ns",
            "range": "± 72065.73569995792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033160.125,
            "unit": "ns",
            "range": "± 105846.84904722632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1943653.3404255318,
            "unit": "ns",
            "range": "± 74969.31253875658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1576235.972972973,
            "unit": "ns",
            "range": "± 77110.78742138373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7582915.363636363,
            "unit": "ns",
            "range": "± 180949.55049807864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30648.08,
            "unit": "ns",
            "range": "± 822.9515437334894"
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
          "id": "1f4e1c99d1172dc8b13aaa7897bf9f0488bef421",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-12-12T19:32:15+09:00",
          "tree_id": "d172abcbeb7bc6aaa678a15c2dbafdba9893de9d",
          "url": "https://github.com/planetarium/libplanet/commit/1f4e1c99d1172dc8b13aaa7897bf9f0488bef421"
        },
        "date": 1734000063568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10774777.366666667,
            "unit": "ns",
            "range": "± 88154.48651970235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27873657.785714287,
            "unit": "ns",
            "range": "± 97929.71334520298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71603739.73333333,
            "unit": "ns",
            "range": "± 389820.584367341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142192830.57142857,
            "unit": "ns",
            "range": "± 857711.3150352481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290744434.4,
            "unit": "ns",
            "range": "± 613507.4489256485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121404.29896907216,
            "unit": "ns",
            "range": "± 10120.545760116056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193279.79166666666,
            "unit": "ns",
            "range": "± 9476.916753521105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165584.92307692306,
            "unit": "ns",
            "range": "± 2584.831634153969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2963099,
            "unit": "ns",
            "range": "± 36199.53823972387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2677767.714285714,
            "unit": "ns",
            "range": "± 36451.543444010014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13054.10989010989,
            "unit": "ns",
            "range": "± 1163.2756380205897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59853.98924731183,
            "unit": "ns",
            "range": "± 3791.9973671525427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53641.19191919192,
            "unit": "ns",
            "range": "± 5797.1185940433725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54440.278350515466,
            "unit": "ns",
            "range": "± 8957.004657369036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652,
            "unit": "ns",
            "range": "± 436.837436853298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12587.212765957447,
            "unit": "ns",
            "range": "± 1688.050551352447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3788466.4969951925,
            "unit": "ns",
            "range": "± 3721.723520329604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218173.9828404018,
            "unit": "ns",
            "range": "± 812.8768731712483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772793.4416852678,
            "unit": "ns",
            "range": "± 1022.804245966544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981640.255859375,
            "unit": "ns",
            "range": "± 2995.338746320522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618455.9397786459,
            "unit": "ns",
            "range": "± 1132.4594293717757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571063.8935546875,
            "unit": "ns",
            "range": "± 1382.5111947779321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2447169.1875,
            "unit": "ns",
            "range": "± 40951.34790979616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589120.125,
            "unit": "ns",
            "range": "± 50585.23175641286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3030564.2,
            "unit": "ns",
            "range": "± 40842.890404573474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2591042.0384615385,
            "unit": "ns",
            "range": "± 33880.25301365429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3278042,
            "unit": "ns",
            "range": "± 52085.52295161159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011697.6105263158,
            "unit": "ns",
            "range": "± 92214.91182838549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1897824.0882352942,
            "unit": "ns",
            "range": "± 60978.23662704173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558759.5662650603,
            "unit": "ns",
            "range": "± 80903.24894410618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7687020.787878788,
            "unit": "ns",
            "range": "± 239071.80057591456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31053.203703703704,
            "unit": "ns",
            "range": "± 847.8237668296046"
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
          "id": "c1a205dcda815dbc48f332674fd5610c1ca40e1b",
          "message": "refactor: apply suggestions from the review",
          "timestamp": "2024-12-12T19:35:52+09:00",
          "tree_id": "7bdfe41bb32daef4440e476c233e8ed9384441a0",
          "url": "https://github.com/planetarium/libplanet/commit/c1a205dcda815dbc48f332674fd5610c1ca40e1b"
        },
        "date": 1734000302980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10764223.133333333,
            "unit": "ns",
            "range": "± 71535.35937948716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27741292,
            "unit": "ns",
            "range": "± 126172.72060034335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70805182.38461539,
            "unit": "ns",
            "range": "± 226972.09725960385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141691967.23333332,
            "unit": "ns",
            "range": "± 508488.7943504004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295599366.8,
            "unit": "ns",
            "range": "± 994634.4215739483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108783.55952380953,
            "unit": "ns",
            "range": "± 5824.969361005703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197440,
            "unit": "ns",
            "range": "± 6521.432289850989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164641.35714285713,
            "unit": "ns",
            "range": "± 1754.5286725036337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2895626.6666666665,
            "unit": "ns",
            "range": "± 40917.700467203795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2796920.533333333,
            "unit": "ns",
            "range": "± 41999.661039221784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12972.157894736842,
            "unit": "ns",
            "range": "± 1241.847048482746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59856.625,
            "unit": "ns",
            "range": "± 3125.334442356894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48967.67164179104,
            "unit": "ns",
            "range": "± 801.4322101818473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50277.4693877551,
            "unit": "ns",
            "range": "± 7008.335713511449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2374.5102040816328,
            "unit": "ns",
            "range": "± 308.5118669674665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11983.798850574713,
            "unit": "ns",
            "range": "± 666.7940673509908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3756444.556082589,
            "unit": "ns",
            "range": "± 7702.563262677921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208539.5603966345,
            "unit": "ns",
            "range": "± 1705.601026792658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 795499.3352864584,
            "unit": "ns",
            "range": "± 2023.310772394906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990344.4751674107,
            "unit": "ns",
            "range": "± 3475.66543388833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 661951.3827473958,
            "unit": "ns",
            "range": "± 1383.7264362915569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568573.6194196428,
            "unit": "ns",
            "range": "± 654.7967847828096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424956.8666666667,
            "unit": "ns",
            "range": "± 28549.03093393306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507435.6923076925,
            "unit": "ns",
            "range": "± 63013.50345236756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3022145,
            "unit": "ns",
            "range": "± 26632.53275167855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2586530.3571428573,
            "unit": "ns",
            "range": "± 40580.51876465839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3258079.611111111,
            "unit": "ns",
            "range": "± 67099.64744111717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983804.92,
            "unit": "ns",
            "range": "± 49217.350587830355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1882970.8620689656,
            "unit": "ns",
            "range": "± 53967.78791671151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1539536.109375,
            "unit": "ns",
            "range": "± 64801.69078754315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7585460,
            "unit": "ns",
            "range": "± 231641.19185011534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30492.755102040817,
            "unit": "ns",
            "range": "± 1129.8341421534005"
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
          "id": "b17d8aaa556ee4710c1660d5233b29ca4c388c8a",
          "message": "test: Fix query test failure for validator power",
          "timestamp": "2024-12-12T20:17:19+09:00",
          "tree_id": "9aff13e18a69500bd3bb46426299fc7cd1dbb0cd",
          "url": "https://github.com/planetarium/libplanet/commit/b17d8aaa556ee4710c1660d5233b29ca4c388c8a"
        },
        "date": 1734002844057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11011743.642857144,
            "unit": "ns",
            "range": "± 66745.98956504042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27919753.566666666,
            "unit": "ns",
            "range": "± 210000.124490598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70606520.1,
            "unit": "ns",
            "range": "± 344582.0421369302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140415423.5,
            "unit": "ns",
            "range": "± 525741.9538057985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291411327.9,
            "unit": "ns",
            "range": "± 1257284.3072770434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107420.83950617284,
            "unit": "ns",
            "range": "± 5626.753800942401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195612.10638297873,
            "unit": "ns",
            "range": "± 7505.131511850794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167598.875,
            "unit": "ns",
            "range": "± 2551.2450261261333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2882624.533333333,
            "unit": "ns",
            "range": "± 49618.97656695854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2730569,
            "unit": "ns",
            "range": "± 32042.95222041814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12671.833333333334,
            "unit": "ns",
            "range": "± 936.4828084710354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60096.693181818184,
            "unit": "ns",
            "range": "± 4709.583037545806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50221.142857142855,
            "unit": "ns",
            "range": "± 884.1291767037785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53249.16494845361,
            "unit": "ns",
            "range": "± 8650.226380323345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2633.3673469387754,
            "unit": "ns",
            "range": "± 361.496050590997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12014.272727272728,
            "unit": "ns",
            "range": "± 941.7315151379245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3668571.1682477677,
            "unit": "ns",
            "range": "± 3452.356978635579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211622.9328125,
            "unit": "ns",
            "range": "± 2252.6365391199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775439.3990234375,
            "unit": "ns",
            "range": "± 2086.339589870654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971135.51171875,
            "unit": "ns",
            "range": "± 2730.057477707088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616567.7037760416,
            "unit": "ns",
            "range": "± 1058.606810075692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580633.732561384,
            "unit": "ns",
            "range": "± 709.6306082127896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2371390.3571428573,
            "unit": "ns",
            "range": "± 32220.18492189483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548112.7333333334,
            "unit": "ns",
            "range": "± 42568.30052224755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3034054.285714286,
            "unit": "ns",
            "range": "± 37861.21081900734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2563781.3333333335,
            "unit": "ns",
            "range": "± 41410.50985587849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3218935.8333333335,
            "unit": "ns",
            "range": "± 17380.970931313117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 973786.7658227849,
            "unit": "ns",
            "range": "± 50283.83706716964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1896185.68,
            "unit": "ns",
            "range": "± 49138.00793744085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570410.6621621621,
            "unit": "ns",
            "range": "± 73703.26361842867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7580555.736842105,
            "unit": "ns",
            "range": "± 98684.37592470818"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30623.604166666668,
            "unit": "ns",
            "range": "± 1210.9458715450733"
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
          "id": "b17d8aaa556ee4710c1660d5233b29ca4c388c8a",
          "message": "test: Fix query test failure for validator power",
          "timestamp": "2024-12-12T20:17:19+09:00",
          "tree_id": "9aff13e18a69500bd3bb46426299fc7cd1dbb0cd",
          "url": "https://github.com/planetarium/libplanet/commit/b17d8aaa556ee4710c1660d5233b29ca4c388c8a"
        },
        "date": 1734058621170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10735631.642857144,
            "unit": "ns",
            "range": "± 67509.19703795026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27842935.466666665,
            "unit": "ns",
            "range": "± 107622.00673578845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72137302.53333333,
            "unit": "ns",
            "range": "± 537339.4537676036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141622516,
            "unit": "ns",
            "range": "± 636243.4213519001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299339999.53333336,
            "unit": "ns",
            "range": "± 1703381.8167926525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111380.25555555556,
            "unit": "ns",
            "range": "± 6730.711247307503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193446.98611111112,
            "unit": "ns",
            "range": "± 9495.954107316184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168390.57575757575,
            "unit": "ns",
            "range": "± 5214.575330445801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2957017.9285714286,
            "unit": "ns",
            "range": "± 44344.34621574883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808859.466666667,
            "unit": "ns",
            "range": "± 45324.66605009221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13357.344086021505,
            "unit": "ns",
            "range": "± 1227.4696444898311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67774.67708333333,
            "unit": "ns",
            "range": "± 7185.008538975685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60382.47422680412,
            "unit": "ns",
            "range": "± 4865.012193999757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57192.81958762887,
            "unit": "ns",
            "range": "± 9376.502581304847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3491.6288659793813,
            "unit": "ns",
            "range": "± 308.1540577775056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12251.511111111111,
            "unit": "ns",
            "range": "± 1027.9842443426498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722926.2424665177,
            "unit": "ns",
            "range": "± 4209.356391931423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205424.5665364584,
            "unit": "ns",
            "range": "± 1970.6944931843518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 800582.4143629808,
            "unit": "ns",
            "range": "± 943.0539128512083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943720.1001302083,
            "unit": "ns",
            "range": "± 2057.4809068517275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614229.4449869791,
            "unit": "ns",
            "range": "± 1240.7309867943782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580426.2465122768,
            "unit": "ns",
            "range": "± 636.7534339774762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2451616.5,
            "unit": "ns",
            "range": "± 47153.18209269303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2556197.652173913,
            "unit": "ns",
            "range": "± 55300.15448491383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3019281.3846153845,
            "unit": "ns",
            "range": "± 31188.811462174654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2537040.9285714286,
            "unit": "ns",
            "range": "± 40881.28346898405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3260702.9615384615,
            "unit": "ns",
            "range": "± 49744.388064744526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999786.6559139785,
            "unit": "ns",
            "range": "± 62273.20385249366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925703.3859649124,
            "unit": "ns",
            "range": "± 82333.11395760221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1576104.105882353,
            "unit": "ns",
            "range": "± 98547.99532751535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7748877.12,
            "unit": "ns",
            "range": "± 201037.0926312107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30409.75641025641,
            "unit": "ns",
            "range": "± 1059.8301184114546"
          }
        ]
      }
    ]
  }
}