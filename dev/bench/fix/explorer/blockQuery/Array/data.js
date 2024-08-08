window.BENCHMARK_DATA = {
  "lastUpdate": 1723120635460,
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
          "id": "df4ecc35dea4d4c0678de4a325f9fc46056b8015",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:34:25+09:00",
          "tree_id": "57e53015f2883ae6f46880f5f7cda7033a1ce87f",
          "url": "https://github.com/planetarium/libplanet/commit/df4ecc35dea4d4c0678de4a325f9fc46056b8015"
        },
        "date": 1722237832707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10769038.5625,
            "unit": "ns",
            "range": "± 190873.38107760294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26469863,
            "unit": "ns",
            "range": "± 218479.4039583594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68912802.46666667,
            "unit": "ns",
            "range": "± 114629.59951754338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136126654.42857143,
            "unit": "ns",
            "range": "± 272849.480528879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272442183.3,
            "unit": "ns",
            "range": "± 610821.8773817548"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14070.6875,
            "unit": "ns",
            "range": "± 232.52461339250374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110928.22448979592,
            "unit": "ns",
            "range": "± 4416.606381343156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105094.73170731707,
            "unit": "ns",
            "range": "± 3509.537498192534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91991.66666666667,
            "unit": "ns",
            "range": "± 2742.016437528805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3039701.19,
            "unit": "ns",
            "range": "± 202385.18886048652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2704064.94,
            "unit": "ns",
            "range": "± 184443.13641075604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4975.466666666666,
            "unit": "ns",
            "range": "± 498.37316126088547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26898.41935483871,
            "unit": "ns",
            "range": "± 1998.208068563805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22854.10769230769,
            "unit": "ns",
            "range": "± 1061.5844308608496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29647.531914893618,
            "unit": "ns",
            "range": "± 4745.313288777455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1255.6875,
            "unit": "ns",
            "range": "± 240.1340990495015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4674.033707865168,
            "unit": "ns",
            "range": "± 433.20199071560046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689578.5810810811,
            "unit": "ns",
            "range": "± 34331.865453750564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279377.794117647,
            "unit": "ns",
            "range": "± 40539.30406466343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1086823.25,
            "unit": "ns",
            "range": "± 45854.505489821844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9423815.1,
            "unit": "ns",
            "range": "± 1221645.435297849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2146505.814814815,
            "unit": "ns",
            "range": "± 63078.88550482718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2324562.785714286,
            "unit": "ns",
            "range": "± 70252.47594926276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2584988.285714286,
            "unit": "ns",
            "range": "± 43405.06747343709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2337259.1428571427,
            "unit": "ns",
            "range": "± 38989.780751562896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3090280.9587628865,
            "unit": "ns",
            "range": "± 191986.4650967136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3029548.701953125,
            "unit": "ns",
            "range": "± 45139.55914205974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921159.2794270833,
            "unit": "ns",
            "range": "± 5369.619527874845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615590.6172526042,
            "unit": "ns",
            "range": "± 4686.461863286448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1625766.634765625,
            "unit": "ns",
            "range": "± 17844.080908951022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464491.2645089286,
            "unit": "ns",
            "range": "± 594.2578044228211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420997.35517578124,
            "unit": "ns",
            "range": "± 850.1115255028932"
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
          "id": "a4bbabe9171ee2fa07b5935eebe8f3ba06c10a61",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T17:30:17+09:00",
          "tree_id": "b08a50a006b15eea0ac00ff2e4541e50aae7dacf",
          "url": "https://github.com/planetarium/libplanet/commit/a4bbabe9171ee2fa07b5935eebe8f3ba06c10a61"
        },
        "date": 1722242316007,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10689746.583333334,
            "unit": "ns",
            "range": "± 91535.54507051378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26506609.714285713,
            "unit": "ns",
            "range": "± 191326.8800333521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67143512.5,
            "unit": "ns",
            "range": "± 115774.73847766372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135754991.53333333,
            "unit": "ns",
            "range": "± 248582.77675364472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277553238.6333333,
            "unit": "ns",
            "range": "± 396486.2458741911"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13936.529411764706,
            "unit": "ns",
            "range": "± 284.5156229557216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111286.31395348837,
            "unit": "ns",
            "range": "± 4082.1670088780165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104882.72549019608,
            "unit": "ns",
            "range": "± 4223.370720542686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94531.8,
            "unit": "ns",
            "range": "± 2917.643487070869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2960881.99,
            "unit": "ns",
            "range": "± 197075.46193019536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2733009.97979798,
            "unit": "ns",
            "range": "± 160611.58928842802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4786.065934065934,
            "unit": "ns",
            "range": "± 497.07059195065375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27419.247311827956,
            "unit": "ns",
            "range": "± 2086.140651683588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22422.16129032258,
            "unit": "ns",
            "range": "± 1461.0242483057723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30139.556701030928,
            "unit": "ns",
            "range": "± 5917.495238290353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1211,
            "unit": "ns",
            "range": "± 273.2144541034286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5024.04347826087,
            "unit": "ns",
            "range": "± 579.4345085833421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678041.9567901235,
            "unit": "ns",
            "range": "± 34574.56126838394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1274415.0857142857,
            "unit": "ns",
            "range": "± 40602.03863642334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1075706.4736842106,
            "unit": "ns",
            "range": "± 51852.40590251622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9591002.29,
            "unit": "ns",
            "range": "± 1381635.7969895315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165453.1842105263,
            "unit": "ns",
            "range": "± 73492.95251076075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290534.533333333,
            "unit": "ns",
            "range": "± 86061.81621491085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2590562.8333333335,
            "unit": "ns",
            "range": "± 54742.90001371653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2345411.04,
            "unit": "ns",
            "range": "± 90073.89740152477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3053745.88,
            "unit": "ns",
            "range": "± 275125.6046303355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021983.8330729166,
            "unit": "ns",
            "range": "± 33154.35104485398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919237.7011067708,
            "unit": "ns",
            "range": "± 6267.475447817991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 620155.4419921875,
            "unit": "ns",
            "range": "± 5239.921718080024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651050.2338169643,
            "unit": "ns",
            "range": "± 2616.259283156165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467104.58063616074,
            "unit": "ns",
            "range": "± 515.6935127449142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424499.96226283483,
            "unit": "ns",
            "range": "± 478.4086724701938"
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
          "id": "55b5b38737e74fde498d2b2a38cc4056bec0a2c2",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-08-08T21:28:12+09:00",
          "tree_id": "f681f5862dae3e359abfe88dfd9c1121f6ec910b",
          "url": "https://github.com/planetarium/libplanet/commit/55b5b38737e74fde498d2b2a38cc4056bec0a2c2"
        },
        "date": 1723120582320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10858596.05,
            "unit": "ns",
            "range": "± 242377.41696359572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26466256.35714286,
            "unit": "ns",
            "range": "± 199338.33473793595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67626043.93333334,
            "unit": "ns",
            "range": "± 119169.17597232855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136061098.63333333,
            "unit": "ns",
            "range": "± 168761.48645557504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273222321.9,
            "unit": "ns",
            "range": "± 437129.18541904096"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14057.5625,
            "unit": "ns",
            "range": "± 269.6244224224999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112808.91228070176,
            "unit": "ns",
            "range": "± 4861.650991912924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103843.20588235294,
            "unit": "ns",
            "range": "± 3024.0387356166266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92298.56,
            "unit": "ns",
            "range": "± 2365.843807890397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3080045.007246377,
            "unit": "ns",
            "range": "± 148508.99355036332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2684057.82,
            "unit": "ns",
            "range": "± 183892.15954677167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5142.617021276596,
            "unit": "ns",
            "range": "± 659.5091015110997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26778.481927710844,
            "unit": "ns",
            "range": "± 1426.7084184425264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24292.422680412372,
            "unit": "ns",
            "range": "± 1708.0157519951545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28887.295698924732,
            "unit": "ns",
            "range": "± 5138.204917383578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1120.6559139784947,
            "unit": "ns",
            "range": "± 195.73043211783903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4679.931818181818,
            "unit": "ns",
            "range": "± 389.93647568279704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 671653.7833333333,
            "unit": "ns",
            "range": "± 29601.448169505504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280629.3921568627,
            "unit": "ns",
            "range": "± 52156.92763462144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1086809.3048780488,
            "unit": "ns",
            "range": "± 57546.78542570234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9557007.58,
            "unit": "ns",
            "range": "± 1357805.9741618524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2197326.75,
            "unit": "ns",
            "range": "± 72828.97508051703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288483.4237288134,
            "unit": "ns",
            "range": "± 101328.08586896864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2574033.033333333,
            "unit": "ns",
            "range": "± 53240.66718699243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2373909.75,
            "unit": "ns",
            "range": "± 105476.57294485197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2942947.257575758,
            "unit": "ns",
            "range": "± 134404.2462143229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3069787.709765625,
            "unit": "ns",
            "range": "± 20310.404777723532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925424.447126116,
            "unit": "ns",
            "range": "± 4478.093106200536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613722.1649739583,
            "unit": "ns",
            "range": "± 5630.891962337994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1661119.1343470982,
            "unit": "ns",
            "range": "± 11086.670634927115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462124.40227864584,
            "unit": "ns",
            "range": "± 931.4920398694735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 412170.5796875,
            "unit": "ns",
            "range": "± 1638.5532855337074"
          }
        ]
      }
    ]
  }
}