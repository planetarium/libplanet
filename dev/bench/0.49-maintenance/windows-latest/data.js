window.BENCHMARK_DATA = {
  "lastUpdate": 1678785535497,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "cedb884830acb875c5ff0009511f65e0face4775",
          "message": "Merge pull request #2912 from colibrishin/benchmark/fix/0.49-maintenance\n\nci/bench: cherrypick of bench pr update to 0.49-maintenance",
          "timestamp": "2023-03-10T12:16:38+09:00",
          "tree_id": "cfd9e36e7209a775f765f31706e0f3fb5c221461",
          "url": "https://github.com/planetarium/libplanet/commit/cedb884830acb875c5ff0009511f65e0face4775"
        },
        "date": 1678419189987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109038.77551020408,
            "unit": "ns",
            "range": "± 9760.847865963637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895012.319711538,
            "unit": "ns",
            "range": "± 13407.69868730437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523565.904017857,
            "unit": "ns",
            "range": "± 1752.9375388428427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1173733.125,
            "unit": "ns",
            "range": "± 5099.682854053062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637665.1822916665,
            "unit": "ns",
            "range": "± 8973.270250321511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820142.65625,
            "unit": "ns",
            "range": "± 1541.2640105313324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755607.3167067308,
            "unit": "ns",
            "range": "± 1746.5892230258157"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4613102.315848215,
            "unit": "ns",
            "range": "± 52046.209064698625"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5596833.333333333,
            "unit": "ns",
            "range": "± 81750.34003133012"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25134512.5,
            "unit": "ns",
            "range": "± 880824.0958264377"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6189243.75,
            "unit": "ns",
            "range": "± 119388.13435597358"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28249627.777777776,
            "unit": "ns",
            "range": "± 582570.2692334816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88938.29787234042,
            "unit": "ns",
            "range": "± 9280.678349129195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202309.47368421053,
            "unit": "ns",
            "range": "± 18826.170522136345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164501.0101010101,
            "unit": "ns",
            "range": "± 10491.84809841932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3513852.6315789474,
            "unit": "ns",
            "range": "± 73289.7549943681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9084078.94736842,
            "unit": "ns",
            "range": "± 168342.37460520538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24177.319587628866,
            "unit": "ns",
            "range": "± 2592.6380208614733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56670.967741935485,
            "unit": "ns",
            "range": "± 5280.492826250078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42617.20430107527,
            "unit": "ns",
            "range": "± 3197.6765904907597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101993.87755102041,
            "unit": "ns",
            "range": "± 17162.3347865335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6303.191489361702,
            "unit": "ns",
            "range": "± 1098.0385373948448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18637.23404255319,
            "unit": "ns",
            "range": "± 2656.539265541971"
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
          "id": "990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa",
          "message": "Merge pull request #2933 from greymistcube/port/0.48.1-to-0.49.3\n\n🔀🚀 Port 0.48.1 to 0.49.3 and release 0.49.3",
          "timestamp": "2023-03-14T18:04:37+09:00",
          "tree_id": "89618fad703410cfffc5ba8b99418aaeb113e922",
          "url": "https://github.com/planetarium/libplanet/commit/990d2d0db2314cdbeb7f709f92c8f8bf99f3beaa"
        },
        "date": 1678785488931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92190.90909090909,
            "unit": "ns",
            "range": "± 4997.531260961177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4779739.609375,
            "unit": "ns",
            "range": "± 9016.176148355224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1501896.514423077,
            "unit": "ns",
            "range": "± 2025.1593897474602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1128498.8932291667,
            "unit": "ns",
            "range": "± 957.5722000540533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575776.4322916665,
            "unit": "ns",
            "range": "± 17550.734918360227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808825.7887620192,
            "unit": "ns",
            "range": "± 2546.0972672948533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750214.7536057692,
            "unit": "ns",
            "range": "± 609.3751975315633"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3940168.1189903845,
            "unit": "ns",
            "range": "± 15287.864096853471"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5382200,
            "unit": "ns",
            "range": "± 55424.87407894281"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22579333.333333332,
            "unit": "ns",
            "range": "± 218022.26186026662"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5649063.636363637,
            "unit": "ns",
            "range": "± 210189.5734485166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25770000,
            "unit": "ns",
            "range": "± 330654.5003042127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83510.20408163265,
            "unit": "ns",
            "range": "± 7269.318233974028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181237.07865168538,
            "unit": "ns",
            "range": "± 11896.221535567045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147750,
            "unit": "ns",
            "range": "± 2394.621165511528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3328853.3333333335,
            "unit": "ns",
            "range": "± 24520.59969747497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8327740,
            "unit": "ns",
            "range": "± 50721.51980598148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15026.530612244898,
            "unit": "ns",
            "range": "± 1896.0377035491765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 41724.444444444445,
            "unit": "ns",
            "range": "± 2644.7026175131955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41180,
            "unit": "ns",
            "range": "± 3786.0213214941764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89922.34042553192,
            "unit": "ns",
            "range": "± 14926.819006282123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4314.432989690722,
            "unit": "ns",
            "range": "± 531.8970942770261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14797.894736842105,
            "unit": "ns",
            "range": "± 1243.2780065487161"
          }
        ]
      }
    ]
  }
}