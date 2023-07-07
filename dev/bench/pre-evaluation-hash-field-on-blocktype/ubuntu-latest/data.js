window.BENCHMARK_DATA = {
  "lastUpdate": 1688710438118,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "16b4aa08a73c34161b9fad4125941d8604d168ad",
          "message": "Add preEvaluationHash field to BlockType",
          "timestamp": "2023-07-07T15:00:48+09:00",
          "tree_id": "0bda7672ae47c4fb07e8a126d8ecec4ceba72fe1",
          "url": "https://github.com/planetarium/libplanet/commit/16b4aa08a73c34161b9fad4125941d8604d168ad"
        },
        "date": 1688710412620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271498.79591836734,
            "unit": "ns",
            "range": "± 10829.20335054629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263913.0606060606,
            "unit": "ns",
            "range": "± 6613.926599132479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229373.6923076923,
            "unit": "ns",
            "range": "± 2650.611733940406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132938.25,
            "unit": "ns",
            "range": "± 15390.23466136297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3759890.9285714286,
            "unit": "ns",
            "range": "± 31074.977552969885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16173,
            "unit": "ns",
            "range": "± 1150.9914444786973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83691.01162790698,
            "unit": "ns",
            "range": "± 4523.812524055829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70561.38888888889,
            "unit": "ns",
            "range": "± 1454.4772717326757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96814.57142857143,
            "unit": "ns",
            "range": "± 12552.115860575843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5508.442105263158,
            "unit": "ns",
            "range": "± 603.4777881260238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20248.956521739132,
            "unit": "ns",
            "range": "± 1437.2681038986677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323396.2625,
            "unit": "ns",
            "range": "± 65401.48323246322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2550142.6666666665,
            "unit": "ns",
            "range": "± 65943.89525931126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2088085.1547619049,
            "unit": "ns",
            "range": "± 111807.17065366679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5106229.066666666,
            "unit": "ns",
            "range": "± 152529.9239129554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6100372.063616072,
            "unit": "ns",
            "range": "± 22223.61672338473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914387.6450892857,
            "unit": "ns",
            "range": "± 4768.909937490668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387833.5958333334,
            "unit": "ns",
            "range": "± 1940.4721602315487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572511.6709735575,
            "unit": "ns",
            "range": "± 2855.2283999407705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819171.6998465402,
            "unit": "ns",
            "range": "± 407.6041748089162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728353.2859375,
            "unit": "ns",
            "range": "± 487.10491968454505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3201860.9444444445,
            "unit": "ns",
            "range": "± 61899.94673709789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423430.06122449,
            "unit": "ns",
            "range": "± 136564.40400951976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4154594.2666666666,
            "unit": "ns",
            "range": "± 42519.84508348789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4116971.6666666665,
            "unit": "ns",
            "range": "± 49814.298437391684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6669092.94117647,
            "unit": "ns",
            "range": "± 90754.1457906129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7555739.333333333,
            "unit": "ns",
            "range": "± 13900.71255453509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19498353.733333334,
            "unit": "ns",
            "range": "± 140135.01453061344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49910271.2,
            "unit": "ns",
            "range": "± 440142.50376135483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99202062.6923077,
            "unit": "ns",
            "range": "± 531361.5498687286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204030978.85714287,
            "unit": "ns",
            "range": "± 2936370.3232800304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45240.11111111111,
            "unit": "ns",
            "range": "± 2677.65998984626"
          }
        ]
      }
    ]
  }
}