window.BENCHMARK_DATA = {
  "lastUpdate": 1723119849066,
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
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "adc55a38752c6ea162d1cf133286314e43c44f73",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-08-08T21:11:23+09:00",
          "tree_id": "9bbfc5a58234aa086670bb18a2080a94277a9e87",
          "url": "https://github.com/planetarium/libplanet/commit/adc55a38752c6ea162d1cf133286314e43c44f73"
        },
        "date": 1723119835968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10712888.153846154,
            "unit": "ns",
            "range": "± 98464.22466886653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26347461.57142857,
            "unit": "ns",
            "range": "± 123851.98241307384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67100877.46666667,
            "unit": "ns",
            "range": "± 87146.59110935408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136346801.6153846,
            "unit": "ns",
            "range": "± 207324.32955015937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274145663.4285714,
            "unit": "ns",
            "range": "± 240266.50222055966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13640.09677419355,
            "unit": "ns",
            "range": "± 389.65492039655726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109393.44897959183,
            "unit": "ns",
            "range": "± 4160.971731765432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106103.25,
            "unit": "ns",
            "range": "± 3508.3399197992694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93006.14705882352,
            "unit": "ns",
            "range": "± 2970.2571859092664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070253.25,
            "unit": "ns",
            "range": "± 130557.9684830041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2699380.91,
            "unit": "ns",
            "range": "± 180926.14494122984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5031.829787234043,
            "unit": "ns",
            "range": "± 355.77000055756304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26706.835164835164,
            "unit": "ns",
            "range": "± 1813.8673188260632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22967.728260869564,
            "unit": "ns",
            "range": "± 1438.7197078909658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29080.505376344085,
            "unit": "ns",
            "range": "± 4827.843349246336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1080.5376344086021,
            "unit": "ns",
            "range": "± 148.83223405681696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4851.689655172414,
            "unit": "ns",
            "range": "± 394.7180126912161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675464.0465116279,
            "unit": "ns",
            "range": "± 36658.43084569223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1261192.2972972973,
            "unit": "ns",
            "range": "± 42480.88376151277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1101105.3936170214,
            "unit": "ns",
            "range": "± 62315.02622397757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9345751.17,
            "unit": "ns",
            "range": "± 1346197.6589920896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175099.4736842103,
            "unit": "ns",
            "range": "± 69833.95104130819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2254854.4285714286,
            "unit": "ns",
            "range": "± 67560.93825076766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2554820.923076923,
            "unit": "ns",
            "range": "± 28917.374472974832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2294955.0789473685,
            "unit": "ns",
            "range": "± 44679.559960426086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3227651.7525773197,
            "unit": "ns",
            "range": "± 283801.9480093773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036849.1330915177,
            "unit": "ns",
            "range": "± 46286.739431972346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918208.7573567708,
            "unit": "ns",
            "range": "± 4642.346402320008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616197.3227864583,
            "unit": "ns",
            "range": "± 5482.912996642736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644034.5591145833,
            "unit": "ns",
            "range": "± 19711.421891367394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463883.1365885417,
            "unit": "ns",
            "range": "± 592.0625922340084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427999.49954427086,
            "unit": "ns",
            "range": "± 949.5975716816979"
          }
        ]
      }
    ]
  }
}