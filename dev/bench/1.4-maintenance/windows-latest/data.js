window.BENCHMARK_DATA = {
  "lastUpdate": 1686143419250,
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
          "id": "626bf947bc1cc3f3718dbb5196f622beda682598",
          "message": "Merge pull request #3202 from greymistcube/release/1.4.0\n\n🚀 Release 1.4.0",
          "timestamp": "2023-06-07T17:56:29+09:00",
          "tree_id": "1f32bb1e8779c3a4e467e6db02a8d55373fb9578",
          "url": "https://github.com/planetarium/libplanet/commit/626bf947bc1cc3f3718dbb5196f622beda682598"
        },
        "date": 1686129653170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779972.9166666667,
            "unit": "ns",
            "range": "± 193767.464804251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3333204.5454545454,
            "unit": "ns",
            "range": "± 268170.36869454465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2700776.0416666665,
            "unit": "ns",
            "range": "± 254988.94495945328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6899696.842105263,
            "unit": "ns",
            "range": "± 457558.03200194845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61778.02197802198,
            "unit": "ns",
            "range": "± 11896.206698848748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8652294.736842105,
            "unit": "ns",
            "range": "± 372162.3577251181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25055341.463414636,
            "unit": "ns",
            "range": "± 889538.9982950746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62492736.666666664,
            "unit": "ns",
            "range": "± 1832507.2126655504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127061992.85714285,
            "unit": "ns",
            "range": "± 2188798.918432132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255365858.82352942,
            "unit": "ns",
            "range": "± 8159939.1360296095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6035618.645833333,
            "unit": "ns",
            "range": "± 88169.38772263794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2076274.8046875,
            "unit": "ns",
            "range": "± 35868.627282205656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448387.2005208333,
            "unit": "ns",
            "range": "± 19891.789082583433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3227604.8828125,
            "unit": "ns",
            "range": "± 22937.96370425161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048864.9609375,
            "unit": "ns",
            "range": "± 11161.842929246312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 972463.57421875,
            "unit": "ns",
            "range": "± 9099.082363857107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3686670.9677419355,
            "unit": "ns",
            "range": "± 240963.3056949639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4077202.0833333335,
            "unit": "ns",
            "range": "± 266978.53963791364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5401883.673469388,
            "unit": "ns",
            "range": "± 374683.260858835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4913642.783505155,
            "unit": "ns",
            "range": "± 396353.2392448431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8744159.770114943,
            "unit": "ns",
            "range": "± 476448.8206634313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338342.26804123714,
            "unit": "ns",
            "range": "± 45260.419691334486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331195.8333333333,
            "unit": "ns",
            "range": "± 43502.35303174123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279710.4166666667,
            "unit": "ns",
            "range": "± 39287.71732305328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5202224.2105263155,
            "unit": "ns",
            "range": "± 302467.9683113954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4345493.81443299,
            "unit": "ns",
            "range": "± 255206.39066516375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25487.628865979383,
            "unit": "ns",
            "range": "± 8820.752728319623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110952.63157894737,
            "unit": "ns",
            "range": "± 19700.62015497181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115837.8947368421,
            "unit": "ns",
            "range": "± 22755.77634849763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142337.75510204083,
            "unit": "ns",
            "range": "± 30175.74387848325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7579.032258064516,
            "unit": "ns",
            "range": "± 1725.107472717676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25015.30612244898,
            "unit": "ns",
            "range": "± 9269.35258408069"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29499207c2eab284a56039e818bb3c5065ce26dc",
          "message": "Merge pull request #3203 from greymistcube/prepare/1.4.1\n\n🔧 Prepare 1.4.1",
          "timestamp": "2023-06-07T21:53:39+09:00",
          "tree_id": "00a0c7681d77723219c692049b0c449a1d5aa778",
          "url": "https://github.com/planetarium/libplanet/commit/29499207c2eab284a56039e818bb3c5065ce26dc"
        },
        "date": 1686143365403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376353.0612244897,
            "unit": "ns",
            "range": "± 124134.60785301153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565513.5416666665,
            "unit": "ns",
            "range": "± 155816.95105393897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2070204.2105263157,
            "unit": "ns",
            "range": "± 141349.71864424163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5439784,
            "unit": "ns",
            "range": "± 321448.6957258318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54186.868686868685,
            "unit": "ns",
            "range": "± 4628.409310755373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7316715.384615385,
            "unit": "ns",
            "range": "± 69157.64414430081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19908800,
            "unit": "ns",
            "range": "± 122483.99581483791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50796723.07692308,
            "unit": "ns",
            "range": "± 264842.60468514176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101691285.71428572,
            "unit": "ns",
            "range": "± 949312.447436113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203699357.14285713,
            "unit": "ns",
            "range": "± 1430520.575344345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4868818.59375,
            "unit": "ns",
            "range": "± 16274.592068423177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537106.2760416667,
            "unit": "ns",
            "range": "± 18016.732884449997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1196159.1378348214,
            "unit": "ns",
            "range": "± 6156.897648884376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623602.8776041665,
            "unit": "ns",
            "range": "± 7964.979489001048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852474.453125,
            "unit": "ns",
            "range": "± 3069.1652511035686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761571.62109375,
            "unit": "ns",
            "range": "± 2862.3773982397397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3256150,
            "unit": "ns",
            "range": "± 117218.51488804206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3404369.0476190476,
            "unit": "ns",
            "range": "± 107160.79891201395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4276807.692307692,
            "unit": "ns",
            "range": "± 65063.38526824517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4200853.125,
            "unit": "ns",
            "range": "± 192512.79649798915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6724956,
            "unit": "ns",
            "range": "± 119521.17343801474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274193.24324324325,
            "unit": "ns",
            "range": "± 13685.692269626932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265527.38095238095,
            "unit": "ns",
            "range": "± 13892.152167793396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250150.50505050505,
            "unit": "ns",
            "range": "± 15349.582017425364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4112800,
            "unit": "ns",
            "range": "± 60753.9425754538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763973.3333333335,
            "unit": "ns",
            "range": "± 49846.51394411601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22329.473684210527,
            "unit": "ns",
            "range": "± 2193.359110617753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94883.15789473684,
            "unit": "ns",
            "range": "± 7713.123006756552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80260,
            "unit": "ns",
            "range": "± 5938.647313563386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105702.1052631579,
            "unit": "ns",
            "range": "± 15531.279207412023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5600,
            "unit": "ns",
            "range": "± 1027.287276732351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21615.957446808512,
            "unit": "ns",
            "range": "± 2241.749661883961"
          }
        ]
      }
    ]
  }
}