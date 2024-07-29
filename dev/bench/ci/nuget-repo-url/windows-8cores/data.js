window.BENCHMARK_DATA = {
  "lastUpdate": 1722216766435,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "4b2b797430752f80612f1efbee6968213f1606e1",
          "message": "WIP",
          "timestamp": "2024-07-29T10:14:55+09:00",
          "tree_id": "de80609a63b1284dac24b7b1e72bcfa6411bc926",
          "url": "https://github.com/planetarium/libplanet/commit/4b2b797430752f80612f1efbee6968213f1606e1"
        },
        "date": 1722216501119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061216.1616161617,
            "unit": "ns",
            "range": "± 109858.89531118555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1842990.1960784313,
            "unit": "ns",
            "range": "± 74372.19172486976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1656640.425531915,
            "unit": "ns",
            "range": "± 134219.39615865258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7323714.814814814,
            "unit": "ns",
            "range": "± 384161.1475380843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31263.529411764706,
            "unit": "ns",
            "range": "± 2082.229063083228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10146973.333333334,
            "unit": "ns",
            "range": "± 88375.49326325602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24612200,
            "unit": "ns",
            "range": "± 169599.78520875887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60644966.666666664,
            "unit": "ns",
            "range": "± 408351.1980542985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121968960,
            "unit": "ns",
            "range": "± 1443132.4985203939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243437386.66666666,
            "unit": "ns",
            "range": "± 2058930.110819232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329336.1778846155,
            "unit": "ns",
            "range": "± 10144.400001129481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073931.8359375,
            "unit": "ns",
            "range": "± 2688.8333826942835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741526.3392857143,
            "unit": "ns",
            "range": "± 1210.524936522669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961641.0416666667,
            "unit": "ns",
            "range": "± 3507.2250015928266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625029.9674479166,
            "unit": "ns",
            "range": "± 721.0547707740554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566778.1380208334,
            "unit": "ns",
            "range": "± 786.0959993621932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145712.1951219514,
            "unit": "ns",
            "range": "± 75619.773191679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2419378.2608695654,
            "unit": "ns",
            "range": "± 43647.86734894011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2739128.5714285714,
            "unit": "ns",
            "range": "± 28339.139245693634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2365443.75,
            "unit": "ns",
            "range": "± 44547.80157314163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3040820,
            "unit": "ns",
            "range": "± 48246.74970547609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182040,
            "unit": "ns",
            "range": "± 7299.734409482279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187194.44444444444,
            "unit": "ns",
            "range": "± 3591.570559653161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151146.15384615384,
            "unit": "ns",
            "range": "± 4139.297599277516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748420,
            "unit": "ns",
            "range": "± 46438.487732237176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532227.777777778,
            "unit": "ns",
            "range": "± 51614.96369391519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12572.47191011236,
            "unit": "ns",
            "range": "± 959.6108123264403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59391.48936170213,
            "unit": "ns",
            "range": "± 4846.696238121055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47393.82716049383,
            "unit": "ns",
            "range": "± 2378.830893475424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65272.04301075269,
            "unit": "ns",
            "range": "± 11142.206923610995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2911.2244897959185,
            "unit": "ns",
            "range": "± 683.966999424156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11991.666666666666,
            "unit": "ns",
            "range": "± 1731.7266507686643"
          }
        ]
      }
    ]
  }
}