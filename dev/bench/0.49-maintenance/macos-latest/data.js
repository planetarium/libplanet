window.BENCHMARK_DATA = {
  "lastUpdate": 1678785783829,
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
        "date": 1678419419191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 158150.58163265305,
            "unit": "ns",
            "range": "± 34635.424521016044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94891.6404494382,
            "unit": "ns",
            "range": "± 12265.387300010314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205657.66315789474,
            "unit": "ns",
            "range": "± 26085.43999629341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201693.88,
            "unit": "ns",
            "range": "± 17584.21650677595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3490598.195652174,
            "unit": "ns",
            "range": "± 86809.46560371836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9731151.296703296,
            "unit": "ns",
            "range": "± 566738.2833631115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17446.595505617977,
            "unit": "ns",
            "range": "± 2183.3617309464294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61702.35353535353,
            "unit": "ns",
            "range": "± 10837.946580788404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53781.55789473684,
            "unit": "ns",
            "range": "± 8724.780674821584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124350.28421052631,
            "unit": "ns",
            "range": "± 20542.921528570452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7500.854166666667,
            "unit": "ns",
            "range": "± 1328.439701931053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20261.282828282827,
            "unit": "ns",
            "range": "± 4594.1583138883525"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5739788.805546875,
            "unit": "ns",
            "range": "± 685398.8589844783"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5930582.236842105,
            "unit": "ns",
            "range": "± 593883.5409035624"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25789713.88157895,
            "unit": "ns",
            "range": "± 1311407.1547893274"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6642894.010752688,
            "unit": "ns",
            "range": "± 627525.6688201565"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30021038.19148936,
            "unit": "ns",
            "range": "± 1895765.2527705932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7380696.90153556,
            "unit": "ns",
            "range": "± 322951.54209457815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198590.15265625,
            "unit": "ns",
            "range": "± 88491.24525563982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375764.467703683,
            "unit": "ns",
            "range": "± 35108.31139374491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3063224.987182617,
            "unit": "ns",
            "range": "± 237400.52026145541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885173.1524773849,
            "unit": "ns",
            "range": "± 51720.42479443814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753817.9465215774,
            "unit": "ns",
            "range": "± 16644.83358133431"
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
        "date": 1678785740850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134112.26373626373,
            "unit": "ns",
            "range": "± 12263.398977658106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 119977.97,
            "unit": "ns",
            "range": "± 22001.915242369796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253583.65625,
            "unit": "ns",
            "range": "± 43017.27973729141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226358.7619047619,
            "unit": "ns",
            "range": "± 12145.972277637295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3701580.8157894737,
            "unit": "ns",
            "range": "± 79568.58515216266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10352747.211111112,
            "unit": "ns",
            "range": "± 387282.07350495976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22728.70707070707,
            "unit": "ns",
            "range": "± 3189.626947838582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56457.68085106383,
            "unit": "ns",
            "range": "± 5399.185247600692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63198.692307692305,
            "unit": "ns",
            "range": "± 3707.7043142693133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124649.34210526316,
            "unit": "ns",
            "range": "± 16462.360684439864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8153.521276595745,
            "unit": "ns",
            "range": "± 716.2043729575477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22725.03092783505,
            "unit": "ns",
            "range": "± 2739.9497389459857"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5130044.245186238,
            "unit": "ns",
            "range": "± 377528.3655793127"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6186300.347222222,
            "unit": "ns",
            "range": "± 288510.74320447556"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28800095.425925925,
            "unit": "ns",
            "range": "± 728799.5287435637"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7299442.882978723,
            "unit": "ns",
            "range": "± 644993.33122167"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31861807.06140351,
            "unit": "ns",
            "range": "± 1381041.0594651182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6651284.3625,
            "unit": "ns",
            "range": "± 123620.35905120459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2054129.5574776786,
            "unit": "ns",
            "range": "± 40142.84404206374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308421.1428786058,
            "unit": "ns",
            "range": "± 9704.621162475598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3087991.4623842593,
            "unit": "ns",
            "range": "± 83655.83883562982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 863853.9199916294,
            "unit": "ns",
            "range": "± 6375.535210286817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722805.5743689904,
            "unit": "ns",
            "range": "± 5290.713819480338"
          }
        ]
      }
    ]
  }
}