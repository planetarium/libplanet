window.BENCHMARK_DATA = {
  "lastUpdate": 1673374872789,
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
      }
    ]
  }
}