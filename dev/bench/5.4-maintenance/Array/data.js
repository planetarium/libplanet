window.BENCHMARK_DATA = {
  "lastUpdate": 1735265185139,
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
          "id": "de309156e1253938e2fa83de1eb5e8965feebb3e",
          "message": "Merge pull request #4009 from planetarium/release/5.4.2\n\nRelease/5.4.2",
          "timestamp": "2024-12-13T13:43:30+09:00",
          "tree_id": "81a18e9d75f2b96395fd766d8ef3fc5cc02ee6ef",
          "url": "https://github.com/planetarium/libplanet/commit/de309156e1253938e2fa83de1eb5e8965feebb3e"
        },
        "date": 1734065473793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10662660.538461538,
            "unit": "ns",
            "range": "± 89695.10642691661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26120295,
            "unit": "ns",
            "range": "± 117788.42345885727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66721853,
            "unit": "ns",
            "range": "± 146339.42249100207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133784434.78571428,
            "unit": "ns",
            "range": "± 284290.44183672406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270003553.2,
            "unit": "ns",
            "range": "± 580469.763262628"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12586.907407407407,
            "unit": "ns",
            "range": "± 299.7598088802818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54494.14772727273,
            "unit": "ns",
            "range": "± 2997.214053312523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105837.48837209302,
            "unit": "ns",
            "range": "± 3544.0064923358586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92862.8,
            "unit": "ns",
            "range": "± 2765.3200899715025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2850555.1348314607,
            "unit": "ns",
            "range": "± 157446.35014954596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2715441.2,
            "unit": "ns",
            "range": "± 185333.29580220897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5202.968421052631,
            "unit": "ns",
            "range": "± 920.4343730882578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26460.57608695652,
            "unit": "ns",
            "range": "± 1776.4522196368391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23316.69387755102,
            "unit": "ns",
            "range": "± 1551.803183982363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30531.166666666668,
            "unit": "ns",
            "range": "± 4898.1497702632405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1314.595744680851,
            "unit": "ns",
            "range": "± 302.4038928160478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4924.677083333333,
            "unit": "ns",
            "range": "± 713.8128236861339"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675395.6818181818,
            "unit": "ns",
            "range": "± 39785.56168582037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1284099.680851064,
            "unit": "ns",
            "range": "± 49035.87428568136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1026215.5606060605,
            "unit": "ns",
            "range": "± 47849.44641915251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8793629.91,
            "unit": "ns",
            "range": "± 1355997.0880618084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2132371.769230769,
            "unit": "ns",
            "range": "± 33924.39615319592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2240766,
            "unit": "ns",
            "range": "± 11097.991011890395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2525862.5384615385,
            "unit": "ns",
            "range": "± 39802.90784941762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2251073.1666666665,
            "unit": "ns",
            "range": "± 58282.286669701585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2837253.6515151514,
            "unit": "ns",
            "range": "± 80745.23725161799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3072196.3645833335,
            "unit": "ns",
            "range": "± 43659.77991418628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921237.4048177083,
            "unit": "ns",
            "range": "± 5894.700928968823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611706.3473958333,
            "unit": "ns",
            "range": "± 5480.773622998903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631242.2846354167,
            "unit": "ns",
            "range": "± 14333.23683649842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460923.3369140625,
            "unit": "ns",
            "range": "± 843.3157736474502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419558.40752704325,
            "unit": "ns",
            "range": "± 1053.5208967772537"
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
          "id": "47cdcb699440585b4a49fd3c47281823a0354011",
          "message": "Merge pull request #4010 from planetarium/prepare/5.4.3\n\nPrepare 5.4.3",
          "timestamp": "2024-12-17T09:18:42+09:00",
          "tree_id": "860f31b64bf519864f79ee30dfa27ae1bd55a521",
          "url": "https://github.com/planetarium/libplanet/commit/47cdcb699440585b4a49fd3c47281823a0354011"
        },
        "date": 1734395176046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10682850.916666666,
            "unit": "ns",
            "range": "± 88978.1606682309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26118157.285714287,
            "unit": "ns",
            "range": "± 170077.3139574735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66623595,
            "unit": "ns",
            "range": "± 137905.60262786224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134352807.92307693,
            "unit": "ns",
            "range": "± 217541.3692773789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269876530.43333334,
            "unit": "ns",
            "range": "± 213726.8359533685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13086.857142857143,
            "unit": "ns",
            "range": "± 221.54487551765186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54176.92253521127,
            "unit": "ns",
            "range": "± 2529.9849726373127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105148.71929824562,
            "unit": "ns",
            "range": "± 3981.343149860654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91595.95652173914,
            "unit": "ns",
            "range": "± 3484.8792531705803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2854541.9565217393,
            "unit": "ns",
            "range": "± 159667.89196269636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2697148.1428571427,
            "unit": "ns",
            "range": "± 161203.89045719733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5206.795454545455,
            "unit": "ns",
            "range": "± 502.03079905269965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 29464.963917525773,
            "unit": "ns",
            "range": "± 3465.72781275766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23000.397849462366,
            "unit": "ns",
            "range": "± 1543.00915872472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31849.31182795699,
            "unit": "ns",
            "range": "± 4767.587718302245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1345.3118279569892,
            "unit": "ns",
            "range": "± 310.83663325928967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5242.752631578947,
            "unit": "ns",
            "range": "± 775.3947377485273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 707057.1428571428,
            "unit": "ns",
            "range": "± 75334.94275758535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279170.4426229508,
            "unit": "ns",
            "range": "± 53704.84379194754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1031554.6027397261,
            "unit": "ns",
            "range": "± 46054.20495421664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8704572.65,
            "unit": "ns",
            "range": "± 1394506.3542357944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121713.84375,
            "unit": "ns",
            "range": "± 55399.42461452068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223699.8571428573,
            "unit": "ns",
            "range": "± 30745.966744516998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2519447.0384615385,
            "unit": "ns",
            "range": "± 17996.837618571513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263508.96,
            "unit": "ns",
            "range": "± 90434.55357717231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2684067.6153846155,
            "unit": "ns",
            "range": "± 41599.46825689495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3016132.679947917,
            "unit": "ns",
            "range": "± 48596.99236051233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922481.6,
            "unit": "ns",
            "range": "± 7297.741684997614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 608685.4127103365,
            "unit": "ns",
            "range": "± 1670.936025228375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1620331.04296875,
            "unit": "ns",
            "range": "± 22277.388227110678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459580.92584635416,
            "unit": "ns",
            "range": "± 641.4663575844997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424990.73616536456,
            "unit": "ns",
            "range": "± 638.4308362629631"
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
          "id": "e625401ab9c3108c0f5736e52d7890dc08df570d",
          "message": "Merge pull request #4015 from planetarium/chore/nullable-warnings\n\nRemove nullable-related warnings",
          "timestamp": "2024-12-27T10:57:11+09:00",
          "tree_id": "45d702457db5b59ce8829a9a2cfd613143f538c3",
          "url": "https://github.com/planetarium/libplanet/commit/e625401ab9c3108c0f5736e52d7890dc08df570d"
        },
        "date": 1735265172284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10601468.076923076,
            "unit": "ns",
            "range": "± 119922.31010496027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26658854.388888888,
            "unit": "ns",
            "range": "± 565188.2591779527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66896847.53333333,
            "unit": "ns",
            "range": "± 109579.42310349713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134440387.14285713,
            "unit": "ns",
            "range": "± 184717.10271025347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271360052,
            "unit": "ns",
            "range": "± 278374.65576038754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14507.139175257733,
            "unit": "ns",
            "range": "± 1271.9808959647596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54839.73529411765,
            "unit": "ns",
            "range": "± 2414.123020630004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106997.5,
            "unit": "ns",
            "range": "± 3767.039411823635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92150.92307692308,
            "unit": "ns",
            "range": "± 2374.3696919069184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2823011.737373737,
            "unit": "ns",
            "range": "± 170532.8106995049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2651179.42,
            "unit": "ns",
            "range": "± 175119.54800174924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5196.741935483871,
            "unit": "ns",
            "range": "± 744.7020253711315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26317.517647058823,
            "unit": "ns",
            "range": "± 1369.5640478752694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23420.4,
            "unit": "ns",
            "range": "± 2289.574221311381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30997.6,
            "unit": "ns",
            "range": "± 5387.267251032063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1302.6170212765958,
            "unit": "ns",
            "range": "± 291.7334954977451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4900.288888888889,
            "unit": "ns",
            "range": "± 525.1213074286793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 665353.0243902439,
            "unit": "ns",
            "range": "± 28459.58943639712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1257802.4090909092,
            "unit": "ns",
            "range": "± 39700.7051868758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1034863.95,
            "unit": "ns",
            "range": "± 53787.64734851867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8716819.07,
            "unit": "ns",
            "range": "± 1388712.9432288585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129219.8541666665,
            "unit": "ns",
            "range": "± 83618.75503507917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237360.75,
            "unit": "ns",
            "range": "± 19531.770506373363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2529375.4375,
            "unit": "ns",
            "range": "± 48812.75560201964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2240751.785714286,
            "unit": "ns",
            "range": "± 61386.672480063644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2794509.205128205,
            "unit": "ns",
            "range": "± 96556.1838419203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3057738.13984375,
            "unit": "ns",
            "range": "± 36768.59800036536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924196.4221540178,
            "unit": "ns",
            "range": "± 4824.913927643827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613058.8947265625,
            "unit": "ns",
            "range": "± 8406.382269472384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636472.7583333333,
            "unit": "ns",
            "range": "± 16047.176277002345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462374.8388997396,
            "unit": "ns",
            "range": "± 1321.5155635320377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425165.0711495536,
            "unit": "ns",
            "range": "± 1181.103768151759"
          }
        ]
      }
    ]
  }
}