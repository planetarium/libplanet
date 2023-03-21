window.BENCHMARK_DATA = {
  "lastUpdate": 1679394001407,
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
          "id": "d74378dbe64f8a924cdc17c38fcdfa4b228e074c",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:19:29+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/d74378dbe64f8a924cdc17c38fcdfa4b228e074c"
        },
        "date": 1679046201925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9095530.367346939,
            "unit": "ns",
            "range": "± 589682.6161481378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21847176.20588235,
            "unit": "ns",
            "range": "± 985396.6081799974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57263508.62626263,
            "unit": "ns",
            "range": "± 4058031.336336546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112935911.44285715,
            "unit": "ns",
            "range": "± 3632528.82024308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 273022916.1888889,
            "unit": "ns",
            "range": "± 66052284.61716702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73872.55294117647,
            "unit": "ns",
            "range": "± 8695.316490455518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248928.19791666666,
            "unit": "ns",
            "range": "± 44697.04565313362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234483.14285714287,
            "unit": "ns",
            "range": "± 36015.919660759864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223614.13978494622,
            "unit": "ns",
            "range": "± 29671.255237362013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14431290.84375,
            "unit": "ns",
            "range": "± 1128129.2376848299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11282609.69072165,
            "unit": "ns",
            "range": "± 838887.5450333684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25991.208333333332,
            "unit": "ns",
            "range": "± 5402.1029782594205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67791.13736263737,
            "unit": "ns",
            "range": "± 7990.757176633629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64247.17441860465,
            "unit": "ns",
            "range": "± 8611.660759679777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122781.86559139784,
            "unit": "ns",
            "range": "± 18882.102574859055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9256.122222222222,
            "unit": "ns",
            "range": "± 1409.7411813439478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25800.54761904762,
            "unit": "ns",
            "range": "± 3033.7610079119268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1654041.6489361702,
            "unit": "ns",
            "range": "± 216608.37679166903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3021121.069892473,
            "unit": "ns",
            "range": "± 178121.1227173068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2716432.7978723403,
            "unit": "ns",
            "range": "± 409688.07060994394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6600796.415789474,
            "unit": "ns",
            "range": "± 468047.30890215153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683542.659090909,
            "unit": "ns",
            "range": "± 340694.3748591119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5473182.03,
            "unit": "ns",
            "range": "± 467605.11746297724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26416831.86868687,
            "unit": "ns",
            "range": "± 1750183.1627995903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6742997.056701031,
            "unit": "ns",
            "range": "± 598499.1020773334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32244424.59375,
            "unit": "ns",
            "range": "± 2811610.299174207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7121914.662866709,
            "unit": "ns",
            "range": "± 419473.8581461246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2094810.4665464743,
            "unit": "ns",
            "range": "± 70525.7019008115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373079.4188476563,
            "unit": "ns",
            "range": "± 31142.083935589795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3180160.72332702,
            "unit": "ns",
            "range": "± 341049.47540715226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 964038.3778455011,
            "unit": "ns",
            "range": "± 42108.20834789534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893756.0174875162,
            "unit": "ns",
            "range": "± 55278.63793319473"
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
          "id": "ff2b26f83f662ff9957613d8b22d9daf1033367e",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:28:06+09:00",
          "tree_id": "591cce301b14c3bdda609b103273ba7289081317",
          "url": "https://github.com/planetarium/libplanet/commit/ff2b26f83f662ff9957613d8b22d9daf1033367e"
        },
        "date": 1679046685874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9187226.310526315,
            "unit": "ns",
            "range": "± 642294.7483163073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21536811.96153846,
            "unit": "ns",
            "range": "± 550021.0953276779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58589474.952380955,
            "unit": "ns",
            "range": "± 2665855.9688655618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120076434.05,
            "unit": "ns",
            "range": "± 4230027.20687491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 286972123.9848485,
            "unit": "ns",
            "range": "± 72527585.4744786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72390.8021978022,
            "unit": "ns",
            "range": "± 10333.078253001946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215117.81395348837,
            "unit": "ns",
            "range": "± 12373.59802493303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233620.44086021505,
            "unit": "ns",
            "range": "± 29842.35456617875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222317.9175257732,
            "unit": "ns",
            "range": "± 29758.069865118843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14074322.5625,
            "unit": "ns",
            "range": "± 974304.3441959112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10994342.863636363,
            "unit": "ns",
            "range": "± 730473.8960367239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22140.865168539327,
            "unit": "ns",
            "range": "± 3004.2738201035113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62855.63043478261,
            "unit": "ns",
            "range": "± 8989.276028150007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58662.80588235294,
            "unit": "ns",
            "range": "± 3782.43558791828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126925.17391304347,
            "unit": "ns",
            "range": "± 17160.672809249794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8702.005263157895,
            "unit": "ns",
            "range": "± 984.0943765682644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25224.647727272728,
            "unit": "ns",
            "range": "± 4043.968230203018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704994.8541666667,
            "unit": "ns",
            "range": "± 263660.53674262686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3087688.9725274723,
            "unit": "ns",
            "range": "± 238026.7859228051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2651708.8854166665,
            "unit": "ns",
            "range": "± 319152.2348303349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6786068.005263158,
            "unit": "ns",
            "range": "± 563140.5559136186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3773600.7419354836,
            "unit": "ns",
            "range": "± 467601.2522125184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5400867.117021277,
            "unit": "ns",
            "range": "± 324695.7060664268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26920444.417525772,
            "unit": "ns",
            "range": "± 1774324.23083047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6939016.073684211,
            "unit": "ns",
            "range": "± 581039.521943897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31570732.01369863,
            "unit": "ns",
            "range": "± 1560763.0712090845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7314939.598731884,
            "unit": "ns",
            "range": "± 350193.4253565894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2234968.2493489585,
            "unit": "ns",
            "range": "± 79987.89890473636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399209.8422851562,
            "unit": "ns",
            "range": "± 13817.922473036186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2872588.1247996795,
            "unit": "ns",
            "range": "± 93709.69101698887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857733.8102003528,
            "unit": "ns",
            "range": "± 26173.515360078596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874399.1881510416,
            "unit": "ns",
            "range": "± 9715.301478211963"
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
          "id": "3b8b4780df5ce1d2c244566536d2291bed7a5b90",
          "message": "temp",
          "timestamp": "2023-03-17T18:42:07+09:00",
          "tree_id": "daef535de31db5c777ace12118d58cc4047e4614",
          "url": "https://github.com/planetarium/libplanet/commit/3b8b4780df5ce1d2c244566536d2291bed7a5b90"
        },
        "date": 1679047175022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8732601.384615384,
            "unit": "ns",
            "range": "± 105390.129287597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22581788.933333334,
            "unit": "ns",
            "range": "± 277182.9603373057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56117114.14285714,
            "unit": "ns",
            "range": "± 664109.0519215439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113529905.28571428,
            "unit": "ns",
            "range": "± 1366900.220904861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224259134.92307693,
            "unit": "ns",
            "range": "± 1682802.3528902347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62198.032608695656,
            "unit": "ns",
            "range": "± 4406.907648329269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238794.5294117647,
            "unit": "ns",
            "range": "± 12659.945131330202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218770.83516483515,
            "unit": "ns",
            "range": "± 17438.08813122951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194364.28021978022,
            "unit": "ns",
            "range": "± 16520.98080408478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12239464.046875,
            "unit": "ns",
            "range": "± 540244.6306946459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10259337.256410256,
            "unit": "ns",
            "range": "± 526472.4106406256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19462.670454545456,
            "unit": "ns",
            "range": "± 2086.3227052355537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59324.52173913043,
            "unit": "ns",
            "range": "± 8419.457347863297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46589.48936170213,
            "unit": "ns",
            "range": "± 5490.101024874358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106105.95054945054,
            "unit": "ns",
            "range": "± 9614.593919042189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5836.9838709677415,
            "unit": "ns",
            "range": "± 711.8079188404574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21001.2,
            "unit": "ns",
            "range": "± 1936.8623485687804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1702521.0416666667,
            "unit": "ns",
            "range": "± 171883.0052963454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3252590.065217391,
            "unit": "ns",
            "range": "± 188800.9726966297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2666862.3157894737,
            "unit": "ns",
            "range": "± 164916.8916876634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7170517.2727272725,
            "unit": "ns",
            "range": "± 534457.0125729329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783341.023809524,
            "unit": "ns",
            "range": "± 137992.84836337875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6046620.3125,
            "unit": "ns",
            "range": "± 184559.81126600763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26550934.653846152,
            "unit": "ns",
            "range": "± 722873.0687037631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7333877.571428572,
            "unit": "ns",
            "range": "± 174431.0468622405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32132940.37037037,
            "unit": "ns",
            "range": "± 895766.7477055254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7258488.408482143,
            "unit": "ns",
            "range": "± 45363.75436796599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2223548.8171875,
            "unit": "ns",
            "range": "± 11105.781549790232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1497179.5381510416,
            "unit": "ns",
            "range": "± 13316.024634489328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2825759.958984375,
            "unit": "ns",
            "range": "± 32740.903480178473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981907.363141741,
            "unit": "ns",
            "range": "± 7244.7031785450745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881129.3473557692,
            "unit": "ns",
            "range": "± 2968.4112693233646"
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
          "id": "ff2b26f83f662ff9957613d8b22d9daf1033367e",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:28:06+09:00",
          "tree_id": "591cce301b14c3bdda609b103273ba7289081317",
          "url": "https://github.com/planetarium/libplanet/commit/ff2b26f83f662ff9957613d8b22d9daf1033367e"
        },
        "date": 1679047810677,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8921846.879518073,
            "unit": "ns",
            "range": "± 555015.9007452695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21806148.126984127,
            "unit": "ns",
            "range": "± 998626.3727350279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54193313.1875,
            "unit": "ns",
            "range": "± 1675913.6555777066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 105186763.48387097,
            "unit": "ns",
            "range": "± 4590038.473734001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206130705.71052632,
            "unit": "ns",
            "range": "± 4065278.469534126"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81846.72222222222,
            "unit": "ns",
            "range": "± 10158.54671192573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224872.85555555555,
            "unit": "ns",
            "range": "± 18699.745403879504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208186.65217391305,
            "unit": "ns",
            "range": "± 14927.635770672572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214267.36021505378,
            "unit": "ns",
            "range": "± 17157.898597256193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12543637.95,
            "unit": "ns",
            "range": "± 275302.3156840446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9983336.703703703,
            "unit": "ns",
            "range": "± 273252.3046920633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19941.916666666668,
            "unit": "ns",
            "range": "± 3194.0144503073134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66738.51063829787,
            "unit": "ns",
            "range": "± 10518.48093282933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63719.63333333333,
            "unit": "ns",
            "range": "± 6900.363664818079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121804.91397849462,
            "unit": "ns",
            "range": "± 11290.288505436793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8062.978947368421,
            "unit": "ns",
            "range": "± 1228.1404640968685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20146.908163265307,
            "unit": "ns",
            "range": "± 5760.228100950883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1669129.1649484537,
            "unit": "ns",
            "range": "± 165835.40127523537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3075876.580645161,
            "unit": "ns",
            "range": "± 211106.35213448398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713881.4831460672,
            "unit": "ns",
            "range": "± 253539.8839542317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6799733.764044944,
            "unit": "ns",
            "range": "± 504958.5351419736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3426506.706896552,
            "unit": "ns",
            "range": "± 396277.6015469382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5294948.681318682,
            "unit": "ns",
            "range": "± 335622.88521460374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26240468.679012347,
            "unit": "ns",
            "range": "± 1503360.5402503405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6247920.833333333,
            "unit": "ns",
            "range": "± 268651.4208871966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31305130.319148935,
            "unit": "ns",
            "range": "± 3118322.8843935416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6624009.217633928,
            "unit": "ns",
            "range": "± 91470.9993403829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2111143.69671875,
            "unit": "ns",
            "range": "± 54579.318353827664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320807.2852783203,
            "unit": "ns",
            "range": "± 25646.2200690411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682633.1430165814,
            "unit": "ns",
            "range": "± 106896.83537775831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886474.8731595553,
            "unit": "ns",
            "range": "± 12136.486659289909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796360.5235026042,
            "unit": "ns",
            "range": "± 12355.306031468874"
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
          "id": "2ada47c0396ce39e1705113d0887010903d3d203",
          "message": "test ci",
          "timestamp": "2023-03-21T18:29:57+09:00",
          "tree_id": "ab605486f45e0e1dc8138c2a7ca2b75c7ff8b507",
          "url": "https://github.com/planetarium/libplanet/commit/2ada47c0396ce39e1705113d0887010903d3d203"
        },
        "date": 1679392145681,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9482482.5,
            "unit": "ns",
            "range": "± 381613.9580311496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22712248.37837838,
            "unit": "ns",
            "range": "± 1138056.7911392455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56325725.96774194,
            "unit": "ns",
            "range": "± 2539263.110412661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114931062.92727272,
            "unit": "ns",
            "range": "± 4885123.69897194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 235160623.97252747,
            "unit": "ns",
            "range": "± 12697984.202735154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70361.24468085106,
            "unit": "ns",
            "range": "± 11549.905286290586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235377.9010989011,
            "unit": "ns",
            "range": "± 26659.19727142542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225960.78651685393,
            "unit": "ns",
            "range": "± 29603.791949785416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214152.70430107528,
            "unit": "ns",
            "range": "± 14670.407650125162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12661737.083333334,
            "unit": "ns",
            "range": "± 99289.22874150718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9979116.714285715,
            "unit": "ns",
            "range": "± 168274.356172124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22707.81914893617,
            "unit": "ns",
            "range": "± 3483.644013400694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64431.58241758242,
            "unit": "ns",
            "range": "± 6010.8233306741195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59434.01136363636,
            "unit": "ns",
            "range": "± 3537.653277599865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122284.31052631579,
            "unit": "ns",
            "range": "± 11664.140953215703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8140.260416666667,
            "unit": "ns",
            "range": "± 1354.6352994910446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18795.65263157895,
            "unit": "ns",
            "range": "± 3183.494349244008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629207.2210526315,
            "unit": "ns",
            "range": "± 184554.26274861454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856450.5306122447,
            "unit": "ns",
            "range": "± 112189.14505406744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2743502.2282608696,
            "unit": "ns",
            "range": "± 398925.70968633937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6334545.861111111,
            "unit": "ns",
            "range": "± 310764.9906771546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640678.447368421,
            "unit": "ns",
            "range": "± 304556.59379858995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5804679.60989011,
            "unit": "ns",
            "range": "± 588572.0495333968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26675588.852459017,
            "unit": "ns",
            "range": "± 1199052.7964974523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6909871.237373738,
            "unit": "ns",
            "range": "± 417491.6186829894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 44567955.91489362,
            "unit": "ns",
            "range": "± 16517852.33945694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7352144.3203125,
            "unit": "ns",
            "range": "± 290104.7525136002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988957.7821514423,
            "unit": "ns",
            "range": "± 15844.66927856597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295586.9908854167,
            "unit": "ns",
            "range": "± 12641.801702422397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2861457.978081597,
            "unit": "ns",
            "range": "± 54343.73423287556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 790140.2623948317,
            "unit": "ns",
            "range": "± 5063.238400831472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734889.3744741586,
            "unit": "ns",
            "range": "± 7481.0395091415385"
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
          "id": "7daa389141d95d02db84565d9eccfe2f99414fb5",
          "message": "test ci",
          "timestamp": "2023-03-21T18:45:22+09:00",
          "tree_id": "7a6e1cd2f8ef001dc05c6a624c4718f5c0753ccb",
          "url": "https://github.com/planetarium/libplanet/commit/7daa389141d95d02db84565d9eccfe2f99414fb5"
        },
        "date": 1679392787358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7724532.166666667,
            "unit": "ns",
            "range": "± 73521.74891929269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19159280.970588237,
            "unit": "ns",
            "range": "± 618073.5703296898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47157372.6,
            "unit": "ns",
            "range": "± 927037.5994564281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 95378091.07142857,
            "unit": "ns",
            "range": "± 1191991.6975882433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 192028893.7857143,
            "unit": "ns",
            "range": "± 2857613.0167562845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56880.12903225807,
            "unit": "ns",
            "range": "± 6878.734105648596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193203.11797752808,
            "unit": "ns",
            "range": "± 10780.440707707658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190284.88461538462,
            "unit": "ns",
            "range": "± 7863.558171952455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162494.08333333334,
            "unit": "ns",
            "range": "± 7235.551045023541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11660277.806451613,
            "unit": "ns",
            "range": "± 349645.475348237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9567894.390243903,
            "unit": "ns",
            "range": "± 338956.1303640102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18489.222222222223,
            "unit": "ns",
            "range": "± 3284.9413930358637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49998.46875,
            "unit": "ns",
            "range": "± 5262.394885967345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49541.385416666664,
            "unit": "ns",
            "range": "± 4894.646756502759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107002.63043478261,
            "unit": "ns",
            "range": "± 14596.778827797418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5876.43956043956,
            "unit": "ns",
            "range": "± 787.5216146422226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16879.19540229885,
            "unit": "ns",
            "range": "± 1732.7423474854284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480601.194736842,
            "unit": "ns",
            "range": "± 181859.13751740946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2798643.5470588235,
            "unit": "ns",
            "range": "± 149852.12354310733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2388486.974226804,
            "unit": "ns",
            "range": "± 194440.4800101163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5938690,
            "unit": "ns",
            "range": "± 246595.09026462425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147981.2,
            "unit": "ns",
            "range": "± 152524.8165870686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4929034.333333333,
            "unit": "ns",
            "range": "± 211324.88196498327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23521120.61904762,
            "unit": "ns",
            "range": "± 826710.4311700755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6115741.230769231,
            "unit": "ns",
            "range": "± 339401.68407331407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26746025.52631579,
            "unit": "ns",
            "range": "± 913293.0850291378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6226892.861177885,
            "unit": "ns",
            "range": "± 38765.42743916911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881437.9194010417,
            "unit": "ns",
            "range": "± 12131.76685186331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1306597.5104166667,
            "unit": "ns",
            "range": "± 12504.505961940187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2732742.2584134615,
            "unit": "ns",
            "range": "± 16076.375498254198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848535.4598307292,
            "unit": "ns",
            "range": "± 4953.771475113332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798196.262890625,
            "unit": "ns",
            "range": "± 6519.065363237907"
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
          "id": "36114eb20e55ce984f8d63c68bb9bf45452461bf",
          "message": "test ci",
          "timestamp": "2023-03-21T18:41:41+09:00",
          "tree_id": "8acf145f75464e31f405cb4f1ea43bbf522c2fb8",
          "url": "https://github.com/planetarium/libplanet/commit/36114eb20e55ce984f8d63c68bb9bf45452461bf"
        },
        "date": 1679392951360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8922531.76923077,
            "unit": "ns",
            "range": "± 458325.22062463616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22117905.99122807,
            "unit": "ns",
            "range": "± 961122.9331822365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57828635.79787234,
            "unit": "ns",
            "range": "± 4322697.232195579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 118198290.53571428,
            "unit": "ns",
            "range": "± 5051223.854440517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224081296.63333333,
            "unit": "ns",
            "range": "± 3936714.329161346"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70452.48863636363,
            "unit": "ns",
            "range": "± 9619.224381467502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226274.2584269663,
            "unit": "ns",
            "range": "± 21790.455268997568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269072.79347826086,
            "unit": "ns",
            "range": "± 53628.64266877674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228318.54545454544,
            "unit": "ns",
            "range": "± 27250.584583799846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14415672.3172043,
            "unit": "ns",
            "range": "± 909119.7530918353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11311068.93877551,
            "unit": "ns",
            "range": "± 994518.6894634817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22443.55681818182,
            "unit": "ns",
            "range": "± 4926.651599741992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63247.23333333333,
            "unit": "ns",
            "range": "± 9608.425631950278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63275.666666666664,
            "unit": "ns",
            "range": "± 6869.165117809466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128514.02150537634,
            "unit": "ns",
            "range": "± 17786.434977727375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8059.772727272727,
            "unit": "ns",
            "range": "± 1081.5680052831844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21113.57608695652,
            "unit": "ns",
            "range": "± 3239.347540578604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576745.88,
            "unit": "ns",
            "range": "± 231090.43351833607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2725123.8076923075,
            "unit": "ns",
            "range": "± 110872.95019437982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2417371.0833333335,
            "unit": "ns",
            "range": "± 188882.29959553713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6248334.816901408,
            "unit": "ns",
            "range": "± 305807.38570989936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3582979.8020833335,
            "unit": "ns",
            "range": "± 240712.20136715876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5840199.734042553,
            "unit": "ns",
            "range": "± 561643.7039655797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26669881.63207547,
            "unit": "ns",
            "range": "± 1102544.9322732147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6855811.635416667,
            "unit": "ns",
            "range": "± 488105.4344582814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32274549.18367347,
            "unit": "ns",
            "range": "± 2654026.227780103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7330085.18647204,
            "unit": "ns",
            "range": "± 372181.0096581783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2262381.345336914,
            "unit": "ns",
            "range": "± 69941.44836852372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410395.802438447,
            "unit": "ns",
            "range": "± 44683.390282890425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2944882.1026387117,
            "unit": "ns",
            "range": "± 204262.44539401223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1044349.3687133789,
            "unit": "ns",
            "range": "± 60185.749292665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891600.4613891601,
            "unit": "ns",
            "range": "± 46211.42087566969"
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
          "id": "9ffc80d0c8c3075341b92853c99c145e4b755654",
          "message": "test ci",
          "timestamp": "2023-03-21T18:51:23+09:00",
          "tree_id": "d4c31b3090a321c1e37417ae44c7d679d741d644",
          "url": "https://github.com/planetarium/libplanet/commit/9ffc80d0c8c3075341b92853c99c145e4b755654"
        },
        "date": 1679393717267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9624498.833333334,
            "unit": "ns",
            "range": "± 732347.4677752885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22927769.23404255,
            "unit": "ns",
            "range": "± 1547962.9980426438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60934497.49484536,
            "unit": "ns",
            "range": "± 4619473.8732754635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 168379190.5927835,
            "unit": "ns",
            "range": "± 44554534.263803184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243401964.3,
            "unit": "ns",
            "range": "± 9694573.61624302"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93121.58695652174,
            "unit": "ns",
            "range": "± 15746.274356597327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251527.57142857142,
            "unit": "ns",
            "range": "± 25579.79217365964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263315.0408163265,
            "unit": "ns",
            "range": "± 40527.900624498725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235164.97311827957,
            "unit": "ns",
            "range": "± 23963.18898199423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14148889.02631579,
            "unit": "ns",
            "range": "± 830856.7287437484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11389389.12886598,
            "unit": "ns",
            "range": "± 714396.4729459481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27391.535294117646,
            "unit": "ns",
            "range": "± 2687.3603593713383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69744.7191011236,
            "unit": "ns",
            "range": "± 10916.81231881771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69845.88888888889,
            "unit": "ns",
            "range": "± 2610.5768277791353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160379.97872340426,
            "unit": "ns",
            "range": "± 30320.303592306755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11560.111111111111,
            "unit": "ns",
            "range": "± 876.151001485044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29425.656626506025,
            "unit": "ns",
            "range": "± 2387.7620427358215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1939168.9375,
            "unit": "ns",
            "range": "± 364918.35113353387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3481984.3191489363,
            "unit": "ns",
            "range": "± 513293.5222638625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3012968.8298969073,
            "unit": "ns",
            "range": "± 503556.1616767481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7944030.172043011,
            "unit": "ns",
            "range": "± 1316558.0037479121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3919218.565217391,
            "unit": "ns",
            "range": "± 489035.50432091666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6117767.6875,
            "unit": "ns",
            "range": "± 560912.5377779228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28999667.1875,
            "unit": "ns",
            "range": "± 2080815.1680743028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7027724.489361702,
            "unit": "ns",
            "range": "± 527943.2135933402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33243782.268817205,
            "unit": "ns",
            "range": "± 2768054.9535360103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7761167.880608974,
            "unit": "ns",
            "range": "± 262514.01381262275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198645.0784288193,
            "unit": "ns",
            "range": "± 82170.22617826486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1437561.231272978,
            "unit": "ns",
            "range": "± 23554.54448666633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3547366.3327452955,
            "unit": "ns",
            "range": "± 198295.71064082292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025811.7498276654,
            "unit": "ns",
            "range": "± 32547.995584705317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846332.2212357954,
            "unit": "ns",
            "range": "± 26691.294569794154"
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
          "id": "f8a66a961bfa3ad6ea5c0a3ccf11b86c5bedd763",
          "message": "temp: fix typo in ci",
          "timestamp": "2023-03-21T18:57:59+09:00",
          "tree_id": "3f014ec90c663aea112c40f47eb0aa1618c109e0",
          "url": "https://github.com/planetarium/libplanet/commit/f8a66a961bfa3ad6ea5c0a3ccf11b86c5bedd763"
        },
        "date": 1679393946643,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8553704.61904762,
            "unit": "ns",
            "range": "± 309311.77980992023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21850741.185714286,
            "unit": "ns",
            "range": "± 1016157.0614223622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57846454.92553192,
            "unit": "ns",
            "range": "± 3790393.3733508065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 159014032.98989898,
            "unit": "ns",
            "range": "± 56103151.87015887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214753952.13157895,
            "unit": "ns",
            "range": "± 4607112.769657192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71312.16304347826,
            "unit": "ns",
            "range": "± 9824.614864556317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237119.6894736842,
            "unit": "ns",
            "range": "± 32474.615579692767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251713.82978723405,
            "unit": "ns",
            "range": "± 40644.76478883269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220884.18604651163,
            "unit": "ns",
            "range": "± 14037.762038211433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14537001.1010101,
            "unit": "ns",
            "range": "± 1036601.4310147199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10546731.408163264,
            "unit": "ns",
            "range": "± 814269.5191620989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19817.393617021276,
            "unit": "ns",
            "range": "± 2994.44905255473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55529.663043478264,
            "unit": "ns",
            "range": "± 6335.377679015046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65538.03333333334,
            "unit": "ns",
            "range": "± 8246.935019969267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134793.60674157302,
            "unit": "ns",
            "range": "± 20241.386664577953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8381.770833333334,
            "unit": "ns",
            "range": "± 1451.3629491232434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19916.408163265307,
            "unit": "ns",
            "range": "± 4793.571521817322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666775.2127659575,
            "unit": "ns",
            "range": "± 229319.70359556668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978789.5263157897,
            "unit": "ns",
            "range": "± 214522.7675098916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2729797.1404494382,
            "unit": "ns",
            "range": "± 386734.1787094512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6240302.915584415,
            "unit": "ns",
            "range": "± 319199.5457187998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316970.7210526317,
            "unit": "ns",
            "range": "± 195398.65895232113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5288979.904040404,
            "unit": "ns",
            "range": "± 348348.799290541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26650062.62087912,
            "unit": "ns",
            "range": "± 1864050.873923443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7075908.5,
            "unit": "ns",
            "range": "± 647405.1542863714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31142407.525773197,
            "unit": "ns",
            "range": "± 2186100.8409340363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7055787.073180379,
            "unit": "ns",
            "range": "± 356085.8118708356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2045743.6476384944,
            "unit": "ns",
            "range": "± 75507.95536227014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1388361.2208806819,
            "unit": "ns",
            "range": "± 32807.65609267863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2947335.8014125633,
            "unit": "ns",
            "range": "± 257993.94823657803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 916142.0692210478,
            "unit": "ns",
            "range": "± 18216.284579604755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756776.6142578125,
            "unit": "ns",
            "range": "± 8159.522106048833"
          }
        ]
      }
    ]
  }
}