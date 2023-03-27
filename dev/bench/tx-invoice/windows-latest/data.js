window.BENCHMARK_DATA = {
  "lastUpdate": 1679909148188,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "12163fe108b4505f0d99df93d9f203433580d4da",
          "message": "WIP",
          "timestamp": "2023-03-24T18:58:26+09:00",
          "tree_id": "826e80a5e0b2b83e09fc95e946af26b77acc2356",
          "url": "https://github.com/planetarium/libplanet/commit/12163fe108b4505f0d99df93d9f203433580d4da"
        },
        "date": 1679653200619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624297.9166666667,
            "unit": "ns",
            "range": "± 124857.43109994373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093237.7551020407,
            "unit": "ns",
            "range": "± 204139.61137170545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2614056.989247312,
            "unit": "ns",
            "range": "± 161130.03147461606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6646065.151515151,
            "unit": "ns",
            "range": "± 312842.7811057444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56148.958333333336,
            "unit": "ns",
            "range": "± 3475.14467072324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8814190.909090908,
            "unit": "ns",
            "range": "± 213436.10153212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23438046.666666668,
            "unit": "ns",
            "range": "± 240067.79657501122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58844150,
            "unit": "ns",
            "range": "± 254258.42622751425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117854333.33333333,
            "unit": "ns",
            "range": "± 755889.0183719023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233975173.33333334,
            "unit": "ns",
            "range": "± 1160500.6514841937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5752736.688701923,
            "unit": "ns",
            "range": "± 48680.619226282775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867865.9635416667,
            "unit": "ns",
            "range": "± 26994.17248315036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405430.3645833333,
            "unit": "ns",
            "range": "± 25364.591791965475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3178666.796875,
            "unit": "ns",
            "range": "± 48638.365466423325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989929.5572916666,
            "unit": "ns",
            "range": "± 3299.706936093053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913108.7740384615,
            "unit": "ns",
            "range": "± 7152.666747225644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3802640,
            "unit": "ns",
            "range": "± 100159.8306042231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4019980,
            "unit": "ns",
            "range": "± 119949.97192457314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4843694.444444444,
            "unit": "ns",
            "range": "± 160756.6127401375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5202347.959183673,
            "unit": "ns",
            "range": "± 194808.15187618553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8903103.57142857,
            "unit": "ns",
            "range": "± 253216.5190944857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322940,
            "unit": "ns",
            "range": "± 9208.816989430705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306221.875,
            "unit": "ns",
            "range": "± 8714.938393911767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258169.23076923078,
            "unit": "ns",
            "range": "± 13240.348679956776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5076342.857142857,
            "unit": "ns",
            "range": "± 45007.56712932947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4536258.333333333,
            "unit": "ns",
            "range": "± 60220.34477020556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25604.123711340206,
            "unit": "ns",
            "range": "± 1983.2064486254112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113497.5,
            "unit": "ns",
            "range": "± 5946.150227806691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105504,
            "unit": "ns",
            "range": "± 9755.153209530547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 221130.61224489796,
            "unit": "ns",
            "range": "± 25793.531548130137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8476.842105263158,
            "unit": "ns",
            "range": "± 987.6312335722456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24855.78947368421,
            "unit": "ns",
            "range": "± 3125.6902485171577"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "93bbbf10f6e654bff312e1d71d40c8ee1c36d884",
          "message": "WIP",
          "timestamp": "2023-03-27T13:14:26+09:00",
          "tree_id": "ba5ebada552297745c2adbf08bfb456eb2452192",
          "url": "https://github.com/planetarium/libplanet/commit/93bbbf10f6e654bff312e1d71d40c8ee1c36d884"
        },
        "date": 1679891535850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365918.3673469387,
            "unit": "ns",
            "range": "± 91307.33120252495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2454591.6666666665,
            "unit": "ns",
            "range": "± 56720.99463059563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2176230.85106383,
            "unit": "ns",
            "range": "± 143242.47059466547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5137777.142857143,
            "unit": "ns",
            "range": "± 168139.88588937116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44910.14492753623,
            "unit": "ns",
            "range": "± 2046.0251944524498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7150885.714285715,
            "unit": "ns",
            "range": "± 112057.02433715035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18914685.714285713,
            "unit": "ns",
            "range": "± 230981.3740647396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49084135.71428572,
            "unit": "ns",
            "range": "± 732668.0144482933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95563813.33333333,
            "unit": "ns",
            "range": "± 1576954.8661295047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190746370,
            "unit": "ns",
            "range": "± 2712674.5108313835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4718243.136160715,
            "unit": "ns",
            "range": "± 19228.88789537762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1496835.630580357,
            "unit": "ns",
            "range": "± 4720.948245249723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157941.85546875,
            "unit": "ns",
            "range": "± 4632.967155417048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624236.6861979165,
            "unit": "ns",
            "range": "± 6011.681979724139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825494.9620863971,
            "unit": "ns",
            "range": "± 15996.31806656458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755715.1157924107,
            "unit": "ns",
            "range": "± 1361.0520826739396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3021312.1951219514,
            "unit": "ns",
            "range": "± 102182.01944354484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3249366.6666666665,
            "unit": "ns",
            "range": "± 83817.95318046318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3901900,
            "unit": "ns",
            "range": "± 78196.85095961345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4323934.146341464,
            "unit": "ns",
            "range": "± 146320.2115392062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7259740.909090909,
            "unit": "ns",
            "range": "± 270998.7937141108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265169.23076923075,
            "unit": "ns",
            "range": "± 6326.627489003551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255088.23529411765,
            "unit": "ns",
            "range": "± 4980.321570057145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210530.76923076922,
            "unit": "ns",
            "range": "± 2623.4152725612644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4171653.3333333335,
            "unit": "ns",
            "range": "± 50488.950229115435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3671015.3846153845,
            "unit": "ns",
            "range": "± 25746.904220179113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19615.05376344086,
            "unit": "ns",
            "range": "± 1750.7728874984934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86879.56989247311,
            "unit": "ns",
            "range": "± 6025.9684255039565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76288.23529411765,
            "unit": "ns",
            "range": "± 3961.8541764439233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 171314.2105263158,
            "unit": "ns",
            "range": "± 16481.071772300424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6069.072164948454,
            "unit": "ns",
            "range": "± 787.8452714977136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20155.670103092783,
            "unit": "ns",
            "range": "± 1713.547068714785"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "9f69d9779586c45eab916afe354cddb92110b490",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-27T15:49:56+09:00",
          "tree_id": "59d858b6e6543dafab428524506d74ffd69733e1",
          "url": "https://github.com/planetarium/libplanet/commit/9f69d9779586c45eab916afe354cddb92110b490"
        },
        "date": 1679901016182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1531895.918367347,
            "unit": "ns",
            "range": "± 137120.90677920717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2708965.9574468085,
            "unit": "ns",
            "range": "± 105468.08970653624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2384511.7021276597,
            "unit": "ns",
            "range": "± 155706.10367549112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5773018.181818182,
            "unit": "ns",
            "range": "± 177919.4594025367"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58530.52631578947,
            "unit": "ns",
            "range": "± 3678.432647381407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7692080,
            "unit": "ns",
            "range": "± 107672.49416633758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20478207.14285714,
            "unit": "ns",
            "range": "± 213350.35996899815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51342953.333333336,
            "unit": "ns",
            "range": "± 313934.6835311599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104101206.66666667,
            "unit": "ns",
            "range": "± 558704.0111680228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205939285.7142857,
            "unit": "ns",
            "range": "± 601489.9124509236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4953342.96875,
            "unit": "ns",
            "range": "± 12426.708072817122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542640.8333333333,
            "unit": "ns",
            "range": "± 4706.6176078037615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175556.9661458333,
            "unit": "ns",
            "range": "± 3669.3262651058308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656919.168526786,
            "unit": "ns",
            "range": "± 8037.66133989747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841339.013671875,
            "unit": "ns",
            "range": "± 1257.5363328418714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755822.3502604166,
            "unit": "ns",
            "range": "± 1508.022954439889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3496038.4615384615,
            "unit": "ns",
            "range": "± 42760.38935084545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3651493.3333333335,
            "unit": "ns",
            "range": "± 55414.81837232795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225693.333333333,
            "unit": "ns",
            "range": "± 74111.76373430552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4835089.655172414,
            "unit": "ns",
            "range": "± 141189.42277468336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7880375.757575758,
            "unit": "ns",
            "range": "± 244050.24204851632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307100,
            "unit": "ns",
            "range": "± 10742.530019483873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294522.9166666667,
            "unit": "ns",
            "range": "± 11642.680827196615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259232,
            "unit": "ns",
            "range": "± 6728.776510877244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4434878.571428572,
            "unit": "ns",
            "range": "± 50174.19162771341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3902278.5714285714,
            "unit": "ns",
            "range": "± 63198.37118849758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30928.282828282827,
            "unit": "ns",
            "range": "± 3329.522868435779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119379.16666666667,
            "unit": "ns",
            "range": "± 7612.661429164424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113865.65656565657,
            "unit": "ns",
            "range": "± 7213.156370107668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 249377.08333333334,
            "unit": "ns",
            "range": "± 23325.113997201734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11133.333333333334,
            "unit": "ns",
            "range": "± 1338.551193733588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30745.833333333332,
            "unit": "ns",
            "range": "± 2960.722410659678"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "208861e57356cf7ef97bee1a0e0fbd0b798b4879",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-27T18:08:33+09:00",
          "tree_id": "5a4efceefc64fc75df57dbae61720ea87d3d8fd5",
          "url": "https://github.com/planetarium/libplanet/commit/208861e57356cf7ef97bee1a0e0fbd0b798b4879"
        },
        "date": 1679909089560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422162,
            "unit": "ns",
            "range": "± 115690.72824569911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2505075.6756756757,
            "unit": "ns",
            "range": "± 76193.53794925935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2505059.090909091,
            "unit": "ns",
            "range": "± 58443.41715418434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5267987.931034483,
            "unit": "ns",
            "range": "± 149951.40501840945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46283.333333333336,
            "unit": "ns",
            "range": "± 5144.003492400114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7353100,
            "unit": "ns",
            "range": "± 136813.19137178743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18002386.666666668,
            "unit": "ns",
            "range": "± 89321.67283529366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46324126.666666664,
            "unit": "ns",
            "range": "± 249167.63853927358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93294766.66666667,
            "unit": "ns",
            "range": "± 337484.65291384875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184122350,
            "unit": "ns",
            "range": "± 594238.1350551697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4853364.661458333,
            "unit": "ns",
            "range": "± 15162.22682360713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523666.81640625,
            "unit": "ns",
            "range": "± 2524.6975630478582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145695.4659598214,
            "unit": "ns",
            "range": "± 1407.3791419047595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591152.6227678573,
            "unit": "ns",
            "range": "± 6098.239428969027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826546.1295572916,
            "unit": "ns",
            "range": "± 715.822030062843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768575.3627232143,
            "unit": "ns",
            "range": "± 1174.7335941582062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3025455.5555555555,
            "unit": "ns",
            "range": "± 72453.22275219706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3302728,
            "unit": "ns",
            "range": "± 85979.61735202129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3988955.5555555555,
            "unit": "ns",
            "range": "± 68643.28271169662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4409420,
            "unit": "ns",
            "range": "± 130785.65090543618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7265522.413793104,
            "unit": "ns",
            "range": "± 178408.18346171337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267681.9672131148,
            "unit": "ns",
            "range": "± 11955.507910536762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249492.1875,
            "unit": "ns",
            "range": "± 11484.431210044926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233282.6530612245,
            "unit": "ns",
            "range": "± 13622.190625034737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4279670,
            "unit": "ns",
            "range": "± 47676.21749138363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788413.3333333335,
            "unit": "ns",
            "range": "± 70195.76571139832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22989.473684210527,
            "unit": "ns",
            "range": "± 2827.542113018983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90221.42857142857,
            "unit": "ns",
            "range": "± 7887.47212323729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77223,
            "unit": "ns",
            "range": "± 8873.565953283534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175062.1052631579,
            "unit": "ns",
            "range": "± 17786.57860577576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5873.684210526316,
            "unit": "ns",
            "range": "± 1012.3924189040647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20509.278350515466,
            "unit": "ns",
            "range": "± 2488.2257096434364"
          }
        ]
      }
    ]
  }
}