window.BENCHMARK_DATA = {
  "lastUpdate": 1711159301546,
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
      },
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
          "id": "f7dd8105fd12ce3e1087ffad6082c4a982d00246",
          "message": "increase context timeout",
          "timestamp": "2024-03-23T10:50:31+09:00",
          "tree_id": "384d510b58e6353a80c50d262356495c857f2b4f",
          "url": "https://github.com/planetarium/libplanet/commit/f7dd8105fd12ce3e1087ffad6082c4a982d00246"
        },
        "date": 1711159273503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5736340.571428572,
            "unit": "ns",
            "range": "± 34479.49021679251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14681250.166666666,
            "unit": "ns",
            "range": "± 99224.94900278893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37761258,
            "unit": "ns",
            "range": "± 375615.02179758466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77076102.28571428,
            "unit": "ns",
            "range": "± 392153.19823653466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154762495.93333334,
            "unit": "ns",
            "range": "± 757039.4832006043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40155.875,
            "unit": "ns",
            "range": "± 5202.339449962063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981039.25,
            "unit": "ns",
            "range": "± 97357.20551724108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1904383.8105263158,
            "unit": "ns",
            "range": "± 109849.06707283511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1594942.0595238095,
            "unit": "ns",
            "range": "± 85536.68202341454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7701893.142857143,
            "unit": "ns",
            "range": "± 279502.8929032688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2410801.8214285714,
            "unit": "ns",
            "range": "± 64339.16320220153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2654440.066666667,
            "unit": "ns",
            "range": "± 47258.29961191498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3150271.0714285714,
            "unit": "ns",
            "range": "± 40899.29255258822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3227161.7384615387,
            "unit": "ns",
            "range": "± 131640.24210766595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9145764.647058824,
            "unit": "ns",
            "range": "± 221337.43372440414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203537.85064935064,
            "unit": "ns",
            "range": "± 10343.449493031852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192165.19607843139,
            "unit": "ns",
            "range": "± 7580.284464370998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165360.86363636365,
            "unit": "ns",
            "range": "± 3927.2350784581076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3306133.785714286,
            "unit": "ns",
            "range": "± 51426.59386883939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2896108.933333333,
            "unit": "ns",
            "range": "± 46234.169309948156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15699.214285714286,
            "unit": "ns",
            "range": "± 2843.894314339762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68762.32653061225,
            "unit": "ns",
            "range": "± 7905.876276967124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90869.5,
            "unit": "ns",
            "range": "± 2134.2274480476535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64661.916666666664,
            "unit": "ns",
            "range": "± 11739.950791313226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3251.683673469388,
            "unit": "ns",
            "range": "± 708.3278930414878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15932.505494505494,
            "unit": "ns",
            "range": "± 1506.4003110699684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3803363.361328125,
            "unit": "ns",
            "range": "± 25977.621142622367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220467.1715494792,
            "unit": "ns",
            "range": "± 2543.976181197242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762495.9138183594,
            "unit": "ns",
            "range": "± 1808.8525235800075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967926.0068359375,
            "unit": "ns",
            "range": "± 5398.1705392721005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614658.146859976,
            "unit": "ns",
            "range": "± 1252.9640972725165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566646.3165690104,
            "unit": "ns",
            "range": "± 1580.3056984020875"
          }
        ]
      }
    ]
  }
}