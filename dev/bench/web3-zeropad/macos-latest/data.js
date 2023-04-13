window.BENCHMARK_DATA = {
  "lastUpdate": 1681372710557,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "4b1126f45c6003701f589bd833bd06b4d58ebc0e",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:24:14+09:00",
          "tree_id": "96574fd822fde38ca21564581d22e27b6154869f",
          "url": "https://github.com/planetarium/libplanet/commit/4b1126f45c6003701f589bd833bd06b4d58ebc0e"
        },
        "date": 1680857045654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7971344.375,
            "unit": "ns",
            "range": "± 203916.33651569876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19693431.315789472,
            "unit": "ns",
            "range": "± 430246.7704870792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51815223.1875,
            "unit": "ns",
            "range": "± 2232792.4426763584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104279736.40625,
            "unit": "ns",
            "range": "± 3224619.8084470853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213032726.04444444,
            "unit": "ns",
            "range": "± 8061587.490884776"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65527.232323232325,
            "unit": "ns",
            "range": "± 11318.365542228965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383961.35714285716,
            "unit": "ns",
            "range": "± 27778.527177408665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322401.5326086957,
            "unit": "ns",
            "range": "± 23664.937731000093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305279.4010989011,
            "unit": "ns",
            "range": "± 28694.512764659743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5732994.376623376,
            "unit": "ns",
            "range": "± 292990.4922430814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961173.5476190476,
            "unit": "ns",
            "range": "± 89222.72869368891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20486.030303030304,
            "unit": "ns",
            "range": "± 5838.262355856154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94304.35714285714,
            "unit": "ns",
            "range": "± 19274.332417604764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100521.98969072165,
            "unit": "ns",
            "range": "± 16925.23039386198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 234754.93684210526,
            "unit": "ns",
            "range": "± 21989.774190112523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6348.621212121212,
            "unit": "ns",
            "range": "± 1537.4673799275786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17527.520833333332,
            "unit": "ns",
            "range": "± 2581.7425367137585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1482901.445054945,
            "unit": "ns",
            "range": "± 107891.41314605395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2890586.5,
            "unit": "ns",
            "range": "± 108433.32087390935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2535766.6842105263,
            "unit": "ns",
            "range": "± 258657.98704044323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6920313.340425532,
            "unit": "ns",
            "range": "± 393654.59335959575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3494723.5459770113,
            "unit": "ns",
            "range": "± 332205.5618577955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3551569.262886598,
            "unit": "ns",
            "range": "± 336424.5560907989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4646405.2710843375,
            "unit": "ns",
            "range": "± 245087.02594610245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4643538.255102041,
            "unit": "ns",
            "range": "± 351457.89332651446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8577276.209876543,
            "unit": "ns",
            "range": "± 447677.74066980125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6752354.792100694,
            "unit": "ns",
            "range": "± 220771.33898404692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2061343.5614919355,
            "unit": "ns",
            "range": "± 58967.820874306984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1309779.75390625,
            "unit": "ns",
            "range": "± 19154.27225779483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2801174.653894761,
            "unit": "ns",
            "range": "± 130368.86558080676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876307.5555989583,
            "unit": "ns",
            "range": "± 12465.879006669244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761652.1473524305,
            "unit": "ns",
            "range": "± 16218.387097624844"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "b4d9e6457a2d387590dae0276c7c7a02c45b6bec",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:26:55+09:00",
          "tree_id": "4b1463dc4140dc32c232f7eb6d13b81287913ef6",
          "url": "https://github.com/planetarium/libplanet/commit/b4d9e6457a2d387590dae0276c7c7a02c45b6bec"
        },
        "date": 1680857079848,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8518881.44329897,
            "unit": "ns",
            "range": "± 627118.5320693961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19314127.833333332,
            "unit": "ns",
            "range": "± 668884.3345192263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47117519.1,
            "unit": "ns",
            "range": "± 1081555.29508734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93637264.14285715,
            "unit": "ns",
            "range": "± 1284825.864421075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193931455.15384614,
            "unit": "ns",
            "range": "± 2201493.6835623235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61756.92391304348,
            "unit": "ns",
            "range": "± 10204.203753693591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377357.0894736842,
            "unit": "ns",
            "range": "± 26108.394623957895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306630.4010989011,
            "unit": "ns",
            "range": "± 23300.59731092028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271542.27777777775,
            "unit": "ns",
            "range": "± 19790.210009064365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5433309.318181818,
            "unit": "ns",
            "range": "± 202738.78902991163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3882648.0967741935,
            "unit": "ns",
            "range": "± 175111.27974984882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17815.367816091955,
            "unit": "ns",
            "range": "± 2123.068819415755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89137.1043956044,
            "unit": "ns",
            "range": "± 8507.75286152985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83958.51162790698,
            "unit": "ns",
            "range": "± 11937.817947962129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258188.25555555554,
            "unit": "ns",
            "range": "± 18809.4056160897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8521.436170212766,
            "unit": "ns",
            "range": "± 1656.5738873557814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19319.615789473683,
            "unit": "ns",
            "range": "± 3964.1600136863476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597764.237113402,
            "unit": "ns",
            "range": "± 155764.22997633406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3006588.3908045976,
            "unit": "ns",
            "range": "± 157468.22857210337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2557713.285714286,
            "unit": "ns",
            "range": "± 198410.64090686306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7343278.804123712,
            "unit": "ns",
            "range": "± 450400.85022620956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3169790.3125,
            "unit": "ns",
            "range": "± 59495.60870654657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3230424.581818182,
            "unit": "ns",
            "range": "± 128063.41614934534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4296513.48,
            "unit": "ns",
            "range": "± 214430.01558811174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4209415.814606742,
            "unit": "ns",
            "range": "± 255618.41299446518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8334542.4,
            "unit": "ns",
            "range": "± 219166.43027940358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7632757.511640625,
            "unit": "ns",
            "range": "± 562364.1657335634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2073334.9796875,
            "unit": "ns",
            "range": "± 34589.836738265454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318444.8866210938,
            "unit": "ns",
            "range": "± 29342.405385697315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2659510.342247596,
            "unit": "ns",
            "range": "± 108668.41487778496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918828.9407784598,
            "unit": "ns",
            "range": "± 13118.276816463553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726518.7831333706,
            "unit": "ns",
            "range": "± 5920.909157595537"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "399c2a5b09de9147e9d826cfbceccae24c08bfdf",
          "message": "account-web3: support scrypt, reduce ethers dependency\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T19:12:03+09:00",
          "tree_id": "1d97dee16e6f78e5deb09cb941f9f803ceeed7de",
          "url": "https://github.com/planetarium/libplanet/commit/399c2a5b09de9147e9d826cfbceccae24c08bfdf"
        },
        "date": 1680863541713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8941410.732876712,
            "unit": "ns",
            "range": "± 443714.4753136275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21725262.157894738,
            "unit": "ns",
            "range": "± 480273.3916269014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54508332.40909091,
            "unit": "ns",
            "range": "± 2307458.712738984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108910479.22580644,
            "unit": "ns",
            "range": "± 4951539.108693561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236590903.42168674,
            "unit": "ns",
            "range": "± 25384467.623259168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72224.74736842106,
            "unit": "ns",
            "range": "± 11294.776082065946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 431196.5054945055,
            "unit": "ns",
            "range": "± 50566.07795204952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322589.81111111114,
            "unit": "ns",
            "range": "± 27846.768586215836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323677.1568627451,
            "unit": "ns",
            "range": "± 13219.171867212484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5605800.642857143,
            "unit": "ns",
            "range": "± 75191.6380177059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4022620.1428571427,
            "unit": "ns",
            "range": "± 48281.56559799409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23775.418367346938,
            "unit": "ns",
            "range": "± 5456.586432782134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114275.56701030929,
            "unit": "ns",
            "range": "± 15141.659671325122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112008.73469387754,
            "unit": "ns",
            "range": "± 11818.402306067528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 249553.62765957447,
            "unit": "ns",
            "range": "± 19307.945935886026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7827.416666666667,
            "unit": "ns",
            "range": "± 970.4671112588453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21441.680412371134,
            "unit": "ns",
            "range": "± 4141.567910994961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1661039.0842105264,
            "unit": "ns",
            "range": "± 176824.50603524913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3073865.201754386,
            "unit": "ns",
            "range": "± 133583.64633161033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2661950.805263158,
            "unit": "ns",
            "range": "± 218713.0343870452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7212258.136363637,
            "unit": "ns",
            "range": "± 404955.99876975943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3649351.470588235,
            "unit": "ns",
            "range": "± 303263.38163191336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3772411.5531914895,
            "unit": "ns",
            "range": "± 255384.18028293664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4809900.078947368,
            "unit": "ns",
            "range": "± 243867.8926561545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5013713.520833333,
            "unit": "ns",
            "range": "± 456189.8892022921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8942763,
            "unit": "ns",
            "range": "± 447497.04830392986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6760708.529129464,
            "unit": "ns",
            "range": "± 218271.84048967127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2086117.1393229167,
            "unit": "ns",
            "range": "± 31362.851460256315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320492.1342773438,
            "unit": "ns",
            "range": "± 28273.14021110493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2713862.8693704046,
            "unit": "ns",
            "range": "± 54562.375939206206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798143.4278645833,
            "unit": "ns",
            "range": "± 9539.178421363098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726727.4234793527,
            "unit": "ns",
            "range": "± 6588.420824504648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "919b1075eb30745dbf7dd175dee54ace3b8e31a6",
          "message": "tslib account: remove ethers dep",
          "timestamp": "2023-04-12T15:53:52+09:00",
          "tree_id": "2534f4fae211deb8004e3486d07c0ce2cd0db91e",
          "url": "https://github.com/planetarium/libplanet/commit/919b1075eb30745dbf7dd175dee54ace3b8e31a6"
        },
        "date": 1681283514016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8426410.3125,
            "unit": "ns",
            "range": "± 153928.9419780953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20853571.84285714,
            "unit": "ns",
            "range": "± 658410.6015258145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50684721.54545455,
            "unit": "ns",
            "range": "± 1866006.1567146801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100709898.26086956,
            "unit": "ns",
            "range": "± 2520295.329854839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205524047.3529412,
            "unit": "ns",
            "range": "± 6447109.379017287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67109.45652173914,
            "unit": "ns",
            "range": "± 10852.448432823805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373270.5652173913,
            "unit": "ns",
            "range": "± 13179.916065155387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314874.65555555554,
            "unit": "ns",
            "range": "± 17523.058254903568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284981.75,
            "unit": "ns",
            "range": "± 23309.18728714868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5391557.038461538,
            "unit": "ns",
            "range": "± 81912.16932240632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3885508.4166666665,
            "unit": "ns",
            "range": "± 55505.82183626955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17541.120689655174,
            "unit": "ns",
            "range": "± 2341.0425983894306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89287.68041237113,
            "unit": "ns",
            "range": "± 10657.49658939893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104660.91414141415,
            "unit": "ns",
            "range": "± 14845.369262878798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 240444.30107526883,
            "unit": "ns",
            "range": "± 16966.44433284926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7523.135416666667,
            "unit": "ns",
            "range": "± 1189.659253468839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18690.916666666668,
            "unit": "ns",
            "range": "± 2483.7507022398995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538269.9193548388,
            "unit": "ns",
            "range": "± 100979.32878772792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048336.111111111,
            "unit": "ns",
            "range": "± 139953.1482172045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2652359.292929293,
            "unit": "ns",
            "range": "± 234210.7180556603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6867543.179245283,
            "unit": "ns",
            "range": "± 273388.2817357994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3330446.46875,
            "unit": "ns",
            "range": "± 102795.18633419983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409891.1052631577,
            "unit": "ns",
            "range": "± 267729.25195883174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4613807.136363637,
            "unit": "ns",
            "range": "± 111756.37214912132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4542912.431578947,
            "unit": "ns",
            "range": "± 416871.62314711674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8140291.678571428,
            "unit": "ns",
            "range": "± 227184.83486833383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6505952.358816965,
            "unit": "ns",
            "range": "± 78419.64814405973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1948582.6141183036,
            "unit": "ns",
            "range": "± 18831.198475049765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298665.7331194195,
            "unit": "ns",
            "range": "± 4628.383902568544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2775771.166573661,
            "unit": "ns",
            "range": "± 46071.93245746337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844795.4458333333,
            "unit": "ns",
            "range": "± 6711.836334986195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721902.7584134615,
            "unit": "ns",
            "range": "± 2688.2887485032343"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "765bd4d00ad34bf9448beb221f0ffb55a2914c8a",
          "message": "tslib account: remove ethers dep",
          "timestamp": "2023-04-12T15:51:11+09:00",
          "tree_id": "21aba22af8df432c64c30b2eb14b22f96432d756",
          "url": "https://github.com/planetarium/libplanet/commit/765bd4d00ad34bf9448beb221f0ffb55a2914c8a"
        },
        "date": 1681283747452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8181505.3,
            "unit": "ns",
            "range": "± 209654.464471107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19505084.6875,
            "unit": "ns",
            "range": "± 356576.1067590328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64834515.62790698,
            "unit": "ns",
            "range": "± 20466680.497442123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107022733.3764706,
            "unit": "ns",
            "range": "± 8056127.457443317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234057259.23913044,
            "unit": "ns",
            "range": "± 20701334.98841235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77131.73595505618,
            "unit": "ns",
            "range": "± 9452.198719709313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 421879.85164835164,
            "unit": "ns",
            "range": "± 36649.3674137839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 414214.7021276596,
            "unit": "ns",
            "range": "± 81880.19114769723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 345213.0208333333,
            "unit": "ns",
            "range": "± 48082.8454154043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6049004.34375,
            "unit": "ns",
            "range": "± 362789.21988956694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4370999.757731959,
            "unit": "ns",
            "range": "± 301696.75852353795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27736.155555555557,
            "unit": "ns",
            "range": "± 4340.486774754962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128354.06521739131,
            "unit": "ns",
            "range": "± 20715.853201180074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138409,
            "unit": "ns",
            "range": "± 18757.19204210342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 308879.0698924731,
            "unit": "ns",
            "range": "± 47195.63977451773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12429.40909090909,
            "unit": "ns",
            "range": "± 1371.3254737147322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31199.566666666666,
            "unit": "ns",
            "range": "± 5268.553371689146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1847759.370786517,
            "unit": "ns",
            "range": "± 397969.04259335017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3167321.035714286,
            "unit": "ns",
            "range": "± 239581.76063280436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2677640.3448275863,
            "unit": "ns",
            "range": "± 277650.0284316792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7880010.904494382,
            "unit": "ns",
            "range": "± 1017309.4176588347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3948566.1707317075,
            "unit": "ns",
            "range": "± 981611.2045701569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3710325.1875,
            "unit": "ns",
            "range": "± 435856.9804259991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4803697.193548387,
            "unit": "ns",
            "range": "± 345973.1651925842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4627899.023809524,
            "unit": "ns",
            "range": "± 379883.97991384176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9868487.649484536,
            "unit": "ns",
            "range": "± 1060434.580737284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7614437.991699219,
            "unit": "ns",
            "range": "± 233505.50142235766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2202829.44140625,
            "unit": "ns",
            "range": "± 32698.33194464301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1455837.1379310344,
            "unit": "ns",
            "range": "± 41477.4552655249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3551294.753339214,
            "unit": "ns",
            "range": "± 161408.4508628115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 993216.1986750966,
            "unit": "ns",
            "range": "± 59057.02188329684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775695.802625868,
            "unit": "ns",
            "range": "± 15659.12593916577"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "4a6093ba77e43189b10937bdc5afd66c9b2afc25",
          "message": "Optional Web3KeyStore.get() weak key\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T16:35:44+09:00",
          "tree_id": "ef0c1191fe1e04be8608d78ed6c7b750bbada7f2",
          "url": "https://github.com/planetarium/libplanet/commit/4a6093ba77e43189b10937bdc5afd66c9b2afc25"
        },
        "date": 1681372654685,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8146867.705882353,
            "unit": "ns",
            "range": "± 158423.77263401976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21110780.766666666,
            "unit": "ns",
            "range": "± 382700.1040629346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50506552.233333334,
            "unit": "ns",
            "range": "± 922570.1635833501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101514645.76666667,
            "unit": "ns",
            "range": "± 1360170.0485656967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218824119.68421054,
            "unit": "ns",
            "range": "± 7494468.792748875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67628.22164948453,
            "unit": "ns",
            "range": "± 11406.377223712645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398682.13095238095,
            "unit": "ns",
            "range": "± 22157.653219859738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359498.77956989245,
            "unit": "ns",
            "range": "± 43181.40086042621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341779.9418604651,
            "unit": "ns",
            "range": "± 22895.947589220777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5755585.142105263,
            "unit": "ns",
            "range": "± 432384.5823776712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4199872.7235294115,
            "unit": "ns",
            "range": "± 225924.887307832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21146.847826086956,
            "unit": "ns",
            "range": "± 4517.3058109647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101821.52197802198,
            "unit": "ns",
            "range": "± 15254.522401918153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117159.27058823529,
            "unit": "ns",
            "range": "± 7744.242622423318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 292229.2157894737,
            "unit": "ns",
            "range": "± 42137.6685875338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9745.854838709678,
            "unit": "ns",
            "range": "± 1337.160405040418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25898.79069767442,
            "unit": "ns",
            "range": "± 3188.9088189656904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1806887.1288659794,
            "unit": "ns",
            "range": "± 193263.1828323383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3022716.0974025973,
            "unit": "ns",
            "range": "± 153449.4341238438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2558794.6516853934,
            "unit": "ns",
            "range": "± 214668.18938618552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7503001.363636363,
            "unit": "ns",
            "range": "± 506540.3381100884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419720.9139784947,
            "unit": "ns",
            "range": "± 433482.2406784403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3542615.8586956523,
            "unit": "ns",
            "range": "± 226189.86033790975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6437992.310526316,
            "unit": "ns",
            "range": "± 2333596.144116713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4765768.06741573,
            "unit": "ns",
            "range": "± 583376.4754157823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8515194.045454545,
            "unit": "ns",
            "range": "± 360944.6846946587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6675768.005022322,
            "unit": "ns",
            "range": "± 93368.84221646836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2118152.537661345,
            "unit": "ns",
            "range": "± 133228.7342010909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393563.483543883,
            "unit": "ns",
            "range": "± 53595.44121396302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3171574.8536595395,
            "unit": "ns",
            "range": "± 234936.6595523706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885402.8046875,
            "unit": "ns",
            "range": "± 16315.131454578377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778090.9381347656,
            "unit": "ns",
            "range": "± 26057.566355117975"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "3fb50722691ddfa2aeb7690fa068f4fbb187ed6f",
          "message": "Optional Web3KeyStore.get() weak key\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T16:38:27+09:00",
          "tree_id": "4b5c647b2564abf00b6c060c9d8219866ebd67aa",
          "url": "https://github.com/planetarium/libplanet/commit/3fb50722691ddfa2aeb7690fa068f4fbb187ed6f"
        },
        "date": 1681372662494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8549719.487804879,
            "unit": "ns",
            "range": "± 446722.87803855457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20831127.38764045,
            "unit": "ns",
            "range": "± 1209694.561322914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49963025.46428572,
            "unit": "ns",
            "range": "± 2119493.3637159183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99836538.88095239,
            "unit": "ns",
            "range": "± 2253523.2654566155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201165606.39285713,
            "unit": "ns",
            "range": "± 5713779.512792551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79099.3829787234,
            "unit": "ns",
            "range": "± 10769.903605619265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408740.5333333333,
            "unit": "ns",
            "range": "± 18179.430763371718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345899.70930232556,
            "unit": "ns",
            "range": "± 21066.522455763945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339363.77419354836,
            "unit": "ns",
            "range": "± 14319.824910115776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6068943.540816327,
            "unit": "ns",
            "range": "± 641962.0046029986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4328321.142857143,
            "unit": "ns",
            "range": "± 364318.18827498617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23979.979591836734,
            "unit": "ns",
            "range": "± 4298.21507662658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120042.42631578947,
            "unit": "ns",
            "range": "± 15553.171874109046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118541.50505050505,
            "unit": "ns",
            "range": "± 11441.068645118827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 255845.28125,
            "unit": "ns",
            "range": "± 22227.48391268087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6837.404255319149,
            "unit": "ns",
            "range": "± 1493.724934151676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17559.29069767442,
            "unit": "ns",
            "range": "± 2390.770991154892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1761431.5,
            "unit": "ns",
            "range": "± 298085.4668041524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3182218.4264705884,
            "unit": "ns",
            "range": "± 150397.72056250554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3180102.265957447,
            "unit": "ns",
            "range": "± 604704.5030762702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7225400.386597938,
            "unit": "ns",
            "range": "± 467769.0405193054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3265068.946236559,
            "unit": "ns",
            "range": "± 227114.36608373467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3333090.628205128,
            "unit": "ns",
            "range": "± 157151.57006741036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4911062.663157894,
            "unit": "ns",
            "range": "± 350139.54188099067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4666769.075268817,
            "unit": "ns",
            "range": "± 478836.31605113053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8760465.77173913,
            "unit": "ns",
            "range": "± 590675.2976244922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7068991.2646059785,
            "unit": "ns",
            "range": "± 398166.2730791728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2102525.2423997964,
            "unit": "ns",
            "range": "± 118168.591875311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318648.5325520833,
            "unit": "ns",
            "range": "± 19839.56530180048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2703981.798697917,
            "unit": "ns",
            "range": "± 39797.2993496945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806606.6643415178,
            "unit": "ns",
            "range": "± 10489.285001509174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718171.3190104166,
            "unit": "ns",
            "range": "± 13374.250019581972"
          }
        ]
      }
    ]
  }
}