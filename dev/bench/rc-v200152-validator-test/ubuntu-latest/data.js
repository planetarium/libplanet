window.BENCHMARK_DATA = {
  "lastUpdate": 1711087267449,
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
          "id": "e1940cdbab6abe40cbabf296f61b5da7ce7faea1",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T14:49:36+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/e1940cdbab6abe40cbabf296f61b5da7ce7faea1"
        },
        "date": 1711087239685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5619666.266666667,
            "unit": "ns",
            "range": "± 27583.532259734424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14770427.92857143,
            "unit": "ns",
            "range": "± 72245.47304898368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36229727.666666664,
            "unit": "ns",
            "range": "± 175008.93899420908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75026412.15384616,
            "unit": "ns",
            "range": "± 776543.3068934239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151242399.73333332,
            "unit": "ns",
            "range": "± 1102647.4351470429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39877.11224489796,
            "unit": "ns",
            "range": "± 5219.37424238927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977206.1855670103,
            "unit": "ns",
            "range": "± 82909.88048142618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1880479.7297297297,
            "unit": "ns",
            "range": "± 94071.72582798044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1691097.5393258426,
            "unit": "ns",
            "range": "± 93366.55655473022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7770770.948275862,
            "unit": "ns",
            "range": "± 338045.60377529584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2370891.035714286,
            "unit": "ns",
            "range": "± 67524.4249737509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2483718.285714286,
            "unit": "ns",
            "range": "± 25561.340299602605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3180229.8846153845,
            "unit": "ns",
            "range": "± 84467.26740901564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3148186.8684210526,
            "unit": "ns",
            "range": "± 86702.81309603514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8804844.375,
            "unit": "ns",
            "range": "± 232578.8000336922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201292.28301886792,
            "unit": "ns",
            "range": "± 7362.631483421375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191373.4716981132,
            "unit": "ns",
            "range": "± 7095.673206538707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167441.42105263157,
            "unit": "ns",
            "range": "± 3608.4079486633173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3192426.066666667,
            "unit": "ns",
            "range": "± 43544.710547184666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2758472.1428571427,
            "unit": "ns",
            "range": "± 29046.676240034874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13462.291666666666,
            "unit": "ns",
            "range": "± 1887.786450437692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60284.06451612903,
            "unit": "ns",
            "range": "± 3917.6764209503945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56292.886597938144,
            "unit": "ns",
            "range": "± 5191.901953355438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58384.72448979592,
            "unit": "ns",
            "range": "± 9863.0053070146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3413.8333333333335,
            "unit": "ns",
            "range": "± 576.9530582817584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11638.2,
            "unit": "ns",
            "range": "± 667.2470414214769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753792.4091796875,
            "unit": "ns",
            "range": "± 4744.46092038644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211333.946875,
            "unit": "ns",
            "range": "± 2863.6969985784353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756552.8565755208,
            "unit": "ns",
            "range": "± 1488.0406827370184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959800.3263346355,
            "unit": "ns",
            "range": "± 4716.864732927669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617808.5900691106,
            "unit": "ns",
            "range": "± 1097.591745452152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571051.9173177084,
            "unit": "ns",
            "range": "± 1253.9706086539315"
          }
        ]
      }
    ]
  }
}