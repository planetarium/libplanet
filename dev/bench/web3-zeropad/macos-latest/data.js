window.BENCHMARK_DATA = {
  "lastUpdate": 1680857155398,
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
      }
    ]
  }
}