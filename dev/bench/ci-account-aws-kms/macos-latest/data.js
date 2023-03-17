window.BENCHMARK_DATA = {
  "lastUpdate": 1679046152662,
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
          "id": "ba8209ccee3401e9c0164d1845253437bf55e4b1",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:12:29+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/ba8209ccee3401e9c0164d1845253437bf55e4b1"
        },
        "date": 1679045579370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8941178.236263737,
            "unit": "ns",
            "range": "± 593794.2119909675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21180611.683333334,
            "unit": "ns",
            "range": "± 944229.311289308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53507672.9,
            "unit": "ns",
            "range": "± 2027239.4339756644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108467346.07142857,
            "unit": "ns",
            "range": "± 1866585.3542151598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 254956378.1954023,
            "unit": "ns",
            "range": "± 60101289.32806211"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66982.71428571429,
            "unit": "ns",
            "range": "± 10213.195600608493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239064.2159090909,
            "unit": "ns",
            "range": "± 26999.33891504381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257499.4111111111,
            "unit": "ns",
            "range": "± 33353.91356377989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234753.64444444445,
            "unit": "ns",
            "range": "± 32113.71856433732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14111266.863157894,
            "unit": "ns",
            "range": "± 1183100.5875025168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10118476.5,
            "unit": "ns",
            "range": "± 166995.92682953033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24450.17021276596,
            "unit": "ns",
            "range": "± 3743.713258245534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61729.34090909091,
            "unit": "ns",
            "range": "± 7004.503961346166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60100.52105263158,
            "unit": "ns",
            "range": "± 6193.481712490668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131317.25789473683,
            "unit": "ns",
            "range": "± 16258.516997951454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8854.721649484536,
            "unit": "ns",
            "range": "± 1081.9067056038539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25011.770833333332,
            "unit": "ns",
            "range": "± 2881.4737730585994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613142.5833333333,
            "unit": "ns",
            "range": "± 178687.7476137555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003876.406976744,
            "unit": "ns",
            "range": "± 153483.31466590244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2479232.811827957,
            "unit": "ns",
            "range": "± 145201.3343235028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6536927.755319149,
            "unit": "ns",
            "range": "± 474154.5912354478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3973163.421686747,
            "unit": "ns",
            "range": "± 1000622.7160625858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6310070.55952381,
            "unit": "ns",
            "range": "± 1820087.2180061014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25838081.2125,
            "unit": "ns",
            "range": "± 1318848.5986589787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7389810.584269663,
            "unit": "ns",
            "range": "± 787792.6272777627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33712192.453608245,
            "unit": "ns",
            "range": "± 3250138.3935035076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7359147.846908244,
            "unit": "ns",
            "range": "± 285801.1145623252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041209.5748697917,
            "unit": "ns",
            "range": "± 32550.25306961857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1304783.7582632212,
            "unit": "ns",
            "range": "± 11728.698364418879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667293.6994140623,
            "unit": "ns",
            "range": "± 119015.31733279472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799658.1345402644,
            "unit": "ns",
            "range": "± 10427.154248960365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727949.9993722098,
            "unit": "ns",
            "range": "± 7709.7330353721445"
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
          "id": "772ba99bb79eaac292c4800f6659083fd1127617",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:18:52+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/772ba99bb79eaac292c4800f6659083fd1127617"
        },
        "date": 1679046000722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8927666.3,
            "unit": "ns",
            "range": "± 315443.8977729882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25196836.715789475,
            "unit": "ns",
            "range": "± 2315396.078894755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53151733.190476194,
            "unit": "ns",
            "range": "± 2414561.862737232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108609353.09375,
            "unit": "ns",
            "range": "± 3372035.2324596616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 228394285.53333333,
            "unit": "ns",
            "range": "± 12702790.918878755"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68857.93406593407,
            "unit": "ns",
            "range": "± 9480.160675856123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221743.86559139786,
            "unit": "ns",
            "range": "± 21743.519000315104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227971.04545454544,
            "unit": "ns",
            "range": "± 20963.12685169388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199667.53260869565,
            "unit": "ns",
            "range": "± 16705.00687952803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12981605.771186441,
            "unit": "ns",
            "range": "± 574790.3333395707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9930053.07142857,
            "unit": "ns",
            "range": "± 141555.31411401546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24318.563829787236,
            "unit": "ns",
            "range": "± 5079.693051344928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61049.536082474224,
            "unit": "ns",
            "range": "± 13279.4896378948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63023.02577319588,
            "unit": "ns",
            "range": "± 7190.327890200811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122986.06989247311,
            "unit": "ns",
            "range": "± 15634.783519585459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7227.202127659574,
            "unit": "ns",
            "range": "± 545.1834026968077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20720.79797979798,
            "unit": "ns",
            "range": "± 3375.1645673552825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1805376.0574712644,
            "unit": "ns",
            "range": "± 371470.9806969921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3109783.1091954024,
            "unit": "ns",
            "range": "± 290273.58568143455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2679573.8,
            "unit": "ns",
            "range": "± 339836.00982762355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6628499.540229885,
            "unit": "ns",
            "range": "± 470046.5706087945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3863916.8913043477,
            "unit": "ns",
            "range": "± 638673.694486076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5346496.013513514,
            "unit": "ns",
            "range": "± 263285.76643354614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26691741.220930234,
            "unit": "ns",
            "range": "± 970722.7971341356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6707522.1630434785,
            "unit": "ns",
            "range": "± 410379.4182893711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30534006.311594203,
            "unit": "ns",
            "range": "± 1457587.5632516928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6977958.927734375,
            "unit": "ns",
            "range": "± 156532.67382320287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957195.2498372395,
            "unit": "ns",
            "range": "± 50336.64188995731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300860.5139723558,
            "unit": "ns",
            "range": "± 17153.96610893069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661429.01046875,
            "unit": "ns",
            "range": "± 133507.92627358143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795778.2751813616,
            "unit": "ns",
            "range": "± 7745.792995673301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729845.0809044471,
            "unit": "ns",
            "range": "± 5331.850426601766"
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
          "id": "24b0a1f5a01c49d4e795562f6de5f00594abeccf",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:20:35+09:00",
          "tree_id": "39bbc6389268a9bc4028075bf612fa30327b7382",
          "url": "https://github.com/planetarium/libplanet/commit/24b0a1f5a01c49d4e795562f6de5f00594abeccf"
        },
        "date": 1679046080543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9148280.4375,
            "unit": "ns",
            "range": "± 178259.85141527475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22786314.277777776,
            "unit": "ns",
            "range": "± 1681702.7719611786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55195054.5,
            "unit": "ns",
            "range": "± 740415.3260983896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112137058.1904762,
            "unit": "ns",
            "range": "± 2629825.4496482387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 228794540.68965518,
            "unit": "ns",
            "range": "± 6701832.01459115"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80352.43181818182,
            "unit": "ns",
            "range": "± 6812.52830477377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230954.93258426967,
            "unit": "ns",
            "range": "± 18332.664686786007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224703.45054945056,
            "unit": "ns",
            "range": "± 21059.888345311138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212306.84705882354,
            "unit": "ns",
            "range": "± 11248.598034872615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13051145.764705881,
            "unit": "ns",
            "range": "± 254349.37630219615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10252287.5,
            "unit": "ns",
            "range": "± 201709.27443259768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24002.164948453606,
            "unit": "ns",
            "range": "± 3015.088444254208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67077.34831460674,
            "unit": "ns",
            "range": "± 8054.382373055627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64232.98611111111,
            "unit": "ns",
            "range": "± 3190.0314625719207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134757.587628866,
            "unit": "ns",
            "range": "± 18616.98843728523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8250.521052631579,
            "unit": "ns",
            "range": "± 798.2512266377469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23180.617021276597,
            "unit": "ns",
            "range": "± 3712.2938358639108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1707249.5157894737,
            "unit": "ns",
            "range": "± 229882.75849977348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3084836.6025641025,
            "unit": "ns",
            "range": "± 159156.14068079475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2696107.989247312,
            "unit": "ns",
            "range": "± 247479.31681370057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6534901.966101695,
            "unit": "ns",
            "range": "± 280516.2414593522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3714122.775280899,
            "unit": "ns",
            "range": "± 336561.65076107095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5525586.608695652,
            "unit": "ns",
            "range": "± 210149.62411399785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25826279.46,
            "unit": "ns",
            "range": "± 1037203.318498905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6981010.607526882,
            "unit": "ns",
            "range": "± 455170.0523693092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30094499.923076924,
            "unit": "ns",
            "range": "± 801729.0206977379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6789722.174107143,
            "unit": "ns",
            "range": "± 88870.81039872972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999417.3784466912,
            "unit": "ns",
            "range": "± 63222.58615924572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315321.0239955357,
            "unit": "ns",
            "range": "± 9840.778164870477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2824715.299579327,
            "unit": "ns",
            "range": "± 31821.194948790522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819150.15859375,
            "unit": "ns",
            "range": "± 14648.687730816697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786503.0143694197,
            "unit": "ns",
            "range": "± 9880.495726114927"
          }
        ]
      }
    ]
  }
}