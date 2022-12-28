window.BENCHMARK_DATA = {
  "lastUpdate": 1672242629158,
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
        "date": 1672235627589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 180350.9301075269,
            "unit": "ns",
            "range": "± 30774.805146629224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144975.28494623656,
            "unit": "ns",
            "range": "± 17829.95944595931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298754.56593406596,
            "unit": "ns",
            "range": "± 44382.67903455687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282410.73076923075,
            "unit": "ns",
            "range": "± 44000.48481275252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4398849.82967033,
            "unit": "ns",
            "range": "± 622271.6675162072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12821951.833333334,
            "unit": "ns",
            "range": "± 2649302.430083264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35531.441860465115,
            "unit": "ns",
            "range": "± 4456.512183059359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80893.39247311828,
            "unit": "ns",
            "range": "± 13778.748985983711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72091.64814814815,
            "unit": "ns",
            "range": "± 3047.500498598609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161013.46315789473,
            "unit": "ns",
            "range": "± 34118.8836694144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10356.308510638299,
            "unit": "ns",
            "range": "± 1142.9284521825984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33745.686046511626,
            "unit": "ns",
            "range": "± 3402.7790286647555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 8128581.708125,
            "unit": "ns",
            "range": "± 2455166.570485953"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 10613165.395604396,
            "unit": "ns",
            "range": "± 3653120.456406641"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 41912106.584269665,
            "unit": "ns",
            "range": "± 10920183.009968301"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 10072925.085106382,
            "unit": "ns",
            "range": "± 2222295.773466064"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 41462711.8045977,
            "unit": "ns",
            "range": "± 7673838.89187207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7887521.347301137,
            "unit": "ns",
            "range": "± 489035.9609600104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2349963.527889785,
            "unit": "ns",
            "range": "± 141425.26902468994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465352.5513980263,
            "unit": "ns",
            "range": "± 30923.380379213195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3340701.988237847,
            "unit": "ns",
            "range": "± 197893.94530674492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008800.2906971807,
            "unit": "ns",
            "range": "± 59175.28836584513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901089.3865327381,
            "unit": "ns",
            "range": "± 18691.761589735343"
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
        "date": 1672242594432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 156507.8956043956,
            "unit": "ns",
            "range": "± 12939.120516118826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 133553.20833333334,
            "unit": "ns",
            "range": "± 20222.581194463448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284454.85164835164,
            "unit": "ns",
            "range": "± 39128.48776910746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245207.9,
            "unit": "ns",
            "range": "± 22794.401509108044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3714686.619402985,
            "unit": "ns",
            "range": "± 175825.65175346567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11482052.7,
            "unit": "ns",
            "range": "± 458883.40969033807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28278.159574468085,
            "unit": "ns",
            "range": "± 4204.774711219573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77954.59574468085,
            "unit": "ns",
            "range": "± 11356.744235971506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62685.04255319149,
            "unit": "ns",
            "range": "± 7055.68590611123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128953.55434782608,
            "unit": "ns",
            "range": "± 18066.15449899699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9942.938775510203,
            "unit": "ns",
            "range": "± 1618.0935267039947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34419.541666666664,
            "unit": "ns",
            "range": "± 6603.564069447517"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5600606.223845108,
            "unit": "ns",
            "range": "± 744322.1216383697"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6836033.237113402,
            "unit": "ns",
            "range": "± 732960.2266688795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29996330.659574468,
            "unit": "ns",
            "range": "± 2978893.7673997614"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7710408.14893617,
            "unit": "ns",
            "range": "± 566701.2709215322"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31730438.95,
            "unit": "ns",
            "range": "± 705168.4708928167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8041128.238867188,
            "unit": "ns",
            "range": "± 418914.4194293964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2206988.073486328,
            "unit": "ns",
            "range": "± 64983.33577760522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1445878.79296875,
            "unit": "ns",
            "range": "± 21154.501707881343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2911276.9326891447,
            "unit": "ns",
            "range": "± 297671.8519200179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846433.1372070312,
            "unit": "ns",
            "range": "± 25935.000098537064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796384.1218345906,
            "unit": "ns",
            "range": "± 22487.456185537394"
          }
        ]
      }
    ]
  }
}