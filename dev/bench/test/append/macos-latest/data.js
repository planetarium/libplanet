window.BENCHMARK_DATA = {
  "lastUpdate": 1683021855362,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "bce0baa3fa24e92c1b95c8ee8ba6e74b4488576c",
          "message": "test: add regression test for appending hotfix",
          "timestamp": "2023-05-02T18:28:50+09:00",
          "tree_id": "f400e95b2070774b59158a345737e976b2b1d308",
          "url": "https://github.com/planetarium/libplanet/commit/bce0baa3fa24e92c1b95c8ee8ba6e74b4488576c"
        },
        "date": 1683021397729,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11311666.652173912,
            "unit": "ns",
            "range": "± 3129609.4154219856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26414197.086206898,
            "unit": "ns",
            "range": "± 4487552.671440761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64829615.88172043,
            "unit": "ns",
            "range": "± 18719090.47239937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127538858.34946236,
            "unit": "ns",
            "range": "± 32523148.748226643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232535037.75555557,
            "unit": "ns",
            "range": "± 15580870.537638249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83993.73255813954,
            "unit": "ns",
            "range": "± 7477.658138708809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387914.12921348313,
            "unit": "ns",
            "range": "± 24020.82690338363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331932.8645833333,
            "unit": "ns",
            "range": "± 29940.390351890444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330435.88636363635,
            "unit": "ns",
            "range": "± 43890.98762789982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5897458.468085106,
            "unit": "ns",
            "range": "± 432178.21267686423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4330889.943181818,
            "unit": "ns",
            "range": "± 343836.99314369913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26778.47191011236,
            "unit": "ns",
            "range": "± 4591.155801424299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133192.56741573033,
            "unit": "ns",
            "range": "± 17039.248676883508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130870.45833333333,
            "unit": "ns",
            "range": "± 6033.682822844612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 318023.6612903226,
            "unit": "ns",
            "range": "± 64185.26021591385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11128.318181818182,
            "unit": "ns",
            "range": "± 1640.751296551944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24889.957446808512,
            "unit": "ns",
            "range": "± 5004.362677166931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1670260.93814433,
            "unit": "ns",
            "range": "± 178808.53622752317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3356969.136842105,
            "unit": "ns",
            "range": "± 348128.7336394034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3290570.489010989,
            "unit": "ns",
            "range": "± 699398.8238982182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8100129.841176471,
            "unit": "ns",
            "range": "± 1159812.194884037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3634500.244680851,
            "unit": "ns",
            "range": "± 335522.0535378432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4055914.2413793104,
            "unit": "ns",
            "range": "± 681827.3757235374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5082805.416666667,
            "unit": "ns",
            "range": "± 409862.54397797596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4975010.586021505,
            "unit": "ns",
            "range": "± 642070.7979930292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8761788.93814433,
            "unit": "ns",
            "range": "± 589685.0983423415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8912883.928819444,
            "unit": "ns",
            "range": "± 1403442.2882985668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2333968.405964712,
            "unit": "ns",
            "range": "± 259935.16962997123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1524942.0161675347,
            "unit": "ns",
            "range": "± 126040.4213445556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3649595.9651199495,
            "unit": "ns",
            "range": "± 276482.8519909927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1165799.3325506982,
            "unit": "ns",
            "range": "± 75773.49680068383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915276.2409074113,
            "unit": "ns",
            "range": "± 45675.84523069063"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "cb3efb349cce8b07135c0e002b61778997d5e018",
          "message": "test: add regression test for appending hotfix",
          "timestamp": "2023-05-02T18:39:46+09:00",
          "tree_id": "950e8fc19a458392ea3cefb3d852c7ab8f4df365",
          "url": "https://github.com/planetarium/libplanet/commit/cb3efb349cce8b07135c0e002b61778997d5e018"
        },
        "date": 1683021785757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11744743.634408602,
            "unit": "ns",
            "range": "± 2158192.539221716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28768951.29347826,
            "unit": "ns",
            "range": "± 8042693.975083249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 81738918.39473684,
            "unit": "ns",
            "range": "± 18117453.890076607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 170909555.18556702,
            "unit": "ns",
            "range": "± 51583648.34963383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279630284.04347825,
            "unit": "ns",
            "range": "± 42597189.04478349"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74183.35393258427,
            "unit": "ns",
            "range": "± 12559.642528524884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 451898.6842105263,
            "unit": "ns",
            "range": "± 22866.721261962342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374797.92647058825,
            "unit": "ns",
            "range": "± 17866.51122081387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344241.8714285714,
            "unit": "ns",
            "range": "± 16647.576207069495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6689755.833333333,
            "unit": "ns",
            "range": "± 75313.19018222665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4905667.852941177,
            "unit": "ns",
            "range": "± 98867.91903465273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21131.717391304348,
            "unit": "ns",
            "range": "± 1361.8989556529166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112810.95652173914,
            "unit": "ns",
            "range": "± 13255.083079658094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103486.12222222223,
            "unit": "ns",
            "range": "± 11275.595861907861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 262723.9,
            "unit": "ns",
            "range": "± 17954.140209658748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7000.659340659341,
            "unit": "ns",
            "range": "± 801.2062187002825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19747.034090909092,
            "unit": "ns",
            "range": "± 1631.25560164706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2151113.6827956988,
            "unit": "ns",
            "range": "± 382277.02172874997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3992536.8554216865,
            "unit": "ns",
            "range": "± 409543.69742574426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3626208.481012658,
            "unit": "ns",
            "range": "± 738498.8224138982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21037312.612244897,
            "unit": "ns",
            "range": "± 5668859.556963469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4423887.510638298,
            "unit": "ns",
            "range": "± 791693.0399248778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4518303.1630434785,
            "unit": "ns",
            "range": "± 672055.7537139519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5597750.188235294,
            "unit": "ns",
            "range": "± 329878.49440313387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5651868.533333333,
            "unit": "ns",
            "range": "± 548710.2764970516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10265643.883116882,
            "unit": "ns",
            "range": "± 526085.7935372422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7421987.430338542,
            "unit": "ns",
            "range": "± 67935.1079284683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2321434.5682091345,
            "unit": "ns",
            "range": "± 17274.138269753697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1522976.3110064338,
            "unit": "ns",
            "range": "± 29225.996781172238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2992859.4837740385,
            "unit": "ns",
            "range": "± 36206.75634469504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1082502.7145182292,
            "unit": "ns",
            "range": "± 5570.021611924506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902884.5532924107,
            "unit": "ns",
            "range": "± 13675.299997524931"
          }
        ]
      }
    ]
  }
}