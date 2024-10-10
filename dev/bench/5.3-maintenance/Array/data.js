window.BENCHMARK_DATA = {
  "lastUpdate": 1728552514144,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "7063430cde5bbc731a6c900aa461119b1c8f0ade",
          "message": "Prepare 5.3.1",
          "timestamp": "2024-10-10T17:56:15+09:00",
          "tree_id": "a924950a4d2ac793b68a6139ae388d38e427220c",
          "url": "https://github.com/planetarium/libplanet/commit/7063430cde5bbc731a6c900aa461119b1c8f0ade"
        },
        "date": 1728552501365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10859503.833333334,
            "unit": "ns",
            "range": "± 88721.71473139361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26141446.64285714,
            "unit": "ns",
            "range": "± 163827.79091219636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67739860.93333334,
            "unit": "ns",
            "range": "± 119311.93260253721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135147509.2857143,
            "unit": "ns",
            "range": "± 163947.23444470152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272308500.3333333,
            "unit": "ns",
            "range": "± 213991.48213577725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14117.441176470587,
            "unit": "ns",
            "range": "± 280.66182288214657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111665.80882352941,
            "unit": "ns",
            "range": "± 4994.787331337953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105830.34782608696,
            "unit": "ns",
            "range": "± 3585.5708872423106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93828.38095238095,
            "unit": "ns",
            "range": "± 4206.293657889987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3072110.2525773197,
            "unit": "ns",
            "range": "± 176940.94446906526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2693569.35,
            "unit": "ns",
            "range": "± 174788.56620981928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5024.868131868132,
            "unit": "ns",
            "range": "± 679.3738818253696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27493.444444444445,
            "unit": "ns",
            "range": "± 1935.972422736957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23717.073684210525,
            "unit": "ns",
            "range": "± 1877.380311747838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30910.4375,
            "unit": "ns",
            "range": "± 5032.401891348964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1403.2061855670104,
            "unit": "ns",
            "range": "± 298.9241451349716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4951.833333333333,
            "unit": "ns",
            "range": "± 578.4149641792792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 704380.53125,
            "unit": "ns",
            "range": "± 64961.15325459851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1258978.4347826086,
            "unit": "ns",
            "range": "± 45727.28466737564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1038284.3684210526,
            "unit": "ns",
            "range": "± 49032.845472218476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8816352.86,
            "unit": "ns",
            "range": "± 1222875.2536546066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166897.511627907,
            "unit": "ns",
            "range": "± 79860.69993711733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282814.875,
            "unit": "ns",
            "range": "± 70244.51431859173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2533280.1428571427,
            "unit": "ns",
            "range": "± 42279.235654355005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2252840.5757575757,
            "unit": "ns",
            "range": "± 70376.55667285019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2806182.125,
            "unit": "ns",
            "range": "± 54333.760197351825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3048144.5200520833,
            "unit": "ns",
            "range": "± 48019.48063141411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917702.5277994792,
            "unit": "ns",
            "range": "± 5293.636590088036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612617.9358723959,
            "unit": "ns",
            "range": "± 5332.637571619921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621387.7470703125,
            "unit": "ns",
            "range": "± 1097.1939959244485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464169.16744559153,
            "unit": "ns",
            "range": "± 262.7003189047743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421844.20296223956,
            "unit": "ns",
            "range": "± 2563.380804096686"
          }
        ]
      }
    ]
  }
}