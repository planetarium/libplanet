window.BENCHMARK_DATA = {
  "lastUpdate": 1675239714994,
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
          "id": "22b56dc3b389fb8531c06779a818dfce5c4894de",
          "message": "Merge pull request #2679 from riemannulus/fix/ci/benchmark/cache-problem\n\nFix benchmark problem",
          "timestamp": "2022-12-28T22:28:36+09:00",
          "tree_id": "2466dfb37280997af5192c08b774f5a7a134dd1b",
          "url": "https://github.com/planetarium/libplanet/commit/22b56dc3b389fb8531c06779a818dfce5c4894de"
        },
        "date": 1672235103149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5920841.014884869,
            "unit": "ns",
            "range": "± 338768.7523083809"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7497152.64,
            "unit": "ns",
            "range": "± 193618.17736115758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33486203.86585366,
            "unit": "ns",
            "range": "± 1765827.1459679813"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7535462.305263158,
            "unit": "ns",
            "range": "± 431563.18790655147"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39110808.06,
            "unit": "ns",
            "range": "± 2868523.7469655345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129573.03191489361,
            "unit": "ns",
            "range": "± 9619.407976386841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114055.59340659341,
            "unit": "ns",
            "range": "± 10174.228773368768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246124.48314606742,
            "unit": "ns",
            "range": "± 23231.344966598444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222595.8734177215,
            "unit": "ns",
            "range": "± 11531.227906647824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4743764.2,
            "unit": "ns",
            "range": "± 53998.66582240713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12039775.174603175,
            "unit": "ns",
            "range": "± 549182.361075948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24104.494505494506,
            "unit": "ns",
            "range": "± 2453.446036241118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62628.051546391755,
            "unit": "ns",
            "range": "± 7823.649572465012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47153.03296703297,
            "unit": "ns",
            "range": "± 2840.704311925123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109356.32631578947,
            "unit": "ns",
            "range": "± 17963.156338083456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5730.948453608247,
            "unit": "ns",
            "range": "± 599.0312904169743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22371.869565217392,
            "unit": "ns",
            "range": "± 1871.2357391817359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6814924.516145834,
            "unit": "ns",
            "range": "± 127254.58292993877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2137151.8552246094,
            "unit": "ns",
            "range": "± 40123.93260488347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1713414.0691236414,
            "unit": "ns",
            "range": "± 42561.96821879578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3003011.241927083,
            "unit": "ns",
            "range": "± 40543.5674617477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973634.6817708333,
            "unit": "ns",
            "range": "± 12120.7279022953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906649.2727864584,
            "unit": "ns",
            "range": "± 13402.20006352597"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "892107b8521ea96557f73b801872329249df8b9b",
          "message": "Merge pull request #2682 from greymistcube/fix/relax-benchmark-threshold\n\n🔧 Relax benchmark alert threshold to 150%",
          "timestamp": "2022-12-29T00:28:05+09:00",
          "tree_id": "69481e12323d163c1f0d3e0fdf112d3578b22a92",
          "url": "https://github.com/planetarium/libplanet/commit/892107b8521ea96557f73b801872329249df8b9b"
        },
        "date": 1672242030029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4574808.939583333,
            "unit": "ns",
            "range": "± 67957.86771936057"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6251736.933333334,
            "unit": "ns",
            "range": "± 51925.357447654285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25924599.666666668,
            "unit": "ns",
            "range": "± 224348.71415170582"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6423663.414634147,
            "unit": "ns",
            "range": "± 223544.74399021058"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29381905.466666665,
            "unit": "ns",
            "range": "± 361389.8885807536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112613.73737373737,
            "unit": "ns",
            "range": "± 7400.852479283692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96461.18478260869,
            "unit": "ns",
            "range": "± 7278.080339417711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211253.87142857144,
            "unit": "ns",
            "range": "± 10224.822239227904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204526.36,
            "unit": "ns",
            "range": "± 8254.565346002693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3847982.3333333335,
            "unit": "ns",
            "range": "± 23850.123290087642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9518738,
            "unit": "ns",
            "range": "± 31022.843518929723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19449.329411764706,
            "unit": "ns",
            "range": "± 1461.773909202326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57892.085106382976,
            "unit": "ns",
            "range": "± 7222.281648325049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50841.09574468085,
            "unit": "ns",
            "range": "± 2988.4575158545795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108154.27083333333,
            "unit": "ns",
            "range": "± 16139.399241072117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6709.3125,
            "unit": "ns",
            "range": "± 694.497778595212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19205.764705882353,
            "unit": "ns",
            "range": "± 1895.9913391846771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5921364.928645833,
            "unit": "ns",
            "range": "± 18107.350088459127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1814179.5432692308,
            "unit": "ns",
            "range": "± 1161.6306130279263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366938.5579927885,
            "unit": "ns",
            "range": "± 538.5740609661539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552674.484114583,
            "unit": "ns",
            "range": "± 1964.5532251794227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830399.8778645833,
            "unit": "ns",
            "range": "± 1222.6200363211008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741229.7639973959,
            "unit": "ns",
            "range": "± 1664.0380201817622"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/planetarium/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672248192953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6131781.181344697,
            "unit": "ns",
            "range": "± 380875.6118312437"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7989758.055555556,
            "unit": "ns",
            "range": "± 165000.91219087323"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34528650.12857143,
            "unit": "ns",
            "range": "± 1667124.963865723"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8458439.37113402,
            "unit": "ns",
            "range": "± 638917.4059355097"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39467543.083333336,
            "unit": "ns",
            "range": "± 1873077.3445999045"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129391.3875,
            "unit": "ns",
            "range": "± 6725.885230888371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124588.41836734694,
            "unit": "ns",
            "range": "± 11832.24410216707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264313.25,
            "unit": "ns",
            "range": "± 20044.241811401997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224584.36842105264,
            "unit": "ns",
            "range": "± 12851.563196625715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4846202.538461538,
            "unit": "ns",
            "range": "± 31506.878552191807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11801275.4,
            "unit": "ns",
            "range": "± 147264.60143846035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27999.333333333332,
            "unit": "ns",
            "range": "± 2538.619525293796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62170.270833333336,
            "unit": "ns",
            "range": "± 6708.615198665963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47283.63953488372,
            "unit": "ns",
            "range": "± 4650.749330927704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108349.793814433,
            "unit": "ns",
            "range": "± 21484.780684018584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6468.916666666667,
            "unit": "ns",
            "range": "± 694.136823561869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26885.23076923077,
            "unit": "ns",
            "range": "± 3157.3325699496654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6823144.811448317,
            "unit": "ns",
            "range": "± 277624.42058944295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2236179.2065104167,
            "unit": "ns",
            "range": "± 5610.452276798454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609026.3623046875,
            "unit": "ns",
            "range": "± 12567.783211482958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3112558.9466145835,
            "unit": "ns",
            "range": "± 30657.69881433958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967659.9416015625,
            "unit": "ns",
            "range": "± 14390.487743795778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905559.11328125,
            "unit": "ns",
            "range": "± 8079.512311432206"
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
          "id": "d0dff731200fbb4de60d43ddcf9d61865ce4b647",
          "message": "Merge pull request #2693 from greymistcube/feature/apv-options\n\nIntroduce `AppProtocolVersionOptions`",
          "timestamp": "2023-01-05T14:12:47+09:00",
          "tree_id": "cf69d928f8349be78f52307259b762739850e6d8",
          "url": "https://github.com/planetarium/libplanet/commit/d0dff731200fbb4de60d43ddcf9d61865ce4b647"
        },
        "date": 1672896180273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4210826.3362630205,
            "unit": "ns",
            "range": "± 6983.797618443924"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5428834.406666666,
            "unit": "ns",
            "range": "± 273178.03595507995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23910280.466666665,
            "unit": "ns",
            "range": "± 244722.66472328766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5993529.671641791,
            "unit": "ns",
            "range": "± 274304.6921656142"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27304983.647058822,
            "unit": "ns",
            "range": "± 446765.8502074858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103768.28571428571,
            "unit": "ns",
            "range": "± 3539.143442504162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82087.73255813954,
            "unit": "ns",
            "range": "± 4377.452539936679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188747.7142857143,
            "unit": "ns",
            "range": "± 8539.4393625535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173329.21739130435,
            "unit": "ns",
            "range": "± 4196.3079221937005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3674945.8666666667,
            "unit": "ns",
            "range": "± 32333.26522741968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9118698.466666667,
            "unit": "ns",
            "range": "± 44124.546242695906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15968.958762886597,
            "unit": "ns",
            "range": "± 1635.835495737612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45313.16216216216,
            "unit": "ns",
            "range": "± 1835.1290725911442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38686.46666666667,
            "unit": "ns",
            "range": "± 458.0592392547788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67646.68539325842,
            "unit": "ns",
            "range": "± 5684.039523876375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4090,
            "unit": "ns",
            "range": "± 91.19095061289914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15679.076923076924,
            "unit": "ns",
            "range": "± 1205.2208947442812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5972850.106026785,
            "unit": "ns",
            "range": "± 16215.708860263754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895948.6371372768,
            "unit": "ns",
            "range": "± 4128.348631083546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339723.2801983173,
            "unit": "ns",
            "range": "± 2697.8860879866043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573543.1194196427,
            "unit": "ns",
            "range": "± 4989.579179813335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810167.4686197917,
            "unit": "ns",
            "range": "± 837.4350132931963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726902.4716145833,
            "unit": "ns",
            "range": "± 1995.947917629752"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a289e1a5d890de8a3b5296f48896bb1167e10b5d",
          "message": "Merge pull request #2690 from longfin/port/0.45.4\n\nPort/0.45.4 & remove `workers` option for `NetMQTransport`",
          "timestamp": "2023-01-10T16:08:09+09:00",
          "tree_id": "ec672276fc11e3274ad9cbe3398393b71987b2cc",
          "url": "https://github.com/planetarium/libplanet/commit/a289e1a5d890de8a3b5296f48896bb1167e10b5d"
        },
        "date": 1673335245428,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5216998.537207032,
            "unit": "ns",
            "range": "± 270914.5076569143"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6453053.2105263155,
            "unit": "ns",
            "range": "± 139750.3373697295"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28786212.714285713,
            "unit": "ns",
            "range": "± 432513.92605048505"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6807812.52631579,
            "unit": "ns",
            "range": "± 232458.34135170493"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31527437.4,
            "unit": "ns",
            "range": "± 588270.6003738901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114993.74193548386,
            "unit": "ns",
            "range": "± 5199.649710570782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101635.875,
            "unit": "ns",
            "range": "± 8273.55157419485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218417.83018867925,
            "unit": "ns",
            "range": "± 9076.948781509569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204830.3417721519,
            "unit": "ns",
            "range": "± 10634.933741654744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4084117.466666667,
            "unit": "ns",
            "range": "± 49920.3755750333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10306935.2,
            "unit": "ns",
            "range": "± 162052.89276926135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22754.733333333334,
            "unit": "ns",
            "range": "± 2469.821013393936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58298.83870967742,
            "unit": "ns",
            "range": "± 5127.121372810356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43637.4,
            "unit": "ns",
            "range": "± 1293.2991653266008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102653.89772727272,
            "unit": "ns",
            "range": "± 13369.305564062859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5708.309278350515,
            "unit": "ns",
            "range": "± 724.7579245402211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22774.85106382979,
            "unit": "ns",
            "range": "± 2441.8902072024275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6120917.233258928,
            "unit": "ns",
            "range": "± 19708.72592592227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884245.8931790865,
            "unit": "ns",
            "range": "± 4229.532575539529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363355.9076822917,
            "unit": "ns",
            "range": "± 2462.7162310300932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2600601.203385417,
            "unit": "ns",
            "range": "± 1754.931420501528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818350.447265625,
            "unit": "ns",
            "range": "± 411.0175522653549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755182.495718149,
            "unit": "ns",
            "range": "± 302.59223235824703"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "054d1c78a807fc6667270d7ee47e3096fa020361",
          "message": "Merge pull request #2699 from dahlia/cli-chain-ids",
          "timestamp": "2023-01-10T17:45:42+09:00",
          "tree_id": "9e7b12be880e83d8210f37b157f7dc8633b8ec26",
          "url": "https://github.com/planetarium/libplanet/commit/054d1c78a807fc6667270d7ee47e3096fa020361"
        },
        "date": 1673340967886,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4472506.641145834,
            "unit": "ns",
            "range": "± 30250.426319389426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6032917.285714285,
            "unit": "ns",
            "range": "± 70505.31352527058"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25296469.533333335,
            "unit": "ns",
            "range": "± 312141.4211861729"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6185181.82,
            "unit": "ns",
            "range": "± 249217.94180487236"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28619597,
            "unit": "ns",
            "range": "± 423898.3596000006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106657.69230769231,
            "unit": "ns",
            "range": "± 2913.1663978459014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92123.34042553192,
            "unit": "ns",
            "range": "± 7983.619248998029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204201.2162162162,
            "unit": "ns",
            "range": "± 9729.663371487894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194958.14545454545,
            "unit": "ns",
            "range": "± 8248.280912741044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3829956.1428571427,
            "unit": "ns",
            "range": "± 36729.48332137201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9631856.733333332,
            "unit": "ns",
            "range": "± 84740.70989997889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17307.96,
            "unit": "ns",
            "range": "± 868.7911054245807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52581.44565217391,
            "unit": "ns",
            "range": "± 4800.002901473781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45565.77215189873,
            "unit": "ns",
            "range": "± 2375.327377972955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95213.19387755102,
            "unit": "ns",
            "range": "± 14843.48951224638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5458.510638297872,
            "unit": "ns",
            "range": "± 608.0834645717722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17362.045977011494,
            "unit": "ns",
            "range": "± 1073.0714329377683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5832762.346875,
            "unit": "ns",
            "range": "± 25971.652366211965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830605.2710336538,
            "unit": "ns",
            "range": "± 1510.050159091177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367397.2191685268,
            "unit": "ns",
            "range": "± 605.1044034697827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535941.0536458334,
            "unit": "ns",
            "range": "± 1304.4891569652393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810258.2623197115,
            "unit": "ns",
            "range": "± 614.9995010748107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737325.2926897322,
            "unit": "ns",
            "range": "± 485.49217685437065"
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
          "id": "43edf035ffc013ea3eb7087df3df3e78929449eb",
          "message": "Merge pull request #2701 from greymistcube/feature/host-options\n\nIntroduce `HostOptions`",
          "timestamp": "2023-01-11T03:11:02+09:00",
          "tree_id": "1d15627c3db0a3689b01f026edd0d773d9e93677",
          "url": "https://github.com/planetarium/libplanet/commit/43edf035ffc013ea3eb7087df3df3e78929449eb"
        },
        "date": 1673374854894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4376962.003125,
            "unit": "ns",
            "range": "± 36446.748521432404"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6088730.6,
            "unit": "ns",
            "range": "± 111820.45584507336"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24964742.92857143,
            "unit": "ns",
            "range": "± 294409.33539924526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6017521.38,
            "unit": "ns",
            "range": "± 226271.95834531533"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27610486.785714287,
            "unit": "ns",
            "range": "± 300789.5593570052"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106948.1875,
            "unit": "ns",
            "range": "± 2049.125056172349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88142.11764705883,
            "unit": "ns",
            "range": "± 4747.664098349451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196514.18181818182,
            "unit": "ns",
            "range": "± 10746.241716248218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184949.85714285713,
            "unit": "ns",
            "range": "± 4359.816157657502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3764008.153846154,
            "unit": "ns",
            "range": "± 21171.91618570126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9363310.333333334,
            "unit": "ns",
            "range": "± 86152.4220550553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18511.168421052633,
            "unit": "ns",
            "range": "± 2054.507730305676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50368.24137931035,
            "unit": "ns",
            "range": "± 4045.2169774372933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46277.385416666664,
            "unit": "ns",
            "range": "± 2802.7504812980883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91299.58510638298,
            "unit": "ns",
            "range": "± 15606.1965956107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4815.572916666667,
            "unit": "ns",
            "range": "± 673.4930429022404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18243.622448979593,
            "unit": "ns",
            "range": "± 2212.123435321613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6075985.798958333,
            "unit": "ns",
            "range": "± 28970.98687787822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832431.8929966518,
            "unit": "ns",
            "range": "± 3455.306317670002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343482.7504185268,
            "unit": "ns",
            "range": "± 1689.4367943465768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532836.2734375,
            "unit": "ns",
            "range": "± 2421.6211767066543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801912.1867838542,
            "unit": "ns",
            "range": "± 651.7329662593877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734459.2910853794,
            "unit": "ns",
            "range": "± 647.8256489977678"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f20f103ca562c3d48b0a6961814b24f50606f3eb",
          "message": "Merge pull request #2704 from tkiapril/chain-id-show-tip-hash",
          "timestamp": "2023-01-11T18:08:10+09:00",
          "tree_id": "24a8667bbcd91291876b38499606d0c19245fc2f",
          "url": "https://github.com/planetarium/libplanet/commit/f20f103ca562c3d48b0a6961814b24f50606f3eb"
        },
        "date": 1673429078913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5527773.629827949,
            "unit": "ns",
            "range": "± 303144.2970485378"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6296278.958333333,
            "unit": "ns",
            "range": "± 751380.124075395"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29332108.41836735,
            "unit": "ns",
            "range": "± 2365710.812414267"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6791315.547368421,
            "unit": "ns",
            "range": "± 533475.2051325021"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35664844.71,
            "unit": "ns",
            "range": "± 3321064.898972034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126211.20879120879,
            "unit": "ns",
            "range": "± 18631.786621861804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123209.81818181818,
            "unit": "ns",
            "range": "± 29289.329068326697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224240.56382978722,
            "unit": "ns",
            "range": "± 33893.419609870005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205664.86170212767,
            "unit": "ns",
            "range": "± 34113.75282741427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4769543.645833333,
            "unit": "ns",
            "range": "± 369130.07464655046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11174171.835051546,
            "unit": "ns",
            "range": "± 1227474.4661711797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30749.757575757576,
            "unit": "ns",
            "range": "± 11050.030436832134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61191.948453608245,
            "unit": "ns",
            "range": "± 16701.1906950592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59213.758241758245,
            "unit": "ns",
            "range": "± 10085.04075168394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113138.13043478261,
            "unit": "ns",
            "range": "± 26297.798426307705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5363.5,
            "unit": "ns",
            "range": "± 672.3127808606957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28340.96875,
            "unit": "ns",
            "range": "± 10412.68735367239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6166188.5146875,
            "unit": "ns",
            "range": "± 151103.11333427244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2038158.74734375,
            "unit": "ns",
            "range": "± 97306.91780102435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450401.7208862305,
            "unit": "ns",
            "range": "± 44073.8076547641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2784761.7083333335,
            "unit": "ns",
            "range": "± 92412.99263211337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937056.0737165179,
            "unit": "ns",
            "range": "± 30522.83760750297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 842086.5826125372,
            "unit": "ns",
            "range": "± 19813.00169680087"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b54fb44bc6300190695faef09e0ee94b9dab340",
          "message": "Merge pull request #2705 from dahlia/derive",
          "timestamp": "2023-01-11T18:47:52+09:00",
          "tree_id": "749a054f2e774af871d96519117f118ec1f53339",
          "url": "https://github.com/planetarium/libplanet/commit/2b54fb44bc6300190695faef09e0ee94b9dab340"
        },
        "date": 1673431076652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106526.95454545454,
            "unit": "ns",
            "range": "± 2594.6815838643906"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4371187.022395833,
            "unit": "ns",
            "range": "± 48966.934142885424"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5952185.846153846,
            "unit": "ns",
            "range": "± 57537.42535782855"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24815148.733333334,
            "unit": "ns",
            "range": "± 250739.9596809032"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6357015.826086956,
            "unit": "ns",
            "range": "± 159573.05080365718"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28258732.866666667,
            "unit": "ns",
            "range": "± 468209.77890301426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5906505.5484375,
            "unit": "ns",
            "range": "± 30300.606297391205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860845.6167367788,
            "unit": "ns",
            "range": "± 2582.262072908934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353445.2158954327,
            "unit": "ns",
            "range": "± 3552.8366566961395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613441.0139508927,
            "unit": "ns",
            "range": "± 3541.073601048016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816157.9439453125,
            "unit": "ns",
            "range": "± 1502.9459801796872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739645.1637137277,
            "unit": "ns",
            "range": "± 1158.7806866403055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89146.70408163265,
            "unit": "ns",
            "range": "± 8338.036777520361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191954.36231884058,
            "unit": "ns",
            "range": "± 8791.854967175776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174635.10714285713,
            "unit": "ns",
            "range": "± 4674.592106105688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3678860.8666666667,
            "unit": "ns",
            "range": "± 54508.655646690866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9340375.6,
            "unit": "ns",
            "range": "± 67638.05783496237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16439.510416666668,
            "unit": "ns",
            "range": "± 1803.4083053151955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45217.12643678161,
            "unit": "ns",
            "range": "± 2337.109354521231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38993.45161290323,
            "unit": "ns",
            "range": "± 991.6799496715889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78314.71276595745,
            "unit": "ns",
            "range": "± 7778.256894347147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4078.3298969072166,
            "unit": "ns",
            "range": "± 331.3836435327353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16017.761904761905,
            "unit": "ns",
            "range": "± 821.7986975252269"
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
          "id": "4a5c11c9812926f76a9e9d0d76198c358230b492",
          "message": "Merge pull request #2710 from greymistcube/refactor/optimize-preload\n\n♻️ Optimize preload",
          "timestamp": "2023-01-13T17:51:47+09:00",
          "tree_id": "fdce00d536cafced976f265ea8a56217fb32517a",
          "url": "https://github.com/planetarium/libplanet/commit/4a5c11c9812926f76a9e9d0d76198c358230b492"
        },
        "date": 1673600838923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130109.22222222222,
            "unit": "ns",
            "range": "± 6447.09305871012"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6267712.444207702,
            "unit": "ns",
            "range": "± 417562.6916190253"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6956453.747252747,
            "unit": "ns",
            "range": "± 449527.6210576706"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35799745.41111111,
            "unit": "ns",
            "range": "± 1988282.5989859016"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7434217.087912088,
            "unit": "ns",
            "range": "± 463524.2795189829"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39663809.408163264,
            "unit": "ns",
            "range": "± 2423725.9183751927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6913773.055729167,
            "unit": "ns",
            "range": "± 77399.07310465745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2151692.3309895834,
            "unit": "ns",
            "range": "± 21327.32301352635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1590600.2721354167,
            "unit": "ns",
            "range": "± 13330.893801710135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3066115.55078125,
            "unit": "ns",
            "range": "± 24969.105381110046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932326.8594501202,
            "unit": "ns",
            "range": "± 5564.030664386315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881927.8319010417,
            "unit": "ns",
            "range": "± 10281.737638097202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113022.06315789474,
            "unit": "ns",
            "range": "± 11102.848348184225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251854.36842105264,
            "unit": "ns",
            "range": "± 12651.444725766414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221666.53,
            "unit": "ns",
            "range": "± 13426.232358428968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4564984.617647059,
            "unit": "ns",
            "range": "± 146513.6567069338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11331772.727272727,
            "unit": "ns",
            "range": "± 269865.92365966475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24353.94680851064,
            "unit": "ns",
            "range": "± 2919.458936346118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66277.73863636363,
            "unit": "ns",
            "range": "± 5160.028320100307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48790.79069767442,
            "unit": "ns",
            "range": "± 2860.437716879664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113314.59183673469,
            "unit": "ns",
            "range": "± 18761.209598111272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6233.8125,
            "unit": "ns",
            "range": "± 701.4983259536615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22764.19318181818,
            "unit": "ns",
            "range": "± 2740.758863190973"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa6aa6bb21208812c943ffb9923d0bad81b7a3e2",
          "message": "Merge pull request #2708 from colibrishin/transport/socket-count\n\nfix/transport: socket count",
          "timestamp": "2023-01-13T19:08:43+09:00",
          "tree_id": "778e222c51d60c6823a686ef96a7682632aff117",
          "url": "https://github.com/planetarium/libplanet/commit/fa6aa6bb21208812c943ffb9923d0bad81b7a3e2"
        },
        "date": 1673605498916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 141840.79787234042,
            "unit": "ns",
            "range": "± 8279.318417196479"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6155292.777467106,
            "unit": "ns",
            "range": "± 352750.7650937965"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7846890.538461538,
            "unit": "ns",
            "range": "± 98651.30294849581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33759207.571428575,
            "unit": "ns",
            "range": "± 592743.1461134051"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8040214.1034482755,
            "unit": "ns",
            "range": "± 346251.835027714"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40623144.64893617,
            "unit": "ns",
            "range": "± 2303441.8250715053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7082857.520089285,
            "unit": "ns",
            "range": "± 32917.68329719749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2211469.607979911,
            "unit": "ns",
            "range": "± 2095.3617248517153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1621394.566796875,
            "unit": "ns",
            "range": "± 3727.729546282947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116882.748177083,
            "unit": "ns",
            "range": "± 5972.9977714589095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982345.1950120192,
            "unit": "ns",
            "range": "± 515.4339212442206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908315.9415364583,
            "unit": "ns",
            "range": "± 464.48075227644586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 122603.34444444445,
            "unit": "ns",
            "range": "± 6829.439461034492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263947.74025974027,
            "unit": "ns",
            "range": "± 13156.31785433443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238762.48387096773,
            "unit": "ns",
            "range": "± 10842.823843887332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4854429.866666666,
            "unit": "ns",
            "range": "± 49315.22625759812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12236210.214285715,
            "unit": "ns",
            "range": "± 55283.041742790934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29577.57471264368,
            "unit": "ns",
            "range": "± 2281.8288698862007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73033.89887640449,
            "unit": "ns",
            "range": "± 5304.537615966472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55985.416666666664,
            "unit": "ns",
            "range": "± 3738.595136275451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135719.70430107528,
            "unit": "ns",
            "range": "± 22354.008693880125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8765.78125,
            "unit": "ns",
            "range": "± 1022.9513874659054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30641.252747252747,
            "unit": "ns",
            "range": "± 2493.8746987743416"
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
          "id": "c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d",
          "message": "Merge pull request #2713 from longfin/feature/rocksdb-index-blockhash-iter\n\nTurn recursion to iteration on `RocksDBStore.IndexBlockHash()`",
          "timestamp": "2023-01-16T15:42:34+09:00",
          "tree_id": "c4b7e618a5e927bc18027604bd726b67d479da5c",
          "url": "https://github.com/planetarium/libplanet/commit/c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d"
        },
        "date": 1673852074609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111834.1568627451,
            "unit": "ns",
            "range": "± 4553.316463293756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5010872.080818965,
            "unit": "ns",
            "range": "± 219188.45650872387"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6316899.857142857,
            "unit": "ns",
            "range": "± 110055.98394094157"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28800236.208333332,
            "unit": "ns",
            "range": "± 729030.9258731597"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7166430,
            "unit": "ns",
            "range": "± 64255.96585643124"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31785265.4,
            "unit": "ns",
            "range": "± 533829.9611536028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5938387.283333333,
            "unit": "ns",
            "range": "± 27048.170069938227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865690.236328125,
            "unit": "ns",
            "range": "± 4110.651311176828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367795.8288225445,
            "unit": "ns",
            "range": "± 4181.285047735119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647677.7015625,
            "unit": "ns",
            "range": "± 2856.644498747612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830272.7785807292,
            "unit": "ns",
            "range": "± 512.3220677819038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754615.2057059152,
            "unit": "ns",
            "range": "± 781.9293844129478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105186.34375,
            "unit": "ns",
            "range": "± 10613.133167848542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223728.1325301205,
            "unit": "ns",
            "range": "± 11494.246253914876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201632.4,
            "unit": "ns",
            "range": "± 9402.68225827077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4084430.4,
            "unit": "ns",
            "range": "± 62810.27361916429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10133217.631578946,
            "unit": "ns",
            "range": "± 216963.03491050948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24441.422680412372,
            "unit": "ns",
            "range": "± 4566.012097632927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61179.95698924731,
            "unit": "ns",
            "range": "± 6111.31156832038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43686.77272727273,
            "unit": "ns",
            "range": "± 1587.4135737490155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113098.72631578948,
            "unit": "ns",
            "range": "± 16951.203914090176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5868.78125,
            "unit": "ns",
            "range": "± 802.5606414618675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25994.103092783505,
            "unit": "ns",
            "range": "± 3667.3515292730217"
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
          "id": "4f0cb090c1b44a63dbe9eb283102fed2d3a9427f",
          "message": "Merge pull request #2706 from greymistcube/refactor/cleanup-preload\n\n🧹 Cleanup preload",
          "timestamp": "2023-01-16T18:25:15+09:00",
          "tree_id": "e9df5726db548acb8715354fbb0090fb74cd41f6",
          "url": "https://github.com/planetarium/libplanet/commit/4f0cb090c1b44a63dbe9eb283102fed2d3a9427f"
        },
        "date": 1673861737611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112309.35714285714,
            "unit": "ns",
            "range": "± 1469.904790592436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4879269.0463986285,
            "unit": "ns",
            "range": "± 171880.64307842316"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6191384.928571428,
            "unit": "ns",
            "range": "± 58027.52514170692"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26036669.277777776,
            "unit": "ns",
            "range": "± 531325.1419262205"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6782910.3,
            "unit": "ns",
            "range": "± 149177.35049513172"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29695357.275862068,
            "unit": "ns",
            "range": "± 857235.5973805691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5739988.759895833,
            "unit": "ns",
            "range": "± 19619.73588904328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1806750.4497767857,
            "unit": "ns",
            "range": "± 4213.41470952812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323336.3274739583,
            "unit": "ns",
            "range": "± 5821.89790979042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610540.8622395834,
            "unit": "ns",
            "range": "± 12405.006047800325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817496.5487630208,
            "unit": "ns",
            "range": "± 1954.9836800438152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759413.5023716518,
            "unit": "ns",
            "range": "± 2039.0885575226705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89071.62222222223,
            "unit": "ns",
            "range": "± 5932.818854772625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203628.3086419753,
            "unit": "ns",
            "range": "± 10580.11047867882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182351.23333333334,
            "unit": "ns",
            "range": "± 5435.683782658578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3833577.714285714,
            "unit": "ns",
            "range": "± 58730.59153512702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9536463.047619049,
            "unit": "ns",
            "range": "± 222691.327557109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19124.478260869564,
            "unit": "ns",
            "range": "± 1899.8673376373197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48387.42465753425,
            "unit": "ns",
            "range": "± 2254.686957316841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40889,
            "unit": "ns",
            "range": "± 861.8391187841653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85009.76923076923,
            "unit": "ns",
            "range": "± 12730.436811111764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4537.226804123711,
            "unit": "ns",
            "range": "± 448.40440511223244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18149.215909090908,
            "unit": "ns",
            "range": "± 1321.8650917032082"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bcf00dccb13dbacd764ece25e7f366138eef254",
          "message": "Merge pull request #2718 from greymistcube/chore/tighter-tx-lifespan\n\n🔧 Reduced tx lifespan from 3 hours to 10 minutes",
          "timestamp": "2023-01-17T22:12:57+09:00",
          "tree_id": "f167976af13692468f3ff31ae9b87e48d23eeb99",
          "url": "https://github.com/planetarium/libplanet/commit/9bcf00dccb13dbacd764ece25e7f366138eef254"
        },
        "date": 1673961772878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109285.78571428571,
            "unit": "ns",
            "range": "± 1782.7198830210766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4438847.473257212,
            "unit": "ns",
            "range": "± 25449.22542319359"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6043509.928571428,
            "unit": "ns",
            "range": "± 66472.37745046872"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25145145,
            "unit": "ns",
            "range": "± 347648.4014129793"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6122747.9677419355,
            "unit": "ns",
            "range": "± 109543.58756844507"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29102305.066666666,
            "unit": "ns",
            "range": "± 409506.99101680564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6290616.369791667,
            "unit": "ns",
            "range": "± 20221.3576217149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849535.9217354911,
            "unit": "ns",
            "range": "± 7001.2484489966755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347198.091015625,
            "unit": "ns",
            "range": "± 1364.29165275507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567323.1385216345,
            "unit": "ns",
            "range": "± 1552.678885941504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796951.5593610491,
            "unit": "ns",
            "range": "± 1868.086693485873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729541.076171875,
            "unit": "ns",
            "range": "± 616.1142864672531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88505.73863636363,
            "unit": "ns",
            "range": "± 5955.047127204428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198676.22,
            "unit": "ns",
            "range": "± 7123.4117264188535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178654,
            "unit": "ns",
            "range": "± 2594.4635604815626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3741861.3333333335,
            "unit": "ns",
            "range": "± 46285.27442728977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9401950.266666668,
            "unit": "ns",
            "range": "± 92403.56807308955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16735.238636363636,
            "unit": "ns",
            "range": "± 980.6708118674145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48453.318681318684,
            "unit": "ns",
            "range": "± 5009.120126505078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40906.18461538461,
            "unit": "ns",
            "range": "± 1791.7001169656198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85593.71578947369,
            "unit": "ns",
            "range": "± 12461.202194029785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4815.625,
            "unit": "ns",
            "range": "± 466.4147973187544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16875.287356321838,
            "unit": "ns",
            "range": "± 936.621636993717"
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
          "id": "8707b88bda48d4d42b8e487e85a251144481368e",
          "message": "Merge pull request #2721 from moreal/boundpeer-validate\n\nValidate hostname in `BoundPeer` type",
          "timestamp": "2023-01-18T10:46:11+09:00",
          "tree_id": "fa8afe5c0c7d19887b236c2f44d8b86a0ce33681",
          "url": "https://github.com/planetarium/libplanet/commit/8707b88bda48d4d42b8e487e85a251144481368e"
        },
        "date": 1674006991138,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106231.79411764706,
            "unit": "ns",
            "range": "± 3414.6158644542334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4471756.701923077,
            "unit": "ns",
            "range": "± 17417.794850802333"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5448613.628571428,
            "unit": "ns",
            "range": "± 94597.7192335075"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25430167.833333332,
            "unit": "ns",
            "range": "± 532882.338433415"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6797970.642857143,
            "unit": "ns",
            "range": "± 92167.88210952308"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28748373.933333334,
            "unit": "ns",
            "range": "± 440525.4831857819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5810081.371995192,
            "unit": "ns",
            "range": "± 8096.7721598168255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841718.393329327,
            "unit": "ns",
            "range": "± 866.2487970555889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352141.5271935095,
            "unit": "ns",
            "range": "± 458.25108567686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570701.285714286,
            "unit": "ns",
            "range": "± 1511.5443459743358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804391.6104817708,
            "unit": "ns",
            "range": "± 472.9991071910472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732762.7834821428,
            "unit": "ns",
            "range": "± 459.2893078054963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90314.96703296703,
            "unit": "ns",
            "range": "± 5065.961851087992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207515.70833333334,
            "unit": "ns",
            "range": "± 9442.27242199658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207462.4,
            "unit": "ns",
            "range": "± 6118.300460433267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3872875.285714286,
            "unit": "ns",
            "range": "± 13402.440004190808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9553394.76923077,
            "unit": "ns",
            "range": "± 37283.724403001564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19368.698924731183,
            "unit": "ns",
            "range": "± 2170.436475763554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52365.333333333336,
            "unit": "ns",
            "range": "± 3420.3430736657156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46309.49462365591,
            "unit": "ns",
            "range": "± 2644.2210023388575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99132.86458333333,
            "unit": "ns",
            "range": "± 13919.959300167202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6293.877551020408,
            "unit": "ns",
            "range": "± 796.1008492466644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18554.5,
            "unit": "ns",
            "range": "± 1526.9397763041509"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac3294d71ecaef386577c4f10ff4e202d8ca90ee",
          "message": "Merge pull request #2716 from planetarium/pow-dynamic-validator\n\nPow dynamic validator",
          "timestamp": "2023-01-18T12:52:06+09:00",
          "tree_id": "7cd68701d78ea8a7bef2ceb426022324839dcf9d",
          "url": "https://github.com/planetarium/libplanet/commit/ac3294d71ecaef386577c4f10ff4e202d8ca90ee"
        },
        "date": 1674014752654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132796.22,
            "unit": "ns",
            "range": "± 5089.040819330919"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6040568.979838709,
            "unit": "ns",
            "range": "± 271519.7416396062"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7226885.72,
            "unit": "ns",
            "range": "± 634662.5235615514"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33130403.153846152,
            "unit": "ns",
            "range": "± 412573.189771796"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7919702.222222222,
            "unit": "ns",
            "range": "± 328386.1467632083"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36880810.2,
            "unit": "ns",
            "range": "± 519642.97180305846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6949676.387760417,
            "unit": "ns",
            "range": "± 26185.25753999956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2220193.421316964,
            "unit": "ns",
            "range": "± 4329.557624975917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1624226.2046875,
            "unit": "ns",
            "range": "± 4867.220664592202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3075976.9502604166,
            "unit": "ns",
            "range": "± 5742.29491180259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000157.2037760416,
            "unit": "ns",
            "range": "± 1762.8056686753448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908090.388811384,
            "unit": "ns",
            "range": "± 1122.6514805892468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115745.82417582418,
            "unit": "ns",
            "range": "± 7603.932227755447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255716.54320987655,
            "unit": "ns",
            "range": "± 12776.819199285655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220511.43076923076,
            "unit": "ns",
            "range": "± 9931.47340366919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4746581.428571428,
            "unit": "ns",
            "range": "± 36005.266366323274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11859562.266666668,
            "unit": "ns",
            "range": "± 204446.0719709537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26184.68817204301,
            "unit": "ns",
            "range": "± 2350.669520622724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65606.87368421053,
            "unit": "ns",
            "range": "± 5134.1598066329025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55829.555555555555,
            "unit": "ns",
            "range": "± 1573.0565135658014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119014.45918367348,
            "unit": "ns",
            "range": "± 18957.690479944238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6414.683673469388,
            "unit": "ns",
            "range": "± 829.8199357150187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26978.905263157896,
            "unit": "ns",
            "range": "± 2972.8787326452716"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b923ec9ea125a779f3d83c68a94a3cc69aab1f83",
          "message": "Merge pull request #2719 from longfin/bugfix/dealer-disposal\n\nFix NetMQSocket leak",
          "timestamp": "2023-01-18T14:41:04+09:00",
          "tree_id": "f38041db1ca49c6e90ae0de9fb40944156620b10",
          "url": "https://github.com/planetarium/libplanet/commit/b923ec9ea125a779f3d83c68a94a3cc69aab1f83"
        },
        "date": 1674021215112,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122070.4387755102,
            "unit": "ns",
            "range": "± 8088.918450082755"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4696835.054129465,
            "unit": "ns",
            "range": "± 35768.99752410565"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6438094.642857143,
            "unit": "ns",
            "range": "± 43584.51599188928"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26467253.384615384,
            "unit": "ns",
            "range": "± 265062.8495333822"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7232252,
            "unit": "ns",
            "range": "± 133483.76180894315"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29974662.055555556,
            "unit": "ns",
            "range": "± 609215.7578225875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6074925.700520833,
            "unit": "ns",
            "range": "± 34936.685499598745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822578.1287667411,
            "unit": "ns",
            "range": "± 3209.375087978532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340999.9610677084,
            "unit": "ns",
            "range": "± 984.024012478221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599327.06796875,
            "unit": "ns",
            "range": "± 35007.139209715555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821238.3001953125,
            "unit": "ns",
            "range": "± 1032.039036798156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738141.369516226,
            "unit": "ns",
            "range": "± 1005.9848959300002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102004.46666666666,
            "unit": "ns",
            "range": "± 9411.277962152582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216757.7605633803,
            "unit": "ns",
            "range": "± 10590.51632690411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216711.61538461538,
            "unit": "ns",
            "range": "± 8623.524810823932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3935750.8,
            "unit": "ns",
            "range": "± 30086.84596582747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9717588.733333332,
            "unit": "ns",
            "range": "± 59624.440794582435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21993.103448275862,
            "unit": "ns",
            "range": "± 2088.5509109855734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59157.302083333336,
            "unit": "ns",
            "range": "± 6867.509072850201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58607.89473684211,
            "unit": "ns",
            "range": "± 2029.6959669738542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114948.9574468085,
            "unit": "ns",
            "range": "± 14191.571972545296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7213.265306122449,
            "unit": "ns",
            "range": "± 905.7249480191757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23503.061224489797,
            "unit": "ns",
            "range": "± 2743.406494139942"
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
          "id": "7c5392c7e40bca979415f316f6f0a5e083b2bf59",
          "message": "Merge pull request #2584 from greymistcube/refactor/block-locator\n\n♻️ Refactor `BlockLocator`",
          "timestamp": "2023-01-18T17:14:34+09:00",
          "tree_id": "a5b8ca613b01cffa39f3b6699fc6e85bbe549f6d",
          "url": "https://github.com/planetarium/libplanet/commit/7c5392c7e40bca979415f316f6f0a5e083b2bf59"
        },
        "date": 1674030437014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112809.55072463768,
            "unit": "ns",
            "range": "± 5462.8465633399455"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4978619.094907408,
            "unit": "ns",
            "range": "± 260486.82847371785"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6012803.402061855,
            "unit": "ns",
            "range": "± 350291.10789928056"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28098994.214285713,
            "unit": "ns",
            "range": "± 450764.3204833283"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6913767.923076923,
            "unit": "ns",
            "range": "± 110416.03630622195"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31744335.529411763,
            "unit": "ns",
            "range": "± 612829.2724541149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982702.516826923,
            "unit": "ns",
            "range": "± 17770.83814855978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858906.4222935268,
            "unit": "ns",
            "range": "± 2898.289676397507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358028.1764322917,
            "unit": "ns",
            "range": "± 3351.1152901763157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652728.4114583335,
            "unit": "ns",
            "range": "± 1180.5644607746735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828543.7672526041,
            "unit": "ns",
            "range": "± 293.89083429661815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761518.8611188616,
            "unit": "ns",
            "range": "± 336.51227699662564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103817.59139784946,
            "unit": "ns",
            "range": "± 8493.059341803957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219936.14772727274,
            "unit": "ns",
            "range": "± 13978.234363482912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195842.15476190476,
            "unit": "ns",
            "range": "± 10458.767369024645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4106685.4,
            "unit": "ns",
            "range": "± 53403.876232776536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10207904.933333334,
            "unit": "ns",
            "range": "± 183677.00952855364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23625.05376344086,
            "unit": "ns",
            "range": "± 3178.8001132694003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59736.239583333336,
            "unit": "ns",
            "range": "± 6789.534365469426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41250.444444444445,
            "unit": "ns",
            "range": "± 775.5303477372358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104722.38461538461,
            "unit": "ns",
            "range": "± 13266.775892154414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6151.659793814433,
            "unit": "ns",
            "range": "± 555.2565451850074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22204.908045977012,
            "unit": "ns",
            "range": "± 2291.730663343012"
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
          "id": "ed9ee092c883ba93365316ea520f7da624646932",
          "message": "Merge pull request #2724 from greymistcube/release/0.46.0\n\n🚀 Release 0.46.0",
          "timestamp": "2023-01-18T17:37:55+09:00",
          "tree_id": "7919b8ddfe6f6a1c1e09c010681ebf2e3795eee6",
          "url": "https://github.com/planetarium/libplanet/commit/ed9ee092c883ba93365316ea520f7da624646932"
        },
        "date": 1674032108165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 150666.86315789472,
            "unit": "ns",
            "range": "± 13350.939618387949"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6445718.865752551,
            "unit": "ns",
            "range": "± 408644.8062092628"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7261072.382978723,
            "unit": "ns",
            "range": "± 559650.4076399205"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33809750.571428575,
            "unit": "ns",
            "range": "± 1080552.3618596317"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8179657.445652174,
            "unit": "ns",
            "range": "± 566067.3792255695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39526634.52380952,
            "unit": "ns",
            "range": "± 1811661.5735644612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7684850.413461538,
            "unit": "ns",
            "range": "± 99148.99082133635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2332718.81328125,
            "unit": "ns",
            "range": "± 27226.874158737508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1689621.0471354167,
            "unit": "ns",
            "range": "± 29666.18177199633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3255674.049278846,
            "unit": "ns",
            "range": "± 23917.13846519522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045717.2743489583,
            "unit": "ns",
            "range": "± 19358.26615338912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967590.0037760417,
            "unit": "ns",
            "range": "± 10868.792318633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 131502.34020618556,
            "unit": "ns",
            "range": "± 15242.204802706117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263791.5340909091,
            "unit": "ns",
            "range": "± 17311.240965596295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225496.35416666666,
            "unit": "ns",
            "range": "± 19853.444450975818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4647094.46,
            "unit": "ns",
            "range": "± 168409.88938861672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12148767.583333334,
            "unit": "ns",
            "range": "± 438266.2122759594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30240.677083333332,
            "unit": "ns",
            "range": "± 4639.748134032578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74685.15957446808,
            "unit": "ns",
            "range": "± 10088.302553706564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61009.541666666664,
            "unit": "ns",
            "range": "± 9185.232241188103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132723.1875,
            "unit": "ns",
            "range": "± 20167.341450088898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7631.764705882353,
            "unit": "ns",
            "range": "± 1644.4141933271212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29476.350515463917,
            "unit": "ns",
            "range": "± 4506.867854178307"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "124115fb5538ed5f6c111a32e2b8c6c5f4e1369e",
          "message": "Merge pull request #2726 from riemannulus/prepare-0.47\n\nrelease: prepare 0.47",
          "timestamp": "2023-01-19T01:32:16+09:00",
          "tree_id": "ee971d646c27028070577759dfef5c18036e0a94",
          "url": "https://github.com/planetarium/libplanet/commit/124115fb5538ed5f6c111a32e2b8c6c5f4e1369e"
        },
        "date": 1674060351974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122083.2,
            "unit": "ns",
            "range": "± 9282.80438568654"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5266758.221540178,
            "unit": "ns",
            "range": "± 192594.6092613924"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6373646.315217392,
            "unit": "ns",
            "range": "± 401443.4616010034"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29486393.17647059,
            "unit": "ns",
            "range": "± 590710.9049925813"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7175424.5813953485,
            "unit": "ns",
            "range": "± 379754.14244697127"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32561321.82352941,
            "unit": "ns",
            "range": "± 633046.2251847447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5970278.12890625,
            "unit": "ns",
            "range": "± 18086.120454970474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863993.3295200893,
            "unit": "ns",
            "range": "± 1289.186313493968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375842.6716145833,
            "unit": "ns",
            "range": "± 2171.062434776737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666459.84296875,
            "unit": "ns",
            "range": "± 2862.6969603957805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836922.3297526041,
            "unit": "ns",
            "range": "± 502.9268363144447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765941.5419224331,
            "unit": "ns",
            "range": "± 438.75559516655795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113783.67741935483,
            "unit": "ns",
            "range": "± 11484.142192380355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225755.091954023,
            "unit": "ns",
            "range": "± 11421.774643841558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203702.91428571427,
            "unit": "ns",
            "range": "± 9909.473762688722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4070792.714285714,
            "unit": "ns",
            "range": "± 52458.57900569461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10214015.066666666,
            "unit": "ns",
            "range": "± 140413.45600835243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26136.5,
            "unit": "ns",
            "range": "± 2839.2825935555297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64433.70652173913,
            "unit": "ns",
            "range": "± 6076.2140550341355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45509.983050847455,
            "unit": "ns",
            "range": "± 2002.8353564946408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110848.65625,
            "unit": "ns",
            "range": "± 17018.0074638157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6199.2040816326535,
            "unit": "ns",
            "range": "± 704.4011854662522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25295.16853932584,
            "unit": "ns",
            "range": "± 2369.828322492979"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad15d083ca812dd294a422c507a17f847e95adf5",
          "message": "Merge pull request #2732 from dahlia/upgrade-net6-csharp10",
          "timestamp": "2023-01-19T18:14:56+09:00",
          "tree_id": "38ee257c8d8ffcfa24d4a0aecabb2ebef9c6b073",
          "url": "https://github.com/planetarium/libplanet/commit/ad15d083ca812dd294a422c507a17f847e95adf5"
        },
        "date": 1674120287911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106489.05555555556,
            "unit": "ns",
            "range": "± 1892.7236357793781"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4496499.785677084,
            "unit": "ns",
            "range": "± 44969.14099297314"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6089090.384615385,
            "unit": "ns",
            "range": "± 53579.69776967526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25888405.92857143,
            "unit": "ns",
            "range": "± 190857.40537071298"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6384404.72972973,
            "unit": "ns",
            "range": "± 215972.8989766294"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28996410.65,
            "unit": "ns",
            "range": "± 656291.7558608948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5917114.085379465,
            "unit": "ns",
            "range": "± 20050.527584295443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1824890.791829427,
            "unit": "ns",
            "range": "± 890.5336836867461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365192.207310268,
            "unit": "ns",
            "range": "± 1207.6209768573408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545632.333233173,
            "unit": "ns",
            "range": "± 3089.4665089365935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797881.04296875,
            "unit": "ns",
            "range": "± 778.4127821403602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749741.9183872768,
            "unit": "ns",
            "range": "± 317.4593428919141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92554.8762886598,
            "unit": "ns",
            "range": "± 7977.206145034076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210767.65714285715,
            "unit": "ns",
            "range": "± 10197.660723350791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199167.11111111112,
            "unit": "ns",
            "range": "± 5391.183709990952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3859193.785714286,
            "unit": "ns",
            "range": "± 30030.329505040714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9433247.666666666,
            "unit": "ns",
            "range": "± 90734.46838177765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17717.594594594593,
            "unit": "ns",
            "range": "± 885.8808312034238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54673.56989247312,
            "unit": "ns",
            "range": "± 4755.212900180202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44984.79,
            "unit": "ns",
            "range": "± 5411.608637583065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103000.9693877551,
            "unit": "ns",
            "range": "± 17708.334549138377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6022.621052631579,
            "unit": "ns",
            "range": "± 514.7710538190198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17466.666666666668,
            "unit": "ns",
            "range": "± 1237.061552688694"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4af0f1d21e7500a4c2702b850b917c5d28a771bd",
          "message": "Merge pull request #2733 from limebell/refactor/remove-validator-from-interface\n\nRemove Validator related methods from interfaces",
          "timestamp": "2023-01-20T13:55:48+09:00",
          "tree_id": "6deae8f6d719122481ddf5798149d819c6ace54f",
          "url": "https://github.com/planetarium/libplanet/commit/4af0f1d21e7500a4c2702b850b917c5d28a771bd"
        },
        "date": 1674191172706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112306.94444444444,
            "unit": "ns",
            "range": "± 2381.0671229074683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877096.204927885,
            "unit": "ns",
            "range": "± 16122.137920124007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874086.5813337055,
            "unit": "ns",
            "range": "± 4892.32515766547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369302.685546875,
            "unit": "ns",
            "range": "± 4218.822276673565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633501.806770833,
            "unit": "ns",
            "range": "± 1783.017560897517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830850.9975911458,
            "unit": "ns",
            "range": "± 840.1910046510241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766894.4250139509,
            "unit": "ns",
            "range": "± 785.5243569910622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99616.10752688172,
            "unit": "ns",
            "range": "± 7561.420083817885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220468.94444444444,
            "unit": "ns",
            "range": "± 12286.637797528885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192382.64516129033,
            "unit": "ns",
            "range": "± 5797.437327810666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4016889.066666667,
            "unit": "ns",
            "range": "± 42621.77459680617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10036031.6,
            "unit": "ns",
            "range": "± 159367.91326397634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24168.372340425532,
            "unit": "ns",
            "range": "± 2510.8410062759085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57379.234042553195,
            "unit": "ns",
            "range": "± 6426.347072585115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43209.75,
            "unit": "ns",
            "range": "± 634.3146802939087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102027.01020408163,
            "unit": "ns",
            "range": "± 17553.914245843014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5396.020618556701,
            "unit": "ns",
            "range": "± 485.0008371853051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21782.086021505376,
            "unit": "ns",
            "range": "± 1739.4157855810568"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5088534.322916667,
            "unit": "ns",
            "range": "± 238072.3374067879"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6566344.6,
            "unit": "ns",
            "range": "± 132138.52467387952"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28471558.85714286,
            "unit": "ns",
            "range": "± 347601.571708374"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7306583.6875,
            "unit": "ns",
            "range": "± 139697.0834148987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31318617.85714286,
            "unit": "ns",
            "range": "± 428364.54841926345"
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
          "id": "a993bb7b036cdd3d63bb3aed4daf543073c403fc",
          "message": "Merge pull request #2748 from greymistcube/chore/changelog-fix\n\n🧹 Fixed typos",
          "timestamp": "2023-01-21T14:05:00+09:00",
          "tree_id": "43fea792d9a4293b7eb52bd492f241a118097909",
          "url": "https://github.com/planetarium/libplanet/commit/a993bb7b036cdd3d63bb3aed4daf543073c403fc"
        },
        "date": 1674278289991,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102859.01063829787,
            "unit": "ns",
            "range": "± 5860.614796724361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5240020.339583334,
            "unit": "ns",
            "range": "± 35605.98386019338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1668242.4020833333,
            "unit": "ns",
            "range": "± 10733.910852604677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184508.030859375,
            "unit": "ns",
            "range": "± 4291.802055496832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2337245.719010417,
            "unit": "ns",
            "range": "± 2747.5463099268054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 722111.724609375,
            "unit": "ns",
            "range": "± 3550.3091099455964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 672087.4780598958,
            "unit": "ns",
            "range": "± 1887.7923260898926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139091.49494949495,
            "unit": "ns",
            "range": "± 26724.805090209135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207104.01030927835,
            "unit": "ns",
            "range": "± 21900.92028055692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176996.41666666666,
            "unit": "ns",
            "range": "± 1882.8923330553948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4216724.6,
            "unit": "ns",
            "range": "± 74541.11113032093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10752798.875,
            "unit": "ns",
            "range": "± 204581.14822302177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22027.494623655915,
            "unit": "ns",
            "range": "± 2597.551006419131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58586,
            "unit": "ns",
            "range": "± 7818.105209939567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45446.565217391304,
            "unit": "ns",
            "range": "± 2569.9271221733834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98946.05154639175,
            "unit": "ns",
            "range": "± 18074.646320520314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6467.170212765957,
            "unit": "ns",
            "range": "± 1006.4720737468142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29548.21649484536,
            "unit": "ns",
            "range": "± 4684.495668841178"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5148683.317150298,
            "unit": "ns",
            "range": "± 186078.7638513272"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6263773.285714285,
            "unit": "ns",
            "range": "± 80963.47409924911"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27961786.51724138,
            "unit": "ns",
            "range": "± 1219765.7495856693"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6931552.5,
            "unit": "ns",
            "range": "± 452820.4512056221"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32824025.692307692,
            "unit": "ns",
            "range": "± 1524244.6011717566"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e03a39d36d0512496e5f493b5000413b8dfd9c80",
          "message": "Merge pull request #2743 from greymistcube/refactor/extract-transport\n\nRefactor/extract transport",
          "timestamp": "2023-01-27T15:53:12+09:00",
          "tree_id": "fe89e2f6fc98e385eb6ba15ce51148c86df39924",
          "url": "https://github.com/planetarium/libplanet/commit/e03a39d36d0512496e5f493b5000413b8dfd9c80"
        },
        "date": 1674803018498,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112401.73333333334,
            "unit": "ns",
            "range": "± 2052.4759774709273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5800395.779166667,
            "unit": "ns",
            "range": "± 40258.56721051099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826651.8282645089,
            "unit": "ns",
            "range": "± 8029.657738333727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356782.729296875,
            "unit": "ns",
            "range": "± 7210.94582865925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623219.9715401786,
            "unit": "ns",
            "range": "± 6898.21612345076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807070.6901041666,
            "unit": "ns",
            "range": "± 1260.1294696264179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753337.8827427456,
            "unit": "ns",
            "range": "± 1437.3564915880443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91158.26666666666,
            "unit": "ns",
            "range": "± 5374.477243040021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202789.72463768115,
            "unit": "ns",
            "range": "± 9777.796255508549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177232.7027027027,
            "unit": "ns",
            "range": "± 5973.577835699402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3776100.4285714286,
            "unit": "ns",
            "range": "± 45151.267161218595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9480763.461538462,
            "unit": "ns",
            "range": "± 72294.1513040248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19397.14893617021,
            "unit": "ns",
            "range": "± 1615.1462795862244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51223.244680851065,
            "unit": "ns",
            "range": "± 3451.234305260962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40491.833333333336,
            "unit": "ns",
            "range": "± 446.1350862143832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87856.72340425532,
            "unit": "ns",
            "range": "± 11269.304278078547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5180.384615384615,
            "unit": "ns",
            "range": "± 312.12891813874216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20003.55319148936,
            "unit": "ns",
            "range": "± 2220.9177780165874"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4981265.295010653,
            "unit": "ns",
            "range": "± 184260.9599457877"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6273031.555555556,
            "unit": "ns",
            "range": "± 133841.90312640034"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26610201.285714287,
            "unit": "ns",
            "range": "± 623292.1445057802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7031942.5,
            "unit": "ns",
            "range": "± 209987.6030665571"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29251996.75,
            "unit": "ns",
            "range": "± 552778.4642566436"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a58bb1ed94765944c567ad992ea6feebf2d66f36",
          "message": "Merge pull request #2754 from riemannulus/fix/swarm-test-stopping\n\nfix: Adjustment effective changes from hang in the CI research",
          "timestamp": "2023-01-27T17:56:35+09:00",
          "tree_id": "6930c9bac76d7cd195ab2af78b91d2b35bc37ea3",
          "url": "https://github.com/planetarium/libplanet/commit/a58bb1ed94765944c567ad992ea6feebf2d66f36"
        },
        "date": 1674810628141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 116241.95652173914,
            "unit": "ns",
            "range": "± 8501.617440051627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5975660.979352678,
            "unit": "ns",
            "range": "± 37699.524009452514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903419.2202148438,
            "unit": "ns",
            "range": "± 836.2735857721653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365387.95703125,
            "unit": "ns",
            "range": "± 3482.140320623962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594205.1434151786,
            "unit": "ns",
            "range": "± 2034.154017613816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832364.093359375,
            "unit": "ns",
            "range": "± 758.981458878934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764021.1032151442,
            "unit": "ns",
            "range": "± 116.90822414840075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107746.30208333333,
            "unit": "ns",
            "range": "± 12310.243928593345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229830.1797752809,
            "unit": "ns",
            "range": "± 12750.989298127028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201297.36956521738,
            "unit": "ns",
            "range": "± 11616.669957216127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4102093.5,
            "unit": "ns",
            "range": "± 38335.15735587895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10180928.42857143,
            "unit": "ns",
            "range": "± 101049.86052417906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25625.354166666668,
            "unit": "ns",
            "range": "± 3671.638271883738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66357.13541666667,
            "unit": "ns",
            "range": "± 7331.171298129785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45280.26530612245,
            "unit": "ns",
            "range": "± 3635.8046218787185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119142.82474226804,
            "unit": "ns",
            "range": "± 19858.825644518398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6957.989473684211,
            "unit": "ns",
            "range": "± 1066.9161415404246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26475.416666666668,
            "unit": "ns",
            "range": "± 4683.164947962496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5188347.887476679,
            "unit": "ns",
            "range": "± 244309.67140301206"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6333509.428571428,
            "unit": "ns",
            "range": "± 97160.51675030764"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29016719.466666665,
            "unit": "ns",
            "range": "± 512312.2386577861"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7022705.105263158,
            "unit": "ns",
            "range": "± 303962.81718514784"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32901346.8,
            "unit": "ns",
            "range": "± 573318.8539130485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34f3e59036e469e0d4230769953ce803cc7dd9fb",
          "message": "Merge pull request #2756 from dahlia/block-json-serialization\n\nSerialize/deserialize `Block<T>` better with `System.Text.Json.JsonSerializer`",
          "timestamp": "2023-01-30T17:16:43+09:00",
          "tree_id": "40be0ff242cc5a62410886ca50defee62a04b603",
          "url": "https://github.com/planetarium/libplanet/commit/34f3e59036e469e0d4230769953ce803cc7dd9fb"
        },
        "date": 1675067279279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115641.56666666667,
            "unit": "ns",
            "range": "± 3394.017309237285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5875820.948958334,
            "unit": "ns",
            "range": "± 19492.186659783358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849231.4859095982,
            "unit": "ns",
            "range": "± 4580.028902134997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362692.2611979167,
            "unit": "ns",
            "range": "± 5924.837522021263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631287.5518229166,
            "unit": "ns",
            "range": "± 2507.969292462243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837540.6358119419,
            "unit": "ns",
            "range": "± 1981.8725282848573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759755.4181640625,
            "unit": "ns",
            "range": "± 1408.2187612007979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99269.58426966293,
            "unit": "ns",
            "range": "± 6284.202022837955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207975.81967213115,
            "unit": "ns",
            "range": "± 9382.271751390484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182269.4642857143,
            "unit": "ns",
            "range": "± 4839.091508569235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3880664.6,
            "unit": "ns",
            "range": "± 72288.22086995126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9565915.6,
            "unit": "ns",
            "range": "± 160722.22375612616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19653.840909090908,
            "unit": "ns",
            "range": "± 1248.5576127396762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54065.2808988764,
            "unit": "ns",
            "range": "± 4927.565722980272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41032.76470588235,
            "unit": "ns",
            "range": "± 849.5865560238525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105050.92783505155,
            "unit": "ns",
            "range": "± 16913.069855666494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6367.739583333333,
            "unit": "ns",
            "range": "± 1024.381161017834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22374.945054945056,
            "unit": "ns",
            "range": "± 2590.2983413011525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5057908.913754112,
            "unit": "ns",
            "range": "± 257386.45986450437"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6293432.285714285,
            "unit": "ns",
            "range": "± 49055.51200179488"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28427290.647058822,
            "unit": "ns",
            "range": "± 571843.7505911187"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7355380,
            "unit": "ns",
            "range": "± 124347.57474514733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32088852.066666666,
            "unit": "ns",
            "range": "± 499824.8278567869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07f322e1d13d88e551c1bd3b242183559d13c448",
          "message": "Merge pull request #2758 from dahlia/planet-block",
          "timestamp": "2023-01-31T15:06:11+09:00",
          "tree_id": "982d38bd25720519ccd262c351c4d1c879bbd1af",
          "url": "https://github.com/planetarium/libplanet/commit/07f322e1d13d88e551c1bd3b242183559d13c448"
        },
        "date": 1675146203204,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137218.4105263158,
            "unit": "ns",
            "range": "± 12471.803453078806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7255735.215786638,
            "unit": "ns",
            "range": "± 204692.16047321534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2221164.6693474264,
            "unit": "ns",
            "range": "± 42726.49131810174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1619426.9958333333,
            "unit": "ns",
            "range": "± 23362.08353256947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2978119.6178609915,
            "unit": "ns",
            "range": "± 86175.14404366189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 976124.7248263889,
            "unit": "ns",
            "range": "± 20196.90235961972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920040.5636160715,
            "unit": "ns",
            "range": "± 21676.873215468575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126851.54081632652,
            "unit": "ns",
            "range": "± 16857.04524570788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246358.26086956522,
            "unit": "ns",
            "range": "± 19387.983932430063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200737.40217391305,
            "unit": "ns",
            "range": "± 13283.513428769624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4418995.373626374,
            "unit": "ns",
            "range": "± 245852.91137700155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11937937.733333332,
            "unit": "ns",
            "range": "± 221479.76130900817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28438.22680412371,
            "unit": "ns",
            "range": "± 4152.33702144837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70742.2947368421,
            "unit": "ns",
            "range": "± 9807.165572772823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55149.208333333336,
            "unit": "ns",
            "range": "± 7012.30194491557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116455.21052631579,
            "unit": "ns",
            "range": "± 20052.97172909724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12225.602040816326,
            "unit": "ns",
            "range": "± 5842.157112453732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29150.083333333332,
            "unit": "ns",
            "range": "± 6060.772929111072"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5983665.577265625,
            "unit": "ns",
            "range": "± 461798.25262362545"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6935727.113636363,
            "unit": "ns",
            "range": "± 402309.86543223355"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31547323.729166668,
            "unit": "ns",
            "range": "± 2143336.3884985116"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7432388.021052632,
            "unit": "ns",
            "range": "± 475643.6530022436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38645230.071428575,
            "unit": "ns",
            "range": "± 2600098.177757772"
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
          "id": "c4a221fa87b0349581f1c553c409f03226a7d463",
          "message": "Merge pull request #2747 from greymistcube/bump/bencodex\n\n⬆️ Bump dependencies",
          "timestamp": "2023-02-01T00:16:32-05:00",
          "tree_id": "1a4a36fa3a502a8f1e77f01d995fe25a562bbc14",
          "url": "https://github.com/planetarium/libplanet/commit/c4a221fa87b0349581f1c553c409f03226a7d463"
        },
        "date": 1675229233973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109586.15789473684,
            "unit": "ns",
            "range": "± 3639.6404078864402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6024701.936383928,
            "unit": "ns",
            "range": "± 26379.730029953786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1815813.0533854167,
            "unit": "ns",
            "range": "± 1127.3660001689268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395550.1661551339,
            "unit": "ns",
            "range": "± 691.042842904426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616340.8994791666,
            "unit": "ns",
            "range": "± 1953.9818008705784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825241.8490885417,
            "unit": "ns",
            "range": "± 693.8385997017424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745621.935686384,
            "unit": "ns",
            "range": "± 415.11856757514687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98258.5,
            "unit": "ns",
            "range": "± 11971.447253584707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211336.15277777778,
            "unit": "ns",
            "range": "± 8121.432990636604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202269.86666666667,
            "unit": "ns",
            "range": "± 7685.2364623229505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3854061.2666666666,
            "unit": "ns",
            "range": "± 33021.526287444394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9571323,
            "unit": "ns",
            "range": "± 51931.061299498855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19257.372340425532,
            "unit": "ns",
            "range": "± 2082.330161833766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51236.619047619046,
            "unit": "ns",
            "range": "± 2642.690268103092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44892.56122448979,
            "unit": "ns",
            "range": "± 2908.3693772210663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99569.6530612245,
            "unit": "ns",
            "range": "± 15456.435093381602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5382.453608247422,
            "unit": "ns",
            "range": "± 678.5611158396517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20293.547368421052,
            "unit": "ns",
            "range": "± 3143.027503648323"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4448263.147879465,
            "unit": "ns",
            "range": "± 16422.289221136685"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6151109.5,
            "unit": "ns",
            "range": "± 68417.73775041538"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25846497.2,
            "unit": "ns",
            "range": "± 340823.56111236545"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6991730.588235294,
            "unit": "ns",
            "range": "± 141440.19246224657"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29067096.35714286,
            "unit": "ns",
            "range": "± 471586.9836012158"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "622343fb5ad8eccdccbe4e30f839a81297e40a3f",
          "message": "Merge pull request #2757 from limebell/chore/fix-state-graphql\n\nFix `stateQuery`",
          "timestamp": "2023-02-01T17:10:41+09:00",
          "tree_id": "0b29c0c2db1ace8da55214796291760b1c449cf1",
          "url": "https://github.com/planetarium/libplanet/commit/622343fb5ad8eccdccbe4e30f839a81297e40a3f"
        },
        "date": 1675239697732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108183.13636363637,
            "unit": "ns",
            "range": "± 4042.7187754346187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5866071.646033654,
            "unit": "ns",
            "range": "± 9742.476193527664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850210.7346754808,
            "unit": "ns",
            "range": "± 3076.6518004887444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1411101.0358537945,
            "unit": "ns",
            "range": "± 638.9903704521004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590764.4416852677,
            "unit": "ns",
            "range": "± 1356.803275107174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835098.8253348215,
            "unit": "ns",
            "range": "± 710.2248894005351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796945.3510044643,
            "unit": "ns",
            "range": "± 846.330660524221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92783.75824175825,
            "unit": "ns",
            "range": "± 5633.719387838157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205590.68354430379,
            "unit": "ns",
            "range": "± 10644.485627326798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195468.9019607843,
            "unit": "ns",
            "range": "± 7956.153133908126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3814552.4285714286,
            "unit": "ns",
            "range": "± 15512.824549207844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9402998.333333334,
            "unit": "ns",
            "range": "± 59429.84231568065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17894.23943661972,
            "unit": "ns",
            "range": "± 868.9620485677763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50621.53658536585,
            "unit": "ns",
            "range": "± 2454.696683357632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45259.927083333336,
            "unit": "ns",
            "range": "± 2986.33816692932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86246.94186046511,
            "unit": "ns",
            "range": "± 7889.794568793062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5015.443298969072,
            "unit": "ns",
            "range": "± 478.32681403234824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17495.483516483517,
            "unit": "ns",
            "range": "± 1593.4433529842595"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4525459.18515625,
            "unit": "ns",
            "range": "± 38984.6707156966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6210976.846153846,
            "unit": "ns",
            "range": "± 70207.93748792008"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26109874,
            "unit": "ns",
            "range": "± 303588.10748700035"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6414230.3802816905,
            "unit": "ns",
            "range": "± 305746.007551243"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29251340,
            "unit": "ns",
            "range": "± 534831.0929057082"
          }
        ]
      }
    ]
  }
}