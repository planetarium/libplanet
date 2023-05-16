window.BENCHMARK_DATA = {
  "lastUpdate": 1684206546268,
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
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f993944ff20a46e8bbf34dfcf036165c0443cafb",
          "message": "temp",
          "timestamp": "2023-05-15T22:08:38+09:00",
          "tree_id": "95b2bce846a55c64a89e430edd5bb15ba5de6df9",
          "url": "https://github.com/planetarium/libplanet/commit/f993944ff20a46e8bbf34dfcf036165c0443cafb"
        },
        "date": 1684157295511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3799625.381443299,
            "unit": "ns",
            "range": "± 409517.5480764796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4043696.6326530613,
            "unit": "ns",
            "range": "± 366429.91489684215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5515430.22,
            "unit": "ns",
            "range": "± 495023.66621204244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5152216.301075269,
            "unit": "ns",
            "range": "± 573478.6847203118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9090008.368421054,
            "unit": "ns",
            "range": "± 637794.5765646138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388455.27956989245,
            "unit": "ns",
            "range": "± 52872.005521613355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353840.36,
            "unit": "ns",
            "range": "± 58938.47152246519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296023.612244898,
            "unit": "ns",
            "range": "± 47259.85196010875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5289184.625,
            "unit": "ns",
            "range": "± 558382.0893100133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4777494.816326531,
            "unit": "ns",
            "range": "± 388577.6397263831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30618.5,
            "unit": "ns",
            "range": "± 10661.383090725916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111586.95698924731,
            "unit": "ns",
            "range": "± 21285.095881714562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118971.25,
            "unit": "ns",
            "range": "± 24163.263915552296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139418.01030927835,
            "unit": "ns",
            "range": "± 24667.792932407687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12596.02,
            "unit": "ns",
            "range": "± 8585.625417974967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30704.141414141413,
            "unit": "ns",
            "range": "± 10847.948697287506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7100029.167877907,
            "unit": "ns",
            "range": "± 260268.0889704625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2376927.4294084823,
            "unit": "ns",
            "range": "± 67297.83387071526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1688677.8682105655,
            "unit": "ns",
            "range": "± 38354.18732310247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3065928.472395833,
            "unit": "ns",
            "range": "± 50478.11263729871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048580.5546875,
            "unit": "ns",
            "range": "± 31200.399709850943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905821.5305447049,
            "unit": "ns",
            "range": "± 17509.764169218928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9281907.793814434,
            "unit": "ns",
            "range": "± 849160.7197686054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25211058.408163264,
            "unit": "ns",
            "range": "± 1849098.4594602373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68266545.96,
            "unit": "ns",
            "range": "± 3436098.7859957903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129802226,
            "unit": "ns",
            "range": "± 6252332.250084139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267403409,
            "unit": "ns",
            "range": "± 11735756.182230143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1751435.4361702127,
            "unit": "ns",
            "range": "± 172184.88745185424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3664609.6326530613,
            "unit": "ns",
            "range": "± 342046.231764986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2780786.688172043,
            "unit": "ns",
            "range": "± 258884.7320633669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7474196.583333333,
            "unit": "ns",
            "range": "± 678846.2072143425"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76018.23157894737,
            "unit": "ns",
            "range": "± 21365.4288903641"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "c6244e68eb6a975411eef63d837338b8b5188fa6",
          "message": "feat(tx): Add support for gas limit and max gas price in transaction metadata\n\nThis commit adds support for encoding and decoding the `gasLimit` and `maxGasPrice` fields in transaction metadata. The `gasLimit` field is represented using a `bigint` while the `maxGasPrice` field is represented by a `FungibleAssetValue` object.\n\nAdditionally, some helper functions have been added to the `assets.ts` file to support encoding a `FungibleAssetValue` object.\n\nNo breaking changes have been introduced.",
          "timestamp": "2023-05-15T22:32:41+09:00",
          "tree_id": "cfab06bf6dbf36305a29a343e53397c9a4d43499",
          "url": "https://github.com/planetarium/libplanet/commit/c6244e68eb6a975411eef63d837338b8b5188fa6"
        },
        "date": 1684158740040,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264278.1875,
            "unit": "ns",
            "range": "± 58421.39084070577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3530344.6666666665,
            "unit": "ns",
            "range": "± 60534.471596965384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4280434.230769231,
            "unit": "ns",
            "range": "± 36984.81384783456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4329893.75,
            "unit": "ns",
            "range": "± 156748.22240296495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6857466.6,
            "unit": "ns",
            "range": "± 184998.40104278253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287417.829787234,
            "unit": "ns",
            "range": "± 11182.79705292551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281525.9090909091,
            "unit": "ns",
            "range": "± 10453.89112337843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256951.49180327868,
            "unit": "ns",
            "range": "± 11562.649426238711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4277318.733333333,
            "unit": "ns",
            "range": "± 25930.08808168244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824368.466666667,
            "unit": "ns",
            "range": "± 26561.20294410807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20212.684210526317,
            "unit": "ns",
            "range": "± 2083.738764730756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96376.2,
            "unit": "ns",
            "range": "± 10782.794645342936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89654.26,
            "unit": "ns",
            "range": "± 9227.670625029938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96778.33333333333,
            "unit": "ns",
            "range": "± 12128.429652043227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6472.459183673469,
            "unit": "ns",
            "range": "± 1092.1163996001594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20464.23157894737,
            "unit": "ns",
            "range": "± 1881.4827247872918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5881248.8265625,
            "unit": "ns",
            "range": "± 15629.50311508335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860122.9939903845,
            "unit": "ns",
            "range": "± 1244.7213143873214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366926.3597935268,
            "unit": "ns",
            "range": "± 567.7960836354262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546915.96328125,
            "unit": "ns",
            "range": "± 2146.0587856364677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807754.655078125,
            "unit": "ns",
            "range": "± 592.0020554454849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742775.3563755581,
            "unit": "ns",
            "range": "± 487.6953999340092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7683341.933333334,
            "unit": "ns",
            "range": "± 53873.68151580758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19585249.2,
            "unit": "ns",
            "range": "± 101299.12307842128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50345451.333333336,
            "unit": "ns",
            "range": "± 173638.84411603407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100965351.85714285,
            "unit": "ns",
            "range": "± 335533.1157263839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201599998.46666667,
            "unit": "ns",
            "range": "± 803911.5706780963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1368597.5063291139,
            "unit": "ns",
            "range": "± 69123.82329760706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2635651.962962963,
            "unit": "ns",
            "range": "± 68520.00882082742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2226458.3958333335,
            "unit": "ns",
            "range": "± 131439.6685331118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5347630.487179487,
            "unit": "ns",
            "range": "± 186502.9188329335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51084.53125,
            "unit": "ns",
            "range": "± 4807.695852436952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5e352895d98c7089c05550832d123dcaa496cb06",
          "message": "temp",
          "timestamp": "2023-05-15T23:39:48+09:00",
          "tree_id": "c81d518fd0a017ac8b033861933a6ca06dd48cff",
          "url": "https://github.com/planetarium/libplanet/commit/5e352895d98c7089c05550832d123dcaa496cb06"
        },
        "date": 1684162405916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3327592.15,
            "unit": "ns",
            "range": "± 61934.60309261272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3443121.5,
            "unit": "ns",
            "range": "± 102876.03484467152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4319483,
            "unit": "ns",
            "range": "± 66073.43364447945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4372246.2,
            "unit": "ns",
            "range": "± 52395.022585574465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6891403.2727272725,
            "unit": "ns",
            "range": "± 146042.7413866626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290673.6712328767,
            "unit": "ns",
            "range": "± 13836.537689167195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277143.88679245283,
            "unit": "ns",
            "range": "± 11397.291712137274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257413.11842105264,
            "unit": "ns",
            "range": "± 13047.600687704597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4310683.533333333,
            "unit": "ns",
            "range": "± 36290.94314577018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3982725.2,
            "unit": "ns",
            "range": "± 44201.2608016688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19116.043010752688,
            "unit": "ns",
            "range": "± 1525.9660939447829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91120.98979591837,
            "unit": "ns",
            "range": "± 8022.038244600493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81357.71428571429,
            "unit": "ns",
            "range": "± 7781.373617905987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94652.45360824742,
            "unit": "ns",
            "range": "± 12776.446541570005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6137.724489795918,
            "unit": "ns",
            "range": "± 1089.9935475134114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18765.136842105265,
            "unit": "ns",
            "range": "± 1675.2698900413875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6029758.6484375,
            "unit": "ns",
            "range": "± 33336.351135828074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952237.6807291666,
            "unit": "ns",
            "range": "± 2787.7234724403484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347478.2588541666,
            "unit": "ns",
            "range": "± 610.0038208075165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570083.759014423,
            "unit": "ns",
            "range": "± 1906.911981635684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812200.2582682292,
            "unit": "ns",
            "range": "± 1060.5642205032711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744501.4420340402,
            "unit": "ns",
            "range": "± 583.8758949932181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7736097.733333333,
            "unit": "ns",
            "range": "± 79677.34045015261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19661008.933333334,
            "unit": "ns",
            "range": "± 96380.51477900844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50096603.461538464,
            "unit": "ns",
            "range": "± 151917.53514468268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101199200.76923077,
            "unit": "ns",
            "range": "± 674802.4843267292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202746677.6,
            "unit": "ns",
            "range": "± 1223541.5909721605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376683.6129032257,
            "unit": "ns",
            "range": "± 101970.48693415002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2591231.933333333,
            "unit": "ns",
            "range": "± 45702.04165721806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2238180.684782609,
            "unit": "ns",
            "range": "± 133007.8272915231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5407069.19047619,
            "unit": "ns",
            "range": "± 119389.46972183896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50000.755319148935,
            "unit": "ns",
            "range": "± 4407.435525022398"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "3b71f497ebd3178d7c2bc1980cc3b786f397d35a",
          "message": "temp",
          "timestamp": "2023-05-16T10:59:19+09:00",
          "tree_id": "c81d518fd0a017ac8b033861933a6ca06dd48cff",
          "url": "https://github.com/planetarium/libplanet/commit/3b71f497ebd3178d7c2bc1980cc3b786f397d35a"
        },
        "date": 1684203132378,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3224054.466666667,
            "unit": "ns",
            "range": "± 94533.04327888644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3343139.533333333,
            "unit": "ns",
            "range": "± 48868.742870010865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4188008.76,
            "unit": "ns",
            "range": "± 110206.4493572858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4118736.345454545,
            "unit": "ns",
            "range": "± 173268.17482608752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6659285.6,
            "unit": "ns",
            "range": "± 128486.41102647065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278740.6060606061,
            "unit": "ns",
            "range": "± 8815.977508689102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261290.58333333334,
            "unit": "ns",
            "range": "± 2817.5384310788136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233520,
            "unit": "ns",
            "range": "± 5108.676834562938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4206762.333333333,
            "unit": "ns",
            "range": "± 34491.39375402562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830556.214285714,
            "unit": "ns",
            "range": "± 23163.01860618666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16318.258064516129,
            "unit": "ns",
            "range": "± 1124.6236075975721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83886,
            "unit": "ns",
            "range": "± 3943.4145454064396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72399.71428571429,
            "unit": "ns",
            "range": "± 2008.922741672905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79670.36,
            "unit": "ns",
            "range": "± 4027.0805153059414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4371.244680851064,
            "unit": "ns",
            "range": "± 538.521246596565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16074.425531914894,
            "unit": "ns",
            "range": "± 1299.7829553252402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6168592.566666666,
            "unit": "ns",
            "range": "± 17555.658502343103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819836.2308872768,
            "unit": "ns",
            "range": "± 2668.5339213186153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358898.9932291666,
            "unit": "ns",
            "range": "± 805.5423641313223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580157.53359375,
            "unit": "ns",
            "range": "± 1576.4902577441967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796082.3712239583,
            "unit": "ns",
            "range": "± 666.2079320659786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729828.7526506697,
            "unit": "ns",
            "range": "± 759.2330044338638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7591954.6,
            "unit": "ns",
            "range": "± 89000.96619202672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19346662.733333334,
            "unit": "ns",
            "range": "± 234500.2852186711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49472092.666666664,
            "unit": "ns",
            "range": "± 387125.9461942709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99321077.2,
            "unit": "ns",
            "range": "± 642431.6545435786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198256969.6,
            "unit": "ns",
            "range": "± 1601791.7494112113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1409149.7857142857,
            "unit": "ns",
            "range": "± 89604.75663290576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2597710.4,
            "unit": "ns",
            "range": "± 58368.57729112021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196165.4505494507,
            "unit": "ns",
            "range": "± 119893.09447700702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5388913.8301886795,
            "unit": "ns",
            "range": "± 221704.5161741824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46804.31460674157,
            "unit": "ns",
            "range": "± 2568.4416906131373"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f05b96465410478afc7754ef48bf600c8bea1b56",
          "message": "temp",
          "timestamp": "2023-05-16T11:00:12+09:00",
          "tree_id": "a2a79cfb4a44a1e01fe91ffe47e80432fd778521",
          "url": "https://github.com/planetarium/libplanet/commit/f05b96465410478afc7754ef48bf600c8bea1b56"
        },
        "date": 1684203279077,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3761937.4615384615,
            "unit": "ns",
            "range": "± 35594.22174224206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3785441.214285714,
            "unit": "ns",
            "range": "± 62048.22566133362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4418504.176470588,
            "unit": "ns",
            "range": "± 86407.47639038194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4708900.857142857,
            "unit": "ns",
            "range": "± 151144.7554456134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7138123.238095238,
            "unit": "ns",
            "range": "± 167902.09604674528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299517.69444444444,
            "unit": "ns",
            "range": "± 9979.279816040103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294899.32558139536,
            "unit": "ns",
            "range": "± 10923.156156316836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248522.5744680851,
            "unit": "ns",
            "range": "± 9630.103739440061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4410889.933333334,
            "unit": "ns",
            "range": "± 61275.627337776765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3989140.230769231,
            "unit": "ns",
            "range": "± 35817.54287392759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22378.159574468085,
            "unit": "ns",
            "range": "± 1901.7094986545487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108356.1,
            "unit": "ns",
            "range": "± 9860.049259716727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100788.11111111111,
            "unit": "ns",
            "range": "± 8346.088861463597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109168.35227272728,
            "unit": "ns",
            "range": "± 8119.167620605515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7078.260416666667,
            "unit": "ns",
            "range": "± 953.2340657471686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23257.75,
            "unit": "ns",
            "range": "± 1996.605746075864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6032339.357142857,
            "unit": "ns",
            "range": "± 31472.77083703524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883433.5602463942,
            "unit": "ns",
            "range": "± 2042.4941409320513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362907.3682291666,
            "unit": "ns",
            "range": "± 2641.012318865764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634608.6891741073,
            "unit": "ns",
            "range": "± 2478.8996486430688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835380.9606770833,
            "unit": "ns",
            "range": "± 393.60282974487046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757553.5278695914,
            "unit": "ns",
            "range": "± 183.7391341790301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8452984.19047619,
            "unit": "ns",
            "range": "± 191755.53659506654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22251555.2,
            "unit": "ns",
            "range": "± 162390.5908196126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55823534.85714286,
            "unit": "ns",
            "range": "± 275364.87600436824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111531661.53333333,
            "unit": "ns",
            "range": "± 486961.1893121121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222560049.16666666,
            "unit": "ns",
            "range": "± 368690.7385657409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1476834.9896907217,
            "unit": "ns",
            "range": "± 89131.35680795494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2731498.777777778,
            "unit": "ns",
            "range": "± 89020.28222765902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2382424.1842105263,
            "unit": "ns",
            "range": "± 115587.85105649706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5872104.814285714,
            "unit": "ns",
            "range": "± 283947.60187065403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54350.62365591398,
            "unit": "ns",
            "range": "± 4570.388630878166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "25d6148d4f0c008a025d3adc6b43a7b283559b8d",
          "message": "temp",
          "timestamp": "2023-05-16T11:06:39+09:00",
          "tree_id": "ded0a2f16c988061a7c74e1a5b0181d6e7c21070",
          "url": "https://github.com/planetarium/libplanet/commit/25d6148d4f0c008a025d3adc6b43a7b283559b8d"
        },
        "date": 1684203593680,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3436331.1794871795,
            "unit": "ns",
            "range": "± 119576.01203613932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3581392.5454545454,
            "unit": "ns",
            "range": "± 83985.62500850526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4368242.578947368,
            "unit": "ns",
            "range": "± 94701.19442184443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4551787.5,
            "unit": "ns",
            "range": "± 67149.6570021024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6960852.4,
            "unit": "ns",
            "range": "± 92892.57457315181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291945.02222222224,
            "unit": "ns",
            "range": "± 11069.002292415289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271713.57692307694,
            "unit": "ns",
            "range": "± 10535.752569686378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236105.5,
            "unit": "ns",
            "range": "± 4131.898590422865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4277513.230769231,
            "unit": "ns",
            "range": "± 18209.444898888076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920654,
            "unit": "ns",
            "range": "± 39374.611452051184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18704.03092783505,
            "unit": "ns",
            "range": "± 1731.7537862285267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89111.55555555556,
            "unit": "ns",
            "range": "± 7909.2058455053475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75904.52459016393,
            "unit": "ns",
            "range": "± 3413.7993868345443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85599.44565217392,
            "unit": "ns",
            "range": "± 9302.246817525145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4249.979166666667,
            "unit": "ns",
            "range": "± 673.5577336903164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16778.252631578947,
            "unit": "ns",
            "range": "± 1682.1572583683428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5962573.984375,
            "unit": "ns",
            "range": "± 30433.572462649634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891689.9520833334,
            "unit": "ns",
            "range": "± 5383.275610499538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347030.1068209135,
            "unit": "ns",
            "range": "± 410.60000287801273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587231.3342633927,
            "unit": "ns",
            "range": "± 3734.0387189314615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801378.1002854567,
            "unit": "ns",
            "range": "± 463.94078463481236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726898.1259014423,
            "unit": "ns",
            "range": "± 788.604316991281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7787804.133333334,
            "unit": "ns",
            "range": "± 87832.47244032785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19456475.533333335,
            "unit": "ns",
            "range": "± 157074.5901906237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50387253.85714286,
            "unit": "ns",
            "range": "± 312071.0827361803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101272420.23076923,
            "unit": "ns",
            "range": "± 371870.1763427558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209527370,
            "unit": "ns",
            "range": "± 2966133.15193459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1348753.606060606,
            "unit": "ns",
            "range": "± 88920.84540825474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2576148.272727273,
            "unit": "ns",
            "range": "± 79554.16776883563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139153.8333333335,
            "unit": "ns",
            "range": "± 90879.98586683655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5404298.610169492,
            "unit": "ns",
            "range": "± 235921.99268424304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47684.37362637363,
            "unit": "ns",
            "range": "± 3362.8916150253517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "76cf17ff4ea8dc310210758823136e61f9054a63",
          "message": "temp",
          "timestamp": "2023-05-16T11:48:36+09:00",
          "tree_id": "3fa254aa0f7f198534facc7622794230ffe5f00f",
          "url": "https://github.com/planetarium/libplanet/commit/76cf17ff4ea8dc310210758823136e61f9054a63"
        },
        "date": 1684206517457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4116163.8924731184,
            "unit": "ns",
            "range": "± 267187.2827166556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4169408.114942529,
            "unit": "ns",
            "range": "± 228695.16348082552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5185885.698412699,
            "unit": "ns",
            "range": "± 237167.87073278648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5253359.826530612,
            "unit": "ns",
            "range": "± 395026.8504293662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9279436.663265307,
            "unit": "ns",
            "range": "± 749328.6538000344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384689.3052631579,
            "unit": "ns",
            "range": "± 52075.13618863995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353927.26086956525,
            "unit": "ns",
            "range": "± 40414.38896840382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310099.2947368421,
            "unit": "ns",
            "range": "± 40574.68502122698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5463454.139784946,
            "unit": "ns",
            "range": "± 408083.30592573097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4950107.010869565,
            "unit": "ns",
            "range": "± 310487.66710718034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22718.604166666668,
            "unit": "ns",
            "range": "± 7262.454411095851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100145.23404255319,
            "unit": "ns",
            "range": "± 17903.700618506453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91899.55555555556,
            "unit": "ns",
            "range": "± 19693.557069390783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110891.86170212766,
            "unit": "ns",
            "range": "± 24599.27803801202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5136.95652173913,
            "unit": "ns",
            "range": "± 710.7830987533983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19370.634146341465,
            "unit": "ns",
            "range": "± 2427.9486210531622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8216281.410845588,
            "unit": "ns",
            "range": "± 258575.21502874527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2463140.1376302084,
            "unit": "ns",
            "range": "± 43886.839175472494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1821090.6969401042,
            "unit": "ns",
            "range": "± 46441.07984494636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3434590.7818359374,
            "unit": "ns",
            "range": "± 77046.9111162761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1096947.6776041666,
            "unit": "ns",
            "range": "± 18072.37208729802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1051941.8977481618,
            "unit": "ns",
            "range": "± 21157.047931525012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9606584.449438203,
            "unit": "ns",
            "range": "± 608561.5722909641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26582004.82828283,
            "unit": "ns",
            "range": "± 2273730.394111543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67594797.75675675,
            "unit": "ns",
            "range": "± 3378854.086267596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137015531.21505377,
            "unit": "ns",
            "range": "± 7772455.253090159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274462805.3396226,
            "unit": "ns",
            "range": "± 11454846.481511269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675962.319148936,
            "unit": "ns",
            "range": "± 163647.26409076218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3543770.569892473,
            "unit": "ns",
            "range": "± 316523.96606271993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2781288.432989691,
            "unit": "ns",
            "range": "± 268323.4564553071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7517023.427083333,
            "unit": "ns",
            "range": "± 453062.7077927047"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63588.084210526315,
            "unit": "ns",
            "range": "± 13088.976742398389"
          }
        ]
      }
    ]
  }
}