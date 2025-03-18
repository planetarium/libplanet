window.BENCHMARK_DATA = {
  "lastUpdate": 1742284385188,
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
          "id": "04ed5f2d528df8cdcc784a34594d904c245bf8b3",
          "message": "fix: Module type without path",
          "timestamp": "2025-02-07T10:50:53+09:00",
          "tree_id": "603aa1227aa8f7be9a06dde069ac546ef4462854",
          "url": "https://github.com/planetarium/libplanet/commit/04ed5f2d528df8cdcc784a34594d904c245bf8b3"
        },
        "date": 1738893702567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3283653.3333333335,
            "unit": "ns",
            "range": "± 45243.15049448553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3059305,
            "unit": "ns",
            "range": "± 1821479.8215401063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3469025,
            "unit": "ns",
            "range": "± 1527586.4331627288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6025861.428571428,
            "unit": "ns",
            "range": "± 278083.99121819774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 26338.541666666668,
            "unit": "ns",
            "range": "± 3889.510043333605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9976900,
            "unit": "ns",
            "range": "± 82437.83805302721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20215185,
            "unit": "ns",
            "range": "± 1433947.4817718389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47848217.64705882,
            "unit": "ns",
            "range": "± 920584.4856905409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94390038.46153846,
            "unit": "ns",
            "range": "± 334031.6640142107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190702933.33333334,
            "unit": "ns",
            "range": "± 438959.031704727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4087671.9866071427,
            "unit": "ns",
            "range": "± 8910.679239054072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912911.640625,
            "unit": "ns",
            "range": "± 6796.102229965307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728522.4544270834,
            "unit": "ns",
            "range": "± 4977.465111470917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1625467.9236778845,
            "unit": "ns",
            "range": "± 2776.431855993238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 438326.064453125,
            "unit": "ns",
            "range": "± 3153.956672780786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 396154.4259207589,
            "unit": "ns",
            "range": "± 1281.4287516318152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2510893.3333333335,
            "unit": "ns",
            "range": "± 38878.16990597803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2170130,
            "unit": "ns",
            "range": "± 384302.98100863234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363015.384615385,
            "unit": "ns",
            "range": "± 39827.123215087275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2300545,
            "unit": "ns",
            "range": "± 440055.9705849641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5411192.857142857,
            "unit": "ns",
            "range": "± 87856.47136346622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98132.53012048193,
            "unit": "ns",
            "range": "± 15865.156701998243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 152029.62962962964,
            "unit": "ns",
            "range": "± 21312.46375037647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 127200,
            "unit": "ns",
            "range": "± 4334.89923197199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2268038.4615384615,
            "unit": "ns",
            "range": "± 19104.691328813216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2190421.4285714286,
            "unit": "ns",
            "range": "± 30053.009028188037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15225.824175824177,
            "unit": "ns",
            "range": "± 5486.6371133132925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66210.82474226804,
            "unit": "ns",
            "range": "± 22535.229626358698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38379.032258064515,
            "unit": "ns",
            "range": "± 1669.1155110136303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71807.14285714286,
            "unit": "ns",
            "range": "± 26856.557685631444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3685.714285714286,
            "unit": "ns",
            "range": "± 1232.631917199522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12938.76404494382,
            "unit": "ns",
            "range": "± 4145.189934299732"
          }
        ]
      },
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
          "id": "ea12e7a418bb2ccf41aa99cbe58f8ec98bb88c88",
          "message": "fix: Fix warnings",
          "timestamp": "2025-02-13T11:45:20+09:00",
          "tree_id": "31318b00b4b5ce833b330aa0d76dc465ece35e55",
          "url": "https://github.com/planetarium/libplanet/commit/ea12e7a418bb2ccf41aa99cbe58f8ec98bb88c88"
        },
        "date": 1739415538270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1957466,
            "unit": "ns",
            "range": "± 1024988.5733011758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2772143,
            "unit": "ns",
            "range": "± 1865667.0880100336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3260928,
            "unit": "ns",
            "range": "± 1304342.6769081966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5867350.64935065,
            "unit": "ns",
            "range": "± 461569.4589411266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25286.868686868685,
            "unit": "ns",
            "range": "± 3089.7013416413074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9277803.846153846,
            "unit": "ns",
            "range": "± 59550.56136573659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22219958.82352941,
            "unit": "ns",
            "range": "± 454152.21437699656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47799115.384615384,
            "unit": "ns",
            "range": "± 269102.3901979624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93122226.66666667,
            "unit": "ns",
            "range": "± 382999.4096725526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184340092.85714287,
            "unit": "ns",
            "range": "± 411204.07943630003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4088805.4947916665,
            "unit": "ns",
            "range": "± 5420.212384562002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912134.3229166666,
            "unit": "ns",
            "range": "± 4574.077218752469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 716029.1145833334,
            "unit": "ns",
            "range": "± 3310.645493970245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1624928.5757211538,
            "unit": "ns",
            "range": "± 2492.102871290347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 439381.8880208333,
            "unit": "ns",
            "range": "± 2498.549344465868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 392184.55636160716,
            "unit": "ns",
            "range": "± 631.5456684098478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 1927613.2653061224,
            "unit": "ns",
            "range": "± 235435.28260743833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2780984.6153846155,
            "unit": "ns",
            "range": "± 20146.457345889463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2154523.529411765,
            "unit": "ns",
            "range": "± 93725.14296163131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2916805.5555555555,
            "unit": "ns",
            "range": "± 58920.868890824015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2471207.462686567,
            "unit": "ns",
            "range": "± 108241.21395295764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107338.38383838384,
            "unit": "ns",
            "range": "± 46171.47212487051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 138776.54320987655,
            "unit": "ns",
            "range": "± 18122.108539053464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 116360,
            "unit": "ns",
            "range": "± 3062.9506471157297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2181785.714285714,
            "unit": "ns",
            "range": "± 79598.53096888271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2342357.1428571427,
            "unit": "ns",
            "range": "± 36957.641330951476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10319.047619047618,
            "unit": "ns",
            "range": "± 2503.755068589625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49696.51162790698,
            "unit": "ns",
            "range": "± 12080.94705748459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37164.28571428572,
            "unit": "ns",
            "range": "± 1376.9569539247307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56929.5918367347,
            "unit": "ns",
            "range": "± 20881.596539979633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2848.9795918367345,
            "unit": "ns",
            "range": "± 820.6415516413023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11133.333333333334,
            "unit": "ns",
            "range": "± 3717.421795573048"
          }
        ]
      },
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
          "id": "3d9223171a1d7f94300904501db6e8bc244dfbec",
          "message": "fix: Fix warnings",
          "timestamp": "2025-03-05T13:28:46+09:00",
          "tree_id": "6c57fbb499f7345734888ca98b9167f5a438690e",
          "url": "https://github.com/planetarium/libplanet/commit/3d9223171a1d7f94300904501db6e8bc244dfbec"
        },
        "date": 1741149549602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3066380,
            "unit": "ns",
            "range": "± 54111.88409212897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905033,
            "unit": "ns",
            "range": "± 1943858.5258958482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4273925.531914894,
            "unit": "ns",
            "range": "± 158043.69300660954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5797281.690140845,
            "unit": "ns",
            "range": "± 284017.72897874785"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22117.1875,
            "unit": "ns",
            "range": "± 1043.2785148385879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9156460,
            "unit": "ns",
            "range": "± 87803.59413405093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18781046.666666668,
            "unit": "ns",
            "range": "± 993473.6715182744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46466553.84615385,
            "unit": "ns",
            "range": "± 83290.82197722042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94630933.33333333,
            "unit": "ns",
            "range": "± 270780.41358442523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182864891.66666666,
            "unit": "ns",
            "range": "± 564154.4428423727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091207.7604166665,
            "unit": "ns",
            "range": "± 5591.281335515926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 891893.7290736607,
            "unit": "ns",
            "range": "± 8463.655973369487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 712045.8658854166,
            "unit": "ns",
            "range": "± 10166.21159929475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1698838.2361778845,
            "unit": "ns",
            "range": "± 8748.648039923672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 457043.53376116074,
            "unit": "ns",
            "range": "± 3403.736132150813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 410527.3665364583,
            "unit": "ns",
            "range": "± 2022.9245242786142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2147764,
            "unit": "ns",
            "range": "± 308701.5928666126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2821642.8571428573,
            "unit": "ns",
            "range": "± 24888.110052352746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3031268,
            "unit": "ns",
            "range": "± 1278456.5982907403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2862485.185185185,
            "unit": "ns",
            "range": "± 79830.6366084509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2489213.5802469137,
            "unit": "ns",
            "range": "± 135876.17410080254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86452.43902439025,
            "unit": "ns",
            "range": "± 15942.026340909764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 132717.5,
            "unit": "ns",
            "range": "± 17622.825927497728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 115628.57142857143,
            "unit": "ns",
            "range": "± 5900.152922702783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2139616.6666666665,
            "unit": "ns",
            "range": "± 46753.71797972367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2095260,
            "unit": "ns",
            "range": "± 54967.82392151491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10935.955056179775,
            "unit": "ns",
            "range": "± 3979.2714954273647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49500,
            "unit": "ns",
            "range": "± 8403.730298315699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36386.95652173913,
            "unit": "ns",
            "range": "± 1416.036517993041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55255.555555555555,
            "unit": "ns",
            "range": "± 18917.129815421653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2959.183673469388,
            "unit": "ns",
            "range": "± 850.5712737269347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10115.47619047619,
            "unit": "ns",
            "range": "± 3335.695734861148"
          }
        ]
      },
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
          "id": "e439a881919f3df574a0fb57f9c3a630ccfebb3c",
          "message": "wip",
          "timestamp": "2025-03-06T13:11:40+09:00",
          "tree_id": "7988e74093e5b4b17eb563472373913da18f9d9f",
          "url": "https://github.com/planetarium/libplanet/commit/e439a881919f3df574a0fb57f9c3a630ccfebb3c"
        },
        "date": 1741237193915,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2945609.6774193547,
            "unit": "ns",
            "range": "± 78988.91211150549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 5158581.25,
            "unit": "ns",
            "range": "± 158583.20384051578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4461340.909090909,
            "unit": "ns",
            "range": "± 308497.8391386993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13058558,
            "unit": "ns",
            "range": "± 5694582.894573375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22902.197802197803,
            "unit": "ns",
            "range": "± 1525.8497102327406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 3443035.714285714,
            "unit": "ns",
            "range": "± 25312.131695868902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 8474800,
            "unit": "ns",
            "range": "± 14466.39784696476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 19973431.25,
            "unit": "ns",
            "range": "± 154156.9620819421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 36202677.5,
            "unit": "ns",
            "range": "± 944646.4747731196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 71341542.85714285,
            "unit": "ns",
            "range": "± 83156.43010694884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4235083.426339285,
            "unit": "ns",
            "range": "± 53324.34798248501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925868.9127604166,
            "unit": "ns",
            "range": "± 4903.34759761238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736248.28125,
            "unit": "ns",
            "range": "± 7228.80075802285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1737734.8911830357,
            "unit": "ns",
            "range": "± 24896.785426482802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 449286.7578125,
            "unit": "ns",
            "range": "± 1883.5847578259566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 409779.87234933034,
            "unit": "ns",
            "range": "± 1142.750205207907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2843021.4285714286,
            "unit": "ns",
            "range": "± 42114.722961333726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3139750,
            "unit": "ns",
            "range": "± 53927.911283347654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3842275.6097560977,
            "unit": "ns",
            "range": "± 138353.63164819308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3179410.5263157897,
            "unit": "ns",
            "range": "± 108851.71612068506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3370272.727272727,
            "unit": "ns",
            "range": "± 694525.1672344768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257642.2680412371,
            "unit": "ns",
            "range": "± 18136.610275969582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 424875.75757575757,
            "unit": "ns",
            "range": "± 51987.96974440059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174374.57627118644,
            "unit": "ns",
            "range": "± 7708.293635146117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1381912.857142857,
            "unit": "ns",
            "range": "± 45046.760578930225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1180214.2857142857,
            "unit": "ns",
            "range": "± 42903.883339097796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25837.755102040817,
            "unit": "ns",
            "range": "± 5461.118712213754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108507.29166666667,
            "unit": "ns",
            "range": "± 15761.169772187577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52763,
            "unit": "ns",
            "range": "± 18899.102939536362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80463.26530612246,
            "unit": "ns",
            "range": "± 34706.29458863647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5026.530612244898,
            "unit": "ns",
            "range": "± 1650.9635437418267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23451.041666666668,
            "unit": "ns",
            "range": "± 3962.388827373993"
          }
        ]
      },
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
          "id": "3d9223171a1d7f94300904501db6e8bc244dfbec",
          "message": "fix: Fix warnings",
          "timestamp": "2025-03-05T13:28:46+09:00",
          "tree_id": "6c57fbb499f7345734888ca98b9167f5a438690e",
          "url": "https://github.com/planetarium/libplanet/commit/3d9223171a1d7f94300904501db6e8bc244dfbec"
        },
        "date": 1742283921873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2243099,
            "unit": "ns",
            "range": "± 945628.6894346101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1726402.197802198,
            "unit": "ns",
            "range": "± 232388.05810684757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3110522,
            "unit": "ns",
            "range": "± 1441063.2136983955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5922563.157894737,
            "unit": "ns",
            "range": "± 313067.8183576652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23906.521739130436,
            "unit": "ns",
            "range": "± 1956.9995169678318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9668293.333333334,
            "unit": "ns",
            "range": "± 113908.9264448117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23304607.14285714,
            "unit": "ns",
            "range": "± 309397.48510808684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49088511.76470588,
            "unit": "ns",
            "range": "± 793818.4804178731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96130220,
            "unit": "ns",
            "range": "± 1093063.8049602986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189919323.07692307,
            "unit": "ns",
            "range": "± 1803982.0680713754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4091967.2526041665,
            "unit": "ns",
            "range": "± 11760.294779399743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 959328.7034254808,
            "unit": "ns",
            "range": "± 4474.69797153404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722036.7057291666,
            "unit": "ns",
            "range": "± 6762.977339266044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1713067.8013392857,
            "unit": "ns",
            "range": "± 6589.45938873461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 451729.4759114583,
            "unit": "ns",
            "range": "± 2197.996876991419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 401321.2139423077,
            "unit": "ns",
            "range": "± 719.211154724815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2091416,
            "unit": "ns",
            "range": "± 320909.3766536628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2894506.6666666665,
            "unit": "ns",
            "range": "± 46811.72726490457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5261826.666666667,
            "unit": "ns",
            "range": "± 95482.82169110441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2318908,
            "unit": "ns",
            "range": "± 412783.3928712528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2525258.904109589,
            "unit": "ns",
            "range": "± 96154.26961632547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99628.0487804878,
            "unit": "ns",
            "range": "± 17938.86238868174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 153009.8765432099,
            "unit": "ns",
            "range": "± 20924.85128345164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 121643.95604395604,
            "unit": "ns",
            "range": "± 8932.191578669057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2266041.6666666665,
            "unit": "ns",
            "range": "± 23122.340960965685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2196954.5454545454,
            "unit": "ns",
            "range": "± 67953.30699692387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13417.045454545454,
            "unit": "ns",
            "range": "± 4032.6603862727616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55129.26829268293,
            "unit": "ns",
            "range": "± 9383.54861676433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39655.494505494506,
            "unit": "ns",
            "range": "± 2850.745034679049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72063.26530612246,
            "unit": "ns",
            "range": "± 25058.419939142466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3826.8041237113403,
            "unit": "ns",
            "range": "± 1258.1000443722608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15087.368421052632,
            "unit": "ns",
            "range": "± 6174.4022383644415"
          }
        ]
      },
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
          "id": "2d42cefead3fd4ec717ac25149bfb9ed93acabac",
          "message": "fix: Fix warnings",
          "timestamp": "2025-03-18T16:34:37+09:00",
          "tree_id": "c67977ba000efad41bac8d668742c41f681be3e8",
          "url": "https://github.com/planetarium/libplanet/commit/2d42cefead3fd4ec717ac25149bfb9ed93acabac"
        },
        "date": 1742284060000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679261,
            "unit": "ns",
            "range": "± 983916.463656105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741225.5555555555,
            "unit": "ns",
            "range": "± 236432.62030929045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4498931.25,
            "unit": "ns",
            "range": "± 85029.67888723717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5807011.111111111,
            "unit": "ns",
            "range": "± 244962.06823619036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22928.72340425532,
            "unit": "ns",
            "range": "± 2502.3697302273654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9461907.692307692,
            "unit": "ns",
            "range": "± 76991.552150636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19775265.263157893,
            "unit": "ns",
            "range": "± 1268261.100606823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48205623.52941176,
            "unit": "ns",
            "range": "± 905130.1919678543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94007007.6923077,
            "unit": "ns",
            "range": "± 242953.81063602216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189889066.66666666,
            "unit": "ns",
            "range": "± 3492484.3794858097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4154881.09375,
            "unit": "ns",
            "range": "± 62390.66129760625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 932030.0520833334,
            "unit": "ns",
            "range": "± 8847.800200752485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729185.8258928572,
            "unit": "ns",
            "range": "± 7943.114173224081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1812147.4888392857,
            "unit": "ns",
            "range": "± 20485.929371315364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 476391.67131696426,
            "unit": "ns",
            "range": "± 3152.2356798918145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428835.3255208333,
            "unit": "ns",
            "range": "± 1337.1417035346087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2620163.3333333335,
            "unit": "ns",
            "range": "± 25484.641499949583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 1789381.7073170731,
            "unit": "ns",
            "range": "± 90359.6806295199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2254406.0240963856,
            "unit": "ns",
            "range": "± 227018.73370070712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2806560.714285714,
            "unit": "ns",
            "range": "± 79582.57923684941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2437443.75,
            "unit": "ns",
            "range": "± 42525.41152064257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105482.60869565218,
            "unit": "ns",
            "range": "± 38798.370331402715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 152623.45679012345,
            "unit": "ns",
            "range": "± 19745.026409231126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 118095.29411764706,
            "unit": "ns",
            "range": "± 6372.745276012622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2170782.926829268,
            "unit": "ns",
            "range": "± 66957.86698528794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2131271.4285714286,
            "unit": "ns",
            "range": "± 32785.39610561687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15288,
            "unit": "ns",
            "range": "± 7676.492780830411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61546.8085106383,
            "unit": "ns",
            "range": "± 19266.421299890462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39502.083333333336,
            "unit": "ns",
            "range": "± 3075.8817021488385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66632.98969072165,
            "unit": "ns",
            "range": "± 24310.246132244512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3318.3673469387754,
            "unit": "ns",
            "range": "± 1145.9788000032129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13400,
            "unit": "ns",
            "range": "± 4187.172529655716"
          }
        ]
      },
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
          "id": "a89ee8a4e3e2520d115ca92bbbcb63581e42cb95",
          "message": "fix: Fix warnings",
          "timestamp": "2025-03-18T16:36:07+09:00",
          "tree_id": "c1a97e9a4bc8fa391e36a24d4cf693464dddd10b",
          "url": "https://github.com/planetarium/libplanet/commit/a89ee8a4e3e2520d115ca92bbbcb63581e42cb95"
        },
        "date": 1742284200831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2231445,
            "unit": "ns",
            "range": "± 977133.3419521337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1733953.8461538462,
            "unit": "ns",
            "range": "± 250825.53534177336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3288409,
            "unit": "ns",
            "range": "± 1388977.312545697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21094126.666666668,
            "unit": "ns",
            "range": "± 378538.91565685376"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 24193.684210526317,
            "unit": "ns",
            "range": "± 2714.022316278678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9550531.578947369,
            "unit": "ns",
            "range": "± 199692.38858424107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19914986.56716418,
            "unit": "ns",
            "range": "± 819635.298220832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49730969.23076923,
            "unit": "ns",
            "range": "± 633387.7398358441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97395255,
            "unit": "ns",
            "range": "± 2186035.883433274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198850771.42857143,
            "unit": "ns",
            "range": "± 2178384.841478295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4205396.514423077,
            "unit": "ns",
            "range": "± 5052.390276215072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 956641.1458333334,
            "unit": "ns",
            "range": "± 5621.981605696985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729409.3033854166,
            "unit": "ns",
            "range": "± 4380.304327304564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644460.1143973214,
            "unit": "ns",
            "range": "± 4936.332183984542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460551.9954427083,
            "unit": "ns",
            "range": "± 2709.597904218967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 402247.8743489583,
            "unit": "ns",
            "range": "± 2018.4305182766172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2053401,
            "unit": "ns",
            "range": "± 355260.1674331735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2326654.5454545454,
            "unit": "ns",
            "range": "± 589446.8896940117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2242398.214285714,
            "unit": "ns",
            "range": "± 85089.8722551022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2370211,
            "unit": "ns",
            "range": "± 410289.3701419952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2574413.5135135134,
            "unit": "ns",
            "range": "± 128582.05452702264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99404.70588235294,
            "unit": "ns",
            "range": "± 18812.24845351429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 147704.93827160494,
            "unit": "ns",
            "range": "± 18210.380976482673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 123104.44444444444,
            "unit": "ns",
            "range": "± 7987.474901736322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2286433.3333333335,
            "unit": "ns",
            "range": "± 48292.89315636168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2206800,
            "unit": "ns",
            "range": "± 54798.68113874142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14857.777777777777,
            "unit": "ns",
            "range": "± 4396.550685206587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60558.620689655174,
            "unit": "ns",
            "range": "± 14212.061301847594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40188.29787234042,
            "unit": "ns",
            "range": "± 4412.442241432053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76455.55555555556,
            "unit": "ns",
            "range": "± 25784.801021509178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3918.3673469387754,
            "unit": "ns",
            "range": "± 1340.5912635214363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13454.878048780487,
            "unit": "ns",
            "range": "± 2369.6200893097493"
          }
        ]
      }
    ]
  }
}