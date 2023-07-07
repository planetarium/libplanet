window.BENCHMARK_DATA = {
  "lastUpdate": 1688720610496,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "16b4aa08a73c34161b9fad4125941d8604d168ad",
          "message": "Add preEvaluationHash field to BlockType",
          "timestamp": "2023-07-07T15:00:48+09:00",
          "tree_id": "0bda7672ae47c4fb07e8a126d8ecec4ceba72fe1",
          "url": "https://github.com/planetarium/libplanet/commit/16b4aa08a73c34161b9fad4125941d8604d168ad"
        },
        "date": 1688710412620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271498.79591836734,
            "unit": "ns",
            "range": "± 10829.20335054629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263913.0606060606,
            "unit": "ns",
            "range": "± 6613.926599132479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229373.6923076923,
            "unit": "ns",
            "range": "± 2650.611733940406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132938.25,
            "unit": "ns",
            "range": "± 15390.23466136297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3759890.9285714286,
            "unit": "ns",
            "range": "± 31074.977552969885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16173,
            "unit": "ns",
            "range": "± 1150.9914444786973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83691.01162790698,
            "unit": "ns",
            "range": "± 4523.812524055829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70561.38888888889,
            "unit": "ns",
            "range": "± 1454.4772717326757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96814.57142857143,
            "unit": "ns",
            "range": "± 12552.115860575843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5508.442105263158,
            "unit": "ns",
            "range": "± 603.4777881260238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20248.956521739132,
            "unit": "ns",
            "range": "± 1437.2681038986677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323396.2625,
            "unit": "ns",
            "range": "± 65401.48323246322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2550142.6666666665,
            "unit": "ns",
            "range": "± 65943.89525931126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2088085.1547619049,
            "unit": "ns",
            "range": "± 111807.17065366679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5106229.066666666,
            "unit": "ns",
            "range": "± 152529.9239129554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6100372.063616072,
            "unit": "ns",
            "range": "± 22223.61672338473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914387.6450892857,
            "unit": "ns",
            "range": "± 4768.909937490668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387833.5958333334,
            "unit": "ns",
            "range": "± 1940.4721602315487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572511.6709735575,
            "unit": "ns",
            "range": "± 2855.2283999407705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819171.6998465402,
            "unit": "ns",
            "range": "± 407.6041748089162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728353.2859375,
            "unit": "ns",
            "range": "± 487.10491968454505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3201860.9444444445,
            "unit": "ns",
            "range": "± 61899.94673709789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423430.06122449,
            "unit": "ns",
            "range": "± 136564.40400951976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4154594.2666666666,
            "unit": "ns",
            "range": "± 42519.84508348789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4116971.6666666665,
            "unit": "ns",
            "range": "± 49814.298437391684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6669092.94117647,
            "unit": "ns",
            "range": "± 90754.1457906129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7555739.333333333,
            "unit": "ns",
            "range": "± 13900.71255453509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19498353.733333334,
            "unit": "ns",
            "range": "± 140135.01453061344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49910271.2,
            "unit": "ns",
            "range": "± 440142.50376135483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99202062.6923077,
            "unit": "ns",
            "range": "± 531361.5498687286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204030978.85714287,
            "unit": "ns",
            "range": "± 2936370.3232800304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45240.11111111111,
            "unit": "ns",
            "range": "± 2677.65998984626"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "4b03a2c3b9a0cec0213d3552868c5dacaa04105c",
          "message": "Remove unused using",
          "timestamp": "2023-07-07T15:01:46+09:00",
          "tree_id": "9bac88ba713d96d76306b1cfb700e32e50c08e00",
          "url": "https://github.com/planetarium/libplanet/commit/4b03a2c3b9a0cec0213d3552868c5dacaa04105c"
        },
        "date": 1688710456030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280093.775,
            "unit": "ns",
            "range": "± 9907.12981150056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274112.76923076925,
            "unit": "ns",
            "range": "± 7323.959597418283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235401.06896551725,
            "unit": "ns",
            "range": "± 5782.603225754164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4307207,
            "unit": "ns",
            "range": "± 52908.49787942522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3964804.214285714,
            "unit": "ns",
            "range": "± 26629.97406965597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18070.84375,
            "unit": "ns",
            "range": "± 1941.7653569998454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86112.79166666667,
            "unit": "ns",
            "range": "± 2656.1761025181772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71108.5,
            "unit": "ns",
            "range": "± 1090.0931986844894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86880.68041237113,
            "unit": "ns",
            "range": "± 10979.79328750697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4463.462365591397,
            "unit": "ns",
            "range": "± 484.710212824201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16179.893617021276,
            "unit": "ns",
            "range": "± 1261.513039905372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375674.8736842105,
            "unit": "ns",
            "range": "± 105734.69698623584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2589540.487179487,
            "unit": "ns",
            "range": "± 84762.42098013898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150345.6621621624,
            "unit": "ns",
            "range": "± 95667.31087089186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5235748.111111111,
            "unit": "ns",
            "range": "± 141274.84908839475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6048219.036458333,
            "unit": "ns",
            "range": "± 21508.26301189459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936229.6875,
            "unit": "ns",
            "range": "± 2112.3625795943785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355695.9732142857,
            "unit": "ns",
            "range": "± 379.87756948875693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552969.57265625,
            "unit": "ns",
            "range": "± 1648.4561035401084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816277.8507161458,
            "unit": "ns",
            "range": "± 636.7080111080119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740679.6626674107,
            "unit": "ns",
            "range": "± 378.44170504897704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231727.1333333333,
            "unit": "ns",
            "range": "± 32728.653911184545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3427431.4166666665,
            "unit": "ns",
            "range": "± 80577.93557625986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4290865,
            "unit": "ns",
            "range": "± 78407.84293496593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4316172.25,
            "unit": "ns",
            "range": "± 127205.17823909021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6786020.333333333,
            "unit": "ns",
            "range": "± 157944.36256806803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7711333.071428572,
            "unit": "ns",
            "range": "± 14013.565957337887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19615777.6,
            "unit": "ns",
            "range": "± 125168.67025612164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50466568.333333336,
            "unit": "ns",
            "range": "± 233686.03329610152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101138674.6,
            "unit": "ns",
            "range": "± 1079482.3450788015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203872510.4,
            "unit": "ns",
            "range": "± 1230009.4474990135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46700.22619047619,
            "unit": "ns",
            "range": "± 2503.8476769135364"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "f6abe65a3231448c9ab61a23e7eb63932210c01f",
          "message": "Fix temp description",
          "timestamp": "2023-07-07T15:05:43+09:00",
          "tree_id": "9a9a49f5658176777a6afc0989df1ce0dfc944b3",
          "url": "https://github.com/planetarium/libplanet/commit/f6abe65a3231448c9ab61a23e7eb63932210c01f"
        },
        "date": 1688710723689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292581.125,
            "unit": "ns",
            "range": "± 11479.535264937173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266814.21428571426,
            "unit": "ns",
            "range": "± 6620.178314467362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242934.51020408163,
            "unit": "ns",
            "range": "± 9600.82250409318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4214555.357142857,
            "unit": "ns",
            "range": "± 27977.85105457294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3891131.533333333,
            "unit": "ns",
            "range": "± 45684.15662828959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18636.956521739132,
            "unit": "ns",
            "range": "± 1305.1644998678294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86101.23076923077,
            "unit": "ns",
            "range": "± 4410.03178397439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75282.35294117648,
            "unit": "ns",
            "range": "± 2369.1797056615105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88226.85074626865,
            "unit": "ns",
            "range": "± 3869.846321644229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4936.082474226804,
            "unit": "ns",
            "range": "± 574.6712043657207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18952.621052631577,
            "unit": "ns",
            "range": "± 1471.9206889114946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391740.606060606,
            "unit": "ns",
            "range": "± 98453.42179787646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2665327.64516129,
            "unit": "ns",
            "range": "± 78813.52907868395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2219453.189873418,
            "unit": "ns",
            "range": "± 99774.91922091648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5378306.242424242,
            "unit": "ns",
            "range": "± 140896.02005846152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6233702.571354167,
            "unit": "ns",
            "range": "± 17593.881131414622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871627.7493990385,
            "unit": "ns",
            "range": "± 1626.5671775074663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378303.716015625,
            "unit": "ns",
            "range": "± 688.1293921583473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564880.103385417,
            "unit": "ns",
            "range": "± 4966.883494813506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833997.0761067708,
            "unit": "ns",
            "range": "± 988.2810183922309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759924.187639509,
            "unit": "ns",
            "range": "± 1417.9806232023418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372242.1333333333,
            "unit": "ns",
            "range": "± 40881.96467159478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3483452.2,
            "unit": "ns",
            "range": "± 97823.42986689917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4298162.5,
            "unit": "ns",
            "range": "± 48015.075965383396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4492484.571428572,
            "unit": "ns",
            "range": "± 75160.07792982642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6930793.696969697,
            "unit": "ns",
            "range": "± 204959.3849503306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7995969.666666667,
            "unit": "ns",
            "range": "± 49373.69484953742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20164164.4,
            "unit": "ns",
            "range": "± 57576.25613517135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51803090.666666664,
            "unit": "ns",
            "range": "± 237171.04081282372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103269448.86666666,
            "unit": "ns",
            "range": "± 381983.30459437374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207125462.06666666,
            "unit": "ns",
            "range": "± 753966.9857447783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46138.04347826087,
            "unit": "ns",
            "range": "± 2505.9859059312826"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "25446122a78d2ef1cae0a1b4318910cfc99602fb",
          "message": "Changelog",
          "timestamp": "2023-07-07T15:39:42+09:00",
          "tree_id": "668234520b2c9d9535169db861b8bda977b011e1",
          "url": "https://github.com/planetarium/libplanet/commit/25446122a78d2ef1cae0a1b4318910cfc99602fb"
        },
        "date": 1688712822952,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300427.43902439025,
            "unit": "ns",
            "range": "± 9961.88683947168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289505.4054054054,
            "unit": "ns",
            "range": "± 9311.121797970243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258314.6862745098,
            "unit": "ns",
            "range": "± 10422.35944974111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4607034,
            "unit": "ns",
            "range": "± 68694.02369826027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4188245.933333333,
            "unit": "ns",
            "range": "± 59688.05361504412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20611.936842105264,
            "unit": "ns",
            "range": "± 1811.6017880654229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97913.36842105263,
            "unit": "ns",
            "range": "± 6294.987318616722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84346.38541666667,
            "unit": "ns",
            "range": "± 6254.076660142804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103031.61855670103,
            "unit": "ns",
            "range": "± 13949.500195977229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6887.928571428572,
            "unit": "ns",
            "range": "± 1041.8517243177735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21950.3125,
            "unit": "ns",
            "range": "± 1172.1597354505027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567191.806122449,
            "unit": "ns",
            "range": "± 95231.32044535635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2973226.8,
            "unit": "ns",
            "range": "± 88117.58380490125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2433094.7666666666,
            "unit": "ns",
            "range": "± 102629.01390806229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5799546.9,
            "unit": "ns",
            "range": "± 131809.31042624457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6108278.313541667,
            "unit": "ns",
            "range": "± 31069.35826638079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912884.232700893,
            "unit": "ns",
            "range": "± 2269.2739486349187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390206.391015625,
            "unit": "ns",
            "range": "± 2428.4427089819883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2751788.2765625,
            "unit": "ns",
            "range": "± 28654.95708937742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850179.9975260417,
            "unit": "ns",
            "range": "± 575.8466094775812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778889.3042317708,
            "unit": "ns",
            "range": "± 418.8301325807924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3750826.3333333335,
            "unit": "ns",
            "range": "± 39511.58745190703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3893884.4482758623,
            "unit": "ns",
            "range": "± 113680.25156319124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4659667.8,
            "unit": "ns",
            "range": "± 132471.8507916513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4850180.714285715,
            "unit": "ns",
            "range": "± 66797.02336001389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7617776.416666667,
            "unit": "ns",
            "range": "± 238146.64281420928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8779369.933333334,
            "unit": "ns",
            "range": "± 108015.39339138306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23064876.266666666,
            "unit": "ns",
            "range": "± 307192.83266412566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57089441.6,
            "unit": "ns",
            "range": "± 725173.785674638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113559898.2,
            "unit": "ns",
            "range": "± 1780521.0597234173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229750252.2142857,
            "unit": "ns",
            "range": "± 1326974.9054021724"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47467.931818181816,
            "unit": "ns",
            "range": "± 2643.641227138535"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99e92387c0d3d3da5d1d023d5b4c51e06047ba1d",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-07T16:02:04+09:00",
          "tree_id": "190ab4d57c02bd1a48746975f3a726ba096e15c7",
          "url": "https://github.com/planetarium/libplanet/commit/99e92387c0d3d3da5d1d023d5b4c51e06047ba1d"
        },
        "date": 1688714086127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282137.2631578947,
            "unit": "ns",
            "range": "± 9708.919756996407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265144.47222222225,
            "unit": "ns",
            "range": "± 7139.531487174015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236000.38461538462,
            "unit": "ns",
            "range": "± 5371.217627889773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4256429.785714285,
            "unit": "ns",
            "range": "± 38833.999051542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3776583.9285714286,
            "unit": "ns",
            "range": "± 23051.210568792547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17883.5,
            "unit": "ns",
            "range": "± 1285.316344431657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82596.8,
            "unit": "ns",
            "range": "± 4323.65566551316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70593.66666666667,
            "unit": "ns",
            "range": "± 1477.00197140336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86354.82653061225,
            "unit": "ns",
            "range": "± 10453.082033569142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4656.3877551020405,
            "unit": "ns",
            "range": "± 659.4876742031167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15361.505494505494,
            "unit": "ns",
            "range": "± 1180.9358941452265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384884.383838384,
            "unit": "ns",
            "range": "± 97980.22651938473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2561458.1666666665,
            "unit": "ns",
            "range": "± 83515.98576029792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1829228.61,
            "unit": "ns",
            "range": "± 109804.11194485331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4813550.392857143,
            "unit": "ns",
            "range": "± 135732.82122456856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6241433.932091346,
            "unit": "ns",
            "range": "± 27381.023012609578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912233.3748697916,
            "unit": "ns",
            "range": "± 6696.432372318247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347860.773158482,
            "unit": "ns",
            "range": "± 3079.434114349022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594341.5432477677,
            "unit": "ns",
            "range": "± 6879.775932074758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805707.7001201923,
            "unit": "ns",
            "range": "± 645.1371474672379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752035.9380859375,
            "unit": "ns",
            "range": "± 363.2642635839168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3227422.5,
            "unit": "ns",
            "range": "± 65909.03107257704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3372218.3333333335,
            "unit": "ns",
            "range": "± 59904.20075499913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4196139.642857143,
            "unit": "ns",
            "range": "± 37917.263934087496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3667254.9324324327,
            "unit": "ns",
            "range": "± 116523.86283660254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6237158.777777778,
            "unit": "ns",
            "range": "± 130241.20691626953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7634894.071428572,
            "unit": "ns",
            "range": "± 30670.349902607104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20429532.4,
            "unit": "ns",
            "range": "± 197919.4472783598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49749771.4,
            "unit": "ns",
            "range": "± 222651.66099691624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99297781.06666666,
            "unit": "ns",
            "range": "± 1368073.8151628403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199205589.4,
            "unit": "ns",
            "range": "± 1812299.5746207868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46569.489130434784,
            "unit": "ns",
            "range": "± 2888.8569605195225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57557949aa623e9cadc21ca71db515d8b616eacb",
          "message": "Update CHANGES.md",
          "timestamp": "2023-07-07T16:10:43+09:00",
          "tree_id": "c05701aca8ee1715a6a3a0ef563cbccbbdcd37fb",
          "url": "https://github.com/planetarium/libplanet/commit/57557949aa623e9cadc21ca71db515d8b616eacb"
        },
        "date": 1688714900613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333247.94845360826,
            "unit": "ns",
            "range": "± 55412.60605211506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297157.35869565216,
            "unit": "ns",
            "range": "± 35077.47165465479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254325.7311827957,
            "unit": "ns",
            "range": "± 30656.473227397975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4384248.93,
            "unit": "ns",
            "range": "± 468928.0466136075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933449.915789474,
            "unit": "ns",
            "range": "± 315889.6408700578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26354.09,
            "unit": "ns",
            "range": "± 9373.376026989059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101517.79166666667,
            "unit": "ns",
            "range": "± 18582.144802792005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97499.21875,
            "unit": "ns",
            "range": "± 20636.868786969404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116033.0306122449,
            "unit": "ns",
            "range": "± 30509.602969723932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4612.941176470588,
            "unit": "ns",
            "range": "± 778.5499701511835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27276.03,
            "unit": "ns",
            "range": "± 11547.18669961902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1465950.4848484849,
            "unit": "ns",
            "range": "± 224995.34236477906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2818230.2346938774,
            "unit": "ns",
            "range": "± 346254.0699706998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1997246.9285714286,
            "unit": "ns",
            "range": "± 337027.4701379895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6196639.797979798,
            "unit": "ns",
            "range": "± 736691.7898522237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6319040.346011513,
            "unit": "ns",
            "range": "± 217314.09827927485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2027353.165226064,
            "unit": "ns",
            "range": "± 78291.99385902943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1462667.7979125977,
            "unit": "ns",
            "range": "± 44048.447431131084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2701270.664434524,
            "unit": "ns",
            "range": "± 63183.805090000365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 902825.3020751954,
            "unit": "ns",
            "range": "± 31941.770119723555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 842025.0791852679,
            "unit": "ns",
            "range": "± 27071.633076769984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3429069.4285714286,
            "unit": "ns",
            "range": "± 367074.69406662055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3451968.163265306,
            "unit": "ns",
            "range": "± 344006.94766331813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536406.854166667,
            "unit": "ns",
            "range": "± 488197.80419554014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4041796.0707070706,
            "unit": "ns",
            "range": "± 441599.0003827291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7659063.262626262,
            "unit": "ns",
            "range": "± 852200.5038467919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8310281.904255319,
            "unit": "ns",
            "range": "± 782735.7808710195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20420100.540816326,
            "unit": "ns",
            "range": "± 2191354.6392320474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54859860.10204082,
            "unit": "ns",
            "range": "± 3979057.1447952017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108788723.21428572,
            "unit": "ns",
            "range": "± 7419103.574701296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220100307.70833334,
            "unit": "ns",
            "range": "± 10756224.824724315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64118.510204081635,
            "unit": "ns",
            "range": "± 17842.7451647822"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbd7b93e3217c097f9b691f044b7e3cdb2031e0d",
          "message": "Update CHANGES.md\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-07T16:55:53+09:00",
          "tree_id": "8dadd36e29b0bb0ebf59968212a4f1eff612f1f8",
          "url": "https://github.com/planetarium/libplanet/commit/dbd7b93e3217c097f9b691f044b7e3cdb2031e0d"
        },
        "date": 1688717388816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303275.1891891892,
            "unit": "ns",
            "range": "± 9026.496803663453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289951.38636363635,
            "unit": "ns",
            "range": "± 10849.47840824491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256048.53125,
            "unit": "ns",
            "range": "± 11726.761532100581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4641358.357142857,
            "unit": "ns",
            "range": "± 40413.24004791412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4175993,
            "unit": "ns",
            "range": "± 20191.679935443328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21705.326315789473,
            "unit": "ns",
            "range": "± 2257.4324496484155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102325.01052631579,
            "unit": "ns",
            "range": "± 6297.585025981188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82338.25,
            "unit": "ns",
            "range": "± 3743.8737514326876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101794.9587628866,
            "unit": "ns",
            "range": "± 12072.269823267776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5915.3877551020405,
            "unit": "ns",
            "range": "± 859.3716432905009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20640.168421052633,
            "unit": "ns",
            "range": "± 1874.5210262132475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1572833.7,
            "unit": "ns",
            "range": "± 105865.38718747278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957302.7419354836,
            "unit": "ns",
            "range": "± 87248.92715671551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1999485.2765957448,
            "unit": "ns",
            "range": "± 111024.05773402953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5313804.666666667,
            "unit": "ns",
            "range": "± 145125.55168304336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6177830.068638393,
            "unit": "ns",
            "range": "± 19660.47099447045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928355.0948660714,
            "unit": "ns",
            "range": "± 980.096776603909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405189.5981069712,
            "unit": "ns",
            "range": "± 3178.3694762496643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627651.1259014425,
            "unit": "ns",
            "range": "± 2085.9583090051533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876437.2603934152,
            "unit": "ns",
            "range": "± 1956.457325619276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793064.0212053572,
            "unit": "ns",
            "range": "± 429.5442267060885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3771613.9583333335,
            "unit": "ns",
            "range": "± 94917.25687166516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4090691.933333333,
            "unit": "ns",
            "range": "± 50674.80042453711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4689709.153846154,
            "unit": "ns",
            "range": "± 51696.141283862045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4327472.5,
            "unit": "ns",
            "range": "± 70278.40166602233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7024903.764705882,
            "unit": "ns",
            "range": "± 135538.10172675125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8405369.611111112,
            "unit": "ns",
            "range": "± 174536.11765515467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24383463.333333332,
            "unit": "ns",
            "range": "± 258023.23713729644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57775375.333333336,
            "unit": "ns",
            "range": "± 247113.1139246232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116481149.15384616,
            "unit": "ns",
            "range": "± 593817.2141012538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231948389.46666667,
            "unit": "ns",
            "range": "± 406318.3611845461"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48398.39361702128,
            "unit": "ns",
            "range": "± 3590.6281932127567"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "50f1e74d0270105d2f9cb5107a2a1152ae149490",
          "message": "Changelog",
          "timestamp": "2023-07-07T16:58:07+09:00",
          "tree_id": "650bf13dc78942724a855e7756ff220182351046",
          "url": "https://github.com/planetarium/libplanet/commit/50f1e74d0270105d2f9cb5107a2a1152ae149490"
        },
        "date": 1688717674631,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345933.5142857143,
            "unit": "ns",
            "range": "± 11262.543000822601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333192.0602409639,
            "unit": "ns",
            "range": "± 17687.49421397778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298401.4166666667,
            "unit": "ns",
            "range": "± 9928.566529752132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5537872.066666666,
            "unit": "ns",
            "range": "± 63437.35948101725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5113599.466666667,
            "unit": "ns",
            "range": "± 90948.89920158985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23540.129032258064,
            "unit": "ns",
            "range": "± 2113.5537517249413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106883.64210526316,
            "unit": "ns",
            "range": "± 6094.694438286519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95649.21428571429,
            "unit": "ns",
            "range": "± 6968.213849515337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115021.1237113402,
            "unit": "ns",
            "range": "± 14077.506353412504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6390.79381443299,
            "unit": "ns",
            "range": "± 801.4335195207024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22584.71875,
            "unit": "ns",
            "range": "± 1970.0200784609972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797243.619047619,
            "unit": "ns",
            "range": "± 95688.79863628521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3448065.448979592,
            "unit": "ns",
            "range": "± 135533.70372408928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2345534.712121212,
            "unit": "ns",
            "range": "± 150202.9237541376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6860180.538461538,
            "unit": "ns",
            "range": "± 501943.3539176907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7144250.751674107,
            "unit": "ns",
            "range": "± 77392.37029007911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2266882.6575520835,
            "unit": "ns",
            "range": "± 18905.574718143667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1626691.8763020833,
            "unit": "ns",
            "range": "± 14162.488278089222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3019833.2078125,
            "unit": "ns",
            "range": "± 52032.08706258362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 966956.4531860352,
            "unit": "ns",
            "range": "± 17970.13365604836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905470.0694661458,
            "unit": "ns",
            "range": "± 6042.174461549437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4415714,
            "unit": "ns",
            "range": "± 72124.33075599384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4514168.297297297,
            "unit": "ns",
            "range": "± 148072.29367925972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5590577.136363637,
            "unit": "ns",
            "range": "± 206636.30424892763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5006168.09375,
            "unit": "ns",
            "range": "± 155830.32483635473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8097222.814814814,
            "unit": "ns",
            "range": "± 216414.42652520564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10032151.363636363,
            "unit": "ns",
            "range": "± 238441.1891065135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28385476.133333333,
            "unit": "ns",
            "range": "± 497644.0548850247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69642146.94117647,
            "unit": "ns",
            "range": "± 1342746.4327950415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133957005.90476191,
            "unit": "ns",
            "range": "± 2812177.2934421455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274270311.4,
            "unit": "ns",
            "range": "± 2087707.3794432224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57699.768421052635,
            "unit": "ns",
            "range": "± 3477.107615724971"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe6fd533d5919657d140a182ba7fd45fa0e599d5",
          "message": "Merge branch 'main' into pre-evaluation-hash-field-on-blocktype",
          "timestamp": "2023-07-07T16:58:35+09:00",
          "tree_id": "19788048610843b39a405e6d772abd301fe67ad7",
          "url": "https://github.com/planetarium/libplanet/commit/fe6fd533d5919657d140a182ba7fd45fa0e599d5"
        },
        "date": 1688717733981,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344151.30666666664,
            "unit": "ns",
            "range": "± 17313.66677010697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332558.75581395347,
            "unit": "ns",
            "range": "± 18102.441876190296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320758.10869565216,
            "unit": "ns",
            "range": "± 22320.888653809187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5266215.071428572,
            "unit": "ns",
            "range": "± 190571.59098654005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4759830.195121951,
            "unit": "ns",
            "range": "± 168177.45573176857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23285.88888888889,
            "unit": "ns",
            "range": "± 7032.860690183501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101323.9587628866,
            "unit": "ns",
            "range": "± 10760.923202260505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105658.32989690722,
            "unit": "ns",
            "range": "± 13305.462343778254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119523.2,
            "unit": "ns",
            "range": "± 17080.62661576659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6618.75,
            "unit": "ns",
            "range": "± 1692.432430451972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21008.214285714286,
            "unit": "ns",
            "range": "± 6030.258403876717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1724845.9680851065,
            "unit": "ns",
            "range": "± 114093.3387217518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3243584.9693877553,
            "unit": "ns",
            "range": "± 191380.4790235611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2267090.28125,
            "unit": "ns",
            "range": "± 171494.62988417316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6525917.969387755,
            "unit": "ns",
            "range": "± 436719.03757198754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7603649.321428572,
            "unit": "ns",
            "range": "± 104751.36935754867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2389885.890625,
            "unit": "ns",
            "range": "± 25382.201333553163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1648346.8863002232,
            "unit": "ns",
            "range": "± 16809.632739697954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3153705.3401227677,
            "unit": "ns",
            "range": "± 51789.62179685982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029203.047265625,
            "unit": "ns",
            "range": "± 12853.845653545724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 964926.9253255208,
            "unit": "ns",
            "range": "± 8714.18741775742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4106071.75,
            "unit": "ns",
            "range": "± 104533.32376276622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4418157.936170213,
            "unit": "ns",
            "range": "± 171913.04836968222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5169675.72,
            "unit": "ns",
            "range": "± 128352.11901462062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4750987.423076923,
            "unit": "ns",
            "range": "± 187705.24284709812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8307686.65625,
            "unit": "ns",
            "range": "± 382382.5881757369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10365497.25,
            "unit": "ns",
            "range": "± 194722.45557938784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26160500.846153848,
            "unit": "ns",
            "range": "± 213548.69479849562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67005703.307692304,
            "unit": "ns",
            "range": "± 1015295.1281090954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133795096,
            "unit": "ns",
            "range": "± 1961354.3509403686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264155118.57142857,
            "unit": "ns",
            "range": "± 3934628.5540408967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63515.16129032258,
            "unit": "ns",
            "range": "± 11346.90440383586"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30f8d6a18a6cc9efff4192b480e6dbc3125034b2",
          "message": "Update CHANGES.md\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-07-07T17:13:24+09:00",
          "tree_id": "a729cec235e4bf751c0832f83ff3a15818d0c231",
          "url": "https://github.com/planetarium/libplanet/commit/30f8d6a18a6cc9efff4192b480e6dbc3125034b2"
        },
        "date": 1688718465282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292456.10869565216,
            "unit": "ns",
            "range": "± 8564.347673746763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293758.77419354836,
            "unit": "ns",
            "range": "± 8553.330730226977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248186.3396226415,
            "unit": "ns",
            "range": "± 9288.651580834034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4591843,
            "unit": "ns",
            "range": "± 80014.92174409899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196248.5,
            "unit": "ns",
            "range": "± 45532.04773605577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22088.65263157895,
            "unit": "ns",
            "range": "± 2325.0444734635566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94695.98958333333,
            "unit": "ns",
            "range": "± 6457.691137819252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80924.7311827957,
            "unit": "ns",
            "range": "± 5733.032273284101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107003.39795918367,
            "unit": "ns",
            "range": "± 14234.206756051297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5569.854166666667,
            "unit": "ns",
            "range": "± 827.1597819191654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19697.135416666668,
            "unit": "ns",
            "range": "± 2198.483298332795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1581876.53125,
            "unit": "ns",
            "range": "± 91014.12384019863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989319.404255319,
            "unit": "ns",
            "range": "± 111930.79370553224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1994997.0303030303,
            "unit": "ns",
            "range": "± 126681.28899501236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5313128.4,
            "unit": "ns",
            "range": "± 167835.06371929205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6081645.195870535,
            "unit": "ns",
            "range": "± 27236.588894919925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887135.38203125,
            "unit": "ns",
            "range": "± 1970.4722850869252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388255.799107143,
            "unit": "ns",
            "range": "± 4390.884132739848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664276.712760417,
            "unit": "ns",
            "range": "± 2788.187151973059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840940.2974609375,
            "unit": "ns",
            "range": "± 798.094320006234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772626.1208333333,
            "unit": "ns",
            "range": "± 353.62581797691735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3511329.5757575757,
            "unit": "ns",
            "range": "± 109671.45105810076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3723835.913043478,
            "unit": "ns",
            "range": "± 93305.524852455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4542084.777777778,
            "unit": "ns",
            "range": "± 93740.73428693417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4100986.108108108,
            "unit": "ns",
            "range": "± 138051.4726883869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6828280.0625,
            "unit": "ns",
            "range": "± 130820.12867621901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8064933.928571428,
            "unit": "ns",
            "range": "± 81503.3785514576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22403139,
            "unit": "ns",
            "range": "± 307118.92578818015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57959125.76923077,
            "unit": "ns",
            "range": "± 800483.2432663362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113965330.93333334,
            "unit": "ns",
            "range": "± 1628575.7215488486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228645421.73333332,
            "unit": "ns",
            "range": "± 3570696.3836594447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50070.29347826087,
            "unit": "ns",
            "range": "± 3130.485478405298"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "b067d4a65140f7cb80842dd61704970b66c2856c",
          "message": "Add testcase for BlockType.PreEvaluationHash",
          "timestamp": "2023-07-07T17:35:48+09:00",
          "tree_id": "420190d535fca666c82612da15236887a375ab80",
          "url": "https://github.com/planetarium/libplanet/commit/b067d4a65140f7cb80842dd61704970b66c2856c"
        },
        "date": 1688720278743,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342061.6804123711,
            "unit": "ns",
            "range": "± 51407.178805093776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308602.8020833333,
            "unit": "ns",
            "range": "± 40307.789082879375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 372071.17647058825,
            "unit": "ns",
            "range": "± 20046.4142234587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5793640.571428572,
            "unit": "ns",
            "range": "± 56726.91899688472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5293783.9375,
            "unit": "ns",
            "range": "± 103330.49692094375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34602.326315789476,
            "unit": "ns",
            "range": "± 6890.262869706918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 151109.60215053763,
            "unit": "ns",
            "range": "± 22139.451390506583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 147610.76086956522,
            "unit": "ns",
            "range": "± 18513.066500741294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133176.40425531915,
            "unit": "ns",
            "range": "± 30873.08009835675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5086.046511627907,
            "unit": "ns",
            "range": "± 1212.6939180962722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33329.75,
            "unit": "ns",
            "range": "± 5048.403790638516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1908367.0947368422,
            "unit": "ns",
            "range": "± 174067.98525698832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3631348.1463414636,
            "unit": "ns",
            "range": "± 128281.79305781491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2486873.3645833335,
            "unit": "ns",
            "range": "± 215476.5469574782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6903682.54,
            "unit": "ns",
            "range": "± 276893.48645387095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7067312.56421875,
            "unit": "ns",
            "range": "± 1153478.2512805113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2342755.3356584823,
            "unit": "ns",
            "range": "± 125653.5125161792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1598115.0533398436,
            "unit": "ns",
            "range": "± 188909.4605081682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3559073.018671875,
            "unit": "ns",
            "range": "± 418821.5141623891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996279.159676535,
            "unit": "ns",
            "range": "± 43087.49243952723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1023823.5358886719,
            "unit": "ns",
            "range": "± 26269.521980948266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4492583.529411765,
            "unit": "ns",
            "range": "± 181746.49471880915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4859579.2,
            "unit": "ns",
            "range": "± 86790.89130630504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4900182.56,
            "unit": "ns",
            "range": "± 803200.3700738654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4465496.888888889,
            "unit": "ns",
            "range": "± 785070.9047070517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7158066.94949495,
            "unit": "ns",
            "range": "± 955556.7705152307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8096410.886597938,
            "unit": "ns",
            "range": "± 709840.202208859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20720624.412371133,
            "unit": "ns",
            "range": "± 1768604.2132423576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53834350.21875,
            "unit": "ns",
            "range": "± 4211525.335682215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106825752.98888889,
            "unit": "ns",
            "range": "± 7727053.8753355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251494666.5,
            "unit": "ns",
            "range": "± 33289232.95733828"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68663.26595744681,
            "unit": "ns",
            "range": "± 10933.819982129957"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "f6eac08c103fc977a1a5d6467fa1e809fb0286c2",
          "message": "Changelog",
          "timestamp": "2023-07-07T17:46:13+09:00",
          "tree_id": "71dfea0053205aaabb82b766cf72e2f00fcc64cf",
          "url": "https://github.com/planetarium/libplanet/commit/f6eac08c103fc977a1a5d6467fa1e809fb0286c2"
        },
        "date": 1688720582866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351133.76,
            "unit": "ns",
            "range": "± 17745.369433178894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330163.5138888889,
            "unit": "ns",
            "range": "± 16289.586610576289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294160.1234567901,
            "unit": "ns",
            "range": "± 15373.976866268793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5199957.71875,
            "unit": "ns",
            "range": "± 301311.4685117188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4442352.8,
            "unit": "ns",
            "range": "± 83012.96472513882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17962.84946236559,
            "unit": "ns",
            "range": "± 1149.2175499408713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96670.76595744681,
            "unit": "ns",
            "range": "± 7442.5262828905625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87794.72527472528,
            "unit": "ns",
            "range": "± 6720.967706556572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107331.70212765958,
            "unit": "ns",
            "range": "± 12721.10649210344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5608.4375,
            "unit": "ns",
            "range": "± 935.0799325529117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17970.290322580644,
            "unit": "ns",
            "range": "± 1344.835326759742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1701213.9263157896,
            "unit": "ns",
            "range": "± 177713.30755193238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3337750.8333333335,
            "unit": "ns",
            "range": "± 372438.73417580663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2210572.9680851065,
            "unit": "ns",
            "range": "± 229907.19600375887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6521855.680412371,
            "unit": "ns",
            "range": "± 529790.7753979109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7364569.793229166,
            "unit": "ns",
            "range": "± 98359.35973538112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2255712.69921875,
            "unit": "ns",
            "range": "± 19651.320710472894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1642365.5703125,
            "unit": "ns",
            "range": "± 25921.191135235367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3142311.923697917,
            "unit": "ns",
            "range": "± 28492.464018024755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014490.3256510417,
            "unit": "ns",
            "range": "± 17556.737482072193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978083.7225260417,
            "unit": "ns",
            "range": "± 8583.664668403095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3789829.306451613,
            "unit": "ns",
            "range": "± 171440.76020334623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4025375.7065217393,
            "unit": "ns",
            "range": "± 224516.8125686089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5116832.782608695,
            "unit": "ns",
            "range": "± 238795.61998205454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4744293.223404256,
            "unit": "ns",
            "range": "± 326892.18042937986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8584429.824742269,
            "unit": "ns",
            "range": "± 575245.8324187547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9387453.75,
            "unit": "ns",
            "range": "± 445720.6185849746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24181984.14285714,
            "unit": "ns",
            "range": "± 686010.315805264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61856641.333333336,
            "unit": "ns",
            "range": "± 1556838.9666632237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124100488.75,
            "unit": "ns",
            "range": "± 2798411.768350471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248317723.4090909,
            "unit": "ns",
            "range": "± 5791071.775919102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55623.170454545456,
            "unit": "ns",
            "range": "± 4292.291133824433"
          }
        ]
      }
    ]
  }
}