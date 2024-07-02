window.BENCHMARK_DATA = {
  "lastUpdate": 1719880874723,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "ac1fe9171c1790ba109a40f078941f6a89768dd8",
          "message": "test cache size",
          "timestamp": "2024-07-02T09:25:39+09:00",
          "tree_id": "53f19cdc036f4a41a23afadbf5b0d9bef47f1155",
          "url": "https://github.com/planetarium/libplanet/commit/ac1fe9171c1790ba109a40f078941f6a89768dd8"
        },
        "date": 1719880583704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015795.8333333334,
            "unit": "ns",
            "range": "± 105478.81894301828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1743631.4814814816,
            "unit": "ns",
            "range": "± 72019.32084602224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1564176,
            "unit": "ns",
            "range": "± 125187.81132782258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6761120,
            "unit": "ns",
            "range": "± 148820.94106677326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32280.51948051948,
            "unit": "ns",
            "range": "± 1613.6782892900442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5035220,
            "unit": "ns",
            "range": "± 28620.751712200512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13312113.333333334,
            "unit": "ns",
            "range": "± 108044.21625735765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32542620,
            "unit": "ns",
            "range": "± 493301.296224876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68889566.66666667,
            "unit": "ns",
            "range": "± 723211.6373378905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131457646.15384616,
            "unit": "ns",
            "range": "± 1074515.5075780158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3375353.4319196427,
            "unit": "ns",
            "range": "± 4635.665915405474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067388.1380208333,
            "unit": "ns",
            "range": "± 2377.538159945557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739647.1604567308,
            "unit": "ns",
            "range": "± 697.4051011284696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936345.8286830357,
            "unit": "ns",
            "range": "± 1895.9393505274327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621475.8440290178,
            "unit": "ns",
            "range": "± 1795.1956633808898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551799.6744791666,
            "unit": "ns",
            "range": "± 978.2885601722126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134058.3333333335,
            "unit": "ns",
            "range": "± 49225.280235725564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2240685.714285714,
            "unit": "ns",
            "range": "± 34047.98891932605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764044.4444444445,
            "unit": "ns",
            "range": "± 57281.33072540479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2258700,
            "unit": "ns",
            "range": "± 18896.119531092445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2943871.4285714286,
            "unit": "ns",
            "range": "± 33988.80875934196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174439.72602739726,
            "unit": "ns",
            "range": "± 8619.289409452294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164734.66666666666,
            "unit": "ns",
            "range": "± 7197.531358574108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143836.11111111112,
            "unit": "ns",
            "range": "± 4220.301463692427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2882350,
            "unit": "ns",
            "range": "± 59843.17986596792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552278.5714285714,
            "unit": "ns",
            "range": "± 29697.582874224438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10460.989010989011,
            "unit": "ns",
            "range": "± 1006.2527349252603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55082.65306122449,
            "unit": "ns",
            "range": "± 5148.436365772934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44270,
            "unit": "ns",
            "range": "± 1768.6614332048184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56390.52631578947,
            "unit": "ns",
            "range": "± 10137.376320143938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2363.6363636363635,
            "unit": "ns",
            "range": "± 479.2542134537499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10111.578947368422,
            "unit": "ns",
            "range": "± 1541.7497077198357"
          }
        ]
      }
    ]
  }
}