window.BENCHMARK_DATA = {
  "lastUpdate": 1733551877090,
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
      }
    ]
  }
}