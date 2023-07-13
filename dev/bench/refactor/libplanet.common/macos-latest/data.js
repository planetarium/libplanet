window.BENCHMARK_DATA = {
  "lastUpdate": 1689237096757,
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
          "id": "19fdfd85ed4dfb1e1066e213fd8c9a11648ab1da",
          "message": "refactor: introduce `Libplanet.Common`",
          "timestamp": "2023-07-13T17:16:03+09:00",
          "tree_id": "96fa10e3bf972068a8a90dc531478a06c21ef329",
          "url": "https://github.com/planetarium/libplanet/commit/19fdfd85ed4dfb1e1066e213fd8c9a11648ab1da"
        },
        "date": 1689237040403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8145638.5,
            "unit": "ns",
            "range": "± 78786.03712760737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20791798.785714287,
            "unit": "ns",
            "range": "± 174481.21262944862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47183430.833333336,
            "unit": "ns",
            "range": "± 2205723.3735614447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94663358.41176471,
            "unit": "ns",
            "range": "± 1865297.4109817934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208826861.6734694,
            "unit": "ns",
            "range": "± 8243600.737567199"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71943.71134020618,
            "unit": "ns",
            "range": "± 6335.868555557916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304427.3777777778,
            "unit": "ns",
            "range": "± 18998.60325370356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322889.4888888889,
            "unit": "ns",
            "range": "± 21922.5848679395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299588.2368421053,
            "unit": "ns",
            "range": "± 23050.12840930242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4145865.6756756757,
            "unit": "ns",
            "range": "± 137586.00897157102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3774256.7083333335,
            "unit": "ns",
            "range": "± 94194.532411009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18030.9,
            "unit": "ns",
            "range": "± 2770.6586601809963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92482.98969072165,
            "unit": "ns",
            "range": "± 14001.893056160035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104156.81333333334,
            "unit": "ns",
            "range": "± 5265.896593900953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103843.09278350516,
            "unit": "ns",
            "range": "± 19743.509895175295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5892.184210526316,
            "unit": "ns",
            "range": "± 1128.7034197938904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17628.106382978724,
            "unit": "ns",
            "range": "± 2038.583877381578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1519462.0104166667,
            "unit": "ns",
            "range": "± 125105.77517365012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2942224.0795454546,
            "unit": "ns",
            "range": "± 160553.7299633818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1955098.2368421052,
            "unit": "ns",
            "range": "± 206987.44861146854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5830330.196202531,
            "unit": "ns",
            "range": "± 302023.20856314723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3266436.5483870967,
            "unit": "ns",
            "range": "± 98280.45445215737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3392003.9264705884,
            "unit": "ns",
            "range": "± 140673.49509692847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4389803.26,
            "unit": "ns",
            "range": "± 114633.44129669724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3882630.065217391,
            "unit": "ns",
            "range": "± 147013.37575690213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7085143.666666667,
            "unit": "ns",
            "range": "± 245371.57754173197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6107715.943229167,
            "unit": "ns",
            "range": "± 59174.22456955701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876324.646875,
            "unit": "ns",
            "range": "± 6528.619759560513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242097.89375,
            "unit": "ns",
            "range": "± 11206.707049751582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2377792.511160714,
            "unit": "ns",
            "range": "± 12958.395323051653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 769100.8098707933,
            "unit": "ns",
            "range": "± 4030.2647474846526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778506.1180338542,
            "unit": "ns",
            "range": "± 3049.736813550701"
          }
        ]
      }
    ]
  }
}