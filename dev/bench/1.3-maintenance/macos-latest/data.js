window.BENCHMARK_DATA = {
  "lastUpdate": 1684725945912,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/planetarium/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684481553768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7983259.53030303,
            "unit": "ns",
            "range": "± 215043.9338346767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20408779.109195404,
            "unit": "ns",
            "range": "± 1508613.055877317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51317307.823529415,
            "unit": "ns",
            "range": "± 3394324.8105569896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104388753.4375,
            "unit": "ns",
            "range": "± 1951033.2906544495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209274282.6153846,
            "unit": "ns",
            "range": "± 3190812.887270931"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62930.54255319149,
            "unit": "ns",
            "range": "± 7887.268627439765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340698.5306122449,
            "unit": "ns",
            "range": "± 35830.83477429412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318676.170212766,
            "unit": "ns",
            "range": "± 24464.932338242877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295634.16279069765,
            "unit": "ns",
            "range": "± 16584.05907941895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189339.0714285714,
            "unit": "ns",
            "range": "± 71752.356402436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764331.846153846,
            "unit": "ns",
            "range": "± 53697.31463932213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18087.7688172043,
            "unit": "ns",
            "range": "± 2120.1723583533862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95353.97849462366,
            "unit": "ns",
            "range": "± 13809.739786751717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111351.2741935484,
            "unit": "ns",
            "range": "± 12621.811415793241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111766.58064516129,
            "unit": "ns",
            "range": "± 13753.567564313742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8929.03125,
            "unit": "ns",
            "range": "± 1679.8556012700678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22304.3,
            "unit": "ns",
            "range": "± 3480.838715254725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1731367.5357142857,
            "unit": "ns",
            "range": "± 49524.492235123675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3016207.8988764044,
            "unit": "ns",
            "range": "± 172428.16909348904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2505766.829787234,
            "unit": "ns",
            "range": "± 200933.8758125854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6809932.9375,
            "unit": "ns",
            "range": "± 527639.712763465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419489.2967032967,
            "unit": "ns",
            "range": "± 307910.6692493961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3651815.533333333,
            "unit": "ns",
            "range": "± 288262.9406882355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4582968,
            "unit": "ns",
            "range": "± 234165.8742362445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4745198.108247423,
            "unit": "ns",
            "range": "± 568712.6905210383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8081168.213483146,
            "unit": "ns",
            "range": "± 443178.3236764261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6807244.983940972,
            "unit": "ns",
            "range": "± 135982.65592200268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930129.7726004464,
            "unit": "ns",
            "range": "± 9493.538227491688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315765.9602399555,
            "unit": "ns",
            "range": "± 36675.88921226931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676005.8768682065,
            "unit": "ns",
            "range": "± 65332.353655424704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 775570.351422991,
            "unit": "ns",
            "range": "± 2005.2861882032614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714267.3071664664,
            "unit": "ns",
            "range": "± 7880.24557797215"
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
          "id": "9f8d76421cd2de19f739ef0a53b4fe02b3c00c05",
          "message": "Merge pull request #3192 from greymistcube/prepare/1.3.1\n\n🔧 Prepare 1.3.1",
          "timestamp": "2023-05-22T12:10:53+09:00",
          "tree_id": "c546d985806a3d5acd8e4c9d43c70e1c7aa4249d",
          "url": "https://github.com/planetarium/libplanet/commit/9f8d76421cd2de19f739ef0a53b4fe02b3c00c05"
        },
        "date": 1684725883310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7569760.196969697,
            "unit": "ns",
            "range": "± 237653.7785674894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18984573.045454547,
            "unit": "ns",
            "range": "± 457849.1887623382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47358097.86666667,
            "unit": "ns",
            "range": "± 883225.5473618816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91334420.64285715,
            "unit": "ns",
            "range": "± 1593730.630826089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187284968.85714287,
            "unit": "ns",
            "range": "± 2081128.8176038156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57747.40217391304,
            "unit": "ns",
            "range": "± 8298.656245070126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300407.9772727273,
            "unit": "ns",
            "range": "± 16250.362542358807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291762.1157894737,
            "unit": "ns",
            "range": "± 16869.00095785869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271490.64444444445,
            "unit": "ns",
            "range": "± 15086.63086383431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003276.847826087,
            "unit": "ns",
            "range": "± 99460.57561740855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3611584.4,
            "unit": "ns",
            "range": "± 63536.64016118124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16522.78021978022,
            "unit": "ns",
            "range": "± 1871.3352381073182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81943.80526315789,
            "unit": "ns",
            "range": "± 7501.032941739231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77765.54945054946,
            "unit": "ns",
            "range": "± 6240.098110453315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92786.57216494845,
            "unit": "ns",
            "range": "± 12460.329692541096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4919.764705882353,
            "unit": "ns",
            "range": "± 598.0626390003536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15493.236263736264,
            "unit": "ns",
            "range": "± 1516.5437300737112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479694.6145833333,
            "unit": "ns",
            "range": "± 126456.42360203892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774612.8882352943,
            "unit": "ns",
            "range": "± 149082.0748610751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2353081.09375,
            "unit": "ns",
            "range": "± 175009.1854325654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6104561.819148936,
            "unit": "ns",
            "range": "± 232954.5764761417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3132243.598039216,
            "unit": "ns",
            "range": "± 116003.60304046678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3206902.611111111,
            "unit": "ns",
            "range": "± 95652.73757915819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4306815.974576271,
            "unit": "ns",
            "range": "± 190429.95578747365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4108156.7906976743,
            "unit": "ns",
            "range": "± 221211.916510051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7260292.978260869,
            "unit": "ns",
            "range": "± 279349.3303446015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6008597.472395834,
            "unit": "ns",
            "range": "± 48432.34492032527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864818.5667067308,
            "unit": "ns",
            "range": "± 5928.041353123987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228679.659375,
            "unit": "ns",
            "range": "± 6683.535397050014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2353308.3816964286,
            "unit": "ns",
            "range": "± 16498.504381375787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847445.1460286458,
            "unit": "ns",
            "range": "± 5539.237823644249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791431.3526692708,
            "unit": "ns",
            "range": "± 4411.116961089264"
          }
        ]
      }
    ]
  }
}