window.BENCHMARK_DATA = {
  "lastUpdate": 1714637432446,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "470d7d1efe87b185d9b6f32afab59d8a2ae9772e",
          "message": "test: Add CanCreateContextWithLastingEvaluation test",
          "timestamp": "2024-04-30T10:35:51+09:00",
          "tree_id": "8b8c119d64ea3c8c4232716f492c551767bcfa62",
          "url": "https://github.com/planetarium/libplanet/commit/470d7d1efe87b185d9b6f32afab59d8a2ae9772e"
        },
        "date": 1714441515243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012642.4242424242,
            "unit": "ns",
            "range": "± 103535.5564389563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1764148,
            "unit": "ns",
            "range": "± 46298.138191508304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560426,
            "unit": "ns",
            "range": "± 155321.10409657078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6841045.945945946,
            "unit": "ns",
            "range": "± 223014.00752543003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35793.81443298969,
            "unit": "ns",
            "range": "± 4806.046851644934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5154013.333333333,
            "unit": "ns",
            "range": "± 19320.302669422526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13068033.333333334,
            "unit": "ns",
            "range": "± 101417.19822218565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32729946.666666668,
            "unit": "ns",
            "range": "± 207954.4897556285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65165223.07692308,
            "unit": "ns",
            "range": "± 326623.54516539414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130285873.33333333,
            "unit": "ns",
            "range": "± 799791.9572941335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3229707.34375,
            "unit": "ns",
            "range": "± 3738.073124291101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050973.2682291667,
            "unit": "ns",
            "range": "± 2483.8626410614734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726811.875,
            "unit": "ns",
            "range": "± 1487.60235346141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908849.0931919643,
            "unit": "ns",
            "range": "± 2077.557193960924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615582.7985491072,
            "unit": "ns",
            "range": "± 718.2595589591513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555886.1049107143,
            "unit": "ns",
            "range": "± 1505.668486695994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2144283.0508474577,
            "unit": "ns",
            "range": "± 94789.92590249672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2221537.777777778,
            "unit": "ns",
            "range": "± 75722.65869872796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2748043.75,
            "unit": "ns",
            "range": "± 51467.68525006735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2337316.6666666665,
            "unit": "ns",
            "range": "± 49193.42674884641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2973085.294117647,
            "unit": "ns",
            "range": "± 58742.45633671262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167587.80487804877,
            "unit": "ns",
            "range": "± 7945.6392301860915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162904.61538461538,
            "unit": "ns",
            "range": "± 6705.278489025241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141439.2857142857,
            "unit": "ns",
            "range": "± 3287.7256898409596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2717243.75,
            "unit": "ns",
            "range": "± 38374.03581850624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2437178.5714285714,
            "unit": "ns",
            "range": "± 28833.879073367534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10194.736842105263,
            "unit": "ns",
            "range": "± 1061.2486043448841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50030.85106382979,
            "unit": "ns",
            "range": "± 3903.183883599696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43492,
            "unit": "ns",
            "range": "± 1501.4061436411087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48987.5,
            "unit": "ns",
            "range": "± 8545.731467568441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2538.5416666666665,
            "unit": "ns",
            "range": "± 281.11424598950083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9537.755102040815,
            "unit": "ns",
            "range": "± 1273.805509286706"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "e0e4ec0a7db9a5bdb8941c09c604b4f0763f9392",
          "message": "fix: Fix validator set on create context",
          "timestamp": "2024-05-02T16:57:03+09:00",
          "tree_id": "b8ef808ed0b6457a1db58b468a238cafc06796af",
          "url": "https://github.com/planetarium/libplanet/commit/e0e4ec0a7db9a5bdb8941c09c604b4f0763f9392"
        },
        "date": 1714637264535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066490.9090909092,
            "unit": "ns",
            "range": "± 139397.06325114126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814384.4155844157,
            "unit": "ns",
            "range": "± 85554.69943863718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1644288,
            "unit": "ns",
            "range": "± 173812.57947524506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6782812.903225807,
            "unit": "ns",
            "range": "± 131651.27102041335"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33181.318681318684,
            "unit": "ns",
            "range": "± 3133.188368558353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5011564.285714285,
            "unit": "ns",
            "range": "± 30525.036562514666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13479085.714285715,
            "unit": "ns",
            "range": "± 53833.44481100741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34118053.333333336,
            "unit": "ns",
            "range": "± 449234.01452864613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67054416.666666664,
            "unit": "ns",
            "range": "± 1575443.655397848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136558066.66666666,
            "unit": "ns",
            "range": "± 1875809.0847367577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3265387.2916666665,
            "unit": "ns",
            "range": "± 16219.867396352161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1080520.41015625,
            "unit": "ns",
            "range": "± 2360.9139946828445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740642.0638020834,
            "unit": "ns",
            "range": "± 2121.8414485265725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920630.6380208333,
            "unit": "ns",
            "range": "± 3396.2399663519054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631409.2472956731,
            "unit": "ns",
            "range": "± 1106.707124237186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574895.9612165178,
            "unit": "ns",
            "range": "± 951.027514199648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2157510.2564102565,
            "unit": "ns",
            "range": "± 74507.49448305888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2305490,
            "unit": "ns",
            "range": "± 92814.20820595282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775413.3333333335,
            "unit": "ns",
            "range": "± 31080.67536190906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2349780.487804878,
            "unit": "ns",
            "range": "± 83951.40921840501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2973047.0588235296,
            "unit": "ns",
            "range": "± 59351.696665376156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176528.35820895524,
            "unit": "ns",
            "range": "± 6062.097995922405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170547.77777777778,
            "unit": "ns",
            "range": "± 9209.365381858799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145238.70967741936,
            "unit": "ns",
            "range": "± 3783.444411234719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2744160,
            "unit": "ns",
            "range": "± 30424.304194414795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2453663.1578947366,
            "unit": "ns",
            "range": "± 43915.16076515307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11337.113402061856,
            "unit": "ns",
            "range": "± 1826.6727258659882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53089.01098901099,
            "unit": "ns",
            "range": "± 4245.506135235509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46005.681818181816,
            "unit": "ns",
            "range": "± 2539.7691068259455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62320.20202020202,
            "unit": "ns",
            "range": "± 16696.981150813106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2557.7319587628867,
            "unit": "ns",
            "range": "± 472.32471430026993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10541.304347826086,
            "unit": "ns",
            "range": "± 1244.7827096592412"
          }
        ]
      }
    ]
  }
}