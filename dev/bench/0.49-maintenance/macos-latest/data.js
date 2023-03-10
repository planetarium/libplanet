window.BENCHMARK_DATA = {
  "lastUpdate": 1678419465663,
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
      }
    ]
  }
}