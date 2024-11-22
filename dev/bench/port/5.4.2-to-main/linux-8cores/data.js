window.BENCHMARK_DATA = {
  "lastUpdate": 1732240418927,
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
          "id": "34bcf8c202e85461878a7c18bcc81344f76f0717",
          "message": "Merge branch '5.3-maintenance' into port/5.4.2-to-main",
          "timestamp": "2024-11-22T10:44:54+09:00",
          "tree_id": "b35a52e65dc24a7774ef4ccd7d8d68f3323031b8",
          "url": "https://github.com/planetarium/libplanet/commit/34bcf8c202e85461878a7c18bcc81344f76f0717"
        },
        "date": 1732240391943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10572425.153846154,
            "unit": "ns",
            "range": "± 26169.739187485717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28002418.433333334,
            "unit": "ns",
            "range": "± 119568.92334039371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70663937.92857143,
            "unit": "ns",
            "range": "± 199723.7322975893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142003127.07142857,
            "unit": "ns",
            "range": "± 507134.96093332063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292351091.4,
            "unit": "ns",
            "range": "± 995653.2233130598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111192.28235294118,
            "unit": "ns",
            "range": "± 5997.763334324373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191783.90384615384,
            "unit": "ns",
            "range": "± 6798.997386465257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162857.8,
            "unit": "ns",
            "range": "± 4306.607597634129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2884965.066666667,
            "unit": "ns",
            "range": "± 24584.85117612838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2809627.933333333,
            "unit": "ns",
            "range": "± 43482.75321396596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12769.608108108108,
            "unit": "ns",
            "range": "± 650.5522747059907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59825.13483146067,
            "unit": "ns",
            "range": "± 3357.742982445104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60840.5,
            "unit": "ns",
            "range": "± 764.8438343276953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55483.49494949495,
            "unit": "ns",
            "range": "± 12565.791384949707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2395.0315789473684,
            "unit": "ns",
            "range": "± 269.8992504160394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12259.252688172042,
            "unit": "ns",
            "range": "± 860.6856803421072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3812382.3197115385,
            "unit": "ns",
            "range": "± 5291.446567098213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217326.958984375,
            "unit": "ns",
            "range": "± 1382.3982250998533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748728.8648158482,
            "unit": "ns",
            "range": "± 1130.5841067064714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955771.5588942308,
            "unit": "ns",
            "range": "± 1571.4374525471956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634290.1089242789,
            "unit": "ns",
            "range": "± 884.1556212575985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586099.3302873884,
            "unit": "ns",
            "range": "± 536.8140496809624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435493.230769231,
            "unit": "ns",
            "range": "± 65964.8539418122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2543897.2333333334,
            "unit": "ns",
            "range": "± 37160.73576172007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3040094.433333333,
            "unit": "ns",
            "range": "± 44193.653612686234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2594469.9655172415,
            "unit": "ns",
            "range": "± 73177.09503930602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3274103.5,
            "unit": "ns",
            "range": "± 61636.17951063049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997693.5,
            "unit": "ns",
            "range": "± 67505.29346851003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916918.7571428572,
            "unit": "ns",
            "range": "± 58606.8886732724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570932.9923076923,
            "unit": "ns",
            "range": "± 73056.76637556474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7591278.222222222,
            "unit": "ns",
            "range": "± 204930.2677395286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30942.619047619046,
            "unit": "ns",
            "range": "± 731.0280758076585"
          }
        ]
      }
    ]
  }
}