window.BENCHMARK_DATA = {
  "lastUpdate": 1684143944060,
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
          "id": "504188a71083bab92fecacb7191512bf3d7b5793",
          "message": "Merge pull request #3158 from greymistcube/feature/exposed-polymorphic-action-api-for-testing\n\n🔧 Added `ReloadLoader()` method",
          "timestamp": "2023-05-15T15:26:16+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/planetarium/libplanet/commit/504188a71083bab92fecacb7191512bf3d7b5793"
        },
        "date": 1684139799851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4026312.738095238,
            "unit": "ns",
            "range": "± 147123.94838102467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4259544.641509434,
            "unit": "ns",
            "range": "± 177742.16536267166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5063174.842105263,
            "unit": "ns",
            "range": "± 174329.88067245297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5047107.115384615,
            "unit": "ns",
            "range": "± 280414.09085310367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8041575.310344827,
            "unit": "ns",
            "range": "± 230570.85427293327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323062.2638888889,
            "unit": "ns",
            "range": "± 15950.17687304735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317272.1951219512,
            "unit": "ns",
            "range": "± 16796.800703925237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276099.82558139536,
            "unit": "ns",
            "range": "± 15021.063934427595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5007666.75,
            "unit": "ns",
            "range": "± 142792.52158382986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4380643.291666667,
            "unit": "ns",
            "range": "± 171749.7932450003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22049.0989010989,
            "unit": "ns",
            "range": "± 1708.3413011517932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100323.61458333333,
            "unit": "ns",
            "range": "± 8303.177223676796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89122.66666666667,
            "unit": "ns",
            "range": "± 6654.598302784966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114824.14583333333,
            "unit": "ns",
            "range": "± 11623.867416908935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6463.381443298969,
            "unit": "ns",
            "range": "± 779.894349726548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21467.255319148935,
            "unit": "ns",
            "range": "± 1825.3625059689396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6814250.415885417,
            "unit": "ns",
            "range": "± 79663.61388899217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2170368.58515625,
            "unit": "ns",
            "range": "± 28607.38641536847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1587367.8576822917,
            "unit": "ns",
            "range": "± 23251.36348898541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3096643.1729166666,
            "unit": "ns",
            "range": "± 51474.11513865805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961002.3791992187,
            "unit": "ns",
            "range": "± 13590.960054235511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899002.4593098959,
            "unit": "ns",
            "range": "± 9969.554482651498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9713576.4,
            "unit": "ns",
            "range": "± 140115.84014858154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26112327.466666665,
            "unit": "ns",
            "range": "± 207603.34604889015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63966773.8,
            "unit": "ns",
            "range": "± 886715.0520380748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124879825.44897959,
            "unit": "ns",
            "range": "± 4607893.651913945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255408266.7647059,
            "unit": "ns",
            "range": "± 4897469.2263742145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544124.0202020202,
            "unit": "ns",
            "range": "± 141743.96336740983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093546.1818181816,
            "unit": "ns",
            "range": "± 232751.4570295421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2576239.5303030303,
            "unit": "ns",
            "range": "± 120552.71917045828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6373909.89,
            "unit": "ns",
            "range": "± 458841.3070024924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52414.32183908046,
            "unit": "ns",
            "range": "± 3010.5894327231817"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46c63cefd947066dc2e84cbce3fb8b6dc9c74d4f",
          "message": "Merge pull request #3156 from riemannulus/introduce/transaction/fee-and-gas-field\n\nIntroduce: Fee and Gas field on `ITxInvoice`",
          "timestamp": "2023-05-15T18:32:46+09:00",
          "tree_id": "12d5306695a10248ae95f0cdf41fe25b6cec0366",
          "url": "https://github.com/planetarium/libplanet/commit/46c63cefd947066dc2e84cbce3fb8b6dc9c74d4f"
        },
        "date": 1684143919092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3222508.2666666666,
            "unit": "ns",
            "range": "± 42603.75000675522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3408612.4375,
            "unit": "ns",
            "range": "± 95976.42005232579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4236713.2,
            "unit": "ns",
            "range": "± 50463.052869259845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4296087.8,
            "unit": "ns",
            "range": "± 76067.25930122631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6706212.944444444,
            "unit": "ns",
            "range": "± 133132.21914255116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279022.75,
            "unit": "ns",
            "range": "± 8667.491741950158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265204.79545454547,
            "unit": "ns",
            "range": "± 9840.604503977373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243700.22,
            "unit": "ns",
            "range": "± 9840.9972994901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241417.8,
            "unit": "ns",
            "range": "± 31325.399268234167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3847071.1428571427,
            "unit": "ns",
            "range": "± 10267.090823501172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20366.46875,
            "unit": "ns",
            "range": "± 1397.641177903346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91847.78787878787,
            "unit": "ns",
            "range": "± 7557.781896114715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70107.6530612245,
            "unit": "ns",
            "range": "± 2753.1760262090975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88697.32989690722,
            "unit": "ns",
            "range": "± 9840.796021030736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5361.63829787234,
            "unit": "ns",
            "range": "± 492.7416573449956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19865.845360824744,
            "unit": "ns",
            "range": "± 1990.7218610144819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6353424.689732143,
            "unit": "ns",
            "range": "± 48427.83368163393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861538.7817382812,
            "unit": "ns",
            "range": "± 1061.029426329458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361453.7826450893,
            "unit": "ns",
            "range": "± 594.7502690496003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620669.9123883927,
            "unit": "ns",
            "range": "± 1353.0284581445235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809791.2444893973,
            "unit": "ns",
            "range": "± 647.5416015543054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766916.05078125,
            "unit": "ns",
            "range": "± 3041.0748933403775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7749737.6,
            "unit": "ns",
            "range": "± 98357.1986651569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19358641.714285713,
            "unit": "ns",
            "range": "± 130721.86585232054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49650750.86666667,
            "unit": "ns",
            "range": "± 208800.19278859007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100019478.21428572,
            "unit": "ns",
            "range": "± 896806.0661328305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200096786.57142857,
            "unit": "ns",
            "range": "± 355186.92378709646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397122.5789473683,
            "unit": "ns",
            "range": "± 109595.54843873353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2625054.0322580645,
            "unit": "ns",
            "range": "± 78819.3269020925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2394648.714285714,
            "unit": "ns",
            "range": "± 39950.784506456424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5343833.055555556,
            "unit": "ns",
            "range": "± 175619.7618814896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44512.79761904762,
            "unit": "ns",
            "range": "± 2364.1409136837206"
          }
        ]
      }
    ]
  }
}