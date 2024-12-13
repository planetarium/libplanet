window.BENCHMARK_DATA = {
  "lastUpdate": 1734062996986,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731491592381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10669461.615384616,
            "unit": "ns",
            "range": "± 140246.7485882997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26731241.5,
            "unit": "ns",
            "range": "± 204431.33643531945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66792175.333333336,
            "unit": "ns",
            "range": "± 113099.346815511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133962274.28571428,
            "unit": "ns",
            "range": "± 182902.22506466234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276897175,
            "unit": "ns",
            "range": "± 251146.5754421264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12992.846153846154,
            "unit": "ns",
            "range": "± 216.63673363253602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54097.544444444444,
            "unit": "ns",
            "range": "± 3084.815239167534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106225.38,
            "unit": "ns",
            "range": "± 4086.5655301542515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94480.53225806452,
            "unit": "ns",
            "range": "± 2845.9728797474627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2823249.55,
            "unit": "ns",
            "range": "± 193428.62912072436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2675945.5606060605,
            "unit": "ns",
            "range": "± 174725.97269297572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5147.274725274725,
            "unit": "ns",
            "range": "± 542.987089388854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27958.152173913044,
            "unit": "ns",
            "range": "± 2346.1118029568083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23577.22680412371,
            "unit": "ns",
            "range": "± 1664.216266402113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30985.525773195877,
            "unit": "ns",
            "range": "± 5571.671996381905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1508.4791666666667,
            "unit": "ns",
            "range": "± 254.56199655038714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5183.655555555555,
            "unit": "ns",
            "range": "± 518.381126570518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 697920.5263157894,
            "unit": "ns",
            "range": "± 54799.7398147345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1319201.0909090908,
            "unit": "ns",
            "range": "± 61900.93899020054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1074758.3820224719,
            "unit": "ns",
            "range": "± 59144.687886899555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8793679.91,
            "unit": "ns",
            "range": "± 1254247.300148194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158526,
            "unit": "ns",
            "range": "± 24661.82609148533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2238958.6923076925,
            "unit": "ns",
            "range": "± 31774.99829106897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2557583.25,
            "unit": "ns",
            "range": "± 57012.26585372937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270866.220338983,
            "unit": "ns",
            "range": "± 95388.7015772232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2842859.052631579,
            "unit": "ns",
            "range": "± 91913.36813306712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036590.5575520834,
            "unit": "ns",
            "range": "± 48596.73139890285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919839.5944661458,
            "unit": "ns",
            "range": "± 6593.749991490632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612853.6651041667,
            "unit": "ns",
            "range": "± 4648.0817027428075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623345.9401041667,
            "unit": "ns",
            "range": "± 23737.9981296805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455036.11969866074,
            "unit": "ns",
            "range": "± 590.9209532886484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417619.88633510045,
            "unit": "ns",
            "range": "± 855.1961207766185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bff17d33958cd1fe198ae447e68755a454971d9f",
          "message": "Merge pull request #3992 from planetarium/prepare/5.4.2\n\n🔧 Prepare 5.4.2",
          "timestamp": "2024-12-05T13:10:08+09:00",
          "tree_id": "aa9bcb4db8fdd915feab73d8f0255ce4140d0672",
          "url": "https://github.com/planetarium/libplanet/commit/bff17d33958cd1fe198ae447e68755a454971d9f"
        },
        "date": 1733468734475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10676661.142857144,
            "unit": "ns",
            "range": "± 111091.46015219735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26199219.5,
            "unit": "ns",
            "range": "± 254549.48779297643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67337689.4,
            "unit": "ns",
            "range": "± 118707.02916051047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134056351.57142857,
            "unit": "ns",
            "range": "± 176460.25743523636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270017672.6,
            "unit": "ns",
            "range": "± 372059.74296279746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13017.48717948718,
            "unit": "ns",
            "range": "± 455.7222071552657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54111.24137931035,
            "unit": "ns",
            "range": "± 2939.950632260397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104818.09302325582,
            "unit": "ns",
            "range": "± 3431.5284447795443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92047.92857142857,
            "unit": "ns",
            "range": "± 3147.6717558504097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2874370.741758242,
            "unit": "ns",
            "range": "± 160472.1332469591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2673712.06,
            "unit": "ns",
            "range": "± 172803.1702216804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4999.860465116279,
            "unit": "ns",
            "range": "± 439.54570565503326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27033.32608695652,
            "unit": "ns",
            "range": "± 1932.4147400761672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23152.69318181818,
            "unit": "ns",
            "range": "± 1856.4963903302641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30881.494623655915,
            "unit": "ns",
            "range": "± 4870.443765210669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1257.872340425532,
            "unit": "ns",
            "range": "± 269.79331930331415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4948.636363636364,
            "unit": "ns",
            "range": "± 612.4812956434357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669332.1724137932,
            "unit": "ns",
            "range": "± 40461.78262698825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272065.6756756757,
            "unit": "ns",
            "range": "± 41952.907396967836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1044397,
            "unit": "ns",
            "range": "± 53388.756102714375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8697293.22,
            "unit": "ns",
            "range": "± 1197942.79947202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2122826.8636363638,
            "unit": "ns",
            "range": "± 76381.28786512087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2267856.342857143,
            "unit": "ns",
            "range": "± 74393.90645505651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2512286.0714285714,
            "unit": "ns",
            "range": "± 43718.61659163992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2278038.1226415094,
            "unit": "ns",
            "range": "± 94572.44939345676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2875587.2413793104,
            "unit": "ns",
            "range": "± 108660.6655280251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3026561.6875,
            "unit": "ns",
            "range": "± 55202.74684313902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928419.5373883928,
            "unit": "ns",
            "range": "± 5082.1520806425115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612489.8603515625,
            "unit": "ns",
            "range": "± 4717.479566592759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637754.928873698,
            "unit": "ns",
            "range": "± 10038.335507194597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460389.8612530048,
            "unit": "ns",
            "range": "± 473.9515846356963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423440.10283203126,
            "unit": "ns",
            "range": "± 1095.892252421979"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f185fce65e2f0702f12d3049ff57607e914794e1",
          "message": "Merge pull request #4008 from planetarium/feature/delayed-consensus\n\nFeature/delayed consensus",
          "timestamp": "2024-12-13T13:01:55+09:00",
          "tree_id": "9aff13e18a69500bd3bb46426299fc7cd1dbb0cd",
          "url": "https://github.com/planetarium/libplanet/commit/f185fce65e2f0702f12d3049ff57607e914794e1"
        },
        "date": 1734062984172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10716415.038461538,
            "unit": "ns",
            "range": "± 81739.40317314878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26298683.85714286,
            "unit": "ns",
            "range": "± 285965.0297315436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66911072.166666664,
            "unit": "ns",
            "range": "± 143804.80896273785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133814267.5,
            "unit": "ns",
            "range": "± 159201.0384942694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270635383.1,
            "unit": "ns",
            "range": "± 929419.6748419951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12940.469696969696,
            "unit": "ns",
            "range": "± 402.90294154179406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 55179.77333333333,
            "unit": "ns",
            "range": "± 2774.066434507844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105641.23333333334,
            "unit": "ns",
            "range": "± 3523.2854914902164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92932.26190476191,
            "unit": "ns",
            "range": "± 3378.363589001185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2893154.94,
            "unit": "ns",
            "range": "± 116143.08740798825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2794210.347826087,
            "unit": "ns",
            "range": "± 157360.6014027455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4971.085106382979,
            "unit": "ns",
            "range": "± 654.5798728064603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27086.923076923078,
            "unit": "ns",
            "range": "± 1895.516412958451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23562.381443298967,
            "unit": "ns",
            "range": "± 2011.4628768805871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 32346.229166666668,
            "unit": "ns",
            "range": "± 5587.891217867372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1299.7708333333333,
            "unit": "ns",
            "range": "± 342.0034003883485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5103.71875,
            "unit": "ns",
            "range": "± 868.3741578147788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 668522.4197530864,
            "unit": "ns",
            "range": "± 35053.76914215652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1274615.372881356,
            "unit": "ns",
            "range": "± 53880.54604077121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1045642.9397590362,
            "unit": "ns",
            "range": "± 55809.17062597993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8509162.02,
            "unit": "ns",
            "range": "± 1337370.5393592606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128575.9534883723,
            "unit": "ns",
            "range": "± 71903.07219509486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2236965.1923076925,
            "unit": "ns",
            "range": "± 59066.20197643944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2522121.1,
            "unit": "ns",
            "range": "± 34123.1843594876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2256678.879310345,
            "unit": "ns",
            "range": "± 65833.6619760166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2843798.6818181816,
            "unit": "ns",
            "range": "± 105965.60907612031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3045370.981201172,
            "unit": "ns",
            "range": "± 57717.99012985825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921643.7249348959,
            "unit": "ns",
            "range": "± 6464.533250163165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618144.1073567708,
            "unit": "ns",
            "range": "± 5462.3988542297075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1629951.8561197917,
            "unit": "ns",
            "range": "± 18787.272409778558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463129.4406575521,
            "unit": "ns",
            "range": "± 824.0864521129702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420936.0831124442,
            "unit": "ns",
            "range": "± 1041.3444024836626"
          }
        ]
      }
    ]
  }
}