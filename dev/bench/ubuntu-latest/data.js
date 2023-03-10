window.BENCHMARK_DATA = {
  "lastUpdate": 1678415280762,
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
          "id": "38f93473747ee77117b2b39a10ec7b37ae8f1d34",
          "message": "Merge pull request #2761 from dahlia/filemode-create",
          "timestamp": "2023-02-01T18:33:34+09:00",
          "tree_id": "30e09de5c9aa2ef978327ac1d621a1b7bd24d8c6",
          "url": "https://github.com/planetarium/libplanet/commit/38f93473747ee77117b2b39a10ec7b37ae8f1d34"
        },
        "date": 1675245036488,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 140395.72448979592,
            "unit": "ns",
            "range": "± 25048.242547474787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6752890.461371528,
            "unit": "ns",
            "range": "± 134649.6329383367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2218461.229055851,
            "unit": "ns",
            "range": "± 86441.3027081862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1602878.6356847426,
            "unit": "ns",
            "range": "± 31543.588550796645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2997941.552951389,
            "unit": "ns",
            "range": "± 57132.988326426625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992399.3515625,
            "unit": "ns",
            "range": "± 12306.496973076613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931240.8937639509,
            "unit": "ns",
            "range": "± 12590.40274731728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121260.14893617021,
            "unit": "ns",
            "range": "± 27929.456060350367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244329.83673469388,
            "unit": "ns",
            "range": "± 40411.783921594535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241671.28282828283,
            "unit": "ns",
            "range": "± 46971.35606073661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4466210.15,
            "unit": "ns",
            "range": "± 314512.3093745756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11237694.363636363,
            "unit": "ns",
            "range": "± 739470.8653447845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28597.636363636364,
            "unit": "ns",
            "range": "± 8753.907444101102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76159.43157894736,
            "unit": "ns",
            "range": "± 10867.380401969918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58392.47872340425,
            "unit": "ns",
            "range": "± 13658.346436959913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130955.54166666667,
            "unit": "ns",
            "range": "± 33237.148511842075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5243.510869565217,
            "unit": "ns",
            "range": "± 764.8725311393678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33146.683673469386,
            "unit": "ns",
            "range": "± 12224.61684394976"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6198768.213857323,
            "unit": "ns",
            "range": "± 382989.8290994424"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6506612.864583333,
            "unit": "ns",
            "range": "± 403097.0242193525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33091922.12121212,
            "unit": "ns",
            "range": "± 2087850.2866228137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7501028.091836735,
            "unit": "ns",
            "range": "± 450450.7479345158"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38029976.171717174,
            "unit": "ns",
            "range": "± 2530856.534381301"
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
          "id": "34cf338c2cfb65517f6d739ce3aff01c3dd33863",
          "message": "Merge pull request #2759 from greymistcube/refactor/apv-spec\n\n♻️ Removed nullability from `TrustedAppProtocolVersionSigners`",
          "timestamp": "2023-02-01T05:48:32-05:00",
          "tree_id": "f7fb41009837e35e3aeab81ed0b217dea613d067",
          "url": "https://github.com/planetarium/libplanet/commit/34cf338c2cfb65517f6d739ce3aff01c3dd33863"
        },
        "date": 1675249458415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 131882.26,
            "unit": "ns",
            "range": "± 5322.804845268735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6852382.021972656,
            "unit": "ns",
            "range": "± 209278.40747635442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2102926.9455422796,
            "unit": "ns",
            "range": "± 84569.6315449159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1553368.8298549107,
            "unit": "ns",
            "range": "± 50530.91381395134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3023344.263260691,
            "unit": "ns",
            "range": "± 104238.48604881683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955694.4730113636,
            "unit": "ns",
            "range": "± 22718.439223994486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904851.3519603588,
            "unit": "ns",
            "range": "± 24962.293649142783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107770.70833333333,
            "unit": "ns",
            "range": "± 10704.672668774792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239267.34782608695,
            "unit": "ns",
            "range": "± 15220.83160457504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212982.61538461538,
            "unit": "ns",
            "range": "± 9961.029453406642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4476514.265060241,
            "unit": "ns",
            "range": "± 236773.9824390569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11780783.733333332,
            "unit": "ns",
            "range": "± 192460.43143293736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22554.902173913044,
            "unit": "ns",
            "range": "± 2118.0551418061536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62441.574468085106,
            "unit": "ns",
            "range": "± 6117.977442669967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47844.857142857145,
            "unit": "ns",
            "range": "± 3340.963799845199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111742.8469387755,
            "unit": "ns",
            "range": "± 22658.59167030214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6190.510638297872,
            "unit": "ns",
            "range": "± 810.0719700494537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23675.76404494382,
            "unit": "ns",
            "range": "± 2168.8810637498186"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5908025.5128125,
            "unit": "ns",
            "range": "± 381892.43996367225"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6895875.861702127,
            "unit": "ns",
            "range": "± 472340.0843471891"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32754815.24,
            "unit": "ns",
            "range": "± 2028168.8033617418"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7323910.451612903,
            "unit": "ns",
            "range": "± 533385.8345461468"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39359429.79,
            "unit": "ns",
            "range": "± 2918866.019335987"
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
          "id": "e9ba50938e53aaa87fcf3d3ec943201b191b21e0",
          "message": "Merge pull request #2765 from moreal/renew-copyright-years",
          "timestamp": "2023-02-02T12:10:22+09:00",
          "tree_id": "753222425a63a7b9126c103b5a701a5d57de1841",
          "url": "https://github.com/planetarium/libplanet/commit/e9ba50938e53aaa87fcf3d3ec943201b191b21e0"
        },
        "date": 1675308100364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110192.07142857143,
            "unit": "ns",
            "range": "± 1790.426054335659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5851640.453125,
            "unit": "ns",
            "range": "± 14514.187814418783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1808836.4252604167,
            "unit": "ns",
            "range": "± 3839.603083710276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1330670.6577845982,
            "unit": "ns",
            "range": "± 2454.3325013039907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583521.6746651786,
            "unit": "ns",
            "range": "± 4704.721021591143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852350.0023018973,
            "unit": "ns",
            "range": "± 3761.953949041856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739440.2363978794,
            "unit": "ns",
            "range": "± 960.9171388748541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85600.35789473684,
            "unit": "ns",
            "range": "± 5048.856468202098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196106.14285714287,
            "unit": "ns",
            "range": "± 9984.510583786488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177327.42105263157,
            "unit": "ns",
            "range": "± 2254.4716384157623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3713037.2,
            "unit": "ns",
            "range": "± 34119.83971491409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9213126.533333333,
            "unit": "ns",
            "range": "± 54526.66897015581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16314.355263157895,
            "unit": "ns",
            "range": "± 838.1244729187085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47896.269662921346,
            "unit": "ns",
            "range": "± 3653.218060721648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39423.47619047619,
            "unit": "ns",
            "range": "± 917.4702512369336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84646.32653061225,
            "unit": "ns",
            "range": "± 14653.419901856141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4377.052083333333,
            "unit": "ns",
            "range": "± 309.6593840026121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17360.239583333332,
            "unit": "ns",
            "range": "± 2034.0497625998378"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4297925.295200893,
            "unit": "ns",
            "range": "± 19653.925909527115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6071851.466666667,
            "unit": "ns",
            "range": "± 65827.968330736"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24637432.42857143,
            "unit": "ns",
            "range": "± 245212.18258408035"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6716654.230769231,
            "unit": "ns",
            "range": "± 80551.38242570581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28747228.285714287,
            "unit": "ns",
            "range": "± 474407.57277884183"
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
          "id": "adf33364339535ea69cd14f13959a77b93cc3dd2",
          "message": "Merge pull request #2768 from moreal/upgrade-docfx",
          "timestamp": "2023-02-03T12:39:42+09:00",
          "tree_id": "b74ca2e06d37677af4d179cc47cd5fd8c7be1dc7",
          "url": "https://github.com/planetarium/libplanet/commit/adf33364339535ea69cd14f13959a77b93cc3dd2"
        },
        "date": 1675396336399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118630.27835051547,
            "unit": "ns",
            "range": "± 7253.6577952986745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6199454.059709822,
            "unit": "ns",
            "range": "± 28476.72355433818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864119.673549107,
            "unit": "ns",
            "range": "± 1848.852967412229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383396.2393973214,
            "unit": "ns",
            "range": "± 496.72297576028484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622435.415625,
            "unit": "ns",
            "range": "± 1769.2898889257167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829151.680078125,
            "unit": "ns",
            "range": "± 820.4475427684504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784529.1824869792,
            "unit": "ns",
            "range": "± 1001.6472653593751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97349.44444444444,
            "unit": "ns",
            "range": "± 7578.515776409216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212932.3111111111,
            "unit": "ns",
            "range": "± 12926.774120427312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211603.45454545456,
            "unit": "ns",
            "range": "± 5199.748004217061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3908793.6,
            "unit": "ns",
            "range": "± 23465.759598676046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9597302,
            "unit": "ns",
            "range": "± 45093.25533909615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21546.822916666668,
            "unit": "ns",
            "range": "± 2686.570374815765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54057.98901098901,
            "unit": "ns",
            "range": "± 3394.7011241197833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50528.14772727273,
            "unit": "ns",
            "range": "± 2792.390730077018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102376.03529411765,
            "unit": "ns",
            "range": "± 7704.2488439003255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6501.031578947369,
            "unit": "ns",
            "range": "± 617.1925188910994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20258.884210526317,
            "unit": "ns",
            "range": "± 2380.988547887951"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4538246.269270834,
            "unit": "ns",
            "range": "± 43551.157132806904"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6192125.928571428,
            "unit": "ns",
            "range": "± 57087.88032022247"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26024338.230769232,
            "unit": "ns",
            "range": "± 353352.9442986511"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6641629.703703703,
            "unit": "ns",
            "range": "± 184624.21735406527"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29018028.333333332,
            "unit": "ns",
            "range": "± 405851.5824949641"
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
          "id": "7224c5241bcd7dd14b249d9e59ca4bf7cb8dd790",
          "message": "Merge pull request #2779 from greymistcube/merge/0.46.1-to-main\n\n🔀 Merge 0.46.1 to main",
          "timestamp": "2023-02-03T03:36:31-05:00",
          "tree_id": "c2c372a632e6731bdff78b0a41c86c92555cd851",
          "url": "https://github.com/planetarium/libplanet/commit/7224c5241bcd7dd14b249d9e59ca4bf7cb8dd790"
        },
        "date": 1675414037954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106742.9268292683,
            "unit": "ns",
            "range": "± 3175.575887852815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5883731.061979166,
            "unit": "ns",
            "range": "± 16449.659193402404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881229.1947544643,
            "unit": "ns",
            "range": "± 2721.462108062751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368451.6538783482,
            "unit": "ns",
            "range": "± 2333.888596668453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605069.8606770835,
            "unit": "ns",
            "range": "± 1446.1473739984224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812875.2754720052,
            "unit": "ns",
            "range": "± 799.1096496399247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746007.2752278646,
            "unit": "ns",
            "range": "± 583.439271400265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92960.84848484848,
            "unit": "ns",
            "range": "± 9135.796115308309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210522.60638297873,
            "unit": "ns",
            "range": "± 14140.252428293943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191447.1914893617,
            "unit": "ns",
            "range": "± 7392.224295011081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3807416.8571428573,
            "unit": "ns",
            "range": "± 33095.08980744179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9398728.266666668,
            "unit": "ns",
            "range": "± 83862.6751348951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17425.136842105265,
            "unit": "ns",
            "range": "± 2202.3845520520667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52036.086021505376,
            "unit": "ns",
            "range": "± 4907.1145547449205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42196.60101010101,
            "unit": "ns",
            "range": "± 3185.782239809991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90427.0412371134,
            "unit": "ns",
            "range": "± 13100.20274486678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4193.708333333333,
            "unit": "ns",
            "range": "± 500.0884535794731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17565.802197802197,
            "unit": "ns",
            "range": "± 1590.9193304486294"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4396668.818489583,
            "unit": "ns",
            "range": "± 19307.402769436765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6062308.923076923,
            "unit": "ns",
            "range": "± 74436.23712330523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25516924.076923076,
            "unit": "ns",
            "range": "± 321329.79057230847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6961508.538461538,
            "unit": "ns",
            "range": "± 65835.73291611907"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29536636.133333333,
            "unit": "ns",
            "range": "± 317897.59550631273"
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
          "id": "a6759f47790a09d0af4410cfe3837ec937d85179",
          "message": "Merge pull request #2781 from greymistcube/refactor/address-hex-exception\n\nUpdated `DeriveAddress()` to be more stringent",
          "timestamp": "2023-02-03T04:33:13-05:00",
          "tree_id": "515a3472f38eeb6b9789eb6418e6200660c8d39a",
          "url": "https://github.com/planetarium/libplanet/commit/a6759f47790a09d0af4410cfe3837ec937d85179"
        },
        "date": 1675417581229,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111906.43298969071,
            "unit": "ns",
            "range": "± 7327.929921578605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6185858.585416666,
            "unit": "ns",
            "range": "± 39669.948360573886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1824486.2717447917,
            "unit": "ns",
            "range": "± 7201.23292667227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369401.4721354167,
            "unit": "ns",
            "range": "± 7119.55082399466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648456.627083333,
            "unit": "ns",
            "range": "± 12600.407409930665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816813.1992838542,
            "unit": "ns",
            "range": "± 2491.8575290275767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759423.2495814732,
            "unit": "ns",
            "range": "± 2733.8886921698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96905.97777777778,
            "unit": "ns",
            "range": "± 9356.987082278547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216655.2105263158,
            "unit": "ns",
            "range": "± 16703.532909457652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202908.68686868687,
            "unit": "ns",
            "range": "± 12271.288603597626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3836224,
            "unit": "ns",
            "range": "± 25582.34476423855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9414605.923076924,
            "unit": "ns",
            "range": "± 38029.104550465774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20600.933333333334,
            "unit": "ns",
            "range": "± 2304.0305124384076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56855.56989247312,
            "unit": "ns",
            "range": "± 6904.387740695498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50630.63,
            "unit": "ns",
            "range": "± 5562.792534411928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103745.87777777777,
            "unit": "ns",
            "range": "± 11996.022019330603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6107.102040816327,
            "unit": "ns",
            "range": "± 1031.7918603519681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20483.298969072166,
            "unit": "ns",
            "range": "± 2752.891972411878"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4560158.856090199,
            "unit": "ns",
            "range": "± 170812.74702073942"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6513178.785714285,
            "unit": "ns",
            "range": "± 64746.04318552076"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26240584.615384616,
            "unit": "ns",
            "range": "± 266928.8921184624"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7039647.857142857,
            "unit": "ns",
            "range": "± 160457.08925232495"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30099600.913043477,
            "unit": "ns",
            "range": "± 752507.0053810381"
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
          "id": "33947f44a808a7d03c3a526ec5022d753886a251",
          "message": "Merge pull request #2780 from dahlia/secp256k1",
          "timestamp": "2023-02-03T18:39:03+09:00",
          "tree_id": "625c4a4d87f1aaea852b62710a37ae3481e5784e",
          "url": "https://github.com/planetarium/libplanet/commit/33947f44a808a7d03c3a526ec5022d753886a251"
        },
        "date": 1675417850941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 115374.68421052632,
            "unit": "ns",
            "range": "± 2478.7704625172446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5757090.1625,
            "unit": "ns",
            "range": "± 27413.055284353806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1817504.1079427083,
            "unit": "ns",
            "range": "± 9836.14253798224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327871.4475260417,
            "unit": "ns",
            "range": "± 4013.734080603727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616847.1241629464,
            "unit": "ns",
            "range": "± 5197.481764503428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825469.2565755208,
            "unit": "ns",
            "range": "± 2121.506983905635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752015.1438551683,
            "unit": "ns",
            "range": "± 1190.9424535156272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93478.16666666667,
            "unit": "ns",
            "range": "± 7986.57673674584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205639.97894736842,
            "unit": "ns",
            "range": "± 14096.308397816802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175619.30434782608,
            "unit": "ns",
            "range": "± 3959.803225537885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3852704.5714285714,
            "unit": "ns",
            "range": "± 43456.425419766594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9397142.2,
            "unit": "ns",
            "range": "± 168520.61133082295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18695.6404494382,
            "unit": "ns",
            "range": "± 1307.4581537471079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50448.88764044944,
            "unit": "ns",
            "range": "± 3262.719064182101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41700.583333333336,
            "unit": "ns",
            "range": "± 573.6488406893562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85048.5376344086,
            "unit": "ns",
            "range": "± 11887.930059480992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5034.3263157894735,
            "unit": "ns",
            "range": "± 345.86728613625905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19129.597826086956,
            "unit": "ns",
            "range": "± 2043.1494437915092"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4812208.328962053,
            "unit": "ns",
            "range": "± 42510.88568692485"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6189522.142857143,
            "unit": "ns",
            "range": "± 57747.32757433908"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26466645.45,
            "unit": "ns",
            "range": "± 596447.1385562553"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6792030.571428572,
            "unit": "ns",
            "range": "± 96436.72171845225"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29765606.733333334,
            "unit": "ns",
            "range": "± 423807.0732642165"
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
          "id": "a0dc47eb525c41cb1037ac955230672edffc310e",
          "message": "Merge pull request #2778 from greymistcube/refactor/introduce-ibencodable\n\n♻️ Introduce `IBencodable`",
          "timestamp": "2023-02-06T00:40:28-05:00",
          "tree_id": "67584a25f801cb9f64bb5fbb95582aae68e9725a",
          "url": "https://github.com/planetarium/libplanet/commit/a0dc47eb525c41cb1037ac955230672edffc310e"
        },
        "date": 1675663059692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 159035.73684210525,
            "unit": "ns",
            "range": "± 16899.20733078136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7092966.682725694,
            "unit": "ns",
            "range": "± 146683.2925557118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2334658.6432976974,
            "unit": "ns",
            "range": "± 50314.35335496593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1649031.5452148437,
            "unit": "ns",
            "range": "± 35952.493030981976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3300383.6497395835,
            "unit": "ns",
            "range": "± 41138.6464827306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047730.8113064236,
            "unit": "ns",
            "range": "± 21500.703503060413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965902.6905799279,
            "unit": "ns",
            "range": "± 15328.87089793397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115564.27835051547,
            "unit": "ns",
            "range": "± 20708.10779156634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270495.75,
            "unit": "ns",
            "range": "± 29698.699150317218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254870.38947368422,
            "unit": "ns",
            "range": "± 29760.994515631734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5053798.971428571,
            "unit": "ns",
            "range": "± 161886.2720614992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12783158.92,
            "unit": "ns",
            "range": "± 333214.3943735675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34972.69387755102,
            "unit": "ns",
            "range": "± 9026.524232491483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80638.30107526881,
            "unit": "ns",
            "range": "± 12091.517343544523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81295.51515151515,
            "unit": "ns",
            "range": "± 12887.074391605258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157788.625,
            "unit": "ns",
            "range": "± 27368.96215837049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8705.315789473685,
            "unit": "ns",
            "range": "± 1825.7033582377783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36336.19,
            "unit": "ns",
            "range": "± 10784.498624400525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6257587.438771802,
            "unit": "ns",
            "range": "± 338351.064232532"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7255200.31,
            "unit": "ns",
            "range": "± 629638.3148855163"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34220992.72,
            "unit": "ns",
            "range": "± 1378345.2772777355"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7718407.479166667,
            "unit": "ns",
            "range": "± 536700.6966068455"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40936148.61818182,
            "unit": "ns",
            "range": "± 1739274.3133837879"
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
          "id": "499dfc25de2a571c64cc8b4f73a1c319a9c337eb",
          "message": "Merge pull request #2784 from greymistcube/fix/stage-policy-tx-lifetime\n\nFix `VolatileStagePolicy<T>`'s `Expired()`",
          "timestamp": "2023-02-06T03:53:36-05:00",
          "tree_id": "1e3c47f25243a823a52dd1aa65efed780dda95f5",
          "url": "https://github.com/planetarium/libplanet/commit/499dfc25de2a571c64cc8b4f73a1c319a9c337eb"
        },
        "date": 1675674219102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106143.61111111111,
            "unit": "ns",
            "range": "± 2221.0752599715115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900968.712611607,
            "unit": "ns",
            "range": "± 17177.36171310222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845381.7845052083,
            "unit": "ns",
            "range": "± 1336.6724348372586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358788.2229166667,
            "unit": "ns",
            "range": "± 1388.7520350598643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576946.5851004464,
            "unit": "ns",
            "range": "± 2534.7954648815244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805226.6776646206,
            "unit": "ns",
            "range": "± 3471.6592178945943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768488.885141226,
            "unit": "ns",
            "range": "± 1086.1081571939183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92417.21052631579,
            "unit": "ns",
            "range": "± 7218.826837696965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204388.79347826086,
            "unit": "ns",
            "range": "± 13873.391503667117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191678.10256410256,
            "unit": "ns",
            "range": "± 6670.082820423525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3775443.466666667,
            "unit": "ns",
            "range": "± 35258.689072678375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9364472.133333333,
            "unit": "ns",
            "range": "± 82068.79599098262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17170.49411764706,
            "unit": "ns",
            "range": "± 986.9228708167504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53070.0306122449,
            "unit": "ns",
            "range": "± 6928.6255289705705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48695.63636363636,
            "unit": "ns",
            "range": "± 3623.8365436358645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100220.89690721649,
            "unit": "ns",
            "range": "± 15256.04098756493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5555.7052631578945,
            "unit": "ns",
            "range": "± 709.0150176017222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18530.347826086956,
            "unit": "ns",
            "range": "± 1703.268599382838"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4422327.5453125,
            "unit": "ns",
            "range": "± 20526.08781145767"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6080741.538461538,
            "unit": "ns",
            "range": "± 93941.249874248"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25520338,
            "unit": "ns",
            "range": "± 266151.71893784835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6465588.428571428,
            "unit": "ns",
            "range": "± 211595.25219004735"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28903983.666666668,
            "unit": "ns",
            "range": "± 438356.1965184195"
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
          "id": "fc0bf18df59f7db4696ac3d0651606c9249d8970",
          "message": "Merge pull request #2785 from dahlia/0.47-maintenance",
          "timestamp": "2023-02-06T18:25:12+09:00",
          "tree_id": "53db093dbd48af0fef71deff416cfa11e689ac2c",
          "url": "https://github.com/planetarium/libplanet/commit/fc0bf18df59f7db4696ac3d0651606c9249d8970"
        },
        "date": 1675676386640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127001.65656565657,
            "unit": "ns",
            "range": "± 10537.041575630401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6088458.828125,
            "unit": "ns",
            "range": "± 38901.35060489304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873480.164341518,
            "unit": "ns",
            "range": "± 1975.4657602565453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382850.6723958333,
            "unit": "ns",
            "range": "± 4657.004716284778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2720765.779854911,
            "unit": "ns",
            "range": "± 9702.874382676166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833860.001171875,
            "unit": "ns",
            "range": "± 1350.2148709235867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770890.2417689732,
            "unit": "ns",
            "range": "± 283.55746679811324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120439.17346938775,
            "unit": "ns",
            "range": "± 10364.41246341857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225746.15217391305,
            "unit": "ns",
            "range": "± 13015.965646576222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204750.40404040404,
            "unit": "ns",
            "range": "± 13314.849003197249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104634.533333333,
            "unit": "ns",
            "range": "± 48708.7968629702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10429961.6,
            "unit": "ns",
            "range": "± 109484.7606491424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28045.044943820223,
            "unit": "ns",
            "range": "± 3149.5858959772663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68088.34736842105,
            "unit": "ns",
            "range": "± 7539.710999270437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48327.34020618557,
            "unit": "ns",
            "range": "± 3801.921862927239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127469.11458333333,
            "unit": "ns",
            "range": "± 18750.764164004115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7719.608695652174,
            "unit": "ns",
            "range": "± 875.8746329645627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30408.112359550563,
            "unit": "ns",
            "range": "± 2806.080987776216"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5270560.275331439,
            "unit": "ns",
            "range": "± 333307.7381846035"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7044538.384615385,
            "unit": "ns",
            "range": "± 63510.75332773506"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29373242.769230768,
            "unit": "ns",
            "range": "± 384462.7253248256"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7162208.357142857,
            "unit": "ns",
            "range": "± 384472.33565851557"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33959855.631578945,
            "unit": "ns",
            "range": "± 749642.0720528498"
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
          "id": "1ee05f822563c1ea82107fb0f9094c9c77b31765",
          "message": "Merge pull request #2787 from dahlia/0.47-maintenance",
          "timestamp": "2023-02-06T18:49:39+09:00",
          "tree_id": "5d2a23ed4ec68dfe81453559fc48831b80b6e4e1",
          "url": "https://github.com/planetarium/libplanet/commit/1ee05f822563c1ea82107fb0f9094c9c77b31765"
        },
        "date": 1675677915069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 131173.96202531646,
            "unit": "ns",
            "range": "± 6561.637228156098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6998709.838727678,
            "unit": "ns",
            "range": "± 54142.11386872639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2156038.26171875,
            "unit": "ns",
            "range": "± 26925.267826088897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1592296.6309988839,
            "unit": "ns",
            "range": "± 6635.149204708808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3119776.094010417,
            "unit": "ns",
            "range": "± 15758.694100887931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002565.5864583333,
            "unit": "ns",
            "range": "± 10710.406426963958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901094.556501116,
            "unit": "ns",
            "range": "± 6620.342882427492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110046.9052631579,
            "unit": "ns",
            "range": "± 10871.228274351393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257053.04,
            "unit": "ns",
            "range": "± 9382.213430502965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213050.08695652173,
            "unit": "ns",
            "range": "± 7933.444651392922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4703031,
            "unit": "ns",
            "range": "± 92875.75800767388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11622623.6875,
            "unit": "ns",
            "range": "± 225607.50821185563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25355.90322580645,
            "unit": "ns",
            "range": "± 2818.963739855466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62925.188888888886,
            "unit": "ns",
            "range": "± 4639.449482777665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49365.1186440678,
            "unit": "ns",
            "range": "± 2189.068524035341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115381.59793814433,
            "unit": "ns",
            "range": "± 19074.20668493395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6109.802083333333,
            "unit": "ns",
            "range": "± 562.7453124926552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25961.063157894736,
            "unit": "ns",
            "range": "± 3050.5099253205653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6077943.711174242,
            "unit": "ns",
            "range": "± 413812.52268693683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7108497.066666666,
            "unit": "ns",
            "range": "± 557674.3259668292"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33079210.893617023,
            "unit": "ns",
            "range": "± 1279803.0288891306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7723326.381443299,
            "unit": "ns",
            "range": "± 485744.57549039344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36893148.4,
            "unit": "ns",
            "range": "± 1098885.7916264029"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/planetarium/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675678899615,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110978.85245901639,
            "unit": "ns",
            "range": "± 4965.399493280359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5840534.111607143,
            "unit": "ns",
            "range": "± 21552.290211384836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836316.290736607,
            "unit": "ns",
            "range": "± 2858.738922805201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345819.711328125,
            "unit": "ns",
            "range": "± 5067.772810792121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2731162.9095052085,
            "unit": "ns",
            "range": "± 3920.593501373118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836029.2541852678,
            "unit": "ns",
            "range": "± 1107.7840422367344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778519.4513972356,
            "unit": "ns",
            "range": "± 670.967146510867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95986.98958333333,
            "unit": "ns",
            "range": "± 8978.924921573784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210218.69444444444,
            "unit": "ns",
            "range": "± 10412.559923421422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180069.58333333334,
            "unit": "ns",
            "range": "± 5613.260327754527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3908427.4285714286,
            "unit": "ns",
            "range": "± 36010.02263839308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9725878.142857144,
            "unit": "ns",
            "range": "± 128851.61662569447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19865.3,
            "unit": "ns",
            "range": "± 1058.4960479587553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56020.358695652176,
            "unit": "ns",
            "range": "± 5312.4551361136455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41456.75,
            "unit": "ns",
            "range": "± 811.7339054969513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95178.9247311828,
            "unit": "ns",
            "range": "± 12740.154052748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5607.285714285715,
            "unit": "ns",
            "range": "± 99.63736445533068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20040.125,
            "unit": "ns",
            "range": "± 1205.641669307309"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4974792.321814904,
            "unit": "ns",
            "range": "± 30845.50990296457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5829921.222222222,
            "unit": "ns",
            "range": "± 221757.9864332951"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26949664.42857143,
            "unit": "ns",
            "range": "± 392307.1449838005"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7010488.166666667,
            "unit": "ns",
            "range": "± 178218.3107975615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32181541.585365854,
            "unit": "ns",
            "range": "± 1145507.1441399432"
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
          "id": "aa1d444f32ba468fb15186d7113078a52f164b84",
          "message": "Merge pull request #2789 from greymistcube/optimization/to-hex\n\nOptimized `ByteUtil.Hex()`",
          "timestamp": "2023-02-06T23:04:55-05:00",
          "tree_id": "5fe2aa515e26af275b2fb61b507c9812bb1791fb",
          "url": "https://github.com/planetarium/libplanet/commit/aa1d444f32ba468fb15186d7113078a52f164b84"
        },
        "date": 1675743383308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102979.86363636363,
            "unit": "ns",
            "range": "± 4856.057070651721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5992607.861458333,
            "unit": "ns",
            "range": "± 37255.10347784404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843249.8946814905,
            "unit": "ns",
            "range": "± 1845.3184863069523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343143.2018229167,
            "unit": "ns",
            "range": "± 1571.5865007407087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572676.095145089,
            "unit": "ns",
            "range": "± 2907.5923226064383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802612.827749399,
            "unit": "ns",
            "range": "± 1197.436332630292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759130.7223307291,
            "unit": "ns",
            "range": "± 352.20261814806304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89551.64583333333,
            "unit": "ns",
            "range": "± 8055.478281045981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195137.18309859154,
            "unit": "ns",
            "range": "± 5624.237213829493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182521.94339622642,
            "unit": "ns",
            "range": "± 7602.939609668937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3860310,
            "unit": "ns",
            "range": "± 30755.714765134067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9464279.42857143,
            "unit": "ns",
            "range": "± 64410.85358458236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14959.364864864865,
            "unit": "ns",
            "range": "± 712.3308946031655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46402,
            "unit": "ns",
            "range": "± 2417.871373132056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44423.408602150535,
            "unit": "ns",
            "range": "± 2785.425700181132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90663.82105263158,
            "unit": "ns",
            "range": "± 11953.978813250307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5549.453608247422,
            "unit": "ns",
            "range": "± 562.0088044353812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16439.22340425532,
            "unit": "ns",
            "range": "± 1216.7186451196658"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4437690.592075893,
            "unit": "ns",
            "range": "± 24916.77445986834"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5455690.490196078,
            "unit": "ns",
            "range": "± 188547.40420195367"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25048985.923076924,
            "unit": "ns",
            "range": "± 226262.38448000347"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6807974.208333333,
            "unit": "ns",
            "range": "± 169211.9245196696"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28592980.6,
            "unit": "ns",
            "range": "± 527346.6816742365"
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
          "id": "ff823f8435133689fcbd3f26508e40a2eab969ae",
          "message": "Merge pull request #2794 from greymistcube/refactor/block-candidate-table\n\n♻️ Refactor `BlockCandidateTable`",
          "timestamp": "2023-02-09T21:28:56-05:00",
          "tree_id": "14149c45e4f6ef1a8c5f8a1337e278ea2c7177f0",
          "url": "https://github.com/planetarium/libplanet/commit/ff823f8435133689fcbd3f26508e40a2eab969ae"
        },
        "date": 1675996791802,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100694.48214285714,
            "unit": "ns",
            "range": "± 4343.213104649897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5785967.020833333,
            "unit": "ns",
            "range": "± 37421.37738403242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819450.9793526786,
            "unit": "ns",
            "range": "± 1701.9645072696346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331970.5735677083,
            "unit": "ns",
            "range": "± 1779.7576736952683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549417.2802083334,
            "unit": "ns",
            "range": "± 2303.3377423450247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797648.2935965402,
            "unit": "ns",
            "range": "± 858.0715996981463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757425.0973772322,
            "unit": "ns",
            "range": "± 1085.9345324799856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87288.5612244898,
            "unit": "ns",
            "range": "± 7640.204157506387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199737.1505376344,
            "unit": "ns",
            "range": "± 11950.536230415913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166799.5,
            "unit": "ns",
            "range": "± 2912.8416405765906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3811509.4,
            "unit": "ns",
            "range": "± 25691.140445686717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9532929.8,
            "unit": "ns",
            "range": "± 40891.346788427356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16045.54945054945,
            "unit": "ns",
            "range": "± 1345.0369781264278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48829.75862068965,
            "unit": "ns",
            "range": "± 3229.982658768041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41768.05454545454,
            "unit": "ns",
            "range": "± 1776.1958873680094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91808.14583333333,
            "unit": "ns",
            "range": "± 15567.18196042672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5361.835051546392,
            "unit": "ns",
            "range": "± 650.0650236773173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15474.161290322581,
            "unit": "ns",
            "range": "± 1610.7111330519344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4417623.155989584,
            "unit": "ns",
            "range": "± 40817.22362583197"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5954050.357142857,
            "unit": "ns",
            "range": "± 103563.09003070927"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25115647.866666667,
            "unit": "ns",
            "range": "± 331083.1148889239"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6656203.533333333,
            "unit": "ns",
            "range": "± 84432.6664456584"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28255969.6,
            "unit": "ns",
            "range": "± 505293.1930857852"
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
          "id": "9c7b9d6526da36c7e6b3ea0ef992d1c303fc4c43",
          "message": "Merge pull request #2790 from greymistcube/optimization/parse-hex\n\nOptimized `ParseHex()`",
          "timestamp": "2023-02-10T02:25:36-05:00",
          "tree_id": "850470ee0ab2bbd673ccce65a3e9271a19e85c60",
          "url": "https://github.com/planetarium/libplanet/commit/9c7b9d6526da36c7e6b3ea0ef992d1c303fc4c43"
        },
        "date": 1676014617741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105439.60377358491,
            "unit": "ns",
            "range": "± 4361.661805478516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6184497.409254808,
            "unit": "ns",
            "range": "± 8429.528064055905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833028.0907451923,
            "unit": "ns",
            "range": "± 1393.5231162387383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351757.5427083333,
            "unit": "ns",
            "range": "± 595.6761055946383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613832.030691964,
            "unit": "ns",
            "range": "± 3271.5687236115505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844714.8596540178,
            "unit": "ns",
            "range": "± 806.5070331841531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769718.4490885417,
            "unit": "ns",
            "range": "± 508.31932623680603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93022.89583333333,
            "unit": "ns",
            "range": "± 7185.83758950335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200672.3076923077,
            "unit": "ns",
            "range": "± 7584.719583072676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180041.11764705883,
            "unit": "ns",
            "range": "± 3610.6825857854237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3815125.3333333335,
            "unit": "ns",
            "range": "± 24707.58530627116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9400810.466666667,
            "unit": "ns",
            "range": "± 41647.23681601846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17237.777777777777,
            "unit": "ns",
            "range": "± 1205.7519242661033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50315.04301075269,
            "unit": "ns",
            "range": "± 3908.835804425156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45617.17204301075,
            "unit": "ns",
            "range": "± 2573.1721652113774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99028.11458333333,
            "unit": "ns",
            "range": "± 12989.347424854514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6075,
            "unit": "ns",
            "range": "± 668.6986576454615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17814.130434782608,
            "unit": "ns",
            "range": "± 1280.8463480898843"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4544285.278125,
            "unit": "ns",
            "range": "± 41768.10613995811"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5541735.511627907,
            "unit": "ns",
            "range": "± 182369.8984081492"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25513358.466666665,
            "unit": "ns",
            "range": "± 300659.1501702947"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6396875.188679245,
            "unit": "ns",
            "range": "± 243306.7718883569"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28522210,
            "unit": "ns",
            "range": "± 494890.3921937809"
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
          "id": "ea9b0cab632b0a73dd119be7107c790233005439",
          "message": "Merge pull request #2795 from greymistcube/refactor/ibencodable-txid\n\n♻️ `IBencodable` `TxId`",
          "timestamp": "2023-02-12T20:32:42-05:00",
          "tree_id": "a0bd10f142ab6cdc3ad65891de4cf9594670a77d",
          "url": "https://github.com/planetarium/libplanet/commit/ea9b0cab632b0a73dd119be7107c790233005439"
        },
        "date": 1676252549727,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104837.83333333333,
            "unit": "ns",
            "range": "± 2243.7318768725727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5891148.3265625,
            "unit": "ns",
            "range": "± 24682.16731925948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836064.2677408855,
            "unit": "ns",
            "range": "± 1489.4534717569372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367736.720424107,
            "unit": "ns",
            "range": "± 1906.30023313016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567447.5770833334,
            "unit": "ns",
            "range": "± 2506.712150802225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803007.5632161458,
            "unit": "ns",
            "range": "± 1139.2041535537587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729492.7168666294,
            "unit": "ns",
            "range": "± 492.59921720906317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88381.20833333333,
            "unit": "ns",
            "range": "± 7352.068251668573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197692.5,
            "unit": "ns",
            "range": "± 10051.132450838752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168806.16666666666,
            "unit": "ns",
            "range": "± 1856.0711601431535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3742111,
            "unit": "ns",
            "range": "± 20730.965905731824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9542994.57142857,
            "unit": "ns",
            "range": "± 46014.49253761803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15850.333333333334,
            "unit": "ns",
            "range": "± 1179.2343161830765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46747.27659574468,
            "unit": "ns",
            "range": "± 4742.988440005626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37962.40740740741,
            "unit": "ns",
            "range": "± 1069.3934031553827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88042.206185567,
            "unit": "ns",
            "range": "± 12856.669937184797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5595.783505154639,
            "unit": "ns",
            "range": "± 844.9524422860059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15383.797872340425,
            "unit": "ns",
            "range": "± 1427.7621679283518"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4500333.4609375,
            "unit": "ns",
            "range": "± 44850.40815886508"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6144596.733333333,
            "unit": "ns",
            "range": "± 114477.88435043854"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25188393.846153848,
            "unit": "ns",
            "range": "± 267448.9870579204"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6243323.946428572,
            "unit": "ns",
            "range": "± 265674.5968701643"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28326566.866666667,
            "unit": "ns",
            "range": "± 184517.67799817474"
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
          "id": "61697453dd975aabd31373999dcee5b0f155d95a",
          "message": "Merge pull request #2798 from greymistcube/revert/serializabe-address-and-boundpeer\n\n♻️ Revert to add `Serializabe` attribute back into `Address` and `BoundPeer`",
          "timestamp": "2023-02-12T21:32:01-05:00",
          "tree_id": "6684aa85a6f8815b1cc27dae4ff51df70f2ef0be",
          "url": "https://github.com/planetarium/libplanet/commit/61697453dd975aabd31373999dcee5b0f155d95a"
        },
        "date": 1676256272709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111692.17346938775,
            "unit": "ns",
            "range": "± 6838.483757648236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5960246.036830357,
            "unit": "ns",
            "range": "± 20790.246356189884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848236.0009765625,
            "unit": "ns",
            "range": "± 2903.9720466625804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380523.7756911058,
            "unit": "ns",
            "range": "± 506.64206154552386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538978.6848958335,
            "unit": "ns",
            "range": "± 2991.9095358787927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792371.4248046875,
            "unit": "ns",
            "range": "± 1868.7535691315331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744149.7588541667,
            "unit": "ns",
            "range": "± 788.3568706217367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102359.72340425532,
            "unit": "ns",
            "range": "± 9021.688518737705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209580.5285714286,
            "unit": "ns",
            "range": "± 9930.830633153968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192197.12903225806,
            "unit": "ns",
            "range": "± 5828.203712648437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3841401,
            "unit": "ns",
            "range": "± 22566.42011076158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9593633.466666667,
            "unit": "ns",
            "range": "± 44924.03674278021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19234.153846153848,
            "unit": "ns",
            "range": "± 1213.5725855970957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53343.862068965514,
            "unit": "ns",
            "range": "± 3347.4565810700456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51857.63829787234,
            "unit": "ns",
            "range": "± 2031.6071323561841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108852.21428571429,
            "unit": "ns",
            "range": "± 15770.34716995237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7882.105263157895,
            "unit": "ns",
            "range": "± 564.5519683536712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20036.31868131868,
            "unit": "ns",
            "range": "± 1435.2536429272768"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4540107.100520833,
            "unit": "ns",
            "range": "± 54229.4268919246"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6344813.380952381,
            "unit": "ns",
            "range": "± 144788.11736550627"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25646696.5,
            "unit": "ns",
            "range": "± 218681.90300411233"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7221161.8,
            "unit": "ns",
            "range": "± 78636.24679878866"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28942652.214285713,
            "unit": "ns",
            "range": "± 359478.1444271636"
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
          "id": "2a8bd98475f542e82e61e14d84d12d590a3aa229",
          "message": "Merge pull request #2801 from greymistcube/chore/identity-hex-format\n\n🧹 Aligned identity with request id format",
          "timestamp": "2023-02-12T22:26:49-05:00",
          "tree_id": "293397eeca5dbd110d4e2a7e1abe239639b5afb8",
          "url": "https://github.com/planetarium/libplanet/commit/2a8bd98475f542e82e61e14d84d12d590a3aa229"
        },
        "date": 1676259560141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110142.77777777778,
            "unit": "ns",
            "range": "± 5144.0586054046125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5975926.822916667,
            "unit": "ns",
            "range": "± 35699.76203978496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837691.1533203125,
            "unit": "ns",
            "range": "± 6894.587842228383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332767.8770926339,
            "unit": "ns",
            "range": "± 6381.636770209614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635175.918229167,
            "unit": "ns",
            "range": "± 6557.390673664634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823401.3007161458,
            "unit": "ns",
            "range": "± 2440.171559066038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752440.7577373798,
            "unit": "ns",
            "range": "± 1499.341819027526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94339.94897959183,
            "unit": "ns",
            "range": "± 9672.184557315486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200260.328125,
            "unit": "ns",
            "range": "± 8627.36665860757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177954.36538461538,
            "unit": "ns",
            "range": "± 7354.198256855143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4029646.6666666665,
            "unit": "ns",
            "range": "± 80624.33281511451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9897763.529411765,
            "unit": "ns",
            "range": "± 202771.17372518635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20111.628865979383,
            "unit": "ns",
            "range": "± 2455.6709678805523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50517.56842105263,
            "unit": "ns",
            "range": "± 4822.6058411394315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40114.09090909091,
            "unit": "ns",
            "range": "± 1358.0105458744167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95821.80412371134,
            "unit": "ns",
            "range": "± 14531.257917301911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5727.642857142857,
            "unit": "ns",
            "range": "± 671.4588249537327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18237.371134020617,
            "unit": "ns",
            "range": "± 2038.022823103659"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4902893.320498512,
            "unit": "ns",
            "range": "± 111177.35530079536"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6151944.461538462,
            "unit": "ns",
            "range": "± 60933.69050672404"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26514721.222222224,
            "unit": "ns",
            "range": "± 563636.4299224389"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6753352,
            "unit": "ns",
            "range": "± 87892.83422441217"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29683067.826086957,
            "unit": "ns",
            "range": "± 745824.7162038235"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a08b094e9cf5f46494f8733a1c7cc84395e8d714",
          "message": "Merge pull request #2805 from moreal/planetarium-tx-custom-actions\n\nfeat(@planetarium/tx): Support building unsigned transactions with custom actions",
          "timestamp": "2023-02-13T18:02:48+09:00",
          "tree_id": "944e0a78540836fb62bf006772212734b8fba00e",
          "url": "https://github.com/planetarium/libplanet/commit/a08b094e9cf5f46494f8733a1c7cc84395e8d714"
        },
        "date": 1676279596831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102884.4375,
            "unit": "ns",
            "range": "± 3198.639084980946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5950501.531770834,
            "unit": "ns",
            "range": "± 31610.51546858662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1917530.6130208333,
            "unit": "ns",
            "range": "± 5558.721981387338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369966.4608072916,
            "unit": "ns",
            "range": "± 370.5697725157196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610093.799386161,
            "unit": "ns",
            "range": "± 1570.5045318964933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818039.140485491,
            "unit": "ns",
            "range": "± 514.1592045902624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741178.3223958333,
            "unit": "ns",
            "range": "± 984.2605623617371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89711.2,
            "unit": "ns",
            "range": "± 5757.875816184884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201868.57894736843,
            "unit": "ns",
            "range": "± 9515.336517802067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171408.9411764706,
            "unit": "ns",
            "range": "± 3471.8019721498417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3777497.066666667,
            "unit": "ns",
            "range": "± 29031.66188212613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9554069.466666667,
            "unit": "ns",
            "range": "± 47299.16184981757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16740.457446808512,
            "unit": "ns",
            "range": "± 1664.4594308947533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48256.90909090909,
            "unit": "ns",
            "range": "± 3672.685458135391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42439.04210526316,
            "unit": "ns",
            "range": "± 2558.8128934605984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89536.67741935483,
            "unit": "ns",
            "range": "± 12094.06470686928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5400.01030927835,
            "unit": "ns",
            "range": "± 585.0552056367087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17152.159574468085,
            "unit": "ns",
            "range": "± 1171.0553305311446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4477934.3753255205,
            "unit": "ns",
            "range": "± 8045.619682275237"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5594092.62745098,
            "unit": "ns",
            "range": "± 227267.82266295076"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25227543.92857143,
            "unit": "ns",
            "range": "± 257332.44647117602"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7024151,
            "unit": "ns",
            "range": "± 71542.06117114173"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28456973.6,
            "unit": "ns",
            "range": "± 438553.06623727333"
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
          "id": "d8b507e5576f6f83e76cf143026fa3972021a5f4",
          "message": "Merge pull request #2806 from greymistcube/chore/logging\n\n🧹 Added contextual information to `BlockCandidate` logging",
          "timestamp": "2023-02-13T21:21:34-05:00",
          "tree_id": "9cf512c844b474e395973d7027f39994542df095",
          "url": "https://github.com/planetarium/libplanet/commit/d8b507e5576f6f83e76cf143026fa3972021a5f4"
        },
        "date": 1676341945967,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102450.21818181819,
            "unit": "ns",
            "range": "± 4167.701505674805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6211376.084735577,
            "unit": "ns",
            "range": "± 17697.170372236014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845076.5595703125,
            "unit": "ns",
            "range": "± 934.3804121268486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361530.3654947917,
            "unit": "ns",
            "range": "± 813.3116500150578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588542.4869791665,
            "unit": "ns",
            "range": "± 1693.3906524176914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810625.919921875,
            "unit": "ns",
            "range": "± 4196.596628698435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739121.0042067308,
            "unit": "ns",
            "range": "± 1124.2834859732875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94322.92857142857,
            "unit": "ns",
            "range": "± 9432.930983156279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204677.8901098901,
            "unit": "ns",
            "range": "± 11977.172764564868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178123.9642857143,
            "unit": "ns",
            "range": "± 5069.208978267114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3822030.3333333335,
            "unit": "ns",
            "range": "± 32448.439686604932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9456128.785714285,
            "unit": "ns",
            "range": "± 41145.869380830874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17681.926315789475,
            "unit": "ns",
            "range": "± 2076.9463685702462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53892.54945054945,
            "unit": "ns",
            "range": "± 4385.527304577426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47256.637931034486,
            "unit": "ns",
            "range": "± 2065.809214015523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104556.21052631579,
            "unit": "ns",
            "range": "± 12286.077181443989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6655.145833333333,
            "unit": "ns",
            "range": "± 552.859208862945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18381.09375,
            "unit": "ns",
            "range": "± 2104.9823106051335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4537959.953962053,
            "unit": "ns",
            "range": "± 25976.702618447835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6063227.571428572,
            "unit": "ns",
            "range": "± 65356.63348795684"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25822163.866666667,
            "unit": "ns",
            "range": "± 460816.5455080589"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6465933.613636363,
            "unit": "ns",
            "range": "± 238308.27475334762"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28825332.92857143,
            "unit": "ns",
            "range": "± 295204.08906003274"
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
          "id": "d8bd683a186a051504ad01fbd43837de19efffe6",
          "message": "Merge pull request #2807 from greymistcube/chore/logging\n\n🧹  Fixed logging mistake",
          "timestamp": "2023-02-13T21:37:22-05:00",
          "tree_id": "03f1ed13f9a5ab021b4bb62f8c423a854ba70960",
          "url": "https://github.com/planetarium/libplanet/commit/d8bd683a186a051504ad01fbd43837de19efffe6"
        },
        "date": 1676342884532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103697.38,
            "unit": "ns",
            "range": "± 3934.216629178689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5798543.513541667,
            "unit": "ns",
            "range": "± 41710.96459561969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1814559.068638393,
            "unit": "ns",
            "range": "± 2179.977731094531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359629.238671875,
            "unit": "ns",
            "range": "± 2664.6797650796943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589549.078125,
            "unit": "ns",
            "range": "± 3690.34533598411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807803.1943359375,
            "unit": "ns",
            "range": "± 1287.7518403693716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744394.0500139509,
            "unit": "ns",
            "range": "± 793.9323217295231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86725.03125,
            "unit": "ns",
            "range": "± 7700.823856750482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189083.2931034483,
            "unit": "ns",
            "range": "± 8200.56600316297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166976.83333333334,
            "unit": "ns",
            "range": "± 1471.7399000276282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3745544.933333333,
            "unit": "ns",
            "range": "± 44963.359510775415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9418917.4,
            "unit": "ns",
            "range": "± 70527.02152549151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15123.073684210527,
            "unit": "ns",
            "range": "± 1549.2981749612984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46062.94623655914,
            "unit": "ns",
            "range": "± 3451.28830188529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39809.0625,
            "unit": "ns",
            "range": "± 1199.8632969849577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77766.55789473685,
            "unit": "ns",
            "range": "± 10048.826068534328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4663.58947368421,
            "unit": "ns",
            "range": "± 345.2303731225221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15079.302083333334,
            "unit": "ns",
            "range": "± 2012.3430183680316"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4374187.450520833,
            "unit": "ns",
            "range": "± 43471.235002109584"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5970633.666666667,
            "unit": "ns",
            "range": "± 41778.0006508324"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24529754.5,
            "unit": "ns",
            "range": "± 326704.2353227269"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6136896.145833333,
            "unit": "ns",
            "range": "± 241048.73042999927"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28551245.533333335,
            "unit": "ns",
            "range": "± 442787.02451918396"
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
          "id": "e109a5f860146deba6c0ffda0dfc740662deb449",
          "message": "Merge pull request #2803 from greymistcube/feature/reply-zero-blocks\n\nReply with zero blocks when no corresponding blocks are found",
          "timestamp": "2023-02-14T02:18:21-05:00",
          "tree_id": "3e143c5ae13207dcae595ee410868d4004e7f2a0",
          "url": "https://github.com/planetarium/libplanet/commit/e109a5f860146deba6c0ffda0dfc740662deb449"
        },
        "date": 1676359690807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104517.90909090909,
            "unit": "ns",
            "range": "± 2558.3695497810227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5869755.216145833,
            "unit": "ns",
            "range": "± 30105.25471796147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986895.5083705357,
            "unit": "ns",
            "range": "± 2646.627633917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376901.189453125,
            "unit": "ns",
            "range": "± 1660.6850490688646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572811.6428571427,
            "unit": "ns",
            "range": "± 2761.9904350569063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836461.7572265625,
            "unit": "ns",
            "range": "± 642.7065407177685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752611.5396902902,
            "unit": "ns",
            "range": "± 645.89443866449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86350.34939759035,
            "unit": "ns",
            "range": "± 4625.742143314147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189685.1607142857,
            "unit": "ns",
            "range": "± 8146.424424308742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170618.53846153847,
            "unit": "ns",
            "range": "± 2735.588620857329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3741213.153846154,
            "unit": "ns",
            "range": "± 16262.297479375178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9255471.384615384,
            "unit": "ns",
            "range": "± 42723.67400621982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15220.48717948718,
            "unit": "ns",
            "range": "± 799.5961926260472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45876.89010989011,
            "unit": "ns",
            "range": "± 3559.636065825174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38792.269230769234,
            "unit": "ns",
            "range": "± 1596.914268517717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81325.06593406593,
            "unit": "ns",
            "range": "± 8709.034672622318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4540.625,
            "unit": "ns",
            "range": "± 440.4729814283971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14510.279411764706,
            "unit": "ns",
            "range": "± 688.721676462633"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4483252.522395833,
            "unit": "ns",
            "range": "± 50885.99314695579"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5454187.371428572,
            "unit": "ns",
            "range": "± 127972.92797446647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25942185.692307692,
            "unit": "ns",
            "range": "± 402054.53140429937"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6269832,
            "unit": "ns",
            "range": "± 114666.8929894638"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28594158.0625,
            "unit": "ns",
            "range": "± 546538.2592385726"
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
          "id": "f487ff798731e88ecd0b4a6c3e13afe14d93f27a",
          "message": "Merge pull request #2810 from greymistcube/release/0.48.0\n\n🚀 Release libplanet 0.48.0",
          "timestamp": "2023-02-14T02:49:14-05:00",
          "tree_id": "760f5b3ea56d9473c8cdd53bd06dc34fea67f448",
          "url": "https://github.com/planetarium/libplanet/commit/f487ff798731e88ecd0b4a6c3e13afe14d93f27a"
        },
        "date": 1676361549585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101952.72727272728,
            "unit": "ns",
            "range": "± 2385.4770149269075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5952921.573102678,
            "unit": "ns",
            "range": "± 26389.465550889356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891564.3941127232,
            "unit": "ns",
            "range": "± 5586.800742752395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1323913.630859375,
            "unit": "ns",
            "range": "± 2912.2804993467716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562644.9302884615,
            "unit": "ns",
            "range": "± 4892.25438027139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820318.0803571428,
            "unit": "ns",
            "range": "± 864.1905452782937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744298.3597237723,
            "unit": "ns",
            "range": "± 2215.159271733427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81941.13541666667,
            "unit": "ns",
            "range": "± 4876.604316033187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189984.76666666666,
            "unit": "ns",
            "range": "± 7713.115678508684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170433.0909090909,
            "unit": "ns",
            "range": "± 3988.9523019876374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3667271.6666666665,
            "unit": "ns",
            "range": "± 30875.348237866463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9049718.4,
            "unit": "ns",
            "range": "± 52045.46778648728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13802.045977011494,
            "unit": "ns",
            "range": "± 764.435175404964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44087.93258426966,
            "unit": "ns",
            "range": "± 3032.3594054111213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37446.35294117647,
            "unit": "ns",
            "range": "± 731.4662450496666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70304.57647058823,
            "unit": "ns",
            "range": "± 3816.631809083297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4254.688172043011,
            "unit": "ns",
            "range": "± 345.88999817404317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13710.426966292134,
            "unit": "ns",
            "range": "± 740.7416873960677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4375502.619791667,
            "unit": "ns",
            "range": "± 51835.27758211421"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5970138.833333333,
            "unit": "ns",
            "range": "± 56244.29459361485"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24582222.733333334,
            "unit": "ns",
            "range": "± 357422.7223435791"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6142856.222222222,
            "unit": "ns",
            "range": "± 258964.20583064537"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27883095.4,
            "unit": "ns",
            "range": "± 470676.26476467727"
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
          "id": "b6c147f297cdf330639a4eeaa0d61ad30840ca3b",
          "message": "Merge pull request #2812 from greymistcube/prepare/0.49.0\n\n🔧 Prepare 0.49.0",
          "timestamp": "2023-02-14T03:23:14-05:00",
          "tree_id": "43eb24b4363c0dcdfab6dab7432acf825d31aada",
          "url": "https://github.com/planetarium/libplanet/commit/b6c147f297cdf330639a4eeaa0d61ad30840ca3b"
        },
        "date": 1676363596226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108879.72222222222,
            "unit": "ns",
            "range": "± 2317.248210969604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5881122.791666667,
            "unit": "ns",
            "range": "± 34877.57650734609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854261.3592447916,
            "unit": "ns",
            "range": "± 11557.25752120239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322880.250279018,
            "unit": "ns",
            "range": "± 5603.074035351731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624898.8833333333,
            "unit": "ns",
            "range": "± 10001.719715712363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817757.8512137277,
            "unit": "ns",
            "range": "± 3923.0449563781444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762972.8319614956,
            "unit": "ns",
            "range": "± 1999.6429066733388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90547.26041666667,
            "unit": "ns",
            "range": "± 7403.194899564849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198174.45454545456,
            "unit": "ns",
            "range": "± 9233.115347540019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173110,
            "unit": "ns",
            "range": "± 1885.8157997983872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3771072.966666667,
            "unit": "ns",
            "range": "± 57773.36935680743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9478576.74074074,
            "unit": "ns",
            "range": "± 262476.7855497075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16468.736842105263,
            "unit": "ns",
            "range": "± 796.6809711701175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45311.851851851854,
            "unit": "ns",
            "range": "± 2400.040838772911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38907,
            "unit": "ns",
            "range": "± 728.7902304504362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83802.43157894736,
            "unit": "ns",
            "range": "± 13888.180969881681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4824.876288659794,
            "unit": "ns",
            "range": "± 380.7583785938477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16517.14606741573,
            "unit": "ns",
            "range": "± 882.8624744978147"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4973273.82734375,
            "unit": "ns",
            "range": "± 51984.148930705545"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6170736.5,
            "unit": "ns",
            "range": "± 57743.13596870194"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25779807.4,
            "unit": "ns",
            "range": "± 467333.239446482"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6489291.657142857,
            "unit": "ns",
            "range": "± 212933.1350036138"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29163394.666666668,
            "unit": "ns",
            "range": "± 679359.868079454"
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
          "id": "90b4eff97bc3043293781274d75f8b4e114943d1",
          "message": "Merge pull request #2813 from OnedgeLee/hotfix/revert_test_skip\n\nRevert temporal skippable tests",
          "timestamp": "2023-02-14T17:37:15+09:00",
          "tree_id": "18ec484a79386a1ad5dfbee13d0c4785c86a808d",
          "url": "https://github.com/planetarium/libplanet/commit/90b4eff97bc3043293781274d75f8b4e114943d1"
        },
        "date": 1676364582900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108626.76288659793,
            "unit": "ns",
            "range": "± 9023.077615865974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6141941.909635416,
            "unit": "ns",
            "range": "± 55002.579684423676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851685.216045673,
            "unit": "ns",
            "range": "± 988.616671733844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377289.613671875,
            "unit": "ns",
            "range": "± 1151.9651782960077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546576.791573661,
            "unit": "ns",
            "range": "± 3488.3414918138938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804143.649609375,
            "unit": "ns",
            "range": "± 1084.596354689054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740035.5727914664,
            "unit": "ns",
            "range": "± 839.6324803227628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102958.97894736842,
            "unit": "ns",
            "range": "± 10189.30199097965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210616.05,
            "unit": "ns",
            "range": "± 9381.694463019867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192413.53333333333,
            "unit": "ns",
            "range": "± 7262.33143005743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3854586.933333333,
            "unit": "ns",
            "range": "± 32596.53610314767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9542327.333333334,
            "unit": "ns",
            "range": "± 64465.69464857886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17614.076923076922,
            "unit": "ns",
            "range": "± 1484.7842584083028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50136.60824742268,
            "unit": "ns",
            "range": "± 5444.3057534085965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53561,
            "unit": "ns",
            "range": "± 5532.355738779654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114579.22680412371,
            "unit": "ns",
            "range": "± 16374.969177773255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7246.350515463918,
            "unit": "ns",
            "range": "± 755.5614088383375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16755.674418604653,
            "unit": "ns",
            "range": "± 1198.9997933754466"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4677466.704503677,
            "unit": "ns",
            "range": "± 83578.88264684178"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6358926.5625,
            "unit": "ns",
            "range": "± 120363.17907841459"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26389976.82142857,
            "unit": "ns",
            "range": "± 669337.917789471"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6638419.153846154,
            "unit": "ns",
            "range": "± 217463.80008642437"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29591172.363636363,
            "unit": "ns",
            "range": "± 929511.3894390233"
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
          "id": "8420cba8929cb9173942a1ad17546d684358527b",
          "message": "Merge pull request #2814 from limebell/fix/multiple-task-blocksync\n\nPrevent duplicated ProcessBlockDemand",
          "timestamp": "2023-02-15T17:28:49+09:00",
          "tree_id": "def5643cc94889522aea1a333b9679d0572e97a4",
          "url": "https://github.com/planetarium/libplanet/commit/8420cba8929cb9173942a1ad17546d684358527b"
        },
        "date": 1676450357481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101499.5625,
            "unit": "ns",
            "range": "± 4000.006201624182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902254.680208334,
            "unit": "ns",
            "range": "± 23137.29393500374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1976481.5549479167,
            "unit": "ns",
            "range": "± 1923.7441488121756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375207.4661458333,
            "unit": "ns",
            "range": "± 1627.1073191778055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565856.675520833,
            "unit": "ns",
            "range": "± 3389.8609766577765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819119.025015024,
            "unit": "ns",
            "range": "± 433.0689966256195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753477.3374023438,
            "unit": "ns",
            "range": "± 1366.1958103438035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83662.52222222222,
            "unit": "ns",
            "range": "± 5568.907451858559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185737.6,
            "unit": "ns",
            "range": "± 7762.46328935078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172662.66666666666,
            "unit": "ns",
            "range": "± 3167.8767487448267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3728141.066666667,
            "unit": "ns",
            "range": "± 33238.8568298066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9496942.466666667,
            "unit": "ns",
            "range": "± 113720.46917009562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15035.032608695652,
            "unit": "ns",
            "range": "± 939.3048218632423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45197,
            "unit": "ns",
            "range": "± 2266.7742784912725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39150.625,
            "unit": "ns",
            "range": "± 1827.4651322320242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81393.86021505376,
            "unit": "ns",
            "range": "± 9995.225433644719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4612.316326530612,
            "unit": "ns",
            "range": "± 687.6250866065725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15098.074468085106,
            "unit": "ns",
            "range": "± 1267.8263104757923"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4434322.852764423,
            "unit": "ns",
            "range": "± 17865.98985983988"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5953934.428571428,
            "unit": "ns",
            "range": "± 44755.36980023787"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24822395.076923076,
            "unit": "ns",
            "range": "± 269008.7996607365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6300709.833333333,
            "unit": "ns",
            "range": "± 209908.54310518867"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28309780.714285713,
            "unit": "ns",
            "range": "± 348198.8864490718"
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
          "id": "803174a84020c073551ed3cbea2bc14d03b3b8b9",
          "message": "Merge pull request #2819 from riemannulus/main\n\n🧹 Merge 0.46.2 to main",
          "timestamp": "2023-02-16T13:14:19+09:00",
          "tree_id": "136061da77d3124eea6dda0a72b980ff05535a8d",
          "url": "https://github.com/planetarium/libplanet/commit/803174a84020c073551ed3cbea2bc14d03b3b8b9"
        },
        "date": 1676521672609,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109749.70707070707,
            "unit": "ns",
            "range": "± 8490.864452339982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5947411.9421875,
            "unit": "ns",
            "range": "± 59162.4674078412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852480.4984654018,
            "unit": "ns",
            "range": "± 8462.487934911867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346858.94375,
            "unit": "ns",
            "range": "± 9391.727675326483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599149.052604167,
            "unit": "ns",
            "range": "± 10164.40323106612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826258.0223958333,
            "unit": "ns",
            "range": "± 2547.645725824546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775947.78046875,
            "unit": "ns",
            "range": "± 3406.6328678982004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106923.38383838384,
            "unit": "ns",
            "range": "± 11186.012864749813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220373.8469387755,
            "unit": "ns",
            "range": "± 22132.203706225384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193025.07,
            "unit": "ns",
            "range": "± 18525.85880409849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4001918.16,
            "unit": "ns",
            "range": "± 103966.84447805143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9986339.942857143,
            "unit": "ns",
            "range": "± 321462.84253832535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21644.11224489796,
            "unit": "ns",
            "range": "± 3155.025325049576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59952.5918367347,
            "unit": "ns",
            "range": "± 9235.68426663246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42280.81443298969,
            "unit": "ns",
            "range": "± 4329.751405801438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103380.50515463918,
            "unit": "ns",
            "range": "± 20040.875698766526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5921.36170212766,
            "unit": "ns",
            "range": "± 1078.9526667153314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20760.78125,
            "unit": "ns",
            "range": "± 3680.2153489711213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5135242.162760417,
            "unit": "ns",
            "range": "± 62247.75116128652"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6244043.714285715,
            "unit": "ns",
            "range": "± 96759.21219225552"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28515683.87837838,
            "unit": "ns",
            "range": "± 1424595.1929022567"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6522097.733333333,
            "unit": "ns",
            "range": "± 194684.4440127334"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32282951.62295082,
            "unit": "ns",
            "range": "± 1447441.7552688736"
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
          "id": "9eafed4bc8f1e072c7c1bbdc8883c206ed64c8e8",
          "message": "Merge pull request #2822 from greymistcube/feature/branch\n\nIntroduce `Branch<T>` for more context",
          "timestamp": "2023-02-16T02:47:15-05:00",
          "tree_id": "59513a2762f6c07acc5b0a2b76152120b80a5962",
          "url": "https://github.com/planetarium/libplanet/commit/9eafed4bc8f1e072c7c1bbdc8883c206ed64c8e8"
        },
        "date": 1676534367765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103868.3163265306,
            "unit": "ns",
            "range": "± 6882.099915681363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5915684.19140625,
            "unit": "ns",
            "range": "± 3287.5268960406743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902237.513671875,
            "unit": "ns",
            "range": "± 5951.915118291446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355426.5011160714,
            "unit": "ns",
            "range": "± 2739.9152909689487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563529.5147879464,
            "unit": "ns",
            "range": "± 3808.979648366212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849138.892438616,
            "unit": "ns",
            "range": "± 1253.9245232081032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744645.2254356971,
            "unit": "ns",
            "range": "± 749.8393476981734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84950.51546391753,
            "unit": "ns",
            "range": "± 7374.394377836226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198136.693877551,
            "unit": "ns",
            "range": "± 7400.463705077545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170525,
            "unit": "ns",
            "range": "± 1825.6381200704989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3826079.533333333,
            "unit": "ns",
            "range": "± 19807.411173839046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9649913,
            "unit": "ns",
            "range": "± 36912.06834127247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16387.777777777777,
            "unit": "ns",
            "range": "± 1527.6351539374734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43442.666666666664,
            "unit": "ns",
            "range": "± 1726.1246497012628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37553.333333333336,
            "unit": "ns",
            "range": "± 665.331997326648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78208.23711340207,
            "unit": "ns",
            "range": "± 8455.30874876498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5269.3877551020405,
            "unit": "ns",
            "range": "± 823.921746267343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16283.157894736842,
            "unit": "ns",
            "range": "± 1908.583781046071"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4385545.849739583,
            "unit": "ns",
            "range": "± 40684.40305275847"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5547539.466666667,
            "unit": "ns",
            "range": "± 61581.036183305034"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26002989.85714286,
            "unit": "ns",
            "range": "± 274072.9365706135"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6284080.285714285,
            "unit": "ns",
            "range": "± 196226.9816175789"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28464332.10714286,
            "unit": "ns",
            "range": "± 799414.5643626105"
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
          "id": "977a79462cfe47b88606d6ef4e69b989b297a544",
          "message": "Avoid unintended blocks on NetMQTransport (#2817)",
          "timestamp": "2023-02-16T18:47:05+09:00",
          "tree_id": "def27f168284f49e85c79d08c1fb29bedb8925f0",
          "url": "https://github.com/planetarium/libplanet/commit/977a79462cfe47b88606d6ef4e69b989b297a544"
        },
        "date": 1676541420352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101879.6,
            "unit": "ns",
            "range": "± 2247.521263876929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6027888.8015625,
            "unit": "ns",
            "range": "± 33425.83847710406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874548.1533203125,
            "unit": "ns",
            "range": "± 9254.974120582669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364217.1251395089,
            "unit": "ns",
            "range": "± 1106.4789146731523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565874.727120536,
            "unit": "ns",
            "range": "± 4540.814565747139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806640.9594401042,
            "unit": "ns",
            "range": "± 897.6507383799087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727493.412248884,
            "unit": "ns",
            "range": "± 1254.0732826813887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85984.25510204081,
            "unit": "ns",
            "range": "± 6706.42033406337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200541.375,
            "unit": "ns",
            "range": "± 8813.172762567245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168061.6875,
            "unit": "ns",
            "range": "± 2449.6193913545017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3782857.533333333,
            "unit": "ns",
            "range": "± 39520.79461293884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9340153.785714285,
            "unit": "ns",
            "range": "± 49368.64286191664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15716.6,
            "unit": "ns",
            "range": "± 836.8332871975141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45134.77906976744,
            "unit": "ns",
            "range": "± 2946.8890571790243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38820.470588235294,
            "unit": "ns",
            "range": "± 1168.979825506868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80822.75789473685,
            "unit": "ns",
            "range": "± 12205.871030408862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5019.367346938776,
            "unit": "ns",
            "range": "± 869.972406100558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14464.356321839081,
            "unit": "ns",
            "range": "± 957.3477774075856"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4410234.448177083,
            "unit": "ns",
            "range": "± 32421.413888923566"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5980567,
            "unit": "ns",
            "range": "± 62637.31247693609"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24886923.57142857,
            "unit": "ns",
            "range": "± 323594.8225072436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6277807.8,
            "unit": "ns",
            "range": "± 202666.06215249753"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28422576.04347826,
            "unit": "ns",
            "range": "± 700504.0860968023"
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
          "id": "5bd541e43b9c0ca04da673ea87a464f0ba937386",
          "message": "Merge pull request #2832 from greymistcube/chore/logging\n\n🧹 Sanitized logging",
          "timestamp": "2023-02-19T21:44:02-05:00",
          "tree_id": "9a523112a25aaa79e5a87dd0f37102a76cac375b",
          "url": "https://github.com/planetarium/libplanet/commit/5bd541e43b9c0ca04da673ea87a464f0ba937386"
        },
        "date": 1676862032475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7256537.50625,
            "unit": "ns",
            "range": "± 87246.10231511545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2271521.8694196427,
            "unit": "ns",
            "range": "± 24536.16080516183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1701328.0571614583,
            "unit": "ns",
            "range": "± 13107.258490907765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3144296.707589286,
            "unit": "ns",
            "range": "± 20038.66981686518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008428.9655412947,
            "unit": "ns",
            "range": "± 15507.028278746244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965216.4265485491,
            "unit": "ns",
            "range": "± 8636.801908079831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113682.9052631579,
            "unit": "ns",
            "range": "± 13396.366018100933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243870.22826086957,
            "unit": "ns",
            "range": "± 16546.20462314065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203007.7052631579,
            "unit": "ns",
            "range": "± 17471.508772414203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4506125.05882353,
            "unit": "ns",
            "range": "± 144433.38698974616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11894533.370370371,
            "unit": "ns",
            "range": "± 319618.5648893607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23864.868686868685,
            "unit": "ns",
            "range": "± 6868.2683817839825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63268.0505050505,
            "unit": "ns",
            "range": "± 11234.685258821011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55529.237113402065,
            "unit": "ns",
            "range": "± 8291.47109456106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125385.27083333333,
            "unit": "ns",
            "range": "± 23795.94942553709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10966.737373737375,
            "unit": "ns",
            "range": "± 5496.628347962936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24690.76842105263,
            "unit": "ns",
            "range": "± 7032.210184107145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130178.59574468085,
            "unit": "ns",
            "range": "± 12092.558552719496"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6088285.690805288,
            "unit": "ns",
            "range": "± 312600.50969174446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7050976.791044776,
            "unit": "ns",
            "range": "± 333941.9461090613"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32323899.777777776,
            "unit": "ns",
            "range": "± 903307.7257033786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7879935.5875,
            "unit": "ns",
            "range": "± 412329.96577101503"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36817104.62,
            "unit": "ns",
            "range": "± 1465461.6456577198"
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
          "id": "a334417df43b6970c31ce7bf9c4cc40c1060f633",
          "message": "Merge pull request #2833 from greymistcube/chore/logging\n\n🧹 More sanitized logging",
          "timestamp": "2023-02-20T03:12:33-05:00",
          "tree_id": "e847dfd172b329b47d46718849dd94e33f1503c7",
          "url": "https://github.com/planetarium/libplanet/commit/a334417df43b6970c31ce7bf9c4cc40c1060f633"
        },
        "date": 1676881437069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900820.9140625,
            "unit": "ns",
            "range": "± 30652.699968647175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842122.4969308036,
            "unit": "ns",
            "range": "± 4118.600757689482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347801.1688058036,
            "unit": "ns",
            "range": "± 2243.1588445003936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591552.948918269,
            "unit": "ns",
            "range": "± 1786.419338904355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812778.4430588942,
            "unit": "ns",
            "range": "± 450.65818575175075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749981.9619140625,
            "unit": "ns",
            "range": "± 1288.775532660921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88058.75531914894,
            "unit": "ns",
            "range": "± 7094.503075319939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194904.1343283582,
            "unit": "ns",
            "range": "± 8867.255639294019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172414.90476190476,
            "unit": "ns",
            "range": "± 3970.4999925042425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3791765.6666666665,
            "unit": "ns",
            "range": "± 30940.32667125235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9427645.2,
            "unit": "ns",
            "range": "± 72528.26086055796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15611.056179775282,
            "unit": "ns",
            "range": "± 1195.0843290856712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46955.76404494382,
            "unit": "ns",
            "range": "± 2741.3058435321386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43820.5,
            "unit": "ns",
            "range": "± 3167.870093030298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94567.85416666667,
            "unit": "ns",
            "range": "± 15562.351631238069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5831.938144329897,
            "unit": "ns",
            "range": "± 1014.532207621171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15496.71875,
            "unit": "ns",
            "range": "± 1389.6269147404466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99788.66666666667,
            "unit": "ns",
            "range": "± 3579.020663226383"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4461473.090625,
            "unit": "ns",
            "range": "± 26619.742632206915"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6048738.357142857,
            "unit": "ns",
            "range": "± 39564.05865974657"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25595962.866666667,
            "unit": "ns",
            "range": "± 251956.86171499014"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6205764,
            "unit": "ns",
            "range": "± 64609.55336591375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28364588.3125,
            "unit": "ns",
            "range": "± 264386.4345213192"
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
          "id": "544c03f94ba675d9e1777a6ceefca752a80ff523",
          "message": "Merge pull request #2834 from limebell/release/0.49\n\n🚀 Release libplanet 0.49.0",
          "timestamp": "2023-02-20T17:41:39+09:00",
          "tree_id": "f0b936d5c40f3713dbeca3faaad7749afd2117a3",
          "url": "https://github.com/planetarium/libplanet/commit/544c03f94ba675d9e1777a6ceefca752a80ff523"
        },
        "date": 1676883238476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5988215.049479167,
            "unit": "ns",
            "range": "± 48752.767644655825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894642.1046316964,
            "unit": "ns",
            "range": "± 5678.074412958759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335015.2839006695,
            "unit": "ns",
            "range": "± 4833.374278198195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611483.428125,
            "unit": "ns",
            "range": "± 13964.894461272796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826099.5650390625,
            "unit": "ns",
            "range": "± 3819.7854623953026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759823.175390625,
            "unit": "ns",
            "range": "± 1594.0261706113006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95079.88888888889,
            "unit": "ns",
            "range": "± 10095.147969611176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198112.41304347827,
            "unit": "ns",
            "range": "± 7178.52959742867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181052.7,
            "unit": "ns",
            "range": "± 8807.225962119179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937892.8,
            "unit": "ns",
            "range": "± 58807.29117720013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9975941.42857143,
            "unit": "ns",
            "range": "± 114074.57988372499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20026.322580645163,
            "unit": "ns",
            "range": "± 2371.5968989970443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54208.89361702128,
            "unit": "ns",
            "range": "± 6358.882522487543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39363.794117647056,
            "unit": "ns",
            "range": "± 1272.7811775890448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92278.23711340207,
            "unit": "ns",
            "range": "± 14952.248598854341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5190.80412371134,
            "unit": "ns",
            "range": "± 618.3142849577533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18840.494845360823,
            "unit": "ns",
            "range": "± 2036.3144921427663"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111120.26923076923,
            "unit": "ns",
            "range": "± 4555.6065355214405"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4889329.792424842,
            "unit": "ns",
            "range": "± 253207.72180473313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5874992,
            "unit": "ns",
            "range": "± 184673.3017774226"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26964874.677419353,
            "unit": "ns",
            "range": "± 818713.95673399"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6846980.571428572,
            "unit": "ns",
            "range": "± 98562.08612592626"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30041712.42105263,
            "unit": "ns",
            "range": "± 652030.4914244864"
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
          "id": "35a2dbc6de17b31e177e824dd90aae5e509cac9f",
          "message": "Merge pull request #2836 from limebell/prepare/0.50.0\n\n🔧 Prepare 0.50.0",
          "timestamp": "2023-02-21T10:58:36+09:00",
          "tree_id": "94d25b33717f19cfa799019c66a905d266beed5a",
          "url": "https://github.com/planetarium/libplanet/commit/35a2dbc6de17b31e177e824dd90aae5e509cac9f"
        },
        "date": 1676945463205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5869946.632291666,
            "unit": "ns",
            "range": "± 51454.485635348254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829994.4591238839,
            "unit": "ns",
            "range": "± 8275.286883003804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373100.129657452,
            "unit": "ns",
            "range": "± 3531.9506462734903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628011.7044270835,
            "unit": "ns",
            "range": "± 8322.311414537087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824828.087109375,
            "unit": "ns",
            "range": "± 2539.6158288537704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758635.6805943081,
            "unit": "ns",
            "range": "± 1459.1855379661622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90817.20212765958,
            "unit": "ns",
            "range": "± 6920.400220852088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202743.45454545456,
            "unit": "ns",
            "range": "± 9541.548508709471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183631.73913043478,
            "unit": "ns",
            "range": "± 10323.387972361716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3971293.6428571427,
            "unit": "ns",
            "range": "± 60663.685976432826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9828981.357142856,
            "unit": "ns",
            "range": "± 160639.6246239519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18501.274725274725,
            "unit": "ns",
            "range": "± 1626.7468154157245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47524.467391304344,
            "unit": "ns",
            "range": "± 2719.1281628415304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39780.53333333333,
            "unit": "ns",
            "range": "± 716.306186194809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89568.86458333333,
            "unit": "ns",
            "range": "± 13635.344350249843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5266.739583333333,
            "unit": "ns",
            "range": "± 476.8019172690097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18243.577777777777,
            "unit": "ns",
            "range": "± 1636.2210159339022"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 108301.52083333333,
            "unit": "ns",
            "range": "± 4286.452711814347"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4914118.75125,
            "unit": "ns",
            "range": "± 304123.4092344269"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5753839.205882353,
            "unit": "ns",
            "range": "± 266890.6998434791"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27579291.836734693,
            "unit": "ns",
            "range": "± 1092751.9156946405"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6490016.25,
            "unit": "ns",
            "range": "± 167162.89311099856"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30593739.4,
            "unit": "ns",
            "range": "± 791029.6647073884"
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
          "id": "e784ecdcf7f82c2f78f9f3e33ba6b44fa8acdf76",
          "message": "Merge pull request #2831 from limebell/refactor/immutable-message\n\nSeparate `Message`'s content and make messages immutable",
          "timestamp": "2023-02-23T17:13:40+09:00",
          "tree_id": "bfd672b3b2d674162520d297cce1869e13544be3",
          "url": "https://github.com/planetarium/libplanet/commit/e784ecdcf7f82c2f78f9f3e33ba6b44fa8acdf76"
        },
        "date": 1677140879907,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6069880.1171875,
            "unit": "ns",
            "range": "± 18589.473425974305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850468.3899274555,
            "unit": "ns",
            "range": "± 947.4380045002955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373392.9783854166,
            "unit": "ns",
            "range": "± 2402.9532628453867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629426.721261161,
            "unit": "ns",
            "range": "± 2507.0600399949008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835809.4370117188,
            "unit": "ns",
            "range": "± 665.4578577840058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771503.29453125,
            "unit": "ns",
            "range": "± 415.0533516107737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112064.48913043478,
            "unit": "ns",
            "range": "± 8310.965746364447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221869.2,
            "unit": "ns",
            "range": "± 11982.312015355525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212156,
            "unit": "ns",
            "range": "± 9909.858458952407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4106303.533333333,
            "unit": "ns",
            "range": "± 44216.25843488967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10459006.933333334,
            "unit": "ns",
            "range": "± 125090.40077677919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27160.271739130436,
            "unit": "ns",
            "range": "± 2396.685527713844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63143.72340425532,
            "unit": "ns",
            "range": "± 6234.010116909173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48875.382978723406,
            "unit": "ns",
            "range": "± 3064.6000356705426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116119.49438202247,
            "unit": "ns",
            "range": "± 11740.648975522832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8883.61855670103,
            "unit": "ns",
            "range": "± 1086.771695237196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24777.565217391304,
            "unit": "ns",
            "range": "± 2680.276618922329"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124568.56842105264,
            "unit": "ns",
            "range": "± 8904.943431854246"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5207243.201328125,
            "unit": "ns",
            "range": "± 314038.1218056472"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6252232.0612244895,
            "unit": "ns",
            "range": "± 409929.23963683454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28562786.666666668,
            "unit": "ns",
            "range": "± 319024.4305809883"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7121406.773195877,
            "unit": "ns",
            "range": "± 490936.78806590656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32189443.35714286,
            "unit": "ns",
            "range": "± 482530.8727817092"
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
          "id": "029fb55ff09f8504b61c0e65e59980327786f7a9",
          "message": "Merge pull request #2845 from greymistcube/refactor/ignore-policy-for-genesis\n\nIgnore policy checks for genesis block",
          "timestamp": "2023-02-23T03:12:11-05:00",
          "tree_id": "1cbf956b6e882639d9e7d32bbf292200dff9bd7f",
          "url": "https://github.com/planetarium/libplanet/commit/029fb55ff09f8504b61c0e65e59980327786f7a9"
        },
        "date": 1677140963140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7663510.5125,
            "unit": "ns",
            "range": "± 141199.4226283587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2096963.715625,
            "unit": "ns",
            "range": "± 12376.918237552189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450595.2674479166,
            "unit": "ns",
            "range": "± 9639.536751391726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3177684.3994791666,
            "unit": "ns",
            "range": "± 29291.3026594165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865292.0968098958,
            "unit": "ns",
            "range": "± 2577.4397057340184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792745.4139322917,
            "unit": "ns",
            "range": "± 2678.3061485780454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 139152.20652173914,
            "unit": "ns",
            "range": "± 18773.79982996999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254888.09677419355,
            "unit": "ns",
            "range": "± 20892.359647293008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241167.3103448276,
            "unit": "ns",
            "range": "± 20235.277145866028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4628501.569230769,
            "unit": "ns",
            "range": "± 216231.99383460009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12571723.360824741,
            "unit": "ns",
            "range": "± 1032168.8079042613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30481.550561797754,
            "unit": "ns",
            "range": "± 3875.5683073325927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75247.73255813954,
            "unit": "ns",
            "range": "± 9135.538274394536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70313.49438202247,
            "unit": "ns",
            "range": "± 5712.602887721934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144816.75555555554,
            "unit": "ns",
            "range": "± 29474.418148209992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11090.10989010989,
            "unit": "ns",
            "range": "± 2012.9610552646593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28165.16853932584,
            "unit": "ns",
            "range": "± 3703.9322201852256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 161276.76842105263,
            "unit": "ns",
            "range": "± 14184.065128263544"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6373985.78671875,
            "unit": "ns",
            "range": "± 255400.1055865126"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7471337.925531914,
            "unit": "ns",
            "range": "± 633209.603252941"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35498483.39795918,
            "unit": "ns",
            "range": "± 3597490.854582519"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8679774.408163264,
            "unit": "ns",
            "range": "± 778499.5403473848"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40441617.434343435,
            "unit": "ns",
            "range": "± 4301658.274330669"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd879cd44d491a3060be635b9ec90b6e8b98a7d9",
          "message": "Merge pull request #2847 from planetarium/ci-typescript-libs\n\nPrepare monorepo for typescript lib",
          "timestamp": "2023-02-24T14:32:33+09:00",
          "tree_id": "6f4f1f4ad3b16948e048034534815d01a257b976",
          "url": "https://github.com/planetarium/libplanet/commit/dd879cd44d491a3060be635b9ec90b6e8b98a7d9"
        },
        "date": 1677217508088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6237160.361979167,
            "unit": "ns",
            "range": "± 34069.932686913045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963424.8796875,
            "unit": "ns",
            "range": "± 16030.82496358728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361045.7439903845,
            "unit": "ns",
            "range": "± 1228.939820896243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654895.8135416666,
            "unit": "ns",
            "range": "± 6349.089880355137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828645.4643880208,
            "unit": "ns",
            "range": "± 2436.2668069102433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744781.7264322917,
            "unit": "ns",
            "range": "± 1337.553511740102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90492.88659793814,
            "unit": "ns",
            "range": "± 6701.774408810651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220883.0404040404,
            "unit": "ns",
            "range": "± 21925.913134788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187102.22448979592,
            "unit": "ns",
            "range": "± 7155.53918089949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3860019.285714286,
            "unit": "ns",
            "range": "± 50134.9081079143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9757592.76923077,
            "unit": "ns",
            "range": "± 38700.891131328935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20067.42105263158,
            "unit": "ns",
            "range": "± 2674.6743153455327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56595.885416666664,
            "unit": "ns",
            "range": "± 6629.652431740281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54424.439024390245,
            "unit": "ns",
            "range": "± 1919.021326728555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100979.62886597938,
            "unit": "ns",
            "range": "± 12952.937476784617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7085.724489795918,
            "unit": "ns",
            "range": "± 1121.6001527697094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18741.967741935485,
            "unit": "ns",
            "range": "± 2536.3762298568586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105366.82291666667,
            "unit": "ns",
            "range": "± 7765.8288919366305"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4573823.391493056,
            "unit": "ns",
            "range": "± 96670.02373996365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5892308.306122449,
            "unit": "ns",
            "range": "± 234213.16578121413"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26543966,
            "unit": "ns",
            "range": "± 364261.0209761887"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6584868.756756756,
            "unit": "ns",
            "range": "± 174014.6040717409"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29457777.785714287,
            "unit": "ns",
            "range": "± 401517.80390436156"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69f6d6a0ad6e3fc1b6158fc32c2285ff67aafb8b",
          "message": "Merge pull request #2851 from planetarium/ci-fix-no-obj\n\nCI: fix where obj/ directory is missing",
          "timestamp": "2023-02-24T14:57:55+09:00",
          "tree_id": "2f6f92e07c50b5ccf598c0fef4fee6ea8eece2e5",
          "url": "https://github.com/planetarium/libplanet/commit/69f6d6a0ad6e3fc1b6158fc32c2285ff67aafb8b"
        },
        "date": 1677218862236,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5984900.344791667,
            "unit": "ns",
            "range": "± 33093.726426462876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896748.6442708333,
            "unit": "ns",
            "range": "± 5766.849900536142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347162.0084134615,
            "unit": "ns",
            "range": "± 738.0809707414503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573069.0875,
            "unit": "ns",
            "range": "± 1960.41103031977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799721.2763671875,
            "unit": "ns",
            "range": "± 349.31858556402244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741915.6276692708,
            "unit": "ns",
            "range": "± 433.1427822619436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86280.83146067416,
            "unit": "ns",
            "range": "± 6936.404544529004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191667.52307692307,
            "unit": "ns",
            "range": "± 7980.501092717511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171021.05263157896,
            "unit": "ns",
            "range": "± 3750.3450133685365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3740983.285714286,
            "unit": "ns",
            "range": "± 34621.26089209117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9277214.2,
            "unit": "ns",
            "range": "± 60027.47399697194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14809.574468085106,
            "unit": "ns",
            "range": "± 1004.6204171561109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47225.52222222222,
            "unit": "ns",
            "range": "± 4293.324552486542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38913.316666666666,
            "unit": "ns",
            "range": "± 1747.0137279996425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87154.11458333333,
            "unit": "ns",
            "range": "± 15022.082089811924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4778.125,
            "unit": "ns",
            "range": "± 411.2121043170326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14569.867469879518,
            "unit": "ns",
            "range": "± 789.0550039729422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103179.95,
            "unit": "ns",
            "range": "± 2259.4626858940087"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4399145.436810662,
            "unit": "ns",
            "range": "± 86326.52509999475"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5408872.108108108,
            "unit": "ns",
            "range": "± 68924.92338599853"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25209251,
            "unit": "ns",
            "range": "± 373659.5918240864"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6697903.071428572,
            "unit": "ns",
            "range": "± 103653.89743718074"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28783022.133333333,
            "unit": "ns",
            "range": "± 517534.19574001746"
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
          "id": "5434b4b2a5d678b55bc03f0e8ca8bb627f0ea9e8",
          "message": "Merge pull request #2853 from greymistcube/port/0.49.1-to-main\n\n🔀 Port 0.49.1 to main",
          "timestamp": "2023-02-24T01:35:21-05:00",
          "tree_id": "cc42a12559f193ce7f8965803940f3a3e29d3d54",
          "url": "https://github.com/planetarium/libplanet/commit/5434b4b2a5d678b55bc03f0e8ca8bb627f0ea9e8"
        },
        "date": 1677221339415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5987871.143489583,
            "unit": "ns",
            "range": "± 32339.345955871744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841748.9195033482,
            "unit": "ns",
            "range": "± 4266.7350281058425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374027.4475260417,
            "unit": "ns",
            "range": "± 7270.566725435562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643977.4983258927,
            "unit": "ns",
            "range": "± 3937.344376737297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838145.4794921875,
            "unit": "ns",
            "range": "± 1005.2740054098202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770599.1949869791,
            "unit": "ns",
            "range": "± 592.1770412728075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96399.09183673469,
            "unit": "ns",
            "range": "± 9264.989557843171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205087.17647058822,
            "unit": "ns",
            "range": "± 10176.925442223826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185875.36842105264,
            "unit": "ns",
            "range": "± 11041.866238204319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3977337.263157895,
            "unit": "ns",
            "range": "± 83989.508348657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10464246.933333334,
            "unit": "ns",
            "range": "± 195370.8839465765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20320.478723404256,
            "unit": "ns",
            "range": "± 2674.6439888860673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51697.27777777778,
            "unit": "ns",
            "range": "± 4358.560204563429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44105.02173913043,
            "unit": "ns",
            "range": "± 1573.6431261266953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103791.38461538461,
            "unit": "ns",
            "range": "± 17658.919562878276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7036.857142857143,
            "unit": "ns",
            "range": "± 1080.4184183745137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22623.378947368423,
            "unit": "ns",
            "range": "± 2722.5674216646166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111339.38043478261,
            "unit": "ns",
            "range": "± 11959.604218930457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4995683.294010417,
            "unit": "ns",
            "range": "± 54899.29443399591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6177518.571428572,
            "unit": "ns",
            "range": "± 68500.49547346274"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27462862.6,
            "unit": "ns",
            "range": "± 966751.0359474019"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6615027,
            "unit": "ns",
            "range": "± 250708.3100381353"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31310037.36842105,
            "unit": "ns",
            "range": "± 653255.7576419489"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30514f98f89182aa5478e58e442c572799f0f98f",
          "message": "Merge pull request #2855 from planetarium/ci-fix-yarn\n\nCI: fix parameters",
          "timestamp": "2023-02-24T16:23:37+09:00",
          "tree_id": "0ad0c72592b1c0cccaa69243000f568c184b8381",
          "url": "https://github.com/planetarium/libplanet/commit/30514f98f89182aa5478e58e442c572799f0f98f"
        },
        "date": 1677224219189,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5894408.729567308,
            "unit": "ns",
            "range": "± 17860.1039177368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861540.0548377405,
            "unit": "ns",
            "range": "± 3121.3896515578613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367082.701171875,
            "unit": "ns",
            "range": "± 656.9516506263658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637042.3155048075,
            "unit": "ns",
            "range": "± 1025.7980850731328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926037.8522135416,
            "unit": "ns",
            "range": "± 546.6255573707981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737829.0835658482,
            "unit": "ns",
            "range": "± 1146.1981952089675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89622.96907216495,
            "unit": "ns",
            "range": "± 8636.20618439892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193752.625,
            "unit": "ns",
            "range": "± 7957.6838523539045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170065.16666666666,
            "unit": "ns",
            "range": "± 2461.93696224347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3783103.466666667,
            "unit": "ns",
            "range": "± 24583.430543084636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9444544.57142857,
            "unit": "ns",
            "range": "± 44619.74734389435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14848.771739130434,
            "unit": "ns",
            "range": "± 1321.188169071176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47576.51648351648,
            "unit": "ns",
            "range": "± 3235.658017785348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39998.51190476191,
            "unit": "ns",
            "range": "± 2164.6882381837963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87123.76595744681,
            "unit": "ns",
            "range": "± 11496.41747510238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4952.03125,
            "unit": "ns",
            "range": "± 446.9841502694533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14883.233333333334,
            "unit": "ns",
            "range": "± 1387.9307534616037"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104455.93333333333,
            "unit": "ns",
            "range": "± 1858.0920116639875"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4448425.728794643,
            "unit": "ns",
            "range": "± 24540.966039354986"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5527179.654545454,
            "unit": "ns",
            "range": "± 235436.67329141102"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25335407.8,
            "unit": "ns",
            "range": "± 244682.7832136365"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6730809.733333333,
            "unit": "ns",
            "range": "± 69006.87411872888"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28986700.416666668,
            "unit": "ns",
            "range": "± 728851.9320371276"
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
          "id": "3818e0f5aac99ae2f1fb48f3bc1511daa01defc2",
          "message": "Merge pull request #2857 from greymistcube/refactor/validate-nonces\n\n♻️ Refactor validate nonces",
          "timestamp": "2023-02-24T04:14:59-05:00",
          "tree_id": "f338354b26307d6e0fd7308f940d2d4af576eaba",
          "url": "https://github.com/planetarium/libplanet/commit/3818e0f5aac99ae2f1fb48f3bc1511daa01defc2"
        },
        "date": 1677230894897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5965947.44140625,
            "unit": "ns",
            "range": "± 31085.19066558316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891711.2747896635,
            "unit": "ns",
            "range": "± 4082.6273030315097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346877.8051060268,
            "unit": "ns",
            "range": "± 3898.136901503085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608175.816145833,
            "unit": "ns",
            "range": "± 6094.785538199627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835266.6771763393,
            "unit": "ns",
            "range": "± 1255.0414487074345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779085.7526041666,
            "unit": "ns",
            "range": "± 1377.802945282364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96900.93406593407,
            "unit": "ns",
            "range": "± 7221.666018620169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206403.29824561405,
            "unit": "ns",
            "range": "± 8382.300368218297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176130.5,
            "unit": "ns",
            "range": "± 6934.355795448654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3965023.5263157897,
            "unit": "ns",
            "range": "± 85937.98152826286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9715626.173913043,
            "unit": "ns",
            "range": "± 239588.0156235343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19250.197916666668,
            "unit": "ns",
            "range": "± 2470.0017371389235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55760.26804123711,
            "unit": "ns",
            "range": "± 5732.006192416883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40508.16,
            "unit": "ns",
            "range": "± 1080.8819577857087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94444.82105263158,
            "unit": "ns",
            "range": "± 15090.656475842676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6177.329896907217,
            "unit": "ns",
            "range": "± 531.7908956545149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18692.896907216495,
            "unit": "ns",
            "range": "± 2405.472746695439"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114448.69565217392,
            "unit": "ns",
            "range": "± 6354.529165669438"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5010592.776302083,
            "unit": "ns",
            "range": "± 51640.95155364107"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6261286.333333333,
            "unit": "ns",
            "range": "± 86736.65793132244"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27523903.157894738,
            "unit": "ns",
            "range": "± 609275.5118699279"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6522091.642857143,
            "unit": "ns",
            "range": "± 88838.65548770218"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30735989.48387097,
            "unit": "ns",
            "range": "± 928609.6719741425"
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
          "id": "d2628f6c25335ad20c9eaabceecf8aca667af6a7",
          "message": "Merge pull request #2862 from greymistcube/refactor/test-util\n\n🧹 Use ephemeral `IStateStore` for generating genesis block",
          "timestamp": "2023-02-27T00:10:51-05:00",
          "tree_id": "b9edf1be1179d914547cbae7871d083e947315a1",
          "url": "https://github.com/planetarium/libplanet/commit/d2628f6c25335ad20c9eaabceecf8aca667af6a7"
        },
        "date": 1677475292870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5966480.948958334,
            "unit": "ns",
            "range": "± 40785.08137757217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889733.3220052083,
            "unit": "ns",
            "range": "± 6280.922878563574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357980.1020833333,
            "unit": "ns",
            "range": "± 4296.241769391812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553577.209542411,
            "unit": "ns",
            "range": "± 4831.933084194275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788246.2457682291,
            "unit": "ns",
            "range": "± 883.9166642262721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738278.9271763393,
            "unit": "ns",
            "range": "± 508.90914947471776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87573.27956989247,
            "unit": "ns",
            "range": "± 5874.694825312744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197835.26086956522,
            "unit": "ns",
            "range": "± 12428.84418067356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166406.875,
            "unit": "ns",
            "range": "± 3229.4194911779423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3760353.3571428573,
            "unit": "ns",
            "range": "± 22011.27296709275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9210879.066666666,
            "unit": "ns",
            "range": "± 100810.17230522684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14029.613636363636,
            "unit": "ns",
            "range": "± 808.199594555391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44712.24137931035,
            "unit": "ns",
            "range": "± 1778.5817266175072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38146.230769230766,
            "unit": "ns",
            "range": "± 514.0862693242179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82754.44210526315,
            "unit": "ns",
            "range": "± 13702.360391254688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5436.734693877551,
            "unit": "ns",
            "range": "± 681.6274876938301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15073.945652173914,
            "unit": "ns",
            "range": "± 1031.44916047289"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105252.4375,
            "unit": "ns",
            "range": "± 4139.309305660249"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4497432.38671875,
            "unit": "ns",
            "range": "± 44840.974615079445"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6001443.333333333,
            "unit": "ns",
            "range": "± 43028.92847785523"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25988992.066666666,
            "unit": "ns",
            "range": "± 248917.10395386844"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6825372.333333333,
            "unit": "ns",
            "range": "± 74733.91596444651"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28568520.57142857,
            "unit": "ns",
            "range": "± 466269.39656510466"
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
          "id": "fb7a4b9f62adfd045f8f8f3fa3f7f2d18db212f6",
          "message": "Merge pull request #2858 from greymistcube/chore/benchmark-threshold\n\nChanged benchmark alert threshold to 200% (again)",
          "timestamp": "2023-02-27T00:52:09-05:00",
          "tree_id": "c9f6e9774e306167f39c1de7dfc058089a255e12",
          "url": "https://github.com/planetarium/libplanet/commit/fb7a4b9f62adfd045f8f8f3fa3f7f2d18db212f6"
        },
        "date": 1677478157666,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7673341.792317708,
            "unit": "ns",
            "range": "± 191889.69126114761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2359489.3185096155,
            "unit": "ns",
            "range": "± 32767.181979051984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1691951.4012920673,
            "unit": "ns",
            "range": "± 17695.608554873586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161085.2567708334,
            "unit": "ns",
            "range": "± 35564.80465163727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1002811.126953125,
            "unit": "ns",
            "range": "± 13451.7514612381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946998.0421875,
            "unit": "ns",
            "range": "± 16047.737086508076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 141871.7052631579,
            "unit": "ns",
            "range": "± 20845.21499502468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278627.347826087,
            "unit": "ns",
            "range": "± 25495.619171391634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260284.96913580247,
            "unit": "ns",
            "range": "± 13590.02229586694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4891753.153846154,
            "unit": "ns",
            "range": "± 59363.32926962873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12362812.111111112,
            "unit": "ns",
            "range": "± 405656.1490939817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24411.484536082473,
            "unit": "ns",
            "range": "± 3225.986315949879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65636.34736842105,
            "unit": "ns",
            "range": "± 5889.94341765334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68086.40217391304,
            "unit": "ns",
            "range": "± 4773.570827051207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137867.24468085106,
            "unit": "ns",
            "range": "± 18983.1430375649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10269.557894736841,
            "unit": "ns",
            "range": "± 957.4043446002061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22242.305263157894,
            "unit": "ns",
            "range": "± 2615.107487615091"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127023.16129032258,
            "unit": "ns",
            "range": "± 10892.074371533045"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6876989.0889175255,
            "unit": "ns",
            "range": "± 585197.8465752674"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7951804.988764045,
            "unit": "ns",
            "range": "± 615615.3088234806"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 35402458.7125,
            "unit": "ns",
            "range": "± 1794324.7962747111"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8644790.957446808,
            "unit": "ns",
            "range": "± 589841.5235775253"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40766639.591836736,
            "unit": "ns",
            "range": "± 2706304.781857182"
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
          "id": "4e0fa7934800565a7cf932e4c48c5d0abfc589b8",
          "message": "Merge pull request #2865 from greymistcube/chore/logging\n\n🧹 Better logging",
          "timestamp": "2023-02-27T17:15:30+09:00",
          "tree_id": "b6cad099b381217e35f6382b7c607f603646ac3e",
          "url": "https://github.com/planetarium/libplanet/commit/4e0fa7934800565a7cf932e4c48c5d0abfc589b8"
        },
        "date": 1677486536841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6006415.2828125,
            "unit": "ns",
            "range": "± 38663.30667530623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855805.5739583333,
            "unit": "ns",
            "range": "± 2402.196958554689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372988.4248046875,
            "unit": "ns",
            "range": "± 1665.6664362703846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612598.7877604165,
            "unit": "ns",
            "range": "± 2771.172882433811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838108.4715401785,
            "unit": "ns",
            "range": "± 295.7269576970937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775580.8518880209,
            "unit": "ns",
            "range": "± 218.96653007017645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104930.95918367348,
            "unit": "ns",
            "range": "± 9734.444887956754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219989.0344827586,
            "unit": "ns",
            "range": "± 9152.19415541646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199877.54545454544,
            "unit": "ns",
            "range": "± 7495.946983799468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4162440.066666667,
            "unit": "ns",
            "range": "± 29223.09494821486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10421544.76923077,
            "unit": "ns",
            "range": "± 37062.63974263446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24825.329545454544,
            "unit": "ns",
            "range": "± 1549.044827839809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61763.17647058824,
            "unit": "ns",
            "range": "± 4429.30233723979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51277.086021505376,
            "unit": "ns",
            "range": "± 3154.3876262862327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103927.90816326531,
            "unit": "ns",
            "range": "± 19816.657571885728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7296.010204081633,
            "unit": "ns",
            "range": "± 885.0840078352625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23918.233333333334,
            "unit": "ns",
            "range": "± 1844.093273433748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111836.6705882353,
            "unit": "ns",
            "range": "± 6050.829617239504"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5225745.851851852,
            "unit": "ns",
            "range": "± 216639.38315372175"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6329954.6,
            "unit": "ns",
            "range": "± 116164.0654375157"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28305058.166666668,
            "unit": "ns",
            "range": "± 582841.8840129749"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6584977.933333334,
            "unit": "ns",
            "range": "± 195193.29854415375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31380496.4,
            "unit": "ns",
            "range": "± 542389.2867669335"
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
          "id": "880e08616aae6d40e9ff22e9f5c90e205e30f325",
          "message": "Merge pull request #2866 from OnedgeLee/release/0.50.0\n\n🚀 Release 0.50.0",
          "timestamp": "2023-02-27T18:47:48+09:00",
          "tree_id": "a27b92d18ca4a2f79f6c9c0d7119297ae7107202",
          "url": "https://github.com/planetarium/libplanet/commit/880e08616aae6d40e9ff22e9f5c90e205e30f325"
        },
        "date": 1677491913333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6008246.083147322,
            "unit": "ns",
            "range": "± 29596.205460427725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880358.5846354167,
            "unit": "ns",
            "range": "± 6756.524743982744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350971.6162760416,
            "unit": "ns",
            "range": "± 4172.197598742909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2640820.697823661,
            "unit": "ns",
            "range": "± 4881.571470490274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835104.2766276042,
            "unit": "ns",
            "range": "± 464.6758943337414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771860.74609375,
            "unit": "ns",
            "range": "± 387.2867852777047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92026.75,
            "unit": "ns",
            "range": "± 5897.849711898221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202250.6181818182,
            "unit": "ns",
            "range": "± 8616.315173340048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175639,
            "unit": "ns",
            "range": "± 6098.8386728864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3978424,
            "unit": "ns",
            "range": "± 55462.21383196723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9856571.066666666,
            "unit": "ns",
            "range": "± 180209.07170659414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18637.252631578947,
            "unit": "ns",
            "range": "± 1659.2827274279914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51245.333333333336,
            "unit": "ns",
            "range": "± 4899.777990386143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39979.28571428572,
            "unit": "ns",
            "range": "± 1140.691890660221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93344.57142857143,
            "unit": "ns",
            "range": "± 15974.563617936645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5100.083333333333,
            "unit": "ns",
            "range": "± 636.8938384091252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18729.021276595744,
            "unit": "ns",
            "range": "± 1493.9133064821312"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109540.53846153847,
            "unit": "ns",
            "range": "± 1803.1892401790324"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4987071.298016151,
            "unit": "ns",
            "range": "± 274274.40646523604"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6088851,
            "unit": "ns",
            "range": "± 197505.52509754966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27865594.296296295,
            "unit": "ns",
            "range": "± 761400.1886424477"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6859043.894736842,
            "unit": "ns",
            "range": "± 146995.485786278"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30610049.315789472,
            "unit": "ns",
            "range": "± 670457.1570466803"
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
          "id": "9eb4f5f6b97b725d67799ead74ada4116e7be725",
          "message": "Merge pull request #2867 from OnedgeLee/prepare/0.51.0\n\n🔧 Prepare 0.51.0",
          "timestamp": "2023-02-27T20:46:53-05:00",
          "tree_id": "785446742c97062ea6e87d33c23cd51b74123031",
          "url": "https://github.com/planetarium/libplanet/commit/9eb4f5f6b97b725d67799ead74ada4116e7be725"
        },
        "date": 1677549488044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6212374.684151785,
            "unit": "ns",
            "range": "± 27860.407685138667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893168.6455729166,
            "unit": "ns",
            "range": "± 8355.395219536067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375857.7172154018,
            "unit": "ns",
            "range": "± 4174.319778368337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633884.685546875,
            "unit": "ns",
            "range": "± 2252.892178821059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833867.6339192708,
            "unit": "ns",
            "range": "± 1299.4276995219273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763429.6591099331,
            "unit": "ns",
            "range": "± 519.7547666906427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99477.09375,
            "unit": "ns",
            "range": "± 8759.503314539827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203700.5254237288,
            "unit": "ns",
            "range": "± 9029.072664714096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183763.81632653062,
            "unit": "ns",
            "range": "± 7304.5621893486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3919274.933333333,
            "unit": "ns",
            "range": "± 63043.02541061786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9922674.625,
            "unit": "ns",
            "range": "± 188912.36736006284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21957.136842105265,
            "unit": "ns",
            "range": "± 2457.823568493269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54755.58620689655,
            "unit": "ns",
            "range": "± 4269.354317915129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40639.47826086957,
            "unit": "ns",
            "range": "± 1014.2028158995893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101680.20833333333,
            "unit": "ns",
            "range": "± 16279.312834273453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6022.979166666667,
            "unit": "ns",
            "range": "± 754.4305203845609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18015.766666666666,
            "unit": "ns",
            "range": "± 1759.3494906746298"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111218.42857142857,
            "unit": "ns",
            "range": "± 3585.0374539491895"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5837481.248641305,
            "unit": "ns",
            "range": "± 144485.38837390963"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6295766.80952381,
            "unit": "ns",
            "range": "± 120983.75549660335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27787887.173913043,
            "unit": "ns",
            "range": "± 630167.5100516494"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6750690.2,
            "unit": "ns",
            "range": "± 265159.47113249666"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31289833.57142857,
            "unit": "ns",
            "range": "± 703584.7680704558"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33357a816f1c352349e0ff237243d335181f5293",
          "message": "Merge pull request #2848 from planetarium/ci-tslib-account\n\nIntroduce @planetarium/account",
          "timestamp": "2023-02-28T11:11:34+09:00",
          "tree_id": "61e4d02d52755d15c297d1c2c1b2e61bbebc4737",
          "url": "https://github.com/planetarium/libplanet/commit/33357a816f1c352349e0ff237243d335181f5293"
        },
        "date": 1677551382979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7706656.878472222,
            "unit": "ns",
            "range": "± 162013.89701291546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2338895.9674479165,
            "unit": "ns",
            "range": "± 47239.02216509636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1674363.0303385416,
            "unit": "ns",
            "range": "± 29487.931169186297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3441819.7676612367,
            "unit": "ns",
            "range": "± 194345.72244827548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1028497.7474459135,
            "unit": "ns",
            "range": "± 11173.214388756094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961389.3788411458,
            "unit": "ns",
            "range": "± 10496.866296906728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114401.02127659574,
            "unit": "ns",
            "range": "± 12157.70878330936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256984.7340425532,
            "unit": "ns",
            "range": "± 22572.403011735478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226776.09782608695,
            "unit": "ns",
            "range": "± 18652.1238999567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4913417.671875,
            "unit": "ns",
            "range": "± 227642.28536944525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12175340.1875,
            "unit": "ns",
            "range": "± 230030.2657719106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26251.01020408163,
            "unit": "ns",
            "range": "± 5079.365575480793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66559.70652173914,
            "unit": "ns",
            "range": "± 6079.891228672143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71190.92045454546,
            "unit": "ns",
            "range": "± 3913.6533017135775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139549.92708333334,
            "unit": "ns",
            "range": "± 20096.913118944827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10932.642857142857,
            "unit": "ns",
            "range": "± 879.9928332651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23446.381443298967,
            "unit": "ns",
            "range": "± 4224.4779397461725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136514.37634408602,
            "unit": "ns",
            "range": "± 12625.179377902596"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6241442.489499328,
            "unit": "ns",
            "range": "± 351323.78019469726"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7258479.79787234,
            "unit": "ns",
            "range": "± 443469.1396932007"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32719235.388888888,
            "unit": "ns",
            "range": "± 685756.0470752348"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8104937.2950819675,
            "unit": "ns",
            "range": "± 358158.17235309805"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36759118.8,
            "unit": "ns",
            "range": "± 651010.6089015097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eba004462bf0924b922a9e1535c24ec93ea0d424",
          "message": "Merge pull request #2869 from planetarium/ci-npm-account\n\nAdd `@planetarium/account` to npm package list for CI",
          "timestamp": "2023-02-28T12:33:27+09:00",
          "tree_id": "2a4d43b94c69ff6423629d51950f1e1b1596bd40",
          "url": "https://github.com/planetarium/libplanet/commit/eba004462bf0924b922a9e1535c24ec93ea0d424"
        },
        "date": 1677556035509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6146552.4859375,
            "unit": "ns",
            "range": "± 37581.08962925677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884946.069921875,
            "unit": "ns",
            "range": "± 3071.77256224695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393734.515234375,
            "unit": "ns",
            "range": "± 3155.855907896888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682231.48203125,
            "unit": "ns",
            "range": "± 10058.028566586296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852678.8326590402,
            "unit": "ns",
            "range": "± 626.3600558138054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782540.771875,
            "unit": "ns",
            "range": "± 430.0008747989843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111977.34375,
            "unit": "ns",
            "range": "± 11636.234728167577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230728.05128205128,
            "unit": "ns",
            "range": "± 7252.439299075492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220840.06451612903,
            "unit": "ns",
            "range": "± 6735.981239757545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4175455.2,
            "unit": "ns",
            "range": "± 55529.55435132848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10526489.142857144,
            "unit": "ns",
            "range": "± 50772.70945915902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26983.510638297874,
            "unit": "ns",
            "range": "± 1795.985042832807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63566.79012345679,
            "unit": "ns",
            "range": "± 3110.81828750913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50241.5,
            "unit": "ns",
            "range": "± 2709.062481767536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118696.39175257731,
            "unit": "ns",
            "range": "± 18212.088080194553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7785.867346938776,
            "unit": "ns",
            "range": "± 963.5380533014245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23077.784090909092,
            "unit": "ns",
            "range": "± 1837.2349692289724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 123567.87368421053,
            "unit": "ns",
            "range": "± 8570.70357751695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5302265.749278846,
            "unit": "ns",
            "range": "± 244853.16499051172"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6594178.333333333,
            "unit": "ns",
            "range": "± 150771.48452851863"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28878867.266666666,
            "unit": "ns",
            "range": "± 466764.58684245695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6917775.740740741,
            "unit": "ns",
            "range": "± 290566.40016699623"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32303938.9375,
            "unit": "ns",
            "range": "± 600326.8684429029"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "325cb55ec61088ef737620e8fe7d95f251db50fd",
          "message": "Merge pull request #2873 from moreal/poly-action-configurable",
          "timestamp": "2023-03-02T12:09:41+09:00",
          "tree_id": "27033c3c72b24f2483a6a0b1f313df7d500fbb50",
          "url": "https://github.com/planetarium/libplanet/commit/325cb55ec61088ef737620e8fe7d95f251db50fd"
        },
        "date": 1677727891170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7412296.179435484,
            "unit": "ns",
            "range": "± 333932.70849976875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2429681.646551724,
            "unit": "ns",
            "range": "± 105283.78680318128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1721976.18042732,
            "unit": "ns",
            "range": "± 80209.72164335841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3308434.725543478,
            "unit": "ns",
            "range": "± 119668.65984921096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1106158.0157015931,
            "unit": "ns",
            "range": "± 44470.325700452406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1003904.1220117188,
            "unit": "ns",
            "range": "± 66444.95458386581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 127431.93684210526,
            "unit": "ns",
            "range": "± 26625.61787708211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256663.52127659574,
            "unit": "ns",
            "range": "± 52875.52467656584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243449.28421052633,
            "unit": "ns",
            "range": "± 41550.98542208144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5224719.635416667,
            "unit": "ns",
            "range": "± 594641.8041595181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12775292.322222222,
            "unit": "ns",
            "range": "± 1156476.0664315084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25267.183673469386,
            "unit": "ns",
            "range": "± 10208.38713125567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69216.29166666667,
            "unit": "ns",
            "range": "± 15866.556471771997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55604.191011235955,
            "unit": "ns",
            "range": "± 11643.983065667635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145671.38144329897,
            "unit": "ns",
            "range": "± 39953.38826329463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7667.418604651163,
            "unit": "ns",
            "range": "± 2149.763075674189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24626.87,
            "unit": "ns",
            "range": "± 9380.718142110292"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146567.55789473685,
            "unit": "ns",
            "range": "± 32660.091318459647"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6576351.4270567605,
            "unit": "ns",
            "range": "± 452356.63871009444"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6896883.585106383,
            "unit": "ns",
            "range": "± 855352.597833228"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36569825.604166664,
            "unit": "ns",
            "range": "± 3594718.857000406"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8179567.648351648,
            "unit": "ns",
            "range": "± 829014.1615057994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 48910490.8989899,
            "unit": "ns",
            "range": "± 4022488.7797820033"
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
          "id": "ef8c2b41bdb649d104fde4663fc4c30ce9006948",
          "message": "Merge pull request #2872 from limebell/merge/pbft-to-main\n\nImplement PBFT consensus algorithm to replace PoW consensus algorithm",
          "timestamp": "2023-03-02T16:33:41+09:00",
          "tree_id": "fcdff2dec63ac9bd80e9c4b2f535fc3e4b2ec2c9",
          "url": "https://github.com/planetarium/libplanet/commit/ef8c2b41bdb649d104fde4663fc4c30ce9006948"
        },
        "date": 1677743303152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6339973.252604167,
            "unit": "ns",
            "range": "± 90405.82328946913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890808.524639423,
            "unit": "ns",
            "range": "± 1592.6882753551388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367808.4834635416,
            "unit": "ns",
            "range": "± 3609.7344713490916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654986.690625,
            "unit": "ns",
            "range": "± 11833.927538244303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837092.076953125,
            "unit": "ns",
            "range": "± 418.9069754129852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769999.3452473958,
            "unit": "ns",
            "range": "± 533.6144996099728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9015861,
            "unit": "ns",
            "range": "± 204124.92502515786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23299496.35714286,
            "unit": "ns",
            "range": "± 276457.0705760264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58158168.666666664,
            "unit": "ns",
            "range": "± 259897.77197985986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114853340.66666667,
            "unit": "ns",
            "range": "± 906125.0118657285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231983766.42857143,
            "unit": "ns",
            "range": "± 689658.5826477101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247486.3,
            "unit": "ns",
            "range": "± 10722.522684612697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242040.59016393442,
            "unit": "ns",
            "range": "± 10862.174133780416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217767.0625,
            "unit": "ns",
            "range": "± 8598.932928372506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12776416.4,
            "unit": "ns",
            "range": "± 140005.8429953142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10508647.2,
            "unit": "ns",
            "range": "± 68811.83872416141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29589.42391304348,
            "unit": "ns",
            "range": "± 2621.9983077826905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67714.35416666667,
            "unit": "ns",
            "range": "± 5357.638617661342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53143.080808080806,
            "unit": "ns",
            "range": "± 5522.33103450236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123951.97647058824,
            "unit": "ns",
            "range": "± 14108.740094248631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11038.79381443299,
            "unit": "ns",
            "range": "± 1142.270362937196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31279.75,
            "unit": "ns",
            "range": "± 2707.4267237149215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58448.073684210525,
            "unit": "ns",
            "range": "± 6387.666742199886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592707.3936170214,
            "unit": "ns",
            "range": "± 91810.33526638012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2892040.269230769,
            "unit": "ns",
            "range": "± 70558.01756090243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2465810.5172413792,
            "unit": "ns",
            "range": "± 130606.237644486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5705960.607142857,
            "unit": "ns",
            "range": "± 159501.57121862564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3827038.304347826,
            "unit": "ns",
            "range": "± 90893.16994013796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6011844.692307692,
            "unit": "ns",
            "range": "± 70610.1970626819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27105138.2,
            "unit": "ns",
            "range": "± 356016.1431223911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7429394.333333333,
            "unit": "ns",
            "range": "± 126735.01000043169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31110781.666666668,
            "unit": "ns",
            "range": "± 413628.25400121696"
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
          "id": "1db01f804e449cacb42f6e34661eded415609449",
          "message": "Merge pull request #2886 from dahlia/main",
          "timestamp": "2023-03-06T15:33:21+09:00",
          "tree_id": "dbf16bc8ee38ad7e79c9b24faa4ebe0f4904f112",
          "url": "https://github.com/planetarium/libplanet/commit/1db01f804e449cacb42f6e34661eded415609449"
        },
        "date": 1678085186277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5953512.858816965,
            "unit": "ns",
            "range": "± 20566.753893504087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894785.446875,
            "unit": "ns",
            "range": "± 2966.407422749978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368637.0518973214,
            "unit": "ns",
            "range": "± 3061.1191508651473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612545.8365384615,
            "unit": "ns",
            "range": "± 2372.788444551829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836606.11796875,
            "unit": "ns",
            "range": "± 671.960457552583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779478.84453125,
            "unit": "ns",
            "range": "± 355.68231645850835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7872605.428571428,
            "unit": "ns",
            "range": "± 106657.22502752184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22006990.733333334,
            "unit": "ns",
            "range": "± 264823.50363981415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54966239.6,
            "unit": "ns",
            "range": "± 852703.319442667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 109102108.66666667,
            "unit": "ns",
            "range": "± 1757857.147989793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 218638788.64285713,
            "unit": "ns",
            "range": "± 2680696.709463752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199621.72549019608,
            "unit": "ns",
            "range": "± 7008.121523142792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199589.09677419355,
            "unit": "ns",
            "range": "± 5939.272802595948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170403.1891891892,
            "unit": "ns",
            "range": "± 5797.118953209228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11990668.4,
            "unit": "ns",
            "range": "± 215009.76822487457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9674557.764705881,
            "unit": "ns",
            "range": "± 195776.31679851157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20739.659574468085,
            "unit": "ns",
            "range": "± 1444.3921112483188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55610.36956521739,
            "unit": "ns",
            "range": "± 4358.298843238682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41805.19047619047,
            "unit": "ns",
            "range": "± 1416.711121527005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93540.3829787234,
            "unit": "ns",
            "range": "± 11774.253949478238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6298.03125,
            "unit": "ns",
            "range": "± 1010.9554569095827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19253.8064516129,
            "unit": "ns",
            "range": "± 1439.5446310345965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49877.53846153846,
            "unit": "ns",
            "range": "± 2339.604841614038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1429607.2391304348,
            "unit": "ns",
            "range": "± 87272.5085979265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700413.975609756,
            "unit": "ns",
            "range": "± 96363.92460835325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2263269.8378378376,
            "unit": "ns",
            "range": "± 110792.95427007599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5220648.5,
            "unit": "ns",
            "range": "± 76150.84273932292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371874.388888889,
            "unit": "ns",
            "range": "± 109685.54576796285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5549739.416666667,
            "unit": "ns",
            "range": "± 140399.73559275136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25184245.315789472,
            "unit": "ns",
            "range": "± 546731.317482876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6746168.461538462,
            "unit": "ns",
            "range": "± 182501.1553070787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28739702.541666668,
            "unit": "ns",
            "range": "± 717766.3579242978"
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
          "id": "d3bae116896d64908c86e567a069fbb85daae677",
          "message": "Merge pull request #2888 from greymistcube/port/0.50.1-to-main\n\n🔀 Port 0.50.1 to main",
          "timestamp": "2023-03-06T05:42:17-05:00",
          "tree_id": "a8dd616ebe8ec9898d172cc4ff3b65e747c211da",
          "url": "https://github.com/planetarium/libplanet/commit/d3bae116896d64908c86e567a069fbb85daae677"
        },
        "date": 1678100092323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6017383.646875,
            "unit": "ns",
            "range": "± 48569.46581272097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1982422.614483173,
            "unit": "ns",
            "range": "± 4735.186571732541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345957.2140625,
            "unit": "ns",
            "range": "± 1149.259001271557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562519.8880208335,
            "unit": "ns",
            "range": "± 1149.0767444875253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827602.2446664664,
            "unit": "ns",
            "range": "± 1240.2534095232234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752468.0719651442,
            "unit": "ns",
            "range": "± 1568.5117999377896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7976742.866666666,
            "unit": "ns",
            "range": "± 34345.96433533072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20061295.285714287,
            "unit": "ns",
            "range": "± 93526.26671560372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51330789.84615385,
            "unit": "ns",
            "range": "± 366979.9245178693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103316399.28571428,
            "unit": "ns",
            "range": "± 371623.65852306277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205481142.76923078,
            "unit": "ns",
            "range": "± 627593.8360349197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195795.0909090909,
            "unit": "ns",
            "range": "± 4324.141983992578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198051.57142857142,
            "unit": "ns",
            "range": "± 5467.58001468028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171409.44444444444,
            "unit": "ns",
            "range": "± 4726.469135324962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11691049.923076924,
            "unit": "ns",
            "range": "± 71384.93436697216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9398365.4,
            "unit": "ns",
            "range": "± 78502.45350651696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18526.105263157893,
            "unit": "ns",
            "range": "± 1476.5301437483547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51495.06593406593,
            "unit": "ns",
            "range": "± 3744.135909220645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40299.57142857143,
            "unit": "ns",
            "range": "± 707.9767178142463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85885.40425531915,
            "unit": "ns",
            "range": "± 11536.35098596517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4399.958762886598,
            "unit": "ns",
            "range": "± 414.58819722923477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17071.43157894737,
            "unit": "ns",
            "range": "± 1861.849570291976"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44297.08235294118,
            "unit": "ns",
            "range": "± 2303.1766996485358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313059.9157894736,
            "unit": "ns",
            "range": "± 77595.49395335514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2450882.375,
            "unit": "ns",
            "range": "± 75638.79844781401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2084324.17721519,
            "unit": "ns",
            "range": "± 107616.82508894507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4827724.733333333,
            "unit": "ns",
            "range": "± 76387.03609763212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3268470.4375,
            "unit": "ns",
            "range": "± 40305.70906289207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5125471.076923077,
            "unit": "ns",
            "range": "± 45559.19590390349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23888752.333333332,
            "unit": "ns",
            "range": "± 216554.70593351786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6399757,
            "unit": "ns",
            "range": "± 125761.644053841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27290276.066666666,
            "unit": "ns",
            "range": "± 320627.4444942663"
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
          "id": "0e58f6003ecd29e6647380dc70da5c15c1c8796a",
          "message": "Merge pull request #2890 from greymistcube/refactor/default-store\n\n🧹 Minor cleanup for `DefaultStore` code comprehension",
          "timestamp": "2023-03-06T22:08:06-05:00",
          "tree_id": "f2fba8cafa5a5235c451619b662db2f49525c5e3",
          "url": "https://github.com/planetarium/libplanet/commit/0e58f6003ecd29e6647380dc70da5c15c1c8796a"
        },
        "date": 1678159264919,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6357357.041145833,
            "unit": "ns",
            "range": "± 16796.55314380834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887491.2607421875,
            "unit": "ns",
            "range": "± 928.9405087844034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345154.68984375,
            "unit": "ns",
            "range": "± 735.9844882853552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606943.2727864585,
            "unit": "ns",
            "range": "± 1387.8387276277663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823694.537109375,
            "unit": "ns",
            "range": "± 668.6858897127446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746799.5846121652,
            "unit": "ns",
            "range": "± 1254.8295404723715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8271069.266666667,
            "unit": "ns",
            "range": "± 59326.912115915184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20271801.666666668,
            "unit": "ns",
            "range": "± 106368.288309108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51890745.6,
            "unit": "ns",
            "range": "± 258045.61708814203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104329895.6,
            "unit": "ns",
            "range": "± 577880.6818738376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 207651417.4,
            "unit": "ns",
            "range": "± 299420.021356956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219749.05263157896,
            "unit": "ns",
            "range": "± 4851.304526432775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202591.6851851852,
            "unit": "ns",
            "range": "± 7597.317197349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177554.9,
            "unit": "ns",
            "range": "± 10517.841110525618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11581760.142857144,
            "unit": "ns",
            "range": "± 33121.136527919734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9492465.857142856,
            "unit": "ns",
            "range": "± 38593.34191054431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20541.103092783505,
            "unit": "ns",
            "range": "± 1920.6616019645853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56380.979166666664,
            "unit": "ns",
            "range": "± 5001.609944974384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39272.97014925373,
            "unit": "ns",
            "range": "± 1872.087070383061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98578.90721649484,
            "unit": "ns",
            "range": "± 13437.962662641668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5782.260416666667,
            "unit": "ns",
            "range": "± 833.136069568871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21206.387096774193,
            "unit": "ns",
            "range": "± 1844.0462718910214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45719.555555555555,
            "unit": "ns",
            "range": "± 2401.0243647243565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384415.77,
            "unit": "ns",
            "range": "± 101115.92644227667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2493204.68,
            "unit": "ns",
            "range": "± 66182.87041140882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215365.03125,
            "unit": "ns",
            "range": "± 101986.62437369846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5149068.458333333,
            "unit": "ns",
            "range": "± 128052.42811475752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3324684.933333333,
            "unit": "ns",
            "range": "± 47520.60846241444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5359347.214285715,
            "unit": "ns",
            "range": "± 37248.48804609095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24723061.8,
            "unit": "ns",
            "range": "± 269164.42560030636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6461287.466666667,
            "unit": "ns",
            "range": "± 106945.20383880619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27779990.615384616,
            "unit": "ns",
            "range": "± 412949.489433542"
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
          "id": "d202a1e5cac5ef0c25f58380942b14d57cd83907",
          "message": "Merge pull request #2893 from dahlia/main",
          "timestamp": "2023-03-07T12:27:05+09:00",
          "tree_id": "7c053e7c5c4fdd2c803cb7b8957ed326bd1bc7bd",
          "url": "https://github.com/planetarium/libplanet/commit/d202a1e5cac5ef0c25f58380942b14d57cd83907"
        },
        "date": 1678160347512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6279056.459821428,
            "unit": "ns",
            "range": "± 18826.535406107076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989267.7385416667,
            "unit": "ns",
            "range": "± 7914.567200176737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382643.2975260417,
            "unit": "ns",
            "range": "± 1284.3558475995976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573983.320572917,
            "unit": "ns",
            "range": "± 2945.528931307347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815717.2847377232,
            "unit": "ns",
            "range": "± 3126.2711044520133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751502.287248884,
            "unit": "ns",
            "range": "± 912.7995859420661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7813894.214285715,
            "unit": "ns",
            "range": "± 16597.511769857236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19883268.14285714,
            "unit": "ns",
            "range": "± 69974.41499561122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49608266.571428575,
            "unit": "ns",
            "range": "± 305746.80812264717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99805519.07142857,
            "unit": "ns",
            "range": "± 692926.8418595545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198875961.2,
            "unit": "ns",
            "range": "± 1024174.3581897845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195693.75,
            "unit": "ns",
            "range": "± 3783.379221454457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189013.5,
            "unit": "ns",
            "range": "± 7266.448987115573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162900.07692307694,
            "unit": "ns",
            "range": "± 2312.5455116796606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11295195.533333333,
            "unit": "ns",
            "range": "± 72997.28173791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9107594.714285715,
            "unit": "ns",
            "range": "± 34743.30512028639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16447.82608695652,
            "unit": "ns",
            "range": "± 1065.6967241590928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50060.416666666664,
            "unit": "ns",
            "range": "± 4579.576610323771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38007.692307692305,
            "unit": "ns",
            "range": "± 583.7544267662822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81741.25773195876,
            "unit": "ns",
            "range": "± 11303.42909279299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4662.765957446809,
            "unit": "ns",
            "range": "± 380.4310069995713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16062.765957446809,
            "unit": "ns",
            "range": "± 1248.3093119028963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44497.02985074627,
            "unit": "ns",
            "range": "± 2107.972636316484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1332904.4731182796,
            "unit": "ns",
            "range": "± 84878.36821485912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2507013.6333333333,
            "unit": "ns",
            "range": "± 72769.68164458343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2100842.8588235294,
            "unit": "ns",
            "range": "± 113580.61733686207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4896513.541666667,
            "unit": "ns",
            "range": "± 126897.75569776096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234346.285714286,
            "unit": "ns",
            "range": "± 105181.44365489442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5041827.6,
            "unit": "ns",
            "range": "± 77141.03335894403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23201040.14285714,
            "unit": "ns",
            "range": "± 274764.8352427545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6082622.368421053,
            "unit": "ns",
            "range": "± 128207.17997107065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26783205.285714287,
            "unit": "ns",
            "range": "± 371950.92556813057"
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
          "id": "bd22f3d5e9a07d3ea6ef42c9f00865667f0a60d9",
          "message": "Merge pull request #2870 from colibrishin/pbft-gossip-and-kdm\n\nfix/pbft: parallel replying / task-switching between kademlia",
          "timestamp": "2023-03-07T15:26:28+09:00",
          "tree_id": "51d0c2a2057e65c5ba3ea2856fe3f93c9cb1e99e",
          "url": "https://github.com/planetarium/libplanet/commit/bd22f3d5e9a07d3ea6ef42c9f00865667f0a60d9"
        },
        "date": 1678171232801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032767.704799107,
            "unit": "ns",
            "range": "± 18742.14018840177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914594.1373197115,
            "unit": "ns",
            "range": "± 2039.9196225008673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377083.744921875,
            "unit": "ns",
            "range": "± 2630.8605822267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654323.882254464,
            "unit": "ns",
            "range": "± 3666.044627620455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845994.2898297991,
            "unit": "ns",
            "range": "± 1237.6987326066262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765680.3882211539,
            "unit": "ns",
            "range": "± 776.8008277119684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8638460.368421054,
            "unit": "ns",
            "range": "± 182045.85951109818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22692940.733333334,
            "unit": "ns",
            "range": "± 350163.23626365757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56696341.78571428,
            "unit": "ns",
            "range": "± 313726.79749650345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 111952286,
            "unit": "ns",
            "range": "± 493316.75156955986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 225528365.4,
            "unit": "ns",
            "range": "± 1160701.538300486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206730.70588235295,
            "unit": "ns",
            "range": "± 6536.134894983342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209306.82222222222,
            "unit": "ns",
            "range": "± 7858.522545875935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179815.86075949366,
            "unit": "ns",
            "range": "± 9312.515172569538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12424925.133333333,
            "unit": "ns",
            "range": "± 138241.25072643664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10140902.6,
            "unit": "ns",
            "range": "± 125038.16605843652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23593.882978723403,
            "unit": "ns",
            "range": "± 1981.2299528181277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59352.87640449438,
            "unit": "ns",
            "range": "± 4392.194418977377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43873.318181818184,
            "unit": "ns",
            "range": "± 1079.8578119083058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106555.41666666667,
            "unit": "ns",
            "range": "± 14420.11115780696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7121.989583333333,
            "unit": "ns",
            "range": "± 775.0164072258718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21847.893617021276,
            "unit": "ns",
            "range": "± 1852.7050811160498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51070.15217391304,
            "unit": "ns",
            "range": "± 3224.717542566462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1508463.1041666667,
            "unit": "ns",
            "range": "± 102468.78057761163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2782047.3913043477,
            "unit": "ns",
            "range": "± 68325.59172330615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2337981.8674698793,
            "unit": "ns",
            "range": "± 121343.5955449438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5463567.206896552,
            "unit": "ns",
            "range": "± 159750.64328428035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3595891.3846153845,
            "unit": "ns",
            "range": "± 75656.51110701679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5783679.8,
            "unit": "ns",
            "range": "± 76219.48661520696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26051414.125,
            "unit": "ns",
            "range": "± 480059.70215212123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6859325.551724138,
            "unit": "ns",
            "range": "± 194476.34019988618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29653723.666666668,
            "unit": "ns",
            "range": "± 513162.2848649436"
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
          "id": "443ec1670ccb3b5160bef67f174f4e8797ff5758",
          "message": "Merge pull request #2895 from greymistcube/release/0.51.0\n\n🚀 Release 0.51.0",
          "timestamp": "2023-03-07T04:01:48-05:00",
          "tree_id": "067f25104ac8b8f8d254ba7c54539799ac1beaa1",
          "url": "https://github.com/planetarium/libplanet/commit/443ec1670ccb3b5160bef67f174f4e8797ff5758"
        },
        "date": 1678180494441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5968340.333854167,
            "unit": "ns",
            "range": "± 37851.88677443271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909898.7820870536,
            "unit": "ns",
            "range": "± 3245.1735255267113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368647.3290264423,
            "unit": "ns",
            "range": "± 2028.9437263703715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643210.730143229,
            "unit": "ns",
            "range": "± 5994.8239545795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820223.4873046875,
            "unit": "ns",
            "range": "± 369.7449375156598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758936.1609375,
            "unit": "ns",
            "range": "± 309.78961597737873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8186830.6,
            "unit": "ns",
            "range": "± 126878.94235834182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22178152.666666668,
            "unit": "ns",
            "range": "± 197878.50946356912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55669410.733333334,
            "unit": "ns",
            "range": "± 436204.05489263963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112578743.57142857,
            "unit": "ns",
            "range": "± 311460.23159520805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 227356979.06666666,
            "unit": "ns",
            "range": "± 1210199.4040483262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200612.7435897436,
            "unit": "ns",
            "range": "± 6338.729570198004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199805.25,
            "unit": "ns",
            "range": "± 6679.578337311848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170282.04,
            "unit": "ns",
            "range": "± 4518.732496323868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12044483.722222222,
            "unit": "ns",
            "range": "± 253484.04242286328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9770246.066666666,
            "unit": "ns",
            "range": "± 178557.45400189288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19985.36170212766,
            "unit": "ns",
            "range": "± 1433.5446769749078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55571.74193548387,
            "unit": "ns",
            "range": "± 4468.397010754785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40719.380952380954,
            "unit": "ns",
            "range": "± 939.5988226999051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99429.69387755102,
            "unit": "ns",
            "range": "± 15127.201665033796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6290.666666666667,
            "unit": "ns",
            "range": "± 785.6384687047675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19643.31182795699,
            "unit": "ns",
            "range": "± 1930.3338525087281"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48157.37313432836,
            "unit": "ns",
            "range": "± 2162.0315280675736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417462.9318181819,
            "unit": "ns",
            "range": "± 76474.7534531458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2668866.037037037,
            "unit": "ns",
            "range": "± 74549.62305816147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2228422.139240506,
            "unit": "ns",
            "range": "± 115651.0236356235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5265984.653846154,
            "unit": "ns",
            "range": "± 142588.64676262057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640439.0714285714,
            "unit": "ns",
            "range": "± 51336.3141877085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5309230.956521739,
            "unit": "ns",
            "range": "± 133506.1255082526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25524200.29411765,
            "unit": "ns",
            "range": "± 506410.4117244931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6665560,
            "unit": "ns",
            "range": "± 198790.38741937405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29073542.285714287,
            "unit": "ns",
            "range": "± 691695.8192935782"
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
          "id": "4d42793b3feb598dbae2547d6be88b906c1b17d4",
          "message": "Merge pull request #2897 from greymistcube/prepare/0.52.0\n\n🔧 Prepare 0.52.0",
          "timestamp": "2023-03-07T05:04:50-05:00",
          "tree_id": "d33d593feb62e920fbe578c16b4ea720826d64e2",
          "url": "https://github.com/planetarium/libplanet/commit/4d42793b3feb598dbae2547d6be88b906c1b17d4"
        },
        "date": 1678184233652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6272548.703125,
            "unit": "ns",
            "range": "± 16682.768763631975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898261.3646763393,
            "unit": "ns",
            "range": "± 2801.392998044235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381055.4806189905,
            "unit": "ns",
            "range": "± 691.4797471241623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601866.4581473214,
            "unit": "ns",
            "range": "± 1304.0647650846342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864522.7034040178,
            "unit": "ns",
            "range": "± 1401.459749090995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751195.5849609375,
            "unit": "ns",
            "range": "± 1589.6228543859045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7955063.133333334,
            "unit": "ns",
            "range": "± 74610.33809051498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19860148,
            "unit": "ns",
            "range": "± 230920.8218013884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51406050.93333333,
            "unit": "ns",
            "range": "± 374036.7808198369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103041972.13333334,
            "unit": "ns",
            "range": "± 599907.5514479432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 205778122.33333334,
            "unit": "ns",
            "range": "± 1420763.3850904475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192908.88235294117,
            "unit": "ns",
            "range": "± 7761.19295636195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195909.87234042553,
            "unit": "ns",
            "range": "± 7459.260683195788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164908.72222222222,
            "unit": "ns",
            "range": "± 3511.927052799219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11517452.42857143,
            "unit": "ns",
            "range": "± 73729.92336245147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9133872.92857143,
            "unit": "ns",
            "range": "± 69391.69510768261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19234.78350515464,
            "unit": "ns",
            "range": "± 1297.0995948236787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54866.21978021978,
            "unit": "ns",
            "range": "± 3788.631875029994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39602.779661016946,
            "unit": "ns",
            "range": "± 1754.831655820252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89482.96842105263,
            "unit": "ns",
            "range": "± 13035.112975583534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5096.8247422680415,
            "unit": "ns",
            "range": "± 496.9304740586051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19349.702127659573,
            "unit": "ns",
            "range": "± 1723.644612159851"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45343.730158730155,
            "unit": "ns",
            "range": "± 2088.09284960988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356969.4470588234,
            "unit": "ns",
            "range": "± 73319.79904086614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2499480,
            "unit": "ns",
            "range": "± 73922.50629567752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2156197.4556962023,
            "unit": "ns",
            "range": "± 105766.54006975997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5097559,
            "unit": "ns",
            "range": "± 125974.42040134396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346204.4615384615,
            "unit": "ns",
            "range": "± 31990.506991958788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5356134.533333333,
            "unit": "ns",
            "range": "± 90341.5793687386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23800090.133333333,
            "unit": "ns",
            "range": "± 320143.2264475803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6247098.90625,
            "unit": "ns",
            "range": "± 156636.16294691613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26822577.42857143,
            "unit": "ns",
            "range": "± 353013.60567802796"
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
          "id": "7c53382e1bb7413e152fd11af44b6b5909bdbafd",
          "message": "Merge pull request #2903 from colibrishin/benchmark/spliting-merged-fix\n\nci/bench: permission fix for merged actions",
          "timestamp": "2023-03-09T18:01:12+09:00",
          "tree_id": "17d9eee756eea756c40af48ad2cd631c3c8e88a8",
          "url": "https://github.com/planetarium/libplanet/commit/7c53382e1bb7413e152fd11af44b6b5909bdbafd"
        },
        "date": 1678353975112,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 522871.0206185567,
            "unit": "ns",
            "range": "± 110700.84312583353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 548636.3979591837,
            "unit": "ns",
            "range": "± 115250.3699035359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 547051.6632653062,
            "unit": "ns",
            "range": "± 116593.50350002873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 21005464.226804122,
            "unit": "ns",
            "range": "± 1657162.0827087853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 16384286.010101011,
            "unit": "ns",
            "range": "± 1522182.6905434215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 99775.41414141415,
            "unit": "ns",
            "range": "± 27186.214294257068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 192984.22448979592,
            "unit": "ns",
            "range": "± 56047.75359662004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 169004.2323232323,
            "unit": "ns",
            "range": "± 40480.75457467747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 432954.5252525252,
            "unit": "ns",
            "range": "± 121459.21226572766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 30994.31313131313,
            "unit": "ns",
            "range": "± 7836.465917390164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 95376.0412371134,
            "unit": "ns",
            "range": "± 27177.43264752544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5951517.081632653,
            "unit": "ns",
            "range": "± 648814.5364095217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 9390761.020833334,
            "unit": "ns",
            "range": "± 883019.2618782921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 50401969.29591837,
            "unit": "ns",
            "range": "± 7209931.581914112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 11672950.42857143,
            "unit": "ns",
            "range": "± 1522897.3891407428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 57827867.46875,
            "unit": "ns",
            "range": "± 8984198.61822254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 10295706.269665949,
            "unit": "ns",
            "range": "± 448352.46584344655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2250062.1908854167,
            "unit": "ns",
            "range": "± 12968.422357501631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1746770.5850830078,
            "unit": "ns",
            "range": "± 32673.43402894174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 5158415.427853954,
            "unit": "ns",
            "range": "± 484402.3904990295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991116.7644042969,
            "unit": "ns",
            "range": "± 24905.1486233323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 866335.2309570312,
            "unit": "ns",
            "range": "± 19593.94773401366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7760147.285714285,
            "unit": "ns",
            "range": "± 16467.712332031715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19177664.466666665,
            "unit": "ns",
            "range": "± 87819.47488851911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48821723.538461536,
            "unit": "ns",
            "range": "± 131686.15799165287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103484395,
            "unit": "ns",
            "range": "± 1506253.270830023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 367316437.62,
            "unit": "ns",
            "range": "± 31803246.56947159"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63000,
            "unit": "ns",
            "range": "± 19037.96348116584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1691224.2234042552,
            "unit": "ns",
            "range": "± 182754.49104689542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3429619.09375,
            "unit": "ns",
            "range": "± 361002.0222733291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2696225.1052631577,
            "unit": "ns",
            "range": "± 264483.94946580665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6866534.515789473,
            "unit": "ns",
            "range": "± 620699.7515145557"
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
          "id": "a12c306d1b66ab35a22a4ee7ea336e2a4d48aff6",
          "message": "Merge pull request #2908 from colibrishin/benchmark/fix/0.47-maintenance\n\nci/bench: cherrypick of bench pr update to 0.47-maintenance",
          "timestamp": "2023-03-10T11:10:19+09:00",
          "tree_id": "970206c732fb48064b1f83e0afacb02eb4462694",
          "url": "https://github.com/planetarium/libplanet/commit/a12c306d1b66ab35a22a4ee7ea336e2a4d48aff6"
        },
        "date": 1678415259419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123580.06382978724,
            "unit": "ns",
            "range": "± 14859.963626642204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254098.39795918367,
            "unit": "ns",
            "range": "± 23708.38452919822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214142.87628865978,
            "unit": "ns",
            "range": "± 15649.640549824226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4566460.810526316,
            "unit": "ns",
            "range": "± 309127.63476683566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11949305.02631579,
            "unit": "ns",
            "range": "± 405105.46100053843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28044.77894736842,
            "unit": "ns",
            "range": "± 4705.509236418537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70623.77528089887,
            "unit": "ns",
            "range": "± 6036.349652790637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65327.9587628866,
            "unit": "ns",
            "range": "± 8154.506287320432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137991.40217391305,
            "unit": "ns",
            "range": "± 20807.77945393289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11131.05,
            "unit": "ns",
            "range": "± 4878.379838220838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29132.565656565657,
            "unit": "ns",
            "range": "± 8185.252811925543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7273936.596875,
            "unit": "ns",
            "range": "± 165705.7288019899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2339246.240104167,
            "unit": "ns",
            "range": "± 38117.811480690005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1641094.2528645834,
            "unit": "ns",
            "range": "± 18274.270437681713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3186943.3342633927,
            "unit": "ns",
            "range": "± 53716.5376960278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049655.7970145089,
            "unit": "ns",
            "range": "± 16683.01140276201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 988931.2271484375,
            "unit": "ns",
            "range": "± 7484.87143733494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148135.23863636365,
            "unit": "ns",
            "range": "± 15635.603976949766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6110648.439375,
            "unit": "ns",
            "range": "± 429245.7791302689"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7183886.784946237,
            "unit": "ns",
            "range": "± 552865.0756082168"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33263981.42105263,
            "unit": "ns",
            "range": "± 1142816.8642163677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8132894.854166667,
            "unit": "ns",
            "range": "± 643946.7308143296"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36178889.928571425,
            "unit": "ns",
            "range": "± 498478.0673233067"
          }
        ]
      }
    ]
  }
}