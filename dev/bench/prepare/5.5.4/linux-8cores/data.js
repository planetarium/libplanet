window.BENCHMARK_DATA = {
  "lastUpdate": 1758101826856,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "c94b6871675a86a3820088da335f7bb9023e3c87",
          "message": "prepare: 5.5.4",
          "timestamp": "2025-09-17T18:28:42+09:00",
          "tree_id": "cc2be3deeeaeef17707291ac3952bfe2382e503a",
          "url": "https://github.com/planetarium/libplanet/commit/c94b6871675a86a3820088da335f7bb9023e3c87"
        },
        "date": 1758101799514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008788.1521739131,
            "unit": "ns",
            "range": "± 68049.86552641675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1935962.125,
            "unit": "ns",
            "range": "± 75654.58971427382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1580458.5357142857,
            "unit": "ns",
            "range": "± 80416.59059831212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7922594.027777778,
            "unit": "ns",
            "range": "± 238888.03323954166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107482.42268041238,
            "unit": "ns",
            "range": "± 12008.3012483683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185856.51333333334,
            "unit": "ns",
            "range": "± 9137.569804507773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165826.76086956522,
            "unit": "ns",
            "range": "± 6357.326948524418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2951694.9285714286,
            "unit": "ns",
            "range": "± 49810.07548789593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2899090.966666667,
            "unit": "ns",
            "range": "± 40164.242958252355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11396.709677419354,
            "unit": "ns",
            "range": "± 835.7343891120314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60367.74747474748,
            "unit": "ns",
            "range": "± 6711.446571987408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50763.529411764706,
            "unit": "ns",
            "range": "± 1033.485190849817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56561.237113402065,
            "unit": "ns",
            "range": "± 10149.88793326187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2736.6020408163267,
            "unit": "ns",
            "range": "± 372.4280457674243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10802.5,
            "unit": "ns",
            "range": "± 749.5025134361184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3903101.034375,
            "unit": "ns",
            "range": "± 10897.649421886543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234441.2759486607,
            "unit": "ns",
            "range": "± 2693.1216776346846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773902.6051897322,
            "unit": "ns",
            "range": "± 1495.9982337462352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2052020.003627232,
            "unit": "ns",
            "range": "± 5045.1160544828645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629109.6101422991,
            "unit": "ns",
            "range": "± 1274.4161796403343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581308.486703726,
            "unit": "ns",
            "range": "± 664.7016894240013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11330345.066666666,
            "unit": "ns",
            "range": "± 87697.79321337133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27919696.384615384,
            "unit": "ns",
            "range": "± 206012.85056865524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69917748.5,
            "unit": "ns",
            "range": "± 547543.2532421877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139402912.13333333,
            "unit": "ns",
            "range": "± 776520.0443431549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287549765.85714287,
            "unit": "ns",
            "range": "± 1902662.1731413333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31281,
            "unit": "ns",
            "range": "± 308.5700892828078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2437549.0714285714,
            "unit": "ns",
            "range": "± 25038.67840412658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489002.6785714286,
            "unit": "ns",
            "range": "± 57434.8384487464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2975651.6666666665,
            "unit": "ns",
            "range": "± 54261.98709918741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2562018.5714285714,
            "unit": "ns",
            "range": "± 44768.29450105249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3224738.5,
            "unit": "ns",
            "range": "± 41517.851235249494"
          }
        ]
      }
    ]
  }
}