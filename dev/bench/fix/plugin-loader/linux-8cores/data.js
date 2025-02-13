window.BENCHMARK_DATA = {
  "lastUpdate": 1739415369114,
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
      }
    ]
  }
}