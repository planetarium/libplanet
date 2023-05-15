window.BENCHMARK_DATA = {
  "lastUpdate": 1684158765024,
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
      }
    ]
  }
}