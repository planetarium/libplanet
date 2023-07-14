window.BENCHMARK_DATA = {
  "lastUpdate": 1689321055352,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "720e0364ffcdaeac1460d530348447674b3391f3",
          "message": "Merge pull request #3263 from OnedgeLee/release/2.4.0\n\n🚀 Release 2.4.0",
          "timestamp": "2023-07-03T21:07:47+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/planetarium/libplanet/commit/720e0364ffcdaeac1460d530348447674b3391f3"
        },
        "date": 1688387666392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624072.0430107526,
            "unit": "ns",
            "range": "± 204346.16057158003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3018604.395604396,
            "unit": "ns",
            "range": "± 287959.38058926445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155940.625,
            "unit": "ns",
            "range": "± 268450.2249572633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6132865.934065934,
            "unit": "ns",
            "range": "± 691266.0621754165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63917.34693877551,
            "unit": "ns",
            "range": "± 19298.448340543324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8028316.666666667,
            "unit": "ns",
            "range": "± 470029.54945359606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21300741.836734693,
            "unit": "ns",
            "range": "± 1688574.175119686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56867610.1010101,
            "unit": "ns",
            "range": "± 3313279.619876471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112314610.63829787,
            "unit": "ns",
            "range": "± 4250824.336333205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235434068.2352941,
            "unit": "ns",
            "range": "± 12658246.160951402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5691620.368303572,
            "unit": "ns",
            "range": "± 89043.59059892422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1796099.3088942308,
            "unit": "ns",
            "range": "± 20278.972809824074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379561.4192708333,
            "unit": "ns",
            "range": "± 17441.31185826388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3005115.9830729165,
            "unit": "ns",
            "range": "± 23799.509601747417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974794.140625,
            "unit": "ns",
            "range": "± 12705.211158237746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915753.876953125,
            "unit": "ns",
            "range": "± 11475.740961799322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328421.505376344,
            "unit": "ns",
            "range": "± 272078.5463833138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3523380.85106383,
            "unit": "ns",
            "range": "± 291323.2702710487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4663027.956989247,
            "unit": "ns",
            "range": "± 405598.04003406665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3987529.4736842103,
            "unit": "ns",
            "range": "± 362109.70885868283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7665418.367346939,
            "unit": "ns",
            "range": "± 787281.7792031949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332898.96907216497,
            "unit": "ns",
            "range": "± 49932.40116824061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304103.6082474227,
            "unit": "ns",
            "range": "± 49191.987960980645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267987.6288659794,
            "unit": "ns",
            "range": "± 46841.71764599898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4438524.731182796,
            "unit": "ns",
            "range": "± 381001.5752723095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3938882.2916666665,
            "unit": "ns",
            "range": "± 295864.25194310123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29258.163265306124,
            "unit": "ns",
            "range": "± 12595.531227419693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105931.05263157895,
            "unit": "ns",
            "range": "± 24237.154065154835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100467.36842105263,
            "unit": "ns",
            "range": "± 24976.31832443831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126651.57894736843,
            "unit": "ns",
            "range": "± 33798.249555447655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5336.046511627907,
            "unit": "ns",
            "range": "± 1387.4998921630206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25522.448979591838,
            "unit": "ns",
            "range": "± 10599.956531833117"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37086a72265685660e5a23d42ee195af04bd0226",
          "message": "Merge pull request #3264 from OnedgeLee/prepare/2.4.1\n\n🔧 Prepare 2.4.1",
          "timestamp": "2023-07-03T21:30:42+09:00",
          "tree_id": "a3832bd7cdeea67403d08adccdbf0f97b8f9efda",
          "url": "https://github.com/planetarium/libplanet/commit/37086a72265685660e5a23d42ee195af04bd0226"
        },
        "date": 1688388622948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664856.8421052631,
            "unit": "ns",
            "range": "± 241859.01452047474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3440617.3913043477,
            "unit": "ns",
            "range": "± 295674.2652359015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2401449.4505494507,
            "unit": "ns",
            "range": "± 214360.61017392908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6581505.434782608,
            "unit": "ns",
            "range": "± 506390.592061484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61445.833333333336,
            "unit": "ns",
            "range": "± 17363.712413304074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9250653.125,
            "unit": "ns",
            "range": "± 786675.9283216043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23511196.907216493,
            "unit": "ns",
            "range": "± 1859863.7502994237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62383710,
            "unit": "ns",
            "range": "± 2485938.394679735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129397642.42424242,
            "unit": "ns",
            "range": "± 4047175.7912177397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268946740.90909094,
            "unit": "ns",
            "range": "± 6544686.927261365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6378517.96875,
            "unit": "ns",
            "range": "± 79676.1756889229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989618.9732142857,
            "unit": "ns",
            "range": "± 31274.641906536308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1517774.4921875,
            "unit": "ns",
            "range": "± 21600.690118522904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3359932.1484375,
            "unit": "ns",
            "range": "± 47377.46160817779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1064640.2734375,
            "unit": "ns",
            "range": "± 24335.355029276972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999786.6015625,
            "unit": "ns",
            "range": "± 20374.330025211028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3865425,
            "unit": "ns",
            "range": "± 367460.6135714626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4170293.8775510206,
            "unit": "ns",
            "range": "± 335510.13560867246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5260383.870967742,
            "unit": "ns",
            "range": "± 415107.43745243957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4386026.315789473,
            "unit": "ns",
            "range": "± 423632.2206143734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7994695,
            "unit": "ns",
            "range": "± 723869.212944918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350918.94736842107,
            "unit": "ns",
            "range": "± 46621.83602803368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341891.8367346939,
            "unit": "ns",
            "range": "± 50352.71401784376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289951.0416666667,
            "unit": "ns",
            "range": "± 38651.0788159962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4945691.489361702,
            "unit": "ns",
            "range": "± 368328.80834360817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4209318.279569892,
            "unit": "ns",
            "range": "± 326635.57739948493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25608.333333333332,
            "unit": "ns",
            "range": "± 8499.977296151308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118697.93814432989,
            "unit": "ns",
            "range": "± 24696.284215197247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118343.43434343435,
            "unit": "ns",
            "range": "± 25592.93653197751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145708.2474226804,
            "unit": "ns",
            "range": "± 31262.099891159116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7551.724137931034,
            "unit": "ns",
            "range": "± 2118.8995646032167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27589.690721649484,
            "unit": "ns",
            "range": "± 9366.02330830347"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65c0ba956f666688c1ec9d0d81756d8a9a7af778",
          "message": "Merge pull request #3298 from greymistcube/chore/rocksdb-optimization\n\n⚡ `RocksDBStore` Concat optimization",
          "timestamp": "2023-07-14T16:34:29+09:00",
          "tree_id": "75da47c8ef65a8990e003614dab5a1d38ddb5f49",
          "url": "https://github.com/planetarium/libplanet/commit/65c0ba956f666688c1ec9d0d81756d8a9a7af778"
        },
        "date": 1689320994320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310587.7551020407,
            "unit": "ns",
            "range": "± 88791.00941914876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527125.974025974,
            "unit": "ns",
            "range": "± 129062.60761697812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684802.105263158,
            "unit": "ns",
            "range": "± 102964.84524935122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4861735,
            "unit": "ns",
            "range": "± 308216.6345496805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46507.46268656717,
            "unit": "ns",
            "range": "± 2217.5138572103547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7148917.647058823,
            "unit": "ns",
            "range": "± 143056.48462798758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19352938.46153846,
            "unit": "ns",
            "range": "± 137733.35675900214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47822892.85714286,
            "unit": "ns",
            "range": "± 784283.5404801837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95505700,
            "unit": "ns",
            "range": "± 542016.205728876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190073366.66666666,
            "unit": "ns",
            "range": "± 3287249.290748088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862482.692307692,
            "unit": "ns",
            "range": "± 12101.94768376965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532005.703125,
            "unit": "ns",
            "range": "± 8520.983119097986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176769.0805288462,
            "unit": "ns",
            "range": "± 3490.2467822806666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2715666.5625,
            "unit": "ns",
            "range": "± 9265.698349881313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870916.9921875,
            "unit": "ns",
            "range": "± 2430.724890490299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776840.95703125,
            "unit": "ns",
            "range": "± 2624.906535606137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3079402.6315789474,
            "unit": "ns",
            "range": "± 151863.63178736746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3329278.947368421,
            "unit": "ns",
            "range": "± 73409.65406499011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4092153.846153846,
            "unit": "ns",
            "range": "± 56511.792506588325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3553348.888888889,
            "unit": "ns",
            "range": "± 134998.4185466667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6000529.0322580645,
            "unit": "ns",
            "range": "± 182827.52927927894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259894.73684210525,
            "unit": "ns",
            "range": "± 5706.961994325735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251300,
            "unit": "ns",
            "range": "± 8734.31194360524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215580,
            "unit": "ns",
            "range": "± 4933.249169504927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972866.6666666665,
            "unit": "ns",
            "range": "± 71116.52075157729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3664888,
            "unit": "ns",
            "range": "± 94596.30154856302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18254.736842105263,
            "unit": "ns",
            "range": "± 1660.0928211073165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80908.33333333333,
            "unit": "ns",
            "range": "± 6112.89692142194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70169.76744186046,
            "unit": "ns",
            "range": "± 2587.6570468762015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89295.91836734694,
            "unit": "ns",
            "range": "± 13887.099393331844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5041.489361702128,
            "unit": "ns",
            "range": "± 768.9413997371294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18154.736842105263,
            "unit": "ns",
            "range": "± 1674.322245926001"
          }
        ]
      }
    ]
  }
}