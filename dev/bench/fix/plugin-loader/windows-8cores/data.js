window.BENCHMARK_DATA = {
  "lastUpdate": 1741149756657,
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
      }
    ]
  }
}