window.BENCHMARK_DATA = {
  "lastUpdate": 1722585188819,
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
          "id": "cc643bea29081c37b4edfbd68fcba0731dce23df",
          "message": "chore: Update project targetframework to a previous version",
          "timestamp": "2024-08-02T16:44:00+09:00",
          "tree_id": "38afe68056870734931cb456e83a6f804bcb8004",
          "url": "https://github.com/planetarium/libplanet/commit/cc643bea29081c37b4edfbd68fcba0731dce23df"
        },
        "date": 1722585162743,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009421.006849315,
            "unit": "ns",
            "range": "± 46496.277221086115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957613.0454545454,
            "unit": "ns",
            "range": "± 72235.11963718124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1697094.4657534247,
            "unit": "ns",
            "range": "± 84409.68303888189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8202738.6034482755,
            "unit": "ns",
            "range": "± 233783.84109293672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206070.10975609755,
            "unit": "ns",
            "range": "± 6598.297586794827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193408,
            "unit": "ns",
            "range": "± 7800.675290115477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165338.2380952381,
            "unit": "ns",
            "range": "± 3393.3959230358296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3071679.2666666666,
            "unit": "ns",
            "range": "± 44688.229959619224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2822637.9285714286,
            "unit": "ns",
            "range": "± 39587.76377136732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13054.863636363636,
            "unit": "ns",
            "range": "± 624.2877698469028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60617.08860759494,
            "unit": "ns",
            "range": "± 3027.8637480348125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51076.42307692308,
            "unit": "ns",
            "range": "± 810.1727656842153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50659.26804123711,
            "unit": "ns",
            "range": "± 7133.886206449621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2534.5052631578947,
            "unit": "ns",
            "range": "± 206.18153918249826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11693.74025974026,
            "unit": "ns",
            "range": "± 614.0182879712049"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31968.19230769231,
            "unit": "ns",
            "range": "± 157.59409073914364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10406769.142857144,
            "unit": "ns",
            "range": "± 63453.99781532487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26303409.42857143,
            "unit": "ns",
            "range": "± 78423.3241065283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68769976.83333333,
            "unit": "ns",
            "range": "± 158507.29654258222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137612971.07142857,
            "unit": "ns",
            "range": "± 379888.6469940823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286838135.43333334,
            "unit": "ns",
            "range": "± 1066716.0443525773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754220.226262019,
            "unit": "ns",
            "range": "± 8208.300441834228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196214.4526742788,
            "unit": "ns",
            "range": "± 1523.3217458651172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747219.751953125,
            "unit": "ns",
            "range": "± 1140.7193507696722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945653.1917067308,
            "unit": "ns",
            "range": "± 3290.5009143379466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617711.7170222356,
            "unit": "ns",
            "range": "± 662.2916119520364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572660.2822265625,
            "unit": "ns",
            "range": "± 1146.7233068613687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2441761.5588235296,
            "unit": "ns",
            "range": "± 49980.28791867673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2488023.3333333335,
            "unit": "ns",
            "range": "± 77419.02117096401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3032023.3571428573,
            "unit": "ns",
            "range": "± 27888.286569556658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2533546.5714285714,
            "unit": "ns",
            "range": "± 39728.15686776685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3229088.5434782607,
            "unit": "ns",
            "range": "± 72068.95865796506"
          }
        ]
      }
    ]
  }
}