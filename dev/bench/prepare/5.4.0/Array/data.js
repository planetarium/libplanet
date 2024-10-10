window.BENCHMARK_DATA = {
  "lastUpdate": 1728553021405,
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
          "id": "a64bb707c40772c1579619b23fff87b8f759671e",
          "message": "Prepare 5.4.0",
          "timestamp": "2024-10-10T17:57:56+09:00",
          "tree_id": "0033fe6e460c7fbf5e142fde880619412807c1d6",
          "url": "https://github.com/planetarium/libplanet/commit/a64bb707c40772c1579619b23fff87b8f759671e"
        },
        "date": 1728553008777,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10779284.038461538,
            "unit": "ns",
            "range": "± 292700.3254550266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26692597.85714286,
            "unit": "ns",
            "range": "± 438021.9894748624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66868496.86666667,
            "unit": "ns",
            "range": "± 104901.51752740462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135260902.14285713,
            "unit": "ns",
            "range": "± 123123.96132032464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271771157.64285713,
            "unit": "ns",
            "range": "± 274348.841131942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13346.71052631579,
            "unit": "ns",
            "range": "± 453.73286032075157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110586.07462686567,
            "unit": "ns",
            "range": "± 5071.682418581876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105977.51612903226,
            "unit": "ns",
            "range": "± 2788.4727465163646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91756.10344827586,
            "unit": "ns",
            "range": "± 2684.7837681596257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2978378.14,
            "unit": "ns",
            "range": "± 223187.4955837353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2694688.67,
            "unit": "ns",
            "range": "± 166413.1225013447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5178.5888888888885,
            "unit": "ns",
            "range": "± 539.8790104667635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27230.855555555554,
            "unit": "ns",
            "range": "± 2290.1884057774705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23796.736842105263,
            "unit": "ns",
            "range": "± 1735.0272375722468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28809.462365591397,
            "unit": "ns",
            "range": "± 4493.095380593621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1264.778947368421,
            "unit": "ns",
            "range": "± 265.6955215850834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5096.155555555555,
            "unit": "ns",
            "range": "± 654.3052394082625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680240.5813953489,
            "unit": "ns",
            "range": "± 34185.61033481609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280874.380952381,
            "unit": "ns",
            "range": "± 45653.07065993047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1058997.642857143,
            "unit": "ns",
            "range": "± 56748.134490147575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8870941.97,
            "unit": "ns",
            "range": "± 1281481.3101880897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121089.8360655736,
            "unit": "ns",
            "range": "± 74832.83261781563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277644.075,
            "unit": "ns",
            "range": "± 79976.15412249454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2532009.4615384615,
            "unit": "ns",
            "range": "± 40360.24884424316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2279799.6,
            "unit": "ns",
            "range": "± 96156.01906192373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2775639.8,
            "unit": "ns",
            "range": "± 57553.20039535046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3047606.7466145833,
            "unit": "ns",
            "range": "± 48871.57412180115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924614.5023018973,
            "unit": "ns",
            "range": "± 6475.793105613068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614498.1069661458,
            "unit": "ns",
            "range": "± 8285.655869645807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619201.6826171875,
            "unit": "ns",
            "range": "± 2205.2026819381986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472123.85423177085,
            "unit": "ns",
            "range": "± 501.65512798618704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421181.4746791295,
            "unit": "ns",
            "range": "± 1022.5650936356236"
          }
        ]
      }
    ]
  }
}