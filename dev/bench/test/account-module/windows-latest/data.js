window.BENCHMARK_DATA = {
  "lastUpdate": 1693289536379,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "81ec0a4ca52f5a64a9bf48243f251743cb69a90a",
          "message": "test: Fix test from removing NullChainStates",
          "timestamp": "2023-08-17T18:16:20+09:00",
          "tree_id": "4341a7076278eab80dcfb26105a1ad35a391e9ba",
          "url": "https://github.com/planetarium/libplanet/commit/81ec0a4ca52f5a64a9bf48243f251743cb69a90a"
        },
        "date": 1693289470744,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408900,
            "unit": "ns",
            "range": "± 103661.50724886448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2604360.655737705,
            "unit": "ns",
            "range": "± 115821.42760688186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1914238.383838384,
            "unit": "ns",
            "range": "± 135711.52832316916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4668384.482758621,
            "unit": "ns",
            "range": "± 203374.23873996703"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50246.875,
            "unit": "ns",
            "range": "± 5919.529731054833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7160660,
            "unit": "ns",
            "range": "± 40600.85854123918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18433123.076923076,
            "unit": "ns",
            "range": "± 213417.791174362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47425614.28571428,
            "unit": "ns",
            "range": "± 566292.2972582851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93968107.14285715,
            "unit": "ns",
            "range": "± 1163525.8156960716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186630694.44444445,
            "unit": "ns",
            "range": "± 3855447.3818714065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4423884.765625,
            "unit": "ns",
            "range": "± 58897.84588442615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409669.8617788462,
            "unit": "ns",
            "range": "± 7326.327627983669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1026934.3424479166,
            "unit": "ns",
            "range": "± 8393.636629618339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550706.026785714,
            "unit": "ns",
            "range": "± 31189.40118009945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820941.5364583334,
            "unit": "ns",
            "range": "± 8359.020743849152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729488.9453125,
            "unit": "ns",
            "range": "± 5371.21442528803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3108635.294117647,
            "unit": "ns",
            "range": "± 99202.12877222533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3167773.3333333335,
            "unit": "ns",
            "range": "± 49532.86739510395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4047581.8181818184,
            "unit": "ns",
            "range": "± 126416.03056610705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3418230.6818181816,
            "unit": "ns",
            "range": "± 179682.07322548967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5901901.785714285,
            "unit": "ns",
            "range": "± 246472.64608771604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254920.83333333334,
            "unit": "ns",
            "range": "± 12576.598405959727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249192,
            "unit": "ns",
            "range": "± 8935.205306961392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239242.85714285713,
            "unit": "ns",
            "range": "± 21281.277769559674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3887953.3333333335,
            "unit": "ns",
            "range": "± 58550.5626015018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3479073.3333333335,
            "unit": "ns",
            "range": "± 40862.28555712933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22015.78947368421,
            "unit": "ns",
            "range": "± 2664.9145046153535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95231.81818181818,
            "unit": "ns",
            "range": "± 6841.878302140335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70870,
            "unit": "ns",
            "range": "± 8134.258942234741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80037.23404255319,
            "unit": "ns",
            "range": "± 10544.998142038854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5207.291666666667,
            "unit": "ns",
            "range": "± 999.077974056887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21570.70707070707,
            "unit": "ns",
            "range": "± 3120.3823851642564"
          }
        ]
      }
    ]
  }
}