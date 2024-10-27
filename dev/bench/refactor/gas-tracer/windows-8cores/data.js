window.BENCHMARK_DATA = {
  "lastUpdate": 1729941245489,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "a50194312c8ae642100951cc0400ea684485dfb4",
          "message": "refactor: Refactor GasTracer",
          "timestamp": "2024-10-25T15:01:52+09:00",
          "tree_id": "c0767e988107193ca2cff5208a057ccbec773e0f",
          "url": "https://github.com/planetarium/libplanet/commit/a50194312c8ae642100951cc0400ea684485dfb4"
        },
        "date": 1729838300255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 954467.3913043478,
            "unit": "ns",
            "range": "± 89079.4029161015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1753709.2307692308,
            "unit": "ns",
            "range": "± 81691.81362573327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1472943.3333333333,
            "unit": "ns",
            "range": "± 81702.90802520607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6608316.666666667,
            "unit": "ns",
            "range": "± 207136.3294638095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29030.434782608696,
            "unit": "ns",
            "range": "± 1124.844594741354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10045220,
            "unit": "ns",
            "range": "± 70994.8609810195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24308886.666666668,
            "unit": "ns",
            "range": "± 196001.5118989307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62049426.666666664,
            "unit": "ns",
            "range": "± 282455.820734264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121093946.66666667,
            "unit": "ns",
            "range": "± 660109.1098844046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243008813.33333334,
            "unit": "ns",
            "range": "± 1436248.1320970904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3380910.6770833335,
            "unit": "ns",
            "range": "± 3600.0285515838787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038409.8106971154,
            "unit": "ns",
            "range": "± 1443.6427774923677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737748.7932477678,
            "unit": "ns",
            "range": "± 2896.6899196025483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936658.1580528845,
            "unit": "ns",
            "range": "± 5489.364211873139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617807.4609375,
            "unit": "ns",
            "range": "± 791.8439447875076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570462.8255208334,
            "unit": "ns",
            "range": "± 1980.4590894876053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2091635.294117647,
            "unit": "ns",
            "range": "± 28269.41680457148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2217342.8571428573,
            "unit": "ns",
            "range": "± 25582.07648652934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2702680,
            "unit": "ns",
            "range": "± 61663.75374817681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2240981.8181818184,
            "unit": "ns",
            "range": "± 48745.46754376868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2921033.3333333335,
            "unit": "ns",
            "range": "± 41905.80707571048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89531.50684931508,
            "unit": "ns",
            "range": "± 4396.806818347732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161221.568627451,
            "unit": "ns",
            "range": "± 6525.344856036046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144186.95652173914,
            "unit": "ns",
            "range": "± 3413.64965287435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2602856.6666666665,
            "unit": "ns",
            "range": "± 33419.5936255251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2487133.3333333335,
            "unit": "ns",
            "range": "± 50604.66149186142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10189.36170212766,
            "unit": "ns",
            "range": "± 1400.4966926217226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51024.7311827957,
            "unit": "ns",
            "range": "± 4052.2043360743387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43745,
            "unit": "ns",
            "range": "± 1531.8750032692046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50192.92929292929,
            "unit": "ns",
            "range": "± 10833.717704041761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2083.157894736842,
            "unit": "ns",
            "range": "± 321.45038053244997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9707.777777777777,
            "unit": "ns",
            "range": "± 945.150576883795"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "680df7e0f9b05df884b769d4084e1af840ce65b5",
          "message": "test: Remove test code for GasTracer",
          "timestamp": "2024-10-25T15:55:40+09:00",
          "tree_id": "5a70baf4dd1ff61cc4e5cca3cd162c6123893c7c",
          "url": "https://github.com/planetarium/libplanet/commit/680df7e0f9b05df884b769d4084e1af840ce65b5"
        },
        "date": 1729839882150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966716.6666666666,
            "unit": "ns",
            "range": "± 96926.11691567386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1737511.111111111,
            "unit": "ns",
            "range": "± 69560.02814636628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439951.6853932585,
            "unit": "ns",
            "range": "± 79701.84227419025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726493.75,
            "unit": "ns",
            "range": "± 262307.0836449507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32917.17171717172,
            "unit": "ns",
            "range": "± 3946.789974506545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9978428.57142857,
            "unit": "ns",
            "range": "± 76658.78873364678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24369838.46153846,
            "unit": "ns",
            "range": "± 156850.5899386501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60609178.571428575,
            "unit": "ns",
            "range": "± 370813.9180413632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123706906.66666667,
            "unit": "ns",
            "range": "± 826313.1397674739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247084600,
            "unit": "ns",
            "range": "± 2385968.5173351066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285818.5396634615,
            "unit": "ns",
            "range": "± 5435.321140658017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061780.9765625,
            "unit": "ns",
            "range": "± 2619.7573116974754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732238.5286458334,
            "unit": "ns",
            "range": "± 1275.409913548038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982446.7075892857,
            "unit": "ns",
            "range": "± 4739.770272829559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624576.0044642857,
            "unit": "ns",
            "range": "± 1720.9594407453708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570834.0104166666,
            "unit": "ns",
            "range": "± 1808.073121628372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2129566.6666666665,
            "unit": "ns",
            "range": "± 49954.01218454162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249936.3636363638,
            "unit": "ns",
            "range": "± 54466.822976880205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2650615.789473684,
            "unit": "ns",
            "range": "± 58192.470524381366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2250604.1666666665,
            "unit": "ns",
            "range": "± 57453.939806381975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2848900,
            "unit": "ns",
            "range": "± 32329.656148290018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94524.21052631579,
            "unit": "ns",
            "range": "± 11455.814428076526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160566.12903225806,
            "unit": "ns",
            "range": "± 7054.470586923321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149844.44444444444,
            "unit": "ns",
            "range": "± 3153.9372633960093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2599916.6666666665,
            "unit": "ns",
            "range": "± 47206.66821339464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506680,
            "unit": "ns",
            "range": "± 42100.071258847056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10714.432989690722,
            "unit": "ns",
            "range": "± 1711.6627935724794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50446.739130434784,
            "unit": "ns",
            "range": "± 3978.2223399584254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46688.541666666664,
            "unit": "ns",
            "range": "± 3726.233311667756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50460,
            "unit": "ns",
            "range": "± 8726.267511419246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2281.9148936170213,
            "unit": "ns",
            "range": "± 290.3326849458014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9860.869565217392,
            "unit": "ns",
            "range": "± 912.1832910255386"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "efd4aa4a416ab1b5d56f368569b20f7f8ef1bed1",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T16:07:57+09:00",
          "tree_id": "508f630c27766e3fe2c0aaaff482bb711bac9420",
          "url": "https://github.com/planetarium/libplanet/commit/efd4aa4a416ab1b5d56f368569b20f7f8ef1bed1"
        },
        "date": 1729840653720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987767.3684210526,
            "unit": "ns",
            "range": "± 85094.23617516737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1875733.8709677418,
            "unit": "ns",
            "range": "± 85205.70469539476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546709.1954022988,
            "unit": "ns",
            "range": "± 109445.51754096744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6714505.714285715,
            "unit": "ns",
            "range": "± 217338.12765157528"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32757.291666666668,
            "unit": "ns",
            "range": "± 5378.529339036573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10306550,
            "unit": "ns",
            "range": "± 86708.24421809391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25853340,
            "unit": "ns",
            "range": "± 424027.7295514663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63409692.85714286,
            "unit": "ns",
            "range": "± 1039525.6355031038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127194360,
            "unit": "ns",
            "range": "± 1922668.7794387704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254335253.33333334,
            "unit": "ns",
            "range": "± 1973882.693672791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3366439.620535714,
            "unit": "ns",
            "range": "± 5014.9781400004695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1106155.9505208333,
            "unit": "ns",
            "range": "± 1689.7464744976098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736401.2469951923,
            "unit": "ns",
            "range": "± 915.4707822405214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936979.2271205357,
            "unit": "ns",
            "range": "± 2758.883008853028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628779.5768229166,
            "unit": "ns",
            "range": "± 2225.0855675455277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557222.67578125,
            "unit": "ns",
            "range": "± 992.6938439578724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141598.076923077,
            "unit": "ns",
            "range": "± 80585.40346198698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2322278.5714285714,
            "unit": "ns",
            "range": "± 38146.30093108996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2767838.4615384615,
            "unit": "ns",
            "range": "± 30492.062859634432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2336175,
            "unit": "ns",
            "range": "± 45739.627814747015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3023657.1428571427,
            "unit": "ns",
            "range": "± 49685.297535677404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105973.5632183908,
            "unit": "ns",
            "range": "± 8107.052051750636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178053.33333333334,
            "unit": "ns",
            "range": "± 7897.510156161033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149685.84905660377,
            "unit": "ns",
            "range": "± 6145.232496685247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2733553.846153846,
            "unit": "ns",
            "range": "± 26859.4680818706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2673542.8571428573,
            "unit": "ns",
            "range": "± 40743.299860424704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14085.555555555555,
            "unit": "ns",
            "range": "± 2517.8268278579344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59886.95652173913,
            "unit": "ns",
            "range": "± 5962.616458490005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48156.043956043955,
            "unit": "ns",
            "range": "± 3051.528170576863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69560.60606060606,
            "unit": "ns",
            "range": "± 13299.024194537795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3226.530612244898,
            "unit": "ns",
            "range": "± 661.2314379376916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12948.421052631578,
            "unit": "ns",
            "range": "± 1923.3649125389898"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "7b8b6ad6d76eb3652d03a0d895253c358a074612",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T16:11:34+09:00",
          "tree_id": "071485a386c218869c7e5b9a66d87d7e907bbd39",
          "url": "https://github.com/planetarium/libplanet/commit/7b8b6ad6d76eb3652d03a0d895253c358a074612"
        },
        "date": 1729840939788,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1064691.4893617022,
            "unit": "ns",
            "range": "± 123757.37506823364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1883666.6666666667,
            "unit": "ns",
            "range": "± 81449.57978786046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1580216.2790697673,
            "unit": "ns",
            "range": "± 91089.0783928698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6698551.515151516,
            "unit": "ns",
            "range": "± 203205.34275888905"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29861.627906976744,
            "unit": "ns",
            "range": "± 2174.459695142744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10157528.57142857,
            "unit": "ns",
            "range": "± 158798.08383154825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25519384.615384616,
            "unit": "ns",
            "range": "± 280132.1380056022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61725928.571428575,
            "unit": "ns",
            "range": "± 781351.7088782957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129912426.66666667,
            "unit": "ns",
            "range": "± 1435629.5500415075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250502366.66666666,
            "unit": "ns",
            "range": "± 3867426.913275002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3341850.360576923,
            "unit": "ns",
            "range": "± 5571.216604027652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081158.4375,
            "unit": "ns",
            "range": "± 2684.780783790749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750360.5989583334,
            "unit": "ns",
            "range": "± 1297.217041117563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2046635.6026785714,
            "unit": "ns",
            "range": "± 6363.39498133688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630854.2643229166,
            "unit": "ns",
            "range": "± 1115.6647800142664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572847.8724888393,
            "unit": "ns",
            "range": "± 962.725845637224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2101480.64516129,
            "unit": "ns",
            "range": "± 49399.253836165306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2187405.263157895,
            "unit": "ns",
            "range": "± 47750.09567976698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2738326.6666666665,
            "unit": "ns",
            "range": "± 50903.683092492945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2265327.272727273,
            "unit": "ns",
            "range": "± 73385.15268260652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3007113.3333333335,
            "unit": "ns",
            "range": "± 53589.656073679354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105815.90909090909,
            "unit": "ns",
            "range": "± 7490.191077832737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176651.51515151514,
            "unit": "ns",
            "range": "± 8318.30682520358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160235.10638297873,
            "unit": "ns",
            "range": "± 12623.588667600667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2710715.3846153845,
            "unit": "ns",
            "range": "± 27535.729702632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2550587.5,
            "unit": "ns",
            "range": "± 47713.09917971514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12500,
            "unit": "ns",
            "range": "± 1648.3563485136924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57408.602150537634,
            "unit": "ns",
            "range": "± 5071.953056504627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47736.95652173913,
            "unit": "ns",
            "range": "± 4218.919120762973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63141.20879120879,
            "unit": "ns",
            "range": "± 13620.382180570805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3123.469387755102,
            "unit": "ns",
            "range": "± 710.8222363084521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11807.608695652174,
            "unit": "ns",
            "range": "± 1880.9182755994461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "129b0cbc78441199ea4837efb2d0d8d17f2c2f2a",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T19:56:42+09:00",
          "tree_id": "ead3a5e3d24d257b130cc5f02db9d2b6c262792c",
          "url": "https://github.com/planetarium/libplanet/commit/129b0cbc78441199ea4837efb2d0d8d17f2c2f2a"
        },
        "date": 1729854392506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1083549.4736842106,
            "unit": "ns",
            "range": "± 118122.53723532836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1908865.5172413792,
            "unit": "ns",
            "range": "± 83460.0788101169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619521.978021978,
            "unit": "ns",
            "range": "± 121515.49677322624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726590.322580645,
            "unit": "ns",
            "range": "± 140764.45184500882"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30906.81818181818,
            "unit": "ns",
            "range": "± 2440.7835304312102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10854686.486486487,
            "unit": "ns",
            "range": "± 367140.83443865564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26164645.833333332,
            "unit": "ns",
            "range": "± 654488.0554788549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64462673.333333336,
            "unit": "ns",
            "range": "± 502395.4496305911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132400892.3076923,
            "unit": "ns",
            "range": "± 639475.9644447664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264898826.66666666,
            "unit": "ns",
            "range": "± 1766776.50477063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3458049.2447916665,
            "unit": "ns",
            "range": "± 38566.88266629449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1085980.1302083333,
            "unit": "ns",
            "range": "± 6449.740839328522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756364.8228236607,
            "unit": "ns",
            "range": "± 1359.3181881844648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970170.619419643,
            "unit": "ns",
            "range": "± 3034.162072732609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628933.88671875,
            "unit": "ns",
            "range": "± 1739.9425654962251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559461.85546875,
            "unit": "ns",
            "range": "± 903.6538113560815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2211000,
            "unit": "ns",
            "range": "± 17007.981319704835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320595.4545454546,
            "unit": "ns",
            "range": "± 55056.31512821972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2783000,
            "unit": "ns",
            "range": "± 57309.46949778585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2380365.789473684,
            "unit": "ns",
            "range": "± 81647.24147974492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3069886.3636363638,
            "unit": "ns",
            "range": "± 71194.62456604127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108078.94736842105,
            "unit": "ns",
            "range": "± 5503.255177061995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181254.2372881356,
            "unit": "ns",
            "range": "± 7292.54040296867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168762.7659574468,
            "unit": "ns",
            "range": "± 9638.832571555777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2737950,
            "unit": "ns",
            "range": "± 36993.918419113164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2617486.6666666665,
            "unit": "ns",
            "range": "± 37283.5633387971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13521.978021978022,
            "unit": "ns",
            "range": "± 1533.5363777014948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61184.21052631579,
            "unit": "ns",
            "range": "± 6446.033182120179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50205.208333333336,
            "unit": "ns",
            "range": "± 3282.052303751633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72796.9387755102,
            "unit": "ns",
            "range": "± 14319.998661533318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3220.408163265306,
            "unit": "ns",
            "range": "± 659.8905225780595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12780.434782608696,
            "unit": "ns",
            "range": "± 1642.8158037134663"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "7d041d1c7292aeae445b6efa205ac6c0a2d5641d",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T21:34:03+09:00",
          "tree_id": "d5cab7dceccae85dcc2ab6f675b5d666734f3e90",
          "url": "https://github.com/planetarium/libplanet/commit/7d041d1c7292aeae445b6efa205ac6c0a2d5641d"
        },
        "date": 1729860162578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980101.0101010101,
            "unit": "ns",
            "range": "± 99046.2080319075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1777295.8333333333,
            "unit": "ns",
            "range": "± 68164.92502413613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1488598.888888889,
            "unit": "ns",
            "range": "± 114869.66380064368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6649552.380952381,
            "unit": "ns",
            "range": "± 214045.66356680478"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28531.11111111111,
            "unit": "ns",
            "range": "± 948.6407074963587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9906246.666666666,
            "unit": "ns",
            "range": "± 157472.81337545524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25479421.42857143,
            "unit": "ns",
            "range": "± 278839.4028512068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61366200,
            "unit": "ns",
            "range": "± 268792.61522593955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124316733.33333333,
            "unit": "ns",
            "range": "± 1422145.309868493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252158814.2857143,
            "unit": "ns",
            "range": "± 2394669.473533357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3292529.8978365385,
            "unit": "ns",
            "range": "± 8246.251917707339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1045145.8723958334,
            "unit": "ns",
            "range": "± 2389.4488246301757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735677.0247395834,
            "unit": "ns",
            "range": "± 2566.4960332722003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942410.239955357,
            "unit": "ns",
            "range": "± 6535.450022939671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622989.0973772322,
            "unit": "ns",
            "range": "± 966.2995854396596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561891.4778645834,
            "unit": "ns",
            "range": "± 915.0381345244506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177164.285714286,
            "unit": "ns",
            "range": "± 37052.26261424753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290250,
            "unit": "ns",
            "range": "± 35047.69826744909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2744531.8181818184,
            "unit": "ns",
            "range": "± 67133.13273505498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299500,
            "unit": "ns",
            "range": "± 41523.968981782076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2993564.705882353,
            "unit": "ns",
            "range": "± 58623.768016655056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94001.08695652174,
            "unit": "ns",
            "range": "± 6912.458804045793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166077.08333333334,
            "unit": "ns",
            "range": "± 6466.35283383386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146900,
            "unit": "ns",
            "range": "± 4327.6725846579475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2623428.5714285714,
            "unit": "ns",
            "range": "± 46174.72549702136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519650,
            "unit": "ns",
            "range": "± 41632.28486231741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10396.315789473685,
            "unit": "ns",
            "range": "± 1301.7018750683856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51550,
            "unit": "ns",
            "range": "± 4143.404662569443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44041.666666666664,
            "unit": "ns",
            "range": "± 1691.7614304589913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53575.77319587629,
            "unit": "ns",
            "range": "± 10696.27347832057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2219.7916666666665,
            "unit": "ns",
            "range": "± 436.6426436407856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10736.734693877552,
            "unit": "ns",
            "range": "± 1575.7595291907555"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "336d46c51893945fc54ad099441eb62ed2c4fe31",
          "message": "chore: Changes",
          "timestamp": "2024-10-26T19:56:29+09:00",
          "tree_id": "85d47dd28947a3eeaa724f61af2a44a9ca4b3e2e",
          "url": "https://github.com/planetarium/libplanet/commit/336d46c51893945fc54ad099441eb62ed2c4fe31"
        },
        "date": 1729940741984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058880.808080808,
            "unit": "ns",
            "range": "± 150412.36968561588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1845334.328358209,
            "unit": "ns",
            "range": "± 87036.766094528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1505801.1235955057,
            "unit": "ns",
            "range": "± 82568.76816324629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6494782.142857143,
            "unit": "ns",
            "range": "± 163378.72170619163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28651.35135135135,
            "unit": "ns",
            "range": "± 962.2374451770731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10044133.333333334,
            "unit": "ns",
            "range": "± 85198.68934829143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25184493.333333332,
            "unit": "ns",
            "range": "± 397090.0284150519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61430084.615384616,
            "unit": "ns",
            "range": "± 402439.97243099054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123416040,
            "unit": "ns",
            "range": "± 1871921.9091618112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258864338.46153846,
            "unit": "ns",
            "range": "± 1927626.3484479478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3410932.645089286,
            "unit": "ns",
            "range": "± 5141.08513217337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068104.7135416667,
            "unit": "ns",
            "range": "± 1917.0141632165605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749728.6690848215,
            "unit": "ns",
            "range": "± 1873.297101629011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983786.953125,
            "unit": "ns",
            "range": "± 2675.4856857420805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621203.6458333334,
            "unit": "ns",
            "range": "± 1093.1337852948614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581363.7565104166,
            "unit": "ns",
            "range": "± 847.6980091261772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126089.534883721,
            "unit": "ns",
            "range": "± 48708.849003102994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255382.6086956523,
            "unit": "ns",
            "range": "± 48839.027354006306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2756125.806451613,
            "unit": "ns",
            "range": "± 81588.42224949131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2329893.1818181816,
            "unit": "ns",
            "range": "± 86906.596205692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2949707.1428571427,
            "unit": "ns",
            "range": "± 41863.173908225464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99084.78260869565,
            "unit": "ns",
            "range": "± 8325.27509736028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170061.70212765958,
            "unit": "ns",
            "range": "± 6584.453138016437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145652.9411764706,
            "unit": "ns",
            "range": "± 4043.868182226372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2677046.6666666665,
            "unit": "ns",
            "range": "± 47028.591101077865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2546168.75,
            "unit": "ns",
            "range": "± 47214.37237042693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11774.468085106382,
            "unit": "ns",
            "range": "± 1783.3721935397887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53027.17391304348,
            "unit": "ns",
            "range": "± 4347.820048968574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43874.35897435898,
            "unit": "ns",
            "range": "± 1319.6327137977585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54709.638554216865,
            "unit": "ns",
            "range": "± 6263.358688665825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2735.0515463917527,
            "unit": "ns",
            "range": "± 513.3714617428192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12164.835164835165,
            "unit": "ns",
            "range": "± 1347.7861375335008"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "07a95f05fa22a7ce85f26ccdda61eb3346256d29",
          "message": "chore: Changes",
          "timestamp": "2024-10-26T20:00:29+09:00",
          "tree_id": "72a5522b0786da16239a860f0faef029c5bedd63",
          "url": "https://github.com/planetarium/libplanet/commit/07a95f05fa22a7ce85f26ccdda61eb3346256d29"
        },
        "date": 1729941054999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034589.898989899,
            "unit": "ns",
            "range": "± 138713.14733603026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1825727.5862068965,
            "unit": "ns",
            "range": "± 79451.50301229983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524482.9787234042,
            "unit": "ns",
            "range": "± 121992.1808161454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6701183.720930233,
            "unit": "ns",
            "range": "± 201300.07679868967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28724.69135802469,
            "unit": "ns",
            "range": "± 1521.391703687575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10417920,
            "unit": "ns",
            "range": "± 193965.51681751505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24192821.42857143,
            "unit": "ns",
            "range": "± 328245.94713901164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65463480,
            "unit": "ns",
            "range": "± 782001.4972583401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126600873.68421052,
            "unit": "ns",
            "range": "± 2778861.7577550435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251268728.57142857,
            "unit": "ns",
            "range": "± 3151227.2916653063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3352719.9739583335,
            "unit": "ns",
            "range": "± 12657.066093916514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061551.1588541667,
            "unit": "ns",
            "range": "± 4307.173011606147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720543.2965959822,
            "unit": "ns",
            "range": "± 1943.5572672239582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982606.280048077,
            "unit": "ns",
            "range": "± 4332.06608986902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620554.2252604166,
            "unit": "ns",
            "range": "± 1773.5737650531264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564313.4905133928,
            "unit": "ns",
            "range": "± 943.5231918946319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2136683.3333333335,
            "unit": "ns",
            "range": "± 62287.49297900177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255700,
            "unit": "ns",
            "range": "± 49635.46343864668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2660064.285714286,
            "unit": "ns",
            "range": "± 41733.91181766209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2258817.3913043477,
            "unit": "ns",
            "range": "± 66338.5502281804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2957240,
            "unit": "ns",
            "range": "± 46987.71571987117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98324.41860465116,
            "unit": "ns",
            "range": "± 7017.472916128068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169621.05263157896,
            "unit": "ns",
            "range": "± 7373.401445206984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148058.33333333334,
            "unit": "ns",
            "range": "± 4908.382043577526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2666995,
            "unit": "ns",
            "range": "± 58315.877363129664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2533189.4736842103,
            "unit": "ns",
            "range": "± 49640.56243231428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11577.777777777777,
            "unit": "ns",
            "range": "± 1781.2398016441518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54095.91836734694,
            "unit": "ns",
            "range": "± 5808.8258189869375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44046.93877551021,
            "unit": "ns",
            "range": "± 1765.4203985661516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59650,
            "unit": "ns",
            "range": "± 10525.747879417055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2544.8979591836733,
            "unit": "ns",
            "range": "± 557.816518069198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10227.777777777777,
            "unit": "ns",
            "range": "± 1110.1956278444325"
          }
        ]
      }
    ]
  }
}