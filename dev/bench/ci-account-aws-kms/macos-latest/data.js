window.BENCHMARK_DATA = {
  "lastUpdate": 1679045544531,
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
          "id": "3cb319c420cf611c832339023617574c5baa3b58",
          "message": "@planetarium/account-aws-kms: WIP need tests, created IAM policy\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T16:57:35+09:00",
          "tree_id": "8b36d094389e4ba162c0254bc3ee3474e56a7137",
          "url": "https://github.com/planetarium/libplanet/commit/3cb319c420cf611c832339023617574c5baa3b58"
        },
        "date": 1678868369445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8819825,
            "unit": "ns",
            "range": "± 372771.91732980736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23471895.70652174,
            "unit": "ns",
            "range": "± 2490437.76065584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58368775.00515464,
            "unit": "ns",
            "range": "± 5748890.179114705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108699951.44444445,
            "unit": "ns",
            "range": "± 2139625.482531965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 259829587.65555555,
            "unit": "ns",
            "range": "± 48715157.15636112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72574.51612903226,
            "unit": "ns",
            "range": "± 9180.342927919062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273383.625,
            "unit": "ns",
            "range": "± 51523.17931413824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267455.09574468085,
            "unit": "ns",
            "range": "± 48325.11763984349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271989.3404255319,
            "unit": "ns",
            "range": "± 53055.25868948968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14664737.617021276,
            "unit": "ns",
            "range": "± 1270359.661839966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11799289.659090908,
            "unit": "ns",
            "range": "± 1042928.7336074188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30171.83870967742,
            "unit": "ns",
            "range": "± 4390.310960786072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72174.79310344828,
            "unit": "ns",
            "range": "± 9607.159718859308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67470.8,
            "unit": "ns",
            "range": "± 6140.774473801756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146124.94565217392,
            "unit": "ns",
            "range": "± 19756.744485550837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10526.108695652174,
            "unit": "ns",
            "range": "± 1488.433337856364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29006.531914893618,
            "unit": "ns",
            "range": "± 5205.747416102784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654241.3958333333,
            "unit": "ns",
            "range": "± 183076.19943932345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2939185.257575758,
            "unit": "ns",
            "range": "± 137849.71188623228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2526398.35483871,
            "unit": "ns",
            "range": "± 264496.5420696807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6318463.355932203,
            "unit": "ns",
            "range": "± 278847.2022690342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3474126.4,
            "unit": "ns",
            "range": "± 273034.0704707303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5558895.466666667,
            "unit": "ns",
            "range": "± 246072.48913969568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27984425.173913043,
            "unit": "ns",
            "range": "± 2013493.7915491331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7159770.8,
            "unit": "ns",
            "range": "± 676271.3057775637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33432042.659574468,
            "unit": "ns",
            "range": "± 2719359.554384373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7676048.419058866,
            "unit": "ns",
            "range": "± 282108.952900239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2316714.377092634,
            "unit": "ns",
            "range": "± 66297.10006321598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401854.735514323,
            "unit": "ns",
            "range": "± 12926.275387339922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3276764.53870081,
            "unit": "ns",
            "range": "± 136856.98208292405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 957027.9140218099,
            "unit": "ns",
            "range": "± 23922.48283360511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812826.8040865385,
            "unit": "ns",
            "range": "± 8980.169825716885"
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
          "id": "3f84081bf69e8a67023e5b51bf141d01b8f9702a",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:08:54+09:00",
          "tree_id": "61ebbe0df335198e2ab126d292f64ee8d1ba4081",
          "url": "https://github.com/planetarium/libplanet/commit/3f84081bf69e8a67023e5b51bf141d01b8f9702a"
        },
        "date": 1679045492854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8982224.62745098,
            "unit": "ns",
            "range": "± 363172.27217963437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21786298.70588235,
            "unit": "ns",
            "range": "± 690479.8538251905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59802475.37362637,
            "unit": "ns",
            "range": "± 3514369.2190590412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 117005479.38235295,
            "unit": "ns",
            "range": "± 7741664.122712512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 231158446.83870968,
            "unit": "ns",
            "range": "± 19356957.21544607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78462.25806451614,
            "unit": "ns",
            "range": "± 11968.631265414664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236633.94382022473,
            "unit": "ns",
            "range": "± 24442.155559494655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233673.64772727274,
            "unit": "ns",
            "range": "± 19144.274184684713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232254.76966292135,
            "unit": "ns",
            "range": "± 18273.40789530715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14437001.621052632,
            "unit": "ns",
            "range": "± 1093544.4293058587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11874203.758241758,
            "unit": "ns",
            "range": "± 1206722.4967028697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31681.05294117647,
            "unit": "ns",
            "range": "± 4202.22456819821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78553.17777777778,
            "unit": "ns",
            "range": "± 13297.39769217159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65153.322222222225,
            "unit": "ns",
            "range": "± 7080.912083108651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133876.04347826086,
            "unit": "ns",
            "range": "± 22246.404106965165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9182.552631578947,
            "unit": "ns",
            "range": "± 1148.7451559726642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25821.26842105263,
            "unit": "ns",
            "range": "± 5701.307353716808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679395.706521739,
            "unit": "ns",
            "range": "± 196117.61826250306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3323228.3350515463,
            "unit": "ns",
            "range": "± 299622.58547430276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2850929.139784946,
            "unit": "ns",
            "range": "± 352583.5000808348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7128088.541666667,
            "unit": "ns",
            "range": "± 575653.8077099706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3690139.198924731,
            "unit": "ns",
            "range": "± 395544.350290968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5430242.333333333,
            "unit": "ns",
            "range": "± 422642.6807461908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 39020215.5927835,
            "unit": "ns",
            "range": "± 11019201.711647311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7148178.045454546,
            "unit": "ns",
            "range": "± 818961.1957436305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32959125.60526316,
            "unit": "ns",
            "range": "± 2678360.0073805307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6721797.8531901045,
            "unit": "ns",
            "range": "± 245015.37892725808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2136995.8373001455,
            "unit": "ns",
            "range": "± 78601.63952320477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1556374.432244318,
            "unit": "ns",
            "range": "± 65775.96163227169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633398.8192708334,
            "unit": "ns",
            "range": "± 48570.194908513535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997748.9459960938,
            "unit": "ns",
            "range": "± 22733.979943432587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 887070.1431487008,
            "unit": "ns",
            "range": "± 48644.47467868347"
          }
        ]
      }
    ]
  }
}