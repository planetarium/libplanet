window.BENCHMARK_DATA = {
  "lastUpdate": 1700819205424,
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
          "id": "f8a55beec6ab7d0e4ff88aa55b90332b61ab00df",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T18:20:16+09:00",
          "tree_id": "e316a526d60d145eec27f10293b3b2bef907f65d",
          "url": "https://github.com/planetarium/libplanet/commit/f8a55beec6ab7d0e4ff88aa55b90332b61ab00df"
        },
        "date": 1700819154398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9434399.340909092,
            "unit": "ns",
            "range": "± 681075.7815537356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21336638.083333332,
            "unit": "ns",
            "range": "± 697429.2091489951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55268758.44680851,
            "unit": "ns",
            "range": "± 5107508.703326104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116978725.31182796,
            "unit": "ns",
            "range": "± 8292747.83860279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248764739.14736843,
            "unit": "ns",
            "range": "± 22008450.057366617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52931.791666666664,
            "unit": "ns",
            "range": "± 12294.399722010074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286078.6785714286,
            "unit": "ns",
            "range": "± 11223.77472576874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330657.09375,
            "unit": "ns",
            "range": "± 89218.6661260238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318760.4270833333,
            "unit": "ns",
            "range": "± 63094.445953122304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5415568.895833333,
            "unit": "ns",
            "range": "± 947980.5685969738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5097055.5,
            "unit": "ns",
            "range": "± 944736.5117914458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24873.097826086956,
            "unit": "ns",
            "range": "± 4293.963079067032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114089.86170212766,
            "unit": "ns",
            "range": "± 25802.36496781411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109547.40816326531,
            "unit": "ns",
            "range": "± 18580.21133350384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93591.48901098901,
            "unit": "ns",
            "range": "± 16565.254854996616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7746.118556701031,
            "unit": "ns",
            "range": "± 1620.4066519144903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18590.94623655914,
            "unit": "ns",
            "range": "± 3817.0096005323767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1730963.7604166667,
            "unit": "ns",
            "range": "± 446434.9771498113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3213911.8218390807,
            "unit": "ns",
            "range": "± 636556.2827838867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1951783.0344827587,
            "unit": "ns",
            "range": "± 230074.9819166872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9417789.590909092,
            "unit": "ns",
            "range": "± 2422221.3688910636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3320968.387640449,
            "unit": "ns",
            "range": "± 213115.49285206397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585313.3626373624,
            "unit": "ns",
            "range": "± 229353.1322028455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4148462.706896552,
            "unit": "ns",
            "range": "± 226872.8106367878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3942545.5,
            "unit": "ns",
            "range": "± 375670.7263115248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14515537.372340426,
            "unit": "ns",
            "range": "± 2302386.3457167437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4280046.496448863,
            "unit": "ns",
            "range": "± 98083.28810370491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492374.3830492424,
            "unit": "ns",
            "range": "± 124070.89940077388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 896684.7938802083,
            "unit": "ns",
            "range": "± 14114.831938126972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2025603.9669471155,
            "unit": "ns",
            "range": "± 31535.473795018836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645856.6473828125,
            "unit": "ns",
            "range": "± 16680.919299508932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578773.5757533482,
            "unit": "ns",
            "range": "± 9946.28609411045"
          }
        ]
      }
    ]
  }
}