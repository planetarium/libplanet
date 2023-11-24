window.BENCHMARK_DATA = {
  "lastUpdate": 1700827898851,
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
          "id": "64549cf36514ad8e12634c0b5de0965cc846df15",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T20:57:00+09:00",
          "tree_id": "cfa4c98881ec3188cd6ce0622c3b63905a3f30b3",
          "url": "https://github.com/planetarium/libplanet/commit/64549cf36514ad8e12634c0b5de0965cc846df15"
        },
        "date": 1700827845065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 936941,
            "unit": "ns",
            "range": "± 88506.05422994257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1684637.5,
            "unit": "ns",
            "range": "± 71828.53462492212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1349988.6597938144,
            "unit": "ns",
            "range": "± 141818.99766683872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5164358.888888889,
            "unit": "ns",
            "range": "± 285716.80640001857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33923.188405797104,
            "unit": "ns",
            "range": "± 1572.4788343788543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5043423.076923077,
            "unit": "ns",
            "range": "± 44737.38469941655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13366404.545454545,
            "unit": "ns",
            "range": "± 312590.1720986133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32581728.57142857,
            "unit": "ns",
            "range": "± 298608.52537824743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65542338.461538464,
            "unit": "ns",
            "range": "± 568760.0629709942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132032513.33333333,
            "unit": "ns",
            "range": "± 1039641.4408457415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3174899.6930803573,
            "unit": "ns",
            "range": "± 8651.551000889312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1021769.4401041666,
            "unit": "ns",
            "range": "± 3258.155832674332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 681937.7092633928,
            "unit": "ns",
            "range": "± 1967.991238534422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957039.9038461538,
            "unit": "ns",
            "range": "± 5950.065398930514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604613.7625558035,
            "unit": "ns",
            "range": "± 1238.453384407005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567546.0611979166,
            "unit": "ns",
            "range": "± 1714.770990365971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2087370.2127659575,
            "unit": "ns",
            "range": "± 70090.74836578281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258547.5,
            "unit": "ns",
            "range": "± 102508.03978966229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2818441.463414634,
            "unit": "ns",
            "range": "± 101446.01760446232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2700141.1764705884,
            "unit": "ns",
            "range": "± 86323.41624677146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5861427.2727272725,
            "unit": "ns",
            "range": "± 167127.22001653275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177930.26315789475,
            "unit": "ns",
            "range": "± 8985.841006633225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160691.46341463414,
            "unit": "ns",
            "range": "± 7946.848140164912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142567.64705882352,
            "unit": "ns",
            "range": "± 4550.17286306564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752940,
            "unit": "ns",
            "range": "± 48233.38796192648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552046.153846154,
            "unit": "ns",
            "range": "± 40469.651497235456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10519.354838709678,
            "unit": "ns",
            "range": "± 1397.3000412687293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55269.791666666664,
            "unit": "ns",
            "range": "± 6510.77034477919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42821.666666666664,
            "unit": "ns",
            "range": "± 1896.8387319804606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53691.48936170213,
            "unit": "ns",
            "range": "± 11251.281022162346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2377.319587628866,
            "unit": "ns",
            "range": "± 460.18681773437936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10153.333333333334,
            "unit": "ns",
            "range": "± 1469.556227443502"
          }
        ]
      }
    ]
  }
}