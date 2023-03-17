window.BENCHMARK_DATA = {
  "lastUpdate": 1679044690055,
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
          "id": "19a15c713cf42e16718fa824231d6d1d2feef464",
          "message": "Merge pull request #2922 from OnedgeLee/0.51-maintenance\n\n🔧 Prepare 0.51.2",
          "timestamp": "2023-03-13T16:53:15+09:00",
          "tree_id": "abde72e5843a7fb700dfba7dc6d60d4b3693cbb4",
          "url": "https://github.com/planetarium/libplanet/commit/19a15c713cf42e16718fa824231d6d1d2feef464"
        },
        "date": 1678694828792,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1307718,
            "unit": "ns",
            "range": "± 102171.66123537367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2341703.4482758623,
            "unit": "ns",
            "range": "± 66696.44177036422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2069690.243902439,
            "unit": "ns",
            "range": "± 104972.45330574208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4800056.818181818,
            "unit": "ns",
            "range": "± 180096.04078357652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41142.857142857145,
            "unit": "ns",
            "range": "± 2003.1548616085379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6998146.666666667,
            "unit": "ns",
            "range": "± 35822.8950466571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17805778.57142857,
            "unit": "ns",
            "range": "± 81097.95054387985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45673653.333333336,
            "unit": "ns",
            "range": "± 338084.44183298916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91325973.33333333,
            "unit": "ns",
            "range": "± 738211.4151947324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 181035520,
            "unit": "ns",
            "range": "± 1135312.0088453973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4939697.154017857,
            "unit": "ns",
            "range": "± 11008.562902675403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502964.0904017857,
            "unit": "ns",
            "range": "± 1395.8729847077157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1124356.8033854167,
            "unit": "ns",
            "range": "± 1194.1273281475958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553184.921875,
            "unit": "ns",
            "range": "± 2485.1255139887044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809926.6015625,
            "unit": "ns",
            "range": "± 1200.7116777773126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746489.8177083334,
            "unit": "ns",
            "range": "± 975.0611446523645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2981802.7027027025,
            "unit": "ns",
            "range": "± 91961.83836089139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4560535,
            "unit": "ns",
            "range": "± 100633.74067954492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21148213.333333332,
            "unit": "ns",
            "range": "± 265362.0380500859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5662652.173913044,
            "unit": "ns",
            "range": "± 137657.6150175936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24406468.42105263,
            "unit": "ns",
            "range": "± 525303.5852962992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174477.77777777778,
            "unit": "ns",
            "range": "± 6404.29149047336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171616.66666666666,
            "unit": "ns",
            "range": "± 4667.241461199845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145189.6551724138,
            "unit": "ns",
            "range": "± 4197.647710970838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10126573.333333334,
            "unit": "ns",
            "range": "± 99947.61818548945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8125780,
            "unit": "ns",
            "range": "± 46361.93327658864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17268.0412371134,
            "unit": "ns",
            "range": "± 2203.3377328381716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48144.791666666664,
            "unit": "ns",
            "range": "± 4898.912227094084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33532.142857142855,
            "unit": "ns",
            "range": "± 941.6508637527761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81545.45454545454,
            "unit": "ns",
            "range": "± 13937.522931085905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4188.659793814433,
            "unit": "ns",
            "range": "± 480.6411275273791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16186.734693877552,
            "unit": "ns",
            "range": "± 2040.4485940521745"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f3b269526a4e41f476d5ff9e3ee65dd0a0c704f",
          "message": "Merge pull request #2937 from greymistcube/port/0.50.3-to-0.51.2\n\n🔀 Port 0.50.3 to 0.51.2",
          "timestamp": "2023-03-15T11:22:20+09:00",
          "tree_id": "4283086a07662080e9bc8e33e4880b769f6ad26d",
          "url": "https://github.com/planetarium/libplanet/commit/8f3b269526a4e41f476d5ff9e3ee65dd0a0c704f"
        },
        "date": 1678848009834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404105,
            "unit": "ns",
            "range": "± 118480.72969086918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2516234.210526316,
            "unit": "ns",
            "range": "± 85840.61684722005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2117501.4492753623,
            "unit": "ns",
            "range": "± 101881.63185596027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5027512.5,
            "unit": "ns",
            "range": "± 127072.59928533151"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47215.27777777778,
            "unit": "ns",
            "range": "± 2326.374179525123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7079223.333333333,
            "unit": "ns",
            "range": "± 71981.34149770705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19851000,
            "unit": "ns",
            "range": "± 274367.24086002476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50079566.666666664,
            "unit": "ns",
            "range": "± 463453.3011868104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 96880268.75,
            "unit": "ns",
            "range": "± 1754068.1675156376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194604300,
            "unit": "ns",
            "range": "± 4145755.6050453223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4792189.166666667,
            "unit": "ns",
            "range": "± 12763.50225190829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509496.1848958333,
            "unit": "ns",
            "range": "± 5899.029898089061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184732.5130208333,
            "unit": "ns",
            "range": "± 5251.357495943585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2599227.6785714286,
            "unit": "ns",
            "range": "± 5530.519664377362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827574.9283854166,
            "unit": "ns",
            "range": "± 1892.295778851573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761251.0672433035,
            "unit": "ns",
            "range": "± 1491.168831946408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3109120.6896551726,
            "unit": "ns",
            "range": "± 89257.98235336212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4791306.451612903,
            "unit": "ns",
            "range": "± 144821.31504140742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22504200,
            "unit": "ns",
            "range": "± 658493.8995270083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5950569.444444444,
            "unit": "ns",
            "range": "± 194798.39515244536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25647807.692307692,
            "unit": "ns",
            "range": "± 346383.6058994383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189875,
            "unit": "ns",
            "range": "± 4169.926794763214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181663.63636363635,
            "unit": "ns",
            "range": "± 6822.23079212163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159912.90322580645,
            "unit": "ns",
            "range": "± 4878.78003435858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11011242.857142856,
            "unit": "ns",
            "range": "± 182448.89996626755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8665873.684210526,
            "unit": "ns",
            "range": "± 183543.50329646425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20136.458333333332,
            "unit": "ns",
            "range": "± 1293.3123359210697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52258.241758241755,
            "unit": "ns",
            "range": "± 3680.6722192213733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40279.6875,
            "unit": "ns",
            "range": "± 1784.5171582518442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91403.79746835443,
            "unit": "ns",
            "range": "± 5309.339691379244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6191.666666666667,
            "unit": "ns",
            "range": "± 784.275282855609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19025.555555555555,
            "unit": "ns",
            "range": "± 1548.1457637663405"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48188be98ede9f04525c7a20ed2d8d6c434ebe08",
          "message": "Merge pull request #2938 from greymistcube/refactor/blockcommit-encoding\n\n♻️ Refactor `BlockCommit` encoding",
          "timestamp": "2023-03-15T16:30:44+09:00",
          "tree_id": "f1a76ecc24619636b246c8f654731b40b288d6fe",
          "url": "https://github.com/planetarium/libplanet/commit/48188be98ede9f04525c7a20ed2d8d6c434ebe08"
        },
        "date": 1678866375446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1308101,
            "unit": "ns",
            "range": "± 92308.5225335301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2458671.111111111,
            "unit": "ns",
            "range": "± 92985.74822916344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055310.989010989,
            "unit": "ns",
            "range": "± 114501.15035865549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4973530.952380952,
            "unit": "ns",
            "range": "± 179292.41068929314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47262.16216216216,
            "unit": "ns",
            "range": "± 2371.792149565485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7098442.857142857,
            "unit": "ns",
            "range": "± 105395.27587052551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19021147.36842105,
            "unit": "ns",
            "range": "± 415264.5801419473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46781478.571428575,
            "unit": "ns",
            "range": "± 687952.8843198174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92950046.66666667,
            "unit": "ns",
            "range": "± 1375275.4777896404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 184299133.33333334,
            "unit": "ns",
            "range": "± 2091512.0447497626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4740402.760416667,
            "unit": "ns",
            "range": "± 24246.74606288866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507069.6354166667,
            "unit": "ns",
            "range": "± 9602.528121936764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140896.9447544643,
            "unit": "ns",
            "range": "± 4266.567581770378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681083.8411458335,
            "unit": "ns",
            "range": "± 7363.580395274891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828888.7109375,
            "unit": "ns",
            "range": "± 2350.7188163753735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743494.74609375,
            "unit": "ns",
            "range": "± 1832.7051524367391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2999525.581395349,
            "unit": "ns",
            "range": "± 100451.526080572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4820121.839080459,
            "unit": "ns",
            "range": "± 263778.7839138889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21802677.272727273,
            "unit": "ns",
            "range": "± 524632.8511506818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5744723.9130434785,
            "unit": "ns",
            "range": "± 215618.94184446224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25088686.363636363,
            "unit": "ns",
            "range": "± 605056.8043348173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176469.69696969696,
            "unit": "ns",
            "range": "± 5469.0312698231155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173445.7627118644,
            "unit": "ns",
            "range": "± 7604.384443879056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155079.71014492755,
            "unit": "ns",
            "range": "± 7124.452088533359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10540995.454545455,
            "unit": "ns",
            "range": "± 232355.87130678652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8543450,
            "unit": "ns",
            "range": "± 208244.75926636127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20000,
            "unit": "ns",
            "range": "± 1789.3201688537092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50007.291666666664,
            "unit": "ns",
            "range": "± 4270.319716655434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38927.94117647059,
            "unit": "ns",
            "range": "± 1724.004847123713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94623.95833333333,
            "unit": "ns",
            "range": "± 16294.582533963256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5541.666666666667,
            "unit": "ns",
            "range": "± 743.344740688176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18479.381443298967,
            "unit": "ns",
            "range": "± 1633.626981107395"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11585f9a7385ff8790a5174038abea7a0bdb91c9",
          "message": "Merge pull request #2943 from greymistcube/refactor/vote-encoding\n\n♻️ Updated `Vote.Encoded` and `Proposal.Encoded`",
          "timestamp": "2023-03-15T17:57:15+09:00",
          "tree_id": "5f1e0dc67d0e5ebed283e11d5b73d4e0dc48ab97",
          "url": "https://github.com/planetarium/libplanet/commit/11585f9a7385ff8790a5174038abea7a0bdb91c9"
        },
        "date": 1678871458562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1460179.4871794872,
            "unit": "ns",
            "range": "± 49065.00617863043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2308100,
            "unit": "ns",
            "range": "± 65875.8147043584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2231080,
            "unit": "ns",
            "range": "± 56501.9468691124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5017800,
            "unit": "ns",
            "range": "± 248028.91744489974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42839.34426229508,
            "unit": "ns",
            "range": "± 1920.8746869177933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6822328.571428572,
            "unit": "ns",
            "range": "± 20722.615983191245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17678573.333333332,
            "unit": "ns",
            "range": "± 231099.9056273117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44292014.28571428,
            "unit": "ns",
            "range": "± 419750.8177609533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 88791040,
            "unit": "ns",
            "range": "± 990902.9473883187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 178113625,
            "unit": "ns",
            "range": "± 3256168.3505822197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894847.96875,
            "unit": "ns",
            "range": "± 14751.145737011346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1578669.4936899038,
            "unit": "ns",
            "range": "± 3717.438187558486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138813.8411458333,
            "unit": "ns",
            "range": "± 2848.7567990116554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586474.84375,
            "unit": "ns",
            "range": "± 17122.219758382547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810558.7332589285,
            "unit": "ns",
            "range": "± 882.0042453365318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763389.3815104166,
            "unit": "ns",
            "range": "± 1748.7677488228437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2937653.5714285714,
            "unit": "ns",
            "range": "± 82086.34334985487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4575934.782608695,
            "unit": "ns",
            "range": "± 98322.82454286469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20552640,
            "unit": "ns",
            "range": "± 111086.51583338097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5819206.666666667,
            "unit": "ns",
            "range": "± 108277.27282086397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23739046.666666668,
            "unit": "ns",
            "range": "± 417859.4446985846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176680,
            "unit": "ns",
            "range": "± 3118.882583783585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169352.27272727274,
            "unit": "ns",
            "range": "± 5557.667598299883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146864.89361702127,
            "unit": "ns",
            "range": "± 5612.059171160844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10288407.142857144,
            "unit": "ns",
            "range": "± 64895.353209084766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8201166.666666667,
            "unit": "ns",
            "range": "± 36585.08022730161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15927.173913043478,
            "unit": "ns",
            "range": "± 1172.121516116295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44520.22471910113,
            "unit": "ns",
            "range": "± 3599.311164378316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34441.17647058824,
            "unit": "ns",
            "range": "± 646.1992954280936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82361.22448979592,
            "unit": "ns",
            "range": "± 13227.436595861587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4000,
            "unit": "ns",
            "range": "± 442.1899081770377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15334.065934065935,
            "unit": "ns",
            "range": "± 1175.7947459030784"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3be11d61b46fb602d283f1817888249aeeb40115",
          "message": "Merge pull request #2944 from greymistcube/release/0.51.2\n\n🚀 Release 0.51.2",
          "timestamp": "2023-03-15T18:19:25+09:00",
          "tree_id": "8ea7ba6864a0af3ce8fc71e60b7c98bcdac8f132",
          "url": "https://github.com/planetarium/libplanet/commit/3be11d61b46fb602d283f1817888249aeeb40115"
        },
        "date": 1678872849418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321716.6666666667,
            "unit": "ns",
            "range": "± 73373.18226984906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2364841.935483871,
            "unit": "ns",
            "range": "± 63813.91579790701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2360805.4054054054,
            "unit": "ns",
            "range": "± 80182.00804678326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4855090.625,
            "unit": "ns",
            "range": "± 145205.15599877655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44346.3768115942,
            "unit": "ns",
            "range": "± 2146.5827637916345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7145435.714285715,
            "unit": "ns",
            "range": "± 36607.07386753081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18221180,
            "unit": "ns",
            "range": "± 125885.36281644729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46008153.333333336,
            "unit": "ns",
            "range": "± 225214.31972573107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 92691780,
            "unit": "ns",
            "range": "± 405266.98113712645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 185076480,
            "unit": "ns",
            "range": "± 783219.0171702567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4864869.661458333,
            "unit": "ns",
            "range": "± 6186.724053458525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515846.2955729167,
            "unit": "ns",
            "range": "± 1639.944734450755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146273.0729166667,
            "unit": "ns",
            "range": "± 1045.9679913083435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668097.1819196427,
            "unit": "ns",
            "range": "± 10080.234634533774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826540.6888521635,
            "unit": "ns",
            "range": "± 683.2229612496664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715102.0247395834,
            "unit": "ns",
            "range": "± 882.4332586348779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3033065,
            "unit": "ns",
            "range": "± 107312.48296447156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4737830.434782608,
            "unit": "ns",
            "range": "± 117752.88622126737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21525596.666666668,
            "unit": "ns",
            "range": "± 324407.7942226126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5891531.578947368,
            "unit": "ns",
            "range": "± 123739.9874855496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25141542.85714286,
            "unit": "ns",
            "range": "± 184344.26286908757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176837.77777777778,
            "unit": "ns",
            "range": "± 6495.952897027813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179425,
            "unit": "ns",
            "range": "± 8009.414481657386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156136.84210526315,
            "unit": "ns",
            "range": "± 8948.71977806286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10599621.42857143,
            "unit": "ns",
            "range": "± 28471.69116512396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8545153.333333334,
            "unit": "ns",
            "range": "± 44369.80740913588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18761.224489795917,
            "unit": "ns",
            "range": "± 1614.2172884216761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49244.68085106383,
            "unit": "ns",
            "range": "± 3881.597526716844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34854.901960784315,
            "unit": "ns",
            "range": "± 1414.68211630602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87084.69387755102,
            "unit": "ns",
            "range": "± 12002.811973289745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4890.625,
            "unit": "ns",
            "range": "± 639.9964021280448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17294.444444444445,
            "unit": "ns",
            "range": "± 1463.5927099006772"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "254786a1d96265e39eb3c9f9a8926385cd88d6cb",
          "message": "Merge pull request #2945 from greymistcube/prepare/0.51.3",
          "timestamp": "2023-03-16T10:19:00+09:00",
          "tree_id": "47dbbdaffe5d3c55e1f6518e77cde938901434ba",
          "url": "https://github.com/planetarium/libplanet/commit/254786a1d96265e39eb3c9f9a8926385cd88d6cb"
        },
        "date": 1678930379939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1112213.829787234,
            "unit": "ns",
            "range": "± 107870.89615270618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1863361.3636363635,
            "unit": "ns",
            "range": "± 58672.2319167871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1695769,
            "unit": "ns",
            "range": "± 137377.39341395337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3624184.375,
            "unit": "ns",
            "range": "± 112446.26561700339"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34194.20289855073,
            "unit": "ns",
            "range": "± 1663.5260264209003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5230316.666666667,
            "unit": "ns",
            "range": "± 34076.18914530594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 13547573.333333334,
            "unit": "ns",
            "range": "± 58065.69514249315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 33675223.333333336,
            "unit": "ns",
            "range": "± 336586.0778605137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 67230506.66666667,
            "unit": "ns",
            "range": "± 914573.848823801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 133910292.85714285,
            "unit": "ns",
            "range": "± 893418.0152342211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3689298.995535714,
            "unit": "ns",
            "range": "± 7443.610347452486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1130760,
            "unit": "ns",
            "range": "± 2289.219273384573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 810605.0641741072,
            "unit": "ns",
            "range": "± 2035.3831096572085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999100.2604166667,
            "unit": "ns",
            "range": "± 3718.48993180439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636480.2455357143,
            "unit": "ns",
            "range": "± 1575.9394006215407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559028.466796875,
            "unit": "ns",
            "range": "± 591.4429639164298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2279926.582278481,
            "unit": "ns",
            "range": "± 114709.79962704632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3493594.117647059,
            "unit": "ns",
            "range": "± 108971.66977170821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15700793.333333334,
            "unit": "ns",
            "range": "± 208466.70671722092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4179984.6153846155,
            "unit": "ns",
            "range": "± 63445.86729585369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17904220,
            "unit": "ns",
            "range": "± 320737.34737320506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 123297.5,
            "unit": "ns",
            "range": "± 6403.5784102091075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 125546.83544303797,
            "unit": "ns",
            "range": "± 6511.032755984023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 100441.86046511628,
            "unit": "ns",
            "range": "± 3669.3863868849958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7764600,
            "unit": "ns",
            "range": "± 76327.79091960324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6375642.857142857,
            "unit": "ns",
            "range": "± 41357.08876612075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10547.727272727272,
            "unit": "ns",
            "range": "± 1005.3851864040729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 32107.865168539327,
            "unit": "ns",
            "range": "± 3149.3226082293954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24092.134831460673,
            "unit": "ns",
            "range": "± 1371.5638651405725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67164.44444444444,
            "unit": "ns",
            "range": "± 12821.149233411888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3117.3469387755104,
            "unit": "ns",
            "range": "± 622.9337821544881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10217.894736842105,
            "unit": "ns",
            "range": "± 1148.4475133542023"
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
          "id": "d4df3b19c4b729d103e7b6b0953cdad9e5701263",
          "message": "Merge pull request #2956 from OnedgeLee/fix/dealer-socket-ipv6\n\nFix `ResolveNetMQAddressAsync` to return IPv4",
          "timestamp": "2023-03-17T17:38:40+09:00",
          "tree_id": "be13a186e8a16afc326d2a53fe070fad1092e816",
          "url": "https://github.com/planetarium/libplanet/commit/d4df3b19c4b729d103e7b6b0953cdad9e5701263"
        },
        "date": 1679043672951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1706567.3684210526,
            "unit": "ns",
            "range": "± 223506.27552811112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3247004.0816326533,
            "unit": "ns",
            "range": "± 350623.36650287255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2733674.2268041237,
            "unit": "ns",
            "range": "± 350446.8127971153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6690339.583333333,
            "unit": "ns",
            "range": "± 584458.8483067352"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68732.1052631579,
            "unit": "ns",
            "range": "± 17194.927375118812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 12101845.833333334,
            "unit": "ns",
            "range": "± 951170.968960356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24366306.25,
            "unit": "ns",
            "range": "± 1445689.7997195518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 62536294.20289855,
            "unit": "ns",
            "range": "± 3008023.5032074223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 129574321.31147541,
            "unit": "ns",
            "range": "± 5758093.910317741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 257551522.2222222,
            "unit": "ns",
            "range": "± 6744050.722521941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6309844.587053572,
            "unit": "ns",
            "range": "± 101084.11099258273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022396.763392857,
            "unit": "ns",
            "range": "± 47964.65586265634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1601831.3020833333,
            "unit": "ns",
            "range": "± 28855.331333138933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3193586.71875,
            "unit": "ns",
            "range": "± 53086.13130620471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1107875.0244140625,
            "unit": "ns",
            "range": "± 21737.717065866225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962724.1455078125,
            "unit": "ns",
            "range": "± 17465.130815024262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3699373.9583333335,
            "unit": "ns",
            "range": "± 389996.533114089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5978856.842105263,
            "unit": "ns",
            "range": "± 581292.4377832246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31902056.842105262,
            "unit": "ns",
            "range": "± 1877710.3904927378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7189605.208333333,
            "unit": "ns",
            "range": "± 816929.5070238754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 38312914.28571428,
            "unit": "ns",
            "range": "± 2948220.663628029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225723.6559139785,
            "unit": "ns",
            "range": "± 31467.178891006082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234762.63736263735,
            "unit": "ns",
            "range": "± 33544.503270039626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201448.93617021278,
            "unit": "ns",
            "range": "± 41028.310432195634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13949331.632653061,
            "unit": "ns",
            "range": "± 1347926.6446280887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10791067.010309279,
            "unit": "ns",
            "range": "± 1117428.6482368095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31227.659574468085,
            "unit": "ns",
            "range": "± 11899.628658300435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71676.59574468085,
            "unit": "ns",
            "range": "± 17269.67274989842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46961.85567010309,
            "unit": "ns",
            "range": "± 11646.695197377601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137975.25773195876,
            "unit": "ns",
            "range": "± 37762.13665534079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6154.761904761905,
            "unit": "ns",
            "range": "± 958.2117835560811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26086.73469387755,
            "unit": "ns",
            "range": "± 9996.542059401436"
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
          "id": "ee01f32a11e460bc94de0d135e30e7fd6e9f122b",
          "message": "Merge pull request #2960 from OnedgeLee/release/0.51.3\n\n🚀 Release 0.51.3",
          "timestamp": "2023-03-17T18:02:24+09:00",
          "tree_id": "0e5ef6e39328e71b5e04266b0f2f1b9e4003d975",
          "url": "https://github.com/planetarium/libplanet/commit/ee01f32a11e460bc94de0d135e30e7fd6e9f122b"
        },
        "date": 1679044639830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316976,
            "unit": "ns",
            "range": "± 97422.20218609246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2365464.285714286,
            "unit": "ns",
            "range": "± 66205.95371171921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2189991.304347826,
            "unit": "ns",
            "range": "± 50175.72677413106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4753119.230769231,
            "unit": "ns",
            "range": "± 101474.2726772881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41903.27868852459,
            "unit": "ns",
            "range": "± 1874.3858739255334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7087723.076923077,
            "unit": "ns",
            "range": "± 18168.523781811677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17651121.42857143,
            "unit": "ns",
            "range": "± 79063.17998013632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44970440,
            "unit": "ns",
            "range": "± 462958.0138321709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89915780,
            "unit": "ns",
            "range": "± 691445.5491422093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 179930366.66666666,
            "unit": "ns",
            "range": "± 1425144.8917148574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4732938.359375,
            "unit": "ns",
            "range": "± 13424.635517584618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515528.0348557692,
            "unit": "ns",
            "range": "± 1847.3084409483702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1124962.3763020833,
            "unit": "ns",
            "range": "± 1891.0753611207228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631447.823660714,
            "unit": "ns",
            "range": "± 9212.253450234843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793115.3599330357,
            "unit": "ns",
            "range": "± 4778.807542654917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741044.8697916666,
            "unit": "ns",
            "range": "± 906.4532632616349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2952246.6666666665,
            "unit": "ns",
            "range": "± 41605.86954928812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4588260,
            "unit": "ns",
            "range": "± 59003.93207236277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20829666.666666668,
            "unit": "ns",
            "range": "± 310381.90223995864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5583596.666666667,
            "unit": "ns",
            "range": "± 71623.86739734444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24170753.333333332,
            "unit": "ns",
            "range": "± 349556.089647318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173787.2340425532,
            "unit": "ns",
            "range": "± 6676.748005001699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170389.6551724138,
            "unit": "ns",
            "range": "± 4834.721503841191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144179.4871794872,
            "unit": "ns",
            "range": "± 5017.085518357796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10356514.285714285,
            "unit": "ns",
            "range": "± 72073.86016220665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8213753.333333333,
            "unit": "ns",
            "range": "± 89651.04466498876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15818.421052631578,
            "unit": "ns",
            "range": "± 1462.9657401999816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47782.65306122449,
            "unit": "ns",
            "range": "± 4432.448894006588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 34535,
            "unit": "ns",
            "range": "± 798.8643254810643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82914.28571428571,
            "unit": "ns",
            "range": "± 13934.485886002987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4086.59793814433,
            "unit": "ns",
            "range": "± 460.89335036684037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15846.907216494845,
            "unit": "ns",
            "range": "± 1521.3380629295425"
          }
        ]
      }
    ]
  }
}