window.BENCHMARK_DATA = {
  "lastUpdate": 1742283908903,
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
        "date": 1738893670133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23349.071428571428,
            "unit": "ns",
            "range": "± 1227.4831484379931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3892905.8291666666,
            "unit": "ns",
            "range": "± 50303.65424323948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921271.3694893973,
            "unit": "ns",
            "range": "± 4085.898298534673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723483.262890625,
            "unit": "ns",
            "range": "± 3307.508152774916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1726062.1611328125,
            "unit": "ns",
            "range": "± 4709.927646797312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466531.2754231771,
            "unit": "ns",
            "range": "± 3050.16781824982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429359.0461425781,
            "unit": "ns",
            "range": "± 1120.4036956796615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454245.7,
            "unit": "ns",
            "range": "± 488954.6517369706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2550023.85,
            "unit": "ns",
            "range": "± 508547.5061488848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2575157.1975308643,
            "unit": "ns",
            "range": "± 225505.92570974823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2451180.389473684,
            "unit": "ns",
            "range": "± 401566.0163166067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2862343.0204081633,
            "unit": "ns",
            "range": "± 101594.13840897552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10636777.333333334,
            "unit": "ns",
            "range": "± 179915.35572503717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23551569.112903226,
            "unit": "ns",
            "range": "± 307198.70835619053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56082151.78571428,
            "unit": "ns",
            "range": "± 255096.4891696499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113251515.34615384,
            "unit": "ns",
            "range": "± 799340.3456215054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229864767.86666667,
            "unit": "ns",
            "range": "± 1794604.1129027342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100905.96774193548,
            "unit": "ns",
            "range": "± 19246.664020626045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162240.7441860465,
            "unit": "ns",
            "range": "± 16293.588097369175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140958.12631578947,
            "unit": "ns",
            "range": "± 8256.410394408449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2708364.0714285714,
            "unit": "ns",
            "range": "± 37737.90374455061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2632360.4615384615,
            "unit": "ns",
            "range": "± 35106.56414788024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14084.06976744186,
            "unit": "ns",
            "range": "± 5487.844166435053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59555.87356321839,
            "unit": "ns",
            "range": "± 10976.856176990726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45122.3125,
            "unit": "ns",
            "range": "± 829.0630630416482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66762.9375,
            "unit": "ns",
            "range": "± 21050.89921510418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3753.2526315789473,
            "unit": "ns",
            "range": "± 1198.615166964378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12446.597701149425,
            "unit": "ns",
            "range": "± 3363.33528212616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3583157.6818181816,
            "unit": "ns",
            "range": "± 87807.41129170751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3109776.1,
            "unit": "ns",
            "range": "± 2075254.1466775858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3447417.28,
            "unit": "ns",
            "range": "± 1680188.123961521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7070750.8,
            "unit": "ns",
            "range": "± 261892.05527832208"
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
        "date": 1739415343125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 26205.050505050505,
            "unit": "ns",
            "range": "± 4718.730846694443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3889123.086495536,
            "unit": "ns",
            "range": "± 13232.432181370688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 908948.806640625,
            "unit": "ns",
            "range": "± 2177.09925809338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 717898.8091145833,
            "unit": "ns",
            "range": "± 4683.896324053093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1756852.1854166666,
            "unit": "ns",
            "range": "± 4714.01540885036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463304.2432617188,
            "unit": "ns",
            "range": "± 1708.5333102175348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419098.14381510415,
            "unit": "ns",
            "range": "± 2798.1867882247084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2413101.25,
            "unit": "ns",
            "range": "± 503876.87260931847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3275567.3666666667,
            "unit": "ns",
            "range": "± 57043.290919975436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2497383.34,
            "unit": "ns",
            "range": "± 75201.17201215072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2221743.8076923075,
            "unit": "ns",
            "range": "± 91472.82235993215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2891425.9444444445,
            "unit": "ns",
            "range": "± 109089.49429273208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11388137.285714285,
            "unit": "ns",
            "range": "± 196198.1611861721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24225928.260869566,
            "unit": "ns",
            "range": "± 430633.07457722974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57814917.928571425,
            "unit": "ns",
            "range": "± 285364.5912858912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110981580.61538461,
            "unit": "ns",
            "range": "± 460475.9292763554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227528216.5,
            "unit": "ns",
            "range": "± 472725.4787235643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114697.03571428571,
            "unit": "ns",
            "range": "± 18228.63904432659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190255.14457831325,
            "unit": "ns",
            "range": "± 20986.251967356602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156187.25252525252,
            "unit": "ns",
            "range": "± 12924.416216511332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766591.625,
            "unit": "ns",
            "range": "± 51634.09834966941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2589057.8076923075,
            "unit": "ns",
            "range": "± 23453.082023423613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19157.34693877551,
            "unit": "ns",
            "range": "± 7092.530610135721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70144.26595744681,
            "unit": "ns",
            "range": "± 21837.293000748723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45385.717948717946,
            "unit": "ns",
            "range": "± 1611.2344556225066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78751.58163265306,
            "unit": "ns",
            "range": "± 27505.73569085781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4712.328282828283,
            "unit": "ns",
            "range": "± 1682.217845100804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17099.244444444445,
            "unit": "ns",
            "range": "± 7357.871079435818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3505400.466666667,
            "unit": "ns",
            "range": "± 50170.330342695954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 6736094.928571428,
            "unit": "ns",
            "range": "± 99648.72581798701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3865727.3,
            "unit": "ns",
            "range": "± 1665307.5332471677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7098954.3,
            "unit": "ns",
            "range": "± 236761.18405114108"
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
        "date": 1741149528152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3333709.2,
            "unit": "ns",
            "range": "± 60495.534238015105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916861.5625,
            "unit": "ns",
            "range": "± 600701.0764740835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2662790.38,
            "unit": "ns",
            "range": "± 1221000.37714257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7117747.426666667,
            "unit": "ns",
            "range": "± 359494.876769989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 26109.95918367347,
            "unit": "ns",
            "range": "± 4270.617551538973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3039545.466666667,
            "unit": "ns",
            "range": "± 41419.74934370364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2918975.5,
            "unit": "ns",
            "range": "± 66246.81799508324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2563341.802325581,
            "unit": "ns",
            "range": "± 237163.44507219782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3275226.92,
            "unit": "ns",
            "range": "± 87438.40017736297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2881162.43877551,
            "unit": "ns",
            "range": "± 85492.02631322997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10969957.633333333,
            "unit": "ns",
            "range": "± 112612.97908251116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26246086.45238095,
            "unit": "ns",
            "range": "± 610777.8737196098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56473415.615384616,
            "unit": "ns",
            "range": "± 61569.81334298281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112882442,
            "unit": "ns",
            "range": "± 354260.36672158836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222573253.6,
            "unit": "ns",
            "range": "± 239025.62529085812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97195.15294117646,
            "unit": "ns",
            "range": "± 18816.438664424382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163269.60714285713,
            "unit": "ns",
            "range": "± 20449.860218108814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140380.45238095237,
            "unit": "ns",
            "range": "± 4860.879329024293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2575331.076923077,
            "unit": "ns",
            "range": "± 42114.262521663484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488253.8571428573,
            "unit": "ns",
            "range": "± 37942.34941603895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13183.494623655914,
            "unit": "ns",
            "range": "± 6095.046011567341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53408.2705882353,
            "unit": "ns",
            "range": "± 9426.644766663416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43917.53846153846,
            "unit": "ns",
            "range": "± 313.80291463077464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61290.520833333336,
            "unit": "ns",
            "range": "± 21558.036608178434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3951,
            "unit": "ns",
            "range": "± 1417.813973396332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11681.761363636364,
            "unit": "ns",
            "range": "± 3352.7293256247017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3781321.6551339286,
            "unit": "ns",
            "range": "± 15258.400634142494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 895799.6166616586,
            "unit": "ns",
            "range": "± 4985.448242860122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 709821.6280691965,
            "unit": "ns",
            "range": "± 3518.2288856576265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1654714.5018136161,
            "unit": "ns",
            "range": "± 6357.323491161731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459341.3689313616,
            "unit": "ns",
            "range": "± 2049.8015702398116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422690.9449869792,
            "unit": "ns",
            "range": "± 2176.0415119740705"
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
        "date": 1741237093309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2286481.846153846,
            "unit": "ns",
            "range": "± 21469.243174233205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4854068.037974684,
            "unit": "ns",
            "range": "± 251017.73717554164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4182216.1717171716,
            "unit": "ns",
            "range": "± 313840.5799820185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15264413.79,
            "unit": "ns",
            "range": "± 7444215.504450152"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22578.63076923077,
            "unit": "ns",
            "range": "± 1087.345198310298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154164.1923076925,
            "unit": "ns",
            "range": "± 57930.64400730876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2233438.6666666665,
            "unit": "ns",
            "range": "± 21850.116847340298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2965016.8,
            "unit": "ns",
            "range": "± 409639.4366829805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2486259.814814815,
            "unit": "ns",
            "range": "± 104589.68946425458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2551111.23,
            "unit": "ns",
            "range": "± 628253.3248924203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 2432241.7666666666,
            "unit": "ns",
            "range": "± 12554.376354008798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 6009307.566666666,
            "unit": "ns",
            "range": "± 31451.44342239925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 15782054,
            "unit": "ns",
            "range": "± 68768.49445162267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 22404901.8,
            "unit": "ns",
            "range": "± 494647.6980303201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 43858322,
            "unit": "ns",
            "range": "± 31275.036292399553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253625.52,
            "unit": "ns",
            "range": "± 32142.08316791762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 485265.0975609756,
            "unit": "ns",
            "range": "± 17262.978809876466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159242.0163934426,
            "unit": "ns",
            "range": "± 7152.827416464539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 905696.8780487805,
            "unit": "ns",
            "range": "± 27350.752627848397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 795199.3103448276,
            "unit": "ns",
            "range": "± 34850.40355083973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31889.24193548387,
            "unit": "ns",
            "range": "± 2438.7658403346495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108070.28787878787,
            "unit": "ns",
            "range": "± 13833.543918768779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44027.38271604938,
            "unit": "ns",
            "range": "± 5943.859483887345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66679.93298969071,
            "unit": "ns",
            "range": "± 27982.834994535493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3462.6907216494847,
            "unit": "ns",
            "range": "± 1385.240956482728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22926.88775510204,
            "unit": "ns",
            "range": "± 2021.858468756794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3855697.584542411,
            "unit": "ns",
            "range": "± 16412.001899334475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917181.5076822917,
            "unit": "ns",
            "range": "± 6406.652886669209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 718220.0658854167,
            "unit": "ns",
            "range": "± 4009.5296779966425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1714389.7756510417,
            "unit": "ns",
            "range": "± 4831.272283407577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456928.68802315847,
            "unit": "ns",
            "range": "± 875.7659825229995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431508.3983398437,
            "unit": "ns",
            "range": "± 2392.849985344227"
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
        "date": 1742283838223,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2645859.72,
            "unit": "ns",
            "range": "± 1052492.1566269672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037373.8469387754,
            "unit": "ns",
            "range": "± 2079173.8876848163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1944996.7073170731,
            "unit": "ns",
            "range": "± 548908.5201306032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7194391.787234043,
            "unit": "ns",
            "range": "± 240728.1582952327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25153.229166666668,
            "unit": "ns",
            "range": "± 3806.550850640087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2807044.8333333335,
            "unit": "ns",
            "range": "± 14049.654268365683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3023830.4166666665,
            "unit": "ns",
            "range": "± 39933.17585316372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5948987.633333334,
            "unit": "ns",
            "range": "± 65228.71685502008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2474948.01,
            "unit": "ns",
            "range": "± 369193.2535145742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2843904.8913043477,
            "unit": "ns",
            "range": "± 64628.79645112738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11513529.033333333,
            "unit": "ns",
            "range": "± 139758.24200426898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23484683.102040816,
            "unit": "ns",
            "range": "± 1457506.229365765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56337668.2,
            "unit": "ns",
            "range": "± 478116.16160005657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111658043.96666667,
            "unit": "ns",
            "range": "± 583041.8019057916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221831252,
            "unit": "ns",
            "range": "± 3038395.4844133016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104097.93023255814,
            "unit": "ns",
            "range": "± 19323.115479403663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173601.74683544305,
            "unit": "ns",
            "range": "± 36860.2383451079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142415.23333333334,
            "unit": "ns",
            "range": "± 8179.74959377449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2635048.4677419355,
            "unit": "ns",
            "range": "± 65589.20735328532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2700159.7666666666,
            "unit": "ns",
            "range": "± 39540.78376357878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15160.144444444444,
            "unit": "ns",
            "range": "± 5474.486259948238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58250.57831325301,
            "unit": "ns",
            "range": "± 9971.936912326832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44809.566666666666,
            "unit": "ns",
            "range": "± 1361.3258923040694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75853.07142857143,
            "unit": "ns",
            "range": "± 24175.023675613942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3807.1530612244896,
            "unit": "ns",
            "range": "± 1411.1679768209613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13564.593023255815,
            "unit": "ns",
            "range": "± 4363.999887792922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3991300.298958333,
            "unit": "ns",
            "range": "± 29766.877154937232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915487.8371930803,
            "unit": "ns",
            "range": "± 4726.8657857198705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 713911.8317708333,
            "unit": "ns",
            "range": "± 6450.098936347669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1732197.9002511161,
            "unit": "ns",
            "range": "± 5319.467535536809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 448651.3809640067,
            "unit": "ns",
            "range": "± 1591.7242573603012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 430609.3236816406,
            "unit": "ns",
            "range": "± 1975.4991114986408"
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
        "date": 1742283883297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3614773.4285714286,
            "unit": "ns",
            "range": "± 103184.0537753447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 7139653.8125,
            "unit": "ns",
            "range": "± 136802.91003080245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1698475.597826087,
            "unit": "ns",
            "range": "± 279183.3348785586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7078944.269230769,
            "unit": "ns",
            "range": "± 394706.73432785226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22846.923076923078,
            "unit": "ns",
            "range": "± 1218.1102542087851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2885606.3846153845,
            "unit": "ns",
            "range": "± 35649.53599870659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3253023.5,
            "unit": "ns",
            "range": "± 61486.68912970785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5926281.423076923,
            "unit": "ns",
            "range": "± 91034.58268561233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2203830.2386363638,
            "unit": "ns",
            "range": "± 206747.94172954216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2800940.8571428573,
            "unit": "ns",
            "range": "± 125033.6675501913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10956759.866666667,
            "unit": "ns",
            "range": "± 113505.22485259475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25569598,
            "unit": "ns",
            "range": "± 404064.1365436071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57317696.384615384,
            "unit": "ns",
            "range": "± 129816.1478749456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111418042.78571428,
            "unit": "ns",
            "range": "± 134369.42250517276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224712382.73333332,
            "unit": "ns",
            "range": "± 478539.3654766355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97373.37209302325,
            "unit": "ns",
            "range": "± 17341.298317665573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164266.656626506,
            "unit": "ns",
            "range": "± 20594.163935020188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140921.828125,
            "unit": "ns",
            "range": "± 6472.625594077043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2559885.933333333,
            "unit": "ns",
            "range": "± 35816.28959499268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2389183.076923077,
            "unit": "ns",
            "range": "± 22625.31331444767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11551.759036144578,
            "unit": "ns",
            "range": "± 2998.1701272542946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56618.369047619046,
            "unit": "ns",
            "range": "± 12713.764849378627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44652.11538461538,
            "unit": "ns",
            "range": "± 1046.624940536889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60164.905263157896,
            "unit": "ns",
            "range": "± 20219.00522211171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2949.8865979381444,
            "unit": "ns",
            "range": "± 983.3520147549812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10757.988095238095,
            "unit": "ns",
            "range": "± 2116.4758016886644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760832.3602120536,
            "unit": "ns",
            "range": "± 8286.391407196681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 900623.0092773438,
            "unit": "ns",
            "range": "± 4108.862283197342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 710305.4535807292,
            "unit": "ns",
            "range": "± 3888.984487439816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1684061.9991629464,
            "unit": "ns",
            "range": "± 5260.188059217875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461900.36373465403,
            "unit": "ns",
            "range": "± 1791.731371552553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 430992.99016927084,
            "unit": "ns",
            "range": "± 2344.7110373242176"
          }
        ]
      }
    ]
  }
}