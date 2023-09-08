window.BENCHMARK_DATA = {
  "lastUpdate": 1694137045270,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "aa72117b8887ec9e189cac97cefc3fa77966dd81",
          "message": "Merge pull request #3417 from greymistcube/release/3.3.0\n\n🚀 Release 3.3.0",
          "timestamp": "2023-09-07T19:23:55+09:00",
          "tree_id": "b801b394004dbb5681b75d049d42107df46a8d4f",
          "url": "https://github.com/planetarium/libplanet/commit/aa72117b8887ec9e189cac97cefc3fa77966dd81"
        },
        "date": 1694088995261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1123346.9696969697,
            "unit": "ns",
            "range": "± 180005.47749860023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899647.1264367816,
            "unit": "ns",
            "range": "± 116498.54160089298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1373882,
            "unit": "ns",
            "range": "± 129634.29554642622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3238250.819672131,
            "unit": "ns",
            "range": "± 144651.918552723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34552.68817204301,
            "unit": "ns",
            "range": "± 2504.716915265965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5015226.666666667,
            "unit": "ns",
            "range": "± 58899.76311699475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13956757.142857144,
            "unit": "ns",
            "range": "± 181359.8365947387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33919993.333333336,
            "unit": "ns",
            "range": "± 246690.93001644986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68210433.33333333,
            "unit": "ns",
            "range": "± 559071.1016200592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134582080,
            "unit": "ns",
            "range": "± 2338265.410268292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3227835.46875,
            "unit": "ns",
            "range": "± 7338.700788422823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1026469.9348958334,
            "unit": "ns",
            "range": "± 1911.1473514089164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693322.9166666666,
            "unit": "ns",
            "range": "± 1534.5014330446443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935879.771205357,
            "unit": "ns",
            "range": "± 3190.0872693238484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612518.3984375,
            "unit": "ns",
            "range": "± 1067.4333885853766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581038.9787946428,
            "unit": "ns",
            "range": "± 1018.3706731188065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2415355,
            "unit": "ns",
            "range": "± 52978.73928086128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2477610.5263157897,
            "unit": "ns",
            "range": "± 51715.32004624336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2954434.210526316,
            "unit": "ns",
            "range": "± 99941.95417047807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2763639.1304347827,
            "unit": "ns",
            "range": "± 105934.71255292807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4254789.743589744,
            "unit": "ns",
            "range": "± 140127.44724351884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185278.0487804878,
            "unit": "ns",
            "range": "± 6136.347129812733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177700,
            "unit": "ns",
            "range": "± 6382.084299035857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147532.29166666666,
            "unit": "ns",
            "range": "± 8662.070917957166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2808246.6666666665,
            "unit": "ns",
            "range": "± 52440.45421328116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2601305.263157895,
            "unit": "ns",
            "range": "± 57224.45547223292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12793.333333333334,
            "unit": "ns",
            "range": "± 1754.3397234197653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60972.52747252747,
            "unit": "ns",
            "range": "± 4653.817212999953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49261.61616161616,
            "unit": "ns",
            "range": "± 6368.796815064277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67084.21052631579,
            "unit": "ns",
            "range": "± 11320.075518407164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3288.659793814433,
            "unit": "ns",
            "range": "± 766.060850588335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13089.690721649484,
            "unit": "ns",
            "range": "± 2489.0796716223945"
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
          "id": "ea788e75329d8be22b7ea0ca2b05cdd1880a5eed",
          "message": "Merge pull request #3419 from greymistcube/prepare/3.3.1\n\n🔧 Prepare 3.3.1",
          "timestamp": "2023-09-08T10:21:16+09:00",
          "tree_id": "31cfafb237c60d6a860c9ac96ba14bd0c4ce6f13",
          "url": "https://github.com/planetarium/libplanet/commit/ea788e75329d8be22b7ea0ca2b05cdd1880a5eed"
        },
        "date": 1694136987255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410569.2307692308,
            "unit": "ns",
            "range": "± 37946.79189845454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2328332.6923076925,
            "unit": "ns",
            "range": "± 95348.80181887775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1564855.2083333333,
            "unit": "ns",
            "range": "± 99621.39367550965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4151858.6666666665,
            "unit": "ns",
            "range": "± 208850.50912162114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46037.36263736264,
            "unit": "ns",
            "range": "± 2600.070441423905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6766214,
            "unit": "ns",
            "range": "± 270410.2672923919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18871666.666666668,
            "unit": "ns",
            "range": "± 345120.8497792925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48401672.72727273,
            "unit": "ns",
            "range": "± 1172828.8231905343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96856478.57142857,
            "unit": "ns",
            "range": "± 1619013.6318989797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195227016.66666666,
            "unit": "ns",
            "range": "± 4020963.0860177823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4124022.3772321427,
            "unit": "ns",
            "range": "± 21472.001687424563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1342759.765625,
            "unit": "ns",
            "range": "± 6027.471311618137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 971515.6510416666,
            "unit": "ns",
            "range": "± 6477.662924071579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2402014.6875,
            "unit": "ns",
            "range": "± 8861.817914551319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761958.3834134615,
            "unit": "ns",
            "range": "± 2607.2000230670797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 695905.0571986607,
            "unit": "ns",
            "range": "± 3369.2277073774476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3128000.9803921566,
            "unit": "ns",
            "range": "± 127682.88902205968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3205493.8775510206,
            "unit": "ns",
            "range": "± 119655.69252401391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3827142.5,
            "unit": "ns",
            "range": "± 134925.31721051826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3538536.274509804,
            "unit": "ns",
            "range": "± 142566.0184189877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5651389.285714285,
            "unit": "ns",
            "range": "± 156174.95730225052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240785.10638297873,
            "unit": "ns",
            "range": "± 8668.508189277269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236589.13043478262,
            "unit": "ns",
            "range": "± 8523.515921936063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207936.84210526315,
            "unit": "ns",
            "range": "± 14938.43431249897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3781590.909090909,
            "unit": "ns",
            "range": "± 88425.16830411118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3492545,
            "unit": "ns",
            "range": "± 78897.25146970384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22665.217391304348,
            "unit": "ns",
            "range": "± 2142.014804978986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91077.77777777778,
            "unit": "ns",
            "range": "± 5999.939658456457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72246.875,
            "unit": "ns",
            "range": "± 6860.5194390573815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95948.48484848485,
            "unit": "ns",
            "range": "± 21322.43411668758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5953.125,
            "unit": "ns",
            "range": "± 867.5983942379162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20444.68085106383,
            "unit": "ns",
            "range": "± 1738.1622368366134"
          }
        ]
      }
    ]
  }
}