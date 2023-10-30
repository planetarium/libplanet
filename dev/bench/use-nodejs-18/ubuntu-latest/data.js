window.BENCHMARK_DATA = {
  "lastUpdate": 1698634209346,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T10:51:50+09:00",
          "tree_id": "f230a237a3484e05deb8f4db80ecb1330c00e43d",
          "url": "https://github.com/planetarium/libplanet/commit/5cc181748fd4b9e80fcf580c5a15cc6aa0bbf75d"
        },
        "date": 1698631843646,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51305.64893617021,
            "unit": "ns",
            "range": "± 12175.28001109409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4905554.255164195,
            "unit": "ns",
            "range": "± 216242.22885099714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1563902.7150998975,
            "unit": "ns",
            "range": "± 67548.06480015087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1102809.6700962612,
            "unit": "ns",
            "range": "± 47046.561003968374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2425267.228866186,
            "unit": "ns",
            "range": "± 84775.44687657505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776111.4389973958,
            "unit": "ns",
            "range": "± 11202.31248046976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836285.3444433594,
            "unit": "ns",
            "range": "± 65989.02253958528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7532195.010204081,
            "unit": "ns",
            "range": "± 558720.0255981357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17596519.6875,
            "unit": "ns",
            "range": "± 535072.7515013767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49527541.8556701,
            "unit": "ns",
            "range": "± 4987539.387685435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98444287.83333333,
            "unit": "ns",
            "range": "± 8203232.975820215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278744024.8787879,
            "unit": "ns",
            "range": "± 8600332.443288747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4447892.814285714,
            "unit": "ns",
            "range": "± 206083.83307392953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4603859,
            "unit": "ns",
            "range": "± 219310.5089630042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4407562.070707071,
            "unit": "ns",
            "range": "± 609859.290909483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3899853.0707070706,
            "unit": "ns",
            "range": "± 494431.08963820373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12192620.87628866,
            "unit": "ns",
            "range": "± 1640739.0450371762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321156.9693877551,
            "unit": "ns",
            "range": "± 56071.22533957616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354804.5625,
            "unit": "ns",
            "range": "± 36257.545918873366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261954.9381443299,
            "unit": "ns",
            "range": "± 48732.990989552454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5139346.373737373,
            "unit": "ns",
            "range": "± 475113.0280276297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3725254.7291666665,
            "unit": "ns",
            "range": "± 417396.6509079943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33280.555555555555,
            "unit": "ns",
            "range": "± 7459.084855535977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110586.95959595959,
            "unit": "ns",
            "range": "± 32187.987857660217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88509.58762886598,
            "unit": "ns",
            "range": "± 21222.908105468923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126653.3894736842,
            "unit": "ns",
            "range": "± 13556.871650290164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5058.585365853659,
            "unit": "ns",
            "range": "± 1002.4941728991635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32474.41237113402,
            "unit": "ns",
            "range": "± 8464.395719168539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1187514.6304347827,
            "unit": "ns",
            "range": "± 152254.25221646123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2390538.0416666665,
            "unit": "ns",
            "range": "± 211619.9604609475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1850315.8229166667,
            "unit": "ns",
            "range": "± 209062.65080008382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8944007.063829787,
            "unit": "ns",
            "range": "± 1176815.1676205946"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "3da86109b54ecccfef8918889c1ecc7b1169a808",
          "message": "DONT MERGE",
          "timestamp": "2023-10-30T10:56:23+09:00",
          "tree_id": "21c37b93f74becf0df3b37da10da8f8884aba749",
          "url": "https://github.com/planetarium/libplanet/commit/3da86109b54ecccfef8918889c1ecc7b1169a808"
        },
        "date": 1698632527347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67435.35106382979,
            "unit": "ns",
            "range": "± 11937.4477241055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5605303.401442308,
            "unit": "ns",
            "range": "± 261282.74991695577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881812.7695855035,
            "unit": "ns",
            "range": "± 61575.11098129714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1279487.3237847222,
            "unit": "ns",
            "range": "± 58578.965778533646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3094191.827414773,
            "unit": "ns",
            "range": "± 74545.65147633526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015314.044921875,
            "unit": "ns",
            "range": "± 21637.425735269797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 921519.970703125,
            "unit": "ns",
            "range": "± 16783.762329380337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8140990.142857143,
            "unit": "ns",
            "range": "± 796037.2769886634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24053348.112244897,
            "unit": "ns",
            "range": "± 2949576.9862054354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56082544.17,
            "unit": "ns",
            "range": "± 4698182.718244158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125237128.71,
            "unit": "ns",
            "range": "± 8773601.430281658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244976018.63,
            "unit": "ns",
            "range": "± 18500131.50822476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3520052.432989691,
            "unit": "ns",
            "range": "± 371740.6485021375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3807786.6530612246,
            "unit": "ns",
            "range": "± 527778.6229156738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4793930.214285715,
            "unit": "ns",
            "range": "± 489066.28997979715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4474020.916666667,
            "unit": "ns",
            "range": "± 454254.5510546555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13066304.468085106,
            "unit": "ns",
            "range": "± 1197608.80227374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303771.79569892475,
            "unit": "ns",
            "range": "± 32617.203578039695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316970.1789473684,
            "unit": "ns",
            "range": "± 39183.61459002955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283988.05555555556,
            "unit": "ns",
            "range": "± 41782.91298098607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4769813.229166667,
            "unit": "ns",
            "range": "± 469351.9066807242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4248002.510416667,
            "unit": "ns",
            "range": "± 424435.69789882546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31862.21212121212,
            "unit": "ns",
            "range": "± 10724.782513633998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108273.56842105264,
            "unit": "ns",
            "range": "± 17828.240678618204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117783.23711340207,
            "unit": "ns",
            "range": "± 24670.893007066206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122369.55913978495,
            "unit": "ns",
            "range": "± 26902.613059790936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6798.675,
            "unit": "ns",
            "range": "± 1380.1461376942682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29997.62,
            "unit": "ns",
            "range": "± 10414.838031764046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1453987.53125,
            "unit": "ns",
            "range": "± 270652.26212789427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3050882.6868686867,
            "unit": "ns",
            "range": "± 320640.88012462604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2226350.8,
            "unit": "ns",
            "range": "± 264656.5233884389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10812417.717171717,
            "unit": "ns",
            "range": "± 1532203.5167129298"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "a121fa6f3c7372670ea82fc6be01e72757763bf6",
          "message": "Use Nodejs 18",
          "timestamp": "2023-10-30T10:51:25+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/a121fa6f3c7372670ea82fc6be01e72757763bf6"
        },
        "date": 1698634179466,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49331.05434782609,
            "unit": "ns",
            "range": "± 2991.781663906373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5205978.876201923,
            "unit": "ns",
            "range": "± 11307.746779610861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1655328.5436662945,
            "unit": "ns",
            "range": "± 3526.491377146693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152713.9196614583,
            "unit": "ns",
            "range": "± 863.4829227589569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622486.095252404,
            "unit": "ns",
            "range": "± 2442.123170841745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830702.6934895833,
            "unit": "ns",
            "range": "± 781.299637977343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752436.0572415865,
            "unit": "ns",
            "range": "± 298.1987113043123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8614696.5,
            "unit": "ns",
            "range": "± 90428.913549858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22687291.466666665,
            "unit": "ns",
            "range": "± 273741.9502226417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56879223.93333333,
            "unit": "ns",
            "range": "± 536431.2488859615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112245062.46666667,
            "unit": "ns",
            "range": "± 1278337.5152930836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225439704.93333334,
            "unit": "ns",
            "range": "± 2415109.8138403995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3491635.206896552,
            "unit": "ns",
            "range": "± 99611.49271881208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3626569.7916666665,
            "unit": "ns",
            "range": "± 142311.99978634872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4355436,
            "unit": "ns",
            "range": "± 155376.63885056853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4222876,
            "unit": "ns",
            "range": "± 166839.63054881975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10653724.55,
            "unit": "ns",
            "range": "± 377078.4446022319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269253.76923076925,
            "unit": "ns",
            "range": "± 6538.616399867436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261891.1403508772,
            "unit": "ns",
            "range": "± 9800.74560472423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230950.85714285713,
            "unit": "ns",
            "range": "± 5294.197335628077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4391683.076923077,
            "unit": "ns",
            "range": "± 54103.5276799051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4116323.4,
            "unit": "ns",
            "range": "± 47597.2177125032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20192.884210526317,
            "unit": "ns",
            "range": "± 1993.541736875086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84355.37234042553,
            "unit": "ns",
            "range": "± 5112.892111280299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71566.53333333334,
            "unit": "ns",
            "range": "± 2723.1955877407904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83108.4375,
            "unit": "ns",
            "range": "± 9811.708957655483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5726.865979381443,
            "unit": "ns",
            "range": "± 739.8774761864568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21413.791666666668,
            "unit": "ns",
            "range": "± 2072.40862622097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367011.1340206186,
            "unit": "ns",
            "range": "± 88932.77095726918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619544.6818181816,
            "unit": "ns",
            "range": "± 96861.8589922333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2034490.0666666667,
            "unit": "ns",
            "range": "± 97754.52232206147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9179213.942028986,
            "unit": "ns",
            "range": "± 443232.31232745625"
          }
        ]
      }
    ]
  }
}