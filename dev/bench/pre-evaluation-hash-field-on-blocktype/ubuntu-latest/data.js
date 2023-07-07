window.BENCHMARK_DATA = {
  "lastUpdate": 1688712847306,
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
      }
    ]
  }
}