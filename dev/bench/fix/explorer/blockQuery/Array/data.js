window.BENCHMARK_DATA = {
  "lastUpdate": 1722236869078,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:22:01+09:00",
          "tree_id": "b54d9c304404e61b9d2fd242c8811566e524801f",
          "url": "https://github.com/planetarium/libplanet/commit/2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323"
        },
        "date": 1722234615329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10824813.083333334,
            "unit": "ns",
            "range": "± 85829.12861182474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26835360.57142857,
            "unit": "ns",
            "range": "± 390124.81802420306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67022291.266666666,
            "unit": "ns",
            "range": "± 168418.43172563924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135868416.33333334,
            "unit": "ns",
            "range": "± 332180.2148369093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274894988.4230769,
            "unit": "ns",
            "range": "± 321999.76116980315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14113.192307692309,
            "unit": "ns",
            "range": "± 374.65450956642917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110995.23684210527,
            "unit": "ns",
            "range": "± 3485.690217695931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105455.90476190476,
            "unit": "ns",
            "range": "± 3307.9740304044753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90348.22727272728,
            "unit": "ns",
            "range": "± 2193.598021338636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3075236.466666667,
            "unit": "ns",
            "range": "± 57123.01161386797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788503.515151515,
            "unit": "ns",
            "range": "± 169899.51093960696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4970.25,
            "unit": "ns",
            "range": "± 490.420443638376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27251.13953488372,
            "unit": "ns",
            "range": "± 1469.1433291130681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22534.39393939394,
            "unit": "ns",
            "range": "± 1058.3166441794815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28982.516483516483,
            "unit": "ns",
            "range": "± 4040.778102633857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1189.1521739130435,
            "unit": "ns",
            "range": "± 194.55160815829927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4677.9655172413795,
            "unit": "ns",
            "range": "± 479.15440168861875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676235.8676470588,
            "unit": "ns",
            "range": "± 30131.318048014087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270220.2222222222,
            "unit": "ns",
            "range": "± 38818.45923129953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1075021.447761194,
            "unit": "ns",
            "range": "± 51032.8254374555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9650778.161616161,
            "unit": "ns",
            "range": "± 1421857.3211462314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2208372.3571428573,
            "unit": "ns",
            "range": "± 63175.084093636906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301409.6739130435,
            "unit": "ns",
            "range": "± 88361.05901132249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2565969.8571428573,
            "unit": "ns",
            "range": "± 41981.4531757448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2316348.470588235,
            "unit": "ns",
            "range": "± 73027.99090312971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3130799.57,
            "unit": "ns",
            "range": "± 275764.3564193877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044604.590625,
            "unit": "ns",
            "range": "± 53221.71290010388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 933349.663671875,
            "unit": "ns",
            "range": "± 7120.804749400892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616741.2001302083,
            "unit": "ns",
            "range": "± 5866.142833244272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636895.898828125,
            "unit": "ns",
            "range": "± 10778.213942983939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466338.2928936298,
            "unit": "ns",
            "range": "± 355.66719832563354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426240.1180338542,
            "unit": "ns",
            "range": "± 860.2020300735282"
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
          "id": "87e2a1721fdd873f1ba33ff2532c9cce9ba80886",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:27:15+09:00",
          "tree_id": "94e96c1daa692de7f03533f3adab42370d7ac916",
          "url": "https://github.com/planetarium/libplanet/commit/87e2a1721fdd873f1ba33ff2532c9cce9ba80886"
        },
        "date": 1722235688816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10741744.5,
            "unit": "ns",
            "range": "± 91967.20751671803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26764045.14285714,
            "unit": "ns",
            "range": "± 331857.46429149073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66803090.1,
            "unit": "ns",
            "range": "± 112152.2934144206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135987770.64285713,
            "unit": "ns",
            "range": "± 239341.51472219874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273030448.5,
            "unit": "ns",
            "range": "± 763774.1206835958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14108.65,
            "unit": "ns",
            "range": "± 391.07429617427573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110552.69767441861,
            "unit": "ns",
            "range": "± 3792.6306646975245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105767.46808510639,
            "unit": "ns",
            "range": "± 3888.047933430727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92602.70588235294,
            "unit": "ns",
            "range": "± 1830.1489613111373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3038252.6707317075,
            "unit": "ns",
            "range": "± 160354.25992001328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2803800.9305555555,
            "unit": "ns",
            "range": "± 137423.76453032155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4914.836956521739,
            "unit": "ns",
            "range": "± 487.12999544819735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26597.91208791209,
            "unit": "ns",
            "range": "± 1679.7637376749785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23425.473684210527,
            "unit": "ns",
            "range": "± 1889.8182274522467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29648.701030927834,
            "unit": "ns",
            "range": "± 6003.376036595556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1094,
            "unit": "ns",
            "range": "± 269.7310529195534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4673.595505617977,
            "unit": "ns",
            "range": "± 423.1141507028872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685817.3725490196,
            "unit": "ns",
            "range": "± 27430.50967514879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1287984.935483871,
            "unit": "ns",
            "range": "± 39235.743889923884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1098396.3505154639,
            "unit": "ns",
            "range": "± 65236.858658155776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9607762.111111112,
            "unit": "ns",
            "range": "± 1308717.847051152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184116.608108108,
            "unit": "ns",
            "range": "± 70794.49517236641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291120.0425531915,
            "unit": "ns",
            "range": "± 89277.78278325354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2616203.09375,
            "unit": "ns",
            "range": "± 78839.28251701292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2307577,
            "unit": "ns",
            "range": "± 52167.57368781573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2927147.789473684,
            "unit": "ns",
            "range": "± 148780.33052141592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3011267.9399739583,
            "unit": "ns",
            "range": "± 49049.28910944933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913514.437109375,
            "unit": "ns",
            "range": "± 5155.389532301653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610904.05859375,
            "unit": "ns",
            "range": "± 4549.671593740973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1655252.9680989583,
            "unit": "ns",
            "range": "± 14471.800657089441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463215.0039411272,
            "unit": "ns",
            "range": "± 385.3495377825488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426739.98313802085,
            "unit": "ns",
            "range": "± 1571.4439947372925"
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
          "id": "cf431ab333d8230dd3b95be212fba38c5c229356",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:32:01+09:00",
          "tree_id": "c5066b2e7de7929cfa68da54ed5d1b70584c49cd",
          "url": "https://github.com/planetarium/libplanet/commit/cf431ab333d8230dd3b95be212fba38c5c229356"
        },
        "date": 1722236793684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10682462.166666666,
            "unit": "ns",
            "range": "± 74919.15242183444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26767880.5,
            "unit": "ns",
            "range": "± 200605.54176973968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67612851.5,
            "unit": "ns",
            "range": "± 114156.92985585844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135910309,
            "unit": "ns",
            "range": "± 345271.9236118329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273059833,
            "unit": "ns",
            "range": "± 254839.04507890323"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14261.95652173913,
            "unit": "ns",
            "range": "± 359.0086702246099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109991.58536585367,
            "unit": "ns",
            "range": "± 3267.5307953836464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105420.35294117648,
            "unit": "ns",
            "range": "± 4222.374004389139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93335.1,
            "unit": "ns",
            "range": "± 2087.1167193044093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3151573.84375,
            "unit": "ns",
            "range": "± 93373.88978693423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2759925.0824742266,
            "unit": "ns",
            "range": "± 159696.7218372238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4912.191011235955,
            "unit": "ns",
            "range": "± 467.45638776653647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26947.433734939757,
            "unit": "ns",
            "range": "± 1425.306079175936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22833.583333333332,
            "unit": "ns",
            "range": "± 1657.9534033618975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29150.831578947367,
            "unit": "ns",
            "range": "± 5433.697147866897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1407.3118279569892,
            "unit": "ns",
            "range": "± 179.50039230274584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4719.090909090909,
            "unit": "ns",
            "range": "± 431.71235198791123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 695927.2528089888,
            "unit": "ns",
            "range": "± 36417.48406368995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282812.4666666666,
            "unit": "ns",
            "range": "± 37851.10015208262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1079826.1865671643,
            "unit": "ns",
            "range": "± 48006.39589623164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9470557,
            "unit": "ns",
            "range": "± 1276321.7370887531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190505.6428571427,
            "unit": "ns",
            "range": "± 33435.38889952736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2276827.3513513515,
            "unit": "ns",
            "range": "± 76707.54943188673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2588282.217391304,
            "unit": "ns",
            "range": "± 63602.23215705314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2319609.6393442624,
            "unit": "ns",
            "range": "± 104396.92262658461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3124778.04,
            "unit": "ns",
            "range": "± 248532.3340075712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3000885.973106971,
            "unit": "ns",
            "range": "± 39068.947907919115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921740.861328125,
            "unit": "ns",
            "range": "± 6341.04554974026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615112.5539713542,
            "unit": "ns",
            "range": "± 4712.465760577571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1643695.0622395833,
            "unit": "ns",
            "range": "± 19755.093369171664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465025.1041782924,
            "unit": "ns",
            "range": "± 827.6287481754787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427459.01689453126,
            "unit": "ns",
            "range": "± 1050.980184389572"
          }
        ]
      }
    ]
  }
}