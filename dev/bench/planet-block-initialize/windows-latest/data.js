window.BENCHMARK_DATA = {
  "lastUpdate": 1680156348495,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tki@tkis-MacBook-Pro.local",
            "name": "tki"
          },
          "committer": {
            "email": "tki@tkis-MacBook-Pro.local",
            "name": "tki"
          },
          "distinct": true,
          "id": "e5de587bc316b6ec9203f496c494a0fb255ae1b4",
          "message": "temp: genesis validator inited with pk",
          "timestamp": "2023-03-30T14:47:51+09:00",
          "tree_id": "c07a35a90aacf41977de0ba85bb91b0ee0a85f74",
          "url": "https://github.com/planetarium/libplanet/commit/e5de587bc316b6ec9203f496c494a0fb255ae1b4"
        },
        "date": 1680156300929,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1473802,
            "unit": "ns",
            "range": "± 168277.11991494472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2641821.568627451,
            "unit": "ns",
            "range": "± 106519.98556839085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2250380.64516129,
            "unit": "ns",
            "range": "± 127307.43792784913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5399668,
            "unit": "ns",
            "range": "± 216435.5618295889"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60922.68041237113,
            "unit": "ns",
            "range": "± 8950.273566054642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7138200,
            "unit": "ns",
            "range": "± 105388.28208107389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20059853.333333332,
            "unit": "ns",
            "range": "± 260803.6805904468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51084114.28571428,
            "unit": "ns",
            "range": "± 528702.2091253884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99920833.33333333,
            "unit": "ns",
            "range": "± 1360369.8749482313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197197644.44444445,
            "unit": "ns",
            "range": "± 4035392.6146509075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5010326.472355769,
            "unit": "ns",
            "range": "± 42549.654332979546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543194.8502604167,
            "unit": "ns",
            "range": "± 6415.119614380247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1200971.953125,
            "unit": "ns",
            "range": "± 5392.58837609218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689665.5078125,
            "unit": "ns",
            "range": "± 13614.012970637654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826438.2552083334,
            "unit": "ns",
            "range": "± 3067.5712478013866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767483.4209735577,
            "unit": "ns",
            "range": "± 2685.7849184728643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3161854.716981132,
            "unit": "ns",
            "range": "± 130093.44801990155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5280333.333333333,
            "unit": "ns",
            "range": "± 92664.29167905483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23488894.736842107,
            "unit": "ns",
            "range": "± 513896.96813626867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6191174.074074074,
            "unit": "ns",
            "range": "± 168083.84032653875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26959360.714285713,
            "unit": "ns",
            "range": "± 770101.241703677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192524,
            "unit": "ns",
            "range": "± 9675.14005764956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203594.89795918367,
            "unit": "ns",
            "range": "± 14175.68974993413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181153,
            "unit": "ns",
            "range": "± 18280.902741672937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11916492.857142856,
            "unit": "ns",
            "range": "± 200701.18800877055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9420173.333333334,
            "unit": "ns",
            "range": "± 161374.5840612839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31253.061224489797,
            "unit": "ns",
            "range": "± 4291.593414741199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65164.21052631579,
            "unit": "ns",
            "range": "± 4799.732168712894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52519.58762886598,
            "unit": "ns",
            "range": "± 4959.117007577595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119780.43478260869,
            "unit": "ns",
            "range": "± 17523.988200356944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8762.105263157895,
            "unit": "ns",
            "range": "± 1234.7089369622936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25992.85714285714,
            "unit": "ns",
            "range": "± 3487.7768892040644"
          }
        ]
      }
    ]
  }
}