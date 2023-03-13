window.BENCHMARK_DATA = {
  "lastUpdate": 1678690079098,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7fd63eb9cf0485d8b189f13caf82cafe8ca51b83",
          "message": "Merge pull request #2913 from colibrishin/benchmark/fix/0.51-maintenance\n\nci/bench: cherrypick of bench pr update to 0.51-maintenance",
          "timestamp": "2023-03-10T12:29:01+09:00",
          "tree_id": "82119e497d3b4c94da39369664c909a5be52b864",
          "url": "https://github.com/planetarium/libplanet/commit/7fd63eb9cf0485d8b189f13caf82cafe8ca51b83"
        },
        "date": 1678419910778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1373179.797979798,
            "unit": "ns",
            "range": "± 114886.17968054915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2447381.4814814813,
            "unit": "ns",
            "range": "± 62909.58125043762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105314.4444444445,
            "unit": "ns",
            "range": "± 117053.21037321725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5219101.176470588,
            "unit": "ns",
            "range": "± 280003.2178786682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46510.126582278484,
            "unit": "ns",
            "range": "± 2304.54372461086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7120938.461538462,
            "unit": "ns",
            "range": "± 92036.99019471771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19243000,
            "unit": "ns",
            "range": "± 299048.34773948224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49797323.333333336,
            "unit": "ns",
            "range": "± 582827.133727938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96464343.75,
            "unit": "ns",
            "range": "± 1776200.415481973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 190834212.5,
            "unit": "ns",
            "range": "± 3635693.709665323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834291.953125,
            "unit": "ns",
            "range": "± 19645.8153674945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525076.5206473214,
            "unit": "ns",
            "range": "± 3665.844020513379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146393.5267857143,
            "unit": "ns",
            "range": "± 4062.2239115293005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636542.65625,
            "unit": "ns",
            "range": "± 9908.798721617999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812407.177734375,
            "unit": "ns",
            "range": "± 750.7284736072728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762339.4856770834,
            "unit": "ns",
            "range": "± 850.173600296574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3067640.7407407407,
            "unit": "ns",
            "range": "± 160264.57014713032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4749924.324324325,
            "unit": "ns",
            "range": "± 146656.57617828235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22205217.647058822,
            "unit": "ns",
            "range": "± 448452.47690710507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5978679.310344827,
            "unit": "ns",
            "range": "± 168917.61385638846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26258030.43478261,
            "unit": "ns",
            "range": "± 636955.1071912957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178895.2380952381,
            "unit": "ns",
            "range": "± 6248.666292076483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177153.57142857142,
            "unit": "ns",
            "range": "± 4444.762389421137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148693.75,
            "unit": "ns",
            "range": "± 5837.5310377779815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10849214.814814815,
            "unit": "ns",
            "range": "± 296613.2533784896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8706914.285714285,
            "unit": "ns",
            "range": "± 202653.14526479543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19965.625,
            "unit": "ns",
            "range": "± 1740.3767362874414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51937.096774193546,
            "unit": "ns",
            "range": "± 4226.57806408888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39944.262295081964,
            "unit": "ns",
            "range": "± 1818.5639563644656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97331.9587628866,
            "unit": "ns",
            "range": "± 16490.99846880964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5987.5,
            "unit": "ns",
            "range": "± 913.4376941273179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19892.55319148936,
            "unit": "ns",
            "range": "± 1357.2774267883758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d23d43a83cc8ab4879ec60a13e6436bb87c8c52",
          "message": "Merge pull request #2917 from OnedgeLee/fix/0.51-maintenance\n\nFix ActionExecutionState total count",
          "timestamp": "2023-03-13T13:14:46+09:00",
          "tree_id": "a307135d2d9e360060cf6e08395ba431cb14e229",
          "url": "https://github.com/planetarium/libplanet/commit/6d23d43a83cc8ab4879ec60a13e6436bb87c8c52"
        },
        "date": 1678681863934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1281256,
            "unit": "ns",
            "range": "± 113258.92238137311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2266347.8260869565,
            "unit": "ns",
            "range": "± 47230.58398158027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2042303.0303030303,
            "unit": "ns",
            "range": "± 134182.29486795075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4798372.340425532,
            "unit": "ns",
            "range": "± 184382.33516978842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40808.57142857143,
            "unit": "ns",
            "range": "± 1987.7700605614816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6944300,
            "unit": "ns",
            "range": "± 26769.919152447426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17545506.666666668,
            "unit": "ns",
            "range": "± 70709.39992741587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44743333.333333336,
            "unit": "ns",
            "range": "± 419207.61420747574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89034760,
            "unit": "ns",
            "range": "± 562996.5805529245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 177159176.66666666,
            "unit": "ns",
            "range": "± 847364.652038194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4835183.515625,
            "unit": "ns",
            "range": "± 13280.487566088248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508418.0208333333,
            "unit": "ns",
            "range": "± 3282.02700218671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121870.2994791667,
            "unit": "ns",
            "range": "± 2861.9293724206655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605192.9817708335,
            "unit": "ns",
            "range": "± 17926.21532628415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832779.4108072916,
            "unit": "ns",
            "range": "± 4031.9270914714893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719877.4693080357,
            "unit": "ns",
            "range": "± 673.0299075397629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2873856.896551724,
            "unit": "ns",
            "range": "± 68840.19242852287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4409453.333333333,
            "unit": "ns",
            "range": "± 27545.28392786443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20437253.846153848,
            "unit": "ns",
            "range": "± 140980.25048084225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5430763.333333333,
            "unit": "ns",
            "range": "± 161173.47365244507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23893693.333333332,
            "unit": "ns",
            "range": "± 441059.5432213962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167313.9534883721,
            "unit": "ns",
            "range": "± 5215.7536731269765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167732.5,
            "unit": "ns",
            "range": "± 5917.569992436474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145708.69565217392,
            "unit": "ns",
            "range": "± 3671.129754706217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 9937107.142857144,
            "unit": "ns",
            "range": "± 67637.85312843819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8159093.333333333,
            "unit": "ns",
            "range": "± 75240.59947610606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14974.193548387097,
            "unit": "ns",
            "range": "± 969.413003227979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44820,
            "unit": "ns",
            "range": "± 3791.440527899092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33119.69696969697,
            "unit": "ns",
            "range": "± 1050.1442902301712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77500,
            "unit": "ns",
            "range": "± 12543.910244039787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3684.536082474227,
            "unit": "ns",
            "range": "± 497.9834765886581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14055.31914893617,
            "unit": "ns",
            "range": "± 1299.4305635630742"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8af6e82f9f5359a8f8292ff460d3758e05fe6111",
          "message": "Merge pull request #2918 from OnedgeLee/0.51-maintenance\n\n🚀 Release 0.51.1",
          "timestamp": "2023-03-13T14:58:05+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/planetarium/libplanet/commit/8af6e82f9f5359a8f8292ff460d3758e05fe6111"
        },
        "date": 1678688497106,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570350,
            "unit": "ns",
            "range": "± 120581.81323985191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3117298.7804878047,
            "unit": "ns",
            "range": "± 163775.1878612516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2473937.634408602,
            "unit": "ns",
            "range": "± 164896.97568480545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6312066.326530612,
            "unit": "ns",
            "range": "± 558131.5879548158"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54951.086956521736,
            "unit": "ns",
            "range": "± 4092.4345790206908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8441065.263157895,
            "unit": "ns",
            "range": "± 507102.01767859934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22774517.24137931,
            "unit": "ns",
            "range": "± 646919.7002879798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59923641.176470585,
            "unit": "ns",
            "range": "± 2411964.667085856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114803586.66666667,
            "unit": "ns",
            "range": "± 1879338.4504229394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231871180.76923078,
            "unit": "ns",
            "range": "± 6307261.003447961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5985398.871527778,
            "unit": "ns",
            "range": "± 198563.4614075307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1899107.4622844828,
            "unit": "ns",
            "range": "± 54285.79390217978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1433172.6339285714,
            "unit": "ns",
            "range": "± 46247.399360686606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3212211.9384765625,
            "unit": "ns",
            "range": "± 60160.999604751974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025680.8126698369,
            "unit": "ns",
            "range": "± 38862.10711294932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941219.323417468,
            "unit": "ns",
            "range": "± 32818.01984335241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3812743.4782608696,
            "unit": "ns",
            "range": "± 93111.40358871662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5737617.105263158,
            "unit": "ns",
            "range": "± 291909.6222637675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27326968.75,
            "unit": "ns",
            "range": "± 1836257.8364599363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7235347.191011236,
            "unit": "ns",
            "range": "± 400439.04799206665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33886528,
            "unit": "ns",
            "range": "± 2510092.910272044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202551.08695652173,
            "unit": "ns",
            "range": "± 12319.523454509172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209395.65217391305,
            "unit": "ns",
            "range": "± 10099.161799560816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192316.84210526315,
            "unit": "ns",
            "range": "± 15212.828101894227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13042875,
            "unit": "ns",
            "range": "± 290978.2608537512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10544095.833333334,
            "unit": "ns",
            "range": "± 409989.7834525404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22850,
            "unit": "ns",
            "range": "± 1927.8240003548265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60903.092783505155,
            "unit": "ns",
            "range": "± 5522.010005579329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49031.6091954023,
            "unit": "ns",
            "range": "± 2693.382447460174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116467.52577319587,
            "unit": "ns",
            "range": "± 22624.613303828337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7029.166666666667,
            "unit": "ns",
            "range": "± 877.6663634969924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24521.27659574468,
            "unit": "ns",
            "range": "± 2388.0019245154226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aafb851c0bfe09ab016c62303d25c8b89d341d6",
          "message": "Merge pull request #2920 from OnedgeLee/0.51-maintenance\n\nFix typo 0.51.1",
          "timestamp": "2023-03-13T15:32:29+09:00",
          "tree_id": "c5804224cca4a1d8c02e7a4eb637cc263479fc46",
          "url": "https://github.com/planetarium/libplanet/commit/7aafb851c0bfe09ab016c62303d25c8b89d341d6"
        },
        "date": 1678690032642,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1442070.8333333333,
            "unit": "ns",
            "range": "± 36577.6538954148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2352371.4285714286,
            "unit": "ns",
            "range": "± 65489.94187485958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2089840,
            "unit": "ns",
            "range": "± 108783.3028885489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4811810.714285715,
            "unit": "ns",
            "range": "± 136516.08055948117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41427.02702702703,
            "unit": "ns",
            "range": "± 1993.5716758262777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7054161.538461538,
            "unit": "ns",
            "range": "± 29538.718615334306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17803241.666666668,
            "unit": "ns",
            "range": "± 73266.9398139227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46284633.333333336,
            "unit": "ns",
            "range": "± 547095.0996812511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91707746.66666667,
            "unit": "ns",
            "range": "± 1039490.9041494897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 184391720,
            "unit": "ns",
            "range": "± 1774158.7113736067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4807843.359375,
            "unit": "ns",
            "range": "± 7986.105151047426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525715.5924479167,
            "unit": "ns",
            "range": "± 4829.383841139305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148201.5234375,
            "unit": "ns",
            "range": "± 1296.6317089055556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545022.2916666665,
            "unit": "ns",
            "range": "± 7417.772144075789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814306.5559895834,
            "unit": "ns",
            "range": "± 1005.8612406705855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719291.3736979166,
            "unit": "ns",
            "range": "± 1049.3743308270832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2982733.3333333335,
            "unit": "ns",
            "range": "± 49346.66969030239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4585369.696969697,
            "unit": "ns",
            "range": "± 143887.2594360957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21145626.666666668,
            "unit": "ns",
            "range": "± 280851.06237665407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5767856.25,
            "unit": "ns",
            "range": "± 179505.20153753835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24273466.666666668,
            "unit": "ns",
            "range": "± 344901.8466310724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173038.46153846153,
            "unit": "ns",
            "range": "± 2301.2816941646747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178042.85714285713,
            "unit": "ns",
            "range": "± 4246.081293287536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146851.06382978722,
            "unit": "ns",
            "range": "± 5542.59679919493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10324078.57142857,
            "unit": "ns",
            "range": "± 90014.34226381268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8353035.714285715,
            "unit": "ns",
            "range": "± 78494.67014873201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16544.68085106383,
            "unit": "ns",
            "range": "± 1605.1407348793932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47106.45161290323,
            "unit": "ns",
            "range": "± 4601.743678301238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33567.441860465115,
            "unit": "ns",
            "range": "± 1246.2746258220475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82251.57894736843,
            "unit": "ns",
            "range": "± 13326.92733383259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4344.736842105263,
            "unit": "ns",
            "range": "± 542.7213581243969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17332.63157894737,
            "unit": "ns",
            "range": "± 1560.171983513708"
          }
        ]
      }
    ]
  }
}