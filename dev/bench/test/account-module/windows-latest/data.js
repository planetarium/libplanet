window.BENCHMARK_DATA = {
  "lastUpdate": 1693485261539,
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
      },
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
          "id": "d567343c8a1725c2c1ad698d3904e3fafc0fb907",
          "message": "feat: Add IBlockChainState.GetStateRoot()",
          "timestamp": "2023-08-31T21:14:49+09:00",
          "tree_id": "2d064f4b20f84eb98e3ddb0da916be3aff253d67",
          "url": "https://github.com/planetarium/libplanet/commit/d567343c8a1725c2c1ad698d3904e3fafc0fb907"
        },
        "date": 1693485193638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1594093.3333333333,
            "unit": "ns",
            "range": "± 143875.34851430377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982189.855072464,
            "unit": "ns",
            "range": "± 137208.24999304948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145228.723404255,
            "unit": "ns",
            "range": "± 137859.3178993938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5446436.666666667,
            "unit": "ns",
            "range": "± 205002.0305886128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56631.868131868134,
            "unit": "ns",
            "range": "± 4179.576776045875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8695166.666666666,
            "unit": "ns",
            "range": "± 51670.289218067934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23917121.42857143,
            "unit": "ns",
            "range": "± 390371.32456669514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59770371.428571425,
            "unit": "ns",
            "range": "± 1011841.9125752581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121346385,
            "unit": "ns",
            "range": "± 2761277.4380281237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239226513.33333334,
            "unit": "ns",
            "range": "± 3861519.0091958568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5368868.958333333,
            "unit": "ns",
            "range": "± 59277.93186521817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1732755.5208333333,
            "unit": "ns",
            "range": "± 27428.706782030687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288162.2488839286,
            "unit": "ns",
            "range": "± 9432.75634833793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201085.714285714,
            "unit": "ns",
            "range": "± 23385.146725880117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1007786.8582589285,
            "unit": "ns",
            "range": "± 7643.849490391939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932774.2745535715,
            "unit": "ns",
            "range": "± 5791.278938433623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3886094.5945945946,
            "unit": "ns",
            "range": "± 130294.87699050171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4216897.297297297,
            "unit": "ns",
            "range": "± 133022.63275783494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4874862.162162162,
            "unit": "ns",
            "range": "± 164339.7435385193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4360524,
            "unit": "ns",
            "range": "± 172881.32482564272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6913960.714285715,
            "unit": "ns",
            "range": "± 189276.1481310383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294160,
            "unit": "ns",
            "range": "± 12437.318396217446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280068.5714285714,
            "unit": "ns",
            "range": "± 9065.375999747981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252186.53846153847,
            "unit": "ns",
            "range": "± 10072.288305264801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4723613.513513514,
            "unit": "ns",
            "range": "± 153873.82306105032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4343321.428571428,
            "unit": "ns",
            "range": "± 58221.80636379926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21957.608695652172,
            "unit": "ns",
            "range": "± 1702.8246536981535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91636.66666666667,
            "unit": "ns",
            "range": "± 5282.262028225357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78609.30232558139,
            "unit": "ns",
            "range": "± 2312.4728007140066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89131.52173913043,
            "unit": "ns",
            "range": "± 14439.558981940161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5750,
            "unit": "ns",
            "range": "± 792.5230491948828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19821.739130434784,
            "unit": "ns",
            "range": "± 1898.3987519246648"
          }
        ]
      }
    ]
  }
}