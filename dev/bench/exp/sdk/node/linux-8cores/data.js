window.BENCHMARK_DATA = {
  "lastUpdate": 1721886918130,
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
          "id": "4396e8a013d6602c32a4d405300212b1f1a46cfa",
          "message": "exp: node",
          "timestamp": "2024-07-25T14:46:14+09:00",
          "tree_id": "c422c889c20f6ff72b431188637e9adee2d887b3",
          "url": "https://github.com/planetarium/libplanet/commit/4396e8a013d6602c32a4d405300212b1f1a46cfa"
        },
        "date": 1721886892023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199554.93220338982,
            "unit": "ns",
            "range": "± 8551.097948992012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192144.36,
            "unit": "ns",
            "range": "± 7730.520857283677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169104.75,
            "unit": "ns",
            "range": "± 4312.110340303982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3045174.2666666666,
            "unit": "ns",
            "range": "± 56821.27667327577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738743.5,
            "unit": "ns",
            "range": "± 17240.486410013094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13873.61855670103,
            "unit": "ns",
            "range": "± 1940.1360156533858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59628.07865168539,
            "unit": "ns",
            "range": "± 2975.87458582545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50182.166666666664,
            "unit": "ns",
            "range": "± 477.10220619015706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50819.043956043955,
            "unit": "ns",
            "range": "± 6054.160224198615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2944.7604166666665,
            "unit": "ns",
            "range": "± 384.0183039714224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12004.9,
            "unit": "ns",
            "range": "± 683.5959415005001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013328.4558823529,
            "unit": "ns",
            "range": "± 42746.95009298039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1946677.9186046512,
            "unit": "ns",
            "range": "± 66279.49992132257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702178.4204545454,
            "unit": "ns",
            "range": "± 93772.1620729344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8190256.875,
            "unit": "ns",
            "range": "± 207157.83380926948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786952.3337053573,
            "unit": "ns",
            "range": "± 6113.686678296807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218619.4204799107,
            "unit": "ns",
            "range": "± 1339.2357102128396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763204.6333984375,
            "unit": "ns",
            "range": "± 1659.843799539171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2037899.0286458333,
            "unit": "ns",
            "range": "± 2540.2018814360326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631574.5597956731,
            "unit": "ns",
            "range": "± 374.84517313287637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578307.6149739583,
            "unit": "ns",
            "range": "± 707.9132194121329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2391109.6,
            "unit": "ns",
            "range": "± 41145.822005920076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2516885.1333333333,
            "unit": "ns",
            "range": "± 33130.59498164944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059093.2,
            "unit": "ns",
            "range": "± 45890.70674392738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2595072.388888889,
            "unit": "ns",
            "range": "± 55257.021468278144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3210732.1333333333,
            "unit": "ns",
            "range": "± 51191.54390391705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43592.6,
            "unit": "ns",
            "range": "± 794.49272225382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10480108.7,
            "unit": "ns",
            "range": "± 81522.16007074395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27104600.666666668,
            "unit": "ns",
            "range": "± 136667.22094126858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70255254.14285715,
            "unit": "ns",
            "range": "± 307059.45377592643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140116888.06666666,
            "unit": "ns",
            "range": "± 1023964.9976399491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289499383.2,
            "unit": "ns",
            "range": "± 1264701.1188580825"
          }
        ]
      }
    ]
  }
}