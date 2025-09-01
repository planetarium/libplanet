window.BENCHMARK_DATA = {
  "lastUpdate": 1756721327774,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0df115f8f4320098c7ea02e2924043dda780f1f2",
          "message": "Test singleton ActivitySource",
          "timestamp": "2025-08-27T18:00:37+09:00",
          "tree_id": "8edb064c933208a8f9463cd72f0d54fcf4031257",
          "url": "https://github.com/planetarium/libplanet/commit/0df115f8f4320098c7ea02e2924043dda780f1f2"
        },
        "date": 1756287748992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054272.9166666667,
            "unit": "ns",
            "range": "± 152344.30290363004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1876310.6382978724,
            "unit": "ns",
            "range": "± 72413.71247168277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591746.4705882352,
            "unit": "ns",
            "range": "± 84252.64507231017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6965092.857142857,
            "unit": "ns",
            "range": "± 299375.9775734385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34678.57142857143,
            "unit": "ns",
            "range": "± 4000.212623214901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10420027.777777778,
            "unit": "ns",
            "range": "± 210669.62372273114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25076892.85714286,
            "unit": "ns",
            "range": "± 310934.2880473565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63130440,
            "unit": "ns",
            "range": "± 632236.6281701812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128023040,
            "unit": "ns",
            "range": "± 1927227.3821662634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257190220,
            "unit": "ns",
            "range": "± 4228018.312603942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3404052.8385416665,
            "unit": "ns",
            "range": "± 9558.404228595904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077277.9557291667,
            "unit": "ns",
            "range": "± 2337.707785241757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737705.078125,
            "unit": "ns",
            "range": "± 1599.1132092396956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942873.939732143,
            "unit": "ns",
            "range": "± 7773.590696766312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632098.0859375,
            "unit": "ns",
            "range": "± 1913.5059317734278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569359.0559895834,
            "unit": "ns",
            "range": "± 1063.853313651687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185312.5,
            "unit": "ns",
            "range": "± 77298.85787957789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273710.714285714,
            "unit": "ns",
            "range": "± 63812.17426679713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2765959.090909091,
            "unit": "ns",
            "range": "± 67406.61906943779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2339880,
            "unit": "ns",
            "range": "± 42541.49570881185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3062913.3333333335,
            "unit": "ns",
            "range": "± 35998.608438713425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98929.26829268293,
            "unit": "ns",
            "range": "± 5223.4392861900005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174086.95652173914,
            "unit": "ns",
            "range": "± 6225.239261645635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155029.16666666666,
            "unit": "ns",
            "range": "± 6108.276851886363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2695976.923076923,
            "unit": "ns",
            "range": "± 20074.82477491621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2595247.3684210526,
            "unit": "ns",
            "range": "± 56757.235157203155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12742.857142857143,
            "unit": "ns",
            "range": "± 2584.0111071862393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59621.64948453608,
            "unit": "ns",
            "range": "± 5667.620510484016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46428.813559322036,
            "unit": "ns",
            "range": "± 2040.5417508726339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59713.41463414634,
            "unit": "ns",
            "range": "± 8050.807216565412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2842.7083333333335,
            "unit": "ns",
            "range": "± 466.95988595137317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11636.458333333334,
            "unit": "ns",
            "range": "± 1689.7287101884392"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "a816fa5514391d11347137e8ad17b95f2310c9f2",
          "message": "ActivitySource as singleton",
          "timestamp": "2025-09-01T18:54:11+09:00",
          "tree_id": "8edb064c933208a8f9463cd72f0d54fcf4031257",
          "url": "https://github.com/planetarium/libplanet/commit/a816fa5514391d11347137e8ad17b95f2310c9f2"
        },
        "date": 1756721122614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1053175.7575757576,
            "unit": "ns",
            "range": "± 140602.52348514093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1851040.9090909092,
            "unit": "ns",
            "range": "± 94351.00504557464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1536415.3846153845,
            "unit": "ns",
            "range": "± 86201.49769654937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6790410.810810811,
            "unit": "ns",
            "range": "± 226851.57872223144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29246.938775510203,
            "unit": "ns",
            "range": "± 977.9020999091896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9863926.666666666,
            "unit": "ns",
            "range": "± 99048.80807436493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24694350,
            "unit": "ns",
            "range": "± 527010.0001841689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63308766.666666664,
            "unit": "ns",
            "range": "± 1182295.408859192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124784860,
            "unit": "ns",
            "range": "± 2045266.4506122423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250789855.55555555,
            "unit": "ns",
            "range": "± 5060893.220420357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3338609.140625,
            "unit": "ns",
            "range": "± 13995.486664529244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066048.1026785714,
            "unit": "ns",
            "range": "± 4280.9315651967445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741998.5481770834,
            "unit": "ns",
            "range": "± 3722.246627468235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923918.3333333333,
            "unit": "ns",
            "range": "± 4898.592746761708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616055.5873325893,
            "unit": "ns",
            "range": "± 1266.3167010961884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564720.64453125,
            "unit": "ns",
            "range": "± 1075.6788751335291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2338571.9298245613,
            "unit": "ns",
            "range": "± 100832.70932303445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265472.093023256,
            "unit": "ns",
            "range": "± 77362.40420003884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2844943.3333333335,
            "unit": "ns",
            "range": "± 52834.32956849534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2401950,
            "unit": "ns",
            "range": "± 57051.37826472522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3029056.25,
            "unit": "ns",
            "range": "± 59376.5269979083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107513.33333333333,
            "unit": "ns",
            "range": "± 7964.446276696329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177741.79104477612,
            "unit": "ns",
            "range": "± 8262.78897177217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155108.92857142858,
            "unit": "ns",
            "range": "± 6665.058869977049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2662718.75,
            "unit": "ns",
            "range": "± 48299.44400991244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2537586.6666666665,
            "unit": "ns",
            "range": "± 36283.819035618675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13172.222222222223,
            "unit": "ns",
            "range": "± 1477.3212759280268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62305.26315789474,
            "unit": "ns",
            "range": "± 5389.871676146877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50213.978494623654,
            "unit": "ns",
            "range": "± 3851.9219200021903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63677.52808988764,
            "unit": "ns",
            "range": "± 10809.578589138904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3037.1134020618556,
            "unit": "ns",
            "range": "± 596.5734775275776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13042.105263157895,
            "unit": "ns",
            "range": "± 1907.7434005701111"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "e7fd9acdc7fee8dffa3505243d285331369fd3c8",
          "message": "ActivitySource as singleton",
          "timestamp": "2025-09-01T18:51:55+09:00",
          "tree_id": "8edb064c933208a8f9463cd72f0d54fcf4031257",
          "url": "https://github.com/planetarium/libplanet/commit/e7fd9acdc7fee8dffa3505243d285331369fd3c8"
        },
        "date": 1756721119672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057904,
            "unit": "ns",
            "range": "± 117734.31647895901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1832227.5862068965,
            "unit": "ns",
            "range": "± 76672.03747725433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1535500,
            "unit": "ns",
            "range": "± 81188.82942927793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6965670.909090909,
            "unit": "ns",
            "range": "± 296502.61236293876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32356.25,
            "unit": "ns",
            "range": "± 4545.299770092177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9654460,
            "unit": "ns",
            "range": "± 94387.32360408816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23717307.14285714,
            "unit": "ns",
            "range": "± 293791.7668226039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58553193.333333336,
            "unit": "ns",
            "range": "± 429678.47359004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126444783.33333333,
            "unit": "ns",
            "range": "± 2664833.104861298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238535940,
            "unit": "ns",
            "range": "± 2490834.642042703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3249841.238839286,
            "unit": "ns",
            "range": "± 22227.58386966201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065000.4166666667,
            "unit": "ns",
            "range": "± 7761.480939755529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755413.5872395834,
            "unit": "ns",
            "range": "± 1716.8486472154368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1999480.8872767857,
            "unit": "ns",
            "range": "± 23580.774694598815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641798.8020833334,
            "unit": "ns",
            "range": "± 4937.405654042634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560106.2955729166,
            "unit": "ns",
            "range": "± 2551.9192436946346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2207290.3225806453,
            "unit": "ns",
            "range": "± 67340.70762344131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2326116.6666666665,
            "unit": "ns",
            "range": "± 48587.94633869356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2728906.6666666665,
            "unit": "ns",
            "range": "± 42294.43507242103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2353456.25,
            "unit": "ns",
            "range": "± 44482.71527608598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3104450,
            "unit": "ns",
            "range": "± 31634.736263505318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 106670.78651685393,
            "unit": "ns",
            "range": "± 6260.975857847035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169454.94505494504,
            "unit": "ns",
            "range": "± 11264.144330438397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148366.66666666666,
            "unit": "ns",
            "range": "± 3152.3536180659257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2544464.285714286,
            "unit": "ns",
            "range": "± 30777.554437330742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2394780,
            "unit": "ns",
            "range": "± 40799.53080962714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10127.551020408164,
            "unit": "ns",
            "range": "± 1377.9396401908384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50905.434782608696,
            "unit": "ns",
            "range": "± 4106.932336364963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44262.96296296296,
            "unit": "ns",
            "range": "± 862.5312249189092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48546.8085106383,
            "unit": "ns",
            "range": "± 8324.981218328254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2028.888888888889,
            "unit": "ns",
            "range": "± 290.77364625822287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9335.227272727272,
            "unit": "ns",
            "range": "± 941.4515294141036"
          }
        ]
      }
    ]
  }
}