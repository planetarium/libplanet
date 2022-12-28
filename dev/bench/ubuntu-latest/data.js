window.BENCHMARK_DATA = {
  "lastUpdate": 1672242046606,
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
      }
    ]
  }
}